import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h2`
color: ${props => props.color}
margin-bottom: 10px;
padding-bottom:10px;
`
const Title = (props) => {
    return <StyledTitle {...props}/>
}
export default Title;