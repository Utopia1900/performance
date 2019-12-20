<template>
  <div>
    <el-card>
      <div slot="header" class="card-title">
        <span>考核结果</span>
      </div>
      <div class="radio-wrapper">
        <label for>考核周期：</label>
        <el-radio v-model="dateType" label="2" border>季度</el-radio>
        <el-radio v-model="dateType" label="1" border>年</el-radio>
        <label for>考核时间：</label>
        <el-select v-model="value" placeholder="请选择">
          <el-option-group v-for="group in options" :key="group.lable" :label="group.lable">
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
      <div class="base full" id="assessment-result">
                <div class="right">
                  <div class="header">
                    <div class="title">{{ currentAssessmentResult.year }}年{{ currentAssessmentResult.seasonName }}考核结果</div>
                    <div class="sub-title">{{ currentAssessmentResult.startDate }}-{{ currentAssessmentResult.endDate }}</div>
                  </div>
                  <div class="content">
                    <div class="tp">
                      <div>
                        <span>考核得分</span>
                        <span>
                          <span>
                            {{ currentAssessmentResult.score === null ? '--' : currentAssessmentResult.score }}
                            <i>分</i>
                          </span>
                        </span>
                        <span>处理厂：{{ typeof currentAssessmentResult.items === 'undefined' || currentAssessmentResult.items.length === 0 || currentAssessmentResult.items[0].score === null ? '--' : currentAssessmentResult.items[0].score }}分</span>
                        <span>管网泵站：{{ typeof currentAssessmentResult.items === 'undefined' || currentAssessmentResult.items.length === 0 || currentAssessmentResult.items[1].score === null ? '--' : currentAssessmentResult.items[1].score }}分</span>
                      </div>
                    </div>
                    <div class="bt">
                      <div>
                        <span>考核等级</span>
                        <span>
                          <span>{{ currentAssessmentResult.level === '' ? '--' : currentAssessmentResult.level }}</span>
                        </span>
                        <span>
                          支付系数：
                          <i>{{ currentAssessmentResult.khPayRate === '' ? '--' : currentAssessmentResult.khPayRate }}</i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="left">
                  <result-chart :option="assessmentResultOptions"></result-chart>
                </div>
              </div>
    </el-card>
    <el-card>
      <div slot="header" class="card-title">
        <span>****指标</span>
      </div>
    </el-card>
  </div>
</template>

