export const standardTree = [
  {
    id: '2c9235aa6e936281016e9386beb00015',
    pId: null,
    name: '浦东污水处理厂考核评分表',
    iconSkin: null,
    open: false,
    root: false,
    isParent: false,
    nocheck: false,
    checked: false,
    properties: {
      total: 103.0,
      weight: 0.7,
      classLevel: 1
    }
  },
  {
    id: '2c9235aa6e936281016e938775fe0017',
    pId: '2c9235aa6e936281016e9386beb00015',
    name: '运行管理',
    iconSkin: null,
    open: false,
    root: false,
    isParent: false,
    nocheck: false,
    checked: false,
    properties: {
      total: 17.0,
      weight: 0.7,
      classLevel: 2
    }
  },
  {
    id: '2c9235aa6e93898e016e93b9bb610018',
    pId: '2c9235aa6e936281016e93871d780016',
    name: '生产资料考核',
    iconSkin: null,
    open: false,
    root: false,
    isParent: false,
    nocheck: false,
    checked: false,
    properties: {
      total: 10.0,
      weight: 0.3,
      classLevel: 2
    }
  },
  {
    id: '2c9235aa6e936281016e9387c0c90018',
    pId: '2c9235aa6e936281016e9386beb00015',
    name: '维修养护',
    iconSkin: null,
    open: false,
    root: false,
    isParent: false,
    nocheck: false,
    checked: false,
    properties: {
      total: 70.0,
      weight: 0.7,
      classLevel: 2
    }
  },
  {
    id: '2c9235aa6e93898e016e93ba031d0019',
    pId: '2c9235aa6e936281016e93871d780016',
    name: '现场运营质量考核',
    iconSkin: null,
    open: false,
    root: false,
    isParent: false,
    nocheck: false,
    checked: false,
    properties: {
      total: 60.0,
      weight: 0.3,
      classLevel: 2
    }
  },
  {
    id: '2c9235aa6e936281016e93871d780016',
    pId: null,
    name: '配套管网及污水提升泵站考核评分表',
    iconSkin: null,
    open: false,
    root: false,
    isParent: false,
    nocheck: false,
    checked: false,
    properties: {
      total: 103.0,
      weight: 0.3,
      classLevel: 1
    }
  },
  {
    id: '2c9235aa6e93898e016e93b413ad000e',
    pId: '2c9235aa6e936281016e9386beb00015',
    name: '尾水生态砾床',
    iconSkin: null,
    open: false,
    root: false,
    isParent: false,
    nocheck: false,
    checked: false,
    properties: {
      total: 10.0,
      weight: 0.7,
      classLevel: 2
    }
  },
  {
    id: '2c9235aa6e93898e016e93ba51ed001a',
    pId: '2c9235aa6e936281016e93871d780016',
    name: '问题整改及热线处置情况考核',
    iconSkin: null,
    open: false,
    root: false,
    isParent: false,
    nocheck: false,
    checked: false,
    properties: {
      total: 10.0,
      weight: 0.3,
      classLevel: 2
    }
  },
  {
    id: '2c9235aa6e93898e016e93ba9467001b',
    pId: '2c9235aa6e936281016e93871d780016',
    name: '应急抢险考核',
    iconSkin: null,
    open: false,
    root: false,
    isParent: false,
    nocheck: false,
    checked: false,
    properties: {
      total: 20.0,
      weight: 0.3,
      classLevel: 2
    }
  },
  {
    id: '2c9235aa6e93898e016e93b671e00013',
    pId: '2c9235aa6e936281016e9386beb00015',
    name: '社会影响',
    iconSkin: null,
    open: false,
    root: false,
    isParent: false,
    nocheck: false,
    checked: false,
    properties: {
      total: 3.0,
      weight: 0.7,
      classLevel: 2
    }
  },
  {
    id: '2c9235aa6e93898e016e93bac886001c',
    pId: '2c9235aa6e936281016e93871d780016',
    name: '社会影响',
    iconSkin: null,
    open: false,
    root: false,
    isParent: false,
    nocheck: false,
    checked: false,
    properties: {
      total: 3.0,
      weight: 0.3,
      classLevel: 2
    }
  },
  {
    id: '2c9235aa6e93898e016e93b5f8f60012',
    pId: '2c9235aa6e936281016e9386beb00015',
    name: '应急预案',
    iconSkin: null,
    open: false,
    root: false,
    isParent: false,
    nocheck: false,
    checked: false,
    properties: {
      total: 3.0,
      weight: 0.7,
      classLevel: 2
    }
  }
]

export const standardList = [
  {
    id: '2c9235aa6e936281016e938775fe0017',
    title: '运行管理',
    total: 17.0,
    subs: [
      {
        id: '2c9235aa6e936281016e938859180019',
        khxm: '维护人员配备',
        khxmId: null,
        khbz:
          '<p>1.配备有相应数量的维护人员的得1分。</p><p>2.根据维护人员熟知业务程度、运行操作规程齐全得3分。</p>',
        score: 4.0,
        scoreGet: null,
        scoreBGet: null,
        weight: 0.7,
        status: null,
        createdTime: '2019-11-22',
        scoreDescr: null,
        creatorName: '管理员',
        opts: ['edit', 'del']
      },
      {
        id: '2c9235aa6e93898e016e938a314b0000',
        khxm: '制定运营维护手册和管理制度',
        khxmId: null,
        khbz:
          '<p>1.已制定的得l分，未制定的不得分。</p><p>2.制度切实可行，可操作性，得1分。</p><p>3.各岗位贵权糊确清晰程度得1分。</p>',
        score: 3.0,
        scoreGet: null,
        scoreBGet: null,
        weight: 0.7,
        status: null,
        createdTime: '2019-11-22',
        scoreDescr: null,
        creatorName: '管理员',
        opts: ['edit', 'del']
      },
      {
        id: '2c9235aa6e93898e016e938bb1160001',
        khxm: '资料齐全、良好、更新及时',
        khxmId: null,
        khbz:
          '<p>查看图纸、档案和设备资料保管齐全记录真实性、规范性得4分。</p>',
        score: 4.0,
        scoreGet: null,
        scoreBGet: null,
        weight: 0.7,
        status: null,
        createdTime: '2019-11-22',
        scoreDescr: null,
        creatorName: '管理员',
        opts: ['edit', 'del']
      },
      {
        id: '2c9235aa6e93898e016e938c20650002',
        khxm: '为员工提供必要的人身保护装备及定期培训',
        khxmId: null,
        khbz:
          '<p>1.根据是否提供保护装备，及提供情况得1分。</p><p>2.进行定期指导培训的得2分。</p>',
        score: 3.0,
        scoreGet: null,
        scoreBGet: null,
        weight: 0.7,
        status: null,
        createdTime: '2019-11-22',
        scoreDescr: null,
        creatorName: '管理员',
        opts: ['edit', 'del']
      },
      {
        id: '2c9235aa6e93898e016e938c9a560003',
        khxm: '厂容厂貌',
        khxmId: null,
        khbz:
          '<p>1.道路通畅、设施完好、照明设施齐整、干净整洁的得1分。</p><p>2.办公室、操作室、机房内无垃圾堆放，门窗玻璃无破碎、墙壁整洁，办公桌椅、工具摆放整齐的，得满分2分，否则每次每处扣0.5分，扣完为止。</p>',
        score: 3.0,
        scoreGet: null,
        scoreBGet: null,
        weight: 0.7,
        status: null,
        createdTime: '2019-11-22',
        scoreDescr: null,
        creatorName: '管理员',
        opts: ['edit', 'del']
      }
    ]
  },
  {
    id: '2c9235aa6e936281016e9387c0c90018',
    title: '维修养护',
    total: 70.0,
    subs: [
      {
        id: '2c9235aa6e93898e016e93aef55a000a',
        khxm: '处理质量',
        khxmId: null,
        khbz:
          '<p>1.出水排放执行《城镇污水处理厂污染物排放标准》(GB I891 8-2002) 一级标准的A 标准。检测方法与上述标准一致， 按日为单位进行考， 当日不合格记录一次不合格。一次不合格扣2分， 满分30 分，扣完为止。同时并扣罚未达标天数的污水处理服务</p>',
        score: 30.0,
        scoreGet: null,
        scoreBGet: null,
        weight: 0.7,
        status: null,
        createdTime: '2019-11-22',
        scoreDescr: null,
        creatorName: '管理员',
        opts: ['edit', 'del']
      },
      {
        id: '2c9235aa6e93898e016e93afc4dc000b',
        khxm: '处理质量',
        khxmId: null,
        khbz:
          '<p>2.进水水质水量达到国家、省、市环保要求，且乙方应确保厂网一体的污水处理厂进水COD 月度平均浓度≥132mg/L，进水COD发生异常，乙方尽快检查原因并提出修复方案报甲方，甲方同意后实施修复，非乙方原因造成的，考核时予以免责。</p><p>达到前述要求得10分，一次不合格扣0.5分，扣完为止。</p>',
        score: 10.0,
        scoreGet: null,
        scoreBGet: null,
        weight: 0.7,
        status: null,
        createdTime: '2019-11-22',
        scoreDescr: null,
        creatorName: '管理员',
        opts: ['edit', 'del']
      },
      {
        id: '2c9235aa6e93898e016e93b31ab3000c',
        khxm: '处理质量',
        khxmId: null,
        khbz:
          '<p>3.污水处理厂的废气排放标准执行《城镇污水处理厂污染物排放标准》( GB18918-2002 ) 中大气污染物排放的二级标准和设计标准，满分5 分，未达标每次每处扣0.5分，扣完为止。</p>',
        score: 5.0,
        scoreGet: null,
        scoreBGet: null,
        weight: 0.7,
        status: null,
        createdTime: '2019-11-22',
        scoreDescr: null,
        creatorName: '管理员',
        opts: ['edit', 'del']
      },
      {
        id: '2c9235aa6e93898e016e93b384cd000d',
        khxm: '处理质量',
        khxmId: null,
        khbz:
          '<p>4.污泥含水率不高于60%， 得5分， 未达标每次扣0.5分， 扣完为止。(协议约定乙方免贵情况除外)。</p>',
        score: 5.0,
        scoreGet: null,
        scoreBGet: null,
        weight: 0.7,
        status: null,
        createdTime: '2019-11-22',
        scoreDescr: null,
        creatorName: '管理员',
        opts: ['edit', 'del']
      },
      {
        id: '2c9235aa6e93898e016e93b48fae000f',
        khxm: '建构筑物',
        khxmId: null,
        khbz:
          '<p>构筑物无渗漏、表面无鼓起或脱落现象， 油漆良好无腐蚀， 堪口出水均匀、池面清洁、闸阔无渗漏，安全有效的，得满分5分，否则每次每处扣0.5分，扣完为止。</p>',
        score: 5.0,
        scoreGet: null,
        scoreBGet: null,
        weight: 0.7,
        status: null,
        createdTime: '2019-11-22',
        scoreDescr: null,
        creatorName: '管理员',
        opts: ['edit', 'del']
      },
      {
        id: '2c9235aa6e93898e016e93b520020010',
        khxm: '设施设备',
        khxmId: null,
        khbz:
          '<p>外观整洁、无腐蚀、渗漏、电气设备符合安全要求、附属设备工作正常、整机运行平稳可靠、仪器仪表准确灵敏、设备台账及维护档案齐全的得满分5 分， 否则每次每处扣0.5分，扣完为止。</p>',
        score: 5.0,
        scoreGet: null,
        scoreBGet: null,
        weight: 0.7,
        status: null,
        createdTime: '2019-11-22',
        scoreDescr: null,
        creatorName: '管理员',
        opts: ['edit', 'del']
      },
      {
        id: '2c9235aa6e93898e016e93b5af390011',
        khxm: '安全生产 ',
        khxmId: null,
        khbz:
          '<p>有健全的各级安全管理机构、安全规章制度、安全检查有记录、发现安全隐患能及时解决， 得1分。</p><p>安全培训：厂主管领导和安全负责人要定期接受正规安全培训，有主管部门颁发的安全培训证书，得1 分。</p><p>发生过一般性安全事故的每有1次扣2分，满分8分。重大事故一次性扣8分， 并扣罚当月运营费用。扣完为止</p>',
        score: 10.0,
        scoreGet: null,
        scoreBGet: null,
        weight: 0.7,
        status: null,
        createdTime: '2019-11-22',
        scoreDescr: null,
        creatorName: '管理员',
        opts: ['edit', 'del']
      }
    ]
  },
  {
    id: '2c9235aa6e93898e016e93b413ad000e',
    title: '尾水生态砾床',
    total: 10.0,
    subs: [
      {
        id: '2c9235aa6e93898e016e93b6cf620014',
        khxm: '排放标准',
        khxmId: null,
        khbz:
          '<p>将尾水由一级A 排放标准提高到地表水准IV类标准(具体标准详见6.11) 。某一项月平均值不达标为该月不达标，每次扣5分， 满分10分， 扣完为止（协议约定乙方免贵情况除外）。</p>',
        score: 10.0,
        scoreGet: null,
        scoreBGet: null,
        weight: 0.7,
        status: null,
        createdTime: '2019-11-22',
        scoreDescr: null,
        creatorName: '管理员',
        opts: ['edit', 'del']
      }
    ]
  },
  {
    id: '2c9235aa6e93898e016e93b5f8f60012',
    title: '应急预案',
    total: 3.0,
    subs: [
      {
        id: '2c9235aa6e93898e016e93b7567a0015',
        khxm: '应急预案方案',
        khxmId: null,
        khbz:
          '<p>1.建立应急预案、调控方案的得0.5分。</p><p>2.应急预案、调控方案明确具体、合理、可行几得0.5 分。</p>',
        score: 1.0,
        scoreGet: null,
        scoreBGet: null,
        weight: 0.7,
        status: null,
        createdTime: '2019-11-22',
        scoreDescr: null,
        creatorName: '管理员',
        opts: ['edit', 'del']
      },
      {
        id: '2c9235aa6e93898e016e93b7ea3f0016',
        khxm: '应急预案的技术、物资和人力等的储备保障',
        khxmId: null,
        khbz:
          '<p>1.成立内部应急指挥小组及工作分工情况得0.5分。</p><p>2.应急预案中需要的物资及技术措施的落实情况得1.5分。</p>',
        score: 2.0,
        scoreGet: null,
        scoreBGet: null,
        weight: 0.7,
        status: null,
        createdTime: '2019-11-22',
        scoreDescr: null,
        creatorName: '管理员',
        opts: ['edit', 'del']
      }
    ]
  },
  {
    id: '2c9235aa6e93898e016e93b671e00013',
    title: '社会影响',
    total: 3.0,
    subs: [
      {
        id: '2c9235aa6e93898e016e93b8ec890017',
        khxm: '奖惩指标',
        khxmId: null,
        khbz:
          '<p>区级表扬每次得0.5分，市级表扬1分，省级表扬2 分，区级通报批评每次扣0.5分，市级通报批评每次扣1 分，省级通报批评每次扣2分， 奖惩可以相抵， 若当年发生3 起批评(含）不得分且再次表扬也不得分。若无批评和奖励，则为0分。</p>',
        score: 3.0,
        scoreGet: null,
        scoreBGet: null,
        weight: 0.7,
        status: null,
        createdTime: '2019-11-22',
        scoreDescr: null,
        creatorName: '管理员',
        opts: ['edit', 'del']
      }
    ]
  },
  {
    id: '2c9235aa6e93898e016e93b9bb610018',
    title: '生产资料考核',
    total: 10.0,
    subs: [
      {
        id: '2c9235aa6e93898e016e93bb87bf001d',
        khxm: '养护制度',
        khxmId: null,
        khbz:
          '<p>养护制度( 巡查、养护、中小型维修、大型维修) 未按相关规定及时制定和上报，出现1 次扣0.5分， 扣完为止。</p>',
        score: 10.0,
        scoreGet: null,
        scoreBGet: null,
        weight: 0.3,
        status: null,
        createdTime: '2019-11-22',
        scoreDescr: null,
        creatorName: '管理员',
        opts: ['edit', 'del']
      }
    ]
  },
  {
    id: '2c9235aa6e93898e016e93ba031d0019',
    title: '现场运营质量考核',
    total: 60.0,
    subs: [
      {
        id: '2c9235aa6e93898e016e93bc0a28001e',
        khxm: '排水设施',
        khxmId: null,
        khbz:
          '<p>因排水管道、箱涵、调蓄池等污水设施未按规定及时清掏、疏通、保养等养护到位的，每次每处扣0.5 分，扣完为止。</p>',
        score: 20.0,
        scoreGet: null,
        scoreBGet: null,
        weight: 0.3,
        status: null,
        createdTime: '2019-11-22',
        scoreDescr: null,
        creatorName: '管理员',
        opts: ['edit', 'del']
      },
      {
        id: '2c9235aa6e93898e016e93bc51e3001f',
        khxm: '文明施工',
        khxmId: null,
        khbz:
          '<p>养护维修时没有做好文明施工，材料堆放不整齐、渣土清运不及时、清淤的淤泥污染路面的，每次每处扣0.5分，扣完为止。</p>',
        score: 6.0,
        scoreGet: null,
        scoreBGet: null,
        weight: 0.3,
        status: null,
        createdTime: '2019-11-22',
        scoreDescr: null,
        creatorName: '管理员',
        opts: ['edit', 'del']
      },
      {
        id: '2c9235aa6e93898e016e93bce2f80020',
        khxm: '巡查的全面性',
        khxmId: null,
        khbz:
          '<p>因设施巡查不到位，造成未及时发现检查井盖和雨水箅子等排水设施丢失损坏的，每次每处扣0.5分， 扣完为止。</p>',
        score: 6.0,
        scoreGet: null,
        scoreBGet: null,
        weight: 0.3,
        status: null,
        createdTime: '2019-11-22',
        scoreDescr: null,
        creatorName: '管理员',
        opts: ['edit', 'del']
      },
      {
        id: '2c9235aa6e93898e016e93bd2bf30021',
        khxm: '维护、维修的及时性',
        khxmId: null,
        khbz:
          '<p>在接到井盖或箅子等排水设施丢失损坏通知后，未及时到达现场围护或四小时内未开始维修的，每次每处扣0.5分，扣完为止。</p>',
        score: 6.0,
        scoreGet: null,
        scoreBGet: null,
        weight: 0.3,
        status: null,
        createdTime: '2019-11-22',
        scoreDescr: null,
        creatorName: '管理员',
        opts: ['edit', 'del']
      },
      {
        id: '2c9235aa6e93898e016e93bd81260022',
        khxm: '养护作业操作的规范性',
        khxmId: null,
        khbz:
          '<p>养护作业时，未按要求进行管道通风、下井作业人员未按要求佩戴安全防护装备、现场交通栏护设施摆放不到位等相关情况， 每次每处扣0.5分， 扣完为止。</p>',
        score: 6.0,
        scoreGet: null,
        scoreBGet: null,
        weight: 0.3,
        status: null,
        createdTime: '2019-11-22',
        scoreDescr: null,
        creatorName: '管理员',
        opts: ['edit', 'del']
      },
      {
        id: '2c9235aa6e93898e016e93bde1300023',
        khxm: '应急处理',
        khxmId: null,
        khbz:
          '<p>未及时发现并上报排水管道、检查井及其他排水设施被私接、占压、破坏等情况，且未采取必要制止和维护措施的，每次每处扣0.5 分，扣完为止。</p>',
        score: 6.0,
        scoreGet: null,
        scoreBGet: null,
        weight: 0.3,
        status: null,
        createdTime: '2019-11-22',
        scoreDescr: null,
        creatorName: '管理员',
        opts: ['edit', 'del']
      },
      {
        id: '2c9235aa6e93898e016e93be6dc40024',
        khxm: '泵站设备',
        khxmId: null,
        khbz:
          '<p>泵站的电气、仪表完好率未达到90% 以上的，每次每处扣0.5分; 泵站的水泵、格栅清污机、闸门等设施未按规定进行养护的，每次每处扣0.5分；水泵、闸门及格栅清污机出现故障在3 个工作日内朱开始维修的，每次每处发现扣1分，影响正常运行的每次每处扣3 分，扣完为止。</p>',
        score: 6.0,
        scoreGet: null,
        scoreBGet: null,
        weight: 0.3,
        status: null,
        createdTime: '2019-11-22',
        scoreDescr: null,
        creatorName: '管理员',
        opts: ['edit', 'del']
      },
      {
        id: '2c9235aa6e93898e016e93bee3f80025',
        khxm: '泵站安全',
        khxmId: null,
        khbz:
          '<p>泵站未按要求配备并定点放置相关消防器材、未按规定对起重设备、电气安全用具等进行定期检测的、泵站运营资料及维修记录不完善的， 每次每处扣0.5分，扣完为止。</p>',
        score: 4.0,
        scoreGet: null,
        scoreBGet: null,
        weight: 0.3,
        status: null,
        createdTime: '2019-11-22',
        scoreDescr: null,
        creatorName: '管理员',
        opts: ['edit', 'del']
      }
    ]
  },
  {
    id: '2c9235aa6e93898e016e93ba51ed001a',
    title: '问题整改及热线处置情况考核',
    total: 10.0,
    subs: [
      {
        id: '2c9235aa6e93898e016e93bf3e1a0026',
        khxm: '问题整改的及时性',
        khxmId: null,
        khbz:
          '<p>运营公司对上季度考核通报问题未及时完成整改井上报整改情况的， 每一次扣2 分，扣完为止。</p>',
        score: 6.0,
        scoreGet: null,
        scoreBGet: null,
        weight: 0.3,
        status: null,
        createdTime: '2019-11-22',
        scoreDescr: null,
        creatorName: '管理员',
        opts: ['edit', 'del']
      },
      {
        id: '2c9235aa6e93898e016e93bf98aa0027',
        khxm: '问题处理的及时性',
        khxmId: null,
        khbz:
          '<p>运营公司未在24h 内及时响应或处理相关市民投诉、人大政协提案、领导及实施机构交办事项的，每件扣0.5分，扣完为止。</p>',
        score: 4.0,
        scoreGet: null,
        scoreBGet: null,
        weight: 0.3,
        status: null,
        createdTime: '2019-11-22',
        scoreDescr: null,
        creatorName: '管理员',
        opts: ['edit', 'del']
      }
    ]
  },
  {
    id: '2c9235aa6e93898e016e93ba9467001b',
    title: '应急抢险考核',
    total: 20.0,
    subs: [
      {
        id: '2c9235aa6e93898e016e93c00ef10028',
        khxm: '抢险处理',
        khxmId: null,
        khbz:
          '<p>1 、因运营公司自身原因造成抢险项目组织不当， 导致末在规定时间内完成抢险处置的， 每次扣5 分，满分10分，扣完为止。</p><p>2、因运营公司自身原因造重成抢险处置不当，引发一般安全事故，每次扣5分；引发重大安全事故，每次扣10分，满分10分，扣完为止。</p>',
        score: 20.0,
        scoreGet: null,
        scoreBGet: null,
        weight: 0.3,
        status: null,
        createdTime: '2019-11-22',
        scoreDescr: null,
        creatorName: '管理员',
        opts: ['edit', 'del']
      }
    ]
  },
  {
    id: '2c9235aa6e93898e016e93bac886001c',
    title: '社会影响',
    total: 3.0,
    subs: [
      {
        id: '2c9235aa6e93898e016e93c0e082002a',
        khxm: '奖惩指标',
        khxmId: null,
        khbz:
          '<p>区级表扬每次得0.5分，市级表扬1分，省级表扬2 分。区级通报批评每次扣0.5分，市级通报批评每次扣1 分，省级通报批评每次扣2分，奖惩可以相抵，若当年发生3起批评(含)不得分且再次表扬也不得分。若无批评和奖励，则为0分。</p>',
        score: 3.0,
        scoreGet: null,
        scoreBGet: null,
        weight: 0.3,
        status: null,
        createdTime: '2019-11-22',
        scoreDescr: null,
        creatorName: '管理员',
        opts: ['edit', 'del']
      }
    ]
  }
]

