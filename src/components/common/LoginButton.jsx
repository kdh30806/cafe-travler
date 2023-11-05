import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import naver from "../../assert/images/naver-login.png"
import kakao from "../../assert/images/kakao-login.png"

const StyledLoginButton = styled.a`
    display: inline-block;
    width: 500px;
    height: 50px;
    border-radius: 12px;
    margin: 0 auto;
    background-repeat: no-repeat;

    ${(props) => {
        const {type} = props;
        if(type === 'naver'){
           return `
                background-image: url(${naver});
                background-color: #03C75A;
                background-position: 50% -2px;
                background-size: 200px;
           `;
        } else if(type === 'kakao'){
            return `
                background-image: url(${kakao});
                background-color: #FEE500;
                background-position: 49% -5px;
                background-size: 120px;
            `;
        }
    }}
`;

function LoginButton(props){
    const {type} = props;
    const navigate = useNavigate();

    return <StyledLoginButton type={type} onClick={() => {navigate('/additional');}}></StyledLoginButton>;
}

export default LoginButton;