import {Link}from 'react-router-dom'

export const Bienvenido=()=>{
    return(
        <div className='container'>
            <h1>
                Hola, Bienvenido a la pagina de monitarización
            </h1>
            <Link to="Menu"><button className='btn btn-success'>Menú princial</button></Link>
        </div>
    )
}