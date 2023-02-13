import { useEffect,useState } from 'react';
import './App.css';
import MovieCard from './Movie/MovieCard';


const API_URL = 'http://www.omdbapi.com?apikey=fb31cf35' ;


function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("batman");


  const searchMovie  = async (title)=>{
    const response  = await fetch(`${API_URL}&s=${title}`);
    const data   = await response.json() ; 
    setMovies(data.Search)
    console.log(movies) ; 
  }

  useEffect(()=>{
    searchMovie(searchTerm) ;
    setSearchTerm('')
  },[])

  return (
    
    <div className="container-fluid text-center bg-secondary">
      <h1 className='text-dark fw-bold'
       style={{ 
        background:'' , 
        height:'auto'
      }}>Movie Land</h1>
      <div class="row">
          <div class="input-group mb-3 d-flex flex-row" id='search'>
            <input
             onChange={(e)=>setSearchTerm(e.target.value)}
             type="text"
             value={searchTerm}
              class="form-control bg-light text-dark " style={{ border :'none'  , boxShodow:'5px 5Px 5PX #fff'}} 
              placeholder="search for a movie" 
              aria-label="Recipient's username" 
              aria-describedby="button-addon2" />

            <button 
            onClick={()=> searchMovie(searchTerm)}
            class="btn btn-success " 
            type="button" 
            id="button-addon2">search</button>
          </ div>
      </div>

      <div className="container ">
        <div className="row d-flex flex-row justify-content-space-between align-items-center  ">
          { movies.map((movie)=>(
            <MovieCard movie={movie}/>       
            )) 
          }
      </div>
      </div>
    </div>
  
  );
}

export default App;
