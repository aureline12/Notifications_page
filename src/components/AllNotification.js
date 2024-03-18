import React, { useState } from "react";
import "../styles/AllNotification.css";
import UnreadNotifications from "./Notifications";
import { values } from "../data/data";

const AllNotification = () => {
  const [data, setData] = useState(values);
  const handleClick = (value) => {
    setData(
      data.filter((val) => {
        if (val.id === value.id) {
          val.isRead = true;
        }
        return val;
      })
    );
  };
  const markAllRead = () => {
    setData(
      data.filter((val) => {
        if (!val.isRead) {
          val.isRead = true;
        }
        return val;
      })
    );
  };
  return (
    <div className="h-100 d-flex flex-column justify-content-center align-items-center">
      <div className="card bg-white border-0 cardContainer">
        <div className="d-flex justify-content-between">
          <h6>
            Notifications{" "}
            {data.filter((val) => !val.isRead).length > 0 && (
              <span className="badge badge-primary">
                {data.filter((val) => !val.isRead).length}
              </span>
            )}
          </h6>
          <p className="read text-secondary" onClick={markAllRead}>
            Mark all as read{" "}
          </p>
        </div>
        {data.map((value, index) => (
          <UnreadNotifications
            key={index}
            image={value.image}
            name={value.name}
            text={value.text}
            subText={value.subText}
            time={value.time}
            isRead={value.isRead}
            id={value.id}
            subNotification={value.subNotification}
            message={value.message}
            handleClick={() => handleClick(value)}
          />
        ))}

{/* <div className="pt-md-3">
        <a href="" target="_blank">Frontend Mentor</a> challenge coded by <a href="" target="_blank">Aureline Sonia</a>
      </div> */}
      </div>
       <div className="pt-md-3">
        <a href="https://www.frontendmentor.io/home" target="_blank">Frontend Mentor</a> challenge coded by <a href="https://www.linkedin.com/in/aureline-sonia-motouom-65472a174/" target="_blank">Aureline Sonia</a>
      </div> 
    </div>
  );
};

export default AllNotification;
