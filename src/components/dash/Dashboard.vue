<template>
  <!-- Main content -->
  <section class='content'>
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
      <div id="couz" style="height:400px"></div>
    </div>
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
          <div class="col-xs-4 GCCount">
            <p>total arrivals <i v-bind:title="textAll[5]" class="fa fa-question-circle"></i></p>
            <p class="BoldFont">1000</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div id="ddz" style="height:400px;"></div>
    </div>
    <div class="row">
      <div id="plz" style="height:400px;"></div>
    </div>
    <div class="row">
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




      <div id="cpq" style="height:400px;"></div>
    </div>
    <!-- 雷达 / 折线堆叠 -->
    <div class="row">
      <div class="col-xs-5">
        <div id="radar" style="height:400px;">

        </div>
      </div>
      <div class="col-xs-7">
        <div id="zx" style="height:400px;">

        </div>
      </div>
    </div>
    <!-- 表格 -->
    <div class="row">
      <div class="col-md-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">当月维度得分</h3>
          </div>
          <!-- /.box-header -->
          <div class="box-body no-padding table-responsive">
            <table class="table table-striped text-center">
              <tbody>
                <tr>
                  <th> </th>
                  <th>餐饮</th>
                  <th>服务</th>
                  <th>价格</th>
                  <th>酒店</th>
                  <th>设施</th>
                  <th>卫生</th>
                </tr>
                <tr>
                  <td>西餐厅</td>
                  <td>8.6</td>
                  <td>8.6</td>
                  <td>8.6</td>
                  <td>8.6</td>
                  <td>8.6</td>
                  <td>8.6</td>
                </tr>
                <tr>
                  <td>中餐厅</td>
                  <td>8.6</td>
                  <td>8.6</td>
                  <td>8.6</td>
                  <td>8.6</td>
                  <td>8.6</td>
                  <td>8.6</td>
                </tr>
                <tr>
                  <td>酒吧</td>
                  <td>8.6</td>
                  <td>8.6</td>
                  <td>8.6</td>
                  <td>8.6</td>
                  <td>8.6</td>
                  <td>8.6</td>
                </tr>
                <tr>
                  <td>自助餐厅</td>
                  <td>8.6</td>
                  <td>8.6</td>
                  <td>8.6</td>
                  <td>8.6</td>
                  <td>8.6</td>
                  <td>8.6</td>
                </tr>
                <tr>
                  <td>咖啡厅</td>
                  <td>8.6</td>
                  <td>8.6</td>
                  <td>8.6</td>
                  <td>8.6</td>
                  <td>8.6</td>
                  <td>8.6</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /.box-body -->
        </div>
      </div>
    </div>
    <!-- 好评柱状 -->
    <div class="row">
      <div class="col-xs-4">
        <div id="dpAll" style="height:300px;"></div>
      </div>
      <div class="col-xs-4">
        <div id="dpUp" style="height:300px;"></div>
      </div>
      <div class="col-xs-4">
        <div id="dpDown" style="height:300px;"></div>
      </div>
    </div>
  </section>
  <!-- /.content -->
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

    // GC占比分配
    var myChart1 = Echarts.init(document.getElementById('bing01'))
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
    var ddzChart = Echarts.init(document.getElementById('ddz'))
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
    var plzChart = Echarts.init(document.getElementById('plz'))
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

    // 堆叠柱形图
    var cpqChart = Echarts.init(document.getElementById('cpq'))
    var cpqOption = {
      title: {
        text: '酒店餐厅好评率排名',
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
        data: ['咖啡厅', '中餐厅', '西餐厅', '酒吧', '自助餐厅']
      },
      yAxis: {
        axisLabel: {
          formatter: '{value}%'
        }
      },
      series: [{
        barMaxWidth: '70',
        name: '好评率',
        type: 'bar',
        data: ['99', '97', '80', '75', '30']
      }]
    }
    cpqChart.setOption(cpqOption)

    // 雷达图
    var radarChart = Echarts.init(document.getElementById('radar'))
    var radarOption = {
      title: {
        text: '基础雷达图',
        show: false
      },
      tooltip: {},
      legend: {
        data: ['咖啡厅', '中餐厅', '西餐厅', '酒吧', '自助餐厅']
      },
      radar: {
        // shape: 'circle',
        indicator: [
         {name: '销售', max: 100},
         {name: '管理', max: 100},
         {name: '信息', max: 100},
         {name: '客服', max: 100},
         {name: '研发', max: 100},
         {name: '市场', max: 100}
        ]
      },
      series: [{
        name: '得分',
        type: 'radar',
        data: [
          {
            value: [60, 40, 95, 15, 97, 100],
            name: '咖啡厅'
          },
          {
            value: [45, 87, 58, 86, 34, 94],
            name: '中餐厅'
          },
          {
            value: [14, 57, 23, 98, 34, 23],
            name: '西餐厅'
          },
          {
            value: [72, 12, 79, 22, 49, 59],
            name: '酒吧'
          },
          {
            value: [55, 42, 69, 87, 17, 5],
            name: '自助餐厅'
          }
        ]
      }]
    }
    radarChart.setOption(radarOption)

    // 餐厅折线图
    var zxChart = Echarts.init(document.getElementById('zx'))
    var zxOption = {
      title: {
        text: '堆叠区域图',
        show: false
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['咖啡厅', '中餐厅', '西餐厅', '酒吧', '自助餐厅']
      },
      xAxis: [
        {
          type: 'category',
          // boundaryGap: false,
          data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月']
        }
      ],
      yAxis: [
        {
          type: 'value',
          min: 30
        }
      ],
      series: [
        {
          name: '咖啡厅',
          type: 'line',
          data: [69, 55, 98, 81, 57, 56, 62]
        },
        {
          name: '中餐厅',
          type: 'line',
          data: [99, 99, 79, 55, 54, 89, 59]
        },
        {
          name: '西餐厅',
          type: 'line',
          data: [93, 54, 70, 57, 82, 52, 55]
        },
        {
          name: '酒吧',
          type: 'line',
          data: [78, 74, 91, 87, 74, 62, 79]
        },
        {
          name: '自助餐厅',
          type: 'line',
          data: [66, 82, 60, 56, 86, 56, 87]
        }
      ]
    }
    zxChart.setOption(zxOption)

    // 堆叠柱形图
    var dpAllChart = Echarts.init(document.getElementById('dpAll'))
    var dpAllOption = {
      title: {
        text: '餐厅评价关键词',
        left: 'center',
        top: 'top'
      },
      yAxis: {
        type: 'category',
        data: ['卫生', '服务', '酒店', '整体', '位置', '质量', '口味']
      },
      xAxis: {},
      series: [{
        name: '好评率',
        type: 'bar',
        data: ['3', '14', '30', '75', '80', '90', '99']
      }]
    }
    dpAllChart.setOption(dpAllOption)

    // 堆叠柱形图
    var dpUpChart = Echarts.init(document.getElementById('dpUp'))
    var dpUpOption = {
      title: {
        text: '餐厅好评关键词',
        left: 'center',
        top: 'top'
      },
      yAxis: {
        type: 'category',
        data: ['卫生', '服务', '酒店', '整体', '位置', '质量', '口味']
      },
      xAxis: {},
      series: [{
        name: '好评率',
        type: 'bar',
        data: ['1', '4', '20', '35', '60', '60', '89']
      }]
    }
    dpUpChart.setOption(dpUpOption)

    // 堆叠柱形图
    var dpDownChart = Echarts.init(document.getElementById('dpDown'))
    var dpDownOption = {
      title: {
        text: '餐厅差评关键词',
        left: 'center',
        top: 'top'
      },
      yAxis: {
        type: 'category',
        data: ['卫生', '服务', '酒店', '整体', '位置', '质量', '口味']
      },
      xAxis: {},
      series: [{
        name: '好评率',
        type: 'bar',
        data: ['3', '14', '30', '45', '50', '60', '79']
      }]
    }
    dpDownChart.setOption(dpDownOption)
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
.GCCount:not(:nth-child(3n)){
  border-right: 1px #000 solid;
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
