import { useState, useEffect } from 'react'
import axios from 'axios'

const UseAxios = (url, data) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const fetchData = () => {
   if(data === null)return    
    axios
      .post(url, data)
      .then((res) => {
        setResponse(res.data)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchData()
  }, [data])

  return { response, error, loading }
}

export default UseAxios
