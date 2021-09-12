<template>
  <div class="todo-item" :data-key="todo['.key']">
    <div class="d-flex">
      <div class="col-auto">
        <label class="checkbox">
          <input
            type="checkbox"
            v-model="todo.isSuccess"
            @change="updateTodoSuccess(todo)"
          />
          <span class="virtual-box"></span>
          <span class="text"></span>
        </label>
      </div>
      <div class="col">
        <p class="info" v-if="editDesc || editTitle || editLink">
          Enter để lưu. Esc để thoát.
        </p>
        <div class="title" :class="editTitle ? 'is-edit' : ''">
          <span
            v-if="!editTitle"
            :class="{ del: todo.isSuccess }"
            @dblclick="handleEditTitle(todo)"
          >
            {{ todo.title }}
          </span>
          <span v-else>
            <span class="d-flex align-items-center">
              <span class="col">
                <input
                  v-focus
                  type="text"
                  class="form-control"
                  v-model="todo.title"
                  @keyup.esc="cancelEditTitle"
                  @keyup.enter="updateTodo(todo)"
                />
              </span>
              <span class="col-auto">
                <span class="trans pointer" @click="cancelEditTitle">
                  <i class="icon icon-cancel"></i>
                </span>
              </span>
            </span>
          </span>
        </div>
        <div class="content">
          <div class="desc" :class="editDesc ? 'is-edit' : ''">
            <p
              v-if="!editDesc"
              class="desc"
              :class="{ del: todo.isSuccess }"
              @dblclick="handleEditDesc(todo)"
            >
              {{ todo.desc }}
            </p>
            <span v-else>
              <div class="d-flex align-items-center">
                <span class="col">
                  <input
                    class="form-control"
                    v-focus
                    v-model="todo.desc"
                    @keyup.esc="cancelEditDesc"
                    @keyup.enter="updateTodo(todo)"
                  />
                </span>
                <span class="col-auto">
                  <span class="trans pointer" @click="cancelEditDesc">
                    <i class="icon icon-cancel"></i>
                  </span>
                </span>
              </div>
            </span>
          </div>
          <div class="link" :class="editLink ? 'is-edit' : ''">
            <p v-if="!editLink" @dblclick="handleEditLink(todo)">
              <span
                v-if="todo.linkAttach != ''"
                :class="{ del: todo.isSuccess }"
              >
                {{ todo.linkAttach }}
                <a :href="todo.linkAttach" target="_blank" class="trans">
                  <i class="icon icon-blank"></i>
                </a>
              </span>
            </p>
            <span v-else>
              <div class="d-flex align-items-center">
                <span class="col">
                  <input
                    class="form-control"
                    v-focus
                    v-model="todo.linkAttach"
                    @keyup.esc="cancelEditLink"
                    @keyup.enter="updateTodo(todo)"
                  />
                </span>
                <span class="col-auto">
                  <span class="trans pointer" @click="cancelEditLink">
                    <i class="icon icon-cancel"></i>
                  </span>
                </span>
              </div>
            </span>
          </div>
          <p class="date">
            <i class="icon icon-date"></i>
            {{ todo.dateCreate }}
          </p>
        </div>
      </div>
      <div class="col-auto">
        <Dropdown>
          <span class="trans pointer" slot="header">
            <span class="icon icon-dots"></span>
          </span>
          <ul class="list" slot="content" v-if="todo.isDelete == false">
            <li>
              <a
                v-if="!todo.isPin"
                href="#"
                class="nowrap trans"
                :class="todo.isSuccess ? 'disabled' : ''"
                @click.prevent="pinTodo(todo)"
              >
                <span class="icon icon-pin"></span>
                Ghim trên đầu
              </a>
              <a
                v-else
                href="#"
                class="nowrap trans"
                @click.prevent="unPinTodo(todo)"
              >
                <span class="icon icon-pin"></span>
                Gỡ ghim
              </a>
            </li>
            <li v-if="todo.desc == ''">
              <a
                href="#"
                class="nowrap trans"
                :class="todo.isSuccess ? 'disabled' : ''"
                @click.prevent="handleEditDesc(todo)"
              >
                <span class="icon icon-note"></span>
                Thêm mô tả
              </a>
            </li>
            <li v-if="todo.linkAttach == ''">
              <a
                href="#"
                class="nowrap trans"
                :class="todo.isSuccess ? 'disabled' : ''"
                @click.prevent="handleEditLink(todo)"
              >
                <span class="icon icon-blank"></span>
                Thêm link đính kèm
              </a>
            </li>
            <li>
              <a
                href="#"
                class="nowrap trans"
                @click.prevent="deleteTodo(todo)"
              >
                <span class="icon icon-delete"></span>
                Xóa
              </a>
            </li>
          </ul>
          <ul class="list" slot="content" v-else>
            <li>
              <a
                href="#"
                class="nowrap trans"
                @click.prevent="unDeleteTodo(todo)"
              >
                <span class="icon icon-reload"></span>
                Phục hồi
              </a>
            </li>
          </ul>
        </Dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from "@/components/Dropdown.vue";
export default {
  name: "TodoItem",
  components: {
    Dropdown
  },
  props: ["todo"],
  data() {
    return {
      editTitle: false,
      beforeEditTitle: "",
      editDesc: false,
      beforeEditDesc: "",
      editLink: false,
      beforeEditLink: ""
    };
  },
  computed: {},
  methods: {
    handleEditTitle(todo) {
      if (todo.isSuccess == false) {
        this.editTitle = true;
        this.beforeEditTitle = todo.title;
      }
    },
    cancelEditTitle() {
      this.editTitle = false;
      this.todo.title = this.beforeEditTitle;
    },
    handleEditDesc(todo) {
      if (todo.isSuccess == false) {
        this.editDesc = true;
        this.beforeEditDesc = todo.desc;
      }
    },
    cancelEditDesc() {
      this.editDesc = false;
      this.todo.desc = this.beforeEditDesc;
    },
    handleEditLink(todo) {
      if (todo.isSuccess == false) {
        this.editLink = true;
        this.beforeEditLink = todo.link;
      }
    },
    cancelEditLink() {
      this.editLink = false;
      this.todo.Link = this.beforeEditLink;
    },
    updateTodo(todo) {
      console.log("enter");
      if (this.todo.title != "") {
        this.editTitle = false;
        this.editDesc = false;
        this.editLink = false;
        return this.$store.dispatch("updateTodo", todo);
      }
    },
    updateTodoSuccess(todo) {
      this.editTitle = false;
      this.editDesc = false;
      this.editLink = false;
      if (this.todo.isPin == true) {
        this.todo.isPin = false;
      }
      return this.$store.dispatch("updateTodo", todo);
    },
    deleteTodo(todo) {
      return this.$store.dispatch("deleteTodo", todo);
    },
    unDeleteTodo(todo) {
      return this.$store.dispatch("unDeleteTodo", todo);
    },
    pinTodo(todo) {
      return this.$store.dispatch("pinTodo", todo);
    },
    unPinTodo(todo) {
      return this.$store.dispatch("unPinTodo", todo);
    }
  }
};
</script>

<style lang="sass" scoped>
.icon
  width: 1em !important
  height: 1em !important
</style>
