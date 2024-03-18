import React from "react";
import "../styles/Notification.css";

const Notification = ({
  image,
  name,
  text,
  subText,
  time,
  isRead,
  secondImage,
  subNotification,
  message,
  handleClick
}) => {
  return (
    <div>
      <div
        className={`card p-2 d-flex flex-row justify-content-between border-0 mb-2 ${
          isRead ? "readNotif" : "unreadNotif"
        }`}
        onClick={handleClick}
      >
        <div className="d-flex flex-row">
          <img src={`images/${image}`} className="img-fluid img" />
          <div className="d-flex flex-column align-items-start ">
            <div className="d-flex ms-2 justify-content-between">
              <span className="text-secondary text-start">
                <span className="fw-bold name">{name}</span> {text}
                <span
                  className="fw-bold subText"
                  data-status={isRead ? "read" : "unread"}
                >
                  {subText}{" "}
                </span>
              </span>
            </div>
            <span className="text-muted ms-3">{time}</span>
            {subNotification && (
              <div className="card p-2 text-secondary mt-1 subNotification">{message}</div>
            )}
          </div>
        </div>

        {secondImage && (
          <img src={`images/${secondImage}`} className="img-fluid img" />
        )}
      </div>
    </div>
  );
};

export default Notification;
