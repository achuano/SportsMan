<template>
  <div class="comments">
    <!-- 展示评论 -->
    <div class="show">
      <div class="item" v-for="item in list" :key="item.id">
        <div class="item-user">
          <div class="item-user-avatar">{{item.avatar}}</div>
          <div class="item-user-msg">
            <h5>{{item.name}}</h5>
            <p>{{item.content}}</p>
          </div>
          <span>{{item.time}}</span>
        </div>
      </div>
    </div>

    <!-- 评论 -->
    <div class="form-group">
      <form action="#" class="form">
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="请输入内容"
          v-model="textarea"
        ></el-input>
        <el-row type="flex" class="row">
          <el-col :push="5">
            <el-button type="primary" @click="sub">提交</el-button>
            <el-button type="info" @click="back">取消</el-button>
          </el-col>
        </el-row>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "comments",
  data() {
    return {
      days: 1,
      list: [
        {
          id: 0,
          avatar: "",
          name: "abc",
          content: "真好",
          time: "20190101"
        },
        {
          id: 1,
          avatar: "",
          name: "def",
          content: "真香",
          time: "20190102"
        }
      ],
      textarea: ""
    };
  },
  methods: {
    sub() {
      // this.$indicator.open("提交中...");
      // setTimeout(() => this.$indicator.close(), 500);
    },
    back() {
      this.$router.back(-1);
    }
  }
};
</script>

<style scoped>
.comments {
  width: 100%;
}

/* 评论 */
.form {
  display: block;
  width: inherit;
  margin: 0 auto;
}

.form-group {
  border-bottom: 1px solid #fff;
  width: 100%;
}
.row {
  margin-top: 20px;
}

/* 展示评论 */
.item {
  width: inherit;
  margin-top: 20px;
  background-color: #fff;
}

.show {
  width: 100%;
}

.item-user {
  width: 100%;
  position: relative;
  display: flex;
}

.item-user span {
  position: absolute;
  display: inline-block;
  height: 30px;
  width: 60px;
  line-height: 30px;
  right: 0;
  bottom: 0;
}

.item-user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: aqua;
}
</style>
