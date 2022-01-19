import React from "react";
import IonRangeSlider from "react-ion-slider";
export default function RangeSlider({
  min,
  max,
  step,
  values,
  postfix,
  onChange,
}) {
  return (
    <>
      <IonRangeSlider
        type="single"
        skin="flat"
        min={min}
        max={max}
        step={step}
        values={values}
        grid={true}
        grid_num={4}
        grid_snap={false}
        drag_interval={false}
        keyboard={true}
        postfix={postfix}
        onChange={(e) => onChange(e.from_value)}
      />
    </>
  );
}
