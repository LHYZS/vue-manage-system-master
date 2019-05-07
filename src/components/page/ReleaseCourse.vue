<template>
    <div>
        <d2-crud
                ref="d2Crud"
                :columns="columns"
                :data="data"
                add-title="我的新增"
                :add-template="addTemplate"
                :form-options="formOptions"
                :rowHandle="rowHandle"
                @row-add="handleRowAdd"
                @row-remove="handleRowRemove"
                @cell-data-change="handleCellDataChange">
            <el-button slot="header" style="margin-bottom: 5px" @click="addRowWithNewTemplate">新增</el-button>
        </d2-crud>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    {
                        title: '开课日期',
                        key: 'date',
                        component: {
                            name: 'el-input',
                            size: 'small'
                        }
                    },
                    {
                        title: '教师',
                        key: 'name',
                        component: {
                            name: 'el-input',
                            size: 'small'
                        }
                    },
                    {
                        title: '开设课程',
                        key: 'course',
                        component: {
                            name: 'el-input',
                            size: 'small'
                        }
                    }
                ],
                data: [
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                        course: '数学',
                        showRemoveButton: true,

                    },
                    {
                        date: '2016-05-04',
                        name: '李小龙',
                        course: '英文',
                        showRemoveButton: true,
                    }
                ],
                addTemplate: {
                    date: {
                        title: '日期',
                        value: '2016-05-05'
                    },
                    name: {
                        title: '姓名',
                        value: '王小虎'
                    },
                    address: {
                        title: '地址',
                        value: '上海市普陀区金沙江路 1520 弄'
                    }
                },
                formOptions: {
                    labelWidth: '80px',
                    labelPosition: 'left',
                    saveLoading: false
                },
                rowHandle: {
                    remove: {
                        icon: 'el-icon-delete',
                        size: 'small',
                        fixed: 'right',
                        confirm: true,
                        show(index, row) {
                            if (row.showRemoveButton) {
                                return true
                            }
                            return false
                        },
                    }
                },
            }
        },
        methods: {
            handleDialogOpen({mode}) {
                this.$message({
                    message: '打开模态框，模式为：' + mode,
                    type: 'success'
                })
            },
            // 传入自定义模板的新增
            addRowWithNewTemplate() {
                this.$refs.d2Crud.showDialog({
                    mode: 'add',
                    template: {
                        date: {
                            title: '日期',
                            value: ''
                        },
                        name: {
                            title: '姓名',
                            value: ''
                        },
                        address: {
                            title: '地址',
                            value: ''
                        },
                    }
                })
            },
            handleRowAdd(row, done) {
                this.formOptions.saveLoading = true
                setTimeout(() => {
                    console.log(row)
                    this.$message({
                        message: '保存成功',
                        type: 'success'
                    });

                    // done可以传入一个对象来修改提交的某个字段
                    done({})
                    this.formOptions.saveLoading = false
                }, 300)
            },
            handleDialogCancel(done) {
                this.$message({
                    message: '取消保存',
                    type: 'warning'
                });
                done()
            },
            //删除
            handleRowRemove({index, row}, done) {
                setTimeout(() => {
                    console.log(index)
                    console.log(row)
                    this.$message({
                        message: '删除成功',
                        type: 'success'
                    })
                    done()
                }, 300)
            },
            //表格内编辑
            handleCellDataChange({rowIndex, key, value, row}) {
                console.log(rowIndex)
                console.log(key)
                console.log(value)
                console.log(row)
            }
        }
    }
</script>
