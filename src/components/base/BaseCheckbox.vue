<template>
  <label class="checkbox">
    <input
      type="checkbox"
      :checked="isChecked"
      :value="value"
      @change="updateInput"
    />
    <span class="virtual-box"></span>
    <span class="text">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "Checkbox",
  model: {
    prop: "modelValue",
    event: "change"
  },
  props: {
    value: String,
    modelValue: { default: "" },
    trueValue: { default: true },
    falseValue: { default: false }
  },
  computed: {
    isChecked() {
      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value);
      }
      return this.modelValue === this.trueValue;
    }
  },
  data() {
    return {};
  },
  methods: {
    handleInput(value) {
      this.$emit("change", value);
    },
    updateInput(event) {
      let isChecked = event.target.checked;
      if (this.modelValue instanceof Array) {
        let newValue = [...this.modelValue];
        if (isChecked) {
          newValue.push(this.value);
        } else {
          newValue.splice(newValue.indexOf(this.value), 1);
        }
        this.$emit("change", newValue);
      } else {
        this.$emit("change", isChecked ? this.trueValue : this.falseValue);
      }
    }
  }
};
</script>
