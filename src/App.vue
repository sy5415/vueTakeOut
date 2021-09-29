<template>
  <div>
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.isShowFooter"></FooterGuide>
    
  </div>
</template>

<script>
//引入页面底部路由组件 因为这个页面只有主页用所以局部引用
import FooterGuide from './components/FooterGuide/FooterGuide'

  export default {
  components: { FooterGuide },
  async mounted(){
    //分发异步action,蒋数据从后台请求到vuex中 这是获取地址的方法
    this.$store.dispatch('getAddress')
    console.log(this.$store._mutations.receive_address);
  }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixins.styl"
  h1 
    width 375px
    background red
  

</style>
