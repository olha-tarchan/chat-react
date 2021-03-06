import React, {useContext} from 'react';
import Context from "../context";
import {formatDate} from '../utils/formatDate';

const ListContacts = () => {

    const {openChatRoom, searchResult} = useContext(Context);

    return (
        <div className="persons">
            <div className="persons_list">

                {searchResult && searchResult.map(us =>{
                    const lastMessage  = us.data[us.data.length-1];
                    return (
                        <div key={us.id} onClick={openChatRoom.bind(null, us)} className="persons_item">
                            <div className="persons_item_image">
                                <div className="item_img img_select">
                                    <div className="item_img_img" >
                                        <div className="item_img_img-cover" style={{backgroundImage: `url(${us.photo})`}}>1</div>
                                    </div>
                                </div>
                            </div>
                            <div className="persons_item_info">
                                <div className="persons_item_name">{us.name}</div>
                                <div className="persons_item_text">{lastMessage.message}</div>
                            </div>
                            <div className="persons_item_date">{formatDate(lastMessage.createdAt)}</div>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    );
};

export default ListContacts;