import { ActionTypes } from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";



type PropssType = {
  postsData: Array<PostsData>
  newPostText: string 
  dispatch:(action:ActionTypes)=>void
}
type PostsData = {
  id: string
  message: string
  LikesCount: number
}

export const Profile = (props: PropssType) => {
  return (
    <div className={s.qwe}>
      <div className={s.imgPack}>
        <ProfileInfo />
      </div>
      <MyPosts
        postsData={props.postsData}
        newPostText={props.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};
