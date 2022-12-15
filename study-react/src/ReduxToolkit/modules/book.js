import { createSlice } from "@reduxjs/toolkit"

// 초기값 작성
const initalState = {
    title : "제목이없습니다",
    pay : 5000,
}

const book = createSlice({
    name : "book",
    initialState : initalState,
    reducers : {
        setTitle : (state,action)=>{state.title = action.payload },
        setPay : (state,action) =>{ state.pay = action.payload}
    }
})

export const {setPay, setTitle} = book.actions;

export default book.reducer;