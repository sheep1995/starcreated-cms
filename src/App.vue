<script setup>
//import { Header } from "./components/Header.vue";
//import HelloWorld from "./components/HelloWorld.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <!-- <header class="navbar bg-dark">
    <nav class="text-danger container" style="z-index:999;">
      <img class="position-fixed" src="./assets/images/logo.svg" alt="logo">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/staff">Staff</RouterLink>
    </nav>
  <div>

  </div>
</header> -->

<RouterView />
</template>
