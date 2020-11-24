<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import { provide, ref } from "vue";
import {router} from './route/router'

export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    const asidVisible = ref((width <= 500) ? false : true);
    provide("asidVisible", asidVisible);
    router.afterEach(()=>{
      if(width <= 500){
        asidVisible.value = false
      }
    })
  },
  components: {},
};
</script>
<style lang="scss" >
  body {
    margin: 0px;
  }
</style>
