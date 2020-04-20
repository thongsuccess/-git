<template>
    <div class="home-wrap">
        <Header title="首页"></Header>
        <div @click="changeToggleModal">显示对话框</div>
        <div @click="nativePush">前往测试页面</div>
        <diaLog 
            title="首页Modal"
            content="描述文字"
            v-show="visible"
            cancleText="关闭"
            confirmText="确认"
            v-on:cancel="cancel"
            v-on:confirm="confirm"
        ></diaLog>
    </div>
</template>
<script src="./index.js"></script>