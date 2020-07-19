<template>
  <div class="container">
    <div class="head">
      <p>
        <a href="#">
          <img src="../../assets/images/public/arrow.jpg" alt />
        </a>
      </p>
      <h2>购物车</h2>
      <p>
        <i></i>
        <i></i>
        <i></i>
      </p>
    </div>
    <ul class="pro-list">
      <li v-for="item in carList" :key="item.id">
        <i class="checked"></i>
        <img src="item.img" alt />
        <p>
          <span class="pro-name">{{item.name}}</span>
          <span class="pro-des">规格：50g</span>
          <span class="pro-price">￥199.00</span>
        </p>
        <div class="count-group">
          <input type="button" value="-" />
          <input type="text" v-model="num" />
          <input type="button" value="+" />
        </div>
        <div class="del">删除</div>
      </li>
    </ul>
    <div class="all-shop">
      <div class="lift">
        <div class="l">
          <i></i>
          <b>全选</b>
        </div>
        <div class="r">
          总计：
          <b>163.00</b>
          <br />
          <span>不含运费，已优惠￥0.00</span>
        </div>
      </div>
      <router-link  to="/order"><input type="submit" value="去结算(2件)"/></router-link>
      
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 1,
      carList: [
        {
          id: 1,
          name: "欧莱雅面霜",
          describe: "50g",
          price: 199,
          img: require("../../assets/images/shoping_car_images/shop.jpg")
        },
        {
          id: 2,
          name: "欧莱雅面霜",
          describe: "50g",
          price: 199,
          img: require("../../assets/images/shoping_car_images/shop.jpg")
        },
        {
          id: 3,
          name: "欧莱雅面霜",
          describe: "50g",
          price: 199,
          img: require("../../assets/images/shoping_car_images/shop.jpg")
        }
      ]
    };
  }
};
</script>
<style  scoped>
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
.pro-list {
  overflow: hidden;
  padding-bottom: 4rem;
}
.pro-list li {
  position: relative;
  height: 1.76rem;
  box-shadow: 0 0 0.15rem 0.01rem #e0e0e0;
  margin-top: 0.3rem;
  padding: 0 0.3rem;
  line-height: 1.76rem;
}
.pro-list li.active {
  left: -0.98rem;
}
.pro-list li > * {
  display: inline-block;
  vertical-align: middle;
}
.pro-list li i {
  display: inline-block;
  width: 0.34rem;
  height: 0.34rem;
  border: 1px solid #b0b0b0;
  border-radius: 50%;
  box-sizing: border-box;
  margin-right: 0.3rem;
}
.pro-list li i.checked {
  border-color: #c05447;
  background: url(../../assets/images/shoping_car_images/select.jpg) no-repeat
    center;
  background-size: 70%;
}
.pro-list li img {
  width: 1.02rem;
  height: 0.82rem;
  margin-right: 0.34rem;
}
.pro-list li p {
  line-height: 1;
}
.pro-list li p span {
  display: block;
}
.pro-list li p .pro-name {
  font-size: 0.28rem;
}
.pro-list li p .pro-des {
  font-size: 0.24rem;
  color: #999999;
  line-height: 0.5rem;
}
.pro-list li p .pro-price {
  font-size: 0.26rem;
  color: #c05447;
}
.pro-list li .count-group {
  display: flex;
  float: right;
  width: 2.12rem;
  height: 0.6rem;
  box-sizing: border-box;
  border: 1px solid #333333;
  border-radius: 0.05rem;
  line-height: 0.6rem;
  margin-top: 0.58rem;
}
.pro-list li .count-group input[type="button"] {
  flex-shrink: 0;
  width: 0.62rem;
  height: 0.58rem;
  background-color: transparent;
  font-size: 0.24rem;
}
.pro-list li .count-group input[type="text"] {
  width: 0.82rem;
  flex-shrink: 1;
  border-left: 1px solid #333333;
  border-right: 1px solid #333333;
  font-size: 0.3rem;
  text-align: center;
}
.pro-list li .del {
  position: absolute;
  right: -0.98rem;
  top: 0;
  width: 0.98rem;
  height: 1.76rem;
  background-color: #e45a3d;
  color: white;
  font-size: 0.26rem;
  text-align: center;
}
.all-shop {
  border-top: 1px solid #999999;
  border-bottom: 1px solid #999999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
.all-shop .lift {
  width: 4.5rem;
  display: flex;
  justify-content: space-between;
  padding-left: 0.3rem;
  line-height: 1.15rem;
  align-items: center;
}
.all-shop .lift .l i {
  display: inline-block;
  width: 0.34rem;
  height: 0.34rem;
  border: 1px solid #b0b0b0;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: #c05447;
  background: url(../../assets/images/shoping_car_images/select.jpg) no-repeat
    center;
  background-size: 70%;
  margin-right: 0.2rem;
  vertical-align: -0.05rem;
}
.all-shop .lift .l b {
  font-size: 0.26rem;
  line-height: 1.15rem;
}
.all-shop .lift .r {
  height: 0.75rem;
  font-size: 0.3rem;
  line-height: 0.4rem;
}
.all-shop .lift .r b {
  font-size: 0.28rem;
  color: #e45a3d;
  line-height: 1;
}
.all-shop .lift .r span {
  font-size: 0.22rem;
  color: #999999;
  line-height: 1;
}
.all-shop input {
  width: 2.5rem;
  height: 1.16rem;
  text-align: center;
  color: white;
  background-color: #f26b11;
}
</style>