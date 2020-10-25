<template>
    <div>
        <h2>欢迎来到用户列表页！</h2>
        <table border="2px" cellspacing="0px" style="text-align: center;width: 800px">
            <tr>
                <td>ID</td>
                <td>姓名</td>
                <td>年龄</td>
                <td>个人信息</td>
                <td>操作</td>
            </tr>
            <tr v-for="(user,index) in users" :key="user.id">
                <td>{{user.id}}</td>
                <td>{{user.name}}</td>
                <td>{{user.age}}</td>
                <td>{{user.content}}</td>
                <td><a href="javascript:;" @click="del_user(index)">删除</a> | <router-link :to="`/detail/${user.id}`">查看详情</router-link> |
                    <router-link :to="`/change/${user.id}`">修改</router-link></td>
            </tr>
        </table>
        <hr>
        <div style="line-height: 40px">
            <h3>添加用户</h3>
            用户名：<input type="text" v-model="name"> <br>
            年    龄：<input type="text" v-model="age"> <br>
            描    述：<input type="text" v-model="content"> <br>
            <button @click="add_user" style="font-size: 15px;margin-left: 80px">添加用户</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "User",
        data:function () {
            return {
                users: localStorage.users ? JSON.parse(localStorage.users) : [],
                name : '',
                age : '',
                content : '',
            }
        },
        methods: {
            add_user() {
                if (this.name && this.age && this.content){
                    this.users.push({"id":this.users.length+1,"name":this.name,"age":this.age,"content":this.content})
                    localStorage.users = JSON.stringify(this.users)
                    this.name=''
                    this.age=''
                    this.content=''
                }

            },
            del_user(index){
                this.users.splice(index,1)
                // console.log(this.users)
                localStorage.users = JSON.stringify(this.users)
            }
        }
    }

</script>

<style scoped>

</style>
