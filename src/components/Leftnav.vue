<template>

  <el-aside :style="asideStyle" class="left-nav">
    <i class="el-icon-s-fold" v-if="!isCollapse" @click="isCollapse = true" title="收缩"></i>
    <i class="el-icon-s-unfold" v-else @click="isCollapse = false" title="展开"></i>
    <el-menu
      :default-active="routerindex"
      router
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#f2f2f2"
      active-text-color="#409EFF"
      :collapse="isCollapse"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>资金系统</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/bankcode">
            <i class="el-icon-arrow-right icon"></i>
            账户列表
          </el-menu-item>
          <el-menu-item index="/business">
            <i class="el-icon-arrow-right icon"></i>
            流水列表
          </el-menu-item>
          <el-menu-item index="/cash">
            <i class="el-icon-arrow-right icon"></i>
            提现列表
          </el-menu-item>
          <el-menu-item index="/bank">
            <i class="el-icon-arrow-right icon"></i>
            银行卡列表
          </el-menu-item>
        </el-menu-item-group>
        <!-- <el-menu-item-group>
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>-->
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>订单系统</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/order">
            <i class="el-icon-arrow-right icon"></i>
            订单管理
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>系统管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/userInfo">
            <i class="el-icon-arrow-right icon"></i>
            用户
          </el-menu-item>
          <el-menu-item index="/systemConfig">
            <i class="el-icon-arrow-right icon"></i>
            系统配置
          </el-menu-item>
          <el-menu-item index="/channelManage">
            <i class="el-icon-arrow-right icon"></i>
            渠道管理
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>商户管理</span>
        </template>
        <el-menu-item index="/merchant?merchantType=0">
          <i class="el-icon-arrow-right icon"></i>
          商户列表
        </el-menu-item>
        <el-menu-item index="/merchant?merchantType=1">
          <i class="el-icon-arrow-right icon"></i>
          代理商列表
        </el-menu-item>
        <el-menu-item index="/codeList">
          <i class="el-icon-arrow-right icon"></i>
          收款账户列表
        </el-menu-item>
      </el-submenu>
      
    </el-menu>
  </el-aside>
</template>


<script>
export default {
  data() {
    return {
      routerindex: this.$route.fullPath,
      isCollapse: false
    };
  },
  computed: {
    asideStyle() {
      if (this.isCollapse) {
        return {
          width: '65px'
        }
      }
      return {
        width: '201px'
      }
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
  .left-nav {
    background-color: #f2f2f2;
    transition: width .3s
  }
  .left-nav >>> .el-menu-item-group__title {
    padding: 0;
  }
  .left-nav >>> .el-submenu .el-menu-item {
    padding-left: 35px !important;
  }
  .icon {
    font-size: 12px !important;
    margin-right: 0;
    margin-top: -3px;
  }
  .el-icon-s-fold, .el-icon-s-unfold {
    position: absolute;
    top: 10px;
    left: 200px;
    color: #fff;
    cursor: pointer;
    color: #f5f7fa;
    width: 30px;
    height: 30px;
    font-size: 16px;
    background: rgba(255,255,255,0.1) url() 0 0 no-repeat;
    text-align: center;
    line-height: 30px;
    border-radius: 3px;
  }
</style>
