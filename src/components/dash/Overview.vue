<template>
  <section class="content">
    <div class="row totalTable">
      <div class="col-xs-12">
        <div class="box">
          <div class="box-header">
            <h3>Revenue</h3>
            <div class="btn-group" role="group">
              <button type="button" class="btn btn-default">Yesterday</button>
              <button type="button" class="btn btn-default">MTD</button>
              <button type="button" class="btn btn-default">YTD</button>
            </div>
          </div>
          <div class="box-body">
            <div class="row">
              <div class="col-xs-4">
                <div id="pie1" style="height:400px"></div>
                <div class="btn-group left50" role="group">
                  <button type="button" class="btn btn-default">Revenue</button>
                  <button type="button" class="btn btn-default">Cost</button>
                  <button type="button" class="btn btn-default">Profit</button>
                </div>
              </div>
              <div class="col-xs-8">
                <div id="bar1" style="height:400px"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row totalTable">
      <div class="col-xs-12">
        <div class="box">
          <div class="box-header">
            <h3>Rooms</h3>
            <div class="btn-group" role="group">
              <button type="button" class="btn btn-default">Yesterday</button>
              <button type="button" class="btn btn-default">MTD</button>
              <button type="button" class="btn btn-default">YTD</button>
            </div>
          </div>
          <div class="box-body">
            <div class="row">
              <div class="col-xs-12">
                <div id="zh1" style="height:400px"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row totalTable">
      <div class="col-xs-12">
        <div class="box">
          <div class="box-header">
            <h3>Events</h3>
            <div class="btn-group" role="group">
              <button type="button" class="btn btn-default">Yesterday</button>
              <button type="button" class="btn btn-default">MTD</button>
              <button type="button" class="btn btn-default">YTD</button>
            </div>
          </div>
          <div class="box-body">
            <div class="row">
              <div class="col-xs-12">
                <div id="zh2" style="height:400px"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row totalTable">
      <div class="col-xs-12">
        <div class="box">
          <div class="box-header">
            <h3>F&B</h3>
            <div class="btn-group" role="group">
              <button type="button" class="btn btn-default">Yesterday</button>
              <button type="button" class="btn btn-default">MTD</button>
              <button type="button" class="btn btn-default">YTD</button>
            </div>
          </div>
          <div class="box-body">
            <div class="row">
              <div class="col-xs-12">
                <div id="subz" style="height:400px"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Echarts from 'echarts'

