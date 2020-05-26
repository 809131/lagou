<template>
    <div>
        <mt-tabbar v-model="selected" fixed>
            <mt-tab-item id="home">
                <img src="../assets/images/shouye_active.png" slot="icon" 
                v-if="selected=='home'">
                <img src="../assets/images/shouye.png" slot="icon" v-else>
                首页
            </mt-tab-item>
            <mt-tab-item id="list">
                <img src="../assets/images/list_active.png" slot="icon" 
                v-if="selected=='list'">
                <img src="../assets/images/list.png" slot="icon" v-else>
                热榜
            </mt-tab-item>
            <mt-tab-item id="movie">
                <img src="../assets/images/movie_active.png" slot="icon" 
                v-if="selected=='movie'">
                <img src="../assets/images/movie.png" slot="icon" v-else>
                生活
            </mt-tab-item>
            <mt-tab-item id="user">
                <img src="../assets/images/user_active.png" slot="icon" 
                v-if="selected=='user'">
                <img src="../assets/images/user.png" slot="icon" v-else>
                用户
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
export default {
    props:['active'],
    data(){
        return  {
            selected:this.active
        }
    },
    watch:{
        selected(value){
            if(value=='home'){
                this.$router.push('/')
            }else if(value=='list'){
                this.$router.push('/list')
            }else if(value=='movie'){
                this.$router.push('/movie')
            }else if(value=='user'){
                this.$router.push('/user')
            }
        }
    }
}
</script>