export const tabs = [
  {
    classId: '2c9235aa6e936281016e9386beb00015',
    className: '浦东污水处理厂考核评分表',
    scoreGet: null,
    weight: 0.7,
    scoreGetStr: null,
    count: null,
    index: null,
    indexStr: null
  },
  {
    classId: '2c9235aa6e936281016e93871d780016',
    className: '配套管网及污水提升泵站考核评分表',
    scoreGet: null,
    weight: 0.3,
    scoreGetStr: null,
    count: null,
    index: null,
    indexStr: null
  }
]

export const tabsData15 = [
  {
    id: '2c9235aa6e936281016e938775fe0017',
    title: '运行管理',
    total: 17.0,
    subs: [
      {
        id: '2c9235aa6ea17d08016ea1b4a0d4001f',
        khxm: '维护人员配备',
        khxmId: '2c9235aa6e936281016e938859180019',
        khbz:
          '<p>1.配备有相应数量的维护人员的得1分。</p><p>2.根据维护人员熟知业务程度、运行操作规程齐全得3分。</p>',
        score: 4.0,
        scoreGet: 4.0,
        scoreBGet: null,
        weight: null,
        status: '1',
        createdTime: null,
        scoreDescr: null,
        creatorName: null,
        opts: ['view']
      },
      {
        id: '2c9235aa6ea17d08016ea1b4a0da0020',
        khxm: '制定运营维护手册和管理制度',
        khxmId: '2c9235aa6e93898e016e938a314b0000',
        khbz:
          '<p>1.已制定的得l分，未制定的不得分。</p><p>2.制度切实可行，可操作性，得1分。</p><p>3.各岗位贵权糊确清晰程度得1分。</p>',
        score: 3.0,
        scoreGet: 3.0,
        scoreBGet: null,
        weight: null,
        status: '1',
        createdTime: null,
        scoreDescr: null,
        creatorName: null,
        opts: ['view']
      },
      {
        id: '2c9235aa6ea17d08016ea1b4a0dd0021',
        khxm: '资料齐全、良好、更新及时',
        khxmId: '2c9235aa6e93898e016e938bb1160001',
        khbz:
          '<p>查看图纸、档案和设备资料保管齐全记录真实性、规范性得4分。</p>',
        score: 4.0,
        scoreGet: 4.0,
        scoreBGet: null,
        weight: null,
        status: '1',
        createdTime: null,
        scoreDescr: null,
        creatorName: null,
        opts: ['view']
      },
      {
        id: '2c9235aa6ea17d08016ea1b4a0e00022',
        khxm: '为员工提供必要的人身保护装备及定期培训',
        khxmId: '2c9235aa6e93898e016e938c20650002',
        khbz:
          '<p>1.根据是否提供保护装备，及提供情况得1分。</p><p>2.进行定期指导培训的得2分。</p>',
        score: 3.0,
        scoreGet: 3.0,
        scoreBGet: null,
        weight: null,
        status: '1',
        createdTime: null,
        scoreDescr: null,
        creatorName: null,
        opts: ['view']
      },
      {
        id: '2c9235aa6ea17d08016ea1b4a0e40023',
        khxm: '厂容厂貌',
        khxmId: '2c9235aa6e93898e016e938c9a560003',
        khbz:
          '<p>1.道路通畅、设施完好、照明设施齐整、干净整洁的得1分。</p><p>2.办公室、操作室、机房内无垃圾堆放，门窗玻璃无破碎、墙壁整洁，办公桌椅、工具摆放整齐的，得满分2分，否则每次每处扣0.5分，扣完为止。</p>',
        score: 3.0,
        scoreGet: 3.0,
        scoreBGet: null,
        weight: null,
        status: '1',
        createdTime: null,
        scoreDescr: null,
        creatorName: null,
        opts: ['view']
      }
    ]
  },
  {
    id: '2c9235aa6e936281016e9387c0c90018',
    title: '维修养护',
    total: 70.0,
    subs: [
      {
        id: '2c9235aa6ea17d08016ea1b4a0e60024',
        khxm: '处理质量',
        khxmId: '2c9235aa6e93898e016e93aef55a000a',
        khbz:
          '<p>1.出水排放执行《城镇污水处理厂污染物排放标准》(GB I891 8-2002) 一级标准的A 标准。检测方法与上述标准一致， 按日为单位进行考， 当日不合格记录一次不合格。一次不合格扣2分， 满分30 分，扣完为止。同时并扣罚未达标天数的污水处理服务</p>',
        score: 30.0,
        scoreGet: 30.0,
        scoreBGet: null,
        weight: null,
        status: '1',
        createdTime: null,
        scoreDescr: null,
        creatorName: null,
        opts: ['view']
      },
      {
        id: '2c9235aa6ea17d08016ea1b4a0e90025',
        khxm: '处理质量',
        khxmId: '2c9235aa6e93898e016e93afc4dc000b',
        khbz:
          '<p>2.进水水质水量达到国家、省、市环保要求，且乙方应确保厂网一体的污水处理厂进水COD 月度平均浓度≥132mg/L，进水CCOD发生异常，乙方尽快检查原因并提出修复方案报甲方，甲方同意后实施修复，非乙方原因造成的，考核时予以免责。</p><p>达到前述要求得10分，一次不合格扣0.5分，扣完为止。</p>',
        score: 10.0,
        scoreGet: 10.0,
        scoreBGet: null,
        weight: null,
        status: '1',
        createdTime: null,
        scoreDescr: null,
        creatorName: null,
        opts: ['view']
      },
      {
        id: '2c9235aa6ea17d08016ea1b4a0ef0026',
        khxm: '处理质量',
        khxmId: '2c9235aa6e93898e016e93b31ab3000c',
        khbz:
          '<p>3.污水处理厂的废气排放标准执行《城镇污水处理厂污染物排放标准》( GB18918-2002 ) 中大气污染物排放的二级标准和设计标准，满分5 分，未达标每次每处扣0.5分，扣完为止。</p>',
        score: 5.0,
        scoreGet: 5.0,
        scoreBGet: null,
        weight: null,
        status: '1',
        createdTime: null,
        scoreDescr: null,
        creatorName: null,
        opts: ['view']
      },
      {
        id: '2c9235aa6ea17d08016ea1b4a0f30027',
        khxm: '处理质量',
        khxmId: '2c9235aa6e93898e016e93b384cd000d',
        khbz:
          '<p>4.污泥含水率不高于60%， 得5分， 未达标每次扣0.5分， 扣完为止。(协议约定乙方免贵情况除外)。</p>',
        score: 5.0,
        scoreGet: 5.0,
        scoreBGet: null,
        weight: null,
        status: '1',
        createdTime: null,
        scoreDescr: null,
        creatorName: null,
        opts: ['view']
      },
      {
        id: '2c9235aa6ea17d08016ea1b4a0f50028',
        khxm: '建构筑物',
        khxmId: '2c9235aa6e93898e016e93b48fae000f',
        khbz:
          '<p>构筑物无渗漏、表面无鼓起或脱落现象， 油漆良好无腐蚀， 堪口出水均匀、池面清洁、闸阔无渗漏，安全有效的，得满分5分，否则每次每处扣0.5分，扣完为止。</p>',
        score: 5.0,
        scoreGet: 5.0,
        scoreBGet: null,
        weight: null,
        status: '1',
        createdTime: null,
        scoreDescr: null,
        creatorName: null,
        opts: ['view']
      },
      {
        id: '2c9235aa6ea17d08016ea1b4a0f80029',
        khxm: '设施设备',
        khxmId: '2c9235aa6e93898e016e93b520020010',
        khbz:
          '<p>外观整洁、无腐蚀、渗漏、电气设备符合安全要求、附属设备工作正常、整机运行平稳可靠、仪器仪表准确灵敏、设备台账及维护档案齐全的得满分5 分， 否则每次每处扣0.5分，扣完为止。</p>',
        score: 5.0,
        scoreGet: 5.0,
        scoreBGet: null,
        weight: null,
        status: '1',
        createdTime: null,
        scoreDescr: null,
        creatorName: null,
        opts: ['view']
      },
      {
        id: '2c9235aa6ea17d08016ea1b4a0fa002a',
        khxm: '安全生产 ',
        khxmId: '2c9235aa6e93898e016e93b5af390011',
        khbz:
          '<p>有健全的各级安全管理机构、安全规章制度、安全检查有记录、发现安全隐患能及时解决， 得1分。</p><p>安全培训：厂主管领导和安全负责人要定期接受正规安全培训，有主管部门颁发的安全培训证书，得1 分。</p><p>发生过一般性安全事故的每有1次扣2分，满分8分。重大事故一次性扣8分， 并扣罚当月运营费用。扣完为止</p>',
        score: 10.0,
        scoreGet: 10.0,
        scoreBGet: null,
        weight: null,
        status: '1',
        createdTime: null,
        scoreDescr: null,
        creatorName: null,
        opts: ['view']
      }
    ]
  },
  {
    id: '2c9235aa6e93898e016e93b413ad000e',
    title: '尾水生态砾床',
    total: 10.0,
    subs: [
      {
        id: '2c9235aa6ea17d08016ea1b4a0ff002b',
        khxm: '排放标准',
        khxmId: '2c9235aa6e93898e016e93b6cf620014',
        khbz:
          '<p>将尾水由一级A 排放标准提高到地表水准IV类标准(具体标准详见6.11) 。某一项月平均值不达标为该月不达标，每次扣5分， 满分10分， 扣完为止（协议约定乙方免贵情况除外）。</p>',
        score: 10.0,
        scoreGet: 10.0,
        scoreBGet: null,
        weight: null,
        status: '1',
        createdTime: null,
        scoreDescr: null,
        creatorName: null,
        opts: ['view']
      }
    ]
  },
  {
    id: '2c9235aa6e93898e016e93b5f8f60012',
    title: '应急预案',
    total: 3.0,
    subs: [
      {
        id: '2c9235aa6ea17d08016ea1b4a105002c',
        khxm: '应急预案方案',
        khxmId: '2c9235aa6e93898e016e93b7567a0015',
        khbz:
          '<p>1.建立应急预案、调控方案的得0.5分。</p><p>2.应急预案、调控方案明确具体、合理、可行几得0.5 分。</p>',
        score: 1.0,
        scoreGet: 1.0,
        scoreBGet: null,
        weight: null,
        status: '1',
        createdTime: null,
        scoreDescr: null,
        creatorName: null,
        opts: ['view']
      },
      {
        id: '2c9235aa6ea17d08016ea1b4a109002d',
        khxm: '应急预案的技术、物资和人力等的储备保障',
        khxmId: '2c9235aa6e93898e016e93b7ea3f0016',
        khbz:
          '<p>1.成立内部应急指挥小组及工作分工情况得0.5分。</p><p>2.应急预案中需要的物资及技术措施的落实情况得1.5分。</p>',
        score: 2.0,
        scoreGet: 2.0,
        scoreBGet: null,
        weight: null,
        status: '1',
        createdTime: null,
        scoreDescr: null,
        creatorName: null,
        opts: ['view']
      }
    ]
  },
  {
    id: '2c9235aa6e93898e016e93b671e00013',
    title: '社会影响',
    total: 3.0,
    subs: [
      {
        id: '2c9235aa6ea17d08016ea1b4a10c002e',
        khxm: '奖惩指标',
        khxmId: '2c9235aa6e93898e016e93b8ec890017',
        khbz:
          '<p>区级表扬每次得0.5分，市级表扬1分，省级表扬2 分，区级通报批评每次扣0.5分，市级通报批评每次扣1 分，省级通报批评每次扣2分， 奖惩可以相抵， 若当年发生3 起批评(含）不得分且再次表扬也不得分。若无批评和奖励，则为0分。</p>',
        score: 3.0,
        scoreGet: 3.0,
        scoreBGet: null,
        weight: null,
        status: '1',
        createdTime: null,
        scoreDescr: null,
        creatorName: null,
        opts: ['view']
      }
    ]
  }
]

