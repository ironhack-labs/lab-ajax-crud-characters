import "./Home.css";

import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import Spinner from "../Spinner/Spinner";

const retrieveData = (setCharacters) => {
  axios
    .get("http://localhost:8000/characters")
    .then((response) => setCharacters([...response.data]))
    .catch((err) => console.log(err));
};

const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    retrieveData(setCharacters);
  }, []);

  return !characters.length > 0 ? (
    <Spinner />
  ) : (
    <div className="home-container d-flex p-2 justify-content-start  flex-wrap">
      {characters.map((character) => (
        <Link to={"/character/" + character.id} key={character.id}>
          <div className="card mx-5 my-2" style={{ width: "18rem" }}>
            <img
              src={
                character.picture ||
                "https://roofequipmentllc.com/wp-content/uploads/2019/01/noimage.png"
              }
              className="card-img-top"
              alt={character.name}
              style={{ height: "200px", objectFit: "contain" }}
            />
            <div className="card-body">
              <h5 className="card-title">{character.name}</h5>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
