<template>
  <div class="wrapper">
    <Sidebar />
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
            <!-- alert -->
            <div class="alert bg-success mt-4 mb-4 pb-0 text-dark fw-medium" role="alert">
              <p>
                第一次提領需要完成實名認證，請審核人員在點選通過審核前務必再次確認是否完成實名認證。
              </p>
            </div>
            <!--  -->
            <div>
              <h2 class="text-primary mt-4 fs-5 fw-bold">搜尋會員</h2>
            </div>
            <!-- search -->
            <div class="mb-4">
              <form class="fs-6 border border-1 rounded-4 pt-4">
                <!--  -->
                <div class="
                      d-flex
                      align-items-center align-items-sm-start
                      pb-4
                      flex-column flex-lg-row
                      p-2
                    ">
                  <div class="col-12 col-lg-4 mb-2">
                    <div class="d-flex">
                      <label for="userAppId" class="col-auto col-form-label me-2 ms-1">星行號</label>
                      <input type="text" id="userAppId" class="form-control" placeholder="1234567890" v-model="userAppId"
                        @input="limitInput" />
                    </div>
                    <div v-if="isError" class="text-danger text-end"> {{ errorMessage }} </div>
                  </div>
                  <!--  -->
                  <div class="col-12 col-lg-4 mb-2">
                    <div class="d-flex">
                      <label for="specificSizeSelect" class="col-auto col-form-label me-2 ms-1">實名認證</label>
                      <select class="form-select" id="specificSizeSelect" v-model="realNameState">
                        <option disabled value="" class="text-gray-500">選擇類型</option>
                        <option value="finish">已認證</option>
                        <option value="review">未認證</option>
                        <option value="fail">認證失敗</option>
                      </select>
                    </div>
                  </div>
                </div>
                <!-- btn -->
                <div class="col-12 d-flex justify-content-center mb-4">
                  <button type="button" class="btn btn-primary text-white mx-2" data-bs-dismiss="modal"
                    @click="searchUser()">
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
                      <label for="inputType" class="col-form-label">實名認證</label>
                    </div>
                    <div class="col-auto">
                      <select v-model="selectedState" @change="onStateChange" class="form-select"
                        aria-label="Default select example" :value="selectedState === '' ? null : selectedState">
                        <option value="all">所有類型</option>
                        <option value="finish">已認證</option>
                        <option value="review">未認證</option>
                        <option value="fail">認證失敗</option>
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
                    <tr v-for="(item, index) in filteredList" :key="index">
                      <th scope="row"> {{ index + 1 }}</th>
                      <td>{{ item.date }}</td>
                      <td>{{ item.userAppId }}</td>
                      <td>{{ statusText[item.realNameState] }} </td>
                      <td id="cash-state" :id="item.userAppId">
                        <!-- {{ item.userAppId }} -->
                        <!-- btn -->
                        <router-link to="/member-id-info" class="btn btn-info text-light mb-2">
                          <i class="bi bi-eye-fill"></i> 檢視
                        </router-link>
                        <!-- btn end  -->
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--  -->
              <div v-if="!filteredList.length && isSearched" class="text-center h4 fs-bold mt-4 mb-4 text-primary">
                <p> <i class="bi bi-binoculars"></i> 找不到結果，麻煩您重新再輸入一次 !</p>
                <div class="d-flex justify-content-center flex-column flex-lg-row">
                  <button class="btn btn-primary text-light mb-2" @click="reloadPage()">重新搜尋</button>
                </div>
              </div>
              <!-- pagination  -->
              <!--  -->
              <paginate v-if="currentPage===1" v-model="currentPage" :total="filteredList.length" :perPage="perPage"
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
              </paginate>
              <!-- <div>123456</div> -->
              <!-- <nav aria-label="">
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
              </nav> -->
              <!--  -->
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
import Paginate from 'vuejs-paginate-next';

const api = `${import.meta.env.VITE_PATH}/realname`;
export default {
  //name: "Member",
  components: {
    TopHeader,
    Sidebar,
    paginate: Paginate,
  },
  data() {
    return {
      products: null,
      idLists: [],
      //
      customers: null,
      //id type option 
      selectedIdType: '',
      //idType: [],
      //
      selectedState: 'all',
      filteredList: [],
      statusText: {
        "review": '未認證',
        "finish": '已認證',
        "fail": '認證失敗',
      },
      //search
      userAppId: '',
      realNameState: '',
      isSearched: false,
      isError: false,
      errorMessage: '',
      //
      // 當前頁碼
      currentPage: 1,
      // 每頁要顯示的數據數量
      perPage: 60,
      // 從 API 取得的所有數據
      // allData: [],
      // 經過分頁後要顯示的數據
      paginatedData: [],
      //firstIndex: ''
    };
  },
  mounted() {
    this.getMembers();
    this.onStateChange();
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
      this.idLists = res.data.data.realNameList;
      this.filteredList = this.idLists;
      //console.log(res.data.data);
      //this.allData = this.filteredList;
      this.updatePaginatedData();
      console.log(this.filteredList);
      console.log(this.idLists);
    },
    // findIndexById(id, currentPage ) {
    //   //const perPage = 30;
    //   const firstIndex = (currentPage - 1) * perPage;
    //   const foundItem = this.filteredList.find( item  => item.userAppId === id);
    //   if (foundItem) {
    //     const index = this.filteredList.indexOf(foundItem);
    //     return firstIndex + index;
    //   } else {
    //     return -1;
    //   }
    //   // let index = -1;
    //   // for (let i = 0; i < this.idLists.length; i++) {
    //   //   if (this.idLists[i].userAppId === id) {
    //   //     index = i;
    //   //     break;
    //   //   }
    //   // }
    //   // return index;
    // },
    // onStateChange() {
    //   this.filteredList = this.idLists.filter(item => {
    //     return this.selectedState === '' || item.realNameState === this.selectedState;
    //   });
    // },
    onStateChange() {
      this.filteredList = this.selectedState === 'all' ? this.idLists : this.idLists.filter(item => item.realNameState === this.selectedState);
      //this.currentPage = 1;
      //this.$forceUpdate();
      console.log(this.filteredList);
    },
    searchUser() {
      this.isSearched = true;
      if (this.userAppId || this.realNameState) {
        this.filteredList = this.idLists.filter(item => {
          return (
            (!this.userAppId || item.userAppId === this.userAppId) &&
            (!this.realNameState || item.realNameState === this.realNameState)
          );
        })
        //this.currentPage = 1;
      } else {
        this.filteredList = [];
      }
    },
    //
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
  // watch: {
  //   selectedState() {
  //     this.currentPage = 1;
  //   },
  // },
};
</script>