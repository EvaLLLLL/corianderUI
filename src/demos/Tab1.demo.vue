<demo>
	标签页示例
</demo>

<template>
  <Tabs v-model:selected="selected">
    <Tab title="标签A">这里是内容A</Tab>
    <Tab title="标签B">这里是内容B</Tab>
    <Tab title="标签C">这里是内容C</Tab>
    <Tab title="标签D">这里是内容D</Tab>
  </Tabs>
</template>

<script lang="ts">
import { ref } from "vue";
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";

export default {
  components: { Tabs, Tab },
  setup() {
    const selected = ref("标签A");
    return { selected };
  },
};
</script>
