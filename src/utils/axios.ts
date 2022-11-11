import Axios from 'axios'
import { ElMessage } from 'element-plus'

const baseURL = 'https://api.github.com'

const axios = Axios.create({
    baseURL,
    timeout: 20000 //请求超时20s
})


//设置请求拦截器(发起请求之前的拦截)
axios.interceptors.request.use(
    (response)  => {
        //根据项目做处理
        return response
    },
    (error) => {
        return Promise.reject(error)
    }
)

//设置响应拦截器(获取到响应时的拦截)
axios.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (error.response && error.response.data) {
            const code = error.response.status
            const msg = error.response.data.message
            ElMessage.error(`Code: ${code}, Message: ${msg}`)
            console.error(`[Axios Error]`,error.response)
        } else {
            ElMessage.error(`${error}`)
        }
        return Promise.reject(error)
    }
)


export default axios