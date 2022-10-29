import React, {useState} from "react";

  export default function TodoFooter ({setTodoView, todoList, todoView}) {

    let pending = todoList.filter(todo => todo.complete === false).length;
    let completed = todoList.filter(todo => todo.complete === true).length;
    let all = todoList.length;

    const [active, setActive] = useState('all');

    function filterPending () {
      setTodoView(
        todoList.filter(todo => todo.complete === false)
      );
      setActive('pending');
    }

    function filterCompleted () {
      setTodoView(
        todoList.filter(todo => todo.complete === true)
      );
      setActive('completed');
    }

    function filterAll () {
      setTodoView(todoList);
      setActive('all');
    }
    return (
    <ul className="list-inline text-center">
      <li className="list-inline-item footer-pipe filter"
          onClick={() => filterPending() }>
        <span className={active === 'pending' ? 'active' : ''}>{pending} pendente(s)</span>
      </li>
      <li className="list-inline-item footer-pipe filter"
          onClick={() => filterCompleted() }>
        <span className={active === 'completed' ? 'active' : ''}>{completed}  concluída(s)</span>
      </li>
      <li className="list-inline-item filter"
          onClick={() => filterAll()}>
        <span className={active === 'all' ? 'active' : ''}>total de tarefas {all}</span>
      </li>
    </ul>
  );
}