export const tabsData16 = [
  {
    id: '2c9235aa6e93898e016e93b9bb610018',
    title: '生产资料考核',
    total: 10.0,
    subs: [
      {
        id: '2c9235aa6ea17d08016ea1b4a10e002f',
        khxm: '养护制度',
        khxmId: '2c9235aa6e93898e016e93bb87bf001d',
        khbz:
          '<p>养护制度( 巡查、养护、中小型维修、大型维修) 未按相关规定及时制定和上报，出现1 次扣0.5分， 扣完为止。</p>',
        score: 10.0,
        scoreGet: 10.0,
        scoreBGet: null,
        weight: null,
        status: '1',
        createdTime: null,
        scoreDescr: null,
        creatorName: null,
        opts: ['view']
      }
    ]
  },
  {
    id: '2c9235aa6e93898e016e93ba031d0019',
    title: '现场运营质量考核',
    total: 60.0,
    subs: [
      {
        id: '2c9235aa6ea17d08016ea1b4a1120030',
        khxm: '排水设施',
        khxmId: '2c9235aa6e93898e016e93bc0a28001e',
        khbz:
          '<p>因排水管道、箱涵、调蓄池等污水设施未按规定及时清掏、疏通、保养等养护到位的，每次每处扣0.5 分，扣完为止。</p>',
        score: 20.0,
        scoreGet: 20.0,
        scoreBGet: null,
        weight: null,
        status: '1',
        createdTime: null,
        scoreDescr: null,
        creatorName: null,
        opts: ['view']
      },
      {
        id: '2c9235aa6ea17d08016ea1b4a1150031',
        khxm: '文明施工',
        khxmId: '2c9235aa6e93898e016e93bc51e3001f',
        khbz:
          '<p>养护维修时没有做好文明施工，材料堆放不整齐、渣土清运不及时、清淤的淤泥污染路面的，每次每处扣0.5分，扣完为止。</p>',
        score: 6.0,
        scoreGet: 6.0,
        scoreBGet: null,
        weight: null,
        status: '1',
        createdTime: null,
        scoreDescr: null,
        creatorName: null,
        opts: ['view']
      },
      {
        id: '2c9235aa6ea17d08016ea1b4a1180032',
        khxm: '巡查的全面性',
        khxmId: '2c9235aa6e93898e016e93bce2f80020',
        khbz:
          '<p>因设施巡查不到位，造成未及时发现检查井盖和雨水箅子等排水设施丢失损坏的，每次每处扣0.5分， 扣完为止。</p>',
        score: 6.0,
        scoreGet: 6.0,
        scoreBGet: null,
        weight: null,
        status: '1',
        createdTime: null,
        scoreDescr: null,
        creatorName: null,
        opts: ['view']
      },
      {
        id: '2c9235aa6ea17d08016ea1b4a11a0033',
        khxm: '维护、维修的及时性',
        khxmId: '2c9235aa6e93898e016e93bd2bf30021',
        khbz:
          '<p>在接到井盖或箅子等排水设施丢失损坏通知后，未及时到达现场围护或四小时内未开始维修的，每次每处扣0.5分，扣完为止。</p>',
        score: 6.0,
        scoreGet: 6.0,
        scoreBGet: null,
        weight: null,
        status: '1',
        createdTime: null,
        scoreDescr: null,
        creatorName: null,
        opts: ['view']
      },
      {
        id: '2c9235aa6ea17d08016ea1b4a11d0034',
        khxm: '养护作业操作的规范性',
        khxmId: '2c9235aa6e93898e016e93bd81260022',
        khbz:
          '<p>养护作业时，未按要求进行管道通风、下井作业人员未按要求佩戴安全防护装备、现场交通栏护设施摆放不到位等相关情况， 每次每处扣0.5分， 扣完为止。</p>',
        score: 6.0,
        scoreGet: 6.0,
        scoreBGet: null,
        weight: null,
        status: '1',
        createdTime: null,
        scoreDescr: null,
        creatorName: null,
        opts: ['view']
      },
      {
        id: '2c9235aa6ea17d08016ea1b4a11f0035',
        khxm: '应急处理',
        khxmId: '2c9235aa6e93898e016e93bde1300023',
        khbz:
          '<p>未及时发现并上报排水管道、检查井及其他排水设施被私接、占压、破坏等情况，且未采取必要制止和维护措施的，每次每处扣0.5 分，扣完为止。</p>',
        score: 6.0,
        scoreGet: 6.0,
        scoreBGet: null,
        weight: null,
        status: '1',
        createdTime: null,
        scoreDescr: null,
        creatorName: null,
        opts: ['view']
      },
      {
        id: '2c9235aa6ea17d08016ea1b4a1230036',
        khxm: '泵站设备',
        khxmId: '2c9235aa6e93898e016e93be6dc40024',
        khbz:
          '<p>泵站的电气、仪表完好率未达到90% 以上的，每次每处扣0.5分; 泵站的水泵、格栅清污机、闸门等设施未按规定进行养护的，每次每处扣0.5分；水泵、闸门及格栅清污机出现故障在3 个工作日内朱开始维修的，每次每处发现扣1分，影响正常运行的每次每处扣3 分，扣完为止。</p>',
        score: 6.0,
        scoreGet: 6.0,
        scoreBGet: null,
        weight: null,
        status: '1',
        createdTime: null,
        scoreDescr: null,
        creatorName: null,
        opts: ['view']
      },
      {
        id: '2c9235aa6ea17d08016ea1b4a1260037',
        khxm: '泵站安全',
        khxmId: '2c9235aa6e93898e016e93bee3f80025',
        khbz:
          '<p>泵站未按要求配备并定点放置相关消防器材、未按规定对起重设备、电气安全用具等进行定期检测的、泵站运营资料及维修记录不完善的， 每次每处扣0.5分，扣完为止。</p>',
        score: 4.0,
        scoreGet: 4.0,
        scoreBGet: null,
        weight: null,
        status: '1',
        createdTime: null,
        scoreDescr: null,
        creatorName: null,
        opts: ['view']
      }
    ]
  },
  {
    id: '2c9235aa6e93898e016e93ba51ed001a',
    title: '问题整改及热线处置情况考核',
    total: 10.0,
    subs: [
      {
        id: '2c9235aa6ea17d08016ea1b4a1290038',
        khxm: '问题整改的及时性',
        khxmId: '2c9235aa6e93898e016e93bf3e1a0026',
        khbz:
          '<p>运营公司对上季度考核通报问题未及时完成整改井上报整改情况的， 每一次扣2 分，扣完为止。</p>',
        score: 6.0,
        scoreGet: 6.0,
        scoreBGet: null,
        weight: null,
        status: '1',
        createdTime: null,
        scoreDescr: null,
        creatorName: null,
        opts: ['view']
      },
      {
        id: '2c9235aa6ea17d08016ea1b4a12c0039',
        khxm: '问题处理的及时性',
        khxmId: '2c9235aa6e93898e016e93bf98aa0027',
        khbz:
          '<p>运营公司未在24h 内及时响应或处理相关市民投诉、人大政协提案、领导及实施机构交办事项的，每件扣0.5分，扣完为止。</p>',
        score: 4.0,
        scoreGet: 4.0,
        scoreBGet: null,
        weight: null,
        status: '1',
        createdTime: null,
        scoreDescr: null,
        creatorName: null,
        opts: ['view']
      }
    ]
  },
  {
    id: '2c9235aa6e93898e016e93ba9467001b',
    title: '应急抢险考核',
    total: 20.0,
    subs: [
      {
        id: '2c9235aa6ea17d08016ea1b4a12f003a',
        khxm: '抢险处理',
        khxmId: '2c9235aa6e93898e016e93c00ef10028',
        khbz:
          '<p>1 、因运营公司自身原因造成抢险项目组织不当， 导致末在规定时间内完成抢险处置的， 每次扣5 分，满分10分，扣完为止。</p><p>2、因运营公司自身原因造重成抢险处置不当，引发一般安全事故，每次扣5分；引发重大安全事故，每次扣10分，满分10分，扣完为止。</p>',
        score: 20.0,
        scoreGet: 20.0,
        scoreBGet: null,
        weight: null,
        status: '1',
        createdTime: null,
        scoreDescr: null,
        creatorName: null,
        opts: ['view']
      }
    ]
  },
  {
    id: '2c9235aa6e93898e016e93bac886001c',
    title: '社会影响',
    total: 3.0,
    subs: [
      {
        id: '2c9235aa6ea17d08016ea1b4a133003b',
        khxm: '奖惩指标',
        khxmId: '2c9235aa6e93898e016e93c0e082002a',
        khbz:
          '<p>区级表扬每次得0.5分，市级表扬1分，省级表扬2 分。区级通报批评每次扣0.5分，市级通报批评每次扣1 分，省级通报批评每次扣2分，奖惩可以相抵，若当年发生3起批评(含)不得分且再次表扬也不得分。若无批评和奖励，则为0分。</p>',
        score: 3.0,
        scoreGet: 3.0,
        scoreBGet: null,
        weight: null,
        status: '1',
        createdTime: null,
        scoreDescr: null,
        creatorName: null,
        opts: ['view']
      }
    ]
  }
]

