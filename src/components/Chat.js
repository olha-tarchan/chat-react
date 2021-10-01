import React from 'react';
import Navbar from "./Navbar";
import ListPersons from "./ListPersons";
import ChatRoom from "./ChatRoom";


const Chat = () => {

    return (
        <>
            <div className="col_left">
                <Navbar />
                <ListPersons />
            </div>
            <div className="col_right">
                <ChatRoom />
            </div>
        </>

    );
};

export default Chat;