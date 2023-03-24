<script setup>
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
              <h2 class="text-secondary mt-4 fs-5 fw-bold">會員資料</h2>
            </div>
            <!--  -->
            <div class="col-12 mb-4">
              <div class="row">
                <div class="col-sm-12 col-md-2 mb-3 mb-sm-0 member-info">
                  <router-link
                    to="/member-order-list"
                    class="text-decoration-none"
                  >
                    <div class="card border border-2 rounded-4 border-primary">
                      <div class="card-body d-flex">
                        <div>
                          <img
                            :src="focusIcon"
                            @mouseover="focusIcon = focusIconWhite"
                            alt="icon-focus"
                          />
                          <!-- src="@/assets/images/icon-focus.svg" :src="pictureHover" @mouseover="hover = true" @mouseleave="hover = false"> -->
                        </div>
                        <div class="ms-2">
                          <h5 class="card-title fs-6">訂閱人數</h5>
                          <p class="card-text fs-4 fw-bold">999</p>
                        </div>
                      </div>
                    </div>
                  </router-link>
                </div>
                <div class="col-sm-12 col-md-2 mb-3 mb-sm-0 member-info">
                  <router-link
                    to="/member-fans-list"
                    class="text-decoration-none"
                  >
                    <div class="card border border-2 rounded-4 border-primary">
                      <div class="card-body d-flex">
                        <div>
                          <img
                            src="@/assets/images/icon-fans.svg"
                            alt="icon-fans"
                          />
                        </div>
                        <div class="ms-2">
                          <h5 class="card-title fs-6">粉絲人數</h5>
                          <p class="card-text fs-4 fw-bold">222</p>
                        </div>
                      </div>
                    </div>
                  </router-link>
                </div>
                <div class="col-sm-12 col-md-2 mb-3 mb-sm-0 member-info">
                  <router-link
                    to="/member-block-list"
                    class="text-decoration-none"
                  >
                    <div class="card border border-2 rounded-4 border-primary">
                      <div class="card-body d-flex">
                        <div>
                          <img
                            src="@/assets/images/icon-block.svg"
                            alt="icon-block"
                          />
                        </div>
                        <div class="ms-2">
                          <h5 class="card-title fs-6">封鎖人數</h5>
                          <p class="card-text fs-4 fw-bold">9999</p>
                        </div>
                      </div>
                    </div>
                  </router-link>
                </div>
                <!--  -->
                <div class="col-sm-12 col-md-2 mb-3 mb-sm-0">
                  <div class="card border border-2 rounded-4 border-gray-c1">
                    <div class="card-body d-flex">
                      <div>
                        <img
                          src="@/assets/images/icon-thumb.svg"
                          alt="icon-thumb"
                        />
                      </div>
                      <div class="ms-2">
                        <h5 class="card-title fs-6">按讚次數</h5>
                        <p class="card-text fs-4 fw-bold text-primary">123</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-md-2 mb-3 mb-sm-0">
                  <div class="card border border-2 rounded-4 border-gray-c1">
                    <div class="card-body d-flex">
                      <div>
                        <img
                          src="@/assets/images/icon-collect.svg"
                          alt="icon-collect"
                        />
                      </div>
                      <div class="ms-2">
                        <h5 class="card-title fs-6">秘藏數量</h5>
                        <p class="card-text fs-4 fw-bold text-primary">123</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--  -->
            <!--  -->
          </section>
          <!--  -->
          <!--  -->
          <div class="col-lg-12">
            <!--  -->
            <div>
              <h2 class="text-secondary mt-4 fs-5 fw-bold">基本資料</h2>
            </div>
            <!--  -->
            <div class="table-responsive">
              <table class="table table-bordered align-middle star-table">
                <thead class="table-primary">
                  <tr>
                    <th scope="col">暱稱</th>
                    <th scope="col">星行號</th>
                    <th scope="col">帳號</th>
                    <th scope="col">性別</th>
                    <th scope="col">地區</th>
                    <th scope="col" class="text-center">頭像</th>
                    <th scope="col" class="text-center">背景圖</th>
                    <th scope="col">出生日期</th>
                    <th scope="col">實名認證</th>
                    <th scope="col">簡介</th>
                  </tr>
                </thead>
                <tbody class="table-group-divider">
                  <tr>
                    <th scope="row">曉明</th>
                    <td>4543413131</td>
                    <td>123@gmail.com</td>
                    <td>男</td>
                    <td>台南市</td>
                    <td>
                      <div class="d-flex justify-content-center">
                        <img
                          class="rounded-circle img-user"
                          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
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
                    <td>1998/01/22</td>
                    <td>未認證</td>
                    <td>沒有早餐超開心沒有，天就道吐沒辦工作室。</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!--  -->
            <div class="d-flex justify-content-between align-items-center mb-2">
              <div>
                <h2 class="text-secondary mt-4 fs-5 fw-bold">提領資訊</h2>
              </div>
              <div class="d-flex align-items-center;">
                <button
                  type="button"
                  class="btn btn-primary text-white me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#bankDetailModal"
                >
                  <span>
                    <img
                      src="@/assets/images/icon_bank_detail.svg"
                      alt="icon_bank_detail"
                    />
                  </span>
                  查看提領紀錄
                </button>

                <!-- <router-link to="/staff-add" class="btn btn-primary text-light">
                <span>
                  <img
                    src="@/assets/images/icon_bank_detail.svg"
                    alt="icon_bank_detail"
                  />
                </span>
                查看提領紀錄</router-link> -->
              </div>
            </div>
            <div class="row card-group">
              <div class="col-md-12 mb-4">
                <div class="col-md-12">
                  <!--  -->
                  <div class="row fs-6 p-4 border border-0 shadow rounded-4">
                    <ul class="list-unstyled mb-0">
                      <li class="fw-medium mb-1">
                        可提領金額:&nbsp;
                        <span class="text-primary fw-bold"> NT$ 152,335</span>
                      </li>
                      <li class="fw-medium mb-1">
                        審核中金額:&nbsp;<span class="text-primary fw-bold">
                          NT$ 3,300</span
                        >
                      </li>
                      <li class="fw-medium mb-1">
                        目前已提領金額:&nbsp;<span class="text-primary fw-bold">
                          NT$ 2,999</span
                        >
                      </li>
                    </ul>
                  </div>
                  <!--  -->
                  <!--  -->
                </div>
              </div>
            </div>
            <!--  -->
            <!--  -->
            <div class="d-flex justify-content-between align-items-center mb-2">
              <div>
                <h2 class="text-secondary mt-4 fs-5 fw-bold">管理作品</h2>
              </div>
              <div class="d-flex align-items-center;">
                <div class="row g-3 align-items-center">
                  <div class="col-auto">
                    <label for="inputType" class="col-form-label"
                      >作品類型</label
                    >
                  </div>
                  <div class="col-auto">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <!-- <option selected>所有類型</option> -->
                      <option value="所有類型">所有類型</option>
                      <option value="照片">照片</option>
                      <option value="影片">影片</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <!--  -->
            <div class="row user-work">
              <div
                class="col-md-3"
                v-for="(item, index) in userWork"
                :key="index"
              >
                <div class="card mb-4">
                  <img
                    :src="item.imgUrl"
                    class="card-img-top"
                    :alt="item.name"
                  />
                  <div class="card-body text-left">
                    <h5 class="card-title fs-6 fw-bold">
                      作品類型: {{ item.imgType }}
                    </h5>
                    <p class="fs-6 fw-bold">日期: {{ item.day }}</p>
                  </div>
                  <div class="card-footer bg-white border-top-0">
                    <!--  -->
                    <div class="col-12 mt-4">
                      <div
                        class="d-flex justify-content-between flex-column flex-lg-row"
                      >
                        <button
                          type="button"
                          class="btn btn-info text-light mb-2"
                          data-bs-toggle="modal"
                          data-bs-target="#viewTaskModal"
                        >
                          <i class="bi bi-eye-fill"></i> 檢視
                        </button>
                        <button
                          type="button"
                          class="btn btn-danger mb-2"
                          data-bs-toggle="modal"
                          data-bs-target="#delModal"
                        >
                          <i class="bi bi-trash-fill"></i> 刪除
                        </button>
                      </div>
                    </div>
                    <!--  -->
                  </div>
                </div>
              </div>
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
        </div>
      </div>
    </div>
    <!--  -->
  </div>
  <!--  -->
  <!-- Modal -->
  <div
    class="modal fade modal-xl"
    id="bankDetailModal"
    tabindex="-1"
    aria-labelledby="bankDetailModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header border-bottom-0">
          <h1 class="modal-title fs-5 text-primary" id="bankDetailModalLabel">
            提領紀錄
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
                <!-- table -->
                <div class="table-responsive">
                  <table class="table table-bordered align-middle star-table">
                    <thead class="table-primary">
                      <tr>
                        <th scope="row">#</th>
                        <th scope="col">提領時間</th>
                        <th scope="col">提領金額</th>
                        <th scope="col">狀態</th>
                        <th scope="col">提領單號</th>
                        <th scope="col">提領銀行</th>
                        <th scope="col">提領帳號</th>
                      </tr>
                    </thead>
                    <tbody class="table-group-divider">
                      <tr v-for="(item, index) in bankDetail" :key="index">
                        <th scope="row">{{ item.id }}</th>
                        <td>{{ item.withdrawalTime }}</td>
                        <td>{{ item.withdrawalMoney }}</td>
                        <td>{{ item.state }}</td>
                        <td>{{ item.withdrawalNumber }}</td>
                        <td>{{ item.withdrawalBank }}</td>
                        <td>{{ item.withdrawalId }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- table end -->
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
                關閉
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
    class="modal fade modal-xl"
    id="viewTaskModal"
    tabindex="-1"
    aria-labelledby="viewTaskModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header border-bottom-0">
          <h1 class="modal-title fs-5 text-primary" id="viewTaskModalLabel">
            貼文內容
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
          <div class="row g-0 text-center post-content">
            <div class="col-sm-12 col-md-3">
              <div class="text-start">
                <img
                  class="mb-4 img-post"
                  src="https://picsum.photos/200/300"
                  alt="img-task"
                />
                <ul class="fw-bold list-unstyled">
                  <li class="mb-1 d-flex align-items-center">
                    <span class="me-1"
                      ><img
                        src="@/assets/images/icon-like-color.svg"
                        alt="icon-like-color"
                      />
                    </span>
                    按讚次數: <span class="text-primary ms-1">123</span>
                  </li>
                  <li class="mb-1 d-flex align-items-center">
                    <span class="me-1"
                      ><img
                        src="@/assets/images/icon-collect-color.svg"
                        alt="icon-collect-color"
                      />
                    </span>
                    秘藏數量: <span class="text-primary ms-1">123</span>
                  </li>
                  <li class="mb-1 d-flex align-items-center">
                    <span class="me-1"
                      ><img
                        src="@/assets/images/icon-share-color.svg"
                        alt="icon-share-color"
                      />
                    </span>
                    分享人數: <span class="text-primary ms-1">9999</span>
                  </li>
                  <li class="mb-1 d-flex align-items-center">
                    <span class="me-1"
                      ><img
                        src="@/assets/images/icon-gift-color.svg"
                        alt="icon-gift-color"
                      />
                    </span>
                    愛的鼓勵: <span class="text-primary ms-1">99</span>
                  </li>
                </ul>
              </div>
              <div></div>
            </div>
            <div class="col-12 col-md-8">
              <div class="text-start">
                <div class="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    class="form-label fs-6 fw-medium"
                    >照片描述</label
                  >
                  <textarea
                    class="form-control text-start mb-4"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    disabled
                  >
照片描述照片描述照片描述照片描述照片描述照片描述照片描述
                  </textarea>
                </div>
                <p class="fw-medium">新增地點: 台北綠豆湯</p>
                <p class="fw-medium">標記: 古拳法傳人</p>
                <p class="fw-medium">Hashtag: 我想上推薦、生活</p>
                <p class="fw-medium">頻道分類: 旅行</p>
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
                class="btn btn-primary mb-2 text-light"
                data-bs-dismiss="modal"
              >
                關閉
              </button>
              <button
                type="button"
                class="btn btn-danger mb-2 ms-2"
                data-bs-toggle="modal"
                data-bs-target="#delModal"
              >
                <i class="bi bi-trash-fill"></i> 刪除
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
import focusIcon from "@/assets/images/icon-focus.svg";
import focusIconWhite from "@/assets/images/icon-focus-fff.svg";
import fansIcon from "@/assets/images/icon-fans.svg";
import thumbIcon from "@/assets/images/icon-thumb.svg";
import collectIcon from "@/assets/images/icon-collect.svg";
import blockIcon from "@/assets/images/icon-block.svg";
//import image from "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80";
export default {
  data() {
    return {
      products: null,
      //image: image,
      //image:
      //"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      //loading: true,
      focusIcon: focusIcon,
      focusIconWhite: focusIconWhite,
      hover: false,
      userWork: [
        {
          imgType: "照片",
          day: "2023/12/01",
          imgUrl: "https://picsum.photos/200/300",
        },
        {
          imgType: "影片",
          day: "2023/12/01",
          imgUrl: "https://picsum.photos/200/300",
        },
        {
          imgType: "照片",
          day: "2023/12/01",
          imgUrl: "https://picsum.photos/200/300",
        },
        {
          imgType: "照片",
          day: "2023/12/01",
          imgUrl: "https://picsum.photos/200/300",
        },
        {
          imgType: "照片",
          day: "2023/12/01",
          imgUrl: "https://picsum.photos/200/300",
        },
        {
          imgType: "照片",
          day: "2023/12/01",
          imgUrl: "https://picsum.photos/200/300",
        },
        {
          imgType: "照片",
          day: "2023/12/01",
          imgUrl: "https://picsum.photos/200/300",
        },
        {
          imgType: "照片",
          day: "2023/12/01",
          imgUrl: "https://picsum.photos/200/300",
        },
      ],
      bankDetail: [
        {
          id: "1",
          withdrawalTime: "2022/08/20",
          withdrawalMoney: "3300",
          state: "審核中",
          withdrawalNumber: "ADFJLJ132464",
          withdrawalBank: "台灣銀行",
          withdrawalId: "123456789",
        },
        {
          id: "2",
          withdrawalTime: "2022/08/10",
          withdrawalMoney: "3300",
          state: "處理中",
          withdrawalNumber: "ADFJLJ132464",
          withdrawalBank: "台灣銀行",
          withdrawalId: "123456789",
        },
        {
          id: "3",
          withdrawalTime: "2022/08/08",
          withdrawalMoney: "3300",
          state: "提款成功",
          withdrawalNumber: "ADFJLJ132464",
          withdrawalBank: "台灣銀行",
          withdrawalId: "123456789",
        },
        {
          id: "4",
          withdrawalTime: "2022/08/07",
          withdrawalMoney: "3300",
          state: "提款失敗",
          withdrawalNumber: "ADFJLJ132464",
          withdrawalBank: "台灣銀行",
          withdrawalId: "123456789",
        },
      ],
    };
  },
  computed: {
    pictureHover() {
      if (this.hover == true) {
        return this.focusIcon;
      } else {
        return this.fansIcon;
      }
    },
  },
};
</script>
