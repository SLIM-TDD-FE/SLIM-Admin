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
                <th>Restaurant</th>
                <th>Turnover/Seat Occ%</th>
                <th>Revenue/hour</th>
                <th>Revenue/SQM</th>
                <th>RevPASH</th>
                <th>Revenue</th>
                <th>Covers</th>
                <th>Cheques</th>
                <th>Avg Cheques</th>
                <th>AvgCheques/Cover</th>
              </tr>
              <tr>
                <td>CFG Grill 79</td>
                <td>270.93</td>
                <td>8263</td>
                <td>231</td>
                <td>83</td>
                <td>892412</td>
                <td>2414</td>
                <td>403</td>
                <td>2214</td>
                <td>370</td>
              </tr>
              <tr>
                <td>FB1 Atmosphere</td>
                <td>135.11</td>
                <td>8080</td>
                <td>232</td>
                <td>39</td>
                <td>872598</td>
                <td>2505</td>
                <td>1045</td>
                <td>835</td>
                <td>348</td>
              </tr>
              <tr>
                <td>FB2 Noodle Bar</td>
                <td>168.98</td>
                <td>868</td>
                <td>46</td>
                <td>10</td>
                <td>83330</td>
                <td>1122</td>
                <td>613</td>
                <td>136</td>
                <td>74</td>
              </tr>
              <tr>
                <td>FS2 The Red Chamber</td>
                <td>102.6</td>
                <td>5713</td>
                <td>117</td>
                <td>36</td>
                <td>411312</td>
                <td>1459</td>
                <td>662</td>
                <td>621</td>
                <td>282</td>
              </tr>
              <tr>
                <td>JPN Nadaman</td>
                <td>64.65</td>
                <td>6458</td>
                <td>89</td>
                <td>49</td>
                <td>464987</td>
                <td>768</td>
                <td>351</td>
                <td>1325</td>
                <td>605</td>
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
          data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Friday']
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