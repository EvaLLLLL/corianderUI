<template>
  <TopNav :toggleVisible="false"/>
  <div class="banner">
    <img src="" alt="" />
    <h1>香菜UI</h1>
    <h2>一个简单好用的UI框架</h2>
    <p class="actions">
      <a href="">GitHub</a>
      <router-link to="/doc">开始</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";

export default {
  components: { TopNav },
};
</script>

<style lang="scss">
.banner {
  display: flex;
  padding: 100px;
  justify-content: center;
  align-items: center;
  background: pink;
  flex-direction: column;
  white-space: nowrap;
  > .actions {
    padding: 8px 0;
    > a {
      margin: 0 8px;
      background: white;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>
