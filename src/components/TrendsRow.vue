<template>
    <tr>
        <td><slot/> {{region}}</td>
        <td class="right aligned">{{startJobCount}}</td>
        <td class="right aligned">{{endJobCount}}</td>
        <td class="right aligned">{{change}}</td>
        <td class="right aligned">{{changePercentage}}%</td>
    </tr>
</template>

<script>
export default {
    name: 'TrendsRow',
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