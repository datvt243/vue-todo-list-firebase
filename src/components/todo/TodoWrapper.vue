<template>
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
    <TodoListPin></TodoListPin>
    <TodoControl></TodoControl>
    <TodoList></TodoList>
  </div>
</template>

<script>
import User from "@/components/User.vue";
import Date from "@/components/Date.vue";

import TodoForm from "./TodoForm.vue";
import TodoListPin from "./TodoListPin.vue";
import TodoList from "./TodoList.vue";
import TodoControl from "./TodoControl.vue";

export default {
  name: "TodoWrapper",
  components: {
    User,
    Date,
    TodoForm,
    TodoList,
    TodoListPin,
    TodoControl
  }
};
</script>

<style lang="sass" scoped></style>
