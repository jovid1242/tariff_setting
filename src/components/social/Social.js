import React, { useState } from "react";
import "../../styles/social.scss";

export default function Social() {
  const [activeTab, setactiveTab] = useState("");

  const handleClick = (e) => {
    setactiveTab(e);
  };
  return (
    <div>
      <div className="social">
        <ul>
          <li
            className={activeTab === "facebook" ? "activeTab" : ""}
            onClick={() => handleClick("facebook")}
          >
            <i
              className="fab fa-facebook"
              style={{ color: "#fff", width: "25px", height: "25px" }}
            ></i>
          </li>
          <li
            className={activeTab === "instagram" ? "activeTab" : ""}
            onClick={() => handleClick("instagram")}
          >
            <i
              className="fab fa-instagram"
              style={{ color: "#fff", width: "25px", height: "25px" }}
            ></i>
          </li>
          <li
            className={activeTab === "telegram" ? "activeTab" : ""}
            onClick={() => handleClick("telegram")}
          >
            <i
              className="fab fa-telegram"
              style={{ color: "#fff", width: "25px", height: "25px" }}
            ></i>
          </li>
          <li
            className={activeTab === "whatsapp" ? "activeTab" : ""}
            onClick={() => handleClick("whatsapp")}
          >
            <i
              className="fab fa-whatsapp"
              style={{ color: "#fff", width: "25px", height: "25px" }}
            ></i>
          </li>
        </ul>
      </div>
    </div>
  );
}
