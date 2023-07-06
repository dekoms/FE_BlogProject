import { Body } from './components';
import Header from './components/Header'
import Main from './components/pages/Main'

function App(){

    return (
        <>
            <Header/>
            <Main/>
                        {/* 
                            Main과 Home 어떻게 할지...
                            처음 생성되는 페이지는 Header + Main
                            여기서 홈을 누르면 Header를 제외한 Home이 리렌더링 됨(Main -> Home)
                        */}
            <Routes>
                <Route path="" element={<Home/>}></Route>
                <Route path="" element={<Tag/>}></Route>
                <Route path="" element={<GuestBook/>}></Route>
            </Routes>
        </>
    );
}

export default App;
