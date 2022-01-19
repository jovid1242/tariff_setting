import React, { useState } from "react";
import "../../styles/social.scss";

export default function Social({ change }) {
  const [activeTab, setactiveTab] = useState([""]);

  const removeActive = (e) => {
    const findActive = activeTab.filter((item) => item !== e);
    setactiveTab(findActive);
  };

  const handleClick = (e) => {
    const findActive = activeTab.find((item) => item === e);
    if (!findActive) {
      setactiveTab((prev) => [...prev, e]);
    } else {
      removeActive(e);
    }
    change(activeTab.length + 1);
  };

  const arrSocial = ["facebook", "instagram", "whatsapp", "telegram"];

  return (
    <div>
      <div className="social">
        <ul>
          {arrSocial?.map((el, i) => {
            return (
              <li
                className={
                  activeTab.find((item) => item === el) ? "activeTab" : ""
                }
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
