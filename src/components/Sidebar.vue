<template>
  <!-- <div class="sidebar-wrapper" v-if="isActive"> -->
  <div class="sidebar-wrapper">
    <ul class="sidebar-nav">
      <li class="sidebar-brand mt-3">
        <router-link to="/" class="nav-link align-middle bg-gray-bg">
          <img
            class="icon-logo"
            src="@/assets/images/icon-logo.svg"
            alt="icon logo"
          />
          <img class="ms-2" src="@/assets/images/logo.svg" alt="logo" />
        </router-link>
      </li>
      <li>
        <router-link to="/" class="nav-link text-light">
          <i class="fs-5 bi bi-speedometer2 me-2"></i>
          首頁
        </router-link>
      </li>
      <li>
        <router-link to="/staff" class="nav-link align-middle text-light">
          <i class="fs-5 bi bi-people-fill me-2"></i>
          人員管理
        </router-link>
      </li>
      <li>
        <router-link to="/staff-add" class="nav-link text-light">
          <i class="fs-5 bi bi-caret-right-fill me-2 text-gray-bg"></i>
          新增人員
        </router-link>
      </li>
      <li>
        <router-link to="/staff-permissions" class="nav-link text-light">
          <i class="fs-5 bi bi-caret-right-fill me-2 text-gray-bg"></i>
          權限管理
        </router-link>
      </li>
      <li>
        <router-link to="/member" class="nav-link align-middle text-light">
          <i class="fs-5 bi bi-person-fill me-2"></i>
          會員管理
        </router-link>
      </li>
      <li>
        <router-link to="/member-check-id" class="nav-link text-light">
          <i class="fs-5 bi bi-caret-right-fill me-2 text-gray-bg"></i>
          實名認證
        </router-link>
      </li>
      <li>
        <router-link to="/member-cash" class="nav-link text-light">
          <i class="fs-5 bi bi-caret-right-fill me-2 text-gray-bg"></i>
          提領狀態
        </router-link>
      </li>
      <li>
        <router-link to="/member-creator-income" class="nav-link text-light">
          <i class="fs-5 bi bi-caret-right-fill me-2 text-gray-bg"></i>
          收益紀錄
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" >
const toggleBtn = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar-wrapper");
const wrapper = document.querySelector(".wrapper");
// toggleBtn.addEventListener("click", function () {
//   wrapper.classList.toggle("toggled");
// });
//const isActive = ref(false)
export default {
    data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isActive = this.isActive ? false : true;
      this.$emit('toggle-menu');
    },
  },
  // mounted() {
  //   this.toggleMenu (() =>{
  //     this.$refs.addEventListener("click", function() {
  //       wrapper.classList.toggle("toggled");
  //     })
  //   });
  // },
  
}
</script>