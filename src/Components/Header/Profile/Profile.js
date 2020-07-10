import React from 'react';
import Imagesource from './assets/name.png';
import Styled from 'styled-components';

const Image = Styled.img`
border-radius:50%;
align:right;
margin-left:20%;
width:50px;
height:50px;
box-shadow:0 2px 15px;
`;

const Profile = () => {
  return <Image src={Imagesource} alt="" />;
};
export default Profile;
