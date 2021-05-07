<template>
  <div>
    <h1>Hello Page ---- view at111222</h1>
    <el-button 
      type="primary" 
      @click="testClick">主要按钮
    </el-button>
    <el-row>
      <el-col :span="10">
        <el-input
          type="textarea"
          :autosize="{ minRows: 50, maxRows: 60 }"
          placeholder="请输入内容"
          v-model="textareaInput"
          @input="inputInput"
        >
        </el-input>
      </el-col>
      <el-col :span="1">
        <i class="el-icon-right"></i>
      </el-col>
      <el-col :span="10">
        <el-table
          :data="tableData"
          style="width: 100%"
          border
          stripe
          :row-style="tableRowStyle"
          :header-cell-style="tableHeaderColor"
        >
          <el-table-column prop="number" label="学号" width="80">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="80">
          </el-table-column>
          <el-table-column width="100" prop="degree" label="成绩">
          </el-table-column>
          <el-table-column width="100" prop="grade" label="排名">
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>


  <script>
import { getList } from "@/api/student";
export default {
  data() {
    return {
      tableData: [
        {
          number: "10",
          name: "王小虎",
          degree: "100",
          grade: "1",
        },
        {
          number: "10",
          name: "王小虎",
          degree: "100",
          grade: "1",
        },
        {
          number: "10",
          name: "王小虎",
          degree: "100",
          grade: "1",
        },
        {
          number: "10",
          name: "王小虎",
          degree: "100",
          grade: "1",
        },
      ],
      textareaInput: "1 2\n2 3\n4 5",
      stuObj:[]
    };
  },
  created() {
      this.testClick()
  },
  methods: {
    
    //设置表格行的样式
    tableRowStyle({ row, rowIndex }) {
      return "background-color:pink;font-size:15px;";
    },
    //设置表头行的样式
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      return "background-color:lightblue;color:#fff;font-wight:500;font-size:20px;text-align:center";
    },
    inputInput(value) {
      let ti = this.textareaInput.split("\n");
      console.log("I am input" + ti.length);
      let td = [];
      for (let i = 0; i < ti.length; i++) {
        let tr = ti[i].replace(/\t/g, " ").split(" ");
        td[i] = {
          number: tr[0],
          degree: tr[1],
          name: this.stuObj[tr[0]],
          // degree: '100',
          // grade: '1',
        };
        td.sort((a,b)=>{
          return parseInt(b.degree) - parseInt(a.degree)
        });
        let grade = 1
        let degree = td[0].degree
        for(let i=0; i<td.length; i++) {
            if(parseInt(degree) == parseInt(td[i].degree)) {
                td[i].grade=grade
            } else if(parseInt(degree) > parseInt(td[i].degree)) {
                degree = td[i].degree
                grade = i+1
                td[i].grade=grade
            } 
        }
      }
      this.tableData = td;
    },
    testClick() {
      getList().then((response) => {
        let students = response.data.students
        let studentsLenth = students.length
        let stuObj = [];
        for(let i=0 ;i<studentsLenth; i++) {
            stuObj[students[i].id] = students[i].name
        }
        this.stuObj = stuObj
      });
    },
  },
};
</script>

  <style scoped>
</style>
