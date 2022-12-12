/**
 * redux의 기본 내용을 작성하는 공간
 * 새로 프로젝트를 만들어 index.js에 작성했던 내용이지만
 * StoreIndex로 따로 만들어 작성 
 */

// 리덕스 프로바이더 컴포넌트 추가 
import { Provider } from "react-redux";
// 리덕스 프로바이더 안에 넣어줄 store를 생성할 createStore추가 
import { createStore } from "redux";
import BookBox from "./BookBox";
import rootReducer from "./modules";
import NumberBox from "./NumberBox";

// createStore를 이용하여 store 생성 - 작성한 js내용을 연결 : index.js
const store = createStore(rootReducer);
const StoreIndex = () => {
  return (
    <div>
      {/** Provider를 통해 store에 작성된 js값을 넘겨줌 */}
      <Provider store={store}>
        {/** Provider의 자식들이 사용할 수 있다 
         * 반드시 Provider 사이에 작성해야 함 , 항상  store 이름으로 전달 
        */}
        <NumberBox />
        <BookBox />
      </Provider>
    </div>
  );
}

export default StoreIndex;