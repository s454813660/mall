<template>
  <div class="user">
    <div class="login">
      <div class="logo">
        <img src="https://s10.mogucdn.com/mlcdn/c45406/180913_8d4e5adi8llg7c47lgh2291akiec7_225x225.png" alt="">
      </div>
      <div class="login1">
        <div class="info">
          <a href="">注册/登陆</a>
          <p>暂无手机号注册</p>
        </div>
        <div class="arrow">
          <i class="arrow-right"></i>
        </div>
      </div>  
    </div>
    <div class="user-info">
      <div class="remain">
        <div><span>0.00</span>元</div>
        <div>我的余额</div>
      </div>
      <div class="discount">
        <div><span>0.00</span>个</div>
        <div>我的优惠</div>
      </div>
      <div class="points">
        <div><span>0.00</span>分</div>
        <div>我的积分</div>
      </div>
    </div>
    <div class="content">
      <div class="my-info">
        <i class="icon "></i>
        我的消息
      </div>
      <div class="point-shop">
        <i class="icon "></i>
        我的商城
      </div>
      <div class="point-shop">
        <i class="icon "></i>
        会员卡
      </div>
    </div>
    <div class="content1">
      <div class="point-shop">
        <i class="icon "></i>
        我的购物车
      </div>
      <div class="point-shop">
        <i class="icon "></i>
        下载购物App
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'User',
}
</script>
<style scoped>
.login {
  display: flex;
  align-items: center;
  width: 100%;
  background-color: var(--color-tint);
  box-sizing: border-box;
  padding: 10px;
}
.login .logo {
  width: 15%;
}
.login .logo > img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 15px;
}
.login > .login1 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: #fff;
}
.login > .login1 > .info > a {
  color: #fff;
  font-size: 16px;
}
.login > .login1 > .info > p {
  margin-top: 2px;
}
.login > .login1 > .arrow > i {
  border-color: #fff;
}
.user-info {
  display: flex;
  justify-content: space-between;
  /* box-sizing: border-box;
  padding: 10px; */
  border-bottom: 8px solid #eee;
}
.user-info > div {
  flex: 1;
  padding: 10px;
  text-align: center;
  border-right: 1px solid #eee;
  font-size: 14px;
}
.user-info > div span {
  font-size: 18px;
  color: var(--color-high-text);
  font-weight: 600;
}
.user-info > div:last-child {
  border: none
}

/** */
.content {
  border-bottom: 8px solid #eee;
  font-size: 14px;
}
.content > div{
  border-bottom: 1px solid #ccc;
  padding: 10px 0 10px 10px;
  
} 
.content .icon {
  margin-right: 10px;
}
.content1 {
  border-bottom: 8px solid #eee;
  font-size: 14px;
}
.content1 .icon {
  margin-right: 10px;
}
.content1 > div{
  border-bottom: 1px solid #ccc;
  padding: 10px 0 10px 10px;
  
} 

</style>