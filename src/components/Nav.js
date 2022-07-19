import style from './css/Nav.module.css'


const logout =()=>{
    localStorage.removeItem('user')
}


export const Nav = () => {
    return (
        <div className={style.container}>
            <nav className={style.nav}>
                <a className={style.aMenu} href="http://localhost:3000/menu">Menu Principal</a>        
                <a className={style.a} href="http://localhost:3000/menu/Actuales">Actuales </a>
                <a className={style.a} href="http://localhost:3000/menu/Historial">Historiales</a>
                <div className={style.btnLogout} >
                    <a className='btn btn-danger' href="http://localhost:3000/" onClick={logout} >Logout</a>
                </div>
            </nav>
        </div>
    )
}