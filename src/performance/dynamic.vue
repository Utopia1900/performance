<template>
  <div style="padding: 20px;jfkp-main;height:100px;">
    <el-card class="container">
      <div slot="header" class="card-title">
        <span>考核结果</span>
      </div>
      <div class="radio-wrapper">
        <label for>考核周期：</label>
        <el-radio v-model="dateType" label="2" border>季度</el-radio>
        <el-radio v-model="dateType" label="1" border>年</el-radio>
        <label for>考核时间：</label>
        <el-select v-model="value" placeholder="请选择">
          <el-option-group v-for="group in timeOptions" :key="group.lable" :label="group.lable">
            <div v-if="group.sub">
              <el-option
                v-for="item in group.sub"
                :key="item.lable"
                :label="item.lable"
                :value="item.lable"
              ></el-option>
            </div>
            <div v-else>
              <el-option :value="group.lable"></el-option>
            </div>
          </el-option-group>
        </el-select>
      </div>
      <div class="chart-container">
        <div style>
          <highcharts-container :defOptions="options" :styles="kh_sty"></highcharts-container>
        </div>
        <div style="width: 200px;">
          <div class="current-kh">
            <div>
              <h4>{{currentKh.year}}{{currentKh.seasonName}}考核结果</h4>
            </div>
            <div>{{currentKh.startDate}}-{{currentKh.endDate}}</div>
            <div>
              <span class="label">考核得分</span>
            </div>
            <div>
              <span class="color score">{{currentKh.score}}</span>
            </div>
            <div style="margin-top:6px;">
              <ul style="list-style-type:none" v-for="(item, index) in currentKh.items" :key="index">
                <li>{{item.name}}:{{item.score}}</li>
              </ul>
            </div>
            <div>
              <span class="label">考核等级</span>
            </div>
            <div>
              <span class="color level">{{currentKh.level}}</span>
            </div>
            <div style="margin-top:6px;">
              支付系数:
              <span class="khPayRate">{{currentKh.khPayRate}}</span>
            </div>
          </div>
        </div>
      </div>
    </el-card>
    <el-card style="margin-top: 16px;" class="container">
      <div slot="header" class="card-title">
        <span>水质水量指标</span>
      </div>
      <div style="width:100%;display:flex;" class="chart-container">
        <!-- <div><h1>placeholder</h1></div> -->
        <div>
          <div style="width: 300px; float:left;">
            <div>
              <div>
                <h4>{{cwqData.year}}{{cwqData.seasonName}}</h4>
              </div>
              <div>{{cwqData.startDate}}-{{cwqData.endDate}}</div>
              <div style="border-top: 1px solid #ccc; padding-top: 10px;">
                <div>
                  <span class="color1">{{cwqData.xjl.value}}</span>&nbsp;&nbsp;
                  <span class="color1">{{cwqData.clsl.value}}</span>
                </div>
                <div>
                  <span class="name1">{{cwqData.xjl.name}}</span>&nbsp;&nbsp;
                  <span class="name1">{{cwqData.clsl.name}}</span>
                </div>
                <div>
                  <span class="color1">{{cwqData.xjlv.value}}</span>&nbsp;&nbsp;
                  <span class="color1 szlx">{{cwqData.szlx.value}}</span>
                </div>
                <div>
                  <span class="name1">{{cwqData.xjlv.name}}</span>&nbsp;&nbsp;
                  <span class="name1">{{cwqData.szlx.name}}</span>
                </div>
              </div>
            </div>

            <div style="border-top: 1px solid #ccc; padding-top: 10px;">
              <div>
                <span class="color2">{{cwqData.inCod.value}}</span>&nbsp;&nbsp;
                <span class="color2">{{cwqData.outCod.value}}</span>
              </div>
              <div>
                <span class="name1">{{cwqData.inCod.name}}</span>&nbsp;&nbsp;
                <span class="name1">{{cwqData.outCod.name}}</span>
              </div>
              <div>
                <span class="color2">{{cwqData.inSl.value}}</span>&nbsp;&nbsp;
                <span class="color2">{{cwqData.outSl.value}}</span>
              </div>
              <div>
                <span class="name1">{{cwqData.inSl.name}}</span>&nbsp;&nbsp;
                <span class="name1">{{cwqData.outSl.name}}</span>
              </div>
            </div>
          </div>
          <div v-for="(item, index) in charts" :key="index" style="float:left;">
            <highcharts-container :defOptions="item" :styles="charts_sty"></highcharts-container>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