// 甲方评估结果列表(季度)：
export const evaluationListBySeason = {
  khList: [
    {
      id: '2c9235aa6ea0416d016ea066bed30001',
      khOrgName: '浦东区****水务管理局',
      khObjOrgName: '测试水环境综合治理有限公司',
      year: 2019,
      month: null,
      txt: '一季度',
      khStartDate: '2019年01月01日',
      kpEndDate: '2019年03月31日',
      khGrade: '良好',
      scoreGet: 81.7,
      khPayRate: 0.867,
      khPayRateStr: '86.7%',
      kpClassList: [
        {
          classId: '2c9235aa6e936281016e9386beb00015',
          className: '浦东区污水处理厂考核评分表',
          scoreGet: 59.5,
          weight: null,
          scoreGetStr: null,
          count: null,
          index: null,
          indexStr: null
        },
        {
          classId: '2c9235aa6e936281016e93871d780016',
          className: '配套管网及污水提升泵站考核评分表',
          scoreGet: 22.2,
          weight: null,
          scoreGetStr: null,
          count: null,
          index: null,
          indexStr: null
        }
      ],
      updateDate: '2019-11-25',
      khSttdrcd: '2',
      status: '1',
      paramDate: '2019-1'
    },
    {
      id: '2c9235aa6ea0416d016ea0994a2d003e',
      khOrgName: '浦东区****水务管理局',
      khObjOrgName: '测试水环境综合治理有限公司',
      year: 2019,
      month: null,
      txt: '二季度',
      khStartDate: '2019年04月01日',
      kpEndDate: '2019年06月30日',
      khGrade: '良好',
      scoreGet: 87.4,
      khPayRate: 0.924,
      khPayRateStr: '92.4%',
      kpClassList: [
        {
          classId: '2c9235aa6e936281016e9386beb00015',
          className: '浦东区污水处理厂考核评分表',
          scoreGet: 61.6,
          weight: null,
          scoreGetStr: null,
          count: null,
          index: null,
          indexStr: null
        },
        {
          classId: '2c9235aa6e936281016e93871d780016',
          className: '配套管网及污水提升泵站考核评分表',
          scoreGet: 25.8,
          weight: null,
          scoreGetStr: null,
          count: null,
          index: null,
          indexStr: null
        }
      ],
      updateDate: '2019-11-25',
      khSttdrcd: '2',
      status: '1',
      paramDate: '2019-2'
    },
    {
      id: '2c9235aa6ea0416d016ea0fc3d39007a',
      khOrgName: '浦东区****水务管理局',
      khObjOrgName: '测试水环境综合治理有限公司',
      year: 2019,
      month: null,
      txt: '三季度',
      khStartDate: '2019年07月01日',
      kpEndDate: '2019年09月30日',
      khGrade: '良好',
      scoreGet: 87.9,
      khPayRate: 0.929,
      khPayRateStr: '92.9%',
      kpClassList: [
        {
          classId: '2c9235aa6e936281016e9386beb00015',
          className: '浦东区污水处理厂考核评分表',
          scoreGet: 63.0,
          weight: null,
          scoreGetStr: null,
          count: null,
          index: null,
          indexStr: null
        },
        {
          classId: '2c9235aa6e936281016e93871d780016',
          className: '配套管网及污水提升泵站考核评分表',
          scoreGet: 24.9,
          weight: null,
          scoreGetStr: null,
          count: null,
          index: null,
          indexStr: null
        }
      ],
      updateDate: '2019-11-25',
      khSttdrcd: '2',
      status: '1',
      paramDate: '2019-3'
    },
    {
      id: '2c9235aa6ea573fc016ea7039ea3001e',
      khOrgName: '浦东区****水务管理局',
      khObjOrgName: '测试水环境综合治理有限公司',
      year: 2019,
      month: null,
      txt: '四季度',
      khStartDate: '2019年10月01日',
      kpEndDate: '2019年12月31日',
      khGrade: '良好',
      scoreGet: 88.5,
      khPayRate: 0.935,
      khPayRateStr: '93.5%',
      kpClassList: [
        {
          classId: '2c9235aa6e936281016e9386beb00015',
          className: '浦东区污水处理厂考核评分表',
          scoreGet: 62.3,
          weight: null,
          scoreGetStr: null,
          count: null,
          index: null,
          indexStr: null
        },
        {
          classId: '2c9235aa6e936281016e93871d780016',
          className: '配套管网及污水提升泵站考核评分表',
          scoreGet: 27.6,
          weight: null,
          scoreGetStr: null,
          count: null,
          index: null,
          indexStr: null
        }
      ],
      updateDate: '2019-11-27',
      khSttdrcd: '2',
      status: '1',
      paramDate: '2019-4'
    }
  ],
  item: {
    id: '2c9235aa6eca01b0016eda3ec2310000',
    khOrgName: '浦东区****水务管理局',
    khObjOrgName: '测试水环境综合治理有限公司',
    year: 2018,
    month: null,
    txt: '一季度',
    khStartDate: '2018年01月01日',
    kpEndDate: '2018年03月31日',
    khGrade: null,
    scoreGet: null,
    khPayRate: null,
    khPayRateStr: null,
    kpClassList: [
      {
        classId: '2c9235aa6e936281016e9386beb00015',
        className: '浦东区污水处理厂考核评分表',
        scoreGet: 0.0,
        weight: null,
        scoreGetStr: null,
        count: null,
        index: null,
        indexStr: null
      },
      {
        classId: '2c9235aa6e936281016e93871d780016',
        className: '配套管网及污水提升泵站考核评分表',
        scoreGet: 0.0,
        weight: null,
        scoreGetStr: null,
        count: null,
        index: null,
        indexStr: null
      }
    ],
    updateDate: null,
    khSttdrcd: null,
    status: '0',
    paramDate: '2018-1'
  }
}
// 甲方评估结果列表(年)
export const evaluationListByYear = {
  khList: [
    {
      id: '2c9235aa6ea17d08016ea1ca147a003d',
      khOrgName: '浦东****水务局',
      khObjOrgName: '浦东****环境治理有限公司',
      year: 2019,
      month: null,
      txt: '',
      khStartDate: '2019年01月01日',
      kpEndDate: '2019年12月31日',
      khGrade: '优秀',
      scoreGet: 98.2,
      khPayRate: 1.0,
      khPayRateStr: '100.0%',
      kpClassList: [
        {
          classId: '2c9235aa6e936281016e9386beb00015',
          className: '浦东***污水处理厂考核评分表',
          scoreGet: 67.9,
          weight: null,
          scoreGetStr: null,
          count: null,
          index: null,
          indexStr: null
        },
        {
          classId: '2c9235aa6e936281016e93871d780016',
          className: '配套管网及污水提升泵站考核评分表',
          scoreGet: 30.3,
          weight: null,
          scoreGetStr: null,
          count: null,
          index: null,
          indexStr: null
        }
      ],
      updateDate: '2019-11-25',
      khSttdrcd: '1',
      status: '1',
      paramDate: '2019'
    }
  ],
  item: {
    id: '2c9235aa6eb835a3016ec49c42be0000',
    khOrgName: '浦东****水务局',
    khObjOrgName: '浦东****环境治理有限公司',
    year: 2018,
    month: null,
    txt: '',
    khStartDate: '2018年01月01日',
    kpEndDate: '2018年12月31日',
    khGrade: null,
    scoreGet: null,
    khPayRate: null,
    khPayRateStr: null,
    kpClassList: [
      {
        classId: '2c9235aa6e936281016e9386beb00015',
        className: '浦东***污水处理厂考核评分表',
        scoreGet: 0.0,
        weight: null,
        scoreGetStr: null,
        count: null,
        index: null,
        indexStr: null
      },
      {
        classId: '2c9235aa6e936281016e93871d780016',
        className: '配套管网及污水提升泵站考核评分表',
        scoreGet: 0.0,
        weight: null,
        scoreGetStr: null,
        count: null,
        index: null,
        indexStr: null
      }
    ],
    updateDate: null,
    khSttdrcd: null,
    status: '0',
    paramDate: '2018'
  }
}

// 季度考核时间
export const reportSeasonList = [
  {
    txt: 2019,
    status: '1',
    lable: '2019年',
    subLabel: null,
    sub: [
      {
        txt: 1,
        status: '1',
        lable: '一季度',
        subLabel: '1月1日~3月31',
        sub: null
      },
      {
        txt: 2,
        status: '1',
        lable: '二季度',
        subLabel: '4月1日~6月30',
        sub: null
      },
      {
        txt: 3,
        status: '1',
        lable: '三季度',
        subLabel: '7月1日~9月30',
        sub: null
      },
      {
        txt: 4,
        status: '1',
        lable: '四季度',
        subLabel: '10月1日~12月31',
        sub: null
      }
    ]
  }
]

// 年度考核时间
export const reportYearList = [
  {
    txt: 2019,
    status: '1',
    lable: '2019年',
    subLabel: null,
    sub: null
  }
]

// 考核报告详情数据

