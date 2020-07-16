<template>
    <div id="summary" class="ui stackable doubling grid container">
        <div class="row">
            <span class="header2">
                Occupation Summary for Computer Programmers 
            </span>
        </div>
        <div class="row">
            <div class="five wide column top_border bottom_border right_border">
                <div class="ui small statistic">
                    <div class="value">
                        12,352
                    </div>
                    <div class="label">
                        <span class="title">Jobs (2015)</span><br>
                        <span class="subtitle">190% <span class="green">above</span> National average</span>
                    </div>
                </div>
            </div>
            <div class="five wide column top_border bottom_border right_border">
                <div class="ui small statistic">
                    <div class="value green">
                        + 10.2%
                    </div>
                    <div class="label">
                        <span class="title">% Change (2013 - 2018)</span><br>
                        <span class="subtitle">Nation <span class="green">+ 8.5%</span></span>
                    </div>
                </div>
            </div>
            <div class="five wide top_border bottom_border column">
                <div class="ui small statistic">
                    <div class="value">
                        5,550
                    </div>
                    <div class="label">
                        <span class="title">Median Hourly Earnings</span><br>
                        <span class="subtitle">Nation: $38.20/hr</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SummaryReport',
}
</script>

<style scoped>

/* Stats Styling */
.value {
    font-weight: 200 !important;
    color: #717171 !important;
}

.statistic {
    padding-top: 3.5vh;
    padding-bottom: 3.5vh;
}

.statistic .title {
    color: #676767;
    font-weight: bolder !important;
    font-size: .9em;
    text-transform: none !important;
}

.statistic .green {
    color: #5dba4a !important;
}

.statistic .subtitle {
    color: #535353;
    font-weight: 600 !important;
    font-size: .8em;
    text-transform: none !important;
}
</style>