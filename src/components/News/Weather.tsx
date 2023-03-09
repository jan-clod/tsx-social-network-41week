import axios from "axios"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react"
import s from './Weather.module.css';

let API_key = '2ec4423fb53af22117b897d87dd00576'

let api = `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${API_key}`

export const Weather = (/* props */) => {

    useEffect(() => {
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
    }, [])

    let [titleName, setTitleName] = useState("Pinsk")
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
        <div className={s.weatherBlock}>
            <h1>Погода</h1>
            <div className={`  ${s.weatherBlock_container} ${s.pogoda}`}>
                <div className={s.container}>
                    В  {' '} {titleName} {' '} сейчас{' '} <h2>{'+' + res.main.temp}</h2><br />
                    <div className={s.container_textField}>
                        <TextField
                            id="outlined-basic"
                            label="Pogoda"
                            variant="outlined"
                            autoFocus
                            color="success"
                            onChange={change}
                            onKeyPress={KeyPress} />
                    </div>
                    <div className={s.container_buttonBlock}>
                        <button className={s.buttonBlock_button} onClick={click} >Узнать погоду!</button>
                    </div>
                </div>

            </div>


        </div>
    )
}