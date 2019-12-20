<template>
  <div style="height:100px;">
    <el-card ctitle="考核标准">
      <div class="h-100 p-3">
        <div class="row">
          <div class="col-md-3">
            <tree :nodes="treeNodes" :setting="setting" @onClick="checkItem" />
            <div style="margin-top: 200px;">
              <el-row>
                <el-button type="success" plain @click="addCategory">添加</el-button>
                <el-button type="warning" plain @click="editCategory">修改</el-button>
                <el-button type="danger" plain @click="removeCategory">删除</el-button>
              </el-row>
            </div>
          </div>
          <div class="h-100 col-md-9">
            <div class="row w-100 pp-3 position-relative">
              <div class="h-100 table-responsive position-relative" style="overflow:auto;">
                <custom-table
                  :thead="thead"
                  rowspan="['title']"
                  serial="true"
                  action="true"
                  serialWidth="8%"
                  actionWidth="10%"
                  :tableItem="tableItems"
                ></custom-table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-card>
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible">
      <div class="dialog-content">
        <label for>分类名称：</label>
        <el-input v-model="category" placeholder="请输入内容"></el-input>
      </div>
      <div class="dialog-content">
        <label for>权重：</label>
        <el-input v-model="weight" placeholder="请输入内容"></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import CustomTable from './components/custom-table'
import tree from 'vue-giant-tree'
import { formatTreeData } from './utils'

// import { getPaStandardClassTree, getPaStandardBaseList } from './api'

import { standardTree, standardList } from './mockdata/data' // mock-data
export default {
  name: 'rule',
  components: {
    CustomTable,
    tree
  },
  data() {
    return {
      treeNodes: null,
      setting: {
        check: {
          enable: true,
          autoCheckTrigger: true,
          chkStyle: 'checkbox',
          chkboxType: { Y: 'ps', N: 'ps' }
        }
      },
      checkedItem: null, // 叶子节点
      dialogVisible: false,
      category: '', // 分类名称
      weight: '', // 权重
      dialogTitle: '',
      list: null,
      khSttdrcd: 2,
      tableItems: [],
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
          title: '分值',
          width: '8%'
        },
        {
          alias: 'weight',
          title: '权重',
          width: '8%'
        },
        {
          alias: 'createdTime',
          title: '创建时间',
          width: '11%'
        },
        {
          alias: 'creatorName',
          title: '创建者',
          width: '11%'
        }
      ]
    }
  },
  computed: {
    message() {
      return ''
    }
  },
  created() {},
  methods: {
    // 初始化表格数据
    initTable() {
      // getPaStandardBaseList(res => {
      //   this.tableItems = res.data.data;
      // })

      /**
       * mock-data
       * */
      this.tableItems = standardList
    },
    // 初始化树状结构
    initTreeData() {
      // getPaStandardClassTree(res => {
      //   let result = res.data;
      //   // this.treeNodes = result.data
      //   if (result.code === 1) {
      //     for (let i = 0; i < result.data.length; i++) {
      //       result.data[i].cName = result.data[i].name;
      //       result.data[i].name =
      //         result.data[i].name +
      //         '(' +
      //         result.data[i].properties.total +
      //         '分)';
      //       result.data[i].checked = true;
      //     }
      //     this.treeNodes = formatTreeData(result.data);
      //   }
      // })

      /**
       * mock-data
       * */
      this.treeNodes = formatTreeData(standardTree)
    },
    addCategory() {
      // 添加考核分类
      this.dialogTitle = '添加考核项目'
      this.weight = ''
      this.category = ''
      this.dialogVisible = !this.dialogVisible
    },
    removeCategory() {
      // 删除考核分类
    },
    editCategory() {
      // 编辑考核分类
      if (!this.checkedItem) {
        this.$message({ message: '请先选择要修改的考核项目', type: 'warning' })
      } else {
        this.dialogTitle = '修改考核项目'
        this.dialogVisible = !this.dialogVisible
        this.weight = this.checkedItem.properties.weight
        this.category = this.checkedItem.name
      }
    },
    checkItem(e, treeId, treeNode) {
      this.checkedItem = treeNode
    }
  },
  mounted() {
    this.initTable()
    this.initTreeData()
  }
}
</script>

<style lang='scss' scoped>
.h-100 {
  height: 100% !important;
}
.position-relative {
  height: 100% !important;
}
.table-relative {
  display: block;
  width: 100%;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.p-3 {
  padding: 1rem !important;
}

.col-md-3 {
  -ms-flex: 0 0 25%;
  -webkit-box-flex: 0;
  flex: 0 0 25%;
  max-width: 25%;
}
.col-md-9 {
  -ms-flex: 0 0 25%;
  -webkit-box-flex: 0;
  flex: 0 0 75%;
  max-width: 75%;
}
.w-100 {
  width: 100% !important;
}
.pd-3 {
  padding-bottom: 1rem !important;
}
.dialog-content {
  padding: 10px 20px;
}
</style>
