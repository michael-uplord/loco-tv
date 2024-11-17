import React from 'react';

const Svg = ({ name, width = 20, height = 20, className = "", color = "" }) => {
  const SvgIcon = require(`@/assets/${name}.svg`).default;

  return <SvgIcon width={width} height={height} className={className} fill={color} />;
};

export default Svg;