module.exports = {
  data: function () {
    return {}
  },
  mounted: function () {
    // Revenue占比
    var pie1Chart = Echarts.init(document.getElementById('pie1'), 'walden')
    var pie1Option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} {d}%'
      },
      grid: {
        left: 100
      },
      legend: {
        data: ['Rooms', 'Events', 'F&B', 'OOD']
      },
      series: [
        {
          name: 'Revenue',
          type: 'pie',
          selectedMode: 'single',
          radius: ['40%', '90%'],
          label: {
            normal: {
              position: 'inner'
            }
          },
          labelLine: {
            normal: {
              show: true
            }
          },
          data: [
            {value: 103268, name: 'Rooms'},
            {value: 53268, name: 'Events'},
            {value: 143829, name: 'F&B'},
            {value: 34970, name: 'OOD'}
          ]
        }
      ]
    }
    pie1Chart.setOption(pie1Option)

    var bar1Chart = Echarts.init(document.getElementById('bar1'), 'walden')
    var bar1Option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        show: true,
        data: ['Cost', 'Revenue', 'Profit']
      },
      xAxis: [
        {
          type: 'value',
        }
      ],
      yAxis: [
        {
          type: 'category',
          axisTick: {show: false},
          data: ['OOD', 'Events', 'Rooms', 'F&B', 'All']
        }
      ],
      series: [
        {
          name: 'Profit',
          type: 'bar',
          label: {
            normal: {
              show: true,
              position: 'right'
            }
          },
          data: [20982, 37287, 74335, 59284, 191888]
        },
        {
          name: 'Revenue',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'right'
            }
          },
          data: [34970, 53268, 103268, 143829, 335335]
        },
        {
          name: 'Cost',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'left'
            }
          },
          data: [-13988, -15981, -28933, -84545, -143447]
        }
      ]
    }
    bar1Chart.setOption(bar1Option)

    // 折线混合
    var zh1Chart = Echarts.init(document.getElementById('zh1'), 'walden')
    var zh1Option = {
      tooltip: {},
      xAxis: [{
        data: ['2017.1', '2017.2', '2017.3', '2017.4', '2017.5', '2017.6']
      }],
      yAxis: [{
        name: 'Occupancy%',
        type: 'value'
      }, {
        name: 'RevPAR',
        type: 'value'
      }],
      legend: {
        data: ['Occupancy', 'LY OTB Occupancy', 'Fcst Occupancy', 'RevPAR', 'LY OTB RevPAR', 'Fcst RevPAR']
      },
      series: [
        {
          type: 'line',
          yAxisIndex: '0',
          name: 'Occupancy',
          data: [60.1, 49.9, 41.4, 6.3, 6.8, 3.3]// TODO OTB OCC CLOUR 1 实线
        }, {
          type: 'line',
          yAxisIndex: '0',
          name: 'LY OTB Occupancy',
          data: [58.9, 52.6, 39.8, 13.7, 29.3, 0.8]// TODO LY OCC 1 浅色系
        }, {
          type: 'line',
          yAxisIndex: '0',
          name: 'Fcst Occupancy',
          data: [64.4, 51.9, 71.6, 73.4, 74.3, 71]// TODO FORECAST OCC 1 虚线
        }, {
          type: 'line',
          yAxisIndex: '1',
          name: 'RevPAR',
          lineStyle: {
            normal: {
              type: 'dotted'
            }
          },
          data: [849, 734, 650, 69, 61, 24]// TODO OTB REVPAR CLOUR 2 实线
        }, {
          type: 'line',
          yAxisIndex: '1',
          name: 'LY OTB RevPAR',
          lineStyle: {
            normal: {
              type: 'dotted'
            }
          },
          data: [887, 629, 617, 171, 437, 7]// TODO LY REVPAR 2 浅色系
        }, {
          type: 'line',
          yAxisIndex: '1',
          name: 'Fcst RevPAR',
          lineStyle: {
            normal: {
              type: 'dotted'
            }
          },
          data: [926, 752, 1185, 1123, 1249, 1125]// TODO FORECAST REVPAR 2 虚线
        }
      ]
    }
    zh1Chart.setOption(zh1Option)

    var zh2Chart = Echarts.init(document.getElementById('zh2'), 'walden')
    var zh2Option = {
      tooltip: {},
      xAxis: [{
        data: ['2017.1', '2017.2', '2017.3', '2017.4', '2017.5', '2017.6']
      }],
      yAxis: [{
        name: 'Occupancy%',
        type: 'value'
      }, {
        name: 'RevPAS',
        type: 'value'
      }],
      legend: {
        data: ['Occupancy', 'LY Occupancy', 'RevPAS', 'LY RevPAS']
      },
      series: [
        {
          type: 'line',
          yAxisIndex: '0',
          name: 'Occupancy',
          data: [47.1, 14.2, 28.5, 8.8, 4.4, 6]// TODO OTB OCC CLOUR 1 实线
        }, {
          type: 'line',
          yAxisIndex: '0',
          name: 'LY Occupancy',
          data: [56.9, 29, 32.3, 25.8, 47.1, 33.8]// TODO LY OCC CLOUR 1 浅色
        }, {
          type: 'line',
          yAxisIndex: '1',
          name: 'RevPAS',
          lineStyle: {
            normal: {
              type: 'dotted'
            }
          },
          data: [21.5, 2.7, 11, 2.3, 0.9, 1.7]// TODO OTB PAS CLOUR 2 实线
        }, {
          type: 'line',
          yAxisIndex: '1',
          name: 'LY RevPAS',
          lineStyle: {
            normal: {
              type: 'dotted'
            }
          },
          data: [22.2, 5.6, 11.5, 7.9, 13.6, 12.5]// TODO LY PAS CLOUR 2 浅色
        }
      ]
    }
    zh2Chart.setOption(zh2Option)

    // 职业占比排名
    // var subzChart = Echarts.init(document.getElementById('subz'), 'walden')
    // var subzOption = {
    //   tooltip: {
    //     formatter: '{b}{a}\n{c}%'
    //   },
    //   legend: {
    //     data: ['系列1', '系列2'],
    //   },
    //   xAxis: {
    //     type: 'category',
    //     data: ['IT互联网', '政府', '电子', '服务业', '旅游业']
    //   },
    //   yAxis: {
    //     axisLabel: {
    //       formatter: '{value}%'
    //     }
    //   },
    //   series: [{
    //     barMaxWidth: '50',
    //     name: '系列1',
    //     label: {
    //       normal: {
    //         show: true,
    //         position: 'inside',
    //         formatter: '{c}%'
    //       }
    //     },
    //     type: 'bar',
    //     data: ['15', '13', '11', '7.5', '3']
    //   }, {
    //     barMaxWidth: '50',
    //     name: '系列2',
    //     label: {
    //       normal: {
    //         show: true,
    //         position: 'inside',
    //         formatter: '{c}%'
    //       }
    //     },
    //     type: 'bar',
    //     data: ['15', '13', '11', '7.5', '3']
    //   }]
    // }
    // subzChart.setOption(subzOption)

    var pop1Chart = Echarts.init(document.getElementById('subz'), 'walden')
    var pop1Option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        data: ['CFG Grill 79', 'FB1 Atmosphere', 'FB2 Noodle Bar', 'FS2 The Red Chamber', 'JPN Nadaman']
      },
      xAxis: [
        {
          type: 'value',
          name: 'Seat Occupancy'
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: 'Avg Cheque per cover'
        }
      ],
      series: [
        {
          name: 'CFG Grill 79',
          type: 'scatter',
          symbolSize: 30,
          data: [[70, 230]]
        }, {
          name: 'FB1 Atmosphere',
          type: 'scatter',
          symbolSize: 30,
          data: [[46, 100]]
        }, {
          name: 'FB2 Noodle Bar',
          type: 'scatter',
          symbolSize: 30,
          data: [[15, 190]]
        }, {
          name: 'FS2 The Red Chamber',
          type: 'scatter',
          symbolSize: 30,
          data: [[40, 90]]
        }, {
          name: 'JPN Nadaman',
          type: 'scatter',
          symbolSize: 30,
          data: [[87, 60]]
        }
      ]
    }
    pop1Chart.setOption(pop1Option)
  }
}
</script>
<style>
  .table tr *{
    vertical-align: middle!important;
  }
  .totalTable{
    margin-top: 25px;
  }
  .left50{
    left: 70px;
  }
</style>