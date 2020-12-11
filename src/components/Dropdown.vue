<template>
  <div class="dropdown">
    <div class="dropdown-header">
      <div class="d-inline-block" @click="isDropdown = !isDropdown">
        <slot name="header"></slot>
      </div>
    </div>
    <transition name="dropdown">
      <div class="dropdown-content" v-show="isDropdown">
        <slot name="content"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  data() {
    return {
      isDropdown: false
    };
  },
  created() {
    window.addEventListener("click", this.closeDropdown);
  },
  beforeDestroy() {
    this.isDropdown = false;
    window.removeEventListener("click", this.closeDropdown);
  },
  methods: {
    closeDropdown(e) {
      if (!this.$el.contains(e.target)) {
        this.isDropdown = false;
      }
    }
  }
};
</script>

<style lang="sass" scoped></style>
