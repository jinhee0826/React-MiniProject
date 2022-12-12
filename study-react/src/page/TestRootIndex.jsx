import { BrowserRouter, Route, Routes } from "react-router-dom";
import Board from "./Board";
import BoardNumPage from "./BoardNumPage";
import BoardPage from "./BoardPage";
import Home from "./Home";

const TestRootIndex = () => {
    return ( 
        <BrowserRouter>
        <Routes>
            {/** path='/' 에 Home 컴포넌트를 출력*/}
            <Route path="/" element={<Home />}></Route>
            {/** path='board'에 Board 컴포넌트 출력 */}
            <Route path="/board" element={<Board />}></Route>
            {/** path= '/board/' 에 params 값으로 page을 사용하여 
             *   BoardPage 컴포넌트 출력 - Board/BoardPage 컴포넌트 수정필요
             *   아울렛 사용*/}
            <Route path="/board/:page" element={<BoardPage />}></Route>
            {/** path= '/board/' 에 params 값으로 page와 num을 사용하여 
             *   BoardNumPage 컴포넌트 출력
             *  - BoardNumPage 컴포넌트를 새로 생성 후 page와 num 출력
             *   아울렛 사용하지않음*/}
            <Route path="/board/:page/:num" element={<BoardNumPage />}></Route>
        </Routes>


        </BrowserRouter>
     );
}

export default TestRootIndex;