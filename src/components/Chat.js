import React, {useContext} from 'react';
import Navbar from "./Navbar";
import ListContacts from "./ListContacts";
import ChatRoom from "./ChatRoom";
import Context from "../context";


const Chat = () => {

    const { classLeftColumn } = useContext(Context)
     return (
        <>
            <div className={classLeftColumn}>
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