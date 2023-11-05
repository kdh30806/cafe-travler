import React from "react";
import styled from "styled-components";
import LoginButton from "../common/LoginButton"

const LoginButtonWrapper = styled.div`
    width: 100%;
    height: auto;
    text-align: center;
`;

function LoginButtonGroup(props){
    return (
        <LoginButtonWrapper>
            <LoginButton type="naver"/>
            <LoginButton type="kakao"/>
        </LoginButtonWrapper>
    );
}

export default LoginButtonGroup;