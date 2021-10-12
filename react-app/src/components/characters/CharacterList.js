import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


const CharacterList = () => {

    const [ characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/characters')
        .then((response) => {
            console.log(response);
            setCharacters([...response.data])
        })
        .catch(err => console.error(err))
    }, [])

    return (
        <div className='row'>
          {characters.map((characterObj) => {
            return (
                <div className='col-4' key={characterObj.id}>
                    <Link to={`/characters/${characterObj.id}`}>
                        <div className="card" style={{width: "18rem"}}>
                            <img 
                            src={characterObj.picture} 
                            className="card-img-top img-fluid" 
                            alt={characterObj.name}
                            style={{ height: "287px", objectFit: 'fill'}} 
                            />
                            <div className="card-body">
                                <h5 className="card-title">{characterObj.name}</h5>
                                <p className="card-text">
                                    {characterObj.occupation}
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            )})}
        </div>      
    )
}

export default CharacterList;