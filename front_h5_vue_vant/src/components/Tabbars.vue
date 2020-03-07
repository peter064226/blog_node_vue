<template>
  <div id="app">
    <router-view />
    <Tabbar route>
      <Tabbar-item icon="home-o" to="/">日志</Tabbar-item>
      <Tabbar-item icon="search" to="/type">分类</Tabbar-item>
      <Tabbar-item icon="friends-o" to="/about">本人</Tabbar-item>
      <Tabbar-item icon="setting-o">我</Tabbar-item>
    </Tabbar>
  </div>
</template>
<script>
import { Button, Tabbar, TabbarItem } from "vant";

export default {
  components: { Button, Tabbar, TabbarItem }
};
</script>
<style lang="scss">
 
 
</style>
