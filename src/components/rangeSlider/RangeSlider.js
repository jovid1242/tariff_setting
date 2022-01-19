import React from "react";
import IonRangeSlider from "react-ion-slider";
export default function RangeSlider({
  min,
  max,
  from,
  to,
  step,
  values,
  postfix,
  onChange,
}) {
  return (
    <>
      <IonRangeSlider
        type="single"
        min={min}
        max={max}
        from={from}
        to={to}
        step={step}
        values={values}
        grid={true}
        grid_num={4}
        grid_snap={false}
        keyboard={true}
        postfix={postfix}
        onChange={(e) => onChange(e.from_value)}
      />
    </>
  );
}
