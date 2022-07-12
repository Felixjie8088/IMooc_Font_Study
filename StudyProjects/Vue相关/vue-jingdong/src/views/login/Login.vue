<template>
  <div class="wrapper-login">
    <div class="wrapper-login-icon">
      <img src="@/style/assets/编组.png" alt="" />
    </div>
    <div class="wrapper-login-input">
      <input
        type="text"
        class="wrapper-login-input-phone"
        id="phoneNum"
        placeholder="请输入手机号"
        v-model="phone"
      />
    </div>
    <div class="wrapper-login-input">
      <input
        type="password"
        class="wrapper-login-input-password"
        id="password"
        placeholder="请输入密码"
        v-model="password"
      />
    </div>
    <div class="wrapper-login-button" id="login" @click="handleBtnLogin">
      登陆
    </div>
    <div class="wrapper-login-fun">
      <span class="wrapper-login-fun-item" @click="handleFunRegister"
        >立即注册</span
      >
      <span class="wrapper-login-fun-item">|</span>
      <span class="wrapper-login-fun-item">忘记密码</span>
    </div>
    <Toast v-show="ToastData.showToast" :text="ToastData.toastText" />
  </div>
</template>

<script>
import Toast, { useToastDataEffect } from '@/components/Toast'
import { post } from '@/utils/request'
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'

const useLoginEffect = (showToastDialog) => {
  const router = useRouter()
  const data = reactive({ phone: '', password: '' })
  const handleBtnLogin = async () => {
    try {
      const response = await post('/api/user/login', data)
      if (response?.errno === 0) {
        showToastDialog('登录成功')
        // 将用户信息存入storage
        sessionStorage.setItem('isLogin', true)
        // 跳转到首页
        router.push({ name: 'HomeView' })
      } else {
        showToastDialog('登录失败')
      }
    } catch (e) {
      showToastDialog('请求失败')
    }
    // axios.post('/api/user/login', data).then((res) => {
    //   console.log(res)
    //   alert('登陆成功！')
    //   // 将用户信息存入storage
    //   // sessionStorage.setItem('isLogin', true)
    //   // 跳转到首页
    //   router.push({ name: 'HomeView' })
    // }).catch(() => { alert('账号密码输入有误！') })
  }
  const { phone, password } = toRefs(data)
  return { phone, password, handleBtnLogin }
}

export default {
  name: 'LoginView',
  components: { Toast },
  setup() {
    const router = useRouter()
    const { ToastData, showToastDialog } = useToastDataEffect()
    const { phone, password, handleBtnLogin } = useLoginEffect(showToastDialog)
    const handleFunRegister = () => {
      // 跳转到注册页面
      router.push({ name: 'RegisterView' })
    }
    return { handleBtnLogin, handleFunRegister, phone, password, ToastData }
  }
}
</script>

<style lang="scss" scoped>
.wrapper-login {
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
