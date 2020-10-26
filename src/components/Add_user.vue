<template>
    <div style="line-height: 40px;font-size: 20px">
        <h3>欢迎来到添加用户页面！</h3>
        <table style="text-align: center;">
            <tr style="height: 70px">
                <td>用户名：</td>
                <td><el-input type="text" v-model="name" style="height: 20px;width: 200px"></el-input></td>
            </tr>
            <tr style="height: 70px">
                <td>年龄：</td>
                <td><el-input type="text" v-model="age" style="height: 20px;width: 200px"></el-input></td>
            </tr>
            <tr style="height: 70px">
                <td>描述：</td>
                <td><el-input type="text" v-model="content" style="height: 20px;width: 200px"></el-input></td>
            </tr>
        </table>
        <el-button @click="add_user" style="font-size: 15px;margin-left: 40px" type="primary">添加用户</el-button>
    </div>
</template>

<script>
export default {
    name: "Add_user",
    data:function () {
        return {
            users: localStorage.users ? JSON.parse(localStorage.users) : [],
            name : '',
            age : '',
            content : '',
        }
    },
    methods:{
        add_user() {
            if (this.name && this.age && this.content){
                // console.log(this.users[this.users.length-1].id)
                if (this.users.length>=1){
                    this.users.push({"id":this.users[this.users.length-1].id+1,"name":this.name,"age":this.age,"content":this.content})
                    localStorage.users = JSON.stringify(this.users)
                    this.name=''
                    this.age=''
                    this.content=''
                }
                else{
                    this.users.push({"id":1,"name":this.name,"age":this.age,"content":this.content})
                    localStorage.users = JSON.stringify(this.users)
                    this.name=''
                    this.age=''
                    this.content=''
                }
                this.$router.push({path:'/user/'})
            }
        },
    }
}
</script>

<style scoped>

</style>
