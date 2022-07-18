import { Link } from "react-router-dom"
import style from "./css/Menu.module.css"

export const Menu = (props) => {
    console.log(props);

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
                    <a href="http://localhost:3000/" className="btn btn-danger btn-lg btn-block" >
                        Logout

                    </a>
                </div>

            </div>


        </div>
    )
}