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
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export const Navbar = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <nav className={cl.nav}>
          <Item>
            <div className={cl.item}>
              <NavLink to="/profile"><AccountBoxIcon/> Profile</NavLink>
            </div>
          </Item>
          <Item>
            <div className={cl.item}>
              <NavLink to="/dialogs"><CommentIcon/> Message</NavLink>2
            </div>
          </Item>
          <Item>
            <div className={`${cl.item} ${cl.active}`}>
              <NavLink to="/users"><AccountBoxIcon/>Users</NavLink>
            </div>
          </Item>
          <Item>
            <div className={`${cl.item} ${cl.active}`}>
              <NavLink to="/news"><NewspaperIcon/> News</NavLink>
            </div>
          </Item>
          <Item>
            <div className={cl.item}>
              <NavLink to="/music"><LibraryMusicIcon/> Music</NavLink>
            </div>
          </Item>
          <Item>
            <div className={cl.item}>
              <NavLink to="/settings" /* className={cl.setting} */>
              <SettingsIcon/> setting
              </NavLink>
            </div>
          </Item>
        </nav>
      </Stack>
    </Box>
  );
}