import React, {useContext} from 'react';
import {firebase} from "../config/firebase-config";
import Context from "../context";

const Login = () => {
    const {auth} = useContext(Context);

    const handleSignIn = async() => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        const {user} = await auth.signInWithPopup(googleProvider);
        console.log(user);

        //const { user } = await auth().signInWithPopup(googleProvider);
            // .then((res) => {
            //     console.log(res)
            // })
            // .catch((er)=>{
            //     console.log(er)
            // })

    }

    return (
        <div className="col-12 center">
            <div className="form-login">
                <button
                    onClick={handleSignIn}
                >Sigh In</button>
            </div>
        </div>
    );
};

export default Login;