<script>
import { reportSeasonList, reportYearList, assessmentResultList } from './mockdata/data'
import ResultChart from './components/Chart/result-chart' // 考核结果
export default {
  name: 'dynamic',
  components: {
    ResultChart
  },
  data () {
    return {
      dateType: '2',
      options: reportSeasonList,
      value: '',
      totalResults: [],
      currentAssessmentResult: {},
      assessmentResultOptions: {} // 考核结果图表参数
    }
  },
  created () {
    // this.totalResults = assessmentResultList.khData
    this.currentAssessmentResult = assessmentResultList.khData.currentKh
    let { khData } = assessmentResultList
    this.setAssessmentResultOptions(khData.khLst, khData.currentKh)
  },
  methods: {
    setAssessmentResultOptions (dataLst, baseObj) {
      this.assessmentResultOptions = {
        title: '考核结果环比',
        xAxis: [],
        clc: [],
        gwbz: [],
        total: []
      }
      let title = baseObj.year !== '' ? `${baseObj.year}年` : ''
      title = title + baseObj.seasonName + '考核结果环比'
      this.assessmentResultOptions.title = title
      for (let data of dataLst) {
        let xLabel = data.year + '年'
        if (data.seasonName !== null && data.seasonName !== '') {
          xLabel = xLabel + ' ' + data.seasonName
        }
        // xLabel = xLabel + '\n' + data.startDate + '~' + data.endDate;
        this.assessmentResultOptions.xAxis.push(xLabel)
        this.assessmentResultOptions.clc.push(
          data.clcScore === null ? '-' : data.clcScore
        )
        this.assessmentResultOptions.gwbz.push(
          data.gwbzScore === null ? '-' : data.gwbzScore
        )
        this.assessmentResultOptions.total.push(data.score === null ? '-' : data.score)
      }
    },
  },
  watch: {
    dateType (newValue, oldValue) {
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

<style lang="scss" scoped>
.radio-wrapper {
  text-align: left;
  padding: 6px;
}
.card-title {
  text-align: left;
}

.full {
  height: 100%;
  width: 100%;
  position: relative;
}
#jxdt-main {
  font-size: 1.2rem;
  padding: 1.6rem;
}
#jxdt-main > div {
  padding-top: 2.8rem;
}
#jxdt-main .toolbox {
  width: 500px;
  height: 32px;
  color: #7c8190;
  line-height: 32px;
  font-size: 1.2rem;
  margin-left: -250px;
  text-align: center;
  background-color: transparent;
  position: absolute;
  top: -8px;
  left: 50%;
  z-index: 99;
}
#jxdt-main .toolbox > span > label {
  cursor: pointer;
}
#jxdt-main .toolbox > span > label:not(:first-child) {
  margin-left: 1rem;
}
#jxdt-main .toolbox input[type="radio"] {
  cursor: pointer;
  margin-right: 4px;
  top: 3px;
}
#jxdt-main .toolbox input[type="radio"]::after {
  top: 3px;
  left: 3px;
}
.top,
.bottom {
  width: 100%;
  height: 50%;
}
.top {
  padding-bottom: 0.8rem;
}
.bottom {
  padding-top: 0.8rem;
}
.top-l {
  width: 60%;
  height: 100%;
  padding-right: 0.8rem;
}
.top-r {
  width: 40%;
  height: 100%;
  padding-left: 0.8rem;
  float: right;
}

