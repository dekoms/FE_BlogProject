import {Link, useNavigate} from "react-router-dom"
import styled from "styled-components"

function List(){
    const StyledBody = styled.div`
        display: flex;
        flex-direction: column;
        width: 300px;
    `;
    const StyledButtons = styled.div`
        display: flex;
        flex-direction: row;
    `;

    const navigate = useNavigate();

    const navigateToFirst = () => {
        navigate("/first");
    }
    const navigateToBlog = () => {
        navigate("/blog");
    }
    const navigateToNew = () => {
        navigate("/new");
    }

    return (
        <StyledBody>
            <Link to="/">분류 전체보기</Link>
            <p>데이터 필요</p>

            <Link to="/">공지사항</Link>
            <p>데이터 필요</p>

            <Link to="/">최근글</Link>
            <Link to="/">데이터 필요-컴포넌트</Link>
            {/*<img></img>*/}

            <p>최근댓글</p>
            <p>데이터 필요</p>

            <Link to="/TagPage">태그</Link>
            <StyledButtons>
                <button onClick={navigateToFirst}>첫글</button>
                <button onClick={navigateToBlog}>블로그</button>
                <button onClick={navigateToNew}>새글</button>
            </StyledButtons>
        </StyledBody>
    );
}

export default List;
