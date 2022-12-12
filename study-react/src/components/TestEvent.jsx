import { useState } from "react";

const TestEvent = () => {
  const [memos, setMemo] = useState([
    {id : 1, text: "메모1"},
    {id : 2, text: "메모2"},
    {id : 3, text: "메모3"},
    {id : 4, text: "메모4"},
  ]);


  return (
    <div>
      <h3>이벤트 테스트 공간입니다</h3>
      {/*map을 통해서 전체 내용을 출력해주세요*/}
      {
        memos.map((memo)=>(
          // memo 배열의 객체가 한개씩 들어가는 공간 (처음은 index 0번)
          // 익명함수 -> 여기 함수 안에서만 사용 가능 
          //            ()=>(소괄호:괄호로 감싸준 전체가 return)
          <div key={memo.id}>
            <p>  {memo.text}</p>
          </div>
        ))
      }
      {/* TestBox를 이용하여 내용을 출력해주세요*/}
      {
        memos.map((memo)=>(
          <TestBox memo={memo} setMemo={setMemo} memos={memos}
          // memo,(setMemo,meomes : 부모의 state를 받아옴)를 다 Testbox받음
          />
        ))
      }
    </div>
  );
};

//TestEvent에서 사용할 TestBox
const TestBox = (props) => {
  // memo와 setMemos를 props값으로 들고오기
  const {memo, setMemo, memos} = props;

  //수정창을 닫고 여는 state
  const [modify, setModify] = useState(false);
  // 수정할 내용을 저장하는 state
  const [input, setInput] = useState("");

  /** onMouseEnter, onMouseLeave를 사용하여
   * 마우스가 div위에 있다면 backgroudColor를 lightgery
   * 마우스가 div위를 떠난다면 backgroudColor를 white
   * 로 바뀌게 작성하세요
   */

  return ( 
    <div>
      {/* memo의 값 들고오기 */}
      <h4>{memo.text}</h4>

      { // modify true일때 화면에 출력
        // true 일때, input의 값을 입력받고, 
        // 버튼을 누르면 그 값이 setMemos로 수정되고 modify가 false로 바뀜
        // 삼항연산자 (조건 ? 참->참나옴 : 거짓->거짓나옴)
        modify ? (
          <div> 
            <input type="text" onChange={(e)=>{setInput(e.target.value)}}
            // onChange는 실행될때 값 저장 
            />
            <button // 수정 불가 ->함수사용
              onClick={()=>{
              const modifyMemo = {...memo, text:input} // 하나의 객체로 저장 (수정된 객체)
              setMemo(memos.map((m)=>(m.id==memo.id ? modifyMemo:m)));
              // map을 통해서 수정 (: 각각의 요소를 가져와서 코드를 사용->return해서 새로운 배열만듦)
              // 바로 리턴으로 연결해주기 위해 ()사용
              // 새로운 배열을 setMemo를 통해서 memos로 전달 
              setModify(false);
            }}>수정완료</button>
          </div>
        ):
        (// 버튼을 누르면 modify가 true
          <button onClick={()=>{setModify(true)}}>수정</button>
        )
      }

    </div>
  );
}


export default TestEvent;