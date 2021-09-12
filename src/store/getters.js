export default {
  getTodosFirebase: state => {
    return state.todos;
  },
  getTodoIsPin: state => {
    return state.todos.filter(
      todo => todo.isPin == true && todo.isDelete == false
    );
  },
  getFilterControl: state => {
    return state.filterControl;
  },
  getTodoInput: state => {
    return state.todoInput;
  },
  getTodoInputDesc: state => {
    return state.todoInputDesc;
  },
  getTodoInputLink: state => {
    return state.todoInputLink;
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
};
