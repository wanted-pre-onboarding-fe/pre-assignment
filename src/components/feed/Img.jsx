import React from 'react';
import styled from 'styled-components';

function Img({ imgSrc = '/logo192.png', onLoad }) {
  return <SImg src={imgSrc} onLoad={onLoad} width="100%"></SImg>;
}

export default Img;

const SImg = styled.img`
  display: block;
  margin: auto;
  padding: 0;
`;
