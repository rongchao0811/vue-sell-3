<template>
  <div>
   <div class="header">
     <v-header></v-header>
     <div class="tap">
       <div class="tap-item">
         <router-link to="/goods">商品</router-link>
       </div>
       <div class="tap-item">
         <router-link to="/ratings">评论</router-link>
       </div>
       <div class="tap-item">
        <router-link to="/seller">商家</router-link>
       </div>
     </div>
     <router-view></router-view>  
   </div>
  </div>
</template>

<script>
    import header from './components/header/header.vue';

    export default{
      components: {
        'v-header': header
      }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .tap
      display: flex
      width: 100%
      heigth: 40px
      .tap-item
        flex: 1
        text-align: center
</style>
