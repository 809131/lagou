<template>
    <div>
        <mt-header title="今日头条">
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <!-- 注册登陆 -->
        <!-- 面板区域开始 -->
        <div>
            <div class="userLogin">
                <router-link to="/login">
                    <img src="../assets/images/login.png" alt="">
                    <p>点击登录</p>
                </router-link>
            </div>
            <div>
                <mt-cell
                    to="/"
                    is-link
                    value="全部功能">
                </mt-cell>
            </div>
            <div class="tags">
                <div class="tags-item">
                    <span v-for="(item,index) in tags" :key="index">{{tags[index]}}</span>
                </div>
            </div>

        </div>
        <!-- 面板区域结束 -->
        <!-- 底部导航栏 -->
        <div>
            <tabbar :active="active"></tabbar>
        </div>
    </div>
</template>
<script>

import Tabbar from '../components/Tabbar';
export default {
    components:{
        Tabbar
    },
    data(){
        return {
            active:'user',
            tags : ['成语猜字天才🤔','原始农场','超级解压','笑话','小头儿子','救那小姐姐💃','🐟戏荷塘','我射箭贼厉害','我喝药贼快','世界就我一个','冰雪👸','😡表情包','烂烂网⚡','文学📖','娱乐🎮']
        }
    }
    
}
</script>
<style scoped>
a{
    text-decoration: none;
    color:#8a8a8a;
}
.userLogin{
    margin-top: 50px;
    padding-bottom: 20px;
    border-bottom: 5px solid rgba(196, 188, 188, 0.562);
}
.tags .tags-item{
}
.tags-item span{
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid skyblue;
    border-radius: 3px;
    margin: 5px 5px;
}
</style>

