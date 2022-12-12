import { useParams } from "react-router-dom";

const BoardNumPage = () => {
    const {page, num} = useParams();
    return (  
        <div>
            <p>page : {page}</p>
            <p>num : {num}</p>
        </div>
    );
}
 
export default BoardNumPage;