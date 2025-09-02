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
    <div>
      
    </div>
  )
}

export default Main
