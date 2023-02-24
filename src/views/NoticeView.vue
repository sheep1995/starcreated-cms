<script setup>
import { RouterLink, RouterView } from "vue-router";
import TopHeader from "@/components/TopHeader.vue";
import Sidebar from "@/components/Sidebar.vue";
</script>
<template>
  <div class="wrapper">
    <!-- Sidebar Menu -->
    <Sidebar />
    <!-- Sidebar Menu End -->
    <div class="page-content-wrapper">
      <div class="container-fluid">
        <div class="row">
        <section class="col-lg-12">
          <TopHeader/>
          <nav class="bg-light pt-2 pb-2 rounded" aria-label="breadcrumb">
            <ol class="breadcrumb d-flex align-items-center mb-0 px-2">
              <router-link to="/" class="breadcrumb-item">首頁</router-link>
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
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>
