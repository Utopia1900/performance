<template>
  <div style="height: 100px;">
    <el-card>
      <div slot="header" class="card-title">
        <span>考核报告</span>
      </div>
      <div class="radio-wrapper">
        <label for>考核周期：</label>
        <el-radio v-model="dateType" label="2" border>季度</el-radio>
        <el-radio v-model="dateType" label="1" border>年</el-radio>
        <label for>考核时间：</label>
        <el-select v-model="value" placeholder="请选择">
          <el-option-group
            v-for="group in options"
            :key="group.lable"
            :label="group.lable"
            style="display:inline-block"
          >
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
      <div
        class="border text-center w-100 position-absolute"
        style="padding: 0.72rem;top:calc(32px + 1rem);"
      >
        {{tableTitle.standardName}}
        <span
          class="text-muted"
        >{{tableTitle.year}}（{{dateSlice(tableTitle.khStartDate,5)}}~{{dateSlice(tableTitle.khEndDate,5)}}）</span>考核报告
      </div>
      <div>
        <table class="table w-100 position-absolute" style="top:calc(34px + 4.54rem);">
          <tbody>
            <tr class="table_des">
              <td>考核对象</td>
              <td>{{tableTitle.khOrgName == undefined ? '暂无数据' : tableTitle.khOrgName}}</td>
              <td>考评单位</td>
              <td>{{tableTitle.khObjOrgName== undefined ? '暂无数据' : tableTitle.khObjOrgName}}</td>
              <td>考核时间</td>
              <td>{{tableTitle.khDate== undefined ? '暂无数据' : tableTitle.khDate}}</td>
              <td>考核得分</td>
              <td>{{tableTitle.scoreGet== undefined ? '暂无数据' : tableTitle.scoreGet}}</td>
              <td>考核等级</td>
              <td>
                <strong
                  style="color: #73dfca"
                  v-if="tableTitle.khGrate == '优秀'"
                >{{tableTitle.khGrate}}</strong>
                <strong
                  style="color: #ff8c1d"
                  v-if="tableTitle.khGrate == '良好'"
                >{{tableTitle.khGrate}}</strong>
                <strong
                  style="color: #6e5cb8"
                  v-if="tableTitle.khGrate == '中等'"
                >{{tableTitle.khGrate}}</strong>
                <strong
                  style="color: #d86fb6"
                  v-if="tableTitle.khGrate == '合格'"
                >{{tableTitle.khGrate}}</strong>
                <strong
                  style="color: #ff6565"
                  v-if="tableTitle.khGrate == '不合格'"
                >{{tableTitle.khGrate}}</strong>
                <strong v-if="tableTitle.khGrate == undefined">暂无等级</strong>
              </td>
              <td>支付系数</td>
              <td>{{tableTitle.payRateStr== undefined ? '暂无数据' : tableTitle.payRateStr}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="h-100 position-relative" ref="scrollBox" style="overflow:auto;">
        <div v-for="(item,index) in tableData" :key="index">
          <div
            class="border-left border-right"
            style="padding: 0.72rem;"
            v-if="index != tableData.length - 1"
          >
            <span>( {{item.khClass.indexStr}} ) {{item.khClass.className}}</span>
            <span
              class="pl-5"
              style="color: #FF8C1D;"
            >考核得分：{{item.khClass.scoreGet}} × {{item.khClass.weight * 100}}% = {{item.khClass.scoreGetStr}}分</span>
          </div>
          <div
            class="border-left border-right"
            style="padding: 0.72rem;"
            v-if="index == tableData.length - 1"
          >
            <span>( {{item.khClass.indexStr}} ) {{item.khClass.className}}</span>
            <span class="pl-5" style="color: #FF8C1D;">共{{item.khClass.count}}条</span>
          </div>
          <custom-table
            :thead="thead"
            rowspan="['title']"
            serial="true"
            serialWidth="3%"
            :tableItem="item.table"
          ></custom-table>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { reportSeasonList, reportYearList, reportDetailList } from './mockdata/data'
import CustomTable from './components/custom-table'
export default {
  name: 'report',
  components: {
    CustomTable
  },
  data() {
    return {
      dateType: '2',
      options: reportSeasonList,
      value: '',
      tableTitle: [],
      tableData: [],
      thead: [
        {
          alias: 'title',
          title: '考核分类',
          width: '7%',
          html: true
        },
        {
          alias: 'khxm',
          title: '考核项目',
          width: '10%'
        },
        {
          alias: 'khbz',
          title: '考核标准',
          width: '20%',
          html: true
        },
        {
          alias: 'score',
          title: '满分',
          width: '2%'
        },
        {
          alias: 'scoreGet',
          title: '得分',
          width: '2%'
        },
        {
          alias: 'scoreDescr',
          title: '考评描述',
          width: '10%'
        }
      ]
    }
  },
  created() {
    this.tableTitle = reportDetailList.tableTitle
    this.tableData = reportDetailList.tableData
  },
  methods: {
    dateSlice(val, length) {
      if (val) {
        return val.slice(length)
      }
      return ''
    }
  },
  watch: {
    dateType(newValue, oldValue) {
      // this.loadKpDataLst();
      if (newValue === '2') {
        this.options = reportSeasonList
      } else if (newValue === '1') {
        this.options = reportYearList
      }
      this.value = ''
    }
  }
}
</script>

<style lang='scss' scoped>
.radio-wrapper {
  text-align: left;
  padding: 6px;
}
.card-title {
  text-align: left;
}
.box-card {
  width: 480px;
}
.table {
  border-collapse: collapse;
}
.table_des td:nth-of-type(2n + 1) {
  color: #333333;
  font-weight: bold;
  font-size: 14px;
}
table,
td,
th {
  border: 1px solid #e9e9e9;
  vertical-align: center !important;
  padding: 15px;
}
.table thead th {
  padding-right: 30px;
  background-size: 25px auto;
}
.table th,
.table td {
  vertical-align: middle !important;
}
</style>
<style lang="scss">
  .el-date-editor.el-input, .el-date-editor.el-input__inner, .el-select{
  width: auto;
  display: inline-block;
}
</style>
