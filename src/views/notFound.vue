<template>
  <div class="not-found">
    <img src="./../assets/error.png" alt="">
    <div class="error-http">
        HTTP 404……
    </div>
    <div class="err-info">
      抱歉! 您访问的页面<span>失联</span>啦...
    </div>
    <el-button size="small" @click="$router.go(-1)">返回</el-button>
    <el-button type="primary" size="small" @click="$router.push({name: 'order'})">返回首页</el-button>
  </div>
</template>
<style scoped>
.not-found {
  text-align: center;
  padding-top: 40px;
}
.error-http {
  color: #888;
  margin-top: 20px;
  word-wrap: break-word;
  word-break: break-all;
}
.err-info {
  font-size: 22px;
  color: #5f5f5f;
  font-weight: 700;
  margin-bottom: 16px;
}
.err-info span {
  color: #ee8145;
}
</style>
