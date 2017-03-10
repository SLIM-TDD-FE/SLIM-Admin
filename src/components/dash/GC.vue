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
            <p>Total arrivals <i v-bind:title="textAll[0]" class="fa fa-question-circle"></i></p>
            <p class="BoldFont">1000</p>
          </div>
          <div class="col-xs-4 GCCount">
            <p>GC arrivals <i v-bind:title="textAll[1]" class="fa fa-question-circle"></i></p>
            <p class="BoldFont">500</p>
          </div>
          <div class="col-xs-4 GCCount">
            <p>New GC arrivals <i v-bind:title="textAll[2]" class="fa fa-question-circle"></i></p>
            <p class="BoldFont">100</p>
          </div>
          <div class="row">
          </div>
          <div class="col-xs-4 GCCount">
            <p>Total guests <i v-bind:title="textAll[3]" class="fa fa-question-circle"></i></p>
            <p class="BoldFont">1500</p>
          </div>
          <div class="col-xs-4 GCCount">
            <p>GC guests <i v-bind:title="textAll[4]" class="fa fa-question-circle"></i></p>
            <p class="BoldFont">600</p>
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
          name: 'GC占比',
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
            {value: 80, name: 'GC'},
            {value: 20, name: '非GC'}
          ]
        }
      ]
    }
    myChart1.setOption(option1)

    // 堆叠柱形图
    var ddzChart = Echarts.init(document.getElementById('ddz'), 'infographic')
    var ddzOption = {
      title: {
        text: 'GC来源分布',
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
        data: ['Negotiated', 'Public rate', 'Wholesale Offline', 'Packages', 'Wholesale Online', 'Long Stay', 'Individual Others', 'Meetings/Incentives', 'Group Others', 'Tours', 'House Use', 'Permanent', 'Complimentary']
      },
      yAxis: {},
      series: [{
        barMaxWidth: '70',
        name: 'GC',
        type: 'bar',
        stack: '细分统计',
        data: [89, 35, 90, 46, 13, 35, 30, 9, 27, 21, 22, 10, 12]
      }, {
        name: '非GC',
        type: 'bar',
        stack: '细分统计',
        data: [45, 76, 8, 40, 55, 17, 19, 34, 13, 11, 5, 10, 7]
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
        data: ['0-999', '1000-2999', '3000-4999', '5000-7999', '8000-9999', '10000-19999', '20000+']
      },
      yAxis: {},
      series: [{
        barWidth: '40',
        name: 'GC',
        type: 'bar',
        data: [5, 50, 60, 65, 34, 10, 8]
      }, {
        name: '非GC',
        type: 'bar',
        data: [30, 40, 20, 15, 5, 4, 2]
      }]
    }
    xfzChart.setOption(xfzOption)
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
