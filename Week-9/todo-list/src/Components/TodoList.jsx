import React from 'react'
import SingleTodo from './SingleTodo'

function TodoList(props) {

    const handleTodoList = (index, checked) => {
        let newTodoList = [ ...props.todoList ]
        newTodoList[index].completed = checked;
        props.setTodoListArray(newTodoList)
    }
    return (
        <div>
            {props.todoList.length === 0 && <p>No Todo List is Present</p>}
            {props.todoList.length > 0 && <ol style={{width: '200px',margin:'20px auto'}}>
                {props.todoList.map((x, i) => {
                    return (<li key={i}> <SingleTodo index={i} handleTodoList={handleTodoList} data={x} /> </li>)
                })}
            </ol>
            }
        </div>
    )
}

export default TodoList