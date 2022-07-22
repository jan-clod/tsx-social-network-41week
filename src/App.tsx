import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { News } from './components/News/News';
import { HeaderConteiner } from './components/header/Header';
import { DialogsContainer } from './components/dialogs/DialogsContainer';
import { store } from './redux/redux-store';
import { UsersContainer } from './components/Users/UsersContainer';
import { MusicContainer } from './components/Music/MusicContainer';
import { ProfileContainerConnect } from './components/profile/ProfileContainer';
import { Login } from './components/login/Login';

export const App = (): JSX.Element => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderConteiner />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>

            <Route path='/dialogs/*' element={
              <DialogsContainer
                messageData={store.getState().DialogsReducer.messagesData} />}
            />

            <Route path='/profile/*'
              element={
                <ProfileContainerConnect
                  profileData={store.getState().ProfileReducer.profile}
                />}
            />

            <Route path='/profile/:userId' element={<ProfileContainerConnect profileData={store.getState().ProfileReducer.profile} />} />

            <Route path='/users' element={<UsersContainer />} />

            <Route path='/music' element={
              <MusicContainer
                musicpage={store.getState().MusicReducer} />}
            />
            <Route path='/news' element={<News />} />

            <Route path='/login' element={<Login />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;
