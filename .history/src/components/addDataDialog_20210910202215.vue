<template>
  <div>
    <!-- 添加模板 -->
    <el-dialog
      :title="dialogData.dialogType==='add'?'添加数据':dialogData.dialogType==='edit'?'修改数据':'提交送审'"
      :visible.sync="dialogFormVisibleadd"
      :modal-append-to-body="false"
      :close-on-click-modal="false"
      :show-close="false"
      top="12vh"
      center
      width="35%"
    >
      <el-form
        :model="dialogData.formList"
        :rules="rulesData"
        ref="form"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item
          v-for="(item, index) in dialogData.dataTableList"
          :key="index"
          :label="item.label"
          :prop="item.dataName"
        >
          <el-input
            v-model="dialogData.formList[item.dataName]"
            style="width:400px"
            v-if="item.putType === 'input'"
          ></el-input>

          <el-date-picker
            v-model="dialogData.formList[item.dataName]"
            type="date"
            style="width: 150px;"
            v-if="item.putType === 'date'"
            placeholder="选择日期">
          </el-date-picker>

            <el-select
              v-model.number="dialogData.formList[item.dataName]"
              placeholder="请选择类型"
              v-if="item.putType === 'select'"
            >
              <el-option
                :label="dat"
                :value="dat"
                v-for="(dat, key) in item.selectData"
                :key="key"
              ></el-option>
            </el-select>

          <el-input-number
            v-model="dialogData.formList[item.dataName]"
            :step="50"
            :min="50"
            :max="999999999"
            label="描述文字"
            v-if="item.putType === 'num'"
          ></el-input-number>

          <el-input
            type="age"
            v-model.number="dialogData.formList[item.dataName]"
            style="width:400px"
            v-if="item.putType === 'numput'"
          ></el-input>

          <el-input
            type="age"
            auto-complete="off"
            style="width:400px"
            v-model.number="dialogData.formList[item.dataName]"
            disabled
            v-if="item.putType === 'disput'"
          ></el-input>

          <el-input
            type="textarea"
            v-model.number="dialogData.formList[item.dataName]"
            auto-complete="off"
            style="width: 400px"
            v-if="item.putType === 'textarea'"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleadd = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('form')">{{dialogData.dialogType==='add'?'添 加':dialogData.dialogType==='edit'?'修 改':'提交送审'}}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
/* post请求
类型 putType： textarea disput numput num select date input
*/
import { rulesData } from '../assets/data/rules'
export default {
  props: {
    dialogData: Object
  },
  data () {
    return {
      rulesData,
      dialogFormVisibleadd: false
    }
  },
  methods: {
    submitForm (formName) {
      this.flag = true

      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$confirm(this.dialogData.dialogType === 'add' ? '是否确定保存并添加此条数据?' : this.dialogData.dialogType === 'edit' ? '是否确定保存并修改此条数据' : '是否确定保存并提交此条数据', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.adddata()
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    async adddata () {
      var data = {}
      for (const i in this.dialogData.formList) {
        data[i] = this.dialogData.formList[i]
      }
      console.log(data, 'datadatadata')
      // $ajax请求
      const url = this.dialogData.url
      await this.$ajax.post(url, data, {}).then(res => {
        const { data } = res
        if (data.code === '101') {
          this.$message({
            type: 'success',
            message: this.dialogData.dialogType === 'add' ? '添加成功!' : this.dialogData.dialogType === 'edit' ? '修改成功' : '送审成功'
          })
          this.$emit('updata')
          this.dialogFormVisibleadd = false
        } else {
          this.$message.error(this.dialogData.dialogType === 'add' ? '错了哦，添加失败' : this.dialogData.dialogType === 'edit' ? '错了哦，修改失败' : '错了哦，送审失败')
        }
      }).catch(() => {
        this.$message({
          type: 'error',
          message: '网络异常'
        })
      })
    }
  }
}
</script>

<style></style>
