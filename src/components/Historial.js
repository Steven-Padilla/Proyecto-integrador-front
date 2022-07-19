import { useEffect, useState } from 'react'
import {Navigate} from 'react-router-dom'
import { getDatos, getRegado } from '../services/services'
import { DataTable } from './DataTable';
import { RegadoTable } from './RegadoTable';
import { Nav } from './Nav'

import style from './css/Historiales.module.css'


export function Historial() {
    const [datos, setDatos] = useState([]);
    const [regado, setRegado] = useState([]);

    useEffect(() => {
        getDatos().then((response) => {
            setDatos(response.data)
        })
        getRegado().then((res) => {
            setRegado(res.data)
        })
    }, []);





    if (localStorage.getItem('user') === 'true') {
        return (
            <div className={style.container}>
                {/* <img alt='' src='https://i.pinimg.com/originals/f5/b3/52/f5b352cc0e50776e343fae9f46636558.jpg' className={style.img}></img> */}
                <Nav />
                <div className={style.card}>
                    <h1 className={style.titulo}>
                        Datos recolectados de la Planta
                    </h1>

                    <div className={style.tablas}>

                        <div>
                            {/*Tabla de datos capturados por hardware */}
                            <table className="table table-striped">

                                <thead className='thead-dark'>
                                    <tr className='table-primary'>
                                        <th colSpan="7"><p className="text-center">Tabla de datos recolectados</p></th>
                                    </tr>
                                    <tr className='table-primary text-center '>
                                        <th>ID</th>
                                        <th>HORA</th>
                                        <th>FECHA</th>
                                        <th>Temperatura</th>
                                        <th>humedad</th>
                                        <th>Agua</th>
                                        <th>Suelo</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {datos.map((data) => (
                                        <DataTable key={data.id} {...data} />
                                    ))}


                                </tbody>
                            </table>
                        </div>

                        <div>
                            {/* Tabla del historial de regado */}
                            <table className="table table-striped">

                                <thead>
                                    <tr className='table-primary'>
                                        <th colSpan="3"><p className="text-center">Tabla de Historial de regado</p></th>
                                    </tr>
                                    <tr className='table-primary text-center'>
                                        <th>ID</th>
                                        <th>HORA</th>
                                        <th>FECHA</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {regado.map((data) => (
                                        <RegadoTable key={data.id} {...data} />
                                    ))}


                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        )
    }else{
        return <Navigate to='/'/>
    }
}