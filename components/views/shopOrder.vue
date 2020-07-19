<template>
    <div class="container">
        <div class="wrap">
            <div class="head">
                <p><a href="#"><img src="@/assets/images/public/arrow.jpg" alt=""></a></p>
                <h2>确认订单</h2>
                <p><i></i><i></i><i></i></p>
            </div>
            <div class="ad">
                <div class="inner">
                    <p><i>收货人：YouSu</i><b>10000000000</b></p>
                    <p class="flex"><b>收货地址:</b><i>北京市海淀区隐泉路清林苑6号楼中公优就业总部3层</i></p>
                </div>
                <span></span>
            </div>
            <div class="main1">
                <ul>
                    <li><p><img src="@/assets/images/order/shop.jpg" alt=""><b>雅诗兰黛护肤霜</b><br><span>规格：50g</span></p>
                    <p><i>￥</i><b>120.00</b></p>
                    </li>
                    <li><i>购买数量：</i><p><b>-</b><input type="text" placeholder="1"><span>+</span></p></li>
                    <li><i>配送方式</i><b>XX快递</b></li>
                </ul>
            </div>
            <div class="main2">
                <div class="top">
                    <p><i>优惠券</i><b>无可用</b></p>
                </div>
                <div class="bottom">
                    <i>使用积分</i><p><input type="text" placeholder="输入积分"><b>使用</b>可用<span>50</span>积分</p>
                </div>
            </div>
            <div class="main3">
                <ul>
                    <li><i>商品金额</i><b>￥68.00</b></li>
                    <li><i>运费</i><b>+￥00.00</b></li>
                    <li><i>优惠券</i><b>-￥00.00</b></li>
                    <li><i>会员优惠</i><b>-￥00.00</b></li>
                    <li><i>积分抵扣</i><b>-￥00.00</b></li>
                </ul>
            </div>
            <div class="main4">
                <p><b>￥68.00</b><i>实付金额:</i></p>
                <input type="submit" value="提交订单">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.container {
  width: 7.5rem;
  margin: 0 auto;
  background-color: #f1f1f1;
}
.container .wrap {
  background-color: #f1f1f1;
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
.ad {
  height: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.25rem;
  background-color: white;
}
.ad .inner {
  width: 6.5rem;
}
.ad .inner p {
  display: flex;
  justify-content: space-between;
  font-size: 0.24rem;
  margin: 0.2rem 0rem;
}
.ad .inner p i {
  color: black;
}
.ad .inner .flex {
  display: flex;
  justify-content: flex-start;
}
.ad .inner .flex b {
  width: 1.3rem;
}
@media screen and (width: 320px) {
  .ad .inner .flex b {
    width: 2rem;
  }
}
.ad span {
  width: 0.26rem;
  height: 0.26rem;
  display: block;
  background: url(../../assets/images/public/right.jpg) no-repeat;
  background-size: contain;
  margin-left: 0.3rem;
}
.main1 {
  background-color: white;
  padding: 0 0.25rem;
  margin-top: 0.3rem;
}
.main1 ul {
  font-size: 0.24rem;
}
.main1 ul li {
  display: flex;
  justify-content: space-between;
  height: 1.5rem;
  align-items: center;
}
.main1 ul li:nth-of-type(1) p {
  height: 1.15rem;
  display: flex;
  position: relative;
}
.main1 ul li:nth-of-type(1) p img {
  width: 1.15rem;
  height: 1.15rem;
  display: block;
}
.main1 ul li:nth-of-type(1) p b {
  display: block;
  margin-left: 0.3rem;
  margin-top: 0.2rem;
}
.main1 ul li:nth-of-type(1) p span {
  position: absolute;
  top: 0.65rem;
  left: 1.45rem;
  color: #bdbdbd;
}
.main1 ul li:nth-of-type(1) p:nth-of-type(2) {
  height: 0.4rem;
}
.main1 ul li:nth-of-type(1) p:nth-of-type(2) i {
  font-size: 0.12rem;
  color: #e43941;
}
.main1 ul li:nth-of-type(1) p:nth-of-type(2) b {
  display: inline;
  color: #e43941;
  font-size: 0.3rem;
  margin: 0;
  padding: 0;
}
.main1 ul li:nth-of-type(2) {
  height: 1.2rem;
  padding-top: 0.3rem;
  align-items: flex-start;
  border-bottom: 1px solid #bdbdbd;
}
.main1 ul li:nth-of-type(2) i {
  margin-top: 0.2rem;
}
.main1 ul li:nth-of-type(2) p {
  display: flex;
}
.main1 ul li:nth-of-type(2) p b {
  width: 0.75rem;
  display: block;
  line-height: 0.65rem;
  border: 1px solid black;
  border-radius: 0.05rem;
  margin-left: 0.1rem;
  text-align: center;
}
.main1 ul li:nth-of-type(2) p input {
  width: 1.2rem;
  border: 1px solid black;
  border-radius: 0.05rem;
  margin-left: 0.1rem;
  text-align: center;
}
.main1 ul li:nth-of-type(2) p span {
  width: 0.75rem;
  display: block;
  line-height: 0.65rem;
  border: 1px solid black;
  border-radius: 0.05rem;
  margin-left: 0.1rem;
  text-align: center;
}
.main2 {
  margin-top: 0.3rem;
  background-color: white;
}
.main2 .top {
  border-bottom: 1px solid #bdbdbd;
  height: 1rem;
}
.main2 .top p {
  display: flex;
  justify-content: space-between;
  line-height: 1rem;
  padding: 0 0.3rem;
}
.main2 .bottom {
  display: flex;
  line-height: 1rem;
  justify-content: space-between;
  padding: 0 0.3rem;
}
.main2 .bottom p {
  display: flex;
  text-align: center;
  align-items: center;
}
.main2 .bottom p input {
  width: 1.5rem;
  height: 0.75rem;
  border: 1px solid #bdbdbd;
  border-radius: 0.05rem;
}
.main2 .bottom p input::placeholder {
  text-align: center;
  color: #bdbdbd;
}
.main2 .bottom p b {
  width: 0.75rem;
  height: 0.75rem;
  background-color: #f26b11;
  color: white;
  border-radius: 0.05rem;
  line-height: 0.75rem;
  margin: 0 0.1rem;
}
.main2 .bottom p span {
  color: #e43941;
}
.main3 {
  margin-top: 0.3rem;
  padding: 0 0.3rem;
  background-color: white;
}
.main3 ul {
  padding: 0.3rem 0rem;
  border-bottom: 1px solid #bdbdbd;
}
.main3 ul li {
  line-height: 0.4rem;
  display: flex;
  font-size: 0.24rem;
  justify-content: space-between;
}
.main3 ul li b {
  color: #e43941;
}
.main4 {
  padding: 0 0.3rem;
  background-color: white;
}
.main4 p {
  line-height: 1rem;
  display: flex;
  flex-direction: row-reverse;
  font-size: 0.36rem;
}
.main4 p b {
  color: #e43941;
}
.main4 input {
  display: block;
  width: 3.55rem;
  height: 1.15rem;
  background-color: #f26b11;
  color: white;
  font-size: 0.32rem;
  margin: 0 auto;
  border-radius: 0.1rem;
  margin-bottom: 10rem;
}
</style>