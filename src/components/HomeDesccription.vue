<template>
  <section class="description">
    <div class="dicor_line"></div>
    <div class="posts_wrapper">
      <div class="post post1" style="z-index: 10">
        <div class="post_msg" id="p1m1">
          смотри спортивные события, которые происходят прямо сейчас
        </div>
        <div class="post_msg" id="p1m2">и учавствуй в спортивной жизни города</div>
        <!-- <div class="img_container"></div> смотри-->
        <!-- <img src="/imgs/Rectangle 41.png" alt="" class="post_img" /> -->
      </div>
      <div class="post post2" style="z-index: 10">
        <div class="post_msg" id="p2m1">находи друзей для игр рядом с домом</div>
      </div>
      <div class="post post3" style="z-index: 10">
        <div class="post_msg" id="p3m1">записывайся в спортивные секции и учись свои навыки</div>
      </div>
      <img src="/imgs/homeBackground.png" alt="" class="bgImg" />
    </div>
  </section>
</template>

<style scoped>
.bgImg {
  position: absolute;
  z-index: 0;
  background-color: transparent;
  right: 0;
}
.dicor_line {
  margin: 60px auto;
  width: 106px;
  height: 2px;
  background-color: black;
}
.post {
  position: relative;
  border-radius: 78px;
  background-position: center center;
  background-attachment: scroll;
  background-size: cover;
}
.posts_wrapper {
  width: 85%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 100px;
  column-gap: 5%;
}
.post1 {
  grid-column-start: 1;
  grid-column-end: 3;
  width: 100%;
  text-align: center;
  background-image: url('/imgs/postBg.jpeg');

  min-height: 370px;
  margin: 0 auto;
}

.post_msg {
  position: absolute;
  padding-left: 20px;
  text-align: left;
  width: 380px;
  height: 67px;
  background-size: contain;
  background-repeat: no-repeat;
  font-size: 16px;
}
.post_msg#p1m1 {
  top: 60px;
  left: 20px;
  padding-top: 10px;
  background: url('/imgs/msgBg.png');
  background-size: contain;
  background-repeat: no-repeat;
}
.post_msg#p1m2 {
  bottom: 60px;
  left: 20px;
  padding-top: 20px;
  background: url('/imgs/msgBg.png');
  background-size: contain;
  background-repeat: no-repeat;
}
.post3 {
  background-image: url('/imgs/post2Bg.jpeg');
}
.post_msg#p2m1 {
  bottom: 40px;
  left: 10px;
  padding-top: 20px;
  background: url('/imgs/msgBg.png');
  background-size: contain;
  background-repeat: no-repeat;
}
.post_msg#p3m1 {
  top: 40px;
  left: 10px;
  padding-top: 10px;
  background: url('/imgs/msgBg.png');
  background-size: contain;
  background-repeat: no-repeat;
}
.post2 {
  background-image: url('/imgs/post2.jpg');
}

@media (min-width: 1200px) {
  .post1 {
    min-height: 400px;
  }
}
@media (max-width: 900px) {
  .post_msg#p1m1 {
    /* padding: 0;
    padding-left: 5px; */
    left: 5px;
    padding-top: 7px;
    height: 57px;
    width: 320px;
    font-size: 14px;
  }
  .post_msg#p1m2 {
    /* padding: 0;
    padding-left: 5px; */
    left: 5px;
    padding-top: 7px;
    height: 57px;
    width: 320px;
    font-size: 14px;
  }
  .post_msg#p3m1 {
    left: 5px;
    padding-top: 7px;
    height: 57px;
    width: 320px;
    font-size: 14px;
  }
}
@media (max-width: 800px) {
  .posts_wrapper {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
  .post1 {
    grid-column: auto;
  }
}
</style>
