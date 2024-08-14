import React from "react";
import logo from './9391712.png';

export const Home = () => {
  let title = "first";
  
  return (
    <>
      {title === "first" ? (
        <div className="container d-flex justify-content-center m-5">
        <div className="card" style={{ width: "18rem" }}>
          <img src={logo} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">First</h5>
            <p className="card-text">
                the title of the article is set to be "first"
            </p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        </div>
      ) 
      
      :
      <div className="container d-flex justify-content-center m-5">
        <div class="card">
            <div class="card-body">
            the title of the article is set to be "second"
            </div>
        </div>
      </div>    
      }
    </>
  );
};

export default Home;
