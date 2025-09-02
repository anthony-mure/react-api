import { useState, useEffect } from "react"
import axios from "axios";

const Main = () => {

  const [actresses, setActresses] = useState([]);

  useEffect(() => {
    fetchActresses();
  }, [])

  const fetchActresses = () => {
    axios.get('https://lanciweb.github.io/demo/api/actresses/').then((resp) =>{
      setActresses(resp.data);
    });
  };

  return (
    <div className="container">
      <div className="row">
        {actresses.map((actress) =>{
          return(
            
          <div className="col-3" key={actress.id}>
          <div className="card">
            <img src={actress.image} className="card-img-top" alt={actress.name}/>
            <div className="card-body">
               <p className="card-text">{actress.name}</p>
               <p className="card-text">{actress.birth_year}</p>
               <p className="card-text">{actress.nationality}</p>
               <p className="card-text">{actress.biography}</p>
               <p className="card-text">{actress.awards}</p>
            </div>
          </div>
        </div>



          );
        })};
        

      </div>
      
    </div>
  )
}

export default Main
