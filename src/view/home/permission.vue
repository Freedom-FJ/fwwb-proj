<template>
  <div class="right-body" id="body">
    <div class="overbox">
      <div class="bodyheart">
        <div class="body-top">
          <div class="bodytop-heart">
            <el-row>
              <el-col :span="8"
                ><img src="../../assets/img/查询数据列表.png" />
                <span>权限列表</span></el-col
              >
              <el-col :span="8">
                <div class="searchfa">
                  <!-- 搜索框 -->
                  <div class="search">
                    <form v-on:submit.prevent="search">
                      <input
                        type="text"
                        placeholder="请输入名称"
                        @change="search"
                        v-model="params.dname"
                      />
                      <button type="button"></button>
                    </form>
                  </div>
                </div>
              </el-col>
              <el-col :span="8" v-if="$store.state.permissionName.includes('admin:addPerm')" class="topRightBox">
                <button class="bodyadd" @click="gethomeAdd()">
                  <i class="el-icon-plus"></i>添加
                </button></el-col
              >
            </el-row>
          </div>
        </div>
        <div
          class="tablebody"
          v-loading="loading2"
          element-loading-text="拼命加载中"
        >
          <div class="mytable">
            <div class="table-top">
                <div v-for="(item,index) in tableText.tableTitle"
                  :key="index"
                  colspan="1"
                  rowspan="1"
                  :class="
                  item === '描述'?'htop-th3'
                  :item === '需求单名'?'htop-th7'
                  :'htop-th1'">
                  <div class="cell">{{item}}</div>
                </div>
            </div>
            <vNone v-if="!list.length" />
            <div class="tbody" >
              <div class="bodyLine" v-for="(item, key) in list" :key="key">

                <div v-for="(data,index) in tableText.tableBody"
                :key="index"
                :class="{'body-td4': data==='comment'}" >

                  <div class="cell" v-if="data!=='opetation' && data!=='isDisabled'">
                    {{data==='index' ? key + 1 :item[data] }}
                  </div>
                  <div class="cell" v-if="data==='isDisabled'">
                    <el-switch
                      :name="item.id.toString()"
                      v-model="item.isDisabled"
                      active-color="#ff4949"
                      inactive-color="#13ce66"
                      @change="setStatus(item.id,key)"
                    >
                    </el-switch>
                    {{item.isDisabled?  '禁用':'正常'}}
                  </div>

                  <div class="cell" v-if="data==='opetation'">
                    <button class="modify" @click="seeData(item)">编辑</button>
                    <button class="delete" @click="deletedata({id: item.id},'home/permission/deletePerm')">删除</button>
                  </div>
                </div>

              </div >
            </div>
          </div>

          <vDialog ref="addDialog"
            :dialogFormShow="dialogFormShow"
            @updata="search"
            :editDisabled="editDisabled"
            @closeaddDialog="closeaddDialog"
            :currentList="currentList"
            :openType="openType"
            name="permissionList"
        >
        </vDialog>

        </div>
        <div class="table-bottom">
          <!-- 底部页码功能 -->
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="params.page"
            :page-sizes="[5, 10]"
            :page-size="params.limit"
            layout="total, sizes, prev, pager, next, jumper"
            :total="params.total"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import homeMix from '../../assets/mixins/home-mixins'

export default {
  mixins: [homeMix],
  data () {
    return {
      editDisabled: ['id'],
      tableText: '',
      dialogFormShow: false,
      list: [],
      loading2: true
    }
  },
  created () {
    this.tableText = this.$tables.permList
  },
  mounted () {
    this.$emit('changeRouterIndex', this.$route.query.routerIndex)
    this.getSearchUrl()
    // 调用方法获取后端数据
    this.search()
  },
  methods: {
    /**
     * @desc 请求用户数据
     */
    async search () {
      await this.$api(this.searchUrl, {
        params: {
          page: this.params.page, // 传递当前是第几页参数
          limit: this.params.limit, // 传递每页显示多少条记录参数
          searchName: this.params.dname, // 传递搜索参数
          selectName: this.params.selectValue // 筛选参数
        }
      }).then((res) => {
        this.list = res.list || [] // 获取里面的data数据
        this.getEmitData()
        this.params.total = res.count // 获取后台传过来的总数据条数
        this.params.page = res.page // 将后端的当前页反传回来
        this.loading2 = false
      }).catch(() => {
        this.loading2 = false
      })
    },
    /**
     * @desc 更改状态
     */
    async setStatus (id, key) {
      const url = 'home/permission/updatePermissionStatus'
      const data = {
        id: id,
        isDisabled: this.list[key].isDisabled ? 1 : 0
      }
      await this.$api(url, data).then(() => {
        this.$message.success('更改状态成功')
      }).catch(() => {
        setTimeout(() => {
          this.list[key].isDisabled = !this.list[key].isDisabled
        }, 400)
      })
    },
    /**
     * @desc 初始化请求得到的list里的isDisabled，把1变成true，0变成false
     */
    getEmitData () {
      this.list.forEach(function (item) {
        if (item.isDisabled) {
          item.isDisabled = true
        } else {
          item.isDisabled = false
        }
      })
    },
    /**
     * @desc 添加方法打开界面
     */
    gethomeAdd () {
      this.openType = 'add'
      this.dialogFormShow = true
    },
    /**
     * @desc 请求列表数据
     */
    getSearchUrl () {
      this.searchUrl = 'home/permission/listPerm'
    }
  }
}
</script>
<style lang="less" scoped>
@import url("../../assets/less/right-table.less");

.searchfa {
  margin-left: 35px;
}
.search {
  margin-left: 5px;
  float: left;
  height: 30px;
  input {
    float: left;
    border: none;
    outline: none;
    width: 95.5%;
    height: 30px;
    padding-left: 13px;
    border: 2px solid #dadce0;
    border-right: 0;
    border-radius: 5px;
    color: black;
    font-size: 16px;
  }
  button {
    float: left;
    border: none;
    outline: none;
    height: 30px;
    width: 45px;
    cursor: pointer;
    position: absolute;
    top: 1.6px;
    right: 0;
    background: #dadce0;
    border-radius: 0 5px 5px 0;
    &:hover {
      background-color: #c8c8c8;
      box-shadow: 0 0 3px#c8c8c8;
    }
    &:active {
      padding-left: 1px;
      padding-top: 1px;
      background: #dadce0;
    }
    &:before {
      content: "\f002";
      font-family: FontAwesome;
      font-size: 16px;
      color: #f9f0da;
    }
  }
}
</style>
