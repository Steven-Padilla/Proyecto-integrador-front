import {useEffect,useState} from 'react'
import { getDatos } from '../services/services'
import { TablaHisto } from './TablaHisto';


export function Actuales() {
    const[datos,setDatos]=useState([{fecha:"1"}]);
    
    useEffect(()=>{
        getDatos().then((response)=>{
            setDatos(response.data)
        })
    },[]);



    

    return (

        <div className="container">
            <h1 className="text-center">
            Pagina de Datos Actuales
            </h1>
            <table className="table table-striped">
                
                <thead>
                    <tr>
                        <th colSpan="7"><p className="text-center">Tabla de datos recolectados</p></th>
                    </tr>
                    <tr> 
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
                    <TablaHisto {...datos[datos.length-1]} />
                    

                </tbody>
            </table>
        </div>
    )
}