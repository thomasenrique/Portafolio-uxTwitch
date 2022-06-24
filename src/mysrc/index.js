import React, { Component } from "react";
import 'typeface-quicksand';
import './index.css'
export default class Index extends React.Component {

    render() {
        return <>
            <div id='contenedor' className="contenedor">
                <div id='left-menu' className="left-menu">
                    <div id='titulo' className="titulo">
                        <div className="texto">
                            <h1 className="nombre">Thomas</h1>
                            <h1 className="apellido">Enrique</h1>
                            <h2 className="portafolio">Portafolio</h2>
                        </div>

                    </div>
                    <div id='opciones' className="opciones">
                        <ul>
                            <li>Me presento</li>
                            <li>Contacto</li>
                            <li>Habilidades</li>
                            <li>Hobbies</li>
                            <li>Nuevos intereses</li>
                            <li>Roadmap Fullstack</li>
                            <li>Proyectos</li>
                        </ul>
                    </div>
                </div>
                <div id="contenidoSeleccionado" className="contenidoSeleccionado">
                    <div id="titulo" className="titulo">
                        <h3>Estas en: Contacto</h3>
                    </div>
                    <div id="contenido" className="contenido">

                    </div>
                </div>

            </div>
        </>
    }
}  