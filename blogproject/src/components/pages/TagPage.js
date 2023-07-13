import React from "react";
import Tag from "../Tag";

function TagPage(){

    return (
        <>
            <List/>
            <Tag/>
            
            <Routes>
                <Route path="" element={<Body/>}></Route>
            </Routes>
        </>
    );
}

export default TagPage;
