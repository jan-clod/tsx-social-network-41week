import { v1 } from "uuid";

type PostsDataType = {
  id: string;
  message: string;
  LikesCount: number;
};
type DialogsDataType = {
  id: string;
  name: string;
};
type MessageReduserType = {
  id: string;
  message: string;
};
type MessagesDataType = {
  id: string;
  message: Array<MessageReduserType>;
  sender: "You" | "I";
};
type ProfilePageType = {
  postsData: Array<PostsDataType>;
  newPostText: string;
};
type dialogsPageType = {
  dialogsData: Array<DialogsDataType>;
  messagesData: Array<MessagesDataType>;
  newMessageBody: string;
};
type StateType = {
  profilePage: ProfilePageType;
  dialogsPage: dialogsPageType;
};
type storeType = {
  _state: StateType;
  getState: () => StateType;
  onChange: () => void;
  subscribe: (callback: any) => void;
  dispatch: (action: ActionTypes) => void;
};
type ActionTypes =
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
        { id: v1(), name: "Anana" },
        { id: v1(), name: "Krocop" },
        { id: v1(), name: "Gena L" },
        { id: v1(), name: "Outback" },
        { id: v1(), name: "Arny" },
        { id: v1(), name: "Crish" },
      ],
      messagesData: [
        { id: v1(), message: [{ id: v1(), message: "Hi" }], sender: "You" },
        {
          id: v1(),
          message: [{ id: v1(), message: "Как дела?" }],
          sender: "You",
        },
        { id: v1(), message: [{ id: v1(), message: "Учишь?" }], sender: "You" },
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
    this._state.profilePage = PostReducer(this._state.profilePage, action);
    this.onChange();
    this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action);
    this.onChange();
  },
};


export const DialogsReducer = (dialogsPage: dialogsPageType , action: ActionTypes): dialogsPageType => {
  switch (action.type) {
      case "SEND-MESSAGE":
          let body = dialogsPage.newMessageBody;
          dialogsPage.newMessageBody = "";
          dialogsPage.messagesData.push({ id: v1(), message: [{ id: v1(), message: body }], sender: 'I' });

          return dialogsPage;
      case "UPDATE-NEW-MESSAGE-BODY":
          dialogsPage.newMessageBody = action.body
          return dialogsPage
      default:
          return dialogsPage;
  }
}

export const SendMessageAC = () => {
  return {
      type: "SEND-MESSAGE",
  } as const;
}
export const UpdateNewPostAC = (body: string) => {
  return {
      type: "UPDATE-NEW-MESSAGE-BODY",
      body: body,
  } as const;
};

export const PostReducer = (profilePage: ProfilePageType, action: ActionTypes) => {
  switch (action.type) {
      case "ADD-POST":
          const newPost = {
              id: v1(),
              message: profilePage.newPostText,
              LikesCount: 14
          }
          profilePage.postsData.unshift(newPost)
          profilePage.newPostText = '';
          return profilePage;
      case "UPDATE-NEW-TEXT":
          profilePage.newPostText = action.newText
          return profilePage
      default:
          return profilePage;
  }
};

export const addPostAC = () => {
  return {
      type: "ADD-POST"
  } as const //воспринимать объект как константу
}
export const UpdateNewMessageAC = (newText: string) => {
  return {
      type: "UPDATE-NEW-TEXT",
      newText: newText
  } as const
}  