export const reportDetailList = {
  tableTitle: {
    standardName: '浦东污水处理厂及配套管网、尾水净化工程',
    year: 2019,
    khStartDate: '2019年10月01日',
    khEndDate: '2019年12月31日',
    khSttarcd: null,
    scoreGet: 88.5,
    weight: null,
    score: null,
    khGrate: '良好',
    grate: null,
    khDate: '2019-11-26',
    txt: '四季度',
    khOrgName: '浦东***市政公用设施管理局',
    khObjOrgName: '浦东****水环境综合治理有限公司',
    payRateStr: '93.5'
  },
  tableData: [
    {
      khClass: {
        classId: '2c9235aa6e936281016e9386beb00015',
        className: '浦东污水处理厂考核评分表',
        scoreGet: 89.0,
        weight: 0.7,
        scoreGetStr: '62.3',
        count: null,
        index: 1,
        indexStr: '一'
      },
      table: [
        {
          id: '2c9235aa6e936281016e938775fe0017',
          title: '运行管理',
          total: 17.0,
          subs: [
            {
              id: '2c9235aa6ea573fc016ea7039ea8001f',
              khxm: '维护人员配备',
              khxmId: '2c9235aa6e936281016e938859180019',
              khbz:
                '<p>1.配备有相应数量的维护人员的得1分。</p><p>2.根据维护人员熟知业务程度、运行操作规程齐全得3分。</p>',
              score: 4.0,
              scoreGet: 4.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            },
            {
              id: '2c9235aa6ea573fc016ea7039eac0020',
              khxm: '制定运营维护手册和管理制度',
              khxmId: '2c9235aa6e93898e016e938a314b0000',
              khbz:
                '<p>1.已制定的得l分，未制定的不得分。</p><p>2.制度切实可行，可操作性，得1分。</p><p>3.各岗位贵权糊确清晰程度得1分。</p>',
              score: 3.0,
              scoreGet: 3.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            },
            {
              id: '2c9235aa6ea573fc016ea7039eae0021',
              khxm: '资料齐全、良好、更新及时',
              khxmId: '2c9235aa6e93898e016e938bb1160001',
              khbz:
                '<p>查看图纸、档案和设备资料保管齐全记录真实性、规范性得4分。</p>',
              score: 4.0,
              scoreGet: 4.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            },
            {
              id: '2c9235aa6ea573fc016ea7039eb10022',
              khxm: '为员工提供必要的人身保护装备及定期培训',
              khxmId: '2c9235aa6e93898e016e938c20650002',
              khbz:
                '<p>1.根据是否提供保护装备，及提供情况得1分。</p><p>2.进行定期指导培训的得2分。</p>',
              score: 3.0,
              scoreGet: 3.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            },
            {
              id: '2c9235aa6ea573fc016ea7039eb40023',
              khxm: '厂容厂貌',
              khxmId: '2c9235aa6e93898e016e938c9a560003',
              khbz:
                '<p>1.道路通畅、设施完好、照明设施齐整、干净整洁的得1分。</p><p>2.办公室、操作室、机房内无垃圾堆放，门窗玻璃无破碎、墙壁整洁，办公桌椅、工具摆放整齐的，得满分2分，否则每次每处扣0.5分，扣完为止。</p>',
              score: 3.0,
              scoreGet: 3.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            }
          ]
        },
        {
          id: '2c9235aa6e936281016e9387c0c90018',
          title: '维修养护',
          total: 70.0,
          subs: [
            {
              id: '2c9235aa6ea573fc016ea7039eb80024',
              khxm: '处理质量',
              khxmId: '2c9235aa6e93898e016e93aef55a000a',
              khbz:
                '<p>1.出水排放执行《城镇污水处理厂污染物排放标准》(GB I891 8-2002) 一级标准的A 标准。检测方法与上述标准一致， 按日为单位进行考， 当日不合格记录一次不合格。一次不合格扣2分， 满分30 分，扣完为止。同时并扣罚未达标天数的污水处理服务</p>',
              score: 30.0,
              scoreGet: 28.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            },
            {
              id: '2c9235aa6ea573fc016ea7039ebb0025',
              khxm: '处理质量',
              khxmId: '2c9235aa6e93898e016e93afc4dc000b',
              khbz:
                '<p>2.进水水质水量达到国家、省、市环保要求，且乙方应确保厂网一体的污水处理厂进水COD 月度平均浓度≥132mg/L，进水CCOD发生异常，乙方尽快检查原因并提出修复方案报甲方，甲方同意后实施修复，非乙方原因造成的，考核时予以免责。</p><p>达到前述要求得10分，一次不合格扣0.5分，扣完为止。</p>',
              score: 10.0,
              scoreGet: 8.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            },
            {
              id: '2c9235aa6ea573fc016ea7039ebe0026',
              khxm: '处理质量',
              khxmId: '2c9235aa6e93898e016e93b31ab3000c',
              khbz:
                '<p>3.污水处理厂的废气排放标准执行《城镇污水处理厂污染物排放标准》( GB18918-2002 ) 中大气污染物排放的二级标准和设计标准，满分5 分，未达标每次每处扣0.5分，扣完为止。</p>',
              score: 5.0,
              scoreGet: 5.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            },
            {
              id: '2c9235aa6ea573fc016ea7039ec00027',
              khxm: '处理质量',
              khxmId: '2c9235aa6e93898e016e93b384cd000d',
              khbz:
                '<p>4.污泥含水率不高于60%， 得5分， 未达标每次扣0.5分， 扣完为止。(协议约定乙方免贵情况除外)。</p>',
              score: 5.0,
              scoreGet: 5.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            },
            {
              id: '2c9235aa6ea573fc016ea7039ec30028',
              khxm: '建构筑物',
              khxmId: '2c9235aa6e93898e016e93b48fae000f',
              khbz:
                '<p>构筑物无渗漏、表面无鼓起或脱落现象， 油漆良好无腐蚀， 堪口出水均匀、池面清洁、闸阔无渗漏，安全有效的，得满分5分，否则每次每处扣0.5分，扣完为止。</p>',
              score: 5.0,
              scoreGet: 5.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            },
            {
              id: '2c9235aa6ea573fc016ea7039ec60029',
              khxm: '设施设备',
              khxmId: '2c9235aa6e93898e016e93b520020010',
              khbz:
                '<p>外观整洁、无腐蚀、渗漏、电气设备符合安全要求、附属设备工作正常、整机运行平稳可靠、仪器仪表准确灵敏、设备台账及维护档案齐全的得满分5 分， 否则每次每处扣0.5分，扣完为止。</p>',
              score: 5.0,
              scoreGet: 3.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            },
            {
              id: '2c9235aa6ea573fc016ea7039ec9002a',
              khxm: '安全生产 ',
              khxmId: '2c9235aa6e93898e016e93b5af390011',
              khbz:
                '<p>有健全的各级安全管理机构、安全规章制度、安全检查有记录、发现安全隐患能及时解决， 得1分。</p><p>安全培训：厂主管领导和安全负责人要定期接受正规安全培训，有主管部门颁发的安全培训证书，得1 分。</p><p>发生过一般性安全事故的每有1次扣2分，满分8分。重大事故一次性扣8分， 并扣罚当月运营费用。扣完为止</p>',
              score: 10.0,
              scoreGet: 7.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            }
          ]
        },
        {
          id: '2c9235aa6e93898e016e93b413ad000e',
          title: '尾水生态砾床',
          total: 10.0,
          subs: [
            {
              id: '2c9235aa6ea573fc016ea7039ecd002b',
              khxm: '排放标准',
              khxmId: '2c9235aa6e93898e016e93b6cf620014',
              khbz:
                '<p>将尾水由一级A 排放标准提高到地表水准IV类标准(具体标准详见6.11) 。某一项月平均值不达标为该月不达标，每次扣5分， 满分10分， 扣完为止（协议约定乙方免贵情况除外）。</p>',
              score: 10.0,
              scoreGet: 8.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            }
          ]
        },
        {
          id: '2c9235aa6e93898e016e93b5f8f60012',
          title: '应急预案',
          total: 3.0,
          subs: [
            {
              id: '2c9235aa6ea573fc016ea7039ecf002c',
              khxm: '应急预案方案',
              khxmId: '2c9235aa6e93898e016e93b7567a0015',
              khbz:
                '<p>1.建立应急预案、调控方案的得0.5分。</p><p>2.应急预案、调控方案明确具体、合理、可行几得0.5 分。</p>',
              score: 1.0,
              scoreGet: 1.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            },
            {
              id: '2c9235aa6ea573fc016ea7039ed2002d',
              khxm: '应急预案的技术、物资和人力等的储备保障',
              khxmId: '2c9235aa6e93898e016e93b7ea3f0016',
              khbz:
                '<p>1.成立内部应急指挥小组及工作分工情况得0.5分。</p><p>2.应急预案中需要的物资及技术措施的落实情况得1.5分。</p>',
              score: 2.0,
              scoreGet: 2.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            }
          ]
        },
        {
          id: '2c9235aa6e93898e016e93b671e00013',
          title: '社会影响',
          total: 3.0,
          subs: [
            {
              id: '2c9235aa6ea573fc016ea7039ed7002e',
              khxm: '奖惩指标',
              khxmId: '2c9235aa6e93898e016e93b8ec890017',
              khbz:
                '<p>区级表扬每次得0.5分，市级表扬1分，省级表扬2 分，区级通报批评每次扣0.5分，市级通报批评每次扣1 分，省级通报批评每次扣2分， 奖惩可以相抵， 若当年发生3 起批评(含）不得分且再次表扬也不得分。若无批评和奖励，则为0分。</p>',
              score: 3.0,
              scoreGet: 0.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            }
          ]
        }
      ]
    },
    {
      khClass: {
        classId: '2c9235aa6e936281016e93871d780016',
        className: '配套管网及污水提升泵站考核评分表',
        scoreGet: 92.0,
        weight: 0.3,
        scoreGetStr: '27.6',
        count: null,
        index: 2,
        indexStr: '二'
      },
      table: [
        {
          id: '2c9235aa6e93898e016e93b9bb610018',
          title: '生产资料考核',
          total: 10.0,
          subs: [
            {
              id: '2c9235aa6ea573fc016ea7039edb002f',
              khxm: '养护制度',
              khxmId: '2c9235aa6e93898e016e93bb87bf001d',
              khbz:
                '<p>养护制度( 巡查、养护、中小型维修、大型维修) 未按相关规定及时制定和上报，出现1 次扣0.5分， 扣完为止。</p>',
              score: 10.0,
              scoreGet: 10.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            }
          ]
        },
        {
          id: '2c9235aa6e93898e016e93ba031d0019',
          title: '现场运营质量考核',
          total: 60.0,
          subs: [
            {
              id: '2c9235aa6ea573fc016ea7039edf0030',
              khxm: '排水设施',
              khxmId: '2c9235aa6e93898e016e93bc0a28001e',
              khbz:
                '<p>因排水管道、箱涵、调蓄池等污水设施未按规定及时清掏、疏通、保养等养护到位的，每次每处扣0.5 分，扣完为止。</p>',
              score: 20.0,
              scoreGet: 20.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            },
            {
              id: '2c9235aa6ea573fc016ea7039ee10031',
              khxm: '文明施工',
              khxmId: '2c9235aa6e93898e016e93bc51e3001f',
              khbz:
                '<p>养护维修时没有做好文明施工，材料堆放不整齐、渣土清运不及时、清淤的淤泥污染路面的，每次每处扣0.5分，扣完为止。</p>',
              score: 6.0,
              scoreGet: 5.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            },
            {
              id: '2c9235aa6ea573fc016ea7039ee40032',
              khxm: '巡查的全面性',
              khxmId: '2c9235aa6e93898e016e93bce2f80020',
              khbz:
                '<p>因设施巡查不到位，造成未及时发现检查井盖和雨水箅子等排水设施丢失损坏的，每次每处扣0.5分， 扣完为止。</p>',
              score: 6.0,
              scoreGet: 5.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            },
            {
              id: '2c9235aa6ea573fc016ea7039ee70033',
              khxm: '维护、维修的及时性',
              khxmId: '2c9235aa6e93898e016e93bd2bf30021',
              khbz:
                '<p>在接到井盖或箅子等排水设施丢失损坏通知后，未及时到达现场围护或四小时内未开始维修的，每次每处扣0.5分，扣完为止。</p>',
              score: 6.0,
              scoreGet: 6.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            },
            {
              id: '2c9235aa6ea573fc016ea7039ee90034',
              khxm: '养护作业操作的规范性',
              khxmId: '2c9235aa6e93898e016e93bd81260022',
              khbz:
                '<p>养护作业时，未按要求进行管道通风、下井作业人员未按要求佩戴安全防护装备、现场交通栏护设施摆放不到位等相关情况， 每次每处扣0.5分， 扣完为止。</p>',
              score: 6.0,
              scoreGet: 4.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            },
            {
              id: '2c9235aa6ea573fc016ea7039eed0035',
              khxm: '应急处理',
              khxmId: '2c9235aa6e93898e016e93bde1300023',
              khbz:
                '<p>未及时发现并上报排水管道、检查井及其他排水设施被私接、占压、破坏等情况，且未采取必要制止和维护措施的，每次每处扣0.5 分，扣完为止。</p>',
              score: 6.0,
              scoreGet: 5.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            },
            {
              id: '2c9235aa6ea573fc016ea7039ef10036',
              khxm: '泵站设备',
              khxmId: '2c9235aa6e93898e016e93be6dc40024',
              khbz:
                '<p>泵站的电气、仪表完好率未达到90% 以上的，每次每处扣0.5分; 泵站的水泵、格栅清污机、闸门等设施未按规定进行养护的，每次每处扣0.5分；水泵、闸门及格栅清污机出现故障在3 个工作日内朱开始维修的，每次每处发现扣1分，影响正常运行的每次每处扣3 分，扣完为止。</p>',
              score: 6.0,
              scoreGet: 6.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            },
            {
              id: '2c9235aa6ea573fc016ea7039ef70037',
              khxm: '泵站安全',
              khxmId: '2c9235aa6e93898e016e93bee3f80025',
              khbz:
                '<p>泵站未按要求配备并定点放置相关消防器材、未按规定对起重设备、电气安全用具等进行定期检测的、泵站运营资料及维修记录不完善的， 每次每处扣0.5分，扣完为止。</p>',
              score: 4.0,
              scoreGet: 4.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            }
          ]
        },
        {
          id: '2c9235aa6e93898e016e93ba51ed001a',
          title: '问题整改及热线处置情况考核',
          total: 10.0,
          subs: [
            {
              id: '2c9235aa6ea573fc016ea7039efb0038',
              khxm: '问题整改的及时性',
              khxmId: '2c9235aa6e93898e016e93bf3e1a0026',
              khbz:
                '<p>运营公司对上季度考核通报问题未及时完成整改井上报整改情况的， 每一次扣2 分，扣完为止。</p>',
              score: 6.0,
              scoreGet: 5.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            },
            {
              id: '2c9235aa6ea573fc016ea7039f020039',
              khxm: '问题处理的及时性',
              khxmId: '2c9235aa6e93898e016e93bf98aa0027',
              khbz:
                '<p>运营公司未在24h 内及时响应或处理相关市民投诉、人大政协提案、领导及实施机构交办事项的，每件扣0.5分，扣完为止。</p>',
              score: 4.0,
              scoreGet: 4.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            }
          ]
        },
        {
          id: '2c9235aa6e93898e016e93ba9467001b',
          title: '应急抢险考核',
          total: 20.0,
          subs: [
            {
              id: '2c9235aa6ea573fc016ea7039f05003a',
              khxm: '抢险处理',
              khxmId: '2c9235aa6e93898e016e93c00ef10028',
              khbz:
                '<p>1 、因运营公司自身原因造成抢险项目组织不当， 导致末在规定时间内完成抢险处置的， 每次扣5 分，满分10分，扣完为止。</p><p>2、因运营公司自身原因造重成抢险处置不当，引发一般安全事故，每次扣5分；引发重大安全事故，每次扣10分，满分10分，扣完为止。</p>',
              score: 20.0,
              scoreGet: 18.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            }
          ]
        },
        {
          id: '2c9235aa6e93898e016e93bac886001c',
          title: '社会影响',
          total: 3.0,
          subs: [
            {
              id: '2c9235aa6ea573fc016ea7039f08003b',
              khxm: '奖惩指标',
              khxmId: '2c9235aa6e93898e016e93c0e082002a',
              khbz:
                '<p>区级表扬每次得0.5分，市级表扬1分，省级表扬2 分。区级通报批评每次扣0.5分，市级通报批评每次扣1 分，省级通报批评每次扣2分，奖惩可以相抵，若当年发生3起批评(含)不得分且再次表扬也不得分。若无批评和奖励，则为0分。</p>',
              score: 3.0,
              scoreGet: 0.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            }
          ]
        }
      ]
    },
    {
      khClass: {
        classId: null,
        className: '考核问题清单',
        scoreGet: null,
        weight: null,
        scoreGetStr: null,
        count: 13,
        index: 3,
        indexStr: '三'
      },
      table: [
        {
          id: '2c9235aa6e936281016e9387c0c90018',
          title: '维修养护',
          total: 55.0,
          subs: [
            {
              id: '2c9235aa6ea573fc016ea7039eb80024',
              khxm: '处理质量',
              khxmId: '2c9235aa6e93898e016e93aef55a000a',
              khbz:
                '<p>1.出水排放执行《城镇污水处理厂污染物排放标准》(GB I891 8-2002) 一级标准的A 标准。检测方法与上述标准一致， 按日为单位进行考， 当日不合格记录一次不合格。一次不合格扣2分， 满分30 分，扣完为止。同时并扣罚未达标天数的污水处理服务</p>',
              score: 30.0,
              scoreGet: 28.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            },
            {
              id: '2c9235aa6ea573fc016ea7039ebb0025',
              khxm: '处理质量',
              khxmId: '2c9235aa6e93898e016e93afc4dc000b',
              khbz:
                '<p>2.进水水质水量达到国家、省、市环保要求，且乙方应确保厂网一体的污水处理厂进水COD 月度平均浓度≥132mg/L，进水CCOD发生异常，乙方尽快检查原因并提出修复方案报甲方，甲方同意后实施修复，非乙方原因造成的，考核时予以免责。</p><p>达到前述要求得10分，一次不合格扣0.5分，扣完为止。</p>',
              score: 10.0,
              scoreGet: 8.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            },
            {
              id: '2c9235aa6ea573fc016ea7039ec60029',
              khxm: '设施设备',
              khxmId: '2c9235aa6e93898e016e93b520020010',
              khbz:
                '<p>外观整洁、无腐蚀、渗漏、电气设备符合安全要求、附属设备工作正常、整机运行平稳可靠、仪器仪表准确灵敏、设备台账及维护档案齐全的得满分5 分， 否则每次每处扣0.5分，扣完为止。</p>',
              score: 5.0,
              scoreGet: 3.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            },
            {
              id: '2c9235aa6ea573fc016ea7039ec9002a',
              khxm: '安全生产 ',
              khxmId: '2c9235aa6e93898e016e93b5af390011',
              khbz:
                '<p>有健全的各级安全管理机构、安全规章制度、安全检查有记录、发现安全隐患能及时解决， 得1分。</p><p>安全培训：厂主管领导和安全负责人要定期接受正规安全培训，有主管部门颁发的安全培训证书，得1 分。</p><p>发生过一般性安全事故的每有1次扣2分，满分8分。重大事故一次性扣8分， 并扣罚当月运营费用。扣完为止</p>',
              score: 10.0,
              scoreGet: 7.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            }
          ]
        },
        {
          id: '2c9235aa6e93898e016e93b413ad000e',
          title: '尾水生态砾床',
          total: 10.0,
          subs: [
            {
              id: '2c9235aa6ea573fc016ea7039ecd002b',
              khxm: '排放标准',
              khxmId: '2c9235aa6e93898e016e93b6cf620014',
              khbz:
                '<p>将尾水由一级A 排放标准提高到地表水准IV类标准(具体标准详见6.11) 。某一项月平均值不达标为该月不达标，每次扣5分， 满分10分， 扣完为止（协议约定乙方免贵情况除外）。</p>',
              score: 10.0,
              scoreGet: 8.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            }
          ]
        },
        {
          id: '2c9235aa6e93898e016e93b671e00013',
          title: '社会影响',
          total: 3.0,
          subs: [
            {
              id: '2c9235aa6ea573fc016ea7039ed7002e',
              khxm: '奖惩指标',
              khxmId: '2c9235aa6e93898e016e93b8ec890017',
              khbz:
                '<p>区级表扬每次得0.5分，市级表扬1分，省级表扬2 分，区级通报批评每次扣0.5分，市级通报批评每次扣1 分，省级通报批评每次扣2分， 奖惩可以相抵， 若当年发生3 起批评(含）不得分且再次表扬也不得分。若无批评和奖励，则为0分。</p>',
              score: 3.0,
              scoreGet: 0.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            }
          ]
        },
        {
          id: '2c9235aa6e93898e016e93ba031d0019',
          title: '现场运营质量考核',
          total: 24.0,
          subs: [
            {
              id: '2c9235aa6ea573fc016ea7039ee10031',
              khxm: '文明施工',
              khxmId: '2c9235aa6e93898e016e93bc51e3001f',
              khbz:
                '<p>养护维修时没有做好文明施工，材料堆放不整齐、渣土清运不及时、清淤的淤泥污染路面的，每次每处扣0.5分，扣完为止。</p>',
              score: 6.0,
              scoreGet: 5.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            },
            {
              id: '2c9235aa6ea573fc016ea7039ee40032',
              khxm: '巡查的全面性',
              khxmId: '2c9235aa6e93898e016e93bce2f80020',
              khbz:
                '<p>因设施巡查不到位，造成未及时发现检查井盖和雨水箅子等排水设施丢失损坏的，每次每处扣0.5分， 扣完为止。</p>',
              score: 6.0,
              scoreGet: 5.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            },
            {
              id: '2c9235aa6ea573fc016ea7039ee90034',
              khxm: '养护作业操作的规范性',
              khxmId: '2c9235aa6e93898e016e93bd81260022',
              khbz:
                '<p>养护作业时，未按要求进行管道通风、下井作业人员未按要求佩戴安全防护装备、现场交通栏护设施摆放不到位等相关情况， 每次每处扣0.5分， 扣完为止。</p>',
              score: 6.0,
              scoreGet: 4.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            },
            {
              id: '2c9235aa6ea573fc016ea7039eed0035',
              khxm: '应急处理',
              khxmId: '2c9235aa6e93898e016e93bde1300023',
              khbz:
                '<p>未及时发现并上报排水管道、检查井及其他排水设施被私接、占压、破坏等情况，且未采取必要制止和维护措施的，每次每处扣0.5 分，扣完为止。</p>',
              score: 6.0,
              scoreGet: 5.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            }
          ]
        },
        {
          id: '2c9235aa6e93898e016e93ba51ed001a',
          title: '问题整改及热线处置情况考核',
          total: 6.0,
          subs: [
            {
              id: '2c9235aa6ea573fc016ea7039efb0038',
              khxm: '问题整改的及时性',
              khxmId: '2c9235aa6e93898e016e93bf3e1a0026',
              khbz:
                '<p>运营公司对上季度考核通报问题未及时完成整改井上报整改情况的， 每一次扣2 分，扣完为止。</p>',
              score: 6.0,
              scoreGet: 5.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            }
          ]
        },
        {
          id: '2c9235aa6e93898e016e93ba9467001b',
          title: '应急抢险考核',
          total: 20.0,
          subs: [
            {
              id: '2c9235aa6ea573fc016ea7039f05003a',
              khxm: '抢险处理',
              khxmId: '2c9235aa6e93898e016e93c00ef10028',
              khbz:
                '<p>1 、因运营公司自身原因造成抢险项目组织不当， 导致末在规定时间内完成抢险处置的， 每次扣5 分，满分10分，扣完为止。</p><p>2、因运营公司自身原因造重成抢险处置不当，引发一般安全事故，每次扣5分；引发重大安全事故，每次扣10分，满分10分，扣完为止。</p>',
              score: 20.0,
              scoreGet: 18.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            }
          ]
        },
        {
          id: '2c9235aa6e93898e016e93bac886001c',
          title: '社会影响',
          total: 3.0,
          subs: [
            {
              id: '2c9235aa6ea573fc016ea7039f08003b',
              khxm: '奖惩指标',
              khxmId: '2c9235aa6e93898e016e93c0e082002a',
              khbz:
                '<p>区级表扬每次得0.5分，市级表扬1分，省级表扬2 分。区级通报批评每次扣0.5分，市级通报批评每次扣1 分，省级通报批评每次扣2分，奖惩可以相抵，若当年发生3起批评(含)不得分且再次表扬也不得分。若无批评和奖励，则为0分。</p>',
              score: 3.0,
              scoreGet: 0.0,
              scoreBGet: null,
              weight: null,
              status: '1',
              createdTime: null,
              scoreDescr: null,
              creatorName: null,
              opts: ['view']
            }
          ]
        }
      ]
    }
  ],
  baseId: '2c9235aa6ea573fc016ea7039ea3001e',
  status: 2,
  khSttdrcd: '2',
  khType: '2',
  kpDate: '',
  standardBaseId: '402881aa6e777548016e7776d11a0000'
}

