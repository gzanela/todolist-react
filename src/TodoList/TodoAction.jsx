import React from "react";

export default function TodoActions ({id, deleteItem, delivered_date}) {

  function click () {
    return deleteItem(id);
  }

  return (
    <span className="float-end todo-actions">
      {delivered_date && 
        <button className="action-button mx-2">
          <i className="bi bi-calendar2-check text-primary" data-toggle="tooltip" data-placement="right" title={delivered_date}></i>
        </button>
      }
      <button className="action-button mx-2" onClick={click}>
        <i className="bi bi-trash text-danger"></i>
      </button>
    </span>
  );
}