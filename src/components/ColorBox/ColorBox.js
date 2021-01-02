import React, { useState } from 'react';

import './ColorBox.scss';

ColorBox.propTypes = {

};

function getRandomColor() {
  const COLOR_LIST = ['deeppink','green','yellow','red','black'];
  const randomIndex = Math.floor(Math.random()*5);
  return COLOR_LIST[randomIndex];
}

function ColorBox() { 
  const [color, setColor] = useState(()=>{
    const initColor = localStorage.getItem('box_color') || 'deeppink';//get color khi click
    return initColor;
  });//chạy initial state :truyền vào 1 callback cho useState vì chỉ sử dụng 1 lần khi click

  function handleBoxClick(){
    //get Random Color
    const newColor = getRandomColor();
    setColor(newColor);

    localStorage.setItem('box_color',newColor);// save color to Local storage
  }

  return (
    <div 
      className = "color-box" 
      style={{backgroundColor:color}} 
      onClick = {handleBoxClick}
    >
    </div>
  );
}

export default ColorBox;