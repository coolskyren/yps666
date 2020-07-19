<template>
    <div class="header">
            <div class="wrap">
                <h1>
                    <a href="#"><img src="@/assets/images/index_images/logo.jpg" alt=""></a>
                </h1>
                <router-link to="/search">
                  <input type="text" placeholder="寻找商品">
                </router-link>
                <div class="points">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
</template>
<script>

export default {
    
}
</script>
<style scoped>
.wrap {
  width: 7.1rem;
  margin: 0 auto;
}
.header {
  height: 0.88rem;
  background-color: #ffffff;
}
.header .wrap {
  height: 0.88rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header h1 img {
  width: 1.47rem;
  height: 0.33rem;
}
.header input {
  width: 3rem;
  height: 0.4rem;
  background-color: #eeeeee;
  border-radius: 0.04rem;
  text-align: center;
  font-size: 0.18rem;
}
.header .points span {
  width: 0.13rem;
  height: 0.13rem;
  float: left;
  margin-left: 0.1rem;
  background-color: black;
  border-radius: 50%;
}
</style>