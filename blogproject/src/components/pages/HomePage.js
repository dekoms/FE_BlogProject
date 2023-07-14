import List from "../List"
import Home from "../Home"
import Img from "../Img"
import styled from "styled-components"

function HomePage(){
    const StyledBody = styled.div`
        display: flex;
        flex-direction: row;
    `;

    return (
        <>
            <Img/>
        <div> home page </div>
            <StyledBody>
                <List/>
                <Home/>
            </StyledBody>

        </>
    );
}

export default HomePage;
