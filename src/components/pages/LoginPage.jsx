import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LoginButtonGroup from "../layout/LoginButtonGroup";
import Logo from "../../assert/images/Logo.png"

const LogoImg = styled.img`
    width: 691px;
    height: 194px;
    margin-bottom: 50px;
`;

const Wrapper = styled.div`
    width: 768px;
    height: 100vh;
    margin: 0 auto;
    padding: 150px 40px;
    box-sizing: border-box;
`;

function LoginPage(props){
    return(
        <Wrapper>
            <LogoImg src={Logo} />
            <LoginButtonGroup />
        </Wrapper>
    );
} 

export default LoginPage;