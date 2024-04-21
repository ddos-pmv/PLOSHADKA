<template>
  <header class="vue-header">
    <div class="header_logo-wrapper">
      <img src="/icons/header_logo.png" alt="logo" class="logo_img" />
    </div>
    <div class="header_btns-wrapper">
      <RouterLink to="/playGrounds" class="header_btn">площадки</RouterLink>
      <RouterLink to="/" class="header_btn">события</RouterLink>
      <RouterLink to="/" class="header_btn">секции</RouterLink>
    </div>
    <div class="header_login-wrapper">
      <img src="/icons/login.svg" alt="login_icon" class="login_img" />
    </div>
  </header>
</template>

<style scoped>
.vue-header {
  min-height: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-content: center;
  padding: 31px 75px;
  align-items: center;
}
.header_btns-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-self: stretch;
  min-width: 270px;
}
.login_img,
.logo_img,
.header_btn {
  cursor: pointer;
}
.header_login-wrapper {
  justify-self: right;
}
.header_logo-wrapper {
  justify-self: left;
}

.header_btn {
  text-decoration: none;
  color: black;
}
.header_btn:hover {
  color: #5c9440;
}

/* Portrait tablets and small desktops */
@media (min-width: 768px) and (max-width: 991px) {
  .vue-header {
    padding: 31px 31px;
  }
  .header_btns-wrapper {
    min-width: 270px;
  }
}
@media (max-width: 767px) {
  .vue-header {
    display: none;
  }
}
</style>
