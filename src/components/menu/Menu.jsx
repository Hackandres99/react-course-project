import { NavLink, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../context/UserContextProvider"

import './Menu.css'
const Menu = () => {
    const usuario = useContext(UserContext)
    const navigation = useNavigate()
    return(
        <nav>
            <ul className="list">
                <li className="list_item"><NavLink to="/" className="menu_link">Inicio</NavLink></li>
                <li className="list_item"><NavLink to="/cryptos" className="menu_link">Cryptos</NavLink></li>
                <li className="list_item"><NavLink to="/perfil" className="menu_link">{usuario && usuario.name}</NavLink></li>
                <li className="list_item"><a onClick={() =>{
                    localStorage.removeItem('tokenSession')
                    navigation('/login')
                }} className="menu_link">Cerrar Session</a></li>
            </ul>
        </nav>
    )
}

export default Menu