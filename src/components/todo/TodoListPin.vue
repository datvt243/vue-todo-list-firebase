<template>
  <div class="clearfix" v-if="getTodoIsPin.length != 0">
    <h2 class="heading-secondary">Danh sách được Gim</h2>
    <transition-group tag="ul" class="todo-list is-pin" name="dropdown">
      <li v-for="(todo, index) in getTodoIsPin" :key="index">
        <TodoItem :todo="todo"></TodoItem>
      </li>
    </transition-group>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import { mapGetters } from "vuex";
export default {
  name: "TodoListPin",
  components: {
    TodoItem
  },
  computed: {
    ...mapGetters(["getTodoIsPin"])
  }
};
</script>

<style lang="sass" scoped>
.todo-list
  margin-bottom: 0
</style>
