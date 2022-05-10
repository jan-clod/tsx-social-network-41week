import { v1 } from "uuid";
import { DialogsReducer, SendMessageAC, UpdateNewPostAC } from "../components/dialogs/dialogs-reducer";
import { addPostAC, PostReducer, UpdateNewMessageAC } from "../components/dialogs/profile-reducer";

export type PostsDataType = {
  id: string;
  message: string;
  LikesCount: number;
};
export type DialogsDataType = {
  id: string;
  name: string;
};
export type MessagesDataType = {
  id: string;
  message: string;
};
export type ProfilePageType = {
  postsData: Array<PostsDataType>;
  newPostText: string;
};
export type dialogsPageType = {
  dialogsData: Array<DialogsDataType>;
  messagesData: Array<MessagesDataType>;
  newMessageBody: string;
};
export type StateType = {
  profilePage: ProfilePageType;
  dialogsPage: dialogsPageType;
};
export type storeType = {
  _state: StateType;
  getState: () => StateType;
  onChange: () => void;
  subscribe: (callback: any) => void;
  dispatch: (action: ActionTypes) => void;
};
export type ActionTypes =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof UpdateNewMessageAC>
  | ReturnType<typeof UpdateNewPostAC>
  | ReturnType<typeof SendMessageAC>;


let store: storeType = {
  _state: {
    profilePage: {
      postsData: [
        { id: v1(), message: "Hi how are you", LikesCount: 163 },
        { id: v1(), message: "Its my Life", LikesCount: 83 },
        { id: v1(), message: "HaveAreYou", LikesCount: 1 },
      ],
      newPostText: " ",
    },
    dialogsPage: {
      dialogsData: [
        { id: v1(), name: "Saha" },
        { id: v1(), name: "Gena" },
        { id: v1(), name: "Anana" },
        { id: v1(), name: "Miroslav" },
        { id: v1(), name: "Krocop" },
        { id: v1(), name: "Mikle" },
      ],
      messagesData: [
        { id: v1(), message: "Hi" },
        { id: v1(), message: "goodBye" },
        { id: v1(), message: "HaveAreYou" },
      ],
      newMessageBody: "",
    },
  },
  getState() {
    return this._state;
  },
  subscribe(callback) {
    this.onChange = callback;
    console.log("перерисовака state.tsx");
  },
  onChange() {},
  dispatch(action) {
    this._state.profilePage = PostReducer(this._state.profilePage, action)
    this.onChange()
    this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action)
    this.onChange()
  },
};
