import React from 'react';
import './App.css';
export default () => {
  return(
    <div className="app-window">
      <div className="sidebar">

        <header>
          <img className="header--avatar" src="https://sentinelasul.com.br/web/images/user_login.png" alt=""/>
          <div className="header--buttons">
            ...
          </div>
        </header>

        <div className="search">
          ...
        </div>

        <div className="chatlist">
          ...
        </div>
        ...
      </div>
      <div className="contentarea">
        ...
      </div>
    </div>
  );
};