<template>
    <div class="nav">
            <div class="wrap">
                <ul>
                    <li class="first"><a href="#">推荐</a></li>
                    <li><a href="#" v-for="item in navList" :key="item.id">{{item.name}}</a></li>
                    
                </ul>
                <span class="arrow">
                    <img src="@/assets/images/index_images/arrow.jpg" alt="">
                </span>
            </div>
        </div>
</template>
<script>
export default {
    data() {
        return {
            navList:[
                {
                    id:1,
                    name:'女装'
                },
                {
                    id:2,
                    name:'鞋包'
                },
                {
                    id:3,
                    name:'居家'
                },
                {
                    id:4,
                    name:'母婴童装'
                },
                {
                    id:5,
                    name:'居家'
                },
                {
                    id:6,
                    name:'居家'
                },
                {
                    id:7,
                    name:'居家'
                },
            ]
        }
    },
}
</script>
<style scoped>
.wrap {
  width: 7.1rem;
  margin: 0 auto;
}
.nav {
  background-color: #ffffff;
  height: 0.8rem;
  line-height: 0.8rem;
}
.nav .wrap {
  overflow: hidden;
  position: relative;
}
.nav ul {
  width: 20rem;
}
.nav ul li {
  float: left;
  font-size: 0.28rem;
}
.nav ul li a {
  color: #202020;
  padding: 0 0.19rem;
}
.nav ul li.first {
  position: relative;
}
.nav ul li.first a {
  color: #e40033;
  border-right: 1px solid #f1f1f1;
}
.nav ul li.first::after {
  position: absolute;
  bottom: 0;
  left: 0.19rem;
  content: '';
  width: calc(100% - 0.38rem);
  height: 0.04rem;
  background-color: #e40033;
}
.nav .arrow {
  position: absolute;
  top: 0;
  right: 0;
  padding-left: 0.2rem;
  background-color: #ffffff;
}
.nav .arrow img {
  width: 0.35rem;
  height: 0.21rem;
}
</style>