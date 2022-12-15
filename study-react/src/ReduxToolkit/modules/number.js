// reduxjs/toolkit의 createSlice를 이용하여
// 간단하게 리듀서 함수와 액션함수를 만들 수 있다
import { createSlice } from "@reduxjs/toolkit"

// 초기값
const initialState = {
  num : 1
}

// 리듀서 함수 작성
const numberSlice = createSlice({
  name : "number",
  initialState : initialState,
  reducers : {
    increase : (state) => {
      // 함수 안에 state값을 직접 접근하여 바꿀 수 있다
      // 이전에 직접접근하지 못할 떄는 값을 한번에 바꿈
      // >> 값 전체가 바뀌는 것을 막기위해서, ...스프레드 연산자 사용
      // toolkit을 사용하면 직접접근해서 바꿀 수 있다.
      state.num += 1;
    },
    decrease : (state) => { state.num -=1 },
    
    // 값을 외부에서 들고오고싶을 때, action.payload를 통해서 가져옴
    setNum : (state, action) => { state.num = action.payload }
  }
})

// 사용할 액션 함수 내보내기 - numberSlice에서 가져 옴
export const { increase, decrease, setNum } = numberSlice.actions;

// 사용할 리듀서 내보내기 - numberSlice에서 가져 옴
export default numberSlice.reducer