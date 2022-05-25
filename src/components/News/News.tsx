import { NewsPaper } from "./Newspaper";
import s from './News.module.css';
import { Weather } from "./Weather";

export const News = () => {

    return (
        <div className={s.pogoda}>
            <Weather />
            <NewsPaper/>
        </div>
    )
}