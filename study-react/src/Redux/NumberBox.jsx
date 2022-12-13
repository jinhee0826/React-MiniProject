import { useDispatch, useSelector } from "react-redux";
import { increase, setNumber } from "./modules/number";

const NumberBox = () => {
  // 리덕스를 사용해서 그 값을 가져오려고 함
  // useSelector의 화살표함수를 통해서 modules/index.js의 전체 state에 접근 
  // state.number는 modules/index.js에 연결해 준 number.js의 {number}를 의미 
  // state.number.number는 number.js의 state객체의 number의 숫자값을 가져옴
  /** 값을 가져올 때 그 값을 확인해 주지 않기 때문에 이름 확인!!!!
   *  값이 없는 내용을 들고오면 undefined 를 출력
   */

  // number의 순서 의미 
  // index, number.js에서 가져온 state number, 객체 속성
  const number = useSelector((state)=>(state.number.number));
  const numberObj = useSelector((state)=>(state.number));

  // 리덕스에서 작성한 리듀서를 가져오기 위한 useDispatch
  // dispatch를 사용해 줄 때, dispatch({type:값}) 전달 - type통해서 리듀서 찾아감
  const dispatch = useDispatch();
  

  return (  
    <div>
      <h3>리덕스를 사용할 공간입니다</h3>
      <p>useSelector를 통해서 가져온 값 : {number} </p>
      <p>useSelector를 통해서 가져온 값 : {numberObj.number} </p>
      <button onClick={()=>{ dispatch({ type: "increase" }) }}>1증가</button>
      <button onClick={()=>{ dispatch(increase()) }}>1증가(함수)</button>
      {/** 위에 액션함수 사용할 떄 (:: increase() )
       * 그 함수의 결과 값이 들어가야하기때문에 ()괄호 필수  */}

      {/** setNumber를 통해서 값을 수정 : 객체 형태 : 이 객체는 action으로 들어감 */}
      <button onClick={()=>{ dispatch({ type: "setNumber", payload: 0 }) }}>0으로 초기화</button>
      <button onClick={()=>{ dispatch( setNumber(100) ) }}>100으로 초기화</button>
    </div>
  );
}
 
export default NumberBox;