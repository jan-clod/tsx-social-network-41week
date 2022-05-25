/* import s from './News.module.css'; */

import axios from "axios";
import { useEffect, useState } from "react";

const apiKey = "dde771cd14ab4b4b85ee7330a7292f80";
let workApi = `https://newsapi.org/v2/everything?q=Apple&from=2022-05-24&sortBy=popularity&apiKey=${apiKey}`
export const NewsPaper = () => {
    /* const [data, setData] = useState({
        title: '1',
        description: '2',
        author: '3',
        publishedAt: '4',
        name: '5',
        source: {
            id: "the-verge",
            name: "The Verge"
        }
    });
    const click = () => { }

    useEffect(() => {
        localStorage.setItem('data', data.title)
        localStorage.setItem('description', data.description)
        localStorage.setItem('author', data.author)
  
        axios
            .get(workApi)
            .then((response) => setData({
                ...data,
                title: response.data.title,
                description: response.data.description,
                author: response.data.author,
                publishedAt: response.data.publishedAt,
                name: response.data.name

            }))
            .catch((error) => alert('error'));
    }, [data]) */

    return (
        <div /* className={s.pogoda} */>
            Newsssss
           {/*  <button onClick={click}>news</button>
            <div className="news">
                <h1 className="news__title">{data.title}</h1>
                <p className="news__desc">{data.description}</p>
                <span className="news__author">{data.author}</span> <br />
                <span className="news__published">{data.publishedAt}</span>
                <span className="news__source">{data.source.name}</span>
            </div> */}
        </div>
    )
}

/* 

{
"status": "ok",
"totalResults": 37,
-"articles": [
-{
-"source": {
"id": "the-verge",
"name": "The Verge"
},
"author": "Jon Porter",
"title": "Logitech's new mouse and keyboard offer a quieter click and more clack, respectively - The Verge",
"description": "Logitech’s new MX Master 3S is a minor update with a quieter mouse click and a more sensitive sensor. Meanwhile, the MX Mechanical and MX Mechanical Mini are a pair of productivity-focused mechanical keyboards.",
"url": "https://www.theverge.com/2022/5/24/23137797/logitech-mx-master-3s-mechanical-mini-mouse-keyboard-price-release-date-features",
"urlToImage": "https://cdn.vox-cdn.com/thumbor/CTSWVJJZKyleEa2jfa10PzxpgbQ=/0x644:9000x5356/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23582683/High_Resolution_JPG_MX_Master_3s_MX_Mechanical_Universal_Graphite_LIFE07.jpg",
"publishedAt": "2022-05-24T07:01:00Z",
"content": "Say hello to the MX Master 3S and the MX Mechanical\r\nLogitechs latest computer accessories offer a quieter or more tactile way to use your computer, depending on your preferences. The new MX Master 3… [+3723 chars]"
},
*/