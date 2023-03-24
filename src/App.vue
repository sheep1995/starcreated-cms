<template>
  <RouterView />
</template>
<script>
// const toggleBtn = document.querySelector(".menu-toggle");
// const sidebar = document.querySelector(".sidebar-wrapper");
// const wrapper = document.querySelector(".wrapper");
// toggleBtn.addEventListener("click", function () {
//   wrapper.classList.toggle('toggled');
// });
export default {
  name: "App",
  // components: {
  //   LoadingBar
  // },
  data() {
    return {
      isActive: false,
      //isLoading: false,
    };
  },
  // methods: {
  //   toggleMenu() {
  //     this.isActive = !this.enable;
  //   },
  // },
  // mounted() {
  //   this.toggleMenu (() =>{
  //     this.$refs.addEventListener("click", function() {
  //       wrapper.classList.toggle("toggled");
  //     })
  //   });
  //   toggleBtn.addEventListener("click", function () {
  //     wrapper.classList.toggle('toggled');
  //   });
  // },
};
</script>
