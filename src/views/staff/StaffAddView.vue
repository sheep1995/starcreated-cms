<script setup>
import SidebarMenu2 from "@/components/SidebarMenu2.vue";
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
            <TopHeader />

            <nav class="bg-light pt-2 pb-2 rounded" aria-label="breadcrumb">
              <ol class="breadcrumb d-flex align-items-center mb-0 px-2">
                <router-link to="/" class="breadcrumb-item">首頁</router-link>
                <router-link to="/staff" class="breadcrumb-item">人員管理</router-link>
                <li class="breadcrumb-item active" aria-current="page">
                  新增人員
                </li>
              </ol>
            </nav>
            <!--  -->
            <div>
              <h2 class="text-primary mt-4 fs-3 fw-bold">新增人員</h2>
            </div>
            <!--  -->
          </section>
          <!--  -->
          <section class="col-lg-12">
            <div class="row card-group">
              <div class="col-md-12 mb-4">
                <div class="col-md-12">
                  <!-- <h2 class=" text-center mb-4">登入</h2> -->
                  <!-- login form -->
                  <form class="row fs-6 mt-4">
                    <div class="col-md-6 mb-3 text-start">
                      <label for="exampleInputName" class="form-label"
                        >姓名</label
                      >
                      <input
                        type="name"
                        class="form-control"
                        id="exampleInputName"
                        placeholder="王曉明"
                      />
                      <!-- <div id="emailHelp" class="form-text text-light">We'll never share your email with anyone else.</div> -->
                    </div>
                    <div class="col-md-6 mb-3 text-start">
                      <label for="addEmail" class="form-label"
                        >帳號</label
                      >
                      <input
                        type="email"
                        class="form-control"
                        id="addEmail"
                        aria-describedby="emailHelp"
                        placeholder="hi@westar.tw"
                      />
                      <!-- <div id="emailHelp" class="form-text text-light">We'll never share your email with anyone else.</div> -->
                    </div>
                    <!--  -->
                    <div class="col-md-6 mb-2 text-start">
                      <label for="addPassword" class="form-label"
                        >密碼</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="addPassword"
                        placeholder="123456"
                      />
                    </div>
                    <!--  -->
                    <div class="col-md-6 mb-2 text-start">
                      <label for="form-select" class="form-label">身份</label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>選擇身份</option>
                        <option value="1">最高管理員</option>
                        <option value="2">行銷人員</option>
                        <option value="3">開發人員</option>
                      </select>
                    </div>
                    <!--  -->
                    <div class="col-12 mt-4">
                      <div class="d-flex justify-content-center">
                        <button
                          type="button"
                          @click="showAlert"
                          class="btn btn-primary text-light"
                        >
                          確認新增
                        </button>
                      </div>
                    </div>
                    <!--  -->
                  </form>
                </div>
              </div>
            </div>
            <!--  -->
          </section>
          <!--  -->
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: null,
    };
  },
  methods: {
    showAlert() {
      // Use sweetalert2
      //this.$swal('Hello Vue world!!!');
      //
      this.$swal({
        title: "新增成功",
        text: "請相關人員到信箱查看是否有收到驗證信",
        icon: "success",
        //showCancelButton: true,
        confirmButtonColor: "$primary",
        //cancelButtonColor: "#d33",
        confirmButtonText: "關閉",
      });
    },
  },
};
</script>