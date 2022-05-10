import { PostReducer } from "./../components/dialogs/profile-reducer";
import { DialogsReducer } from "./../components/dialogs/dialogs-reducer";
import { combineReducers, createStore } from "redux";
import { storeType } from "./state";

let reducers = combineReducers({
  profilePage: PostReducer,
  dialogsPage: DialogsReducer,
});

export let store : storeType = createStore(reducers);
