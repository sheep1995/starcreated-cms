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
                  <form class="row fs-6 mt-4"  @submit.prevent="addStaff">
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
                        required 
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
                        placeholder="Abc123456"
                        required 
                      />
                    </div>
                    <!--  -->
                    <div class="col-md-6 mb-2 text-start">
                      <label for="form-select" class="form-label">身份</label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        required 
                      >
                        <option selected>選擇身份</option>
                        <option value="最高管理者">最高管理者</option>
                        <option value="一般管理者">一般管理者</option>
                        <!-- <option value="3">開發人員</option> -->
                      </select>
                    </div>
                    <!--  -->
                    <div class="col-12 mt-4">
                      <div class="d-flex justify-content-center">
                        <button
                          type="button"
                          @click="addStaff"
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
const api = `${import.meta.env.VITE_PATH}/user`;

export default {
  data() {
    return {
      products: null,
      addUser: null,
    };
  },
  methods: {
    addStaff(){
      this.$http.post(api, this.addUser).then((response) => {
        const message = response.data.result.message;
        let self = this;
        console.log(response.data.result);
        if (message === "新增成功") {
          this.$swal({
            title: "新增成功",
            text: "請相關人員到信箱查看是否有收到驗證信",
            icon: "success",
            confirmButtonColor: "$primary",
            confirmButtonText: "關閉",
          });
          } else {
            this.$swal({
            title: "資料輸入有誤",
            text: "請確認資料欄位是否都有填寫!",
            icon: "warning",
            showConfirmButton: false,
            timer: 1500,
          });
          }
        //alert(response.data.result.message);
      }).catch((error) => {
        //this.$httpMessageState(error.response, '請確認資料欄位是否都有填寫');
        console.log(error);

    });
    },
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