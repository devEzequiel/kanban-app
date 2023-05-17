<template>
  <Modal v-if="view">
    <template v-slot:close>
      <Icon @click="toggleModal()" name="x.svg"/>
    </template>
    <div class="content">
      <div class="content__box1">
        <div style="padding-left: 20px; padding-top: 20px">
          <div class="flex-between-center">
            <div>
              <p class="content__box1__title">{{ data.startup.name }}</p>
              <p class="text content__box1__subtitle">{{ data.challenge.name }}</p>
            </div>
            <div class="content__box1__box-star">
              <p class="text">{{ data.score }}</p>
              <Icon name="star-pink.svg"/>
            </div>
          </div>
          <div class="content__box1__label">
            <p>Estágio</p>
            <p>Modelo de Negócio</p>
          </div>
          <div style="display: flex; flex-direction: column; gap: 38px">
            <div class="flex-between-center">
              <p class="text">Responsável</p>
              <p class="text flex-items-center">
                <Icon style="margin-right: 8px" name="avatar.svg"/>
                {{ data.assignee.name || 'No assignee' }}
              </p>
            </div>
            <div class="flex-between-center">
              <p class="text">Prazo Final</p>
              <p class="text flex-items-center">
                <Icon style="margin-right: 8px" name="circle-calendar.svg"/>
                {{ data.due_date || 'No due date' }}
              </p>
            </div>
            <div class="flex-between-center">
              <p class="text">Anexos</p>
              <div>
                <p class="text flex-items-center content__box1__anexos" v-for="files in data.attachments">
                  <Icon style="margin-right: 8px" :name="files.filename.includes('.jpg') ? 'image.svg':'file.svg'"/>
                  {{ files.filename }}
                  <Icon style="margin-left: 8px" name="circle-close.svg"/>
                </p>
                <p class="text flex-items-center content__box1__anexos" style="color: #49BAB6;">
                  <Icon style="margin-right: 8px" name="more-blue.svg"/>
                  Novo arquivo
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="content__box1__description">
          <div class="content__box1__description__box">
            <div class="content__box1__description__active"></div>
            <div>
              <p class="content__box1__description__title">Usuário 1</p>
              <p class="content__box1__description__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis pretium aliquet quam, at sagittis nulla laoreet non. Vestibulum fermentum sapien et eros malesuada
                mollis.</p>
            </div>
          </div>
          <div class="content__box1__description__box">
            <div class="content__box1__description__active"></div>
            <div>
              <p class="content__box1__description__title">Usuário 2</p>
              <p class="content__box1__description__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis pretium aliquet quam, at sagittis nulla laoreet non. Vestibulum fermentum sapien et eros malesuada
                mollis.</p>
            </div>
          </div>
          <div class="content__box1__description__box">
            <div class="content__box1__description__active"></div>
            <div>
              <input placeholder="Insira um comentário"/>
            </div>
          </div>
        </div>
      </div>
      <div class="content__box2">
        <p class="content__box2__title text">Tarefas por Seção</p>
        <div class="content__box2__card p-20">
          <div class="d-flex flex-between-center">
            <p>Primeira Seção</p>
            <p class="text flex-items-center content__box1__anexos" style="color: #49BAB6;">
              <Icon style="margin-right: 8px" name="more-blue.svg"/>
              Nova Tarefa
            </p>
          </div>
          <div style="margin-top: 12px">
            <p class="text">Nenhuma tarefa no momento</p>
          </div>
        </div>
        <div class="content__box2__card p-20">
          <div class="d-flex flex-between-center">
            <p>Segunda Seção</p>
            <p class="text flex-items-center content__box1__anexos" style="color: #49BAB6;">
              <Icon style="margin-right: 8px" name="more-blue.svg"/>
              Nova Tarefa
            </p>
          </div>
          <Task :task="{name: 'Tarefa', checked: false}"/>
          <Task :task="{name: 'Tarefa', checked: false}"/>
          <Task :task="{name: 'Tarefa', checked: false}"/>
        </div>
        <div class="content__box2__card p-20">
          <div class="d-flex flex-between-center">
            <p>Terceira Seção</p>
            <p class="text flex-items-center content__box1__anexos" style="color: #49BAB6;">
              <Icon style="margin-right: 8px" name="more-blue.svg"/>
              Nova Tarefa
            </p>
          </div>
          <Task :task="{name: 'Tarefa', checked: false}"/>
        </div>
        <div class="content__box2__card p-20">
          <div class="d-flex flex-between-center">
            <p>Quarta Seção</p>
            <p class="text flex-items-center content__box1__anexos" style="color: #49BAB6;">
              <Icon style="margin-right: 8px" name="more-blue.svg"/>
              Nova Tarefa
            </p>
          </div>
          <Task :task="{name: 'Tarefa', checked: false}"/>
          <Task :task="{name: 'Tarefa', checked: false}"/>
          <Task :task="{name: 'Tarefa', checked: false}"/>
        </div>
        <div class="content__box2__card content__box2__card-border_none p-20">
          <div class="d-flex flex-between-center">
            <p>Quinta Seção</p>
            <p class="text flex-items-center content__box1__anexos" style="color: #49BAB6;">
              <Icon style="margin-right: 8px" name="more-blue.svg"/>
              Nova Tarefa
            </p>
          </div>
          <Task/>
        </div>
      </div>
      <div class="content__box3">
        <p class="content__box3__title text">Mover para seção</p>
        <div class="content__box3__box">
          <BoxSection direction="right" name="Quarta Seção"/>
          <BoxSection direction="right" name="Quarta Seção"/>
          <div class="content__box3__line"></div>
          <BoxSection direction="left" name="Quarta Seção"/>
          <BoxSection direction="left" name="Quarta Seção"/>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Modal from "./index.vue";
