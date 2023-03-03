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
              <router-link to="/dshboard" class="breadcrumb-item">首頁</router-link>
              <router-link to="/member-control" class="breadcrumb-item">會員管理</router-link>
              <li class="breadcrumb-item active" aria-current="page">
                粉絲列表
              </li>
            </ol>
          </nav>
          <!--  -->
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div>
              <h2 class="text-white mt-4 fs-3 fw-bold">粉絲列表</h2>
            </div>
            <div class="d-flex align-items-center;">
              <div class="text-dark fw-bold fs-5">
                <span class="me-1">
                  <img
                    src="@/assets/images/icon-fans-color.svg"
                    alt="icon_bank_detail"
                  />
                </span>
                粉絲人數: <span class="text-primary">222</span>
              </div>

              <!-- <router-link to="/staff-add" class="btn btn-primary text-light">
                <span>
                  <img
                    src="@/assets/images/icon_bank_detail.svg"
                    alt="icon_bank_detail"
                  />
                </span>
                查看提領紀錄</router-link> -->
            </div>
          </div>
          <!--  -->
          <!--  -->
        </section>
        <!--  -->
        <div class="col-lg-12">
          <div class="table-responsive">
            <table class="table table-bordered align-middle star-table">
              <thead class="table-primary">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">星行號</th>
                  <th scope="col" class="text-center">頭像</th>
                  <th scope="col">暱稱</th>
                  <th scope="col">帳號</th>
                </tr>
              </thead>
              <tbody class="table-group-divider">
                <tr v-for="(item, index) in fansList" :key="index" >
                  <th scope="row">{{ item.id }}</th>
                  <td>{{ item.userAppId}}</td>
                  <td>
                    <div class="d-flex justify-content-center">
                      <img
                        class="rounded-circle img-user"
                        :src="item.userImg"
                        alt="img-user"
                      />
                    </div>
                  </td>
                  <td>{{ item.nickname}}</td>
                  <td>{{ item.mail}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- pagination -->
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
          <!--pagination end  -->
          <!-- BTN -->
          <div
          class="d-flex justify-content-center flex-column flex-lg-row"
        >
          <router-link
            to="/member"
            class="btn btn-primary text-light mb-2"
          >
            返回
          </router-link>
        </div>
          <!-- <div class="d-flex justify-content-center"><button type="submit" class="btn btn-primary text-light"> 返回 </button></div> -->
          <!-- BTN END -->
        </div>
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
      // <th scope="col">#</th>
      //             <th scope="col">星行號</th>
      //             <th scope="col" class="text-center">頭像</th>
      //             <th scope="col">暱稱</th>
      //             <th scope="col">帳號</th>
      fansList: [
        {
          id: "1",
          userAppId: "4543413131",
          userImg : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
          nickname: "Mark",
          mail: "mark@gmail.com",
        },
        {
          id: "2",
          userAppId: "1243413131",
          userImg : "http://placekitten.com/200/300",
          nickname: "Meow",
          mail: "meowww@gmail.com",
        },
        {
          id: "3",
          userAppId: "3343413131",
          userImg : "https://images.dog.ceo/breeds/pitbull/20190710_143021.jpg",
          nickname: "Woof",
          mail: "wongwong@gmail.com",
        },
      ],
    };
  },
};
</script>