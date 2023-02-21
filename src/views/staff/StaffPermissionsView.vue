<script setup>
import SidebarMenu2 from "@/components/SidebarMenu2.vue";
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
              <li class="breadcrumb-item"><a href="#">人員管理</a></li>
              <li class="breadcrumb-item active" aria-current="page">
                權限管理
              </li>
            </ol>
          </nav>
          <!--  -->
          <div>
            <h2 class="text-primary mt-4 mb-4 fs-3 fw-bold">權限管理</h2>
          </div>
          <!--  -->
        </section>
        <!--  -->
        <!--  -->
        <section class="col-lg-12">
          <!--tab -->
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <p class="me-2 mt-2 fw-bold">選擇群組類型</p>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active border-1"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                群組設定
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                個別權限設定管理
              </button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
              tabindex="0"
            >
              <!-- 1 -->
              <div class="row card-group">
                <div class="col-md-12 mb-4">
                  <div class="col-md-12">
                    <!-- 權限管理 -->
                    <form>
                      <!-- <div class="mb-3 row">
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
                      </div> -->
                      <div class="col-12 col-md-6 col-lg-4">
                        <div class="d-flex">
                          <label
                            for="inputCity"
                            class="mt-2 col-auto form-label fw-bold"
                            >身份</label
                          >
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
                                <th scope="col">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                  />
                                </th>
                                <th scope="col">姓名</th>
                                <th scope="col">帳號</th>
                                <th scope="col">密碼</th>
                                <th scope="col">身分</th>
                              </tr>
                            </thead>
                            <tbody class="table-group-divider">
                              <tr>
                                <th scope="row">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                  />
                                </th>
                                <td>Mark</td>
                                <td>123@gmail.com</td>
                                <td>564789444</td>
                                <td>最高管理者</td>
                              </tr>
                              <tr>
                                <th scope="row">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                  />
                                </th>
                                <td>Jacob</td>
                                <td>123@gmail.com</td>
                                <td>564789444</td>
                                <td>最高管理者</td>
                              </tr>
                              <tr>
                                <th scope="row">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                  />
                                </th>
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
                            <label
                              class="form-check-label"
                              for="inlineCheckbox1"
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
                            <label
                              class="form-check-label"
                              for="inlineCheckbox2"
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
                            <label
                              class="form-check-label"
                              for="inlineCheckbox3"
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
                            <label
                              class="form-check-label"
                              for="inlineCheckbox3"
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
                            <label
                              class="form-check-label"
                              for="inlineCheckbox3"
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
                            <label
                              class="form-check-label"
                              for="inlineCheckbox3"
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
                            <label
                              class="form-check-label"
                              for="inlineCheckbox3"
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
                            <label
                              class="form-check-label"
                              for="inlineCheckbox3"
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
                            <label
                              class="form-check-label"
                              for="inlineCheckbox3"
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
                        >
                          儲存
                        </button>
                      </div>
                      <!--  -->
                    </form>
                    <!-- 權限管理 -->
                  </div>
                </div>
              </div>
              <!-- 1 -->
            </div>
            <div
              class="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
              tabindex="0"
            >
              <!-- 2 -->
              <div class="row card-group">
                <div class="col-md-12 mb-4">
                  <div class="col-md-12">
                    <!-- 權限管理 -->
                    <form>
                      <!-- <div class="mb-3 row">
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
                      </div> -->
                      <div class="col-12 col-md-6 col-lg-4">
                        <div class="d-flex">
                          <label
                            for="exampleInputEmail1"
                            class="col-auto me-2 mt-2 form-label fw-bold"
                            >帳號</label
                          >
                          <input
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="hi@westar.tw"
                          />
                          <!-- <div id="emailHelp" class="form-text text-light">We'll never share your email with anyone else.</div> -->
                        </div>
                      </div>
                      <!--  -->
                      <div class="mt-4 col-12 d-flex justify-content-center">
                        <button
                          type="button"
                          class="btn btn-primary text-white mx-2"
                          data-bs-dismiss="modal"
                        >
                          搜尋
                        </button>
                      </div>
                      <hr />
                      <!--  -->
                      <div>
                        <h2 class="text-dark mt-4 fs-5 fw-bold">
                          搜尋結果
                        </h2>
                      </div>
                      <!--  -->
                      <div class="row card-group">
                        <div class="col-md-12 mb-4">
                          <div class="col-md-12">
                            <!-- <h2 class=" text-center mb-4">登入</h2> -->
                            <!-- login form -->
                            <form
                              class="
                                row
                                fs-6
                                mt-4
                                p-4
                                border border-0
                                shadow
                                rounded-4
                              "
                            >
                              <div class="col-md-6 mb-3 text-start">
                                <label
                                  for="exampleInputEmail1"
                                  class="form-label"
                                  >姓名</label
                                >
                                <input
                                  type="email"
                                  class="form-control"
                                  id="exampleInputEmail1"
                                  aria-describedby="emailHelp"
                                  placeholder="王曉明"
                                />
                                <!-- <div id="emailHelp" class="form-text text-light">We'll never share your email with anyone else.</div> -->
                              </div>
                              <div class="col-md-6 mb-3 text-start">
                                <label
                                  for="exampleInputEmail1"
                                  class="form-label"
                                  >帳號</label
                                >
                                <input
                                  type="email"
                                  class="form-control"
                                  id="exampleInputEmail1"
                                  aria-describedby="emailHelp"
                                  placeholder="hi@westar.tw"
                                />
                                <!-- <div id="emailHelp" class="form-text text-light">We'll never share your email with anyone else.</div> -->
                              </div>
                              <!--  -->
                              <div class="col-md-6 mb-2 text-start">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label"
                                  >密碼</label
                                >
                                <input
                                  type="password"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                  placeholder="123456"
                                />
                              </div>
                              <!--  -->
                              <div class="col-md-6 mb-2 text-start">
                                <label for="form-select" class="form-label"
                                  >身份</label
                                >
                                <select
                                  class="form-select"
                                  aria-label="Default select example"
                                >
                                  <option selected>選擇身份</option>
                                  <option value="1">最高管理員</option>
                                  <option value="2">行銷人員</option>
                                  <option value="3">開發人員</option>
                                </select>
                              </div>
                            </form>
                          </div>
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
                            <label
                              class="form-check-label"
                              for="inlineCheckbox1"
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
                            <label
                              class="form-check-label"
                              for="inlineCheckbox2"
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
                            <label
                              class="form-check-label"
                              for="inlineCheckbox3"
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
                            <label
                              class="form-check-label"
                              for="inlineCheckbox3"
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
                            <label
                              class="form-check-label"
                              for="inlineCheckbox3"
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
                            <label
                              class="form-check-label"
                              for="inlineCheckbox3"
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
                            <label
                              class="form-check-label"
                              for="inlineCheckbox3"
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
                            <label
                              class="form-check-label"
                              for="inlineCheckbox3"
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
                            <label
                              class="form-check-label"
                              for="inlineCheckbox3"
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
                        >
                        儲存
                        </button>
                      </div>
                      <!--  -->
                    </form>
                    <!-- 權限管理 -->
                  </div>
                </div>
              </div>
              <!-- 2 -->
            </div>
          </div>
          <!-- tab -->
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
  components: {},
};
</script>