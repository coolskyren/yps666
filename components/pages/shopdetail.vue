<template>
  <div class="container">
    <logoHeader></logoHeader>
    <div class="main1">
      <img :src="$imgUrl+detailInfo.img" alt />
      <p>
        <span v-html="detailInfo.description"></span>
        <br />
        <i>￥{{detailInfo.market_price}}</i>
        <b>(此价格不与套装优惠同时享受)</b>
      </p>
    </div>
    <div class="main2">
      <div class="top">
        <p>
          促销：
          <i>满减</i>满2件9折；3件8折
        </p>
        <b></b>
      </div>
      <div class="middle">
        购买数量
        <van-stepper v-model="num" />
      </div>
      <div class="bottom">
        <p>
          <i>商品属性</i>
          <b></b>
        </p>
        <br />
        <i>规格</i>
        <b v-for="item in detail" :key="item">{{item}}</b>
      </div>
    </div>
    <div class="main3">
      <h2>商品详情</h2>
      <img :src="$imgUrl+detailInfo.img" alt />
      <img :src="$imgUrl+detailInfo.img" alt />
      <img :src="$imgUrl+detailInfo.img" alt />
    </div>
    <div class="main4">
      <div class="inner">
        <h2>商品评价</h2>
        <textarea name="pingjia" id cols="40" rows="10" placeholder="请输入评价"></textarea>
        <input type="datetime-local" name="datetime" />
        <p>
          <i>共1000+条评论</i>
          <a href="#">查看更多></a>
        </p>
      </div>
      <div class="foot">
        <router-link to="/shopCar">
          <p>
            <a href="#">
              <img src="@/assets/images/public/icon_7.jpg" alt />
              <i>购物车</i>
            </a>
          </p>
        </router-link>
        <b @click="addCar" >加入购物车</b>
        <span @click="onCar">立即购买</span>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'vant'
