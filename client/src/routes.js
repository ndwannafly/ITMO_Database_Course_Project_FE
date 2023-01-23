import {
    ADD_PAGE,
    LOGIN_ROUTE,

    REG_ROUTE,
    SENTINEL_PAGE,
    PIRATE_ROUTE
} from "./utils/const";
import AuthPage from "./pages/AuthPage";
import SentinelPage from "./pages/SentinelPage";
import PiratePage from "./pages/PiratePage";

import RegPage from "./pages/RegPage";
import AddPage from "./pages/AddPage";




export const publicRoutes = [{
    path: LOGIN_ROUTE, Component: AuthPage
    },
    {
    path: REG_ROUTE, Component: RegPage
    },
    {
        path: ADD_PAGE, Component: AddPage
    },
    {
        path: PIRATE_ROUTE, Component: PiratePage
    },
    {
        path: SENTINEL_PAGE, Component: SentinelPage
    }
]

