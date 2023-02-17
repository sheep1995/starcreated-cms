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
              <li class="breadcrumb-item"><a href="#">會員管理</a></li>
              <li class="breadcrumb-item active" aria-current="page">
                提領狀態
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
                      for="starNumber"
                      class="col-auto col-form-label me-2 ms-1"
                      >星行號</label
                    >
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
                    <label
                      for="specificSizeSelect"
                      class="col-auto col-form-label me-2 ms-1"
                      >提領狀態</label
                    >
                    <select class="form-select" id="specificSizeSelect">
                      <option selected>選擇類型</option>
                      <option value="待提領">待提領</option>
                      <option value="提領成功">提領成功</option>
                      <option value="處理中">處理中</option>
                      <option value="提領失敗">提領失敗</option>
                      <option value="待審核">待審核</option>
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
          <!--  -->
          <!--  -->
          <div class="container">
            <!--  -->
            <div class="d-flex justify-content-between align-items-center mb-2">
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
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <!-- <option selected>提領狀態</option> -->
                      <option value="所有類型">所有類型</option>
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
                  <tr v-for="(item, index) in cashList" :key="index">
                    <th scope="row">{{ item.id }}</th>
                    <td>{{ item.date }}</td>
                    <td>{{ item.starNumber }}</td>
                    <td>{{ item.cashMoney }}</td>
                    <td>{{ item.cashState }}</td>
                    <td>{{ item.cashId }}</td>
                    <td>
                      <!-- btn -->
                      <router-link
                        v-if="item.cashState === '審核中'"
                        to="/"
                        :id="item.cashId"
                        class="btn btn-info text-light mb-2"
                      >
                        <i class="bi bi-eye-fill"></i> 檢視
                      </router-link>
                      <router-link
                        v-else-if="item.cashState === '處理中'"
                        to="/staff"
                        :id="item.cashId"
                        class="btn btn-info text-light mb-2"
                      >
                        <i class="bi bi-eye-fill"></i> 檢視
                      </router-link>
                      <router-link
                        v-else-if="item.cashState === '提領成功'"
                        to="/staff"
                        :id="item.cashId"
                        class="btn btn-info text-light mb-2"
                      >
                        <i class="bi bi-eye-fill"></i> 檢視
                      </router-link>
                      <router-link
                        v-else-if="item.cashState === '提領失敗'"
                        to="/staff"
                        :id="item.cashId"
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
        </section>
        <!--  -->
      </div>
      <!--  -->
    </div>
  </div>
  <!--  -->
</template>
<script>
export default {
  data() {
    return {
      products: null,
      cashList: [
        {
          id: "1",
          date: "2023/01/01",
          starNumber: "4543413131",
          cashMoney: "7777",
          cashState: "處理中",
          cashId: "123456789",
          cashInfo: "viewInfo?", //這邊後端會傳什麼資料進來待討論
        },
        {
          id: "2",
          date: "2023/01/01",
          starNumber: "4543413131",
          cashMoney: "8888",
          cashState: "提領成功",
          cashId: "123456789",
          cashInfo: "viewInfo?", //這邊後端會傳什麼資料進來待討論
        },
        {
          id: "3",
          date: "2023/01/01",
          starNumber: "4543413131",
          cashMoney: "555",
          cashState: "審核中",
          cashId: "123456789",
          cashInfo: "viewInfo?", //這邊後端會傳什麼資料進來待討論
        },
        {
          id: "4",
          date: "2023/01/01",
          starNumber: "4543413131",
          cashMoney: "555",
          cashState: "提領失敗",
          cashId: "123456789",
          cashInfo: "viewInfo?", //這邊後端會傳什麼資料進來待討論
        },
      ],
    };
  },
  methods: {
    viewCashInfo() {
      router.push({ path: "/" });
    },
  },
};
</script>