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
};

export function getDocRedirect(slugs: string[] = []) {
  const key = slugs.join('/');
  return Object.hasOwn(docRedirects, key) ? docRedirects[key] : undefined;
}
