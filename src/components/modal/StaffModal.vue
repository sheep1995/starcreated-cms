<template>
  <!-- Modal -->
  <div
    class="modal fade modal-lg"
    id="editModal"
    tabindex="-1"
    aria-labelledby="editModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header border-bottom-0">
          <h1 class="modal-title fs-5 text-primary" id="editModalLabel">
            編輯資料
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
                <!-- <h2 class=" text-center mb-4">登入</h2> -->
                <!-- edit form -->
                <form class="row fs-6 p-4">
                  <div class="col-md-6 mb-3 text-start">
                    <label for="staffUserName" class="form-label">姓名</label>
                    <input
                      type="text"
                      class="form-control"
                      id="staffUserName"
                    />
                    <!-- {{ item.name }} -->
                    <!-- <div id="emailHelp" class="form-text text-light">We'll never share your email with anyone else.</div> -->
                  </div>
                  <div class="col-md-6 mb-3 text-start">
                    <label for="staffEmail" class="form-label">帳號</label>
                    <input
                      type="email"
                      class="form-control"
                      id="staffEmail"
                      disabled
                    />
                    <!-- <div id="emailHelp" class="form-text text-light">We'll never share your email with anyone else.</div> -->
                  </div>
                  <!--  -->
                  <div class="col-md-6 mb-2 text-start">
                    <label for="staffPassword" class="form-label">密碼</label>
                    <input
                      type="text"
                      class="form-control"
                      id="staffPassword"
                      placeholder="Abc123456"
                    />
                  </div>
                  <!--  -->
                  <div class="col-md-6 mb-2 text-start">
                    <label for="form-select" class="form-label">身份</label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option value="最高管理者">最高管理者</option>
                      <option value="一般管理者" selected>一般管理者</option>
                    </select>
                  </div>
                  <!--  -->
                </form>
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
                @click="$emit('update-product', tempProduct)"
              >
                確認資料
              </button>
            </div>
          </div>
          <!--  -->
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
    isNew: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      state: {},
      modal: "",
      tempProduct: {},
    };
  },
  emits: ["update-product"],
  //mixins: [modalMixin],
  inject: ["emitter"],
  watch: {
    product() {
      this.tempProduct = this.product;
      if (!this.tempProduct.userId) {
        this.tempProduct.userId = [];
      }
      if (!this.tempProduct.userId) {
        this.tempProduct.userId = "";
      }
    },
  },
  methods: {},
};
</script>
