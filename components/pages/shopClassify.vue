<template>
  <div class="container">
    <logoHeader></logoHeader>
    <div class="list">
      <div class="l">
        <ul>
          <li v-for="(item,idx) in firstList" :key="item.id">
            <a href="#" @click="onChange(idx)" :class="[idx==num?'select1':'']">{{item.catename}}</a>
          </li>
        </ul>
      </div>
      <div class="r">
        <div v-for="namelist in secondList" :key="namelist.id">
          <h3>
            <i>{{namelist.catename}}</i>
            <a href="#">更多></a>
          </h3>
        </div>
        <div class="inner">
            <a href="#" v-for="goods in goodsList" :key="goods.id" @click.stop="goDetail(goods.id)">
              <img :src="$imgUrl +goods.img" alt />
              <p>{{goods.goodsname}}</p>
            </a>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import logoHeader from "@/common/head";
import { getCatetree,getIndexgoods } from "@/util/axios";
export default {
  data() {
    return {
      num: 0,
      firstList: [],
      secondList: [],
      goodsList:[]
    };
  },
  mounted() {
    // this.getCateTree();
    this.getGoods();
    getCatetree().then((res) => {
        console.log(res, "1111");
        if (res.data.code == 200) {
          this.firstList = res.data.list;
          this.secondList = this.firstList[this.num].children;
          console.log(this.firstList,'112')
        }
      });
    console.log(this.firstList)
  },
  methods: {
    /* getCateTree() {
      getCatetree().then((res) => {
        console.log(res, "1111");
        if (res.data.code == 200) {
          this.firstList = res.data.list;
          this.secondList = this.firstList[this.num].children;
        }
      });
    }, */
    getGoods() {
      getIndexgoods(
        ).then((res) => {
        console.log(res,'222');
        if (res.data.code == 200) {
          this.goodsList = res.data.list;
          console.log(this.goodsList,'333')
        }
      }); 
    },
    onChange(i) {
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
    },
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

.list {
  display: inline-flex;
}
.list .l {
  width: 1.65rem;
  box-sizing: border-box;
  border-right: 0.01rem solid #f1f1f1;
  padding-top: 0.4rem;
}
.list .l ul {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.list .l ul li {
  width: 1.64rem;
  font-size: 0.3rem;
  padding: 0.4rem 0 0.4rem 0;
  box-sizing: border-box;
}
.list .l ul li a {
  padding-left: 0.4rem;
}
.list .l ul li:first-child {
  padding-top: 0;
}
.select1 {
  line-height: 0.5rem;
  border-left: 0.1rem solid #f26b11;
  padding-left: 0.3rem;
  color: #f26b11;
}
.list .r {
  width: 5.85rem;
  height: 11rem;
  padding-top: 0.4rem;
  overflow: scroll;
}
.list .r h3 {
  display: flex;
  justify-content: space-between;
  padding: 0 0.55rem;
  font-size: 0.3rem;
  line-height: 0.5rem;
}
.list .r h3 a {
  color: #c1c1c1;
}
.list .r .inner {
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 0.35rem;
  margin-bottom: 0.55rem;
}
.list .r .inner img {
  width: 1.54rem;
  height: 1.52rem;
  display: inline-block;
  margin-top: 0.1rem;
}
.list .r .inner p {
  font-size: 0.26rem;
  color: #b4b4b4;
  margin: 0.25rem 0;
}
</style>