<template>
    <div id="summary" class="ui stackable doubling grid container">
        <div class="row">
            <span class="header2">
                Occupation Summary for Computer Programmers 
            </span>
        </div>
        <div class="row">
            <report-statistic>
                <template slot="value">{{regionalJobCount}}</template>
                <template slot="title">{{jobsYear}}</template>
                <span slot="subtitle">
                    {{Math.round(jobsPerformance)}}% 
                    <span :class="{green: jobsPerformance > 0}">{{ jobsPerformance > 0 ? 'above' : 'below' }}</span> National average
                </span>
            </report-statistic>

            <report-statistic>
                <template slot="value" class="value green">{{ regionalJobGrowth }}</template>
                <template slot="title">{{growthDates}}</template>
                <span slot="subtitle">Nation <span :class="{green: nationalJobGrowth > 0}"> + {{nationalJobGrowth}}% </span></span>
            </report-statistic>

            <report-statistic :rightBorder="false">
                <template slot="value">{{regionalEarnings}}/hr</template>
                <span slot="title">Median Hourly Earnings</span>
                <template slot="subtitle">Nation: {{nationalAverageEarnings}}/hr</template>
            </report-statistic>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ReportStatistic from './ReportStatistic';

export default {
    name: 'SummaryReport',
    components: {
        ReportStatistic
    },
    computed: {
        ...mapGetters([
            'summaryInfo',
        ]),

        /// Job Stats
        jobsYear() {
            return `Jobs ${this.summaryInfo.jobs.year}`;
        },
        regionalJobCount() {
            return this.numberWithCommas(this.summaryInfo.jobs.regional);
         },
        jobsPerformance() {
            return (this.summaryInfo.jobs.regional / this.summaryInfo.jobs.national_avg) * 100;
        },

        // Growth Stats
        regionalJobGrowth() {
            var growth = this.summaryInfo.jobs_growth.regional;
                if (growth > 0) {
                    return `+ ${growth}%`;
                }
            return `${growth}%`;
        },
        nationalJobGrowth() {
            return this.summaryInfo.jobs_growth.national_avg;
        },
        growthDates() {
            var start = this.summaryInfo.jobs_growth.start_year;
            var end = this.summaryInfo.jobs_growth.end_year;
            return `% Change (${start}-${end})`;
        },

        // Earning stats 
        regionalEarnings() {
            return this.summaryInfo.earnings.regional; 
        },
        nationalAverageEarnings() {
            return this.summaryInfo.earnings.national_avg;
        }
    },
    methods: {
        numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
}
</script>

<style scoped>

</style>