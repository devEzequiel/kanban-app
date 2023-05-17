<template>
  <img :src="'/src/assets/icons/'+name" />
</template>
<script lang="ts">
  import {defineComponent} from "vue";
  export default defineComponent({
    name: "Icon",
    props: {
      name: String,
    }
  })
</script>
<style scoped></style>
