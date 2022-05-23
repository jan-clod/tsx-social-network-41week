import { MyPostsContainer } from "./MyPosts/MyPostContainer";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export const Profile = () => {
  return (
    <div className={s.Profile}>
      <div className={s.imgPack}>
        <ProfileInfo />
      </div>
      <MyPostsContainer/>
    </div>
  );
};