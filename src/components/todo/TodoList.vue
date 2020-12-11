<template>
  <div class="clearfix">
    <h2 class="heading-secondary">Danh sách công việc</h2>
    <div v-if="getTodoList.length == 0" class="box-inner is-empty">
      <p class="text-center">
        Không có dữ liệu để hiển thị
      </p>
    </div>
    <div class="clearfix" v-else>
      <div class="alert is-info small margin-b20">
        Double click vào tiêu đề, mô tả hoặc link để chỉnh sửa. Item đã hoàn
        thành không thể chỉnh sửa.
      </div>
      <transition-group tag="ul" class="todo-list" name="dropdown">
        <li v-for="(todo, index) in getTodoList" :key="index">
          <TodoItem :todo="todo"></TodoItem>
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "TodoList",
  components: {
    TodoItem
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
    getTodoList() {
      return this.$store.getters.getListTodo;
    }
  }
};
</script>

<style lang="sass" scoped></style>
