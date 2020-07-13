import React from 'react';
import Styled from 'styled-components';
import Imagesrc from './Save.png';
const Header = Styled.header`
display:flex;
align-items:left;
margin-left:30px;
position:fixed;


h1{ font-family: font-family: Georgia, 'Times New Roman', Times, serif;
font-size:22px;
margin-left:5px;
font-weight:800;

margin-top:0px;
text-align:left;
margin-bottom:0px;
}
h2{ font-family: font-family: Georgia, 'Times New Roman', Times, serif;
font-size:18px;
margin-left:5px;
font-weight:800;
margin-top:0px;
text-align:left;
margin-bottom:0px;
}
img{
margin-top:20px;
border-radius:10px;
margin-bottom:0px;
border-bottom-left-radius: 0px;
border-bottom-right-radius: 0px;
width:150px;

}
div:hover{
background-color:blue;
margin-top:30px;
position:fixed;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
box-shadow:0 0 20px;
border-radius:10px;
width:150px;
height:290px;
transition:0.1s;
}
img:hover{
    margin-top:0px;

}
`;
const Poster = () => {
  return (
    <Header>
      <div className="name">
        <img src={Imagesrc} alt="" />
        <h1>Title</h1>
        <h2>Drama</h2>
      </div>
    </Header>
  );
};
export default Poster;
