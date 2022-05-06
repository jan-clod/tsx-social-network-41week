import React from 'react';
import './App.css';
import { Dialogs } from './components/dialogs/Dialogs';
import { Header } from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import { Profile } from './components/profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Music } from './components/Music/Music';
import { News } from './components/News/News';
import { storeType } from './redux/state';
type propsType = {
  store: storeType
}


export const App: React.FC<propsType> = (props) => {
  const state = props.store.getState()
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
                <Dialogs
                  dialogsData={state.dialogsPage.dialogsData}
                  messageData={state.dialogsPage.messagesData}
                  newMessageBody={state.dialogsPage.newMessageBody}
                  dispatch={props.store.dispatch.bind(props.store)}

                />}>
            </Route>
            <Route
              path='/profile/*'
              element={
                <Profile
                  postsData={state.profilePage.postsData}
                  newPostText={state.profilePage.newPostText}
                  dispatch={props.store.dispatch.bind(props.store)}
                />}>
            </Route>

            <Route
              path='/music'
              element={<Music />}>
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
