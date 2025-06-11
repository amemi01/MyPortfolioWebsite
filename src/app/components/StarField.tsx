"use client";

import React from "react";

type StarLayerProps = {
  count: number;
  size: number;
  animationDuration: number;
};

function generateStarBoxShadow(count: number, maxWidth: number, maxHeight: number): string {
  const stars = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * maxWidth);
    const y = Math.floor(Math.random() * maxHeight);
    stars.push(`${x}px ${y}px white`);
  }
  return stars.join(", ");
}

const StarLayer: React.FC<StarLayerProps> = ({ count, size, animationDuration }) => {
  const boxShadow = generateStarBoxShadow(count, 2000, 2000); // ← キャンバスサイズ調整
  const style: React.CSSProperties = {
    width: size,
    height: size,
    background: "transparent",
    boxShadow,
    position: "absolute",
    top: 0,
    left: 0,
    animation: `animStar ${animationDuration}s linear infinite`,
  };

  const afterStyle: React.CSSProperties = {
    content: '""',
    position: "absolute",
    top: 2000,
    width: size,
    height: size,
    background: "transparent",
    boxShadow,
  };

  return (
    <div style={style}>
      <div style={afterStyle} />
    </div>
  );
};

export const StarField = () => {
  return (
    <>
      <StarLayer count={300} size={1} animationDuration={50} />
      <StarLayer count={150} size={2} animationDuration={100} />
      <StarLayer count={80} size={3} animationDuration={150} />
    </>
  );
};