import HighchartsContainer from './components/Chart/highcharts-component'
import Highcharts from 'highcharts'
import { assessmentResultList,reportSeasonList,reportYearList } from './mockdata/data'
export default {
  name: 'performance-dynamic',
  components: {
    HighchartsContainer
  },
  data() {
    return {
      dateType: '2',
      timeOptions: reportSeasonList,
      value: '',
      kh_sty: {
        width: 800,
        height: 360
      },
      charts_sty: {
        width: 300,
        height: 360
      },
      options: null,
      currentKh: null, // 当前考核结果,
      cwqData: null, // 当前水质水量结果
      defaultOptions: {},
      charts: [...Array(4)]
    }
  },
  methods: {
    // 考核结果图标
    initKHChart() {
      let { khLst, currentKh } = assessmentResultList.khData
      let clcScore = khLst.map(item => item.clcScore) // 处理厂
      let gwbzScore = khLst.map(item => item.gwbzScore) // 管网泵站
      let categories = khLst.map(item => `${item.year}年 ${item.seasonName}`)
      this.options = {
        title: {
          text: '2019年四季度考核结果环比',
          x: -20 // center
        },
        chart: {
          type: 'column'
        },
        xAxis: {
          categories
        },
        yAxis: {
          min: 0,
          title: {
            text: '分值',
            enabled: false
          },
          stackLabels: {
            // 堆叠数据标签
            enabled: true
          }
        },
        plotOptions: {
          column: {
            stacking: 'normal',
            pointPadding: 0.2,
            borderWidth: 0,
            pointWidth: 30
          }
        },
        tooltip: {
          valueSuffix: '分' // 提示信息所带单位
        },
        series: [
          {
            name: '管网泵站',
            data: gwbzScore
          },
          {
            name: '处理厂',
            data: clcScore
          }
        ],
        colors: ['#fcda39', '#ee8344'],
        credits: {
          // 禁用底部的highcharts.com
          enabled: false
        },
        exporting: {
          // 不显示右上角的打印图标
          enabled: false
        },
        legend: {
          // 不显示底部 legend
          enabled: true
        }
      }
      this.currentKh = currentKh
    },
    // 初始化水质水量数据
    initSZData() {
      let { cwqData } = assessmentResultList
      this.cwqData = cwqData
    },
    // CODCOD 化学需氧量
    initCODChart() {},
    // HN3N 氨氮
    initHN3HChart() {},
    // TP，总磷
    initTPChart() {},
    // TN，总氮
    initTNChart() {},
    setAllCharts() {
      let { codData, hn3nData, tpData, tnData } = assessmentResultList
      let cod_categories = codData.map(item => `${item.year}${item.seasonName}`)
      let hn3n_categories = hn3nData.map(item => `${item.year}${item.seasonName}`)
      let tpData_categories = tpData.map(item => `${item.year}${item.seasonName}`)
      let tnData_categories = tnData.map(item => `${item.year}${item.seasonName}`)
      let publicOptions = {
        chart: {
          type: 'column'
        },
        yAxis: {
          min: 0,
          title: {
            enabled: false
          }
        },
        credits: {
          // 禁用底部的highcharts.com
          enabled: false
        },
        exporting: {
          // 不显示右上角的打印图标
          enabled: false
        }
        // legend: {
        //   // 不显示底部 legend
        //   enabled: false
        // }
      }

      let codOptions = Object.assign({}, publicOptions, {
        title: {
          text: 'COD(化学需氧量)',
          x: -20 // center
        },
        xAxis: {
          categories: cod_categories
        },
        colors: ['#267ef7', '#32c5ed'],
        series: [
          {
            name: 'COD（mg/L）',
            data: codData.map(item => item.cod)
          },
          {
            name: '累计过水量m3',
            data: codData.map(item => item.sunGsl)
          }
        ]
      })

      let hn3nOptions = Object.assign({}, publicOptions, {
        title: {
          text: 'HN3-N(氨氮)',
          x: -20
        },
        xAxis: {
          categories: hn3n_categories
        },
        colors: ['#bbd16c'],
        series: [
          {
            name: 'HN3-N',
            data: hn3nData.map(item => item.hn3n)
          }
        ]
      })

      let tpOptions = Object.assign({}, publicOptions, {
        title: {
          text: 'TP(总磷)',
          x: -20
        },
        xAxis: {
          categories: tpData_categories
        },
        colors: ['#9a8def'],
        series: [
          {
            name: 'TP',
            data: tpData.map(item => item.tp)
          }
        ]
      })

      let tnOptions = Object.assign({}, publicOptions, {
        title: {
          text: 'TN(总氮)',
          x: -20
        },
        colors: ['#088da2'],
        xAxis: {
          categories: tnData_categories
        },
        series: [
          {
            name: 'TN',
            data: tnData.map(item => item.tn)
          }
        ]
      })

      this.charts = [codOptions, hn3nOptions, tpOptions, tnOptions]
    }
  },
  created() {
    this.initKHChart()
    this.initSZData()
    this.setAllCharts()
  },
  watch: {
    dateType (newValue, oldValue) {
      // this.loadKpDataLst();
      if (newValue === '2') {
        this.timeOptions = reportSeasonList
      } else if (newValue === '1') {
        this.timeOptions = reportYearList
      }
      this.value = ''
    }
  }
}
</script>
<style lang="scss" scoped>
.radio-wrapper {
  text-align: left;
  padding: 6px;
}
.card-title {
  text-align: left;
}
.current-kh {
  display: flex;
  flex-direction: column;
  width: 200px;
}
.current-kh div {
  flex: 1;
  text-align: center;
}
.color {
  // background: -moz-linear-gradient(#ee8344, #fcda39);
  font-size: 1.2em;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
}
.score {
  background: linear-gradient(to left top, #ee8344, #fcda39);
}
.level {
  background: linear-gradient(to left top, #8ba53e, #b8d250);
}

.label {
  color: #000000;
  height: 36px;
  line-height: 36px;
}
.khPayRate {
  color: #ee8344;
  font-size: 1.2em;
}
.container {
  background-color: #fff;
}
.custom-title {
  padding: 8px;
  border-bottom: 1px solid #ccc;
}
.chart-container {
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 20px;
}

.color1 {
  background: linear-gradient(to left top, #2d81f7, #6ea3f3);
  font-size: 1em;
  color: #fff;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 5px;
  display: inline-block;
  width: 120px;
  text-align: center;
}
.name1 {
  color: #444444;
  display: inline-block;
  width: 120px;
  text-align: center;
  height: 30px;
  line-height: 30px;
}

.szlx {
  background: linear-gradient(to left top, #8ba53e, #b8d250);
}

.color2 {
  color: #e08e07;
  font-size: 1em;
  display: inline-block;
  text-align: center;
  width: 120px;
}
</style>
<style lang="scss">
  .el-date-editor.el-input, .el-date-editor.el-input__inner, .el-select{
  width: auto;
  display: inline-block;
}
</style>