/** @format */

import ColorBox from "./ColorBox";
import "./ColorBoxGrid.css";

function ColorBoxGrid({ colors }) {
  const colorGrid = [];
  for (let i = 0; i < 25; i++) {
    colorGrid.push(<ColorBox colors={colors} />);
  }
  return <div className='ColorBoxGrid'>{colorGrid}</div>;
}

export default ColorBoxGrid;
