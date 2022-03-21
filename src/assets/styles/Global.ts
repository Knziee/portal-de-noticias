import { createGlobalStyle } from "styled-components";
// import font from 'https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Finger+Paint&family=Lato:ital,wght@0,700;1,900&family=Montserrat:wght@400;600;700;800;900&family=Roboto:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap';
import styled from 'styled-components'


export default createGlobalStyle`

*{
    padding: 0;
    margin:0;
    box-sizing: border-box;
}

a, a:visited, a:hover, a:active {
    text-decoration: inherit;
    color: inherit;
}

`;


export const BackgroundColor = styled.div`
background-color: #0D1117;
min-height:1080px;
height: 100%;
width: 100%;
display:flex;
align-items:center;
justify-content: center;

`;

export const WrapperFeed = styled.div`
margin-top:3%;
max-width: 1280px;
background-color: #0D1117;
display:flex;
align-items:center;
flex-wrap:wrap;
justify-content: center;
gap:20px;
margin-bottom:200px;
margin-left:-1%;
`;

