<template>
  <section class="content">
    <div class="row">
      <div class="col-xs-12">
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default">Yesterday</button>
          <button type="button" class="btn btn-default">MTD</button>
          <button type="button" class="btn btn-default">YTD</button>
        </div>
      </div>
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
                  <div class="btn-group" role="group" aria-label="...">
                    <div class="btn-group" role="group">
                      <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Avg cheque
                        <span class="caret"></span>
                      </button>
                      <ul class="dropdown-menu">
                        <li><a href="#">Turnover/Seat Occ%</a></li>
                        <li><a href="#">Revenue/hour</a></li>
                        <li><a href="#">RevPSQM</a></li>
                        <li><a href="#">RevPASH</a></li>
                        <li><a href="#">Revenue</a></li>
                        <li><a href="#">Covers</a></li>
                        <li><a href="#">Cheques</a></li>
                        <li><a href="#">Avg Cheque</a></li>
                        <li><a href="#">Avg Cheque/Cover</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="btn-group rightFuck" role="group">
                    <button type="button" class="btn btn-default">Day</button>
                    <button type="button" class="btn btn-default">Week</button>
                    <button type="button" class="btn btn-default">Month</button>
                    <button type="button" class="btn btn-default">WOD</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="box-body">
            <div class="col-xs-12">
              <div id="dzzx" style="height: 400px"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <div class="box">
          <div class="box-body">
            <table class="table text-center table-bordered">
            <tbody>
              <tr>
                <th>Restaurant</th>
                <th>Turnover/Seat Occ%</th>
                <th>Revenue/hour</th>
                <th>RevPSQM</th>
                <th>RevPASH</th>
                <th>Revenue</th>
                <th>Covers</th>
                <th>Cheques</th>
                <th>Avg Cheque</th>
                <th>Avg Cheque/Cover</th>
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
      var dzzxChart = Echarts.init(document.getElementById('dzzx'), 'walden')
      var dzzxOption = {
        xAxis: [{
          data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        }],
        yAxis: [{
          name: 'Revenue',
          type: 'value'
        }, {
          name: 'Avg Cheque',
          type: 'value'
        }],
        legend: {
          data: ['Avg Cheque', 'Non Alc Bev', 'Alc Bev', 'Food']
        },
        tooltip: {},
        series: [
          {
            type: 'line',
            yAxisIndex: '0',
            name: 'Avg Cheque',
            data: [2556, 2841, 2206, 2276, 2035, 2402, 2151]
          }, {
            type: 'bar',
            yAxisIndex: '1',
            stack: 'all',
            name: 'Food',
            data: [293142, 243618, 244373, 271353, 288703, 302238, 284653]
          }, {
            type: 'bar',
            yAxisIndex: '1',
            stack: 'all',
            name: 'Alc Bev',
            data: [81989, 156499, 28635, 52707, 40500, 54626, 32721]
          }, {
            type: 'bar',
            yAxisIndex: '1',
            stack: 'all',
            name: 'Non Alc Bev',
            data: [14924, 20292, 8741, 10621, 15333, 17575, 11907]
          }
        ]
      }
      dzzxChart.setOption(dzzxOption)
    }
  }
</script>
<style>
  .rightFuck{
    margin-left: 520px;
  }
</style>