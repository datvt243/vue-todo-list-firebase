<template>
  <div class="container-wrappper">
    <Header></Header>
    <main class="main-wrapper">
      <div class="container">
        <div class="row margin">
          <div class="col col-lg-9">
            <TodoWrapper></TodoWrapper>
          </div>
          <div class="col col-lg-3">
            <div class="overflow">
              <pre class="small">
                {{ $store.state.todos }}
                <!-- {{ $store.getters.getListTodo }} -->
              </pre>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/templates/Header.vue";
import Footer from "@/templates/Footer.vue";

import TodoWrapper from "@/components/todo/TodoWrapper.vue";

export default {
  name: "Default",
  components: {
    Header,
    Footer,
    TodoWrapper
  }
};
</script>

<style lang="sass" scope>
.row.margin
  > *
    margin-bottom: 20px
.overflow
  overflow-x: hidden
  overflow-y: auto
  max-height: 720px
pre.small
  font-size: 12px
</style>
