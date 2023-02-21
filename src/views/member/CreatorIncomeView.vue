<script setup>
import { RouterLink, RouterView } from "vue-router";
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
              <li class="breadcrumb-item"><a href="#">首頁</a></li>
              <li class="breadcrumb-item"><a href="#">會員管理</a></li>
              <li class="breadcrumb-item active" aria-current="page">
                收益紀錄
              </li>
            </ol>
          </nav>
          <!--  -->
          <div>
            <h2 class="text-primary mt-4 fs-3 fw-bold">
              收益紀錄
            </h2>
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
              <div class="d-flex align-items-center align-items-sm-start pb-4 flex-column flex-lg-row p-2">
                <div class="col-12 col-lg-4 mb-2">
                  <div class="d-flex">
                    <label for="starNumber" class="col-auto col-form-label me-2 ms-1">星行號</label>
                  <input
                  type="password"
                  id="starNumber"
                  class="form-control"
                  aria-describedby="passwordHelpInline"
                  placeholder="1234567890"
                />
                  </div>
                </div>
                <!--  -->
                <div class="col-12 col-lg-4 mb-2">
                  <div class="d-flex">
                    <label for="specificSizeSelect" class="col-auto col-form-label me-2 ms-1"
                    >收益類型</label
                  >
                  <select class="form-select" id="specificSizeSelect">
                    <option selected>選擇類型</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  </div>
                </div>
                <div class="col-12 col-lg-4 mb-2">
                  <div class="d-flex">
                    <label for="starNumber" class="col-auto col-form-label me-2 ms-1"
                    >日期</label
                  >
                  <select class="form-select" id="specificSizeSelect">
                    <option selected>選擇日期</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  </div>
                </div>
              </div>
              <!-- btn -->
              <div class="col-12 d-flex justify-content-center mb-4">
                <button
                  type="button"
                  class="btn btn-primary text-white mx-2"
                  data-bs-dismiss="modal">
                  搜尋
                </button>
              </div>
              <!--  -->
            </form>
          </div>
          <!--  -->
          <!--  -->
          <div class="container">
            <!--  -->
            <div>
              <h2 class="text-primary mt-4 fs-5 fw-bold">收益紀錄</h2>
            </div>
            <!--  -->
            <div class="table-responsive">
              <table class="table table-bordered align-middle">
                <thead class="table-primary">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">日期</th>
                    <th scope="col">星行號</th>
                    <th scope="col">幣值</th>
                    <th scope="col">禮物編號</th>
                    <th scope="col">禮物數量</th>
                    <th scope="col">送禮者</th>
                    <th scope="col">收益類型</th>
                  </tr>
                </thead>
                <tbody class="table-group-divider">
                  <tr>
                    <th scope="row">1</th>
                    <td>2023/01/01 18:20:22</td>
                    <td>4543413131</td>
                    <td>330 (星塵)</td>
                    <td>12345</td>
                    <td>1</td>
                    <td>2134567890</td>
                    <td>時空LIVE收益</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>2023/01/01 18:20:22</td>
                    <td>4543413131</td>
                    <td>330 (星塵)</td>
                    <td>12345</td>
                    <td>1</td>
                    <td>2134567890</td>
                    <td>時空LIVE收益</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>2023/01/01 18:20:22</td>
                    <td>4543413131</td>
                    <td>330 (星塵)</td>
                    <td>12345</td>
                    <td>1</td>
                    <td>2134567890</td>
                    <td>時空LIVE收益</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
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
export default {
  data() {
    return {
      products: null,
    };
  },
};
</script>