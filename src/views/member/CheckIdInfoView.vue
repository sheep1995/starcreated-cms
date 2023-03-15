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
          <div
            class="d-flex justify-content-between align-items-center mb-2 mt-4"
          >
            <h2 class="text-primary fs-3 fw-bold">實名認證</h2>
            <ul
              class="
                list-unstyled
                d-flex
                justify-content-center
                align-items-center align-self-center
                fw-bold
              "
            >
              <li class="text-primary">
                <span
                  ><img
                    class="me-1"
                    src="@/assets/images/approve-step1.svg"
                    alt="approve-step1"
                /></span>
                實名認證 <i class="bi bi-chevron-right me-2"></i>
              </li>
              <li class="text-primary">
                <span
                  ><img
                    class="me-1"
                    src="@/assets/images/approve-step2.svg"
                    alt="approve-step2" /></span
                >人工審核 <i class="bi bi-chevron-right me-2"></i>
              </li>
              <li class="text-gray">
                <span
                  ><img
                    class="me-1"
                    src="@/assets/images/bank-step3-gray.svg"
                    alt="bank-step3" /></span
                >審核完成
              </li>
            </ul>
          </div>
          <!--  -->
          <!-- 實名認證-失敗 -->
          <div
            class="alert bg-danger mt-4 mb-4 pb-0 text-light fw-medium"
            role="alert"
          >
            <p>
              <i class="bi bi-exclamation-triangle-fill me-2"></i>
              身份證與實名認證資料不相符，待用戶重新上傳身分證照片
            </p>
          </div>
          <!-- 已完成實名認證 -->
          <div
            class="alert bg-success mt-4 mb-4 pb-0 text-dark fw-medium"
            role="alert"
          >
            <p><i class="bi bi-check-circle-fill me-2"></i>已完成實名認證</p>
          </div>
          <!--  -->
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
                      for="userName"
                      class="col-auto col-form-label me-2 ms-1"
                      >暱稱</label
                    >
                    <input
                      type="text"
                      id="userName"
                      class="form-control"
                      aria-describedby="passwordHelpInline"
                      value="王曉明"
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
                      value="1234567890"
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
                    <select class="form-select" id="specificSizeSelect">
                      <option value="已認證">已認證</option>
                      <option value="未認證">未認證</option>
                      <option value="認證失敗">認證失敗</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <!--  -->
          <!--  -->
          <div class="container">
            <!--  -->
            <div class="d-flex justify-content-between align-items-center mb-2">
              <div>
                <h2 class="text-secondary mt-4 fs-5 fw-bold">實名認證資料</h2>
              </div>
            </div>
            <!--  -->
            <!--  -->
          </div>
          <!--  -->
          <form class="row mb-4" action="">
            <div class="col-12">
              <div class="mb-2">審核通的資料: {{ checkedNames }}</div>
            </div>
            <div class="col-12 col-md-6">
              <div class="fs-6 p-4 border border-0 shadow rounded-4">
                <div class="col-md-12 mb-3">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="王曉明"
                      id="checkName"
                      v-model="checkedNames"
                    />
                    <label class="form-check-label" for="checkName">
                      姓名: 王曉明
                    </label>
                  </div>
                </div>
                <div class="col-md-12 mb-3">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=" 077/06/10"
                      id="checkDay"
                      v-model="checkedNames"
                    />
                    <label class="form-check-label" for="checkDay">
                      出生年/月/日: 077/06/10
                    </label>
                  </div>
                </div>
                <div class="col-md-12 mb-3">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="A123456789"
                      id="checkId"
                      v-model="checkedNames"
                    />
                    <label class="form-check-label" for="checkId">
                      身分證字號: A123456789
                    </label>
                  </div>
                </div>
                <div class="col-md-12 mb-3">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="077/06/30"
                      id="checkIdDay"
                      v-model="checkedNames"
                    />
                    <label class="form-check-label" for="checkIdDay">
                      發證日期: 077/06/30
                    </label>
                  </div>
                </div>
                <div class="col-md-12 mb-3">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="初發"
                      id="checkIdType"
                      v-model="checkedNames"
                    />
                    <label class="form-check-label" for="checkIdType">
                      發證類型: 初發
                    </label>
                  </div>
                </div>
                <div class="col-md-12 mb-3">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="高雄市"
                      id="checkIdCity"
                      v-model="checkedNames"
                    />
                    <label class="form-check-label" for="checkIdCity">
                      發證地點: 高雄市
                    </label>
                  </div>
                </div>
                <!--  -->
                <!--  -->
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="col-12">
                <h2 class="text-dark mt-4 fs-6 fw-bold">身分證</h2>
              </div>
              <div class="row">
                <div class="col-12 col-lg-6">
                  <img  data-bs-toggle="modal"
                        data-bs-target="#idFrontmodal"
                    class="img-fluid img-id"
                    src="@/assets/images/img-id-2.png"
                    alt="id-img-front"
                  />
                  <div class="form-check d-flex justify-content-center" >
                    <input
                      class="form-check-input me-2"
                      type="checkbox"
                      value="正面"
                      id="idImgFront"
                      v-model="checkedNames"
                    />
                    <label class="form-check-label" for="idImgFront">
                      正面
                    </label>
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <img data-bs-toggle="modal"
                        data-bs-target="#idBackmodal"
                    class="img-fluid img-id"
                    src="@/assets/images/img-id-1.png"
                    alt="id-img-back"
                  />
                  <div class="form-check d-flex justify-content-center">
                    <input
                      class="form-check-input  me-2"
                      type="checkbox"
                      value="背面"
                      id="idImgBack"
                      v-model="checkedNames"
                    />
                    <label class="form-check-label" for="idImgBack">
                      背面
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <!--  -->
          <div class="col-12 mt-4">
            <div
              v-if="cashState === '審核中'"
              class="d-flex justify-content-center flex-column flex-lg-row"
            >
              <button
                type="button"
                class="btn btn-primary text-light mb-2 me-2"
                data-bs-toggle="modal"
                data-bs-target="#viewTaskModal"
              >
                審核通過</button
              ><button
                type="button"
                class="btn btn-danger mb-2"
                data-bs-toggle="modal"
                data-bs-target="#delModal"
              >
                未通過
              </button>
            </div>
            <!--  -->
            <!--  -->
            <div
              v-else
              class="d-flex justify-content-center flex-column flex-lg-row"
            >
              <router-link
                to="/member-check-id"
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
  <!-- Modal -->
  <div
    class="modal fade"
    id="idFrontmodal"
    tabindex="-1"
    aria-labelledby="idFrontmodalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header border-bottom-0">
          <h1 class="modal-title fs-5" id="idFrontmodalLabel"> </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-center">
        <img class="img-fluid" src="@/assets/images/img-id-2.png" alt="id-img-front"/>
        </div>
      </div>
    </div>
  </div>
  <!--  -->
  <!-- Modal -->
  <div
    class="modal fade"
    id="idBackmodal"
    tabindex="-1"
    aria-labelledby="idBackmodalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header border-bottom-0">
          <h1 class="modal-title fs-5" id="idBackmodalLabel"> </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-center">
        <img class="img-fluid" src="@/assets/images/img-id-1.png" alt="id-img-front"/>
        </div>
      </div>
    </div>
  </div>
  <!--  -->
</template>
<script>
import TopHeader from "@/components/TopHeader.vue";
import Sidebar from "@/components/Sidebar.vue";
const api = `${import.meta.env.VITE_PATH}/realname?realNameId=realName-1237370937-1678329764994`;

export default {
  components: {
    TopHeader,
    Sidebar,
  },
  data() {
    return {
      checkedNames: [],
      realNameId: 'realName-1237370937-1678329764994',
      idLists: [],
      filteredList: [],
      cashState: '審核中',
    };
  },
  // components: {
  //   MemberCashView,
  // },
  mounted() {
    this.getMembers();
  },
  methods: {
    async getMembers() {
      const res = await this.$http.get(api);
      // if (res.data.data.realNameId.length === 0) {
      //   this.idLists = [];
      // } else {
      //   this.idLists = res.data.data.realNameId;
      // }
      this.filteredList = this.idLists;
      console.log(res.data.data.realNameId);
    },
  },
}
</script>
