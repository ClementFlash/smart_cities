import React, { Component } from "react";
export default class ResourceInput extends Component {
  render() {
    const { titulo, item, handleTitulo, handleChange, handleSubmit, editItem } = this.props;
    return (
      <>
      <h1 className="text-capitalize text-center">Smart Cities</h1>
        <form onSubmit={handleSubmit}>
          <h3 className="text-capitalize text-center">Cadastrar</h3>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="Nome"
              value={titulo}
              onChange={handleTitulo}
              required="required"
            />
          </div>
          <div className="input-group" style={{ marginTop: "20px", display: "flex"}}>
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book" />
              </div>
            </div>
            <textarea
              style={{ resize: "none" }}
              type="text"
              className="form-control text-capitalize"
              placeholder="Descrição"
              value={item}
              onChange={handleChange}
              required="required"
            />

           
          </div>
          {/* <div class="checkbox">
              <label><input type="checkbox" value="" />Mobilidade</label>
            </div>
            <div class="checkbox">
              <label><input type="checkbox" value="" />Meio Ambiente</label>
            </div>
            <div class="checkbox">
              <label><input type="checkbox" value="" />Gestão Publica</label>
            </div>
            <div class="checkbox">
              <label><input type="checkbox" value="" />Acessibilidade</label>
            </div>
            <div class="checkbox">
              <label><input type="checkbox" value="" />Quaidade de Vida</label>
            </div>
            <div class="checkbox">
              <label><input type="checkbox" value="" />Eficência </label>
            </div> */}
          <button
            type="submit"
            className={
              editItem
                ? "btn btn-block btn-success mt-3"
                : "btn btn-block btn-primary mt-3"
            }
          >
            {editItem ? "Editar item" : "Enviar"}
          </button>
        </form>
      </>
    );
  }
}
