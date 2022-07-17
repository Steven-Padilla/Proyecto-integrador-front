import {Link} from "react-router-dom"

export function Menu() {

    
    return (

        
        
        <div className="container">

            <h2>Menú de opciones</h2>
            <Link to="Actuales">
                <button className="btn btn-primary">
                    Ver actuales
                </button>
             </Link>
            <Link to="Historial">
                <button className="btn btn-secondary"> 
                    Ver Historial 
            
                </button>
            </Link>
            <Link to="Componentes">
                <button className="btn btn-primary">
                    Ver componentes
                </button>
            </Link>
        </div>
    )
}