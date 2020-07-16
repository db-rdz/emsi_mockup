
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state() {
      return {
        reportData: {},
        APIDomain: 'bodistics-rails.herokuapp.com:8080',
      };
    },
    actions: {
        fetchReportData() {

        }
    }
});

