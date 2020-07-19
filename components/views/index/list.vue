<template>
    <div class="list">
            <div class="wrap">
                <div class="top">
                    <i v-for = '(item,idx) in shopList' @click = 'select(idx)' :class = "[idx==num?'changeColor':'']" :key = 'item.id'>{{item.title}}</i>
                </div>
                <router-link to="/detail">
                <div  class="main" v-for = '(list) in shopList[num].list' :key = 'list.id'>
                    <img :src='list.src' alt="">
                    <ul>
                        <li>{{list.name}}</li>
                        <li><i>￥</i>{{list.price}}</li>
                        <li>已售{{list.sell}}件</li>
                        <li><a href="#">立即抢购</a></li>
                    </ul>
                </div>
                </router-link>
                
            </div>
            
        </div>
</template>
<script>
export default {
    data() {
        return {
            num : 0,
            shopList:[
                {
                    id:1,
                    title:'热门推荐',
                    list:[
                        {
                            id:1,
                            src:require('@/assets/images/images/产品分类_03.jpg'),
                            name:'雅诗兰黛染发膏60ml',
                            price:'123.00',
                            sell:'800'
                        },
                        {
                            id:2,
                            src:require('@/assets/images/images/产品分类_03.jpg'),
                            name:'雅诗兰黛染发膏60ml',
                            price:'123.00',
                            sell:'800'
                        },
                        {
                            id:3,
                            src:require('@/assets/images/images/产品分类_03.jpg'),
                            name:'雅诗兰黛染发膏60ml',
                            price:'123.00',
                            sell:'800'
                        }
                    ]

                },
                {
                    id:2,
                    title:'发现好货',
                    list:[
                        {
                            id:1,
                            src:require('@/assets/images/images/产品分类_05.jpg'),
                            name:'雅诗兰黛染发膏60ml',
                            price:'235.00',
                            sell:'656'
                        },
                        {
                            id:2,
                            src:require('@/assets/images/images/产品分类_05.jpg'),
                            name:'雅诗兰黛染发膏60ml',
                            price:'235.00',
                            sell:'656'
                        },
                        {
                            id:3,
                            src:require('@/assets/images/images/产品分类_05.jpg'),
                            name:'雅诗兰黛染发膏60ml',
                            price:'235.00',
                            sell:'656'
                        }
                    ]

                },
                {
                    id:3,
                    title:'只看专场',
                    list:[
                        {
                            id:1,
                            src:require('@/assets/images/images/产品分类_13.jpg'),
                            name:'雅诗兰黛染发膏60ml',
                            price:'5555.00',
                            sell:'85421'
                        },
                        {
                            id:2,
                            src:require('@/assets/images/images/产品分类_13.jpg'),
                            name:'雅诗兰黛染发膏60ml',
                            price:'5555.00',
                            sell:'85421'
                        },
                        {
                            id:3,
                            src:require('@/assets/images/images/产品分类_13.jpg'),
                            name:'雅诗兰黛染发膏60ml',
                            price:'5555.00',
                            sell:'85421'
                        }
                    ]

                },
                {
                    id:4,
                    title:'只看商品',
                    list:[
                        {
                            id:1,
                            src:require('@/assets/images/images/产品分类_18.jpg'),
                            name:'雅诗兰黛染发膏60ml',
                            price:'132.421',
                            sell:'9854'
                        },
                        {
                            id:2,
                            src:require('@/assets/images/images/产品分类_18.jpg'),
                            name:'雅诗兰黛染发膏60ml',
                            price:'132.421',
                            sell:'9854'
                        },
                        {
                            id:3,
                            src:require('@/assets/images/images/产品分类_18.jpg'),
                            name:'雅诗兰黛染发膏60ml',
                            price:'132.421',
                            sell:'9854'
                        }
                    ]

                }
            ]
        }
    },
    methods:{
            select(i){
                this.num = i;
            }
        }
}
</script>
<style scoped>
.wrap {
  width: 7.1rem;
  margin: 0 auto;
}
.list {
  background-color: #ffffff;
  margin-bottom: 2rem;
}
.list .wrap .top {
  font-size: 0.3rem;
  line-height: 1.1rem;
}
.list .wrap .top i {
  line-height: 0.7rem;
  display: inline-block;
  box-sizing: border-box;
  border: 1px solid #d0d0d0;
  border-left: 0;
  padding: 0 0.27rem;
}
.list .wrap .top i:first-child {
  border-left: 1px solid #d0d0d0;
} 
.changeColor{
  border: 0;
  background-color: #f26b11;
  color: #ffffff;
  border: 1px solid #f26b11;
}
.list .wrap .main {
  height: 3rem;
  display: flex;
  justify-content: space-between;
  padding: 0.65rem 0 0rem 0.5rem;
  box-shadow: 0 0 0.1rem 0rem #f2f2f2;
  margin: 0.17rem 0;
}
.list .wrap .main img {
  width: 2.16rem;
  height: 2.2rem;
}
.list .wrap .main ul {
  width: 4.1rem;
  font-size: 0.24rem;
}
.list .wrap .main ul li {
  margin: 0.15rem 0;
}
.list .wrap .main ul li:first-child {
  font-size: 0.3rem;
  margin-bottom: 0.15rem;
}
.list .wrap .main ul li:nth-child(2) {
  color: #d03f46;
}
.list .wrap .main ul li:nth-child(2) i {
  font-size: 0.18rem;
}
.list .wrap .main ul li:nth-child(3) {
  color: #959595;
}
.list .wrap .main ul li:last-child {
  margin-top: 0.3rem;
}
.list .wrap .main ul li:last-child a {
  line-height: 0.5rem;
  color: #ffffff;
  padding: 0.1rem 0.35rem;
  background-color: #f26b11;
  border-radius: 0.1rem;
}
</style>