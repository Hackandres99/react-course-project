import useRequest from '../../hooks/useRequest'
import Crypto from "../crypto/Crypto"
import './Cuadricula.css'

const Cuadricula = () => {

    const [cryptos, loadCryptos, errorCryptos] = useRequest('assets')

    if(loadCryptos === undefined) return <span>Cargando...</span>

    return (
        <>
            <h1 className="container_name">App de crypto monedas</h1>
            <div className="cryptos_container">
                {cryptos &&(
                    cryptos.map(({id, name, priceUsd, symbol, changePercent24Hr}) => (
                        <Crypto 
                            key={id}
                            name={name} 
                            priceUsd={priceUsd} 
                            symbol={symbol} 
                            change={changePercent24Hr}
                            id={id}
                        />
                    ))
                )}
            </div>
        </>
    )
}

export default Cuadricula