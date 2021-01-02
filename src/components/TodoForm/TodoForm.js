import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,

};

TodoForm.defaultProps = {
    onSubmit: null,
}

function TodoForm(props) {
    const {onSubmit} = props;
    const [value,setValue] = useState('');

    function handleValueChange(e){
        setValue(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        if(!onSubmit) return;

        const formValues = {
            title : value,
        };
        onSubmit(formValues);
        setValue("");
    }

    return (
        <form action="" onSubmit={handleSubmit}>
        <div>
            <TextField
            label="Enter Todo"
            id="outlined-size-small"
            defaultValue="Small"
            variant="outlined"
            color="secondary"
            value={value} onChange={handleValueChange}
            />
        </div>    
            {/* <input type="text" value={value} onChange={handleValueChange}/> */}
        </form>
    );
}

export default TodoForm;