import { useState } from "react"
import axios from "axios";
import s from './Music.module.css';

export const Music = (/* props */) => {
    /*     const optionsAlbum = {
            method: 'GET',
            url: 'https://spotify23.p.rapidapi.com/search/',
            params: {
                q: '<REQUIRED>',
                type: 'multi',
                offset: '0',
                limit: '10',
                numberOfTopResults: '5'
            },
            headers: {
                'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
                'X-RapidAPI-Key': '9af4e20d38msh2bf9f6fff9d7e80p145d46jsnde5cfb215f8c'
            }
        };
    
        axios
            .request(optionsAlbum)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            }); */

    const optionsTrek = {
        method: 'GET',
        url: 'https://spotify23.p.rapidapi.com/tracks/',
        params: { ids: '4WNcduiCmDNfmTEz7JvmLv' },
        headers: {
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
            'X-RapidAPI-Key': '9af4e20d38msh2bf9f6fff9d7e80p145d46jsnde5cfb215f8c'
        }
    };
    const handleSubmit = () => {
        axios.request(optionsTrek).then(function (response) {
            console.log(response.data.tracks);

            setMus({
                ...mus,
                tracks: [{
                    ...response.data.tracks,
                    0: {
                        ...response.data.tracks[0],
                        external_urls: {
                            ...mus.tracks[0][0].external_urls,
                            spotify: response.data.tracks[0].external_urls.spotify,
                            preview_url: response.data.tracks[0].preview_url
                        },
                        name: response.data.tracks[0].name
                    }
                }]
            })

        }).catch(function (error) {
            console.error(error);
        });
        console.log('qweqweqweq' + mus.tracks[0][0].name);

    }
    let [mus, setMus] = useState({
        tracks: [{
            0: {
                external_urls: {
                    spotify: "mLv"
                },
                preview_url: 'qwed',
                name: '_____'
            }
        }],
    })

    return (
        <div className={s.mus}>
            <h2>Musics:</h2>
            <p>
                <a href={mus.tracks[0][0].preview_url} target="_blank">{mus.tracks[0][0].name}</a>
            </p>
            <button onClick={handleSubmit}>получить ссылку на песню</button>

        </div>
    )

}
{/* <video 
controls="" 
autoplay="" 
name="media"
><source src="https://p.scdn.co/mp3-preview/40821a698364f0bf84b15bcc71a40ef813fff0e1?cid=f6a40776580943a7bc5173125a1e8832" type="audio/mpeg"></video>

           

*/}