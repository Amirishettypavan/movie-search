import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const Cast = () => {
    const [data, setData] = useState([]);
    const [movieData,setMovieData]=useState([])
    const location=useLocation()

    function fetchData() {
        const url = ` https://api.themoviedb.org/3/movie/${location.state.name}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`;
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjFhYzBmMTU2MWJkOTIwZTk1MTg5NDQ2YTgxYjViZSIsIm5iZiI6MTcyODQ1NjQ5OS45MTEwNywic3ViIjoiNjcwNjIzZGU1OTdjMTI2ZjA3ZGRhMzIwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.fu24CG2f-Xfrx2xbvmr87x2a9k4ZxD5cQf8xfDC3myk",
          },
        };
        fetch(url, options)
          .then((res) => res.json())
          .then((json) => setData(json.cast))
          .catch((err) => console.error("error:" + err));
      }
      function fetchMovie() {
        const url = `  https://api.themoviedb.org/3/movie/${location.state.name}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`;
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjFhYzBmMTU2MWJkOTIwZTk1MTg5NDQ2YTgxYjViZSIsIm5iZiI6MTcyODQ1NjQ5OS45MTEwNywic3ViIjoiNjcwNjIzZGU1OTdjMTI2ZjA3ZGRhMzIwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.fu24CG2f-Xfrx2xbvmr87x2a9k4ZxD5cQf8xfDC3myk",
          },
        };
        fetch(url, options)
          .then((res) => res.json())
          .then((json) => setMovieData([json]))
          .catch((err) => console.error("error:" + err));
      }
      useEffect(() => {
        fetchData();
        fetchMovie();
        
        
      }, [location.state.name]);
      

  return (
    <div>
        <div className='m-2'>
            {
             movieData.map((val)=>{
            return(
                        // eslint-disable-next-line react/jsx-key
                        
                         // eslint-disable-next-line react/jsx-key
                         <div className="card bg-dark text-white">
                         <img src={`https://image.tmdb.org/t/p/w200${val.backdrop_path}`} className="card-img" id="bgimg" alt="..." height={500}/>
                         <div className="card-img-overlay">
                            <div className='d-flex'>
                            <img src={`https://image.tmdb.org/t/p/w200${val.poster_path}`} className="card-img me-3" alt="..." height={200} style={{ width: "10rem"}}/>
                            <div>
                               <h5 className="card-title ">{val.title}</h5>
                               <h5 className="card-title "> Rating {val.vote_average}</h5>
                               <div className='d-flex align-items-center'>
                           <h5 className="card-title  btn btn-dark">{val.runtime}</h5>
                           <h5 className="card-title ms-2"> {<div>{
                            val.genres.map((newval)=>{
                              return(
                                <span>{` ${newval.name},`}</span>
                              )
                            })
                               }</div>}</h5>
                               </div>
                               <h5 className="card-title "> Release {val.release_date}</h5>

                            </div>
                           </div>
                           <h2>Overview</h2>
                           <p className="card-text">{val.overview}</p>
                           <p className="card-text"></p>
                         </div>
                       </div>
            )
            })
            }
        </div>
        
        <h1 className='ms-5 mt-5'>Cast</h1>
       <div className="movie">
    {
      data.map((val) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div>
            
          <div className="card m-2" style={{ width: "18rem"}}>
            <img src={`https://image.tmdb.org/t/p/w200${val.profile_path}`} className="card-img-top" alt="..." height={300} />
            <div className="card-body">
              <h5 className="card-title">{val.name}</h5>
              <p className="card-text"> Character : {  ` ${val.character}`}
              </p>
              <p className="card-text">{  ` ${val.known_for_department}`}
              </p>
              <p className="card-text">
                {val.overview}
              </p>
              
            </div>
          </div>
          </div>
        );
      })
    }
       </div>
  </div>
  )
}

export default Cast