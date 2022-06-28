import React from "react";
import './Contacto.css'

export default class Contacto extends React.Component {

    render() {
        return <>
            <div className="ContenedorContacto centrar">
                {/* <div className="mitad">mitad</div>
                <div className="mitad">mitad</div> */}
                <div className="full">
                    <p href="mailto: contacto@thomasenriqueportfolio.cl">Si quieres ponerte en contacto conmigo puedes  <a href="mailto: contacto@thomasenriqueportfolio.cl">enviarme un mail</a></p>
                    <br />
                    <p>► contacto@thomasenriqueportfolio.cl</p>
                    <p>► th.mino@duocuc.cl</p>
                    <p>► <a target="_blank" href="https://www.linkedin.com/in/thomasmino/" >Linkedin</a></p>


                </div>

            </div>
        </>
    }
}