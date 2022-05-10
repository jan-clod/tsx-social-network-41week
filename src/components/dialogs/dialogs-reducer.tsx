import { v1 } from "uuid";
import { ActionTypes, dialogsPageType } from '../../redux/state';

let initialState = {
    dialogsData: [
        { id: v1(), name: "Saha" },
        { id: v1(), name: "Gena" },
        { id: v1(), name: "Anana" },
        { id: v1(), name: "Miroslav" },
        { id: v1(), name: "Krocop" },
        { id: v1(), name: "Ira" },
        { id: v1(), name: "Mikle" },
        { id: v1(), name: "Gena L" },
        { id: v1(), name: "Mikle" },
        { id: v1(), name: "Mikki" },
        { id: v1(), name: "Outback" },
        { id: v1(), name: "Arny" },
        { id: v1(), name: "Crish" },
    ],
    messagesData: [
        { id: v1(), message: "Hi" },
        { id: v1(), message: "goodBye" },
        { id: v1(), message: "HaveAreYou" },
    ],
    newMessageBody: "",
}

export const DialogsReducer = (dialogsPage: dialogsPageType = initialState , action: ActionTypes) => {
    switch (action.type) {
        case "SEND-MESSAGE":
            let body = dialogsPage.newMessageBody;
            dialogsPage.newMessageBody = "";
            dialogsPage.messagesData.push({ id: v1(), message: body });

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
