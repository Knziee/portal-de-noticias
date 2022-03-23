import styled from 'styled-components'
import GiveMePics from '../../assets/images/iWantPicsOfSpiderman.png'



export const CardBackgroundMeme = styled.div`
background-size: 600px 424px;
background-image: url(${GiveMePics});
width: 600px;
height: 400px;
border-radius: 20px;
margin-top: 60px;
`;

export const BackgroundSize = styled.div`
min-height:1080px;
height: 100%;
width: 100%;
display:flex;
align-items:center;
justify-content: center;
flex-wrap:wrap;
gap: 20px;
margin-top: 150px;

`;
