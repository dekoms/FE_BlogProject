import List from "../List"
import GuestBook from "../GuestBook"
import styled from "styled-components"


function GuestBookPage(){
    const StyledBody = styled.div`
        display: flex;
        flex-direction: row;
    `;

    return (
        <>
        <div> GuestBook page </div>
            <StyledBody>
                <List/>
                <GuestBook/>
            </StyledBody>
            
        </>
    );
}

export default GuestBookPage;
