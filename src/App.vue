<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script lang="ts" setup>
import helper from './types/helper'

console.log(typeof helper.envs.VITE_ROUTE_AUTOLOAD)
</script>
<style lang="less" scoped></style>
