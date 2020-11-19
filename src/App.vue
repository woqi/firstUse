<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import { provide, ref } from "vue";
export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    const asidVisible = ref(width <= 500 ? false : true);
    provide("asidVisible", asidVisible);
  },
  components: {},
};
</script>
<style lang="scss" >
body {
  margin: 0px;
}
</style>
