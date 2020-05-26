<template>
    <div>
        <mt-header title="今日头条">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>返回
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div>
            <div class="main">暂无数据更新</div>
        </div>
    </div>
</template>
<style scoped>
.main{
    margin-top:10px; 
    font-size: 20px;
}
</style>

