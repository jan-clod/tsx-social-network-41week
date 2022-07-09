import { ProfileReducer } from "./profile-reducer";
import { DialogsReducer } from "./dialogs-reducer";
import { combineReducers, createStore } from "redux";
import { UserReducer } from "./user-reducer";
import { MusicReducer } from "./music-reducer";
import { AuthReducer } from "./auth-reducer";

export let reducers = combineReducers({
  ProfileReducer,
  DialogsReducer,
  UserReducer,
  MusicReducer,
  AuthReducer,
});

export type AppStateType = ReturnType<typeof reducers>;

export let store = createStore(reducers); //reducers, отдали их стору
