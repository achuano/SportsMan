<template>
  <div class="chat">
    <!-- 发表约跑信息-->
    <el-form :model="form" ref="form" label-width="100px" :label-position="'top'">
      <el-form-item label="地点">
        <el-input v-model="form.location"></el-input>
      </el-form-item>
      <el-form-item label="动态">
        <el-input v-model="form.msg"></el-input>
      </el-form-item>
      <el-row>
        <el-col :push="6">
          <el-button type="primary" @click="sub">发布</el-button>
          <el-button type="info" @click="()=>this.$router.go(-1)">返回</el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "chat",
  data() {
    return {
      form: {
        location: "",
        msg: ""
      }
    };
  },
  methods: {
    sub() {
      // this.$indicator.open("提交中...");
      // setTimeout(() => this.$indicator.close(), 500);
    }
  }
};
</script>

<style scoped>
.chat {
  width: 90%;
  height: inherit;
  margin: 0 auto;
}
.chat el-form el-form-item {
  width: 80%;
}
</style>
