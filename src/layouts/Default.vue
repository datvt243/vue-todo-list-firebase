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
                {{ getTodosFirebase }}
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

import { mapGetters } from "vuex";

export default {
  name: "Default",
  components: {
    Header,
    Footer,
    TodoWrapper
  },
  computed: {
    ...mapGetters(["getTodosFirebase"])
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
