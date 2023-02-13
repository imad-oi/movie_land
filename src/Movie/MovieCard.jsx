import React from 'react';
import './style.css'; 


const MovieCard = ({movie:{ Title , Year, Type , Poster}}) => {
  return (
         <div className="col col-sm-12 col-md-4 my-2 " >
                    <div className="card" id='movie' style={{width: "18rem"}}>
                        <span> {Year}</span>
                    <img src={Poster} alt="" class="card-img-top" />
                    <div className="card-body bg-dark text-light">
                        <h5 className="card-title">
                        <span className='fw-light'>{Type}</span>
                        </h5>
                        <p className="card-text">
                        <span className='fw-bolder'>{Title}</span>
                                    </p>
                        <a href="" className="btn btn-success">more</a>
                    </div>
                    </div>
         </div>
    // </div>
  )
}

export default MovieCard