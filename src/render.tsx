/* import { createRoot } from 'react-dom/client'; */
import React from 'react';
import ReactDOM from 'react-dom'
import App from "./App";

import { store } from "./redux/state";

/* export const renderTree=()=>{
    const container = document.getElementById('root');
    const root = createRoot(container!);
    root.render(<App store={store}/>)
}
 */
export const renderTree=()=>{
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    )
    console.log('перерисовак render.tsx');
    
}