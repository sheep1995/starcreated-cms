<template>
  <div class="wrapper">
    <!-- Sidebar Menu -->
    <Sidebar />
    <!-- Sidebar Menu End -->
    <div class="page-content-wrapper">
      <div class="container-fluid">
        <div class="row">
          <!--  -->
          <section class="col-lg-12">
            <TopHeader />
            <nav class="bg-light pt-2 pb-2 rounded" aria-label="breadcrumb">
              <ol class="breadcrumb d-flex align-items-center mb-0 px-2">
                <router-link to="/dshboard" class="breadcrumb-item">首頁</router-link>
                <li class="breadcrumb-item active" aria-current="page">
                  人員管理
                </li>
              </ol>
            </nav>
            <!--  -->
            <div>
              <h2 class="text-primary mt-4 fs-3 fw-bold">
                <span><i class="bi bi-people-fill fs-3 text-secondary"></i></span>
                人員管理
              </h2>
            </div>
            <!--  -->
            <div class="col-12 mt-4 mb-2">
              <div class="d-flex justify-content-between">
                <h4 class="fs-5">帳號列表</h4>
                <router-link to="/staff-add" class="btn btn-secondary text-light"><i class="bi bi-person-fill-add"></i>
                  新增人員</router-link>
              </div>
            </div>
            <!--  -->
          </section>
          <!--  -->
          <!--  -->
          <div class="col-lg-12">
            <div class="table-responsive">
              <table class="table table-bordered align-middle">
                <thead class="table-primary">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">姓名</th>
                    <th scope="col">帳號</th>
                    <th scope="col">密碼</th>
                    <th scope="col">身分</th>
                    <th scope="col">操作</th>
                  </tr>
                </thead>
                <tbody class="table-group-divider">
                  <!-- <div class="d-flex align-items-center">
                    <strong>Loading...</strong>
                    <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                  </div> -->
                  <!-- v-for="item in products" :key="item.id" -->
                  <tr v-for="(item, index) in products" :key="index" >
                    <th scope="row"> {{ index + 1 }}</th>
                    <td>{{ item.userName }}</td>
                    <td v-if="item.email != ''">{{ item.email }}</td>
                    <td v-else-if="item.email.length == '0'"> NULL </td>
                    <td>{{ item.password }} </td>
                    <td>{{ item.identity }}</td>
                    <td>
                      <button type="button" class="btn btn-primary text-white me-2" data-bs-toggle="modal"
                        data-bs-target="#editModal" 
                        :id="item.userId"
                        @click="saveUserIdClick(item.userId)"
                        >
                        <i class="bi bi-pencil-fill"></i> 編輯
                      </button>
                      <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#delModal"
                        
                        @click="saveUserIdClick(item.userId)"
                        >
                        <i class="bi bi-trash-fill"></i> 刪除
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!--  -->
          <!-- {{ saveUserIdSelected }} -->
          <!--  -->
      </div>
    </div>
  </div>
  <!--  -->
  </div>
  <!--  -->
  <!-- Modal -->
  <div class="modal fade modal-lg" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header border-bottom-0">
          <h1 class="modal-title fs-5 text-primary" id="editModalLabel">
            編輯資料
          </h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-center">
          <!-- @click="getUsers(true, item)" -->
          <div class="row card-group">
            <div class="col-md-12 mb-4">
              <div class="col-md-12" v-if="isEditingStaff">
                <!-- <div class="col-md-12" v-if="isEditingStaff"> -->
                <!-- <h2 class=" text-center mb-4">登入</h2> -->
                <!-- edit form  -->
                <!-- v-if="userId === saveUserId" v-if="saveUserIdSelected"-->
                <form class="row fs-6 p-4" @submit.prevent="editStaffClick()"
                v-if="saveUserIdSelected"
                >
                  <div class="col-md-6 mb-3 text-start">
                    <label for="staffUserName" class="form-label">姓名</label>
                    <input type="text" class="form-control" id="staffUserName" v-model="saveUserIdSelected.userName" required />
                    <!-- <div id="emailHelp" class="form-text text-light">We'll never share your email with anyone else.</div> -->
                  </div>
                  <div class="col-md-6 mb-3 text-start">
                    <label for="staffEmail" class="form-label">帳號</label>
                    <input type="email" class="form-control" id="staffEmail" v-model="saveUserIdSelected.email" disabled />
                  </div>
                  <!--  -->
                  <div class="col-md-6 mb-2 text-start">
                    <label for="staffPassword" class="form-label">密碼</label>
                    <input type="text" class="form-control" id="staffPassword" v-model="saveUserIdSelected.password" required />
                  </div>
                  <!--  -->
                  <div class="col-md-6 mb-2 text-start">
                    <label for="idSelected" class="form-label">身份</label>
                    <select class="form-select" aria-label="idSelected" v-model="saveUserIdSelected.identity" required>
                      <option value="最高管理者">最高管理者</option>
                      <option value="一般管理者">一般管理者</option>
                    </select>
                  </div>
                  <!--  -->
                </form>
              </div>
              <div class="d-none" v-else ></div>
            </div>
          </div>
          <!--  -->
        </div>

        <div class="modal-footer d-flex justify-content-center border-top-0 mb-4">
          <!--  -->
          <div class="col-12">
            <div class="d-flex justify-content-center"> 
              <!-- <button type="submit" class="btn btn-primary text-light" data-bs-dismiss="modal" @click="editStaff()"> -->
                <button type="submit" class="btn btn-primary text-light" data-bs-dismiss="modal" @click="updateStaff()">
                確認資料
              </button>
            </div>
          </div>
          <!--  -->
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div class="modal fade" id="delModal" tabindex="-1" aria-labelledby="delModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="delModalLabel">刪除資料</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-center">確認要刪除這筆資料?</div>
        <div class="modal-footer d-flex justify-content-center">
          <button type="button" class="btn btn-light" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-primary text-white" @click="delStaff()"
          data-bs-dismiss="modal"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
  <!--  -->
