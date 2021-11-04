<template>
  <div class="regis">
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="repeatPassword"
        type="password"
        name="password"
        label="确认密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="mobile"
        name="mobile"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      >
        <template #button>
          <van-button type="primary" size="small">发送短信</van-button>
        </template>
      </van-field>
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >注册</van-button
        >
      </div>
      <!-- 会员协议 -->
      <van-row type="flex" justify="left">
        <van-col offset="2">
          <van-radio name="1" v-model="checked" shape="square"></van-radio>
        </van-col>
        <van-col> 《请阅读相关协议》</van-col>
      </van-row>
    </van-form>
  </div>
</template>

<script>
import { verify } from "~/utils";
import { Toast } from "vant";
export default {
  data() {
    return {
      username: "", //用户名
      password: "", //密码
      repeatPassword: "", //确认密码
      mobile: "", //手机号
      checked: false,
    };
  },
  methods: {
    onSubmit(values) {
      if (!this.checked) {
        Toast("请阅读会员协议，同意后才可注册~");
        return;
      }

      // 验证信息
      const msg =
        verify.username(this.username) ||
        verify.password(this.password, this.repeatPassword) ||
        verify.mobile(this.mobile);

      // 表单校验
      if (msg) {
        Toast(msg);
        return;
      }
      console.log("submit", values);
    },
  },
};
</script>

<style>
</style>