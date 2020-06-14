<template>
    <div class="login-wrap">
        <h2>登陆</h2>
        <form ref="loginForm">
            <div class="user" prop="username">
                <label for="">用户名</label>
                <input type="text" placeholder="用户名" v-model="loginForm.username">
            </div>
            <div class="pwd" prop="password">
                <label for="">密码</label>
                <input type="text" placeholder="密码输入" v-model="loginForm.password">
            </div>
            <div class="adds" @click.prevent="submitForm('loginForm')">
                <button>提交</button>
            </div>
        </form>
    </div>
</template>
<script src="./index.js"></script>