import { PostReducer } from "./profile-reducer";
import { DialogsReducer } from "./dialogs-reducer";
import { combineReducers, createStore } from "redux";
import { storeType } from "./state";

let reducers = combineReducers({
  profilePage: PostReducer,
  dialogsPage: DialogsReducer,
});

export let store : storeType = createStore(reducers);
