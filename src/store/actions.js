import { firebaseAction } from "vuexfire";
import { db } from "@/firebase";

export default {
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
};
