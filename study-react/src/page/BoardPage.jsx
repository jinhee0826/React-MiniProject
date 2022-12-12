import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BoardPage = (props) => {
    // 함께 사용할수 있는 react-router-dom의 hook
    // useLocation : window.history에 들어가있는 값 접근
    /** const location = useLocation(); 
     * const state = location.state;
    */
    // useSearchParam : 쿼리스트링 값 접근
    /** const [searchParams, setSearchParams] =  useSearchParams()
     * const id = searchParams.get('id');
    */


    // 받아온 props값 확인 
    // - RootIndex에서 컴포넌트에 직접 넣어준 props값
    const {name, outletname} = props;

    // 주소를 통해 전달해준 params 값을 가져와서 사용할수 있다
    // params 안에 객체 형태로 들어있기 때문에, 
    // 구조화 할당을 통해서 사용가능
    
    // const {id} = useParams();
    const {page, id} = useParams();

    // 5까지의 데이터를 가지고 있는 배열 작성
    // 그 중에서 동일한 id 값을 가지고 있는 내용만 출력
    // 자바스크립트의 배열의 메소드 사용
    // 1개의 값을 찾기 위해 배열의 find 메소드 사용
    const [memos, setMemos] = useState([
        {id: 0, title: "첫번째 메모입니다" },
        {id: 1, title: "두번째 메모입니다" },
        {id: 2, title: "세번째 메모입니다" },
        {id: 3, title: "네번째 메모입니다" },
        {id: 4, title: "다섯번째 메모입니다" },
    ])

    // 객체의 값을 돌려줄 경우에믄 값을 다른 변수에 넣고 확인
    // 배열의 객체 요소를 꺼내서 하나씩 비교하여 참인 요소를 return
    // 현재 id와 같은 메모를 변수에 저장 
    const memo = memos.find((m)=>m.id == id)

    // useNavigate를 통해서 자바스크립트를 통해 주소 이동
    const navigate = useNavigate();

    return ( 
        <div>
            {/** board의 {id}페이지입니다 */}
            {/** board의 {page}페이지입니다 */}
            {outletname}의 {name} board의 {id} 입니다
            <p>{memo ? memo.title : "값이 없는 페이지입니다"}</p>

            <button onClick={()=>{ navigate(-1); }}>뒤로가기</button>
            <button onClick={()=>{ navigate('/board') }}>게시판 목록으로 이동</button>
        </div>
     );
}

export default BoardPage;