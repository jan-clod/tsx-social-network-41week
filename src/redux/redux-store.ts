import { PostReducer } from "./profile-reducer";
import { DialogsReducer } from "./dialogs-reducer";
import { combineReducers, createStore } from "redux";
import { UserReducer } from "./user-reducer";

export let reducers = combineReducers({//cмешали наши редьюсеры {св-во:редьюсер}
  profilePage: PostReducer,
  dialogsPage: DialogsReducer,
  usersPage: UserReducer,
});

export type AppStateType = ReturnType<typeof reducers>

export let store = createStore(reducers); //reducers, отдали их стору
