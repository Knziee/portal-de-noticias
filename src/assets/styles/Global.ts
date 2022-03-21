import { createGlobalStyle } from "styled-components";

import styled from 'styled-components'


export default createGlobalStyle`

*{
    padding: 0;
    margin:0;
    box-sizing: border-box;
    font-family: 'Times New Roman', Times, serif
}

a, a:visited, a:active {
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: inherit;
    color: inherit;

}

`;


export const BackgroundColor = styled.div`
/* background-color: #0D1117; */
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
/* background-color: #0D1117; */
display:flex;
align-items:center;
flex-wrap:wrap;
justify-content: center;
gap:20px;
margin-bottom:200px;
margin-left:-4%;
`;

