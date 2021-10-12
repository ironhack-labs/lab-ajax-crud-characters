import { useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router";

const CharacterDelete = () => {

    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        axios.delete(`http://localhost:8000/characters/${ id }`)
        .then((response) => {
            console.log(response)
            history.push("/")
        })
        .catch(err => console.error(err));
    }, [history, id]);
    
    return (
        <div>
            Deleting...
        </div>
    )   
}

export default CharacterDelete;