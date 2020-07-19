<template>
  <div id="app" >
    <div class="container">
      <my-header></my-header>
      <my-nav></my-nav>
      <my-banner></my-banner>
      <my-icon></my-icon>
      <my-sale></my-sale>
      <my-list></my-list>
      </div>
  </div>
</template>

<script>
import myHeader from './header'
import myNav from './nav'
import myBanner from './banner'
import myIcon from './icon-nav'
import mySale from './sale'
import myList from './list'
export default {
  components:{
    myHeader,
    myNav,
    myBanner,
    myIcon,
    mySale,
    myList 
  }
}
</script>

<style>
.container {
  width: 7.5rem;
  margin: 0 auto;
  background-color: #f1f1f1;
}

body {
  background-color: #f1f1f1;
}
</style>
