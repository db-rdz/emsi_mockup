<template>
    <tr>
        <td class="industry"><i class="fa fa-building " aria-hidden="true"></i> {{industry}}</td>
        <td class="right aligned ">{{occupationJobs}}</td>
        <td class="right aligned">{{occupationPercentage}}%</td>
        <td class="right aligned">{{totalPercentage}}%</td>
    </tr>
</template>

<script>
export default {
    name: 'IndustryReportRow',
    props: {
        industry: {
            type: String,
        },
        occupationJobs: {
            type: Number,
        },
        industryJobs: {
            type: Number
        },
        totalJobs: {
            type: Number,
        }
    },
    computed: {
        occupationPercentage() {
            return Math.round((this.occupationJobs/this.totalJobs)*1000)/10;
        },
        totalPercentage() {
            return Math.round((this.occupationJobs/this.industryJobs)*1000)/10;
        },
    },
    mounted() {
        
    }
}
</script>