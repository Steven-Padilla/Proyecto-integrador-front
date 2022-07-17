import { useEffect, useState } from 'react'
import { getDatos, getRegado } from '../services/services'
import { DataTable } from './DataTable';
import { RegadoTable } from './RegadoTable';


export function Actuales() {
    const [datos, setDatos] = useState([{ fecha: "1" }]);
    const [regado, setRegado] = useState([{fecha: "1" }]);

    useEffect(() => {
        getDatos().then((response) => {
            setDatos(response.data)
        })
        getRegado().then((res) => {
            setRegado(res.data)
        })
    }, []);





    return (

        <div className="container">
            <h1 className="text-center">
                Pagina de Datos Actuales
            </h1>
            {/* Tabla del ultimo dato obtenido del hardware */}
            <table className="table table-striped ">

                <thead>
                    <tr>
                        <th colSpan="7"><p className="text-center">Tabla de datos recolectados</p></th>
                    </tr>
                    <tr className='text-center'>
                        <th >ID</th>
                        <th>HORA</th>
                        <th>FECHA</th>
                        <th>Temperatura</th>
                        <th>humedad</th>
                        <th>Agua</th>
                        <th>Suelo</th>
                    </tr>
                </thead>

                <tbody >
                    <DataTable {...datos[datos.length - 1]} />


                </tbody>
            </table>

            {/* Tabla del historial de regado */}
            <table className="table table-striped">

                <thead>
                    <tr>
                        <th colSpan="3"><p className="text-center">Tabla de Historial de regado</p></th>
                    </tr>
                    <tr className='text-center'>
                        <th>ID</th>
                        <th>HORA</th>
                        <th>FECHA</th>
                    </tr>
                </thead>

                <tbody>
                    <RegadoTable  {...regado[regado.length-1]} />


                </tbody>
            </table>
        </div>
    )
}