<template>
  <header class="header-wrapper">
    <div class="container">
      <div class="navbar navbar-light">
        <div class="d-flex align-items-center">
          <span>
            <img
              src="@/assets/logo.png"
              width="30"
              class="logo-img"
              :alt="projectName"
              loading="lazy"
            />
          </span>
          <span>
            <h1 class="logo-text">{{ projectName }}</h1>
          </span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      projectName: "Vue Todo List with Firebase"
    };
  }
};
</script>

<style lang="sass" scope>
.navbar
  box-shadow: none
  color: 1
  background-color: #3c424a //rgba(255, 255, 255, .1)
  border:
    radius: 4px
  color: #fff
  padding: 10px 10px
</style>
