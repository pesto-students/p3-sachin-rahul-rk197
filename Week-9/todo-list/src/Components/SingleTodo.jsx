import React from 'react'

function SingleTodo(props) {
    const handleCheckbox = (e) =>{
        props.handleTodoList(props.index ,e.target.checked)
    }
    return (
        <>
            <label> <input type="checkbox" checked={props.data.completed} onClick={handleCheckbox} /> {props.data.content} </label>
        </>
    )
}

export default SingleTodo