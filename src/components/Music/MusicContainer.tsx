import { connect } from 'react-redux';
import { ActionTypes, AddMusicAC, musicpageType } from '../../redux/music-reducer';
import { AppStateType } from '../../redux/redux-store';
import { Music } from './Music';

let mapStateToProps = (state: AppStateType): musicpageType => {  // контекстом приходит state
    return {
        items : state.musicpage.items
    }
}

let mapDispathToProps = (dispatch: (action: ActionTypes) => void) => {
    return {
        AddMusicAC: (name: string, preview_url: string) => {
            dispatch(AddMusicAC(name, preview_url))
        }
    }
}


export const MusicContainer = connect(mapStateToProps, mapDispathToProps)(Music)