<template>
  <div class="sidebar">
    <div class="sidebar__icon__home" :class="activeHouse && 'sidebar__icon__home__active'"  @click="toogleIcon('house')">
      <Icon name="house.svg" />
    </div>
    <div class="sidebar__icon__home" :class="activeStar && 'sidebar__icon__home__active'"  @click="toogleIcon('star')">
      <Icon name="star.svg" />
    </div>
  </div>
</template>

<script lang="ts">
  import {defineComponent} from "vue";
  import Icon from "./Icon.vue";
  export default defineComponent({
    name: "Sidebar",
    components: { Icon },
    data(){
      return {
        activeStar: false,
        activeHouse: false,
      }
    },
    methods: {
      toogleIcon(icon: string){
        if(icon === 'star')
          this.activeStar = !this.activeStar;
        if(icon === 'house')
          this.activeHouse = !this.activeHouse;
      }
    }
  })
</script>

<style scoped>
  .sidebar {
    @apply flex flex-col;
    gap: 22px;
    min-height: calc(100vh);
    background: #FFFFFF;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
    padding: 27px;
    min-width: 80px;
    position: absolute;
    bottom: 84px;
    top: 84px;
  }

  .sidebar__icon__home {
    @apply flex items-center justify-center;
    cursor: pointer;
    width: 24px;
    height: 24px;
  }

  .sidebar__icon__home__active {
    background: #868E96;
    border-radius: 4px;
    padding: 3px;
  }
</style>
