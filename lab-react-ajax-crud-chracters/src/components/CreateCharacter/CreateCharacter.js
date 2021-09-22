import { useEffect, useState } from "react";

import axios from "axios";

import "./CreateCharacter.css";
import { useHistory } from "react-router";

import Spinner from "../Spinner/Spinner";

const validateForm = (newCharacter, error, setError) => {
  const newError = {
    picture: "",
    name: "",
    occupation: "",
    weapon: "",
  };

  const invalidFields = {
    picture: [
      {
        invalidCondition: !newCharacter.picture.match(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g
        ),
        errorMsg: "Insert a valid URL!",
      },
    ],
    name: [
      {
        invalidCondition: newCharacter.name.length < 1,
        errorMsg: "The name of the new character is required!",
      },
      {
        invalidCondition: newCharacter.name.length < 4,
        errorMsg: "Character name must have more than 3 characters!",
      },
      {
        invalidCondition: newCharacter.name.length > 30,
        errorMsg: "Character name must have less than 30 characters!",
      },
      {
        invalidCondition: newCharacter.name.match(/[^a-z ]/gi),
        errorMsg: "Character name must NOT have special characters or numbers!",
      },
      {
        invalidCondition: newCharacter.name.match(/  /gi),
        errorMsg: "Character name must NOT have two consecutives spaces!",
      },
    ],
    occupation: [
      {
        invalidCondition: newCharacter.occupation.length < 1,
        errorMsg: "The occupation of the new character is required!",
      },
      {
        invalidCondition: newCharacter.occupation.length < 4,
        errorMsg: "Character occupation must have more than 3 characters!",
      },
      {
        invalidCondition: newCharacter.occupation.length > 30,
        errorMsg: "Character occupation must have less than 30 characters!",
      },
      {
        invalidCondition: newCharacter.occupation.match(/[^a-z ]/gi),
        errorMsg:
          "Character occupation must NOT have special characters or numbers!",
      },
      {
        invalidCondition: newCharacter.occupation.match(/  /gi),
        errorMsg: "Character occupation must NOT have two consecutives spaces!",
      },
    ],
    weapon: [
      {
        invalidCondition: newCharacter.weapon.length < 1,
        errorMsg: "The weapon of the new character is required!",
      },
      {
        invalidCondition: newCharacter.weapon.length < 4,
        errorMsg: "Character weapon must have more than 3 characters!",
      },
      {
        invalidCondition: newCharacter.weapon.length > 30,
        errorMsg: "Character weapon must have less than 30 characters!",
      },
      {
        invalidCondition: newCharacter.weapon.match(/[^a-z ]/gi),
        errorMsg:
          "Character weapon must NOT have special characters or numbers!",
      },
      {
        invalidCondition: newCharacter.weapon.match(/  /gi),
        errorMsg: "Character weapon must NOT have two consecutives spaces!",
      },
    ],
  };

  Object.keys(invalidFields).forEach((field) => {
    invalidFields[field].find((check) => {
      if (check.invalidCondition) {
        newError[field] = check.errorMsg;
        return true;
      } else return false;
    });
  });

  Object.assign(error, newError);

  setError({ ...newError });
};

const setBorder = (touched, error) => {
  if (touched && error) {
    return "2px solid red";
  } else if (touched && !error) {
    return "2px solid green";
  } else {
    return "1px solid #ced4da";
  }
};

const handleSubmit = (event, setLoading, newCharacter, history, id) => {
  event.preventDefault();

  const handleData = id ? axios.put : axios.post;

  setLoading(true);
  handleData(`http://localhost:8000/characters${id ? "/" + id : ""}`, {
    ...newCharacter,
  })
    .then(() => {
      setLoading(false);
      window.alert(`Character successfully ${id ? "edited!" : "created!"}`);
      history.push("/");
    })
    .catch((err) => {
      setLoading(false);
      window.alert(err);
      history.push("/");
    });
};

const handleChange = (event, newCharacter, setNewCharacter) => {
  const { name, value } = event.target;
  setNewCharacter({ ...newCharacter, [name]: value });
};

