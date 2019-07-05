<template>
  <div class="login" :style="`height: ${clientHeight}px;`">
    <input type="text" v-model="password" />
    <div class="login-submit">
      <div @click="loginSubmit">登录</div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  data: function data() {
    return {
      clientWidth:
        window.document.body.offsetWidth ||
        window.document.documentElement.clientWidth ||
        window.innerWidt,
      clientHeight:
        window.document.body.offsetHeight ||
        window.document.documentElement.clientHeight ||
        window.innerHeight,

      password: "" // 密碼
    };
  },

  mounted: function mounted() {},

  methods: {
    /**
     * 提交登录
     */
    async loginSubmit() {
      let password = this.password;
      if (password.length < 6) {
        return alert("密码不能小于6位数");
      }

      let loginResult = await axios({
        url: "/api/login/rejiejay",
        method: "post",
        headers: { "Content-Type": "application/json" },
        data: {
          password: password
        }
      });

      console.log(loginResult);
    }
  }
};
</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #c0c4cc;

.login {
  padding: 15px;
  position: relative;
  font-size: 14px;
  width: 100%;
  min-height: 100%;
  background-color: #f5f5f5;

  input {
    font-size: 16px;
    height: 45px;
    width: 100%;
  }

  .login-submit {
    padding-top: 15px;

    div {
      text-align: center;
      line-height: 45px;
      border-radius: 5px;
      height: 45px;
      width: 100%;
      background-color: #38f;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>
