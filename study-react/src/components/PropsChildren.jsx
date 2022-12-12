const PropsChildren = (props) => {
  // props로 값을 객체 받아올 수 있고 분리해서 사용가능
  // Props의 값이 여러개가 들어오기 때문에
  // 객체의 형태로 사용 > 구조화분해이용

  const {name, count, setCount, onClick} = props;
  // props으로 받아올 수 있는 값들 
  // : 문자열, {}로 감싸서 보내진 자바스크립트의 변수(관련자료형도가능)/함수(이름만적어주면->함수본체, 괄호를 쓰면 리턴된 결과만 들고옴)
  // *작성한 컴포넌트에 on이벤트를 작성하면 props 값으로 들어온다  

  const {children} = props;
  // children은 태그와 태그사이에 작성한 값을 들고 온다 

    return (  
        <div onClick={onClick}>
          <h3>PropsChildren : {name}, count: {count}</h3>
          <p>자바스크립트로 받아왔기 때문에 {}로 사용할 수 있음</p>
          <button onClick={()=>{ setCount(count+1) }}>+1</button>
          {children}
        </div>
    );
}

export default PropsChildren;