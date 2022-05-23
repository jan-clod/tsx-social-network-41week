import { Button, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
/* ------------------UI---------------------- */
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

/* ------------------/UI---------------------- */

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
  const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let text = e.currentTarget.value
    props.updateNewPostChange(text)
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


  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={s.MyPost}>

      <div className={s.blockInput}>
        <div className={s.postsBlock}>My Post</div>
        <div>
          <TextField
            onKeyPress={onKeyPressHandler}
            value={props.newPostText}
            onChange={onPostChangeHandler}

            label="добавить пост"
            id="fullWidth"
            fullWidth
            focused />
        </div>
        <div>
          <Button
            onClick={addPostHandler}
            disabled={disabled}

            variant="contained"
            endIcon={<SendIcon />}>
            Add Post
          </Button>
        </div>
      </div>

      <div className={s.publishedPosts}>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Все записи " {...a11yProps(0)} />
              <Tab label="Мои записи" {...a11yProps(1)} />
              <Tab label="Архив записей" {...a11yProps(2)} />
            </Tabs>
          </Box>
{/*           <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel> */}
        </Box>

        {postsElements}

      </div>
    </div>
  );
};

export default MyPosts;
