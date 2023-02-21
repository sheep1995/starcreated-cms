<template>
  <header class="mb-3 border-bottom top-header">
    <div>

      <div class="d-flex flex-wrap align-items-center justify-content-between">
      <div class="text-left">
      <button  @click="isActive = !isActive" class="btn btn-default fs-3" id="menu-toggle">
      <i class="bi bi-list text-primary"></i>
      </button>
      </div>
        <ul class="nav col-12 col-lg-auto me-lg-right mb-md-0 text-end">
          <!-- <li><a href="#" class="nav-link px-2 link-secondary">設定</a></li> -->
          <li class="position-relative nav-link px-2 link-dark dropdown">
            <!-- <a href="#" class="nav-link px-2 link-dark"> -->
            <!-- <RouterLink class="text-decoration-none  text-dark" to="/notice"><i class="bi bi-bell fs-5"></i></RouterLink> -->
            <span
              class="
                position-absolute
                end-0
                translate-middle-x
                badge
                border border-light
                rounded-circle
                bg-primary
                p-2
              "
              style="padding: 0.25rem !important"
              ><span class="visually-hidden">unread messages</span></span
            >
            <!-- </a> -->
            <a
              class="text-dark"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-bell fs-5"></i>
            </a>
            <ul class="dropdown-menu m-2 p-0">
              <p class="dropdown-item text-primary fs-6">未讀通知訊息:1</p>
              <li>
                <a class="dropdown-item border-bottom border-dark" href="#">
                  <div class="d-flex justify-content-between">
                    <div>
                      <div>BOSS</div>
                      <h6>已將你設為管理員</h6>
                    </div>
                    <div>01/09</div>
                  </div>
                </a>
              </li>
              <li>
                <a class="dropdown-item border-bottom border-dark" href="#">
                  <div class="d-flex justify-content-between">
                    <div>
                      <div>綿羊</div>
                      <h6>批准了你的申請</h6>
                    </div>
                    <div>01/09</div>
                  </div>
                </a>
              </li>
              <li>
                <a class="dropdown-item border-bottom border-dark" href="#">
                  <div class="d-flex justify-content-between">
                    <div>
                      <div>珮祺</div>
                      <h6>批准了你的申請</h6>
                    </div>
                    <div>01/09</div>
                  </div>
                </a>
              </li>
              <li>
                <RouterLink
                  class="text-decoration-none text-dark text-center dropdown-item"
                  to="/notice"
                  >查看所有通知紀錄</RouterLink
                >
              </li>
            </ul>
          </li>
          <li class="nav-link px-2 link-dark mt-2">
            <RouterLink class="text-decoration-none text-dark bg-white" to="/setting"
              >設定</RouterLink
            >
            <!-- <a href="#" class="nav-link px-2 link-dark mt-2">設定</a> -->
          </li>
          <li class="nav-link px-2 link-dark mt-2">
            <RouterLink class="text-decoration-none text-dark" to="/login"
              >登出</RouterLink
            >
            <!-- <a href="#" class="nav-link px-2 link-dark mt-2">登出</a> -->
          </li>
        </ul>

        <!-- <div class="dropdown text-end">
          <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            設定              
          </a>
          <ul class="dropdown-menu text-small">
            <li><a class="dropdown-item" href="#">New project...</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div> -->
      </div>
    </div>
  </header>
</template>
<script>
const toggleBtn = document.querySelector("#menu-toggle");
const sidebar = document.querySelector("#sidebar-wrapper");
const wrapper = document.querySelector("#wrapper");
// toggleBtn.addEventListener("click", function () {
//   wrapper.classList.toggle("toggled");
// });
export default {
    data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isActive = this.isActive ? false : true;
    },
  },
  // mounted() {
  //   this.toggleMenu (() =>{
  //     this.$refs.addEventListener("click", function() {
  //       wrapper.classList.toggle("toggled");
  //     })
  //   });
  // },
}
</script>
