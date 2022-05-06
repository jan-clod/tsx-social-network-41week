import React from "react";
import s from './Post.module.css';

type PostType = {
  message: string 
  LikesCount: number
  like:number
}

const Post = (props:PostType) => {

  return (
    <div className={s.item}>
      <img src="https://zastavok.net/ts/anime/163639429499.jpg"/>

      {props.message}
      
      <div>
        <span>{props.like + 'props'} Like</span>
      </div>
    </div>

  )
}

export default Post;