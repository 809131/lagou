<template>
    <div>
        <mt-header title="今日头条">
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">推荐</mt-tab-item>
            <mt-tab-item id="2">视频</mt-tab-item>
            <mt-tab-item id="3">日报</mt-tab-item>
            <mt-tab-item id="4">社区</mt-tab-item>
            <mt-tab-item id="5">事迹</mt-tab-item>
            <mt-tab-item id="6">发现</mt-tab-item>
        </mt-navbar>

<!-- tab-container -->
<!-- 面板区域开始 -->

      <!-- 面板区域结束 -->
        <mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
    <div class="tuijian" v-for="(item,index) in data" :key="index">
        <router-link to="/detail">
            <div class="tuijian-item">
                <img :src="item.thumbnail">
            </div>
        </router-link>
        <router-link to="/detail">
            <div class="tuijian-txt">
                <h3>{{item.name}}</h3>
                <p class="txt2">{{item.text}}</p>
                <p class="txt2">{{item.top_comments_content}}</p>
            <div class="text">
                <span class="passtime">发布时间：{{item.passtime}}</span>&nbsp;<img :src="item.header" alt=""><span>{{item.top_comments_name}}</span>
            </div>
             </div> 
        </router-link>
           
    </div>
  </mt-tab-container-item>

  <mt-tab-container-item id="2">
    <div class="info">
            <div class="infoItem" v-for="(item,index) in movieData" :key="index">
                <div info="itemImg">
                    <img :src="item.data.icon" alt="">
                </div>
                <p>{{item.data.description}}</p>
                <span>{{item.data.title}}</span>
            </div>
        </div>
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
    <div>暂无数据，稍后更新</div>
  </mt-tab-container-item>
  <mt-tab-container-item id="4">
    <div>暂无数据，稍后更新</div>
  </mt-tab-container-item>
  <mt-tab-container-item id="5">
    <div>暂无数据，稍后更新</div>
  </mt-tab-container-item>
  <mt-tab-container-item id="6">
    <div>暂无数据，稍后更新</div>
  </mt-tab-container-item>
</mt-tab-container>

        
        
        <!-- 底部选项卡 -->
        <div>
            <tabbar :active="active"></tabbar>
        </div>
    </div>
</template>
<script>
import { mapMutations } from "vuex";
// 导入子组件
import Tabbar from "../components/Tabbar";
export default {
  // 注册子组件
  components: {
    Tabbar
  },
  data() {
    return {
      selected: "1",
      active: "home",
      data: [],
      movieData:[]
    };
  },
  methods: {
    loadData() {
      this.axios
        .get("https://api.apiopen.top/getJoke?page=1&count=2&type=video")
        .then(res => {
          var datas = res.data.result;
          this.data = datas;
        });
        this.axios.get("https://api.apiopen.top/videoCategory")
            .then((res)=>{
                var movieData = res.data.result.itemList;
                this.movieData = movieData;
            }).catch((err)=>{
                console.log(err)
        });
    },
  },
  watch: {
    selected() {
    }
  },
  mounted() {
    //通过loadData()函数获取数据
    this.loadData();
    //事件侦听器
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: #000;
}
.clearFixed {
  content: "";
  display: block;
  clear: both;
}
.tuijian {
  padding: 10px;
  display: flex;
  border-bottom:1px solid #ccc;
  background: rgba(219, 219, 219, 0.24);
  margin-bottom: 5px;
}

.tuijian .tuijian-item img{
  width: 100px;

}
.tuijian .tuijian-txt {
  text-align: left;
  margin-left: 10px;
}
.tuijian .tuijian-txt h3{
    font-size: 18px;
    margin-bottom: 10px;
}
.tuijian .tuijian-txt .txt2{
    margin-bottom: 5px;
}
.tuijian .tuijian-txt .text{
    margin-top: 10px;
}
.tuijian .tuijian-txt .text span{
    font-size: 12px;
}
.tuijian .tuijian-txt .text img {
    border-radius: 50%;
    width: 20px;
}
/*视频区域开始*/
.info{
    display: flex;
    flex-wrap: wrap-reverse;
    margin-top: 3px;
    
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
/*视频区域结束*/
</style>

