import React from "react";
import TodoItem from "./TodoItem";


export default function TodoList ({todoList, setTodoList, todoView}) {

  function checkItem (id, complete) {
    let _todos = [...todoList];
    
    for ( let i in _todos ){
      if (_todos[i].id === id) {
        _todos[i].complete = complete;
        _todos[i].delivered_date = new Date().toLocaleString('pt-BR');;
        
        if (!complete) {
          _todos[i].delivered_date = null;
        }
        
      }
    }
    setTodoList(_todos);
  }

  function deleteItem (id) {
    let _todos = [...todoList];
    for ( let i in _todos ) {
      if (_todos[i].id === id) {
        _todos.splice(i, 1);
      }
    }
    setTodoList(_todos);
  }

  function updateItem (description, id) {
    let _todos = [...todoList];
    for ( let i in _todos ) {
      if (_todos[i].id === id) {
        _todos[i].description = description;
      }
    }
    setTodoList(_todos);
  }

  return (
    <ul className="list-group list-group-flush">
      {todoView.map(todo => {
        return (
          <TodoItem 
            {...todo}
            checkItem={checkItem}
            deleteItem={deleteItem}
            updateItem={updateItem}
            key={todo.id}
          />
        )}
      )}
    </ul>
  );
}
  