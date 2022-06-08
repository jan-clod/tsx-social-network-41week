import { v1 } from "uuid";
import { musicpageType } from "../../redux/music-reducer";
import s from './Music.module.css';

type trackType = {
    name: string
    preview_url: string
}
type musicPropsType = {
    musicpage: musicpageType
    AddMusicAC: (name: string, preview_url: string) => void
}
type musicElemType = {
    album: { album_type: string, artists: [], external_urls: {}, id: string, images: [] }
    artists: [{}]
    disc_number: number
    duration_ms: number
    episode: false
    explicit: true
    external_ids: { isrc: string }
    external_urls: { spotify: string }
    id: string
    is_local: false
    is_playable: true
    name: string
    popularity: 71
    preview_url: string
    track: trackType
    track_number: 2
    type: string
    uri: string
}

export const Music = (props: musicPropsType) => {

    const axios = require("axios");
    const options = {
        method: 'GET',
        url: 'https://spotify23.p.rapidapi.com/playlist_tracks/',
        params: { id: '37i9dQZF1DX4Wsb4d7NKfP', offset: '0', limit: '3' },
        headers: {
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
            'X-RapidAPI-Key': '9af4e20d38msh2bf9f6fff9d7e80p145d46jsnde5cfb215f8c'
        }
    };

    axios.request(options).then(function (responce: any) {
        console.log(responce.data.items);

        responce.data.items.map((m: musicElemType) =>
            props.AddMusicAC(m.track.name, m.track.preview_url))

    }).catch(function (error: any) {
        console.error(error);
    });

    let musicElem = props.musicpage.items.map(m => (
        <div key={v1()}>
            <a
                key={v1()}
                target="_blank"
                rel="noreferrer"
                href={m.track.preview_url}
            >
                {m.track.name} </a>
        </div>
    ))



    return (
        <div className={s.mus}>
            <h2>Musics:</h2><br />
            {musicElem}
            <button /* onClick={click} */>получить ссылку на песню</button>
        </div>
    )
}