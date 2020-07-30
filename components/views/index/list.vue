<template>
  <div class="list">
    <div class="wrap">
      <div class="top">
        <i
          v-for="(item,idx) in firstList"
          @click="select(idx)"
          :class="[idx==num?'changeColor':'']"
          :key="item.id"
        >{{item.catename}}</i>
      </div>
        <div class="main" v-for="(list) in secondList" :key="list.id" @click.stop="goDetail(list.id)">
          <img :src="$imgUrl + list.img" alt />
          <ul>
            <li>{{list.catename}}</li>
            <!-- <li><i>￥</i>{{list.price}}</li> -->
            <!-- <li>已售{{list.sell}}件</li> -->
            <li>
              <a href="#">立即抢购</a>
            </li>
          </ul>
        </div>
    </div>
  </div>
</template>
<script>
import { getCatetree } from "@/util/axios";
export default {
  data() {
    return {
      num: 0,
      firstList: [],
      secondList: [],
    };
  },
  mounted() {
    getCatetree().then((res) => {
      console.log(res, "1111");
      if (res.data.code == 200) {
        this.firstList = res.data.list;
        this.secondList = this.firstList[this.num].children;
      }
    });
  },
  methods: {
    select(i) {
      this.num = i;
      this.secondList = this.firstList[this.num].children;
    },
    goDetail(id) {
      this.$router.push({
        path: "/detail",
        query: {
          id,
        },
      });
    }
  },
};
</script>
<style scoped>
.wrap {
  width: 7.1rem;
  margin: 0 auto;
}
.list {
  background-color: #ffffff;
  margin-bottom: 2rem;
}
.list .wrap .top {
  font-size: 0.3rem;
  line-height: 1.1rem;
}
.list .wrap .top i {
  line-height: 0.7rem;
  display: inline-block;
  box-sizing: border-box;
  border: 1px solid #d0d0d0;
  border-left: 0;
  padding: 0 0.27rem;
}
.list .wrap .top i:first-child {
  border-left: 1px solid #d0d0d0;
}
.changeColor {
  border: 0;
  background-color: #f26b11;
  color: #ffffff;
  border: 1px solid #f26b11;
}
.list .wrap .main {
  height: 3rem;
  display: flex;
  justify-content: space-between;
  padding: 0.65rem 0 0rem 0.5rem;
  box-shadow: 0 0 0.1rem 0rem #f2f2f2;
  margin: 0.17rem 0;
}
.list .wrap .main img {
  width: 2.16rem;
  height: 2.2rem;
}
.list .wrap .main ul {
  width: 4.1rem;
  font-size: 0.24rem;
}
.list .wrap .main ul li {
  margin: 0.15rem 0;
}
.list .wrap .main ul li:first-child {
  font-size: 0.3rem;
  margin-bottom: 0.15rem;
}
.list .wrap .main ul li:nth-child(2) {
  color: #d03f46;
}
.list .wrap .main ul li:nth-child(2) i {
  font-size: 0.18rem;
}
.list .wrap .main ul li:nth-child(3) {
  color: #959595;
}
.list .wrap .main ul li:last-child {
  margin-top: 0.3rem;
}
.list .wrap .main ul li:last-child a {
  line-height: 0.5rem;
  color: #ffffff;
  padding: 0.1rem 0.35rem;
  background-color: #f26b11;
  border-radius: 0.1rem;
}
</style>