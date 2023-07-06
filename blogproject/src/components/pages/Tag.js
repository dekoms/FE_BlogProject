function Main(){

    return (
        <>
            <List/>
            <Home/>
            
            <Routes>
                <Route path="" element={<Body/>}></Route>
            </Routes>
        </>
    );
}

export default Main;
