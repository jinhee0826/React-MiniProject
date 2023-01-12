import { useState } from "react";
import { useEffect } from "react";
import { Button, Card, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addLikeUser, deleteBoard, updateView } from "../modules/board";
import { addComment } from "../modules/comments";
import { addLikeBoard } from "../modules/userInfoList";

const BoardPage = () => {
  // params을 통해서 board의 boardId값 전달
  const { id } = useParams();
  // board의 내용을 출력하기위해 리덕스에서 값 가져오기
  const boardList = useSelector((state) => state.board);
  // board의 내용중에 하나만 찾아서 가져오기
  // 배열의 find( return 값 : 배열값중 하나만 추력)
  const board = boardList.find((board) => board.boardId == id);

  // useSeletor를 이용해서 가져올때 바로 find 사용하기.
  const boardFind = useSelector((state) =>
    state.board.find((board) => board.boardId == id)
  );
  const dispatch = useDispatch();

  // 화면이 실행되자마자 조회수를 1올리기 위함
  useEffect(() => {
    // 리덕스를 통해서 id값을 전달하여
    // 그 id 값을 가진 board값의 view를 올림
    dispatch(updateView(id));
  }, []);

  return (
    <div>
      <p>{board ? <BoardPrint board={board} /> : "없는 페이지입니다"}</p>
    </div>
  );
};

export default BoardPage;

const BoardPrint = ({ board }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // state 만들어서 전달하기.
  const [commentText, setCommentText] = useState("");

  // userEmail을 가져오기 위해서 selector 사용
  // * user로 수정 > 로그인하지않았을때 글을 볼수 있기때문
  // * user의 값이 null이라면 코멘트를 달 수 없게 수정
  const user = useSelector((state)=>(state.currentUser));

  // commetInput에 버튼에 들어갈 함수
  const onAddComment = () => {
    // 리덕스를 사용해서 그 값을 전달
    //  > boardId, userEmail, commentText
    dispatch(addComment(
      {
        boardId : board.boardId,
        userEmail : user.email,
        text : commentText
      }
    ))
    // commnentText 비워줌
    setCommentText("");
  } 


  // comments값 가져오기
  const comments = useSelector((state) => state.comments);
  const boardComments = comments.filter(
    (comment) => comment.boardId == board.boardId
  );

  // 삭제 함수
  const onDeleteBoard = (id) => {
    dispatch(deleteBoard(id));
    navigate("/board");
  };
  // 수정 함수
  const toModifyBoard = (board) => {
    navigate("/board/modifyform", { state: board });
  };

  // 좋아요 함수 
  const onAddLike = () => {
    // **로그인되지않았다면, dispatch가 되지않게 막기
    if (!user) {
      return alert("좋아요는 로그인 후에 할수 있습니다")
    }
    // 전달값 : userEmail, boardId, title
    
    const boardlike = {
      userEmail: user.email, 
      boardId :board.boardId, 
      title : board.title
    }
    dispatch(addLikeBoard(boardlike));
    const userlike = {
      boardId : board.boardId,
      userEmail: user.email
    }
    dispatch(addLikeUser(userlike));
  }

  return (
    <Container>
      <Row>
        <Col xs={1}>{board.boardId}</Col>
        <Col>
          <h2>{board.title}</h2>
        </Col>
        {
          user && user.email === board.userEmail &&
          <Col>
            <Button onClick={() => {toModifyBoard(board);}}>
              수정
            </Button>
            <Button onClick={() => {onDeleteBoard(board.boardId);}}>
              삭제
            </Button>
          </Col>
        }
        
      </Row>
      <Row>
        <Col>{board.userEmail}</Col>
      </Row>
      <Row className="my-4">
        <Col>
          <h4>{board.content}</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <span>조회수 {board.view}</span>
        </Col>
        <Col>
          <span onClick={onAddLike}>좋아요 {board.like.length}</span>
        </Col>
      </Row>
      <hr />
      <Row>
        {
          user ? 
          <CommentInput 
            commentText={commentText} 
            setCommentText={setCommentText}
            onAddComment={onAddComment}
          /> :
          <p>로그인을 하시면 코멘트를 작성하실 수 있습니다</p>
        }

      </Row>
      <Row>
        {
          /** 코멘트에서 boardId가 같은 것만 출력 */
          /** 처음 값이 null과 undefined일때 그대로 사용해도 ok
           * 처음값이 배열일 경우, length을 이용하여 확인
           * 처음값이 객체일 경우, 속성값으로 들어가서 확인
           */
          boardComments.length > 0 ? (
            boardComments.map((comment) => <CommentBox comment={comment} />)
          ) : (
            <p>코멘트가 없습니다</p>
          )
        }
      </Row>
    </Container>
  );
};

function CommentBox({ comment }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{comment.userEmail}</Card.Title>
        <Card.Text>{comment.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

function CommentInput({ commentText,setCommentText, onAddComment}) {
  return (
    <>
      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          value={commentText}
          onChange={(e)=>{setCommentText(e.target.value)}}
          style={{ height: "100px" }}
        />
      </FloatingLabel>
      <Button onClick={onAddComment}>코멘트 작성</Button>
    </>
  );
}
