import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '96e65a7280f64ca5b0fd1c059c866001'
    }
})