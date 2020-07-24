<template>
  <header class="headerr">
    <h1>TodoList</h1>
    <div class="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.headerr {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
}

.headerr a {
  color: #fff;
  padding-right: 5px;
}
</style>