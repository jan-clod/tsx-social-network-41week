import { ProfileItemsType } from "../../redux/profile-reducer";
import { MyPostsContainer } from "./MyPosts/MyPostContainer";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export type ProfilePropsType = {
  profileData: ProfileItemsType[]
  userId?: number
  status:string
  getUserProFileTC: (userId: number) => void
  getStatusTC:(userId: number) => void
  updateStatusTC:(status: string) => void
  updateStatus: (status: string) => void
  getStatus:(userId: number)=>void
}

export const Profile: React.FC<ProfilePropsType> = ({
  profileData, ...props
}) => {
  return (
    <div className={s.Profile}>
      <div className={s.imgPack}>
        <ProfileInfo profile={profileData} status={props.status}/>
      </div>
      <MyPostsContainer />
    </div>
  );
};