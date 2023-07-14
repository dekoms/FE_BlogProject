import { useState } from "react";
import {Link} from 'react-router-dom';
import styled from "styled-components"

function Header(){
    const StyledHeader = styled.div`
        display: flex;
        justify-content: space-between;
    `;
    const HeaderLink = styled(Link)`
        font-size: 3rem;
        display: inline;
        text-decoration: none;
    `;
    const StyledSearch = styled.input`
        font-size: 3rem;
        display: inline;
    `;
    const StyledLink = styled(Link)`
        font-size: 2rem;
        color: blue;
        margin: 0px 30px 0px 0px;
        text-decoration: none;
    `;
    const [text, setText] = useState('');

    return (
        <>
            <StyledHeader>
                <HeaderLink to="/">말문희막힘</HeaderLink>
                <StyledSearch type="text" value={text} onChange={(e)=>{
                    setText(e.target.value);
                }}></StyledSearch>
            </StyledHeader>

            <StyledLink to="/"> 홈</StyledLink>
            <StyledLink to="/TagPage"> 태그</StyledLink>
            <StyledLink to="/GuestBookPage"> 방명록</StyledLink>

        </>
    );
}

export default Header;
