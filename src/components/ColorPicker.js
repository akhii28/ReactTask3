import React, { useState } from 'react';
import "./colorpicker.css";

export const ColorPicker = ({colors}) => {
  const [isColorListVisible, setIsColorListVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('white');

  const handleClick = () => {
    setIsColorListVisible(!isColorListVisible);
  };

  const handleColorClick = (color, event) => {
    event.preventDefault();
    setSelectedColor(color);
    setBackgroundColor(color);
    setIsColorListVisible(false);
  };

  return (
    <div className="color-picker" style={{ backgroundColor: backgroundColor }}>
      <button className="color-button" onClick={handleClick}>Pick a color</button>
      {isColorListVisible && (
        <ul className="color-list">
          {colors.map((color, index) => (
            <li key={index} onClick={handleColorClick.bind(null,color)} style={{backgroundColor: color}}>
             
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};