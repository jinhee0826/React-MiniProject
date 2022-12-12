// 초기값 - 원하는 변수값을 다 넣을 수 있음
// 여러개의 값을 사용하기 때문에 객체형태 사용 많음
const initalState = {
  number: 0, 
}

// 값을 수정 또는 사용하는 리듀서 함수 
// 함수의 매개변수로 들어갈 값 : state와 action
function number(state=initalState, action) {
  // switch문을 사용해서 action.type(: action의 객체값으로 들어오기때문) 
  //따른 코드 작성
  switch(action.type) {
    case "increase" :
      // increase 액션이 발생했을 때, 값을 1 증가
      // return을 통해서 값이 바뀐 state를 전달
      // ...(스프레드 연산자)를 통해서 바뀌는 값을 제외하고 그대로 들고 옴
      // 이때 접근하는 state는 현재 number.js에서 작성한 initalState이다 
      
      // 첫번째 number: 값의 이름, 두번째 number: 수정할 값 
      return { ...state, number : state.number +1 }

    case "setNumber" :
      // 값을 받아와서 그 내용을 수정하는 것 
      // 값을 받아오는 공간 : action.payload를 통해서 값 전달 
      return  {...state, number : action.payload }

    default :
      return state;
  }
}

// 액션 함수 : { type: "리듀서이름" }을 return해서 사용하는 함수
// 다른 js, jsx 사용을 하게 됨 >> export를 통해서 내보내 줌
export const increase = ()=>({ type: "increase" }); 
// 화살표 함수 : ()=>() (:? 안에 return해서 내보내 줌)

// 값을 가져와서 사용해 줄 때는, 매개 변수로 값을 가져와서 사용 
export const setNumber = (num)=>({ type: "setNumber", payload: num })


// 리듀서함수 number를 modules/index.js에 연결하기 위해 내보내 줌 
export default number;