<template>
  <div class="home">
    <!-- 背景栏 -->
    <div class="bac"></div>

    <!-- 导航栏 -->
    <div class="header">
      <div>
        <span class="iconfont iconpaihang"></span>
        <router-link to="/square">广场</router-link>
      </div>
      <div>
        <span class="iconfont iconrecord"></span>
        <router-link to="/condition">动态</router-link>
      </div>
      <div>
        <span class="iconfont iconcustom-user"></span>
        <router-link to="/post">发布</router-link>
      </div>
    </div>
    <!-- 界面 -->
    <div class="interface">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      days: 1
    };
  },
  methods: {}
};
</script>

<style scoped>
/* 背景栏 */
.home .bac {
  width: 100%;
  height: 50px;
  background-color: rgb(60, 109, 197);
  border-bottom: 1px solid #fff;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

/* 导航栏 */
.home .header {
  width: 80%;
  height: 60px;
  margin: 0 auto;
  border-radius: 10px;
  position: relative;
  top: -20px;
  background: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
}

.home .header div {
  width: 30%;
  height: inherit;
}

.home .header div span {
  display: block;
  line-height: 40px;
  width: 100%;
  height: 50%;
}

.home .header div a {
  display: block;
  width: 100%;
  height: 50%;
}

/* 界面 */
.home .interface {
  width: 100%;
  height: 45em;
}
</style>
