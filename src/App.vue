<template>
  <div id="app">
    <OccupationOverview></OccupationOverview>
  </div>
</template>

<script>
import OccupationOverview from './components/OccupationOverview'

export default {
  name: 'App',
  components: {
    OccupationOverview
  }
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
</style>
