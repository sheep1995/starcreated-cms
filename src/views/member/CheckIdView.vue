<!-- <script setup>
import { RouterLink, RouterView } from "vue-router";
import TopHeader from "@/components/TopHeader.vue";
import Sidebar from "@/components/Sidebar.vue";
</script> -->
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
              <router-link to="/member-control" class="breadcrumb-item">會員管理</router-link>
              <li class="breadcrumb-item active" aria-current="page">
                實名認證
              </li>
            </ol>
          </nav>
          <!--  -->
          <div>
            <h2 class="text-primary mt-4 fs-3 fw-bold">實名認證</h2>
          </div>
          <!--  -->
          <!-- alert -->
          <div
            class="alert bg-success mt-4 mb-4 pb-0 text-dark fw-medium"
            role="alert"
          >
            <p>
              第一次提領需要完成實名認證，請審核人員在點選通過審核前務必再次確認是否完成實名認證。
            </p>
          </div>
          <!--  -->
          <!--  -->
          <div>
            <h2 class="text-primary mt-4 fs-5 fw-bold">搜尋會員</h2>
          </div>
          <!-- search -->
          <div class="mb-4">
            <form class="fs-6 border border-1 rounded-4 pt-4">
              <!--  -->
              <div
                class="
                  d-flex
                  align-items-center align-items-sm-start
                  pb-4
                  flex-column flex-lg-row
                  p-2
                "
              >
                <div class="col-12 col-lg-4 mb-2">
                  <div class="d-flex">
                    <label
                      for="userAppId"
                      class="col-auto col-form-label me-2 ms-1"
                      >星行號</label
                    >
                    <input
                      type="text"
                      id="userAppId"
                      class="form-control"
                      aria-describedby="passwordHelpInline"
                      placeholder="1234567890"
                    />
                  </div>
                </div>
                <!--  -->
                <div class="col-12 col-lg-4 mb-2">
                  <div class="d-flex">
                    <label
                      for="specificSizeSelect"
                      class="col-auto col-form-label me-2 ms-1"
                      >實名認證</label
                    >
                    <select class="form-select" id="specificSizeSelect">
                      <option selected>選擇類型</option>
                      <option value="已認證">已認證</option>
                      <option value="未認證">未認證</option>
                      <option value="認證失敗">認證失敗</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- btn -->
              <div class="col-12 d-flex justify-content-center mb-4">
                <button
                  type="button"
                  class="btn btn-primary text-white mx-2"
                  data-bs-dismiss="modal"
                >
                  搜尋
                </button>
              </div>
              <!--  -->
            </form>
          </div>
          <!-- search end -->
          <div class=" ">
            <!--  -->
            <div class="d-flex justify-content-between align-items-center mb-2">
              <div>
                <h2 class="text-primary mt-4 fs-5 fw-bold">實名認證</h2>
              </div>
              <div class="d-flex align-items-center;">
                <div class="row g-3 align-items-center">
                  <div class="col-auto">
                    <label for="inputType" class="col-form-label"
                      >實名認證</label
                    >
                  </div>
                  <div class="col-auto">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option value="所有類型">所有類型</option>
                      <option value="已認證">已認證</option>
                      <option value="未認證">未認證</option>
                      <option value="認證失敗">認證失敗</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <!--  -->
            <div class="table-responsive">
              <table class="table table-bordered align-middle">
                <thead class="table-primary">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">申請日期</th>
                    <th scope="col">星行號</th>
                    <th scope="col">實名認證</th>
                    <th scope="col">操作</th>
                  </tr>
                </thead>
                <tbody class="table-group-divider">
                  <tr v-for="(item, index) in idLists" :key="index">
                    <th scope="row"> {{ index + 1 }}</th>
                    <td>{{ item.date }}</td>
                    <td>{{ item.userAppId }}</td>
                    <td>{{ item.realNameState }}</td>
                    <td id="cash-state">
                      <!-- btn -->
                      <router-link
                        to="/member-id-info"
                        class="btn btn-info text-light mb-2"
                      >
                        <i class="bi bi-eye-fill"></i> 檢視
                      </router-link>
                      <!-- btn end  -->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- pagination  -->
            <nav aria-label=" ">
              <ul class="pagination d-flex justify-content-center">
                <li class="page-item disabled">
                  <span class="page-link">Previous</span>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item active" aria-current="page">
                  <span class="page-link">2</span>
                </li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
            <!-- pagination  -->
          </div>
          <!--  -->
          <!--  -->
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

const api = `${import.meta.env.VITE_PATH}/realname`;

export default {
  //name: "Member",
  components: {
    TopHeader,
    Sidebar,
  },
  data() {
    return {
      products: null,
      idLists: null,
      idList: [
        {
          id: "1",
          date: "2023/01/01",
          userAppId: "4543413131",
          idState: "已認證",
        },
        {
          id: "2",
          date: "2023/01/01",
          userAppId: "4543413131",
          idState: "未認證",
        },
        {
          id: "3",
          date: "2023/01/01",
          userAppId: "4543413131",
          idState: "未認證",
        },
        {
          id: "4",
          date: "2023/01/01",
          userAppId: "4543413131",
          idState: "認證失敗",
        },
      ],
    };
  },
  methods: {
    getMembers() {
      const vm = this;
      this.$http.get(api).then((res) => {
        //vm.isLoading = false;
        this.idLists = res.data.data.realNameList;
        console.log(res.data);
      });
    },
    findIndexById(id) {
      let index = -1;
      for (let i = 0; i < this.idLists.length; i++) {
        if (this.idLists[i].userAppId === id) {
          index = i;
          break;
        }
      }
      return index;
    },
  },
  mounted() {
    this.getMembers();
  },
};
</script>