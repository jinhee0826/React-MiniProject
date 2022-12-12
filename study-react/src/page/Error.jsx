import { Link } from "react-router-dom";

const Error = () => {
  return (  
    <div>
      <h1>없는 페이지입니다</h1>
      <Link to='/'>Home으로 돌아가기</Link> 
    </div>
  );
}
 
export default Error;