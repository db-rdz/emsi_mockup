<template>
    <tr>
        <td><slot/> {{region}}</td>
        <td class="right aligned">{{this.numberWithCommas(startJobCount)}}</td>
        <td class="right aligned">{{this.numberWithCommas(endJobCount)}}</td>
        <td class="right aligned">{{this.numberWithCommas(change)}}</td>
        <td class="right aligned">{{changePercentage}}%</td>
    </tr>
</template>

<script>
import formatHelpers from '../mixins/format_helpers';

export default {
    name: 'TrendsRow',
    mixins: [formatHelpers],
    props: {
        region: {
            type: String,
        },
        startJobCount: {
            type: Number
        },
        endJobCount: {
            type: Number
        },
    },
    computed: {
        change() {
            return this.endJobCount - this.startJobCount;
        },
        changePercentage() {
            return Math.round((this.change/this.startJobCount)*1000)/10;
        }

    }
}
</script>