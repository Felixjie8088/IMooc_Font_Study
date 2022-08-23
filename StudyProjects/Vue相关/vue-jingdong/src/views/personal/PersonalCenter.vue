<template>
  <div class="wrapper">
    <div class="top">
      <div class="top-headIcon"></div>
      <div class="top-userInfo">
        <div class="info-name">
          <span class="name">热心市民李先生</span>
          <span class="level">
          </span>
        </div>
        <div class="info-id">ID: 1069643013</div>
        <div class="split-line"></div>
        <div class="info-assests">
          <div class="assests-item">
            <span class="h">红包</span>
            <span class="f">218</span>
          </div>
          <div class="assests-item">
            <span class="h">优惠券</span>
            <span class="f">12张</span>
          </div>
          <div class="assests-item">
            <span class="h">鲜豆</span>
            <span class="f">88</span>
            </div>
          <div class="assests-item">
            <span class="h">白条</span>
            <span class="f">1000</span>
          </div>
        </div>
      </div>
    </div>
    <div class="other-menus">
      <div class="menus-item">
        <img src="" alt="" class="menus-img">
        <span class="menus-title">我的钱包</span>
        <span class="menus-arrow iconfont icon-zuojiantou"></span>
      </div>
      <div class="menus-item">
        <img src="" alt="" class="menus-img">
        <span class="menus-title">我的地址</span>
        <span class="menus-arrow iconfont icon-zuojiantou"></span>
      </div>
      <div class="menus-item">
        <img src="" alt="" class="menus-img">
        <span class="menus-title">客服与帮助</span>
        <span class="menus-arrow iconfont icon-zuojiantou"></span>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from '../home/Footer.vue'
export default {
  name: 'PersonalCenter',
  components: { Footer }

}
</script>

<style lang="scss" scoped>
.wrapper{
  .top{
    position: relative;
    overflow: hidden;
    margin-bottom: 0.16rem;
    height: 3.11rem;
    background-image: linear-gradient(239deg, #3A6FF3 0%, #50C7FB 100%);
    background-repeat: no-repeat;
    background-size: 100% 2.5rem;
    &-headIcon{
      width: 0.94rem;
      height: 0.94rem;
      background-color: #3A6FF3;
      position: absolute;
      top: 0.61rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: 99;
    }
    &-userInfo{
      position: absolute;
      top: 1.08rem;
      left: .18rem;
      right: .18rem;
      background-color: #fff;
      height: 2.03rem;
      box-shadow: 0 .08rem .16rem 0 rgba(0,0,0,0.08);
      border-radius: .08rem;
      .info-name{
        text-align: center;
        margin-top: 0.59rem;
        position: relative;
        .name{
          font-size: .24rem;
          color: #262628;
          text-align: center;
          line-height: .36rem;
        }
        .level{
          position: absolute;
          right: 0.37rem;
          top: 50%;
          transform: translateY(-50%);
          display: inline-block;
          width: 0.35rem;
          height: 0.15rem;
          background-image: linear-gradient(180deg, #BEE700 0%, #8ACA00 100%);
          border-radius: 1rem;
        }
      }
      .info-id{
        height: 0.17rem;
        font-size: .14rem;
        color: #C1C0C9;
        text-align: center;
        margin-bottom: 0.12rem;
      }
      .split-line{
        border: .01rem solid #F1F1F1;
      }
      .info-assests{
        display: flex;
        justify-content: space-around;
        margin-top: 0.12rem;
        .assests-item{
          font-size: 12px;
          text-align: center;
          .h,.f{
            display: block;
          }
          .h{
            color: #C1C0C9;
            margin-bottom: 0.03rem;
          }
          .f{
            font-size: 20px;
            color: #262628;
          }
        }
      }
    }
  }
  .other-menus{
    margin: auto .18rem;
    padding: .16rem;
    background: #FFFFFF;
    box-shadow: 0 .08rem .16rem 0 rgba(0,0,0,0.08);
    border-radius: .08rem;
    .menus-item{
      display: flex;
      height: 0.22rem;
      line-height: 0.22rem;
      margin-top: 0.24rem;
      :first-child{
        margin-top: 0;
      }
      .menus-img{
        width: 0.22rem;
        height: 0.22rem;
        margin-right: 0.12rem;
        border-radius: .08rem;
      }
      .menus-title{
        font-size: .14rem;
        color: #262626;
        flex: 1;
      }
      .menus-arrow{
        transform: rotate(180deg);
        color: #C2C4CA;
        font-weight: bold;
      }
    }
  }
}
</style>
