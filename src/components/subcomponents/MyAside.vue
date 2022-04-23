<template>
  <div class="aside-container">
    <ul class="user-select-none menu">
      <li class="menu-item">
        <router-link to="/home/users">用户管理</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/home/rights">权限管理</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/home/goods">商品管理</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/home/orders">订单管理</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/home/settings">系统设置</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Aside',
  methods: {}
}
</script>

<style lang="less" scoped>
.aside-container {
  width: 250px;
  height: 400px;
  overflow: hidden;
  border-right: 1px solid #ccc;
  .menu {
    padding: 0;
    .menu-item {
      margin: 0;
      width: 100%;
      height: 50px;
      line-height: 50px;
      padding-left: 20px;
      list-style: none;
      a {
        text-decoration: none;
        color: black;
      }
    }
    .menu-item:hover {
      background-color: #efefef;
      cursor: pointer;
    }
  }
}
</style>
