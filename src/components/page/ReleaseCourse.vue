<template>
  <div>发布课程</div>
  <!--<div>-->
    <!--<el-form ref="form" :model="form" label-width="50px">-->
      <!--<el-form-item label="学号">-->
        <!--<el-input v-model="form.id"></el-input>-->
      <!--</el-form-item>-->
      <!--<el-form-item label="姓名">-->
        <!--<el-input v-model="form.name"></el-input>-->
      <!--</el-form-item>-->
      <!--<el-form-item label="性别">-->
        <!--<el-input v-model="form.sex"></el-input>-->
      <!--</el-form-item>-->
      <!--<el-form-item label="年龄">-->
        <!--<el-input v-model="form.age"></el-input>-->
      <!--</el-form-item>-->
      <!--<el-form-item label="专业">-->
        <!--<el-input v-model="form.object"></el-input>-->
      <!--</el-form-item>-->
      <!--<el-form-item label="班级">-->
        <!--<el-input v-model="form.class"></el-input>-->
      <!--</el-form-item>-->
      <!--<el-form-item label="添加时间">-->
        <!--<el-input v-model="form.addTime"></el-input>-->
      <!--</el-form-item>-->
    <!--</el-form>-->
    <!--<span slot="footer" class="dialog-footer">-->
      <!--<el-button type="primary" @click="saveEdit">新增</el-button>-->
      <!--<el-button @click="editVisible = false">取 消</el-button>-->
    <!--</span>-->
  <!--</div>-->
</template>

<script>
  export default {
    data() {
      return {
        form: {
          "id": '',
          "name": '',
          "sex": '',
          "age": '',
          "object": '',
          "class": '',
          "addTime": '',
        }
      }
    }
  }
</script>

<style scoped>

</style>
