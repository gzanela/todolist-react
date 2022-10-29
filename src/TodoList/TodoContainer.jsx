import React, {useEffect, useState} from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
import TodoTitle from './TodoTitle';

const initialState = () => {
  if (localStorage['todo-items']?.length > 0) {
    return JSON.parse(localStorage.getItem('todo-items'));
  }
  return [];
};

export default function TodoContainer () {
  const [todoList, setTodoList] = useState(initialState);
  const [todoView, setTodoView] = useState(initialState);
  
  useEffect(() => {
    setTodoView(todoList);
    if (todoList?.length > 0) {
      localStorage.setItem("todo-items", JSON.stringify(todoList));
    }
  }, [todoList]);

  return (
    <div className="card w-50 bg-light rounded shadow mx-auto mt-5 todo-container">
      <div className="card-header bg-light">
        <TodoTitle/>
        <TodoInput todoList={todoList} setTodoList={setTodoList}/>
      </div>
      <div className="card-body bg-light">
        <TodoList todoView={todoView}
                  todoList={todoList}
                  setTodoList={setTodoList}/>
      </div>
      <div className="card-footer text-muted">
        <TodoFooter
          todoList={todoList}
          setTodoView={setTodoView}
          todoView={todoView}
        />
      </div>
    </div>
  );

}