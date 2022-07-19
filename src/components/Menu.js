import { Link, Navigate } from "react-router-dom"
import style from "./css/Menu.module.css"

const logout=()=>{
    localStorage.removeItem('user')
}

const Componente = () => {
    return (

        <div className={style.container}  >
            <div className={style.card}>
                <h1 className={style.titulo}>Menú de opciones</h1>
                <div className={style.botones}>
                    <Link to="Actuales">
                        <button className="btn btn-primary btn-lg btn-block">
                            Ver actuales
                        </button>
                    </Link>

                    <Link to="Historial">
                        <button className="btn btn-secondary btn-lg btn-block">
                            Ver Historial

                        </button>
                    </Link>

                </div>
                <div className={style.btnLogout}>
                <Link to="/">
                    <button  className="btn btn-danger " onClick={logout}>
                        Logout

                    </button>
                </Link>
                </div>

            </div>


        </div>
    )
}

export const Menu = () => {

    if (localStorage.getItem('user') === 'true') {
        return <Componente />
    } else {
        return <Navigate to='/' />
    }


}