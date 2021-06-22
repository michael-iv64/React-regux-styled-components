import React from 'react';
import styled from 'styled-components';


const StyledField = styled.fieldset`
// display: flex;
// display: ${({ display }) => display || 'flex'};
display: ${props => (props.toggled ? 'none' : 'flex')};

flex-direction: row;
align-items: center;
padding: 5px 15px;
width: ${({width}) => width || '180px'};
height: ${({height}) => height || '50px'};
color: ${({color}) => color || '#828282'};
// height: 50px;
left: 0px;
top: 5px;

background: #FFFFFF;
border: ${({border}) => border || '2px solid #E3E3E3'};

box-sizing: border-box;
border-radius: 8px;

// letter-spacing: 0.25px;
// color: #CDCAD0;

font-family: SF UI Display;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 100%;

letter-spacing: 0.25px;
// color: #828282;

flex: none;
order: 0;
flex-grow: 0;
margin: 8px auto ;
`

const FieldSet =(props) => {
    return (
        <StyledField {...props }>
        </StyledField>
    );
};
export default FieldSet;