import logoHeader from "@/common/head";
import { getGoodsinfo, getCartadd } from "@/util/axios";
export default {
  data() {
    return {
      num: 1,
      detailInfo: {},
      detail:[]
    };
  },
  mounted() {
    this.getGoodsDetail();
  },
  methods: {
    getGoodsDetail() {
      getGoodsinfo({
        id: this.$route.query.id,
      }).then((res) => {
        if (res.data.code == 200) {
          this.detailInfo = res.data.list[0];
          this.detail = this.detailInfo.specsattr.split(',')
        }
      });
    },
    onCar() {
      let isLogin =JSON.parse(sessionStorage.getItem('userInfo')) ? true: false
      if(isLogin){
      getCartadd({
        uid: JSON.parse(sessionStorage.getItem("userInfo")).uid,
        goodsid: this.$route.query.id,
        num: this.num,
      }).then((res) => {
        if (res.data.code == 200) {
          this.$router.push("/shopcar");
        } else {
          Toast(res.data.msg);
        }
      });
      }else{
          Toast('请先登录')
                this.$router.push('/login')
      }
    },
    addCar(){
      let isLogin =JSON.parse(sessionStorage.getItem('userInfo')) ? true: false
      if(isLogin){
      getCartadd({
        uid: JSON.parse(sessionStorage.getItem("userInfo")).uid,
        goodsid: this.$route.query.id,
        num: this.num,
      }).then((res) => {
        if (res.data.code == 200) {
          Toast(res.data.msg);
        } else {
          Toast(res.data.msg);
        }
      });
      }else{
          Toast('请先登录')
                this.$router.push('/login')
      }
    }
  },
  components: {
    logoHeader,
  },
};
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
  background-color: #f26b11;
  align-items: center;
  font-size: 0.4rem;
  color: white;
  padding: 0 0.25rem 0 0.35rem;
}
.head h2 {
  margin-left: 0.2rem;
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
  background-color: white;
  margin: 0 0.05rem;
  vertical-align: 0.05rem;
}
.main1 {
  background-color: white;
}
.main1 img {
  width: 7.5rem;
  height: 7.5rem;
}
.main1 p {
  line-height: 0.4rem;
  padding: 0.3rem 0.45rem 0 0.4rem;
  font-size: 0.3rem;
}
.main1 p i {
  font-size: 0.24rem;
  color: #e23a3a;
  display: inline-block;
  padding-top: 0.2rem;
  padding-bottom: 0.35rem;
}
.main1 p b {
  font-size: 0.22rem;
  color: #868686;
}
.main2 {
  font-size: 0.26rem;
  border-bottom: 1px solid #fefffb;
  background-color: white;
  margin-top: 0.3rem;
}
.main2 .top {
  line-height: 1rem;
  padding: 0 0.5rem 0 0.3rem;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main2 .top i {
  border: 1px solid #ae291a;
  display: inline-block;
  padding: 0.07rem 0.1rem;
  border-radius: 0.05rem;
  line-height: 1;
  margin-right: 0.1rem;
}
.main2 .top b {
  display: inline-block;
  width: 0.35rem;
  height: 0.21rem;
  background: url(../../assets/images/detail_images/arrow.jpg);
  background-size: contain;
}
.main2 .middle {
  height: 1rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  align-items: center;
  padding: 0 0.3rem;
}
.main2 .middle p {
  width: 2.12rem;
  height: 0.6rem;
  border: 1px solid black;
  border-radius: 0.05rem;
  line-height: 0.6rem;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  font-size: 0.3rem;
}
.main2 .middle p i:nth-child(2) {
  border-left: 1px solid black;
  border-right: 1px solid black;
  padding: 0 0.4rem;
}
.main2 .bottom {
  height: 1.9rem;
  font-size: 0.26rem;
  padding: 0.2rem 0.5rem 0 0.3rem;
  border-bottom: 1px solid #fefffb;
}
.main2 .bottom p {
  line-height: 0.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main2 .bottom p i {
  color: black;
}
.main2 .bottom p b {
  display: inline-block;
  width: 0.35rem;
  height: 0.21rem;
  background: url(../../assets/images/detail_images/arrow.jpg);
  background-size: contain;
}
.main2 .bottom i {
  color: #868686;
}
.main2 .bottom b {
  display: inline-block;
  width: 1.5rem;
  border-radius: 0.05rem;
  background-color: #e23a3a;
  color: white;
  line-height: 0.6rem;
  text-align: center;
  margin-left: 0.7rem;
}
.main2 .bottom span {
  display: inline-block;
  width: 1.2rem;
  border-radius: 0.05rem;
  background-color: #e1e1e3;
  color: white;
  line-height: 0.6rem;
  text-align: center;
  margin-left: 0.2rem;
}
.main3 {
  margin: 0.2rem 0;
  background-color: white;
}
.main3 h2 {
  line-height: 1rem;
  margin-left: 0.25rem;
}
.main3 img {
  width: 100%;
}
.main3 img:first-child {
  height: 4.58rem;
}
.main3 img:nth-child(2) {
  height: 6.48rem;
}
.main3 img:last-child {
  height: 5.92rem;
}
.main4 {
  background-color: white;
  padding-bottom: 2rem;
}
.main4 .inner {
  width: 7rem;
  margin: 0 auto;
}
.main4 .inner p {
  display: flex;
  justify-content: space-between;
  line-height: 0.9rem;
  border-top: 0.01rem solid black;
  font-size: 0.26rem;
  color: #868686;
}
.main4 .foot {
  position: fixed;
  left: 50%;
  bottom: 0;
  margin-left: -3.75rem;
  display: flex;
  line-height: 1.15rem;
  height: 1.15rem;
  text-align: center;
  font-size: 0.3rem;
  background-color: #fff;
}
.main4 .foot p {
  width: 1.74rem;
  height: 0.8rem;
  border: 0;
}
.main4 .foot p a {
  margin-top: 0.2rem;
  display: flex;
  flex-direction: column;
}
.main4 .foot p a img {
  width: 0.56rem;
  height: 0.53rem;
  margin: 0 auto;
}
.main4 .foot p a i {
  color: #868686;
  font-size: 0.18rem;
  line-height: 1;
}
.main4 .foot b {
  width: 2.88rem;
  text-align: center;
  background-color: #f26b11;
  color: white;
}
.main4 .foot span {
  width: 2.88rem;
  text-align: center;
  background-color: #e43a3d;
  color: white;
}
.main4 h2 {
  line-height: 1rem;
  border-bottom: 1px solid black;
}
.main4 textarea {
  border: 0;
}
</style>