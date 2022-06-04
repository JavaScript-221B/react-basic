import React from "react";

const Clock = (props: any) => {
  return (
    <div>
      <h1>안녕, 리액트!</h1>
      <h2>현재 시각: {new Date().toLocaleTimeString()}</h2>
    </div>
  );
};

export default Clock;
