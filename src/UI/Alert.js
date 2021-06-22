import React from 'react';
import styled from 'styled-components';

const StyledAlert = styled.div`
    padding: 20px;
    background: rgb(224, 210, 82);
    color: rgb(66, 82, 230);
    text-align: center;
    
`

export const Alert = ({...props}) => {
    return <StyledAlert {...props }>
        <h1>{props.text }</h1>
           </StyledAlert>
};
