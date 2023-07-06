import React, { useState } from "react";

function Header(){
    const [text, setText] = useState('');

    const managePosts = (e) => {
        {/* 페이지 Body 부분 리렌더링 */}
    }
    const manageCategories = (e) => {
        {/* 페이지 Body 부분 리렌더링 */}
    }
    const manageNotices = (e) => {
        {/* 페이지 Body 부분 리렌더링 */}
    }

    const manageComments = (e) => {
        {/* 페이지 Body 부분 리렌더링 */}
    }
    const manageGuestBooks = (e) => {
        {/* 페이지 Body 부분 리렌더링 */}
    }

    const manageBlogs = (e) => {
        {/* 페이지 Body 부분 리렌더링 */}
    }

    return (
        <>
            <button>데이터 필요</button>
            <input type="text" value={text} onChange={(e)=>{
                setText(e.target.value);
            }}></input>
            <button onClick={managePosts}>데이터 필요</button>

            <button onClick={managePosts}>홈</button>
            <button onClick={manageCategories}>태그</button>
            <button onClick={manageNotices}>방명록</button>

        </>
    );
}

export default Header;
