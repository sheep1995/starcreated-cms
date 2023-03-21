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
              <router-link to="/member-check-id" class="breadcrumb-item">實名認證列表</router-link>
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
              <li v-if="idListInfo.realNameState === 'finish' || idListInfo.realNameState === 'review'" class="text-primary">
                <span>
                  <img class="me-1" src="@/assets/images/approve-step1.svg" alt="approve-step1"/>
                </span>
                實名認證 <i class="bi bi-chevron-right me-2"></i>
              </li>
              <li v-else class="text-gray">
                <span>
                  <img class="me-1" src="@/assets/images/approve-step1-gray.svg" alt="approve-step1"/>
                </span>
                實名認證 <i class="bi bi-chevron-right me-2"></i>
              </li>
              <li v-if="idListInfo.realNameState === 'finish' || idListInfo.realNameState === 'review'" class="text-primary">
                <span>
                  <img class="me-1" src="@/assets/images/approve-step2.svg" alt="approve-step2" />
                  </span>人工審核 <i class="bi bi-chevron-right me-2"></i>
              </li>
              <li v-else class="text-gray">
                <span>
                  <img class="me-1" src="@/assets/images/bank-step2-gray.svg" alt="approve-step2" />
                  </span>人工審核 <i class="bi bi-chevron-right me-2"></i>
              </li>
              <li v-if="idListInfo.realNameState === 'finish'" class="text-primary">
                <span>
                  <img class="me-1" src="@/assets/images/bank-step3.svg" alt="bank-step3" />
                  </span> 審核完成
              </li>
              <li v-else class="text-gray">
                <span>
                  <img class="me-1" src="@/assets/images/bank-step3-gray.svg" alt="bank-step3" />
                  </span> 審核完成
              </li>
            </ul>
          </div>
          <!--  -->
          <!-- 已完成實名認證 -->
          <div v-if="idListInfo.realNameState === 'finish'"
            class="alert bg-success mt-4 mb-4 pb-0 text-dark fw-medium"
            role="alert"
          >
            <p><i class="bi bi-check-circle-fill me-2"></i>已完成實名認證</p>
          </div>
          <!--  -->
          <!-- 實名認證-失敗 -->
          <div v-if="idListInfo.realNameState === 'fail'"
            class="alert bg-danger mt-4 mb-4 pb-0 text-light fw-medium"
            role="alert"
          >
            <p>
              <i class="bi bi-exclamation-triangle-fill me-2"></i>
              身份證與實名認證資料不相符，待用戶重新上傳身分證照片
            </p>
          </div>
          <div class="mb-4">
            <div class="fs-6 border border-1 rounded-4 pt-4">
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
                      :value= idListInfo.nickname
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
                      :value= idListInfo.userAppId
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
                    <!-- "idListInfo.realNameState === 'finish'" -->
                    <select v-if="idListInfo.realNameState === 'finish'" class="form-select" id="specificSizeSelect">
                      <!-- <option :value="finish">已認證</option>
                      <option :value="fail">認證失敗</option> -->
                      <option disabled value="">已認證</option>
                    </select>
                    <select v-else class="form-select" id="specificSizeSelect" v-model="userInfo.realNameStateDone">
                      <!-- <option :value="finish">已認證</option>
                      <option :value="fail">認證失敗</option> -->
                      <option>已認證</option>
                      <option>認證失敗</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--  -->
          <!--  -->
          <div class=" ">
            <!--  -->
            <div class="d-flex justify-content-between align-items-center mb-2">
              <div class="col-12">
                <h2 class="text-secondary mt-4 fs-5 fw-bold">實名認證資料</h2>
              </div>
            </div>
            <!--  -->
            <!--  -->
          </div>
          <!--  -->
          <div class="row mb-4" >
            <div class="col-12">
              <div class="mb-2">審核通的資料: {{ checkedNames }}</div>
              <div>{{ idListInfo.realNameState }}</div>
              <!-- <div>{{ realNameState }}</div> -->
            </div>
            <div class="col-12 col-md-6">
              <div class="fs-6 p-4 border border-0 shadow rounded-4">
                <div class="col-md-12 mb-3">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :value=idListInfo.userName
                      id="checkName"
                      v-model="checkedNames.userNameValid"
                      :disabled="idListInfo.realNameState === 'finish'"
                    />
                    <label class="form-check-label" for="checkName">
                      姓名: {{ idListInfo.userName }}
                    </label>
                  </div>
                </div>
                <div class="col-md-12 mb-3">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :value=idListInfo.birthday
                      id="checkDay"
                      v-model="checkedNames.birthdayValid"
                      :disabled="idListInfo.realNameState === 'finish'"
                    />
                    <label class="form-check-label" for="checkDay">
                      出生年/月/日: {{ idListInfo.birthday }}
                    </label>
                  </div>
                </div>
                <div class="col-md-12 mb-3">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :value=idListInfo.idNumber
                      id="checkId"
                      v-model="checkedNames.idNumberValid"
                      :disabled="idListInfo.realNameState === 'finish'"
                    />
                    <label class="form-check-label" for="checkId">
                      身分證字號:  {{ idListInfo.idNumber }}
                    </label>
                  </div>
                </div>
                <div class="col-md-12 mb-3">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="077/06/30"
                      :value=idListInfo.issueDate
                      id="checkIdDay"
                      v-model="checkedNames.issueDateValid"
                      :disabled="idListInfo.realNameState === 'finish'"
                    />
                    <label class="form-check-label" for="checkIdDay">
                      發證日期: {{ idListInfo.issueDate }}
                    </label>
                  </div>
                </div>
                <div class="col-md-12 mb-3">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :value=idListInfo.issueType
                      id="checkIdType"
                      v-model="checkedNames.issueTypeValid"
                      :disabled="idListInfo.realNameState === 'finish'"
                    />
                    <label class="form-check-label" for="checkIdType">
                      發證類型: {{ idListInfo.issueType }}
                    </label>
                  </div>
                </div>
                <div class="col-md-12 mb-3">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :value=idListInfo.issueArea
                      id="checkIdCity"
                      v-model="checkedNames.issueAreaValid"
                      :disabled="idListInfo.realNameState === 'finish'"
                    />
                    <label class="form-check-label" for="checkIdCity">
                      發證地點: {{ idListInfo.issueArea }}
                    </label>
                  </div>
                </div>
                <!--  -->
                <!--  -->
              </div>
              <p  class="fs-6 mt-4 text-primary">*資料正確請在前面打勾</p>
            </div>
            <div class="col-12 col-md-6">
              <div class="col-12">
                <h2 class="text-dark mt-4 fs-6 fw-bold">身分證</h2>
              </div>
              <div class="row">
                <div class="col-12 col-lg-6">
                  <div class="img-id">
                    <img v-if="idListInfo.frontImage === '' " src="@/assets/images/img-id-2.png" alt="img-404" class="img-fluid">
                    <img v-else data-bs-toggle="modal"
                          data-bs-target="#idFrontmodal"
                      class="img-fluid"
                      :src="idListInfo.frontImage"
                      alt="id-img-front"
                    />
                  </div>
                  <div class="form-check d-flex justify-content-center" >
                    <input
                      class="form-check-input me-2"
                      type="checkbox"
                      id="idImgFront"
                      v-model="checkedNames.frontImageValid"
                      :disabled="idListInfo.realNameState === 'finish'"
                    />
                    <label class="form-check-label" for="idImgFront">
                      正面
                    </label>
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <div class="img-id">
                    <img v-if="idListInfo.backImage === '' " src="@/assets/images/img-id-1.png" alt="id-img-back" class="img-fluid">
                    <img v-else data-bs-toggle="modal"
                          data-bs-target="#idBackmodal"
                      class="img-fluid"
                      :src="idListInfo.backImage"
                      alt="id-img-front"
                    />
                  </div>
                  <div class="form-check d-flex justify-content-center">
                    <input
                      class="form-check-input  me-2"
                      type="checkbox"
                      id="idImgBack"
                      v-model="checkedNames.backImageValid"
                      :disabled="idListInfo.realNameState === 'finish'"
                    />
                    <label class="form-check-label" for="idImgBack">
                      背面
                    </label>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <!--  -->
          <!-- <div>v Real Name ID: *** {{ $route.params.realNameId }} ***$route.params.realNameId </div>
          <div>v Real Name ID: *** {{ realNameId }} ***</div>
            <p>v Real Name ID  apiinfo: {{ apiinfo }}</p> -->
          <!--  -->
          <div class="col-12 mt-4">
            <!-- <div v-if="realNameState === 'finish'" -->
            <div v-if="idListInfo.realNameState === 'review'"
              class="d-flex justify-content-center flex-column flex-lg-row"
            >
              <button
                type="button"
                class="btn btn-primary text-light mb-2 me-2"
                data-bs-toggle="modal"
                data-bs-target="#passModal"
                @click.prevent="passIdinfo()"
                :disabled="!isAllRequiredFieldsValid"
              >審核通過</button>
              <button
                type="button"
                class="btn btn-danger mb-2"
                @click="unpassIdinfo()"
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
        <div class="modal-body text-center ">
          <div class="img-id-modal">
            <img v-if="idListInfo.frontImage === '' " src="@/assets/images/img-id-2.png" alt="img-404" class="img-fluid">
            <img v-else data-bs-toggle="modal"
                  data-bs-target="#idFrontmodal"
              class="img-fluid"
              :src="idListInfo.frontImage"
              alt="id-img-front"
            />
          </div>
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
          <div class="img-id-modal">
            <img v-if="idListInfo.backImage === '' " src="@/assets/images/img-id-1.png" alt="img-404" class="img-fluid">
            <img v-else data-bs-toggle="modal"
                  data-bs-target="#idFrontmodal"
              class="img-fluid"
              :src="idListInfo.backImage"
              alt="id-img-back"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--  -->
  <!-- Modal -->
  <div class="modal fade" id="passModal" tabindex="-1" aria-labelledby="passModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="passModalLabel">審核通過</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-center">
          確認要審核通過此筆訂單?</div>
        <div class="modal-footer d-flex justify-content-center">
          <button type="button" class="btn btn-light" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-primary text-white" @click="passIdinfo()" data-bs-dismiss="modal">
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
const api = `${import.meta.env.VITE_PATH}/realname/info`;
//const api = `${import.meta.env.VITE_PATH}/realname/info?realNameId=realName-1162608596-1678868707689`;
//const api = `${import.meta.env.VITE_PATH}/realname/info?realNameId=realName-1237370937-1678326993181`;
//const api2 = `${import.meta.env.VITE_PATH}`;

