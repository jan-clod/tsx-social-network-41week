import { Box, CircularProgress, LinearProgress } from '@mui/material';
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
     {/*  <img src='https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/c3opGqEc6rlIs1s1heXXe6z7s3RnR_8TNCap2uGTlwJwc21_SRc6__84sSbCWToYpTxqxJJZ.jpg?size=200x200&quality=96&crop=236,0,607,607&ava=1' /> */} 
      <img src={props.profile[0].photos.large ? props.profile[0].photos.large : '' } />
     
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
