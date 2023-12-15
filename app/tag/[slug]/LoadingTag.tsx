import React from "react";

export default function LoadingTag() {
  return (
    <div className="loading-container">
      <div className="loading-text">Loading</div>
      <div className="loading-dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
}
