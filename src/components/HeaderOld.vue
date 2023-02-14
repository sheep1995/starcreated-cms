<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <header class="navbar bg-dark">
    <nav class="text-danger container" style="z-index: 999">
      <img class="position-fixed" src="./assets/images/logo.svg" alt="logo" />
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/sta">Staff</RouterLink>
    </nav>
    <div></div>
    <!-- <img
    alt="Vue logo"
    class="logo"
    src="@/assets/logo.svg"
    width="125"
    height="125"
  />

  <div class="wrapper">
    <HelloWorld msg="You did it!" /> -->
    <!-- </div> -->
  </header>

  <RouterView />
</template>