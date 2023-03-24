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
            <!-- <Breadcrumb /> -->
            <nav class="bg-light pt-2 pb-2 rounded" aria-label="breadcrumb">
              <ol class="breadcrumb d-flex align-items-center mb-0 px-2">
                <router-link to="/dshboard" class="breadcrumb-item"
                  >首頁</router-link
                >
                <li class="breadcrumb-item active" aria-current="page">
                  會員管理
                </li>
              </ol>
            </nav>
            <!--  -->
            <div>
              <h2 class="text-primary mt-4 fs-3 fw-bold">
                <span
                  ><i class="bi bi-person-fill fs-3 text-secondary"></i
                ></span>
                會員管理
              </h2>
            </div>
            <!--  -->
            <!--  -->
            <div>
              <h2 class="text-primary mt-4 fs-5 fw-bold">搜尋會員</h2>
            </div>
            <!--  -->
            <div class="col-12 mb-4">
              <form class="fs-6">
                <!--  -->
                <div
                  class="d-flex align-items-center align-items-sm-start border border-1 rounded-4 pt-4 pb-4 pb-lg-0 flex-column flex-lg-row"
                >
                  <div class="col-auto">
                    <label for="userAppId" class="col-form-label me-2 ms-1"
                      >星行號</label
                    >
                  </div>
                  <div class="col-md-4 mb-4">
                    <input
                      type="text"
                      id="userAppId"
                      class="form-control"
                      placeholder="1234567890"
                      v-model="userAppId"
                      @input="limitInput"
                    />
                    <div v-if="isError" class="text-danger text-end">
                      {{ errorMessage }}
                    </div>
                  </div>
                  <div class="col-auto">
                    <button
                      type="button"
                      class="btn btn-primary text-white mx-2"
                      data-bs-dismiss="modal"
                      @click="searchUser()"
                      :disabled="userAppId === ''"
                      v-tooltip="'請新輸入星行者號碼'"
                    >
                      搜尋
                    </button>
                  </div>
                </div>
                <!--  -->
              </form>
            </div>
            <!--  -->
            <!--  -->
          </section>
          <!--  -->
          <div class="col-lg-12">
            <!--  -->
            <div>
              <h2 class="text-primary mt-4 fs-5 fw-bold">會員列表</h2>
            </div>
            <!--  -->
            <div class="table-responsive">
              <table class="table table-bordered align-middle star-table">
                <thead class="table-primary">
                  <!-- <tr v-for="(item, index) in products" :key="index" ></tr> -->
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">星行號</th>
                    <th scope="col">暱稱</th>
                    <th scope="col" class="text-center">頭像</th>
                    <th scope="col" class="text-center">背景圖</th>
                    <th scope="col">帳號</th>
                    <th scope="col">實名認證</th>
                    <th scope="col">操作</th>
                    <th scope="col">註冊方式</th>
                  </tr>
                </thead>
                <tbody class="table-group-divider">
                  <tr v-for="(item, index) in filteredList" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ item.userAppId }}</td>
                    <td>{{ item.nickname }}</td>
                    <td>
                      <div class="d-flex justify-content-center">
                        <img
                          v-if="item.avatar === ''"
                          src="@/assets/images/img-user.svg"
                          alt="img-404"
                          class="rounded-circle img-user"
                        />
                        <img
                          v-else
                          :src="item.avatar"
                          alt="img-user"
                          class="rounded-circle img-user"
                        />
                      </div>
                    </td>
                    <td>
                      <div class="d-flex justify-content-center">
                        <img
                          v-if="item.background === ''"
                          class="img-user-bg"
                          src="@/assets/images/img-login-bg.png"
                          alt="img-404"
                        />
                        <img
                          v-else
                          class="img-user-bg"
                          :src="item.background"
                          alt="img-user-bg"
                        />
                      </div>
                    </td>
                    <td v-if="item.account === 'null'">
                      {{ nullText[item.account] }}
                    </td>
                    <td v-else>{{ item.account }}</td>
                    <td>{{ statusText[item.realNameVerify] }}</td>
                    <td id="cash-state">
                      <!-- btn -->
                      <!-- member-control -->
                      <router-link
                        to="/member-control"
                        class="btn btn-info text-light"
                      >
                        <i class="bi bi-person-gear"></i> 管理
                      </router-link>
                    </td>
                    <!-- btn end  -->
                    <td>{{ item.loginType }}</td>
                  </tr>
                  <!--  -->
                  <!-- <tr>
                    <th scope="row">2</th>
                    <td>4543413131</td>
                    <td>Meow</td>
                    <td>
                      <div class="d-flex justify-content-center">
                        <img
                          class="rounded-circle img-user"
                          src="http://placekitten.com/200/300"
                          alt="img-user"
                        />
                      </div>
                    </td>
                    <td>
                      <div class="d-flex justify-content-center">
                        <img
                          class="img-user-bg"
                          src="https://images.unsplash.com/photo-1587713714775-fa70364f6445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=782&q=80"
                          alt="img-user-bg"
                        />
                      </div>
                    </td>
                    <td>123@gmail.com</td>
                    <td>未認證</td>
                    <td>
                      <router-link
                        to="/member-control"
                        class="btn btn-info text-light"
                      >
                        <i class="bi bi-person-gear"></i> 管理</router-link
                      >
                    </td>
                    <td>apple</td>
                  </tr> -->
                </tbody>
              </table>
            </div>
          </div>
          <!--  -->
          <div
            v-if="!filteredList.length && isSearched"
            class="text-center h4 fs-bold mt-4 mb-4 text-primary"
          >
            <p>
              <i class="bi bi-binoculars"></i> 找不到結果，麻煩您重新再輸入一次
              !
            </p>
            <div class="d-flex justify-content-center flex-column flex-lg-row">
              <button
                class="btn btn-primary text-light mb-2"
                @click="reloadPage()"
              >
                重新搜尋
              </button>
            </div>
          </div>
          <!--  -->
          <!-- pagination  -->
          <!--  -->
          <!-- <paginate v-model="currentPage" :total="filteredList.length" :perPage="perPage"
                :page-count="pageCount" :click-handler="onPageChange"  :prev-text="'上一頁'"
                :next-text="'下一頁'"
                :container-class="'pagination d-flex justify-content-center'">
                <template #prev-label>
                  <span class="pagination-label">Prev</span>
                </template>
                <template #next-label>
                  <span class="pagination-label">Next</span>
                </template>
                <template #page="{ page, isCurrent }">
                  <div class="pagination-item" :class="{ 'pagination-item--active': isCurrent }">
                    {{ page }}
                  </div>
                </template>
              </paginate> -->
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>
<script>
import TopHeader from "@/components/TopHeader.vue";
import Sidebar from "@/components/Sidebar.vue";
import Paginate from "vuejs-paginate-next";

