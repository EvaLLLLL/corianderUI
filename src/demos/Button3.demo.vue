<demo>
	不同主题的按钮示例
</demo>

<template>
  <Button level="normal">正常按钮</Button>
  <Button level="main">主要按钮</Button>
  <Button level="danger">危险按钮</Button>
</template>

<script lang="ts">
import { Button } from "../lib/index.ts";

export default {
  components: { Button },
};
</script>
