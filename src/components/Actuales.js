import { useEffect, useState } from 'react'
import { getDatos, getRegado } from '../services/services'
import { DataTable } from './DataTable';
import { RegadoTable } from './RegadoTable';
import { Nav } from './Nav'
import style from './css/Actuales.module.css'


export function Actuales() {
    const [datos, setDatos] = useState([{ fecha: "1" }]);
    const [regado, setRegado] = useState([{ fecha: "1" }]);

    useEffect(() => {
        getDatos().then((response) => {
            setDatos(response.data)
        })
        getRegado().then((res) => {
            setRegado(res.data)
        })
    }, []);





    return (

        <div className={style.container}>
            <Nav />
            <div className={style.card}>



                <h1 className={style.titulo}>
                    Ultimos datos recoletados de la planta
                </h1>

                <div className={style.tablas}>
                    {/* Tabla del ultimo dato obtenido del hardware */}
                    <table className="table table-striped ">

                        <thead className='thead-dark'>
                            <tr className='table-primary'>
                                <th colSpan="7"><p className="text-center">Tabla de datos recolectados</p></th>
                            </tr>
                            <tr className='text-center table-primary'>
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
                            <tr className='table-primary'>
                                <th colSpan="3"><p className="text-center">Tabla de Historial de regado</p></th>
                            </tr>
                            <tr className='text-center table-primary'>
                                <th>ID</th>
                                <th>HORA</th>
                                <th>FECHA</th>
                            </tr>
                        </thead>

                        <tbody>
                            <RegadoTable  {...regado[regado.length - 1]} />


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}