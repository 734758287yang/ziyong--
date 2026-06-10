export const products = [
  {
    id: 1,
    serialNumber: 'BSH529292',
    productModel: 'A1102',
    partModel: '一体',
    productType: '服务器',
    productSeries: 'A1102',
    productName: '浪潮 NF5280M6 服务器',
    category: 'server',
    description: '高性能企业级服务器，适用于数据中心和云计算场景',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20server%20hardware%20product%20photo%20on%20white%20background&image_size=square',
    specs: {
      cpu: 'Intel Xeon Platinum 8358',
      memory: '256GB DDR4',
      storage: '2TB NVMe SSD',
      network: '双端口 25GbE'
    }
  },
  {
    id: 2,
    serialNumber: 'BPC202301',
    productModel: 'P320',
    partModel: '台式',
    productType: '台式机',
    productSeries: 'P320',
    productName: '浪潮 P320 工作站',
    category: 'desktop',
    description: '高性能专业工作站，适用于设计、渲染等专业应用',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20desktop%20workstation%20computer%20on%20white%20background&image_size=square',
    specs: {
      cpu: 'Intel Core i9-12900K',
      memory: '64GB DDR5',
      storage: '1TB NVMe SSD',
      network: '千兆以太网'
    }
  },
  {
    id: 3,
    serialNumber: 'LNB202305',
    productModel: 'L450',
    partModel: '笔记本',
    productType: '笔记本',
    productSeries: 'L450',
    productName: '浪潮 L450 商用笔记本',
    category: 'laptop',
    description: '轻薄商务笔记本，便携高效的移动办公体验',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20business%20laptop%20computer%20on%20white%20background&image_size=square',
    specs: {
      cpu: 'Intel Core i7-1355U',
      memory: '16GB DDR5',
      storage: '512GB NVMe SSD',
      display: '14英寸 2.8K OLED'
    }
  },
  {
    id: 4,
    serialNumber: 'SVR202310',
    productModel: 'A1202',
    partModel: '一体',
    productType: '服务器',
    productSeries: 'A1202',
    productName: '浪潮 NF8260M6 服务器',
    category: 'server',
    description: '旗舰级四路服务器，满足核心业务高性能需求',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=enterprise%20rack%20server%20hardware%20on%20white%20background&image_size=square',
    specs: {
      cpu: '4x Intel Xeon Platinum 8380',
      memory: '1TB DDR4',
      storage: '4TB NVMe SSD',
      network: '四端口 100GbE'
    }
  },
  {
    id: 5,
    serialNumber: 'DTP202302',
    productModel: 'P340',
    partModel: '台式',
    productType: '台式机',
    productSeries: 'P340',
    productName: '浪潮 P340 图形工作站',
    category: 'desktop',
    description: '专业图形工作站，适用于3D建模和视频后期制作',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20graphics%20workstation%20tower%20computer&image_size=square',
    specs: {
      cpu: 'Intel Core i9-13900K',
      memory: '128GB DDR5',
      storage: '2TB NVMe SSD + 4TB HDD',
      gpu: 'NVIDIA RTX A6000'
    }
  },
  {
    id: 6,
    serialNumber: 'LNB202308',
    productModel: 'L550',
    partModel: '笔记本',
    productType: '笔记本',
    productSeries: 'L550',
    productName: '浪潮 L550 高性能笔记本',
    category: 'laptop',
    description: '高性能移动工作站，满足专业用户的移动计算需求',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=high%20performance%20mobile%20workstation%20laptop&image_size=square',
    specs: {
      cpu: 'Intel Core i9-13900H',
      memory: '32GB DDR5',
      storage: '1TB NVMe SSD',
      display: '16英寸 4K mini-LED'
    }
  }
];

