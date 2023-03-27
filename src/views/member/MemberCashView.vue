<template>
  <div class="wrapper">
    <!-- Sidebar Menu -->
    <Sidebar />
    <!-- Sidebar Menu End -->
    <div class="page-content-wrapper">
      <div class="container-fluid">
        <div class="row">
          <!-- <RouterView /> -->
          <section class="col-lg-12">
            <TopHeader />
            <nav class="bg-light pt-2 pb-2 rounded" aria-label="breadcrumb">
              <ol class="breadcrumb d-flex align-items-center mb-0 px-2">
                <router-link to="/dshboard" class="breadcrumb-item"
                  >首頁</router-link
                >
                <router-link to="/member-control" class="breadcrumb-item"
                  >會員管理</router-link
                >
                <li class="breadcrumb-item active" aria-current="page">
                  提領狀態列表
                </li>
              </ol>
            </nav>
            <!--  -->
            <div>
              <h2 class="text-primary mt-4 fs-3 fw-bold">提領狀態</h2>
            </div>
            <!--  -->
            <!--  -->
            <div>
              <h2 class="text-primary mt-4 fs-5 fw-bold">搜尋會員</h2>
            </div>
            <!--  -->
            <div class="mb-4">
              <form class="fs-6 border border-1 rounded-4 pt-4">
                <!--  -->
                <div
                  class="d-flex align-items-center align-items-sm-start pb-4 flex-column flex-lg-row p-2"
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
                        placeholder="1234567890"
                        v-model="userAppId"
                        @input="limitInput"
                      />
                    </div>
                    <div v-if="isError" class="text-danger text-end">
                      {{ errorMessage }}
                    </div>
                  </div>
                  <!--  -->
                  <div class="col-12 col-lg-4 mb-2">
                    <div class="d-flex">
                      <label
                        for="specificSizeSelect"
                        class="col-auto col-form-label me-2 ms-1"
                        >提領狀態</label
                      >
                      <select
                        class="form-select"
                        id="specificSizeSelect"
                        v-model="cashState"
                      >
                        <option disabled value="">選擇類型</option>
                        <!-- <option value="">所有類型</option> -->
                        <option value="審核中">審核中</option>
                        <option value="處理中">處理中</option>
                        <option value="提領成功">提領成功</option>
                        <option value="提領失敗">提領失敗</option>
                      </select>
                    </div>
                  </div>
                </div>
                <!-- btn -->
                <div class="col-12 d-flex justify-content-center mb-4">
                  <button
                    type="button"
                    class="btn btn-primary text-white mx-2"
                    @click="searchUser()"
                  >
                    搜尋
                  </button>
                </div>
                <!--  -->
              </form>
            </div>
            <!--  -->
            <!--  -->
            <div class="">
              <!--  -->
              <div
                class="d-flex justify-content-between align-items-center mb-2"
              >
                <div>
                  <h2 class="text-primary mt-4 fs-5 fw-bold">提領狀態</h2>
                </div>
                <div class="d-flex align-items-center;">
                  <div class="row g-3 align-items-center">
                    <div class="col-auto">
                      <label for="inputType" class="col-form-label"
                        >提領狀態</label
                      >
                    </div>
                    <div class="col-auto">
                      <select
                        v-model="selectedState"
                        @change="onStateChange"
                        class="form-select"
                        aria-label="Default select example"
                        :value="selectedState === '' ? null : selectedState"
                      >
                        <!-- <option selected>提領狀態</option> -->
                        <option value="all">所有類型</option>
                        <option value="審核中">審核中</option>
                        <option value="處理中">處理中</option>
                        <option value="提領成功">提領成功</option>
                        <option value="提領失敗">提領失敗</option>
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
                      <th scope="col">提領金額</th>
                      <th scope="col">提領狀態</th>
                      <th scope="col">提領單號</th>
                      <th scope="col">狀態</th>
                    </tr>
                  </thead>
                  <tbody class="table-group-divider">
                    <!-- //withdrawalsCashList -->
                    <tr v-for="(item, index) in filteredList" :key="index">
                      <!-- <tr v-for="(item, index) in withdrawalsCashList" :key="index"> -->
                      <th scope="row">{{ index + 1 }}</th>
                      <td>{{ item.date }}</td>
                      <td>{{ item.userAppId }}</td>
                      <td>{{ item.cashMoney }}</td>
                      <td>{{ item.cashState }}</td>
                      <td>{{ item.cashId }}</td>
                      <td id="cash-state">
                        <!-- btn -->
                        <!-- {{ cashStateVal }} -->
                        <!-- <router-link
                        v-if="item.cashState === '審核中'"
                        to="/member-cash-info"
                        :cashStateVal="item.cashState"
                        class="btn btn-info text-light mb-2"
                        @click.prevent="changeCashStateVal"
                      >
                      <i class="bi bi-eye-fill"></i> 檢視
                      </router-link> -->
                        <button
                          @click="showDetail(item.cashId)"
                          :id="item.cashId"
                          class="btn btn-info text-light mb-2"
                        >
                          <i class="bi bi-eye-fill"></i>檢視
                        </button>
                        <!-- btn end  -->
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--  -->
              <div
                v-if="!filteredList.length && isSearched"
                class="text-center h4 fs-bold mt-4 mb-4 text-primary"
              >
                <p>
                  <i class="bi bi-binoculars"></i>
                  找不到結果，麻煩您重新再輸入一次 !
                </p>
                <div
                  class="d-flex justify-content-center flex-column flex-lg-row"
                >
                  <button
                    class="btn btn-primary text-light mb-2"
                    @click="reloadPage()"
                  >
                    重新搜尋
                  </button>
                </div>
              </div>
              <!-- pagination  -->
              <!-- <paginate v-if="currentPage === 1" v-model="currentPage" :total="filteredList.length" :perPage="perPage"
                :page-count="pageCount" :click-handler="onPageChange" :prev-text="'上一頁'" :next-text="'下一頁'"
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
              <!-- pagination  -->
            </div>
            <!-- cashList -->
            <!-- <div>
              {{ idLists }}
            </div>
            <div>
              {{ startKey }}
            </div>
            <button @click="fetchRealNameList()">Get Data</button> -->
            <!--  -->
              <div class="pagination d-flex justify-content-center">
                <!-- <button class="pagination-item btn btn-outline-primary pagebtn" @click="prevPage()"
                  :disabled="isPrevPage">上一頁</button> -->
                  <button
                  class="pagination-item btn btn-outline-primary pagebtn"
                  @click="reloadPage()"
                >
                  重新整理
                </button>
                <button class="pagination-item btn btn-outline-primary pagebtn" @click="getNextWithdrawals()"
                  v-if="!isLastPage">下一頁</button>

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
//import { RouterLink, RouterView } from "vue-router";
import TopHeader from "@/components/TopHeader.vue";
import Sidebar from "@/components/Sidebar.vue";
import Paginate from "vuejs-paginate-next";
import MemberInfoView from "@/views/member/MemberInfoView.vue";
//import { provide } from "vue";
// import mitt from "mitt";
// const emitter = mitt();
const api = `${import.meta.env.VITE_PATH}/withdraw`;
export default {
  name: "MemberCashView",
  components: {
    TopHeader,
    Sidebar,
    paginate: Paginate,
    MemberInfoView,
  },
  data() {
    return {
      //
      idLists: [],
      startKey: "",
      //search
      userAppId: "",
      cashState: "",
      isSearched: false,
      isError: false,
      errorMessage: "",
      //
      selectedState: "all",
      filteredList: [],
      //
      customers: null,
      //id type option
      selectedIdType: "",
      //
      cashId: this.$route.params.cashId,
      //
      error: null,
      //
      // currentPage: 1,
      // perPage: 10,
      // pageCount: 0,
      // paginatedData: [],
      //
      //startKey: null,
      withdrawals: [],
      isLastPage: '',
      isPrevPage: '',
      withdrawalsCashList: [],
      prevStartKey: null,
    };
  },
  mounted() {
    this.getMembers();
    this.onStateChange();
    //this.fetchRealNameList();
    this.getWithdrawals();
  },
  methods: {
    // viewCashInfo() {
    //   router.push({ path: "/" });
    // },
    // changeUsername() {
    //   this.$emit("changeUsername");
    // },
    // changeCashStateVal() {
    //   //emitter.emit('getData', this.cashList.cashState);
    //   //emitter.emit('getData', this.cashStateVal);
    //   this.eventBus.emit("getData", this.cashStateVal);
    // },
    //get
    async getMembers() {
      const res = await this.$http.get(api);
      this.idLists = res.data.data.cashList;
      this.startKey = res.data.data.startKey;
      this.filteredList = this.idLists;
      this.withdrawals = this.filteredList;
      //this.updatePaginatedData();
      // if (!this.startKey) {
      //   // 第一次请求
      //   const url = api;
      //   const res = await axios.get(url);
      //   this.idLists = res.data.data.cashList;
      //   this.startKey = res.data.data.startKey;
      //   this.filteredList = this.idLists;
      // } else {
      //   // 第二次请求
      //   const url = api+`?startKey=${this.startKey}&cashState=${this.cashState}&userAppId=${this.userAppId}`;
      //   const res = await axios.get(url);
      //   this.idLists = this.items.concat(res.data.data.cashList);
      //   this.startKey = res.data.data.startKey;
      // }
    },
    onStateChange() {
      this.filteredList =
        this.selectedState === "all"
          ? this.idLists
          : this.idLists.filter(
              (item) => item.cashState === this.selectedState
            );
      //this.currentPage = 1;
      //this.$forceUpdate();
      console.log(this.filteredList);
    },
    searchUser() {
      this.isSearched = true;
      this.$http.get(api).then((res) => {
        if (this.userAppId || this.cashState) {
          this.filteredList = this.idLists.filter((item) => {
            return (
              (!this.userAppId || item.userAppId === this.userAppId) &&
              (!this.cashState || item.cashState === this.cashState)
            );
          });
          //this.currentPage = 1;
        } else {
          this.filteredList = [];
        }
        console.log(res.data.data);
      });
    },
    //search
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
    //
    // async fetchRealNameList() {
    //   const response = await this.$http.get( api+`?startKey=${this.startKey}`);
    //   const { data, startKey } = response.data.data;
    //   this.startKey = startKey;
    //   this.filteredList = [...this.filteredList, ...data];
    //   this.pageCount = Math.ceil(this.filteredList.length / this.perPage);
    //   console.log(response);
    // },
    // async onPageChange(pageNum) {
    //   this.currentPage = pageNum;
    //   if (pageNum * this.perPage >= this.filteredList.length) {
    //     await this.fetchRealNameList();
    //   }
    //   console.log(pageNum);
    // },
    // async fetchWithdrawList() {
    //   const url = api+`?startKey=${this.startKey}&cashState=${this.cashState}&userAppId=${this.userAppId}`;
    //   try {
    //     const response = await this.$http.get(url);
    //     this.withdrawList = this.withdrawList.concat(response.data.data);
    //     this.startKey = response.data.startKey;
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    // async fetchRealNameList() {
    //   const url = api+`?startKey=${this.startKey}`;
    //   try {
    //     const res = await this.$http.get(url);
    //     //const data = res.data.data;
    //     this.idLists = this.idLists.concat(data.list);
    //     this.startKey = res.data.data.startKey ?? null; // 若無 startKey，設為 null
    //     if (this.startKey) {
    //       await this.fetchRealNameList(); // 繼續查詢下一頁
    //     }
    //   } catch (error) {
    //     this.error = error;
    //   }
    //   if (!this.startKey) {
    //     // 第一次请求
    //     const url = api;
    //     const res = await this.$http.get(url);
    //     this.idLists = res.data.data.cashList;
    //     this.startKey = res.data.data.startKey;
    //     this.filteredList = this.idLists;
    //   } else {
    //     // 第二次请求
    //     const url = api+`?startKey=${this.startKey}&cashState=${this.cashState}&userAppId=${this.userAppId}`;
    //     const res = await this.$http.get(url);
    //     this.idLists = this.items.concat(res.data.data.cashList);
    //     this.startKey = res.data.data.startKey;
    //   }

    //   console.log(this.startKey);
    // },
    //
    //child
    async showDetail(cashId) {
      this.cashId = this.$refs.id;
      this.$router.push({
        name: "MemberCashInfo",
        params: {
          cashId: cashId,
          //id: realNameId,
        },
      });
    },
    //
    //
    async getWithdrawals() {
      try {
        // 第一次 API 呼叫
        const response1 = await this.$http.get(api);
        //filteredList
        // this.withdrawals = response1.data;
        this.filteredList = response1.data.data.cashList;
        this.withdrawalsCashList = response1.data.data.cashList;
        // this.startKey = response1.headers['start-key'];
        this.startKey = response1.data.data.startKey;
        this.isPrevPage = null;
        // 記錄上一頁的 startKey
        this.prevStartKey = this.startKey;
        // 判斷是否為最後一頁
        if (!this.startKey) {
          this.isLastPage = true;
        }
      } catch (error) {
        console.error(error);
      }
    },
    //btn page
    async getNextWithdrawals() {
      try {
        // 判斷是否為最後一頁，如果是最後一頁則不執行第二次 API 呼叫
        if (this.isLastPage) {
          return;
        }
        // 第二次 API 呼叫
        const response2 = await this.$http.get(api + `?startKey=${this.startKey}`);
        if (response2.data.data) {
          // filteredList
          // this.withdrawals = response2.data;
          this.filteredList = response2.data.data.cashList;
          this.withdrawalsCashList = response2.data.data.cashList;
          this.startKey = response2.data.data.startKey;
          this.prevStartKey = this.startKey;
          if (!this.startKey) {
            this.isLastPage = true;
          }
        }
      } catch (error) {
        console.error(error);
      }
    },
    //
    async getPrevWithdrawals() {
      try {
        const response = await this.$http.get(api + `?startKey=${this.startKey}`);
        if (response.data.data) {
          //filteredList
          // this.withdrawals = response.data;
          this.filteredList = response.data.data.cashList;
          this.withdrawalsCashList = response.data.data.cashList;
          this.prevStartKey = response.data.data.prevStartKey;
          if (response.data.data.prevStartKey) {
            this.prevStartKey = response.data.data.prevStartKey;
          } else {
            this.prevStartKey = null;
          }
          this.isLastPage = false;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async prevPage() {
      try {
        if (!this.prevStartKey) {
          return;
        }
        const response = await this.$http.get(api + `?startKey=${this.prevStartKey}`);
        this.data = response.data.data;
        //this.withdrawals = response.data;
        //this.withdrawalsCashList = response.data.data.cashList;
        // this.startKey = response.data.data.startKey;
        // if (response.data.data.prevStartKey) {
        //   this.prevStartKey = response.data.data.prevStartKey;
        // } else {
        //   this.prevStartKey = null;
        // }
            // 保存当前页的 startKey 到 prevStartKey
    const temp = this.prevStartKey;
    this.prevStartKey = this.startKey;
    // 更新当前页的 startKey
    this.startKey = temp;

        this.isLastPage = false;
      } catch (error) {
        console.error(error);
      }
    },
    //
    //
  },
};
</script>
