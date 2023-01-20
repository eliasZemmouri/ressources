import axios from "axios"
const baseUrl = "//localhost:3001/api/children"

const retrieveAll = () => {
   return axios.get(baseUrl).then(response => response.data)
}

export {
    retrieveAll
}