<template>
    <div>
        <mt-header title="用户登录">
            <router-link to="/user" slot="left">
                <mt-button icon="back"></mt-button>返回
            </router-link>
        </mt-header>
        <div>
            <mt-field type="text" 
                    label="用户名:" 
                    placeholder="请输入用户名">
            </mt-field>
            <mt-field type="password" 
                    label="密码:" 
                    placeholder="请输入密码">
            </mt-field>
            <mt-button type="primary" size="large">登录</mt-button>
            <router-link to="/register">
                <mt-button type="default" size="large">免费注册</mt-button>
            </router-link>
        </div>
        <div class="loginImg">
            <p>其他登录方式</p>
            <img src="../assets/images/weixin.png" alt="">
            <img src="../assets/images/qq.png" alt="">
        </div>
    </div>
</template>
<script>
import '../assets/styles/iconfont.css'
export default {
    
}
</script>

<style scoped>
a{
    text-decoration: none;
}
.loginImg{
    margin-top: 30px;
}
.loginImg p{
    font-size: 12px;
}
.loginImg img{
    margin: 5px ;
}
</style>
