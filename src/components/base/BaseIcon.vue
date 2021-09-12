<template>
  <i class="icon" :class="icon"></i>
</template>

<script>
export default {
  name: "Icon",
  props: {
    icon: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="sass" scoped></style>
