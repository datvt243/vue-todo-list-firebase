<template>
  <div class="clearfix">
    <div class="todo-wrapper">
      <div class="row align-items-end justify-content-between">
        <div class="col-sm-auto">
          <Date></Date>
        </div>
        <div class="col-sm-auto">
          <User></User>
        </div>
      </div>
      <hr class="hr" />
      <TodoForm></TodoForm>
    </div>
    <div class="todo-wrapper">
      <TodoListPin></TodoListPin>
    </div>
    <div class="todo-wrapper">
      <TodoList></TodoList>
    </div>
  </div>
</template>

<script>
import User from "@/components/User.vue";
import Date from "@/components/Date.vue";

import TodoForm from "./TodoForm.vue";
import TodoListPin from "./TodoListPin.vue";
import TodoList from "./TodoList.vue";

export default {
  name: "TodoWrapper",
  components: {
    User,
    Date,
    TodoForm,
    TodoList,
    TodoListPin
  }
};
</script>

<style lang="sass" scoped></style>
