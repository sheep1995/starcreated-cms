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
                <router-link to="/" class="breadcrumb-item">首頁</router-link>
                <li class="breadcrumb-item active" aria-current="page">
                  人員管理
                </li>
              </ol>
            </nav>
            <!--  -->
            <div>
              <h2 class="text-primary mt-4 fs-3 fw-bold">
                <span
                  ><i class="bi bi-people-fill fs-3 text-secondary"></i
                ></span>
                人員管理
              </h2>
            </div>
            <!--  -->
            <div class="col-12 mt-4 mb-2">
              <div class="d-flex justify-content-between">
                <h4 class="fs-5">帳號列表</h4>
                <router-link
                  to="/staff-add"
                  class="btn btn-secondary text-light"
                  ><i class="bi bi-person-fill-add"></i> 新增人員</router-link
                >
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
                  <tr v-for="(item, index) in dataAll" :key="index">
                    <th scope="row"> {{ index+1 }}</th>
                    <td>{{ item.userName }}</td>
                    <td v-if="item.email != ''">{{ item.email }}</td>
                    <td v-else-if="item.email.length == '0'" > NULL </td>
                    <td>{{ item.password }} </td>
                    <td>{{ item.identity }}</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary text-white me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#editModal"
                        @click="editStaff"
                      >
                        <i class="bi bi-pencil-fill"></i> 編輯
                      </button>
                      <button
                        type="button"
                        class="btn btn-danger"
                        data-bs-toggle="modal"
                        data-bs-target="#delModal"
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
  <div
    class="modal fade modal-lg"
    id="editModal"
    tabindex="-1"
    aria-labelledby="editModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header border-bottom-0">
          <h1 class="modal-title fs-5 text-primary" id="editModalLabel">
            編輯資料
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-center">
          <!--  -->
          <div class="row card-group">
            <div class="col-md-12 mb-4">
              <div class="col-md-12">
                <!-- <h2 class=" text-center mb-4">登入</h2> -->
                <!-- login form -->
                <form class="row fs-6 p-4">
                  <div class="col-md-6 mb-3 text-start">
                    <label for="exampleInputEmail1" class="form-label"
                      >姓名</label
                    >
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
                    <label for="exampleInputEmail1" class="form-label"
                      >帳號</label
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
                  <!--  -->
                  <div class="col-md-6 mb-2 text-start">
                    <label for="exampleInputPassword1" class="form-label"
                      >密碼</label
                    >
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
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
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
              </div>
            </div>
          </div>
          <!--  -->
        </div>

        <div
          class="modal-footer d-flex justify-content-center border-top-0 mb-4"
        >
          <!--  -->
          <div class="col-12">
            <div class="d-flex justify-content-center">
              <button
                type="submit"
                class="btn btn-primary text-light"
                data-bs-dismiss="modal"
              >
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
  <div
    class="modal fade"
    id="delModal"
    tabindex="-1"
    aria-labelledby="delModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="delModalLabel">刪除資料</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-center">確認要刪除這筆資料?</div>
        <div class="modal-footer d-flex justify-content-center">
          <button type="button" class="btn btn-light" data-bs-dismiss="modal">
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary text-white"
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
import ProductService from "@/assets/js/ProductService.js";

const api = `${import.meta.env.VITE_PATH}/user`;

export default {
  name: "Staff",
  data() {
    return {
      products: null,
      dataAll: [],
      apiListLength:0,
      index:0,
      user: {
      },
    };
  },
  productService: null,
  created() {
    this.productService = new ProductService();
  },
  methods: {
    editStaff() {
      this.$http.patch(api, this.user, {
        "userName": "Admin Test",
    "password": "Abc123456",
    "identity": "最高管理者"
      })
      .then((response) => {
        
        console.log(response.data.result);
        //alert(response.data.result.message);
      }).catch((err) =>{
        alert(err.data.result.message);
        console.log(err.data.result.message);
      });
    },
  },
  mounted() {
    this.productService
      .getProductsSmall()
      .then((data) => (this.products = data));
    //
    console.log(import.meta.env.VITE_PATH);
    console.log(import.meta.env.VITE_TEXT);
    const url = import.meta.env.VITE_PATH;
    this.$http.get(api).then((res) => {
      console.log(res);
      console.log(res.data.data.list[0]);
      this.dataAll = res.data.data.list;
      this.apiListLength = res.data.data.list;

      // this.data = res.data.results[0].gender;
      // this.data2 = `${res.data.results[0].name.title} ${res.data.results[0].name.first}`;
      console.log(res.data);
    });
    //
  },
};
</script>