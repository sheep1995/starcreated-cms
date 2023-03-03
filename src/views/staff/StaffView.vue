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
                  <!-- v-for="item in products" :key="item.id" -->
                  <tr v-for="(item, index) in products" :key="index">
                    <th scope="row"> {{ index + 1 }}</th>
                    <td>{{ item.userName }}</td>
                    <td v-if="item.email != ''">{{ item.email }}</td>
                    <td v-else-if="item.email.length == '0'"> NULL </td>
                    <td>{{ item.password }} </td>
                    <td>{{ item.identity }}</td>
                    <td>
                      <button type="button" class="btn btn-primary text-white me-2" data-bs-toggle="modal"
                        data-bs-target="#editModal" :id="item.userId" @click="getUsers(userId)">
                        <i class="bi bi-pencil-fill"></i> 編輯
                      </button>
                      <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#delModal"
                        :id="item.userId" 
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
      </div>
    </div>
  </div>
  <!--  -->
  <!--  -->
  <!-- <div class="container">
          <div class="card">
            <DataTable :value="products" responsiveLayout="scroll">
              <template #header> </template>
              <Column field="code" header="Code"></Column>
              <Column field="name" header="Name"></Column>
              <Column field="category" header="Category"></Column>
              <Column field="quantity" header="Quantity"></Column>
              <Column field="inventoryStatus" header="Status">
                <template #body="slotProps">
                  <span
                    :class="
                      'product-badge status-' +
                      (slotProps.data.inventoryStatus
                        ? slotProps.data.inventoryStatus.toLowerCase()
                        : '')
                    "
                    >{{ slotProps.data.inventoryStatus }}</span
                  >
                </template>
              </Column>
              <Column field="rating" header="Rating">
                <template #body="slotProps">
                  <Rating
                    :modelValue="slotProps.data.rating"
                    :readonly="true"
                    :cancel="false"
                    />
                  </template>
                </Column>
            </DataTable>
          </div>
        </div> -->
  <!--  -->
    <!-- test -->
    <!-- <div class="mb-4">
            {{ dataAll }}
          </div>
          {{ data }}
          {{ data2 }} -->
    <!-- test end -->
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
          <!--  -->
          <div class="row card-group">
            <div class="col-md-12 mb-4">
              <div v-if="selectedUser">
                123{{ selectedUser }}
                <div>
                  {{ selectedUser.userName }}
                </div>
              </div>
              <div class="col-md-12">
                <!-- <h2 class=" text-center mb-4">登入</h2> -->
                <!-- edit form -->
                <form class="row fs-6 p-4">
                  <div class="col-md-6 mb-3 text-start">
                    <label for="staffUserName" class="form-label">姓名</label>
                    <input type="text" class="form-control" id="staffUserName" />
                    <!-- {{ item.name }} -->
                    <!-- <div id="emailHelp" class="form-text text-light">We'll never share your email with anyone else.</div> -->
                  </div>
                  <div class="col-md-6 mb-3 text-start">
                    <label for="staffEmail" class="form-label">帳號</label>
                    <input type="email" class="form-control" id="staffEmail" disabled />
                    <!-- <div id="emailHelp" class="form-text text-light">We'll never share your email with anyone else.</div> -->
                  </div>
                  <!--  -->
                  <div class="col-md-6 mb-2 text-start">
                    <label for="staffPassword" class="form-label">密碼</label>
                    <input type="text" class="form-control" id="staffPassword" placeholder="Abc123456" />
                  </div>
                  <!--  -->
                  <div class="col-md-6 mb-2 text-start">
                    <label for="form-select" class="form-label">身份</label>
                    <select class="form-select" aria-label="Default select example">
                      <option value="最高管理者">最高管理者</option>
                      <option value="一般管理者" selected>一般管理者</option>
                    </select>
                  </div>
                  <!--  -->
                </form>
              </div>
            </div>
          </div>
          <!--  -->
        </div>

        <div class="modal-footer d-flex justify-content-center border-top-0 mb-4">
          <!--  -->
          <div class="col-12">
            <div class="d-flex justify-content-center">
              <button type="submit" class="btn btn-primary text-light" data-bs-dismiss="modal" @click="editStaff">
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
          <button type="button" class="btn btn-primary text-white" @click="delStaff">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
  <!--  -->
</template>
<script>
import ProductService from "@/assets/js/ProductService.js";

const api = `${import.meta.env.VITE_PATH}/user`;

export default {
  name: "Staff",
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
    };
  },
  productService: null,
  created() {
    this.productService = new ProductService();
  },
  methods: {
    async getUser(userId) {
      try {
        const response = await axios.get(`/users/${userId}`)
        this.selectedUser = response.data.name
      } catch (error) {
        console.error(error)
      }
    },

    getUsers() {
      this.$http.get(api).then((res) => {
        //const userId = res.data.data.list[0].userId;
        this.products = res.data.data.list;
        this.apiListLength = res.data.data.list;
        //this.userId = 'res.data.data.list[i].userId';
        this.userId = 'res.data.data.list[0].userId';

        this.users = res.data.data.list;
        this.user = this.users.find(user => user.userId === this.userId);

        console.log(res.data.data.list[0].userId);
        console.log(this.user);
        console.log(res.data);
      });
    },
    editStaff(product) {
      const userId = res.data.data.list[1].userId;
      const newUserId = this.newUserId;
      const newUserName = this.newUserName;
      const newEmail = this.newEmail;
      const newPassword = this.newPassword;
      const newIdentity = this.newIdentity;
      this.product = {...product};
      this.$http.patch(`api/:id`, {
        //this.$http.patch(`api/?userId=${newUserId}`, {
        // "userId": "6c241818-c33a-4cda-9b00-99c18be31532",
        userName: newUserName,
        email: newEmail,
        password: newPassword,
        identity: newIdentity,
      })
        .then((response) => {
          console.log(response.data.data.list[1]);
          this.item.userName = newUserName;
          this.item.email = newEmail;
          this.item.password = newPassword;
          this.item.identity = newIdentity;
        }).catch((err) => {
          //alert(err.data.result.message);
          console.log(err.data.result.message);
        });
    },
    delStaff(item) {
      this.$http.delete(`api/${this.dataAll.id}`, {
      })
        .then((response) => {
          console.log(response.data);
          this.getUsers();
          this.dataAll.splice(this.getIndex(item.id), 1)//get user list
        }).catch((err) => {
          //alert(err.data.result.message);
          console.log(err.data.result);
        });
    },
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
    this.getUsers();
    //
  },
};
</script>