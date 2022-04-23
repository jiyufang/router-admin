<template>
  <div class="header-container">
    <h3>后台管理系统</h3>
    <button class="backLogin" @click="logout">退出登录</button>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    logout() {
      // 清除token
      localStorage.removeItem('token')
      // 跳转到登录页面
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.header-container {
  height: 50px;
  width: 100%;
  border: 1px solid #ccc;
  position: relative;
  h3 {
    position: absolute;
    top: 5px;
    font-weight: 400;
    margin-left: 200px;
  }
  .backLogin {
    position: absolute;
    top: 10px;
    right: 20px;
    width: 100px;
    height: 30px;
    background-color: #fff;
    text-decoration: none;
    font-size: 14px;
    color: black;
    border-radius: 5px;
    border: none;
  }
  .backLogin:hover {
    background-color: #f5f5f5;
  }
}
</style>
