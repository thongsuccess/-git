<template>
  <div class="dialod_wrap" v-show="visible" @click="changeCloseBtn">
    <div class="content">
      <div class="title">{{title}}</div>
      <div class="describe">{{content}}</div>
      <div class="btn">
        <span @click="changeCloseBtn">{{cancleText?cancleText:'取消'}}</span>
        <span @click="changeConfirmBtn">{{confirmText?confirmText:'确认'}}</span>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="less" src="@/assets/css/components/dialog.less" scoped></style>