//TESTT
//const api = `${import.meta.env.VITE_PATH}/realname`;
const apiPost = `${import.meta.env.VITE_PATH}/realname/info`;


//realName-1237370937-1678329708869
export default {
  name: 'CheckIdInfoView',
  props: {
    realNameId: {
      type: String,
      //required: true,
    },
  },
  // props: ['id'],
  // props: {
  //   id: {
  //     type: String,
  //     required: true,
  //   },
  // },
  computed: {
// const apiinfo = `${import.meta.env.VITE_PATH}/realname/info?realNameId=${this.realNameId}`;
    apiinfo() {
      //return this.$route.params.id;
      return this.$route.params.realNameId;
      //return this.id
      //return `${import.meta.env.VITE_PATH}/realname/info?realNameId=${this.realNameId}`;
    },
    // realNameId() {
    //   return this.$route.params.realNameId;
    // }
  },
  components: {
    TopHeader,
    Sidebar,
  },
  data() {
    return {
      checkedNames: {
        userNameValid: false,
        birthdayValid: false,
        idNumberValid: false,
        issueDateValid: false,
        issueTypeValid: false,
        issueAreaValid: false,
        frontImageValid: false,
        backImageValid: false,
      },
      // realNameId: 'realName-1237370937-1678329764994',
      //realNameId: '',
      idListInfo: [],
      filteredList: [],
      //cashState: '審核中',
      statusText: {
        "finish": '已認證',
        "fail": '認證失敗',
      },
      //realNameState: 'fail',
      //realNameState: 'review',
      realNameStateDone: '',
      realNameState: 'finish',
      //2.5 post
      userInfo: {
        realNameId: '',
        realNameState: null,
        errorItems: {
          userName: true,
          birthday: true,
          idNumber: true,
          issueDate: true,
          issueType: true,
          issueArea: true,
          frontImage: true,
          backImage: true
      }
      },
      userInfoFail: {
        realNameId: 'realName-1237370937-1678329708869',
        realNameState: 'fail',
        errorItems: {
          userName: false,
          birthday: false,
          idNumber: false,
          issueDate: false,
          issueType: false,
          issueArea: false,
          frontImage: false,
          backImage: false
      }
      },
      isLoading: false,
      //
      //realNameId: this.$route.params.realNameId,
      //realNameInfo: null,
      //realNameId: 'item.realNameId',
    };
    
  },
  // components: {
  //   MemberCashView,
  // },
  mounted() {
    this.getMembers();
    // const realNameId = this.$route.params.realNameId;
    // console.log(realNameId);
    //console.log('ID:', this.id);
  },
  methods: {
    getMembers() {
      const getid = this.$route.params.realNameId;
      this.$http.get(`https://stage.westar-cms.com/v1/realname/info?realNameId=${getid}`).then((res) => {
        //const editStaff = res.data.data.list;
        this.idListInfo = res.data.data;
        this.realNameStateDone = res.data.data.realNameState;
        if (this.idListInfo.realNameState === 'finish') {
          // 实名认证已完成，全部禁用
          //this.checkedItems = [];
          this.checkedNames.userNameValid = true;
          this.checkedNames.birthdayValid = true;
          this.checkedNames.idNumberValid = true;
          this.checkedNames.issueDateValid = true;
          this.checkedNames.issueTypeValid = true;
          this.checkedNames.issueAreaValid = true;
          this.checkedNames.frontImageValid = true;
          this.checkedNames.backImageValid = true;
        } else {
          // 实名认证未完成，全部启用
          this.errorItems = [];
        }
        //
      console.log(res.data.data);
      });
      console.log(`api+?realNameId=${getid}`);
    },
    // async getMembers() {
    //   const getid = $route.params.realNameId;
    //   this.$http.get( api+`/?userId=${this.saveUserId}`
    //   //const url = `https://stage.westar-cms.com/v1/realname/info?realNameId=${getid}`;
    //   const res = await this.$http.get( api+`${realNameId}` );
    //   // if (res.data.data.realNameId.length === 0) {
    //   //   this.idLists = [];
    //   // } else {
    //   //   this.idLists = res.data.data.realNameId;
    //   // }
    //   //this.idListInfo = res.data.data;
    //   console.log(res.data);
    //   console.log(getid);
    // },
    passIdinfo() {
      const vm = this;
      vm.isLoading = true;
      // this.$https.post(apiName, this.addUser).then((res) => {
      this.$http.post(apiPost, this.userInfo).then((res) => {
        const code = res.data.result.code;
        console.log(res.data.result);
      });
    },
    // async passIdinfo() {
    //   try {
    //     // const res = await axios.post(api,{ realNameState: 'finish' });
    //     const res = await this.axios.post(api);
    //     this.$swal({
    //     title: "通過審核",
    //     //text: "請相關人員到信箱查看是否有收到驗證信",
    //     icon: "success",
    //     showConfirmButton: false,
    //     timer: 1500,
    //   });
    //   console.log('Real name state updated successfully: ', res.data);
    //   } catch (error) {
    //     console.error('Failed to update real name state: ', error);
    //   }
    // },
    unpassIdinfo() {
      //userInfoFail
      this.$http.post(apiPost, this.userInfoFail).then((res) => {
        const code = res.data.result.code;
        console.log(res.data.result);
      this.$swal({
        title: "未通過審核",
        //text: "請相關人員到信箱查看是否有收到驗證信",
        icon: "warning",
        showConfirmButton: false,
        timer: 1500,
      });
      });
    },
    isAllRequiredFieldsValid() {
      if (!this.realNameId) {
        return false;
      }
      const requiredFields = [
        this.userNameValid,
        this.birthdayValid,
        this.idNumberValid,
        this.issueDateValid,
        this.issueTypeValid,
        this.issueAreaValid,
        this.frontImageValid,
        this.backImageValid,
      ];
      console.log(isAllRequiredFieldsValid);
      return requiredFields.every(field => field === true);
    },
    errorItems() {
      return {
        userName: !this.userNameValid,
        birthday: !this.birthdayValid,
        idNumber: !this.idNumberValid,
        issueDate: !this.issueDateValid,
        issueType: !this.issueTypeValid,
        issueArea: !this.issueAreaValid,
        frontImage: !this.frontImageValid,
        backImage: !this.backImageValid,
      };
    },
    //
  },
}
</script>
