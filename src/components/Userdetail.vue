<template>
    <div>
        这是用户详情页
        该用户的id为：<b>{{$route.params.id}}</b>     <br>
        该用户的姓名为：<b>{{this.name}}</b>     <br>
        该用户的年龄为： <b>{{this.age}}</b>    <br>
        该用户的个人信息为： <b>{{this.content}}</b>      <br>
        <button @click="goback">返回上一页</button>
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
            // console.log(this.$route.params.id)
            // console.log(this.users[this.$route.params.id-1].name)
            this.name = this.users[this.$route.params.id-1].name
            this.age = this.users[this.$route.params.id-1].age
            this.content = this.users[this.$route.params.id-1].content
        }
    }
</script>

<style scoped>

</style>
