
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBookmark } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.css';
import Option from './Option';
import { Link } from 'react-router-dom';
function Nav(props){
  return(
    
    <div className="navbar">
      <div className="container">
        <div className="nav w-100">
          <ul className='listnav w-100'>
            <li>
              <div className="logo">
                <p className="logo">FLICK</p>
              </div>
            </li>

            <li className='sea w-75 '>
              <div className="searsh position-relative h-auto">
                <div className="bar d-flex">
                  <input type="text" placeholder='Searsh in FLICK' onChange={props.handleInputChange}/>
                  <div className="see">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </div>
                </div>
                <div className="optionContainer">
                  {

                    props.movies.map((movie, index) => (
                      <Link to={`/${movie.imdbID}`}>
                        <Option link = {movie.Poster} 
                              key = {index}
                              title = { movie.Title}
                              year = {movie.Year}
                              type = {movie.Type}

                            />
                      </Link>
                      
                    ))
                  }
                </div>
                
              </div>
              
            </li>
            <li className='t'>
              <div className="favourite">
              <div className="fav">
                  <FontAwesomeIcon icon={faBookmark} />
                </div>
                <a href="">Watchlist</a>

              </div>
            </li>
              <li className='t'>
                <div className="signin">
                  <a href="">Signin</a>
                </div>
              </li>
          </ul>
        </div> 
      </div>
    </div>
  )
}


export default Nav;