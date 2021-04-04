import React from "react";
import "./bannerStyle.scss";

export default function Banner({ title, subtitle, children }) {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div />
      <p>{subtitle}</p>
      {children}
    </div>
  );
}