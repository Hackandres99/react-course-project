import { useContext } from "react"
import {UserContext} from "../../context/UserContextProvider"

const Perfil = () => {
    const usuario = useContext(UserContext)

    
    return(
        <>
            {
                usuario && (
                    <>
                        <h1>{usuario.name}</h1>
                        <p>{usuario.startedDate}</p>
                    </>
                )
            }
            
        </>
    )
}

export default Perfil