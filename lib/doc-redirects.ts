interface DocRedirect {
  destination?: string;
  sections?: Record<string, string>;
  preserveSection?: boolean;
}

export const docRedirects: Record<string, DocRedirect> = {
  'guide': {
    sections: { '第二步了解通用配置': '/docs/guide/#通用配置参考' },
  },
  'guide/shared-functions': {
    destination: '/docs/guide/#通用配置参考',
    sections: { '依赖与结果检查': '/docs/guide/config-management/' },
  },
  'guide/region-selection': {
    destination: '/docs/fishing/pools/#用选区工具创建水域',
    sections: {
      '多边形工具设置': '/docs/guide/first-run/#多边形选区工具',
      '直接配置挂机区域': '/docs/afkreward/afk-areas/#区域识别与结算验证',
      '地图区域不是选区工具': '/docs/map/worlds/#点亮区域战争迷雾',
      '两点选区的区别': '/docs/regions/selection/#设置两个角点',
    },
  },
  'guide/mail-delivery': {
    destination: '/docs/mail/presets/#预设派发与附件领取示例',
    sections: {
      '在其他功能中引用': '/docs/mail/presets/#在其他模块使用预设',
      '各模块实际用法': '/docs/mail/presets/#在其他模块使用预设',
      '配置片段不能通用复制': '/docs/mail/presets/#在其他模块使用预设',
      '在线阶段奖励': '/docs/onlinerewards/time-rewards/#阶段推进机制',
      '首次准入邮件': '/docs/eventpacket/actions/#首次准入邮件',
      '多人派发': '/docs/mail/presets/#派发目标',
      '无法收到或领取': '/docs/guide/config-management/#邮箱mail',
    },
  },
  'guide/rewards-and-commands': {
    destination: '/docs/guide/config-management/#奖励异常与反馈信息',
    sections: { '命令里的玩家名': '/docs/guide/config-syntax/#id显示名称和占位符不同' },
  },
  'guide/attributes-and-effects': {
    destination: '/docs/guide/first-run/#属性插件与模组兼容',
    sections: {
      '示例称号提供持续药水': '/docs/title/title-definitions/#持续药水效果display-effects',
      '展示属性与收藏属性': '/docs/title/title-definitions/#展示属性display-attributes',
      '道具与副本的定时效果': '/docs/prop/effects/#药水',
      '无效果时怎样检查': '/docs/guide/config-management/#按键占位符与功能依赖',
    },
  },
  'guide/keybinds': {
    destination: '/docs/guide/first-run/#全局按键',
    sections: {
      '拾取清单快捷键': '/docs/pickup/scanner-mode/#在宿主注册按键',
      'prop-槽位按键': '/docs/prop/keybinds/#配置按键与槽位',
      '战斗特效按键触发': '/docs/combateffect/packet-definitions/#keybind-条件',
      '排查顺序': '/docs/guide/config-management/#按键占位符与功能依赖',
    },
  },
  'guide/notifications-and-actions': {
    destination: '/docs/eventpacket/actions/#实时动作',
    sections: {
      '用信号播放字幕': '/docs/eventpacket/actions/#用信号播放字幕',
      '定时与声音等其他公共需求': '/docs/eventpacket/services/',
    },
  },
  'guide/chemdah-setup': {
    destination: '/docs/questgps/chemdah-walkthrough/',
    preserveSection: true,
  },
  'guide/multi-ui': {
    destination: '/docs/announcer/configuration/#ui-配置节ui',
    sections: {
      'tab-使用目标列表': '/docs/tab/configuration/#切换与验证布局',
      '界面文件自动注册与覆盖': '/docs/announcer/configuration/#ui-配置节ui',
    },
  },
  'guide/cross-server-setup': {
    sections: {
      '按模块开启': '/docs/guide/cross-server-setup/#验证步骤',
      '验证共享仓库': '/docs/warehouse/shared-warehouse/#验证共享仓库',
    },
  },
  'guide/conditions': {
    sections: {
      'menu-菜单按钮显示条件': '/docs/menu/configuration/#从一个可验证的按钮开始',
      'mail-邮件领取条件': '/docs/mail/presets/#领取条件claim-conditions',
      'battlepass-任务条件': '/docs/battlepass/tasks/#条件系统',
    },
  },
  'guide/item-sources': {
    sections: {
      'market-商店物品': '/docs/market/shops/',
      'battlepass-等级奖励': '/docs/battlepass/rewards/#item-物品奖励',
      'mail-邮件附件': '/docs/mail/presets/#物品附件item-attachments',
    },
  },
  'guide/item-matching': {
    sections: {
      '物品费用示例': '/docs/map/anchors/#物品消耗',
      '完整示例按标签识别鱼竿': '/docs/fishing/rods/#按标签识别鱼竿',
    },
  },
  'guide/icons': {
    sections: {
      'menu-菜单按钮': '/docs/menu/configuration/#从一个可验证的按钮开始',
      'market-商店商品': '/docs/market/shops/',
      'battlepass-等级奖励': '/docs/battlepass/rewards/#奖励图标配置',
      'fishing-鱼类图鉴': '/docs/fishing/fishes/',
      'lottery-抽奖物品': '/docs/lottery/configuration/',
    },
  },
  'guide/text-moderation': {
    sections: { '提示文字与内容过滤不同': '/docs/guide/text-moderation/#已接入的文本场景' },
  },
  'afkreward/configuration': {
    sections: {
      '区域字段': '/docs/afkreward/afk-areas/#区域顶层字段',
      '区域边界pos': '/docs/afkreward/afk-areas/#区域边界判定',
      '传送点teleport': '/docs/afkreward/afk-areas/#传送点配置',
      '奖励配置reward': '/docs/afkreward/reward-tiers/#档位定义',
      '奖励档位': '/docs/afkreward/reward-tiers/#档位匹配逻辑',
      '物品奖励rewarditem-rewards': '/docs/afkreward/reward-tiers/#物品奖励配置',
      '倍率配置multiplier': '/docs/afkreward/reward-tiers/#倍率配置',
      '定时倍率调度multiplierschedules': '/docs/afkreward/reward-tiers/#定时倍率调度',
      '区域配置完整示例': '/docs/afkreward/afk-areas/#区域识别与结算验证',
    },
  },
  'afkreward/commands': {
    sections: {
      'ui-配置': '/docs/afkreward/configuration/#hud-配置ui',
      'hud-控件': '/docs/afkreward/configuration/#hud-配置ui',
      '消息文件': '/docs/afkreward/configuration/#消息文件',
      '消息分类': '/docs/afkreward/configuration/#消息文件',
      '关键消息键': '/docs/afkreward/configuration/#消息文件',
    },
  },
  'announcer/configuration': {
    sections: {
      '公告条目定义announceryml': '/docs/announcer/entries/#条目配置',
      '字幕帧定义subtitlegroupsyml': '/docs/announcer/subtitle/#字幕组文件格式',
      '公告条目示例': '/docs/announcer/entries/#最少改两处即可开始',
      '字幕组示例': '/docs/announcer/subtitle/#完整字幕组示例',
    },
  },
  'map/configuration': {
    sections: { '贴图导航提示navigationtexture-marker150-新增': '/docs/map/configuration/#贴图导航提示navigationtexture-marker' },
  },
  'market/commands': {
    sections: { 'status-输出示例': '/docs/market/commands/#status-输出说明' },
  },
  'menu/configuration': {
    sections: { '全屏功能导航与悬停详情150': '/docs/menu/configuration/#全屏功能导航与悬停详情' },
  },
  'questgps/commands': {
    sections: {
      '消息文件': '/docs/questgps/configuration/#消息文件',
      '消息键一览': '/docs/questgps/configuration/#消息文件',
    },
  },
  'tooltip/configuration': {
    sections: {
      '消息前缀prefix': '/docs/tooltip/configuration/#消息键一览',
      '权限不足提示commonno-permission': '/docs/tooltip/configuration/#消息键一览',
      '仅限玩家使用提示commonplayer-only': '/docs/tooltip/configuration/#消息键一览',
      '状态信息标题adminstatus-title': '/docs/tooltip/configuration/#消息键一览',
      '状态统计数量文字adminstatus-cache-size': '/docs/tooltip/configuration/#消息键一览',
      '状态统计时效文字adminstatus-ttl': '/docs/tooltip/configuration/#消息键一览',
      '无统计数据提示adminstatus-no-cache': '/docs/tooltip/configuration/#消息键一览',
      '帮助菜单标题helptitle': '/docs/tooltip/configuration/#消息键一览',
      '状态命令帮助helpstatus': '/docs/tooltip/configuration/#消息键一览',
      '完整配置示例': '/docs/tooltip/configuration/#自定义消息示例',
      '配置管理': '/docs/tooltip/configuration/#主配置文件configyml',
    },
  },
  'chat/configuration': {
    sections: {
      '频道字段表': '/docs/chat/channels/#频道定义字段',
      '普通频道normalyml': '/docs/chat/channels/#创建一个附近频道',
      '全服频道globalyml': '/docs/chat/channels/#频道模式',
      '私聊频道privateyml': '/docs/chat/channels/#频道模式',
      '管理频道staffyml': '/docs/chat/channels/#权限模型',
    },
  },
  'mail/configuration': {
    sections: {
      '物品附件': '/docs/mail/presets/#物品附件item-attachments',
      '货币附件': '/docs/mail/presets/#货币附件currency-attachments',
      '领取命令': '/docs/mail/presets/#领取命令claim-commands',
    },
  },
  'questgps/gate': {
    sections: {
      '拦截行为': '/docs/questgps/gate/#分类拦截',
      '拦截行为-1': '/docs/questgps/gate/#命令拦截',
      '拦截行为-2': '/docs/questgps/gate/#模块入口拦截',
      '拦截行为-3': '/docs/questgps/gate/#事件规则拦截',
    },
  },
  'title/configuration': {
    sections: {
      '称号定义字段表': '/docs/title/title-definitions/#称号定义字段全表',
      '属性键值对与文本行': '/docs/title/title-definitions/#展示属性display-attributes',
    },
  },
  'loginview': {
    sections: {
      '部署流程': '/docs/loginview/getting-started/#启用-loginview',
      '与其他登录插件配合': '/docs/loginview/getting-started/#与其他登录插件配合',
    },
  },
  'loginview/getting-started': {
    sections: {
      '离线模式与游戏内密码': '/docs/loginview/password-login/#设置离线直连',
      '配置密码入口': '/docs/loginview/password-login/#配置密码入口',
      '注册与重新登录': '/docs/loginview/password-login/#注册与重新登录',
    },
  },
  'loginview/mixed-login': {
    sections: {
      '启动游戏服': '/docs/loginview/mixed-login/#配置游戏服入口',
      '验证代理入口': '/docs/loginview/mixed-login/#验证身份与准入',
      '部署约束': '/docs/loginview/#选择登录入口',
    },
  },
  'loginview/center': {
    sections: { '验证准入': '/docs/loginview/center/#玩家在游戏内确认授权' },
  },
  'loginview/external-authorization': {
    destination: '/docs/loginview/center/',
    sections: {
      '身份系统要求': '/docs/loginview/center/#部署条件',
      '授权域名与回调登记': '/docs/loginview/center/#部署条件',
      '外部授权配置': '/docs/loginview/center/#编写中心配置',
      'https-转发配置': '/docs/loginview/center/#https-转发配置',
      '环境变量与启动': '/docs/loginview/center/#启动中心',
      '官网授权验证': '/docs/loginview/center/#玩家在游戏内确认授权',
      '启动器接入': '/docs/loginview/center/#登记启动器',
      '身份与连接': '/docs/loginview/center/#玩家在游戏内确认授权',
    },
  },
  'loginview/configuration': {
    sections: {
      '模块启用': '/docs/loginview/getting-started/#启用-loginview',
      '本机离线密码': '/docs/loginview/password-login/#设置离线直连',
      '密码与准入配置': '/docs/loginview/password-login/#配置密码入口',
      '启动与验证本机密码': '/docs/loginview/password-login/#注册与重新登录',
      '微软在线直连': '/docs/loginview/online-login/#配置原生在线入口',
      '验证准入': '/docs/loginview/#配置验证',
      '界面加载排查': '/docs/loginview/commands/#故障排查',
    },
  },
  'loginview/commands': {
    sections: { '本机密码入口校验': '/docs/loginview/password-login/#设置离线直连' },
  },
  'loginview/external-api': {
    sections: {
      '发起授权': '/docs/loginview/external-api/#浏览器授权流程',
      '回调验证与授权码兑换': '/docs/loginview/external-api/#浏览器授权流程',
      '申请设备码': '/docs/loginview/external-api/#设备授权流程',
      '轮询授权结果': '/docs/loginview/external-api/#轮询与取消',
      '取消授权': '/docs/loginview/external-api/#轮询与取消',
    },
  },
};

export function getDocRedirect(slugs: string[] = []) {
  const key = slugs.join('/');
  return Object.hasOwn(docRedirects, key) ? docRedirects[key] : undefined;
}
