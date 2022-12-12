import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Board = () => {
    const [boardlist, setBoardList] = useState([1,2,3,4,5]);
    return ( 
        <div>
            <h1>Board 페이지입니다</h1>
            <Link to='/board/1'>페이지 1로 이동합니다</Link>
            <hr />
            {/** 값이 여러개 일 경우 배열을 가져와 map으로 출력 */}
            {
                boardlist.map((boardid)=>(
                <NavLink
                // navlink속성 중 하나 
                // NavLink에 isActive값을 화살표 함수로 가져와서 사용
                style={ ({isActive})=> isActive ? {color:"blue"} : {color:"black"} } 
                to={`/board/${boardid}`}> 
                {boardid} {" "} </NavLink>))
            }
            <Outlet outletname = "아울렛" />
        </div>
     );
}

export default Board;