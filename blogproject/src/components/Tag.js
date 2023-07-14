import { useNavigate } from "react-router-dom";
import styled from "styled-components"

function Tag(){
    const StyledBody = styled.div`
        display: flex;
        flex-direction: column;
        width: 1200px;
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
        <>
            <StyledBody>
                <h3>태그</h3>
                <StyledButtons>
                    <button onClick={navigateToFirst}>첫글</button>
                    <button onClick={navigateToBlog}>블로그</button>
                    <button onClick={navigateToNew}>새글</button>
                </StyledButtons>
            </StyledBody>
        </>
    );
}

export default Tag;
