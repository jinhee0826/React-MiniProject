// 자주사용하는 이벤트 확인
// 객체와 배열, 객체들을 가진 배열에 대한 내용
// map, filter > 자바스크립트의 메소드(함수)
// 테이터 기능 > 자바스크립트의 메소드에서 확인

import { useEffect, useState } from "react";
// EvenBox.jsx의 전체의 영역에서 사용
let name = "aa"; 
// 이렇게 바깥으로 빼면 수정될때 바깥의 값이 바뀌게 됨

const EventBox = () => {
  const [changeName, setChangeName] = useState("");
  // state의 changeneme 받아옴
  const [clickName, setClickName] = useState(""); // 위에 변수값 받아옴
  // 변수 name을 받아옴 
  const [varName, setVarName] = useState(""); // 아래꺼 받아옴
  // let name = "aa"; 여기 쓰면 버튼 2번 누르면 aa로 돌아옴 
  // 화면에 출력되지 않고 많이 바뀌는 값들에 사용
  // 이 값을 화면에 출력하고 싶다면 - state에 담아서 화면이 바뀌도록 출력

  const funcName =(n)=>{ name = n; console.log(name); }; 
  useEffect(()=>{console.log("실행");},[name])

  // 객체 state에 이벤트로 값 넣기 
  // 1. 각각의 속성에 값을 넣어줘야 함
  // 2. 남은 속성의 값을 유지 > ... (스프레드연산자): 객체나 배열안에 있는 그 요소의 값을 꺼냄
  const [user, setUser] = useState(
    { name : "", address: "" }
  )

  // 이벤트에 들어갈 함수 
  const changeUser = (e)=> { // 변수의 값을 속성으로 사용하기위해 [] 사용
    setUser({...user, [e.target.name]:e.target.value})
    // {...user, name:e.target.value} name을 고정하면 이름만 나옴
    // {...user, e.target.name:e.target.value} 여긴 변수만 들어가야하기 때문에 오류가 남
    
    // 객체의 값을 가져오기 위해서는 반드시 ...스프레드연산자를 사용해야함!!
  }

  // 변수 : 고정해서 쓸 값, 화면상에서 바뀌지 않을 값
  // 컴포넌트를 반복해서 출력하기 위해 배열 사용
  const info = ['name','address'];

  // 배열 안에 객체를 넣어서 진행
  const infoObj = [
    { name: "name", info: "이름", id:1 },
    { name: "address", info: "주소", id:2 }
]

    return (
      <div>
        <h3>이벤트박스</h3>
        <h4>state로 작성한 이름: {changeName}, 변수이름 : {name}</h4>
        <input type="text" onChange={(e)=>{ setChangeName(e.target.value) }} />
        <button onClick={()=>{ setClickName(changeName) }}>state 값을 저장</button>
        <input type="text" onChange={(e)=>{ funcName(e.target.value) }} />
        <button onClick={()=>{ setVarName(name) }}>변수 값을 가져와서 저장 </button>
        <h4>state 값을 가져와서 저장 : {clickName}, 변수 값을 가져와서 저장 : {varName} </h4>
        <hr />

        <h3>객체의 값 바꾸기</h3>
        <p>유저의 이름 :{user.name}, 유저의 주소 :{user.address}</p>
        이름 : <input type="text" name="name" // 객체안에서 사용한것과 동일한 이름 사용
          // ... 사용하여 객체안의 값을 전부 가져오고,
          // 그 안에 값을 바꾸고 싶다면, 바꾸고싶은 속성의 이름을 사용

          // onChange={(e)=> {setUser({...user, name:e.target.value})}}이거 말고
          onChange={changeUser} // <-이렇게 쓰고/ e객체는 값을 전달하지 않아도 쓸 수 있다 
        />
        <br />
        주소 : <input type="text" name="address"
          onChange={changeUser}></input>
        <hr />

        <h3>배열을 통해서 컴포넌트/태그 반복하기</h3>
        <p>배열의 값(문자열)도 html에서 그대로 출력할 수 있다</p>
        <h4>{user.name},{user.address}</h4>
        {info}
        { // 배열을 map를 통해서 반복
        // map : 배열의 메소드 (배열이 아니면 사용X)
        // 특징 : 배열의 값을 꺼내서 return해서 새로운 배열을 작성
        // >원하는 모양으로 출력
        // info = 배열, infomation = 배열 안에 있는 요소
        // index = 현재 가져온 배열 안에 있는 요소의 index
        // {}가 아니라 ()를 사용하는 이유
        // : return값을 통해 태그, 컴포넌트 사용하기 위함

        info.map((infomation,index)=>(
          <div 
          // div로 감싸서 진행 
          >
            {infomation} <input type="text" name={infomation} //값이 바뀔 수 있게 인포매이션 씀
            onChange={changeUser} key={index}
            ></input>
          </div>
        ))
        }
        <hr />

        <h3>객체의 배열</h3>
        { // infoObj : 객체는 리액트에서 바로 출력할 수 없다 
        // 출력하기 위해서는 풀어서 해야함
        infoObj[0].info
        // 아래에 ()사용하면 바로 리턴되기 때문에 {}써야함
        }
        { infoObj.map((infomation)=>{
          // {}를 사용했다면 return을 사용해서 값을 내보냄 
          return(
            <div>
              {infomation.info}
              <input type="text" name={infomation.name} 
              key={infomation.id}
              onChange={changeUser} // 이거 물어봐야함 주소 안뜸
              />
            </div>
          );
        })}
        <hr />

        <h3>filter함수 사용</h3>
        {// filter함수는 return 값이 true이면 새로운 배열에 넣고 
        // false 이면 배열에 넣지 않음
        // 원본 배열에는 영향을 미치지 않음 
          info.filter((infomation)=>( infomation == "name "))
          // 배열안에 일부분을 삭제 하고 싶을때 새로운 배열을 만들어 지워줌 
          // 새로 만든 내용을 새로운 배열로 사용하고싶을때 원본 배열에 넣어서 사용가능
    
          // 원본배열의 값을 바꾸고 싶다면,
          // 그 원본 배열값에 새로만들어진 배열을 넣어주어야한다
          // filter의 결과 값이 배열이기 때문에, 
          // map을 이용해서 다시 화면에 출력할 수 있다 
        }
        {
          // 객체 배열을 사용
          infoObj.filter((infomation)=>(infomation.id==2))
          // 필터안에 들어가 있는 값은 배열이기 때문에 오류 
          // 출력하려면, map을 이용
            .map((infomation)=>(<p>{infomation.info}</p>))
        }
        {
          // map을 이용해서 다시 화면에 출력할 수 있다
          // map을 통해서 객체의 값을 바꿔서 넣어줄 수 있다
          infoObj.filter((infomation)=>(infomation.id==2)) 
          // filter의 return의 값 : T/F > 원본의 값으로 
          // map의 return의 값: 원본의 값 + 추가 > 작성(수정)한 값으로 
          .map((infomation)=>(infomation.id==2 ?
                  {...infomation, info:"수정된주소"} : infomation )) 
          .map((infomation)=>(<p>{infomation.info}</p>))
        }
      </div>

    );
}

export default EventBox;
