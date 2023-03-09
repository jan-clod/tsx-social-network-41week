import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Checkbox } from "@mui/material";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import React from "react";
import s from './Post.module.css';


type PostType = {
  message: string
  LikesCount: number
  like: number
}


const Post = (props: PostType) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <div className={s.Post}>
      <div className={s.img_container}>
        <img src="https://sun2.beltelecom-by-minsk.userapi.com/impf/c848620/v848620654/8881a/IrzF3m8iyrk.jpg?size=1080x607&quality=96&sign=5e380dd07ab2c15c9bc0f9adb561052b&type=album" />

      </div>

      <div className={s.name}>
        Timofeev Yan
      </div>

      <div className={s.messagePost}>
        {props.message}
      </div>

      <div className={s.likes}>
        <span>{props.like}</span>
        <Checkbox
          {...label}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />} />
        <Checkbox
          {...label}
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
        />
      </div>
    </div>

  )
}

export default Post;

