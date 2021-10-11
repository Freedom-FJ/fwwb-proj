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
        putType: 'selectItem',
        selectData: ['钢铁', '熟料', '橡胶', '泡沫'],
        dataName: 'itemtype'
      },
      { label: '数量', putType: 'num', dataName: 'neednum' },
      { label: '需求日期', putType: 'date', dataName: 'needday' },
      { label: '申请人编号', putType: 'disput', dataName: 'neederid' },
      { label: '详情', putType: 'textarea', dataName: 'comment' }
    ],
    formList: {
      needid: '',
      needtitle: '',
      itemtype: '',
      itemid: '',
      neednum: '',
      needday: '',
      unit: '',
      neederid: '',
      comment: '',
      uptype: ''
    },
    url: {
      add: 'home/need/addNeed',
      edit: 'home/need/editNeed',
      approval: 'home/need/editNeed',
      startApproval: 'home/need/approvalNeed',
      upApproval: 'home/need/completeprocess'
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
        putType: 'selectItem',
        selectData: ['10000', '996', '007', '123'],
        dataName: 'itemtype'
      },
      {
        label: '数量',
        putType: 'num',
        dataName: 'num'
      },
      {
        label: '购买专员编号',
        putType: 'disput',
        dataName: 'buyerid'
      },
      {
        label: '需求专员编号',
        putType: 'numput',
        dataName: 'neederid'
      },
      {
        label: '订单码',
        putType: 'numput',
        dataName: 'auditid'
      },
      {
        label: '详情',
        putType: 'textarea',
        dataName: 'comment'
      }
    ],
    formList: {
      buyid: '',
      buytitle: '',
      btime: '',
      itemtype: '',
      itemid: '',
      num: '',
      auditid: '',
      buyerid: '',
      neederid: '',
      comment: '',
      uptype: ''
    },
    url: {
      add: 'home/buy/addBuy',
      edit: 'home/buy/updateBuy',
      approval: 'home/buy/updateBuy',
      startApproval: 'home/buy/startBuyAct',
      upApproval: 'home/buy/completeprocess'
    }
  },
  department: {
    dataTableList: [
      {
        label: '部门名称',
        putType: 'input',
        dataName: 'departmentname'
      },
      {
        label: '部门编号',
        putType: 'numput',
        dataName: 'departmentid'
      },
      {
        label: '部门描述',
        putType: 'textarea',
        dataName: 'detail'
      }
    ],
    formList: {
      departmentname: '',
      departmentid: '',
      detail: ''
    },
    url: {
      add: 'home/department/addDepart',
      edit: 'home/department/editDepart'
    }
  },
  itemList: {
    dataTableList: [
      {
        label: '类型ID',
        putType: 'input',
        dataName: 'itemid'
      },
      {
        label: '种类',
        putType: 'input',
        dataName: 'itemtype'
      },
      {
        label: '库存',
        putType: 'num',
        dataName: 'stock'
      },
      {
        label: '单位',
        putType: 'input',
        dataName: 'unit'
      },
      {
        label: '详情',
        putType: 'textarea',
        dataName: 'comment'
      }
    ],
    formList: {
      itemid: '',
      itemtype: '',
      stock: '',
      comment: '',
      unit: ''
    },
    url: {
      add: 'home/item/additem',
      edit: 'home/item/editItem',
      approval: ''
    }
  },
  userList: {
    dataTableList: [
      {
        label: '编号',
        putType: 'disput',
        dataName: 'userid'
      },
      {
        label: '账号',
        putType: 'input',
        dataName: 'username'
      },
      {
        label: '姓名',
        putType: 'input',
        dataName: 'realname'
      },
      {
        label: '电话',
        putType: 'numput',
        dataName: 'telNum'
      },
      // {
      //   label: '部门编号',
      //   putType: 'select',
      //   selectData: ['10000', '10001', '10010', '10020'],
      //   dataName: 'departmentid'
      // },
      {
        label: '员工号',
        putType: 'numput',
        dataName: 'employeeid'
      }
    ],
    formList: {
      userid: '',
      username: '',
      realname: '',
      telNum: '',
      departmentid: '',
      employeeid: ''
    },
    url: {
      add: 'home/user/AddUser',
      edit: 'home/user/editUser',
      approval: ''
    }
  }
}
