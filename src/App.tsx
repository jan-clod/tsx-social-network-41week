import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Profile } from './components/profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Music } from './components/Music/Music';
import { News } from './components/News/News';
import { Header } from './components/header/Header';
import { DialogsContainer } from './components/dialogs/DialogsContainer';
import { store } from './redux/redux-store';
import { UsersContainer } from './components/Users/UsersContainer';
import { MusicContainer } from './components/Music/MusicContainer';

export const App = (): JSX.Element => {
  
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route
              path='/dialogs/*'
              element={
                <DialogsContainer 
                  messageData={store.getState().dialogsPage.messagesData}
                />}>
            </Route>
            <Route
              path='/profile/*'
              element={
                <Profile
                />}>
            </Route>

            <Route
              path='/users'
              element={<UsersContainer />}>
            </Route>

            <Route
              path='/music'
              element={<MusicContainer musicpage={store.getState().musicpage} />}>
            </Route>

            <Route
              path='/news'
              element={<News />}>
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;