// 绩效动态数据表详情
export const assessmentResultList = {
  khData: {
    khLst: [
      {
        year: '2019',
        seasonName: '一季度',
        startDate: '1月1日',
        endDate: '3月31日',
        score: 81.7,
        clcScore: 59.5, // 处理厂
        gwbzScore: 22.2, // 管网泵站
        scoreFloat: 0,
        level: '良好',
        khPayRate: '86.7%',
        khPayRateFloat: 0,
        items: []
      },
      {
        year: '2019',
        seasonName: '二季度',
        startDate: '4月1日',
        endDate: '6月30日',
        score: 87.4,
        clcScore: 61.6,
        gwbzScore: 25.8,
        scoreFloat: 0,
        level: '良好',
        khPayRate: '92.4%',
        khPayRateFloat: 0,
        items: []
      },
      {
        year: '2019',
        seasonName: '三季度',
        startDate: '7月1日',
        endDate: '9月30日',
        score: 87.9,
        clcScore: 63.0,
        gwbzScore: 24.9,
        scoreFloat: 0,
        level: '良好',
        khPayRate: '92.9%',
        khPayRateFloat: 0,
        items: []
      },
      {
        year: '2019',
        seasonName: '四季度',
        startDate: '10月1日',
        endDate: '12月31日',
        score: 88.5,
        clcScore: 62.3,
        gwbzScore: 27.6,
        scoreFloat: 0,
        level: '良好',
        khPayRate: '93.5%',
        khPayRateFloat: 0,
        items: []
      }
    ],
    currentKh: {
      year: '2019',
      seasonName: '四季度',
      startDate: '10月1日',
      endDate: '12月31日',
      score: 88.5,
      clcScore: null,
      gwbzScore: null,
      scoreFloat: 1,
      level: '良好',
      khPayRate: '93.5%',
      khPayRateFloat: 1,
      items: [
        {
          score: 62.3,
          fl: -1,
          name: '处理厂'
        },
        {
          score: 27.6,
          fl: 1,
          name: '管网泵站'
        }
      ]
    }
  },
  eqRunData: {
    pillars: ['运行率', '完好率', '覆盖率', '故障处理率'],
    eqRunLst: [
      {
        year: '2019',
        seasonName: '一季度',
        startDate: '1月1日',
        endDate: '3月31日',
        items: [
          {
            rate: 20.0,
            name: '设施设备运行率'
          },
          {
            rate: 10.0,
            name: '设施设备完好率'
          },
          {
            rate: 100.0,
            name: '巡检养护覆盖率'
          },
          {
            rate: 100.0,
            name: '设备故障处理率'
          }
        ]
      },
      {
        year: '2019',
        seasonName: '二季度',
        startDate: '4月1日',
        endDate: '6月30日',
        items: [
          {
            rate: 11.0,
            name: '设施设备运行率'
          },
          {
            rate: 11.0,
            name: '设施设备完好率'
          },
          {
            rate: 100.0,
            name: '巡检养护覆盖率'
          },
          {
            rate: 100.0,
            name: '设备故障处理率'
          }
        ]
      },
      {
        year: '2019',
        seasonName: '三季度',
        startDate: '7月1日',
        endDate: '9月30日',
        items: [
          {
            rate: 40.0,
            name: '设施设备运行率'
          },
          {
            rate: 10.0,
            name: '设施设备完好率'
          },
          {
            rate: 100.0,
            name: '巡检养护覆盖率'
          },
          {
            rate: 100.0,
            name: '设备故障处理率'
          }
        ]
      },
      {
        year: '2019',
        seasonName: '四季度',
        startDate: '10月1日',
        endDate: '12月31日',
        items: [
          {
            rate: 38.0,
            name: '设施设备运行率'
          },
          {
            rate: 46.0,
            name: '设施设备完好率'
          },
          {
            rate: 100.0,
            name: '巡检养护覆盖率'
          },
          {
            rate: 100.0,
            name: '设备故障处理率'
          }
        ]
      }
    ],
    currentEqRun: {
      year: '2019',
      seasonName: '四季度',
      startDate: '10月1日',
      endDate: '12月31日',
      items: [
        {
          rate: 38.0,
          fl: -1,
          name: '设施设备运行率'
        },
        {
          rate: 46.0,
          fl: 1,
          name: '设施设备完好率'
        },
        {
          rate: 100.0,
          fl: 0,
          name: '巡检养护覆盖率'
        },
        {
          rate: 100.0,
          fl: 0,
          name: '设备故障处理率'
        }
      ]
    }
  },
  codData: [
    {
      year: '2019',
      seasonName: '一季度',
      cod: 58.0,
      sunGsl: 29.0,
      items: [
        {
          name: '化学需氧量（mg/L）',
          cod: 198.0
        },
        {
          sunGsl: 99.0,
          name: '累计过水量m3'
        }
      ]
    },
    {
      year: '2019',
      seasonName: '二季度',
      cod: 38.0,
      sunGsl: 28.3,
      items: [
        {
          name: '化学需氧量（mg/L）',
          cod: 170.0
        },
        {
          sunGsl: 127.0,
          name: '累计过水量m3'
        }
      ]
    },
    {
      year: '2019',
      seasonName: '三季度',
      cod: 49.0,
      sunGsl: 38.6,
      items: [
        {
          name: '化学需氧量（mg/L）',
          cod: 189.0
        },
        {
          sunGsl: 149.0,
          name: '累计过水量m3'
        }
      ]
    },
    {
      year: '2019',
      seasonName: '四季度',
      cod: 58.667,
      sunGsl: 85.62,
      items: [
        {
          name: '化学需氧量（mg/L）',
          cod: 98.667
        },
        {
          sunGsl: 144.0,
          name: '累计过水量m3'
        }
      ]
    }
  ],
  hn3nData: [
    {
      year: '2019',
      seasonName: '一季度',
      hn3n: 4.7,
      items: [
        {
          name: '化学需氧量（mg/L）',
          cod: 45.0
        },
        {
          sunGsl: 16.0,
          name: '累计过水量m3'
        }
      ]
    },
    {
      year: '2019',
      seasonName: '二季度',
      hn3n: 4.4,
      items: [
        {
          name: '化学需氧量（mg/L）',
          cod: 43.0
        },
        {
          sunGsl: 72.0,
          name: '累计过水量m3'
        }
      ]
    },
    {
      year: '2019',
      seasonName: '三季度',
      hn3n: 5.3,
      items: [
        {
          name: '化学需氧量（mg/L）',
          cod: 42.0
        },
        {
          sunGsl: 59.0,
          name: '累计过水量m3'
        }
      ]
    },
    {
      year: '2019',
      seasonName: '四季度',
      hn3n: 4.9,
      items: [
        {
          name: '化学需氧量（mg/L）',
          cod: 72.333
        },
        {
          sunGsl: 245.0,
          name: '累计过水量m3'
        }
      ]
    }
  ],
  tpData: [
    {
      year: '2019',
      seasonName: '一季度',
      tp: 0.57,
      item: {
        name: '水量处理率（%）',
        slcll: 80.0
      }
    },
    {
      year: '2019',
      seasonName: '二季度',
      tp: 0.486,
      item: {
        name: '水量处理率（%）',
        slcll: 80.0
      }
    },
    {
      year: '2019',
      seasonName: '三季度',
      tp: 0.51,
      item: {
        name: '水量处理率（%）',
        slcll: 80.0
      }
    },
    {
      year: '2019',
      seasonName: '四季度',
      tp: 0.45,
      item: {
        name: '水量处理率（%）',
        slcll: 75.0
      }
    }
  ],
  tnData: [
    {
      year: '2019',
      seasonName: '一季度',
      tn: 16.8,
      item: {
        name: 'Ⅲ类',
        wqg: '3'
      }
    },
    {
      year: '2019',
      seasonName: '二季度',
      tn: 15.7,
      item: {
        name: 'Ⅳ类',
        wqg: '4'
      }
    },
    {
      year: '2019',
      seasonName: '三季度',
      tn: 15.2,
      item: {
        name: 'Ⅳ类',
        wqg: '4'
      }
    },
    {
      year: '2019',
      seasonName: '四季度',
      tn: 14.3,
      item: {
        name: 'Ⅰ类',
        wqg: '1'
      }
    }
  ],
  cwqData: {
    year: '2019',
    seasonName: '四季度',
    startDate: '10月1日',
    endDate: '12月31日',
    xjl: {
      fl: -1,
      name: '消减量',
      value: '-26.334 mg/L'
    },
    clsl: {
      fl: -1,
      name: '处理水量',
      value: '75.0%'
    },
    xjlv: {
      fl: 1,
      name: '消减率',
      value: '-27.0%'
    },
    szlx: {
      fl: 0,
      name: '水质类型',
      value: 'Ⅰ类'
    },
    inCod: {
      name: '入水口COD',
      value: '98.667 mg/L'
    },
    outCod: {
      name: '出水口COD',
      value: '72.333 mg/L'
    },
    inSl: {
      name: '入水口水量',
      value: '144.0 万m³'
    },
    outSl: {
      name: '出水口水量',
      value: '245.0 万m³'
    }
  }
}

