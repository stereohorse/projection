import Vue from 'vue';
import Vuex from 'vuex';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue';

Vue.use(ElementUI);
Vue.use(Vuex);

new Vue({
  el: '#app',
  render: h => h(App)
});

if (module.hot) {
  module.hot.accept();
}
