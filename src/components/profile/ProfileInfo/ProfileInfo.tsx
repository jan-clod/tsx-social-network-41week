import { Box, CircularProgress } from '@mui/material';
import {  ProfileItemsType } from '../../../redux/profile-reducer';
import s from './ProfileInfo.module.css';


type ProfileInfoType = {
  profile: ProfileItemsType[]
}

const ProfileInfo = (props: ProfileInfoType) => {
  if (!props.profile[0].photos.small) {
    return <Box  className={s.preloader}>
      <CircularProgress /></Box>
  }
  console.log(props.profile);
  
debugger
  return <div className={s.ProfileInfoBlock}>
    <div className={s.imgPack}>
      <img alt="description of " src={props.profile[0].photos.large ? props.profile[0].photos.large : '' } />
     </div>
    <div className={s.nameBlock}>
      <h2>
        My Name Neimovich
        {props.profile[0].name}
      </h2>
    </div>
    <div className={s.infoBlock}>
      Dата рождения: 07.07.97 {<br />}
      Город: Пинск`
    </div>
  </div>
}

export default ProfileInfo;
