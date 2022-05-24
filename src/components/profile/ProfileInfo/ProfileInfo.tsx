import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return <div className={s.ProfileInfoBlock}>
    <div className={s.imgPack}>
      <img src='https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/c3opGqEc6rlIs1s1heXXe6z7s3RnR_8TNCap2uGTlwJwc21_SRc6__84sSbCWToYpTxqxJJZ.jpg?size=200x200&quality=96&crop=236,0,607,607&ava=1' />
    </div>
    <div className={s.nameBlock}>
      <h2>
        My Name Neimovich
      </h2>
    </div>
    <div className={s.infoBlock}>
      Dата рождения: 07.07.97 {<br />}
      Город: Пинск`
    </div>

  </div>
}

export default ProfileInfo;
