<template>
  <div class="record">
    <!-- 记录每个人发布的信息 -->
    <div class="box">
      <div class="item" v-for="item in list" :key="item.id">
        <!-- 头像以及记录 -->
        <div class="item-user">
          <div class="item-user-avatar">{{ item.avatar }}</div>
          <div class="item-user-msg">
            <h5>{{ item.name }}</h5>
            <p>已经坚持{{ days }}天了</p>
          </div>
          <span>{{ item.time }}</span>
        </div>

        <!-- 用户跑步的动态 -->
        <div class="item-content">{{ item.content }}</div>

        <!-- 点赞与评论
        <div class="item-interactive">
          <div>
            <span class="iconfont icontubiao_xiangqing"></span>
            <router-link to="/chat">评论</router-link>
          </div>
          <a href="#" @click="praise" ref="pra">
            <span class="iconfont iconthumbup"></span>赞
          </a>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "record",
  data() {
    return {
      days: 1,
      list: [
        {
          id: 0,
          avatar: "",
          name: "abc",
          content: "真好",
          time: "20190101",
        },
        { id: 1, avatar: "", name: "def", content: "真香", time: "20190102" },
      ],
    };
  },
  methods: {
    praise() {
      this.$refs.pra[0].style.color = "red";
    },
  },
};
</script>

<style scoped>
.record {
  width: 100%;
  margin: 0 auto;
}

/* 记录每个人发布的信息 - */
.record .box {
  width: inherit;
}
.box .item {
  width: 90%;
  margin: 0 auto 15px;
  border-radius: 4px;
  background-color: #fff;
  padding: 10px;
}
/* 头像以及记录  */
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
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: aqua;
}
.item-user-msg h5 {
  text-align: center;
}
.item-user-msg p {
  margin-left: 10px;
}

/* 用户跑步的动态 */
.item-content {
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 15px;
  padding-left: 10px;
}
</style>
