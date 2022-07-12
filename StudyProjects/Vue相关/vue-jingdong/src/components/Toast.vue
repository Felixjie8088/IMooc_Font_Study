<template>
  <div class="toast">{{ text }}</div>
</template>

<script>
import { TimerLock } from '@/utils/common'
import { reactive } from 'vue'
export default {
  name: 'ToastView',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}

export const useToastDataEffect = () => {
  const ToastData = reactive({
    showToast: false,
    toastText: ''
  })
  // 弹出层显示
  const showToastDialog = (message) => {
    ToastData.showToast = true
    ToastData.toastText = message
    TimerLock(() => {
      ToastData.showToast = false
    }, 2000)
  }
  return { ToastData, showToastDialog }
}

</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 0.1rem;
  background: rgba(0, 0, 0, 0.35);
  color: #fff;
  border-radius: 0.2rem;
}
</style>
