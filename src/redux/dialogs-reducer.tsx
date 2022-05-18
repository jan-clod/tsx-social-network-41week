import { v1 } from "uuid";

export type ActionTypes =
    | ReturnType<typeof UpdateNewPostAC>
    | ReturnType<typeof SendMessageAC>;

export type DialogsPageType = {
    dialogsData: Array<DialogsDataType>;
    messagesData: Array<MessagesDataType>;
    newMessageBody: string;
};
type MessagesDataType = {
    id: string;
    message: Array<MessageReduserType>;
    sender: 'You' | 'I';
};
export type DialogsDataType = {
    id: string;
    name: string;

};
export type MessageReduserType = {
    id: string
    message: string
}

let initialState: DialogsPageType = {
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
        { id: v1(), message: [{ id: v1(), message: "Hi" }], sender: 'You' },
        { id: v1(), message: [{ id: v1(), message: "Как дела?" }], sender: 'You' },
        { id: v1(), message: [{ id: v1(), message: "Учишь?" }], sender: 'You' },
    ],
    newMessageBody: "",
}

export const DialogsReducer = (dialogsPage: DialogsPageType = initialState, action: ActionTypes): DialogsPageType => {
    switch (action.type) {
        case "SEND-MESSAGE": {
            let body = dialogsPage.newMessageBody;
            dialogsPage.newMessageBody = "";
            let dialogsPageCopy = { ...dialogsPage }
            dialogsPageCopy.messagesData = [...dialogsPage.messagesData]
            body && dialogsPageCopy.messagesData.push({ id: v1(), message: [{ id: v1(), message: body }], sender: 'I' });
            
            return dialogsPageCopy;
        }
        case "UPDATE-NEW-MESSAGE-BODY": {
            let dialogsPageCopy = { ...dialogsPage }
            dialogsPageCopy.newMessageBody = dialogsPage.newMessageBody
            dialogsPageCopy.newMessageBody = action.body
            return dialogsPageCopy
        }
        default: {
            let dialogsPageCopy = { ...dialogsPage }
            return dialogsPageCopy;
        }

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
