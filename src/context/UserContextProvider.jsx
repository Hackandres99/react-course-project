import { createContext, useEffect, useState } from "react"

const UserContext = createContext()

const UserContextProvider = ({children}) =>{

    const [usuario, setUsuario] = useState()
    useEffect(() =>{
        setUsuario({
            name: "Andrés Castro",
            startedDate: "10/04/2023"
        })
    }, [])

    return(
        <UserContext.Provider value={usuario}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserContextProvider}