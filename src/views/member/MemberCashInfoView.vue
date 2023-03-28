<template>
  <div class="wrapper">
    <!-- Sidebar Menu -->
    <Sidebar />
    <!-- Sidebar Menu End -->
    <div class="page-content-wrapper">
      <div class="container-fluid">
        <div class="row">
          <!--  -->
          <section class="container">
            <TopHeader />
            <nav class="bg-light pt-2 pb-2 rounded" aria-label="breadcrumb">
              <ol class="breadcrumb d-flex align-items-center mb-0 px-2">
                <router-link to="/dshboard" class="breadcrumb-item"
                  >首頁</router-link
                >
                <router-link to="/member-control" class="breadcrumb-item"
                  >會員管理</router-link
                >
                <router-link to="/member-cash" class="breadcrumb-item"
                  >提領狀態列表</router-link
                >
                <li class="breadcrumb-item active" aria-current="page">
                  提領狀態
                </li>
              </ol>
            </nav>
            <!--  -->
            <div
              class="d-flex justify-content-between align-items-center mb-2 mt-4"
            >
              <h2 class="text-primary fs-3 fw-bold">提領狀態</h2>
              <ul
                class="list-unstyled d-flex justify-content-center align-items-center align-self-center fw-bold"
              >
                <!-- <li v-if="idListInfo.realNameState === 'finish' || idListInfo.realNameState === 'review'" class="text-primary">
              <span>
                <img class="me-1" src="@/assets/images/bank-step1.svg" alt="bank-step1"/>
              </span>
              審核中 <i class="bi bi-chevron-right me-2"></i>
            </li> -->
                <!--  -->
                <li class="text-primary">
                  <span
                    ><img
                      class="me-1"
                      src="@/assets/images/bank-step1.svg"
                      alt="bank-step1"
                  /></span>
                  審核中 <i class="bi bi-chevron-right me-2"></i>
                </li>
                <li
                  v-if="
                    memberListInfo.cashState === '處理中' ||
                    memberListInfo.cashState === '提領成功' ||
                    memberListInfo.cashState === '提領失敗'
                  "
                  class="text-primary"
                >
                  <span
                    ><img
                      class="me-1"
                      src="@/assets/images/bank-step2.svg"
                      alt="bank-step2" /></span
                  >處理中 <i class="bi bi-chevron-right me-2"></i>
                </li>
                <li v-else class="text-gray">
                  <span
                    ><img
                      class="me-1"
                      src="@/assets/images/bank-step2-gray.svg"
                      alt="bank-step2" /></span
                  >處理中 <i class="bi bi-chevron-right me-2"></i>
                </li>
                <li
                  v-if="memberListInfo.cashState === '提領成功'"
                  class="text-primary"
                >
                  <span
                    ><img
                      class="me-1"
                      src="@/assets/images/bank-step3.svg"
                      alt="bank-step3" /></span
                  >提領成功
                </li>
                <li v-else class="text-gray">
                  <span
                    ><img
                      class="me-1"
                      src="@/assets/images/bank-step3-gray.svg"
                      alt="bank-step3" /></span
                  >提領成功
                </li>
              </ul>
            </div>
            <!--  -->
            <!-- test -->
            <!-- <MemberCashView  v-model:customProps="cashState" /> -->
            <!-- <MemberCashView :inputData="parentData" @update="parentData = $event;" /> -->
            <!-- <div>{{ cashStateVal }}</div> -->
            <!--  -->
            <div
              v-if="
                memberListInfo.cashState === '審核中' ||
                memberListInfo.cashState === '處理中'
              "
              class="alert bg-success mt-4 mb-4 text-dark fw-medium"
              role="alert"
            >
              <p>
                *需累計達<span class="text-danger">NT$500</span
                >可提領狀態，最高提領金額為<span class="text-danger"
                  >NT$19,999</span
                >
              </p>
              <p>
                *限<span class="text-danger">7</span>天提領1次，提領後於<span
                  class="text-danger"
                  >5</span
                >個工作天內入帳
              </p>
              <p>
                *僅提供中國信託商業銀行帳戶免手續費，其他銀行將收取15元手續費
              </p>
              <p class="text-danger">*提領認證須年滿16歲!</p>
            </div>
            <!-- 提領失敗 -->
            <div
              v-if="memberListInfo.cashState === '提領失敗'"
              class="alert bg-danger mt-4 mb-4 pb-0 text-light fw-medium"
              role="alert"
            >
              <p>
                <i class="bi bi-exclamation-triangle-fill me-2"></i> 提領失敗!
              </p>
            </div>
            <!-- 提領成功 -->
            <div
              v-if="memberListInfo.cashState === '提領成功'"
              class="alert bg-success mt-4 mb-4 pb-0 text-dark fw-medium"
              role="alert"
            >
              <p><i class="bi bi-check-circle-fill me-2"></i>提領成功!</p>
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
                        for="userName"
                        class="col-auto col-form-label me-2 ms-1"
                        >暱稱</label
                      >
                      <input
                        type="text"
                        id="userName"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                        :value="memberListInfo.nickname"
                        disabled
                      />
                    </div>
                  </div>
                  <!--  -->
                  <div class="col-12 col-lg-4 mb-2">
                    <div class="d-flex">
                      <label
                        for="starNumber"
                        class="col-auto col-form-label me-2 ms-1"
                        >星行號</label
                      >
                      <input
                        type="text"
                        id="starNumber"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                        :value="memberListInfo.userAppId"
                        disabled
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
                      <input
                        type="text"
                        class="form-control"
                        value="已認證"
                        disabled
                      />
                      <!-- <select
                      class="form-select"
                      id="specificSizeSelect"
                      disabled
                    >
                      <option value="已認證">已認證</option>
                      <option value="未認證">未認證</option>
                    </select> -->
                    </div>
                  </div>
                </div>
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
                  <h2 class="text-secondary mt-4 fs-5 fw-bold">訂單確認</h2>
                </div>
              </div>
              <!--  -->
              <div class="table-responsive">
                <table class="table table-bordered align-middle">
                  <thead class="table-primary">
                    <tr>
                      <th scope="col">提領單號</th>
                      <th scope="col">申請日期</th>
                      <th scope="col">提領人</th>
                      <th scope="col">提領金額</th>
                      <th scope="col">手續費</th>
                      <th scope="col">實際可提領金額</th>
                    </tr>
                  </thead>
                  <tbody class="table-group-divider">
                    <tr>
                      <td>{{ memberListInfo.cashId }}</td>
                      <td>{{ memberListInfo.date }}</td>
                      <td>{{ memberListInfo.userName }}</td>
                      <td>{{ memberListInfo.cashMoney }}</td>
                      <td>{{ memberListInfo.cashFee }}</td>
                      <td>
                        {{ memberListInfo.cashMoney - memberListInfo.cashFee }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--  -->
              <!--  -->
              <div
                class="d-flex justify-content-between align-items-center mb-2"
              >
                <div>
                  <h2 class="text-primary mt-4 fs-6 fw-bold">提領資訊</h2>
                </div>
              </div>
              <div class="table-responsive">
                <table class="table table-bordered align-middle">
                  <thead class="table-primary">
                    <tr>
                      <th scope="col">銀行代號</th>
                      <th scope="col">提領銀行</th>
                      <th scope="col">提領帳號</th>
                    </tr>
                  </thead>
                  <tbody class="table-group-divider">
                    <tr>
                      <td>{{ memberListInfo.bankNo }}</td>
                      <td>{{ memberListInfo.bankName }}</td>
                      <td>{{ memberListInfo.bankId }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--  -->
            </div>
            <!--  -->
            <div class="col-12 mt-4">
              <div
                v-if="memberListInfo.cashState === '審核中'"
                class="d-flex justify-content-center flex-column flex-lg-row"
              >
                <button
                  type="button"
                  class="btn btn-primary text-light mb-2 me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#viewTaskModal"
                  @click="passMember()"
                >
                  審核通過</button
                ><button
                  type="button"
                  class="btn btn-danger mb-2"
                  data-bs-toggle="modal"
                  data-bs-target="#delModal"
                  @click="unPassMember()"
                >
                  未通過
                </button>
              </div>
              <!--  -->
              <div
                v-else-if="memberListInfo.cashState === '處理中'"
                class="d-flex justify-content-center flex-column flex-lg-row"
              >
                <button
                  type="button"
                  class="btn btn-primary text-light mb-2 me-2"
                  @click="passMemberCash()"
                >
                  確定轉帳</button
                ><button
                  type="button"
                  class="btn btn-danger mb-2"
                  data-bs-toggle="modal"
                  data-bs-target="#delModal"
                >
                  轉帳失敗
                </button>
              </div>
              <!--  -->
              <!--  -->
              <div
                v-else
                class="d-flex justify-content-center flex-column flex-lg-row"
              >
                <router-link
                  to="/member-cash"
                  class="btn btn-primary text-light mb-2"
                >
                  返回
                </router-link>
              </div>
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
  <!--  -->
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
          <h1 class="modal-title fs-5" id="delModalLabel">審核失敗</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-center">
          <p>點確認按鈕後狀態會改為審核失敗</p>
          <p>請務必確認資料是否正確!</p>
        </div>
        <div class="modal-footer d-flex justify-content-center">
          <button type="button" class="btn btn-light" data-bs-dismiss="modal">
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary text-white"
            data-bs-dismiss="modal"
            @click="unPassMember()"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <!-- <div
    class="modal fade"
    id="viewTaskModal"
    tabindex="-1"
    aria-labelledby="viewTaskModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="viewTaskModalLabel">確認轉帳</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-center">
          <p>您確認要審核通過這筆訂單?</p>
          <p>將要準備轉出金額給用戶。</p>
        </div>
        <div class="modal-footer d-flex justify-content-center">
          <button type="button" class="btn btn-light" data-bs-dismiss="modal">
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary text-white"
            data-bs-dismiss="modal"
            @click="passMemberCash()"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div> -->
  <!--  -->
  <!--  -->
</template>
<script>
//import MemberCashView from "@/views/member/MemberCashView.vue";
import TopHeader from "@/components/TopHeader.vue";
import Sidebar from "@/components/Sidebar.vue";
const api = `${import.meta.env.VITE_PATH}/withdraw/info`;

// import mitt from "mitt";
// const emitter = mitt();
export default {
  name: "MemberCashInfo",
  props: {
    cashId: {
      type: String,
    },
  },
  components: {
    TopHeader,
    Sidebar,
  },
  data() {
    return {
      //products: null,
      // cashListCheck: [
      //   {
      //     cashId: "ADFJLJ132464",
      //     date: "2023/01/01",
      //     cashUser: "陳小弟",
      //     cashMoney: "7777",
      //     cashMoneyFee: "5",
      //     cashState: "處理中",
      //     bankNum: "004",
      //     bankName: "台灣銀行",
      //     bankId: "123456456789",
      //   },
      // ],
      cashState: "String",
      cashStateVal: "0",
      //
      memberListInfo: [],
      //
      memberInfo: {
        cashId: "",
        cashState: "",
      },
    };
  },
  mounted() {
    this.getMembers();
  },
  methods: {
    // viewCashInfo() {
    //   router.push({ path: "/" });
    // },
    // created() {
    //   emitter.on("getData", (msg) => {
    //     this.cashStateVal = msg;
    //   });
    // },
    getMembers() {
      const getid = this.$route.params.cashId;
      this.$http.get(api + `?cashId=${getid}`).then((res) => {
        this.memberListInfo = res.data.data;
        this.memberInfo = this.memberListInfo;
        this.memberInfo.cashId = this.$route.params.cashId;
        //this.memberInfo.cashState = res.data.data.cashState;
        console.log(res.data.data);
      });
    },
    //
    passMember() {
      const vm = this;
      vm.isLoading = true;
      vm.memberInfo.cashId = this.$route.params.cashId;
      vm.memberInfo.cashState = "處理中";
      // this.$http.post(api, this.memberInfo).then((res) => {
      this.$http.post(api, {
        cashId: vm.memberInfo.cashId,
        cashState: vm.memberInfo.cashState,
      }).then((res) => {
        //this.memberInfo.cashState = "審核中";
        //   this.$swal({
        //   title: "狀態更新成功",
        //   icon: "success",
        //   showConfirmButton: false,
        //   timer: 1500,
        // });
        console.log(res.data.result);
      });
    },
    unPassMember() {
      const vm = this;
      vm.isLoading = true;
      vm.memberInfo.cashId = this.$route.params.cashId;
      vm.memberInfo.cashState = "提領失敗";
      this.$http.post(api, {
        cashId: vm.memberInfo.cashId,
        cashState: vm.memberInfo.cashState,
      }).then((res) => {
        this.$swal({
          title: "未通過",
          //text: "請相關人員到信箱查看是否有收到驗證信",
          icon: "warning",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(res.data.result);
      });
    },
    passMemberCash() {
      const vm = this;
      vm.memberInfo.cashId = this.$route.params.cashId;
      vm.memberInfo.cashState = "提領成功";
      this.$http.post(api, {
        cashId: vm.memberInfo.cashId,
        cashState: vm.memberInfo.cashState,
      }).then((res) => {
        this.$swal({
          title: "狀態更新成功",
          //text: "請相關人員到信箱查看是否有收到驗證信",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(res.data.result);
      });
    },
  },
};
</script>
