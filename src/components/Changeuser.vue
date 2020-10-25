<template>
    <div>
        姓名：<input type="text" v-model="name" :placeholder="this.name"><br>
        年龄：<input type="text" v-model="age" :placeholder="this.age"><br>
        个人信息：<input type="text" v-model="content" :placeholder="this.content"><br>
        <button @click="commit">确认</button>
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
    created() {
        console.log(this.users[this.$route.params.id-1].name)
        this.name = this.users[this.$route.params.id-1].name
        this.age = this.users[this.$route.params.id-1].age
        this.content = this.users[this.$route.params.id-1].content
    }
}
</script>

<style scoped>

</style>
