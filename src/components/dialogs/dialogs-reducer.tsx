import { v1 } from "uuid";
import { ActionTypes, dialogsPageType } from '../../redux/state';

export const DialogsReducer = (dialogsPage: dialogsPageType, action: ActionTypes) => {
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
