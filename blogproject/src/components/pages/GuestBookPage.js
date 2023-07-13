import React from "react";

function GuestBookPage(){

    return (
        <>
            <List/>
            <GuestBook/>
            
            <Routes>
                <Route path="" element={<Body/>}></Route>
            </Routes>
        </>
    );
}

export default GuestBookPage;
