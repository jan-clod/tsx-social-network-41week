import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import cl from './Navbar.module.css'
import CommentIcon from '@mui/icons-material/Comment';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SettingsIcon from '@mui/icons-material/Settings';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: /* theme.palette.mode === 'dark'  ? '#1A2027' :  */'rgb(42, 42, 42)',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  color: theme.palette.text.secondary,
}));

export const Navbar = () => {
  return (
    <div className={cl.NavBlock}>
      <Box className={cl.NavBlock2} sx={{ width: '100%' }}>
        <Stack spacing={7}>
          <nav className={cl.nav}>
            <Item>
              <NavLink className={cl.item} to="/profile">
                <AccountBoxIcon />
                <p>Profile</p>
              </NavLink>
            </Item>
            <Item>
              <NavLink className={cl.item} to="/dialogs">
                <CommentIcon />
                <p>Message</p>
              </NavLink>
            </Item>
            <Item>
              <NavLink className={cl.item} to="/users">
                <AccountBoxIcon />
                <p>Users</p>
              </NavLink>
            </Item>
            <Item>
              <NavLink className={cl.item} to="/news">
                <NewspaperIcon />
                <p>News</p>
              </NavLink>
            </Item>
            <Item>
              <NavLink className={cl.item} to="/music">
                <LibraryMusicIcon />
                <p>Music</p>
              </NavLink>
            </Item>
            <Item>
              <NavLink className={cl.item} to="/settings">
                <SettingsIcon />
                <p>Setting</p>
              </NavLink>
            </Item>
          </nav>
        </Stack>
      </Box>
    </div>
  );
}