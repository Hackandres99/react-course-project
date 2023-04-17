import { useParams } from "react-router-dom"
import useRequest from '../../hooks/useRequest'
import CryptoGeneral from "./CryptoGeneral"
import CryptoHistory from "./CryptoHistory"
import './CryptoInfo.css'

const CryptoBase = () => {

    const params = useParams()

    const [info, loadInfo, errorInfo]  = useRequest(`assets/${params.id}`)
    
    const [history, loadHistory, errorHistory]  = useRequest(`assets/${params.id}/history?interval=d1`)

    if(loadInfo === undefined && loadHistory === undefined) return <span>Cargando...</span>

    return(
        <div className="crypto_info">
            <h1 className="titles">Informacion de la crypto moneda {params.id}</h1>
            {info && <CryptoGeneral info={info}/>}
            {history && <CryptoHistory history={history} />}
        </div>
    )
}

export default CryptoBase