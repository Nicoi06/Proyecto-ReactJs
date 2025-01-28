// import de librerias 
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//obtener una referencia al div con id root
const el = document.getElementById("root");

//le decimos a react que tome control del elemento
const root = ReactDOM.createRoot(el);

//creamos un componente

//mostrar el componente
root.render(<App/>)
