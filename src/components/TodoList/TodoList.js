import React from 'react';
import PropTypes from 'prop-types';
//khai báo propTypes
TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};

//nếu cha k truyền todo xuống thì khai báo defaultProp mảng rỗng
TodoList.defaultProps = {
    todos:[],
    onTodoClick:null,
}

function TodoList(props) {
    const {todos,onTodoClick} = props;

    function handleClick(todo){
        if(onTodoClick){
            onTodoClick(todo);
        }
    }
    return (
        <ul className="todo-list">
            {todos.map( todo => (
                <li key = {todo.id}>{todo.title}
                    <button onClick={()=>handleClick(todo)} >remove</button>
                </li>
            ))}
        </ul>

        
    );
}

export default TodoList;