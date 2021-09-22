import "./Character.css";

import React, { useEffect, useState } from "react";
import axios from "axios";

import Spinner from "../Spinner/Spinner";
import { useHistory } from "react-router";

const handleDelete = (id, history) => {
  axios
    .delete("http://localhost:8000/characters/" + id)
    .then(() => {
      window.alert("This character was succesfully deleted!");
      history.push("/");
    })
    .catch((err) => window.alert(err));
};

const retrieveData = (setCharacterInfo, id, setLoading) => {
  setLoading(true);
  axios
    .get("http://localhost:8000/characters/" + id)
    .then((response) => {
      setCharacterInfo({ ...response.data });
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
};

const Character = ({ match }) => {
  const [loading, setLoading] = useState(false);
  const [characterInfo, setCharacterInfo] = useState({
    id: null,
    picture: "",
    name: "",
    occupation: "",
    weapon: "",
    cartoon: null,
  });

  const history = useHistory();

  useEffect(() => {
    retrieveData(setCharacterInfo, match.params.id, setLoading);
  }, [match.params.id]);
  return loading ? (
    <Spinner />
  ) : (
    <div className="character-info-container d-flex p-2 justify-content-center">
      <div className="card mt-5" style={{ width: "20rem" }}>
        <img
          src={
            characterInfo.picture ||
            "https://roofequipmentllc.com/wp-content/uploads/2019/01/noimage.png"
          }
          className="card-img-top"
          alt={characterInfo.name}
        />
        <div className="card-body">
          {characterInfo.name ? (
            <React.Fragment>
              <h3 className="card-title mb-4">{characterInfo.name}</h3>
              <p className="card-text">
                <strong>Occupation:</strong> {characterInfo.occupation}{" "}
              </p>
              <p className="card-text">
                <strong>Weapon:</strong> {characterInfo.weapon}{" "}
              </p>
              <p className="card-text">
                <strong>Is this character from a cartoon?</strong>{" "}
                {characterInfo.cartoon ? "Yes" : "No"}{" "}
              </p>
              <div className="buttons-container d-flex justify-content-around">
                <button
                  className="btn btn-warning"
                  onClick={() =>
                    history.push("/character/" + characterInfo.id + "/edit")
                  }
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(characterInfo.id, history)}
                >
                  Delete
                </button>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <h5 className="card-title">Character not found!</h5>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default Character;
