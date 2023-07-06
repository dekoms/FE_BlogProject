import React from "react";
import { SignInBox } from "styles/SignContainer.styled";
//import {useNavigate} from 'react-router-dom';
import { LoginForm } from "components/Auth";

const SignInPage = () => {
    const navigate = useNavigate();

    return (
        <SignInBox> {/* styled-component */}
            <h2>로그인</h2>

            <LoginForm/>

            <div className="bottom-signup">
                <button className="searchPwBtn" onClick={() => navigate('/searchPw')}
                >비밀번호 찾기</button>
                <button className="searchIdBtn" onClick={() => navigate('/searchId')}
                >아이디 찾기</button>
                <button className="signupBtn" onClick={() => navigate('/register')}
                >회원가입</button>
                
            </div>
        </SignInBox>
    )
}

export default SignInPage;