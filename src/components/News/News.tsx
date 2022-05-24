import axios from "axios"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import  { ChangeEvent,  KeyboardEvent, useState } from "react"
import s from './News.module.css';

let API_key = '2ec4423fb53af22117b897d87dd00576'

let api = `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${API_key}`

export const News = (/* props */) => {

    let [titleName, setTitleName] = useState("Kyiv")
    let [res, setRes] = useState({
        main: {
            temp: 0,
        },
        name: 'Pinsk',
    });

    let workApi = `https://api.openweathermap.org/data/2.5/weather?q=${res.name}&appid=2ec4423fb53af22117b897d87dd00576&units=metric`

    const click = () => {

        axios.get(workApi).then(response => {
            setRes({
                ...res,
                main: {
                    temp: response.data.main.temp,
                },
                name: response.data.name
            })

            setTitleName(res.name)

            return response
        }).catch(error => {
            alert('error Api');
        })
    }
    const change = (e: ChangeEvent<HTMLInputElement>) => {
        setRes({
            ...res,
            name: e.currentTarget.value
        })
    }
    const KeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && click()
    }
    return (
        <div className={s.pogoda}>
            <h2>Погода:</h2>
            В  {' '} {titleName} {' '} сейчас{' '} <h3>{'+'+ res.main.temp}</h3><br />
            <div className={s.textField}>
                <TextField
                    id="outlined-basic"
                    label="Pogoda"
                    variant="outlined"
                    autoFocus
                    color="success"
                    onChange={change}
                    onKeyPress={KeyPress} />
            </div>
            <Button onClick={click} color="secondary">Узнать погоду!</Button>
        </div>
    )
}