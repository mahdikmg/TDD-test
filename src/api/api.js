import axios from 'axios'
import serviceApi from './serviceApi'

const baseURL = `${process.env.VUE_APP_BASE_URL}`

let instance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: {
            username: `${process.env.VUE_APP_USERNAME}`,
            password: `${process.env.VUE_APP_PASSWORD}`
        }
    }
})

const apis = {
    service: serviceApi(instance),
};

export default apis