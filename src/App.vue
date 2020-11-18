<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import { provide, ref } from 'vue';
export default {
  name: "App",
  setup(){
    const asidVisible = ref(false)
    provide('jj',asidVisible)
  },
  components: {},
};
</script>
<style lang="scss" >
  body {
    margin: 0px;
  }
</style>
