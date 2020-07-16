<template>
    <div id="app">
        <div id="user-profile-page" class="ui stackable doubling grid container">

            <!-------- HEADER SECTION --------->
            <report-header/>
            <!-------- SUMMARY SECTION --------->
            <summary-report/>
            
            <!-------- TRENDS/GRAPH SECTION --------->
            <trends/>

            <!-------- INDUSTRIES SECTION --------->
            <industry-report/>
            
            
        </div>
  </div>
</template>

<script>
import ReportHeader from './ReportHeader.vue';
import Trends from './Trends.vue';
import SummaryReport from './SummaryReport.vue';
import IndustryReport from './IndustryReport.vue';


export default {
    name: 'OccupationOverview',
    components: {
        ReportHeader,
        Trends,
        SummaryReport,
        IndustryReport,
    },
}
</script>

<style>






.right_border {
    border-right: 1px solid #ededed !important;
}

.top_border {
    border-top: 1px solid #ededed;
}

.bottom_border {
    border-bottom: 1px solid #ededed;
}



/* industries styling */
.industry {
    color: #3a82c3;
    font-weight: 600;
}

table th {
    color: #676767 !important;
    font-weight: bolder !important;
}

</style>