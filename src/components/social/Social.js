import React, { useState } from "react";
import "../../styles/social.scss";

export default function Social({ change }) {
  const [activeTab, setactiveTab] = useState("");

  const handleClick = (e) => {
    setactiveTab(e);
    change(e);
  };

  const arrSocial = ["facebook", "instagram", "whatsapp", "telegram"];

  return (
    <div>
      <div className="social">
        <ul>
          {arrSocial?.map((el, i) => {
            return (
              <li
                className={activeTab === el ? "activeTab" : ""}
                onClick={() => handleClick(el)}
                key={i}
              >
                <i
                  className={`fab fa-${el}`}
                  style={{ color: "#fff", width: "25px", height: "25px" }}
                ></i>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
