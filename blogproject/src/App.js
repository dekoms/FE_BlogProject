import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import GuestBookPage from './components/pages/GuestBookPage';
import HomePage from './components/pages/HomePage';
import TagPage from './components/pages/TagPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/HomePage" element={<HomePage/>}></Route>
          <Route path="/TagPage" element={<TagPage/>}></Route>
          <Route path="/GuestBookPage" element={<GuestBookPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
