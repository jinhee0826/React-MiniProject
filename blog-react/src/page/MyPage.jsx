import { Col, Container, Row } from 'react-bootstrap';
import { useSelector} from 'react-redux'
const MyPage = () => {
    const user = useSelector((state)=>state.currentUser)
    const userInfo = useSelector((state)=>state.userInfoList)
                    .find((info)=>(info.userEmail == user.email))
    return ( 
        <Container>
            <Row>
                <Col>
                    <p>유저 이메일 : {userInfo.userEmail}</p>
                </Col>
                <Col style={{border:"solid 1px grey", textAlign:"center"}}>
                    <h5>좋아요 리스트</h5>
                    <ul>
                        {
                            userInfo.like.map((l)=>(
                                <li key={l.boardId}>{l.title}</li>
                            ))
                        }
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default MyPage;