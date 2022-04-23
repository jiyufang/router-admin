<template>
  <div class="user-container">
    <div class="title">用户管理</div>
    <div class="table">
      <table class="table table-striped table-bordered">
        <tr>
          <td>1</td>
          <td>2</td>
        </tr>
        <tr>
          <td>1</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyUsers'
}
</script>

<style lang="less" secope>
.user-container {
  .title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 18px;
  }
  .table {
    position: absolute;
    top: 30px;
    width: 800px;
    left: 95px;
  }
}
</style>
