import React from "react";

const scaleNames = {
  c: "섭씨",
  f: "화씨",
};

type Props = {
  scale: "c" | "f";
  temperature: string | number;
  onTemperatureChange: (value: string | number) => void;
};

function TemperatureInput(props: Props) {
  const handleChange = (e: any) => {
    props.onTemperatureChange(e.target.value);
  };
  return (
    <fieldset>
      <legend>온도를 입력해주세요(단위: {scaleNames[props.scale]})</legend>
      <input type="number" value={props.temperature} onChange={handleChange} />
    </fieldset>
  );
}

export default TemperatureInput;
