<template>
  <div id="app">
    <div id="loading-overlay">
        <img src="emsi-logo.svg" alt="Emsi">
    </div>
    <OccupationOverview v-if="loading == false"></OccupationOverview>
  </div>
</template>

<script>
import OccupationOverview from './components/OccupationOverview';
import store from './stores/AppStore';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  data() {
    return {
      loading: true
    }
  },
  components: {
    OccupationOverview
  },
  store,
  methods: {
    ...mapActions([
        'fetchReportData',
    ]),
  },
  created() {
    
  },
  mounted() {
    /// Fetch the data for the view
    this.fetchReportData().then(() => {
      this.loading = false;
      document.getElementById("loading-overlay").style.opacity = "0%";
    });
  },

}
</script>

<style>
@import "~font-awesome/css/font-awesome.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.header1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 24px !important;
  font-weight: 700 !important;
}

.header2 {
  color: #676767 !important;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1.3em !important;
  font-weight: 900 !important;
  
}

#loading-overlay {
  width: 100%; /* Full width (cover the whole page) */
  height: 100vh; /* Full height (cover the whole page) */

  position: absolute;
  top: 50%;
  opacity: 100%;
  z-index: 10;

  text-align: center;
  vertical-align: middle; 
  transition: opacity 1s;
}

#loading-overlay img {
  width: 20vw;
  height: auto;
}

</style>
