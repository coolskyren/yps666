<template>
    <div class="banner">
            <a href="#" v-for = 'item in bannerList' :key = 'item.id'><img :src="item.banner" alt=""></a>
            
            
    </div>
</template>
<script>
export default {
    data() {
        return {
            bannerList:[
                {
                    id:1,
                    banner:require('@/assets/images/index_images/banner.jpg')
                },
                {
                    id:2,
                    banner:require('@/assets/images/index_images/banner.jpg')
                },
            ]
        }
    },
}
</script>

<style scoped>
.banner {
  height: 2.91rem;
  position: relative;
}
.banner a {
  position: absolute;
  top: 0;
  left: 0;
}
.banner img {
  width: 7.5rem;
  height: 2.91rem;
}
</style>