<template>
  <div>
    <div>导航栏|
      <router-link to="/">Woqi</router-link>
      |
      <router-link to="/x">Woqi2</router-link>
    </div>

    <router-view />
  </div>

  
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>
