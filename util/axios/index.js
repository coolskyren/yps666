import http from './axios'
//获取分类信息首页
export function getIndexcate(params){
    return http.get('/api/getcate',{
        params
    })   
}
//获取轮播图信息首页
export function getIndexbanner(params){
    return http.get('/api/getbanner',{
        params
    })   
}
//获取限时秒杀首页
export function getIndexseckill(params){
    return http.get('/api/getseckill',{
        params
    })   
}
//获取商品信息首页
export function getIndexgoods(params){
    return http.get('/api/getindexgoods',{
        params
    })   
}
//获取商品分类C
export function getCategoods(params){
    return http.get('/api/getcategoods',{
        params
    })   
}
//获取一个商品信息G
export function getGoodsinfo(params){
    return http.get('/api/getgoodsinfo',{
        params
    })   
}
//会员注册
export function getUserregister(data){
    return http.post('/api/register',data)   
}

//会员登陆
export function getUserlogin(data){
    return http.post('/api/login',data)   
}
//购物车列表
export function getCarlist(params){
    return http.get('/api/cartlist',{
        params
    })   
}
//购物车添加
export function getCaradd(data){
    return http.post('/api/cartadd',data)   
}
//购物车修改
export function getCartedit(data){
    return http.post('/api/cartedit',data)   
}
//购物车删除
export function getCardelete(data){
    return http.post('/api/cardelete',data)   
}