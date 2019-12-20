<template>
  <div style="height:100px;">
    <div>
      <el-card ctitle="运营绩效考核">
        <div class="radio-wrapper">
          <label for>考核周期：</label>
          <el-radio v-model="dateType" label="2" border>季度</el-radio>
          <el-radio v-model="dateType" label="1" border>年</el-radio>
        </div>
      </el-card>
      <el-row :gutter="20">
        <el-col :span="6" v-for="item in kpDataLst" :key="item.id">
          <div class="el-col-wrapper">
            <h3 class="medium">{{ item.khObjOrgName }}</h3>
            <h3>{{item.year}}年{{item.txt}}</h3>
            <div class="other">({{item.khStartDate}}--{{item.kpEndDate}})</div>
            <div class="grade">{{item.khGrade}}</div>
            <div class="score">{{item.scoreGet}}分</div>
            <div class="other">
              <ul class="score-list">
                <li v-for="(i, index) in item.kpClassList" :key="index">
                  <span>{{i.className}}:</span>
                  <span>{{i.scoreGet}}分</span>
                </li>
              </ul>
            </div>
            <div>
              <el-button type="primary" @click="goToDetail">查看详情</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { evaluationListBySeason, evaluationListByYear } from './mockdata/data'
export default {
  name: 'evaluation',
  data() {
    return {
      dateType: '2', // 2: 季度, 1: 年
      kpDataLst: [],
      kpItem: {},
      dateLst: []
    }
  },
  created() {
    // this.loadKpDataLst();
    this.kpDataLst = evaluationListBySeason.khList
    this.kpItem = evaluationListBySeason.item
  },
  mounted() {},
  methods: {
    goToDetail() {
      this.$message({ message: '跳转到评估详情页面', type: 'success' })
      // 路由跳转 code here
    }
  },
  watch: {
    dateType(newValue, oldValue) {
      // this.loadKpDataLst();
      if (newValue === '1') {
        this.kpDataLst = evaluationListByYear.khList
        this.kpItem = evaluationListByYear.item
      } else if (newValue === '2') {
        this.kpDataLst = evaluationListBySeason.khList
        this.kpItem = evaluationListBySeason.item
      }
    }
  }
}
</script>
<style scoped>
.radio-wrapper {
  text-align: left;
  padding: 6px;
}
.score-list {
  list-style-type: none;
}
.grade {
  color: #ff8c1d;
  font-size: 2.2rem;
}
.score {
  color: #ff8c1d;
  font-size: 1.5rem;
}
.el-col-wrapper {
  border: 1px solid #cccc;
  margin: 5px;
  color: #555555;
  box-shadow: #555555 2px 2px 4px;
  padding: 16px;
}
.other {
  font-size: 0.8rem;
  color: #777777;
}
</style>