.base {
  padding: 1rem;
  text-align: center;
}
.base .left,
.base .right {
  position: relative;
}
.base .header {
  width: 100%;
  height: 3rem;
  position: absolute;
  top: 0;
  left: 0;
}
.base .header .title {
  width: 100%;
  color: #676b77;
  font-size: 1.1rem;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
}
.base .header .sub-title {
  width: 100%;
  color: #676b77;
  font-size: 0.8rem;
  overflow: hidden;
  white-space: nowrap;
}
.base .content {
  height: 100%;
  padding-top: 3rem;
}
#assessment-result .left {
  width: 80%;
  height: 100%;
  padding-right: 0.8rem;
  margin-right: 20%;
  border-right: 1px solid rgba(0, 0, 0, 0.125);
}
#assessment-result .right {
  width: 20%;
  height: 100%;
  color: #676b77;
  padding-left: 0.8rem;
  float: right;
}
#assessment-result .right div > span {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
#assessment-result .right .tp,
#assessment-result .right .bt {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.3rem 0.8rem;
}
#assessment-result .right .tp {
  height: 50%;
}
#assessment-result .right .tp > div,
#assessment-result .right .bt > div {
  width: 100%;
  height: 100%;
}
#assessment-result .right .tp div > span:nth-child(1) {
  height: 20%;
  font-size: 1rem;
}
#assessment-result .right .tp div > span:nth-child(2) {
  color: #fff;
  height: 55%;
  padding: 0.5rem 0.6rem;
  position: relative;
}
#assessment-result .right .tp div > span:nth-child(3),
#assessment-result .right .tp div > span:nth-child(4) {
  height: 15%;
  color: #999999;
  font-size: 1rem;
  text-align: right;
  padding-right: 0.3rem;
  position: relative;
}
#assessment-result .right .tp div > span:nth-child(3)::after,
#assessment-result .right .tp div > span:nth-child(4)::after {
  content: "";
  display: block;
  width: 1rem;
  height: 90%;
  position: absolute;
  right: -0.3rem;
  top: 5%;
}
#assessment-result .right .tp div > span:nth-child(2) > span {
  width: 100%;
  height: 100%;
  font-size: 2.6rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    -62.6152025980419deg,
    rgba(252, 218, 57, 1) 16%,
    rgba(251, 129, 71, 1) 97%
  );
}
#assessment-result .right .tp div > span:nth-child(2) > span > i {
  font-size: 1rem;
  margin-left: 0.3rem;
  margin-top: 13%;
  position: relative;
}
#assessment-result .right .tp div > span:nth-child(2) > span > i::after {
  content: "";
  display: block;
  width: 1.4rem;
  height: 1.5rem;
  position: absolute;
  left: 0;
  bottom: 90%;
}
#assessment-result .right .bt {
  height: 50%;
}
#assessment-result .right .bt div > span:nth-child(1) {
  height: 28%;
  font-size: 1rem;
}
#assessment-result .right .bt div > span:nth-child(2) {
  color: #fff;
  height: 44%;
  padding: 0 0.6rem;
  position: relative;
}
#assessment-result .right .bt div > span:nth-child(2) > span {
  width: 100%;
  height: 100%;
  font-size: 1.8rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    -64.7858908677673deg,
    rgba(184, 210, 80, 1) 17%,
    rgba(136, 162, 61, 1) 97%
  );
}
#assessment-result .right .bt div > span:nth-child(3) {
  height: 28%;
  font-size: 1rem;
  padding-right: 0.8rem;
  position: relative;
}
#assessment-result .right .bt div > span:nth-child(3)::after {
  content: "";
  display: block;
  width: 1.4rem;
  height: 100%;
  position: absolute;
  right: -0.4rem;
  top: 0;
}
#assessment-result .right .bt div > span:nth-child(3) > i {
  color: #ff961a;
  font-size: 1.6rem;
}
#cwygzb .left {
  width: 70%;
  height: 100%;
  padding-right: 0.8rem;
  margin-right: 30%;
  border-right: 1px solid rgba(0, 0, 0, 0.125);
}
#cwygzb .right {
  width: 30%;
  height: 100%;
  padding-left: 0.8rem;
  float: right;
}
#cwygzb .right .item {
  height: 25%;
}
#cwygzb .right .item > div {
  width: 100%;
  height: 100%;
  padding: 0.5rem 0.6rem;
}
#cwygzb .right .item > div span {
  display: block;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
#cwygzb .right .item > div span:nth-child(1) {
  height: 65%;
  color: #37a5f4;
  font-size: 1.4rem;
}
#cwygzb .right .item > div span:nth-child(1)::after {
  content: "";
  display: block;
  width: 1.4rem;
  height: 100%;
  position: absolute;
  left: 66%;
  top: 0;
}
#cwygzb .right .item > div span:nth-child(2) {
  height: 35%;
  color: #676b77;
  font-size: 0.8rem;
}

#szslzb .left {
  width: 17%;
  height: 100%;
  padding-right: 0.8rem;
  border-right: 1px solid rgba(0, 0, 0, 0.125);
  float: left;
}
#szslzb .left .tp {
  height: 60%;
}
#szslzb .left .item {
  width: 50%;
  height: 50%;
  float: left;
}
#szslzb .left .item span {
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
}
#szslzb .left .item {
  padding: 0.3rem 0.8rem;
}
#szslzb .left .item div {
  height: 100%;
  overflow: hidden;
}
#szslzb .left .item span:nth-child(1) {
  height: 60%;
}
#szslzb .left .tp .item span:nth-child(1) {
  color: #fff;
  font-weight: 800;
  background: linear-gradient(
    111.447736327105deg,
    rgba(26, 122, 248, 1) 0%,
    rgba(116, 166, 242, 1) 100%
  );
  border-radius: 4px;
}
#szslzb .left .tp .item:nth-child(4) span:nth-child(1) {
  background: linear-gradient(
    -70.1127145164904deg,
    rgba(184, 210, 80, 1) 16%,
    rgba(136, 162, 61, 1) 97%
  );
}
#szslzb .left .item span:nth-child(2) {
  height: 40%;
  font-size: 0.8rem;
}
#szslzb .left .tp .item span:nth-child(2) {
  color: #676b77;
  position: relative;
}
#szslzb .left .tp .item span:nth-child(2)::after {
  content: "";
  display: block;
  width: 1.2rem;
  height: 80%;
  position: absolute;
  left: 70%;
  top: 10%;
}
#szslzb .left .bt {
  height: 40%;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}
