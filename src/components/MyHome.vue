<template>
  <div class="home-container">
    <Header></Header>
    <div class="home-main-box">
      <Aside></Aside>
      <div class="home-main-body">右侧主体内容----用户管理</div>
      </div>  
    
  </div>
</template>

<script>
import Header from './subcomponents/MyHeader.vue'
import Aside from './subcomponents/MyAside.vue'

export default {
  name: 'MyHome',
  components: {
    Header,
    Aside
  }
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  .home-main-box {
    height: 100%;
    display: flex;
    .home-main-body {
      padding: 15px;
      flex: 1;
          }
  }
}
</style>
