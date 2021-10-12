import 'bootstrap/dist/css/bootstrap.min.css';

const FormField = (props) => {
    return (
        <div>
            <label htmlFor={props.id} className='form-label'>
                {props.label}
            </label>
            <input
            type={props.type}
            className='form-control'
            id={props.id}
            name={props.name}
            onChange={props.onChange}
            value={props.value}
            required={props.required}
            />
            {props.hint ? <div className='form-text'>{props.hint}</div> : null}
        </div>
    )
}

export default FormField;