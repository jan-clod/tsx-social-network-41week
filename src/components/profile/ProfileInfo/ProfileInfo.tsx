import { Box, CircularProgress } from '@mui/material';
import { ProfileItemsType, updateStatusTC } from '../../../redux/profile-reducer';
import s from './ProfileInfo.module.css';
import { ProfileStatus } from './ProfileStatus';


type ProfileInfoType = {
  profile: ProfileItemsType[]
  status: string
}

const ProfileInfo = (props: ProfileInfoType) => {
  /* if (!props.profile[0].photos.small) {
    return <Box  className={s.preloader}>
      <CircularProgress /></Box>
  } */
  console.log(props.profile);
  return (
    <div className={s.ProfileInfoBlock}>
      <div className={s.imgPack}>
        <img alt="description of " src={props.profile[0].photos.large ? props.profile[0].photos.large : ''} />
      </div>
      <div>
        <div className={s.nameBlock}>
          <h2>
            My Name Neimovich
            {props.profile[0].name}
          </h2>
        </div>
        <div className={s.infoBlock}>
          <ProfileStatus status={props.status} />
          Dата рождения: 07.07.97 {<br />}
          Город: Пинск`

        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;
