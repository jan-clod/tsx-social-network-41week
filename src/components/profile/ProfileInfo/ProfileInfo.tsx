import { Box, CircularProgress } from '@mui/material';
import { ProfileItemsType, updateStatusTC } from '../../../redux/profile-reducer';
import s from './ProfileInfo.module.css';
import png from './20.png';
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
  return (<>

    <div className={s.fon}><img src={png} alt={'404'}/></div>

    <div className={s.ProfileInfoBlock}>
      <div className={s.imgPack}>
        <img alt="description of " src={props.profile[0].photos.large ? props.profile[0].photos.large : ''} />
      </div>
      <div className={s.infoBlock}>
        <div className={s.nameBlock}>
          <h1>
            Timofeev Yan
            {props.profile[0].name}
          </h1>
        </div>
        <div className={s.info}>
          <ProfileStatus status={props.status} />
          Dата рождения: 07.07.97 {<br />}
          Город: Пинск`

        </div>
      </div>
    </div>
  </>
  )
}

export default ProfileInfo;
