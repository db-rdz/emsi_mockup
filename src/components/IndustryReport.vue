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
                    <industry-report-row  v-for="(industryObject, index) in industries" :key="index" 
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
    }
}
</script>