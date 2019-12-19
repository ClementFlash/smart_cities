import React, { Component } from "react";
export default class ResourceItem extends Component {
  render() {
    const { title, titulo, handleDelete, handleEdit } = this.props;
    return (
      <div style={{width: "100%", marginTop: "25px", border: "1px solid rgba(0,0,0,.125)",}}>
        <h1 className="text-capitalize" style={{padding: ".75rem 1.25rem",}}>{titulo}</h1>
        <li className="list-group-item text-capitalize d-flex justify-content-between">
          <h6>{title}</h6>
          <div className="todo-icon">
            <span className="mx-2 text-success" onClick={handleEdit}>
              <i style={{cursor: "pointer",}} className="fas fa-pen" />
            </span>
            <span className="mx-2 text-danger" onClick={handleDelete}>
              <i style={{cursor: "pointer",}} className="fas fa-trash" />
            </span>
          </div>
        </li>
      </div>
    );
  }
}
