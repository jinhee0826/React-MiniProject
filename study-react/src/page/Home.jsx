import { Link } from "react-router-dom";

const Home = () => {
  return (  
    <div>
      <h1>Home 화면입니다</h1>
      <Link to="/about">about이동</Link> <br />
      <a href="/about">a태그로 about 이동</a>
      {/** a태그는 새로고침으로 이동하기 때문에
       * 값이 날라가거나, 페이지를 찾지 못하는 경우가 있음 */}
      <p>: a태그는 새로고침이 되므로 컴포넌트 간의 이동을 할 때 사용하지 않는다. <br />
        만약 사용한다면, 클릭 이벤트를 이용해서 새로고침을 막아야 한다. 
      </p>
    </div>
  );
}

export default Home;
