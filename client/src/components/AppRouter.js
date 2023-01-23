import React, {useContext} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import { publicRoutes} from "../routes";
import {PIRATE_ROUTE} from "../utils/const";
import axios from "../axiosAPI";
import {Context} from "../index";
import {observer} from "mobx-react-lite";


const AppRouter = observer(() => {
    const {user} = useContext(Context)


    return (<Switch>
            {publicRoutes.map(({path, Component}) => <Route key={path} path={path} component={Component} exact/>)}

            <Redirect to={PIRATE_ROUTE}/>
        </Switch>

    );
});

export default AppRouter;