<template>
  <section class="banner_wrapper">
    <span class="sec_font" id="t1">СОЗДАВАЙ СВОЙ</span>
    <span class="main_font" id="t2">СПОРТИВНЫЙ</span>
    <span class="main_font" id="t3">ДОСУГ</span>
    <img src="/imgs/image_2024-04-20_23-27-52.png" alt="" class="bg_img-banner" />
  </section>
</template>

<style scoped>
.banner_wrapper {
  position: relative;
  min-height: 343px;
  background-color: #202020;
}
.sec_font {
  font-family: 'RAYDIS';
  font-size: 64px;
  font-weight: 700;
  line-height: 70.4px;
  text-align: left;
  color: #e9e9e9;
}
.main_font {
  font-family: 'RAYDIS';
  font-size: 96px;
  font-weight: 700;
  line-height: 105.6px;
  text-align: left;
  color: #5c9440;
  font-size: 96px;
}
.bg_img-banner {
  background: transparent;
  position: absolute;
  top: 63px;
  right: 72px;
  z-index: 0;
}

#t1,
#t2,
#t3 {
  display: inline;
  position: absolute;
  background: transparent;
}
#t1 {
  left: 78px;
  top: 40px;
}
#t2 {
  left: 75px;
  top: 117px;
}
#t3 {
  left: 601px;
  top: 219px;
}
@media (max-width: 1080px) {
  #t1 {
    font-size: max(7vw, 36px);
    left: 5vw;
    top: 40px;
  }
  #t2 {
    font-size: max(44px, 9vw);
    left: 4.5vw;
    top: 117px;
  }
  #t3 {
    font-size: max(44px, 9vw);
    left: 50vw;
    top: 219px;
  }
}
@media (max-width: 800px) {
  .bg_img-banner {
    display: none;
  }
  .banner_wrapper {
    max-height: 300px;
  }
  #t1 {
    font-size: max(7vw, 36px);
    left: 5vw;
    top: 50px;
  }
  #t2 {
    font-size: max(44px, 9vw);
    left: 4.5vw;
    top: 97px;
  }
  #t3 {
    font-size: max(44px, 9vw);
    left: 50vw;
    top: 161px;
  }
}
</style>
