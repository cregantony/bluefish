import React from "react"
import styled, {keyframes} from "styled-components"
import water from "../images/wave.svg"

const Ocean = styled.div `
    height: 5%;
    width:100%;
    position:absolute;
    bottom:0;
    left:0;
    background: white;
`;

const OceanContainer = styled.div `
background:radial-gradient(ellipse at center, rgba(255,254,234,1) 0%, rgba(255,254,234,1) 35%, #B7E8EB 100%);
overflow: hidden;
height:100%;
`;

const wavey = keyframes`
  from {
    margin-left: 0;
  }

  to {
    margin-left: -1600px;
  }
`;

const swell = keyframes`
0%, 100% {
    transform: translate3d(0,-35px,0);
  }
  50% {
    transform: translate3d(0,15px,0);
  }
`;


const Wave = styled.div `
    background: url(${water}) repeat-x; 
    position: absolute;
    top: -128px;
    width: 6400px;
    height: 198px;
    animation: ${wavey} 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
    transform: translate3d(0, 0, 0);

`;


const SecondWave = styled.div `
    background: url(${water}) repeat-x; 
    position: absolute;
    top: -105px;
    width: 6400px;
    height: 198px;
    animation: ${wavey} 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite, ${swell} 7s ease -1.25s infinite;;
    transform: translate3d(0, 0, 0);
    opacity: 1;
    `;


const Waves = () => (
<OceanContainer>
    <Ocean>
        <Wave/>
        <SecondWave/>
    </Ocean>
</OceanContainer>
)

export default Waves