// 对照分析 不同季度数据列表
export const muList = {
  titles: [
    {
      year: '2019',
      seasonName: '一季度',
      startTime: '1月1日',
      endTime: '3月31日',
      score: '81.7',
      level: '良好',
      khPayRate: '86.7%'
    },
    {
      year: '2019',
      seasonName: '二季度',
      startTime: '4月1日',
      endTime: '6月30日',
      score: '87.4',
      level: '良好',
      khPayRate: '92.4%'
    },
    {
      year: '2019',
      seasonName: '三季度',
      startTime: '7月1日',
      endTime: '9月30日',
      score: '87.9',
      level: '良好',
      khPayRate: '92.9%'
    },
    {
      year: '2019',
      seasonName: '四季度',
      startTime: '10月1日',
      endTime: '12月31日',
      score: '88.5',
      level: '良好',
      khPayRate: '93.5%'
    }
  ],
  items: [
    {
      className: '运行管理',
      khxmName: '维护人员配备',
      fullScore: '4.0',
      seasonScores: [
        {
          score: 4.0,
          fl: ''
        },
        {
          score: 4.0,
          fl: '0'
        },
        {
          score: 4.0,
          fl: '0'
        },
        {
          score: 4.0,
          fl: '0'
        }
      ]
    },
    {
      className: '运行管理',
      khxmName: '制定运营维护手册和管理制度',
      fullScore: '3.0',
      seasonScores: [
        {
          score: 3.0,
          fl: ''
        },
        {
          score: 3.0,
          fl: '0'
        },
        {
          score: 3.0,
          fl: '0'
        },
        {
          score: 3.0,
          fl: '0'
        }
      ]
    },
    {
      className: '运行管理',
      khxmName: '资料齐全、良好、更新及时',
      fullScore: '4.0',
      seasonScores: [
        {
          score: 4.0,
          fl: ''
        },
        {
          score: 3.0,
          fl: '-1'
        },
        {
          score: 4.0,
          fl: '1'
        },
        {
          score: 4.0,
          fl: '0'
        }
      ]
    },
    {
      className: '运行管理',
      khxmName: '为员工提供必要的人身保护装备及定期培训',
      fullScore: '3.0',
      seasonScores: [
        {
          score: 2.0,
          fl: ''
        },
        {
          score: 3.0,
          fl: '1'
        },
        {
          score: 2.0,
          fl: '-1'
        },
        {
          score: 3.0,
          fl: '1'
        }
      ]
    },
    {
      className: '运行管理',
      khxmName: '厂容厂貌',
      fullScore: '3.0',
      seasonScores: [
        {
          score: 3.0,
          fl: ''
        },
        {
          score: 3.0,
          fl: '0'
        },
        {
          score: 2.0,
          fl: '-1'
        },
        {
          score: 3.0,
          fl: '1'
        }
      ]
    },
    {
      className: '维修养护',
      khxmName: '处理质量',
      fullScore: '30.0',
      seasonScores: [
        {
          score: 26.0,
          fl: ''
        },
        {
          score: 26.0,
          fl: '0'
        },
        {
          score: 26.0,
          fl: '0'
        },
        {
          score: 28.0,
          fl: '1'
        }
      ]
    },
    {
      className: '维修养护',
      khxmName: '处理质量',
      fullScore: '10.0',
      seasonScores: [
        {
          score: 10.0,
          fl: ''
        },
        {
          score: 8.0,
          fl: '-1'
        },
        {
          score: 8.0,
          fl: '0'
        },
        {
          score: 8.0,
          fl: '0'
        }
      ]
    },
    {
      className: '维修养护',
      khxmName: '处理质量',
      fullScore: '5.0',
      seasonScores: [
        {
          score: 5.0,
          fl: ''
        },
        {
          score: 5.0,
          fl: '0'
        },
        {
          score: 4.0,
          fl: '-1'
        },
        {
          score: 5.0,
          fl: '1'
        }
      ]
    },
    {
      className: '维修养护',
      khxmName: '处理质量',
      fullScore: '5.0',
      seasonScores: [
        {
          score: 5.0,
          fl: ''
        },
        {
          score: 4.0,
          fl: '-1'
        },
        {
          score: 5.0,
          fl: '1'
        },
        {
          score: 5.0,
          fl: '0'
        }
      ]
    },
    {
      className: '维修养护',
      khxmName: '建构筑物',
      fullScore: '5.0',
      seasonScores: [
        {
          score: 5.0,
          fl: ''
        },
        {
          score: 5.0,
          fl: '0'
        },
        {
          score: 4.0,
          fl: '-1'
        },
        {
          score: 5.0,
          fl: '1'
        }
      ]
    },
    {
      className: '维修养护',
      khxmName: '设施设备',
      fullScore: '5.0',
      seasonScores: [
        {
          score: 3.0,
          fl: ''
        },
        {
          score: 5.0,
          fl: '1'
        },
        {
          score: 5.0,
          fl: '0'
        },
        {
          score: 3.0,
          fl: '-1'
        }
      ]
    },
    {
      className: '维修养护',
      khxmName: '安全生产 ',
      fullScore: '10.0',
      seasonScores: [
        {
          score: 6.0,
          fl: ''
        },
        {
          score: 8.0,
          fl: '1'
        },
        {
          score: 10.0,
          fl: '1'
        },
        {
          score: 7.0,
          fl: '-1'
        }
      ]
    },
    {
      className: '尾水生态砾床',
      khxmName: '排放标准',
      fullScore: '10.0',
      seasonScores: [
        {
          score: 6.0,
          fl: ''
        },
        {
          score: 8.0,
          fl: '1'
        },
        {
          score: 10.0,
          fl: '1'
        },
        {
          score: 8.0,
          fl: '-1'
        }
      ]
    },
    {
      className: '应急预案',
      khxmName: '应急预案方案',
      fullScore: '1.0',
      seasonScores: [
        {
          score: 1.0,
          fl: ''
        },
        {
          score: 1.0,
          fl: '0'
        },
        {
          score: 1.0,
          fl: '0'
        },
        {
          score: 1.0,
          fl: '0'
        }
      ]
    },
    {
      className: '应急预案',
      khxmName: '应急预案的技术、物资和人力等的储备保障',
      fullScore: '2.0',
      seasonScores: [
        {
          score: 2.0,
          fl: ''
        },
        {
          score: 2.0,
          fl: '0'
        },
        {
          score: 2.0,
          fl: '0'
        },
        {
          score: 2.0,
          fl: '0'
        }
      ]
    },
    {
      className: '社会影响',
      khxmName: '奖惩指标',
      fullScore: '3.0',
      seasonScores: [
        {
          score: 0.0,
          fl: ''
        },
        {
          score: 0.0,
          fl: '0'
        },
        {
          score: 0.0,
          fl: '0'
        },
        {
          score: 0.0,
          fl: '0'
        }
      ]
    },
    {
      className: '生产资料考核',
      khxmName: '养护制度',
      fullScore: '10.0',
      seasonScores: [
        {
          score: 9.0,
          fl: ''
        },
        {
          score: 9.0,
          fl: '0'
        },
        {
          score: 10.0,
          fl: '1'
        },
        {
          score: 10.0,
          fl: '0'
        }
      ]
    },
    {
      className: '现场运营质量考核',
      khxmName: '排水设施',
      fullScore: '20.0',
      seasonScores: [
        {
          score: 16.0,
          fl: ''
        },
        {
          score: 18.0,
          fl: '1'
        },
        {
          score: 18.0,
          fl: '0'
        },
        {
          score: 20.0,
          fl: '1'
        }
      ]
    },
    {
      className: '现场运营质量考核',
      khxmName: '文明施工',
      fullScore: '6.0',
      seasonScores: [
        {
          score: 5.0,
          fl: ''
        },
        {
          score: 5.0,
          fl: '0'
        },
        {
          score: 5.0,
          fl: '0'
        },
        {
          score: 5.0,
          fl: '0'
        }
      ]
    },
    {
      className: '现场运营质量考核',
      khxmName: '巡查的全面性',
      fullScore: '6.0',
      seasonScores: [
        {
          score: 5.0,
          fl: ''
        },
        {
          score: 6.0,
          fl: '1'
        },
        {
          score: 4.0,
          fl: '-1'
        },
        {
          score: 5.0,
          fl: '1'
        }
      ]
    },
    {
      className: '现场运营质量考核',
      khxmName: '维护、维修的及时性',
      fullScore: '6.0',
      seasonScores: [
        {
          score: 3.0,
          fl: ''
        },
        {
          score: 6.0,
          fl: '1'
        },
        {
          score: 3.0,
          fl: '-1'
        },
        {
          score: 6.0,
          fl: '1'
        }
      ]
    },
    {
      className: '现场运营质量考核',
      khxmName: '养护作业操作的规范性',
      fullScore: '6.0',
      seasonScores: [
        {
          score: 3.0,
          fl: ''
        },
        {
          score: 4.0,
          fl: '1'
        },
        {
          score: 5.0,
          fl: '1'
        },
        {
          score: 4.0,
          fl: '-1'
        }
      ]
    },
    {
      className: '现场运营质量考核',
      khxmName: '应急处理',
      fullScore: '6.0',
      seasonScores: [
        {
          score: 4.0,
          fl: ''
        },
        {
          score: 4.0,
          fl: '0'
        },
        {
          score: 6.0,
          fl: '1'
        },
        {
          score: 5.0,
          fl: '-1'
        }
      ]
    },
    {
      className: '现场运营质量考核',
      khxmName: '泵站设备',
      fullScore: '6.0',
      seasonScores: [
        {
          score: 4.0,
          fl: ''
        },
        {
          score: 5.0,
          fl: '1'
        },
        {
          score: 5.0,
          fl: '0'
        },
        {
          score: 6.0,
          fl: '1'
        }
      ]
    },
    {
      className: '现场运营质量考核',
      khxmName: '泵站安全',
      fullScore: '4.0',
      seasonScores: [
        {
          score: 2.0,
          fl: ''
        },
        {
          score: 4.0,
          fl: '1'
        },
        {
          score: 3.0,
          fl: '-1'
        },
        {
          score: 4.0,
          fl: '1'
        }
      ]
    },
    {
      className: '问题整改及热线处置情况考核',
      khxmName: '问题整改的及时性',
      fullScore: '6.0',
      seasonScores: [
        {
          score: 3.0,
          fl: ''
        },
        {
          score: 5.0,
          fl: '1'
        },
        {
          score: 4.0,
          fl: '-1'
        },
        {
          score: 5.0,
          fl: '1'
        }
      ]
    },
    {
      className: '问题整改及热线处置情况考核',
      khxmName: '问题处理的及时性',
      fullScore: '4.0',
      seasonScores: [
        {
          score: 4.0,
          fl: ''
        },
        {
          score: 3.0,
          fl: '-1'
        },
        {
          score: 4.0,
          fl: '1'
        },
        {
          score: 4.0,
          fl: '0'
        }
      ]
    },
    {
      className: '应急抢险考核',
      khxmName: '抢险处理',
      fullScore: '20.0',
      seasonScores: [
        {
          score: 16.0,
          fl: ''
        },
        {
          score: 17.0,
          fl: '1'
        },
        {
          score: 16.0,
          fl: '-1'
        },
        {
          score: 18.0,
          fl: '1'
        }
      ]
    },
    {
      className: '社会影响',
      khxmName: '奖惩指标',
      fullScore: '3.0',
      seasonScores: [
        {
          score: 0.0,
          fl: ''
        },
        {
          score: 0.0,
          fl: '0'
        },
        {
          score: 0.0,
          fl: '0'
        },
        {
          score: 0.0,
          fl: '0'
        }
      ]
    }
  ]
}

