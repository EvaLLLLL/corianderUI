<template>
    <div>
        <div>
            <h2>正常开关</h2>
            <Switch v-model:value="bool"/>
        </div>
        <div>
            <h2>不可操作开关</h2>
            <Switch disabled v-model:value="bool"/>
        </div>
    </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import {ref} from 'vue';

export default {
    components: {Switch},
    setup(){
        const bool = ref(true)
        return {bool}
    }
}
</script>
