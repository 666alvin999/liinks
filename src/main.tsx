import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './application/vue/App.tsx'
import './index.css'
import LoginPage from "./application/vue/LoginPage/LoginPage.tsx";
import {IconoirProvider} from "iconoir-react";
import WelcomePage from "./application/vue/WelcomePage/WelcomePage.tsx";
import SignUpPage from "./application/vue/SignUpPage/SignUpPage.tsx";
import LinkPage from "./application/vue/LinkPage/LinkPage.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./application/vue/ErrorPage/ErrorPage.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <WelcomePage />,
		errorElement: <ErrorPage/>
	},
	{
		path: "/login",
		element: <LoginPage />,
		errorElement: <ErrorPage/>
	},
	{
		path: "/signup",
		element: <SignUpPage />,
		errorElement: <ErrorPage/>
	},
	{
		path: "/:username",
		element: <LinkPage />,
		errorElement: <ErrorPage/>
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
