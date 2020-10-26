<template>

    <div id="app" style='' align="center">
        <h1 style="color: red">欢迎光临！！！</h1>
        <el-menu class="el-menu-demo" mode="horizontal" style="width: 100%;">
            <el-menu-item style="width: 200px;margin-left: 500px;font-size: 20px" @click="index">跳转到主页</el-menu-item>
            <el-menu-item style="width: 200px;font-size: 20px" @click="user">跳转到用户页面</el-menu-item>
            <el-menu-item style="width: 200px;font-size: 20px" @click="add_user">添加用户</el-menu-item>
        </el-menu>
<!--        <router-link to="/home" style="font-size: 20px">跳转到主页</router-link>&nbsp;&nbsp;&nbsp;&nbsp;-->
<!--        <router-link to="/user" style="font-size: 20px">跳转到用户页面</router-link>&nbsp;&nbsp;&nbsp;&nbsp;-->
<!--        <router-link to="/add_user" style="font-size: 20px">添加用户</router-link>-->


        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App',
        methods:{
            index(){
                this.$router.push({path:'/home'})
            },
            user(){
                this.$router.push({path:'/user'})
            },
            add_user(){
                this.$router.push({path:'/add_user'})
            }
        }
    }
</script>

<style>

</style>
