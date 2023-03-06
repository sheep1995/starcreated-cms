<template lang="">
  <div>
    <table>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
      </tr>
      <tr v-for="user in users" v-bind:key="user.id">
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td><button v-on:click="deleteUser(user.id)">DEL</button></td>
      </tr>     
    </table>
  </div>
</template>
<script>
export default {
  name: 'Test',
  data() {
    return {
      test:null
    }
  },
  methods: {
    getData(){
      this.axios.get('apiurl').then((result)=>{
        console.warn(result);
        this.user = result.data;
      })
    },
    deleteUser(id){
      this.axios.delete("apiurl"+id).then(()=>{
        // console.warn(result);
        this.getData();
      })
    }
  },
  mounted() {
    this.getData();
  },
}

</script>