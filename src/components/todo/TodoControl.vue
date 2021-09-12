<template>
  <div class="todo-control">
    <div class="row">
      <div class="col">
        <div class="d-flex flex-wrap">
          <div class="column" v-for="(control, index) in controls" :key="index">
            <BaseButton
              :class="getFilterControl == control.id ? classname : ''"
              @click.native="setFilterControl(control.id)"
            >
              {{ control.text }}
            </BaseButton>
          </div>
        </div>
      </div>
      <!-- <div class="col-auto">
        <BaseButton classname="is-danger-light">
          Xóa mục đã hoàn thành
        </BaseButton>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "TodoControl",
  data() {
    return {
      classname: "is-info",
      controls: [
        {
          id: "all",
          text: "Tất cả"
        },
        {
          id: "done",
          text: "Đã hoàn thành"
        },
        {
          id: "not-done",
          text: "Chưa hoàn thành"
        },
        {
          id: "deleted",
          text: "Đã xóa"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["getFilterControl"])
  },
  methods: {
    ...mapMutations(["setFilterControl"])
  }
};
</script>

<style lang="sass" scoped></style>
