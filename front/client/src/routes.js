import {

    LOGIN_ROUTE,

    REG_ROUTE,

    PIRATE_ROUTE
} from "./utils/const";
import AuthPage from "./pages/AuthPage";

import PiratePage from "./pages/PiratePage";

import RegPage from "./pages/RegPage";




export const publicRoutes = [{
    path: LOGIN_ROUTE, Component: AuthPage
}, {
    path: REG_ROUTE, Component: RegPage
},
    {
        path: PIRATE_ROUTE, Component: PiratePage
    }
]

export const adminRoutes = [{
    path: LOGIN_ROUTE, Component: AuthPage
}, {
    path: REG_ROUTE, Component: RegPage
},   {
        path: PIRATE_ROUTE, Component: PiratePage
    }]