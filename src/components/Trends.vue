<template>
    <div id="trends" class="ui grid container">
        <div class="row bottom_border">
            <span class="header2">
                Regional Trends
            </span>
        </div>
        <div class="row">
            <canvas id="line-chart" width="800" height="240"></canvas>
        </div>
        <div class="row">
            <table class="ui very basic table">
                <thead>
                    <tr>
                        <th class="nine wide">Region</th>
                        <th class="right aligned">{{startYear}} Jobs</th>
                        <th class="right aligned">{{endYear}} Jobs</th>
                        <th class="right aligned">Change</th>
                        <th class="right aligned">% Change</th>
                    </tr>
                </thead>
                <tbody>
                    <trends-row v-for="(value, name) in regionInfo" :key="name"
                        :region="name"
                        :startJobCount="value[0]"
                        :endJobCount="value[yearCount-1]"
                    >
                        <div :class="{ triangle: name == 'Nation', square: name == 'State', circle: name == 'Region' }"></div>
                    </trends-row>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
var Chart = require('chart.js');
import { mapGetters } from 'vuex';
import TrendsRow from './TrendsRow';

export default {
    name: 'Trends',
    components: {
        TrendsRow,
    },
    computed: {
        ...mapGetters([
            'trendComparison',
        ]),
        regionInfo() {
            this.trendComparison.regional;
            return {
                Region: this.trendComparison.regional,
                State: this.trendComparison.state,
                Nation: this.trendComparison.nation,
            };
        },
        startYear() {
            return this.trendComparison.start_year;
        },
        endYear() {
            return this.trendComparison.end_year;
        },
        yearCount() {
            return this.endYear - this.startYear;
        },
        // getGraphData() {
            
        // }
    },
    methods: {
        getRegionValueByIndex(index) {
            return this.trendComparison.regional[index];
        },
        getStateValueByIndex(index) {
            return this.trendComparison.state[index];
        },
        getNationValueByIndex(index) {
            return this.trendComparison.nation[index];
        },
        roundToOneDecimal(value) {
            return Math.round(value * 1000) / 10;
        },
        computeChangePercentage(startValue, endValue) {
            return this.roundToOneDecimal((endValue - startValue)/startValue);
        }
    },
    mounted() {

        var chartLabels = [];

        for (var year = this.startYear; year <= this.endYear; year++) {
            chartLabels.push(year);
        }

        var regionDataSet = [0];
        var stateDataSet = [0];
        var nationDataSet = [0];

        for (var i = 1; i <= this.yearCount; i++) {
            // Loop through the data and create the data sets 
            // Make sure that the index exists in the data given before trying to add the value in
            if (this.regionInfo.Region[i]) {
                regionDataSet.push(this.computeChangePercentage(this.regionInfo.Region[i-1], this.regionInfo.Region[i]))
            }

            if (this.regionInfo.State[i]) {
                stateDataSet.push(this.computeChangePercentage(this.regionInfo.State[i-1], this.regionInfo.State[i]))
            }
            
            if (this.regionInfo.Nation[i]) {
                nationDataSet.push(this.computeChangePercentage(this.regionInfo.Nation[i-1], this.regionInfo.Nation[i]))
            }
            
            
        }

        new Chart(document.getElementById("line-chart"), {
            type: 'line',
            data: {
                labels: chartLabels,
                datasets: [{ 
                    lineTension: 0,
                    data: regionDataSet,
                    label: "Region",
                    borderColor: "rgb(149,159,176)",
                    fill: false,
                    pointBorderColor: 'rgba(43,61,95,0)',
                    pointBackgroundColor: 'rgba(43,61,95)',
                    pointRadius: 7,
                    pointStyle: 'circle'
                    // pointBackgroundColor: 
                }, { 
                    lineTension: 0,
                    data: stateDataSet,
                    label: "State",
                    borderColor: "rgb(185,218,237)",
                    fill: false,
                    pointRadius: 7,
                    pointBorderColor: 'rgba(43,61,95,0)',
                    pointBackgroundColor: 'rgba(102,174,215)',
                    pointStyle: 'rect'
                }, { 
                    lineTension: 0,
                    data: nationDataSet,
                    label: "Nation",
                    borderColor: "rgb(227,242,253)",
                    fill: false,
                    pointRadius: 7,
                    backgroundColor: 'rgb(227,242,253)',
                    pointBorderColor: 'rgba(43,61,95,0)',
                    pointBackgroundColor: 'rgba(182,223,252)',
                    pointStyle: 'triangle'
                }, 
                ]
            },
            options: {
                title: {
                display: false,
                },
                scales : {
                yAxes : [ {
                        gridLines : {
                            display : false
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Percent Change',
                            fontStyle: 'bold'
                            
                        }
                        
                    } ]
                },
                legend: {
                    display: false,
                },
            }
            });

    }
}
</script>

<style scoped>
#trends {
    padding-top: 2vh !important;
}

.circle {
  height: 18px;
  width: 18px;
  margin-right: 13px;
  display: inline-block;
  background-color: rgba(43,61,95);
  border-radius: 50%;
}

.square {
  width: 15px; 
  height: 15px; 
  margin-right: 16px;
  top: 50%;
  display: inline-block;
  background-color: rgba(102,174,215);
}

.triangle {
  width: 0; 
  height: 0; 
  margin-right: 13px;
  border-left: 9px solid transparent;
  border-right: 9px solid transparent;
  display: inline-block;
  border-bottom: 9px solid rgba(182,223,252, 1.0);
}


</style>