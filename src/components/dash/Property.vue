<template>
  <section class="content">
    <!-- 年龄区间 / 性别比例 -->
    <div class="row">
      <div class="col-xs-4">
        <div id="ageGC" style="height:400px;"></div>
      </div>
      <div class="col-xs-4">
        <div id="faleGC" style="height:400px;"></div>
      </div>
      <div class="col-xs-4">
        <div id="purGC" style="height:400px;"></div>
      </div>
    </div>
    <!-- 职业分布 -->
    <div class="row">
      <div id="subz" style="height:400px"></div>
    </div>
    <!-- 兴趣分布 -->
    <div class="row">
      <div id="inz" style="height:400px"></div>
    </div>
    <!-- 国家分布 -->
    <div class="row">
      <div class="col-xs-12 btn-group" role="group">
        <button type="button" class="btn btn-default">来源</button>
        <button type="button" class="btn btn-default">国籍</button>
      </div>
    </div>
    <div class="row">
      <div id="couz" style="height:400px"></div>
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
    // 年龄占比分配
    var ageGCChart = Echarts.init(document.getElementById('ageGC'))
    var ageGCOption = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} {d}%'
      },
      series: [
        {
          name: 'GC年龄占比分配',
          type: 'pie',
          selectedMode: 'single',
          radius: [0, '40%'],
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
            {value: 679, name: '0-18'},
            {value: 679, name: '18-25'},
            {value: 679, name: '25-35'},
            {value: 679, name: '35-45'},
            {value: 679, name: '45-80'}
          ]
        }, {
          name: 'GC占比分配',
          type: 'pie',
          selectedMode: 'single',
          radius: ['40%', '50%'],
          label: {
            normal: {
              // position: 'inner',
              formatter: function (params) {
                var data = params.data
                return data.name + '\n' + (data.value / data.all * 100).toFixed(2) + '%'
              }
            }
          },
          labelLine: {
            normal: {
              show: true
            }
          },
          data: [
            {value: 335, name: 'GC', all: 679},
            {value: 344, name: '非GC', all: 679},
            {value: 335, name: 'GC', all: 679},
            {value: 344, name: '非GC', all: 679},
            {value: 335, name: 'GC', all: 679},
            {value: 344, name: '非GC', all: 679},
            {value: 335, name: 'GC', all: 679},
            {value: 344, name: '非GC', all: 679},
            {value: 335, name: 'GC', all: 679},
            {value: 344, name: '非GC', all: 679}
          ]
        }
      ]
    }
    ageGCChart.setOption(ageGCOption)

    // 性别GC柱形图
    var faleGCChart = Echarts.init(document.getElementById('faleGC'))
    var faleGCOption = {
      title: {
        text: '性别GC占比分配',
        left: 'center',
        top: 'top'
      },
      grid: {
        left: 40
      },
      tooltip: {},
      legend: {
        data: ['男', '女'],
        top: '30'
      },
      yAxis: {
        type: 'category',
        data: ['非GC', 'GC', 'ALL']
      },
      xAxis: {},
      series: [{
        barWidth: 20,
        name: '男',
        type: 'bar',
        data: [5, 20, 25]
      }, {
        barWidth: 20,
        name: '女',
        type: 'bar',
        data: [7, 34, 41]
      }]
    }
    faleGCChart.setOption(faleGCOption)

    // 商旅休闲GC柱形图
    var purGCChart = Echarts.init(document.getElementById('purGC'))
    var purGCOption = {
      title: {
        text: '商旅休闲GC占比分配',
        left: 'center',
        top: 'top'
      },
      grid: {
        left: 40
      },
      tooltip: {},
      legend: {
        data: ['商旅', '休闲'],
        top: '30'
      },
      yAxis: {
        type: 'category',
        data: ['非GC', 'GC', 'ALL']
      },
      xAxis: {},
      series: [{
        barWidth: 20,
        name: '商旅',
        type: 'bar',
        data: [5, 20, 25]
      }, {
        barWidth: 20,
        name: '休闲',
        type: 'bar',
        data: [7, 34, 41]
      }]
    }
    purGCChart.setOption(purGCOption)

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
        barMaxWidth: '70',
        name: '人数',
        stack: 'aaa',
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
        barMaxWidth: '70',
        name: '人数1',
        stack: 'aaa',
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

    // 兴趣占比排名
    var inzChart = Echarts.init(document.getElementById('inz'))
    var inzOption = {
      title: {
        text: '兴趣占比排名',
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
        data: ['旅游', '摄影', '电子游戏', '音乐', '运动']
      },
      yAxis: {
        axisLabel: {
          formatter: '{value}%'
        }
      },
      series: [{
        barMaxWidth: '70',
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
      }]
    }
    inzChart.setOption(inzOption)

    // 兴趣占比排名
    var couzChart = Echarts.init(document.getElementById('couz'))
    var couzOption = {
      title: {
        text: '国家占比排名TOP10',
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
        data: ['中国', '美国', '日本', '韩国', '朝鲜', '西班牙', '法国', '德国', '荷兰', '巴西']
      },
      yAxis: {
        axisLabel: {
          formatter: '{value}%'
        }
      },
      series: [{
        barMaxWidth: '70',
        name: '人数',
        label: {
          normal: {
            show: true,
            position: 'top',
            formatter: '{c}%'
          }
        },
        type: 'bar',
        data: ['45', '20', '17', '16', '15', '13', '11', '7.5', '3', '1.5']
      }]
    }
    couzChart.setOption(couzOption)
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
