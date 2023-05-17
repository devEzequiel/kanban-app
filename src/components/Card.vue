<template>
  <div class="card">
    <div>
      <div class="box-1">
        <p class="box-1__rate__title">{{ card?.startup.name }}</p>
        <div class="box-1__rate">
          <div style="width: 13px; height: 12px">
            <Icon name="rate.svg"/>
          </div>
          <p class="box-1__rate__text">{{ card?.score }}</p>
        </div>
      </div>
      <div>
        <p class="box-1__rate__subtitle box-1__rate__spacing">{{ card?.challenge.name }}</p>
      </div>
      <div>
        <p class="box-1__rate__subtitle">18%</p>
      </div>
      <div class="box-1__label__content">
        <p class="box-1__label box-1__label_pink">
          Ideação
        </p><p  class="box-1__label box-1__label_blue ">
        B2B2C
        </p>
      </div>
      <div class="box-1__bottom">
        <div class="box-1__active"></div>
        <div style="display:flex; gap: 16px">
          <div>
            <div style="width: 16px; height: 15px; margin-right: 5px">
              <Icon name="message.svg" />
            </div>
            <p class="box-1__bottom__text">{{ card?.comments.length }}</p>
          </div>
          <div>
            <div style="width: 16px; height: 15px; margin-right: 5px">
              <Icon name="clock.svg" />
            </div>
            <p class="box-1__bottom__text">{{ card?.due_date }}</p>
          </div>
          <div>
            <div style="width: 7px; height: 15px; margin-right: 5px">
              <Icon name="clip.svg" />
            </div>
            <p class="box-1__bottom__text">{{ card?.attachments.length }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Icon from "./Icon.vue";

export default defineComponent({
  name: "Card",
  components: {Icon},
  props: {
    card: Object
  }
})
</script>

<style scoped>
.card {
  width: 303.5px;
  height: 180px;
  background: #FFFFFF;
  border-radius: 4px;
  padding: 16px;
  margin: 0 auto;
  cursor: pointer;
}

.box-1 {
  @apply flex items-center justify-between;
}

.box-1__rate {
  @apply flex items-center;
}

.box-1__rate__title {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  color: #272727;
}

.box-1__rate__text {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 12.8px;
  line-height: 150%;
  color: #951B81;
  margin-right: 4px;
}

.box-1__rate__spacing {
  margin: 4px auto 10px;
}

.box-1__rate__subtitle {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 12.8px;
  line-height: 150%;
  color: #272727;
}

.box-1__label__content {
  @apply flex;
  gap: 5px;
}

.box-1__active {
  width: 24px;
  height: 24px;
  background: #E83E8C;
  border-radius: 50%;
}

.box-1__label {
  border-radius: 4px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  color: #FFFFFF;
  width: max-content;
  padding: 3px 4px;
}

.box-1__label_blue {
  background: #49BAB6;
}

.box-1__label_pink {
  background: #951B81;
}

.box-1__bottom, .box-1__bottom div {
  @apply flex items-center;
}
.box-1__bottom {
  @apply justify-between;
  margin-top: 26px;
}

.box-1__bottom__text {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 12.8px;
  line-height: 150%;
  color: #272727;
}

</style>
