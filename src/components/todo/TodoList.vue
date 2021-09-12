<template>
  <div class="clearfix">
    <h2 class="heading-secondary">Danh sách công việc</h2>
    <div class="clearfi">
      <TodoControl></TodoControl>
    </div>
    <div v-if="getListTodo.length == 0" class="box-inner is-empty">
      <p class="text-center">
        Không có dữ liệu để hiển thị
      </p>
    </div>
    <div class="clearfix" v-else>
      <p class="text-info margin-b20 mess">
        <small>
          <i>
            Double click vào tiêu đề, mô tả hoặc link để chỉnh sửa. Item đã hoàn
            thành không thể chỉnh sửa.
          </i>
        </small>
      </p>
      <transition-group tag="ul" class="todo-list" name="dropdown">
        <li v-for="(todo, index) in getListTodo" :key="index">
          <TodoItem :todo="todo"></TodoItem>
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script>
import TodoControl from "./TodoControl.vue";
import TodoItem from "./TodoItem.vue";
import { mapGetters } from "vuex";
export default {
  name: "TodoList",
  components: {
    TodoItem,
    TodoControl
  },
  created() {
    this.$store.dispatch("bindTodos");
  },
  destroyed() {
    this.$store.dispatch("unbindTodos");
  },
  data() {
    return {
      todoList: []
    };
  },
  computed: {
    ...mapGetters(["getListTodo"])
  }
};
</script>

<style lang="sass" scoped>
.mess
  margin-bottom: 10px
</style>