const CreateCharacter = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [newCharacter, setNewCharacter] = useState({
    picture: "",
    name: "",
    occupation: "",
    weapon: "",
    cartoon: false,
  });

  const [touched, setTouched] = useState({
    picture: false,
    name: false,
    occupation: false,
    weapon: false,
  });

  const [error, setError] = useState({
    picture: "",
    name: "",
    occupation: "",
    weapon: "",
  });

  const history = useHistory();

  useEffect(() => {
    validateForm(newCharacter, error, setError);
  }, [newCharacter]);

  useEffect(() => {
    id &&
      axios
        .get("http://localhost:8000/characters/" + id)
        .then()
        .catch((err) => {
          console.log(err);
          history.push("/not-found");
        });
  }, []);

  return (
    <div className="create-character-container text-center w-100 my-5">
      <h2>Create New Character</h2>
      <form
        className="my-5 d-flex flex-column align-items-center text-start"
        onSubmit={(event) =>
          handleSubmit(event, setLoading, newCharacter, history, id)
        }
      >
        <div className="mb-3 w-50">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            onBlur={(e) => setTouched({ ...touched, [e.target.name]: true })}
            style={{ border: setBorder(touched.name, error.name) }}
            disabled={loading}
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={newCharacter.name}
            onChange={(event) =>
              handleChange(event, newCharacter, setNewCharacter)
            }
          />
          <div id="nameHelp" className="form-text">
            {touched.name && (error.name || "Ok")}
          </div>
        </div>
        <div className="mb-3 w-50">
          <label htmlFor="occupation" className="form-label">
            Occupation:
          </label>
          <input
            onBlur={(e) => setTouched({ ...touched, [e.target.name]: true })}
            style={{ border: setBorder(touched.occupation, error.occupation) }}
            disabled={loading}
            type="text"
            className="form-control"
            id="occupation"
            name="occupation"
            value={newCharacter.occupation}
            onChange={(event) =>
              handleChange(event, newCharacter, setNewCharacter)
            }
          />
          <div id="occupationHelp" className="form-text">
            {touched.occupation && (error.occupation || "Ok")}
          </div>
        </div>
        <div className="mb-3 w-50">
          <label htmlFor="weapon" className="form-label">
            Weapon:
          </label>
          <input
            onBlur={(e) => setTouched({ ...touched, [e.target.name]: true })}
            style={{ border: setBorder(touched.weapon, error.weapon) }}
            disabled={loading}
            type="text"
            className="form-control"
            id="weapon"
            name="weapon"
            value={newCharacter.weapon}
            onChange={(event) =>
              handleChange(event, newCharacter, setNewCharacter)
            }
          />
          <div id="weaponHelp" className="form-text">
            {touched.weapon && (error.weapon || "Ok")}
          </div>
        </div>
        <div className="mb-3 w-50">
          <label htmlFor="picture" className="form-label">
            Picture Url:
          </label>
          <input
            onBlur={(e) => setTouched({ ...touched, [e.target.name]: true })}
            style={{ border: setBorder(touched.picture, error.picture) }}
            disabled={loading}
            type="text"
            className="form-control"
            id="picture"
            name="picture"
            value={newCharacter.picture}
            onChange={(event) =>
              handleChange(event, newCharacter, setNewCharacter)
            }
          />
          <div id="pictureHelp" className="form-text">
            {touched.picture && (error.picture || "Ok")}
          </div>
        </div>
        <div className="mb-3 form-check">
          <input
            disabled={loading}
            type="checkbox"
            className="form-check-input"
            id="cartoon"
            name="cartoon"
            value={newCharacter.cartoon}
            onChange={(event) =>
              setNewCharacter({
                ...newCharacter,
                cartoon: event.target.checked,
              })
            }
          />
          <label className="form-check-label" htmlFor="cartoon">
            This character is from a cartoon
          </label>
        </div>

        <button
          disabled={
            loading ||
            Object.keys(error).some((key) => error[key] || !touched[key])
          }
          type="submit"
          className="btn btn-primary"
        >
          {loading ? <Spinner small /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default CreateCharacter;
