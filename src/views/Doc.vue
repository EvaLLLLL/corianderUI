<template>
  <div class="docWrapper">
    <TopNav :toggleMenuButtonVisible="true" />
    <div class="content">
      <aside v-if="menuVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/start">快速上手</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
        <footer>
          <router-link :to="nextPath">下一节：{{ nextName }}</router-link>
        </footer>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref, ref, onMounted, watchEffect } from "vue";
import TopNav from "../components/TopNav.vue";
import { router } from "../main";

export default {
  components: { TopNav },
  setup() {
    const nextName = ref("");
    const nextPath = ref("");
    onMounted(() => {
      watchEffect(() => {
        const fileNameMap = {
          "/doc/intro": "安装",
          "/doc/install": "快速上手",
          "/doc/start": "Button 组件",
          "/doc/button": "Switch 组件",
          "/doc/switch": "Dialog 组件",
          "/doc/dialog": "Tabs 组件",
          "/doc/tabs": "快速上手",
        };
        const pathMap = {
          "/doc/intro": "/doc/install",
          "/doc/install": "/doc/start",
          "/doc/start": "/doc/button",
          "/doc/button": "/doc/switch",
          "/doc/switch": "/doc/dialog",
          "/doc/dialog": "/doc/Tabs",
          "/doc/tabs": "/doc/start",
        };
        const currentPath = router.currentRoute.value.matched[1].path;
        nextName.value = fileNameMap[currentPath];
        nextPath.value = pathMap[currentPath];
      });
    });

    const menuVisible = inject<Ref<boolean>>("menuVisible");
    return { menuVisible: menuVisible, nextName, nextPath };
  },
};
</script>

<style lang="scss">
$color: #657c50;

.docWrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  flex-direction: row;
  > aside {
    color: #555;
    box-shadow: 1px 0 0 fade-out(black, 0.95);
    flex-shrink: 0;
    width: 150px;
    padding: 80px 0;
    background: white;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    z-index: 9;
    > h2 {
      margin-top: 30px;
      margin-bottom: 4px;
      margin-left: 24px;
    }
    > ol {
      > li {
        padding: 8px 0;
        > a {
          display: block;
          margin-left: 24px;
          &.router-link-active {
            font-weight: bold;
            color: $color;
            border-right: 2px solid $color;
          }
        }
      }
    }
  }
  > main {
    flex-grow: 1;
    padding: 32px;
    height: 100vh;
    width: 100%;
    position: relative;
    > article {
      color: #555;
      > p {
        > a {
          color: $color;
          display: inline-block;
          &:hover {
            text-decoration: none;
            cursor: pointer;
            transform: scale(1.2);
            transition: all 250ms;
          }
        }
        > strong {
          color: $color;
        }
      }
      > pre {
        font-size: 14px;
        background: #272822;
        color: white;
        @media (max-width: 500px) {
          font-size: 12px;
        }
      }
    }
    > footer {
      color: $color;
      font-weight: bold;
      position: absolute;
      padding: 16px 0;
      right: 32px;
      > a {
        display: block;
        &:hover {
          cursor: pointer;
          transform: scale(1.2);
          transition: all 250ms;
        }
      }
    }
  }
}
</style>
