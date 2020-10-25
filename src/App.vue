<template>
    <div id="app" style="">
        <h1 style="color: red">欢迎光临！！！</h1>
        <router-link to="/home" style="font-size: 20px">跳转到主页</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
        <router-link to="/user" style="font-size: 20px">跳转到用户页面</router-link>


        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>

</style>
