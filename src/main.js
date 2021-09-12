import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "./styles/styles.sass";
// import { auth } from "./firebase";

import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

const requireComponent = require.context(
  "./components/base",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );

  Vue.component(componentName, componentConfig.default || componentConfig);
});

Vue.directive("focus", {
  inserted: function(el) {
    el.focus();
  }
});

Vue.config.productionTip = false;

// let app;
// auth.onAuthStateChanged(() => {
//   if (!app) {
//     app = new Vue({
//       store,
//       render: h => h(App)
//     }).$mount("#app");
//   }
// });

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
