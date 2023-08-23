import { Link, useParams } from 'react-router-dom';
import './card.css'
function Card({img,id }) {

    return(
       <div>
         <Link to={`/detail/${id}`}>
            <div className="card">
            <img src={img} alt="img"></img>
        </div>
        </Link>
       </div>
    );
}
export default Card;