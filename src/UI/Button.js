import React from 'react';
import styled from 'styled-components';


const StyledButton = styled.button`

color: ${props => (props.disabled ? '#828282' : 'white')};
background: ${props => (props.disabled ? '#E3E3E3' : '#007693')};

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 18px 25x;
width: 380px;
height: 50px;
border-radius: 8px;
margin: 20px auto;


${props => props.disabled} {
    &:hover {
        background: #0086A8;
    }
}
`
const Button =(props) => {
    return (
        <StyledButton {...props }/>
    );
};
export default Button;


