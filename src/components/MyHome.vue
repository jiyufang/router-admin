<template>
  <div class="login-container">
    <div class="login-box">
      <!-- 头像区域 -->
      <div class="text-center avatar-box">
        <img src="../assets/logo.png" alt="" class="img-thumbnail avatar" />
      </div>

      <!-- 表单区域 -->
      <div class="form-login p-4">
        <!-- 登录名称 -->
        <div class="form-group form-inline">
          <label for="username">登录名称</label>
          <input type="text" id="username" class="form-control ml-2" placeholder="请输入登录名称" autocomplete="off" />
        </div>
        <!-- 登陆密码 -->
        <div class="form-group form-inline">
          <label for="password">登录密码</label>
          <input type="password" id="password" class="form-control ml-2" placeholder="请输入登录密码" autocomplete="off" />
        </div>
        <!-- 登录和重置密码 -->
        <div class="form-group form-inline d-flex justify-content-end">
          <button type="button" class="btn btn-secondary mr-2">重置</button>
          <button type="button" class="btn btn-primary">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.login-container {
  background-color: #35495e;
  height: 100%;
  .login-box {
    width: 400px;
    height: 250px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
  }
}
</style>
