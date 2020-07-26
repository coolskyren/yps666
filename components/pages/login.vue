<template>
  <div>
      <div class="head">
        <p>
          <a href="#">
            <img src="@/assets/images/public/arrow.jpg" alt />
          </a>
        </p>
        <h2>登录</h2>
        <router-link to ='/index'>
        <p style="color:white">
          注册
        </p></router-link>
      </div>
    <van-form @submit="onSubmit" class="login" >
      <van-field
        v-model="userInfo.phone"
        name="手机号"
        label="手机号"
        placeholder="手机号"
        :rules="[{ pattern, required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="userInfo.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import {getUserlogin} from '@/util/axios'

export default {
  data() {
    return {
          userInfo:{
            phone:'',
            password:''
        },
          pattern:/^1[3456789]\d{9}$/,
        //   pattern:/^[a-zA-Z]\w{5,17}$/
        };
      },
      methods: {
        onSubmit(values) {
        if(values){
            getUserlogin(this.userInfo)
            .then(res =>{
             if (res.data.code == 200) {
              sessionStorage.setItem('userInfo',JSON.stringify(res.data.list))
              this.$router.push("/home");
            } else {
            }
        })
        }else{
            return false
        }
    }
      }
    };

</script>

<style lang="" scoped>
.login{
    margin-top: 4rem;
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
</style>
