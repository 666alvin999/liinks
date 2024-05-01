import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './application/vue/App.tsx'
import './index.css'
import Login from "./application/vue/Login.tsx";
import {IconoirProvider} from "iconoir-react";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <IconoirProvider
            iconProps={{
                color: '#000',
                strokeWidth: 2,
                width: '1.5rem',
                height: '1.5rem',
            }}
        >
            {/*<App />*/}
            <Login />
        </IconoirProvider>
    </React.StrictMode>,
)
