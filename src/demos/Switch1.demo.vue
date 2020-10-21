<demo>
	正常开关示例
</demo>

<template>
  <Switch v-model:value="switchOpen" />
</template>

<script lang="ts">
import Switch from "../lib/index.ts";
import { ref } from "vue";

export default {
  components: { Switch },
  setup() {
    const switchOpen = ref(true);
    return { switchOpen };
  },
};
</script>
