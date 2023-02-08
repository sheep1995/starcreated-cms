<template>
    <div style="background-image: url('../assets/images/img-login-bg.svg');"></div>

    <section class="img-fluid" style="background-image: url('../assets/images/img-login-bg.svg');">
        <div class="container">
            <h1>This is an login page</h1>
            <button type="button" class="btn btn-primary">Primary</button>
          </div>
    </section>
</template>
<script>
import  BgLogin from '@/../assets/images/img-login-bg.svg'
//C:\Users\user\Documents\GitHub\starcreated-cms\src\assets\images\img-login-bg.svg

export default {
  data() {
    return {
      data: {},
      bgLogin: BgLogin,
    };
  },
  computed: {
  backgroundImageInlineStyle () {
    return `background-image: url("./assets/${this.news.img}");`;
  }
},
  mounted() {
    //console.log(import.meta.env.VITE_PATH);
    // const url = VITE_PATH;
    // this.$http.get(url).then((res)=>{
    //   console.log(res);
    // })
  },
};
</script>