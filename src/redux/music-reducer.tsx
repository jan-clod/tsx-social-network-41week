import { v1 } from "uuid";

export type trackType = {
    name: string
    preview_url: string
}

export type musicType = {
    track: trackType,
}

export type musicpageType = {
    items: Array<musicType>

}
export type ActionTypes = ReturnType<typeof AddMusicAC>


let initialState: musicpageType = {
    items: [
        {track: {
                name: '',
                preview_url: ''
            }
        }
    ]

} 

export const MusicReducer = (MusicData: musicpageType = initialState, action: ActionTypes): musicpageType => {
    switch (action.type) {
        case "ADD_MUSIC": {
            const AddNewMusic :musicType= {
                track:{
                    name: action.name,
                    preview_url:action.preview_url
                }
            }
            let ItemsCopy = {...MusicData}
            ItemsCopy.items = [...MusicData.items]
            ItemsCopy.items.push(AddNewMusic)
            debugger
            return ItemsCopy
        }
        default: {

            return MusicData;
        }
    };
}


export const AddMusicAC = (name:string, preview_url:string) => {
    return {
        type: "ADD_MUSIC",
        name: name,
        preview_url:preview_url
    } as const; //воспринимать объект как константу
}

