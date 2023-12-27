<template>
  <div id="app"> 
    <Navbar />
      <header>
    </header>
  </div>
  <RouterView/>
</template>

<script>
import Navbar from '../vue/Navber.vue';


  export default{
  data(){
    
  },
    name:'App',
    components:{
      Navbar
    }
  }
</script>



<style>
  *{
    margin: 0;
    padding: 0px;
    box-sizing:content-box;
  }

  body{
    font-family:'montserrat',sans-serif;
  }

</style>