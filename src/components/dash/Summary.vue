<template>
  <section class="content">
    <div class="row">
      <div class="col-xs-12">
        <div id="dzzx" style="height: 400px"></div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <div class="box">
          <div class="box-header">
            <h3>11111</h3>
          </div>
          <div class="box-body">
            <table class="table text-center table-bordered">
            <tbody>
              <tr>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
              </tr>
              <tr>
                <td>1</td>
                <td>34</td>
                <td>34</td>
                <td>34</td>
                <td>34</td>
              </tr>
              <tr>
                <td>34</td>
                <td>34</td>
                <td>34</td>
                <td>34</td>
                <td>34</td>
              </tr>
              <tr>
                <td>34</td>
                <td>34</td>
                <td>34</td>
                <td>34</td>
                <td>34</td>
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
      return {}
    },
    mounted: function () {
      // 折线混合
      var dzzxChart = Echarts.init(document.getElementById('dzzx'))
      var dzzxOption = {
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
            data: [1, 3, 5, 6]
          }, {
            type: 'line',
            yAxisIndex: '0',
            data: [11, 32, 35, 46]
          }, {
            type: 'line',
            yAxisIndex: '0',
            data: [1, 32, 55, 16]
          }, {
            type: 'bar',
            yAxisIndex: '1',
            data: [21, 3, 5, 76]
          }, {
            type: 'bar',
            yAxisIndex: '1',
            data: [1, 33, 45, 6]
          }, {
            type: 'bar',
            yAxisIndex: '1',
            data: [1, 23, 55, 63]
          }, {
            type: 'bar',
            yAxisIndex: '1',
            data: [1, 23, 55, 63]
          }
        ]
      }
      dzzxChart.setOption(dzzxOption)
    }
  }
</script>