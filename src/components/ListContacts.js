import React, {useContext, useEffect, useState} from 'react';
import Context from "../context";

const ListContacts = () => {

    const {data, openChatRoom, search, searchResult} = useContext(Context);

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
                            <div className="persons_item_date">{lastMessage.createdAt}</div>
                        </div>
                    )
                }
                )}
               {/* <div className="persons_item">
                    <div className="persons_item_image">
                        <div className="item_img img_select">
                            <div className="item_img_img">
                                <img src="https://www.bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="persons_item_info">
                        <div className="persons_item_name">Alice Freeman</div>
                        <div className="persons_item_text">You are the worst!</div>
                    </div>
                    <div className="persons_item_date">Jun 12.2021</div>
                </div>
                <div className="persons_item">
                    <div className="persons_item_image">
                        <div className="item_img img_select">
                            <div className="item_img_img">
                                <img src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/robocop.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="persons_item_info">
                        <div className="persons_item_name">Alice Freeman</div>
                        <div className="persons_item_text">You are the worst!</div>
                    </div>
                    <div className="persons_item_date">Jun 12.2021</div>
                </div>
                <div className="persons_item">
                    <div className="persons_item_image">
                        <div className="item_img img_select">
                            <div className="item_img_img">
                                <img src="https://www.bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="persons_item_info">
                        <div className="persons_item_name">Alice Freeman</div>
                        <div className="persons_item_text">You are the worst!</div>
                    </div>
                    <div className="persons_item_date">Jun 12.2021</div>
                </div>
                <div className="persons_item">
                    <div className="persons_item_image">
                        <div className="item_img img_select">
                            <div className="item_img_img">
                                <img src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/robocop.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="persons_item_info">
                        <div className="persons_item_name">Alice Freeman</div>
                        <div className="persons_item_text">You are the worst!</div>
                    </div>
                    <div className="persons_item_date">Jun 12.2021</div>
                </div>
                <div className="persons_item">
                    <div className="persons_item_image">
                        <div className="item_img img_select">
                            <div className="item_img_img">
                                <img src="https://www.bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="persons_item_info">
                        <div className="persons_item_name">Alice Freeman</div>
                        <div className="persons_item_text">You are the worst!</div>
                    </div>
                    <div className="persons_item_date">Jun 12.2021</div>
                </div>
                <div className="persons_item">
                    <div className="persons_item_image">
                        <div className="item_img img_select">
                            <div className="item_img_img">
                                <img src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/robocop.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="persons_item_info">
                        <div className="persons_item_name">Alice Freeman</div>
                        <div className="persons_item_text">You are the worst!</div>
                    </div>
                    <div className="persons_item_date">Jun 12.2021</div>
                </div>
                <div className="persons_item">
                    <div className="persons_item_image">
                        <div className="item_img img_select">
                            <div className="item_img_img">
                                <img src="https://www.bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="persons_item_info">
                        <div className="persons_item_name">Alice Freeman</div>
                        <div className="persons_item_text">You are the worst!</div>
                    </div>
                    <div className="persons_item_date">Jun 12.2021</div>
                </div>
                <div className="persons_item">
                    <div className="persons_item_image">
                        <div className="item_img img_select">
                            <div className="item_img_img">
                                <img src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/robocop.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="persons_item_info">
                        <div className="persons_item_name">Alice Freeman</div>
                        <div className="persons_item_text">You are the worst!</div>
                    </div>
                    <div className="persons_item_date">Jun 12.2021</div>
                </div>*/}
            </div>
        </div>
    );
};

export default ListContacts;