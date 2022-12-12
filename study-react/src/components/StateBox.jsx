// 함수형 컴포넌트 (화살표함수 )
// 보통 함수(선언형 함수)의 경우는 가장 먼저 생성되어있지만(호이스팅)
// 화살표 함수, 또는 익명함수가 변수에 담아서 있는 경우는
// 변수에 담겨질 때 함수가 생성

import { useState } from "react";

// 원래라면 한번만 쓸 수 있는 함수이지만 
// const StateBox = () => {} 에서 = 을 통해서 여러번 쓸 수있다

const StateBox = () => {
    // state : 컴포넌트 안에서 개별적으로 사용되는 데이터 값
    // state로 들어가 있는 값들은 컴포넌트의 업데이트에 영향
    // (화면이 자동으로 바뀌길 원한다면 사용 -훅 사용)
    const [name, setName] = useState("green"); // 자바스크립트형식으로 사용
    const [input, setInput] = useState(""); // 버튼을 눌렀을 때 바뀌게 하기위해 만듦, 값을 저장하고 받아옴
    // useState : 함수형 컴포넌트에서 state를 사용할 수 있게 만들어 둔 hook사용
    // hook : use를 붙여서 사용하는 함수형 컴포넌트의 내용(리액트 16. 이후 사용가능)
    // useState는 ()안에 원하는 데이터 값을 넣어서 사용할 수 있다
    // 이 때 그 안에 있는 값은 setName을 통해서 값을 바꿔준다


    // 자바스크립트를 쓸 수 있는 공간
    // inputName값을 받아와서 return 해주는 내용
    const PrintName = (inputName) => {
        return inputName+"입니다";
    }

    // 리액트는 html 값을 변수에 넣어서 사용할 수 있다
    // 이때 태그를 여러개 사용하고싶다면 하난의 태그로 감싸서 사용
    const element = (
      <div>
        <h3>자바스크립트의 변수 안에서 넣어서 사용 할 수 있다</h3>
        <p>단, 여러개의 태그는 하나의 태그로 감싸서 사용</p>
      </div>
    )

    return (  
        <div>
            <h1>{name}입니다</h1>
            <p>
              변수는 중괄호 안에 이름을 넣으면 값이 그대로 출력되고,
              함수는 ()를 통해 내용을 실행시킬 수 있다.
              단, 화면에 출력되는 부분은 return 되는 부분이다.
            </p>
            <p>{PrintName("blue")}</p> 
            {
                // <p>{PrintName}</p>적으면 안나옴 ()해야 나옴
            }
            {element}
            <hr />
            <h3>값을 입력받아서 확인하기 : {name}</h3>
            <input type="text" onChange={ (e)=>{ setInput(e.target.value) } } 
              // (e)=>{ setName(e.target.value) 에서 (: 바로 이름 바뀜)
              // e이벤트는 js에서 받아와서  타겟의 input안에 있는 value값을 가져와서 사용
              // value값을 가져와서 setName에 들어가면 useState에 들어가기 때문에
              // 자동으로 값이 바뀜
              // onChange는 값이 바뀔때마다 함수가 호출됨
              />
              <button onClick={()=>{ setName(input) }}
              // 클릭했을때 수정
              // 값이 바꿔야하기 때문에 반드시 익명함수로 함
              // 출력된 이후에 수정이 되면 각각 컴포넌트마다 따로 저장됨 
              >이름 수정</button>

        </div>

    );
}

export default StateBox;