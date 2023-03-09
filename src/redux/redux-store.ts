import { ProfileReducer } from "./profile-reducer";
import { DialogsReducer } from "./dialogs-reducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { UserReducer } from "./user-reducer";
import { MusicReducer } from "./music-reducer";
import { AuthReducer } from "./auth-reducer";
import  thankMiddleware  from "redux-thunk"

export let reducers = combineReducers({
  ProfileReducer,
  DialogsReducer,
  UserReducer, 
  MusicReducer,
  AuthReducer,
}); 

export type AppStateType = ReturnType<typeof reducers>;

export let store = createStore(reducers, applyMiddleware(thankMiddleware)); //reducers, отдали их стору,  applyMiddleware() - из редакса
