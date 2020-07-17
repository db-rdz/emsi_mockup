<template>
    <div class="five wide column top_border bottom_border"
        :class="{ right_border: rightBorder }" >

    

        <div class="ui small statistic">
            <div class="value">
                <slot name="value"/>
            </div>
            <div class="label">
                <span class="title"><slot name="title"/> </span><br>
                <span class="subtitle"><slot name="subtitle"/></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ReportStatistic',
    props: {
        rightBorder: {
            type: Boolean,
            required: false,
            default: true,
        }
    }
}
</script>

<style scoped>

/* Stats Styling */
.value {
    font-weight: 200 !important;
    color: #717171 !important;
    text-transform: none !important;
}

.statistic {
    padding-top: 3.5vh !important;
    padding-bottom: 3.5vh !important;
}

.statistic .title {
    color: #676767;
    font-weight: bolder !important;
    font-size: .9em;
    text-transform: none !important;
}

.green {
    color: #5dba4a !important;
}

.statistic .subtitle {
    color: #535353;
    font-weight: 600 !important;
    font-size: .8em;
    text-transform: none !important;
}
</style>