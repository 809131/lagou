<template>
    <div>
        <mt-header title="用户注册">
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
                    label="密 码:" 
                    placeholder="请输入密码">
            </mt-field>
            <mt-field type="password" 
                    label="确认密码:" 
                    placeholder="请再次输入密码">
            </mt-field>
            <mt-button type="primary" size="large">注册</mt-button>
            <router-link to="/login">
                <mt-button type="default" size="large">直接登录</mt-button>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
a{
    text-decoration: none;
}
</style>


