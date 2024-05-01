import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './application/vue/App.tsx'
import './index.css'
import Login from "./application/vue/Login.tsx";
import {IconoirProvider} from "iconoir-react";
import Home from "./application/vue/Home.tsx";
import Sign from "./application/vue/Sign.tsx";
import Links from "./application/vue/Links.tsx";
import Template from "./application/vue/Template.tsx";

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
            <Home />
            <Login />
            <Sign />
            <Links />
            <Template />
        </IconoirProvider>
    </React.StrictMode>,
)
