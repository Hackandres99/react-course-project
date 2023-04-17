import parseFloatNumber from '../../helpers/parseFloatNumber'

const CryptoHistory = ({history}) => (
    <>
        <h2 className="titles">Historial de precios</h2>
        <table>
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Precio USD</th>
                </tr>
            </thead>
            <tbody>
                {
                    history.map(({priceUsd, time}) => {
                        let date = new Date(time)
                        return(
                            <tr key={time}>
                                <td>{date.toUTCString().substring(0, 16)}</td>
                                <td>{parseFloatNumber(priceUsd, 4)}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </>
)
export default CryptoHistory