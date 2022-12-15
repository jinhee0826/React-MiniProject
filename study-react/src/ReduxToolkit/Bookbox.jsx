import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPay, setTitle } from "./modules/book";

const BookBox = () => {
    const [input, setInput] = useState("");
    const [changePay, setChangePay] = useState();

    //useSelector를 이용해서 값을 가져오기
    const book = useSelector((state)=>(state.book));

    //useDispatch를 이용해서 dispatch 가져오기
    const dispatch = useDispatch();
    return ( 
        <div>
            <h3>리덕스 툴킷 내용 출력화면</h3>
            {/** Redux에서 진행한 book.js의 내용을 ReduxToolkit에 새로 작성하고
             * store에 연결하여 화면에 출력하세요
             */}

             <h3>책 제목 : { book.title }, 금액 : {book.pay} </h3>
            <input type="text" onChange={(e)=>{ setInput(e.target.value)}}/>
            <button onClick={()=>{dispatch(setTitle(input))}} >제목 수정</button>

            <hr />
            <input type="text" onChange={(e)=>{setChangePay(e.target.value)}} />
            <button onClick={()=>{dispatch( setPay(changePay) )}}>값 수정</button>
        </div>
     );
}
 
export default BookBox;