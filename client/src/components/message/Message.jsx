import React from "react";
import moment from "moment";
import "./message.css";

const Message = ({ message, own }) => {
  return (
    <div className={own ? " message own " : "message"}>
      <div className="messageTop">
        <img
          src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg"
          alt=""
          className="messageImg"
        />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{moment(message.createdAt).fromNow()}</div>
    </div>
  );
};

export default Message;
