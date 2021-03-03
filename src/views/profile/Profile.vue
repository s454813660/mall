<template>
  <div id="profile">
    <nav-bar class="profile-nav">
      <template v-slot:center>
        小豆商城
      </template>
    </nav-bar>
    <user></user>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";

import User from "./childComps/User"
import ViewList from "./childComps/ViewList"
export default {
  name: 'Profile',
  components: {
    NavBar,
    User,
    ViewList
  }
}
</script>
<style scoped>
#profile {
  height: 100vh;
  width: 100%;
}
.profile-nav {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 500;
}
</style>