<template>
  <div class="login-container">
    <el-form
      :model="ruleForm2"
      :rules="rules2"
      status-icon
      ref="ruleForm2"
      label-position="left"
      label-width="0px"
      class="demo-ruleForm login-page"
    >
      <h3 class="title">系统登录</h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="ruleForm2.username" auto-complete="off" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="ruleForm2.password" @keyup.enter.native="handleSubmit('ruleForm2')" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-checkbox v-model="checked" class="rememberme">记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click="handleSubmit('ruleForm2')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login } from '@/utils/service';
import mystorage from '@/utils/storage';
export default {
  data() {
    return {
      logining: false,
      ruleForm2: {
        username: '',
        password: ''
      },
      rules2: {
        username: [
          {
            required: true,
            message: 'please enter your account',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: 'please enter your password', trigger: 'blur' }
        ]
      },
      checked: false
    };
  },
  mounted() {
    if (mystorage.get('password')) {
      this.ruleForm2.username = mystorage.get('account')
      this.ruleForm2.password = mystorage.get('password')
    }
  },
  methods: {
    handleSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.checked) {
            mystorage.set('account', this.ruleForm2.username)
            mystorage.set('password', this.ruleForm2.password)
          }
          this.getData()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getData() {
      login({
        account: this.ruleForm2.username,
        password: this.ruleForm2.password
      })
        .then(res => {
          // mystorage.set("token", res.data.Authorization);
          // mystorage.set("userAccount", res.data.userInfo.name);
          this.$store.commit('loginIn', {
            token: res.data.Authorization,
            userAccount: res.data.userInfo.name
          })
          this.$router.push('/home');
        }).catch(err => {
          this.$message.error(err.message)
        })
    }
  }
};
</script>

<style scoped>
.login-container {
  width: 100%;
  height: 100%;
}
.login-container .title {
  margin-bottom: 20px;
  text-align: center; 
}
.login-container >>> .el-form-item__error {
  padding-top: 0;
}
.login-page {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 45px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
label.el-checkbox.rememberme {
  margin: 0px 0px 15px;
  text-align: left;
}
.login-container .el-form-item {
  margin-bottom: 18px
}
</style>
