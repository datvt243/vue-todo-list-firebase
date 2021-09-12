import { vuexfireMutations } from "vuexfire";
export default {
  // mutations
  ...vuexfireMutations,
  setTodoInput: (state, value) => {
    state.todoInput = value;
  },
  setTodoInputDesc: (state, value) => {
    state.todoInputDesc = value;
  },
  setTodoInputLink: (state, value) => {
    state.todoInputLink = value;
  },
  setFilterControl: (state, value) => {
    state.filterControl = value;
  }
};
