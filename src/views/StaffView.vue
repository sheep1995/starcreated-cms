<script setup>
import SidebarMenu from "../components/SidebarMenu.vue";
</script>

<template>
  <!-- <div class="">
    <nav class="header bg-dark" style="z-index: 999">
      <img class="position-fixed" src="@/assets/images/logo.svg" alt="logo" />
    </nav>
  </div> -->
  <section>
    <SidebarMenu />
  </section>
  <section class="container">
    <header class="p-3 mb-3 border-bottom">
      <div>
        <div class="d-flex flex-wrap align-items-center justify-content-end">
          <ul class="nav col-12 col-lg-auto me-lg-right mb-2 mb-md-0 text-end">
            <!-- <li><a href="#" class="nav-link px-2 link-secondary">設定</a></li> -->
            <li>
              <a href="#" class="nav-link px-2 link-dark position-relative">
                <i class="bi bi-bell"></i>
                <span
                  class="position-absolute translate-middle badge border border-light rounded-circle bg-danger p-2"
                  ><span class="visually-hidden">unread messages</span></span
                >
              </a>
            </li>
            <li><a href="#" class="nav-link px-2 link-dark">設定</a></li>
            <li><a href="#" class="nav-link px-2 link-dark">登出</a></li>
          </ul>

          <!-- <div class="dropdown text-end">
            <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              設定              
            </a>
            <ul class="dropdown-menu text-small">
              <li><a class="dropdown-item" href="#">New project...</a></li>
              <li><a class="dropdown-item" href="#">Settings</a></li>
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Sign out</a></li>
            </ul>
          </div> -->
        </div>
      </div>
    </header>

    <nav class="bg-light pt-2 pb-2 rounded" aria-label="breadcrumb">
      <ol class="breadcrumb d-flex align-items-center mb-0 px-2">
        <li class="breadcrumb-item"><a href="#">首頁</a></li>
        <li class="breadcrumb-item active" aria-current="page">通知紀錄</li>
      </ol>
    </nav>
    <div class="alert alert-warning mt-4 mb-4 text-dark" role="alert">
      Hi, BOSS 歡迎回來 ~ 您有 10 封訊息未讀!
    </div>
    <div>
      <h2 class="text-primary">
        <span
          ><img
            src="../assets/images/icon-card-list-color.svg"
            alt="icon-card-list-color"
        /></span>
        代辦清單
      </h2>
    </div>
  </section>
</template>
