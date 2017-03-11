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
            <p class="BoldFont">800</p>
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
    var myChart1 = Echarts.init(document.getElementById('bing01'), 'walden')
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
        data: ['GC', 'Non GC']
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
            {value: 800, name: 'GC'},
            {value: 200, name: 'Non GC'}
          ]
        }
      ]
    }
    myChart1.setOption(option1)

    // 堆叠柱形图
    var ddzChart = Echarts.init(document.getElementById('ddz'), 'walden')
    var ddzOption = {
      title: {
        text: 'GC来源分布',
        left: 'center',
        top: 'top'
      },
      tooltip: {},
      legend: {
        data: ['GC', 'Non GC'],
        top: '30'
      },
      xAxis: {
        type: 'category',
        data: ['Negotiated', 'Public rate', 'Wholesale Offline', 'Packages', 'Wholesale Online', 'Long Stay', 'Individual Others', 'Meetings/Incentives', 'Group Others', 'Tours', 'House Use', 'Permanent', 'Complimentary']
      },
      yAxis: {
        axisLabel: {
        formatter: '{value}%'
        }
      },
      series: [{
        barMaxWidth: '70',
        name: 'GC',
        type: 'bar',
        stack: '细分统计',
        data: [20, 10, 11.2, 6.3, 2.5, 2.1, 6.7, 1, 0.22, 1.1, 0.2, 1, 0.3]
      }, {
        name: 'Non GC',
        type: 'bar',
        stack: '细分统计',
        data: [10, 12, 9.9, 11.2, 12.3, 10, 1.2, 2.5, 2.1, 1.0, 0.9, 0.1, 0.2]
      }]
    }
    ddzChart.setOption(ddzOption)

    // 堆叠柱形图
    var xfzChart = Echarts.init(document.getElementById('xfz'), 'walden')
    var xfzOption = {
      title: {
        text: 'GC消费分配',
        left: 'center',
        top: 'top'
      },
      tooltip: {},
      legend: {
        data: ['GC', 'Non GC'],
        top: '30'
      },
      xAxis: {
        type: 'category',
        data: ['0-999', '1000-2999', '3000-4999', '5000-7999', '8000-9999', '10000-19999', '>20000']
      },
      yAxis: {},
      series: [{
        barWidth: '40',
        name: 'GC',
        type: 'bar',
        data: [55, 100, 130, 165, 184, 108, 58]
      }, {
        name: 'Non GC',
        type: 'bar',
        data: [40, 60, 30, 28, 19, 8, 5]
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
