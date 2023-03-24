<template>
  <!-- <img src="./assets/images/logo.svg" alt="logo"> -->
  <!-- <nav class="header bg-dark d-flex justify-content-center;" style="z-index: 999">
    <img class="position-fixed" src="@/assets/images/logo.svg" alt="logo" />
  </nav> -->
  <section class="fs-6 fixed-top">
    <!-- <sidebar-menu :menu="menu" />  -->
    <sidebar-menu :menu="menu">
      <!-- <div> -->
      <!-- <img src="@/assets/images/logo.svg" alt="logo"> -->
      <!-- </div> -->
    </sidebar-menu>
  </section>
</template>

<script>
import { computed } from "vue";
//import { SidebarMenu } from "vue-sidebar-menu";
//import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
//import "@/vendors/vueSidebarMenu";

// import your local icon
import speedometerIcon from "@/assets/images/icon-speedometer2.svg";
import peopleIcon from "@/assets/images/icon-people-fill.svg";
import personIcon from "@/assets/images/icon-person-fill.svg";
import memberIcon from "@/assets/images/icon-star-member.svg";
import cardIcon from "@/assets/images/icon-card-heading.svg";
import logo from "@/assets/images/logo.svg";
//src\assets\images\icon-speedometer2.svg
const logoImg = {
  data() {
    return {
      src: logo,
    };
  },
  template: '<img :src="src">',
};
const sidebarWidth = computed(() => {
  return isCollapsed.value ? props.widthCollapsed : props.width;
});
export default {
  data() {
    return {
      menu: [
        {
          //header: "true",
          //component: logoImg,
          header: "創星球",
          hiddenOnCollapse: false,
        },
        {
          href: "/",
          title: "首頁",
          icon: {
            //adjust element
            element: "img",
            attributes: { src: speedometerIcon },
          },
        },
        {
          href: "/staff",
          title: "人員管理",
          icon: {
            //adjust element
            element: "img",
            attributes: { src: peopleIcon },
          },
          child: [
            {
              href: "/staff-add",
              title: "新增人員",
            },
            {
              href: "/staff-permissions",
              title: "權限管理",
            },
          ],
        },
        {
          href: "#",
          title: "會員管理",
          icon: {
            //adjust element
            element: "img",
            attributes: { src: personIcon },
          },
          child: [
            {
              href: "/charts/sublink",
              title: "實名認證",
            },
            {
              href: "/charts/sublink",
              title: "提領狀態",
            },
            {
              href: "/charts/sublink",
              title: "收益紀錄",
            },
          ],
        },
        {
          href: "#",
          title: "官方帳號管理",
          icon: {
            //adjust element
            element: "img",
            attributes: { src: memberIcon },
          },
          child: [
            {
              href: "/charts/sublink",
              title: "官方帳號分配管理",
            },
            {
              href: "/charts/sublink",
              title: "編輯個人主頁",
            },
          ],
        },
        {
          href: "#",
          title: "內容管理",
          icon: {
            //adjust element
            element: "img",
            attributes: { src: cardIcon },
          },
          child: [
            {
              href: "/charts/sublink",
              title: "直播禮物貼圖",
            },
            {
              href: "/charts/sublink",
              title: "發佈貼圖",
            },
            {
              href: "/charts/sublink",
              title: "頻道分類",
            },
            {
              href: "/charts/sublink",
              title: "音樂管理",
            },
          ],
        },
      ],
    };
  },
  // components: {
  //   SidebarMenu,
  // },
  // props: {
  //   widthCollapsed: {
  //     type: String,
  //     default: "105px",
  //   },
  // },
};
</script>