import Icon from "../Icon.vue";
import Task from "../Task.vue";
import BoxSection from "../Box/BoxSection.vue";

export default defineComponent({
  name: "ToDo",
  components: {BoxSection, Task, Icon, Modal},
  props: {
    toggleModal: Function,
    view: Boolean,
    data: Object,
  }
})
</script>

<style scoped>
.content {
  @apply justify-center;
}

.content__box1__title {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  color: #212529;
}

.text {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 12.8px;
  line-height: 150%;
  color: #6C757D;
}

.content {
  @apply flex;
  flex-wrap: wrap;
  gap: 20px;
}

.content__box1__subtitle {
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  margin-top: 4px;
}

.content__box1__box-star {
  @apply flex flex-col items-center justify-center;
  width: 53px;
  height: 53px;
  border: 2px solid #951B81;
  border-radius: 50%;
}

.content__box1__box-star img {
  width: 12px;
}

.content__box1__box-star p {
  font-weight: 500;
  font-size: 16px;
  color: #951B81;
}

.content__box1__label {
  @apply flex;
  margin: 16px 0 26px;
}

.content__box1__label p {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  color: #FFFFFF;
  padding: 3px 4px;
  border-radius: 4px;
  margin-right: 12px;
}

.content__box1__label p:nth-child(1) {
  background: #951B81;
}

.content__box1__label p:nth-child(2) {
  background: #49BAB6;
}

.content__box1__anexos {
  color: #272727;
}

.content__box1__description {
  @apply flex flex-col;
  margin-top: 29px;
  padding: 20px;
  background: #F8F9FA;
  gap: 20px;
  border-top: 1px solid #DFDFDF;
}

.content__box1__description__box {
  @apply flex;
  width: 100%;
}

.content__box1__description__box input {
  background: #FFFFFF;
  border: 1px solid #CED4DA;
  border-radius: 4px;
  width: 283px;
  height: 30px;
  padding-left: 8px;
}

.content__box1__description__box input::placeholder {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #6C757D;
}

.content__box1__description__active {
  width: 24px;
  height: 24px;
  background: #E83E8C;
  border-radius: 50%;
  margin-right: 10px;
}

.content__box1__description__title {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 12.8px;
  line-height: 150%;
  color: #272727;

}

.content__box1__description__subtitle {
  width: 100%;
  max-width: 337px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 12.8px;
  line-height: 150%;
  color: #272727;
}

.content__box2 {
  border: 1px solid #DFDFDF;
}

.content__box2__title {
  @apply flex items-center;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  color: #272727;
  width: 400px;
  height: 64px;
  padding-left: 20px;
  background: #F8F9FA;
}

.content__box2__card {
  border-bottom: 1px solid #DFDFDF;
}

.content__box2__card-border_none {
  border: none;
}

.content__box3 {
  margin-top: 64px;
  width: 263px;
  padding-right: 20px;
}

.content__box3__title {
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  color: #272727;

}


@media (max-width: 781px) {
  .content__box3 {
    padding-left: 20px;
    padding-bottom: 20px;
    margin-top: 0;
  }
}

.content__box3__line {
  border: 1px solid #DFDFDF;
}

.content__box3__box {
  @apply flex flex-col;
  gap: 10px;
  margin-top: 10px;
}
</style>
