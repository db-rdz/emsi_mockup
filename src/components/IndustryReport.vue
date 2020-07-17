<template>
    <div id="industries" class="ui grid container">
        <div class="row bottom_border">
            <span class="header2">
                Industries Employing Computer Programmers
            </span>
        </div>

        <div class="row">
            <table class="ui very basic table">
                <thead>
                    <tr>
                        <th class="ten wide">Industry</th>
                        <th class="right aligned">Occupation Jobs in Indsutry ({{year}})</th>
                        <th class="right aligned">% of Occupation in Industry ({{year}})</th>
                        <th class="right aligned">% of Total Jobs in Industry ({{year}})</th>
                    </tr>
                </thead>
                <tbody>
                    <industry-report-row :id="`industry${index}`" class='industry_row' v-for="(industryObject, index) in industries" :key="index" 
                        :industry="industryObject.title"
                        :occupationJobs="industryObject.in_occupation_jobs"
                        :industryJobs="industryObject.jobs"
                        :totalJobs="totalJobs"
                    />
                </tbody>
                </table>
        </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import IndustryReportRow from './IndustryReportRow';

export default {
    name: 'IndustryReport',
    components: {
        IndustryReportRow,
    },
    computed: {
        ...mapGetters([
            'industryInfo',
        ]),
        industries() {            
            return this.industryInfo.industries;
        },
        totalJobs() {
            return this.industryInfo.jobs;
        },
        year() {
            return this.industryInfo.year;
        }
    },
    mounted() {
        for (var i = 0; i < this.industries.length; i++) {
            var percentage = (this.industries[i].in_occupation_jobs/this.totalJobs) * 100;
            document.getElementById(`industry${i}`).style.background = `linear-gradient(90deg, #e9f2f8 ${percentage}%, transparent 0%)`;
        }

    }
}
</script>

<style>
    .industry_row {
        padding-left: 300px !important;
        background: linear-gradient(90deg, #e9f2f8 70%, transparent 0%);
    }

    td {
        padding-left: 15px !important;   
    }

</style>