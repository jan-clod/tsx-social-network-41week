import React from 'react';
import { NavLink } from 'react-router-dom';
import cl from './Navbar.module.css'


export const Navbar= ()=> {
  return (
    <nav className={cl.nav}>
      <div className={cl.item}>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div className={cl.item}>
        <NavLink to="/dialogs">Message</NavLink>2
      </div>
      <div className={`${cl.item} ${cl.active}`}>
        <NavLink to="/news">News</NavLink>
      </div>
      <div className={cl.item}>
        <NavLink to="/music">Music</NavLink>
      </div>

      <div className={cl.itemS}>
        <NavLink to="/settings" className={cl.setting}>
          setting
        </NavLink>
      </div>
    </nav>
  );
}