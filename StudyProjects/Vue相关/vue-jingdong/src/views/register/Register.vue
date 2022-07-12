<template>
  <div class="wrapper">
    <div class="wrapper-icon">
      <img src="@/style/assets/编组.png" alt="" />
    </div>
    <div class="wrapper-input">
      <input
        type="text"
        class="wrapper-input-phone"
        id="phoneNum"
        placeholder="请输入手机号"
        v-model="phoneNum"
      />
    </div>
    <div class="wrapper-input">
      <input
        type="password"
        class="wrapper-input-password"
        id="password"
        placeholder="请输入密码"
        v-model="password"
      />
    </div>
    <div class="wrapper-input">
      <input
        type="password"
        class="wrapper-input-password"
        id="cpassword"
        placeholder="确认密码"
        v-model="cpassword"
      />
    </div>
    <div class="wrapper-button" id="register" @click="handleBtnRegister">
      注册
    </div>
    <div class="wrapper-fun">
      <span class="wrapper-fun-item" @click="handleFunLogin"
        >已有帐号去登陆</span
      >
    </div>
    <Toast v-show="ToastData.showToast" :text="ToastData.toastText" />
  </div>
</template>

<script>
import Toast, { useToastDataEffect } from '@/components/Toast'
import { post } from '@/utils/request'
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'

const useRegisterEffect = (showToastDialog) => {
  const router = useRouter()
  const data = reactive({ phoneNum: '', password: '', cpassword: '' })
  const handleBtnRegister = async () => {
    try {
      const response = await post('/api/user/register', data)
      if (response?.errno === 0) {
        showToastDialog('注册成功')
        // 跳转到登录
        router.push({ name: 'LoginView' })
      } else {
        showToastDialog('注册失败')
      }
    } catch (e) {
      showToastDialog('请求失败')
    }
  }
  const { phoneNum, password, cpassword } = toRefs(data)
  return { phoneNum, password, cpassword, handleBtnRegister }
}
export default {
  name: 'RegisterView',
  components: { Toast },
  setup() {
    const router = useRouter()
    const { ToastData, showToastDialog } = useToastDataEffect()
    const { phoneNum, password, cpassword, handleBtnRegister } = useRegisterEffect(showToastDialog)
    const handleFunLogin = () => {
      // 跳转到登录页面
      router.push({ name: 'LoginView' })
    }
    return { phoneNum, password, cpassword, ToastData, handleBtnRegister, handleFunLogin }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  &-icon {
    width: 0.66rem;
    height: 0.66rem;
    margin: 0 auto 0.4rem auto;
    img {
      width: 0.66rem;
    }
  }
  &-input {
    height: 0.48rem;
    margin: 0.12rem 0.4rem;
    background: #f9f9f9;
    border: 0.01rem solid rgba(0, 0, 0, 0.1);
    border-radius: 0.06rem;
    input {
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      padding-left: 0.16rem;
      box-sizing: border-box;
      color: #777;
      &::placeholder {
        font-size: 0.16rem;
        color: #777;
        line-height: 0.24rem;
      }
    }
  }
  &-button {
    margin: 0.32rem 0.4rem 0.16rem;
    height: 0.48rem;
    background: #0091ff;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    text-align: center;
    line-height: 0.48rem;
    font-size: 0.16rem;
    color: #ffffff;
  }
  &-fun {
    text-align: center;
    &-item {
      font-size: 0.14rem;
      color: #777;
      &:nth-child(2) {
        margin: 0 0.12rem;
      }
    }
  }
}
</style>
