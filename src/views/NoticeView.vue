<script setup>
//import TheWelcome from "../components/TheWelcome.vue";
import SidebarMenu from "../components/SidebarMenu.vue";
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <RouterView />
  <!-- <main>
    <TheWelcome />
  </main> -->
  <section>
    <SidebarMenu />
  </section>
  <section class="container">
    <header class="p-3 mb-3 border-bottom">
      <div>
        <div class="d-flex flex-wrap align-items-center justify-content-end">
          <ul class="nav col-12 col-lg-auto me-lg-right mb-2 mb-md-0 text-end">
            <!-- <li><a href="#" class="nav-link px-2 link-secondary">設定</a></li> -->
            <li class="position-relative nav-link px-2 link-dark">
              <!-- <a href="#" class="nav-link px-2 link-dark"> -->
              <RouterLink to="/notice"
                ><i class="bi bi-bell fs-5"></i
              ></RouterLink>
              <span
                class="
                  position-absolute
                  end-0
                  translate-middle-x
                  badge
                  border border-light
                  rounded-circle
                  bg-danger
                  p-2
                "
                style="padding: 0.25rem !important"
                ><span class="visually-hidden">unread messages</span></span
              >
              <!-- </a> -->
            </li>
            <li class="nav-link px-2 link-dark mt-2">
              <RouterLink to="/setting">設定</RouterLink>
              <!-- <a href="#" class="nav-link px-2 link-dark mt-2">設定</a> -->
            </li>
            <li class="nav-link px-2 link-dark mt-2">
              <RouterLink to="/login">登出</RouterLink>
              <!-- <a href="#" class="nav-link px-2 link-dark mt-2">登出</a> -->
            </li>
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
    <!--  -->
    <!--  -->
    <div>
      <h2 class="text-primary mt-4">
        <span><i class="bi bi-bell fs-4 text-secondary"></i></span>
        通知紀錄
      </h2>
    </div>
    <!--  -->
    <div class="row card-group">
      <!--  -->
      <div class="col-12 mt-4 mb-2">
        <h4 class="fs-5">未讀通知</h4>
      </div>
      <div class="col-md-12 mb-4">
        <div class="card border border-0 shadow rounded-4 h-100" style="border-style: dashed">
          <div class="card-body text-dark d-flex align-items-center">
            <div>
              <h5 class="card-title text-darky fs-6">01/09</h5>
            </div>
            <div>
              <ul class="list-unstyled ms-4">
                <li class="fs-6">Boss</li>
                <li class="fs-6 fw-bold">已將你設為管理員</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="col-md-12 mb-4">
        <div class="card border border-0 shadow rounded-4 h-100" style="border-style: dashed">
          <div class="card-body text-dark d-flex align-items-center">
            <div>
              <h5 class="card-title text-darky fs-6">01/09</h5>
            </div>
            <div>
              <ul class="list-unstyled ms-4">
                <li class="fs-6">綿羊</li>
                <li class="fs-6 fw-bold">批准了你的申請</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
    </div>
    <!--  -->
    <!--  -->
    <div class="col-12 mt-4 mb-2">
      <h4 class="fs-5">歷史訊息</h4>
    </div>
    <!--  -->
    <div class="col-md-12 mb-4">
      <div class="card border border-0 shadow rounded-4 h-100" style="border-style: dashed">
        <div class="card-body text-dark d-flex align-items-center">
          <div>
            <h5 class="card-title text-darky fs-6">01/08</h5>
          </div>
          <div>
            <ul class="list-unstyled ms-4">
              <li class="fs-6">珮祺</li>
              <li class="fs-6 fw-bold">批准了你的申請</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="d-flex justify-content-center"><button type="submit" class="btn btn-primary text-light"> 返回 </button></div>
    <!--  -->
  </section>
</template>
