import React, { Component } from "react";
import PropTypes from "prop-types";

// creacion del contexto o donde se lamansenaran los estados glrobales lleva como parametro
// un objeto con los estados a utilizar y si se utilizar vacio puede colocar los estados en el proveedor 
export const Contexto = React.createContext();

// creacion de componente que servira como proveedor de Contexto o de los estados 
export class Appcontexto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // informacion de autenticasion
      nombre: "Juan",
      color: "#FFFFFF", 
    };
  }

  // puede usar una funcion para modificar el estado 
  SetNombre(nom) {
    this.setState({
        nombre:nom
    });
  }

  SetColor(Col) {
    this.setState({
        color:Col
    });
  }


  // Renderizando componente y inicializando estados govales a utilizar 
  //ya que no estan de finidos en el parametro de createContext
  // todos los componente que se pasen como props children podra hacer uso de los estados 
  render() {
    const {
      nombre, 
      color
    } = this.state;

    const { children } = this.props;
    return (
      <Contexto.Provider
      // estados globales
      // titne que colocar el estado y su funcion para modificar 
        value={{
          nombre,
          setNombre:nom => {
            this.SetNombre(nom);
          },
         color,
         setColor:col =>{
            this.SetColor(col);
         }
        }}
      >
        {children}
      </Contexto.Provider>
    );
  }
}

Appcontexto.propTypes = {
  children: PropTypes.element.isRequired
};
