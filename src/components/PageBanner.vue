<script setup>
const propr = defineProps({ titleWhite: String, titleGreen: String })
</script>

<template>
  <section class="banner_wrapper">
    <div class="sec_font">Выберете площадку</div>
    <div class="main_font">себе по вкусу</div>
  </section>
</template>
<style scoped>
.banner_wrapper {
  min-height: 343px;
  background-color: #202020;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}
.main_font {
  background-color: transparent;
  font-family: 'RAYDIS';
  font-size: 96px;
  font-weight: 700;
  line-height: 105.6px;
  text-align: left;
  color: #5c9440;
  font-size: 96px;
}
.sec_font {
  background-color: transparent;
  font-family: 'RAYDIS';
  font-size: 96px;
  font-weight: 700;
  line-height: 105.6px;
  text-align: left;
  color: #e9e9e9;
  font-size: 96px;
}
@media (max-width: 800px) {
  .banner_wrapper {
    max-height: 300px;
  }
  .main_font {
    font-size: max(44px, 9vw);
  }
}
</style>
