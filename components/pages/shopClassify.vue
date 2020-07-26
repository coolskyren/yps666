<template>
  <div class="container">
    <logoHeader></logoHeader>
    <div class="list">
      <div class="l">
        <ul>
          <li v-for="(item,idx) in classIfy" :key="item.id">
            <a href="#" @click="select(idx)" :class="[idx==num?'select1':'']">{{item.name}}</a>
          </li>
        </ul>
      </div>
      <div class="r">
        <div v-for="namelist in classIfy[num].classList" :key="namelist.id">
            <h3>
          <i>{{namelist.name}}</i>
          <a href="#">更多></a>
        </h3> 
        <div class="inner">
          <a href="#" v-for="(ify) in namelist.list" :key="ify.id">
            <img :src="ify.img" alt />
            <p>{{ify.name}}</p>
          </a>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import logoHeader from '@/common/head'
export default {
  data() {
    return {
        num:0,
      classIfy: [
        {
          id: 1,
          name: "施华蔻",
          classList: [
            {
              id: 1,
              name: "洗发类",
              list: [
                {
                  id: 1,
                  name: "护亮泽洗发水",
                  img: require("@/assets/images/classify/产品分类1 (1).jpg")
                },
                {
                  id: 2,
                  name: "滋养洗发水",
                  img: require("@/assets/images/classify/产品分类1 (2).jpg")
                },
                {
                  id: 3,
                  name: "柔顺洗发水",
                  img: require("@/assets/images/classify/产品分类1 (3).jpg")
                },
                {
                  id: 4,
                  name: "去屑洗发水",
                  img: require("@/assets/images/classify/产品分类1 (4).jpg")
                },
                {
                  id: 5,
                  name: "柔顺洗发水",
                  img: require("@/assets/images/classify/产品分类1 (5).jpg")
                },
                {
                  id: 6,
                  name: "幻彩洗发水",
                  img: require("@/assets/images/classify/产品分类1 (6).jpg")
                }
              ]
            },
            {
              id: 2,
              name: "染色类",
              list: [
                {
                  id: 1,
                  name: "施华蔻染色",
                  img: require("@/assets/images/classify/产品分类1 (7).jpg")
                },
                {
                  id: 2,
                  name: "施华蔻双养乳",
                  img: require("@/assets/images/classify/产品分类1 (8).jpg")
                },
                {
                  id: 3,
                  name: "施华蔻染发膏",
                  img: require("@/assets/images/classify/产品分类1 (9).jpg")
                },
                {
                  id: 4,
                  name: "滋养洗发水",
                  img: require("@/assets/images/classify/产品分类1 (7).jpg")
                },
                {
                  id: 5,
                  name: "施华蔻染发膏",
                  img: require("@/assets/images/classify/产品分类1 (8).jpg")
                },
                {
                  id: 6,
                  name: "施华蔻染发膏",
                  img: require("@/assets/images/classify/产品分类1 (9).jpg")
                }
              ]
            }
          ]
        },
        {
          id: 2,
          name: "沙宣",
          classList: [
            {
              id: 1,
              name: "洗发类",
              list: [
                {
                  id: 1,
                  name: "护亮泽洗发水",
                  img: require("@/assets/images/classify/产品分类1 (4).jpg")
                },
                {
                  id: 2,
                  name: "护亮泽洗发水",
                  img: require("@/assets/images/classify/产品分类1 (3).jpg")
                },
                {
                  id: 3,
                  name: "护亮泽洗发水",
                  img: require("@/assets/images/classify/产品分类1 (7).jpg")
                },
                {
                  id: 4,
                  name: "护亮泽洗发水",
                  img: require("@/assets/images/classify/产品分类1 (3).jpg")
                },
                {
                  id: 5,
                  name: "护亮泽洗发水",
                  img: require("@/assets/images/classify/产品分类1 (5).jpg")
                },
                {
                  id: 6,
                  name: "护亮泽洗发水",
                  img: require("@/assets/images/classify/产品分类1 (6).jpg")
                }
              ]
            },
            {
              id: 2,
              name: "染色类",
              list: [
                {
                  id: 1,
                  name: "施华蔻染色",
                  img: require("@/assets/images/classify/产品分类1 (7).jpg")
                },
                {
                  id: 2,
                  name: "施华蔻染色",
                  img: require("@/assets/images/classify/产品分类1 (8).jpg")
                },
                {
                  id: 3,
                  name: "施华蔻染色",
                  img: require("@/assets/images/classify/产品分类1 (9).jpg")
                },
                {
                  id: 4,
                  name: "施华蔻染色",
                  img: require("@/assets/images/classify/产品分类1 (7).jpg")
                },
                {
                  id: 5,
                  name: "施华蔻染色",
                  img: require("@/assets/images/classify/产品分类1 (8).jpg")
                },
                {
                  id: 6,
                  name: "施华蔻染色",
                  img: require("@/assets/images/classify/产品分类1 (9).jpg")
                }
              ]
            }
          ]
        },
        {
          id: 3,
          name: "欧莱雅"
        },
        {
          id: 4,
          name: "潘婷"
        },
        {
          id: 5,
          name: "资生堂"
        },
        {
          id: 6,
          name: "阿道夫"
        },
        {
          id: 7,
          name: "卡诗"
        },
        {
          id: 8,
          name: "海飞丝"
        },
        {
          id: 9,
          name: "资生堂"
        },
        {
          id: 10,
          name: ""
        },
        {
          id: 11,
          name: ""
        },
        {
          id: 12,
          name: ""
        },
        {
          id: 13,
          name: ""
        }
      ]
    };
  },
  methods: {
      select(i){
          this.num = i
      },
      goBack(){
        this.$router.go(-1);
      }
    
  },
  components:{
    logoHeader
  }
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