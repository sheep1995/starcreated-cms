<script setup>
//import SidebarMenu from "@/components/SidebarMenu.vue";
import SidebarMenu2 from "@/components/SidebarMenu2.vue";
import TopHeader from "@/components/TopHeader.vue";
</script>
<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <!--  -->
      <SidebarMenu2 />
      <!--  -->
      <div class="col py-3">
        <!-- <RouterView /> -->
        <section class="container">
          <TopHeader />
          <nav class="bg-light pt-2 pb-2 rounded" aria-label="breadcrumb">
            <ol class="breadcrumb d-flex align-items-center mb-0 px-2">
              <li class="breadcrumb-item"><a href="#">首頁</a></li>
              <li class="breadcrumb-item active" aria-current="page">
                會員管理
              </li>
            </ol>
          </nav>
          <!--  -->
          <div>
            <h2 class="text-primary mt-4 fs-3 fw-bold">
              <span><i class="bi bi-person-fill fs-3 text-secondary"></i></span>
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
              <div class="col-sm-12 col-md-2 mb-3 mb-sm-0">
                <div class="card border border-2 border-primary">
                  <div class="card-body d-flex">
                    <div><img src="" alt="" />123</div>
                    <div class="ms-2">
                      <h5 class="card-title fs-6">訂閱人數</h5>
                      <p class="card-text fs-4 fw-bold text-primary">999</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-2 mb-3 mb-sm-0">
                <div class="card">
                  <div class="card-body d-flex">
                    <div><img src="" alt="" />123</div>
                    <div class="ms-2">
                      <h5 class="card-title fs-6">粉絲人數</h5>
                      <p class="card-text fs-4 fw-bold text-primary">222</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-2 mb-3 mb-sm-0">
                <div class="card">
                  <div class="card-body d-flex">
                    <div><img src="" alt="" />123</div>
                    <div class="ms-2">
                      <h5 class="card-title fs-6">按讚次數</h5>
                      <p class="card-text fs-4 fw-bold text-primary">123</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-2 mb-3 mb-sm-0">
                <div class="card">
                  <div class="card-body d-flex">
                    <div><img src="" alt="" />123</div>
                    <div class="ms-2">
                      <h5 class="card-title fs-6">秘藏數量</h5>
                      <p class="card-text fs-4 fw-bold text-primary">123</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-2 mb-3 mb-sm-0">
                <div class="card">
                  <div class="card-body d-flex">
                    <div><img src="" alt="" />123</div>
                    <div class="ms-2">
                      <h5 class="card-title fs-6">封鎖人數</h5>
                      <p class="card-text fs-4 fw-bold text-primary">9999</p>
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

        <div class="container">
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
              <router-link to="/staff-add" class="btn btn-primary text-light">
                <span>
                  <img
                    src="@/assets/images/icon_bank_detail.svg"
                    alt="icon_bank_detail"
                  />
                </span>
                查看提領紀錄</router-link
              >
            </div>
          </div>
          <div class="row card-group">
            <div class="col-md-12 mb-4">
              <div class="col-md-12">
                <!--  -->
                <div class="row fs-6 p-4 border border-0 shadow rounded-4">
                  <ul class="list-unstyled">
                    <li class="fw-medium">
                      可提領金額:
                      <span class="text-primary fw-bold"> NT$ 152,335</span>
                    </li>
                    <li class="fw-medium">
                      審核中金額:<span class="text-primary fw-bold">
                        NT$ 3,300</span
                      >
                    </li>
                    <li class="fw-medium">
                      目前已提領金額:<span class="text-primary fw-bold">
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
                  <label for="inputType" class="col-form-label">作品類型</label>
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
                <img :src="item.imgUrl" class="card-img-top" :alt="item.name" />
                <div class="card-body text-left">
                  <h5 class="card-title fs-6 fw-bold">
                    作品類型: {{ item.imgType }}
                  </h5>
                  <p class="fs-6 fw-bold">日期: {{ item.day }}</p>
                </div>
                <div class="card-footer bg-white border-top-0">
                  <!--  -->
                  <div class="col-12 mt-4">
                    <div class="d-flex justify-content-between">
                      <button
                        type="button"
                        class="btn btn-info text-light"
                        data-bs-toggle="modal"
                        data-bs-target="#delModal"
                      >
                        <i class="bi bi-eye-fill"></i> 檢視
                      </button>
                      <button
                        type="button"
                        class="btn btn-danger"
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
          <!--  -->
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
          <!--  -->
        </div>
        <!--  -->
      </div>
      <!--  -->

      <!--  -->
    </div>
  </div>
  <!--  -->
</template>
<script>
import focusIcon from "@/assets/images/icon-focus.svg";
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
    };
  },
  //props: ['source'],
};
</script>