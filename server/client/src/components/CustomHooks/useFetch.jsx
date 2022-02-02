
import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    if(!url)return;
    setLoading(true);
    axios
    .get(url)
    .then((response) => {
      setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  const refetch = (newUrl) => {
    setLoading(true);
    axios
    .get(newUrl)
    .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  
  return { data, loading, error, refetch };
}

export default useFetch;

// import { useState, useEffect } from 'react'

// const useFetch = (url) => {
//   const [data, setData] = useState(null)
//   const [isLoading, setIsLoading] = useState(false)
//   const [errorMessage, setErrorMessage] = useState('')
// useEffect(() => {
//     if (!url) return 
//     const fetchData = async () => {
//       setIsLoading(true)
//       try {
//         const response = await fetch(url)
//         const result = await response.json()
//         if (response.ok) {
//           setData(result)
//         } else {
//           setErrorMessage(result)
//         }
//         setIsLoading(false)
//       } catch (err) {
//         setErrorMessage(err.message)
//         setIsLoading(false)
//       }
//     }
//     fetchData()
//   }, [url])
// return { data, isLoading, errorMessage }
// }
// export default useFetch