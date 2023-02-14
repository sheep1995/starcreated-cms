<script setup>
import SidebarMenu from "@/components/SidebarMenu.vue";
import TopHeader from "@/components/TopHeader.vue";
</script>
<template>
  <section class="container">
    <TopHeader/>
    <nav class="bg-light pt-2 pb-2 rounded" aria-label="breadcrumb">
      <ol class="breadcrumb d-flex align-items-center mb-0 px-2">
        <li class="breadcrumb-item"><a href="#">首頁</a></li>
        <li class="breadcrumb-item"><a href="#">人員管理</a></li>
        <li class="breadcrumb-item active" aria-current="page">權限管理</li>
      </ol>
    </nav>
    <!--  -->
    <div>
      <h2 class="text-primary mt-4 mb-4 fs-4 fw-bold">權限管理</h2>
    </div>
    <!--  -->
  </section>
  <!--  -->
  <!--  -->
  <section class="container">
    <div class="row card-group">
      <div class="col-md-12 mb-4">
        <div class="col-md-12">
          <!-- 權限管理 -->
          <form>
            <div class="mb-3 row">
              <div class="col-auto">
                <h6 class="fs-6">選擇群組類型</h6>
              </div>
              <div class="col-auto">
                <div class="form-check me-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault"
                    >群組設定</label
                  >
                </div>
              </div>
              <div class="col-auto">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    個別權限設定管理
                  </label>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="d-flex">
                <label for="inputCity" class="col-auto form-label">身份</label>
                <select
                  class="form-select col-auto mx-2"
                  aria-label="Default select example"
                >
                  <option selected>選擇身分</option>
                  <option value="1">行銷人員</option>
                  <option value="2">一般人員</option>
                  <option value="3">最高管理員</option>
                </select>
              </div>
            </div>
  <!--  -->
  <div class="container mt-4 mb-4">
    <div class="table-responsive">
      <table class="table table-bordered align-middle">
        <thead class="table-primary">
          <tr>
            <th scope="col"><input class="form-check-input" type="checkbox"></th>
            <th scope="col">姓名</th>
            <th scope="col">帳號</th>
            <th scope="col">密碼</th>
            <th scope="col">身分</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr>
            <th scope="row"><input class="form-check-input" type="checkbox"></th>
            <td>Mark</td>
            <td>123@gmail.com</td>
            <td>564789444</td>
            <td>最高管理者</td>
          </tr>
          <tr>
            <th scope="row"><input class="form-check-input" type="checkbox"></th>
            <td>Jacob</td>
            <td>123@gmail.com</td>
            <td>564789444</td>
            <td>最高管理者</td>
          </tr>
          <tr>
            <th scope="row"><input class="form-check-input" type="checkbox"></th>
            <td>Amy</td>
            <td>123@gmail.com</td>
            <td>564789444</td>
            <td>最高管理者</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <!--  -->
            <div class="col-12 fs-6 fw-bold mb-2 mt-4">權限功能</div>
            <div class="row">
              <div class="col-12">
                <div class="form-check form-check-inline col-auto">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineCheckbox1"
                    >讀取會員資料</label
                  >
                </div>
                <div class="form-check form-check-inline col-auto">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineCheckbox2"
                    >編輯會員資料</label
                  >
                </div>
                <div class="form-check form-check-inline col-auto">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox3"
                    value="option3"
                  />
                  <label class="form-check-label" for="inlineCheckbox3"
                    >讀取會員作品</label
                  >
                </div>
                <div class="form-check form-check-inline col-auto">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox3"
                    value="option3"
                  />
                  <label class="form-check-label" for="inlineCheckbox3"
                    >編輯會員作品</label
                  >
                </div>
                <div class="form-check form-check-inline col-auto">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox3"
                    value="option3"
                  />
                  <label class="form-check-label" for="inlineCheckbox3"
                    >檢舉會員功能</label
                  >
                </div>
                <div class="form-check form-check-inline col-auto">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox3"
                    value="option3"
                  />
                  <label class="form-check-label" for="inlineCheckbox3"
                    >給予會員星塵幣</label
                  >
                </div>
                <div class="form-check form-check-inline col-auto">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox3"
                    value="option3"
                  />
                  <label class="form-check-label" for="inlineCheckbox3"
                    >編輯變現狀態</label
                  >
                </div>
                <div class="form-check form-check-inline col-auto">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox3"
                    value="option3"
                  />
                  <label class="form-check-label" for="inlineCheckbox3"
                    >官方帳號管理</label
                  >
                </div>
                <div class="form-check form-check-inline col-auto">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox3"
                    value="option3"
                  />
                  <label class="form-check-label" for="inlineCheckbox3"
                    >查看變現明細</label
                  >
                </div>
              </div>
            </div>
            <!--  -->
            <div class="mt-4 col-12 d-flex justify-content-center">
              <button
                type="button"
                class="btn btn-primary text-white mx-2"
                data-bs-dismiss="modal"
              >
                確認新增
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
              <i class="bi bi-trash-fill"></i> 刪除
              </button>
            </div>
            <!--  -->
          </form>
          <!-- 權限管理 -->
        </div>
      </div>
    </div>
  </section>
  <!--  -->
</template>
<script>

export default {
  data() {
    return {
      products: null,
    };
  },
  components: {

  },
};
</script>