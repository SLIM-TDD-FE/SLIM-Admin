<template>
  <section class="content">
  <nav class="navbar navbar-default">
    <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand">时间：</a>
    </div>
    <div class="collapse navbar-collapse">
      <form class="navbar-form navbar-left">
        <div class="btn-group" role="group" aria-label="...">
          <button type="button" class="btn btn-default">最近30天</button>
          <button type="button" class="btn btn-default">最近2个月</button>
          <button type="button" class="btn btn-default">最近3个月</button>
          <button type="button" class="btn btn-default">最近6个月</button>
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              选择月份
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
              <li><a href="#">一月</a></li>
              <li><a href="#">二月</a></li>
              <li><a href="#">三月</a></li>
              <li><a href="#">四月</a></li>
              <li><a href="#">五月</a></li>
              <li><a href="#">六月</a></li>
              <li><a href="#">七月</a></li>
              <li><a href="#">八月</a></li>
              <li><a href="#">九月</a></li>
              <li><a href="#">十月</a></li>
              <li><a href="#">十一月</a></li>
              <li><a href="#">十二月</a></li>
            </ul>
          </div>
        </div>
      </form>
    </div>
    </div>
  </nav>
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
      <div class="btn-group left50" role="group">
        <button type="button" class="btn btn-default">GC</button>
        <button type="button" class="btn btn-default">Non GC</button>
        <button type="button" class="btn btn-default">All</button>
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
    // 年龄分布
    var ageGCChart = Echarts.init(document.getElementById('ageGC'), 'walden')
    var ageGCOption = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} {d}%'
      },
      legend: {
        data: ['0-19', '19-29', '30-39', '40-59', '>60']
      },
      series: [
        {
          name: '年龄分布',
          type: 'pie',
          selectedMode: 'single',
          radius: [0, '80%'],
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
            {value: 10, name: '0-19'},
            {value: 40, name: '19-29'},
            {value: 100, name: '30-39'},
            {value: 130, name: '40-59'},
            {value: 50, name: '>60'}
          ]
        }
      ]
    }
    ageGCChart.setOption(ageGCOption)

    // 性别GC柱形图
    var faleGCChart = Echarts.init(document.getElementById('faleGC'), 'walden')
    var faleGCOption = {
      title: {
        text: '性别分布',
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
        data: [15, 45, 65]
      }, {
        barWidth: 20,
        name: '女',
        type: 'bar',
        data: [5, 30, 35]
      }]
    }
    faleGCChart.setOption(faleGCOption)

    // 商旅休闲GC柱形图
    var purGCChart = Echarts.init(document.getElementById('purGC'), 'walden')
    var purGCOption = {
      title: {
        text: '商旅/休闲分布',
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
        data: [40, 30, 70]
      }, {
        barWidth: 20,
        name: '休闲',
        type: 'bar',
        data: [5, 25, 30]
      }]
    }
    purGCChart.setOption(purGCOption)

    // 职业占比排名
    var subzChart = Echarts.init(document.getElementById('subz'), 'walden')
    var subzOption = {
      title: {
        text: '职业分布',
        left: 'center',
        top: 'top'
      },
      tooltip: {
        // formatter: '{b}{a}\n{c}%'
      },
      legend: {
        data: ['GC', 'Non GC'],
        top: '30'
      },
      xAxis: {
        type: 'category',
        data: ['IT', '政府', '教育', '餐饮', '媒体', '房地产', '金融', '保险', '医疗', '电信']
      },
      yAxis: {
        axisLabel: {
          formatter: '{value}%'
        }
      },
      series: [{
        barMaxWidth: '70',
        name: 'GC',
        stack: 'aaa',
        label: {
          normal: {
            show: true,
            position: 'inside',
            formatter: '{c}%'
          }
        },
        type: 'bar',
        data: ['30', '34', '29', '15', '20', '21', '9', '8', '12', '2']
      }, {
        barMaxWidth: '70',
        name: 'Non GC',
        stack: 'aaa',
        label: {
          normal: {
            show: true,
            position: 'inside',
            formatter: '{c}%'
          }
        },
        type: 'bar',
        data: ['52', '23', '12', '23', '10', '6', '15', '13', '8', '10']
      }]
    }
    subzChart.setOption(subzOption)

    // 兴趣占比排名
    var inzChart = Echarts.init(document.getElementById('inz'), 'walden')
    var inzOption = {
      title: {
        text: '兴趣分布',
        left: 'center',
        top: 'top'
      },
      tooltip: {
        formatter: '{b}{a}\n{c}%'
      },
      legend: {
        data: ['GC', 'Non GC'],
        top: '30'
      },
      xAxis: {
        type: 'category',
        data: ['旅游', '摄影', '游戏', '音乐', '运动', '饮食', '书籍', '视频', '品茶', '棋牌']
      },
      yAxis: {
        axisLabel: {
          formatter: '{value}%'
        }
      },
      series: [{
        barMaxWidth: '70',
        name: 'GC',
        stack: 'aaa',
        label: {
          normal: {
            show: true,
            position: 'inside',
            formatter: '{c}%'
          }
        },
        type: 'bar',
        data: ['50', '80', '20', '25', '70', '21', '29', '18', '22', '2']
      }, {
        barMaxWidth: '70',
        name: 'Non GC',
        stack: 'aaa',
        label: {
          normal: {
            show: true,
            position: 'inside',
            formatter: '{c}%'
          }
        },
        type: 'bar',
        data: ['100', '60', '100', '89', '25', '56', '15', '13', '8', '10']
      }]
    }
    inzChart.setOption(inzOption)

    // 兴趣占比排名
    var couzChart = Echarts.init(document.getElementById('couz'), 'walden')
    var couzOption = {
      title: {
        text: 'TOP10国家分布',
        left: 'center',
        top: 'top'
      },
      tooltip: {
        formatter: '{b}{a}\n{c}%'
      },
      legend: {
        data: ['GC', 'Non GC'],
        top: '30'
      },
      xAxis: {
        type: 'category',
        data: ['中国', '美国', '日本', '德国', '法国', '英国', '西班牙', '韩国', '马来西亚', '新加坡']
      },
      yAxis: {
        axisLabel: {
          formatter: '{value}%'
        }
      },
      series: [{
        barMaxWidth: '70',
        name: 'GC',
        stack: 'aaa',
        label: {
          normal: {
            show: true,
            position: 'inside',
            formatter: '{c}%'
          }
        },
        type: 'bar',
        data: ['70', '44', '59', '45', '40', '31', '9', '8', '12', '2']
      }, {
        barMaxWidth: '70',
        name: 'Non GC',
        stack: 'aaa',
        label: {
          normal: {
            show: true,
            position: 'inside',
            formatter: '{c}%'
          }
        },
        type: 'bar',
        data: ['52', '53', '22', '23', '10', '6', '25', '18', '8', '11']
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
