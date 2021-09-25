<template>
  <div>
    <router-view></router-view>
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>
//引入页面底部路由组件 因为这个页面只有主页用所以局部引用
import FooterGuide from './components/FooterGuide/FooterGuide'
  export default {
  components: { FooterGuide },
    
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixins.styl"
  h1 
    width 375px
    background red
  

</style>
