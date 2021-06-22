import React from 'react';
// import './form.css'
// import Field from '../noused/field';
import styled from 'styled-components';

const StyledForm = styled.div`
display: flex;
flex-direction: ${props => props.direction || 'row'} ;
align-items: ${props => props.align || 'flex-start'} ;
flex-wrap: wrap;
padding: 40px 20px;

width: 440px;
// height: 611px;
top: 0px;

background: #FFFFFF;
box-shadow: 0px 5px 20px;
color: rgb(36, 10, 10);

`

const Form = ({props,children}) => {
    return (
        <StyledForm {...props}>
            {children}
        </StyledForm>
    );
};

export default Form;