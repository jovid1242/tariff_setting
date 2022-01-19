import React, { useEffect, useState } from "react";
import RangeSlider from "../components/rangeSlider/RangeSlider";
import Social from "../components/social/Social";

import http from "../http";

import "../styles/home.scss";

export default function Home() {
  const [minutes, setMinutes] = useState();
  const [sms, setSms] = useState();
  const [enternet, setEnternet] = useState();

  const arrNumMinut = [100, 200, 300, 600];
  const arrNumSms = [0, 50, 100, 150];
  const arrNumEnternet = [5, 10, 15, 25];

  return (
    <div className="cell_section">
      <div className="container">
        <div className="range_section">
          <div className="range_minutes">
            <h1>Настройте Тариф</h1>
            <div className="info">
              <h2 className="info_title">Минуты</h2>
              <p>На Tele2 росии безлимитно </p>
              <p>на другие мобильные номера домашнего региона</p>
            </div>
            <RangeSlider
              min={0}
              max={600}
              from={0}
              to={100}
              step={100}
              values={arrNumMinut}
              postfix={"Мин"}
              onChange={setMinutes}
            />
          </div>
          <div className="range_sms">
            <div className="info">
              <h2 className="info_title">Смс</h2>
            </div>
            <RangeSlider
              min={0}
              max={600}
              from={0}
              to={100}
              step={100}
              values={arrNumSms}
              postfix={" "}
              onChange={setSms}
            />
          </div>
          <div className="range_enternet">
            <div className="info">
              <h2 className="info_title">Интернет</h2>
            </div>
            <RangeSlider
              min={0}
              max={600}
              from={0}
              to={100}
              step={100}
              values={arrNumEnternet}
              postfix={"Гб"}
              onChange={setEnternet}
            />
          </div>
          <div className="range_social">
            <div className="info">
              <h2 className="info_title">Соцсети</h2>
            </div>
            <Social />
          </div>
        </div>

        <div className="result">
          <span>480 руб/месяц</span>
        </div>
      </div>
    </div>
  );
}
