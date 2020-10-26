<template>
    <div>
        <h3>这里是修改页面，想好了再修改哦！</h3>

        <table>
            <tr style="height: 70px;">
                <td style="width: 150px;text-align: right">姓名：</td>
                <td><el-input type="text" v-model="name" :placeholder="this.name"></el-input></td>
            </tr>
            <tr style="height: 70px;">
                <td style="width: 150px;text-align: right">年龄：</td>
                <td><el-input type="text" v-model="age" :placeholder="this.age"></el-input></td>
            </tr>
            <tr style="height: 70px;">
                <td style="width: 150px;text-align: right">个人信息：</td>
                <td><el-input type="text" v-model="content" :placeholder="this.content"></el-input></td>
            </tr>
        </table>
        <el-button @click="commit">确认</el-button>&nbsp;&nbsp;&nbsp;&nbsp;
        <el-button @click="goback">不改了，返回</el-button>
    </div>
</template>

<script>
export default {
    name: "changeuser",
    data:function () {
        return {
            users : JSON.parse(localStorage.users),
            name:'',
            age:'',
            content:'',
        }
    },
    methods:{
        commit(){
            let res = window.confirm('确认要修改嘛？')
            console.log(res)
            if (res == true) {
                let user = this.users[this.$route.params.id-1]
                console.log(user)
                user.name = this.name
                user.age = this.age
                user.content = this.content
                // console.log(this.users)
                localStorage.users = JSON.stringify(this.users)
                this.$router.go(-1)
            }

        },
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