const api = `${import.meta.env.VITE_PATH}/member`;
export default {
  name: "Member",
  components: {
    TopHeader,
    Sidebar,
    paginate: Paginate,
  },
  data() {
    return {
      //products: null,
      members: [],
      //
      statusText: {
        false: "未認證",
        true: "已認證",
      },
      nullText: {
        null: "無帳號",
      },
      filteredList: [],
      //search
      userAppId: "",
      realNameState: "",
      isSearched: false,
      isError: false,
      errorMessage: "",
      // 當前頁碼
      currentPage: 1,
      // 每頁要顯示的數據數量
      perPage: 10,
      // 從 API 取得的所有數據
      // allData: [],
      // 經過分頁後要顯示的數據
      paginatedData: [],
      //firstIndex: ''
    };
  },
  mounted() {
    this.getMembers();
    //this.onStateChange();
  },
  computed: {
    pageCount() {
      return Math.ceil(this.filteredList.length / this.perPage);
    },
    displayedItems() {
      const start = (this.currentPage - 1) * this.perPage;
      //const end = start + this.perPage;
      return this.filteredList.slice(start, start + this.perPage);
    },
  },
  methods: {
    async getMembers() {
      const res = await this.$http.get(api);
      if (res.data.data.userList.length === 0) {
        this.members = [];
      } else {
        this.members = res.data.data.userList;
      }
      this.filteredList = this.members;
      //console.log(res.data.data);
    },
    // getMembers() {
    //   const vm = this;
    //   this.$http.get(api).then((res) => {
    //     //vm.isLoading = false;
    //     this.members = res.data.data.userList;
    //     //console.log(res.data.data.userList);
    //   });
    // },
    searchUser() {
      this.isSearched = true;
      if (this.userAppId) {
        this.filteredList = this.members.filter((item) => {
          return !this.userAppId || item.userAppId === this.userAppId;
        });
      } else {
        this.filteredList = [];
      }
    },
    limitInput() {
      const userAppId = this.userAppId.length;
      if (userAppId < 10) {
        this.isError = true;
        this.errorMessage = "請至少輸入10位數字!";
      } else if (userAppId > 10) {
        this.isError = true;
        this.errorMessage = "不能輸入超過10位數字!";
      } else {
        this.isError = false;
      }
    },
    reloadPage() {
      window.location.reload();
    },
    updatePaginatedData() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      this.paginatedData = this.filteredList.slice(start, end);
    },
    onPageChange(pageNum) {
      this.currentPage = pageNum;
      this.updatePaginatedData();
      console.log(pageNum);
    },
  },
};
</script>
