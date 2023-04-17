import axios from "axios"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import './Login.css'

const Login = () =>{

    const navigation = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const [load, setLoad] = useState(false)
    const [error, setError] = useState(false)

    const submit = e =>{
        setLoad(true)
        setError(null)
        e.preventDefault()
        axios.post('https://reqres.in/api/login', user)
        .then(data => {
            setLoad(false)
            localStorage.setItem('tokenSession', data.data.token)
            navigation("/")
        })
        .catch(e => {
            setLoad(false)
            setError(e.response.data.error)
        })
        
    }

    if(localStorage.getItem('tokenSession')) return <Navigate to='/' />

    return(
        <section className="form_section">
            <h1>Iniciar sesión</h1>
            <form onSubmit={submit} className="session_form"> 
                <label htmlFor="email" className="email_label">Email</label>
                <input className="email_input" onChange={e =>{
                    setUser({...user, email: e.target.value})
                }} type="email" name="email" required/>

                <label htmlFor="password" className="password_label">Contraseña</label>
                <input className="password_input" onChange={e =>{
                    setUser({...user, password: e.target.value})
                }} type="password" name="password" required/>

                <input className="send_input" type="submit" value={load ? 'Cargando...' : 'Ingresar'} />
                {error && <span className="error">Error: {error}</span>}
            </form>
        </section>
    )
}
export default Login