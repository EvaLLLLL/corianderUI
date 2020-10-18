<template>
  <TopNav/>
  <div class="content">
    <aside v-if="asideVisible">
      <h2>组件列表</h2>
      <ol>
        <li><router-link to="/doc/switch">Switch 组件</router-link></li>
        <li><router-link to="/doc/button">Button 组件</router-link></li>
        <li><router-link to="/doc/tabs">Tabs 组件</router-link></li>
        <li><router-link to="/doc/dialog">Dialog 组件</router-link></li>
      </ol>
    </aside>
    <main>
     <router-view/>
    </main>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
import TopNav from "../components/TopNav.vue";

export default {
  components: { TopNav },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    return { asideVisible: asideVisible };
  },
};
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  > aside {
    width: 150px;
    background: #add8e6;
    padding: 70px 16px 16px;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    flex-shrink: 0;
    > h2 {
      margin-bottom: 4px;
    }
    > ol {
      > li {
        padding: 4px 0;
      }
    }
  }
  > main {
    flex-grow: 1;
    padding: 70px;
    background: grey;
    height: 100vh;
  }
}
</style>
