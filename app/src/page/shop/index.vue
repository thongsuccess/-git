<template>
    <div class="shop_wrap">
        <Header title="购物车"></Header>
        <div class="content">
            <h2>购物车</h2>
            <div class="source">
                <div>
                    <label for="">课程名称</label>
                    <input type="text" v-model="lis.text" placeholder="输入名称">
                </div>
                <div>
                    <label for="">课程价格</label>
                    <input type="text" v-model="lis.price" placeholder="输入价格">
                </div>
                <div @click="addGoodsLis">
                    <button>添加</button>
                </div>
            </div>
            <div class="radio_view">
                <h2>课程名称</h2>
                <div class="item" v-for="(item,index) in goods" :key="index">
                    <div>{{item.text}}</div>
                    <div>{{item.price}}</div>
                </div>
            </div>
        </div>
        <form ref="loginForm" :model="loginForm" :rules="rules">
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
<style lang="less">
    .content {
        margin-top: 50px;
        .radio_view {
            width: 100%;
            margin-top: 20px;
            .item {
                display: flex;
                align-items: center;
                margin-bottom: 10px;
                .radio {
                    width: 20px;
                    height: 20px;
                    border: 1px solid #eeeeee;
                    border-radius: 50%;
                    &.active {
                        background: red;
                    }
                }
            }
        }
    }
</style>