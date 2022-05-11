import { v1 } from "uuid";
import { ActionTypes, dialogsPageType } from './state';

let initialState: dialogsPageType = {
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
        { id: v1(),  message: [{ id: v1(), message: "Hi" }] , sender: 'You'},
        { id: v1(),  message: [{ id: v1(), message: "yoyoy" }] , sender: 'You'},
        { id: v1(),  message: [{ id: v1(), message: "ahahah" }] , sender: 'You'},
    ],
    newMessageBody: "",
}

export const DialogsReducer = (dialogsPage: dialogsPageType = initialState , action: ActionTypes) => {
    switch (action.type) {
        case "SEND-MESSAGE":
            let body = dialogsPage.newMessageBody;
            dialogsPage.newMessageBody = "";
            dialogsPage.messagesData.push({ id: v1(), message: [{id: v1(), message:body}], sender:'I' });

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
