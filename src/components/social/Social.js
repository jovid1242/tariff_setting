import React, { useEffect, useState } from "react";
import "../../styles/social.scss";

export default function Social({ change }) {
  const [activeTab, setactiveTab] = useState([]);

  const removeActive = (element) => {
    const findActive = activeTab.filter((item) => item !== element);
    setactiveTab(findActive);
  };

  const handleClick = (element) => {
    const findActive = activeTab.find((item) => item === element);
    if (!findActive) {
      setactiveTab((prev) => [...prev, element]);
    } else {
      removeActive(element);
    }
  };

  useEffect(() => {
    change(activeTab.length + 1);
  }, [activeTab]);

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
