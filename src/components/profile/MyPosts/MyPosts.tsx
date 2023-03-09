import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import m from "./m.png"
/* ------------------MUI---------------------- */
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

/* ------------------/MUI---------------------- */



type MyPostsType = {
  postsData: Array<PostsData>
  newPostText?: string
  updateNewPostChange: (text: string) => void
  addPost: () => void
}
type PostsData = {
  id: string
  message: string
  LikesCount: number
}


const MyPosts = (props: MyPostsType) => {


  const [disabled, SetDisabled] = useState(false)
  const addPostHandler = () => {
    props.addPost()
  }
  const onPostChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let text = e.currentTarget.value
    if (text) {
      props.updateNewPostChange(text)
    }
  }
  const onKeyPressHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      props.addPost()
    }
  }

  let postsElements =
    props.postsData.map((p) => (
      <Post
        key={p.id}
        like={1}
        message={p.message}
        LikesCount={p.LikesCount}
      />
    ));

  return (
    <div className={s.postBlock}>

      <div className={s.postBlock_addContainer}>
        <img src={m} alt="" />
        <input
          type="text"
          className={s.postBlock_addContainer}
          onKeyPress={onKeyPressHandler}
          value={props.newPostText}
          placeholder='что нового?'
          onChange={onPostChangeHandler}
        />

        <button
          onClick={addPostHandler}
          disabled={disabled}
        >
          Add Post

        </button>
      </div>
      <div>
      </div>

      <div className={s.publishedPosts}>
        <h2>Моя стена</h2>

        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
