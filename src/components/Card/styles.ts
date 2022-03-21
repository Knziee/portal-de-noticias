import styled from 'styled-components'



export const CardBackground = styled.div`
background-color: white;
width: 600px;
min-height: 400px;
max-height:400px;
border-radius: 20px;
display:flex;
justify-content:center;
margin-left:1%;
img {
    object-fit:cover;
    height:390px;
    border-radius:16px;
    max-width:180px;
    margin-top:5px;
    margin-left:5px
}
`

export const CardText = styled.div`
margin-left:39px;
margin-top:20px;
`

export const CardTitle = styled.div`
font-size: 26px;
`

export const CardDescription = styled.div`
font-size: 18px;
margin-top:20px;
max-height:10px;
`

export const CardButton = styled.button`
position:absolute;
font-size: 20px;
padding: 10px 10px 10px;
color: #ffff;
background-color: red;
border: none;
border-radius:5px;
margin-top:330px
`