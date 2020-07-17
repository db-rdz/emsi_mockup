
import Vue from 'vue';
import Vuex from 'vuex';
import OccupationAPI from '../API/OccupationAPI';

Vue.use(Vuex);

export default new Vuex.Store({
    /** 
     * Sets the state for the store
     * @return {object} Which contains the state for the store
     */
    state() {
      return {
        reportData: {},
        loading: true,
      };
    },
    mutations: {
        /** 
         * Modifies the reportData variable and triggers UI refresh.
         * @params {object} state The current state of the store
         * @params {object} payload The object used to change the current state
         * @return null
        */
        setOccupationData(state, payload) {
            state.reportData = payload;
        },
        setLoading(state, payload) {
            state.loading = payload;
        }
    },
    actions: {
        /** Gets the information needed for the Occupation Report
         * 
         @params {object} payload The paramters passed to the API
         @return {promise} a promise that fulfills when data is updated
        **/
        fetchReportData({ commit }, payload={}) {
            var api = new OccupationAPI()
            return api.fetchOccupationData(payload).then((response) => {
                commit('setOccupationData', response.data);
                commit('setLoading', false);
            });
        }
    },
    getters: {
        loading: (state) => {
            return state.loading;
        },
        summaryInfo: (state) => {
            return state.reportData.summary;
        },
        industryInfo: (state) => {
            return state.reportData.employing_industries;
        }
    }
});

