import axios from 'axios'
import router from '@/router'
let http = axios.create({
    baseURL:'/api'
})
//请求拦截
// http.interceptors.request.use((config)=>{
//     let userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
//     config.headers.authorization = userInfo?userInfo.token:{}
//     return config
// })
// //响应拦截
// http.interceptors.response.use((res)=>{
//     console.log(res.data,'响应全局')
//     if(res.data.code ==403){
//         router.push('/login')
//     }
//     return res
// })
export default http
