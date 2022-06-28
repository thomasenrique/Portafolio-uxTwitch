import React, { Component, useState } from "react";
import { BrowserRouter, Route, Link, Switch, Router } from "react-router-dom";
import 'typeface-quicksand';
import './index.css'
import Presentacion from './Presentacion/Presentacion'
import Contacto from './Contacto/Contacto'
import RoadMap from "./RoadMap/RoadMap";
/* import Presentacion from './Presentacion/Presentacion'
import Presentacion from './Presentacion/Presentacion'
import Presentacion from './Presentacion/Presentacion'
import Presentacion from './Presentacion/Presentacion' */
export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      WebActual: "Inicio"
    }
  }

  render() {
    const links = (
      <>
        <Link to='/' onClick={() => { this.setState({ WebActual: "Inicio" }); }}>
          <li>Home</li>
        </Link>

        <Link to='/Presentacion' onClick={() => { this.setState({ WebActual: "Presentacion" }); }}>
          <li>Me presento</li>
        </Link>

        <Link to='/Contacto' onClick={() => { this.setState({ WebActual: "Contacto" }); }}>
          <li>Contacto</li>
        </Link>

        <li>Habilidades</li>
        <li>Hobbies</li>
        <li>Nuevos intereses</li>
        <li>Roadmap Fullstack</li>
        <li>Proyectos</li>
        <li>Sobre este sitio</li>
      </>
    )


    const Routers = (
      <>
        <Switch>

          <Route exact path="/">
            <h4>Home</h4>
          </Route>

          <Route path="/Presentacion">
            <Presentacion />
          </Route>

          <Route path="/Contacto">
            <Contacto />
          </Route>

        </Switch>
      </>
    )
    return <>
      <div id='contenedor' className="contenedor">
        <BrowserRouter>
          <div id='left-menu' className="left-menu">
            <div id='titulo' className="titulo centrar">
              <div className="texto">
                <h1 className="nombre">Thomas</h1>
                <h1 className="apellido">Enrique</h1>
                <h2 className="portafolio">Portafolio</h2>
              </div>

            </div>
            <div id='opciones' className="opciones">
              <ul>
                {links}
              </ul>
            </div>
          </div>
          <div id="contenidoSeleccionado" className="contenidoSeleccionado">
            <div id="titulo" className="titulo centrar">
              <h3 className="EstasEn"> {this.state.WebActual} </h3>
            </div>
            <div id="contenido" className="contenido">
              <div className="mostrar centrar">
                {false ? Routers : <></>}
                {false ? <Presentacion /> : <></>}
                {false ? <Contacto /> : <></>}
                {true ? <RoadMap /> : <></>}

              </div>


            </div>
          </div>
        </BrowserRouter>

      </div>
    </>
  }
}


