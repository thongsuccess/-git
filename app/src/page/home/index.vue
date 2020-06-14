<template>
    <div class="home_wrap">
        <Header title="首页"></Header>
        <div class="content">
            <div @click="changeToggleModal">显示对话框</div>
            <div @click="nativePush">前往测试页面</div>
            <div @click="nativeShop">前往购物车</div>
        </div>
        <Page></Page>
        <div class="plus">
            <h1>Vuex 测试===={{isLogin}}</h1>
            <div @click="addtext(100)">点击我</div>
            <div>我是vuex --state---{{name}}</div>
        </div>
        <div class="shop">
            {{shop.val}}
        </div>
        <diaLog 
            title="首页Modal"
            content="描述文字"
            v-show="visible"
            cancleText="关闭"
            confirmText="确认"
            @cancel="cancel"
            @confirm="confirm"
        ></diaLog>
    </div>
</template>
<script src="./index.js"></script>
<style lang="less" src="@/assets/css/page/home.less" scoped></style>