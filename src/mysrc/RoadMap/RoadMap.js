import React from "react";
import StarCounter from "../Component/starCounter/StarCounter.js";
import './RoadMap.css'

export default class RoadMap extends React.Component {

    render() {
        return <>
            <div className="ContenedorContacto centrar">
                {/* <div className="full">
                    <StarCounter nombre='HTML + CSS' cantidad={8} />
                    <StarCounter nombre='JavaScript' cantidad={7} />
                    <StarCounter nombre='Bootstrap' cantidad={7} />
                    <StarCounter nombre='React' cantidad={7} />
                    <StarCounter nombre='Advance JavaScript' cantidad={7} />
                    <StarCounter nombre='Node Js' cantidad={7} />
                    <StarCounter nombre='SQL Server' cantidad={7} />
                    <StarCounter nombre='Git' cantidad={7} />
                    <StarCounter nombre='Rest Api' cantidad={7} />
                    <StarCounter nombre='Aws / Google Cloud' cantidad={7} />
                </div> */}

                <div className="medio centrar2">
                    <StarCounter nombre='HTML + CSS' cantidad={8} />
                    <StarCounter nombre='JavaScript' cantidad={7} />
                    <StarCounter nombre='Bootstrap' cantidad={7} />
                    <StarCounter nombre='React' cantidad={7} />
                    <StarCounter nombre='Advance JavaScript' cantidad={7} />
                </div>

                <div className="medio centrar2">
                    <StarCounter nombre='Node Js' cantidad={7} />
                    <StarCounter nombre='SQL Server' cantidad={7} />
                    <StarCounter nombre='Git' cantidad={7} />
                    <StarCounter nombre='Rest Api' cantidad={7} />
                    <StarCounter nombre='Aws / Google Cloud' cantidad={7} />
                </div>
            </div>

        </>
    }
}