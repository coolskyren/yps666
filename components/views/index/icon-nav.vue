<template>
    <div class="icon-nav">
            <div class="item">
                <router-link to=''>
                    <img src="@/assets/images/index_images/icon_1.jpg" alt="">
                    <p>限时抢购</p>
                </router-link>
            </div>
            <div class="item">
                <router-link to=''>
                    <img src="@/assets/images/index_images/icon_2.jpg" alt="">
                    <p>积分商城</p>
                </router-link>
            </div>
            <div class="item">
                <router-link to=''>
                    <img src="@/assets/images/index_images/icon_3.jpg" alt="">
                    <p>联系我们</p>
                </router-link>
            </div>
            <div class="item">
                <router-link to='/classify'>
                    <img src="@/assets/images/index_images/icon_4.jpg" alt="">
                    <p>商品分类</p>
                </router-link>
            </div>
        </div>
</template>
<script>
export default {
   
}
</script>
<style scoped>
.icon-nav {
  background-color: #ffffff;
  height: 1.8rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.icon-nav .item {
  text-align: center;
}
.icon-nav .item img {
  width: 0.64rem;
  height: 0.62rem;
  margin-bottom: 0.28rem;
}
.icon-nav .item a {
  font-size: 0.24rem;
  color: #595959;
}
</style>