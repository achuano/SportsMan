<template>
  <div class="container">
    <div class="box">
      <el-row type="flex" align="top">
        <el-form :model="loginForm">
          <el-col>
            <el-form-item label="名字">
              <el-input v-model="loginForm.username"></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="密码">
              <el-input v-model="loginForm.userpass"></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="primary" @click="()=>this.$router.replace('/register')">注册</el-button>
          </el-col>
        </el-form>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data: function() {
    return {
      loginForm: {
        username: "",
        userpass: ""
      }
    };
  },
  methods: {
    login: function() {
      if (this.loginForm.username === "" || this.loginForm.userpass === "") {
        alert("姓名或密码不能为空");
      } else {
        this.axios
          .post("/user/login", {
            name: this.loginForm.username,
            password: this.loginForm.userpass
          })
          .then(res => {
            if (res.status == 200) {
              this.$store.commit("changeToken", {
                //保存token到store
                Authorization: res.data.token
              });
              this.$router.push("/home");
              alert("登陆成功");
            }
          })
          .catch(err => {
            console.log(err);
            alter("账号或者密码错误");
          });
      }
    }
  }
};
</script>

<style  scoped>
.container {
  width: 100%;
}
.box {
  margin: 0 auto;
  width: 20rem;
  height: 20rem;
  border: 1px solid #000;
  margin-top: 4rem;
}
.el-form {
  bottom: 0;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}
.toRe {
  display: inline-block;
}
</style>