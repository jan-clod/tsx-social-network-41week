import { NavLink } from 'react-router-dom';
import cl from './Navbar.module.css'
import profileBlack from './ProfileBlack.png'
import messageBlack from './messageBlack.png'
import usersBlack from './usersBlack.png'
import newsBlack from './newsBlack.png'
import musicBlack from './musicBlack.png'
import settingBlack from './settingBlack.png'



export const Navbar = () => {
  return (
    <div className={cl.NavBlock}>
      <nav className={cl.nav}>
        <NavLink className={cl.item} to="/profile">
          <img src={profileBlack} alt='404' />
          <p>Profile</p>
        </NavLink>
        <NavLink className={cl.item} to="/dialogs">
          <img src={messageBlack} alt='404' />
          <p>Message</p>
        </NavLink>
        <NavLink className={cl.item} to="/users">
          <img src={usersBlack} alt='404' />
          <p>Users</p>
        </NavLink>
        <NavLink className={cl.item} to="/news">
          <img src={newsBlack} alt='404' />
          <p>News</p>
        </NavLink>
        <NavLink className={cl.item} to="/music">
          <img src={musicBlack} alt='404' />
          <p>Music</p>
        </NavLink>
        <NavLink className={cl.item} to="/settings">
          <img src={settingBlack} alt='404' />
          <p>Setting</p>
        </NavLink>
      </nav>
    </div>
  );
}