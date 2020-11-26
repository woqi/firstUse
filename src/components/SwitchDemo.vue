<template>
  <div>
    <Switch :s="bool" @handle="bool=$event" />
    <!-- <Switch :s="bool" @update:s="bool=$event" /> 可以用v-model简化 -->
    <!--<Switch v-model:s="bool" />-->
    <!-- v-model:value="bool" -->
    Switch~
  </div>
</template>
<script lang="ts">
import Switch from '../lib/Switch.vue'
import { ref } from 'vue'
export default {
  components: {Switch},
  setup(){
    const bool = ref(false)
    return {bool}
  }
}
</script>