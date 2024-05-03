import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './application/vue/App.tsx'
import './index.css'
import LoginPage from "./application/vue/LoginPage.tsx";
import {IconoirProvider} from "iconoir-react";
import WelcomePage from "./application/vue/WelcomePage.tsx";
import SignUpPage from "./application/vue/SignUpPage.tsx";
import LinkPage from "./application/vue/LinkPage.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <WelcomePage />,
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/signup",
		element: <SignUpPage />
	},
	{
		path: "/:username",
		element: <LinkPage />,
	},
	{
		path: "/app/:username",
		element: <App />,
	}
])

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
			<RouterProvider router={router} />
		</IconoirProvider>
	</React.StrictMode>,
)
