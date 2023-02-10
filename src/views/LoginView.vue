<script setup>
import SidebarMenu from "../components/SidebarMenu.vue";
</script>
<template>
  <section class="img-fluid h-100vh login-bg">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-md-10 col-sm-12">
          <div class="bg-gray-bg rounded-4 p-lg-4 m-0 p-0">
            <div class="row m-4 pt-4 pb-4">
              <div class="col-md-6">
                <div>
                  <h2 class="text-light text-center mb-4">
                    創星球內部管理系統
                  </h2>
                  <div class="d-flex justify-content-center">
                    <img
                      src="../assets/images/img-login.svg"
                      alt="img-login.svg"
                    />
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <h2 class="text-light text-center mb-4">登入</h2>
                <!-- login form -->
                <form class="fs-6">
                  <div class="mb-3">
                    <label
                      for="exampleInputEmail1"
                      class="form-label text-light"
                      >E-mail</label
                    >
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="hi@westar.tw"
                    />
                    <!-- <div id="emailHelp" class="form-text text-light">We'll never share your email with anyone else.</div> -->
                  </div>
                  <div class="mb-2">
                    <label
                      for="exampleInputPassword1"
                      class="form-label text-light"
                      >Password</label
                    >
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="123456"
                    />
                  </div>
                  <div class="mb-4">
                    <!-- Button trigger modal -->
                    <a
                      href="#"
                      class="text-decoration-underline text-secondary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      >忘記密碼 ?</a
                    >
                  </div>
                  <div class="d-flex justify-content-center">
                    <button type="submit" class="btn btn-primary text-light">
                      登入
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
        </div>
      </div>
    </div>
  </section>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">忘記密碼?</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-center">請聯絡管理員: help@westar.tw</div>
        <div class="modal-footer d-flex justify-content-center">
          <button type="button" class="btn btn-light" data-bs-dismiss="modal">
            關閉
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//C:\Users\user\Documents\GitHub\starcreated-cms\src\assets\images\img-login-bg.svg
// import { useVuelidate } from '@vuelidate/core'
// import { required, email } from '@vuelidate/validators'
import { onMounted, ref } from "vue";
const handelOpenModal = () => {
  deleteModal.show();
};
export default {
  data() {
    return {
      data: {},
      fakedata: {
        accountId: "aa1234", //假帳號
        username: "Maëlyne Roux", //假姓名
      },
    };
  },
  mounted() {
    // console.log(import.meta.env.VITE_PATH);
    // const url = VITE_PATH;
    // this.$http.get(url).then((res)=>{
    //   console.log(res);
    // })
  },
};
</script>
