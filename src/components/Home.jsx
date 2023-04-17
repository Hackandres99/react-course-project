import { Link } from "react-router-dom"

const Home = () => (
    <>
        <h1>Bienvenido a tu app de crypto monedas</h1>
        <p>Aquí podras encontrar información detallada sobre cada una</p>
        <Link to="/cryptos">Ir a crypto monedas</Link>
    </>
)

export default Home