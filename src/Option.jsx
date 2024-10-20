import 'bootstrap/dist/css/bootstrap.css';

function Option(props){
  return(
    
    <div className="option">
      
        <ul className="list">
          <li>
            <div className="imageContainer">
              <img src={props.link} alt="" />
            </div>
            <div className="optionLabel">
              <p className="optionTitle">{props.title}</p>
              <p className="detail">{props.year}</p>
              <p className="detail">{props.type}</p>
            </div>
          </li>
        </ul>
    </div>
  )
}


export default Option;