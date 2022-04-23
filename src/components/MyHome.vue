<template>
  <div class="home-container">
    <Header></Header>
    <div class="home-main-box">
      <Aside></Aside>
      <div class="home-main-body">
       <router-view></router-view>
      </div>
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
  width: 1400px;
  height: 100%;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  .home-main-box {
    height: 100%;
    display: flex;
    border-left: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    .home-main-body {
      position: relative;
      padding: 15px;
      flex: 1;
      overflow: hidden;
      
    }
  }
}
</style>
