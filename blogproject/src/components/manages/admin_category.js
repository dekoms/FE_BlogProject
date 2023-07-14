import { admin_category } from ".";

function admin_category(){
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
            <img>콘텐츠 이미지</img>
            <h3>콘텐츠</h3>
            <button onClick={managePosts}>게시물 관리</button>
            <button onClick={manageCategories}>카테고리 관리</button>
            <button onClick={manageNotices}>공지 관리</button>

            <img>댓글 이미지</img>
            <h3>댓글∙방명록</h3>
            <button onClick={manageComments}>댓글 관리</button>
            <button onClick={manageGuestBooks}>방명록 관리</button>

            <img>관리 이미지</img>
            <h3>관리</h3>
            <button onClick={manageBlogs}>블로그</button>
        </>
    );
}

export default admin_category;
