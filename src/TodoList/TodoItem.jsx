import React, {useState} from "react";
import TodoActions from "./TodoAction";

export default function TodoItem ({id, description, complete, delivered_date, checkItem, deleteItem, updateItem}) {

  const [toggle, setToggle] = useState(true)

  function confirmEdit (e) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    setToggle(true)
    return updateItem(formData.description, id);
  }

  function toggleEdit () {
    setToggle(!toggle);
  }

  function click () {
    return checkItem(id, !complete);
  }

  return (
    <li className="list-group-item bg-transparent rounded todo-item">
      <input
        className="form-check-input me-3"
        defaultChecked={complete}
        type="checkbox"
        onClick={click}
      />

      {toggle
        ?
        (
          <span onDoubleClick={() => toggleEdit()} 
                className={complete ? "completed-text text-muted" : ""}>
                {description} 
          </span>
        )
        :
        <form onSubmit={confirmEdit} className="d-inline">
          <input
            type="text"
            className="form-control-sm edit-input rounded-2"
            name="description"
            defaultValue={description}
          />
        </form>

      }

      <TodoActions id={id} deleteItem={deleteItem} delivered_date={delivered_date}/>
    </li>
  );
}