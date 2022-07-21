import { ProfileItemsType } from "../../redux/profile-reducer";
import { MyPostsContainer } from "./MyPosts/MyPostContainer";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export type ProfilePropsType = {
  profileData: ProfileItemsType[]
  userId?: number
  pathname?: string
  search?: string
  hash?: string
  state?: null
  key?: string
  getUserProFileTC: (userId: number) => void
}

export const Profile: React.FC<ProfilePropsType> = ({
  profileData, ...props
}) => {
  console.log(props.userId);
  return (
    <div className={s.Profile}>
      <div className={s.imgPack}>
        <ProfileInfo profile={profileData} />
      </div>
      <MyPostsContainer />
    </div>
  );
};