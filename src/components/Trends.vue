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
                        <th class="right aligned">2013 Jobs</th>
                        <th class="right aligned">2018 Jobs</th>
                        <th class="right aligned">Change</th>
                        <th class="right aligned">% Change</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Region</td>
                        <td class="right aligned">11,904</td>
                        <td class="right aligned">13,114</td>
                        <td class="right aligned">1,210</td>
                        <td class="right aligned">10.2%</td>
                    </tr>
                    <tr>
                        <td>State</td>
                        <td class="right aligned">13,103</td>
                        <td class="right aligned">14,469</td>
                        <td class="right aligned">1,366</td>
                        <td class="right aligned">10.4%</td>
                    </tr>
                    <tr>
                        <td>Nation</td>
                        <td class="right aligned">13,103</td>
                        <td class="right aligned">14,469</td>
                        <td class="right aligned">1,366</td>
                        <td class="right aligned">10.4%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
var Chart = require('chart.js');

export default {
    name: 'Trends',
        mounted() {

        new Chart(document.getElementById("line-chart"), {
            type: 'line',
            data: {
                labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
                datasets: [{ 
                    data: [86,114,106,106,107,111,133,221,783,2478],
                    label: "Africa",
                    borderColor: "#3e95cd",
                    fill: false
                }, { 
                    data: [282,350,411,502,635,809,947,1402,3700,5267],
                    label: "Asia",
                    borderColor: "#8e5ea2",
                    fill: false
                }, { 
                    data: [168,170,178,190,203,276,408,547,675,734],
                    label: "Europe",
                    borderColor: "#3cba9f",
                    fill: false
                }, { 
                    data: [40,20,10,16,24,38,74,167,508,784],
                    label: "Latin America",
                    borderColor: "#e8c3b9",
                    fill: false
                }, { 
                    data: [6,3,2,2,7,26,82,172,312,433],
                    label: "North America",
                    borderColor: "#c45850",
                    fill: false
                }
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
</style>