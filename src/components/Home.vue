<template>
    <div>
        <h2>欢迎来到留言板，来写写你的心事吧！</h2>
        <input type="text" v-model="msg" style="height: 20px">
        <button @click="add_note" style="font-size: 15px">添加留言</button>

        <ul>
            <li v-for="(note, index) in msg_list" :key="index">{{note}} <a href="javascript:;" @click="del_note(index)">删除</a></li>
        </ul>
        <div>留言总共有{{msg_list.length}}条</div>
        <button @click="clear" v-if="msg_list.length>0">清空留言</button>
    </div>
</template>

<script>
    export default {
        name: "home",
        data: function () {
            return {
                msg: "",
                // 判断localStorage是否有值  有值则显示 如果没有 则设置成空数组
                msg_list : localStorage.msgs ? JSON.parse(localStorage.msgs) : [],
                // msg_list : []
            }

        },
        methods: {
            add_note() {
                let msg = this.msg;
                if (msg) {
                    this.msg_list.push(this.msg);
                    // 将用户发表的留言储存到localstorage
                    // 储存前将数据进行序列化
                    localStorage.msgs = JSON.stringify(this.msg_list);
                    this.msg = "";
                }
            },
            del_note(index){
                // console.log(index)
                this.msg_list.splice(index,1);
                localStorage.msgs = JSON.stringify(this.msg_list);
            },
            clear(){
                // this.message = [];
                // this.message.splice(0,this.message.length);
                localStorage.removeItem('msgs');
                location.reload()
            },
        }
    }
</script>

<style scoped>

</style>
