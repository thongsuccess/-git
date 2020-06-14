<template>
  <div class='list_wrap'>
      <ul>
        <li v-for="(item,index) in list" v-bind:key="index">{{item}}</li>
      </ul>
  </div>
</template>
<script src="./index.js"></script>
<style lang="less" src="@/assets/css/components/list.less" scoped></style>