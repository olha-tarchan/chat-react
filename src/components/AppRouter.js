import React, {useContext} from 'react';
import {useAuthState} from "react-firebase-hooks/auth";
import Context from "../context";
import Chat from "./Chat";
import Login from "./Login";

const AppRouter = () => {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);

    return user ?
        (
            <Chat />
        )
        :
        (
            <Login />
        )
};

export default AppRouter;
