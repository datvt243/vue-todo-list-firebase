<template>
  <input
    class="form-control"
    :type="type"
    :id="id"
    :class="classname"
    :placeholder="placeholder"
    :value="value"
    @input="handleInput($event.target.value)"
  />
</template>

<script>
export default {
  name: "Input",
  props: {
    type: {
      type: String,
      default: "text"
    },
    classname: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  methods: {
    handleInput(value) {
      this.$emit("input", value);
    }
  }
};
</script>
