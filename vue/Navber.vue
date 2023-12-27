<template>
    <nav>
        <h1 class="h1">冥滩空间智库</h1>
        <input class="search" type="text" placeholder="Search">
        <div class="text">
        <router-link to="/" class="menu-item">主页</router-link>
        <router-link to="/AboutView"  class="menu-item">关于</router-link> 
        <router-link to="/FriendsLink"  class="menu-item">友连接</router-link>
        <router-link to="/laboratory"  class="menu-item">实验功能</router-link>
        <router-link to="/leave"  class="menu-item">留言</router-link>
        </div>
        
    </nav>
        
        
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<script>
export default{
    name:'navber',
    components:{
       },
}
</script>

<style>
@import url(../src/assets/header.css);
</style>