</template>
<script>
import TopHeader from "@/components/TopHeader.vue";
import Sidebar from "@/components/Sidebar.vue";

import ProductService from "@/assets/js/ProductService.js";
const api = `${import.meta.env.VITE_PATH}/user`;
export default {
  name: "Staff",
  components: {
    TopHeader,
    Sidebar,
  },
  data() {
    return {
      products: [],
      tempProduct: {},

      dataAll: [],
      apiListLength: 0,
      index: 0,
      user: [],
      users: [],
      userId: '',
      isNew: false,
      //
      selectedUser: null,
      //newUserId:[],
      //del
      items: [],
      userIds: [] ,
      //save user id here
      saveUserId: null,
      saveUserIdSelected: {
        //email: '',
        userName: '',
        password:'',
        identity: '',
      },
      //edit true false
      isEditingStaff: false,
      // code: 230 更新成功
      editStaff: {
        userName: '',
        password:'',
        identity: '',
        //email: '',
      },
      //
      staff: {},
      //loading
      isLoading: true,
    };
  },
  productService: null,
  created() {
    this.productService = new ProductService();
  },
  // computed: {
  //   filterStaff() {
  //     return this.products.filter (product => product.saveUserId === this.userId);
  //   }
  // },
  methods: {
    // async getUser(userId) {
    //   try {
    //     const response = await axios.get(`/users/${userId}`)
    //     this.selectedUser = response.data.name
    //   } catch (error) {
    //     console.error(error)
    //   }
    // },

    // getUsers(isNew, item) {
    //   if (isNew) {
    //     this.tempProduct = {};
    //   } else {
    //     this.tempProduct = {...item};
    //   }
    getUsers() {
      const vm = this;
      this.$http.get(api).then((res) => {
        vm.isLoading = false;
        //const userId = res.data.data.list[0].userId;
        const userList = res.data.data.list;
        this.products = res.data.data.list;
        this.apiListLength = res.data.data.list;
        //this.userId = 'res.data.data.list[i].userId';
        this.userId = 'res.data.data.list[0].userId';

        this.users = res.data.data.list;
        this.user = this.users.find(user => user.userId === this.userId);

        // console.log(res.data.data.list[0].userId);
        // console.log(this.user);
        //console.log(res.data);
        //del
        // const updatedUsers = data.users.filter(user => user.userId !== this.userId);
        // this.$http.delete(api, { users: updatedUsers}).then((res) => {
        //   console.log("del!!");
        // })
        //
      });
    },
    //code: 230 更新成功
    getStaffInfo() {
      this.$http.get(`api/?userId=${this.dataAll.id}`).then((res) => {
        const editStaff = res.data.data.list;
          this.userName = editStaff.userName;
          this.email = editStaff.email;
          this.password = editStaff.password;
          this.identity = editStaff.identity;
          console.log(editStaff)
        //
      });
    },
    //save userId
    saveUserIdClick(saveUserId){
      this.saveUserId = saveUserId;
      //this.saveUserId.userName = saveUserIdSelectedName;
      const saveUserIdSelected = this.saveUserIdSelected;
      this.saveUserIdSelected = this.products.find( data => data.userId === saveUserId);
      this.isEditingStaff = true;
      //console.log(this.saveUserId); //check id save info
      //console.log(this.saveUserIdSelected); //check id save info

      // this.editStaff.userName = this.products.find( data => data.userName);
      // this.editStaff.password = this.products.find( data => data.password);
      // this.editStaff.identity = this.products.find( data => data.identity);
      this.editStaff.userName = saveUserIdSelected.userName;
      this.editStaff.password = saveUserIdSelected.password;
      this.editStaff.identity = saveUserIdSelected.identity;
      
      //this.editStaff.email = saveUserIdSelected.email;
    },
    //editStaff(product) {
    editStaffClick(item) {
      this.staff = item;
      //const index = this.items.findIndex(item =>item.userId === id);

      //isEditingStaff = true;
      //const userId = res.data.data.list[1].userId;
      //const newUserId = this.newUserId;
      // const newUserName = this.newUserName;
      // const newEmail = this.newEmail;
      // const newPassword = this.newPassword;
      // const newIdentity = this.newIdentity;
      //
      ////this.product = {...product};
      //
      // this.$http.patch(`api/:id`, {
      //this.$http.patch(`api/?userId=${this.dataAll.id}`, {
      this.$http.get( api+`/?userId=${this.saveUserId}`, {
        //this.$http.patch(`api/?userId=${newUserId}`, {
        // "userId": "6c241818-c33a-4cda-9b00-99c18be31532",
        data: {
        userName: userName,
        password: password,
        identity: identity,
        } 
      })
        .then((response) => {
          //console.log(response.data);
          // console.log(response.data.data.list[1]);
          // this.item.userName = newUserName;
          // this.item.email = newEmail;
          // this.item.password = newPassword;
          // this.item.identity = newIdentity;
        }).catch((err) => {
          //alert(err.data.result.message);
          console.log(err.data.result.message);
        });
    },
    //updateStaff
    // updateStaff(editStaff) {
    //   this.$http.patch(api+`/?userId=${this.saveUserId}`, {
    //     data: {
    //     //userId : this.saveUserId,
    //     userName: this.userName,
    //     email: this.email,
    //     password: this.password,
    //     identity: this.identity,
    //     }
    //   })
    //     .then((res) => {
    //       this.getUsers(saveUserId);
    //       this.userName = editStaff.userName;
    //       this.email = editStaff.email;
    //       this.password = editStaff.password;
    //       this.identity = editStaff.identity;
    //       console.log(res.data);
    //     }).catch((err) => {
    //       // console.log(err.data.result.message);
    //       console.log(err);
    //     }); 
    // },
    async updateStaff() {
    //this.getUsers();
      try {
        // const response = await this.axios.patch( api+`/?userId=${this.saveUserId}`, this.editStaff);
        const response = await this.axios.patch( api+`/?userId=${this.saveUserId}`, 
        {
          userName: this.saveUserIdSelected.userName,
          password: this.saveUserIdSelected.password,
          identity: this.saveUserIdSelected.identity,
        
        }
        );
        //console.log(response.data); // 印出更新後的使用者資料
        //this.cancelEditingUser(); // 關閉彈跳視窗並重新載入列表
        //this.loadUsers();
        const code = response.data.result.code;
          if (code === 230) {
          this.$swal({
            title: "更新成功",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
          this.getUsers();
          } else {
            this.$swal({
            title: "更新失敗",
            icon: "warning",
            showConfirmButton: false,
            timer: 1500,
          });
          this.getUsers();
          }
      } catch (error) {
        console.log(error.data);
      }
    },

    //save edit staff info
    async getStaff() {
      //this.saveUserIdSelected = this.products.find( data => data.userId === saveUserId);

      // const userId = this.saveUserId;
      //const response = await this.$http.get( api+`/?userId=${this.saveUserId}`, {
      const response = await this.$http.get( api , {
        data: {
          userName: this.editStaff.userName, 
          password: this.editStaff.password, 
          identity: this.editStaff.identity, 
        }
        //data: {userId : this.saveUserId}
      })
      //this.searchResults = response.data.data.find(data => data.list[0].userId === parseInt(saveUserId));
      //this.isEditingStaff = true;
      //let info = this.saveUserId;
      // saveUserIdSelected.email saveUserIdSelected  saveUserIdSelected.userName
      // this.editStaff.userName = response.data.data.list[3].userName;
      // this.editStaff.password = response.data.data.list[3].password;
      // this.editStaff.identity = response.data.data.list[3].identity;
      

    },
    // delStaff(id) {
    //   this.$http.delete(`api/${id}`, {
    //   })
    //     .then((response) => {
    //       console.log(response.data);
    //     //this.getUsers();
    //       //this.dataAll.splice(this.getIndex(item.id), 1)//get user list
    //     }).catch((err) => {
    //       //alert(err.data.result.message);
    //       console.log(err);
    //     });
    //   },
    delStaff() {
      // const index = this.items.findIndex(item =>item.userId === id);
      // this.items.splice(index, 1);
        this.$http.delete( api, {
          data: {userId : this.saveUserId} //傳入對應的USERID
      })
        .then((response) => {
          //console.log(response);
          const code = response.data.result.code;
          if (code === 240) {
          this.$swal({
            title: "刪除成功",
            //text: "請相關人員到信箱查看是否有收到驗證信",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
          // this.$router.push("/staff")
          this.getUsers();
          } else {
            this.$swal({
            title: "刪除失敗",
            icon: "warning",
            showConfirmButton: false,
            timer: 1500,
          });
          //this.$router.push("/")
          }
        //this.getUsers();
          //this.dataAll.splice(this.getIndex(item.id), 1)//get user list
        }).catch((err) => {
          //alert(err.data.result.message);
          console.log(err);
        });
      //console.log(saveUserId);

      // if(index !== -1){
      //   this.items.splice(index, 1);
      //   // this.$http.delete(`api/${id}`, {
      //   this.$http.delete( api, {
      //     data: {userId: this.userIds[index]} //傳入對應的USERID
      // })
      //   .then((response) => {
      //     console.log(response);
      //   //this.getUsers();
      //     //this.dataAll.splice(this.getIndex(item.id), 1)//get user list
      //   }).catch((err) => {
      //     //alert(err.data.result.message);
      //     console.log(err);
      //   });
      // }
    },
    // delStaff(item) {
    //   this.$http.delete(`api/${this.dataAll.id}`, {
    //   })
    //     .then((response) => {
    //       console.log(response.data);
    //       this.getUsers();
    //       this.dataAll.splice(this.getIndex(item.id), 1)//get user list
    //     }).catch((err) => {
    //       //alert(err.data.result.message);
    //       console.log(err.data.result);
    //     });
    // },
    //
    findIndexById(id) {
      let index = -1;
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].userId === id) {
          index = i;
          break;
        }
      }
      return index;
    },
    //
    getIndex(id) {
      return this.products.findIndex((el) => el.id == id)
    },
    //
  },
  mounted() {
    // this.productService
    //   .getProductsSmall()
    //   .then((data) => (this.products = data));
    // //
    // console.log(import.meta.env.VITE_PATH);
    // console.log(import.meta.env.VITE_TEXT);
    // const url = import.meta.env.VITE_PATH;
    //const foundData = this.products.find(item => item.userId === saveUserId);
    this.getUsers();
    this.getStaff();
    this.saveUserIdClick();
    //
  },
};
</script>
