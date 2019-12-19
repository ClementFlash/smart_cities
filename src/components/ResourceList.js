import React, { Component } from "react";
import ResourceItem from "./ResourceItem";
export default class ResourceList extends Component {
  render() {
    const { items, handleDelete, handleEdit } = this.props;
    return (
      <ul  className="list-group my-5">
        <h3 className="text-capitalize text-center">Recursos</h3>
        {items.map(item => {
          return (
            <ResourceItem
              
              key={item.id}
              titulo={item.titulo}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}

      
      </ul>
    );
  }
}