#szslzb .left .bt .item:nth-child(1) span:nth-child(1),
#szslzb .left .bt .item:nth-child(2) span:nth-child(1) {
  color: #ffa100;
}
#szslzb .left .bt .item:nth-child(3) span:nth-child(1),
#szslzb .left .bt .item:nth-child(4) span:nth-child(1) {
  color: #1a7af8;
}
#szslzb .left .bt .item span:nth-child(2) {
  color: #999999;
}
#szslzb .left .item span > i {
  color: #676b77;
  font-size: 0.9rem;
  font-weight: normal;
  font-style: normal;
  margin-left: 3px;
}
#szslzb .left .tp .item span > i {
  color: #fff;
}
#szslzb .right {
  width: 83%;
  height: 100%;
  padding-left: 0.8rem;
  margin-left: 18%;
}
#szslzb .right .header {
  height: 36%;
  position: relative;
}
#szslzb .right .header .title {
  height: 1.8rem;
  position: absolute;
  top: 0;
  right: 0;
}
#szslzb .right .header .box {
  height: 100%;
  padding-top: 1.8rem;
  overflow: hidden;
}
#szslzb .right .header .box .item {
  width: 10rem;
  height: 100%;
  margin-left: -5rem;
  position: absolute;
}
#szslzb .right .header .box .item:nth-child(1) {
  left: 12.5%;
}
#szslzb .right .header .box .item:nth-child(2) {
  left: 37.5%;
}
#szslzb .right .header .box .item:nth-child(3) {
  left: 62.5%;
}
#szslzb .right .header .box .item:nth-child(4) {
  left: 87.5%;
}
#szslzb .right .header .box .jt {
  height: 100%;
  padding: 0 3.5rem;
  display: flex;
  align-items: center;
  position: absolute;
}
#szslzb .right .header .box .jt::before {
  content: "";
  width: 100%;
  float: right;
  vertical-align: 0.8rem;
  display: inline-block;
  // border-bottom: 1px solid rgba(68, 132, 255);
}
#szslzb .right .header .box .jt::after {
  content: "";
  width: 20px;
  height: 15px;
  float: right;
  margin-left: -10px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size: auto 100%;
}
#szslzb .right .header .box .jt:nth-child(5) {
  left: 12.5%;
  right: 62.5%;
}
#szslzb .right .header .box .jt:nth-child(6) {
  left: 37.5%;
  right: 37.5%;
}
#szslzb .right .header .box .jt:nth-child(7) {
  left: 62.5%;
  right: 12.5%;
}
#szslzb .right .header .box .item > span {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
#szslzb .right .header .box .item > span:nth-child(1) {
  color: #676b77;
  width: 100%;
  height: 35%;
  font-size: 1.1rem;
  overflow: hidden;
  white-space: nowrap;
}
#szslzb .right .header .box .item > span:nth-child(2) {
  height: 40%;
}
#szslzb .right .header .box .item > span:nth-child(2) > i {
  width: 100%;
  height: 100%;
  display: inline-block;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
#szslzb .right .header .box .item > span:nth-child(3) {
  width: 100%;
  height: 25%;
  color: #ff961a;
  font-size: 0.8rem;
  overflow: hidden;
  white-space: nowrap;
}
#szslzb .right .content {
  height: 64%;
  padding-top: 0.2rem;
}
#szslzb .right .content .chart-box {
  width: 25%;
  height: 100%;
  float: left;
  padding: 1% 0.3rem 0 0.3rem;
}
.up::after,
.down::after {
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
