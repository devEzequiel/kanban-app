<template>
  <div class="task">
    <div v-if="task" class="task__box flex-between-center">
      <div class="d-flex">
        <input type="checkbox" :checked="task?.checked" />
        <p class="text ml-8"> {{ task?.name }}</p>
      </div>
      <div style="gap: 12px" class="d-flex">
        <div class="flex-between-center" style="width: 20px; height: 20px">
          <p class="text flex-items-center">
            <Icon name="circle-calendar.svg"/>
          </p>
        </div>
        <div class="task__box__active"></div>
        <div class="task__box__to_do flex-center text">To Do</div>
      </div>
    </div>
    <p v-else class="text">Nenhuma tarefa no momento</p>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import Icon from "./Icon.vue";

export default defineComponent({
  name: "Task",
  components: {Icon},
  props: {
    task: Object
  }
})
</script>

<style scoped>
.text {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 12.8px;
  line-height: 150%;
  color: #6C757D;

}

.task {
  margin-top: 12px;
}

.task__box {
  @apply flex;
}

.task__box__active {
  width: 20px;
  height: 20px;
  background: #E83E8C;
  border-radius: 50%;
}

.task__box__to_do {
  width: 46px;
  height: 20px;
  border: 1px solid #6C757D;
  border-radius: 4px;

  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
}
</style>
