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
                <router-link to="/dshboard" class="breadcrumb-item">首頁</router-link>
                <router-link to="/staff" class="breadcrumb-item">人員管理</router-link>
                <li class="breadcrumb-item active" aria-current="page">
                  新增人員
                </li>
              </ol>
            </nav>
            <!--  -->
              <!-- <div
                class="alert bg-danger mt-4 mb-4 text-white fw-medium"
                role="alert"
              >
              此信箱已被使用
              </div> -->
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
                  <!-- add user form  @click.prevent="addNewUser()"-->
                  <form class="row fs-6 mt-4" @submit.prevent="addStaff" >
                    <!-- <form class="row fs-6 mt-4"  @submit.prevent="addStaff"> -->
                    <div class="col-md-6 mb-3 text-start">
                      <label for="exampleInputName" class="form-label"
                        >姓名</label
                      >
                      <input
                        type="name"
                        class="form-control"
                        id="exampleInputName"
                        placeholder="王曉明"
                        v-model="addUser.userName"
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
                        v-model="addUser.email"
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
                        v-model="addUser.password"
                      />
                    </div>
                    <!--  -->
                    <div class="col-md-6 mb-2 text-start">
                      <label for="form-select" class="form-label">身份</label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        v-model="addUser.identity"
                        required 
                      >
                        <option disabled value="" class="text-gray-500" >選擇身份</option>
                        <option v-for="identityOption in identityOptions" :value="identityOption.value" > {{ identityOption.text }}</option>
                      </select>
                    </div>
                    <!--  -->
                    <div class="col-12 mt-4">
                      <div class="d-flex justify-content-center">
                        <button
                          type="button"
                          class="btn btn-primary text-light"
                          @click="addStaff()"
                          :disabled="isFormInvalid()"
                        >
                        <!-- @click="addStaff" -->
                        <!-- @click.prevent="addNewUser(userName, email, password, identity)" -->
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
import TopHeader from "@/components/TopHeader.vue";
import Sidebar from "@/components/Sidebar.vue";
const api = `${import.meta.env.VITE_PATH}/user`;

export default {
  name: "Add",
  components: {
    TopHeader,
    Sidebar,
  },
  data() {
    return {
      products: null,
      addUser: {
        username: '',
        email: '',
        password: '',
        identity: '',
      },
      identityOptions: [
        { text: '一般管理者', value: '一般管理者' },
        { text: '最高管理者', value: '最高管理者' },
      ],
      isLoading: false,
    };
  },
  methods: {
    addStaff(){
      const vm = this;
      vm.isLoading = true;
      this.$http.post(api, this.addUser).then((response) => {
        const code = response.data.result.code;
        // let self = this;
        console.log(response.data.result);
        if (code === 210) {
          this.$swal({
            title: "新增成功",
            text: "請相關人員到信箱查看是否有收到驗證信",
            icon: "success",
            confirmButtonColor: "$primary",
            confirmButtonText: "關閉",
          }).then(function () {
          //self.$router.push({ name: "Add"});
          location.reload();
          vm.isLoading = false;
          });
          } else {
            this.$swal({
            title: "資料輸入有誤",
            //text: "請確認資料欄位是否都有填寫!",
            icon: "warning",
            showConfirmButton: false,
            timer: 1500,
          });
          
          }
        //alert(response.data.result.message);
      }).catch((error) => {
        //this.$httpMessageState(error.response, '請確認資料欄位是否都有填寫');
        //console.log(error);
        vm.isLoading = false;
    });
    //
    },
    isFormInvalid() {
      const { userName, email, password, identity } = this.addUser;
      return !userName || !email || !password || !identity
    },
  },
};
</script>
