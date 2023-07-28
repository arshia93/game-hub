import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b3d9f4bf6df54bf9878a4df1cc002a22'
    }
})