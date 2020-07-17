

export default {
    methods: {
        numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        roundToOneDecimal(value) {
            return Math.round(value * 1000) / 10;
        },
    }
}