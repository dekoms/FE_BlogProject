import { useState } from "react";
import styled from "styled-components"

function Home(){
    const StyledBody = styled.div`
        display: flex;
        flex-direction: column;
        width: 1200px;
    `;


    const [count, setCount] = useState(0);
    const [date, setDate] = useState("2023.7.13");
        //year,
        //month,
        //day

    
    return (
        <StyledBody>
            <h3>전체 글 {count}</h3>

            <h3>환영합니다!</h3>
            <p>#1 글을 작성하고 블로그를 관리해보세요.말문희막힘님의 회원 가입을 진심으로 축하합니다. 이 글은 비공개로 작성돼 있습니다.'편집'으로 내용을 바꾸시거나, 삭제 후 '새 글을 작성'하셔도 됩니다.글 뿐만 아니라 블로그의 각종 설정을 변경할 수도 있습니다. '블로그관리'를 확인해보세요.#2 다양한 스킨이 있어요.티스토리에 있는 다양한 '스킨'도 살펴 보세요.블로그나 사이트를 사용하...</p>
            <p>{date}</p>
            <img></img>
        </StyledBody>
    );
}

export default Home;
