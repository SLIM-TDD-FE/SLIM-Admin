<template>
  <section class="content">
    <div class="row">
      <nav class="navbar navbar-default">
        <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand">餐厅：</a>
        </div>
        <div class="collapse navbar-collapse">
          <form class="navbar-form navbar-left">
            <div class="btn-group" role="group" aria-label="...">
              <div class="btn-group" role="group">
                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  选择餐厅
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
    <!-- <div class="row">
      <div class="col-xs-5">
        <div id="radar" style="height:400px;">

        </div>
      </div>
      <div class="col-xs-7">
        <div id="zx" style="height:400px;">

        </div>
      </div>
    </div>
 -->
    <div class="row totalTable">
      <div class="col-xs-12">
        <div class="box">
          <div class="box-header">
            <h3>维度得分</h3>
          </div>
          <div class="box-body no-padding table-responsive">
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
            <div class="row">
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
                    <th>位置</th>
                  </tr>
                  <tr>
                    <td>鹤日本料理</td>
                    <td>9.2</td>
                    <td>8.0</td>
                    <td>3.3</td>
                    <td>9.2</td>
                    <td>7.8</td>
                    <td>10</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>两咖啡</td>
                    <td>7.8</td>
                    <td>7.8</td>
                    <td>8.3</td>
                    <td>8.6</td>
                    <td>8.9</td>
                    <td>10</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>Calypso地中海</td>
                    <td>7.8</td>
                    <td>8.1</td>
                    <td>5.6</td>
                    <td>8.6</td>
                    <td>8.1</td>
                    <td>5.6</td>
                    <td>7.3</td>
                  </tr>
                  <tr>
                    <td>1515牛排馆</td>
                    <td>7.9</td>
                    <td>7.7</td>
                    <td>6.3</td>
                    <td>8.3</td>
                    <td>6.0</td>
                    <td>4.0</td>
                    <td>5.0</td>
                  </tr>
                  <tr>
                    <td>夏宫</td>
                    <td>7.6</td>
                    <td>7.4</td>
                    <td>5.7</td>
                    <td>8.2</td>
                    <td>6.6</td>
                    <td>8.1</td>
                    <td>8.8</td>
                  </tr>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
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
            <!-- 好评柱状 -->
            <div class="row">
            <div class="col-xs-12">

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
            </div>
          </div>
          <!-- /.box-body -->
        </div>
      </div>
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
    // 堆叠柱形图
    var cpqChart = Echarts.init(document.getElementById('cpq'), 'walden')
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
        data: ['鹤日本料理', '两咖啡', 'Calypso地中海', '1515牛排馆', '夏宫']
      },
      yAxis: {
        axisLabel: {
          formatter: '{value}%'
        },
        min: 70
      },
      series: [{
        barMaxWidth: '70',
        name: '好评率',
        type: 'bar',
        data: ['82.35', '81.33', '80.03', '78.28', '76.25']
      }]
    }
    cpqChart.setOption(cpqOption)

    // 雷达图
    var radarChart = Echarts.init(document.getElementById('radar'), 'walden')
    var radarOption = {
      title: {
        text: '基础雷达图',
        show: false
      },
      tooltip: {},
      legend: {
        data: ['鹤日本料理', '两咖啡', 'Calypso地中海', '1515牛排馆', '夏宫']
      },
      radar: {
        // shape: 'circle',
        indicator: [
         {name: '餐饮', max: 10},
         {name: '服务', max: 10},
         {name: '价格', max: 10},
         {name: '酒店', max: 10},
         {name: '设施', max: 10},
         {name: '卫生', max: 10},
         {name: '位置', max: 10}
        ]
      },
      series: [{
        name: '得分',
        type: 'radar',
        data: [
          {
            value: [9.2, 8.0, 3.3, 9.2, 7.8, 10, 10],
            name: '鹤日本料理'
          },
          {
            value: [7.8, 7.8, 8.3, 8.6, 8.9, 10, 10],
            name: '两咖啡'
          },
          {
            value: [7.8, 8.1, 5.6, 8.6, 8.1, 5.6, 7.3],
            name: 'Calypso地中海'
          },
          {
            value: [7.9, 7.7, 6.3, 8.3, 6.0, 4.0, 5.0],
            name: '1515牛排馆'
          },
          {
            value: [7.6, 7.4, 5.7, 8.2, 6.6, 8.1, 8.8],
            name: '夏宫'
          }
        ]
      }]
    }
    radarChart.setOption(radarOption)

    // 餐厅折线图
    var zxChart = Echarts.init(document.getElementById('zx'), 'walden')
    var zxOption = {
      title: {
        text: '堆叠区域图',
        show: false
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['鹤日本料理', '两咖啡', 'Calypso地中海', '1515牛排馆', '夏宫']
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
          name: '鹤日本料理',
          type: 'line',
          data: [81, 72, 98, 81, 75, 67, 64]
        },
        {
          name: '两咖啡',
          type: 'line',
          data: [82, 69, 79, 87, 89, 95, 96]
        },
        {
          name: 'Calypso地中海',
          type: 'line',
          data: [77, 78, 72, 80, 76, 79, 79]
        },
        {
          name: '1515牛排馆',
          type: 'line',
          data: [60, 64, 70, 72, 59, 61, 62]
        },
        {
          name: '夏宫',
          type: 'line',
          data: [66, 72, 60, 56, 66, 56, 80]
        }
      ]
    }
    zxChart.setOption(zxOption)

    // 堆叠柱形图
    var dpAllChart = Echarts.init(document.getElementById('dpAll'), 'walden')
    var dpAllOption = {
      title: {
        text: '餐厅评价关键词',
        left: 'center',
        top: 'top'
      },
      yAxis: {
        type: 'category',
        data: ['态度', '品质', '价格', '种类', '味道']
      },
      xAxis: {},
      series: [{
        name: '好评率',
        type: 'bar',
        data: ['8', '25', '30', '75', '80']
      }]
    }
    dpAllChart.setOption(dpAllOption)

    // 堆叠柱形图
    var dpUpChart = Echarts.init(document.getElementById('dpUp'), 'walden')
    var dpUpOption = {
      title: {
        text: '餐厅好评关键词',
        left: 'center',
        top: 'top'
      },
      yAxis: {
        type: 'category',
        data: ['态度', '品质', '价格', '种类', '味道']
      },
      xAxis: {},
      series: [{
        name: '好评率',
        type: 'bar',
        data: ['7', '20', '25', '60', '70']
      }]
    }
    dpUpChart.setOption(dpUpOption)

    // 堆叠柱形图
    var dpDownChart = Echarts.init(document.getElementById('dpDown'), 'walden')
    var dpDownOption = {
      title: {
        text: '餐厅差评关键词',
        left: 'center',
        top: 'top'
      },
      yAxis: {
        type: 'category',
        data: ['装饰', '品质', '服务', '种类', '价格']
      },
      xAxis: {},
      series: [{
        name: '好评率',
        type: 'bar',
        data: ['3', '14', '30', '45', '50']
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
