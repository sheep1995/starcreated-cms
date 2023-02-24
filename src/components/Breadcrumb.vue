<template>
  <nav class="bg-light pt-2 pb-2 rounded" aria-label="breadcrumb">
    <!-- <ol class="breadcrumb d-flex align-items-center mb-0 px-2">
      <li class="breadcrumb-item"><a href="#">首頁</a></li>
      <li class="breadcrumb-item"><a href="#">會員管理</a></li>
      <li class="breadcrumb-item active" aria-current="page">
        訂閱人數
      </li>
    </ol> -->
    <ol class="breadcrumb d-flex align-items-center mb-0 px-2">
      <li v-for="(item, i) in breadcrumbList" :key="i" class="pl-2 breadcrumb-item">
        <router-link :to="item.path">{{ item.meta.title }}</router-link>
      </li>
      
    </ol>
  </nav>
<!-- 0 -->

<!-- <Breadcrumb :home="home" :model="items">
  <template #item="{item}">
      <router-link :to="item.to" custom v-slot="{href, route, navigate, isActive, isExactActive}">
          <a :href="href" @click="navigate" :class="{'active-link': isActive, 'active-link-exact': isExactActive}">{{route.fullPath}}</a>
      </router-link>
  </template>
</Breadcrumb> -->


<!--  -->
</template>
<script>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'

// import Breadcrumb from 'primevue/breadcrumb';


export default {
  name: 'Breadcrumb',
  setup () {
    const route = useRoute()
    const breadcrumbList = ref([])
    const isHome = () => {
      return route.name === 'Home'
    }
    const getBreadcrumbs = () => {
      let matched = route.matched
      if (!isHome(matched[0])) {
        matched = [{ path: '/', meta: { title: '首頁' } }].concat(matched)
      }
      breadcrumbList.value = matched
    }
    watch(route, () => {
      getBreadcrumbs()
    })
    onMounted(() => {
      getBreadcrumbs()
    })
    return { breadcrumbList, getBreadcrumbs }
  }
}
</script>
