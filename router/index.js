import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/foot',
      component:()=>import('@/components/pages/foot'),
      children:[
          {
            path:'/home',
            component:()=>import('@/components/views/index/home'),
            meta:{
              name:'首页'
            }
          },
          {
            path:'/shopcar',
            component:()=>import('@/components/views/shopCar'),
            meta:{
              name:'购物车'
            }
          },
          {
            path:'/mine',
            component:()=>import('@/components/views/mine'),
            meta:{
              name:'我的订单'
            }
          },
          {
            path:'/order',
            component:()=>import('@/components/views/shopOrder'),
            meta:{
              name:'确认订单'
            }
          },
          {
            path:'/search',
            component:()=>import('@/components/views/shopSearch'),
          },
          {
            path:"",
            redirect:"/home"
          }
      ] 
    },
    {
      path:'/classify',
      component:()=>import('@/components/pages/shopClassify'),
      meta:{
        name:'商品列表'
      }
    },
    {
      path:'/detail',
      component:()=>import('@/components/pages/shopdetail'),
      meta:{
        name:'商品详情'
      }
    },
    {
      path:'/login',
      component:()=>import('@/components/pages/login'),
      meta:{
        name:'登录'
      }
    },
    
    {
      path:'/index',
      component:()=>import('@/components/pages/index'),
      meta:{
        name:'注册'
      }
    },
    {
      path:"",
      redirect:"/home"
    }
    
  ]
})
// const router = new Router({
  
// })
// router.beforeEach((to, from, next) => {
//   if(to.path == '/login'){
//     next()
//     return
//   }
//   if(!sessionStorage.getItem('userInfo')){
//     next('/login')
//   }
//   next()
// })