<template>
  <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark sidebar">
    <div
      class="
        d-flex
        flex-column
        align-items-center align-items-sm-start
        px-3
        pt-2
        text-white
        min-vh-100
      "
    >
    <router-link to="/" class="nav-link px-0 align-middle text-light">
      <img class=" " src="@/assets/images/logo.svg" alt="logo" />
    </router-link>
      <ul
        class="
          nav nav-pills
          flex-column
          mb-sm-auto mb-0
          align-items-center align-items-sm-start
        "
        id="menu"
      >
        <li class="nav-item">
          <router-link to="/" class="nav-link px-0 align-middle text-light">
            <i class="fs-5 bi-speedometer2 me-2"></i>
            <span class="">首頁</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/staff" class="nav-link px-0 align-middle text-light">
            <i class="fs-5 bi-people-fill me-2"></i>
            <span class="">人員管理</span>
          </router-link>
          <ul
            class="collapse show nav flex-column ms-1"
            id="submenu1"
            data-bs-parent="#menu">
            <li class="w-100 nav-item">
              <router-link to="/staff-add" class="nav-link text-light">
                <span class="me-0 me-lg-2"></span>
                <!-- <i class="fs-5 bi bi-person-fill-add d-inline d-lg-none"></i> -->
                <span class=""></span> 新增人員
                <!-- <span class="d-none d-sm-inline">新增人員</span>  -->
              </router-link>
            </li>
            <li class="w-100 nav-item">
              <router-link to="/staff-permissions" class="nav-link  text-light">
                <span class="me-0 me-lg-2"></span>
                <!-- <i class="fs-5 bi bi-person-gear d-inline d-lg-none"></i> -->
                <span class=""></span> 權限管理
              </router-link>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <router-link to="/member" class="nav-link px-0 align-middle text-light">
            <i class="fs-5 bi-person-fill me-2"></i>
            <span class="">會員管理</span>
          </router-link>
          <ul
            class="collapse show nav flex-column ms-1"
            id="submenu1"
            data-bs-parent="#menu">
            <li class="w-100 nav-item">
              <router-link to="/member-check-id" class="nav-link  text-light">
                <span class="me-2"></span> 實名認證
              </router-link>
            </li>
            <li class="w-100 nav-item">
              <router-link to="/member-cash" class="nav-link  text-light">
                <span class="me-2"></span> 提領狀態
              </router-link>
            </li>
            <li class="w-100 nav-item">
              <router-link to="/member-creator-income" class="nav-link  text-light">
                <span class="me-2"></span> 收益紀錄
              </router-link>
            </li>
          </ul>
        </li>

      </ul>
      <hr />
      <!-- <div class="dropdown pb-4">
        <a
          href="#"
          class="
            d-flex
            align-items-center
            text-white text-decoration-none
            dropdown-toggle
          "
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt="hugenerd"
            width="30"
            height="30"
            class="rounded-circle"
          />
          <span class="d-none d-sm-inline mx-1">loser</span>
        </a>
        <ul
          class="dropdown-menu dropdown-menu-dark text-small shadow"
          aria-labelledby="dropdownUser1"
        >
          <li><a class="dropdown-item" href="#">New project...</a></li>
          <li><a class="dropdown-item" href="#">Settings</a></li>
          <li><a class="dropdown-item" href="#">Profile</a></li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li><a class="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div> -->
    </div>
  </div>
</template>

<style lang="scss">
.sidebar{
  .nav-pills {
    width: 100%;
  }
  .nav-item{
    width: 100%;
    &:hover{
      opacity: 0.9;
    }
  }
}
</style>
