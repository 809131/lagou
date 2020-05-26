<template>
    <div>
        <mt-header title="今日头条">
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="search">
            <span></span><input type="text" placeholder="搜索">
        </div>
        <div class="container">
            <router-link to="/detail">
                <div v-for="n in textData.length" class="container-item" v-model="textData" :key="n">
                    <span>{{n}}</span> {{textData[n-1]}}<img src="../assets/images/right.png">
                </div>
            </router-link>
            
        </div>

        <!-- 底部导航栏 -->
        <div>
            <tabbar :active="active"></tabbar>
        </div>
    </div>
</template>
<script>
import {mapMutations} from 'vuex';
import Tabbar from '../components/Tabbar';
export default {
    components:{
        Tabbar
    },
    data(){
        return {
            active:'list',
            textData:['总理报告未提房地产税','港毒的哀鸣','张伯礼谈武汉抗疫时落泪','11支足球队解散','薇娅一场直播挣多少钱']
        }
    }
    
}
</script>
<style scoped>
a {
  text-decoration: none;
  color: #000;
}
.container{
    padding-top: 5px;
}
.container .container-item{
    display: flex;
    padding: 10px;
    border-bottom: 1px solid rgba(224, 223, 223, 0.199);
    text-align: left;
    line-height: 22px;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.container .container-item span{
    display: block;
    width: 25px;
    color: #ccc;
}
.container .container-item img{
    position: absolute;
    right: 10px;
    width: 22px;
    height: 22px;
}
.search {
    display: flex;
    position: relative;
    border: 2px solid #ccc;
}
.search input{
    width:100%;
    height: 25px;
    outline-style: none;
    border:0;
}
.search span{
    position: absolute;
    top: 10px;
    right:10px;
    display: block;
    width: 18px;
    height: 18px;
    background-color: pink;
    background: url("../assets/images/search.png");
    background-repeat: no-repeat;
}
</style>


