<template>
  <section class="content">
    <div class="row totalTable">
      <div class="col-xs-12">
        <div class="box">
          <div class="box-header">
            <div class="btn-group" role="group">
              <button type="button" class="btn btn-default">Yesterday</button>
              <button type="button" class="btn btn-default">MTD</button>
              <button type="button" class="btn btn-default">YTD</button>
            </div>
          </div>
          <!-- /.box-header -->
          <div class="box-body table-responsive">
            <table class="table table-bordered text-center">
              <tbody>
                <tr>
                    <th rowspan="2">Hotels</th>
                    <th>Total</th>
                    <th colspan="2">Rooms</th>
                    <th colspan="2">Events</th>
                    <th colspan="2">F&B</th>
                    <th colspan="2">OOD</th>
                </tr>
                <tr>
                    <th>Revenue</th>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>2</th>
                    <th>1</th>
                    <th>2</th>
                    <th>1</th>
                    <th>2</th>
                </tr>
                <tr>
                    <td rowspan="3">Shangri-la Hotel</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                </tr>
                <tr>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                </tr>
                <tr>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                </tr>
                <tr>
                    <td rowspan="3">Shangri-la Hotel</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                </tr>
                <tr>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                </tr>
                <tr>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /.box-body -->
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
    var pie1Chart = Echarts.init(document.getElementById('pie1'))
    var pie1Option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} {d}%'
      },
      grid: {
        left: 100
      },
      series: [
        {
          name: 'Revenue分配',
          type: 'pie',
          selectedMode: 'single',
          radius: ['40%', '80%'],
          label: {
            normal: {
              position: 'outside'
            }
          },
          labelLine: {
            normal: {
              show: true
            }
          },
          data: [
            {value: 6, name: '啦啦1'},
            {value: 9, name: '啦啦2'},
            {value: 679, name: '啦啦3'},
            {value: 679, name: '啦啦4'},
            {value: 679, name: '啦啦5'}
          ]
        }
      ]
    }
    pie1Chart.setOption(pie1Option)

    var bar1Chart = Echarts.init(document.getElementById('bar1'))
    var bar1Option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        show: false,
        data: ['利润', '支出', '收入']
      },
      xAxis: [
        {
          type: 'value'
        }
      ],
      yAxis: [
        {
          type: 'category',
          axisTick: {show: false},
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
      ],
      series: [
        {
          name: '利润',
          type: 'bar',
          label: {
            normal: {
              show: true,
              position: 'inside'
            }
          },
          data: [200, 170, 240, 244, 200, 220, 210]
        },
        {
          name: '收入',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true
            }
          },
          data: [320, 302, 341, 374, 390, 450, 420]
        },
        {
          name: '支出',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'left'
            }
          },
          data: [-120, -132, -101, -134, -190, -230, -210]
        }
      ]
    }
    bar1Chart.setOption(bar1Option)

    // 折线混合
    var zh1Chart = Echarts.init(document.getElementById('zh1'))
    var zh1Option = {
      xAxis: [{
        data: ['2010', '2011', '2012', '2013']
      }],
      yAxis: [{
        name: 'Room',
        type: 'value'
      }, {
        name: 'RevPPAR',
        type: 'value'
      }],
      series: [
        {
          type: 'line',
          yAxisIndex: '0',
          data: [1, 3, 5, 6, 7]
        }, {
          type: 'line',
          yAxisIndex: '0',
          data: [11, 32, 35, 46, 57]
        }, {
          type: 'line',
          yAxisIndex: '0',
          data: [1, 32, 55, 16, 17]
        }, {
          type: 'line',
          yAxisIndex: '1',
          data: [21, 3, 5, 76, 7]
        }, {
          type: 'line',
          yAxisIndex: '1',
          data: [1, 33, 45, 6, 7]
        }, {
          type: 'line',
          yAxisIndex: '1',
          data: [1, 23, 55, 63, 7]
        }
      ]
    }
    zh1Chart.setOption(zh1Option)

    var zh2Chart = Echarts.init(document.getElementById('zh2'))
    var zh2Option = {
      xAxis: [{
        data: ['2010', '2011', '2012', '2013']
      }],
      yAxis: [{
        name: 'Room',
        type: 'value'
      }, {
        name: 'RevPPAR',
        type: 'value'
      }],
      series: [
        {
          type: 'line',
          yAxisIndex: '0',
          data: [1, 3, 5, 6, 7]
        }, {
          type: 'line',
          yAxisIndex: '0',
          data: [11, 32, 35, 46, 57]
        }, {
          type: 'line',
          yAxisIndex: '0',
          data: [1, 32, 55, 16, 17]
        }, {
          type: 'line',
          yAxisIndex: '1',
          data: [21, 3, 5, 76, 7]
        }, {
          type: 'line',
          yAxisIndex: '1',
          data: [1, 33, 45, 6, 7]
        }, {
          type: 'line',
          yAxisIndex: '1',
          data: [1, 23, 55, 63, 7]
        }
      ]
    }
    zh2Chart.setOption(zh2Option)

    // 职业占比排名
    var subzChart = Echarts.init(document.getElementById('subz'))
    var subzOption = {
      title: {
        text: '职业占比排名',
        left: 'center',
        top: 'top'
      },
      tooltip: {
        formatter: '{b}{a}\n{c}%'
      },
      // legend: {
      //   data: ['人数'],
      //   top: '30'
      // },
      xAxis: {
        type: 'category',
        data: ['IT互联网', '政府', '电子', '服务业', '旅游业']
      },
      yAxis: {
        axisLabel: {
          formatter: '{value}%'
        }
      },
      series: [{
        barMaxWidth: '50',
        name: '人数',
        label: {
          normal: {
            show: true,
            position: 'inside',
            formatter: '{c}%'
          }
        },
        type: 'bar',
        data: ['15', '13', '11', '7.5', '3']
      }, {
        barMaxWidth: '50',
        name: '人数1',
        label: {
          normal: {
            show: true,
            position: 'inside',
            formatter: '{c}%'
          }
        },
        type: 'bar',
        data: ['15', '13', '11', '7.5', '3']
      }]
    }
    subzChart.setOption(subzOption)
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
</style>