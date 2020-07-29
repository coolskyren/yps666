import http from './axios'
//获取分类信息首页
export function getIndexcate(params){
    return http.get('/getcate',{
        params
    })   
}
//获取轮播图信息首页
export function getIndexbanner(params){
    return http.get('/getbanner',{
        params
    })   
}
//获取限时秒杀首页
export function getIndexseckill(params){
    return http.get('/getseckill',{
        params
    })   
}
//获取商品信息首页
export function getIndexgoods(params){
    return http.get('/getgoods',{
        params
    })   
}
//获取分类树形结构
export function getCatetree(params){
    return http.get('/getcatetree',{
        params
    })   
}
//获取一个商品信息G
export function getGoodsinfo(params){
    return http.get('/getgoodsinfo',{
        params
    })   
}
//会员注册
export function getUserregister(data){
    return http.post('/register',data)   
}

//会员登陆
export function getUserlogin(data){
    return http.post('/login',data)   
}
//购物车列表
export function getCarlist(params){
    return http.get('/cartlist',{
        params
    })   
}
//购物车添加
export function getCartadd(data){
    return http.post('/cartadd',data)   
}
//购物车修改
export function getCartedit(data){
    return http.post('/cartedit',data)   
}
//购物车删除
export function getCardelete(data){
    return http.post('/cardelete',data)   
}