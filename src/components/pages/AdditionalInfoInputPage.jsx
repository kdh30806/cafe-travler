import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextMessage from "../common/TextMessage";

const Wrapper = styled.div`
    width: 768px;
    height: 100vh;
    margin: 0 auto;
    box-sizing: border-box;
`;

function AdditionalPage(props){
    return(
        <Wrapper>
            <TextMessage align="left" content="닉네임을 입력해주세요!"/>
        </Wrapper>
    );
} 

export default AdditionalPage;