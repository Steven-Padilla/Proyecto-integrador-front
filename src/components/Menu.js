import { Link } from "react-router-dom"

export const Menu=()=> {


    return (



        <div className="container">
            <div className="container">

            </div>

            <div className="card border-primary text-center">
                <h2 className="text-center">Menú de opciones</h2>
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
            </div>
        </div>
    )
}