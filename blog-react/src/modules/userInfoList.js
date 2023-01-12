// 구글인증에서 가져온 이메일과 
// 저장된 이메일을 비교하여 like 값을 저장, 
// 또는 가져오는 리덕스

// 초기값
const initalState = [
    { 
        userEmail : "hjseong1222@naver.com",
        like : [] // board의 id와 title가진 객체 
    }
]

// 리듀서
function userInfoList( state = initalState, action) {
    switch ( action.type ) {
        case "addUserInfo":
            // email을 받아옴, like =[] 생성
            const newUser = { 
                userEmail : action.payload,
                like : []
            }
            return state.concat(newUser);
        case "addLikeBoard":
            // board의 좋아요 버튼을 눌렀을때 값 확인
            // 1. userInfoList 의 like > boardId, title - 배열
            // 2. board의 like 값이 연결 > userEmail - 배열

            const newAddLike = {
                boardId : action.payload.boardId,
                title : action.payload.title
            }

            // userEmail이 동일한 것으로 연결 
            // 배열의 값을 수정
            return state.map((userInfo)=>(
                userInfo.userEmail == action.payload.userEmail
                ? 
                { 
                    ...userInfo, 
                    // like 속성은 userInfo.like에서 값을 찾아서
                    // 값이 있다면 이전 값을 넣고, 
                    // 없다면 추가한 값을 넣도록 삼항연산자 사용
                    like : userInfo.like.find(
                        (boardLike)=>boardLike.boardId == action.payload.boardId
                        )
                          // 값이 있다면 filter를 통해서 값을 제거한 후 추가
                        ? userInfo.like.filter((boardLike)=>boardLike.boardId != action.payload.boardId)
                        : userInfo.like.concat(newAddLike)
                }
                : userInfo
                ))
        default:
            return state;
    }
}

// 액션함수 내보내기
export const addUserInfo 
    = (email) => ({type:"addUserInfo", payload : email})
export const addLikeBoard
    = (likeboard) => ({type:"addLikeBoard",payload:likeboard })

// 리듀서 내보내기
export default userInfoList;