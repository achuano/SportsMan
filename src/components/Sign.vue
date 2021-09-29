<template>
  <div class="sign">
    <p class="clock" :class="{signed:user.signed}" @click="signClick">打卡</p>
    <h3>累计打卡{{user.days}}天</h3>
    <!-- <h3>你已经跑了{{user.steps}}步</h3> -->
  </div>
</template>

<script>
export default {
  name: "sign",
  data() {
    return {
      user: {
        days: "",
        steps: "",
        _id: "",
        signed: false
      }
    };
  },
  methods: {
    signClick() {
      // 实现签到
      if (!this.user.signed) {
        // this.user.signed = true;
        // this.$cookie.set("signed", true);
        // let turn = this.$toast({
        //   message: "打卡成功",
        //   position: "middle",
        //   duration: -1,
        //   className: "mytoast"
        // });
        // setTimeout(() => turn.close(), 2000); //组件
        // // this.$refs.clock.style.backgroundColor = "#6495ED"; //按钮样式改变

        this.axios
          .get("/login/sign", {
            params: {
              _id: this.user._id,
              days: ++this.user.days
            }
          })
          .then(res => {
            this.signed = true;
            // console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  },
  beforeMount() {
    if (!this.user.signed) {
      this.axios
        .get("/user/current")
        .then(res => {
          // console.log(res);
          this.user._id = res.data._id;
          this.user.days = res.data.days;
          this.user.steps = res.data.steps;
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>
.sign {
  width: 80%;
  height: 95%;
  margin: 0 auto;
  border-radius: 10px;
  position: relative;
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.sign .clock {
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  margin: 0 auto;
  margin-top: -50px;
  box-shadow: 2px 5px 20px 2px rgba(100, 149, 237, 0.5);
  background-color: rgb(62, 88, 201);
  font-size: 30px;
  color: #fff;
  border-radius: 50%;
}

.sign h3 {
  width: 100%;
  height: 70px;
  line-height: 70px;
  font-size: 20px;
  text-align: center;
}
.signed {
  background-color: #6495ed !important;
}
</style>
