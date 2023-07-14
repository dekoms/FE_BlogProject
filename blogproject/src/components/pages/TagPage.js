import Tag from "../Tag";
import List from "../List";
import styled from "styled-components"

function TagPage(){
    const StyledBody = styled.div`
        display: flex;
        flex-direction: row;
    `;

    return (
        <>
        <div> Tag page </div>
            <StyledBody>
                <List/>
                <Tag/>
            </StyledBody>
        </>
    );
}

export default TagPage;
