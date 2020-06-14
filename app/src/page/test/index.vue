<template>
    <div class="test_wrap">
        <Header title="测试"></Header>
        <div class="content" @touchstart="touchStart($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)" :style="{transform: 'translate3d(0,' + top + 'px, 0)'}">
            <div class="refresh-model">
                <div class="down-tip" v-if="dropDownState===1">
                    <span class="down-text">{{dropDownInfo.downText}}</span>
                </div>
                <div class="up-tip" v-if="dropDownState===2">
                    <span class="up-text">{{dropDownInfo.upText}}</span>
                </div>
                <div class="refresh-tip" v-if="dropDownState===3">
                    <span class="refresh-text">{{dropDownInfo.refreshText}}</span>
                </div>
            </div>
            <div class="item" v-for="(item,index) in bankList" v-bind:key="index">
                <span>{{item.bankName}}--{{index+1}}</span>
            </div>
        </div>
    </div>
</template>
<script src="./index.js"></script>
<style lang="less" src="@/assets/css/page/test.less"></style>