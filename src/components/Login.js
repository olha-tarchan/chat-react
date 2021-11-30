import React, {useContext} from 'react';
import {firebase} from "../config/firebase-config";
import Context from "../context";

const Login = () => {
    const {auth} = useContext(Context);

    const handleSignIn = async() => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        const {user} = await auth.signInWithPopup(googleProvider);
    }

    return (
        <div className="col-12 center">
            <div className="form-login">
                <p>People of the List will text you  jokes or facts about Chuck Norris when you send message</p>
                <button
                    onClick={handleSignIn}
                >Sigh In Google</button>
            </div>
        </div>
    );
};

export default Login;