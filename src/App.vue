<template>
  <div>
    <Header/>
    <div class="body">
      <Sidebar />
      <router-view/>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";

export default defineComponent({
  name: "App",
  components: {Header, Sidebar}
})
</script>

<style>
.body {
  @apply flex;
  width: calc(100% - 72px);
}
.flex-between-center {
  @apply flex justify-between items-center;
}

.flex-center {
  @apply flex justify-center items-center;
}
.d-flex {
  @apply flex;
}
.p-20 {
  padding: 20px;
}
.ml-8 {
  margin-left: 8px;
}
.flex-items-center {
  @apply flex items-center;
}
</style>
