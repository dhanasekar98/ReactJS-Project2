import React from 'react';
import Input from './Input/input';
import Styled from 'styled-components';
import Profile from './Profile/Profile';
import Slider from './Slider/Slider';

const MyHeader = Styled.header`
display:flex;
height:15vh;
background:#000000;
color:#fff;
align-items:center;
border-top-left-radius: 25px;
border-top-right-radius: 25px;
border-bottom:1px solid #999;

.input{
    font-size:25px;
    background:#262626;
    margin-left:25%;
    border:hidden;
    height:7.5vh;
    border-radius:7.5px;
    width:30%;
    
}
.input::placeholder{
 align-items:center;
}
div{
    font-size:25px;
    font-weight:700;
    font-family: Arial, Helvetica, sans-serif;
    text-transform:uppercase;
    margin-left:5%;
}

`;
const Bottom = Styled.footer`
background-color:#345;
height:550px;

`;

const Header = (props) => {
  return (
    <div>
      <MyHeader>
        <div className="name">Halido</div>
        <Input
          className="input"
          placeholder="Search.."
          type="text"
          name="search"
        />
        <Profile />
      </MyHeader>
      <Bottom className="bottom">
        <Slider />
      </Bottom>
    </div>
  );
};
export default Header;
