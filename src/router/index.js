import Vue from 'vue'
import Router from 'vue-router'
import Performance from '@/components/Performance'
import SelfAssessment from '@/performance/self-assessment' // 乙方自评
import Dynamic from '@/performance/dynamic' // 绩效动态
import Rule from '@/performance/rule' // 考核标准
import Evaluation from '@/performance/evaluation' // 甲方评估
import Analysis from '@/performance/analysis' // 对照分析
import Report from '@/performance/report' // 考核报告

Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'list-active',
  routes: [
    {
      path: '/performance',
      name: 'perfromace',
      component: Performance,
      children: [
        {
          path: 'self-assessment',
          name: 'self-assessment',
          component: SelfAssessment
        },
        {
          path: 'dynamic',
          name: 'dynamic',
          component: Dynamic
        },
        {
          path: 'rule',
          name: 'performance-rule',
          component: Rule
        },
        {
          path: 'evaluation',
          name: 'evaluation',
          component: Evaluation
        },
        {
          path: 'analysis',
          name: 'analysis',
          component: Analysis
        },
        {
          path: 'report',
          name: 'report',
          component: Report
        }
      ]
    }]
})
