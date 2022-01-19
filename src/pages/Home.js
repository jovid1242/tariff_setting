import React, { useEffect, useState } from "react";
import RangeSlider from "../components/rangeSlider/RangeSlider";
import Social from "../components/social/Social";
import http from "../http";
import "../styles/home.scss";

export default function Home() {
  const arrNumMinut = [100, 200, 300, 600];
  const arrNumSms = [0, 50, 100, 150];
  const arrNumEnternet = [5, 10, 15, 25];

  const [minutes, setMinutes] = useState(arrNumMinut[0]);
  const [sms, setSms] = useState(arrNumSms[0]);
  const [enternet, setEnternet] = useState(arrNumEnternet[0]);
  const [social, setSocial] = useState(0);

  const [allSum, setAllSum] = useState(0);

  const sendForm = (arg, type) => {
    http
      .post("/tariff_settings", { type: type, count: arg })
      .then((res) => {
        setAllSum(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    sendForm(minutes, "minute");
  }, [minutes]);

  useEffect(() => {
    sendForm(sms, "sms");
  }, [sms]);

  useEffect(() => {
    sendForm(enternet, "enternet");
  }, [enternet]);

  useEffect(() => {
    sendForm(social, "social");
  }, [social]);

  // useEffect(() => {
  //   setAllSum(minutes * 10 + sms * 15 + enternet + 25 + social);
  // }, [minutes, sms, enternet, social]);

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
              min={arrNumMinut[0]}
              max={arrNumMinut[arrNumMinut.length - 1]}
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
              min={arrNumSms[0]}
              max={arrNumSms[arrNumSms.length - 1]}
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
              min={arrNumEnternet[0]}
              max={arrNumEnternet[arrNumEnternet.length - 1]}
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
            <Social change={setSocial} />
          </div>
        </div>

        <div className="result">
          <span>{allSum} руб/месяц</span>
        </div>
      </div>
    </div>
  );
}
