import React, {useContext, useState,useRef, useEffect} from 'react';
import Context from "../context";
import {formDateMessage} from '../utils/formatDate';

const ChatRoom = () => {
    const { dataChatRoom, sendMessage, changeClassForLeftPanel} = useContext(Context);
    const [value, setValue] = useState('');
    const elementRef = useRef(null);

    const handlerSend = (data) => {
        sendMessage(data);
        setValue('');
    }

    const scrollBottom = () => {
        elementRef.current.scrollIntoView({behavior: "smooth"});
    }
    useEffect(()=>{
        scrollBottom();
    }, [dataChatRoom, sendMessage])

    return (
        <>
            <div className="header">
                <div className="header_chat"> <div onClick={changeClassForLeftPanel.bind(null, 'col_left')} className="btn-menu">&#10094; </div>
                    <div className="header_chat_img item_img img_select">
                        <div className="item_img">
                            <div className="item_img_img">
                                <div className="item_img_img-cover"
                                     style={{backgroundImage: `url(${dataChatRoom.photo})`}}>1
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header_chat_title">
                        {dataChatRoom.name}
                    </div>
                </div>

            </div>
            <div className="chat">
                <div className="chat_messages"  >
                    {
                        dataChatRoom.name.length > 0 && dataChatRoom.data.map(obj => {
                            return (
                                (obj.incoming) ?
                                    <div key={obj.createdAt} className='message_item item_left'>
                                        <div className="item_img">
                                            <div className="item_img_img">
                                                <div className="item_img_img-cover"
                                                     style={{backgroundImage: `url(${dataChatRoom.photo})`}}>1
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item_info">
                                            <div className="item_sms">{obj.message}</div>
                                            <div className="item_date">{formDateMessage(obj.createdAt)}</div>
                                        </div>
                                    </div>
                                    :
                                    <div key={obj.createdAt} className='message_item item_right'>
                                        <div className="item_info">
                                            <div className="item_sms">{obj.message}</div>
                                            <div className="item_date">{formDateMessage(obj.createdAt)}</div>
                                        </div>
                                    </div>
                            )
                        })
                    }
                    <i ref={elementRef} />
                </div>

                <div className="chat_send_message">
                    <div className="wrapper">
                        <div className="wrapper_textarea">
                            <textarea
                                value={value}
                                onChange={(e) => setValue( e.target.value)}
                                placeholder="Type your message" type="text" />
                        </div>
                        <div onClick={()=>handlerSend({id:dataChatRoom.id, message:value})}
                             className="wrapper_icon chat_box_icon">&#10146;</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatRoom;

