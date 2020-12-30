import React from 'react'
import NotAvailable from '../images/NotAvailable.png'
const Popup = props => {
    return (
        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <h3>You've Nominated 5 Movies!</h3>
                        <div className="movie-poster-container">
                        {console.log(props.nominations)}
                        {props.nominations.map(movie => movie.Poster !== "N/A"  ? <img className="movie-poster" src={movie.Poster} /> : <img className="movie-poster" src={NotAvailable} /> )}
                    </div>
                    <button type="button" className="btn btn-secondary popup-decline" data-dismiss="modal">Keep Searching!</button>
                
                </div>
            </div>
         </div>
  
    )
}

export default Popup