<template>
  <section class="content">
    <div class="row totalTable">
      <div class="col-xs-12">
        <div class="box">
          <div class="box-header">
            <div class="container-fluid">
              <div class="navbar-header">
                <a class="navbar-brand">Restaurant:</a>
              </div>
              <div class="collapse navbar-collapse">
                <form class="navbar-form navbar-left">
                  <div class="btn-group" role="group" aria-label="...">
                    <div class="btn-group" role="group">
                      <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        CFG Grill 79
                        <span class="caret"></span>
                      </button>
                      <ul class="dropdown-menu">
                        <li><a href="#">CFG Grill 79</a></li>
                        <li><a href="#">FB1 Atmosphere</a></li>
                        <li><a href="#">FB2 Noodle Bar</a></li>
                        <li><a href="#">FS2 The Red Chamber</a></li>
                        <li><a href="#">JPN Nadaman</a></li>
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
              <div class="navbar-header">
                <a class="navbar-brand">Date range:</a>
              </div>
              <div class="collapse navbar-collapse">
                <form class="navbar-form navbar-left">
                  <div class="btn-group" role="group">
                    <button type="button" class="btn btn-default">Yesterday</button>
                    <button type="button" class="btn btn-default">MTD</button>
                    <button type="button" class="btn btn-default">YTD</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <ul class="nav nav-tabs">
          <li role="presentation" :class="page == 0 ? 'active' : ''" @click="goPage(0)"><a href=" ">Beverage</a ></li>
          <li role="presentation" :class="page == 1 ? 'active' : ''" @click="goPage(1)"><a href="#">Food</a ></li>
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
    var pie1Chart = Echarts.init(document.getElementById('pie1'), 'walden')
    var pie1Option = {
      legend: {
        data: ['alcohol Revenue', 'non-alcohol Revenue']
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} {d}%'
      },
      grid: {
        left: 100
      },
      series: [
        {
          name: 'Revenue',
          type: 'pie',
          selectedMode: 'single',
          radius: ['40%', '80%'],
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
            {value: 447677, name: 'alcohol Revenue'},
            {value: 99392, name: 'non-alcohol Revenue'}
          ]
        }
      ]
    }
    pie1Chart.setOption(pie1Option)

    var pop1Chart = Echarts.init(document.getElementById('pop1'), 'walden')
    var pop1Option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        data: ['alcohol Sales', 'non-alcohol Sales']
      },
      xAxis: [
        {
          type: 'value',
          name: 'Price'
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: 'Cost'
        }
      ],
      series: [
        {
          name: 'alcohol Sales',
          type: 'scatter',
          symbolSize: function (data) {
            return (data[2] / 10)
          },
          data: [[23, 3, 180], [33, 5, 140], [40, 10, 90], [44, 15, 290], [50, 30, 100], [60, 12, 70], [88, 55, 60], [130, 35, 34]]
        }, {
          name: 'non-alcohol Sales',
          type: 'scatter',
          symbolSize: function (data) {
            return (data[2] / 10)
          },
          data: [[25, 2, 45.6], [24, 2, 294], [30, 3, 120], [35, 4, 150], [50, 15, 134], [68, 3, 144], [10, 2, 30], [40, 7, 124]]
        }
      ]
    }
    pop1Chart.setOption(pop1Option)
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