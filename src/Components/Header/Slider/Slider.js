import React from 'react';
import Styled from 'styled-components';

const Button = Styled.button`
font-family:sans-serif;
font-size:1.3em;
border:none;

border-radius:5px;`;

const MySlider = Styled.div`
.nav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 20;
  right: 0;
  background-color: #0c0b10;
  opacity: 0.9;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.7s;
}
`;

const Slider = (props) => {
  function openSilde() {
    document.getElementById('menu').style.width = '450px';
    document.getElementById('content').style.marginRight = '0px';
  }
  function CloseSlide() {
    document.getElementById('menu').style.width = '0';
    document.getElementById('content').style.marginRight = '0';
  }
  return (
    <MySlider>
      <div id="content">
        <Button onClick={openSilde}>Clickme</Button>
        <div id="menu" className="nav">
          <Button onClick={CloseSlide}>Close me</Button>
        </div>
      </div>
    </MySlider>
  );
};
export default Slider;
