<template>
 <div>
<div class="head">
      <p>
        <a href="#" @click="goBack">
          <img src="@/assets/images/public/arrow.jpg" alt />
        </a>
      </p>
      <h2>{{$route.meta.name}}
      </h2>
      <p>
        <i></i>
        <i></i>
        <i></i>
      </p>
    </div>
 </div>
</template>

<script>
export default {
 data() {
 return {

 };
 },
 methods: {
      goBack(){
        this.$router.go(-1);
      }
    
  },
};
</script>

<style lang="" scoped>
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
</style>
