<template>
    <div>
     
     <p class="landIn bod">
      <div class="p">
      <h2>{{ hitokoto }}</h2>
      <h3>{{ from }}</h3>
      <h4>{{ from_who }}</h4></div>
    </p>
    </div>
    
    </template>
     
     <script>
     import axios from 'axios';
     export default {
       data() {
         return {
           hitokoto: '',
           from: '',
           from_who: '',
           loading: true,
           error: '',
         };
       },
       created() {
         this.fetchHitokoto();
       },
       methods: {
         async fetchHitokoto() {
           this.loading = true;
           try {
             const response = await axios.get('https://v1.hitokoto.cn/');
             this.hitokoto = response.data.hitokoto;
             this.from = response.data.from;
             this.from_who = response.data.from_who;
           } catch (error) {
             console.error('Error fetching Hitokoto:', error.message);
             this.error = 'Failed to fetch data. Please try again.';
           } finally {
             this.loading = false;
           }
         },
       },
     };
     </script>
     
     <style scoped>
       @import '../assets/images.css';
     </style>