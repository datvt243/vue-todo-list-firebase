<template>
  <div class="todo-form">
    <transition name="dropdown">
      <p class="alert is-danger small" v-if="error">
        Vui lòng nhập tiêu đề.
      </p>
    </transition>
    <div class="d-flex">
      <div class="col">
        <div class="relative">
          <span class="deco">
            <img src="@/assets/icon/icon-align-left.png" alt="icon" />
          </span>
          <BaseInput
            placeholder="Thêm mới nội dung ..."
            v-model="$store.state.todoInput"
            @keyup.enter.native="addTodo"
          />
        </div>
        <div class="box-attach">
          <div class="d-flex text-success small">
            <div class="col-auto" v-if="!addDesc">
              <a
                href="#"
                class="trans url text-success"
                @click.prevent="addDesc = !addDesc"
              >
                + Thêm mô tả
              </a>
            </div>
            <div class="col-auto" v-if="!addLink">
              <a
                href="#"
                class="trans url text-success"
                @click.prevent="addLink = !addLink"
              >
                + Thêm link đính kèm
              </a>
            </div>
          </div>
          <transition name="dropdown">
            <div class="desc" v-if="addDesc">
              <div class="d-flex align-items-center">
                <div class="col">
                  <div class="relative ">
                    <span class="deco">
                      <img src="@/assets/icon/icon-note.png" alt="icon" />
                    </span>
                    <BaseInput
                      classname="is-small"
                      placeholder="Thêm mô tả ..."
                      v-model="$store.state.todoInputDesc"
                      @keyup.enter.native="addTodo"
                    />
                  </div>
                </div>
                <div class="col-auto">
                  <a
                    href="#"
                    class="trans d-inline-block"
                    @click.prevent="addDesc = !addDesc"
                  >
                    <i class="icon icon-cancel"></i>
                  </a>
                </div>
              </div>
            </div>
          </transition>
          <transition name="dropdown">
            <div class="link" v-if="addLink">
              <div class="d-flex align-items-center">
                <div class="col">
                  <div class="relative">
                    <span class="deco">
                      <img src="@/assets/icon/icon-link.png" alt="icon" />
                    </span>
                    <BaseInput
                      classname="is-small"
                      placeholder="Thêm link đính kèm ..."
                      v-model="$store.state.todoInputLink"
                      @keyup.enter.native="addTodo"
                    />
                  </div>
                </div>
                <div class="col-auto">
                  <a
                    href="#"
                    class="trans d-inline-block"
                    @click.prevent="addLink = !addLink"
                  >
                    <i class="icon icon-cancel"></i>
                  </a>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
      <div class="col-auto">
        <BaseButton @click.native="addTodo">Thêm mới</BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
import helpers from "@/helpers";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "TodoForm",
  data() {
    return {
      error: false,
      addDesc: false,
      addLink: false,
      inputValue: this.getTodoInput,
      inputDesc: this.getTodoInputDesc,
      inputLink: this.getTodoInputLink
    };
  },
  computed: {
    ...mapGetters(["getTodoInput", "getTodoInputDesc", "getTodoInputLink"])
  },
  methods: {
    ...mapMutations(["setTodoInput", "setTodoInputDesc", "setTodoInputLink"]),
    addTodo() {
      if (this.getTodoInput.trim() == 0) {
        this.error = true;
        return;
      } else {
        let todo = {
          title: this.getTodoInput,
          desc: this.getTodoInputDesc,
          dateCreate: helpers.formatDate(),
          linkAttach: this.getTodoInputLink,
          isDelete: false,
          isSuccess: false,
          isPin: false
        };
        this.$store.dispatch("addTodo", todo);
        this.error = false;
        this.setTodoInput("");
        this.setTodoInputDesc("");
        this.setTodoInputLink("");
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.todo-form
  margin-bottom: 0
.box-attach
  padding: 5px 0 0 0
  > *:not(:last-child)
    margin-bottom: 10px
.form-control
  padding: 13px 15px
  &.is-small
    padding:
      top: 8px
      bottom: 8px
    font-size: 14px
</style>
