<template>
  <section class="content">
    <div class="row totalTable">
      <div class="col-xs-12">
        <div class="box">
          <div class="box-header">
            <h3>11111</h3>
            <div class="btn-group" role="group">
              <button type="button" class="btn btn-default">Yesterday</button>
              <button type="button" class="btn btn-default">MTD</button>
              <button type="button" class="btn btn-default">YTD</button>
            </div>
          </div>
          <ul class="nav nav-tabs">
            <li role="presentation" :class="page == 0 ? 'active' : ''" @click="goPage(0)"><a href="#">Home</a></li>
            <li role="presentation" :class="page == 1 ? 'active' : ''" @click="goPage(1)"><a href="#">Profile</a></li>
          </ul>
          <div class="box-body" v-show="page == 0">
            <div class="row">
              <div class="col-xs-4">
                <div id="pie1" style="height:400px"></div>
              </div>
              <div class="col-xs-8">
                <div id="pop1" style="height:400px"></div>
              </div>
            </div>
          </div>
          <div class="box-body" v-show="page == 1">
            1111
          </div>
        </div>
      </div>
    </div>
    <div class="row totalTable">
      <div class="col-xs-12">
        <div class="box">
          <div class="box-header">
            <h3>11111</h3>
          </div>
          <div class="box-body" v-show="page == 0">
            <table class="table text-center table-bordered">
            <tbody>
              <tr>
                <th>Beverage list</th>
                <th>Alc/nonAlc</th>
                <th>Price</th>
                <th>Cost</th>
                <th>Sales</th>
                <th>Revenue</th>
                <th>%Cheque</th>
                <th>%Cover</th>
              </tr>
              <tr>
                <td>Coca Cola</td>
                <td>nonAlc</td>
                <td>25</td>
                <td>2</td>
                <td>4560</td>
                <td>104880</td>
                <td>21%</td>
                <td>27%</td>
              </tr>
              <tr>
                <td>Sprite</td>
                <td>nonAlc</td>
                <td>25</td>
                <td>2</td>
                <td>3427</td>
                <td>78821</td>
                <td>15%</td>
                <td>16%</td>
              </tr>
              <tr>
                <td>Orange Juice</td>
                <td>nonAlc</td>
                <td>30</td>
                <td>3</td>
                <td>3200</td>
                <td>86400</td>
                <td>13%</td>
                <td>17%</td>
              </tr>
              <tr>
                <td>Carlsberg</td>
                <td>Alc</td>
                <td>30</td>
                <td>3</td>
                <td>3029</td>
                <td>81783</td>
                <td>5%</td>
                <td>6%</td>
              </tr>
              <tr>
                <td>Vodka</td>
                <td>Alc</td>
                <td>35</td>
                <td>5</td>
                <td>1321</td>
                <td>39630</td>
                <td>7%</td>
                <td>6%</td>
              </tr>
              <tr>
                <td>Amaretto</td>
                <td>Alc</td>
                <td>40</td>
                <td>10</td>
                <td>231</td>
                <td>6930</td>
                <td>15%</td>
                <td>20%</td>
              </tr>
              <tr>
                <td>Irish Coffee</td>
                <td>nonAlc</td>
                <td>35</td>
                <td>4</td>
                <td>2130</td>
                <td>66030</td>
                <td>8%</td>
                <td>5%</td>
              </tr>
              <tr>
                <td>Frozen Margarita</td>
                <td>Alc</td>
                <td>50</td>
                <td>15</td>
                <td>561</td>
                <td>19635</td>
                <td>12%</td>
                <td>18%</td>
              </tr>
            </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="row totalTable">
      <div class="col-xs-12">
        <div class="box">
          <div class="box-header">
            <h3>11111</h3>
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
              <div class="col-xs-12">
                <div id="zh2" style="height:400px"></div>
              </div>
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
    return {
      page: 0
    }
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
            {value: 447677, name: 'alcohol'},
            {value: 99392, name: 'non-alcohol'}
          ]
        }
      ]
    }
    pie1Chart.setOption(pie1Option)

    var pop1Chart = Echarts.init(document.getElementById('pop1'))
    var pop1Option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        show: false,
        data: ['alcohol', 'non-alcohol']
      },
      xAxis: [
        {
          type: 'value'
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'alcohol',
          type: 'scatter',
          symbolSize: function (data) {
            return (data[2] / 10)
          },
          data: [[23, 3, 180], [33, 5, 140], [40, 10, 90], [44, 15, 290], [50, 30, 100], [60, 12, 70], [88, 55, 60], [130, 35, 34]]
        }, {
          name: 'non-alcohol',
          type: 'scatter',
          symbolSize: function (data) {
            return (data[2] / 10)
          },
          data: [[25, 2, 45.6], [24, 2, 294], [30, 3, 120], [35, 4, 150], [50, 15, 134], [68, 3, 144], [10, 2, 30], [40, 7, 124]]
        }
      ]
    }
    pop1Chart.setOption(pop1Option)

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
  },
  methods: {
    goPage: function (index, event) {
      console.log(index)
      this.page = index
      console.log(this)
    }
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