import React from "react";
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return <div className={s.profInfoBlock}>
    <div className={s.imgPack}>
      <img src='https://krot.info/uploads/posts/2021-02/1613589070_4-p-fon-stranitsi-dlya-donationalerts-4.jpg' />
    </div>
    <div className={s.descriptionBlock}>
      avatr + dicription1 profilleInfo
    </div>
  </div>
}

export default ProfileInfo;
