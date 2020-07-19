<template>
  <div class="container">
    <div class="wrap">
      <div class="head">
        <p>
          <a href="#">
            <img src="@/assets/images/public/arrow.jpg" alt />
          </a>
        </p>
        <h2>我的订单</h2>
        <p>
          <i></i>
          <i></i>
          <i></i>
        </p>
      </div>
      <div class="head2">
        <div class="pic">
          <img src="@/assets/images/mine_images/head.jpg" alt />
          <p>
            <i>王某某</i>
            <br />
            <b>V1</b>
          </p>
        </div>
        <p>
          <a href="#">每日签到</a>
        </p>
      </div>
      <div class="head3">
        <a href="#">
          <p>
            <i></i>
            <b>全部订单</b>
          </p>
        </a>
        <a href="#">
          <p>
            <i></i>
            <b>代付款</b>
          </p>
        </a>
        <a href="#">
          <p>
            <i></i>
            <b>待收货</b>
          </p>
        </a>
      </div>
      <div class="list">
        <ul>
          <li>
            <a href="#">
              <p>
                <i></i>
                <b>地址管理</b>
              </p>
              <span></span>
            </a>
          </li>
          <li>
            <a href="#">
              <p>
                <i></i>
                <b>我的钱包</b>
              </p>
              <p>
                <b>200余额</b>
                <span></span>
              </p>
            </a>
          </li>
          <li>
            <a href="#">
              <p>
                <i></i>
                <b>我的优惠券</b>
              </p>
              <span></span>
            </a>
          </li>
          <li>
            <a href="#">
              <p>
                <i></i>
                <b>我的二维码</b>
              </p>
              <span></span>
            </a>
          </li>
          <li>
            <a href="#">
              <p>
                <i></i>
                <b>我的小伙伴</b>
              </p>
              <span></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.container {
  width: 7.5rem;
  margin: 0 auto;
  background-color: white;
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
.head2 {
  background-color: #f26b11;
  display: flex;
  height: 2rem;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
}
.head2 .pic {
  display: flex;
  align-items: center;
}
.head2 .pic img {
  width: 1.5rem;
  height: 1.5rem;
}
.head2 .pic p {
  line-height: 0.4rem;
  margin-left: 0.3rem;
}
.head2 .pic p i {
  font-size: 0.36rem;
  color: white;
}
.head2 .pic p b {
  font-style: italic;
  font-size: 0.24rem;
}
.head2 > p {
  width: 1.6rem;
  height: 0.75rem;
  background-color: white;
  border-radius: 0.1rem;
  text-align: center;
  font-size: 0.26rem;
  line-height: 0.75rem;
}
.head2 > p a {
  color: #f26b11;
  display: block;
}
.head3 {
  height: 1.45rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.65rem;
  align-items: center;
  background-color: #fff;
}
.head3 p {
  text-align: center;
  height: 0.8rem;
}
.head3 p i {
  display: block;
  width: 0.38rem;
  height: 0.38rem;
  background: url(../../assets/images/mine_images/icon_1.jpg) no-repeat;
  background-size: contain;
  margin: 0 auto;
}
.head3 p b {
  line-height: 0.4rem;
  font-size: 0.24rem;
}
.head3 a:nth-child(2) i {
  background: url(../../assets/images/mine_images/icon_2.jpg) no-repeat;
  background-size: contain;
}
.head3 a:nth-child(3) i {
  background: url(../../assets/images/mine_images/icon_3.jpg) no-repeat;
  background-size: contain;
}
.list {
  margin-top: 0.25rem;
  background-color: #fff;
}
.list ul li {
  height: 1.1rem;
  line-height: 1.1rem;
  font-size: 0.26rem;
  border-bottom: 1px solid gray;
}
.list ul li a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 6.8rem;
}
.list ul li p {
  display: flex;
  align-items: center;
}
.list ul li p i {
  display: inline-block;
  width: 0.46rem;
  height: 0.46rem;
  background: url(../../assets/images/mine_images/icon_4.jpg) no-repeat;
  background-size: contain;
}
.list ul li p b {
  margin-left: 0.3rem;
}
.list ul li p:nth-child(2) b {
  color: #f26b11;
  margin-right: 0.2rem;
}
.list ul li span {
  display: inline-block;
  width: 0.26rem;
  height: 0.26rem;
  background: url(../../assets/images/public/right.jpg) no-repeat;
  background-size: contain;
}
.list ul li:nth-child(2) a p i {
  background: url(../../assets/images/mine_images/icon_5.jpg) no-repeat;
  background-size: contain;
}
.list ul li:nth-child(3) a p i {
  background: url(../../assets/images/mine_images/icon_6.jpg) no-repeat;
  background-size: contain;
}
.list ul li:nth-child(4) a p i {
  background: url(../../assets/images/mine_images/icon_7.jpg) no-repeat;
  background-size: contain;
}
.list ul li:nth-child(5) a p i {
  background: url(../../assets/images/mine_images/icon_8.jpg) no-repeat;
  background-size: contain;
}
</style>