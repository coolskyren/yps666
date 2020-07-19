<template>
    <div>
      <router-view></router-view>
        <div class="foot" >
            <p><router-link active-class='select' to="/home"><img src="../../assets/images/public/icon_8.jpg" alt=""><i>首页</i></router-link></p>
            <p><router-link active-class='select' to="/shopcar"><img src="../../assets/images/public/icon_7.jpg" alt=""><i>购物车</i></router-link></p>
            <p><router-link active-class='select' to="/mine"><img src="../../assets/images/public/icon_5.jpg" alt=""><i>我的</i></router-link></p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.foot {
  width: 7.5rem;
  position: fixed;
  left: 50%;
  bottom: 0;
  margin-left: -3.75rem;
  height: 1.2rem;
  border-top: 1px solid #ebebeb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 0 0.55rem;
  box-sizing: border-box;
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
.select{
  color: #f26b11;
}
</style>