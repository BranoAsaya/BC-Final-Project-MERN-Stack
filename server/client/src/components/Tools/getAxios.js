import axios from 'axios'

const getAxios = (url) => {
    if (!url) return
    axios
        .get(url)
        .then((res) => { })
        .catch((err) => { throw err })
        .finally(() => { })
}
export default getAxios