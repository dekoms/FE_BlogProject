import { useState, useEffect } from "react";
import styled from "styled-components"

function GuestBook() {
    const StyledBody = styled.div`
        display: flex;
        flex-direction: column;
        width: 1200px;
    `;

    const [secret, isSecret] = useState(false);

    const isChecked = (e) =>{
        isSecret(e.target.value);
    }

    const signUp = (e) =>{
        
    }

    const useEffect = (() =>{
        signUp();
    });

    return (
        <>
        <StyledBody>
            <h3>방명록</h3>
            <input
                type="text"
                placeholder="여러분의 소중한 댓글을 입력해주세요."
            />
            <input
            type="checkbox"
            checked={secret}
            onChange={isChecked}
            />비밀글
            <button onClick={signUp}>등록</button>
        </StyledBody>
        </>
    );
}

export default GuestBook;
