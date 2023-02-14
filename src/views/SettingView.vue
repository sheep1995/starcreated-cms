<script setup>
//import TheWelcome from "../components/TheWelcome.vue";
//import SidebarMenu from "../components/SidebarMenu.vue";
import SidebarMenu2 from "../components/SidebarMenu2.vue";
import { RouterLink, RouterView } from "vue-router";
import TopHeader from "@/components/TopHeader.vue";

</script>
<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <!--  -->
      <SidebarMenu2 />
      <!--  -->
      <div class="col py-3">
        <!-- <RouterView /> -->
        <section class="container">
          <TopHeader/>
      
          <nav class="bg-light pt-2 pb-2 rounded" aria-label="breadcrumb">
            <ol class="breadcrumb d-flex align-items-center mb-0 px-2">
              <li class="breadcrumb-item"><a href="#">首頁</a></li>
              <li class="breadcrumb-item active" aria-current="page">設定</li>
            </ol>
          </nav>
          <!--  -->
          <!--  -->
          <div>
            <h2 class="text-primary mt-4">
              <span><i class="bi bi-gear-fill fs-4 text-secondary"></i></span>
              設定
            </h2>
          </div>
          <!--  -->
          <div class="col-12 mt-4 mb-2">
            <h4 class="fs-5">個人資料</h4>
          </div>
          <!--  -->
          <div class="row card-group">
            <div class="col-md-12 mb-4">
              <div class="col-md-12">
                <!-- <h2 class=" text-center mb-4">登入</h2> -->
                <!-- login form -->
                <form class="row fs-6 p-4 border border-0 shadow rounded-4">
                  <div class="col-md-6 mb-3">
                    <label for="exampleInputEmail1" class="form-label">姓名</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="王曉明"
                    />
                    <!-- <div id="emailHelp" class="form-text text-light">We'll never share your email with anyone else.</div> -->
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="exampleInputEmail1" class="form-label">帳號</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="hi@westar.tw"
                    />
                    <!-- <div id="emailHelp" class="form-text text-light">We'll never share your email with anyone else.</div> -->
                  </div>
                  <!--  -->
                  <div class="col-md-6 mb-2">
                    <label for="exampleInputPassword1" class="form-label">密碼</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="123456"
                    />
                  </div>
                  <!--  -->
                  <div class="col-md-6 mb-2">
                    <label for="form-select" class="form-label">身份</label>
                    <select class="form-select" aria-label="Default select example">
                      <option selected>選擇身份</option>
                      <option value="1">最高管理員</option>
                      <option value="2">行銷人員</option>
                      <option value="3">開發人員</option>
                    </select>
      
                    <!-- <label for="exampleInputPassword1" class="form-label">身份</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="行銷人員"
                    /> -->
                  </div>
                  <!-- <h5>Validation Message</h5>
                      <div class="formgroup-inline" style="margin-bottom:.5rem">
                          <label for="username" class="p-sr-only">Username</label>
                          <InputText id="username" placeholder="Username" class="p-invalid" />
                          <InlineMessage>Username is required</InlineMessage>
                      </div> -->
                  <!--  -->
                </form>
                            <!--  -->
                            <div class="col-12 mt-4">
                              <div class="d-flex justify-content-center">
                                <button type="submit" class="me-4 btn btn-primary text-light">
                                  返回
                                </button>
                                <button type="submit" class="btn btn-primary text-light">
                                  儲存
                                </button>
                              </div>
                            </div>
      
                            <!--  -->
              </div>
            </div>
          </div>
          <!--  -->
        </section>
        <!--  -->
      </div>
      <!--  -->
    </div>
  </div>
</template>
