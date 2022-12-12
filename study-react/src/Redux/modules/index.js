// 데이터를 store에 묶어두기 위해서
/**
 * 리덕스에서  사용할 작성한 js의 파일을 묶어서 사용
 * ? 사용할 데이터가 많아지면 따로 관리하기 위함
 */

// 작성한 js 파일을 하나로 묶어주는 함수 
import { combineReducers } from "redux";

// 작성한 리덕스 모듈 들고오기(number.js)
import number from "./number";

import book from "./book";

// combinReducer를 통해서 작성한 js파일을 들고와서 객체형태로 묶어 준다 
const rootReducer = combineReducers({ number, book });

// export default를 통해서 이름을 그대로 사용할 수 있게 내보내 준다 
export default rootReducer;
