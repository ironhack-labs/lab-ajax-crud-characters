import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router";
import axios from "axios";

import FormField from "../FormField";

const CharacterUpdate = () => {

    const [state, setState] = useState({
        name:'',
        occupation:'',
        weapon:'',
        cartoon:false,
        picture:''
    });

    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/characters/${ id }`)
        .then((response) => {
            console.log(response);
            setState({...response.data});
        })  
        .catch(err => console.error(err));
    }, [  id  ]);

    const history = useHistory();

    const handleChange = (event) => {
        setState({...state, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.patch(`http://localhost:8000/characters/${ id }`, state)
        .then((response) => {
            console.log(response);
            history.push("/");
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Edit Character</h1>
            <form onSubmit={handleSubmit}>
                <FormField 
                label='Name'
                name='name'
                onChange={handleChange}
                value={state.name}
                />

                <FormField 
                label='Occupation'
                name='occupation'
                onChange={handleChange}
                value={state.occupation}
                />

                <FormField 
                label='weapon'
                name='weapon'
                onChange={handleChange}
                value={state.weapon}
                />

                                    
                <div className="form-check mb-3">
                    <input 
                    className="form-check-input" 
                    type="checkbox"
                    name='cartoon' 
                    checked={state.cartoon}
                    onChange={(event) => setState({...state, cartoon: event.target.check}) } 
                    />
                    <label 
                    className="form-check-label" 
                    >
                        Cartoon Character
                    </label>
                </div>

                <FormField 
                label='Picture'
                name='picture'
                onChange={handleChange}
                value={state.picture}
                />

            <button type='submit' className='btn btn-primary'>
                Submit
            </button>

            </form>
        </div>
    )
}

export default CharacterUpdate;