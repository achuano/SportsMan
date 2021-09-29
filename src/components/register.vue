<template>
  <div class="container">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="呢称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <!-- <el-form-item label="头像">
        <el-upload
          class="upload-demo"
          ref="upload"
          action
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          :auto-upload="false"
        >
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <el-button
            style="margin-left: 10px;"
            size="small"
            type="success"
            @click="submitUpload"
          >上传到服务器</el-button>
          <div slot="tip" class="el-upload__tip filesName">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>-->
      <el-form-item>
        <el-button type="primary" @click="register">注册</el-button>
        <el-button type="info">退出</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "register",
  data: function() {
    return {
      form: {
        name: "",
        password: ""
      },
      fileList: []
    };
  },
  methods: {
    register() {
      this.axios
        .post("/user/register", {
          name: this.form.name,
          password: this.form.password
        })
        .then(res => {
          console.log(res);
          this.$router.replace("/login");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.container {
  width: 100%;
}
</style>