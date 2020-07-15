import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// colocar como componente padre en toda la aplicacion
import { Appcontexto } from "./Conext_Ejemplo";
ReactDOM.render(
<Appcontexto>
    <App />
</Appcontexto>
,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
