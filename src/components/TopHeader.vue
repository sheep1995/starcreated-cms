<template>
  <header class="p-3 mb-3 border-bottom">
    <div>
      <div class="d-flex flex-wrap align-items-center justify-content-end"> 
        <ul class="nav col-12 col-lg-auto me-lg-right mb-2 mb-md-0 text-end">
          <!-- <li><a href="#" class="nav-link px-2 link-secondary">設定</a></li> -->
          <li class="position-relative nav-link px-2 link-dark">
            <!-- <a href="#" class="nav-link px-2 link-dark"> -->
              <RouterLink class="text-decoration-none  text-dark" to="/notice"><i class="bi bi-bell fs-5"></i></RouterLink>
              <span
              class="position-absolute end-0 translate-middle-x badge border border-light rounded-circle bg-yellow-400 p-2"
              style="padding: 0.25rem !important;" ><span class="visually-hidden">unread messages</span></span>
            <!-- </a> -->
          </li>
          <li  class="nav-link px-2 link-dark mt-2">
            <RouterLink class="text-decoration-none  text-dark" to="/setting">設定</RouterLink>
            <!-- <a href="#" class="nav-link px-2 link-dark mt-2">設定</a> -->
          </li>
          <li class="nav-link px-2 link-dark mt-2">
            <RouterLink class="text-decoration-none  text-dark" to="/login">登出</RouterLink>
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