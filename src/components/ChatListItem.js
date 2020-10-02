import React from 'react';
import './ChatListItem.css';

export default () =>{
    return(
        <div className="chatListItem">
            <img className="chatListItem--avatar" src="https://sentinelasul.com.br/web/images/user_login.png" alt=""/>
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">Carlos Eduardo</div>
                    <div className="chatListItem--date">19:00</div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>Opa, tudo bem?</p>
                    </div>
                </div>
            </div>
        </div>
    );
}