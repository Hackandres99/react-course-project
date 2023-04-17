const CryptoGeneral = ({info}) => {

    let headers, data = {}
    headers = Object.keys(info)
    data = Object.values(info)

    return(
        <>
            <h2 className="titles">Datos Generales</h2>
            <table>
                <thead>
                    <tr>
                        <th>Detalle</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        headers.map((header, i) => {
                            return(
                                <tr key={i}>
                                    <td>{header}</td>
                                    <td>{data[i]}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
)}
export default CryptoGeneral