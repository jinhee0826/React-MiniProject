import logo from './logo.svg'; // improt로 가져온 것은 js로 가져온거 
// 변수형태임  현재 -> 이미지값이 변수로 들어온 것  
import './App.css';
import StateBox from './components/StateBox'; 
import PropsParent from './components/PropsParent';
import TestState from './components/TestState';
import TestProps from './components/TestProps';
import EventBox from './components/EventBox';
import TestEvent from './components/TestEvent';
import EventOBJ from './components/EventOBJ';
import Hook from './components/Hook';
import TestHook from './components/TestHook';
import APIComp from './components/APIComp';
import TestAPI from './components/TestAPI';
import RootIndex from './page/RootIndex';
import TestRootIndex from './page/TestRootIndex';
import StoreIndex from './Redux/StoreIndex';
// . 점을 직고 값을 불러오는데 이 .의 위치는 
// 현재 작성하고 있는 src파일의 기준으로 찾아감
// 컴포넌트의 함수이름과 export의 이름이 같은 이유: 
// import받을 때 헷갈리지 않으려고

// App안에 원하는 내용을 바로 작성할 수 있지만
// 각 내용을 컴포넌트로 만들어서 화면에 출력을 하고있다
// 빈 컴포넌트를 먼저 만들고 App으로 불러와서 화면에 출력되는 것 보고 작성


function App() { 
  // function App 안에서는 자바스크립트의 내용을 자유롭게 쓸 수 있다

  // return은 렌더 될 html의 내용 + {}를 통해서 자바스크립트의 내용 함께 사용
  // return 안에서 실행순서는 위에서 아래로 실행된다 
  // 오류가 났을 때 전체가 출력이 되지 않는다 
  return (
    // 반드시 div같은거 하나 감싸줘야함
    // 리액트는 html과 javascript가 같이 들어감 
    // 출력은 반드시 리턴 안에!
    <div className="App" 
    // classname을 통해 css접근 
    >
      {
        // <StateBox />
        // <StateBox></StateBox>
        //<PropsParent />
        // <TestState />
        // <EventBox />
        // <TestEvent />
        //<TestEvent />
        // <Hook />
        //<TestHook />
        //<APIComp />
        //<TestAPI />
        // <RootIndex />
        //<TestRootIndex />       
      }
      
      <StoreIndex />
      
    </div>
  );
}

// export를 통해서 모듈 형식으로 함수나 변수를 내보낼줄 수 있다
// default가 붙게 되면 {} 없이 들고올 수 있다 
// export로만 내보내주면 {}를 통해서 값을 들고 올 수 있다 
export default App;