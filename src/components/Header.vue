<template>
  <div class="header">
    <div class="header__box__left">
      <img src="/src/assets/images/logo.png"/>
      <p class="header__box__left__title">Startups</p>
    </div>
    <div class="header__box__right">
      <Icon name="bell.svg" />
      <Icon name="calendar.svg" />
      <Icon name="cog.svg" />
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import Icon from "./Icon.vue";

export default defineComponent({
  name: "Header",
  components: {Icon},
})
</script>
<style scoped>
.header {
  @apply flex w-full items-center justify-between;
  background: #272727;
  height: 84px;
  padding-left: 18px;
  padding-right: 30px;
}

.header__box__left {
  @apply flex items-center;
  gap: 16px;
}

.header__box__left__title {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #FFFFFF;
}

.header__box__right {
  @apply flex;
  gap: 40px;
}
</style>
