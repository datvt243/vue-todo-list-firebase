import Vue from "vue";
import Vuex from "vuex";
import { vuexfireMutations, firebaseAction } from "vuexfire";
import { db } from "@/firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoInput: "",
    todoInputDesc: "",
    todoInputLink: "",
    filterControl: "all",
    todos: []
  },
  getters: {
    getTodosFirebase: state => {
      return state.todos;
    },
    getTodoIsPin: state => {
      return state.todos.filter(
        todo => todo.isPin == true && todo.isDelete == false
      );
    },
    getListTodo: state => {
      if (state.filterControl == "all") {
        return state.todos.filter(
          todo => todo.isDelete == false && todo.isPin == false
        );
      } else if (state.filterControl == "not-done") {
        return state.todos.filter(
          todo =>
            todo.isSuccess == false &&
            todo.isDelete == false &&
            todo.isPin == false
        );
      } else if (state.filterControl == "done") {
        return state.todos.filter(
          todo =>
            todo.isSuccess == true &&
            todo.isDelete == false &&
            todo.isPin == false
        );
      } else if (state.filterControl == "deleted") {
        return state.todos.filter(todo => todo.isDelete == true);
      }
    }
  },
  mutations: {
    // mutations
    ...vuexfireMutations
  },
  actions: {
    bindTodos: firebaseAction(({ bindFirebaseRef }) => {
      // return the promise returned by `bindFirebaseRef`
      return bindFirebaseRef("todos", db.ref("todos"));
    }),
    unbindTodos: firebaseAction(({ unbindFirebaseRef }) => {
      unbindFirebaseRef("todos");
    }),
    addTodo: firebaseAction((context, todo) => {
      return db
        .ref("todos")
        .push(todo)
        .then(() => {
          console.log("add success");
        });
    }),
    updateTodo: firebaseAction((context, todo) => {
      db.ref("todos/" + todo[".key"])
        .set(todo)
        .then(() => {
          console.log("update success");
        });
    }),
    deleteTodo: firebaseAction((context, todo) => {
      todo.isDelete = true;
      db.ref("todos/" + todo[".key"])
        .set(todo)
        .then(() => {
          console.log("update success");
        });
    }),
    unDeleteTodo: firebaseAction((context, todo) => {
      todo.isDelete = false;
      db.ref("todos/" + todo[".key"])
        .set(todo)
        .then(() => {
          console.log("update success");
        });
    }),
    pinTodo: firebaseAction((context, todo) => {
      todo.isPin = true;
      db.ref("todos/" + todo[".key"])
        .set(todo)
        .then(() => {
          console.log("pin success");
        });
    }),
    unPinTodo: firebaseAction((context, todo) => {
      todo.isPin = false;
      db.ref("todos/" + todo[".key"])
        .set(todo)
        .then(() => {
          console.log("unpin success");
        });
    })
  },
  module: {}
});
