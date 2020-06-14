<template>
    <div class="page_wrap">
        <ul>
            <li class="left" @click="changePageLeft">左</li>
            <li :class="{'active':cur == index+1}" v-for="(item,index) in list" v-bind:key="index" @click="changePageItem(index)">{{item}}</li>
            <li class="right" @click="changePageRight">右</li>
        </ul>
    </div>
</template>
<script src="./index.js"></script>
<style lang="less" src="@/assets/css/components/page.less" scoped></style>