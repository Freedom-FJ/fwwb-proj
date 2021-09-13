export const addEditList = {
  needList: {
    dataTableList: [
      {
        label: '编号ID',
        putType: 'disput',
        dataName: 'needid'
      },
      {
        label: '需求单名',
        putType: 'input',
        dataName: 'needtitle'
      },
      {
        label: '类型',
        putType: 'select',
        selectData: ['10000', '996', '007', '123'],
        dataName: 'itemtype'
      },
      {
        label: '类型ID',
        putType: 'select',
        selectData: ['10000', '996', '007', '123'],
        dataName: 'itemid'
      },
      { label: '数量', putType: 'num', dataName: 'neednum' },
      { label: '需求日期', putType: 'date', dataName: 'needday' },
      { label: '负责人部门号', putType: 'disput', dataName: 'neederid' },
      { label: '详情', putType: 'textarea', dataName: 'comment' }
    ],
    formList: {
      needid: '',
      needtitle: '',
      itemtype: '',
      itemid: '',
      neednum: '',
      needday: '',
      neederid: '',
      comment: '',
      uptype: 0
    },
    url: {
      add: '/web/saveUser',
      edit: '/webbuy/updateBuy',
      approval: '/webbuy/updateBuy'
    }
  },
  buyList: {
    dataTableList: [
      {
        label: '编号ID',
        putType: 'disput',
        dataName: 'buyid'
      },
      {
        label: '购买单名',
        putType: 'input',
        dataName: 'buytitle'
      },
      {
        label: '日期',
        putType: 'date',
        dataName: 'btime'
      },
      {
        label: '类型',
        putType: 'select',
        selectData: ['10000', '996', '007', '123'],
        dataName: 'itemtype'
      },
      {
        label: '类型ID',
        putType: 'select',
        selectData: ['10000', '996', '007', '123'],
        dataName: 'itemid'
      },
      {
        label: '数量',
        putType: 'num',
        dataName: 'num'
      },
      {
        label: '购买编号',
        putType: 'numput',
        dataName: 'buyerid'
      },
      {
        label: '负责人编号',
        putType: 'disput',
        dataName: 'neederid'
      }
    ],
    formList: {
      buyid: '',
      buytitle: '',
      btime: '',
      itemtype: '',
      itemid: '',
      num: '',
      buyerid: '',
      neederid: 15
    },
    url: {
      add: '/webbuy/addBuy',
      edit: '/webbuy/updateBuy',
      approval: ''
    }
  },
  department: {
    dataTableList: [
      {
        label: '部门姓名',
        putType: 'input',
        dataName: 'departmentname'
      },
      {
        label: '部门编号',
        putType: 'numput',
        dataName: 'departmentid'
      }
    ],
    formList: {
      departmentname: '',
      departmentid: ''
    },
    url: {
      add: '/webbuy/addBuy',
      edit: '/webbuy/updateBuy',
      approval: ''
    }
  }

}
