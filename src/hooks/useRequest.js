import axios from "axios"
import { useEffect, useState } from "react"

const useRequest = (url) => {

    const COINCAP_API =
        import.meta.env.VITE_COINCAP_API_URL

    const [data, setData] = useState()
    const [load, setLoading] = useState(undefined)
    const [error, setError] = useState('')

    useEffect(() => {
        axios.get(`${COINCAP_API+url}`)
            .then(data => {
                setData(data.data.data)
            })
            .catch(e => {
                setError(e)
            })
        setLoading('')
    }, [])

    return [data, load, error]

}

export default useRequest