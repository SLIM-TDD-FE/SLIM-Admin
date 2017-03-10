<template>
  <section class="content">
    <!-- GC分布 -->
    <div class="row">
      <div class="col-xs-6">
        <div id="bing01" style="height:400px"></div>
      </div>
      <div class="col-xs-6 GCCountBlock">
        <div class="row">
          <div class="col-xs-4 GCCount">
            <p>total arrivals <i v-bind:title="textAll[0]" class="fa fa-question-circle"></i></p>
            <p class="BoldFont">1000</p>
          </div>
          <div class="col-xs-4 GCCount">
            <p>total arrivals <i v-bind:title="textAll[1]" class="fa fa-question-circle"></i></p>
            <p class="BoldFont">1000</p>
          </div>
          <div class="col-xs-4 GCCount">
            <p>total arrivals <i v-bind:title="textAll[2]" class="fa fa-question-circle"></i></p>
            <p class="BoldFont">1000</p>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-4 GCCount">
            <p>total arrivals <i v-bind:title="textAll[3]" class="fa fa-question-circle"></i></p>
            <p class="BoldFont">1000</p>
          </div>
          <div class="col-xs-4 GCCount">
            <p>total arrivals <i v-bind:title="textAll[4]" class="fa fa-question-circle"></i></p>
            <p class="BoldFont">1000</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div id="ddz" style="height:400px;"></div>
    </div>
    <div class="row">
      <div id="xfz" style="height:400px;"></div>
    </div>
    <div class="row">
      <div id="plz" style="height:400px;"></div>
    </div>
  </section>
</template>
<script>
import Echarts from 'echarts'

module.exports = {
  data: function () {
    return {
      generateRandomNumbers: function (numbers, max, min) {
        var a = []
        for (var i = 0; i < numbers; i++) {
          a.push(Math.floor(Math.random() * (max - min + 1)) + max)
        }
        return a
      },
      textAll: ['qa', 'ba', 'qa', 'ba', 'qa', 'ba']
    }
  },
  computed: {
    coPilotNumbers: function () {
      return this.generateRandomNumbers(12, 1000000, 10000)
    },
    personalNumbers: function () {
      return this.generateRandomNumbers(12, 1000000, 10000)
    },
    isMobile: function () {
      return (window.innerWidth <= 800 && window.innerHeight <= 600)
    }
  },
  mounted: function () {
    // GC占比分配
    var myChart1 = Echarts.init(document.getElementById('bing01'), 'infographic')
    var option1 = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} {d}%'
      },
      legend: {
        show: false,
        formatter: '{a} {b}: {c} {d}%',
        orient: 'vertical',
        x: 'left',
        data: ['GC', '非GC']
      },
      series: [
        {
          name: 'GC占比分配',
          type: 'pie',
          // selectedMode: 'single',
          // radius: [0, '30%'],
          label: {
            normal: {
              position: 'inner',
              formatter: '{b}: {c}名 \n {d}%'
            }
          },
          labelLine: {
            normal: {
              show: true
            }
          },
          data: [
            {value: 335, name: 'GC'},
            {value: 679, name: '非GC'}
          ]
        }
      ]
    }
    myChart1.setOption(option1)

    // 堆叠柱形图
    var ddzChart = Echarts.init(document.getElementById('ddz'), 'infographic')
    var ddzOption = {
      title: {
        text: '各来源GC占比分配',
        left: 'center',
        top: 'top'
      },
      tooltip: {},
      legend: {
        data: ['GC', '非GC'],
        top: '30'
      },
      xAxis: {
        type: 'category',
        data: ['网站', 'OTA', 'Other', 'Other1', 'Other2', 'Other3', 'Other4']
      },
      yAxis: {},
      series: [{
        barMaxWidth: '70',
        name: 'GC',
        type: 'bar',
        stack: '细分统计',
        data: [5, 20, 25, 34, 12, 4, 8]
      }, {
        name: '非GC',
        type: 'bar',
        stack: '细分统计',
        data: [7, 34, 76, 12, 35, 11, 90]
      }]
    }
    ddzChart.setOption(ddzOption)

    // 堆叠柱形图
    var xfzChart = Echarts.init(document.getElementById('xfz'), 'infographic')
    var xfzOption = {
      title: {
        text: 'GC消费分配',
        left: 'center',
        top: 'top'
      },
      tooltip: {},
      legend: {
        data: ['GC', '非GC'],
        top: '30'
      },
      xAxis: {
        type: 'category',
        data: ['0-500', '500-1000', '1000-2000', '2000-5000', '5000-10000', '10000-20000', '20000+']
      },
      yAxis: {},
      series: [{
        barWidth: '40',
        name: 'GC',
        type: 'bar',
        data: [5, 20, 25, 34, 12, 4, 8]
      }, {
        name: '非GC',
        type: 'bar',
        data: [7, 34, 76, 12, 35, 11, 90]
      }]
    }
    xfzChart.setOption(xfzOption)

    // 堆叠柱形图
    var plzChart = Echarts.init(document.getElementById('plz'), 'infographic')
    var plzOption = {
      title: {
        text: '入住频率统计',
        left: 'center',
        top: 'top'
      },
      tooltip: {
        formatter: '{c}'
      },
      // legend: {
      //   data: ['人数'],
      //   top: '30'
      // },
      xAxis: {
        type: 'category',
        data: ['1天', '2天', '3天', '4天', '5天', '5天以上']
      },
      yAxis: {},
      series: [{
        barMaxWidth: '70',
        name: 'GC',
        type: 'bar',
        data: [5, 20, 25, 34, 12, 4]
      }]
    }
    plzChart.setOption(plzOption)
  }
}
</script>
<style>
.GCCountBlock{
  margin-top: 80px;
}
.GCCount{
  padding-left: 20px;
  margin-top: 40px;
}
.GCCount:not(:nth-child(3n+1)){
  border-left: 1px #000 solid;
}
.BoldFont{
  font-size: 25px;
  font-weight: bolder;
}
.info-box {
  cursor: pointer;
}
.info-box-content {
  text-align: center;
  vertical-align: middle;
  display: inherit;
}
.fullCanvas {
  width: 100%;
}
</style>
