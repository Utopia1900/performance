<template>
  <table class="table">
    <thead>
      <tr>
        <th v-if="serial" :style="{width: !!serialWidth ? serialWidth: 'auto'}">序号</th>
        <th
          v-for="(item, index) in thead"
          :key="index"
          :style="{width:item.width !== undefined && item.width !== '' ? item.width : 'auto'}"
        >{{item.title}}</th>
        <th v-if="action" :style="{width: !!actionWidth ? actionWidth: 'auto'}">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row,index) in itemsList" :key="row.id">
        <td v-if="serial">{{index+1}}</td>
        <td
          v-for="item in row.subHead"
          :key="item.id"
          :rowspan="setRowspan(item.alias,row.rowsSpan)"
        >
          <div v-if="item.html == true" v-html="row[item.alias]" class="has-html"></div>
          <div v-else>{{row[item.alias]}}</div>
        </td>
        <td v-if="action" class="position-relative">
          <div>
            <span
              class="app-actions"
              v-for="v in row.opts"
              :key="v.id"
              style="white-space:nowrap !important;white-space:nowrap !important;word-wrap:break-word !important;"
            >
              <a v-if="v === 'pf'" href="javascript:;" @click="log(row)">评分</a>
              <img v-if="v === 'view'" title="查看" src alt @click="log(row)" />
              <img v-if="v === 'edit'" title="修改" src alt @click="log(row)" />
              <img v-if="v === 'add'" title="新增" src alt @click="log(row)" />
              <img v-if="v === 'del'" title="删除" src alt @click="log(row.id)" />
            </span>
          </div>
        </td>
      </tr>

      <tr v-if="itemsList.length == 0 && action && serial">
        <td :colspan="thead.length+1" class="text-center text-danger">暂无数据</td>
      </tr>
      <tr v-else-if="itemsList.length == 0 && serial && action">
        <td :colspan="thead.length+2" class="text-center text-danger">暂无数据</td>
      </tr>
      <tr v-else-if="itemsList.length == 0 && serial && !action">
        <td :colspan="thead.length+1" class="text-center text-danger">暂无数据</td>
      </tr>
      <tr v-else-if="itemsList.length == 0 && !action && !serial">
        <td :colspan="thead.length" class="text-center text-danger">暂无数据</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'custom-table',
  props: [
    'thead', // 表头数据
    'tableItem', // 表格数据源
    'serial', // 是否设置序号列
    'serialWidth', // 序号列宽度
    'action', // 是否设置操作列
    'actionWidth', // 操作列宽度
    'rowspan' // 需要跨行的字段
  ],
  computed: {
    itemsList() {
      let newItems = []
      let that = this
      let self = this.tableItem
      console.log('self', self)
      for (let i = 0; i < self.length; i++) {
        if (self[i].subs !== undefined && self[i].subs.length > 0) {
          for (let c = 0; c < self[i].subs.length; c++) {
            if (self[i].subs.length > 1 && c === 0) {
              self[i].subs[c].rowsSpan = self[i].subs.length
              self[i].subs[c].subHead = that.thead
            } else if (self[i].subs.length > 1 && c !== 0) {
              self[i].subs[c].rowsSpan = null
              self[i].subs[c].subHead = that.getChildHead()
            } else {
              self[i].subs[c].subHead = that.thead
            }

            self[i].subs[c].title = `${self[i].title}</br><span class="pl-3">(${self[i].total})</span>`
            self[i].subs[c].mainInfo = {
              id: self[i].id,
              title: self[i].title,
              total: self[i].total
            }
            newItems.push(self[i].subs[c])
          }
        }
      }
      return newItems
    }
  },
  methods: {
    log(arg) {
      console.log('arg in action', arg)
    },
    setRowspan(alias, span) {
      if (this.rowspan.indexOf(alias) !== -1) {
        return span
      }
      return null
    },
    // 获取子表头：
    getChildHead() {
      let newArray = []
      let thead = this.thead
      for (let i = 0; i < thead.length; i++) {
        if (this.rowspan.indexOf(thead[i].alias) !== -1) {
          continue
        }
        if (thead[i].html !== undefined && thead[i].html === true) {
          thead[i].html = true
        } else {
          thead[i].html = false
        }
        newArray.push(thead[i])
      }
      return newArray
    }
  }
}
</script>

<style lang="scss" scoped>
.table {
  margin-bottom: 0;
  border-collapse: collapse;
}
.app-actions img {
  width: 20px;
  height: 20px;
  margin-left: 5px;
  margin-right: 5px;
  display: inline-block;
  cursor: pointer;
}
table,
td,
th {
  border: 1px solid #e9e9e9;
  vertical-align: center !important;
}
.table thead th {
  padding: 0.75em;
  background-color: rgba(21, 139, 241, 0.87) !important;
  color: #fff;
}
.table th,
.table td,
p {
  /*    white-space:nowrap !important;*/
  vertical-align: middle !important;
  /*    word-wrap:break-word !important;*/
}

.has-html {
  text-align: left;
}

p {
  margin-bottom: 0;
}
.table td {
  font-size: 13px;
  color: #676b77;
  padding: 0.72rem;
}
/**
    white-space:nowrap !important;
     */
.table th {
  font-size: 13px;
  color: #333333;
  font-weight: bold;
}
.table tbody tr:hover {
  background: #ecf7ff;
}
.table tbody tr:hover td {
  color: #333333;
}
</style>
