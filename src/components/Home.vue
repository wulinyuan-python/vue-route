<template>
    <div>
        <h2>欢迎来到留言板，来写写你的心事吧！</h2>
        <el-input type="text" v-model="msg" style='width: 200px'></el-input>
        <el-button @click="add_note" style="font-size: 15px" type="primary">添加留言</el-button>

        <ul>
            <table>
                <tr style="list-style-type: none;height: 50px" v-for="(note, index) in msg_list" :key="index">
                    <td style="text-align: left">
                        <span>{{note}} </span>
                    </td>
                    <td style="text-align: center;width: 150px">
                        <el-button type="danger" @click="del_note(index)" size="small">删除</el-button>
                    </td>
                </tr>
            </table>
        </ul>
        <h3>留言总共有{{msg_list.length}}条</h3>
        <el-button @click="clear" v-if="msg_list.length>0" type="danger">清空留言</el-button>
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
                let res = window.confirm('你确认要删除这条留言嘛？')
                if (res==true){
                    this.msg_list.splice(index,1);
                    localStorage.msgs = JSON.stringify(this.msg_list);
                }

            },
            clear(){
                let res = window.confirm('你确定要清空留言嘛？')
                if (res==true){
                    // this.message = [];
                    // this.message.splice(0,this.message.length);
                    localStorage.removeItem('msgs');
                    location.reload()
                }

            },
        }
    }
</script>

<style scoped>

</style>
