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
          <input type="text" id="username" class="form-control ml-2" placeholder="请输入登录名称" autocomplete="off" v-model.trim="username" />
        </div>
        <!-- 登陆密码 -->
        <div class="form-group form-inline">
          <label for="password">登录密码</label>
          <input type="password" id="password" class="form-control ml-2" placeholder="请输入登录密码" autocomplete="off" v-model.trim="password" />
        </div>
        <!-- 登录和重置密码 -->
        <div class="form-group form-inline d-flex justify-content-end">
          <button type="button" class="btn btn-secondary mr-2" @click="reset">重置</button>
          <button type="button" class="btn btn-primary" @click="login">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyLogin',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    reset() {
      this.username = ''
      this.password = ''
    },
    login() {
      if (this.username === 'admin' && this.password === '888888') {
        //登录成功
        // 存储 token
        localStorage.setItem('token', 'Bearer xxxx')
        // 跳转到后台页面
        this.$router.push('/home')
      } else {
        // 登录失败
        localStorage.removeItem('token')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  background-color: #35495e;
  height: 700px;
  .login-box {
    width: 400px;
    height: 250px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
    .avatar-box {
      width: 100px;
      height: 100px;
      border: 1px solid #f5f5f5;
      position: absolute;
      top: -55px;
      left: 150px;
      z-index: 1;
      background-color: #fff;
      border-radius: 50px;
      overflow: hidden;
      .avatar {
        width: 100%;
        height: 100%;
      }
    }
    .form-login {
      position: absolute;
      top: 75px;
      left: 20px;
      .form-group {
        margin-top: 10px;
        label {
          margin-right: 10px;
        }
        .form-control {
          width: 250px;
          height: 20px;
          outline: none;
        }
      }
      .justify-content-end {
        position: absolute;
        bottom: -40px;
        right: 30px;
        .btn {
          width: 50px;
          height: 30px;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .btn-secondary {
          background-color: #6d757c;
          margin-right: 5px;
        }
        .btn-primary {
          background-color: #0077fe;
        }
      }
    }
  }
}
</style>
