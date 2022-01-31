const fetchData = async (url) => {
    try {
      const response = await fetch(url)
      const result = await response.json()
      if (response.ok) {
          console.log(result);
          return result
      } else {
        console.log(true)
        console.log(result)
      }
      console.log(false)
    } catch (err) {
        console.log(true)
        console.log(err.message)
        console.log(false)
    }
  }

export default fetchData