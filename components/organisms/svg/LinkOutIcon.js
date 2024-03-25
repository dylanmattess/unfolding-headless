import React from "react";

const LinkOutIcon = ({ width, height, color }) => {
  return (
    <svg
      width={width || "100%"}
      height={height || "100%"}
      viewBox="0 0 11 10"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.439941 0.907898C0.190641 0.907898 0 1.09854 0 1.34784V9.56006C0 9.80936 0.190641 10 0.439941 10H8.65216C8.90146 10 9.0921 9.80936 9.0921 9.56006V4.86736H8.21222V9.12012H0.879881V1.78778H5.13264V0.907898C5.13264 0.922563 0.439941 0.922563 0.439941 0.907898Z" />
      <path d="M5.08863 5.52859L9.13609 1.4958V3.12358H10.016V0H6.87773V0.879881H8.50551L4.47272 4.91267L5.08863 5.52859Z" />
    </svg>
  );
};

export default LinkOutIcon;
