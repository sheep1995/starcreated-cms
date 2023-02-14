<script setup>
import SidebarMenu from "@/components/SidebarMenu.vue";
import TopHeader from "@/components/TopHeader.vue";
</script>
<template>
  <section class="container">
    <TopHeader/>

    <nav class="bg-light pt-2 pb-2 rounded" aria-label="breadcrumb">
      <ol class="breadcrumb d-flex align-items-center mb-0 px-2">
        <li class="breadcrumb-item"><a href="#">首頁</a></li>
        <li class="breadcrumb-item"><a href="#">人員管理</a></li>
        <li class="breadcrumb-item active" aria-current="page">新增人員</li>
      </ol>
    </nav>
    <!--  -->
    <div>
      <h2 class="text-primary mt-4">新增人員</h2>
    </div>
    <!--  -->
  </section>
  <!--  -->
  <!--  -->
  <section class="container">
    <div class="row card-group">
      <div class="col-md-12 mb-4">
        <div class="col-md-12">
          <!-- <h2 class=" text-center mb-4">登入</h2> -->
          <!-- login form -->
          <form class="row fs-6 mt-4">
            <div class="col-md-6 mb-3 text-start">
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
            <div class="col-md-6 mb-3 text-start">
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
            <div class="col-md-6 mb-2 text-start">
              <label for="exampleInputPassword1" class="form-label">密碼</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="123456"
              />
            </div>
            <!--  -->
            <div class="col-md-6 mb-2 text-start">
              <label for="form-select" class="form-label">身份</label>
              <select class="form-select" aria-label="Default select example">
                <option selected>選擇身份</option>
                <option value="1">最高管理員</option>
                <option value="2">行銷人員</option>
                <option value="3">開發人員</option>
              </select>
            </div>
            <!--  -->
            <div class="col-12 mt-4">
              <div class="d-flex justify-content-center">
                <button type="submit" class="btn btn-primary text-light">
                  確認新增
                </button>
              </div>
            </div>
            <!--  -->
          </form>
        </div>
      </div>
    </div>
  </section>
  <!--  -->
</template>
<script>
export default {
  data() {
    return {
      products: null,
    };
  },
};
</script>