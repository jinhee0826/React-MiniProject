// 초기값
const initalState = [
    { 
        commentId : 1,
        boardId :1,
        userEmail : "hjseong1222@naver.com",
        text : "반갑습니다"
    }
]

// commentId 관리
let commentId = 2;

// 리듀서 함수 작성
function comments (state = initalState, action) {
    switch (action.type) {
        case "addComment":
            const newComment = 
                {
                    ...action.payload,
                    commentId : commentId,
                }
                commentId++;
            return state.concat(newComment);
        default:
            return state;
    }
}

// 액션함수 내보내기
export const addComment
        = (comment) =>({type:"addComment", payload : comment})


export default comments;