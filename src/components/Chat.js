import React from 'react';
import Navbar from "./Navbar";
import ListContacts from "./ListContacts";
import ChatRoom from "./ChatRoom";


const Chat = () => {

    return (
        <>
            <div className="col_left">
                <Navbar />
                <ListContacts />
            </div>
            <div className="col_right">
                <ChatRoom />
            </div>
        </>

    );
};

export default Chat;