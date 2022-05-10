import './index.css';
import {store } from './redux/redux-store';
import { renderTree } from './render';

let state = store.getState()
store.subscribe(()=>{
    renderTree(state)
})
renderTree()