<template>
  <div class="banner">
    <van-swipe class="my-swipe" :autoplay="bannerTime" indicator-color="white">
      <van-swipe-item v-for="item in bannerList" :key="item.id"><img  :src="$imgUrl + item.img" alt=""></van-swipe-item>
      
    </van-swipe>
  </div>
</template>
<script>
import { getIndexbanner } from "@/util/axios";
export default {
  data() {
    return {
      bannerTime: 5000,
      bannerList: [],
    };
  },
  mounted() {
      getIndexbanner().then(res => {
        console.log(res)
        if (res.data.code == 200) {
          this.bannerList = res.data.list;
        }
      });
    
  },
  methods: {
      shopList(){
          
      }
  },
  
};
</script>

<style scoped>
.banner {
  height: 2.91rem;
  position: relative;
  box-sizing: border-box;
}
.banner a {
  position: absolute;
  top: 0;
  left: 0;
}
.banner img {
  width: 7.5rem;
  height: 2.91rem;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  
}
</style>