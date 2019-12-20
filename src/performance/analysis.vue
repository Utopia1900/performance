<template>
  <div style="height: 100px;">
    <el-card>
      <el-tabs @tab-click="handleClick">
        <el-tab-pane :label="iteam.className" v-for="(iteam, index) in tabs" :key="index">
          <div v-if="index===0" style="padding: 10px;">
            <el-row :gutter="10" style="text-align: center">
              <el-col :span="6" v-for="(title,index) in reportTitles" :key="index">
                <div>{{title.year}}年{{title.seasonName}}</div>
                <div>{{title.startTime}}--{{title.endTime}}</div>
                <div>
                  <span class="score-title">{{title.score}}分</span>
                  <span class="grade-title">{{title.level}}</span>
                </div>
              </el-col>
            </el-row>
            <div>
              <custom-table
                :thead="thead"
                rowspan="['className']"
                serial="true"
                serialWidth="8%"
                :tableItem="muListItems"
              />
            </div>
          </div>
          <div v-if="index===1" style="padding:10px;">
            <h1 style="text-align: center">第{{singleList.seasonName}}对照情况如下：</h1>
            <p style="text-align: center">
              {{singleList.khName}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;自评得分:
              <span
                class="evaluation-score"
              >{{singleList.zpScore}}分</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实际得分:
              <span
                class="actual-score"
              >{{singleList.khScore}}分</span>
            </p>
            <el-card v-for="(list , index) in singleList.items" :key="index" style="margin: 15px;">
              <div style class="card-item">
                <div>
                  <span class="serial-num">#{{index + 1}}</span>
                  <span class="card-score">
                    {{list.khxm}}
                    <span style="font-weight:bold">(满分{{list.fullScore}})</span>
                  </span>
                </div>
                <div>
                  <span v-html="list.zp.bz"></span>
                  <span class="evaluation-score">自评：{{list.zp.score}}&nbsp;分</span>
                </div>
                <div>
                  <span v-html="list.kp.bz"></span>
                  <span class="actual-score">实得：{{list.kp.score}}&nbsp;分</span>
                </div>
              </div>
            </el-card>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import { muList, singleList } from './mockdata/data'
import CustomTable from './components/custom-table'
export default {
  name: 'dynamic',
  components: {
    CustomTable
  },
  data() {
    return {
      tabs: [
        {
          className: '不同阶段考核对照',
          classId: '0'
        },
        {
          className: '同一阶段考核对照',
          classId: '1'
        }
      ],
      reportTitles: [], //报告标题
      thead: [],
      muList: [],
      muListItems: [],
      singleList: null
    }
  },
  methods: {
    handleClick(target) {
      if (target.index === '1') {
        this.singleList = singleList
      } else if (target.index === '0') {
        this.reportTitles = muList.titles
      }
    },
    initMulistList() {
      let reportTitles = muList.titles
      let reoportItems = muList.items
      this.reportTitles = reportTitles
      this.thead = [
        {
          alias: 'className',
          title: '分类',
          width: '10%',
          html: true
        },
        {
          alias: 'khxmName',
          title: '考核项目',
          width: '15%'
        },
        {
          alias: 'fullScore',
          title: '满分',
          width: '7%'
        }
      ]
      if (reportTitles.length !== 0) {
        for (let i = 0; i < reportTitles.length; i++) {
          this.thead.push({
            alias: `season${i}`,
            title: `${reportTitles[i].year}年${reportTitles[i].seasonName}`,
            width: `${(100 - 39) / reportTitles.length}%`,
            html: true
          })
        }
      }
      if (reoportItems.length !== 0) {
        reoportItems.forEach(item => {
          if (item.seasonScores.length !== 0) {
            item.seasonScores.forEach((scoreItem, index) => {
              var cHtml = ''
              if (scoreItem.fl === '-1') {
                cHtml = `<i style="color: #ff6565;font-size: 24px; padding-left: 10px;font-weight: bold;">↓</i>`
              }
              if (scoreItem.fl === '1') {
                cHtml = `<i style="color: #6fd8ad;font-size: 24px; padding-left: 10px; font-weight: bold;">↑</i>`
              }
              if (scoreItem.fl === '0') {
                cHtml = `<i style="color: #485fff;font-size: 24px; padding-left: 10px; font-weight: bold;">→</i>`
              }
              item[`season${index}`] = scoreItem.score + cHtml
            })
          }
        })

        let map = {},
          tmp = []
        for (let i = 0; i < reoportItems.length; i++) {
          let item = reoportItems[i]
          if (!map[item.className]) {
            tmp.push({
              className: item.className,
              subs: [item]
            })
            map[item.className] = item
          } else {
            for (let j = 0; j < tmp.length; j++) {
              let tItem = tmp[j]
              if (tItem.className === item.className) {
                tItem.subs.push(item)
                break
              }
            }
          }
        }
        this.muListItems = tmp
      }
    },
    initSingleList() {
      this.singleList = singleList
    }
  },
  mounted() {
    this.initMulistList()
    this.initSingleList()
  }
}
</script>

<style lang="scss" scoped>
.grade-title {
  color: #ff8c1d;
  font-size: 2.2rem;
}
.score-title {
  color: #ff8c1d;
  font-size: 1.5rem;
}
.serial-num {
  color: #767676;
  font-size: 3em;
  font-weight: bold;
}
.card-item {
  display: flex;
  flex-direction: row;
}
.card-item > div {
  align-items: baseline;
  flex: 1;
  border-right: 1px solid #eeeeee;
  padding-left: 20px;
}
.card-score {
  color: #767676;
  font-size: 1.2em;
  text-indent: 10px;
}
.actual-score {
  color: #ff8c1d;
  font-size: 1.8rem;
  font-weight: bold;
}
.evaluation-score {
  color: rgba(21, 139, 241, 0.87) !important;
  font-size: 1.8rem;
  font-weight: bold;
}
</style>