import { List } from ".";

function List(){
    const viewCategories = (e) => {
        {/* 페이지 Body 부분 리렌더링 */}
    }
    const viewNotices = (e) => {
        {/* 페이지 Body 부분 리렌더링 */}
    }
    const latestWriting = (e) => {
        {/* 페이지 Body 부분 리렌더링 */}
    }

    const viweLatestWriting = (e) => {
        {/* 페이지 Body 부분 리렌더링 */}
    }
    const viewTags = (e) => {
        {/* 페이지 Body 부분 리렌더링 */}
    }

    const eachTags = (e) => {
        {/*각 태그들을 누를 때 태그에 해당하는 글 나열*/}
    }

    return (
        <>
            <button onClick={viewCategories}>분류 전체보기</button>
            <p>데이터 필요</p>

            <button onClick={viewNotices}>공지사항</button>
            <p>데이터 필요</p>

            <button onClick={latestWriting}>최근글</button>
            <button onClick={viweLatestWriting}>데이터 필요</button>
            <img>데이터 필요</img>

            <p>최근댓글</p>
            <p>데이터 필요</p>

            <button onClick={viewTags}>태그</button>
            <button onClick={{/*태그가 생성될 때마다 새로운 버튼이 생성되어야 함*/}}>데이터 필요</button>
        </>
    );
}

export default List;
