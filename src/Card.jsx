import { faStar, faPlus  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.css';
function Card(props){
  return(
    <div className="crd col-lg-2 col-md-4">
      <div className="box">
        <div className="image">
          <img src={props.link} alt="" />
        </div>
        <div className="label">
          <div className="e">
            <FontAwesomeIcon icon={faStar} />
            <p>7.7</p>
          </div>
          <p className="title">{props.title}</p>
          <div className="add">
            <p className='rounded-pill'> <FontAwesomeIcon icon={faPlus} /> Watchlist</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card