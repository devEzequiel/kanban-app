<template>
  <div class="flex-between-center box">
    <Icon v-if="direction=== 'left'" class="left" name="arrow-right.svg"/>
    <p class="box__title">{{name}}</p>
    <Icon v-if="direction=== 'right'" name="arrow-right.svg"/>
  </div>
</template>

<script>
import Icon from "../Icon.vue";

export default {
  name: "BoxSection",
  components: {Icon},
  props: {
    direction: String,
    name: String,
  }
}
</script>

<style scoped>
.box {
  border: 1px solid #DEE2E6;
  border-radius: 4px;
  padding: 0 16px;
  height: 34px;
}
.box__title {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #272727;
}
.left {
  transform: rotate(180deg);
}
</style>
