import React from "react";

import Star from './star.svg'
import NoStar from './nostar.svg'

const Estrella = () => {
    return <img width={20} src={Star} />
}

const StarCounter = (props) => {
    const Nota = props.cantidad
    const Nombre = <p>{props.nombre}  </p>
    const Estrella = <img width={20} src={Star} />
    const SinEstrella = <img width={20} src={NoStar} />

    console.log(Nota)

    return <>
        <div className="ContenedorEstrellas">
            <div>{Nombre}</div>

            <div>
                {Nota > 1 ? Estrella : SinEstrella}
                {Nota > 2 ? Estrella : SinEstrella}
                {Nota > 3 ? Estrella : SinEstrella}
                {Nota > 4 ? Estrella : SinEstrella}
                {Nota > 5 ? Estrella : SinEstrella}
                {Nota > 6 ? Estrella : SinEstrella}
                {Nota > 7 ? Estrella : SinEstrella}
                {Nota > 8 ? Estrella : SinEstrella}
                {Nota > 9 ? Estrella : SinEstrella}
                {Nota > 10 ? Estrella : SinEstrella}
            </div>
        </div>
    </>
}


export default StarCounter