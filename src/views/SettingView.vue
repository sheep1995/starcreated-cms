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
    <div class="col-12 mt-4">
      <h4>個人資料</h4>
    </div>
    <!--  -->
    <div class="row card-group">
      <div class="col-md-12 mb-4">
        <div class="col-md-6">
          <!-- <h2 class=" text-center mb-4">登入</h2> -->
          <!-- login form -->
          <form class="fs-6">
            <div class="mb-3">
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
            <div class="mb-3">
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
            <div class="mb-2">
              <label for="exampleInputPassword1" class="form-label">密碼</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="123456"
              />
            </div>
            <!--  -->
            <div class="mb-2">
              <label for="exampleInputPassword1" class="form-label">身份</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="行銷人員"
              />
            </div>
            <!--  -->
            <div class="d-flex justify-content-between">
              <button type="submit" class="btn btn-primary text-light">
                返回
              </button>
              <button type="submit" class="btn btn-primary text-light">
                儲存
              </button>
            </div>
            <!--  -->
            <!-- <h5>Validation Message</h5>
                <div class="formgroup-inline" style="margin-bottom:.5rem">
                    <label for="username" class="p-sr-only">Username</label>
                    <InputText id="username" placeholder="Username" class="p-invalid" />
                    <InlineMessage>Username is required</InlineMessage>
                </div> -->
            <!--  -->
          </form>
        </div>
      </div>
    </div>
    <!--  -->
  </section>
</template>
