import React, { Component } from "react";
import ResourceList from "./components/ResourceList";
import ResourceInput from "./components/ResourceInput";

import "bootstrap/dist/css/bootstrap.min.css";


import uuid from "uuid";
class App extends Component {
  state = {
    items: [],
    id: uuid(),
    titulo: "",
    item: "",
    editItem: false
  };
  handleChange = (e) => {
    this.setState({
      item: e.target.value
    });
  };

  handleTitulo = (e) => {
    this.setState({
      titulo: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      titulo: this.state.titulo,
      title: this.state.item
    };
    console.log(newItem)
    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      titulo: "",
      item: "",
      id: uuid(),
      editItem: false
    });
  };
  clearList = () => {
    this.setState({
      items: []
    });
  };
  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    });
  };
  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);

    const selectedItem = this.state.items.find(item => item.id === id);

    console.log(selectedItem);

    this.setState({
      items: filteredItems,
      titulo: selectedItem.titulo,
      item: selectedItem.title,
      editItem: true,
      id: id
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center"></h3>
            <div className="card card-body my-3">
            <ResourceInput
              titulo={this.state.titulo}
              item={this.state.item}
              handleTitulo={this.handleTitulo}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            
            
            <ResourceList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
