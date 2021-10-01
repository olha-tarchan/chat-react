import React, {useContext, useState, useEffect} from 'react';
import Context from "../context";

const ChatRoom = () => {
    const { dataChatRoom, data, sendMessage} = useContext(Context);
    const [value, setValue] = useState('');
    const [sendData, setSendData] = useState({id:dataChatRoom.id, message:''});

    useEffect(()=>{
        setSendData({id:dataChatRoom.id, message: value})
    }, [dataChatRoom, data])

    return (
        <>
            <div className="header">
                <div className="header_chat">
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
                <div className="chat_messages">
                    {dataChatRoom.name}
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
                                            <div className="item_date">{obj.createdAt}</div>
                                        </div>
                                    </div>
                                    :
                                    <div key={obj.createdAt} className='message_item item_right'>
                                        <div className="item_info">
                                            <div className="item_sms">{obj.message}</div>
                                            <div className="item_date">{obj.createdAt}</div>
                                        </div>
                                    </div>
                            )
                        })
                    }
                </div>

                <div className="chat_send_message">
                    <div className="wrapper">
                        <div className="wrapper_textarea">
                            <textarea
                                value={value}
                                onChange={(e) => setValue( e.target.value)}
                                placeholder="Type your message" type="text" />
                        </div>
                        <div onClick={sendMessage.bind(null, {id:dataChatRoom.id, message:value})}
                             className="wrapper_icon chat_box_icon">&#10146;</div>
                    </div>

                </div>

            </div>
        </>
    );
};

export default ChatRoom;

{/*
                      <div className="message_item item_left">
                        <div className="item_img">
                            <div className="item_img_img">
                                <img src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/optimus-prime.jpeg" alt=""/>
                            </div>
                        </div>
                        <div className="item_info">
                            <div className="item_sms">Quickly come to the meeting!</div>
                            <div className="item_date">4/22/21, 4:10 AM</div>
                        </div>
                    </div>
                    <div className="message_item item_right">
                        <div className="item_info">
                            <div className="item_sms">Quickly come to the meeting!</div>
                            <div className="item_date">4/22/21, 4:10 AM</div>
                        </div>
                    </div>*/
}