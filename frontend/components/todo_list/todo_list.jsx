import React from 'react';

const TodoList = ({todos}) => {
  const todoElements = todos.map((elem, idx) => (
    <li key = {idx} done = {elem.done}>
      <h2 className = 'title'>{elem.title}</h2>
      <div className = 'body'>{elem.body}</div>
    </li>
    )
  );
  return (
    <div className = "list">
      <h1>Todos</h1>
      <ul className = "list-todos">
        {todoElements}
      </ul>
    </div>
  );
};

export default TodoList;
