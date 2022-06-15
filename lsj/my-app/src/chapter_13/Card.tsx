import React from "react";

type Props = {
  title: string;
  backgroundColor?: string;
  color?: string;
  children: React.ReactNode;
};

function Card({ title, backgroundColor, color, children }: Props) {
  return (
    <div
      style={{
        margin: 8,
        padding: 8,
        borderRadius: 8,
        boxShadow: "0px 0px 4px grey",
        color: color || "black",
        backgroundColor: backgroundColor || "white",
      }}
    >
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
}

export default Card;
