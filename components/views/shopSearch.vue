<template>
    <div class="container">
        <div class="head">
            <p @click="goBack"><img src="@/assets/images/list_images/arrow.jpg" alt=""></p>
            <h2><img src="@/assets/images/list_images/logo.jpg" alt=""></h2>
            <p><i></i><i></i><i></i></p>
        </div>
        <div class="search">
            <img src="@/assets/images/list_images/search.jpg" alt="">
            <input type="text" placeholder="搜索商品">
        </div>
        <div class="list">
            <div class="main" v-for=" item in searchList" :key="item.id">
                <img :src="item.img" alt="">
                <div class="inner">
                    <i>{{item.name}}</i>
                    <p><span>￥</span><b>{{item.price}}</b></p>
                    <a href="#">{{item.comment}}条评论</a>
                </div>
            </div>
            <div class="main">
                <img src="" alt="">
                <div class="inner">
                    <i></i>
                    <p><span></span><b></b></p>
                    <a href="#"></a>
                </div>
            </div>
        </div>
        </div>
</template>
<script>
export default {
    data() {
        return {
            searchList:[
                {
                    id:1,
                    name:'阿道夫修护滋养洗发香乳 洗发水 持久留香520ml*2瓶 旗舰店正品换新升级款',
                    img:require('@/assets/images/classify/产品分类1 (1).jpg'),
                    price:123,
                    comment:3625
                },
                {
                    id:2,
                    name:'阿道夫修护滋养洗发香乳 洗发水 持久留香520ml*2瓶 旗舰店正品换新升级款',
                    img:require('@/assets/images/classify/产品分类1 (1).jpg'),
                    price:123,
                    comment:3625
                },
                {
                    id:3,
                    name:'阿道夫修护滋养洗发香乳 洗发水 持久留香520ml*2瓶 旗舰店正品换新升级款',
                    img:require('@/assets/images/classify/产品分类1 (1).jpg'),
                    price:123,
                    comment:3625
                },
                {
                    id:4,
                    name:'阿道夫修护滋养洗发香乳 洗发水 持久留香520ml*2瓶 旗舰店正品换新升级款',
                    img:require('@/assets/images/classify/产品分类1 (1).jpg'),
                    price:123,
                    comment:3625
                }
            ]
        }
    },
    methods: {
      goBack(){
        this.$router.go(-1);
      }
    },
}
</script>
<style scoped>
.container {
  width: 7.5rem;
  margin: 0 auto;
  background-color: white;
}
.head {
  height: 0.9rem;
  display: flex;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  font-size: 0.4rem;
  color: white;
  padding: 0 0.25rem 0 0.35rem;
}
.head h2 {
  margin-left: 0.2rem;
}
.head h2 img {
  width: 1.5rem;
  height: 0.31rem;
}
.head p img {
  width: 0.17rem;
  height: 0.29rem;
}
.head p i {
  display: inline-block;
  width: 0.12rem;
  height: 0.12rem;
  border-radius: 100%;
  background-color: black;
  margin: 0 0.05rem;
  vertical-align: 0.05rem;
}
.search {
  width: 6.25rem;
  height: 0.8rem;
  margin: 0.45rem auto;
  border-radius: 0.8rem;
  background-color: #f26b11;
  text-align: center;
  line-height: 0.8rem;
}
.search img {
  width: 0.35rem;
  height: 0.35rem;
  margin-left: 1.5rem;
}
.search input {
  font-size: 0.26rem;
  background-color: #f26b11;
  margin-left: 0.2rem;
}
.search input::placeholder {
  color: white;
}
.list {
  width: 7rem;
  margin: 0 auto;
}
.list .main {
  width: 7rem;
  box-sizing: border-box;
  display: inline-flex;
  border-bottom: 0.01rem solid #d1d1d1;
  height: 2.1rem;
  align-items: center;
  padding: 0 0.25rem;
}
.list .main img {
  width: 1.55rem;
  height: 1.55rem;
  margin-right: 0.5rem;
}
.list .main .inner {
  height: 1.55rem;
  font-size: 0.24rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.list .main .inner i {
  line-height: 0.3rem;
}
.list .main .inner span {
  font-size: 0.12rem;
  color: #f26b11;
}
.list .main .inner b {
  color: #f26b11;
  font-size: 0.3rem;
}
.list .main .inner a {
  color: #9a9a9a;
}
.list .main:last-child {
  border-bottom: 0;
}
.foot {
  height: 1.2rem;
  border-top: 0.01rem solid #ebebeb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 0 0.55rem;
}
.foot p {
  width: 0.6rem;
  height: 0.85rem;
  font-size: 0.2rem;
  text-align: center;
}
.foot p img {
  width: 0.52rem;
  height: 0.53rem;
}
.foot p i {
  display: inline-block;
  margin-top: 0.1rem;
}
.foot p:nth-child(2) {
  width: 0.9rem;
}
.foot p:nth-child(2) i {
  color: #f26b11;
}

</style>