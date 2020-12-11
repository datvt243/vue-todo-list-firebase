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
export default {
  name: "TodoForm",
  data() {
    return {
      error: false,
      addDesc: false,
      addLink: false
    };
  },
  methods: {
    addTodo() {
      if (this.$store.state.todoInput.trim() == 0) {
        this.error = true;
        console.log("error: chua nhap title");
        return;
      } else {
        let d = new Date();
        let date = d.getDate();
        let month = d.getMonth() + 1;
        let year = d.getFullYear();
        let hours = d.getHours();
        let minutes = d.getMinutes();
        let seconds = d.getSeconds();
        let todo = {
          title: this.$store.state.todoInput,
          desc: this.$store.state.todoInputDesc,
          dateCreate:
            date +
            "/" +
            month +
            "/" +
            year +
            " " +
            hours +
            ":" +
            minutes +
            ":" +
            seconds,
          linkAttach: this.$store.state.todoInputLink,
          isDelete: false,
          isSuccess: false,
          isPin: false
        };
        this.$store.dispatch("addTodo", todo);
        this.error = false;
        this.$store.state.todoInput = "";
        this.$store.state.todoInputDesc = "";
        this.$store.state.todoInputLink = "";
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.box-attach
  padding: 5px 10px
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
