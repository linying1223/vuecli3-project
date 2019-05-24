<template>
  <div class="header">
    <el-header class="head">
      <img :src="imageURL+'/webLogo/logo.png'" alt="logo" height="40px" class="logo-pic">
      <el-dropdown>
        <span>
          <span style="color:white">{{userAccount || '管理员'}}</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native.prevent="pwdDialogVisible = true">重置密码</el-dropdown-item>
          <el-dropdown-item @click.native.prevent="logOut">退出</el-dropdown-item>
          <!-- <el-dropdown-item>删除</el-dropdown-item> -->
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>

    <el-dialog
      title="重置密码"
      :visible.sync="pwdDialogVisible"
      v-if="pwdDialogVisible"
      width="675px"
      center
    >
      <el-form ref="ruleForm" :model="form" :rules="rules2" inline-message label-width="160px">
        <el-form-item label="旧密码：" prop="oldPwd">
          <el-input v-model="form.oldPwd" type="password" autocomplete="off" style="width:60%"></el-input>
        </el-form-item>
        <el-form-item label="新密码：" prop="newPwd">
          <el-input v-model="form.newPwd" type="password" autocomplete="off" style="width:60%"></el-input>
        </el-form-item>
        <el-form-item label="确认密码：" prop="confirmPwd">
          <el-input v-model="form.confirmPwd" type="password" autocomplete="off" style="width:60%"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirmPwdFn('ruleForm')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import mystorage from "@/utils/storage";
import { resetPwd } from "@/utils/service";
import { imageURL } from "@/utils/const";
export default {
  data() {
    var validateOldPass = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入密码"));
      }
      callback();
    };
    var validateNewPass = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入新密码"));
      } else {
        if (this.form.confirmPwd !== "") {
          this.$refs.ruleForm.validateField("confirmPwd");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.newPwd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      imageURL,
      userAccount: mystorage.get("userAccount"),
      pwdDialogVisible: false,
      form: {
        oldPwd: "",
        newPwd: "",
        confirmPwd: ""
      },
      rules2: {
        oldPwd: [{ validator: validateOldPass, trigger: "blur" }],
        newPwd: [{ validator: validateNewPass, trigger: "blur" }],
        confirmPwd: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    logOut() {
      this.$store.commit('loginOut')
      this.$router.push({
        name: "login"
      });
    },
    confirmPwdFn(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          resetPwd({
            oldPwd: this.form.oldPwd,
            newPwd: this.form.newPwd
          })
            .then(res => {
              this.$message.success("修改成功");
              this.pwdDialogVisible = false;
            })
            .catch(err => {
              this.$message.error(`${err.message}`);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.el-header {
  background-color: #222;
  color: #333;
  line-height: 50px;
}
.logo-pic {
  margin-left: 6px;
  margin-top: 6px;
}
.head {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  height: 50px !important;
}
.el-aside {
  color: #333;
}
.el-icon--right {
  color: #ffffff;
}
</style>

