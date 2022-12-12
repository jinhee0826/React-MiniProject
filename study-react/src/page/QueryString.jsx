/** 
 * 현재 컴포넌트 주소에 쿼리스트링이 함께 있을 때
 * 그 쿼이 스트링의 값을 가져오기
*/

import { useSearchParams } from "react-router-dom";

const QueryString = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // ?name=aa의 값을 찾아서 aa를 param에 넣어준다
  const param = searchParams.get("name");
  return (  
    <div>
      {param}
    </div>
  );
}
 
export default QueryString;