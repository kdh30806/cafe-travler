import React from "react";
import styled from "styled-components";

const StyledTextMessage = styled.h2`
    width: 100%;
    font-size: 22px;
    font-weight: bold;
    text-align: ${props => props.align || 'left'};
`;

function TextMessage(props){
    const {content, align} = props;
    return <StyledTextMessage align={align}>{content}</StyledTextMessage>;
}

export default TextMessage;