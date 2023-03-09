import React from 'react';
import ReactDOM from 'react-dom'
import App from "./App";

import { AppStateType, store } from "./redux/redux-store";
import { Provider } from 'react-redux';
export const renderTree = (stor?: AppStateType) => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    )
    console.log('перерисовак render.tsx');

}



//------------REACT18----------------

/* import React from 'react';
import ReactDOM from 'react-dom/client'
import App from "./App";

import { StateType } from "./redux/state";
import { store } from "./redux/redux-store";

export const renderTree = (red?: StateType) => {
    const root = ReactDOM.createRoot(document.getElementById('root')!)
    root.render(
        <React.StrictMode>
            <App store={store} />
        </React.StrictMode>
    )
}

 */


/* import { createRoot } from 'react-dom/client'; */
/* export const renderTree=()=>{
    const container = document.getElementById('root');
    const root = createRoot(container!);
    root.render(<App store={store}/>)
}
 */






