import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Contexto} from "./Conext_Ejemplo";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      col:""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  //cargando estado desde el contex
  componentDidMount() {
    const { nombre } = this.context;
    this.setState({nombre});
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // ver el archivo index.js
  render() {
    const { nom, col } = this.state;
    const { nombre,color, setNombre,setColor } = this.context;
    return (
    <>
          <div className="App" >
            <header className="App-header" >
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
               React Documentacion
              </a>
              <p style={{background:color, color:"black"}}>
              Hola me llamo: {nombre}
              <br/>
              cambiar nombre: <input type="text"         
                name="nom"
                id="nom"  value={nom === null ? "" : nom}
                onChange={this.handleChange} /> <input type="button" value="Guardar" onClick={()=>{
                setNombre(nom)
              }} />
              cambiar color de fondo: <input type="color"                
                name="col"
                id="col"  value={col === null ? "" : col}
                onChange={this.handleChange} />
                <input type="button" value="Guardar" onClick={()=>{
                setColor(col)
              }} />
              </p>
              
            </header>
          </div>
      </>
    );
  }
}

// que el componente haga uso del contex
//y si usas hooks busca en la documentacion usecontext creo q se llama la funcion
App.contextType = Contexto
