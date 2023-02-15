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
                實名認證
              </li>
            </ol>
          </nav>
          <!--  -->
          <div>
            <h2 class="text-primary mt-4 fs-3 fw-bold">
              實名認證
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
                  rounded-4 pt-4 pb-4 flex-column flex-lg-row
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
    };
  },
};
</script>