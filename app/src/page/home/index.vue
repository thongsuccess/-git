<template>
    <div class="home-wrap">
        <div @click="changeToggleModal">显示对话框</div>
        <diaLog 
            title="首页Modal"
            content="描述文字"
            v-show="visible"
            cancleText="cancel"
            confirmText="ok"
            v-on:cancel="cancel"
            v-on:confirm="confirm"
        ></diaLog>
    </div>
</template>
<script src="./index.js"></script>