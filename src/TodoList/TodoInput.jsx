import React from "react";
import { useState } from "react";

export default function TodoInput ({todoList, setTodoList}) {
  
  const [input, setInput] = useState('');

  function add (e) {
    e.preventDefault();
    
    const todoItem = {
      id: Math.floor(Math.random() * 999999),
      description: input,
      complete: false,
      delivered_date: null
    }
    if (todoItem.description.length > 0) {
      todoList.push(todoItem);
      setTodoList([...todoList]);
      setInput('')
    };
  }

  return (
    <form onSubmit={add}>
      <div className="input-group mb-3 shadow-sm rounded">
        <input type="text" 
               className="form-control border-0 shadow-none"
               placeholder="Novo item.."
               aria-label="Novo item.."
               aria-describedby="button-addon2"
               name="description"
               onChange={e => setInput(e.target.value)}
               value={input}
        />
        <button className="btn btn-primary" type="submit" id="button-addon2" name="add">Adicionar</button>
      </div>
    </form>
  );
}