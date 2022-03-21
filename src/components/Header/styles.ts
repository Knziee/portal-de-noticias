import styled from 'styled-components'


export const Container = styled.header`
background-color: #C00000;
height: 10vh;
`;

export const Wrapper = styled.div`
max-width: 1140px;
margin: 0 auto;
display:flex;
align-items: center;
gap:30px;

`;

export const Logo1 =styled.h1`
color: #fff;
margin-left: -30px;
margin-right: -15px;
font-family: Arial, Helvetica, sans-serif;
font-weight: 100;
text-transform: uppercase;
transform: rotate(-90deg);
font-size:25px;

`;
export const Logo2 =styled.h1`
color: #fff;
font-family: Arial, Helvetica, sans-serif;
font-weight: 600;
text-transform: uppercase;
font-size:80px;
margin-right: -15px;
margin-top:10px;
margin-left: -30px;
`;
export const Logo3 =styled.h1`
color: #fff;
font-family: Arial, Helvetica, sans-serif;
font-weight: 100;
text-transform: uppercase;
font-size:80px;
margin-top:10px;
`;

export const Menu = styled.nav`
display:flex;
align-items: center;
justify-content: space-between;
gap:20px;
margin-top: 43px;
color: #fff;
font-size: 23px;

a:hover {
    cursor: pointer;
    transform: scale(1.03);
}
`;


