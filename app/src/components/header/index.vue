<template>
  <div class='head_wrap'>
      <span>{{title}}</span>
      <span v-show="show" class="back" @click="changeBackBtn">返回</span>
  </div>
</template>
<script src="./index.js"></script>
<style lang="less" scoped src="@/assets/css/components/header.less"></style>