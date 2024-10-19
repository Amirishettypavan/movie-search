import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  
  const [movie, setmovie] = useState("lion");
  
  return (
    <div>
      <div className="Navbar">
        <h2>Moviedb</h2>
        <div className="d-flex ">
          <button onClick={() => {navigate("/");}}>Popular</button>
          <button onClick={() => {navigate("/top-rated");}}>Top Rated</button>
          <button onClick={() => {navigate("/upcoming"); }}>Upcoming</button>
          <input
            type="text"
            placeholder="Enter Movie Name"
            onChange={(e) =>{ setmovie(e.target.value)}}
          />
          <button onClick={() => navigate('/search',{state:{name:`${movie}`}})}>Search</button>
          </div> 
      </div>
     
    </div>
  );
};

export default Navbar;
