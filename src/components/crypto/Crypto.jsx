import { Link } from 'react-router-dom'
import parseFloatNumber from '../../helpers/parseFloatNumber'
import './Crypto.css'

const Crypto = ({id, name, priceUsd, symbol, change}) => (

    <Link className="crypto_item" to={`/cryptos/${id}`}>

        <h2 className="crypto_name">{name}: {symbol}</h2>

        <div className="crypto_info">
            <p className="crypto_tag">Precio:
                <span className="crypto_price"> 
                    {parseFloatNumber(priceUsd, 4)} USD
                </span>
            </p>
            <p className="crypto_tag">Variación 24hr: 
                <span className={change > 0 ? 'positive' : 'negative'}>
                    {parseFloatNumber(change, 3)}%
                </span>
            </p>
        </div>
    </Link>

)

export default Crypto