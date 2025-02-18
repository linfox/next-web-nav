export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "外贸导航",
  description: "基于 Next.js 的外贸导航网站",
  mainNav: [],
  links: {
    twitter: "https://twitter.com/liwenka1",
    github: "https://github.com/liwenka1/next-web-nav"
  }
}

export interface NavLink {
  /** 站点图标 */
  icon: string
  /** 站点名称 */
  title: string
  /** 站点描述 */
  desc: string
  /** 站点链接 */
  link: string
}

type NavData = {
  title: string
  items: NavLink[]
}

export const NavData: NavData[] = [
  {
    "title": "01-机械行业",
    "items": [
      {
        "icon": "https://logo.clearbit.com/www.mei.net.cn",
        "title": "中国机经网",
        "desc": "中国机经网",
        "link": "http://www.mei.net.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.amic.agri.gov.cn",
        "title": "中国农业机械化信息网",
        "desc": "中国农业机械化信息网",
        "link": "http://www.amic.agri.gov.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cmtba.org.cn",
        "title": "中国机床协会",
        "desc": "中国机床协会",
        "link": "http://www.cmtba.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.21-sun.com",
        "title": "工程机械网",
        "desc": "工程机械网",
        "link": "http://www.21-sun.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.gongkong.com",
        "title": "中国工控网",
        "desc": "中国工控网",
        "link": "http://www.gongkong.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cmpbook.com",
        "title": "机械工业出版社",
        "desc": "机械工业出版社",
        "link": "http://www.cmpbook.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.instrument.com.cn",
        "title": "仪器信息网",
        "desc": "仪器信息网",
        "link": "http://www.instrument.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.d1cm.com",
        "title": "第一工程机械网",
        "desc": "第一工程机械网",
        "link": "http://www.d1cm.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chuandong.com",
        "title": "中国传动网",
        "desc": "中国传动网",
        "link": "http://www.chuandong.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cehome.com",
        "title": "铁甲工程机械网",
        "desc": "铁甲工程机械网",
        "link": "http://www.cehome.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinaforge.org.cn",
        "title": "中国锻造网",
        "desc": "中国锻造网",
        "link": "http://www.chinaforge.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.51hanjie.com",
        "title": "超声波焊接",
        "desc": "超声波焊接",
        "link": "http://www.51hanjie.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ca800.com",
        "title": "中国自动化网",
        "desc": "中国自动化网",
        "link": "http://www.ca800.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.yzw.cc",
        "title": "中国压铸网",
        "desc": "中国压铸网",
        "link": "http://www.yzw.cc/"
      },
      {
        "icon": "https://logo.clearbit.com/www.dj114.cc",
        "title": "电机网",
        "desc": "电机网",
        "link": "http://www.dj114.cc/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cbia.com.cn",
        "title": "中国轴承行业网",
        "desc": "中国轴承行业网",
        "link": "http://www.cbia.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.587766.com",
        "title": "中国工业信息网",
        "desc": "中国工业信息网",
        "link": "http://www.587766.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.yxx.com.cn",
        "title": "中国注塑网",
        "desc": "中国注塑网",
        "link": "http://www.yxx.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.mycimt.com",
        "title": "国际机床网",
        "desc": "国际机床网",
        "link": "http://www.mycimt.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.camda.cn",
        "title": "中国农机流通网",
        "desc": "中国农机流通网",
        "link": "http://www.camda.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.mei.net.cn",
        "title": "机经网",
        "desc": "机经网",
        "link": "http://www.mei.net.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cncma.org",
        "title": "中国工程机械工业协会",
        "desc": "中国工程机械工业协会",
        "link": "http://www.cncma.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.caamm.org.cn",
        "title": "中国农机工业网",
        "desc": "中国农机工业网",
        "link": "http://www.caamm.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.gkzhan.com",
        "title": "智能制造网",
        "desc": "智能制造网",
        "link": "https://www.gkzhan.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.zyzhan.com",
        "title": "中国制药机械设备网",
        "desc": "中国制药机械设备网",
        "link": "http://www.zyzhan.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.usedequip.com",
        "title": "used equipment network",
        "desc": "used equipment network",
        "link": "http://www.usedequip.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cnelc.com",
        "title": "中国工业电器网",
        "desc": "中国工业电器网",
        "link": "http://www.cnelc.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jx.cn",
        "title": "中国机械网",
        "desc": "中国机械网",
        "link": "http://www.jx.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.wjw.cn",
        "title": "全球五金网",
        "desc": "全球五金网",
        "link": "http://www.wjw.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.qqma.com",
        "title": "全球机械网",
        "desc": "全球机械网",
        "link": "http://www.qqma.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.5j35.com",
        "title": "中国五金商务网",
        "desc": "中国五金商务网",
        "link": "http://www.5j35.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ccen.net",
        "title": "中国化工设备网",
        "desc": "中国化工设备网",
        "link": "http://www.ccen.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.21-sun.com",
        "title": "中国工程机械商贸网",
        "desc": "中国工程机械商贸网",
        "link": "http://www.21-sun.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.mw35.com",
        "title": "中国金属加工网",
        "desc": "中国金属加工网",
        "link": "http://www.mw35.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinawj.com.cn",
        "title": "中国五金商机网",
        "desc": "中国五金商机网",
        "link": "http://www.chinawj.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ddgjw.com",
        "title": "中国电动工具网",
        "desc": "中国电动工具网",
        "link": "http://www.ddgjw.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.machine-information.com",
        "title": "中国机床信息网",
        "desc": "中国机床信息网",
        "link": "http://www.machine-information.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.zgcdjx.com",
        "title": "中国传动机械网",
        "desc": "中国传动机械网",
        "link": "http://www.zgcdjx.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.zgbfw.com",
        "title": "中国泵阀网",
        "desc": "中国泵阀网",
        "link": "http://www.zgbfw.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.pipeinfo.net",
        "title": "中国管件信息网",
        "desc": "中国管件信息网",
        "link": "http://www.pipeinfo.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.luosi.com",
        "title": "华人螺丝网",
        "desc": "华人螺丝网",
        "link": "http://www.luosi.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.diaokeji.net",
        "title": "雕刻机品牌网",
        "desc": "雕刻机品牌网",
        "link": "http://www.diaokeji.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.wjjw.cn",
        "title": "中国挖掘机网",
        "desc": "中国挖掘机网",
        "link": "http://www.wjjw.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.hooshong.com",
        "title": "机械在线",
        "desc": "机械在线",
        "link": "http://www.hooshong.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.wfggw.com",
        "title": "中国无缝钢管网",
        "desc": "中国无缝钢管网",
        "link": "http://www.wfggw.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chemm.cn",
        "title": "中国化工机械网",
        "desc": "中国化工机械网",
        "link": "http://www.chemm.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.sewworld.com",
        "title": "中国缝制设备网",
        "desc": "中国缝制设备网",
        "link": "http://www.sewworld.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.make365.com",
        "title": "佛山机械网",
        "desc": "佛山机械网",
        "link": "http://www.make365.com/"
      },
      {
        "icon": "https://logo.clearbit.com/china.machine365.com",
        "title": "中华机械网",
        "desc": "中华机械网",
        "link": "http://china.machine365.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.zcwz.com",
        "title": "中华轴承网",
        "desc": "中华轴承网",
        "link": "http://www.zcwz.com/"
      },
      {
        "icon": "https://logo.clearbit.com/china.globalhardwares.com",
        "title": "中国五金网",
        "desc": "中国五金网",
        "link": "http://china.globalhardwares.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.35mc.com",
        "title": "商虎机械网",
        "desc": "商虎机械网",
        "link": "http://www.35mc.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.158jixie.com",
        "title": "158机床网",
        "desc": "158机床网",
        "link": "http://www.158jixie.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.wjjw.cn",
        "title": "中国挖掘机",
        "desc": "中国挖掘机",
        "link": "http://www.wjjw.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.mycimt.com",
        "title": "国际床机网",
        "desc": "国际床机网",
        "link": "http://www.mycimt.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.mouldsnet.cn",
        "title": "中国塑料模具网",
        "desc": "中国塑料模具网",
        "link": "http://www.mouldsnet.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.fentishebei.com",
        "title": "中国粉体设备网",
        "desc": "中国粉体设备网",
        "link": "http://www.fentishebei.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.c-cnc.com",
        "title": "中国数控机床网",
        "desc": "中国数控机床网",
        "link": "http://www.c-cnc.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jichuang.net",
        "title": "中国机床网",
        "desc": "中国机床网",
        "link": "http://www.jichuang.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.comps.cn",
        "title": "中国空压机网",
        "desc": "中国空压机网",
        "link": "http://www.comps.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.fengj.com",
        "title": "中国二手设备网",
        "desc": "中国二手设备网",
        "link": "http://www.fengj.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jdzj.com",
        "title": "机电之家",
        "desc": "机电之家",
        "link": "http://www.jdzj.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.spjxcn.com",
        "title": "食品机械行业网",
        "desc": "食品机械行业网",
        "link": "http://www.spjxcn.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.pharmjx.com",
        "title": "制药机械行业网",
        "desc": "制药机械行业网",
        "link": "http://www.pharmjx.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.kssbw.com",
        "title": "中国矿山设备网",
        "desc": "中国矿山设备网",
        "link": "http://www.kssbw.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cnsb.cn",
        "title": "中国设备网",
        "desc": "中国设备网",
        "link": "http://www.cnsb.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.yanmo.net",
        "title": "中国研磨网",
        "desc": "中国研磨网",
        "link": "http://www.yanmo.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ysjw.cn",
        "title": "中国压缩机网",
        "desc": "中国压缩机网",
        "link": "http://www.ysjw.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jiansuji001.com",
        "title": "减速机",
        "desc": "减速机",
        "link": "http://www.jiansuji001.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.lmjx.net",
        "title": "中国路面机械网",
        "desc": "中国路面机械网",
        "link": "http://www.lmjx.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.6300.net",
        "title": "工程机械",
        "desc": "工程机械",
        "link": "http://www.6300.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.dy88.cn",
        "title": "大禹网",
        "desc": "大禹网",
        "link": "http://www.dy88.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jzjx.org.cn",
        "title": "建筑机械网",
        "desc": "建筑机械网",
        "link": "http://www.jzjx.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinacrane.net",
        "title": "全球起重机械网",
        "desc": "全球起重机械网",
        "link": "http://www.chinacrane.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.frj.cc",
        "title": "中缝网",
        "desc": "中缝网",
        "link": "http://www.frj.cc/"
      },
      {
        "icon": "https://logo.clearbit.com/www.yaoxie.net",
        "title": "中国药械网",
        "desc": "中国药械网",
        "link": "http://www.yaoxie.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.86pla.com",
        "title": "塑料机械网",
        "desc": "塑料机械网",
        "link": "http://www.86pla.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jc35.com",
        "title": "机床商务网",
        "desc": "机床商务网",
        "link": "http://www.jc35.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.maijx.com",
        "title": "买卖机械网",
        "desc": "买卖机械网",
        "link": "http://www.maijx.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.nongjx.com",
        "title": "中国农机总网",
        "desc": "中国农机总网",
        "link": "http://www.nongjx.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinawajue.cn",
        "title": "挖掘机产业网",
        "desc": "挖掘机产业网",
        "link": "http://www.chinawajue.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jc35.com",
        "title": "中国机床商务网",
        "desc": "中国机床商务网",
        "link": "http://www.jc35.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.huajx.com",
        "title": "中国化工机械设备",
        "desc": "中国化工机械设备",
        "link": "http://www.huajx.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.mydry.cn",
        "title": "干燥设备网",
        "desc": "干燥设备网",
        "link": "http://www.mydry.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.skjcsc.com",
        "title": "数控机床市场网",
        "desc": "数控机床市场网",
        "link": "http://www.skjcsc.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ybzhan.cn",
        "title": "中国仪表网",
        "desc": "中国仪表网",
        "link": "http://www.ybzhan.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.lock188.com",
        "title": "中国锁具网",
        "desc": "中国锁具网",
        "link": "http://www.lock188.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.d1cm.com",
        "title": "第一工程机械网",
        "desc": "第一工程机械网",
        "link": "http://www.d1cm.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cmol.com",
        "title": "工程机械在线",
        "desc": "工程机械在线",
        "link": "http://www.cmol.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.lmjx.net",
        "title": "中国路面机械网",
        "desc": "中国路面机械网",
        "link": "https://www.lmjx.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cema.org.cn",
        "title": "中国挖掘机械网",
        "desc": "中国挖掘机械网",
        "link": "http://www.cema.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.998jx.cn",
        "title": "混凝土机械网",
        "desc": "混凝土机械网",
        "link": "http://www.998jx.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/jixie.51chuli.com",
        "title": "二手工程机械市场",
        "desc": "二手工程机械市场",
        "link": "https://jixie.51chuli.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.bf35.com",
        "title": "泵阀商务网",
        "desc": "泵阀商务网",
        "link": "http://www.bf35.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.mccet.com",
        "title": "中国冶金装备网",
        "desc": "中国冶金装备网",
        "link": "http://www.mccet.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cmepc.com",
        "title": "中国冶金设备配件网",
        "desc": "中国冶金设备配件网",
        "link": "http://www.cmepc.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ysjw.cn",
        "title": "压缩机网",
        "desc": "压缩机网",
        "link": "https://www.ysjw.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinawj.com.cn",
        "title": "五金商机网",
        "desc": "五金商机网",
        "link": "http://www.chinawj.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.bzjx.org",
        "title": "包装机械产业网",
        "desc": "包装机械产业网",
        "link": "http://www.bzjx.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jxcad.com.cn",
        "title": "机械CAD论坛",
        "desc": "机械CAD论坛",
        "link": "http://www.jxcad.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/bbs.cmiw.cn",
        "title": "中国机械社区",
        "desc": "中国机械社区",
        "link": "http://bbs.cmiw.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.zgjxcad.com",
        "title": "机械设计论坛",
        "desc": "机械设计论坛",
        "link": "http://www.zgjxcad.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jixiecun.com",
        "title": "机械村",
        "desc": "机械村",
        "link": "http://www.jixiecun.com/"
      },
      {
        "icon": "https://logo.clearbit.com/bbs.cehome.com",
        "title": "挖掘机论坛",
        "desc": "挖掘机论坛",
        "link": "http://bbs.cehome.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.zcboss.com",
        "title": "轴承论坛",
        "desc": "轴承论坛",
        "link": "http://www.zcboss.com/"
      },
      {
        "icon": "https://logo.clearbit.com/bbs.zz361.com",
        "title": "铸造论坛",
        "desc": "铸造论坛",
        "link": "http://bbs.zz361.com/inc.php"
      },
      {
        "icon": "https://logo.clearbit.com/ndt.baidajob.com",
        "title": "中国无损检测人才网",
        "desc": "中国无损检测人才网",
        "link": "http://ndt.baidajob.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.gongyejob.com",
        "title": "工业人才招聘网",
        "desc": "工业人才招聘网",
        "link": "http://www.gongyejob.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.mechr.com",
        "title": "机械英才网",
        "desc": "机械英才网",
        "link": "http://www.mechr.com/"
      },
      {
        "icon": "https://logo.clearbit.com/gl.epjob88.com",
        "title": "一览锅炉人才网",
        "desc": "一览锅炉人才网",
        "link": "http://gl.epjob88.com/"
      },
      {
        "icon": "https://logo.clearbit.com/gcjx.job1001.com",
        "title": "工程机械招聘网",
        "desc": "工程机械招聘网",
        "link": "http://gcjx.job1001.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.zcjob88.com",
        "title": "轴承人才网",
        "desc": "轴承人才网",
        "link": "https://www.zcjob88.com/"
      },
      {
        "icon": "https://logo.clearbit.com/yz.cmejob.com",
        "title": "压铸人才网",
        "desc": "压铸人才网",
        "link": "http://yz.cmejob.com/"
      },
      {
        "icon": "https://logo.clearbit.com/ysj.cmejob.com",
        "title": "压缩机人才网",
        "desc": "压缩机人才网",
        "link": "http://ysj.cmejob.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.visionchinashow.net",
        "title": "中国国际机器视觉展览会",
        "desc": "中国国际机器视觉展览会",
        "link": "http://www.visionchinashow.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.bauma-china.com",
        "title": "上海工程/建材机械及设备展",
        "desc": "上海工程/建材机械及设备展",
        "link": "https://www.bauma-china.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.b-china.cn",
        "title": "上海工程机械展",
        "desc": "上海工程机械展",
        "link": "http://www.b-china.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.e-bices.org",
        "title": "北京工程机械展",
        "desc": "北京工程机械展",
        "link": "http://www.e-bices.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ctisma.com",
        "title": "台州缝制设备展",
        "desc": "台州缝制设备展",
        "link": "http://www.ctisma.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinafoodtech.com.cn",
        "title": "北京食品加工/包装机械展",
        "desc": "北京食品加工/包装机械展",
        "link": "http://www.chinafoodtech.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.intermachshow.com",
        "title": "东盟机械展",
        "desc": "东盟机械展",
        "link": "https://www.intermachshow.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.assemblytechexpo.com",
        "title": "泰国装配技术/机械零组件展",
        "desc": "泰国装配技术/机械零组件展",
        "link": "https://www.assemblytechexpo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.automanexpo.com",
        "title": "泰国汽车生产制造/机械工具展",
        "desc": "泰国汽车生产制造/机械工具展",
        "link": "https://www.automanexpo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.tube-southeastasia.com",
        "title": "泰国管材贸易展",
        "desc": "泰国管材贸易展",
        "link": "https://www.tube-southeastasia.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.metalex.co.th",
        "title": "泰国机床/金属加工机械展",
        "desc": "泰国机床/金属加工机械展",
        "link": "https://www.metalex.co.th/"
      },
      {
        "icon": "https://logo.clearbit.com/india-itme.com",
        "title": "印度纺织机械展",
        "desc": "印度纺织机械展",
        "link": "http://india-itme.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.plastindia.org",
        "title": "印度塑料机械展",
        "desc": "印度塑料机械展",
        "link": "http://www.plastindia.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.excon.in",
        "title": "印度工程机械及工程车辆展",
        "desc": "印度工程机械及工程车辆展",
        "link": "https://www.excon.in/"
      },
      {
        "icon": "https://logo.clearbit.com/www.eimaagrimach.in",
        "title": "印度农业机械展",
        "desc": "印度农业机械展",
        "link": "http://www.eimaagrimach.in/"
      },
      {
        "icon": "https://logo.clearbit.com/www.pacprocess-india.com",
        "title": "印度包装机械展",
        "desc": "印度包装机械展",
        "link": "https://www.pacprocess-india.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ifexindia.com",
        "title": "印度铸造机械设备展",
        "desc": "印度铸造机械设备展",
        "link": "http://www.ifexindia.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ifexindia.com",
        "title": "印度矿业机械展",
        "desc": "印度矿业机械展",
        "link": "http://www.ifexindia.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.miningandengineeringindo.com",
        "title": "印尼矿山机械展",
        "desc": "印尼矿山机械展",
        "link": "https://www.miningandengineeringindo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ifmac.net",
        "title": "印尼木工及家具制造配件展",
        "desc": "印尼木工及家具制造配件展",
        "link": "http://www.ifmac.net/"
      },
      {
        "icon": "https://logo.clearbit.com/interpharma-indonesia.com",
        "title": "印尼制药机械展",
        "desc": "印尼制药机械展",
        "link": "http://interpharma-indonesia.com/"
      },
      {
        "icon": "https://logo.clearbit.com/cems-textech.com",
        "title": "印尼纺织服装机械展",
        "desc": "印尼纺织服装机械展",
        "link": "https://cems-textech.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chanchao.com.tw",
        "title": "越南木工机械/家具配件展",
        "desc": "越南木工机械/家具配件展",
        "link": "https://www.chanchao.com.tw/VietnamWood/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chanchao.com.tw",
        "title": "越南河内纺织机械展",
        "desc": "越南河内纺织机械展",
        "link": "https://www.chanchao.com.tw/VTG/"
      },
      {
        "icon": "https://logo.clearbit.com/www.metalexvietnam.com",
        "title": "越南机床/金属加工机械展",
        "desc": "越南机床/金属加工机械展",
        "link": "https://www.metalexvietnam.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chanchao.com.tw",
        "title": "孟加拉国际塑料展览会",
        "desc": "孟加拉国际塑料展览会",
        "link": "https://www.chanchao.com.tw/Bangladesh-expo/"
      },
      {
        "icon": "https://logo.clearbit.com/www.iranconmin.de",
        "title": "伊朗工程/矿业/建筑机械展",
        "desc": "伊朗工程/矿业/建筑机械展",
        "link": "https://www.iranconmin.de/"
      },
      {
        "icon": "https://logo.clearbit.com/www.tube-tradefair.com",
        "title": "迪拜工业机械展",
        "desc": "迪拜工业机械展",
        "link": "https://www.tube-tradefair.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.dubaiwoodshow.com",
        "title": "迪拜木业及木工机械展",
        "desc": "迪拜木业及木工机械展",
        "link": "http://www.dubaiwoodshow.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.libyabuild.com",
        "title": "利比亚建材卫浴五金及建筑机械展",
        "desc": "利比亚建材卫浴五金及建筑机械展",
        "link": "http://www.libyabuild.com/"
      },
      {
        "icon": "https://logo.clearbit.com/win-eurasia.com",
        "title": "土耳其机械展",
        "desc": "土耳其机械展",
        "link": "http://win-eurasia.com/tr"
      },
      {
        "icon": "https://logo.clearbit.com/www.yapifuari.com.tr",
        "title": "土耳其建筑及工程机械展",
        "desc": "土耳其建筑及工程机械展",
        "link": "https://www.yapifuari.com.tr/Home"
      },
      {
        "icon": "https://logo.clearbit.com/www.kazexpo.kz",
        "title": "哈萨克斯坦矿山机械展",
        "desc": "哈萨克斯坦矿山机械展",
        "link": "http://www.kazexpo.kz/"
      },
      {
        "icon": "https://logo.clearbit.com/www.kazcomak.kz",
        "title": "哈萨克斯坦国际工程机械展",
        "desc": "哈萨克斯坦国际工程机械展",
        "link": "https://www.kazcomak.kz/ru/"
      },
      {
        "icon": "https://logo.clearbit.com/www.lesdrevmash-expo.ru",
        "title": "俄罗斯木工机械及家具配件展",
        "desc": "俄罗斯木工机械及家具配件展",
        "link": "http://www.lesdrevmash-expo.ru/"
      },
      {
        "icon": "https://logo.clearbit.com/www.woodexpo.ru",
        "title": "俄罗斯国际木业和木工机械展",
        "desc": "俄罗斯国际木业和木工机械展",
        "link": "https://www.woodexpo.ru/"
      },
      {
        "icon": "https://logo.clearbit.com/www.pcvexpo.ru",
        "title": "俄罗斯国际泵阀压缩机及配件展",
        "desc": "俄罗斯国际泵阀压缩机及配件展",
        "link": "https://www.pcvexpo.ru/ru-RU/"
      },
      {
        "icon": "https://logo.clearbit.com/www.interplastica.de",
        "title": "莫斯科塑料橡胶原材料/机械展",
        "desc": "莫斯科塑料橡胶原材料/机械展",
        "link": "https://www.interplastica.de/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cabex.ru",
        "title": "俄罗斯国际线缆线材及紧固件展览会",
        "desc": "俄罗斯国际线缆线材及紧固件展览会",
        "link": "https://www.cabex.ru/ru-RU/"
      },
      {
        "icon": "https://logo.clearbit.com/www.komaf.org",
        "title": "韩国国际机械展览会",
        "desc": "韩国国际机械展览会",
        "link": "http://www.komaf.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.kofas.org",
        "title": "韩国国际自动化精密机械展",
        "desc": "韩国国际自动化精密机械展",
        "link": "http://www.kofas.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.japan-mfg.jp",
        "title": "日本机械零部件及加工技术展",
        "desc": "日本机械零部件及加工技术展",
        "link": "https://www.japan-mfg.jp/ja-jp/about/mtech.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.nationalmanufacturingweek.com.au",
        "title": "澳大利亚机械制造周",
        "desc": "澳大利亚机械制造周",
        "link": "https://www.nationalmanufacturingweek.com.au/en-gb.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.queenslandminingexpo.com.au",
        "title": "澳洲昆士兰矿业机械展",
        "desc": "澳洲昆士兰矿业机械展",
        "link": "https://www.queenslandminingexpo.com.au/en-gb.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.mtexpo.com.br",
        "title": "巴西矿业机械展",
        "desc": "巴西矿业机械展",
        "link": "http://www.mtexpo.com.br/"
      },
      {
        "icon": "https://logo.clearbit.com/www.constructionexpo.com.br",
        "title": "巴西建筑工程及矿山机械展",
        "desc": "巴西建筑工程及矿山机械展",
        "link": "http://www.constructionexpo.com.br/"
      },
      {
        "icon": "https://logo.clearbit.com/www.reedalcantara.com.br",
        "title": "巴西塑料机械展",
        "desc": "巴西塑料机械展",
        "link": "https://www.reedalcantara.com.br/"
      },
      {
        "icon": "https://logo.clearbit.com/www.feiplastic.com.br",
        "title": "巴西塑料机械展",
        "desc": "巴西塑料机械展",
        "link": "https://www.feiplastic.com.br/"
      },
      {
        "icon": "https://logo.clearbit.com/www.reedalcantara.com.br",
        "title": "巴西机械五金及机床设备展",
        "desc": "巴西机械五金及机床设备展",
        "link": "https://www.reedalcantara.com.br/"
      },
      {
        "icon": "https://logo.clearbit.com/tubotech.com.br",
        "title": "巴西管道/阀门/泵浦及组件展",
        "desc": "巴西管道/阀门/泵浦及组件展",
        "link": "http://tubotech.com.br/16/"
      },
      {
        "icon": "https://logo.clearbit.com/www.expocamacol.com",
        "title": "哥伦比亚国际建材展",
        "desc": "哥伦比亚国际建材展",
        "link": "http://www.expocamacol.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.argentinamining.com",
        "title": "阿根廷国际矿山机械博览会",
        "desc": "阿根廷国际矿山机械博览会",
        "link": "http://www.argentinamining.com/es/"
      },
      {
        "icon": "https://logo.clearbit.com/www.expominaperu.com",
        "title": "秘鲁矿业设备及机械展",
        "desc": "秘鲁矿业设备及机械展",
        "link": "https://www.expominaperu.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ugol-rossii.com",
        "title": "乌克兰矿山机械展",
        "desc": "乌克兰矿山机械展",
        "link": "https://www.ugol-rossii.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.agro-expo.com",
        "title": "乌克兰农业及农业机械展",
        "desc": "乌克兰农业及农业机械展",
        "link": "http://www.agro-expo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.interpack.de",
        "title": "德国包装及糖果机械博览会",
        "desc": "德国包装及糖果机械博览会",
        "link": "https://www.interpack.de/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ppmatotalshow.co.uk",
        "title": "德国伯明翰加工与包装机械展",
        "desc": "德国伯明翰加工与包装机械展",
        "link": "https://www.ppmatotalshow.co.uk/"
      },
      {
        "icon": "https://logo.clearbit.com/www.bauma.de",
        "title": "德国慕尼黑机械展",
        "desc": "德国慕尼黑机械展",
        "link": "https://www.bauma.de/"
      },
      {
        "icon": "https://logo.clearbit.com/www.valveworldexpo.com",
        "title": "德国阀门世界展",
        "desc": "德国阀门世界展",
        "link": "https://www.valveworldexpo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ceramitec.com",
        "title": "慕尼黑陶瓷工业/粉末冶金机械/原材料展",
        "desc": "慕尼黑陶瓷工业/粉末冶金机械/原材料展",
        "link": "https://www.ceramitec.com/index-2.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.agritechnica.com",
        "title": "德国汉诺威农业技术及机械展",
        "desc": "德国汉诺威农业技术及机械展",
        "link": "https://www.agritechnica.com/"
      },
      {
        "icon": "https://logo.clearbit.com/paris.intermatconstruction.com",
        "title": "法国工程技术与设备展览会",
        "desc": "法国工程技术与设备展览会",
        "link": "https://paris.intermatconstruction.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.eima.it",
        "title": "意大利农业机械展",
        "desc": "意大利农业机械展",
        "link": "https://www.eima.it/it/index.php"
      },
      {
        "icon": "https://logo.clearbit.com/www.samoter.it",
        "title": "意大利工程机械展",
        "desc": "意大利工程机械展",
        "link": "http://www.samoter.it/it"
      },
      {
        "icon": "https://logo.clearbit.com/www.ipackima.com",
        "title": "意大利包装机械/食品加工及物料展",
        "desc": "意大利包装机械/食品加工及物料展",
        "link": "http://www.ipackima.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.itma.com",
        "title": "米兰纺织机械展",
        "desc": "米兰纺织机械展",
        "link": "https://www.itma.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.xylexpo.com",
        "title": "米兰木工机械展",
        "desc": "米兰木工机械展",
        "link": "http://www.xylexpo.com/index.php/it/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cairowoodshow.com",
        "title": "开罗木业及木工机械展",
        "desc": "开罗木业及木工机械展",
        "link": "http://www.cairowoodshow.com/"
      },
      {
        "icon": "https://logo.clearbit.com/cmts.ca",
        "title": "加拿大机械制造周及焊接展",
        "desc": "加拿大机械制造周及焊接展",
        "link": "https://cmts.ca/"
      },
      {
        "icon": "https://logo.clearbit.com/www.iwfatlanta.com",
        "title": "美国家具配件及木工机械展",
        "desc": "美国家具配件及木工机械展",
        "link": "http://www.iwfatlanta.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.worldagexpo.com",
        "title": "美国农用机械展",
        "desc": "美国农用机械展",
        "link": "http://www.worldagexpo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.worldofconcrete.com",
        "title": "拉斯维加斯建筑机械展",
        "desc": "拉斯维加斯建筑机械展",
        "link": "https://www.worldofconcrete.com/en/attendee.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.gie-expo.com",
        "title": "美国室外动力机械设备展",
        "desc": "美国室外动力机械设备展",
        "link": "https://www.gie-expo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/westeconline.com",
        "title": "美国西部机械制造机床工具展",
        "desc": "美国西部机械制造机床工具展",
        "link": "https://westeconline.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.conexpoconagg.com",
        "title": "美国工程机械博览会",
        "desc": "美国工程机械博览会",
        "link": "https://www.conexpoconagg.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.aem.org",
        "title": "美国奥兰多农业机械展",
        "desc": "美国奥兰多农业机械展",
        "link": "https://www.aem.org/agriculture/"
      }
    ]
  },
  {
    "title": "02-电子行业",
    "items": [
      {
        "icon": "https://logo.clearbit.com/www.sensorworld.com.cn",
        "title": "传感器信息港",
        "desc": "传感器信息港",
        "link": "http://www.sensorworld.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.etime.net.cn",
        "title": "E代电子",
        "desc": "E代电子",
        "link": "http://www.etime.net.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cena.com.cn",
        "title": "中国电子报",
        "desc": "中国电子报",
        "link": "http://www.cena.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cesi.ac.cn",
        "title": "中国电子技术标准化",
        "desc": "中国电子技术标准化",
        "link": "http://www.cesi.ac.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ic-ceca.org.cn",
        "title": "中国电子元件行业协会",
        "desc": "中国电子元件行业协会",
        "link": "http://www.ic-ceca.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ceea.org.cn",
        "title": "中国电子企业协会",
        "desc": "中国电子企业协会",
        "link": "http://www.ceea.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.csia.net.cn",
        "title": "中国半导体行业网",
        "desc": "中国半导体行业网",
        "link": "http://www.csia.net.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.edw.com.cn",
        "title": "电子产品世界",
        "desc": "电子产品世界",
        "link": "http://www.edw.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinaecnet.com",
        "title": "中国元器件在线",
        "desc": "中国元器件在线",
        "link": "http://www.chinaecnet.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.big-bit.com",
        "title": "大比特商务网",
        "desc": "大比特商务网",
        "link": "http://www.big-bit.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinaecnet.com",
        "title": "中电网",
        "desc": "中电网",
        "link": "http://www.chinaecnet.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.21ic.com",
        "title": "21IC电子网",
        "desc": "21IC电子网",
        "link": "http://www.21ic.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.pcbtech.net",
        "title": "中国PCB技术网",
        "desc": "中国PCB技术网",
        "link": "http://www.pcbtech.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinaet.net",
        "title": "中国电工网",
        "desc": "中国电工网",
        "link": "http://www.chinaet.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.analysis.org.cn",
        "title": "中国分析网",
        "desc": "中国分析网",
        "link": "http://www.analysis.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ca800.com",
        "title": "中国自动化网",
        "desc": "中国自动化网",
        "link": "http://www.ca800.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.instrument.com.cn",
        "title": "仪器信息网",
        "desc": "仪器信息网",
        "link": "http://www.instrument.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.sensor.com.cn",
        "title": "中国传感器",
        "desc": "中国传感器",
        "link": "http://www.sensor.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.bio-equip.com",
        "title": "中国生物器材网",
        "desc": "中国生物器材网",
        "link": "http://www.bio-equip.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.phei.com.cn",
        "title": "电子工业出版社",
        "desc": "电子工业出版社",
        "link": "http://www.phei.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/ea-china.com",
        "title": "中国电气自动化网",
        "desc": "中国电气自动化网",
        "link": "http://ea-china.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.rfidworld.com.cn",
        "title": "RFID世界网",
        "desc": "RFID世界网",
        "link": "http://www.rfidworld.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.china-cic.cn",
        "title": "中国通信学会",
        "desc": "中国通信学会",
        "link": "https://www.china-cic.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ces.org.cn",
        "title": "中国电工技术协会",
        "desc": "中国电工技术协会",
        "link": "http://www.ces.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cecc.org.cn",
        "title": "中国电子商会",
        "desc": "中国电子商会",
        "link": "http://www.cecc.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.gkong.com",
        "title": "中华工控网",
        "desc": "中华工控网",
        "link": "http://www.gkong.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.szeia.com",
        "title": "深圳电子网",
        "desc": "深圳电子网",
        "link": "http://www.szeia.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.fpdisplay.com",
        "title": "中华液晶网",
        "desc": "中华液晶网",
        "link": "http://www.fpdisplay.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinadz.com",
        "title": "中国电子资源网",
        "desc": "中国电子资源网",
        "link": "http://www.chinadz.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.coema.org.cn",
        "title": "中国光学光电子",
        "desc": "中国光学光电子",
        "link": "http://www.coema.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.21dianyuan.com",
        "title": "世纪电源网",
        "desc": "世纪电源网",
        "link": "http://www.21dianyuan.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cps800.com",
        "title": "电源在线",
        "desc": "电源在线",
        "link": "http://www.cps800.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinaem.com.cn",
        "title": "中国电子商情",
        "desc": "中国电子商情",
        "link": "http://www.chinaem.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.semi.org.cn",
        "title": "大半导体产业网",
        "desc": "大半导体产业网",
        "link": "http://www.semi.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cie-info.org.cn",
        "title": "中国电子学会",
        "desc": "中国电子学会",
        "link": "http://www.cie-info.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cnii.com.cn",
        "title": "中国信息产业网",
        "desc": "中国信息产业网",
        "link": "http://www.cnii.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/bdt.ccidnet.com",
        "title": "半导体产业",
        "desc": "半导体产业",
        "link": "http://bdt.ccidnet.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ccidcom.com",
        "title": "通信产业网",
        "desc": "通信产业网",
        "link": "http://www.ccidcom.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.laoyaoba.com",
        "title": "集微网",
        "desc": "集微网",
        "link": "https://www.laoyaoba.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.eechina.com",
        "title": "电子工程网",
        "desc": "电子工程网",
        "link": "http://www.eechina.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ic-ceca.org.cn",
        "title": "中国电子元件行业协会",
        "desc": "中国电子元件行业协会",
        "link": "http://www.ic-ceca.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.21ic.com",
        "title": "中国电子网",
        "desc": "中国电子网",
        "link": "http://www.21ic.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.p-e-china.com",
        "title": "中国电力电子产业网",
        "desc": "中国电力电子产业网",
        "link": "http://www.p-e-china.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.dramx.com",
        "title": "全球半导体观察",
        "desc": "全球半导体观察",
        "link": "https://www.dramx.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.news007.cn",
        "title": "每日电讯",
        "desc": "每日电讯",
        "link": "http://www.news007.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cntronics.com",
        "title": "电子元件技术网",
        "desc": "电子元件技术网",
        "link": "http://www.cntronics.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.51pcb.com.cn",
        "title": "PCB在线",
        "desc": "PCB在线",
        "link": "http://www.51pcb.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/pcbcity.com.cn",
        "title": "PCB网城",
        "desc": "PCB网城",
        "link": "http://pcbcity.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ca168.com",
        "title": "中自网",
        "desc": "中自网",
        "link": "http://www.ca168.com/"
      },
      {
        "icon": "https://logo.clearbit.com/pdf.elecfans.com",
        "title": "电子元器件查询网",
        "desc": "电子元器件查询网",
        "link": "http://pdf.elecfans.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.electronics-manufacturers.com",
        "title": "electronics-manufacturers",
        "desc": "electronics-manufacturers",
        "link": "http://www.electronics-manufacturers.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.the-esb.com",
        "title": "Electronics Source Book",
        "desc": "Electronics Source Book",
        "link": "http://www.the-esb.com/"
      },
      {
        "icon": "https://logo.clearbit.com/ee.cleversoul.com",
        "title": "EE Hotsheet",
        "desc": "EE Hotsheet",
        "link": "http://ee.cleversoul.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.hobid.com",
        "title": "hobid",
        "desc": "hobid",
        "link": "http://www.hobid.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.electric-find.com",
        "title": "Electric-Find",
        "desc": "Electric-Find",
        "link": "http://www.electric-find.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.mectronic.com",
        "title": "mectronic",
        "desc": "mectronic",
        "link": "http://www.mectronic.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.newelectronics.co.uk",
        "title": "New Electronics",
        "desc": "New Electronics",
        "link": "http://www.newelectronics.co.uk/"
      },
      {
        "icon": "https://logo.clearbit.com/www.futureelectronics.com",
        "title": "Future Electronics",
        "desc": "Future Electronics",
        "link": "http://www.futureelectronics.com/en/Pages/"
      },
      {
        "icon": "https://logo.clearbit.com/www.b2bic.com",
        "title": "IC电子查询网",
        "desc": "IC电子查询网",
        "link": "http://www.b2bic.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.114ic.com",
        "title": "电子元件交易网",
        "desc": "电子元件交易网",
        "link": "http://www.114ic.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.dzsc.com",
        "title": "维库电子市场网",
        "desc": "维库电子市场网",
        "link": "http://www.dzsc.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.hkinventory.com",
        "title": "香港电子库存",
        "desc": "香港电子库存",
        "link": "https://www.hkinventory.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.21ic.com.cn",
        "title": "21IC中国电子网",
        "desc": "21IC中国电子网",
        "link": "http://www.21ic.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.1718cn.com",
        "title": "中国仪器仪表大市场",
        "desc": "中国仪器仪表大市场",
        "link": "http://www.1718cn.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chem17.com",
        "title": "中国化工仪器网",
        "desc": "中国化工仪器网",
        "link": "http://www.chem17.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ddgjw.com",
        "title": "中国电动工具网",
        "desc": "中国电动工具网",
        "link": "http://www.ddgjw.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cnebuyer.com",
        "title": "中采网",
        "desc": "中采网",
        "link": "http://www.cnebuyer.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.safetyemc.cn",
        "title": "安规与电磁兼容网",
        "desc": "安规与电磁兼容网",
        "link": "http://www.safetyemc.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ec.hc360.com",
        "title": "HC360慧聪网电子",
        "desc": "HC360慧聪网电子",
        "link": "http://www.ec.hc360.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ic37.com",
        "title": "中国IC网",
        "desc": "中国IC网",
        "link": "http://www.ic37.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.oemresource.com",
        "title": "制造资源网",
        "desc": "制造资源网",
        "link": "http://www.oemresource.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.18show.cn",
        "title": "仪表展览网",
        "desc": "仪表展览网",
        "link": "http://www.18show.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chazuo.com",
        "title": "插座网",
        "desc": "插座网",
        "link": "http://www.chazuo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cnelc.com",
        "title": "中国工业电器网",
        "desc": "中国工业电器网",
        "link": "http://www.cnelc.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.21icsearch.com",
        "title": "21IC芯片搜索",
        "desc": "21IC芯片搜索",
        "link": "http://www.21icsearch.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.hi1718.com",
        "title": "维库仪器仪表网",
        "desc": "维库仪器仪表网",
        "link": "http://www.hi1718.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cecb2b.com",
        "title": "元器件交易网",
        "desc": "元器件交易网",
        "link": "http://www.cecb2b.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ae17.com",
        "title": "中国实验科学器材网",
        "desc": "中国实验科学器材网",
        "link": "http://www.ae17.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.globalsources.com.cn",
        "title": "环球资源内贸网",
        "desc": "环球资源内贸网",
        "link": "http://www.globalsources.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.01dianzi.com",
        "title": "第一电子网",
        "desc": "第一电子网",
        "link": "http://www.01dianzi.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.dxb2b.com",
        "title": "电线网",
        "desc": "电线网",
        "link": "http://www.dxb2b.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.dianyuan.com",
        "title": "电源网",
        "desc": "电源网",
        "link": "http://www.dianyuan.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.hqew.com",
        "title": "华强电子网",
        "desc": "华强电子网",
        "link": "http://www.hqew.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.hvacr.cn",
        "title": "空调制冷大市场",
        "desc": "空调制冷大市场",
        "link": "http://www.hvacr.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinahvacr.com",
        "title": "中国空调制冷网",
        "desc": "中国空调制冷网",
        "link": "http://www.chinahvacr.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.54pc.com",
        "title": "中国分析仪器网",
        "desc": "中国分析仪器网",
        "link": "http://www.54pc.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.xianlan315.com",
        "title": "中国电线电缆网",
        "desc": "中国电线电缆网",
        "link": "http://www.xianlan315.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.kuyibu.com",
        "title": "一步电子网",
        "desc": "一步电子网",
        "link": "http://www.kuyibu.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ic.net.cn",
        "title": "IC交易网",
        "desc": "IC交易网",
        "link": "http://www.ic.net.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.086ic.cn",
        "title": "国芯网",
        "desc": "国芯网",
        "link": "http://www.086ic.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.qic.com.cn",
        "title": "全球IC采购网",
        "desc": "全球IC采购网",
        "link": "http://www.qic.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cnicic.com",
        "title": "中国电子库存网",
        "desc": "中国电子库存网",
        "link": "http://www.cnicic.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.qooic.com",
        "title": "库IC网",
        "desc": "库IC网",
        "link": "http://www.qooic.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.icqoso.com",
        "title": "酷搜IC",
        "desc": "酷搜IC",
        "link": "http://www.icqoso.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.086ic.cn",
        "title": "中国IC技术交易网",
        "desc": "中国IC技术交易网",
        "link": "http://www.086ic.cn/index.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.51dzw.com",
        "title": "51电子网",
        "desc": "51电子网",
        "link": "http://www.51dzw.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.hqew.com",
        "title": "华强电子网",
        "desc": "华强电子网",
        "link": "http://www.hqew.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.mmic.net.cn",
        "title": "买卖IC网",
        "desc": "买卖IC网",
        "link": "http://www.mmic.net.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.114ic.com",
        "title": "114IC电子网",
        "desc": "114IC电子网",
        "link": "http://www.114ic.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.yikuyi.com",
        "title": "中国零件贸易网",
        "desc": "中国零件贸易网",
        "link": "https://www.yikuyi.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.iceasy.com",
        "title": "IC易站",
        "desc": "IC易站",
        "link": "http://www.iceasy.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cecb2b.com",
        "title": "元器件交易网",
        "desc": "元器件交易网",
        "link": "http://www.cecb2b.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.szlcsc.com",
        "title": "电子元器件采购网",
        "desc": "电子元器件采购网",
        "link": "https://www.szlcsc.com/"
      },
      {
        "icon": "https://logo.clearbit.com/b2b.big-bit.com",
        "title": "电子产品库",
        "desc": "电子产品库",
        "link": "http://b2b.big-bit.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ttic.cc",
        "title": "天天IC网",
        "desc": "天天IC网",
        "link": "http://www.ttic.cc/"
      },
      {
        "icon": "https://logo.clearbit.com/www.seekic.com",
        "title": "seekic",
        "desc": "seekic",
        "link": "http://www.seekic.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.usbid.com",
        "title": "usbid",
        "desc": "usbid",
        "link": "http://www.usbid.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.sg-electronics.com",
        "title": "Electronics Industry",
        "desc": "Electronics Industry",
        "link": "http://www.sg-electronics.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.electronics1.com",
        "title": "electronics1",
        "desc": "electronics1",
        "link": "http://www.electronics1.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinadz.com",
        "title": "中国电子资源网",
        "desc": "中国电子资源网",
        "link": "http://www.chinadz.com/"
      },
      {
        "icon": "https://logo.clearbit.com/bbs.21ic.com",
        "title": "电子工程师社区",
        "desc": "电子工程师社区",
        "link": "http://bbs.21ic.com/"
      },
      {
        "icon": "https://logo.clearbit.com/bbs.smthome.net",
        "title": "SMT之家",
        "desc": "SMT之家",
        "link": "http://bbs.smthome.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.gongkong.com",
        "title": "中国工控论坛",
        "desc": "中国工控论坛",
        "link": "http://www.gongkong.com/Forum/"
      },
      {
        "icon": "https://logo.clearbit.com/bbs.elecfans.com",
        "title": "电子发烧友论坛",
        "desc": "电子发烧友论坛",
        "link": "http://bbs.elecfans.com/"
      },
      {
        "icon": "https://logo.clearbit.com/bbs.21ic.com",
        "title": "中国电子网技术论坛",
        "desc": "中国电子网技术论坛",
        "link": "http://bbs.21ic.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.amobbs.com",
        "title": "阿莫电子论坛",
        "desc": "阿莫电子论坛",
        "link": "https://www.amobbs.com/index.php"
      },
      {
        "icon": "https://logo.clearbit.com/hr.eccn.com",
        "title": "中电人才网",
        "desc": "中电人才网",
        "link": "http://hr.eccn.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.51dzrc.com",
        "title": "中国电子电器人才网",
        "desc": "中国电子电器人才网",
        "link": "http://www.51dzrc.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.elecjob.cn",
        "title": "中国电子招牌网",
        "desc": "中国电子招牌网",
        "link": "http://www.elecjob.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/gd.epjob88.com",
        "title": "光电英才网",
        "desc": "光电英才网",
        "link": "http://gd.epjob88.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.dianzirc.cn",
        "title": "电子人才网",
        "desc": "电子人才网",
        "link": "http://www.dianzirc.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.batthr.com",
        "title": "电池招聘网",
        "desc": "电池招聘网",
        "link": "http://www.batthr.com/"
      },
      {
        "icon": "https://logo.clearbit.com/event.hktdc.com",
        "title": "香港电子展",
        "desc": "香港电子展",
        "link": "https://event.hktdc.com/fair/hkelectronicsfairse-tc"
      },
      {
        "icon": "https://logo.clearbit.com/www.icef.com.cn",
        "title": "中国电子展",
        "desc": "中国电子展",
        "link": "http://www.icef.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cnibf.net",
        "title": "上海电池展",
        "desc": "上海电池展",
        "link": "http://www.cnibf.net/cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.goemex.com",
        "title": "苏州电子信息博览会",
        "desc": "苏州电子信息博览会",
        "link": "http://www.goemex.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.computextaipei.com.tw",
        "title": "台北国际电脑展",
        "desc": "台北国际电脑展",
        "link": "https://www.computextaipei.com.tw/"
      },
      {
        "icon": "https://logo.clearbit.com/www.taitronics.tw",
        "title": "台北电子产业科技展",
        "desc": "台北电子产业科技展",
        "link": "https://www.taitronics.tw/"
      },
      {
        "icon": "https://logo.clearbit.com/www.nepconvietnam.com",
        "title": "越南电子展",
        "desc": "越南电子展",
        "link": "https://www.nepconvietnam.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.comexitshow.com.sg",
        "title": "COMEX消费电子展(新加坡)",
        "desc": "COMEX消费电子展(新加坡)",
        "link": "https://www.comexitshow.com.sg/"
      },
      {
        "icon": "https://logo.clearbit.com/www.japan-it-spring.jp",
        "title": "东京IT展",
        "desc": "东京IT展",
        "link": "https://www.japan-it-spring.jp/ja-jp/about/cloud.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.ceatec.com",
        "title": "日本高新技术展",
        "desc": "日本高新技术展",
        "link": "https://www.ceatec.com/ja/application/"
      },
      {
        "icon": "https://logo.clearbit.com/www.batteryjapan.jp",
        "title": "日本二次电池展",
        "desc": "日本二次电池展",
        "link": "https://www.batteryjapan.jp/ja-jp.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.nepcon.jp",
        "title": "日本电子制造设备及微电子展",
        "desc": "日本电子制造设备及微电子展",
        "link": "https://www.nepcon.jp/ja-jp.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.smtpcb.org",
        "title": "韩国电子制程展",
        "desc": "韩国电子制程展",
        "link": "http://www.smtpcb.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.kes.org",
        "title": "韩国电子展",
        "desc": "韩国电子展",
        "link": "http://www.kes.org/kor/"
      },
      {
        "icon": "https://logo.clearbit.com/www.worlditshow.co.kr",
        "title": "韩国电子展",
        "desc": "韩国电子展",
        "link": "http://www.worlditshow.co.kr/kor/"
      },
      {
        "icon": "https://logo.clearbit.com/www.knowledgegroupco.com",
        "title": "NEPCON 马来西亚",
        "desc": "NEPCON 马来西亚",
        "link": "http://www.knowledgegroupco.com/events/nepcon/"
      },
      {
        "icon": "https://logo.clearbit.com/www.nepconthailand.com",
        "title": "泰国电子展",
        "desc": "泰国电子展",
        "link": "https://www.nepconthailand.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.bangkok-rhvac.com",
        "title": "泰国空调制冷展",
        "desc": "泰国空调制冷展",
        "link": "https://www.bangkok-rhvac.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.gitex.com",
        "title": "迪拜电子展",
        "desc": "迪拜电子展",
        "link": "https://www.gitex.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.middleeastelectricity.com",
        "title": "迪拜电力/灯具/新能源展",
        "desc": "迪拜电力/灯具/新能源展",
        "link": "https://www.middleeastelectricity.com/en/home.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.inatronics-exhibition.net",
        "title": "印尼电子及零组件展",
        "desc": "印尼电子及零组件展",
        "link": "http://www.inatronics-exhibition.net/"
      },
      {
        "icon": "https://logo.clearbit.com/cairoict.com",
        "title": "开罗电子展",
        "desc": "开罗电子展",
        "link": "https://cairoict.com/"
      },
      {
        "icon": "https://logo.clearbit.com/eletrolarshow.com.br",
        "title": "巴西电子展",
        "desc": "巴西电子展",
        "link": "http://eletrolarshow.com.br/"
      },
      {
        "icon": "https://logo.clearbit.com/www.indiaelectronicsweek.com",
        "title": "新德里电子元器展",
        "desc": "新德里电子元器展",
        "link": "https://www.indiaelectronicsweek.com/efy-expo-2"
      },
      {
        "icon": "https://logo.clearbit.com/www.expoelectronica.ru",
        "title": "莫斯科电子元器件展",
        "desc": "莫斯科电子元器件展",
        "link": "http://www.expoelectronica.ru/"
      },
      {
        "icon": "https://logo.clearbit.com/www.elektro-expo.ru",
        "title": "莫斯科电力电子展",
        "desc": "莫斯科电力电子展",
        "link": "http://www.elektro-expo.ru/"
      },
      {
        "icon": "https://logo.clearbit.com/photoforum.pmd-forum.ru",
        "title": "莫斯科消费电子/影像展",
        "desc": "莫斯科消费电子/影像展",
        "link": "https://photoforum.pmd-forum.ru/"
      },
      {
        "icon": "https://logo.clearbit.com/www.bettshow.com",
        "title": "英国教育设备与技术展",
        "desc": "英国教育设备与技术展",
        "link": "https://www.bettshow.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.infosecurityeurope.com",
        "title": "伦敦计算机信息系统安全展",
        "desc": "伦敦计算机信息系统安全展",
        "link": "https://www.infosecurityeurope.com/"
      },
      {
        "icon": "https://logo.clearbit.com/pcim.mesago.com",
        "title": "纽伦堡电子展",
        "desc": "纽伦堡电子展",
        "link": "https://pcim.mesago.com/events/en.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.cebit.de",
        "title": "汉诺威IT展",
        "desc": "汉诺威IT展",
        "link": "https://www.cebit.de/"
      },
      {
        "icon": "https://logo.clearbit.com/b2b.ifa-berlin.com",
        "title": "柏林消费类电子及家用电器展",
        "desc": "柏林消费类电子及家用电器展",
        "link": "https://b2b.ifa-berlin.com/"
      },
      {
        "icon": "https://logo.clearbit.com/electronica.de",
        "title": "慕尼黑电子元器件展",
        "desc": "慕尼黑电子元器件展",
        "link": "https://electronica.de/"
      },
      {
        "icon": "https://logo.clearbit.com/www.coilwindingexpo.com",
        "title": "德国线圈绝缘材料及电器制造展",
        "desc": "德国线圈绝缘材料及电器制造展",
        "link": "https://www.coilwindingexpo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.electronicachina.com.cn",
        "title": "慕尼黑上海电子展",
        "desc": "慕尼黑上海电子展",
        "link": "http://www.electronicachina.com.cn/zh-cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ifa-berlin.com",
        "title": "德国柏林消费类电子展",
        "desc": "德国柏林消费类电子展",
        "link": "https://www.ifa-berlin.com/"
      }
    ]
  },
  {
    "title": "03-化工行业",
    "items": [
      {
        "icon": "https://logo.clearbit.com/www.jbc.org",
        "title": "生物化学期刊",
        "desc": "生物化学期刊",
        "link": "http://www.jbc.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.sibcb.ac.cn",
        "title": "上海生物化学研究所",
        "desc": "上海生物化学研究所",
        "link": "http://www.sibcb.ac.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.scrri.com",
        "title": "上海化学试剂研究所",
        "desc": "上海化学试剂研究所",
        "link": "http://www.scrri.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.sic.ac.cn",
        "title": "中科院上海硅酸盐研究",
        "desc": "中科院上海硅酸盐研究",
        "link": "http://www.sic.ac.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.epoxy-e.com",
        "title": "中国环氧树脂网",
        "desc": "中国环氧树脂网",
        "link": "http://www.epoxy-e.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.nbchem.com",
        "title": "中国华东化工网",
        "desc": "中国华东化工网",
        "link": "http://www.nbchem.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chemworld.com.cn",
        "title": "化工世界网",
        "desc": "化工世界网",
        "link": "http://www.chemworld.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chem99.com",
        "title": "卓创网-石油化工塑料橡胶",
        "desc": "卓创网-石油化工塑料橡胶",
        "link": "http://www.chem99.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cip.com.cn",
        "title": "化学工业出版社",
        "desc": "化学工业出版社",
        "link": "http://www.cip.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ccaon.com",
        "title": "中国氯碱网",
        "desc": "中国氯碱网",
        "link": "http://www.ccaon.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.coatingol.com",
        "title": "中国涂料在线",
        "desc": "中国涂料在线",
        "link": "http://www.coatingol.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cppia.com.cn",
        "title": "中国塑协网",
        "desc": "中国塑协网",
        "link": "http://www.cppia.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinalubricant.com",
        "title": "中国润油网",
        "desc": "中国润油网",
        "link": "http://www.chinalubricant.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.sepu.net",
        "title": "中国色谱网",
        "desc": "中国色谱网",
        "link": "http://www.sepu.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.nrcc.com.cn",
        "title": "国全总局化学品登记中心",
        "desc": "国全总局化学品登记中心",
        "link": "http://www.nrcc.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chemn.com",
        "title": "中国开门化工商务网",
        "desc": "中国开门化工商务网",
        "link": "http://www.chemn.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.sxhgw.cn",
        "title": "山西化工网",
        "desc": "山西化工网",
        "link": "http://www.sxhgw.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.organicchem.com",
        "title": "有机化学网",
        "desc": "有机化学网",
        "link": "http://www.organicchem.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinapu.com",
        "title": "贝茨聚氨酯网",
        "desc": "贝茨聚氨酯网",
        "link": "http://www.chinapu.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cncatalyst.com",
        "title": "中国催化剂网",
        "desc": "中国催化剂网",
        "link": "http://www.cncatalyst.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chemistrymag.org",
        "title": "国际网上化学报",
        "desc": "国际网上化学报",
        "link": "http://www.chemistrymag.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cechem.net",
        "title": "华东化工网",
        "desc": "华东化工网",
        "link": "http://www.cechem.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinasepa.com",
        "title": "中华过滤分离网",
        "desc": "中华过滤分离网",
        "link": "http://www.chinasepa.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinacmb.com.cn",
        "title": "中国色母粒网",
        "desc": "中国色母粒网",
        "link": "http://www.chinacmb.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.surfactant.com.cn",
        "title": "中国表面活性剂网",
        "desc": "中国表面活性剂网",
        "link": "http://www.surfactant.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.bomo123.com",
        "title": "薄膜之家信息网",
        "desc": "薄膜之家信息网",
        "link": "http://www.bomo123.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.polymer.cn",
        "title": "中国聚合物网",
        "desc": "中国聚合物网",
        "link": "http://www.polymer.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.16ds.com",
        "title": "方都化工网",
        "desc": "方都化工网",
        "link": "http://www.16ds.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cippe.net",
        "title": "全球石油化工网",
        "desc": "全球石油化工网",
        "link": "http://www.cippe.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cria.org.cn",
        "title": "中国橡胶工业协会",
        "desc": "中国橡胶工业协会",
        "link": "http://www.cria.org.cn/criawebsite/default.aspx"
      },
      {
        "icon": "https://logo.clearbit.com/chem.icxo.com",
        "title": "化工经理人",
        "desc": "化工经理人",
        "link": "http://chem.icxo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ccpitchem.org.cn",
        "title": "中国国际商会化工行业商会",
        "desc": "中国国际商会化工行业商会",
        "link": "http://www.ccpitchem.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chem99.com",
        "title": "卓创资讯化工",
        "desc": "卓创资讯化工",
        "link": "http://www.chem99.com/"
      },
      {
        "icon": "https://logo.clearbit.com/news.chemnet.com",
        "title": "化工资讯",
        "desc": "化工资讯",
        "link": "http://news.chemnet.com/"
      },
      {
        "icon": "https://logo.clearbit.com/pu.chem366.com",
        "title": "天天化工网",
        "desc": "天天化工网",
        "link": "http://pu.chem366.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chemicalweekly.com",
        "title": "印度化工周刊",
        "desc": "印度化工周刊",
        "link": "https://www.chemicalweekly.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chemicaldaily.co.jp",
        "title": "日本化学工业日报社",
        "desc": "日本化学工业日报社",
        "link": "http://www.chemicaldaily.co.jp/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chemall.com.cn",
        "title": "中国石油和化工网",
        "desc": "中国石油和化工网",
        "link": "http://www.chemall.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.idochem.com",
        "title": "爱度化工网",
        "desc": "爱度化工网",
        "link": "http://www.idochem.com/index.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.ichemistry.cn",
        "title": "爱化学",
        "desc": "爱化学",
        "link": "http://www.ichemistry.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chemexper.com",
        "title": "chemexper",
        "desc": "chemexper",
        "link": "http://www.chemexper.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.paktechsearch.com",
        "title": "paktechsearch",
        "desc": "paktechsearch",
        "link": "http://www.paktechsearch.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chemindustry.com",
        "title": "Chemical Search Engine",
        "desc": "Chemical Search Engine",
        "link": "http://www.chemindustry.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chemicalregister.com",
        "title": "chemicalregister",
        "desc": "chemicalregister",
        "link": "http://www.chemicalregister.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chemblink.com",
        "title": "chemlink",
        "desc": "chemlink",
        "link": "http://www.chemblink.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chemicalinfo.com",
        "title": "chemicalinfo",
        "desc": "chemicalinfo",
        "link": "http://www.chemicalinfo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.industrysearch.com.au",
        "title": "industrysearch",
        "desc": "industrysearch",
        "link": "http://www.industrysearch.com.au/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chemagility.com",
        "title": "chemagility",
        "desc": "chemagility",
        "link": "http://www.chemagility.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chem.com",
        "title": "chem",
        "desc": "chem",
        "link": "http://www.chem.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.rdchemicals.com",
        "title": "rdchemicals",
        "desc": "rdchemicals",
        "link": "http://www.rdchemicals.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chemolink.com",
        "title": "chemolink",
        "desc": "chemolink",
        "link": "http://www.chemolink.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.seekchem.com",
        "title": "seekchem",
        "desc": "seekchem",
        "link": "http://www.seekchem.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chemweb.com",
        "title": "chemweb",
        "desc": "chemweb",
        "link": "http://www.chemweb.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.needsinfo.com",
        "title": "needsinfo",
        "desc": "needsinfo",
        "link": "http://www.needsinfo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cechem.net",
        "title": "华东化工网",
        "desc": "华东化工网",
        "link": "http://www.cechem.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.hxchem.net",
        "title": "华夏化工网",
        "desc": "华夏化工网",
        "link": "http://www.hxchem.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chem17.com",
        "title": "中国化工仪器网",
        "desc": "中国化工仪器网",
        "link": "http://www.chem17.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinachemnet.com",
        "title": "中国化工",
        "desc": "中国化工",
        "link": "http://www.chinachemnet.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ccen.net",
        "title": "中国化工设备网",
        "desc": "中国化工设备网",
        "link": "http://www.ccen.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chemnet.com.cn",
        "title": "中国化工网",
        "desc": "中国化工网",
        "link": "http://www.chemnet.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chemindex.com",
        "title": "化工搜索",
        "desc": "化工搜索",
        "link": "http://www.chemindex.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.dry.com.cn",
        "title": "中华干燥网",
        "desc": "中华干燥网",
        "link": "http://www.dry.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.plasway.com",
        "title": "中国塑料商务网",
        "desc": "中国塑料商务网",
        "link": "http://www.plasway.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chem-y.com",
        "title": "有机化工网",
        "desc": "有机化工网",
        "link": "http://www.chem-y.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.yxx.com.cn",
        "title": "中国注塑网",
        "desc": "中国注塑网",
        "link": "http://www.yxx.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.51tbl.com",
        "title": "中华搪玻璃网",
        "desc": "中华搪玻璃网",
        "link": "http://www.51tbl.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.glass.com.cn",
        "title": "中国玻璃网",
        "desc": "中国玻璃网",
        "link": "http://www.glass.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.zssl.net",
        "title": "中国再生塑料网",
        "desc": "中国再生塑料网",
        "link": "http://www.zssl.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ccf.com.cn",
        "title": "中国化纤信息网",
        "desc": "中国化纤信息网",
        "link": "http://www.ccf.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chemcp.com",
        "title": "中国化工产品网",
        "desc": "中国化工产品网",
        "link": "http://www.chemcp.com/"
      },
      {
        "icon": "https://logo.clearbit.com/china.guidechem.com",
        "title": "盖德化工网",
        "desc": "盖德化工网",
        "link": "https://china.guidechem.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.51pla.com",
        "title": "全球塑胶网",
        "desc": "全球塑胶网",
        "link": "http://www.51pla.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.su-liao.com",
        "title": "中国塑料行业网",
        "desc": "中国塑料行业网",
        "link": "http://www.su-liao.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ccecn.com",
        "title": "中国化工电子商务网",
        "desc": "中国化工电子商务网",
        "link": "http://www.ccecn.com/"
      },
      {
        "icon": "https://logo.clearbit.com/cn.chemnet.com",
        "title": "化工综合服务商",
        "desc": "化工综合服务商",
        "link": "http://cn.chemnet.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chemmade.com",
        "title": "中国化工制造网",
        "desc": "中国化工制造网",
        "link": "http://www.chemmade.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.qdqx.net",
        "title": "化工之家",
        "desc": "化工之家",
        "link": "http://www.qdqx.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chembb.com",
        "title": "中化网",
        "desc": "中化网",
        "link": "http://www.chembb.com/"
      },
      {
        "icon": "https://logo.clearbit.com/huagong.huangye88.com",
        "title": "88化工网",
        "desc": "88化工网",
        "link": "http://huagong.huangye88.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chemcp.com",
        "title": "化工产品网",
        "desc": "化工产品网",
        "link": "http://www.chemcp.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chem234.com",
        "title": "中华化工网",
        "desc": "中华化工网",
        "link": "http://www.chem234.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.tuliao86.com",
        "title": "涂料网",
        "desc": "涂料网",
        "link": "http://www.tuliao86.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chemworld.com.cn",
        "title": "化工世界网",
        "desc": "化工世界网",
        "link": "http://www.chemworld.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.huagongquan.com",
        "title": "化工圈",
        "desc": "化工圈",
        "link": "https://www.huagongquan.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.31dye.com",
        "title": "染料网",
        "desc": "染料网",
        "link": "http://www.31dye.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chemnet.com",
        "title": "chemnet",
        "desc": "chemnet",
        "link": "http://www.chemnet.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.okchem.com",
        "title": "OKCHEM全球",
        "desc": "OKCHEM全球",
        "link": "https://www.okchem.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chemblink.com",
        "title": "chemblink",
        "desc": "chemblink",
        "link": "http://www.chemblink.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chemicalonline.com",
        "title": "chemicalonline",
        "desc": "chemicalonline",
        "link": "http://www.chemicalonline.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chemicalbook.com",
        "title": "chemicalbook",
        "desc": "chemicalbook",
        "link": "http://www.chemicalbook.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.lookchem.com",
        "title": "lookchem",
        "desc": "lookchem",
        "link": "http://www.lookchem.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chemnet.com",
        "title": "chemnet",
        "desc": "chemnet",
        "link": "http://www.chemnet.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.21chemnet.com",
        "title": "21chemnet",
        "desc": "21chemnet",
        "link": "http://www.21chemnet.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chemicalgallery.com",
        "title": "chemicalgallery",
        "desc": "chemicalgallery",
        "link": "http://www.chemicalgallery.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chemicalregister.com",
        "title": "chemicalregister",
        "desc": "chemicalregister",
        "link": "http://www.chemicalregister.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chemexper.com",
        "title": "chemexper",
        "desc": "chemexper",
        "link": "http://www.chemexper.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chembuyersguide.com",
        "title": "ChemBuyersGuide",
        "desc": "ChemBuyersGuide",
        "link": "http://www.chembuyersguide.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.buyersguidechem.com",
        "title": "Buyersguidechem",
        "desc": "Buyersguidechem",
        "link": "http://www.buyersguidechem.com/"
      },
      {
        "icon": "https://logo.clearbit.com/chemondis.com",
        "title": "Chemondis",
        "desc": "Chemondis",
        "link": "https://chemondis.com/marketplace/"
      },
      {
        "icon": "https://logo.clearbit.com/bbs.mahoupao.com",
        "title": "马后炮化工",
        "desc": "马后炮化工",
        "link": "https://bbs.mahoupao.com/"
      },
      {
        "icon": "https://logo.clearbit.com/bbs.hcbbs.com",
        "title": "海川化工论坛",
        "desc": "海川化工论坛",
        "link": "http://bbs.hcbbs.com/"
      },
      {
        "icon": "https://logo.clearbit.com/bbs.hg707.com",
        "title": "化工707论坛",
        "desc": "化工707论坛",
        "link": "http://bbs.hg707.com/forum.php"
      },
      {
        "icon": "https://logo.clearbit.com/bbs.gongkong.com",
        "title": "精细化工论坛",
        "desc": "精细化工论坛",
        "link": "http://bbs.gongkong.com/Industry/Finechemical.htm"
      },
      {
        "icon": "https://logo.clearbit.com/bbs.hgcad.com",
        "title": "化工CAD论坛",
        "desc": "化工CAD论坛",
        "link": "http://bbs.hgcad.com/forum.php"
      },
      {
        "icon": "https://logo.clearbit.com/www.chenhr.com",
        "title": "化工英才网",
        "desc": "化工英才网",
        "link": "http://www.chenhr.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.mouldjob.com",
        "title": "中国模具人才网",
        "desc": "中国模具人才网",
        "link": "http://www.mouldjob.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chemrc.com",
        "title": "化工人才网",
        "desc": "化工人才网",
        "link": "http://www.chemrc.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.hgrencai.com",
        "title": "中国化工人才网",
        "desc": "中国化工人才网",
        "link": "http://www.hgrencai.com/Person/"
      },
      {
        "icon": "https://logo.clearbit.com/www.iranplast.ir",
        "title": "伊朗塑胶工业博览会",
        "desc": "伊朗塑胶工业博览会",
        "link": "http://www.iranplast.ir/"
      },
      {
        "icon": "https://logo.clearbit.com/www.interplasthailand.com",
        "title": "泰国国际塑料展",
        "desc": "泰国国际塑料展",
        "link": "https://www.interplasthailand.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.plastivision.org",
        "title": "印度孟买塑料展",
        "desc": "印度孟买塑料展",
        "link": "https://www.plastivision.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chanchao.com.tw",
        "title": "越南橡塑胶工业展",
        "desc": "越南橡塑胶工业展",
        "link": "https://www.chanchao.com.tw/Vietnamplas/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ipfjapan.jp",
        "title": "日本国际塑胶展",
        "desc": "日本国际塑胶展",
        "link": "https://www.ipfjapan.jp/"
      },
      {
        "icon": "https://logo.clearbit.com/www.plastex-online.com",
        "title": "埃及塑料工业展",
        "desc": "埃及塑料工业展",
        "link": "http://www.plastex-online.com/"
      },
      {
        "icon": "https://logo.clearbit.com/proplas.propakafrica.co.za",
        "title": "南非塑料工业展",
        "desc": "南非塑料工业展",
        "link": "https://proplas.propakafrica.co.za/"
      },
      {
        "icon": "https://logo.clearbit.com/plasteurasia.com",
        "title": "土耳其塑料工业展",
        "desc": "土耳其塑料工业展",
        "link": "http://plasteurasia.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinaplasonline.com",
        "title": "CHINAPLAS国际橡塑展",
        "desc": "CHINAPLAS国际橡塑展",
        "link": "https://www.chinaplasonline.com/CPS19/idx/simp"
      },
      {
        "icon": "https://logo.clearbit.com/www.interlak-expo.ru",
        "title": "俄罗斯国际涂料展",
        "desc": "俄罗斯国际涂料展",
        "link": "http://www.interlak-expo.ru/"
      },
      {
        "icon": "https://logo.clearbit.com/www.k-online.de",
        "title": "德国K展",
        "desc": "德国K展",
        "link": "https://www.k-online.de/"
      },
      {
        "icon": "https://logo.clearbit.com/www.european-coatings-show.com",
        "title": "纽伦堡涂料展",
        "desc": "纽伦堡涂料展",
        "link": "https://www.european-coatings-show.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.fakuma-messe.de",
        "title": "德国塑料加工展",
        "desc": "德国塑料加工展",
        "link": "https://www.fakuma-messe.de/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chemistry-expo.ru",
        "title": "俄罗斯国际化工展览会",
        "desc": "俄罗斯国际化工展览会",
        "link": "http://www.chemistry-expo.ru/"
      },
      {
        "icon": "https://logo.clearbit.com/www.npe.org",
        "title": "美国国际塑料展",
        "desc": "美国国际塑料展",
        "link": "https://www.npe.org/"
      },
      {
        "icon": "https://logo.clearbit.com/admtoronto.com",
        "title": "加拿大塑料工业展",
        "desc": "加拿大塑料工业展",
        "link": "https://admtoronto.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.plastimagen.com.mx",
        "title": "墨西哥塑料橡胶工业展",
        "desc": "墨西哥塑料橡胶工业展",
        "link": "https://www.plastimagen.com.mx/"
      },
      {
        "icon": "https://logo.clearbit.com/www.expoplastperu.com",
        "title": "秘鲁塑料工业展",
        "desc": "秘鲁塑料工业展",
        "link": "http://www.expoplastperu.com/"
      }
    ]
  },
  {
    "title": "04-工艺品行业",
    "items": [
      {
        "icon": "https://logo.clearbit.com/www.craft-fair.co.uk",
        "title": "英国工艺品网",
        "desc": "英国工艺品网",
        "link": "http://www.craft-fair.co.uk/"
      },
      {
        "icon": "https://logo.clearbit.com/www.zggjysw.com",
        "title": "中国国家艺术网",
        "desc": "中国国家艺术网",
        "link": "http://www.zggjysw.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.art-news.com.cn",
        "title": "中国艺术收藏网",
        "desc": "中国艺术收藏网",
        "link": "http://www.art-news.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/art.china.cn",
        "title": "艺术中国",
        "desc": "艺术中国",
        "link": "http://art.china.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chyxx.com",
        "title": "工艺品行业资讯",
        "desc": "工艺品行业资讯",
        "link": "http://www.chyxx.com/industry/gongyipin/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinayq.com",
        "title": "神州乐器网",
        "desc": "神州乐器网",
        "link": "http://www.chinayq.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cnarts.net",
        "title": "中国艺术品网",
        "desc": "中国艺术品网",
        "link": "http://www.cnarts.net/"
      },
      {
        "icon": "https://logo.clearbit.com/news.ctoy.com.cn",
        "title": "玩具资讯",
        "desc": "玩具资讯",
        "link": "https://news.ctoy.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cnarts.net",
        "title": "中国艺术品",
        "desc": "中国艺术品",
        "link": "http://www.cnarts.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.gift.hc360.com",
        "title": "慧聪工艺品",
        "desc": "慧聪工艺品",
        "link": "http://www.gift.hc360.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.mycollect.net",
        "title": "华夏收藏网",
        "desc": "华夏收藏网",
        "link": "http://www.mycollect.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinawatchnet.com",
        "title": "中国钟表网",
        "desc": "中国钟表网",
        "link": "http://www.chinawatchnet.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.0755zb.com",
        "title": "深圳珠宝网",
        "desc": "深圳珠宝网",
        "link": "http://www.0755zb.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.lidodo.com",
        "title": "礼多多",
        "desc": "礼多多",
        "link": "http://www.lidodo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.525zb.com",
        "title": "珠宝之家",
        "desc": "珠宝之家",
        "link": "http://www.525zb.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ywtoys.org",
        "title": "义务玩具网",
        "desc": "义务玩具网",
        "link": "http://www.ywtoys.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.easttoys.com",
        "title": "东方玩具网",
        "desc": "东方玩具网",
        "link": "http://www.easttoys.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.watchtop.com",
        "title": "watch top",
        "desc": "watch top",
        "link": "http://www.watchtop.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.craftschina.net",
        "title": "中国工艺品信息网",
        "desc": "中国工艺品信息网",
        "link": "http://www.craftschina.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.wto168.net",
        "title": "国际珠宝网",
        "desc": "国际珠宝网",
        "link": "http://www.wto168.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.gift12345.com",
        "title": "工礼网",
        "desc": "工礼网",
        "link": "http://www.gift12345.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ctaoci.com",
        "title": "中华陶瓷网",
        "desc": "中华陶瓷网",
        "link": "http://www.ctaoci.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.glasses.com.cn",
        "title": "中国眼镜网",
        "desc": "中国眼镜网",
        "link": "http://www.glasses.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ctoy.com.cn",
        "title": "中外玩具礼品网",
        "desc": "中外玩具礼品网",
        "link": "http://www.ctoy.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.giftcity.cn",
        "title": "中国礼品城网",
        "desc": "中国礼品城网",
        "link": "http://www.giftcity.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.tohair.cn",
        "title": "中国发制品贸易网",
        "desc": "中国发制品贸易网",
        "link": "http://www.tohair.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.zjypw.com",
        "title": "中国宗教用品网",
        "desc": "中国宗教用品网",
        "link": "http://www.zjypw.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.mngyp.com",
        "title": "浙南工艺品网",
        "desc": "浙南工艺品网",
        "link": "http://www.mngyp.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.toybase.cn",
        "title": "玩具基地网",
        "desc": "玩具基地网",
        "link": "http://www.toybase.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.315gift.com",
        "title": "好礼多",
        "desc": "好礼多",
        "link": "http://www.315gift.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.yichao.cn",
        "title": "隐形眼镜网",
        "desc": "隐形眼镜网",
        "link": "http://www.yichao.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.lipingov.cn",
        "title": "中国礼品网",
        "desc": "中国礼品网",
        "link": "http://www.lipingov.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cnlipin.cn",
        "title": "全全礼品",
        "desc": "全全礼品",
        "link": "http://www.cnlipin.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.gypw.com",
        "title": "中国工艺品网",
        "desc": "中国工艺品网",
        "link": "http://www.gypw.com/"
      },
      {
        "icon": "https://logo.clearbit.com/lipin.huangye88.com",
        "title": "88礼品网",
        "desc": "88礼品网",
        "link": "http://lipin.huangye88.com/"
      },
      {
        "icon": "https://logo.clearbit.com/lipin.b2b168.com",
        "title": "中国工艺礼品网",
        "desc": "中国工艺礼品网",
        "link": "https://lipin.b2b168.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cn5135.com",
        "title": "无忧礼品网",
        "desc": "无忧礼品网",
        "link": "http://www.cn5135.com/gift/"
      },
      {
        "icon": "https://logo.clearbit.com/www.lipin-bj.cn",
        "title": "古韵礼品网",
        "desc": "古韵礼品网",
        "link": "http://www.lipin-bj.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ywart.com",
        "title": "原创艺术品电商",
        "desc": "原创艺术品电商",
        "link": "https://www.ywart.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.xuanliyi.com",
        "title": "选礼易",
        "desc": "选礼易",
        "link": "https://www.xuanliyi.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.zhongguozhuwang.com",
        "title": "中国竹网",
        "desc": "中国竹网",
        "link": "http://www.zhongguozhuwang.com/index.do"
      },
      {
        "icon": "https://logo.clearbit.com/enjoy.1688.com",
        "title": "工艺礼品市场",
        "desc": "工艺礼品市场",
        "link": "https://enjoy.1688.com/gongyilipin"
      },
      {
        "icon": "https://logo.clearbit.com/bbs.sssc.cn",
        "title": "盛世收藏论坛",
        "desc": "盛世收藏论坛",
        "link": "http://bbs.sssc.cn/forum.php"
      },
      {
        "icon": "https://logo.clearbit.com/www.giabbs.com",
        "title": "珠宝大家坛",
        "desc": "珠宝大家坛",
        "link": "http://www.giabbs.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.mega-show.com",
        "title": "香港礼品展",
        "desc": "香港礼品展",
        "link": "https://www.mega-show.com/en-index.php"
      },
      {
        "icon": "https://logo.clearbit.com/www.giftshow.co.jp",
        "title": "日本礼品展",
        "desc": "日本礼品展",
        "link": "https://www.giftshow.co.jp/"
      },
      {
        "icon": "https://logo.clearbit.com/www.lifestyle-expo.jp",
        "title": "东京礼品/消费品展",
        "desc": "东京礼品/消费品展",
        "link": "https://www.lifestyle-expo.jp/"
      },
      {
        "icon": "https://logo.clearbit.com/homeandgift.co.uk",
        "title": "英国国际家庭用品及礼品展",
        "desc": "英国国际家庭用品及礼品展",
        "link": "https://homeandgift.co.uk/"
      },
      {
        "icon": "https://logo.clearbit.com/christmasworld.messefrankfurt.com",
        "title": "法兰克福圣诞礼品展",
        "desc": "法兰克福圣诞礼品展",
        "link": "https://christmasworld.messefrankfurt.com/frankfurt/en.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.asdonline.com",
        "title": "拉斯维加斯消费品及礼品展",
        "desc": "拉斯维加斯消费品及礼品展",
        "link": "https://www.asdonline.com/"
      }
    ]
  },
  {
    "title": "05-安防行业",
    "items": [
      {
        "icon": "https://logo.clearbit.com/www.csp.gov.cn",
        "title": "中国公共安全认证网",
        "desc": "中国公共安全认证网",
        "link": "http://www.csp.gov.cn/index.html"
      },
      {
        "icon": "https://logo.clearbit.com/af360.com",
        "title": "东北安博会",
        "desc": "东北安博会",
        "link": "http://af360.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.secu.hc360.com",
        "title": "慧聪安防网",
        "desc": "慧聪安防网",
        "link": "http://www.secu.hc360.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.sh-anfang.org",
        "title": "上海安防协会",
        "desc": "上海安防协会",
        "link": "http://www.sh-anfang.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.afzhan.com",
        "title": "安防展览网",
        "desc": "安防展览网",
        "link": "http://www.afzhan.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ga.net.cn",
        "title": "公安部安全产品行业信息中心",
        "desc": "公安部安全产品行业信息中心",
        "link": "http://www.ga.net.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/security.asmag.com.cn",
        "title": "安防知识网",
        "desc": "安防知识网",
        "link": "http://security.asmag.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.anquan.com.cn",
        "title": "安全文化网",
        "desc": "安全文化网",
        "link": "http://www.anquan.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.china-fire.com",
        "title": "中国消防网",
        "desc": "中国消防网",
        "link": "http://www.china-fire.com/"
      },
      {
        "icon": "https://logo.clearbit.com/security.zol.com.cn",
        "title": "中关村安防",
        "desc": "中关村安防",
        "link": "http://security.zol.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ofweek.com",
        "title": "安防网",
        "desc": "安防网",
        "link": "https://www.ofweek.com/security/"
      },
      {
        "icon": "https://logo.clearbit.com/www.bspia.com",
        "title": "北京安全防范行业协会",
        "desc": "北京安全防范行业协会",
        "link": "http://www.bspia.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chyxx.com",
        "title": "安防行业资讯",
        "desc": "安防行业资讯",
        "link": "http://www.chyxx.com/industry/anfang1/"
      },
      {
        "icon": "https://logo.clearbit.com/www.esafety.cn",
        "title": "易安网",
        "desc": "易安网",
        "link": "http://www.esafety.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.bizcspia.com",
        "title": "中国安全和保护行业协会",
        "desc": "中国安全和保护行业协会",
        "link": "http://www.bizcspia.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.sh-anfang.org",
        "title": "上海安防",
        "desc": "上海安防",
        "link": "http://www.sh-anfang.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.21csp.com.cn",
        "title": "中国安防行业网",
        "desc": "中国安防行业网",
        "link": "http://www.21csp.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.c-ps.net",
        "title": "中国安防网",
        "desc": "中国安防网",
        "link": "http://www.c-ps.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.b2b888.com",
        "title": "天下安防网",
        "desc": "天下安防网",
        "link": "http://www.b2b888.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.zgafsb88.com",
        "title": "中国安防设备制造商",
        "desc": "中国安防设备制造商",
        "link": "http://www.zgafsb88.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.testmart.cn",
        "title": "安防交易网",
        "desc": "安防交易网",
        "link": "https://www.testmart.cn/anfang.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.21af.com",
        "title": "安防器材网",
        "desc": "安防器材网",
        "link": "http://www.21af.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.aibanger.com",
        "title": "爱邦网",
        "desc": "爱邦网",
        "link": "http://www.aibanger.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cps.com.cn",
        "title": "中安网",
        "desc": "中安网",
        "link": "http://www.cps.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.119shop.cc",
        "title": "都消防网",
        "desc": "都消防网",
        "link": "http://www.119shop.cc/"
      },
      {
        "icon": "https://logo.clearbit.com/www.afzhan.com",
        "title": "中国安防展览网",
        "desc": "中国安防展览网",
        "link": "http://www.afzhan.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ygean.com",
        "title": "云极安",
        "desc": "云极安",
        "link": "http://www.ygean.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.accessnet.cn",
        "title": "中国门禁网",
        "desc": "中国门禁网",
        "link": "http://www.accessnet.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.anf-z.com",
        "title": "易展安防网",
        "desc": "易展安防网",
        "link": "http://www.anf-z.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinalaobao.com",
        "title": "中国劳保网",
        "desc": "中国劳保网",
        "link": "http://www.chinalaobao.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.tpy888.cn",
        "title": "太平洋安防网",
        "desc": "太平洋安防网",
        "link": "http://www.tpy888.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/bbs.cps.com.cn",
        "title": "中安网论坛",
        "desc": "中安网论坛",
        "link": "http://bbs.cps.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/bbs.eeworld.com.cn",
        "title": "安防电子论坛",
        "desc": "安防电子论坛",
        "link": "http://bbs.eeworld.com.cn/forum-77-1.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.accessnet.com.cn",
        "title": "中国门禁网论坛",
        "desc": "中国门禁网论坛",
        "link": "http://www.accessnet.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.1000bbs.com",
        "title": "千家安防论坛",
        "desc": "千家安防论坛",
        "link": "http://www.1000bbs.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.afrcw.com",
        "title": "安防人才网",
        "desc": "安防人才网",
        "link": "http://www.afrcw.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.afjob88.com",
        "title": "一览安防英才网",
        "desc": "一览安防英才网",
        "link": "http://www.afjob88.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.anfangyc.com",
        "title": "安防英才网",
        "desc": "安防英才网",
        "link": "http://www.anfangyc.com/"
      },
      {
        "icon": "https://logo.clearbit.com/hr.21csp.com.cn",
        "title": "安防人才网",
        "desc": "安防人才网",
        "link": "http://hr.21csp.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/cpse.com.cn",
        "title": "安博会",
        "desc": "安博会",
        "link": "http://cpse.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/secutech.tw.messefrankfurt.com",
        "title": "台北安防展",
        "desc": "台北安防展",
        "link": "https://secutech.tw.messefrankfurt.com/taipei/en.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.safetysecurityasia.com.sg",
        "title": "新加坡亚洲安防展",
        "desc": "新加坡亚洲安防展",
        "link": "http://www.safetysecurityasia.com.sg/"
      },
      {
        "icon": "https://logo.clearbit.com/messe.nikkei.co.jp",
        "title": "东京安防展",
        "desc": "东京安防展",
        "link": "https://messe.nikkei.co.jp/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ifsec.events",
        "title": "印度IFSEC",
        "desc": "印度IFSEC",
        "link": "https://www.ifsec.events/india/"
      },
      {
        "icon": "https://logo.clearbit.com/www.securexwestafrica.com",
        "title": "西非安全科技展",
        "desc": "西非安全科技展",
        "link": "https://www.securexwestafrica.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.securex.co.za",
        "title": "南非消防科技专业展",
        "desc": "南非消防科技专业展",
        "link": "https://www.securex.co.za/"
      },
      {
        "icon": "https://logo.clearbit.com/www.aosh.co.za",
        "title": "南非工业安全防护展",
        "desc": "南非工业安全防护展",
        "link": "https://www.aosh.co.za/"
      },
      {
        "icon": "https://logo.clearbit.com/www.indosecurity.com",
        "title": "INDO SECURITY",
        "desc": "INDO SECURITY",
        "link": "http://www.indosecurity.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.indofirex.com",
        "title": "印尼消防展",
        "desc": "印尼消防展",
        "link": "http://www.indofirex.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.indodefence.com",
        "title": "印尼国防工业展",
        "desc": "印尼国防工业展",
        "link": "http://www.indodefence.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.isnrabudhabi.com",
        "title": "阿布扎比安防展",
        "desc": "阿布扎比安防展",
        "link": "https://www.isnrabudhabi.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.aplusa-online.com",
        "title": "杜塞尔多夫A+A劳保展",
        "desc": "杜塞尔多夫A+A劳保展",
        "link": "https://www.aplusa-online.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.expoprotection.com",
        "title": "法国安全用品及防火拯救设备展览会",
        "desc": "法国安全用品及防火拯救设备展览会",
        "link": "https://www.expoprotection.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ifsec.events",
        "title": "英国伯明翰消防科技展",
        "desc": "英国伯明翰消防科技展",
        "link": "https://www.ifsec.events/international/"
      },
      {
        "icon": "https://logo.clearbit.com/sfitex.ru",
        "title": "俄罗斯圣彼得堡国际安防及消防展",
        "desc": "俄罗斯圣彼得堡国际安防及消防展",
        "link": "https://sfitex.ru/ru-RU/"
      },
      {
        "icon": "https://logo.clearbit.com/exposec.tmp.br",
        "title": "圣保罗安全/防火产品展",
        "desc": "圣保罗安全/防火产品展",
        "link": "https://exposec.tmp.br/16/"
      },
      {
        "icon": "https://logo.clearbit.com/www.fispvirtual.com.br",
        "title": "巴西圣保罗劳保用品展",
        "desc": "巴西圣保罗劳保用品展",
        "link": "https://www.fispvirtual.com.br/16/"
      },
      {
        "icon": "https://logo.clearbit.com/www.exposeguridadindustrial.com",
        "title": "墨西哥消防安全展",
        "desc": "墨西哥消防安全展",
        "link": "https://www.exposeguridadindustrial.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.exposeguridadmexico.com",
        "title": "墨西哥安防展",
        "desc": "墨西哥安防展",
        "link": "https://www.exposeguridadmexico.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.safetyinaction.net.au",
        "title": "澳大利亚墨尔本安防展",
        "desc": "澳大利亚墨尔本安防展",
        "link": "https://www.safetyinaction.net.au/"
      },
      {
        "icon": "https://logo.clearbit.com/www.iscwest.com",
        "title": "ISC West (USA)",
        "desc": "ISC West (USA)",
        "link": "https://www.iscwest.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.isceast.com",
        "title": "美国东部安防展",
        "desc": "美国东部安防展",
        "link": "https://www.isceast.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.congress.nsc.org",
        "title": "美国安全及劳保用品展",
        "desc": "美国安全及劳保用品展",
        "link": "https://www.congress.nsc.org/nsc2019/public/enter.aspx"
      }
    ]
  },
  {
    "title": "06-家居行业",
    "items": [
      {
        "icon": "https://logo.clearbit.com/www.jiaju.cc",
        "title": "中国家具网",
        "desc": "中国家具网",
        "link": "http://www.jiaju.cc/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jiajuol.com",
        "title": "家居在线",
        "desc": "家居在线",
        "link": "http://www.jiajuol.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cnfa.com.cn",
        "title": "中国家具工业协会",
        "desc": "中国家具工业协会",
        "link": "http://www.cnfa.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ccd.com.cn",
        "title": "中国建筑装饰网",
        "desc": "中国建筑装饰网",
        "link": "http://www.ccd.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cnjzjj.com",
        "title": "中国家装家居网",
        "desc": "中国家装家居网",
        "link": "http://www.cnjzjj.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jjzqw.com",
        "title": "家具专区网",
        "desc": "家具专区网",
        "link": "http://www.jjzqw.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jjzg365.com",
        "title": "家居中国网",
        "desc": "家居中国网",
        "link": "http://www.jjzg365.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jjhyw.net",
        "title": "家居行业网",
        "desc": "家居行业网",
        "link": "http://www.jjhyw.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinahomes.cn",
        "title": "中国家居网",
        "desc": "中国家居网",
        "link": "https://www.chinahomes.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jjzy.ibicn.com",
        "title": "家居资源网",
        "desc": "家居资源网",
        "link": "http://www.jjzy.ibicn.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jzhyw.net",
        "title": "家装行业网",
        "desc": "家装行业网",
        "link": "http://www.jzhyw.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chyxx.com",
        "title": "中国产业信息-家具家居",
        "desc": "中国产业信息-家具家居",
        "link": "http://www.chyxx.com/industry/jiaju1/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jj17173.com",
        "title": "家居行业信息网",
        "desc": "家居行业信息网",
        "link": "http://www.jj17173.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jiajumi.com",
        "title": "家具迷",
        "desc": "家具迷",
        "link": "http://www.jiajumi.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jiajure.com",
        "title": "家居热",
        "desc": "家居热",
        "link": "http://www.jiajure.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.hm-3223.net",
        "title": "中国红木古典家具网",
        "desc": "中国红木古典家具网",
        "link": "http://www.hm-3223.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.china-china.cn",
        "title": "中国建筑卫生陶瓷网",
        "desc": "中国建筑卫生陶瓷网",
        "link": "http://www.china-china.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinafloor.cn",
        "title": "中华地板网",
        "desc": "中华地板网",
        "link": "http://www.chinafloor.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.xbcd.cn",
        "title": "中国瓷砖网",
        "desc": "中国瓷砖网",
        "link": "http://www.xbcd.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.furnituretoday.cn",
        "title": "全球家居业商业指南",
        "desc": "全球家居业商业指南",
        "link": "https://www.furnituretoday.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinachina.net",
        "title": "华夏陶瓷网",
        "desc": "华夏陶瓷网",
        "link": "http://www.chinachina.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.glass.com.cn",
        "title": "中国玻璃网",
        "desc": "中国玻璃网",
        "link": "http://www.glass.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.faucet-china.com",
        "title": "中国水暖卫浴网",
        "desc": "中国水暖卫浴网",
        "link": "http://www.faucet-china.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.lighting86.com.cn",
        "title": "中国灯饰商贸网",
        "desc": "中国灯饰商贸网",
        "link": "http://www.lighting86.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jj.hc360.com",
        "title": "慧聪网家居用品频道",
        "desc": "慧聪网家居用品频道",
        "link": "http://www.jj.hc360.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.offsup.net",
        "title": "家居生活网",
        "desc": "家居生活网",
        "link": "http://www.offsup.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jiaju.cc",
        "title": "中国家具网",
        "desc": "中国家具网",
        "link": "http://www.jiaju.cc/"
      },
      {
        "icon": "https://logo.clearbit.com/www.szfa.com",
        "title": "深圳家具网",
        "desc": "深圳家具网",
        "link": "http://www.szfa.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jia360.com",
        "title": "腾讯家居",
        "desc": "腾讯家居",
        "link": "http://www.jia360.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.pchouse.com.cn",
        "title": "太平洋家居网",
        "desc": "太平洋家居网",
        "link": "https://www.pchouse.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jieju.cn",
        "title": "中华洁具网",
        "desc": "中华洁具网",
        "link": "http://www.jieju.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ceramicschina.com",
        "title": "中国陶瓷网",
        "desc": "中国陶瓷网",
        "link": "http://www.ceramicschina.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ccenn.com",
        "title": "中陶网",
        "desc": "中陶网",
        "link": "http://www.ccenn.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.boli.cn",
        "title": "中国玻璃信息网",
        "desc": "中国玻璃信息网",
        "link": "http://www.boli.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.qqtc.cn",
        "title": "全球陶瓷网",
        "desc": "全球陶瓷网",
        "link": "http://www.qqtc.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.znjj.tv",
        "title": "智家网",
        "desc": "智家网",
        "link": "http://www.znjj.tv/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jiagle.com",
        "title": "家具在线",
        "desc": "家具在线",
        "link": "https://www.jiagle.com/jiaju/"
      },
      {
        "icon": "https://logo.clearbit.com/www.mjju.net",
        "title": "美家居",
        "desc": "美家居",
        "link": "http://www.mjju.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.toojj.com",
        "title": "家居网",
        "desc": "家居网",
        "link": "http://www.toojj.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.9juren.com",
        "title": "具人同行",
        "desc": "具人同行",
        "link": "http://www.9juren.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.meilele.com",
        "title": "美乐乐家具网",
        "desc": "美乐乐家具网",
        "link": "http://www.meilele.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.wyw.cn",
        "title": "中国卫浴网",
        "desc": "中国卫浴网",
        "link": "http://www.wyw.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/bbs.roomage.com",
        "title": "中国装修论坛",
        "desc": "中国装修论坛",
        "link": "http://bbs.roomage.com/"
      },
      {
        "icon": "https://logo.clearbit.com/jz.job1001.com",
        "title": "一览家具英才网",
        "desc": "一览家具英才网",
        "link": "http://jz.job1001.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.126job.net",
        "title": "126家具人才网",
        "desc": "126家具人才网",
        "link": "http://www.126job.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jjrw.com",
        "title": "中国家具招聘网",
        "desc": "中国家具招聘网",
        "link": "http://www.jjrw.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cnjjhr.com",
        "title": "家具人才网",
        "desc": "家具人才网",
        "link": "http://www.cnjjhr.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.51juy.com",
        "title": "居英网",
        "desc": "居英网",
        "link": "http://www.51juy.com/"
      },
      {
        "icon": "https://logo.clearbit.com/jj.djob.com",
        "title": "Djob家具人才网",
        "desc": "Djob家具人才网",
        "link": "http://jj.djob.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.antiquefurniturefair.com",
        "title": "中国国际古典家具展",
        "desc": "中国国际古典家具展",
        "link": "http://www.antiquefurniturefair.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.xajjzh.com",
        "title": "西安国际家具展",
        "desc": "西安国际家具展",
        "link": "http://www.xajjzh.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jn-ff.com",
        "title": "济南家具展",
        "desc": "济南家具展",
        "link": "http://www.jn-ff.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.szjjzlh.com",
        "title": "苏州家具展",
        "desc": "苏州家具展",
        "link": "http://www.szjjzlh.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ciff-gz.com",
        "title": "广州家具展",
        "desc": "广州家具展",
        "link": "https://www.ciff-gz.com/zh/index"
      },
      {
        "icon": "https://logo.clearbit.com/www.51jiabo.com",
        "title": "家博会",
        "desc": "家博会",
        "link": "http://www.51jiabo.com/sh"
      },
      {
        "icon": "https://logo.clearbit.com/www.sifechina.cn",
        "title": "深圳国际家具展",
        "desc": "深圳国际家具展",
        "link": "https://www.sifechina.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.furniture-china.cn",
        "title": "中国国际家具展",
        "desc": "中国国际家具展",
        "link": "http://www.furniture-china.cn/zh-cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.vifafair.com",
        "title": "越南家具及配件展",
        "desc": "越南家具及配件展",
        "link": "http://www.vifafair.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.iffs.com.sg",
        "title": "新加坡家具展",
        "desc": "新加坡家具展",
        "link": "https://www.iffs.com.sg/"
      },
      {
        "icon": "https://logo.clearbit.com/www.sleepandeatevent.com",
        "title": "sleep家装展",
        "desc": "sleep家装展",
        "link": "https://www.sleepandeatevent.com/"
      },
      {
        "icon": "https://logo.clearbit.com/efe.my",
        "title": "马来西亚家具贸易展",
        "desc": "马来西亚家具贸易展",
        "link": "http://efe.my/"
      },
      {
        "icon": "https://logo.clearbit.com/2020.miff.com.my",
        "title": "马来西亚家具展",
        "desc": "马来西亚家具展",
        "link": "https://2020.miff.com.my/"
      },
      {
        "icon": "https://logo.clearbit.com/www.aiff.net.au",
        "title": "澳大利亚悉尼家具展",
        "desc": "澳大利亚悉尼家具展",
        "link": "https://www.aiff.net.au/"
      },
      {
        "icon": "https://logo.clearbit.com/www.indexexhibition.com",
        "title": "迪拜家具暨室内装饰展",
        "desc": "迪拜家具暨室内装饰展",
        "link": "https://www.indexexhibition.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.meb-expo.ru",
        "title": "俄罗斯国际家具配件展",
        "desc": "俄罗斯国际家具配件展",
        "link": "http://www.meb-expo.ru/"
      },
      {
        "icon": "https://logo.clearbit.com/www.feriahabitatvalencia.com",
        "title": "西班牙瓦伦西亚家具展",
        "desc": "西班牙瓦伦西亚家具展",
        "link": "https://www.feriahabitatvalencia.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.decorex.com",
        "title": "Decorex",
        "desc": "Decorex",
        "link": "https://www.decorex.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.orgatec.com",
        "title": "德国科隆办公家具展",
        "desc": "德国科隆办公家具展",
        "link": "https://www.orgatec.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.interzum.com",
        "title": "德国家具加工配件展",
        "desc": "德国家具加工配件展",
        "link": "https://www.interzum.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.zow.de",
        "title": "德国家具配件展",
        "desc": "德国家具配件展",
        "link": "https://www.zow.de/"
      },
      {
        "icon": "https://logo.clearbit.com/www.imm-cologne.com",
        "title": "德国科隆家具展",
        "desc": "德国科隆家具展",
        "link": "https://www.imm-cologne.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.informamarkets.com",
        "title": "巴西家具配件木工机械展",
        "desc": "巴西家具配件木工机械展",
        "link": "https://www.informamarkets.com/en/regions/south-america.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.formobile.com.br",
        "title": "巴西家具配件及木工机械展",
        "desc": "巴西家具配件及木工机械展",
        "link": "https://www.formobile.com.br/pt/home.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.casualmarket.com",
        "title": "芝加哥户外家具用品展",
        "desc": "芝加哥户外家具用品展",
        "link": "http://www.casualmarket.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.neocon.com",
        "title": "芝加哥办公家具展",
        "desc": "芝加哥办公家具展",
        "link": "https://www.neocon.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ispaexpo.com",
        "title": "美国睡眠产品展",
        "desc": "美国睡眠产品展",
        "link": "https://www.ispaexpo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.glassbuildamerica.com",
        "title": "美国玻璃及门窗展",
        "desc": "美国玻璃及门窗展",
        "link": "http://www.glassbuildamerica.com/"
      }
    ]
  },
  {
    "title": "07-建材行业",
    "items": [
      {
        "icon": "https://logo.clearbit.com/www.mohurd.gov.cn",
        "title": "中华人民共和国建设部",
        "desc": "中华人民共和国建设部",
        "link": "http://www.mohurd.gov.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cnbwp.com",
        "title": "中国建筑防水网",
        "desc": "中国建筑防水网",
        "link": "http://www.cnbwp.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.zhulong.com",
        "title": "筑龙网",
        "desc": "筑龙网",
        "link": "http://www.zhulong.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cbminfo.com",
        "title": "中国建材信息总网",
        "desc": "中国建材信息总网",
        "link": "http://www.cbminfo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.tgnet.cn",
        "title": "天工网",
        "desc": "天工网",
        "link": "http://www.tgnet.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ccd.com.cn",
        "title": "中国建筑装饰网",
        "desc": "中国建筑装饰网",
        "link": "http://www.ccd.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.buildnet.cn",
        "title": "天辰建设网",
        "desc": "天辰建设网",
        "link": "http://www.buildnet.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ib-china.com",
        "title": "中国智能建筑信息网",
        "desc": "中国智能建筑信息网",
        "link": "http://www.ib-china.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.xnjcw.com",
        "title": "西部建材网",
        "desc": "西部建材网",
        "link": "http://www.xnjcw.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.gjg.ibicn.com",
        "title": "钢结构产业网",
        "desc": "钢结构产业网",
        "link": "http://www.gjg.ibicn.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinabmi.com",
        "title": "建材智网",
        "desc": "建材智网",
        "link": "http://www.chinabmi.com/"
      },
      {
        "icon": "https://logo.clearbit.com/cbmf.org",
        "title": "中国建材信息总网",
        "desc": "中国建材信息总网",
        "link": "http://cbmf.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ccpitbm.org",
        "title": "中国贸促会建材行业",
        "desc": "中国贸促会建材行业",
        "link": "http://www.ccpitbm.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cnrmc.com",
        "title": "中国混泥土网",
        "desc": "中国混泥土网",
        "link": "http://www.cnrmc.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.bmlink.com",
        "title": "建材网商业资讯",
        "desc": "建材网商业资讯",
        "link": "https://www.bmlink.com/news/"
      },
      {
        "icon": "https://logo.clearbit.com/www.dcement.com",
        "title": "数字水泥网",
        "desc": "数字水泥网",
        "link": "http://www.dcement.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.hnt188.com",
        "title": "中国商品混凝土网",
        "desc": "中国商品混凝土网",
        "link": "http://www.hnt188.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cementmagazine.com",
        "title": "水泥杂志网",
        "desc": "水泥杂志网",
        "link": "http://www.cementmagazine.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.snsqw.com",
        "title": "水泥商情网",
        "desc": "水泥商情网",
        "link": "http://www.snsqw.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jc.net.cn",
        "title": "中国建材在线",
        "desc": "中国建材在线",
        "link": "http://www.jc.net.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.taoci.com",
        "title": "陶瓷网",
        "desc": "陶瓷网",
        "link": "http://www.taoci.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jiancai.com",
        "title": "盛丰建材网",
        "desc": "盛丰建材网",
        "link": "http://www.jiancai.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.xbcd.cn",
        "title": "中国瓷砖网",
        "desc": "中国瓷砖网",
        "link": "http://www.xbcd.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.syjiancai.com",
        "title": "沈阳建材网",
        "desc": "沈阳建材网",
        "link": "http://www.syjiancai.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.co188.com",
        "title": "co土木在线",
        "desc": "co土木在线",
        "link": "http://www.co188.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chyxx.com",
        "title": "中国产业信息-房产建材",
        "desc": "中国产业信息-房产建材",
        "link": "http://www.chyxx.com/industry/jianzhu/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jiancai.com",
        "title": "盛丰建材网",
        "desc": "盛丰建材网",
        "link": "http://www.jiancai.com/info/"
      },
      {
        "icon": "https://logo.clearbit.com/bm.hc360.com",
        "title": "慧聪网-建材",
        "desc": "慧聪网-建材",
        "link": "http://bm.hc360.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.allfence.cn",
        "title": "中国护栏网",
        "desc": "中国护栏网",
        "link": "http://www.allfence.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.glassxs.cn",
        "title": "中国玻璃销售网",
        "desc": "中国玻璃销售网",
        "link": "http://www.glassxs.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.szgujian.com",
        "title": "苏州古建筑网",
        "desc": "苏州古建筑网",
        "link": "http://www.szgujian.com/"
      },
      {
        "icon": "https://logo.clearbit.com/srq.n3.com.cn",
        "title": "暖立方散热器网",
        "desc": "暖立方散热器网",
        "link": "http://srq.n3.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/bgl.n3.com.cn",
        "title": "暖立方壁挂炉网",
        "desc": "暖立方壁挂炉网",
        "link": "http://bgl.n3.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.buildingonline.com",
        "title": "building online",
        "desc": "building online",
        "link": "http://www.buildingonline.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.stonemsn.com",
        "title": "中国石材网上贸易",
        "desc": "中国石材网上贸易",
        "link": "http://www.stonemsn.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.dnw.com.cn",
        "title": "中国地暖网",
        "desc": "中国地暖网",
        "link": "http://www.dnw.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jc.net.cn",
        "title": "中国建材价格网",
        "desc": "中国建材价格网",
        "link": "http://www.jc.net.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.tybaba.com",
        "title": "全球铁艺网",
        "desc": "全球铁艺网",
        "link": "http://www.tybaba.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jc001.cn",
        "title": "中国建材第一网",
        "desc": "中国建材第一网",
        "link": "http://www.jc001.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/jc.zhulong.com",
        "title": "建材网",
        "desc": "建材网",
        "link": "http://jc.zhulong.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.hvacr.hc360.com",
        "title": "慧聪暖通制冷网",
        "desc": "慧聪暖通制冷网",
        "link": "http://www.hvacr.hc360.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.alu.cn",
        "title": "中国铝业",
        "desc": "中国铝业",
        "link": "http://www.alu.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.bmlink.com",
        "title": "中国建材网",
        "desc": "中国建材网",
        "link": "http://www.bmlink.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinacements.com",
        "title": "中国水泥网",
        "desc": "中国水泥网",
        "link": "http://www.chinacements.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.bmlink.com",
        "title": "BMLINK建材网",
        "desc": "BMLINK建材网",
        "link": "https://www.bmlink.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinabm.cn",
        "title": "中国建材网",
        "desc": "中国建材网",
        "link": "https://www.chinabm.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jcbmt.com",
        "title": "建材贸易网",
        "desc": "建材贸易网",
        "link": "http://www.jcbmt.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.co188.com",
        "title": "土木在线",
        "desc": "土木在线",
        "link": "https://www.co188.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.stonebuy.com",
        "title": "中国石材网",
        "desc": "中国石材网",
        "link": "http://www.stonebuy.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jiancai365.cn",
        "title": "建材采购网",
        "desc": "建材采购网",
        "link": "http://www.jiancai365.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.teleyi.com",
        "title": "特乐意建材电商交易平台",
        "desc": "特乐意建材电商交易平台",
        "link": "http://www.teleyi.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jiancaiyi.com",
        "title": "建采易",
        "desc": "建采易",
        "link": "https://www.jiancaiyi.com/mall/search"
      },
      {
        "icon": "https://logo.clearbit.com/xn--vhq342b6igbu9a.com",
        "title": "建材行业网",
        "desc": "建材行业网",
        "link": "http://xn--vhq342b6igbu9a.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.joojcc.com",
        "title": "中易通建材网",
        "desc": "中易通建材网",
        "link": "http://www.joojcc.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinamendu.com",
        "title": "中国门都网",
        "desc": "中国门都网",
        "link": "http://www.chinamendu.com/"
      },
      {
        "icon": "https://logo.clearbit.com/search.bmlink.com",
        "title": "中建搜索",
        "desc": "中建搜索",
        "link": "http://search.bmlink.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.world-stone.com",
        "title": "世界石材网",
        "desc": "世界石材网",
        "link": "http://www.world-stone.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jiancai365.cn",
        "title": "中国建材采购网",
        "desc": "中国建材采购网",
        "link": "http://www.jiancai365.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cbee.cn",
        "title": "中国建筑节能网",
        "desc": "中国建筑节能网",
        "link": "http://www.cbee.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.zhuniu.com",
        "title": "筑牛网",
        "desc": "筑牛网",
        "link": "http://www.zhuniu.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinabm.cn",
        "title": "中华建材网",
        "desc": "中华建材网",
        "link": "https://www.chinabm.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jc.tt",
        "title": "建材行业网",
        "desc": "建材行业网",
        "link": "http://www.jc.tt/"
      },
      {
        "icon": "https://logo.clearbit.com/www.buildnet.cn",
        "title": "建设网",
        "desc": "建设网",
        "link": "http://www.buildnet.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jc123.com.cn",
        "title": "建筑材料网",
        "desc": "建筑材料网",
        "link": "http://www.jc123.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ehuojia.org",
        "title": "中国货架网",
        "desc": "中国货架网",
        "link": "http://www.ehuojia.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cangchu.org",
        "title": "中国仓储货架网",
        "desc": "中国仓储货架网",
        "link": "http://www.cangchu.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.c-m.com.cn",
        "title": "水泥商讯网",
        "desc": "水泥商讯网",
        "link": "http://www.c-m.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cnccr.cn",
        "title": "加固改造网",
        "desc": "加固改造网",
        "link": "http://www.cnccr.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.globalwood.org",
        "title": "globalwood",
        "desc": "globalwood",
        "link": "http://www.globalwood.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.build.com",
        "title": "build",
        "desc": "build",
        "link": "http://www.build.com/"
      },
      {
        "icon": "https://logo.clearbit.com/bbs.zhulong.com",
        "title": "筑龙网论坛",
        "desc": "筑龙网论坛",
        "link": "http://bbs.zhulong.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.abbs.com.cn",
        "title": "ABBS建筑论坛",
        "desc": "ABBS建筑论坛",
        "link": "http://www.abbs.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.tydf.cn",
        "title": "天圆地方",
        "desc": "天圆地方",
        "link": "http://www.tydf.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/bbs.ceramicschina.com",
        "title": "中国陶瓷论坛",
        "desc": "中国陶瓷论坛",
        "link": "https://bbs.ceramicschina.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jgjob88.com",
        "title": "建工英才网",
        "desc": "建工英才网",
        "link": "http://www.jgjob88.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.buildhr.com",
        "title": "建筑英才网",
        "desc": "建筑英才网",
        "link": "http://www.buildhr.com/"
      },
      {
        "icon": "https://logo.clearbit.com/bm.baidajob.com",
        "title": "百大英才网-建材站",
        "desc": "百大英才网-建材站",
        "link": "http://bm.baidajob.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.concretehr.com",
        "title": "中国混凝土人力资源网",
        "desc": "中国混凝土人力资源网",
        "link": "http://www.concretehr.com/"
      },
      {
        "icon": "https://logo.clearbit.com/sn.job1001.com",
        "title": "一览水泥英才网",
        "desc": "一览水泥英才网",
        "link": "http://sn.job1001.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.build-decor.net",
        "title": "北京建材展览会",
        "desc": "北京建材展览会",
        "link": "http://www.build-decor.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.stonefair.org.cn",
        "title": "厦门石材展",
        "desc": "厦门石材展",
        "link": "http://www.stonefair.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cdjbh.cn",
        "title": "成都建筑装饰材料博览会",
        "desc": "成都建筑装饰材料博览会",
        "link": "http://www.cdjbh.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.indobuildtech.com",
        "title": "印尼国际建筑展",
        "desc": "印尼国际建筑展",
        "link": "http://www.indobuildtech.com/Home"
      },
      {
        "icon": "https://logo.clearbit.com/www.inagreentech-exhibition.net",
        "title": "印尼绿色建材展",
        "desc": "印尼绿色建材展",
        "link": "http://www.inagreentech-exhibition.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.harfko.com",
        "title": "韩国国际空调制冷展",
        "desc": "韩国国际空调制冷展",
        "link": "http://www.harfko.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.gardex.jp",
        "title": "东京户外花园设施及用品展",
        "desc": "东京户外花园设施及用品展",
        "link": "https://www.gardex.jp/ja-jp.html"
      },
      {
        "icon": "https://logo.clearbit.com/khfair.com",
        "title": "首尔京乡建筑及装饰展",
        "desc": "首尔京乡建筑及装饰展",
        "link": "https://khfair.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jraia.or.jp",
        "title": "日本暖通制冷展",
        "desc": "日本暖通制冷展",
        "link": "https://www.jraia.or.jp/hvacr/"
      },
      {
        "icon": "https://logo.clearbit.com/hvacvn.com",
        "title": "越南暖通空调制冷展",
        "desc": "越南暖通空调制冷展",
        "link": "https://hvacvn.com/"
      },
      {
        "icon": "https://logo.clearbit.com/archidex.com.my",
        "title": "马来西亚建材展",
        "desc": "马来西亚建材展",
        "link": "https://archidex.com.my/"
      },
      {
        "icon": "https://logo.clearbit.com/www.bex-asia.com",
        "title": "新加坡建筑建材展",
        "desc": "新加坡建筑建材展",
        "link": "https://www.bex-asia.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.architectexpo.com",
        "title": "曼谷建材及室内装饰展",
        "desc": "曼谷建材及室内装饰展",
        "link": "http://www.architectexpo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.projectqatar.com",
        "title": "卡塔尔建材展",
        "desc": "卡塔尔建材展",
        "link": "http://www.projectqatar.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.iranhvac.com",
        "title": "伊朗德黑兰暖通制冷展",
        "desc": "伊朗德黑兰暖通制冷展",
        "link": "http://www.iranhvac.com/en/"
      },
      {
        "icon": "https://logo.clearbit.com/www.thebig5.ae",
        "title": "迪拜五大行业展",
        "desc": "迪拜五大行业展",
        "link": "http://www.thebig5.ae/"
      },
      {
        "icon": "https://logo.clearbit.com/sbie-arabia.com",
        "title": "沙特阿拉伯吉达建筑及装饰展",
        "desc": "沙特阿拉伯吉达建筑及装饰展",
        "link": "http://sbie-arabia.com/"
      },
      {
        "icon": "https://logo.clearbit.com/saudibuild-expo.com",
        "title": "沙特建筑博览会",
        "desc": "沙特建筑博览会",
        "link": "http://saudibuild-expo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.interbuild.co.za",
        "title": "南非建筑建材展",
        "desc": "南非建筑建材展",
        "link": "https://www.interbuild.co.za/"
      },
      {
        "icon": "https://logo.clearbit.com/www.expogr.com",
        "title": "肯尼亚建材展",
        "desc": "肯尼亚建材展",
        "link": "https://www.expogr.com/buildexpokenya/"
      },
      {
        "icon": "https://logo.clearbit.com/www.eurasiafloor.com",
        "title": "伊斯坦布尔地面材料展",
        "desc": "伊斯坦布尔地面材料展",
        "link": "http://www.eurasiafloor.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.kazbuild.kz",
        "title": "阿拉木图建材秋季展",
        "desc": "阿拉木图建材秋季展",
        "link": "https://www.kazbuild.kz/ru/"
      },
      {
        "icon": "https://logo.clearbit.com/www.astanabuild.kz",
        "title": "阿斯塔纳建筑建材展",
        "desc": "阿斯塔纳建筑建材展",
        "link": "https://www.astanabuild.kz/ru/"
      },
      {
        "icon": "https://logo.clearbit.com/www.projectlebanon.com",
        "title": "黎巴嫩建筑建材展",
        "desc": "黎巴嫩建筑建材展",
        "link": "http://www.projectlebanon.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.rebuildlebanon.gov.lb",
        "title": "黎巴嫩重建展",
        "desc": "黎巴嫩重建展",
        "link": "http://www.rebuildlebanon.gov.lb/english/f/default.asp"
      },
      {
        "icon": "https://logo.clearbit.com/climatexpo.ru",
        "title": "俄罗斯国际空调通风及制冷设备展览",
        "desc": "俄罗斯国际空调通风及制冷设备展览",
        "link": "https://climatexpo.ru/"
      },
      {
        "icon": "https://logo.clearbit.com/www.aquatherm-moscow.ru",
        "title": "莫斯科暖通制冷展",
        "desc": "莫斯科暖通制冷展",
        "link": "https://www.aquatherm-moscow.ru/ru-ru.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.arbs.com.au",
        "title": "澳大利亚空调/暖通及制冷展",
        "desc": "澳大利亚空调/暖通及制冷展",
        "link": "https://www.arbs.com.au/"
      },
      {
        "icon": "https://logo.clearbit.com/designbuildexpo.com.au",
        "title": "澳大利亚建筑展",
        "desc": "澳大利亚建筑展",
        "link": "https://designbuildexpo.com.au/"
      },
      {
        "icon": "https://logo.clearbit.com/www.targistone.pl",
        "title": "波兰国际石材展",
        "desc": "波兰国际石材展",
        "link": "https://www.targistone.pl/pl/"
      },
      {
        "icon": "https://logo.clearbit.com/www.budma.pl",
        "title": "波兰建筑博览会",
        "desc": "波兰建筑博览会",
        "link": "https://www.budma.pl/pl/"
      },
      {
        "icon": "https://logo.clearbit.com/www.batimat.com",
        "title": "巴黎国际建筑展览会",
        "desc": "巴黎国际建筑展览会",
        "link": "https://www.batimat.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.equipbaie.com",
        "title": "法国巴黎门窗展",
        "desc": "法国巴黎门窗展",
        "link": "https://www.equipbaie.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.leipziger-messe.de",
        "title": "莱比锡供暖空调/卫浴建材展",
        "desc": "莱比锡供暖空调/卫浴建材展",
        "link": "http://www.leipziger-messe.de/"
      },
      {
        "icon": "https://logo.clearbit.com/www.domotex.de",
        "title": "汉诺威地面铺装展",
        "desc": "汉诺威地面铺装展",
        "link": "https://www.domotex.de/home"
      },
      {
        "icon": "https://logo.clearbit.com/www.bautec.com",
        "title": "德国柏林建筑建材展",
        "desc": "德国柏林建筑建材展",
        "link": "https://www.bautec.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.acqua-alta.de",
        "title": "德国艾森建筑建材展",
        "desc": "德国艾森建筑建材展",
        "link": "https://www.acqua-alta.de/hochwasserschutz"
      },
      {
        "icon": "https://logo.clearbit.com/bau-muenchen.com",
        "title": "德国慕尼黑建材展",
        "desc": "德国慕尼黑建材展",
        "link": "https://bau-muenchen.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.wexhibition.co.uk",
        "title": "w exhibition",
        "desc": "w exhibition",
        "link": "https://www.wexhibition.co.uk/"
      },
      {
        "icon": "https://logo.clearbit.com/www.mcexpocomfort.it",
        "title": "米兰卫浴暖通展",
        "desc": "米兰卫浴暖通展",
        "link": "https://www.mcexpocomfort.it/"
      },
      {
        "icon": "https://logo.clearbit.com/www.bouwbeurs.nl",
        "title": "荷兰乌德勒支建材展",
        "desc": "荷兰乌德勒支建材展",
        "link": "https://www.bouwbeurs.nl/"
      },
      {
        "icon": "https://logo.clearbit.com/www.buildingweek.bg",
        "title": "保加利亚索菲亚建材展",
        "desc": "保加利亚索菲亚建材展",
        "link": "http://www.buildingweek.bg/index.php/bg/"
      },
      {
        "icon": "https://logo.clearbit.com/www.theflooringshow.com",
        "title": "英国哈洛格地面材料展",
        "desc": "英国哈洛格地面材料展",
        "link": "https://www.theflooringshow.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.stoneshow.co.uk",
        "title": "伦敦国际天然石展",
        "desc": "伦敦国际天然石展",
        "link": "https://www.stoneshow.co.uk/"
      },
      {
        "icon": "https://logo.clearbit.com/toolfair.info",
        "title": "英国toolfair",
        "desc": "英国toolfair",
        "link": "https://toolfair.info/"
      },
      {
        "icon": "https://logo.clearbit.com/www.futurebuild.co.uk",
        "title": "伦敦绿色环保建材展",
        "desc": "伦敦绿色环保建材展",
        "link": "https://www.futurebuild.co.uk/"
      },
      {
        "icon": "https://logo.clearbit.com/expocihac.com",
        "title": "墨西哥建材展",
        "desc": "墨西哥建材展",
        "link": "https://expocihac.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.barbaraborgesprojetos.com.br",
        "title": "里约热内卢建材/卫浴设备展",
        "desc": "里约热内卢建材/卫浴设备展",
        "link": "https://www.barbaraborgesprojetos.com.br/"
      },
      {
        "icon": "https://logo.clearbit.com/www.feicon.com.br",
        "title": "巴西国际建材展",
        "desc": "巴西国际建材展",
        "link": "https://www.feicon.com.br/pt-br.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.vitoriastonefair.com.br",
        "title": "巴西维多利亚石材工具展",
        "desc": "巴西维多利亚石材工具展",
        "link": "https://www.vitoriastonefair.com.br/site/2019/pt/home"
      },
      {
        "icon": "https://logo.clearbit.com/www.febrava.com.br",
        "title": "巴西制冷空调通风及供暖展",
        "desc": "巴西制冷空调通风及供暖展",
        "link": "https://www.febrava.com.br/"
      },
      {
        "icon": "https://logo.clearbit.com/www.construmat.com",
        "title": "巴塞罗那建材展",
        "desc": "巴塞罗那建材展",
        "link": "http://www.construmat.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.concreteshow.com.br",
        "title": "巴西混凝土展",
        "desc": "巴西混凝土展",
        "link": "https://www.concreteshow.com.br/pt/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cachoeirostonefair.com.br",
        "title": "巴西石材展",
        "desc": "巴西石材展",
        "link": "https://www.cachoeirostonefair.com.br/"
      },
      {
        "icon": "https://logo.clearbit.com/www.edifica.cl",
        "title": "智利建材展",
        "desc": "智利建材展",
        "link": "https://www.edifica.cl/"
      },
      {
        "icon": "https://logo.clearbit.com/www.batev.com.ar",
        "title": "阿根廷国际建筑工业展览会",
        "desc": "阿根廷国际建筑工业展览会",
        "link": "https://www.batev.com.ar/"
      },
      {
        "icon": "https://logo.clearbit.com/www.buildersshow.com",
        "title": "奥兰多建筑建材展",
        "desc": "奥兰多建筑建材展",
        "link": "https://www.buildersshow.com/Home/"
      },
      {
        "icon": "https://logo.clearbit.com/www.thebuildingsshow.com",
        "title": "加拿大建筑和混凝土展",
        "desc": "加拿大建筑和混凝土展",
        "link": "https://www.thebuildingsshow.com/en/home.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.buildingsny.com",
        "title": "纽约建材展",
        "desc": "纽约建材展",
        "link": "https://www.buildingsny.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.stone-tec.com",
        "title": "纽伦堡国际石材展",
        "desc": "纽伦堡国际石材展",
        "link": "https://www.stone-tec.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.coverings.com",
        "title": "亚特兰大石材及瓷砖展",
        "desc": "亚特兰大石材及瓷砖展",
        "link": "https://www.coverings.com/"
      },
      {
        "icon": "https://logo.clearbit.com/ahrexpo.com",
        "title": "美国奥兰多暖通制冷展",
        "desc": "美国奥兰多暖通制冷展",
        "link": "https://ahrexpo.com/"
      }
    ]
  },
  {
    "title": "08-服装行业",
    "items": [
      {
        "icon": "https://logo.clearbit.com/news.efu.com.cn",
        "title": "服装新闻",
        "desc": "服装新闻",
        "link": "http://news.efu.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cloth.hc360.com",
        "title": "慧聪服装网",
        "desc": "慧聪服装网",
        "link": "http://www.cloth.hc360.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.taweekly.com",
        "title": "纺织服装周刊",
        "desc": "纺织服装周刊",
        "link": "http://www.taweekly.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cfw.com.cn",
        "title": "中国服饰新闻网",
        "desc": "中国服饰新闻网",
        "link": "http://www.cfw.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.webtex.cn",
        "title": "第一纺织网",
        "desc": "第一纺织网",
        "link": "http://www.webtex.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ccta.org.cn",
        "title": "中国棉纺织行业协会",
        "desc": "中国棉纺织行业协会",
        "link": "http://www.ccta.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cwta.org.cn",
        "title": "中国毛纺织行业协会",
        "desc": "中国毛纺织行业协会",
        "link": "http://www.cwta.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.wzfashion.org",
        "title": "温州服装商会",
        "desc": "温州服装商会",
        "link": "http://www.wzfashion.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ef360.com",
        "title": "华衣网",
        "desc": "华衣网",
        "link": "http://www.ef360.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cblfta.org.cn",
        "title": "中国麻纺织行业协会",
        "desc": "中国麻纺织行业协会",
        "link": "http://www.cblfta.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.silk-e.org",
        "title": "中国茧丝绸网",
        "desc": "中国茧丝绸网",
        "link": "http://www.silk-e.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ckia.org",
        "title": "中国针织工业协会",
        "desc": "中国针织工业协会",
        "link": "http://www.ckia.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinasspp.com",
        "title": "中国时尚品牌网",
        "desc": "中国时尚品牌网",
        "link": "http://www.chinasspp.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cdpa.org.cn",
        "title": "中国印染行业协会",
        "desc": "中国印染行业协会",
        "link": "http://www.cdpa.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.168tex.com",
        "title": "绸都网",
        "desc": "绸都网",
        "link": "http://www.168tex.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.china-ef.com",
        "title": "中国品牌服装网",
        "desc": "中国品牌服装网",
        "link": "http://www.china-ef.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.fumin.com",
        "title": "富民服装网",
        "desc": "富民服装网",
        "link": "http://www.fumin.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ctic.org.cn",
        "title": "中国纺织信息中心",
        "desc": "中国纺织信息中心",
        "link": "http://www.ctic.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ccpittex.com",
        "title": "纺织贸促网",
        "desc": "纺织贸促网",
        "link": "http://www.ccpittex.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.efuin.com",
        "title": "中国服装产业网",
        "desc": "中国服装产业网",
        "link": "http://www.efuin.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.fzengine.com",
        "title": "中国服装工业网",
        "desc": "中国服装工业网",
        "link": "http://www.fzengine.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ne365.com",
        "title": "国际内衣网",
        "desc": "国际内衣网",
        "link": "http://www.ne365.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.51kids.com",
        "title": "中国童装网",
        "desc": "中国童装网",
        "link": "http://www.51kids.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.vifo.com.cn",
        "title": "微服网",
        "desc": "微服网",
        "link": "http://www.vifo.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.3fnet.com",
        "title": "3FNET时尚第一旗",
        "desc": "3FNET时尚第一旗",
        "link": "http://www.3fnet.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.shoes.net.cn",
        "title": "环球鞋网",
        "desc": "环球鞋网",
        "link": "http://www.shoes.net.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.511340.com",
        "title": "中国牛仔服装网",
        "desc": "中国牛仔服装网",
        "link": "http://www.511340.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.fzmec.com",
        "title": "中国服装机械网",
        "desc": "中国服装机械网",
        "link": "http://www.fzmec.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.zgzyw.net",
        "title": "制衣网",
        "desc": "制衣网",
        "link": "http://www.zgzyw.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ef43.com.cn",
        "title": "中国丽人网",
        "desc": "中国丽人网",
        "link": "http://www.ef43.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cfw.com.cn",
        "title": "中国服装新闻网",
        "desc": "中国服装新闻网",
        "link": "http://www.cfw.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/fashion.icxo.com",
        "title": "时装经理人",
        "desc": "时装经理人",
        "link": "http://fashion.icxo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.5143.cn",
        "title": "服装招商网",
        "desc": "服装招商网",
        "link": "http://www.5143.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.bgfashion.net",
        "title": "Fashion directory",
        "desc": "Fashion directory",
        "link": "http://www.bgfashion.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.fabric.com",
        "title": "Fabric",
        "desc": "Fabric",
        "link": "http://www.fabric.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.apparelnews.net",
        "title": "Apparelnews",
        "desc": "Apparelnews",
        "link": "http://www.apparelnews.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.magiconline.com",
        "title": "MAGIConline",
        "desc": "MAGIConline",
        "link": "http://www.magiconline.com/"
      },
      {
        "icon": "https://logo.clearbit.com/apparel.edgl.com",
        "title": "Apparel Magazine",
        "desc": "Apparel Magazine",
        "link": "http://apparel.edgl.com/home"
      },
      {
        "icon": "https://logo.clearbit.com/www.iafnet.org",
        "title": "International Apparel Federation",
        "desc": "International Apparel Federation",
        "link": "http://www.iafnet.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cnga.org.cn",
        "title": "中国服装协会网",
        "desc": "中国服装协会网",
        "link": "http://www.cnga.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.tnc.com.cn",
        "title": "全球纺织网",
        "desc": "全球纺织网",
        "link": "https://www.tnc.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.61kids.com.cn",
        "title": "中国童装品牌网",
        "desc": "中国童装品牌网",
        "link": "http://www.61kids.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.efu.com.cn",
        "title": "中国服装网",
        "desc": "中国服装网",
        "link": "http://www.efu.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.baobei360.com",
        "title": "中国婴童网",
        "desc": "中国婴童网",
        "link": "http://www.baobei360.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.texnet.com.cn",
        "title": "纺织网",
        "desc": "纺织网",
        "link": "http://www.texnet.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.qfc.cn",
        "title": "网上轻纺城",
        "desc": "网上轻纺城",
        "link": "https://www.qfc.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.shoes.hc360.com",
        "title": "慧聪鞋网",
        "desc": "慧聪鞋网",
        "link": "http://www.shoes.hc360.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.worldsocks.com",
        "title": "国际袜都",
        "desc": "国际袜都",
        "link": "http://www.worldsocks.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.nz86.com",
        "title": "中国女装网",
        "desc": "中国女装网",
        "link": "http://www.nz86.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.wtobag.com",
        "title": "全球箱包网",
        "desc": "全球箱包网",
        "link": "http://www.wtobag.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.tex365.com",
        "title": "365纺织网",
        "desc": "365纺织网",
        "link": "http://www.tex365.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.fzmy.roboo.com",
        "title": "中国服装贸易网",
        "desc": "中国服装贸易网",
        "link": "http://www.fzmy.roboo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.sjfzxm.com",
        "title": "世界服装鞋帽网",
        "desc": "世界服装鞋帽网",
        "link": "http://www.sjfzxm.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.showfu.com",
        "title": "中国服装服饰网",
        "desc": "中国服装服饰网",
        "link": "http://www.showfu.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.china-f.com",
        "title": "中国纺织服装网",
        "desc": "中国纺织服装网",
        "link": "http://www.china-f.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.fashion86.com.cn",
        "title": "服装服饰商贸网",
        "desc": "服装服饰商贸网",
        "link": "http://www.fashion86.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.fursmall.com.cn",
        "title": "中国皮草批发网",
        "desc": "中国皮草批发网",
        "link": "http://www.fursmall.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cnxz.cn",
        "title": "中国鞋网",
        "desc": "中国鞋网",
        "link": "http://www.cnxz.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.shoes.net.cn",
        "title": "环球鞋网",
        "desc": "环球鞋网",
        "link": "http://www.shoes.net.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.socksb2b.com",
        "title": "中国袜业网",
        "desc": "中国袜业网",
        "link": "http://www.socksb2b.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.81282.com",
        "title": "泳装商贸网",
        "desc": "泳装商贸网",
        "link": "http://www.81282.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.texindex.com",
        "title": "China Textile & Apparel Online",
        "desc": "China Textile & Apparel Online",
        "link": "http://www.texindex.com/"
      },
      {
        "icon": "https://logo.clearbit.com/binfen.biz",
        "title": "学做衣服论坛",
        "desc": "学做衣服论坛",
        "link": "http://binfen.biz/"
      },
      {
        "icon": "https://logo.clearbit.com/bbs.tianya.cn",
        "title": "服务纺织业天涯社区",
        "desc": "服务纺织业天涯社区",
        "link": "http://bbs.tianya.cn/list-447-1.shtml"
      },
      {
        "icon": "https://logo.clearbit.com/www.eeff.net",
        "title": "穿针引线论坛",
        "desc": "穿针引线论坛",
        "link": "https://www.eeff.net/forum.php"
      },
      {
        "icon": "https://logo.clearbit.com/www.fzzxbbs.com",
        "title": "飞针走秀论坛",
        "desc": "飞针走秀论坛",
        "link": "http://www.fzzxbbs.com/"
      },
      {
        "icon": "https://logo.clearbit.com/club.tnc.com.cn",
        "title": "全球纺坛",
        "desc": "全球纺坛",
        "link": "https://club.tnc.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.51haojob.com",
        "title": "服装人才网",
        "desc": "服装人才网",
        "link": "http://www.51haojob.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cfw.cn",
        "title": "服装人才网专业网站",
        "desc": "服装人才网专业网站",
        "link": "http://www.cfw.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.leatherhr.com",
        "title": "皮革人才网",
        "desc": "皮革人才网",
        "link": "http://www.leatherhr.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.xyrcw.cn",
        "title": "中国鞋业人才网",
        "desc": "中国鞋业人才网",
        "link": "http://www.xyrcw.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cfw.cn",
        "title": "中国服装人才网",
        "desc": "中国服装人才网",
        "link": "http://www.cfw.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.clothr.com",
        "title": "服装英才网",
        "desc": "服装英才网",
        "link": "http://www.clothr.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.efjob.cn",
        "title": "中国服装人才网",
        "desc": "中国服装人才网",
        "link": "http://www.efjob.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.efjob.cn",
        "title": "服装人才网招聘官网",
        "desc": "服装人才网招聘官网",
        "link": "http://www.efjob.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.intertextile-home.com.cn",
        "title": "上海家用纺织品及辅料展",
        "desc": "上海家用纺织品及辅料展",
        "link": "http://www.intertextile-home.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ckcf.cn",
        "title": "上海针棉织品交易会",
        "desc": "上海针棉织品交易会",
        "link": "http://www.ckcf.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.intertextile.com.cn",
        "title": "纺织面料及辅料(秋冬)博览会",
        "desc": "纺织面料及辅料(秋冬)博览会",
        "link": "http://www.intertextile.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chiconline.com.cn",
        "title": "中国国际服装服饰展",
        "desc": "中国国际服装服饰展",
        "link": "http://www.chiconline.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.taispo.com.tw",
        "title": "台北运动服饰/布料及配件展",
        "desc": "台北运动服饰/布料及配件展",
        "link": "https://www.taispo.com.tw/index.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.textileasia.com.pk",
        "title": "巴基斯坦亚洲纺织展",
        "desc": "巴基斯坦亚洲纺织展",
        "link": "http://www.textileasia.com.pk/"
      },
      {
        "icon": "https://logo.clearbit.com/clothingtextilesfair.com",
        "title": "巴基斯坦亚洲纺织服装展",
        "desc": "巴基斯坦亚洲纺织服装展",
        "link": "https://clothingtextilesfair.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.gftexpo.com",
        "title": "GFT(泰国)",
        "desc": "GFT(泰国)",
        "link": "https://www.gftexpo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.previewinseoul.com",
        "title": "韩国国际纺织展览会",
        "desc": "韩国国际纺织展览会",
        "link": "https://www.previewinseoul.com/fairDash.do"
      },
      {
        "icon": "https://logo.clearbit.com/japantex.jp",
        "title": "日本家用纺织品展",
        "desc": "日本家用纺织品展",
        "link": "http://japantex.jp/"
      },
      {
        "icon": "https://logo.clearbit.com/iplikfuari.com",
        "title": "土耳其纱线/无纺布展",
        "desc": "土耳其纱线/无纺布展",
        "link": "http://iplikfuari.com/"
      },
      {
        "icon": "https://logo.clearbit.com/cnrevteks.com",
        "title": "土耳其家纺展",
        "desc": "土耳其家纺展",
        "link": "http://cnrevteks.com/"
      },
      {
        "icon": "https://logo.clearbit.com/techtextil-india.in.messefrankfurt.com",
        "title": "印度产业用纺织品/非织造布展",
        "desc": "印度产业用纺织品/非织造布展",
        "link": "https://techtextil-india.in.messefrankfurt.com/mumbai/en.html"
      },
      {
        "icon": "https://logo.clearbit.com/mosshoes.com",
        "title": "莫斯科国际鞋展",
        "desc": "莫斯科国际鞋展",
        "link": "https://mosshoes.com/"
      },
      {
        "icon": "https://logo.clearbit.com/textilexpo.ru",
        "title": "俄联邦国际轻工纺织博览会",
        "desc": "俄联邦国际轻工纺织博览会",
        "link": "http://textilexpo.ru/"
      },
      {
        "icon": "https://logo.clearbit.com/hhexpo.ru",
        "title": "俄罗斯春季家庭用品博览会",
        "desc": "俄罗斯春季家庭用品博览会",
        "link": "http://hhexpo.ru/"
      },
      {
        "icon": "https://logo.clearbit.com/www.kyivfashion.kiev.ua",
        "title": "乌克兰服装面料及辅料展",
        "desc": "乌克兰服装面料及辅料展",
        "link": "https://www.kyivfashion.kiev.ua/"
      },
      {
        "icon": "https://logo.clearbit.com/exporivaschuh.it",
        "title": "意大利加达鞋展",
        "desc": "意大利加达鞋展",
        "link": "https://exporivaschuh.it/it"
      },
      {
        "icon": "https://logo.clearbit.com/www.milanounica.it",
        "title": "意大利面料展",
        "desc": "意大利面料展",
        "link": "https://www.milanounica.it/it"
      },
      {
        "icon": "https://logo.clearbit.com/www.readytoshow.it",
        "title": "米兰纺织服装采购",
        "desc": "米兰纺织服装采购",
        "link": "http://www.readytoshow.it/home/"
      },
      {
        "icon": "https://logo.clearbit.com/www.couromoda.com",
        "title": "圣保罗皮具箱包/服装展",
        "desc": "圣保罗皮具箱包/服装展",
        "link": "https://www.couromoda.com/noticias/"
      },
      {
        "icon": "https://logo.clearbit.com/gallery-shoes.com",
        "title": "GDS鞋展",
        "desc": "GDS鞋展",
        "link": "https://gallery-shoes.com/?lang=en"
      },
      {
        "icon": "https://logo.clearbit.com/www.moda-uk.co.uk",
        "title": "英国伯明翰服装展",
        "desc": "英国伯明翰服装展",
        "link": "https://www.moda-uk.co.uk/"
      },
      {
        "icon": "https://logo.clearbit.com/heimtextil.messefrankfurt.com",
        "title": "法兰克福家用纺织品展",
        "desc": "法兰克福家用纺织品展",
        "link": "https://heimtextil.messefrankfurt.com/frankfurt/en.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.asiaapparelexpo.com",
        "title": "德国柏林-亚洲服装及配饰展",
        "desc": "德国柏林-亚洲服装及配饰展",
        "link": "https://www.asiaapparelexpo.com/en-index.php"
      },
      {
        "icon": "https://logo.clearbit.com/www.munichfabricstart.com",
        "title": "慕尼黑国际面料展",
        "desc": "慕尼黑国际面料展",
        "link": "https://www.munichfabricstart.com/home.html"
      },
      {
        "icon": "https://logo.clearbit.com/igedo.com",
        "title": "杜塞尔多夫服装展",
        "desc": "杜塞尔多夫服装展",
        "link": "https://igedo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.reedalcantara.com.br",
        "title": "巴西纺织展",
        "desc": "巴西纺织展",
        "link": "https://www.reedalcantara.com.br/"
      },
      {
        "icon": "https://logo.clearbit.com/fimi.es",
        "title": "巴伦西亚童装展",
        "desc": "巴伦西亚童装展",
        "link": "https://fimi.es/es/"
      },
      {
        "icon": "https://logo.clearbit.com/www.wsashow.com",
        "title": "美国WSA鞋展",
        "desc": "美国WSA鞋展",
        "link": "http://www.wsashow.com/"
      },
      {
        "icon": "https://logo.clearbit.com/texworld-usa.us.messefrankfurt.com",
        "title": "美国纽约面料展",
        "desc": "美国纽约面料展",
        "link": "https://texworld-usa.us.messefrankfurt.com/new-york/en.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.ubmfashion.com",
        "title": "拉斯维加斯服装展",
        "desc": "拉斯维加斯服装展",
        "link": "https://www.ubmfashion.com/"
      }
    ]
  },
  {
    "title": "09-纺织行业",
    "items": [
      {
        "icon": "https://logo.clearbit.com/www.tex-asia.com",
        "title": "亚洲纺织联盟网",
        "desc": "亚洲纺织联盟网",
        "link": "http://www.tex-asia.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.fabricschina.com.cn",
        "title": "中国流行面料工程",
        "desc": "中国流行面料工程",
        "link": "http://www.fabricschina.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ctei.cn",
        "title": "中国纺织经济信息网",
        "desc": "中国纺织经济信息网",
        "link": "http://www.ctei.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.tteb.com",
        "title": "棉纺织信息网",
        "desc": "棉纺织信息网",
        "link": "https://www.tteb.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.webtex.cn",
        "title": "第一纺织网",
        "desc": "第一纺织网",
        "link": "http://www.webtex.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.china-cotton.org",
        "title": "中国棉花协会",
        "desc": "中国棉花协会",
        "link": "http://www.china-cotton.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cctti.com",
        "title": "中国棉纺织技术信息网",
        "desc": "中国棉纺织技术信息网",
        "link": "http://www.cctti.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ctic.org.cn",
        "title": "中国纺织信息中心",
        "desc": "中国纺织信息中心",
        "link": "http://www.ctic.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cottonchina.org",
        "title": "中国棉花信息网",
        "desc": "中国棉花信息网",
        "link": "http://www.cottonchina.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ccpittex.com",
        "title": "国际贸易促进委员会纺织分会",
        "desc": "国际贸易促进委员会纺织分会",
        "link": "http://www.ccpittex.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.fcl.org.cn",
        "title": "中国纺织工业联合会检测网",
        "desc": "中国纺织工业联合会检测网",
        "link": "http://www.fcl.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ccct.org.cn",
        "title": "中国纺织品进出口商会",
        "desc": "中国纺织品进出口商会",
        "link": "http://www.ccct.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.texleader.com.cn",
        "title": "纺织导报",
        "desc": "纺织导报",
        "link": "http://www.texleader.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.texleader.com.cn",
        "title": "纺织导报",
        "desc": "纺织导报",
        "link": "http://www.texleader.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ctes.com.cn",
        "title": "中国纺织工程学会",
        "desc": "中国纺织工程学会",
        "link": "http://www.ctes.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.thaitextile.org",
        "title": "泰国纺织协会",
        "desc": "泰国纺织协会",
        "link": "http://www.thaitextile.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.texi.org",
        "title": "英国纺织协会",
        "desc": "英国纺织协会",
        "link": "http://www.texi.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.itmf.org",
        "title": "瑞典纺织协会",
        "desc": "瑞典纺织协会",
        "link": "http://www.itmf.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.lpia.lt",
        "title": "立陶宛服装纺织工业协会",
        "desc": "立陶宛服装纺织工业协会",
        "link": "http://www.lpia.lt/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ttmn.com",
        "title": "中国纺机网",
        "desc": "中国纺机网",
        "link": "http://www.ttmn.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cttu.org",
        "title": "中国纺织行业网",
        "desc": "中国纺织行业网",
        "link": "http://www.cttu.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ucmtf.com",
        "title": "法国纺织机械协会",
        "desc": "法国纺织机械协会",
        "link": "http://www.ucmtf.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.wool.com",
        "title": "苏格兰纺织网",
        "desc": "苏格兰纺织网",
        "link": "http://www.wool.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ywfz.org",
        "title": "中国医疗纺织联盟",
        "desc": "中国医疗纺织联盟",
        "link": "http://www.ywfz.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ccpittex.com",
        "title": "纺织促贸会",
        "desc": "纺织促贸会",
        "link": "http://www.ccpittex.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.textile.hc360.com",
        "title": "慧聪网纺织",
        "desc": "慧聪网纺织",
        "link": "http://www.textile.hc360.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ctn1986.com",
        "title": "中国纺织报",
        "desc": "中国纺织报",
        "link": "http://www.ctn1986.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.acimit.it",
        "title": "意大利纺织机械协会",
        "desc": "意大利纺织机械协会",
        "link": "http://www.acimit.it/index.htm"
      },
      {
        "icon": "https://logo.clearbit.com/www.craftyarncouncil.com",
        "title": "美国编织纱线协会",
        "desc": "美国编织纱线协会",
        "link": "http://www.craftyarncouncil.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.carpet-rug.com",
        "title": "美国毛毯协会",
        "desc": "美国毛毯协会",
        "link": "http://www.carpet-rug.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cottonusa.org",
        "title": "美国棉花协会",
        "desc": "美国棉花协会",
        "link": "http://www.cottonusa.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ccf.com.cn",
        "title": "化纤信息网",
        "desc": "化纤信息网",
        "link": "http://www.ccf.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.emergingtextiles.com",
        "title": "美国纺织新闻网",
        "desc": "美国纺织新闻网",
        "link": "http://www.emergingtextiles.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.hometexnet.com",
        "title": "中国家纺网",
        "desc": "中国家纺网",
        "link": "http://www.hometexnet.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ccct.org.cn",
        "title": "中国纺织进出口商会",
        "desc": "中国纺织进出口商会",
        "link": "http://www.ccct.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ctma.net",
        "title": "中国纺织机械器材工业协会",
        "desc": "中国纺织机械器材工业协会",
        "link": "http://www.ctma.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cncotton.com",
        "title": "中国棉花网",
        "desc": "中国棉花网",
        "link": "http://www.cncotton.com/"
      },
      {
        "icon": "https://logo.clearbit.com/info.texnet.com.cn",
        "title": "纺织资讯",
        "desc": "纺织资讯",
        "link": "http://info.texnet.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.wool.com",
        "title": "澳大利亚羊毛网",
        "desc": "澳大利亚羊毛网",
        "link": "http://www.wool.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ifj.com",
        "title": "国际纤维报",
        "desc": "国际纤维报",
        "link": "http://www.ifj.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.tteb.com",
        "title": "棉纺织信息网",
        "desc": "棉纺织信息网",
        "link": "https://www.tteb.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.scsilk.com",
        "title": "四川丝绸网",
        "desc": "四川丝绸网",
        "link": "http://www.scsilk.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cfd.com.cn",
        "title": "中国羽绒信息网",
        "desc": "中国羽绒信息网",
        "link": "http://www.cfd.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.esilk.net",
        "title": "中国茧丝绸交易市场",
        "desc": "中国茧丝绸交易市场",
        "link": "http://www.esilk.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.silkcapital.com",
        "title": "中国绸都网",
        "desc": "中国绸都网",
        "link": "http://www.silkcapital.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.fibreadd.com",
        "title": "中国纺织助剂网",
        "desc": "中国纺织助剂网",
        "link": "http://www.fibreadd.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.hometex114.com",
        "title": "中华家纺网",
        "desc": "中华家纺网",
        "link": "http://www.hometex114.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.tteb.com",
        "title": "中国棉纺织信息网",
        "desc": "中国棉纺织信息网",
        "link": "http://www.tteb.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ttmn.com",
        "title": "中国纺机网",
        "desc": "中国纺机网",
        "link": "http://www.ttmn.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.tnc.com.cn",
        "title": "全球纺织网",
        "desc": "全球纺织网",
        "link": "http://www.tnc.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.texnet.com.cn",
        "title": "中国纺织网",
        "desc": "中国纺织网",
        "link": "http://www.texnet.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cttm.net",
        "title": "中国纺织机械网",
        "desc": "中国纺织机械网",
        "link": "http://www.cttm.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.sinotex.net",
        "title": "锦桥纺织网",
        "desc": "锦桥纺织网",
        "link": "http://www.sinotex.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.eck.com.cn",
        "title": "中国针织网",
        "desc": "中国针织网",
        "link": "http://www.eck.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.texindex.com.cn",
        "title": "中华纺织网",
        "desc": "中华纺织网",
        "link": "http://www.texindex.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ttfj.com",
        "title": "纺机商城",
        "desc": "纺机商城",
        "link": "http://www.ttfj.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cntma.com",
        "title": "中华纺机网",
        "desc": "中华纺机网",
        "link": "http://www.cntma.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.textile.hc360.com",
        "title": "慧聪纺织频道",
        "desc": "慧聪纺织频道",
        "link": "http://www.textile.hc360.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ccf.com.cn",
        "title": "中国化纤信息网",
        "desc": "中国化纤信息网",
        "link": "http://www.ccf.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.hometexnet.com",
        "title": "家纺网",
        "desc": "家纺网",
        "link": "http://www.hometexnet.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.socotton.com",
        "title": "中国棉花交易网",
        "desc": "中国棉花交易网",
        "link": "http://www.socotton.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.yrzx.net",
        "title": "中华印染网",
        "desc": "中华印染网",
        "link": "http://www.yrzx.net/"
      },
      {
        "icon": "https://logo.clearbit.com/search.texnet.com.cn",
        "title": "纺织搜索",
        "desc": "纺织搜索",
        "link": "http://search.texnet.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.fibreinfo.com",
        "title": "中国丙纶网",
        "desc": "中国丙纶网",
        "link": "http://www.fibreinfo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.fzfzjx.com",
        "title": "纺织服装机械网",
        "desc": "纺织服装机械网",
        "link": "http://www.fzfzjx.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ctmec.cn",
        "title": "中纺商城",
        "desc": "中纺商城",
        "link": "http://www.ctmec.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.sinotex.cn",
        "title": "锦桥纺织网",
        "desc": "锦桥纺织网",
        "link": "https://www.sinotex.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.sewworld.com",
        "title": "中国缝制设备网",
        "desc": "中国缝制设备网",
        "link": "http://www.sewworld.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ttmn.com",
        "title": "中国纺机网",
        "desc": "中国纺机网",
        "link": "http://www.ttmn.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.qfc.cn",
        "title": "网上轻纺网",
        "desc": "网上轻纺网",
        "link": "http://www.qfc.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.qfc.cn",
        "title": "网上轻纺城",
        "desc": "网上轻纺城",
        "link": "https://www.qfc.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/dyeschem.dazpin.com",
        "title": "染化交易市场",
        "desc": "染化交易市场",
        "link": "https://dyeschem.dazpin.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.esilk.net",
        "title": "茧丝绸交易市场",
        "desc": "茧丝绸交易市场",
        "link": "http://www.esilk.net/web/Default.aspx"
      },
      {
        "icon": "https://logo.clearbit.com/www.straitex.com",
        "title": "海峡纺织网",
        "desc": "海峡纺织网",
        "link": "http://www.straitex.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.tex86.cn",
        "title": "纺织交易网",
        "desc": "纺织交易网",
        "link": "http://www.tex86.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.tex.org.cn",
        "title": "中国纺织品网",
        "desc": "中国纺织品网",
        "link": "http://www.tex.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.textileweb.com",
        "title": "textile web",
        "desc": "textile web",
        "link": "http://www.textileweb.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.texoffer.com",
        "title": "Texoffer",
        "desc": "Texoffer",
        "link": "http://www.texoffer.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.yarnsandfibers.com",
        "title": "textile B2B",
        "desc": "textile B2B",
        "link": "http://www.yarnsandfibers.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.leatherhr.com",
        "title": "皮革人才网",
        "desc": "皮革人才网",
        "link": "http://www.leatherhr.com/"
      },
      {
        "icon": "https://logo.clearbit.com/weave.job1001.com",
        "title": "一览纺织英才网",
        "desc": "一览纺织英才网",
        "link": "http://weave.job1001.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.51haojob.com",
        "title": "服装人才网",
        "desc": "服装人才网",
        "link": "http://www.51haojob.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.texrc.net",
        "title": "纺织人才网",
        "desc": "纺织人才网",
        "link": "http://www.texrc.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cntexjob.com",
        "title": "中国纺织招牌网",
        "desc": "中国纺织招牌网",
        "link": "http://www.cntexjob.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.texhr.cn",
        "title": "中国纺织人才网",
        "desc": "中国纺织人才网",
        "link": "http://www.texhr.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.intertextile-home.com.cn",
        "title": "上海家用纺织品及辅料展",
        "desc": "上海家用纺织品及辅料展",
        "link": "http://www.intertextile-home.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ckcf.cn",
        "title": "上海针棉织品交易会",
        "desc": "上海针棉织品交易会",
        "link": "http://www.ckcf.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.intertextile.com.cn",
        "title": "纺织面料及辅料(秋冬)博览会",
        "desc": "纺织面料及辅料(秋冬)博览会",
        "link": "http://www.intertextile.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.textileasia.com.pk",
        "title": "巴基斯坦亚洲纺织展",
        "desc": "巴基斯坦亚洲纺织展",
        "link": "http://www.textileasia.com.pk/"
      },
      {
        "icon": "https://logo.clearbit.com/clothingtextilesfair.com",
        "title": "巴基斯坦亚洲纺织服装展",
        "desc": "巴基斯坦亚洲纺织服装展",
        "link": "https://clothingtextilesfair.com/"
      },
      {
        "icon": "https://logo.clearbit.com/iplikfuari.com",
        "title": "土耳其纱线/无纺布展",
        "desc": "土耳其纱线/无纺布展",
        "link": "http://iplikfuari.com/"
      },
      {
        "icon": "https://logo.clearbit.com/cnrevteks.com",
        "title": "土耳其家纺展",
        "desc": "土耳其家纺展",
        "link": "http://cnrevteks.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.previewinseoul.com",
        "title": "韩国国际纺织展览会",
        "desc": "韩国国际纺织展览会",
        "link": "https://www.previewinseoul.com/fairDash.do"
      },
      {
        "icon": "https://logo.clearbit.com/japantex.jp",
        "title": "日本家用纺织品展",
        "desc": "日本家用纺织品展",
        "link": "http://japantex.jp/"
      },
      {
        "icon": "https://logo.clearbit.com/www.kyivfashion.kiev.ua",
        "title": "乌克兰服装面料及辅料展",
        "desc": "乌克兰服装面料及辅料展",
        "link": "https://www.kyivfashion.kiev.ua/"
      },
      {
        "icon": "https://logo.clearbit.com/textilexpo.ru",
        "title": "俄联邦国际轻工纺织博览会",
        "desc": "俄联邦国际轻工纺织博览会",
        "link": "http://textilexpo.ru/"
      },
      {
        "icon": "https://logo.clearbit.com/techtextil-india.in.messefrankfurt.com",
        "title": "印度产业用纺织品/非织造布展",
        "desc": "印度产业用纺织品/非织造布展",
        "link": "https://techtextil-india.in.messefrankfurt.com/mumbai/en.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.milanounica.it",
        "title": "意大利面料展",
        "desc": "意大利面料展",
        "link": "https://www.milanounica.it/it"
      },
      {
        "icon": "https://logo.clearbit.com/heimtextil.messefrankfurt.com",
        "title": "法兰克福家用纺织品展",
        "desc": "法兰克福家用纺织品展",
        "link": "https://heimtextil.messefrankfurt.com/frankfurt/en.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.reedalcantara.com.br",
        "title": "巴西纺织展",
        "desc": "巴西纺织展",
        "link": "https://www.reedalcantara.com.br/"
      },
      {
        "icon": "https://logo.clearbit.com/www.munichfabricstart.com",
        "title": "慕尼黑国际面料展",
        "desc": "慕尼黑国际面料展",
        "link": "https://www.munichfabricstart.com/home.html"
      },
      {
        "icon": "https://logo.clearbit.com/texworld-usa.us.messefrankfurt.com",
        "title": "美国纽约面料展",
        "desc": "美国纽约面料展",
        "link": "https://texworld-usa.us.messefrankfurt.com/new-york/en.html"
      }
    ]
  },
  {
    "title": "10-办公行业",
    "items": [
      {
        "icon": "https://logo.clearbit.com/www.csa.org.cn",
        "title": "中国文教体育用品协会",
        "desc": "中国文教体育用品协会",
        "link": "http://www.csa.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chyxx.com",
        "title": "中国产业信息-办公文教",
        "desc": "中国产业信息-办公文教",
        "link": "http://www.chyxx.com/industry/wenjiao/"
      },
      {
        "icon": "https://logo.clearbit.com/www.hc1688.cn",
        "title": "中国办公耗材网",
        "desc": "中国办公耗材网",
        "link": "http://www.hc1688.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/office.pconline.com.cn",
        "title": "太平洋网办公设备",
        "desc": "太平洋网办公设备",
        "link": "http://office.pconline.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ceiea.com",
        "title": "中国教育装备网",
        "desc": "中国教育装备网",
        "link": "http://www.ceiea.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinawenti.com",
        "title": "中国文体用品网",
        "desc": "中国文体用品网",
        "link": "http://www.chinawenti.com/"
      },
      {
        "icon": "https://logo.clearbit.com/haocai.it168.com",
        "title": "IT168办公耗材",
        "desc": "IT168办公耗材",
        "link": "http://haocai.it168.com/"
      },
      {
        "icon": "https://logo.clearbit.com/oa.yesky.com",
        "title": "天极网办公外设",
        "desc": "天极网办公外设",
        "link": "http://oa.yesky.com/"
      },
      {
        "icon": "https://logo.clearbit.com/info.it.hc360.com",
        "title": "慧聪网耗材专栏",
        "desc": "慧聪网耗材专栏",
        "link": "http://info.it.hc360.com/list/zt_haoc.shtml"
      },
      {
        "icon": "https://logo.clearbit.com/www.ccoea.org.cn",
        "title": "中国文化办公设备制造行业",
        "desc": "中国文化办公设备制造行业",
        "link": "http://www.ccoea.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinasigns.cn",
        "title": "中国标识网",
        "desc": "中国标识网",
        "link": "http://www.chinasigns.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/oa.zol.com.cn",
        "title": "中关村办公打印",
        "desc": "中关村办公打印",
        "link": "http://oa.zol.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.pm168.net",
        "title": "华人喷码网",
        "desc": "华人喷码网",
        "link": "http://www.pm168.net/"
      },
      {
        "icon": "https://logo.clearbit.com/wjbg.globalbuy.cc",
        "title": "全球采购网-文教办公网",
        "desc": "全球采购网-文教办公网",
        "link": "http://wjbg.globalbuy.cc/"
      },
      {
        "icon": "https://logo.clearbit.com/www.21wenju.com",
        "title": "世纪文具网",
        "desc": "世纪文具网",
        "link": "http://www.21wenju.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cnjiaoju.com",
        "title": "中华教具网",
        "desc": "中华教具网",
        "link": "https://www.cnjiaoju.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.31wenju.com",
        "title": "文具网",
        "desc": "文具网",
        "link": "http://www.31wenju.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.31paper.com",
        "title": "纸业网",
        "desc": "纸业网",
        "link": "http://www.31paper.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.safes.org.cn",
        "title": "保险箱行业网",
        "desc": "保险箱行业网",
        "link": "http://www.safes.org.cn/safe/"
      },
      {
        "icon": "https://logo.clearbit.com/www.epenma.com",
        "title": "中国喷码机网",
        "desc": "中国喷码机网",
        "link": "http://www.epenma.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.pm114.com",
        "title": "中国喷码标识网",
        "desc": "中国喷码标识网",
        "link": "http://www.pm114.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.haocaicn.com",
        "title": "打印耗材网",
        "desc": "打印耗材网",
        "link": "http://www.haocaicn.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.wenjucn.com",
        "title": "文具产业网",
        "desc": "文具产业网",
        "link": "http://www.wenjucn.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.bgzj.net",
        "title": "办公之家网",
        "desc": "办公之家网",
        "link": "http://www.bgzj.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.wjyh.com",
        "title": "文具1号",
        "desc": "文具1号",
        "link": "https://www.wjyh.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.wjhyw.cn",
        "title": "中国文具行业网",
        "desc": "中国文具行业网",
        "link": "http://www.wjhyw.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.wenju.biz",
        "title": "中国文具网",
        "desc": "中国文具网",
        "link": "http://www.wenju.biz/"
      },
      {
        "icon": "https://logo.clearbit.com/bangong.huangye88.com",
        "title": "88办公网",
        "desc": "88办公网",
        "link": "http://bangong.huangye88.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.iowoo.com",
        "title": "中国文化用品网",
        "desc": "中国文化用品网",
        "link": "http://www.iowoo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.oachn.net",
        "title": "打印机维修论坛",
        "desc": "打印机维修论坛",
        "link": "http://www.oachn.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.oahelp.net",
        "title": "普广打印机论坛",
        "desc": "普广打印机论坛",
        "link": "http://www.oahelp.net/"
      },
      {
        "icon": "https://logo.clearbit.com/bbs.zol.com.cn",
        "title": "办公软件论坛",
        "desc": "办公软件论坛",
        "link": "http://bbs.zol.com.cn/softbbs/s932.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.rechinaexpo.com",
        "title": "亚洲打印耗材展",
        "desc": "亚洲打印耗材展",
        "link": "http://www.rechinaexpo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.isot.jp",
        "title": "日本东京文具展",
        "desc": "日本东京文具展",
        "link": "https://www.isot.jp/ja-jp.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.ssofair.com",
        "title": "中国义乌文化产品交易会",
        "desc": "中国义乌文化产品交易会",
        "link": "http://www.ssofair.com/"
      },
      {
        "icon": "https://logo.clearbit.com/paperworld-middle-east.ae.messefrankfurt.com",
        "title": "迪拜办公文具展",
        "desc": "迪拜办公文具展",
        "link": "https://paperworld-middle-east.ae.messefrankfurt.com/dubai/en.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.bibf.net",
        "title": "北京国际图书博览会",
        "desc": "北京国际图书博览会",
        "link": "http://www.bibf.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.taispo.com.tw",
        "title": "台北体育用品展",
        "desc": "台北体育用品展",
        "link": "https://www.taispo.com.tw/"
      },
      {
        "icon": "https://logo.clearbit.com/adbookfair.com",
        "title": "阿布扎比图书展",
        "desc": "阿布扎比图书展",
        "link": "https://adbookfair.com/en/default.aspx"
      },
      {
        "icon": "https://logo.clearbit.com/www.paperarabia.com",
        "title": "阿拉伯迪拜纸业展",
        "desc": "阿拉伯迪拜纸业展",
        "link": "https://www.paperarabia.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.sports-show.ru",
        "title": "莫斯科体育用品展",
        "desc": "莫斯科体育用品展",
        "link": "http://www.sports-show.ru/"
      },
      {
        "icon": "https://logo.clearbit.com/www.bookfair.bolognafiere.it",
        "title": "博洛尼亚少儿图书展",
        "desc": "博洛尼亚少儿图书展",
        "link": "http://www.bookfair.bolognafiere.it/home/878.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.londonbookfair.co.uk",
        "title": "英国伦敦书展",
        "desc": "英国伦敦书展",
        "link": "https://www.londonbookfair.co.uk/"
      },
      {
        "icon": "https://logo.clearbit.com/www.buchmesse.de",
        "title": "法兰克福图书展",
        "desc": "法兰克福图书展",
        "link": "https://www.buchmesse.de/en"
      },
      {
        "icon": "https://logo.clearbit.com/www.spogagafa.com",
        "title": "德国体育用品/露营设备/园林生活展",
        "desc": "德国体育用品/露营设备/园林生活展",
        "link": "https://www.spogagafa.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.outdoor-friedrichshafen.com",
        "title": "德国菲德里斯哈芬户外休闲展",
        "desc": "德国菲德里斯哈芬户外休闲展",
        "link": "http://www.outdoor-friedrichshafen.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ispo.com",
        "title": "慕尼黑体育用品展ISPO",
        "desc": "慕尼黑体育用品展ISPO",
        "link": "https://www.ispo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.nationalstationeryshow.com",
        "title": "纽约全美文具博览会",
        "desc": "纽约全美文具博览会",
        "link": "https://www.nationalstationeryshow.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.bookexpoamerica.com",
        "title": "美国书展",
        "desc": "美国书展",
        "link": "https://www.bookexpoamerica.com/"
      }
    ]
  },
  {
    "title": "11-饰品行业",
    "items": [
      {
        "icon": "https://logo.clearbit.com/www.cccfna.org.cn",
        "title": "中国食品土畜进出口商会",
        "desc": "中国食品土畜进出口商会",
        "link": "http://www.cccfna.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinabeverage.org",
        "title": "中国饮料工业协会",
        "desc": "中国饮料工业协会",
        "link": "http://www.chinabeverage.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cnfoodnews.com",
        "title": "中国食事传媒",
        "desc": "中国食事传媒",
        "link": "http://www.cnfoodnews.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ofrcc.com",
        "title": "南京环球有机食品研究咨询中心",
        "desc": "南京环球有机食品研究咨询中心",
        "link": "http://www.ofrcc.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.greenfood.org.cn",
        "title": "中国绿色食品网",
        "desc": "中国绿色食品网",
        "link": "http://www.greenfood.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cnfood.cn",
        "title": "中国食品报网",
        "desc": "中国食品报网",
        "link": "http://www.cnfood.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/cfaa.cn",
        "title": "中国食品添加剂和配料资讯网",
        "desc": "中国食品添加剂和配料资讯网",
        "link": "http://cfaa.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.lookvin.com",
        "title": "乐酒客",
        "desc": "乐酒客",
        "link": "http://www.lookvin.com/"
      },
      {
        "icon": "https://logo.clearbit.com/cnfdn.com",
        "title": "中国食品监督网",
        "desc": "中国食品监督网",
        "link": "http://cnfdn.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.foodmate.net",
        "title": "食品伙伴网",
        "desc": "食品伙伴网",
        "link": "http://www.foodmate.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.vegnet.com.cn",
        "title": "蔬菜网",
        "desc": "蔬菜网",
        "link": "http://www.vegnet.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.puercn.com",
        "title": "普洱茶网",
        "desc": "普洱茶网",
        "link": "http://www.puercn.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.zhujiage.com.cn",
        "title": "猪价格网",
        "desc": "猪价格网",
        "link": "http://www.zhujiage.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/culture.importfood.net",
        "title": "世界美食文化",
        "desc": "世界美食文化",
        "link": "http://culture.importfood.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cofeed.com",
        "title": "天下粮仓",
        "desc": "天下粮仓",
        "link": "http://www.cofeed.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinafood365.com",
        "title": "中国食品网",
        "desc": "中国食品网",
        "link": "http://www.chinafood365.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.wines-info.com",
        "title": "中国葡萄酒资讯网",
        "desc": "中国葡萄酒资讯网",
        "link": "http://www.wines-info.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.winechina.com",
        "title": "中国葡萄酒信息网",
        "desc": "中国葡萄酒信息网",
        "link": "http://www.winechina.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.tjkx.com",
        "title": "糖酒快讯",
        "desc": "糖酒快讯",
        "link": "http://www.tjkx.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.dashipin.com",
        "title": "大食品网",
        "desc": "大食品网",
        "link": "http://www.dashipin.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.6eat.com",
        "title": "中国吃网",
        "desc": "中国吃网",
        "link": "http://www.6eat.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.tangjiu.com",
        "title": "中国糖酒网",
        "desc": "中国糖酒网",
        "link": "http://www.tangjiu.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.foodmate.net",
        "title": "食品伙伴网",
        "desc": "食品伙伴网",
        "link": "http://www.foodmate.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jiunews.com",
        "title": "酒业新闻网",
        "desc": "酒业新闻网",
        "link": "http://www.jiunews.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jiu.cn",
        "title": "中华酒网",
        "desc": "中华酒网",
        "link": "http://www.jiu.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/wenku.foodmate.net",
        "title": "食品文库",
        "desc": "食品文库",
        "link": "http://wenku.foodmate.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ynsugar.com",
        "title": "云南糖网",
        "desc": "云南糖网",
        "link": "http://www.ynsugar.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.food.hc360.com",
        "title": "慧聪食品工业",
        "desc": "慧聪食品工业",
        "link": "http://www.food.hc360.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.tienwine.com",
        "title": "红酒代理",
        "desc": "红酒代理",
        "link": "http://www.tienwine.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.zgtjh.com",
        "title": "中国糖酒会",
        "desc": "中国糖酒会",
        "link": "http://www.zgtjh.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.t0001.com",
        "title": "第一茶叶网",
        "desc": "第一茶叶网",
        "link": "http://www.t0001.com/"
      },
      {
        "icon": "https://logo.clearbit.com/sp588.cc",
        "title": "世界食品网",
        "desc": "世界食品网",
        "link": "http://sp588.cc/"
      },
      {
        "icon": "https://logo.clearbit.com/www.teanet.com.cn",
        "title": "中茶网",
        "desc": "中茶网",
        "link": "http://www.teanet.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinagrain.cn",
        "title": "中国粮油信息网",
        "desc": "中国粮油信息网",
        "link": "http://www.chinagrain.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.puerlife.com",
        "title": "云南普洱茶",
        "desc": "云南普洱茶",
        "link": "http://www.puerlife.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.oilcn.com",
        "title": "中国食用油信息网",
        "desc": "中国食用油信息网",
        "link": "http://www.oilcn.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinacondiment.com",
        "title": "中国调味品网",
        "desc": "中国调味品网",
        "link": "http://www.chinacondiment.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.xfrb.com.cn",
        "title": "消费日报网",
        "desc": "消费日报网",
        "link": "http://www.xfrb.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.sea-ex.com",
        "title": "sea-ex",
        "desc": "sea-ex",
        "link": "http://www.sea-ex.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.foods1.com",
        "title": "第一食品网",
        "desc": "第一食品网",
        "link": "http://www.foods1.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.21food.cn",
        "title": "中国食品商务网",
        "desc": "中国食品商务网",
        "link": "http://www.21food.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.spjxcn.com",
        "title": "食品机械行业网",
        "desc": "食品机械行业网",
        "link": "http://www.spjxcn.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.21food.com",
        "title": "21 Food Online",
        "desc": "21 Food Online",
        "link": "https://www.21food.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.tech-food.com",
        "title": "中国食品科技网",
        "desc": "中国食品科技网",
        "link": "http://www.tech-food.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.foodjx.com",
        "title": "食品机械网",
        "desc": "食品机械网",
        "link": "http://www.foodjx.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.spzs.com",
        "title": "食品招商网",
        "desc": "食品招商网",
        "link": "http://www.spzs.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.31food.com",
        "title": "食品生意网",
        "desc": "食品生意网",
        "link": "http://www.31food.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cnfood.net",
        "title": "中国食品行业网",
        "desc": "中国食品行业网",
        "link": "http://www.cnfood.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.sjgle.com",
        "title": "食品加工在线",
        "desc": "食品加工在线",
        "link": "https://www.sjgle.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.foode.com.cn",
        "title": "中国食品设备网",
        "desc": "中国食品设备网",
        "link": "http://www.foode.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.spsb114.com",
        "title": "食品设备网",
        "desc": "食品设备网",
        "link": "http://www.spsb114.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ifooday.cn",
        "title": "环球食品商业网",
        "desc": "环球食品商业网",
        "link": "http://www.ifooday.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.31tjj.com",
        "title": "食品添加剂网",
        "desc": "食品添加剂网",
        "link": "http://www.31tjj.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ylw168.com",
        "title": "饮料招商网",
        "desc": "饮料招商网",
        "link": "http://www.ylw168.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.tjkx.com",
        "title": "糖酒快讯",
        "desc": "糖酒快讯",
        "link": "http://www.tjkx.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.foodqs.cn",
        "title": "中国食品产业网",
        "desc": "中国食品产业网",
        "link": "http://www.foodqs.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.bjspw.com",
        "title": "21保健品网",
        "desc": "21保健品网",
        "link": "http://www.bjspw.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.importfood.net",
        "title": "进口食品网",
        "desc": "进口食品网",
        "link": "http://www.importfood.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.bensino.com",
        "title": "伴夏茶网",
        "desc": "伴夏茶网",
        "link": "http://www.bensino.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.t988.com",
        "title": "糖酒巴巴",
        "desc": "糖酒巴巴",
        "link": "http://www.t988.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.emushroom.net",
        "title": "易菇网",
        "desc": "易菇网",
        "link": "http://www.emushroom.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.foodmarketexchange.com",
        "title": "foodmarket",
        "desc": "foodmarket",
        "link": "http://www.foodmarketexchange.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.foodonline.com",
        "title": "food online",
        "desc": "food online",
        "link": "http://www.foodonline.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.agrotrade.net",
        "title": "agrotrade",
        "desc": "agrotrade",
        "link": "http://www.agrotrade.net/"
      },
      {
        "icon": "https://logo.clearbit.com/bbs.foodmate.net",
        "title": "食品论坛",
        "desc": "食品论坛",
        "link": "http://bbs.foodmate.net/"
      },
      {
        "icon": "https://logo.clearbit.com/bbs.tech-food.com",
        "title": "中国食品论坛",
        "desc": "中国食品论坛",
        "link": "http://bbs.tech-food.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.foodbbs.com.cn",
        "title": "民以食为天",
        "desc": "民以食为天",
        "link": "http://www.foodbbs.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/job.foodmate.net",
        "title": "中国食品人才网",
        "desc": "中国食品人才网",
        "link": "http://job.foodmate.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.foodhr.cn",
        "title": "食品人才招聘网",
        "desc": "食品人才招聘网",
        "link": "http://www.foodhr.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.asiafruitlogistica.com",
        "title": "亚洲香港国际果蔬展",
        "desc": "亚洲香港国际果蔬展",
        "link": "https://www.asiafruitlogistica.com/"
      },
      {
        "icon": "https://logo.clearbit.com/event.hktdc.com",
        "title": "香港国际美酒展",
        "desc": "香港国际美酒展",
        "link": "https://event.hktdc.com/fair/hkwinefair-en/HKTDC-Hong-Kong-International-Wine-and-Spirits-Fair/"
      },
      {
        "icon": "https://logo.clearbit.com/www.yummex-me.com",
        "title": "迪拜甜食及休闲食品展",
        "desc": "迪拜甜食及休闲食品展",
        "link": "https://www.yummex-me.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.gulfood.com",
        "title": "迪拜海湾食品及食品机械展",
        "desc": "迪拜海湾食品及食品机械展",
        "link": "https://www.gulfood.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.seafexme.com",
        "title": "迪拜冷冻海鲜食品展",
        "desc": "迪拜冷冻海鲜食品展",
        "link": "https://www.seafexme.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.sialme.com",
        "title": "中东国际食品展",
        "desc": "中东国际食品展",
        "link": "https://www.sialme.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.sialme.com",
        "title": "中东食品饮料展",
        "desc": "中东食品饮料展",
        "link": "https://www.sialme.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.foodtecindia.com",
        "title": "孟买食品加工与包装技术展",
        "desc": "孟买食品加工与包装技术展",
        "link": "http://www.foodtecindia.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ifiajapan.com",
        "title": "东京健康食品展",
        "desc": "东京健康食品展",
        "link": "https://www.ifiajapan.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.foomajapan.jp",
        "title": "东京食品工业展",
        "desc": "东京食品工业展",
        "link": "http://www.foomajapan.jp/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jma.or.jp",
        "title": "日本东京食品及饮料展",
        "desc": "日本东京食品及饮料展",
        "link": "https://www.jma.or.jp/foodex/"
      },
      {
        "icon": "https://logo.clearbit.com/www.seoulfoodnhotel.co.kr",
        "title": "首尔食品酒店展",
        "desc": "首尔食品酒店展",
        "link": "http://www.seoulfoodnhotel.co.kr/"
      },
      {
        "icon": "https://logo.clearbit.com/sialinterfood.com",
        "title": "印尼食品展",
        "desc": "印尼食品展",
        "link": "http://sialinterfood.com/"
      },
      {
        "icon": "https://logo.clearbit.com/sialinterfood.com",
        "title": "印尼食品配料展",
        "desc": "印尼食品配料展",
        "link": "http://sialinterfood.com/"
      },
      {
        "icon": "https://logo.clearbit.com/thaifex-anuga.com",
        "title": "泰国曼谷亚洲世界食品展",
        "desc": "泰国曼谷亚洲世界食品展",
        "link": "https://thaifex-anuga.com/en/"
      },
      {
        "icon": "https://logo.clearbit.com/thaifex-anuga.com",
        "title": "泰国食品展",
        "desc": "泰国食品展",
        "link": "https://thaifex-anuga.com/en/"
      },
      {
        "icon": "https://logo.clearbit.com/www.world-food.ru",
        "title": "莫斯科国际食品展",
        "desc": "莫斯科国际食品展",
        "link": "https://www.world-food.ru/Home"
      },
      {
        "icon": "https://logo.clearbit.com/www.agroprodmash-expo.ru",
        "title": "莫斯科食品加工/包装机械展",
        "desc": "莫斯科食品加工/包装机械展",
        "link": "http://www.agroprodmash-expo.ru/"
      },
      {
        "icon": "https://logo.clearbit.com/www.prod-expo.ru",
        "title": "莫斯科食品及饮料展",
        "desc": "莫斯科食品及饮料展",
        "link": "http://www.prod-expo.ru/"
      },
      {
        "icon": "https://logo.clearbit.com/www.worldfood.kz",
        "title": "哈萨克斯坦食品展",
        "desc": "哈萨克斯坦食品展",
        "link": "https://www.worldfood.kz/ru/"
      },
      {
        "icon": "https://logo.clearbit.com/www.worldfood.com.ua",
        "title": "乌克兰食品博览会",
        "desc": "乌克兰食品博览会",
        "link": "http://www.worldfood.com.ua/"
      },
      {
        "icon": "https://logo.clearbit.com/www.foodtaipei.com.tw",
        "title": "台北食品展",
        "desc": "台北食品展",
        "link": "https://www.foodtaipei.com.tw/"
      },
      {
        "icon": "https://logo.clearbit.com/www.foodkh.com.tw",
        "title": "台湾高雄食品展",
        "desc": "台湾高雄食品展",
        "link": "https://www.foodkh.com.tw/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ife.co.uk",
        "title": "伦敦食品饮料及添加剂展",
        "desc": "伦敦食品饮料及添加剂展",
        "link": "https://www.ife.co.uk/"
      },
      {
        "icon": "https://logo.clearbit.com/www.londonwinefair.com",
        "title": "英国伦敦国际酒类展",
        "desc": "英国伦敦国际酒类展",
        "link": "https://www.londonwinefair.com/"
      },
      {
        "icon": "https://logo.clearbit.com/alimentaria.com",
        "title": "西班牙食品及饮料展",
        "desc": "西班牙食品及饮料展",
        "link": "https://alimentaria.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.drinktec.com",
        "title": "慕尼黑饮料及液体食物技术展",
        "desc": "慕尼黑饮料及液体食物技术展",
        "link": "https://www.drinktec.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.prosweets.de",
        "title": "科隆糖果原料和机械展",
        "desc": "科隆糖果原料和机械展",
        "link": "https://www.prosweets.de/"
      },
      {
        "icon": "https://logo.clearbit.com/www.figlobal.com",
        "title": "欧洲食品配料展",
        "desc": "欧洲食品配料展",
        "link": "https://www.figlobal.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.sialparis.com",
        "title": "法国SIAL食品及饮料展",
        "desc": "法国SIAL食品及饮料展",
        "link": "https://www.sialparis.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.fruitlogistica.de",
        "title": "德国柏林果蔬展",
        "desc": "德国柏林果蔬展",
        "link": "https://www.fruitlogistica.de/"
      },
      {
        "icon": "https://logo.clearbit.com/www.anugafoodtec.com",
        "title": "科隆食品技术和机械展",
        "desc": "科隆食品技术和机械展",
        "link": "https://www.anugafoodtec.com/aft/index-4.php"
      },
      {
        "icon": "https://logo.clearbit.com/www.alimentaria-mexico.com",
        "title": "墨西哥食品饮料展",
        "desc": "墨西哥食品饮料展",
        "link": "http://www.alimentaria-mexico.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.anuga.com",
        "title": "科隆国际食品展",
        "desc": "科隆国际食品展",
        "link": "https://www.anuga.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ism-cologne.com",
        "title": "科隆ISM糖果及休闲食品展",
        "desc": "科隆ISM糖果及休闲食品展",
        "link": "https://www.ism-cologne.com/"
      },
      {
        "icon": "https://logo.clearbit.com/feriaalimentec.com",
        "title": "哥伦比亚食品与饮料展览会",
        "desc": "哥伦比亚食品与饮料展览会",
        "link": "https://feriaalimentec.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.confitexpo.com",
        "title": "墨西哥瓜达拉哈拉甜食展",
        "desc": "墨西哥瓜达拉哈拉甜食展",
        "link": "http://www.confitexpo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.informamarkets.com",
        "title": "巴西圣保罗食品服务及工业展",
        "desc": "巴西圣保罗食品服务及工业展",
        "link": "https://www.informamarkets.com/en/regions/south-america.html"
      },
      {
        "icon": "https://logo.clearbit.com/sialcanada.com",
        "title": "加拿大国际食品展",
        "desc": "加拿大国际食品展",
        "link": "https://sialcanada.com/"
      },
      {
        "icon": "https://logo.clearbit.com/finefoodaustralia.com.au",
        "title": "澳大利亚国际食品展",
        "desc": "澳大利亚国际食品展",
        "link": "https://finefoodaustralia.com.au/"
      },
      {
        "icon": "https://logo.clearbit.com/sweetsandsnacks.com",
        "title": "芝加哥糖果及休闲食品展",
        "desc": "芝加哥糖果及休闲食品展",
        "link": "https://sweetsandsnacks.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.nationalrestaurantshow.com",
        "title": "芝加哥餐饮/酒店用品展",
        "desc": "芝加哥餐饮/酒店用品展",
        "link": "https://www.nationalrestaurantshow.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.specialtyfood.com",
        "title": "美国旧金山特色食品冬季展",
        "desc": "美国旧金山特色食品冬季展",
        "link": "https://www.specialtyfood.com/"
      },
      {
        "icon": "https://logo.clearbit.com/finefoodaustralia.com.au",
        "title": "澳大利亚食品展",
        "desc": "澳大利亚食品展",
        "link": "https://finefoodaustralia.com.au/"
      },
      {
        "icon": "https://logo.clearbit.com/foodproexh.com",
        "title": "悉尼食品生产及加工技术展",
        "desc": "悉尼食品生产及加工技术展",
        "link": "https://foodproexh.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.expowest.com",
        "title": "美国西部天然有机食品展",
        "desc": "美国西部天然有机食品展",
        "link": "https://www.expowest.com/en/home.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.specialtyfood.com",
        "title": "美国夏季特色食品展",
        "desc": "美国夏季特色食品展",
        "link": "https://www.specialtyfood.com/shows-events/"
      },
      {
        "icon": "https://logo.clearbit.com/www.expoeast.com",
        "title": "美国东部天然产品展",
        "desc": "美国东部天然产品展",
        "link": "https://www.expoeast.com/en/home.html"
      }
    ]
  },
  {
    "title": "12-包装纸业",
    "items": [
      {
        "icon": "https://logo.clearbit.com/www.cnhpia.org",
        "title": "中国生活用纸信息网",
        "desc": "中国生活用纸信息网",
        "link": "http://www.cnhpia.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ppzhan.com",
        "title": "包装印刷产业网",
        "desc": "包装印刷产业网",
        "link": "http://www.ppzhan.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cpta.org.cn",
        "title": "中国包装联合会",
        "desc": "中国包装联合会",
        "link": "http://www.cpta.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinakuaiyin.cn",
        "title": "印联传媒",
        "desc": "印联传媒",
        "link": "https://www.chinakuaiyin.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.pm168.net",
        "title": "华人喷码网",
        "desc": "华人喷码网",
        "link": "http://www.pm168.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.printing.hc360.com",
        "title": "慧聪网印刷",
        "desc": "慧聪网印刷",
        "link": "http://www.printing.hc360.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinapaper.net",
        "title": "中国纸业网",
        "desc": "中国纸业网",
        "link": "http://www.chinapaper.net/"
      },
      {
        "icon": "https://logo.clearbit.com/info.paper.hc360.com",
        "title": "慧聪纸业网",
        "desc": "慧聪纸业网",
        "link": "http://info.paper.hc360.com/list/zx.shtml"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinaprint.org",
        "title": "中国印刷行业网",
        "desc": "中国印刷行业网",
        "link": "http://www.chinaprint.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinaprint.org.cn",
        "title": "中国印刷及设备器材工业协会网",
        "desc": "中国印刷及设备器材工业协会网",
        "link": "http://www.chinaprint.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.xhsyww.com",
        "title": "新华社印务网",
        "desc": "新华社印务网",
        "link": "http://www.xhsyww.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.keyin.cn",
        "title": "科印网",
        "desc": "科印网",
        "link": "http://www.keyin.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cnzhixiang.com",
        "title": "纸箱网",
        "desc": "纸箱网",
        "link": "http://www.cnzhixiang.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.wdhc.cn",
        "title": "印刷油墨网",
        "desc": "印刷油墨网",
        "link": "http://www.wdhc.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.pack.com.cn",
        "title": "包装e城",
        "desc": "包装e城",
        "link": "http://www.pack.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.csgia.org",
        "title": "丝印特印网",
        "desc": "丝印特印网",
        "link": "http://www.csgia.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinabzp.com",
        "title": "中华包装瓶网",
        "desc": "中华包装瓶网",
        "link": "http://www.chinabzp.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.paper.hc360.com",
        "title": "慧聪纸业商务网",
        "desc": "慧聪纸业商务网",
        "link": "http://www.paper.hc360.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.zoaoo.com",
        "title": "中国造纸业网",
        "desc": "中国造纸业网",
        "link": "http://www.zoaoo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.31paper.com",
        "title": "纸业网",
        "desc": "纸业网",
        "link": "http://www.31paper.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cpp114.com",
        "title": "中华印刷包装网",
        "desc": "中华印刷包装网",
        "link": "http://www.cpp114.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.zhongzhi.cn",
        "title": "中纸在线",
        "desc": "中纸在线",
        "link": "http://www.zhongzhi.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.packcy.com",
        "title": "中国包装产业网",
        "desc": "中国包装产业网",
        "link": "http://www.packcy.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.yincat.com",
        "title": "印猫网",
        "desc": "印猫网",
        "link": "https://www.yincat.com/"
      },
      {
        "icon": "https://logo.clearbit.com/bzx.99114.com",
        "title": "纸箱街",
        "desc": "纸箱街",
        "link": "http://bzx.99114.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ys-z.com",
        "title": "易展印刷网",
        "desc": "易展印刷网",
        "link": "http://www.ys-z.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ezzjx.com",
        "title": "造纸机械网",
        "desc": "造纸机械网",
        "link": "http://www.ezzjx.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinasigns.cn",
        "title": "中国标识网",
        "desc": "中国标识网",
        "link": "http://www.chinasigns.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.fastpack.com.cn",
        "title": "华北包装机械网",
        "desc": "华北包装机械网",
        "link": "http://www.fastpack.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.e-dyer.com",
        "title": "印染在线",
        "desc": "印染在线",
        "link": "http://www.e-dyer.com/"
      },
      {
        "icon": "https://logo.clearbit.com/bbs.chinapaper.net",
        "title": "中国纸业网论坛",
        "desc": "中国纸业网论坛",
        "link": "http://bbs.chinapaper.net/forum.php"
      },
      {
        "icon": "https://logo.clearbit.com/www.cnprint.org",
        "title": "CPC中文印刷社区",
        "desc": "CPC中文印刷社区",
        "link": "http://www.cnprint.org/bbs/"
      },
      {
        "icon": "https://logo.clearbit.com/www.printhr.com",
        "title": "中国印刷人才招聘网",
        "desc": "中国印刷人才招聘网",
        "link": "http://www.printhr.com/"
      },
      {
        "icon": "https://logo.clearbit.com/pack.job1001.com",
        "title": "包装英才网",
        "desc": "包装英才网",
        "link": "http://pack.job1001.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.yp96.cn",
        "title": "印聘网",
        "desc": "印聘网",
        "link": "http://www.yp96.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.dada114.net",
        "title": "达达印刷人才网",
        "desc": "达达印刷人才网",
        "link": "http://www.dada114.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.51ysrc.com",
        "title": "中国印刷人才网",
        "desc": "中国印刷人才网",
        "link": "http://www.51ysrc.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.zzjob88.com",
        "title": "造纸英才网",
        "desc": "造纸英才网",
        "link": "http://www.zzjob88.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.36zy.com",
        "title": "中国纸业人才网",
        "desc": "中国纸业人才网",
        "link": "http://www.36zy.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.packtech-foodtech.com.cn",
        "title": "上海国际包装和食品加工技术展展",
        "desc": "上海国际包装和食品加工技术展展",
        "link": "http://www.packtech-foodtech.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.zhibohui.xin",
        "title": "中国（临沂）国际生活用纸博览会",
        "desc": "中国（临沂）国际生活用纸博览会",
        "link": "http://www.zhibohui.xin/"
      },
      {
        "icon": "https://logo.clearbit.com/www.pack-print.de",
        "title": "泰国包装印刷",
        "desc": "泰国包装印刷",
        "link": "https://www.pack-print.de/"
      },
      {
        "icon": "https://logo.clearbit.com/allpack-indonesia.com",
        "title": "印尼国际包装暨食品加工机械展",
        "desc": "印尼国际包装暨食品加工机械展",
        "link": "https://allpack-indonesia.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.indiapackagingshow.com",
        "title": "印度包装展",
        "desc": "印度包装展",
        "link": "https://www.indiapackagingshow.com/"
      },
      {
        "icon": "https://logo.clearbit.com/hn.foodexvietnam.com",
        "title": "越南国际食品饮料加工暨包装设备展",
        "desc": "越南国际食品饮料加工暨包装设备展",
        "link": "http://hn.foodexvietnam.com/en"
      },
      {
        "icon": "https://logo.clearbit.com/www.propakvietnam.com",
        "title": "ProPack越南",
        "desc": "ProPack越南",
        "link": "http://www.propakvietnam.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.tokyo-pack.jp",
        "title": "日本东京包装展",
        "desc": "日本东京包装展",
        "link": "http://www.tokyo-pack.jp/"
      },
      {
        "icon": "https://logo.clearbit.com/www.gulfprintpack.com",
        "title": "迪拜印刷包装展",
        "desc": "迪拜印刷包装展",
        "link": "https://www.gulfprintpack.com/welcome-gulf-print-pack-2021"
      },
      {
        "icon": "https://logo.clearbit.com/www.propakafrica.co.za",
        "title": "南非包装展",
        "desc": "南非包装展",
        "link": "https://www.propakafrica.co.za/"
      },
      {
        "icon": "https://logo.clearbit.com/www.rosupack.com",
        "title": "俄罗斯莫斯包装展",
        "desc": "俄罗斯莫斯包装展",
        "link": "http://www.rosupack.com/"
      },
      {
        "icon": "https://logo.clearbit.com/packagingfair.com",
        "title": "土耳其食品机械和包装设备展",
        "desc": "土耳其食品机械和包装设备展",
        "link": "https://packagingfair.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.taropak.pl",
        "title": "波兰国际包装展",
        "desc": "波兰国际包装展",
        "link": "https://www.taropak.pl/pl/"
      },
      {
        "icon": "https://logo.clearbit.com/www.paperarabia.com",
        "title": "阿拉伯迪拜纸业展",
        "desc": "阿拉伯迪拜纸业展",
        "link": "https://www.paperarabia.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ap2pexpo.com",
        "title": "埃及国际制浆造纸及纸业加工展览会",
        "desc": "埃及国际制浆造纸及纸业加工展览会",
        "link": "http://www.ap2pexpo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.print4all.it",
        "title": "米兰包装印刷/纸加工展",
        "desc": "米兰包装印刷/纸加工展",
        "link": "http://www.print4all.it/"
      },
      {
        "icon": "https://logo.clearbit.com/www.pro2pac.co.uk",
        "title": "英国食品/饮料包装机械展",
        "desc": "英国食品/饮料包装机械展",
        "link": "https://www.pro2pac.co.uk/"
      },
      {
        "icon": "https://logo.clearbit.com/www.all4pack.fr",
        "title": "法国国际包装工业展",
        "desc": "法国国际包装工业展",
        "link": "https://www.all4pack.fr/"
      },
      {
        "icon": "https://logo.clearbit.com/www.expopack.com.mx",
        "title": "墨西哥包装展",
        "desc": "墨西哥包装展",
        "link": "https://www.expopack.com.mx/"
      },
      {
        "icon": "https://logo.clearbit.com/andinapack.com",
        "title": "哥伦比亚国际包装工业展",
        "desc": "哥伦比亚国际包装工业展",
        "link": "https://andinapack.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.packexpo.com",
        "title": "美国包装机械展",
        "desc": "美国包装机械展",
        "link": "https://www.packexpo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.printworldshow.com",
        "title": "加拿大多伦多印业展",
        "desc": "加拿大多伦多印业展",
        "link": "http://www.printworldshow.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.auspack.com.au",
        "title": "悉尼印刷包装及加工机械展",
        "desc": "悉尼印刷包装及加工机械展",
        "link": "https://www.auspack.com.au/"
      }
    ]
  },
  {
    "title": "13-农业行业",
    "items": [
      {
        "icon": "https://logo.clearbit.com/www.agri.cn",
        "title": "中国农业信息网",
        "desc": "中国农业信息网",
        "link": "http://www.agri.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jinnong.cc",
        "title": "农民之家",
        "desc": "农民之家",
        "link": "http://www.jinnong.cc/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinajci.com",
        "title": "中国汇易网",
        "desc": "中国汇易网",
        "link": "https://www.chinajci.com/default.htm"
      },
      {
        "icon": "https://logo.clearbit.com/www.cccfna.org.cn",
        "title": "中国食品土畜进出口商会",
        "desc": "中国食品土畜进出口商会",
        "link": "http://www.cccfna.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ofcc.org.cn",
        "title": "中绿华夏有机食品认证中心",
        "desc": "中绿华夏有机食品认证中心",
        "link": "http://www.ofcc.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.forestry.gov.cn",
        "title": "国家林业局",
        "desc": "国家林业局",
        "link": "http://www.forestry.gov.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.mwr.gov.cn",
        "title": "中华人民共和国水利部网站",
        "desc": "中华人民共和国水利部网站",
        "link": "http://www.mwr.gov.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.caas.net.cn",
        "title": "中国农业科学院",
        "desc": "中国农业科学院",
        "link": "http://www.caas.net.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.iae.org.cn",
        "title": "农业经济与发展研究所",
        "desc": "农业经济与发展研究所",
        "link": "http://www.iae.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.usda.gov",
        "title": "美国农业部",
        "desc": "美国农业部",
        "link": "http://www.usda.gov/"
      },
      {
        "icon": "https://logo.clearbit.com/www.fao.org",
        "title": "联合国粮食与农业组织",
        "desc": "联合国粮食与农业组织",
        "link": "http://www.fao.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinaseed114.com",
        "title": "种业商务网",
        "desc": "种业商务网",
        "link": "https://www.chinaseed114.com/index.php"
      },
      {
        "icon": "https://logo.clearbit.com/www.cncotton.com",
        "title": "中国棉花网",
        "desc": "中国棉花网",
        "link": "http://www.cncotton.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.seedchina.com.cn",
        "title": "中国种业信息网",
        "desc": "中国种业信息网",
        "link": "http://www.seedchina.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.farmer.com.cn",
        "title": "农民日报",
        "desc": "农民日报",
        "link": "http://www.farmer.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cngrain.com",
        "title": "中华粮网",
        "desc": "中华粮网",
        "link": "http://www.cngrain.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.mushroommarket.net",
        "title": "中国食用菌商务网",
        "desc": "中国食用菌商务网",
        "link": "http://www.mushroommarket.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.tjkx.com",
        "title": "糖酒快讯",
        "desc": "糖酒快讯",
        "link": "http://www.tjkx.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.aweb.com.cn",
        "title": "农博网",
        "desc": "农博网",
        "link": "http://www.aweb.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.shuichan.cc",
        "title": "中国水产养殖网",
        "desc": "中国水产养殖网",
        "link": "http://www.shuichan.cc/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinabreed.com",
        "title": "中国养殖网",
        "desc": "中国养殖网",
        "link": "http://www.chinabreed.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jbzyw.com",
        "title": "鸡病专业网",
        "desc": "鸡病专业网",
        "link": "http://www.jbzyw.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ccpia.com.cn",
        "title": "中国农药工业网",
        "desc": "中国农药工业网",
        "link": "http://www.ccpia.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.vegnet.com.cn",
        "title": "中国蔬菜网",
        "desc": "中国蔬菜网",
        "link": "http://www.vegnet.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cngrain.com",
        "title": "中华粮网",
        "desc": "中华粮网",
        "link": "http://www.cngrain.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinafeedonline.com",
        "title": "中国饲料在线",
        "desc": "中国饲料在线",
        "link": "http://www.chinafeedonline.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.feedtrade.com.cn",
        "title": "中国饲料行业信息网",
        "desc": "中国饲料行业信息网",
        "link": "http://www.feedtrade.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.caaa.cn",
        "title": "中国畜牧业信息网",
        "desc": "中国畜牧业信息网",
        "link": "http://www.caaa.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.nacc.org.cn",
        "title": "中国农业市场网",
        "desc": "中国农业市场网",
        "link": "http://www.nacc.org.cn/index.asp"
      },
      {
        "icon": "https://logo.clearbit.com/www.a-seed.cn",
        "title": "第一种业",
        "desc": "第一种业",
        "link": "http://www.a-seed.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinajci.com",
        "title": "中国汇易",
        "desc": "中国汇易",
        "link": "http://www.chinajci.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.agrice.cn",
        "title": "农业经济信息网",
        "desc": "农业经济信息网",
        "link": "http://www.agrice.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.zhue.com.cn",
        "title": "中国猪网",
        "desc": "中国猪网",
        "link": "http://www.zhue.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.agroyl.com",
        "title": "园林网",
        "desc": "园林网",
        "link": "http://www.agroyl.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.agronj.com",
        "title": "农机网",
        "desc": "农机网",
        "link": "http://www.agronj.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.agronet.com.cn",
        "title": "农业网",
        "desc": "农业网",
        "link": "http://www.agronet.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.zhuwang.cc",
        "title": "中国养猪网",
        "desc": "中国养猪网",
        "link": "https://www.zhuwang.cc/"
      },
      {
        "icon": "https://logo.clearbit.com/www.51garlic.com",
        "title": "国际大蒜贸易网",
        "desc": "国际大蒜贸易网",
        "link": "http://www.51garlic.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.wugu.com.cn",
        "title": "吾谷网",
        "desc": "吾谷网",
        "link": "http://www.wugu.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.sn110.com",
        "title": "神农网",
        "desc": "神农网",
        "link": "http://www.sn110.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.nongcun5.com",
        "title": "农村网",
        "desc": "农村网",
        "link": "http://www.nongcun5.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.soozhu.com",
        "title": "搜猪网",
        "desc": "搜猪网",
        "link": "http://www.soozhu.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.vegnet.com.cn",
        "title": "蔬菜网",
        "desc": "蔬菜网",
        "link": "http://www.vegnet.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.niuyang120.cn",
        "title": "牛养殖网",
        "desc": "牛养殖网",
        "link": "http://www.niuyang120.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.yz88.org.cn",
        "title": "养殖巴巴",
        "desc": "养殖巴巴",
        "link": "http://www.yz88.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.nzdb.com.cn",
        "title": "中国农资导报网",
        "desc": "中国农资导报网",
        "link": "http://www.nzdb.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.nongji1688.com",
        "title": "农机1688网",
        "desc": "农机1688网",
        "link": "http://www.nongji1688.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.guojixumu.com",
        "title": "国际畜牧网",
        "desc": "国际畜牧网",
        "link": "http://www.guojixumu.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ntv.cn",
        "title": "农视网",
        "desc": "农视网",
        "link": "http://www.ntv.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cnxmy.com",
        "title": "中华畜牧信息网",
        "desc": "中华畜牧信息网",
        "link": "http://www.cnxmy.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.nongshijie.com",
        "title": "农世界网",
        "desc": "农世界网",
        "link": "http://www.nongshijie.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.1nongjing.com",
        "title": "第一农经网",
        "desc": "第一农经网",
        "link": "http://www.1nongjing.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.51zhujia.com",
        "title": "51猪价网",
        "desc": "51猪价网",
        "link": "http://www.51zhujia.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.qinbing.cn",
        "title": "中国禽病网",
        "desc": "中国禽病网",
        "link": "http://www.qinbing.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ampcn.com",
        "title": "中国农资网",
        "desc": "中国农资网",
        "link": "http://www.ampcn.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.dasuan.cn",
        "title": "中国大蒜网",
        "desc": "中国大蒜网",
        "link": "http://www.dasuan.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.agriculture.com",
        "title": "Agriculture Online Home",
        "desc": "Agriculture Online Home",
        "link": "http://www.agriculture.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.farmer.gov.cn",
        "title": "中国农民网",
        "desc": "中国农民网",
        "link": "http://www.farmer.gov.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.21food.cn",
        "title": "食品商务网",
        "desc": "食品商务网",
        "link": "http://www.21food.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.fisherynet.cn",
        "title": "水产行业网",
        "desc": "水产行业网",
        "link": "http://www.fisherynet.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.inong.net",
        "title": "爱农网",
        "desc": "爱农网",
        "link": "https://www.inong.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.meatnet.cn",
        "title": "肉业行业网",
        "desc": "肉业行业网",
        "link": "http://www.meatnet.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.abuya.com.cn",
        "title": "华南农产品交易网",
        "desc": "华南农产品交易网",
        "link": "http://www.abuya.com.cn/abuya/http/index.jsp"
      },
      {
        "icon": "https://logo.clearbit.com/www.51garlic.com",
        "title": "国际大蒜贸易网",
        "desc": "国际大蒜贸易网",
        "link": "http://www.51garlic.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.foodjx.com",
        "title": "食品机械设备网",
        "desc": "食品机械设备网",
        "link": "http://www.foodjx.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.flowerworld.com.cn",
        "title": "花卉世界网",
        "desc": "花卉世界网",
        "link": "http://www.flowerworld.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cnhnb.com",
        "title": "惠农网",
        "desc": "惠农网",
        "link": "https://www.cnhnb.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ppxmw.com",
        "title": "全球品牌畜牧网",
        "desc": "全球品牌畜牧网",
        "link": "http://www.ppxmw.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cofeed.com",
        "title": "天下粮仓",
        "desc": "天下粮仓",
        "link": "http://www.cofeed.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.fao.com.cn",
        "title": "中国粮油商务网",
        "desc": "中国粮油商务网",
        "link": "http://www.fao.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/agronet.com.cn",
        "title": "中国农业网",
        "desc": "中国农业网",
        "link": "http://agronet.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.huamu.com",
        "title": "花木网",
        "desc": "花木网",
        "link": "https://www.huamu.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jinnong.cn",
        "title": "金农网",
        "desc": "金农网",
        "link": "http://www.jinnong.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.miaomuzhan.com",
        "title": "第一苗木站",
        "desc": "第一苗木站",
        "link": "http://www.miaomuzhan.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.yuanlin365.com",
        "title": "365园林网",
        "desc": "365园林网",
        "link": "http://www.yuanlin365.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.linguo.com.cn",
        "title": "中国林果信息网",
        "desc": "中国林果信息网",
        "link": "http://www.linguo.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.nongjx.com",
        "title": "农机网",
        "desc": "农机网",
        "link": "http://www.nongjx.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.znw58.com",
        "title": "知农网",
        "desc": "知农网",
        "link": "http://www.znw58.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.10000n.cn",
        "title": "万农网",
        "desc": "万农网",
        "link": "http://www.10000n.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/nongye.qihuiwang.com",
        "title": "企汇网农林牧副",
        "desc": "企汇网农林牧副",
        "link": "http://nongye.qihuiwang.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.zgny.com.cn",
        "title": "中国农业网",
        "desc": "中国农业网",
        "link": "http://www.zgny.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ag365.com",
        "title": "365农业网",
        "desc": "365农业网",
        "link": "http://www.ag365.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.agrotrade.net",
        "title": "AgroTrade",
        "desc": "AgroTrade",
        "link": "http://www.agrotrade.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.yangzhi.com",
        "title": "养殖商务网",
        "desc": "养殖商务网",
        "link": "http://www.yangzhi.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.sea-ex.com",
        "title": "sea-ex",
        "desc": "sea-ex",
        "link": "http://www.sea-ex.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.trade-seafood.com",
        "title": "trade-seafood",
        "desc": "trade-seafood",
        "link": "http://www.trade-seafood.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.nongzi100.com",
        "title": "农资联盟论坛",
        "desc": "农资联盟论坛",
        "link": "http://www.nongzi100.com/forum.php"
      },
      {
        "icon": "https://logo.clearbit.com/bbs.feedtrade.com.cn",
        "title": "中国畜牧论坛",
        "desc": "中国畜牧论坛",
        "link": "http://bbs.feedtrade.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/bbs.huinong.org.cn",
        "title": "惠农论坛",
        "desc": "惠农论坛",
        "link": "http://bbs.huinong.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.nongxunbbs.com",
        "title": "农讯论坛",
        "desc": "农讯论坛",
        "link": "http://www.nongxunbbs.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.agrorc.com",
        "title": "农业人才网",
        "desc": "农业人才网",
        "link": "http://www.agrorc.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.5ajob.com",
        "title": "中国农业人才网",
        "desc": "中国农业人才网",
        "link": "http://www.5ajob.com/"
      },
      {
        "icon": "https://logo.clearbit.com/farm.job1001.com",
        "title": "一览农业英才网",
        "desc": "一览农业英才网",
        "link": "http://farm.job1001.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.7ahr.com",
        "title": "西南农业人才网",
        "desc": "西南农业人才网",
        "link": "http://www.7ahr.com/"
      },
      {
        "icon": "https://logo.clearbit.com/seed.job1001.com",
        "title": "一览种业英才网",
        "desc": "一览种业英才网",
        "link": "http://seed.job1001.com/"
      },
      {
        "icon": "https://logo.clearbit.com/job.nongzi100.com",
        "title": "中国农资联盟",
        "desc": "中国农资联盟",
        "link": "http://job.nongzi100.com/"
      },
      {
        "icon": "https://logo.clearbit.com/nj.job1001.com",
        "title": "一览农机英才网",
        "desc": "一览农机英才网",
        "link": "http://nj.job1001.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.zyblh.com",
        "title": "中国种业博览会",
        "desc": "中国种业博览会",
        "link": "http://www.zyblh.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cimae.com.cn",
        "title": "中国现代农业博览会",
        "desc": "中国现代农业博览会",
        "link": "http://www.cimae.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cacshow.com",
        "title": "中国国际农用化学品及植保展览会",
        "desc": "中国国际农用化学品及植保展览会",
        "link": "http://www.cacshow.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.agrochemex.net",
        "title": "农化产品展览会",
        "desc": "农化产品展览会",
        "link": "http://www.agrochemex.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.agri-fair.com",
        "title": "杨凌博览会",
        "desc": "杨凌博览会",
        "link": "http://www.agri-fair.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.livestockmalaysia.com",
        "title": "马来西亚家禽畜牧展",
        "desc": "马来西亚家禽畜牧展",
        "link": "https://www.livestockmalaysia.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.yugagro.org",
        "title": "克拉斯诺达尔农业展",
        "desc": "克拉斯诺达尔农业展",
        "link": "https://www.yugagro.org/Home"
      },
      {
        "icon": "https://logo.clearbit.com/www.iraqagrofood.com",
        "title": "伊拉克食品农业展",
        "desc": "伊拉克食品农业展",
        "link": "http://www.iraqagrofood.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.recexpo.com",
        "title": "沙特国际农业展",
        "desc": "沙特国际农业展",
        "link": "http://www.recexpo.com/events/saudi-agriculture/"
      },
      {
        "icon": "https://logo.clearbit.com/kisan.in",
        "title": "印度农业机械展",
        "desc": "印度农业机械展",
        "link": "https://kisan.in/"
      },
      {
        "icon": "https://logo.clearbit.com/www.salon-agriculture.com",
        "title": "巴黎国际农业展",
        "desc": "巴黎国际农业展",
        "link": "https://www.salon-agriculture.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.feriazaragoza.es",
        "title": "西班牙农业机械展",
        "desc": "西班牙农业机械展",
        "link": "https://www.feriazaragoza.es/"
      },
      {
        "icon": "https://logo.clearbit.com/www.expoagro.com.ar",
        "title": "阿根廷国际农业展览会",
        "desc": "阿根廷国际农业展览会",
        "link": "https://www.expoagro.com.ar/"
      },
      {
        "icon": "https://logo.clearbit.com/www.agrishow.com.br",
        "title": "巴西农业及机械展",
        "desc": "巴西农业及机械展",
        "link": "https://www.agrishow.com.br/pt/Home.html"
      }
    ]
  },
  {
    "title": "14-医药行业",
    "items": [
      {
        "icon": "https://logo.clearbit.com/www.yaozh.com",
        "title": "药智网",
        "desc": "药智网",
        "link": "https://www.yaozh.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.satcm.gov.cn",
        "title": "国家中医药管理局",
        "desc": "国家中医药管理局",
        "link": "http://www.satcm.gov.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cma.org.cn",
        "title": "中华医学会",
        "desc": "中华医学会",
        "link": "https://www.cma.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cpi.ac.cn",
        "title": "中国医药信息网",
        "desc": "中国医药信息网",
        "link": "http://www.cpi.ac.cn/publish/default/"
      },
      {
        "icon": "https://logo.clearbit.com/www.imm.ac.cn",
        "title": "中国医学科学院药物研究所",
        "desc": "中国医学科学院药物研究所",
        "link": "http://www.imm.ac.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cphiic.com",
        "title": "中国医药工业信息中心",
        "desc": "中国医药工业信息中心",
        "link": "http://www.cphiic.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.dxy.cn",
        "title": "丁香园",
        "desc": "丁香园",
        "link": "http://www.dxy.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/law.pharmnet.com.cn",
        "title": "中国食品药品化妆品法规网",
        "desc": "中国食品药品化妆品法规网",
        "link": "http://law.pharmnet.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.healthoo.com",
        "title": "健康网",
        "desc": "健康网",
        "link": "http://www.healthoo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cpa.org.cn",
        "title": "中国药学会",
        "desc": "中国药学会",
        "link": "http://www.cpa.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.hc3i.cn",
        "title": "中国数字医疗网",
        "desc": "中国数字医疗网",
        "link": "http://www.hc3i.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.maydeal.com",
        "title": "美迪医疗网",
        "desc": "美迪医疗网",
        "link": "http://www.maydeal.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.100md.com",
        "title": "百拇医药网",
        "desc": "百拇医药网",
        "link": "http://www.100md.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.yytj.org.cn",
        "title": "中国医药统计网",
        "desc": "中国医药统计网",
        "link": "http://www.yytj.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jkb.com.cn",
        "title": "健康报网",
        "desc": "健康报网",
        "link": "http://www.jkb.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.healthnet.com.cn",
        "title": "中国健康网",
        "desc": "中国健康网",
        "link": "http://www.healthnet.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.99.com.cn",
        "title": "99健康网",
        "desc": "99健康网",
        "link": "https://www.99.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cmt.com.cn",
        "title": "医学论坛网",
        "desc": "医学论坛网",
        "link": "http://www.cmt.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.healthoo.com",
        "title": "中国健康网",
        "desc": "中国健康网",
        "link": "http://www.healthoo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.91huayi.com",
        "title": "华医网",
        "desc": "华医网",
        "link": "http://www.91huayi.com/"
      },
      {
        "icon": "https://logo.clearbit.com/jiankang.163.com",
        "title": "网易健康",
        "desc": "网易健康",
        "link": "https://jiankang.163.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cacm.org.cn",
        "title": "中华中医药学会",
        "desc": "中华中医药学会",
        "link": "http://www.cacm.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/fashion.ifeng.com",
        "title": "凤凰健康",
        "desc": "凤凰健康",
        "link": "http://fashion.ifeng.com/health/"
      },
      {
        "icon": "https://logo.clearbit.com/www.iiijk.com",
        "title": "中华健康网",
        "desc": "中华健康网",
        "link": "http://www.iiijk.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.wiki8.com",
        "title": "医学百科",
        "desc": "医学百科",
        "link": "https://www.wiki8.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.menet.com.cn",
        "title": "医药资讯门户",
        "desc": "医药资讯门户",
        "link": "http://www.menet.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.bioon.net",
        "title": "生物谷",
        "desc": "生物谷",
        "link": "http://www.bioon.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.39.net",
        "title": "39健康网",
        "desc": "39健康网",
        "link": "http://www.39.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.315jiage.cn",
        "title": "药品价格315网",
        "desc": "药品价格315网",
        "link": "https://www.315jiage.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cccmhpie.org.cn",
        "title": "中国医药保健品进出口商会",
        "desc": "中国医药保健品进出口商会",
        "link": "http://www.cccmhpie.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chba.com.cn",
        "title": "中国美容美发协会",
        "desc": "中国美容美发协会",
        "link": "http://www.chba.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinapharm.com.cn",
        "title": "药网",
        "desc": "药网",
        "link": "http://www.chinapharm.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.haodf.com",
        "title": "中国医院大全",
        "desc": "中国医院大全",
        "link": "http://www.haodf.com/yiyuan/beijing/list.htm"
      },
      {
        "icon": "https://logo.clearbit.com/www.nlm.nih.gov",
        "title": "National Instit",
        "desc": "National Instit",
        "link": "http://www.nlm.nih.gov/"
      },
      {
        "icon": "https://logo.clearbit.com/www.medscape.com",
        "title": "Medscape",
        "desc": "Medscape",
        "link": "http://www.medscape.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.bioportfolio.com",
        "title": "BioPortfolio",
        "desc": "BioPortfolio",
        "link": "http://www.bioportfolio.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.phrma.org",
        "title": "phrma",
        "desc": "phrma",
        "link": "http://www.phrma.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.healthcentral.com",
        "title": "HealthCentral",
        "desc": "HealthCentral",
        "link": "http://www.healthcentral.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.themedsupplyguide.com",
        "title": "medsupplyguide",
        "desc": "medsupplyguide",
        "link": "http://www.themedsupplyguide.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.pharmnet.com.cn",
        "title": "中国医药网",
        "desc": "中国医药网",
        "link": "http://www.pharmnet.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/web.lypxx.net",
        "title": "药品信息",
        "desc": "药品信息",
        "link": "http://web.lypxx.net/index.do"
      },
      {
        "icon": "https://logo.clearbit.com/www.5168med.com",
        "title": "5168医药网",
        "desc": "5168医药网",
        "link": "http://www.5168med.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jinxiang.com",
        "title": "金象网",
        "desc": "金象网",
        "link": "https://www.jinxiang.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.guahao.com",
        "title": "微医",
        "desc": "微医",
        "link": "https://www.guahao.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.360lj.com",
        "title": "亮健好药",
        "desc": "亮健好药",
        "link": "https://www.360lj.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.360yao.com",
        "title": "恒牛医药",
        "desc": "恒牛医药",
        "link": "http://www.360yao.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.yp900.com",
        "title": "快易捷药品交易网",
        "desc": "快易捷药品交易网",
        "link": "http://www.yp900.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.zyctd.com",
        "title": "中药材天地网",
        "desc": "中药材天地网",
        "link": "http://www.zyctd.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.pharme.cn",
        "title": "制药设备网",
        "desc": "制药设备网",
        "link": "http://www.pharme.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.yaofang.cn",
        "title": "仁和药房网",
        "desc": "仁和药房网",
        "link": "https://www.yaofang.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.zgycsc.com",
        "title": "中国药材市场",
        "desc": "中国药材市场",
        "link": "http://www.zgycsc.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.tkyfw.com",
        "title": "同康药房网",
        "desc": "同康药房网",
        "link": "https://www.tkyfw.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ehaoyao.com",
        "title": "好药师网上药店",
        "desc": "好药师网上药店",
        "link": "http://www.ehaoyao.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.3156.cn",
        "title": "3156全国药品网",
        "desc": "3156全国药品网",
        "link": "http://www.3156.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.12yao.com",
        "title": "十二药网",
        "desc": "十二药网",
        "link": "http://www.12yao.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.j1.com",
        "title": "健一网",
        "desc": "健一网",
        "link": "https://www.j1.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.zyzhan.com",
        "title": "中国制药机械设备网",
        "desc": "中国制药机械设备网",
        "link": "http://www.zyzhan.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.yf115.com",
        "title": "中国药用原辅料网",
        "desc": "中国药用原辅料网",
        "link": "http://www.yf115.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.yfdyf.com",
        "title": "益丰大药房",
        "desc": "益丰大药房",
        "link": "http://www.yfdyf.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.360kad.com",
        "title": "康爱多网上药店",
        "desc": "康爱多网上药店",
        "link": "http://www.360kad.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.123ypw.com",
        "title": "药品交易网",
        "desc": "药品交易网",
        "link": "https://www.123ypw.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.pharmjx.com",
        "title": "制药机械行业网",
        "desc": "制药机械行业网",
        "link": "http://www.pharmjx.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.yaozs.com",
        "title": "医药招商代理",
        "desc": "医药招商代理",
        "link": "http://www.yaozs.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.yyzs.net",
        "title": "医药招商",
        "desc": "医药招商",
        "link": "http://www.yyzs.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.qxw18.com",
        "title": "东方医疗器械网",
        "desc": "东方医疗器械网",
        "link": "http://www.qxw18.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.qmed.com",
        "title": "qmed",
        "desc": "qmed",
        "link": "http://www.qmed.com/"
      },
      {
        "icon": "https://logo.clearbit.com/ngotcm.com",
        "title": "论坛_民间中医网",
        "desc": "论坛_民间中医网",
        "link": "http://ngotcm.com/bbs/html/bbs.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.yaoqun.net",
        "title": "药群论坛",
        "desc": "药群论坛",
        "link": "http://www.yaoqun.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.dxy.cn",
        "title": "丁香园论坛",
        "desc": "丁香园论坛",
        "link": "http://www.dxy.cn/bbs/"
      },
      {
        "icon": "https://logo.clearbit.com/www.yaoq.net",
        "title": "药学人员的圈子",
        "desc": "药学人员的圈子",
        "link": "http://www.yaoq.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ouryao.com",
        "title": "蒲公英制药技术论坛",
        "desc": "蒲公英制药技术论坛",
        "link": "https://www.ouryao.com/forum.php"
      },
      {
        "icon": "https://logo.clearbit.com/www.healthr.com",
        "title": "医药英才网",
        "desc": "医药英才网",
        "link": "http://www.healthr.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jobuy.com",
        "title": "猎才医药网",
        "desc": "猎才医药网",
        "link": "http://www.jobuy.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.doctorjob.com.cn",
        "title": "中国医疗人才网",
        "desc": "中国医疗人才网",
        "link": "http://www.doctorjob.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jobmd.cn",
        "title": "丁香医药生物人才网",
        "desc": "丁香医药生物人才网",
        "link": "http://www.jobmd.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.yizhipin.com",
        "title": "医直聘",
        "desc": "医直聘",
        "link": "https://www.yizhipin.com/"
      },
      {
        "icon": "https://logo.clearbit.com/drug.yl1001.com",
        "title": "一览制药英才网",
        "desc": "一览制药英才网",
        "link": "http://drug.yl1001.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.imedexpo.com",
        "title": "上海医疗展",
        "desc": "上海医疗展",
        "link": "http://www.imedexpo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cmef.com.cn",
        "title": "中国医博会",
        "desc": "中国医博会",
        "link": "https://www.cmef.com.cn/default.aspx"
      },
      {
        "icon": "https://logo.clearbit.com/www.nhnexpo.com",
        "title": "保健博览会",
        "desc": "保健博览会",
        "link": "http://www.nhnexpo.com/ciheCn/index.htm"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinamedicalexpo.com",
        "title": "上海医疗器械展",
        "desc": "上海医疗器械展",
        "link": "http://www.chinamedicalexpo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.pharmchina.com.cn",
        "title": "全国药品交易会",
        "desc": "全国药品交易会",
        "link": "http://www.pharmchina.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/event.hktdc.com",
        "title": "香港医疗展",
        "desc": "香港医疗展",
        "link": "https://event.hktdc.com/fair/hkmedicalfair-en/"
      },
      {
        "icon": "https://logo.clearbit.com/www.kimes.kr",
        "title": "韩国国际医疗及医院设备展览会",
        "desc": "韩国国际医疗及医院设备展览会",
        "link": "http://www.kimes.kr/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jma.or.jp",
        "title": "日本医疗康复设备展",
        "desc": "日本医疗康复设备展",
        "link": "http://www.jma.or.jp/hospex/"
      },
      {
        "icon": "https://logo.clearbit.com/www.health-asia.com",
        "title": "巴基斯坦医疗展",
        "desc": "巴基斯坦医疗展",
        "link": "https://www.health-asia.com/"
      },
      {
        "icon": "https://logo.clearbit.com/indohealthcareexpo.com",
        "title": "印尼医疗器材展",
        "desc": "印尼医疗器材展",
        "link": "https://indohealthcareexpo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.arabhealthonline.com",
        "title": "迪拜医疗设备展",
        "desc": "迪拜医疗设备展",
        "link": "https://www.arabhealthonline.com/en/Home.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.kihe.kz",
        "title": "哈萨克斯坦国际医疗医药展",
        "desc": "哈萨克斯坦国际医疗医药展",
        "link": "https://www.kihe.kz/ru/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cphi.com",
        "title": "医药原料印度展",
        "desc": "医药原料印度展",
        "link": "https://www.cphi.com/india/"
      },
      {
        "icon": "https://logo.clearbit.com/www.medicalfair-india.com",
        "title": "印度医疗展",
        "desc": "印度医疗展",
        "link": "https://www.medicalfair-india.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.medica-tradefair.com",
        "title": "杜塞尔多夫医疗展",
        "desc": "杜塞尔多夫医疗展",
        "link": "https://www.medica-tradefair.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.africahealthexhibition.com",
        "title": "南非医疗展",
        "desc": "南非医疗展",
        "link": "https://www.africahealthexhibition.com/en/home.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.salmed.pl",
        "title": "波兰医疗展",
        "desc": "波兰医疗展",
        "link": "https://www.salmed.pl/pl/"
      },
      {
        "icon": "https://logo.clearbit.com/www.medica.de",
        "title": "德国医疗展",
        "desc": "德国医疗展",
        "link": "https://www.medica.de/"
      },
      {
        "icon": "https://logo.clearbit.com/www.hospitalar.com",
        "title": "巴西医疗展",
        "desc": "巴西医疗展",
        "link": "https://www.hospitalar.com/pt/"
      },
      {
        "icon": "https://logo.clearbit.com/www.fimeshow.com",
        "title": "美国医疗机械设备展",
        "desc": "美国医疗机械设备展",
        "link": "https://www.fimeshow.com/en/home.html"
      }
    ]
  },
  {
    "title": "15-金属能源",
    "items": [
      {
        "icon": "https://logo.clearbit.com/www.sgcc.com.cn",
        "title": "国家电网",
        "desc": "国家电网",
        "link": "http://www.sgcc.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.china5e.com",
        "title": "中国能源网",
        "desc": "中国能源网",
        "link": "http://www.china5e.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.in-en.com",
        "title": "国际能源网",
        "desc": "国际能源网",
        "link": "http://www.in-en.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.sxcoal.com",
        "title": "中国煤炭资源网",
        "desc": "中国煤炭资源网",
        "link": "http://www.sxcoal.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cwestc.com",
        "title": "中国西部煤炭网",
        "desc": "中国西部煤炭网",
        "link": "http://www.cwestc.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.coal.com.cn",
        "title": "煤炭网",
        "desc": "煤炭网",
        "link": "http://www.coal.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.zh818.com",
        "title": "中国钢材价格网",
        "desc": "中国钢材价格网",
        "link": "http://www.zh818.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cec.org.cn",
        "title": "中国电力企业联合会",
        "desc": "中国电力企业联合会",
        "link": "http://www.cec.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ometal.com",
        "title": "全球金属网",
        "desc": "全球金属网",
        "link": "http://www.ometal.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinacoal.gov.cn",
        "title": "中国煤炭工业网",
        "desc": "中国煤炭工业网",
        "link": "http://www.chinacoal.gov.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.metalchina.com",
        "title": "中国金属网",
        "desc": "中国金属网",
        "link": "http://www.metalchina.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinapower.com.cn",
        "title": "中国电力网",
        "desc": "中国电力网",
        "link": "http://www.chinapower.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.sinopecnews.com.cn",
        "title": "中国石化新闻网",
        "desc": "中国石化新闻网",
        "link": "http://www.sinopecnews.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cctd.com.cn",
        "title": "中国煤炭市场网",
        "desc": "中国煤炭市场网",
        "link": "http://www.cctd.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinaoilonline.com",
        "title": "石油在线",
        "desc": "石油在线",
        "link": "http://www.chinaoilonline.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.oilboss.cn",
        "title": "中国油联",
        "desc": "中国油联",
        "link": "http://www.oilboss.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cnmn.com.cn",
        "title": "中国有色网",
        "desc": "中国有色网",
        "link": "http://www.cnmn.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.mw35.com",
        "title": "中国金属加工网",
        "desc": "中国金属加工网",
        "link": "http://www.mw35.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cnnmol.com",
        "title": "有色金属在线",
        "desc": "有色金属在线",
        "link": "http://www.cnnmol.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.nengyuanjie.net",
        "title": "能源界",
        "desc": "能源界",
        "link": "http://www.nengyuanjie.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.china-nengyuan.com",
        "title": "新能源网",
        "desc": "新能源网",
        "link": "http://www.china-nengyuan.com/"
      },
      {
        "icon": "https://logo.clearbit.com/pv.china-nengyuan.com",
        "title": "中国光伏网",
        "desc": "中国光伏网",
        "link": "http://pv.china-nengyuan.com/"
      },
      {
        "icon": "https://logo.clearbit.com/light.china-nengyuan.com",
        "title": "中国太阳能灯网",
        "desc": "中国太阳能灯网",
        "link": "http://light.china-nengyuan.com/"
      },
      {
        "icon": "https://logo.clearbit.com/xcl.china-nengyuan.com",
        "title": "中国新材料网",
        "desc": "中国新材料网",
        "link": "http://xcl.china-nengyuan.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.nea.gov.cn",
        "title": "国家能源局",
        "desc": "国家能源局",
        "link": "http://www.nea.gov.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ne21.com",
        "title": "世纪新能源网",
        "desc": "世纪新能源网",
        "link": "http://www.ne21.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.energynews.com.cn",
        "title": "能源新闻网",
        "desc": "能源新闻网",
        "link": "http://www.energynews.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.oneneng.com",
        "title": "第一能源网",
        "desc": "第一能源网",
        "link": "http://www.oneneng.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.sdgxny.com",
        "title": "共享能源网",
        "desc": "共享能源网",
        "link": "http://www.sdgxny.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.hxny.com",
        "title": "华夏能源网",
        "desc": "华夏能源网",
        "link": "http://www.hxny.com/index.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.pvnews.cn",
        "title": "太阳能新闻网",
        "desc": "太阳能新闻网",
        "link": "http://www.pvnews.cn/index.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.zgny.org.cn",
        "title": "中国能源学会",
        "desc": "中国能源学会",
        "link": "http://www.zgny.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cnenergynews.cn",
        "title": "中国能源网",
        "desc": "中国能源网",
        "link": "http://www.cnenergynews.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinaygny.cn",
        "title": "中国阳光能源网",
        "desc": "中国阳光能源网",
        "link": "http://www.chinaygny.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.21ce.cc",
        "title": "清洁能源网",
        "desc": "清洁能源网",
        "link": "http://www.21ce.cc/"
      },
      {
        "icon": "https://logo.clearbit.com/www.metalnews.cn",
        "title": "中国金属新闻网",
        "desc": "中国金属新闻网",
        "link": "http://www.metalnews.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.newenergy.org.cn",
        "title": "中国新能源网",
        "desc": "中国新能源网",
        "link": "http://www.newenergy.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.smm.cn",
        "title": "上海有色金属网",
        "desc": "上海有色金属网",
        "link": "http://www.smm.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.custeel.com",
        "title": "中国联合钢铁网",
        "desc": "中国联合钢铁网",
        "link": "http://www.custeel.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.zhijinsteel.com",
        "title": "志金钢铁",
        "desc": "志金钢铁",
        "link": "http://www.zhijinsteel.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.worldmr.net",
        "title": "全球矿产资源网",
        "desc": "全球矿产资源网",
        "link": "http://www.worldmr.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.in-en.com",
        "title": "国际能源网",
        "desc": "国际能源网",
        "link": "http://www.in-en.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.inengyuan.com",
        "title": "能源杂志",
        "desc": "能源杂志",
        "link": "http://www.inengyuan.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.escn.com.cn",
        "title": "中国储能网",
        "desc": "中国储能网",
        "link": "http://www.escn.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.umetal.com",
        "title": "联合金属网",
        "desc": "联合金属网",
        "link": "http://www.umetal.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.asianmetal.cn",
        "title": "亚洲金属",
        "desc": "亚洲金属",
        "link": "http://www.asianmetal.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/ex.bjx.com.cn",
        "title": "北极星电力展会网",
        "desc": "北极星电力展会网",
        "link": "http://ex.bjx.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinagb.net",
        "title": "能源世界",
        "desc": "能源世界",
        "link": "http://www.chinagb.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.geo-show.com",
        "title": "首聚能源博览网",
        "desc": "首聚能源博览网",
        "link": "http://www.geo-show.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinabattery.org",
        "title": "中国电池工业协会",
        "desc": "中国电池工业协会",
        "link": "http://www.chinabattery.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.pv001.net",
        "title": "pv001光伏网",
        "desc": "pv001光伏网",
        "link": "http://www.pv001.net/"
      },
      {
        "icon": "https://logo.clearbit.com/guangfu.bjx.com.cn",
        "title": "太阳能光伏网",
        "desc": "太阳能光伏网",
        "link": "http://guangfu.bjx.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cnfeol.com",
        "title": "中国铁合金在线",
        "desc": "中国铁合金在线",
        "link": "http://www.cnfeol.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ebaiyin.com",
        "title": "中国白银网",
        "desc": "中国白银网",
        "link": "https://www.ebaiyin.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.smm.cn",
        "title": "上海有色网",
        "desc": "上海有色网",
        "link": "https://www.smm.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.sourceguides.com",
        "title": "source guides",
        "desc": "source guides",
        "link": "http://www.sourceguides.com/"
      },
      {
        "icon": "https://logo.clearbit.com/oekoportal.de",
        "title": "okoprtal",
        "desc": "okoprtal",
        "link": "http://oekoportal.de/"
      },
      {
        "icon": "https://logo.clearbit.com/www.solarbuzz.com",
        "title": "solarbuzz",
        "desc": "solarbuzz",
        "link": "http://www.solarbuzz.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.solarplaza.com",
        "title": "solarplaza",
        "desc": "solarplaza",
        "link": "http://www.solarplaza.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cansia.ca",
        "title": "cansia",
        "desc": "cansia",
        "link": "http://www.cansia.ca/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cnfeol.com",
        "title": "中国铁合金在线",
        "desc": "中国铁合金在线",
        "link": "http://www.cnfeol.com/"
      },
      {
        "icon": "https://logo.clearbit.com/nykc.globalbuy.cc",
        "title": "能源矿产网",
        "desc": "能源矿产网",
        "link": "http://nykc.globalbuy.cc/"
      },
      {
        "icon": "https://logo.clearbit.com/www.battery.com.cn",
        "title": "中国电池网",
        "desc": "中国电池网",
        "link": "http://www.battery.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.steelinfo.com.cn",
        "title": "钢材信息网",
        "desc": "钢材信息网",
        "link": "http://www.steelinfo.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.gang123.cn",
        "title": "中国钢管网",
        "desc": "中国钢管网",
        "link": "http://www.gang123.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ccmn.cn",
        "title": "长江有色金属网",
        "desc": "长江有色金属网",
        "link": "http://www.ccmn.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.mysteel.com",
        "title": "我的钢铁",
        "desc": "我的钢铁",
        "link": "http://www.mysteel.com/"
      },
      {
        "icon": "https://logo.clearbit.com/b.smm.cn",
        "title": "SMM商友圈",
        "desc": "SMM商友圈",
        "link": "https://b.smm.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.dfjinshu.com",
        "title": "东方金属网",
        "desc": "东方金属网",
        "link": "http://www.dfjinshu.com/"
      },
      {
        "icon": "https://logo.clearbit.com/kyjyw.com",
        "title": "矿业交易网",
        "desc": "矿业交易网",
        "link": "http://kyjyw.com/"
      },
      {
        "icon": "https://logo.clearbit.com/mall.smm.cn",
        "title": "SMM有色商城",
        "desc": "SMM有色商城",
        "link": "https://mall.smm.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.tybaba.com",
        "title": "金属制品网",
        "desc": "金属制品网",
        "link": "http://www.tybaba.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinametal.com.cn",
        "title": "中国有色金属交易网",
        "desc": "中国有色金属交易网",
        "link": "http://www.chinametal.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.qqdcw.com",
        "title": "全球电池网",
        "desc": "全球电池网",
        "link": "http://www.qqdcw.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.epenet.cn",
        "title": "中国电力设备网",
        "desc": "中国电力设备网",
        "link": "http://www.epenet.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.recycle366.com",
        "title": "中废网",
        "desc": "中废网",
        "link": "http://www.recycle366.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.nmm365.cn",
        "title": "中国非金属矿网",
        "desc": "中国非金属矿网",
        "link": "http://www.nmm365.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.worldmetal.cn",
        "title": "中国金属商贸网",
        "desc": "中国金属商贸网",
        "link": "http://www.worldmetal.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.mesteel.com",
        "title": "mesteel",
        "desc": "mesteel",
        "link": "http://www.mesteel.com/"
      },
      {
        "icon": "https://logo.clearbit.com/bbs.dianjian.net",
        "title": "电建论坛",
        "desc": "电建论坛",
        "link": "http://bbs.dianjian.net/"
      },
      {
        "icon": "https://logo.clearbit.com/club.battery.com.cn",
        "title": "电池论坛",
        "desc": "电池论坛",
        "link": "http://club.battery.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.bjxbbs.com.cn",
        "title": "北极星电力论坛",
        "desc": "北极星电力论坛",
        "link": "http://www.bjxbbs.com.cn/forum.php"
      },
      {
        "icon": "https://logo.clearbit.com/bbs.chinagb.net",
        "title": "能源世界",
        "desc": "能源世界",
        "link": "http://bbs.chinagb.net/forum.php"
      },
      {
        "icon": "https://logo.clearbit.com/bbs.chinacitywater.org",
        "title": "水世界论坛",
        "desc": "水世界论坛",
        "link": "http://bbs.chinacitywater.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ysrencai.com",
        "title": "中国有色金属人才网",
        "desc": "中国有色金属人才网",
        "link": "http://www.ysrencai.com/"
      },
      {
        "icon": "https://logo.clearbit.com/steel.jdjob88.com",
        "title": "一览钢材英才网",
        "desc": "一览钢材英才网",
        "link": "http://steel.jdjob88.com/"
      },
      {
        "icon": "https://logo.clearbit.com/gf.epjob88.com",
        "title": "一览光伏英才网",
        "desc": "一览光伏英才网",
        "link": "http://gf.epjob88.com/"
      },
      {
        "icon": "https://logo.clearbit.com/steel.baidajob.com",
        "title": "百大英才网-钢铁站",
        "desc": "百大英才网-钢铁站",
        "link": "http://steel.baidajob.com/"
      },
      {
        "icon": "https://logo.clearbit.com/hdjob.bjx.com.cn",
        "title": "北极星火电招聘网",
        "desc": "北极星火电招聘网",
        "link": "https://hdjob.bjx.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.energyexpo.co.kr",
        "title": "韩国国际绿色能源展览会",
        "desc": "韩国国际绿色能源展览会",
        "link": "http://www.energyexpo.co.kr/"
      },
      {
        "icon": "https://logo.clearbit.com/www.exposolar.org",
        "title": "韩国世界太阳能博览会",
        "desc": "韩国世界太阳能博览会",
        "link": "https://www.exposolar.org/2019/kor/main.asp"
      },
      {
        "icon": "https://logo.clearbit.com/www.pvexpo.jp",
        "title": "日本太阳能光伏展",
        "desc": "日本太阳能光伏展",
        "link": "https://www.pvexpo.jp/ja-jp.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.elcom-ukraine.com",
        "title": "乌克兰电力展",
        "desc": "乌克兰电力展",
        "link": "https://www.elcom-ukraine.com/elcomukraine.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.tech-expo.com.ua",
        "title": "乌克兰水处理展",
        "desc": "乌克兰水处理展",
        "link": "http://www.tech-expo.com.ua/"
      },
      {
        "icon": "https://logo.clearbit.com/www.photovoltaic-conference.com",
        "title": "巴黎太阳能光伏展",
        "desc": "巴黎太阳能光伏展",
        "link": "https://www.photovoltaic-conference.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.all-energy.co.uk",
        "title": "英国阿伯丁能源展",
        "desc": "英国阿伯丁能源展",
        "link": "https://www.all-energy.co.uk/"
      },
      {
        "icon": "https://logo.clearbit.com/www.intersolar.de",
        "title": "慕尼黑太阳能技术展",
        "desc": "慕尼黑太阳能技术展",
        "link": "https://www.intersolar.de/en/home.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.messe-berlin.de",
        "title": "德国柏林国际水展",
        "desc": "德国柏林国际水展",
        "link": "https://www.messe-berlin.de/"
      },
      {
        "icon": "https://logo.clearbit.com/www.weftec.org",
        "title": "美国水处理展",
        "desc": "美国水处理展",
        "link": "https://www.weftec.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.windpowerexpo.org",
        "title": "美国国际风能展",
        "desc": "美国国际风能展",
        "link": "https://www.windpowerexpo.org/"
      }
    ]
  },
  {
    "title": "16-汽配行业",
    "items": [
      {
        "icon": "https://logo.clearbit.com/www.caam.org.cn",
        "title": "中国汽车工业协会",
        "desc": "中国汽车工业协会",
        "link": "http://www.caam.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.auto-ccpit.org",
        "title": "中国汽车贸易促进委员会",
        "desc": "中国汽车贸易促进委员会",
        "link": "http://www.auto-ccpit.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.at188.com",
        "title": "进口汽车网",
        "desc": "进口汽车网",
        "link": "http://www.at188.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.qpzone.com.cn",
        "title": "汽配圈",
        "desc": "汽配圈",
        "link": "http://www.qpzone.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.autoworld.com.cn",
        "title": "汽车世界",
        "desc": "汽车世界",
        "link": "http://www.autoworld.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.pcauto.com.cn",
        "title": "太平洋汽车网",
        "desc": "太平洋汽车网",
        "link": "http://www.pcauto.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/gz.cheshi.com",
        "title": "网上车市",
        "desc": "网上车市",
        "link": "http://gz.cheshi.com/"
      },
      {
        "icon": "https://logo.clearbit.com/auto.sina.com.cn",
        "title": "新浪汽车",
        "desc": "新浪汽车",
        "link": "http://auto.sina.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/auto.sohu.com",
        "title": "搜狐汽车",
        "desc": "搜狐汽车",
        "link": "http://auto.sohu.com/"
      },
      {
        "icon": "https://logo.clearbit.com/auto.163.com",
        "title": "网易汽车频道",
        "desc": "网易汽车频道",
        "link": "http://auto.163.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.tirechina.net",
        "title": "中国轮胎商务网",
        "desc": "中国轮胎商务网",
        "link": "http://www.tirechina.net/"
      },
      {
        "icon": "https://logo.clearbit.com/auto.zjol.com.cn",
        "title": "浙江汽车网",
        "desc": "浙江汽车网",
        "link": "http://auto.zjol.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.bcar.com.cn",
        "title": "汽车商务",
        "desc": "汽车商务",
        "link": "https://www.bcar.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/news.emao.com",
        "title": "一猫汽车网",
        "desc": "一猫汽车网",
        "link": "http://news.emao.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinamotorcycle.com",
        "title": "中国摩托车网",
        "desc": "中国摩托车网",
        "link": "http://www.chinamotorcycle.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.hywcom.com",
        "title": "汽车行业信息网",
        "desc": "汽车行业信息网",
        "link": "http://www.hywcom.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.autoinfo.org.cn",
        "title": "中国汽车工业信息网",
        "desc": "中国汽车工业信息网",
        "link": "http://www.autoinfo.org.cn/autoinfo_cn/index.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.auto-stats.org.cn",
        "title": "汽车工业协会统计信息网",
        "desc": "汽车工业协会统计信息网",
        "link": "http://www.auto-stats.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.automarket.net.cn",
        "title": "汽车市场网",
        "desc": "汽车市场网",
        "link": "http://www.automarket.net.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chewen.com",
        "title": "车问",
        "desc": "车问",
        "link": "http://www.chewen.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.autobook.com.cn",
        "title": "中国汽车图书资料网",
        "desc": "中国汽车图书资料网",
        "link": "http://www.autobook.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ev168.com",
        "title": "EV168电动车网",
        "desc": "EV168电动车网",
        "link": "http://www.ev168.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chexun.com",
        "title": "车讯原创",
        "desc": "车讯原创",
        "link": "http://www.chexun.com/news/"
      },
      {
        "icon": "https://logo.clearbit.com/www.bitauto.com",
        "title": "易车服务网",
        "desc": "易车服务网",
        "link": "http://www.bitauto.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.huanqiuauto.com",
        "title": "环球汽车网",
        "desc": "环球汽车网",
        "link": "http://www.huanqiuauto.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.carcav.com",
        "title": "中国汽车影音网",
        "desc": "中国汽车影音网",
        "link": "http://www.carcav.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinabuses.com",
        "title": "中国客车网",
        "desc": "中国客车网",
        "link": "http://www.chinabuses.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinaautonews.com.cn",
        "title": "中国汽车新闻网",
        "desc": "中国汽车新闻网",
        "link": "http://www.chinaautonews.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.zbcars.com",
        "title": "淄博汽车网",
        "desc": "淄博汽车网",
        "link": "http://www.zbcars.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.sinocars.com",
        "title": "华夏汽车网",
        "desc": "华夏汽车网",
        "link": "http://www.sinocars.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.mycar168.com",
        "title": "深圳汽车大世界网",
        "desc": "深圳汽车大世界网",
        "link": "http://www.mycar168.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinaauto.net",
        "title": "中国汽车动态网",
        "desc": "中国汽车动态网",
        "link": "http://www.chinaauto.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinaspcar.com",
        "title": "中国专用汽车网",
        "desc": "中国专用汽车网",
        "link": "http://www.chinaspcar.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.autohome.com.cn",
        "title": "汽车之家",
        "desc": "汽车之家",
        "link": "http://www.autohome.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinatruck.org",
        "title": "中国卡车网",
        "desc": "中国卡车网",
        "link": "http://www.chinatruck.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.qdcars.com",
        "title": "青岛汽车网",
        "desc": "青岛汽车网",
        "link": "http://www.qdcars.com/"
      },
      {
        "icon": "https://logo.clearbit.com/auto.ifeng.com",
        "title": "凤凰汽车",
        "desc": "凤凰汽车",
        "link": "https://auto.ifeng.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.qqddc.com",
        "title": "全国电动车网",
        "desc": "全国电动车网",
        "link": "http://www.qqddc.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.evtimes.cn",
        "title": "电动车时代网",
        "desc": "电动车时代网",
        "link": "http://www.evtimes.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.mtuo.com",
        "title": "中国摩托车网",
        "desc": "中国摩托车网",
        "link": "http://www.mtuo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cebike.com",
        "title": "电动车商情网",
        "desc": "电动车商情网",
        "link": "http://www.cebike.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.inabr.com",
        "title": "汽车商业评论",
        "desc": "汽车商业评论",
        "link": "http://www.inabr.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinasuv.cn",
        "title": "中国SUV网",
        "desc": "中国SUV网",
        "link": "http://www.chinasuv.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/auto.china.com",
        "title": "中华网汽车",
        "desc": "中华网汽车",
        "link": "https://auto.china.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chooseauto.com.cn",
        "title": "选车网",
        "desc": "选车网",
        "link": "http://www.chooseauto.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.theautochannel.com",
        "title": "auto channel",
        "desc": "auto channel",
        "link": "http://www.theautochannel.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.autoexpress.co.uk",
        "title": "auto express",
        "desc": "auto express",
        "link": "http://www.autoexpress.co.uk/"
      },
      {
        "icon": "https://logo.clearbit.com/www.carpartswholesale.com",
        "title": "car parts",
        "desc": "car parts",
        "link": "http://www.carpartswholesale.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.allworldautomotive.com",
        "title": "auto motive",
        "desc": "auto motive",
        "link": "http://www.allworldautomotive.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.autoguide.net",
        "title": "auto guide",
        "desc": "auto guide",
        "link": "http://www.autoguide.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.acea.be",
        "title": "acea",
        "desc": "acea",
        "link": "http://www.acea.be/"
      },
      {
        "icon": "https://logo.clearbit.com/www.qp110.com",
        "title": "汽车配件110网",
        "desc": "汽车配件110网",
        "link": "http://www.qp110.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.all2car.com",
        "title": "全球汽配网",
        "desc": "全球汽配网",
        "link": "http://www.all2car.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinaqibao.net",
        "title": "中国汽保网",
        "desc": "中国汽保网",
        "link": "http://www.chinaqibao.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.qipei001.com",
        "title": "汽配网",
        "desc": "汽配网",
        "link": "http://www.qipei001.com/"
      },
      {
        "icon": "https://logo.clearbit.com/cn.oemol.com",
        "title": "环球汽配资源",
        "desc": "环球汽配资源",
        "link": "http://cn.oemol.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.auto-a.hc360.com",
        "title": "慧聪汽车用品商务网",
        "desc": "慧聪汽车用品商务网",
        "link": "http://www.auto-a.hc360.com/"
      },
      {
        "icon": "https://logo.clearbit.com/cn.gasgoo.com",
        "title": "盖世汽车网",
        "desc": "盖世汽车网",
        "link": "http://cn.gasgoo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.autoho.com",
        "title": "中国汽车配件网",
        "desc": "中国汽车配件网",
        "link": "http://www.autoho.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.qqddc.com",
        "title": "全球电动车网",
        "desc": "全球电动车网",
        "link": "http://www.qqddc.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.qipeiren.com",
        "title": "汽配人",
        "desc": "汽配人",
        "link": "http://www.qipeiren.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinaepu.com",
        "title": "天下汽配网",
        "desc": "天下汽配网",
        "link": "http://www.chinaepu.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cnqmp.com",
        "title": "中国汽摩配网",
        "desc": "中国汽摩配网",
        "link": "http://www.cnqmp.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.qqdcw.com",
        "title": "全球电池网",
        "desc": "全球电池网",
        "link": "http://www.qqdcw.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ieche.com",
        "title": "爱易汽车",
        "desc": "爱易汽车",
        "link": "http://www.ieche.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cheshi.com",
        "title": "网上车市",
        "desc": "网上车市",
        "link": "http://www.cheshi.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.autohome.com.cn",
        "title": "汽车之家",
        "desc": "汽车之家",
        "link": "https://www.autohome.com.cn/zhuhai/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ddc.net.cn",
        "title": "中国电动车网",
        "desc": "中国电动车网",
        "link": "http://www.ddc.net.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.xcar.com.cn",
        "title": "爱卡汽车",
        "desc": "爱卡汽车",
        "link": "http://www.xcar.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.zj2car.com",
        "title": "浙江二手车市场",
        "desc": "浙江二手车市场",
        "link": "http://www.zj2car.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.buycar.cn",
        "title": "买车网",
        "desc": "买车网",
        "link": "http://www.buycar.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.che168.com",
        "title": "二手车之家",
        "desc": "二手车之家",
        "link": "https://www.che168.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.autoho.com",
        "title": "中国汽车配件网",
        "desc": "中国汽车配件网",
        "link": "http://www.autoho.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinaautosupplier.com",
        "title": "中国汽车供应商网",
        "desc": "中国汽车供应商网",
        "link": "http://www.chinaautosupplier.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.zgqpc.com",
        "title": "中汽城",
        "desc": "中汽城",
        "link": "http://www.zgqpc.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.qpcheng.cn",
        "title": "汽配城",
        "desc": "汽配城",
        "link": "http://www.qpcheng.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.qpzx.com",
        "title": "汽配在线网",
        "desc": "汽配在线网",
        "link": "http://www.qpzx.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.acmainfo.com",
        "title": "acma",
        "desc": "acma",
        "link": "http://www.acmainfo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.gasgoo.com",
        "title": "Gasgoo",
        "desc": "Gasgoo",
        "link": "http://www.gasgoo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/bbs.pcauto.com.cn",
        "title": "太平洋汽车网",
        "desc": "太平洋汽车网",
        "link": "http://bbs.pcauto.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/bbs.szcw.cn",
        "title": "苏E车友会",
        "desc": "苏E车友会",
        "link": "http://bbs.szcw.cn/forum.php"
      },
      {
        "icon": "https://logo.clearbit.com/www.carjob.com.cn",
        "title": "中国汽车人才网",
        "desc": "中国汽车人才网",
        "link": "http://www.carjob.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/qp.jdjob88.com",
        "title": "一览汽配英才网",
        "desc": "一览汽配英才网",
        "link": "http://qp.jdjob88.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.qipeizhaopin.com",
        "title": "中国汽车配件人才网",
        "desc": "中国汽车配件人才网",
        "link": "http://www.qipeizhaopin.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.qcr.cc",
        "title": "汽车人招聘网",
        "desc": "汽车人招聘网",
        "link": "https://www.qcr.cc/"
      },
      {
        "icon": "https://logo.clearbit.com/qp.djob.com",
        "title": "汽配人才网",
        "desc": "汽配人才网",
        "link": "http://qp.djob.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.autoguangzhou.com.cn",
        "title": "广州国际汽车展",
        "desc": "广州国际汽车展",
        "link": "http://www.autoguangzhou.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.iapechina.com",
        "title": "北京汽车零部件展",
        "desc": "北京汽车零部件展",
        "link": "http://www.iapechina.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ciaaff.org",
        "title": "郑州轿车配件微车配件展",
        "desc": "郑州轿车配件微车配件展",
        "link": "http://www.ciaaff.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.autoshanghai.org",
        "title": "上海国际汽车工业展",
        "desc": "上海国际汽车工业展",
        "link": "http://www.autoshanghai.org/"
      },
      {
        "icon": "https://logo.clearbit.com/neas.ciif-expo.com",
        "title": "新能源汽车展",
        "desc": "新能源汽车展",
        "link": "http://neas.ciif-expo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.reifenchina.com",
        "title": "上海埃森轮胎展",
        "desc": "上海埃森轮胎展",
        "link": "http://www.reifenchina.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.tyrexposeries.com",
        "title": "亚洲轮胎展",
        "desc": "亚洲轮胎展",
        "link": "http://www.tyrexposeries.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.taipeiampa.com.tw",
        "title": "台北汽车零配件展",
        "desc": "台北汽车零配件展",
        "link": "https://www.taipeiampa.com.tw/"
      },
      {
        "icon": "https://logo.clearbit.com/cisvietnam.com.vn",
        "title": "越南汽车及零部件展",
        "desc": "越南汽车及零部件展",
        "link": "http://cisvietnam.com.vn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.koaashow.com",
        "title": "韩国国际汽摩配展",
        "desc": "韩国国际汽摩配展",
        "link": "http://www.koaashow.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.car-ele.jp",
        "title": "日本电动车及新能源车技术展",
        "desc": "日本电动车及新能源车技术展",
        "link": "https://www.car-ele.jp/ja-jp.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.iaae-jp.com",
        "title": "日本东京汽配展",
        "desc": "日本东京汽配展",
        "link": "http://www.iaae-jp.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.inapa-exhibition.net",
        "title": "印尼雅加达汽车零部件展",
        "desc": "印尼雅加达汽车零部件展",
        "link": "http://www.inapa-exhibition.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.autoexpo.in",
        "title": "印度新德里汽配展",
        "desc": "印度新德里汽配展",
        "link": "http://www.autoexpo.in/"
      },
      {
        "icon": "https://logo.clearbit.com/acma-automechanika-newdelhi.in.messefrankfurt.com",
        "title": "印度汽车零部件及售后服务展",
        "desc": "印度汽车零部件及售后服务展",
        "link": "https://acma-automechanika-newdelhi.in.messefrankfurt.com/newdelhi/en.html"
      },
      {
        "icon": "https://logo.clearbit.com/automechanika-istanbul.tr.messefrankfurt.com",
        "title": "土耳其汽车零配件及售后服务展",
        "desc": "土耳其汽车零配件及售后服务展",
        "link": "https://automechanika-istanbul.tr.messefrankfurt.com/istanbul/en.html"
      },
      {
        "icon": "https://logo.clearbit.com/automechanika-dubai.ae.messefrankfurt.com",
        "title": "迪拜汽车零配件展",
        "desc": "迪拜汽车零配件展",
        "link": "https://automechanika-dubai.ae.messefrankfurt.com/dubai/en.html"
      },
      {
        "icon": "https://logo.clearbit.com/automechanika.za.messefrankfurt.com",
        "title": "南非汽车零配件/售后展",
        "desc": "南非汽车零配件/售后展",
        "link": "https://automechanika.za.messefrankfurt.com/johannesburg/en.html"
      },
      {
        "icon": "https://logo.clearbit.com/automechanika-shanghai.hk.messefrankfurt.com",
        "title": "法兰克福上海汽配展",
        "desc": "法兰克福上海汽配展",
        "link": "https://automechanika-shanghai.hk.messefrankfurt.com/shanghai/zh-cn.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.interauto-expo.ru",
        "title": "俄罗斯国际汽车及配件展览会",
        "desc": "俄罗斯国际汽车及配件展览会",
        "link": "http://www.interauto-expo.ru/interauto/exhibition/"
      },
      {
        "icon": "https://logo.clearbit.com/automechanika.ru.messefrankfurt.com",
        "title": "莫斯科汽车及配件展",
        "desc": "莫斯科汽车及配件展",
        "link": "https://automechanika.ru.messefrankfurt.com/moscow/ru.html"
      },
      {
        "icon": "https://logo.clearbit.com/eng.interauto-expo.ru",
        "title": "俄罗斯国际汽车及配件展",
        "desc": "俄罗斯国际汽车及配件展",
        "link": "http://eng.interauto-expo.ru/interauto/exhibition/"
      },
      {
        "icon": "https://logo.clearbit.com/www.motorshow.pl",
        "title": "波兰汽车配件展",
        "desc": "波兰汽车配件展",
        "link": "https://www.motorshow.pl/pl/"
      },
      {
        "icon": "https://logo.clearbit.com/www.bvv.cz",
        "title": "捷克汽车暨零配件展",
        "desc": "捷克汽车暨零配件展",
        "link": "https://www.bvv.cz/en/autotec/"
      },
      {
        "icon": "https://logo.clearbit.com/www.tiretechnology-expo.com",
        "title": "德国科隆国际轮胎展",
        "desc": "德国科隆国际轮胎展",
        "link": "https://www.tiretechnology-expo.com/en/"
      },
      {
        "icon": "https://logo.clearbit.com/automechanika.messefrankfurt.com",
        "title": "德国埃森轮胎展",
        "desc": "德国埃森轮胎展",
        "link": "https://automechanika.messefrankfurt.com/frankfurt/de.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.iaa.de",
        "title": "德国汉诺威商用车展",
        "desc": "德国汉诺威商用车展",
        "link": "http://www.iaa.de/"
      },
      {
        "icon": "https://logo.clearbit.com/automechanika.ar.messefrankfurt.com",
        "title": "阿根廷汽配展",
        "desc": "阿根廷汽配展",
        "link": "https://automechanika.ar.messefrankfurt.com/buenosaires/en.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.automecfeira.com.br",
        "title": "巴西汽车配件展",
        "desc": "巴西汽车配件展",
        "link": "https://www.automecfeira.com.br/"
      },
      {
        "icon": "https://logo.clearbit.com/www.pneushow.com.br",
        "title": "巴西轮胎及设备贸易展",
        "desc": "巴西轮胎及设备贸易展",
        "link": "https://www.pneushow.com.br/pt-br/"
      },
      {
        "icon": "https://logo.clearbit.com/www.autopromotec.com",
        "title": "博洛尼亚轮胎和汽配展",
        "desc": "博洛尼亚轮胎和汽配展",
        "link": "https://www.autopromotec.com/it/index.php"
      },
      {
        "icon": "https://logo.clearbit.com/autoaftermarketexpo.com.au",
        "title": "澳大利亚汽配/售后展",
        "desc": "澳大利亚汽配/售后展",
        "link": "https://autoaftermarketexpo.com.au/"
      },
      {
        "icon": "https://logo.clearbit.com/events.american-tradeshow.com",
        "title": "美国轮胎工业展",
        "desc": "美国轮胎工业展",
        "link": "https://events.american-tradeshow.com/ITEC"
      },
      {
        "icon": "https://logo.clearbit.com/www.semashow.com",
        "title": "拉斯维加斯改装车展",
        "desc": "拉斯维加斯改装车展",
        "link": "https://www.semashow.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.truckingshow.com",
        "title": "美国中部卡车展",
        "desc": "美国中部卡车展",
        "link": "https://www.truckingshow.com/"
      }
    ]
  },
  {
    "title": "17-家用电器",
    "items": [
      {
        "icon": "https://logo.clearbit.com/www.cheaa.com",
        "title": "中国家电网",
        "desc": "中国家电网",
        "link": "http://www.cheaa.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.hea.cn",
        "title": "家电网",
        "desc": "家电网",
        "link": "http://www.hea.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.huangye88.com",
        "title": "88小家电网",
        "desc": "88小家电网",
        "link": "http://www.huangye88.com/xiaojiadian/"
      },
      {
        "icon": "https://logo.clearbit.com/www.xdjd.cn",
        "title": "现代家电",
        "desc": "现代家电",
        "link": "https://www.xdjd.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.eepw.com.cn",
        "title": "电子产品世界",
        "desc": "电子产品世界",
        "link": "http://www.eepw.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.21ic.com",
        "title": "21IC中国电子网",
        "desc": "21IC中国电子网",
        "link": "http://www.21ic.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ec.hc360.com",
        "title": "慧聪电子网",
        "desc": "慧聪电子网",
        "link": "http://www.ec.hc360.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.elecfans.com",
        "title": "电子发烧友",
        "desc": "电子发烧友",
        "link": "http://www.elecfans.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cnledw.com",
        "title": "中国LED网",
        "desc": "中国LED网",
        "link": "https://www.cnledw.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ledinside.cn",
        "title": "LED在线",
        "desc": "LED在线",
        "link": "https://www.ledinside.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.dianqizazhi.com",
        "title": "电器杂志",
        "desc": "电器杂志",
        "link": "http://www.dianqizazhi.com/"
      },
      {
        "icon": "https://logo.clearbit.com/family.pconline.com.cn",
        "title": "太平洋家电",
        "desc": "太平洋家电",
        "link": "https://family.pconline.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.xinhuanet.com",
        "title": "新华网家电",
        "desc": "新华网家电",
        "link": "http://www.xinhuanet.com/jiadian/"
      },
      {
        "icon": "https://logo.clearbit.com/www.baixingjd.com",
        "title": "百姓家电网",
        "desc": "百姓家电网",
        "link": "https://www.baixingjd.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jdxfw.com",
        "title": "家电消费网",
        "desc": "家电消费网",
        "link": "http://www.jdxfw.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinahvacr.com",
        "title": "空调制冷网",
        "desc": "空调制冷网",
        "link": "http://www.chinahvacr.com/"
      },
      {
        "icon": "https://logo.clearbit.com/tech.sina.com.cn",
        "title": "家电风暴-新浪",
        "desc": "家电风暴-新浪",
        "link": "http://tech.sina.com.cn/elec/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cheaa.com",
        "title": "中国家电网",
        "desc": "中国家电网",
        "link": "http://www.cheaa.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinaaudio.net",
        "title": "中国音响网",
        "desc": "中国音响网",
        "link": "http://www.chinaaudio.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ea3w.com",
        "title": "万维家电网",
        "desc": "万维家电网",
        "link": "http://www.ea3w.com/"
      },
      {
        "icon": "https://logo.clearbit.com/digi.it.sohu.com",
        "title": "搜狐数字家电频道",
        "desc": "搜狐数字家电频道",
        "link": "http://digi.it.sohu.com/digital-home/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jdw001.com",
        "title": "第一家电网",
        "desc": "第一家电网",
        "link": "http://www.jdw001.com/portal.php"
      },
      {
        "icon": "https://logo.clearbit.com/www.cheari.com",
        "title": "环球家电网",
        "desc": "环球家电网",
        "link": "http://www.cheari.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.zdwang.com",
        "title": "智电网",
        "desc": "智电网",
        "link": "http://www.zdwang.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jdbbs.com",
        "title": "家电联盟网",
        "desc": "家电联盟网",
        "link": "https://www.jdbbs.com/portal.php"
      },
      {
        "icon": "https://logo.clearbit.com/zm.atobo.com.cn",
        "title": "中国灯饰照明网",
        "desc": "中国灯饰照明网",
        "link": "http://zm.atobo.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.lightingchina.com.cn",
        "title": "中国灯照明网",
        "desc": "中国灯照明网",
        "link": "http://www.lightingchina.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.shnn.com",
        "title": "中国申网家电城",
        "desc": "中国申网家电城",
        "link": "http://www.shnn.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.rhvacnet.com",
        "title": "冷暖空调网",
        "desc": "冷暖空调网",
        "link": "http://www.rhvacnet.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.114ic.com",
        "title": "电子元件交易网",
        "desc": "电子元件交易网",
        "link": "http://www.114ic.com/"
      },
      {
        "icon": "https://logo.clearbit.com/china.coovee.net",
        "title": "环球厨卫",
        "desc": "环球厨卫",
        "link": "http://china.coovee.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.gzlight.com",
        "title": "古镇灯饰网",
        "desc": "古镇灯饰网",
        "link": "http://www.gzlight.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.hvacr.cn",
        "title": "空调制冷大市场",
        "desc": "空调制冷大市场",
        "link": "http://www.hvacr.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ic37.com",
        "title": "中国IC网",
        "desc": "中国IC网",
        "link": "http://www.ic37.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cecb2b.com",
        "title": "元器件交易网",
        "desc": "元器件交易网",
        "link": "http://www.cecb2b.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.dzsc.com",
        "title": "维库电子市场网",
        "desc": "维库电子市场网",
        "link": "http://www.dzsc.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.hqew.com",
        "title": "华强电子网",
        "desc": "华强电子网",
        "link": "http://www.hqew.com/"
      },
      {
        "icon": "https://logo.clearbit.com/jdsc7777.com",
        "title": "家电商城",
        "desc": "家电商城",
        "link": "http://jdsc7777.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jd-bbs.com",
        "title": "家电论坛",
        "desc": "家电论坛",
        "link": "http://www.jd-bbs.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.jdwxmagazine.com",
        "title": "家电维修技术论坛",
        "desc": "家电维修技术论坛",
        "link": "http://www.jdwxmagazine.com/"
      },
      {
        "icon": "https://logo.clearbit.com/bbs.cheaa.com",
        "title": "中国家电网-家电论坛",
        "desc": "中国家电网-家电论坛",
        "link": "http://bbs.cheaa.com/forum.php"
      },
      {
        "icon": "https://logo.clearbit.com/www.jdwx.info",
        "title": "家电维修论坛",
        "desc": "家电维修论坛",
        "link": "https://www.jdwx.info/"
      },
      {
        "icon": "https://logo.clearbit.com/e10000.cn",
        "title": "亿万论坛",
        "desc": "亿万论坛",
        "link": "http://e10000.cn/Boards.asp"
      },
      {
        "icon": "https://logo.clearbit.com/www.52jdwx.com",
        "title": "我爱家电维修网",
        "desc": "我爱家电维修网",
        "link": "http://www.52jdwx.com/"
      },
      {
        "icon": "https://logo.clearbit.com/jiadian.djob.com",
        "title": "家电人才网",
        "desc": "家电人才网",
        "link": "http://jiadian.djob.com/"
      },
      {
        "icon": "https://logo.clearbit.com/jd.job1001.com",
        "title": "一览家电英才网",
        "desc": "一览家电英才网",
        "link": "http://jd.job1001.com/"
      },
      {
        "icon": "https://logo.clearbit.com/event.hktdc.com",
        "title": "香港电子展",
        "desc": "香港电子展",
        "link": "https://event.hktdc.com/fair/hkelectronicsfairse-tc"
      },
      {
        "icon": "https://logo.clearbit.com/www.cheaa.com",
        "title": "中国家电博览会",
        "desc": "中国家电博览会",
        "link": "http://www.cheaa.com/awe/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cnibf.net",
        "title": "上海电池展",
        "desc": "上海电池展",
        "link": "http://www.cnibf.net/cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.goemex.com",
        "title": "苏州电子信息博览会",
        "desc": "苏州电子信息博览会",
        "link": "http://www.goemex.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.taitronics.tw",
        "title": "台北电子产业科技展",
        "desc": "台北电子产业科技展",
        "link": "https://www.taitronics.tw/"
      },
      {
        "icon": "https://logo.clearbit.com/www.computextaipei.com.tw",
        "title": "台北国际电脑展",
        "desc": "台北国际电脑展",
        "link": "https://www.computextaipei.com.tw/"
      },
      {
        "icon": "https://logo.clearbit.com/www.comexitshow.com.sg",
        "title": "COMEX消费电子展(新加坡)",
        "desc": "COMEX消费电子展(新加坡)",
        "link": "https://www.comexitshow.com.sg/"
      },
      {
        "icon": "https://logo.clearbit.com/www.japan-it-spring.jp",
        "title": "东京IT展",
        "desc": "东京IT展",
        "link": "https://www.japan-it-spring.jp/ja-jp/about/cloud.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.ceatec.com",
        "title": "日本高新技术展",
        "desc": "日本高新技术展",
        "link": "https://www.ceatec.com/ja/application/"
      },
      {
        "icon": "https://logo.clearbit.com/www.nepcon.jp",
        "title": "日本电子制造设备及微电子展",
        "desc": "日本电子制造设备及微电子展",
        "link": "https://www.nepcon.jp/ja-jp.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.batteryjapan.jp",
        "title": "日本二次电池展",
        "desc": "日本二次电池展",
        "link": "https://www.batteryjapan.jp/ja-jp.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.smtpcb.org",
        "title": "韩国电子制程展",
        "desc": "韩国电子制程展",
        "link": "http://www.smtpcb.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.worlditshow.co.kr",
        "title": "韩国电子展",
        "desc": "韩国电子展",
        "link": "http://www.worlditshow.co.kr/kor/"
      },
      {
        "icon": "https://logo.clearbit.com/www.nepconvietnam.com",
        "title": "越南电子制造设备展",
        "desc": "越南电子制造设备展",
        "link": "https://www.nepconvietnam.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.bangkok-rhvac.com",
        "title": "泰国空调制冷展",
        "desc": "泰国空调制冷展",
        "link": "https://www.bangkok-rhvac.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.nepconthailand.com",
        "title": "泰国电子展",
        "desc": "泰国电子展",
        "link": "https://www.nepconthailand.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.inatronics-exhibition.net",
        "title": "印尼电子及零组件展",
        "desc": "印尼电子及零组件展",
        "link": "http://www.inatronics-exhibition.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.indiaelectronicsweek.com",
        "title": "新德里电子元器展",
        "desc": "新德里电子元器展",
        "link": "https://www.indiaelectronicsweek.com/efy-expo-2/"
      },
      {
        "icon": "https://logo.clearbit.com/www.gitex.com",
        "title": "迪拜电子展",
        "desc": "迪拜电子展",
        "link": "https://www.gitex.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.middleeastelectricity.com",
        "title": "迪拜电力/灯具/新能源展",
        "desc": "迪拜电力/灯具/新能源展",
        "link": "https://www.middleeastelectricity.com/en/home.html"
      },
      {
        "icon": "https://logo.clearbit.com/cairoict.com",
        "title": "开罗电子展",
        "desc": "开罗电子展",
        "link": "https://cairoict.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.elektro-expo.ru",
        "title": "莫斯科电力电子展",
        "desc": "莫斯科电力电子展",
        "link": "http://www.elektro-expo.ru/"
      },
      {
        "icon": "https://logo.clearbit.com/photoforum.pmd-forum.ru",
        "title": "莫斯科消费电子/影像展",
        "desc": "莫斯科消费电子/影像展",
        "link": "https://photoforum.pmd-forum.ru/"
      },
      {
        "icon": "https://logo.clearbit.com/www.expoelectronica.ru",
        "title": "莫斯科电子元器件展",
        "desc": "莫斯科电子元器件展",
        "link": "http://www.expoelectronica.ru/"
      },
      {
        "icon": "https://logo.clearbit.com/www.eletrolarshow.com.br",
        "title": "巴西电子展",
        "desc": "巴西电子展",
        "link": "http://www.eletrolarshow.com.br/"
      },
      {
        "icon": "https://logo.clearbit.com/www.bettshow.com",
        "title": "英国教育设备与技术展",
        "desc": "英国教育设备与技术展",
        "link": "https://www.bettshow.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.infosecurityeurope.com",
        "title": "伦敦计算机信息系统安全展",
        "desc": "伦敦计算机信息系统安全展",
        "link": "https://www.infosecurityeurope.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ifa-berlin.com",
        "title": "德国柏林消费类电子展",
        "desc": "德国柏林消费类电子展",
        "link": "https://www.ifa-berlin.com/"
      },
      {
        "icon": "https://logo.clearbit.com/b2b.ifa-berlin.com",
        "title": "柏林消费类电子及家用电器展",
        "desc": "柏林消费类电子及家用电器展",
        "link": "https://b2b.ifa-berlin.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.coilwindingexpo.com",
        "title": "德国线圈绝缘材料及电器制造展",
        "desc": "德国线圈绝缘材料及电器制造展",
        "link": "https://www.coilwindingexpo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/electronica.de",
        "title": "慕尼黑电子元器件展",
        "desc": "慕尼黑电子元器件展",
        "link": "https://electronica.de/"
      },
      {
        "icon": "https://logo.clearbit.com/www.electronicachina.com.cn",
        "title": "慕尼黑上海电子展",
        "desc": "慕尼黑上海电子展",
        "link": "http://www.electronicachina.com.cn/zh-cn/"
      },
      {
        "icon": "https://logo.clearbit.com/pcim.mesago.com",
        "title": "纽伦堡电子展",
        "desc": "纽伦堡电子展",
        "link": "https://pcim.mesago.com/events/en.html"
      }
    ]
  },
  {
    "title": "18-玩具行业",
    "items": [
      {
        "icon": "https://logo.clearbit.com/www.easttoys.com",
        "title": "东方玩具网",
        "desc": "东方玩具网",
        "link": "http://www.easttoys.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.wjyt-china.org",
        "title": "中国玩具和婴童用品协会",
        "desc": "中国玩具和婴童用品协会",
        "link": "http://www.wjyt-china.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ywtoys.org",
        "title": "义乌玩具网",
        "desc": "义乌玩具网",
        "link": "http://www.ywtoys.org/"
      },
      {
        "icon": "https://logo.clearbit.com/wanju.b2b168.com",
        "title": "中国玩具网",
        "desc": "中国玩具网",
        "link": "https://wanju.b2b168.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cn5135.com",
        "title": "无忧玩具网",
        "desc": "无忧玩具网",
        "link": "http://www.cn5135.com/toys/"
      },
      {
        "icon": "https://logo.clearbit.com/www.gift12345.com",
        "title": "工礼网",
        "desc": "工礼网",
        "link": "http://www.gift12345.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.giftcity.cn",
        "title": "中国礼品城网",
        "desc": "中国礼品城网",
        "link": "http://www.giftcity.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ctoy.com.cn",
        "title": "中外玩具礼品网",
        "desc": "中外玩具礼品网",
        "link": "http://www.ctoy.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/toy.sonhoo.com",
        "title": "今日玩具",
        "desc": "今日玩具",
        "link": "http://toy.sonhoo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinastuffedtoys.com",
        "title": "中国毛绒玩具网",
        "desc": "中国毛绒玩具网",
        "link": "http://www.chinastuffedtoys.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.2mould.com",
        "title": "国际模具网",
        "desc": "国际模具网",
        "link": "http://www.2mould.com/"
      },
      {
        "icon": "https://logo.clearbit.com/wanju.huangye88.com",
        "title": "88玩具网",
        "desc": "88玩具网",
        "link": "http://wanju.huangye88.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.toybaba.com",
        "title": "玩具巴巴",
        "desc": "玩具巴巴",
        "link": "http://www.toybaba.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.31toy.com",
        "title": "玩具网",
        "desc": "玩具网",
        "link": "http://www.31toy.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.toygood.com",
        "title": "玩具贸易平台",
        "desc": "玩具贸易平台",
        "link": "http://www.toygood.com/"
      },
      {
        "icon": "https://logo.clearbit.com/toy.36hjob.com",
        "title": "玩具人才网",
        "desc": "玩具人才网",
        "link": "http://toy.36hjob.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.51wjrc.com",
        "title": "玩具人才热线",
        "desc": "玩具人才热线",
        "link": "http://www.51wjrc.com/"
      },
      {
        "icon": "https://logo.clearbit.com/cn.china-toy-expo.com",
        "title": "中国玩具展",
        "desc": "中国玩具展",
        "link": "https://cn.china-toy-expo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.beijingite.com",
        "title": "北京玩具及幼教用品展",
        "desc": "北京玩具及幼教用品展",
        "link": "http://www.beijingite.com/"
      },
      {
        "icon": "https://logo.clearbit.com/event.hktdc.com",
        "title": "香港玩具展",
        "desc": "香港玩具展",
        "link": "https://event.hktdc.com/fair/hktoyfair-sc"
      },
      {
        "icon": "https://logo.clearbit.com/paperworld-middle-east.ae.messefrankfurt.com",
        "title": "迪拜玩具展",
        "desc": "迪拜玩具展",
        "link": "https://paperworld-middle-east.ae.messefrankfurt.com/dubai/en/facts-figures/playworld-village.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.pbcexpo.com.au",
        "title": "澳大利亚玩具/婴儿用品展",
        "desc": "澳大利亚玩具/婴儿用品展",
        "link": "https://www.pbcexpo.com.au/"
      },
      {
        "icon": "https://logo.clearbit.com/kidsrussia.ru",
        "title": "俄罗斯母婴用品展",
        "desc": "俄罗斯母婴用品展",
        "link": "http://kidsrussia.ru/"
      },
      {
        "icon": "https://logo.clearbit.com/www.abrin.com.br",
        "title": "巴西圣保罗玩具展",
        "desc": "巴西圣保罗玩具展",
        "link": "https://www.abrin.com.br/pt-br/"
      },
      {
        "icon": "https://logo.clearbit.com/www.spielwarenmesse.de",
        "title": "德国纽伦堡玩具展",
        "desc": "德国纽伦堡玩具展",
        "link": "https://www.spielwarenmesse.de/?L=1"
      }
    ]
  },
  {
    "title": "19-环保行业",
    "items": [
      {
        "icon": "https://logo.clearbit.com/www.aquatechchina.com",
        "title": "上海国际水处理展览会",
        "desc": "上海国际水处理展览会",
        "link": "http://www.aquatechchina.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cms-berlin.de",
        "title": "德国柏林洁净产品展",
        "desc": "德国柏林洁净产品展",
        "link": "https://www.cms-berlin.de/"
      },
      {
        "icon": "https://logo.clearbit.com/www.wasteexpoaustralia.com.au",
        "title": "澳大利亚环保及废弃物处理展",
        "desc": "澳大利亚环保及废弃物处理展",
        "link": "https://www.wasteexpoaustralia.com.au/en-gb.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.hbjob88.com",
        "title": "环保英才网",
        "desc": "环保英才网",
        "link": "http://www.hbjob88.com/"
      },
      {
        "icon": "https://logo.clearbit.com/rc.goepe.com",
        "title": "中国环保人才网",
        "desc": "中国环保人才网",
        "link": "http://rc.goepe.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.36ae.com",
        "title": "中国环境人才网",
        "desc": "中国环境人才网",
        "link": "http://www.36ae.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.51hbjob.com",
        "title": "环保人才网",
        "desc": "环保人才网",
        "link": "http://www.51hbjob.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.hbzp88.com",
        "title": "聚财环保招聘网",
        "desc": "聚财环保招聘网",
        "link": "http://www.hbzp88.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.25hb.com",
        "title": "爱我环保学社",
        "desc": "爱我环保学社",
        "link": "http://www.25hb.com/"
      },
      {
        "icon": "https://logo.clearbit.com/bbs.epday.com",
        "title": "环保论坛",
        "desc": "环保论坛",
        "link": "http://bbs.epday.com/forum.php"
      },
      {
        "icon": "https://logo.clearbit.com/www.ep-home.com",
        "title": "环保之家",
        "desc": "环保之家",
        "link": "http://www.ep-home.com/forum.php"
      },
      {
        "icon": "https://logo.clearbit.com/www.eiafans.com",
        "title": "环评爱好者",
        "desc": "环评爱好者",
        "link": "http://www.eiafans.com/forum-42-1.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.epe114.com",
        "title": "环保机械产业网",
        "desc": "环保机械产业网",
        "link": "http://www.epe114.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ejinghua.net",
        "title": "净化工程产业网",
        "desc": "净化工程产业网",
        "link": "http://www.ejinghua.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.dsccsb.com",
        "title": "中国袋式除尘设备网",
        "desc": "中国袋式除尘设备网",
        "link": "http://www.dsccsb.com/"
      },
      {
        "icon": "https://logo.clearbit.com/supply.hbzhan.com",
        "title": "环保在线",
        "desc": "环保在线",
        "link": "http://supply.hbzhan.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.hb114.cc",
        "title": "中国环保设备门户网",
        "desc": "中国环保设备门户网",
        "link": "http://www.hb114.cc/"
      },
      {
        "icon": "https://logo.clearbit.com/www.12369.com.cn",
        "title": "12369环保信息网",
        "desc": "12369环保信息网",
        "link": "http://www.12369.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.shuiol.com",
        "title": "水网在线",
        "desc": "水网在线",
        "link": "http://www.shuiol.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.hb114.cc",
        "title": "环保114",
        "desc": "环保114",
        "link": "http://www.hb114.cc/"
      },
      {
        "icon": "https://logo.clearbit.com/www.hbsb360.com",
        "title": "环保设备贸易网",
        "desc": "环保设备贸易网",
        "link": "http://www.hbsb360.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.goepe.com",
        "title": "环保设备网",
        "desc": "环保设备网",
        "link": "http://www.goepe.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinajnhb.com",
        "title": "绿色节能环保网",
        "desc": "绿色节能环保网",
        "link": "http://www.chinajnhb.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.zgjn365.com",
        "title": "节能365平台",
        "desc": "节能365平台",
        "link": "http://www.zgjn365.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.hwsbw.com",
        "title": "环卫设备产业网",
        "desc": "环卫设备产业网",
        "link": "http://www.hwsbw.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.sclsbw.com",
        "title": "水处理设备产业网",
        "desc": "水处理设备产业网",
        "link": "http://www.sclsbw.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cfej.net",
        "title": "中国环境新闻网",
        "desc": "中国环境新闻网",
        "link": "http://www.cfej.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.17huanbao.com",
        "title": "环保信息网",
        "desc": "环保信息网",
        "link": "http://www.17huanbao.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.c-water.com.cn",
        "title": "中国水工业网",
        "desc": "中国水工业网",
        "link": "http://www.c-water.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/ecep.ofweek.com",
        "title": "环保网",
        "desc": "环保网",
        "link": "https://ecep.ofweek.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.epwho.com",
        "title": "第一环保网",
        "desc": "第一环保网",
        "link": "http://www.epwho.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cn-hw.net",
        "title": "中国环卫科技网",
        "desc": "中国环卫科技网",
        "link": "http://www.cn-hw.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.caepi.org.cn",
        "title": "中国环境保护产业协会",
        "desc": "中国环境保护产业协会",
        "link": "http://www.caepi.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.eptime.cn",
        "title": "环保时代网",
        "desc": "环保时代网",
        "link": "http://www.eptime.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.acef.com.cn",
        "title": "中华环保联合会",
        "desc": "中华环保联合会",
        "link": "http://www.acef.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cepf.org.cn",
        "title": "中华环境保护基金会",
        "desc": "中华环境保护基金会",
        "link": "http://www.cepf.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.dixiashui.cn",
        "title": "地下水环境",
        "desc": "地下水环境",
        "link": "http://www.dixiashui.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinajnsb.cn",
        "title": "节能减排产业网",
        "desc": "节能减排产业网",
        "link": "http://www.chinajnsb.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/huanbao.bjx.com.cn",
        "title": "北极星环保网",
        "desc": "北极星环保网",
        "link": "http://huanbao.bjx.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.goootech.com",
        "title": "谷腾环保网",
        "desc": "谷腾环保网",
        "link": "http://www.goootech.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.yzhbw.net",
        "title": "燕赵环保网",
        "desc": "燕赵环保网",
        "link": "http://www.yzhbw.net/"
      },
      {
        "icon": "https://logo.clearbit.com/news.sina.com.cn",
        "title": "新浪环保",
        "desc": "新浪环保",
        "link": "http://news.sina.com.cn/env/"
      },
      {
        "icon": "https://logo.clearbit.com/www.solidwaste.com.cn",
        "title": "中国固废网",
        "desc": "中国固废网",
        "link": "http://www.solidwaste.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.h2o-china.com",
        "title": "中国水网",
        "desc": "中国水网",
        "link": "http://www.h2o-china.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.waterchina.com",
        "title": "中国水星",
        "desc": "中国水星",
        "link": "http://www.waterchina.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.clean.hc360.com",
        "title": "慧聪清洁网",
        "desc": "慧聪清洁网",
        "link": "http://www.clean.hc360.com/"
      },
      {
        "icon": "https://logo.clearbit.com/env.people.com.cn",
        "title": "人民网环保频道",
        "desc": "人民网环保频道",
        "link": "http://env.people.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.hbzhan.com",
        "title": "环保在线",
        "desc": "环保在线",
        "link": "http://www.hbzhan.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.gepresearch.com",
        "title": "全球环保研究网",
        "desc": "全球环保研究网",
        "link": "http://www.gepresearch.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.wec-wec.org",
        "title": "世界经济与环境大会",
        "desc": "世界经济与环境大会",
        "link": "http://www.wec-wec.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.caepi.org.cn",
        "title": "中国环境保护产业协会",
        "desc": "中国环境保护产业协会",
        "link": "http://www.caepi.org.cn/"
      }
    ]
  }
]
