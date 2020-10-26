<template>
    <div>
        <h2>欢迎来到用户列表页！</h2>
        <hr>
        <el-table
            :data="users"
            stripe
            style="width: 100%">
            <el-table-column prop="id" label="ID" width="100" align="center"></el-table-column>
            <el-table-column prop="name" label="姓名" width="100" align="center"></el-table-column>
            <el-table-column prop="age" label="年龄" align="center"></el-table-column>
            <el-table-column prop="content" label="个人信息" align="center"></el-table-column>
            <el-table-column prop="operate" label="操作" align="center">
                <template slot-scope="scope">
                    <el-button type="primary" @click="change(scope.row.id)">修改</el-button>
                    <el-button type="primary" @click="look(scope.row.id)">查看详情</el-button>
<!--                    <router-link :to="`/change/${scope.row.id}`" style="text-decoration: none" icon="el-icon-edit">修改</router-link>-->
<!--                    <router-link :to="`/detail/${scope.row.id}`" style="text-decoration: none">查看详情</router-link>-->
                    <el-button type="danger" @click="del_user(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <br>
<!--        <table border="2px" cellspacing="0px" style="text-align: center;width: 800px">-->
<!--            <tr>-->
<!--                <td>ID</td>-->
<!--                <td>姓名</td>-->
<!--                <td>年龄</td>-->
<!--                <td>个人信息</td>-->
<!--                <td>操作</td>-->
<!--            </tr>-->
<!--            <tr v-for="(user,index) in users" :key="user.id">-->
<!--                <td>{{user.id}}</td>-->
<!--                <td>{{user.name}}</td>-->
<!--                <td>{{user.age}}</td>-->
<!--                <td>{{user.content}}</td>-->
<!--                <td><a href="javascript:;" @click="del_user(index)">删除</a> | <router-link :to="`/detail/${user.id}`">查看详情</router-link> |-->
<!--                    <router-link :to="`/change/${user.id}`">修改</router-link></td>-->
<!--            </tr>-->
<!--        </table>-->
        <hr>
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
            del_user(index,n){
                let res = window.confirm('你确定要删除这个用户嘛？')
                if (res==true){
                    this.users.splice(index,1)
                    // console.log(index,n)
                    localStorage.users = JSON.stringify(this.users)
                }
            },
            change(id){
                // console.log(id)
                this.$router.push({path:'/change/'+id})
            },
            look(id){
                this.$router.push({path:'/detail/'+id})
            }
        }
    }

</script>

<style scoped>

</style>
