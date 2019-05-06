<template>
  <div>在线选课</div>
  <!--<div>-->
    <!--<el-form ref="form" :model="form" label-width="50px">-->
      <!--<el-form-item label="姓名">-->
        <!--<el-input v-model="form.name"></el-input>-->
      <!--</el-form-item>-->
      <!--<el-form-item label="性别">-->
        <!--<el-input v-model="form.sex"></el-input>-->
      <!--</el-form-item>-->
      <!--<el-form-item label="年龄">-->
        <!--<el-input v-model="form.age"></el-input>-->
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
          "name": '',
          "sex": '',
          "age": '',
          "addTime": '',
        }
      }
    }
  }
</script>

<style scoped>

</style>
