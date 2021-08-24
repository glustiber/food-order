import classes from './Input.module.css';

const Input = (props) => {
    return (
        <div className={classes.input}>
            <label htmlForm={props.input.id}>{props.label}</label>
            <input id={props.input.id} {...props.input} />
            {/* Spread operator above ensures all key/value pairs in this input object which we receive on props input are added as props to input */}
            {/* i.e. if input object has type='text' then spread operator would make sure type=text is being added */}
        </div>
    );
};

export default Input;