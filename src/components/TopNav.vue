<template>
  <div class="topnav">
    <div class="logo">LOGO</div>
    <ol class="menu">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/doc">Doc</router-link></li>
    </ol>
    <span :class="{ toggleVisible: toggleVisible }"        
          @click="toggleAside"></span>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  name: "TopNav",
  props: {
    toggleVisible: Boolean,
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return { toggleAside };
  },
};
</script>

<style lang="scss">
.topnav {
  z-index: 10;
  background: yellowgreen;
  padding: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  > .logo {
    max-width: 6em;
    font-size: 16px;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    justify-content: center;
    align-items: center;
    > li {
      font-size: 16px;
      padding-left: 16px;
    }
  }
  > .toggleVisible {
    display: none;
    width: 24px;
    height: 24px;
    border: 1px solid red;
    position: absolute;
    left: 16px;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
  @media (max-width: 500px) {
    > .logo {
      margin: 0 auto;
    }
    > .menu {
      display: none;
    }
    > .toggleVisible {
      display: inline-block;
    }
  }
}
</style>
