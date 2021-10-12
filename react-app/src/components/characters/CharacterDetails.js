import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

import ConfirmationModal from "../ConfirmationModal";

const CharacterDetails = (props) => {

    console.log(props.match.params.id);

    const [characterInfo, setCharacterInfo] = useState({
        id: null,
        name: "",
        occupation: "",
        weapon: "",
        cartoon: null,
        picture: ""
    });

    const [show, setShow] = useState(false);
    const history = useHistory();

    const handleClose = () => {
        setShow(false);
    }

    const handleOpen = () => {
        setShow(true);
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/characters/${props.match.params.id}`)
        .then((response) => {
            console.log(response);
            setCharacterInfo({...response.data});
        })  
        .catch(err => console.error(err));
    }, [props.match.params.id]);

    return (
        <div>
            <img 
            src={characterInfo.picture} 
            alt={characterInfo.name}
            style={{ height: "287px", objectFit: 'fill'}}
            />
            <h1>{characterInfo.name}</h1>
            <p>
                <strong>
                    Occupation: 
                </strong>
                    {characterInfo.occupation}
            </p>
            <p>
                <strong>
                    Weapon: 
                </strong>
                    {characterInfo.weapon}
            </p>
            <p>
                <strong>
                    Is this character from a cartoon?: 
                </strong>
                    {characterInfo.cartoon ? 'Yes' : 'No'}
            </p>

            <div>
                <Link 
                className='me-3' 
                title="Edit" 
                to={`/characters/update/${characterInfo.id}`}>
                    <i className="fas fa-pencil-alt"
                    style={{marginLeft: '1rem'}}></i> 
                    Edit
                </Link>

            <a href='/' className='text-danger' onClick={(event) => {
                event.preventDefault() 
                handleOpen();
            }}>
                <i class="fas fa-trash-alt"></i>
                Delete
             </a>

            </div>

            
            <ConfirmationModal 
            show={show} 
            handleClose={handleClose}
            handleAction={() => history.push(`/characters/delete/${characterInfo.id}`)}
            />
        </div>
    )
}

export default CharacterDetails;