export const faqs = [
  {
    id: 1,
    productType: '服务器',
    category: 'server',
    title: '服务器无法开机怎么办？',
    question: '服务器按下电源键后没有任何反应，无法开机',
    answer: '请按以下步骤排查：1. 检查电源线连接是否牢固；2. 确认电源开关已打开；3. 检查电源模块指示灯状态；4. 尝试更换电源线；5. 如仍无法解决，请联系技术支持。',
    priority: 'high'
  },
  {
    id: 2,
    productType: '服务器',
    category: 'server',
    title: '如何查看服务器硬件状态？',
    question: '需要了解服务器当前的硬件运行状态',
    answer: '可通过以下方式查看：1. 登录BMC管理界面查看硬件状态；2. 使用浪潮管理软件Inspur BMC；3. 检查前面板指示灯状态；4. 查看系统日志和硬件告警信息。',
    priority: 'medium'
  },
  {
    id: 3,
    productType: '服务器',
    category: 'server',
    title: '服务器内存如何扩容？',
    question: '需要增加服务器内存容量以提升性能',
    answer: '扩容步骤：1. 确认支持的内存类型和最大容量；2. 购买匹配的内存条；3. 关机断电后打开机箱；4. 按照内存插槽顺序插入新内存；5. 开机进入BIOS确认识别。建议由专业人员进行操作。',
    priority: 'medium'
  },
  {
    id: 4,
    productType: '台式机',
    category: 'desktop',
    title: '台式机无法进入系统怎么办？',
    question: '电脑开机后卡在启动画面或黑屏',
    answer: '请尝试：1. 检查显示器连接线是否正常；2. 尝试进入安全模式；3. 检查硬盘是否被识别；4. 如有系统恢复分区，可尝试恢复；5. 检查是否有最近的硬件变更。',
    priority: 'high'
  },
  {
    id: 5,
    productType: '台式机',
    category: 'desktop',
    title: '如何升级显卡驱动？',
    question: '需要更新显卡驱动以获得更好的性能',
    answer: '升级方法：1. 访问显卡厂商官网下载最新驱动；2. 或访问浪潮驱动下载中心；3. 运行驱动安装程序；4. 重启电脑使驱动生效。建议使用官方提供的稳定版本驱动。',
    priority: 'low'
  },
  {
    id: 6,
    productType: '台式机',
    category: 'desktop',
    title: '台式机运行缓慢如何优化？',
    question: '电脑使用过程中感觉响应变慢',
    answer: '优化建议：1. 清理磁盘空间和临时文件；2. 检查是否有后台程序占用资源；3. 增加内存或升级到SSD；4. 定期进行磁盘碎片整理；5. 检查是否有病毒或恶意软件。',
    priority: 'medium'
  },
  {
    id: 7,
    productType: '笔记本',
    category: 'laptop',
    title: '笔记本电池续航时间短怎么办？',
    question: '笔记本电脑电池使用时间明显缩短',
    answer: '解决方法：1. 调整电源管理设置为节能模式；2. 降低屏幕亮度；3. 关闭不必要的后台程序；4. 检查电池健康状况；5. 如电池老化严重，建议更换新电池。',
    priority: 'medium'
  },
  {
    id: 8,
    productType: '笔记本',
    category: 'laptop',
    title: '笔记本WiFi连接不稳定怎么办？',
    question: '无线网络经常断连或信号弱',
    answer: '排查方法：1. 检查路由器是否正常工作；2. 尝试更新无线网卡驱动；3. 调整笔记本位置改善信号；4. 重置网络适配器；5. 检查是否有电磁干扰源。如问题持续，可能需要更换网卡。',
    priority: 'medium'
  },
  {
    id: 9,
    productType: '笔记本',
    category: 'laptop',
    title: '笔记本触摸板失灵如何解决？',
    question: '笔记本触摸板无法正常使用',
    answer: '解决步骤：1. 检查是否误触关闭快捷键（如Fn+F9）；2. 更新触摸板驱动程序；3. 在设备管理器中重新启用设备；4. 检查是否有液体进入；5. 如硬件故障，请联系售后维修。',
    priority: 'high'
  }
];
