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
                    <th colspan="2">Rooms</th>
                    <th colspan="2">Events</th>
                </tr>
                <tr>
                    <th>Revenue</th>
                    <th>1</th>
                    <th>2</th>
                    <th>1</th>
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
              <div class="col-xs-4">
                <div id="pie1" style="height:400px"></div>
              </div>
              <div class="col-xs-8">
                <div id="bar1" style="height:400px"></div>
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
    return 0
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