import React, { useContext, useEffect, useRef } from "react";

const Message = ({ message }) => {

  const ref = useRef();

  return (
    <div
      ref={ref}
      // className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
