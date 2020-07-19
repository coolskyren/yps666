import Vue from 'vue'
import Router from 'vue-router'
//一级路由
/* import Foot from '@/components/pages/foot'
import ShopClassify from '@/components/pages/shopClassify'
import ShopDetail from '@/components/pages/shopdetail'
//二级路由
import Home from '@/components/views/index/home'
import ShopCar from '@/components/views/shopCar'
import Mine from '@/components/views/mine'
import ShopOrder from '@/components/views/shopOrder'
import ShopSearch from '@/components/views/shopSearch' */
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/foot',
      component:()=>import('@/components/pages/foot'),
      children:[
          {
            path:'/home',
            component:()=>import('@/components/views/index/home'),
          },
          {
            path:'/shopcar',
            component:()=>import('@/components/views/shopCar'),
          },
          {
            path:'/mine',
            component:()=>import('@/components/views/mine'),
          },
          {
            path:'/order',
            component:()=>import('@/components/views/shopOrder'),
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
    },
    {
      path:'/detail',
      component:()=>import('@/components/pages/shopdetail'),
    },
    {
      path:"",
      redirect:"/home"
    }
    
  ]
})
