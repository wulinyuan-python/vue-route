<template>
    <div>
        <h3>这是用户详情页</h3>
        <table>
            <tr style="height: 70px">
                <td style="text-align: left;">该用户的id为：</td>
                <td>{{$route.params.id}}</td>
            </tr>
            <tr style="height: 70px">
                <td style="text-align: left;">该用户的姓名为：</td>
                <td>{{this.name}}</td>
            </tr>
            <tr style="height: 70px">
                <td style="text-align: left;">该用户的年龄为： </td>
                <td>{{this.age}}</td>
            </tr>
            <tr style="height: 70px">
                <td style="text-align: left;">该用户的个人信息为： </td>
                <td>{{this.content}}</td>
            </tr>
        </table>
        <el-button @click="goback">返回上一页</el-button>
    </div>
</template>

<script>
    export default {
        name: "userdetail",
        data:function () {
            return {
                users : JSON.parse(localStorage.users),
                name:'',
                age : '',
                content : '',
            }
        },
        methods:{
            goback(){
                this.$router.go(-1)
            }
        },
        created() {
            console.log(this.$route.params.id)
            // console.log(this.users[this.$route.params.id-1].name)
            // console.log(JSON.parse(localStorage.users).length)
            for (let n=0;n < JSON.parse(localStorage.users).length;n++){
                console.log(JSON.parse(localStorage.users)[n].id)
                if (JSON.parse(localStorage.users)[n].id==this.$route.params.id){
                    this.name = this.users[n].name
                    this.age = this.users[n].age
                    this.content = this.users[n].content
                }
            }

        }
    }
</script>

<style scoped>

</style>
