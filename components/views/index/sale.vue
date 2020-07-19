<template>
  <div>
    <div class="sale">
      <div class="left">
        <a href="#">
          <h3>
            <img src="@/assets/images/index_images/timer.jpg" alt />限时秒杀
          </h3>
          <p class="des">每天零点 好货秒不停</p>
          <p class="time">
            <span>19</span>:
            <span>30</span>:
            <span>29</span>
            <i>秒杀</i>
          </p>
          <img class="pic" src="@/assets/images/index_images/shop_5.jpg" alt />
          <div class="price">
            ￥
            <span>14.8</span>
          </div>
        </a>
      </div>
      <div class="right">
        <a href="#">
          <div class="top">
            <div class="l">
              <h3>
                品牌上新
                <i>折</i>
              </h3>
              <p>每日9点 抢大牌</p>
              <span></span>
            </div>
            <img src="@/assets/images/index_images/shop_1.jpg" alt />
          </div>
          <div class="bottom">
            <div class="l">
              <h3>每日10件</h3>
              <p>只为你选好货</p>
              <img src="@/assets/images/index_images/shop_2.jpg" alt />
            </div>
            <div class="r">
              <h3>拼啊</h3>
              <p>超级好价拼团</p>
              <img src="@/assets/images/index_images/shop_3.jpg" alt />
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="banner-m">
      <a href="#">
        <img src="@/assets/images/index_images/bar.jpg" alt />
      </a>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.sale {
  background-color: #ffffff;
  height: 3.8rem;
  margin-top: 0.3rem;
  display: flex;
  justify-content: space-between;
}
.sale .left {
  position: relative;
  width: 3.77rem;
  height: 3.8rem;
  padding-left: 0.16rem;
  box-sizing: border-box;
}
.sale .left h3 {
  font-size: 0.3rem;
  color: #ff064f;
  letter-spacing: 0.04rem;
  margin-top: 0.16rem;
}
.sale .left h3 img {
  width: 0.33rem;
  height: 0.31rem;
  margin-right: 0.1rem;
  vertical-align: -0.05rem;
}
.sale .left .des {
  font-size: 0.22rem;
  color: #999;
  margin: 0.07rem 0;
}
.sale .left .time {
  font-size: 0.26rem;
}
.sale .left .time span {
  background-color: #333333;
  color: #ffffff;
  display: inline-block;
  line-height: 0.42rem;
  padding: 0 0.09rem;
  border-radius: 0.05rem;
  margin: 0 0.04rem;
}
.sale .left .time i {
  color: #333333;
  display: inline-block;
  line-height: 0.41rem;
  padding: 0 0.25rem 0 0.21rem;
  background: url(../../../assets/images/index_images/bg.jpg) no-repeat;
  background-size: 100% 100%;
}
.sale .left .pic {
  display: block;
  width: 2.36rem;
  height: 2rem;
  margin: 0.18rem auto 0;
}
.sale .left .price {
  position: absolute;
  right: 0.3rem;
  bottom: 0.3rem;
  width: 0.88rem;
  height: 0.88rem;
  border-radius: 50%;
  background-color: #ff064f;
  color: #ffffff;
  font-size: 0.16rem;
  line-height: 0.88rem;
  text-align: center;
}
.sale .left .price span {
  font-size: 0.24rem;
}
.sale .right {
  width: 3.72rem;
  height: 3.8rem;
  border-left: 1px solid #f1f1f1;
}
.sale .right h3 {
  font-size: 0.3rem;
  color: #ff064f;
  letter-spacing: 0.04rem;
  margin-top: 0.16rem;
  margin-left: 0.2rem;
}
.sale .right h3 i {
  font-size: 0.2rem;
  padding: 0.03rem 0.08rem;
  margin-left: 0.03rem;
  background-color: #ff064f;
  color: #ffffff;
  border-radius: 0.05rem;
}
.sale .right p {
  font-size: 0.22rem;
  color: #999;
  margin: 0.07rem 0 0 0.2rem;
}
@media screen and (width: 320px) {
  .sale .right p {
    width: 1.85rem;
    font-size: 0.22rem;
    color: #999;
    margin: 0.07rem 0 0 0.2rem;
    transform: scale(0.6);
    transform-origin: left center;
  }
}
.sale .right .top {
  width: 3.52rem;
  height: 1.89rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f1f1f1;
}
.sale .right .top span {
  display: block;
  width: 0.93rem;
  height: 0.32rem;
  background: url(../../../assets/images/index_images/brand.jpg) no-repeat left top;
  margin-top: 0.15rem;
  margin-left: 0.2rem;
}
.sale .right .top img {
  width: 1.28rem;
  height: 1.78rem;
  margin-top: 0.04rem;
  display: block;
}
.sale .right .bottom {
  display: flex;
  justify-content: space-around;
}
.sale .right .bottom .l {
  border-right: 1px solid #f1f1f1;
  box-sizing: border-box;
  width: 1.85rem;
}
.sale .right .bottom .r {
  width: 1.85rem;
}
.sale .right .bottom img {
  width: 0.76rem;
  height: 1.09rem;
  display: block;
  margin: 0 auto;
}
.banner-m {
  width: 7.5rem;
  margin: 0.3rem auto;
}
.banner-m img {
  width: 7.5rem;
  height: 1.91rem;
}
</style>