// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items : center;
    min-height: 100vh;
    background : linear-gradient(to bottom,#161617,#3c2940,  #0b0c1e);
`

export const ImageCard = styled.img`
 height: 100px;
 width: 100px;
 margin: 10px;
`
export const TextContainer = styled.p`
font-size: 32px;
font-family: "Roboto";
font-weight: 700;
color: #ffffff;
 margin: 40px;
`
export const ButtonText = styled.button`
padding: 10px;
background-color: #06b6d4;
color: #ffffff;
border: 0;
border-radius: 6px;

`
