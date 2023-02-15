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
            <h2 class="text-primary mt-4 fs-5 fw-bold">搜尋會員</h2>
          </div>
          <!--  -->
          <div class="col-12 mb-4">
            <form class="fs-6">
              <!--  -->
              <div
                class="
                  d-flex
                  align-items-center align-items-sm-start
                  border border-1
                  rounded-4
                  pt-4
                  pb-4
                  flex-column flex-lg-row
                "
              >
                <div class="col-auto">
                  <label for="starNumber" class="col-form-label me-2 ms-1"
                    >星行號</label
                  >
                </div>
                <div class="col-md-4 mb-4">
                  <input
                    type="password"
                    id="starNumber"
                    class="form-control"
                    aria-describedby="passwordHelpInline"
                    placeholder="1234567890"
                  />
                </div>
                <div class="col-auto">
                  <button
                    type="button"
                    class="btn btn-primary text-white mx-2"
                    data-bs-dismiss="modal"
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
        <!--  -->

        <div class="container">
          <!--  -->
          <div>
            <h2 class="text-primary mt-4 fs-5 fw-bold">會員列表</h2>
          </div>
          <!--  -->
          <div class="table-responsive">
            <table class="table table-bordered align-middle">
              <thead class="table-primary">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">星行號</th>
                  <th scope="col">暱稱</th>
                  <th scope="col">頭像</th>
                  <th scope="col">背景圖</th>
                  <th scope="col">帳號</th>
                  <th scope="col">實名認證</th>
                  <th scope="col">操作</th>
                  <th scope="col">註冊方式</th>
                </tr>
              </thead>
              <tbody class="table-group-divider">
                <tr>
                  <th scope="row">1</th>
                  <td>4543413131</td>
                  <td>Mark</td>
                  <td>img</td>
                  <td>img</td>
                  <td>123@gmail.com</td>
                  <td>未認證</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-info text-white me-2"
                      data-bs-toggle="modal"
                      data-bs-target="#editModal"
                    >
                      <i class="bi bi-person-gear"></i> 管理
                    </button>
                  </td>
                  <td>fb</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!--  -->
        <!--  -->
      </div>
      <!--  -->

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
    };
  },
};
</script>