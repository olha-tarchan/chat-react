import React, {useContext} from 'react';
import Context from "../context";
import {useAuthState} from "react-firebase-hooks/auth";
import SearchFilter from "./SearchFilter";

const Navbar = () => {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);
    const photoUrl = user.photoURL;
    
    return (
        <header className="header">
            <div className="header_logo">
                <div className="item_img img_select">
                    <div className="header_logo_img item_img_img">
                        <div className="item_img_img-cover" style={{backgroundImage: `url(${photoUrl})`}}>1</div>
                    </div>
                </div>
            </div>
            {user && <button onClick={() => auth.signOut()}>Out as {user.email}</button> }
            <SearchFilter />
            <div className="header_title">Chats</div>
        </header>
    );
};

export default Navbar;