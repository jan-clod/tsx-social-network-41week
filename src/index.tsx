import './index.css';
import {store } from './redux/redux-store';
import { renderTree } from './render';

let state = store.getState()
store.subscribe(()=>{
    renderTree(state)
})
renderTree()
/* 
import './index.css';
import {AppStateType, store } from './redux/redux-store';

const renderTree = (state?:AppStateType) => {
    return state
}

let state = store.getState()
store.subscribe(()=>{

    renderTree(state)
})

renderTree(state) */