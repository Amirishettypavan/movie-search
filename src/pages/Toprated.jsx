import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Toprated=()=>{
    const [data,setData]=useState([])
    const navigate=useNavigate()
    function fetchData() {
        const url =
          ` https://api.themoviedb.org/3/movie/top_rated?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US$page=1`;
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
          .then((json) => setData(json.results))
          .catch((err) => console.error("error:" + err));
      }
      useEffect(()=>{
        fetchData()
      },[])
    return(
        <div> 
        <div className="movie">
    {
      data.map((val) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div className="card m-2" style={{ width: "18rem"}}>
            <img src={`https://image.tmdb.org/t/p/w200${val.poster_path}`} className="card-img-top" alt="..." height={300} />
            <div className="card-body">
              <h5 className="card-title">{val.title}</h5>
              <p className="card-text">Release Date {  ` ${val.release_date}`}
              </p>
              <p className="card-text">Rating {  ` ${val.vote_average}`}
              </p>
              <p className="card-text">
                {val.overview}
              </p>
              <button  className="btn btn-dark" onClick={()=>{navigate("/cast",{state:{name:`${val.id}`}} )}}> More Details</button>
              
            </div>
          </div>
        );
      })
    }
        </div>
    </div>
    )
}

export default Toprated