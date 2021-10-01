import React, {useContext} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {privateRoutes, publicRoutes} from "../routes";
import {CHAT_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {useAuthState} from "react-firebase-hooks/auth";
import Context from "../context";

const AppRouter = () => {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);
    console.log("App Router = user", user);

    return user ?
        (
            <Switch>
                console.log("Component", Component);
                {privateRoutes.map(({path, Component}) =>
                    <Route path={path} key={path} component={Component} exact={true} />
                )}
                <Redirect to={CHAT_ROUTE} />
            </Switch>
        )
        :
        (
            <Switch>
                {publicRoutes.map(({path, Component}) =>
                    <Route path={path} key={path} component={Component} exact={true} />
                )}
                <Redirect to={LOGIN_ROUTE} />
            </Switch>
        )
};

export default AppRouter;