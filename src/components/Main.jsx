import { useState, useEffect } from "react"
import axios from "axios";

const Main = () => {

  const [actresses, setActresses] = useState([]);

  useEffect(() => {
    fetchActresses();
  }, [])

  const fetchActresses = () => {
    axios.get('https://lanciweb.github.io/demo/api/actresses/').then((resp) =>{
      console.log(resp);
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className="card">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
               <p className="card-text">name</p>
               <p className="card-text">birth_year</p>
               <p className="card-text">nationality</p>
               <p className="card-text">biography</p>
               <p className="card-text">awards</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Main
