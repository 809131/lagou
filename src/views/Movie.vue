<template>
    <div>
        <mt-header title="今日头条">
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>

        <!-- 面板区域开始 -->
        <div class="top">
            #今日推荐
        </div>
        <div class="info">
            
            <div class="infoItem" v-for="(item,index) in data" :key="index">
                <div info="itemImg">
                    <router-link to="/detail">
                    <img :src="item.data.icon" alt="">
                    </router-link>
                </div>
                <p>{{item.data.description}}</p>
                <span>{{item.data.title}}</span>
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
import {mapMutations} from 'vuex';
import Tabbar from '../components/Tabbar';
export default {
    components:{
        Tabbar
    },
    data(){
        return {
            active:'movie',
            data:[],
        }
    },
    methods:{
        loadData(){
            this.axios.get("https://api.apiopen.top/videoCategory")
            .then((res)=>{
                // console.log(res.data.result.itemList)
                var data = res.data.result.itemList;
                this.data = data;
            }).catch((err)=>{
                console.log(err)
            })
        }
    },
    mounted(){
        this.loadData();
        // 事件侦听
        window.addEventListener("scroll",this.handleScroll)
    }
    
}
</script>
<style scoped>
a {
  text-decoration: none;
  color: #000;
}
.top{
    margin-top: 5px;
    line-height: 30px;
    width: 100px;
    height: 30px;
    border-radius: 50px;
    background: rgba(204, 204, 204, 0.555);
}
.info{
    display: flex;
    flex-wrap: wrap-reverse;
    margin-top: 10px;
    
}
.info .infoItem{
    margin: 0 auto;
    width: 180px;
}
.info .infoItem img{
    width: 180px;
    border-radius: 3px;
}
.info .infoItem p{
    text-align: left;
    font-size: 14px;
    color: blue;
}
.info .infoItem span{
    display: block;
    font-size: 12px;
    text-align: right;
    color: red;
}
</style>


