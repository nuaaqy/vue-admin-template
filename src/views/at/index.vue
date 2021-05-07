<template>
  <div>
    <h1> Hello Page ----  view at111222</h1>
    <el-row>
      <el-col :span="2"><div class="grid-content">111</div></el-col>
      <el-col :span="20">   
         <el-table
            :data="tableData" 
            style="width: 100%"
            border
            stripe
            :row-style="tableRowStyle"
            :header-cell-style="tableHeaderColor"
            >
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column 
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
      </el-col>
    </el-row>
  
  </div>
</template>


  <script>
    export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      },
        methods:{
            //设置表格行的样式
            tableRowStyle({row,rowIndex}){
              console.log("----------")
                return 'background-color:pink;font-size:15px;'
            },
            //设置表头行的样式
            tableHeaderColor({row,column,rowIndex,columnIndex}){
                return 'background-color:lightblue;color:#fff;font-wight:500;font-size:20px;text-align:center'

            }
        }
    }
  </script>

  <style scoped>
  .gradetable{
    text-align: center;
    border-top:solid;
    border-top-width: 1px;
    border-top-color:#cccccc;
    border-left: solid;
    border-left-width: 1px;
    border-left-color:#cccccc;
  }
  .gradetr{
    text-align: center;
    border-bottom:solid;
    border-bottom-width: 1px;
    border-bottom-color:#cccccc;
  }
  .gradetd{
    text-align: center;
    border-right:solid;
    border-right-width: 1px;
    border-right-color:#cccccc;
  }
  </style>