// 对照分析 同一阶段数据列表
export const singleList = {
  year: '2019',
  seasonName: '四季度',
  startTime: '10月1日',
  endTime: '12月31日',
  khName: '浦东***污水处理厂及配套管网、尾水净化工程',
  zpScore: '91.2',
  khScore: '88.5',
  items: [
    {
      className: '运行管理',
      khxm: '维护人员配备',
      fullScore: '4.0',
      zp: {
        score: 4.0,
        bz: '<p>1.配备有相应数量的维护人员的得1分。</p><p>2.根据维护人员熟知业务程度、运行操作规程齐全得3分。</p>'
      },
      kp: {
        score: 4.0,
        bz: '<p>1.配备有相应数量的维护人员的得1分。</p><p>2.根据维护人员熟知业务程度、运行操作规程齐全得3分。</p>'
      }
    },
    {
      className: '运行管理',
      khxm: '制定运营维护手册和管理制度',
      fullScore: '3.0',
      zp: {
        score: 3.0,
        bz:
          '<p>1.已制定的得l分，未制定的不得分。</p><p>2.制度切实可行，可操作性，得1分。</p><p>3.各岗位贵权糊确清晰程度得1分。</p>'
      },
      kp: {
        score: 3.0,
        bz:
          '<p>1.已制定的得l分，未制定的不得分。</p><p>2.制度切实可行，可操作性，得1分。</p><p>3.各岗位贵权糊确清晰程度得1分。</p>'
      }
    },
    {
      className: '运行管理',
      khxm: '资料齐全、良好、更新及时',
      fullScore: '4.0',
      zp: {
        score: 4.0,
        bz: '<p>查看图纸、档案和设备资料保管齐全记录真实性、规范性得4分。</p>'
      },
      kp: {
        score: 4.0,
        bz: '<p>查看图纸、档案和设备资料保管齐全记录真实性、规范性得4分。</p>'
      }
    },
    {
      className: '运行管理',
      khxm: '为员工提供必要的人身保护装备及定期培训',
      fullScore: '3.0',
      zp: {
        score: 3.0,
        bz: '<p>1.根据是否提供保护装备，及提供情况得1分。</p><p>2.进行定期指导培训的得2分。</p>'
      },
      kp: {
        score: 3.0,
        bz: '<p>1.根据是否提供保护装备，及提供情况得1分。</p><p>2.进行定期指导培训的得2分。</p>'
      }
    },
    {
      className: '运行管理',
      khxm: '厂容厂貌',
      fullScore: '3.0',
      zp: {
        score: 3.0,
        bz:
          '<p>1.道路通畅、设施完好、照明设施齐整、干净整洁的得1分。</p><p>2.办公室、操作室、机房内无垃圾堆放，门窗玻璃无破碎、墙壁整洁，办公桌椅、工具摆放整齐的，得满分2分，否则每次每处扣0.5分，扣完为止。</p>'
      },
      kp: {
        score: 3.0,
        bz:
          '<p>1.道路通畅、设施完好、照明设施齐整、干净整洁的得1分。</p><p>2.办公室、操作室、机房内无垃圾堆放，门窗玻璃无破碎、墙壁整洁，办公桌椅、工具摆放整齐的，得满分2分，否则每次每处扣0.5分，扣完为止。</p>'
      }
    },
    {
      className: '维修养护',
      khxm: '处理质量',
      fullScore: '30.0',
      zp: {
        score: 26.0,
        bz:
          '<p>1.出水排放执行《城镇污水处理厂污染物排放标准》(GB I891 8-2002) 一级标准的A 标准。检测方法与上述标准一致， 按日为单位进行考， 当日不合格记录一次不合格。一次不合格扣2分， 满分30 分，扣完为止。同时并扣罚未达标天数的污水处理服务</p>'
      },
      kp: {
        score: 28.0,
        bz:
          '<p>1.出水排放执行《城镇污水处理厂污染物排放标准》(GB I891 8-2002) 一级标准的A 标准。检测方法与上述标准一致， 按日为单位进行考， 当日不合格记录一次不合格。一次不合格扣2分， 满分30 分，扣完为止。同时并扣罚未达标天数的污水处理服务</p>'
      }
    },
    {
      className: '维修养护',
      khxm: '处理质量',
      fullScore: '10.0',
      zp: {
        score: 8.0,
        bz:
          '<p>2.进水水质水量达到国家、省、市环保要求，且乙方应确保厂网一体的污水处理厂进水COD 月度平均浓度≥132mg/L，进水CCOD发生异常，乙方尽快检查原因并提出修复方案报甲方，甲方同意后实施修复，非乙方原因造成的，考核时予以免责。</p><p>达到前述要求得10分，一次不合格扣0.5分，扣完为止。</p>'
      },
      kp: {
        score: 8.0,
        bz:
          '<p>2.进水水质水量达到国家、省、市环保要求，且乙方应确保厂网一体的污水处理厂进水COD 月度平均浓度≥132mg/L，进水CCOD发生异常，乙方尽快检查原因并提出修复方案报甲方，甲方同意后实施修复，非乙方原因造成的，考核时予以免责。</p><p>达到前述要求得10分，一次不合格扣0.5分，扣完为止。</p>'
      }
    },
    {
      className: '维修养护',
      khxm: '处理质量',
      fullScore: '5.0',
      zp: {
        score: 5.0,
        bz:
          '<p>3.污水处理厂的废气排放标准执行《城镇污水处理厂污染物排放标准》( GB18918-2002 ) 中大气污染物排放的二级标准和设计标准，满分5 分，未达标每次每处扣0.5分，扣完为止。</p>'
      },
      kp: {
        score: 5.0,
        bz:
          '<p>3.污水处理厂的废气排放标准执行《城镇污水处理厂污染物排放标准》( GB18918-2002 ) 中大气污染物排放的二级标准和设计标准，满分5 分，未达标每次每处扣0.5分，扣完为止。</p>'
      }
    },
    {
      className: '维修养护',
      khxm: '处理质量',
      fullScore: '5.0',
      zp: {
        score: 5.0,
        bz: '<p>4.污泥含水率不高于60%， 得5分， 未达标每次扣0.5分， 扣完为止。(协议约定乙方免贵情况除外)。</p>'
      },
      kp: {
        score: 5.0,
        bz: '<p>4.污泥含水率不高于60%， 得5分， 未达标每次扣0.5分， 扣完为止。(协议约定乙方免贵情况除外)。</p>'
      }
    },
    {
      className: '维修养护',
      khxm: '建构筑物',
      fullScore: '5.0',
      zp: {
        score: 5.0,
        bz:
          '<p>构筑物无渗漏、表面无鼓起或脱落现象， 油漆良好无腐蚀， 堪口出水均匀、池面清洁、闸阔无渗漏，安全有效的，得满分5分，否则每次每处扣0.5分，扣完为止。</p>'
      },
      kp: {
        score: 5.0,
        bz:
          '<p>构筑物无渗漏、表面无鼓起或脱落现象， 油漆良好无腐蚀， 堪口出水均匀、池面清洁、闸阔无渗漏，安全有效的，得满分5分，否则每次每处扣0.5分，扣完为止。</p>'
      }
    },
    {
      className: '维修养护',
      khxm: '设施设备',
      fullScore: '5.0',
      zp: {
        score: 4.0,
        bz:
          '<p>外观整洁、无腐蚀、渗漏、电气设备符合安全要求、附属设备工作正常、整机运行平稳可靠、仪器仪表准确灵敏、设备台账及维护档案齐全的得满分5 分， 否则每次每处扣0.5分，扣完为止。</p>'
      },
      kp: {
        score: 3.0,
        bz:
          '<p>外观整洁、无腐蚀、渗漏、电气设备符合安全要求、附属设备工作正常、整机运行平稳可靠、仪器仪表准确灵敏、设备台账及维护档案齐全的得满分5 分， 否则每次每处扣0.5分，扣完为止。</p>'
      }
    },
    {
      className: '维修养护',
      khxm: '安全生产 ',
      fullScore: '10.0',
      zp: {
        score: 8.0,
        bz:
          '<p>有健全的各级安全管理机构、安全规章制度、安全检查有记录、发现安全隐患能及时解决， 得1分。</p><p>安全培训：厂主管领导和安全负责人要定期接受正规安全培训，有主管部门颁发的安全培训证书，得1 分。</p><p>发生过一般性安全事故的每有1次扣2分，满分8分。重大事故一次性扣8分， 并扣罚当月运营费用。扣完为止</p>'
      },
      kp: {
        score: 7.0,
        bz:
          '<p>有健全的各级安全管理机构、安全规章制度、安全检查有记录、发现安全隐患能及时解决， 得1分。</p><p>安全培训：厂主管领导和安全负责人要定期接受正规安全培训，有主管部门颁发的安全培训证书，得1 分。</p><p>发生过一般性安全事故的每有1次扣2分，满分8分。重大事故一次性扣8分， 并扣罚当月运营费用。扣完为止</p>'
      }
    },
    {
      className: '尾水生态砾床',
      khxm: '排放标准',
      fullScore: '10.0',
      zp: {
        score: 9.0,
        bz:
          '<p>将尾水由一级A 排放标准提高到地表水准IV类标准(具体标准详见6.11) 。某一项月平均值不达标为该月不达标，每次扣5分， 满分10分， 扣完为止（协议约定乙方免贵情况除外）。</p>'
      },
      kp: {
        score: 8.0,
        bz:
          '<p>将尾水由一级A 排放标准提高到地表水准IV类标准(具体标准详见6.11) 。某一项月平均值不达标为该月不达标，每次扣5分， 满分10分， 扣完为止（协议约定乙方免贵情况除外）。</p>'
      }
    },
    {
      className: '应急预案',
      khxm: '应急预案方案',
      fullScore: '1.0',
      zp: {
        score: 1.0,
        bz: '<p>1.建立应急预案、调控方案的得0.5分。</p><p>2.应急预案、调控方案明确具体、合理、可行几得0.5 分。</p>'
      },
      kp: {
        score: 1.0,
        bz: '<p>1.建立应急预案、调控方案的得0.5分。</p><p>2.应急预案、调控方案明确具体、合理、可行几得0.5 分。</p>'
      }
    },
    {
      className: '应急预案',
      khxm: '应急预案的技术、物资和人力等的储备保障',
      fullScore: '2.0',
      zp: {
        score: 2.0,
        bz:
          '<p>1.成立内部应急指挥小组及工作分工情况得0.5分。</p><p>2.应急预案中需要的物资及技术措施的落实情况得1.5分。</p>'
      },
      kp: {
        score: 2.0,
        bz:
          '<p>1.成立内部应急指挥小组及工作分工情况得0.5分。</p><p>2.应急预案中需要的物资及技术措施的落实情况得1.5分。</p>'
      }
    },
    {
      className: '社会影响',
      khxm: '奖惩指标',
      fullScore: '3.0',
      zp: {
        score: 0.0,
        bz:
          '<p>区级表扬每次得0.5分，市级表扬1分，省级表扬2 分，区级通报批评每次扣0.5分，市级通报批评每次扣1 分，省级通报批评每次扣2分， 奖惩可以相抵， 若当年发生3 起批评(含）不得分且再次表扬也不得分。若无批评和奖励，则为0分。</p>'
      },
      kp: {
        score: 0.0,
        bz:
          '<p>区级表扬每次得0.5分，市级表扬1分，省级表扬2 分，区级通报批评每次扣0.5分，市级通报批评每次扣1 分，省级通报批评每次扣2分， 奖惩可以相抵， 若当年发生3 起批评(含）不得分且再次表扬也不得分。若无批评和奖励，则为0分。</p>'
      }
    },
    {
      className: '生产资料考核',
      khxm: '养护制度',
      fullScore: '10.0',
      zp: {
        score: 10.0,
        bz:
          '<p>养护制度( 巡查、养护、中小型维修、大型维修) 未按相关规定及时制定和上报，出现1 次扣0.5分， 扣完为止。</p>'
      },
      kp: {
        score: 10.0,
        bz:
          '<p>养护制度( 巡查、养护、中小型维修、大型维修) 未按相关规定及时制定和上报，出现1 次扣0.5分， 扣完为止。</p>'
      }
    },
    {
      className: '现场运营质量考核',
      khxm: '排水设施',
      fullScore: '20.0',
      zp: {
        score: 20.0,
        bz:
          '<p>因排水管道、箱涵、调蓄池等污水设施未按规定及时清掏、疏通、保养等养护到位的，每次每处扣0.5 分，扣完为止。</p>'
      },
      kp: {
        score: 20.0,
        bz:
          '<p>因排水管道、箱涵、调蓄池等污水设施未按规定及时清掏、疏通、保养等养护到位的，每次每处扣0.5 分，扣完为止。</p>'
      }
    },
    {
      className: '现场运营质量考核',
      khxm: '文明施工',
      fullScore: '6.0',
      zp: {
        score: 6.0,
        bz:
          '<p>养护维修时没有做好文明施工，材料堆放不整齐、渣土清运不及时、清淤的淤泥污染路面的，每次每处扣0.5分，扣完为止。</p>'
      },
      kp: {
        score: 5.0,
        bz:
          '<p>养护维修时没有做好文明施工，材料堆放不整齐、渣土清运不及时、清淤的淤泥污染路面的，每次每处扣0.5分，扣完为止。</p>'
      }
    },
    {
      className: '现场运营质量考核',
      khxm: '巡查的全面性',
      fullScore: '6.0',
      zp: {
        score: 5.0,
        bz:
          '<p>因设施巡查不到位，造成未及时发现检查井盖和雨水箅子等排水设施丢失损坏的，每次每处扣0.5分， 扣完为止。</p>'
      },
      kp: {
        score: 5.0,
        bz:
          '<p>因设施巡查不到位，造成未及时发现检查井盖和雨水箅子等排水设施丢失损坏的，每次每处扣0.5分， 扣完为止。</p>'
      }
    },
    {
      className: '现场运营质量考核',
      khxm: '维护、维修的及时性',
      fullScore: '6.0',
      zp: {
        score: 6.0,
        bz:
          '<p>在接到井盖或箅子等排水设施丢失损坏通知后，未及时到达现场围护或四小时内未开始维修的，每次每处扣0.5分，扣完为止。</p>'
      },
      kp: {
        score: 6.0,
        bz:
          '<p>在接到井盖或箅子等排水设施丢失损坏通知后，未及时到达现场围护或四小时内未开始维修的，每次每处扣0.5分，扣完为止。</p>'
      }
    },
    {
      className: '现场运营质量考核',
      khxm: '养护作业操作的规范性',
      fullScore: '6.0',
      zp: {
        score: 4.0,
        bz:
          '<p>养护作业时，未按要求进行管道通风、下井作业人员未按要求佩戴安全防护装备、现场交通栏护设施摆放不到位等相关情况， 每次每处扣0.5分， 扣完为止。</p>'
      },
      kp: {
        score: 4.0,
        bz:
          '<p>养护作业时，未按要求进行管道通风、下井作业人员未按要求佩戴安全防护装备、现场交通栏护设施摆放不到位等相关情况， 每次每处扣0.5分， 扣完为止。</p>'
      }
    },
    {
      className: '现场运营质量考核',
      khxm: '应急处理',
      fullScore: '6.0',
      zp: {
        score: 6.0,
        bz:
          '<p>未及时发现并上报排水管道、检查井及其他排水设施被私接、占压、破坏等情况，且未采取必要制止和维护措施的，每次每处扣0.5 分，扣完为止。</p>'
      },
      kp: {
        score: 5.0,
        bz:
          '<p>未及时发现并上报排水管道、检查井及其他排水设施被私接、占压、破坏等情况，且未采取必要制止和维护措施的，每次每处扣0.5 分，扣完为止。</p>'
      }
    },
    {
      className: '现场运营质量考核',
      khxm: '泵站设备',
      fullScore: '6.0',
      zp: {
        score: 6.0,
        bz:
          '<p>泵站的电气、仪表完好率未达到90% 以上的，每次每处扣0.5分; 泵站的水泵、格栅清污机、闸门等设施未按规定进行养护的，每次每处扣0.5分；水泵、闸门及格栅清污机出现故障在3 个工作日内朱开始维修的，每次每处发现扣1分，影响正常运行的每次每处扣3 分，扣完为止。</p>'
      },
      kp: {
        score: 6.0,
        bz:
          '<p>泵站的电气、仪表完好率未达到90% 以上的，每次每处扣0.5分; 泵站的水泵、格栅清污机、闸门等设施未按规定进行养护的，每次每处扣0.5分；水泵、闸门及格栅清污机出现故障在3 个工作日内朱开始维修的，每次每处发现扣1分，影响正常运行的每次每处扣3 分，扣完为止。</p>'
      }
    },
    {
      className: '现场运营质量考核',
      khxm: '泵站安全',
      fullScore: '4.0',
      zp: {
        score: 4.0,
        bz:
          '<p>泵站未按要求配备并定点放置相关消防器材、未按规定对起重设备、电气安全用具等进行定期检测的、泵站运营资料及维修记录不完善的， 每次每处扣0.5分，扣完为止。</p>'
      },
      kp: {
        score: 4.0,
        bz:
          '<p>泵站未按要求配备并定点放置相关消防器材、未按规定对起重设备、电气安全用具等进行定期检测的、泵站运营资料及维修记录不完善的， 每次每处扣0.5分，扣完为止。</p>'
      }
    },
    {
      className: '问题整改及热线处置情况考核',
      khxm: '问题整改的及时性',
      fullScore: '6.0',
      zp: {
        score: 5.0,
        bz: '<p>运营公司对上季度考核通报问题未及时完成整改井上报整改情况的， 每一次扣2 分，扣完为止。</p>'
      },
      kp: {
        score: 5.0,
        bz: '<p>运营公司对上季度考核通报问题未及时完成整改井上报整改情况的， 每一次扣2 分，扣完为止。</p>'
      }
    },
    {
      className: '问题整改及热线处置情况考核',
      khxm: '问题处理的及时性',
      fullScore: '4.0',
      zp: {
        score: 4.0,
        bz:
          '<p>运营公司未在24h 内及时响应或处理相关市民投诉、人大政协提案、领导及实施机构交办事项的，每件扣0.5分，扣完为止。</p>'
      },
      kp: {
        score: 4.0,
        bz:
          '<p>运营公司未在24h 内及时响应或处理相关市民投诉、人大政协提案、领导及实施机构交办事项的，每件扣0.5分，扣完为止。</p>'
      }
    },
    {
      className: '应急抢险考核',
      khxm: '抢险处理',
      fullScore: '20.0',
      zp: {
        score: 18.0,
        bz:
          '<p>1 、因运营公司自身原因造成抢险项目组织不当， 导致末在规定时间内完成抢险处置的， 每次扣5 分，满分10分，扣完为止。</p><p>2、因运营公司自身原因造重成抢险处置不当，引发一般安全事故，每次扣5分；引发重大安全事故，每次扣10分，满分10分，扣完为止。</p>'
      },
      kp: {
        score: 18.0,
        bz:
          '<p>1 、因运营公司自身原因造成抢险项目组织不当， 导致末在规定时间内完成抢险处置的， 每次扣5 分，满分10分，扣完为止。</p><p>2、因运营公司自身原因造重成抢险处置不当，引发一般安全事故，每次扣5分；引发重大安全事故，每次扣10分，满分10分，扣完为止。</p>'
      }
    },
    {
      className: '社会影响',
      khxm: '奖惩指标',
      fullScore: '3.0',
      zp: {
        score: 0.0,
        bz:
          '<p>区级表扬每次得0.5分，市级表扬1分，省级表扬2 分。区级通报批评每次扣0.5分，市级通报批评每次扣1 分，省级通报批评每次扣2分，奖惩可以相抵，若当年发生3起批评(含)不得分且再次表扬也不得分。若无批评和奖励，则为0分。</p>'
      },
      kp: {
        score: 0.0,
        bz:
          '<p>区级表扬每次得0.5分，市级表扬1分，省级表扬2 分。区级通报批评每次扣0.5分，市级通报批评每次扣1 分，省级通报批评每次扣2分，奖惩可以相抵，若当年发生3起批评(含)不得分且再次表扬也不得分。若无批评和奖励，则为0分。</p>'
      }
    }
  ]
}