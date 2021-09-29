<template>
  <div>
    <h3>这是某个动态的评论详情页</h3>

    <div class="comment">
      <router-view></router-view>
    </div>
  </div>
</template>


<style scoped>
.comment {
  bottom: 0;
}
</style>