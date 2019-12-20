<template>
  <div style="height: 100px;">
    <el-card>
      <el-tabs @tab-click="handleClick">
        <el-tab-pane :label="item.className" v-for="(item, index) in tabs" :key="index">
          <custom-table
            :thead="thead"
            rowspan="['title']"
            serial="true"
            action="true"
            serialWidth="8%"
            actionWidth="10%"
            :tableItem="tableItems"
          ></custom-table>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import CustomTable from './components/custom-table'
import { tabs, tabsData15, tabsData16 } from './mockdata/data'

export default {
  name: 'self-assessment',
  components: {
    CustomTable
  },
  data() {
    return {
      activeName: 'second',
      ctitle: '',
      tabs: tabs,
      tableItems: tabsData15,
      thead: [
        {
          alias: 'title',
          title: '考核分类',
          width: '11%',
          html: true
        },
        {
          alias: 'khxm',
          title: '考核项目',
          width: '12%'
        },
        {
          alias: 'khbz',
          title: '考核标准',
          html: true,
          width: '21%'
        },
        {
          alias: 'score',
          title: '分值(分)',
          width: '8%'
        },
        {
          alias: 'scoreGet',
          title: '评分(分)',
          width: '8%'
        }
      ]
    }
  },
  methods: {
    handleClick(target) {
      if (target.index === '0') {
        this.tableItems = tabsData15
      } else if (target.index === '1') {
        this.tableItems = tabsData16
      }
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
