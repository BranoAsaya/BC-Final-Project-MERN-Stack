import axios from 'axios'

const axiosPost = (url, data) => {
    if (!data) return
    axios
        .post(url, data)
        .then((res) => { })
        .catch((err) => { throw err })
        .finally(() => { })
}
export default axiosPost