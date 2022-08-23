import React, { useState } from 'react';
import TodoList from './Components/TodoList';
import './App.css';

function App() {
  const [todoInput, setTodoInput] = useState('')
  const [todoListArray, setTodoListArray] = useState([])

  const handleTodoSubmit = (e) => {
    e.preventDefault();

    let newTodoList = [...todoListArray];

    newTodoList.push({ content: todoInput, completed: false });
    setTodoInput('');
    setTodoListArray(newTodoList);
  }

  return (
    <div className="App">
      <form onSubmit={handleTodoSubmit}>
        <input type="text" value={todoInput} onChange={(e) => { setTodoInput(e.target.value) }} />
        <button style={{marginLeft: '20px'}} type='submit'> Add </button>
      </form>
      <TodoList todoList={todoListArray} setTodoListArray={setTodoListArray} />


    </div>
  );
}

export default App;
