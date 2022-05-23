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
      
      <img src="https://zastavok.net/ts/anime/163639429499.jpg" />

      <div className={s.name}>
        Japonezi Bat'ckovna
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

