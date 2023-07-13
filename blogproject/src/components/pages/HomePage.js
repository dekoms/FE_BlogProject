import React from "react";

function HomePage(){

    return (
        <>
            <Img/>
            <List/>
            <Home/>
            
            <Routes>
                <Route path="" element={<Body/>}></Route>
            </Routes>
        </>
    );
}

export default HomePage;
