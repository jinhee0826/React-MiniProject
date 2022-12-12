import { ListGroup } from "react-bootstrap";

const Comment = (props) => {
    const {comment} = props;
    return (  
        <ListGroup.Item>
            <h5>{comment.name}</h5>
            <p>{comment.text}</p>
        </ListGroup.Item>
    );
}

export default Comment;