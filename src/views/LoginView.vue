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
                    <img src="../assets/images/img-login.svg" alt="img-login.svg" />
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <h2 class="text-light text-center mb-4">登入</h2>
                <!-- login form -->
                <form class="fs-6" @submit.prevent="login">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-light">E-mail</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                      placeholder="hi@westar.tw" v-model="user.email" required />
                    <!-- <div id="emailHelp" class="form-text text-light">We'll never share your email with anyone else.</div> -->
                  </div>
                  <div class="mb-2">
                    <label for="loginPw" class="form-label text-light">密碼</label>
                    <!-- <Password id="loginPw" v-model="user.password" toggleMask placeholder="Abc514913" :feedback="false" ></Password> -->
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Abc123456"
                    v-model="user.password" required />
                  <!-- <button class="button" @click="toggleShow"><span class="icon is-small is-right">
                        <i class="bi" :class="{ 'bi-eye-slash-fill': showPassword, 'bi-eye-fill': !showPassword }"></i>
                      </span>
                    </button> -->
                  </div>
                  <div class="mb-4">
                    <!-- Button trigger modal -->
                    <a href="#" class="text-decoration-underline text-secondary" data-bs-toggle="modal"
                      data-bs-target="#exampleModal">忘記密碼 ?</a>
                  </div>
                  <div class="d-flex justify-content-center">
                    <!-- <button type="submit" class="btn btn-primary text-light" @click="showAlert"> -->
                      <button type="submit" class="btn btn-primary text-light">
                      登入
                    </button>
                    <!-- <a href="./"  class="btn btn-primary text-light">登入</a> -->
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
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">忘記密碼?</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
//import { onMounted, ref } from "vue";
// const handelOpenModal = () => {
//   deleteModal.show();
// };
// console.log(import.meta.env.VITE_PATH);
// console.log(`${import.meta.env.VITE_PATH}/login`);
// console.log(import.meta.env.VITE_PATH2);

// const api = `${import.meta.env.VITE_PATH}/login`;
// axios({
//   headers: { 'Content-Type': 'application/json' },
//     method: 'post',
//     url: 'api',
// });
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
const api = `${import.meta.env.VITE_PATH}/login`;


export default {
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      data: {},
      //1.1 LOGIN
      user: {
        "email": "rd14@westar.tw",
        "password": "Abc123456"
      },
      showPassword: false,
      isLoggedIn: false,
    };
  },
  validations() {
        return {
            email: {
                required,
                email
            },
            password: {
                required
            },
        }
    },
  methods: {
    // login() {
    //   const api = ' ';
    //   axios.post(api, this.user).then((response) => {
    //     const { token, expired } = response.data;
    //     //寫入 cookie token
    //    // expires 設置有效時間
    //     // document.cookie = `OurToken=${token};expires=${new Date(expired)}; path=/`;
    //     // this.$router.push("/");
    //   }).catch((err) => {
    //     alert(err.response.data.message);
    //   });
    // }
    login() {
      this.$http.post(api, this.user).then((response) => {
        const { expired } = response.data;
        const message = response.data.result.message;
        let self = this;
        //const { token, expired } = response.data.accessToken;
        //const { token } = response.data.accessToken;
        const { token } = response.data;
        document.cookie = `ourToken=${token};expires=${new Date(expired)};`
        document.cookie = `expires=${new Date(expired)};`
        console.log(response.data.result.message);
        console.log(response.data.result.code);
        console.log(response.data.result);
        if (message === "登入成功") {
          this.$swal({
            title: "登入成功",
            //text: "請相關人員到信箱查看是否有收到驗證信",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          }).then(function () {
            //window.location.href = "/starcreated-cms/";
            //this.$router.push('/starcreated-cms/');
            self.$router.push({name: "Home"});
            // this.isLoggedIn = true;
          });
          } else {
            this.$swal({
            title: "登入失敗",
            text: "請確認資料是否輸入正確",
            icon: "warning",
            showConfirmButton: false,
            timer: 1500,
          });
          }
        //alert(response.data.result.message);
      }).catch((error) => {
        //alert(error.data.result.message);
        //alert(error.response, '請確認資料是否輸入正確');
        this.$httpMessageState(error.response, '請確認資料是否輸入正確');
    });
    },
    showAlert() {
      this.$http.post(api, this.user).then((response) => {
        const message = response.data.result.message;
        //console.log(response.data.result.message);
        if (message === "登入成功") {
          this.$swal({
            title: "登入成功",
            //text: "請相關人員到信箱查看是否有收到驗證信",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          }).then(function () {
            //window.location.href = "/starcreated-cms/";
            this.$router.push('/starcreated-cms/');
          });
        } else {
          this.$swal({
            title: "登入失敗",
            text: "信箱密碼有誤，請確認資料是否輸入正確",
            icon: "warning",
            showConfirmButton: false,
            timer: 1500,
          })
        }
      })
      // .catch((err) =>{
      //   //console.log(err.data.result.message);
      //   this.$swal({
      //   title: "登入失敗",
      //   text: "請確認資料是否輸入正確",
      //   icon: "warning",
      //   showConfirmButton: false,
      //   timer: 1500,
      // })
      // });
    },
    //
    toggleShow() {
      this.showPassword = !this.showPassword;
    }
    //
  },

};
</script>
<!-- <style lang="scss">
  @import "@/assets/scss/vendors/primevuePw.scss";
</style> -->
