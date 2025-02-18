export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "行业导航",
  description: "基于 Next.js 的行业导航",
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
        "icon": "https://www.google.com/s2/favicons?domain=www.mei.net.cn&sz=128",
        "title": "中国机经网",
        "desc": "中国机经网",
        "link": "http://www.mei.net.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.amic.agri.gov.cn&sz=128",
        "title": "中国农业机械化信息网",
        "desc": "中国农业机械化信息网",
        "link": "http://www.amic.agri.gov.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cmtba.org.cn&sz=128",
        "title": "中国机床协会",
        "desc": "中国机床协会",
        "link": "http://www.cmtba.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.21-sun.com&sz=128",
        "title": "工程机械网",
        "desc": "工程机械网",
        "link": "http://www.21-sun.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.gongkong.com&sz=128",
        "title": "中国工控网",
        "desc": "中国工控网",
        "link": "http://www.gongkong.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cmpbook.com&sz=128",
        "title": "机械工业出版社",
        "desc": "机械工业出版社",
        "link": "http://www.cmpbook.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.instrument.com.cn&sz=128",
        "title": "仪器信息网",
        "desc": "仪器信息网",
        "link": "http://www.instrument.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.d1cm.com&sz=128",
        "title": "第一工程机械网",
        "desc": "第一工程机械网",
        "link": "http://www.d1cm.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chuandong.com&sz=128",
        "title": "中国传动网",
        "desc": "中国传动网",
        "link": "http://www.chuandong.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cehome.com&sz=128",
        "title": "铁甲工程机械网",
        "desc": "铁甲工程机械网",
        "link": "http://www.cehome.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinaforge.org.cn&sz=128",
        "title": "中国锻造网",
        "desc": "中国锻造网",
        "link": "http://www.chinaforge.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.51hanjie.com&sz=128",
        "title": "超声波焊接",
        "desc": "超声波焊接",
        "link": "http://www.51hanjie.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ca800.com&sz=128",
        "title": "中国自动化网",
        "desc": "中国自动化网",
        "link": "http://www.ca800.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.yzw.cc&sz=128",
        "title": "中国压铸网",
        "desc": "中国压铸网",
        "link": "http://www.yzw.cc/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.dj114.cc&sz=128",
        "title": "电机网",
        "desc": "电机网",
        "link": "http://www.dj114.cc/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cbia.com.cn&sz=128",
        "title": "中国轴承行业网",
        "desc": "中国轴承行业网",
        "link": "http://www.cbia.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.587766.com&sz=128",
        "title": "中国工业信息网",
        "desc": "中国工业信息网",
        "link": "http://www.587766.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.yxx.com.cn&sz=128",
        "title": "中国注塑网",
        "desc": "中国注塑网",
        "link": "http://www.yxx.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.mycimt.com&sz=128",
        "title": "国际机床网",
        "desc": "国际机床网",
        "link": "http://www.mycimt.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.camda.cn&sz=128",
        "title": "中国农机流通网",
        "desc": "中国农机流通网",
        "link": "http://www.camda.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.mei.net.cn&sz=128",
        "title": "机经网",
        "desc": "机经网",
        "link": "http://www.mei.net.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cncma.org&sz=128",
        "title": "中国工程机械工业协会",
        "desc": "中国工程机械工业协会",
        "link": "http://www.cncma.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.caamm.org.cn&sz=128",
        "title": "中国农机工业网",
        "desc": "中国农机工业网",
        "link": "http://www.caamm.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.gkzhan.com&sz=128",
        "title": "智能制造网",
        "desc": "智能制造网",
        "link": "https://www.gkzhan.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.zyzhan.com&sz=128",
        "title": "中国制药机械设备网",
        "desc": "中国制药机械设备网",
        "link": "http://www.zyzhan.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.usedequip.com&sz=128",
        "title": "used equipment network",
        "desc": "used equipment network",
        "link": "http://www.usedequip.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cnelc.com&sz=128",
        "title": "中国工业电器网",
        "desc": "中国工业电器网",
        "link": "http://www.cnelc.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jx.cn&sz=128",
        "title": "中国机械网",
        "desc": "中国机械网",
        "link": "http://www.jx.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.wjw.cn&sz=128",
        "title": "全球五金网",
        "desc": "全球五金网",
        "link": "http://www.wjw.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.qqma.com&sz=128",
        "title": "全球机械网",
        "desc": "全球机械网",
        "link": "http://www.qqma.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.5j35.com&sz=128",
        "title": "中国五金商务网",
        "desc": "中国五金商务网",
        "link": "http://www.5j35.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ccen.net&sz=128",
        "title": "中国化工设备网",
        "desc": "中国化工设备网",
        "link": "http://www.ccen.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.21-sun.com&sz=128",
        "title": "中国工程机械商贸网",
        "desc": "中国工程机械商贸网",
        "link": "http://www.21-sun.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.mw35.com&sz=128",
        "title": "中国金属加工网",
        "desc": "中国金属加工网",
        "link": "http://www.mw35.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinawj.com.cn&sz=128",
        "title": "中国五金商机网",
        "desc": "中国五金商机网",
        "link": "http://www.chinawj.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ddgjw.com&sz=128",
        "title": "中国电动工具网",
        "desc": "中国电动工具网",
        "link": "http://www.ddgjw.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.machine-information.com&sz=128",
        "title": "中国机床信息网",
        "desc": "中国机床信息网",
        "link": "http://www.machine-information.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.zgcdjx.com&sz=128",
        "title": "中国传动机械网",
        "desc": "中国传动机械网",
        "link": "http://www.zgcdjx.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.zgbfw.com&sz=128",
        "title": "中国泵阀网",
        "desc": "中国泵阀网",
        "link": "http://www.zgbfw.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.pipeinfo.net&sz=128",
        "title": "中国管件信息网",
        "desc": "中国管件信息网",
        "link": "http://www.pipeinfo.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.luosi.com&sz=128",
        "title": "华人螺丝网",
        "desc": "华人螺丝网",
        "link": "http://www.luosi.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.diaokeji.net&sz=128",
        "title": "雕刻机品牌网",
        "desc": "雕刻机品牌网",
        "link": "http://www.diaokeji.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.wjjw.cn&sz=128",
        "title": "中国挖掘机网",
        "desc": "中国挖掘机网",
        "link": "http://www.wjjw.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.hooshong.com&sz=128",
        "title": "机械在线",
        "desc": "机械在线",
        "link": "http://www.hooshong.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.wfggw.com&sz=128",
        "title": "中国无缝钢管网",
        "desc": "中国无缝钢管网",
        "link": "http://www.wfggw.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chemm.cn&sz=128",
        "title": "中国化工机械网",
        "desc": "中国化工机械网",
        "link": "http://www.chemm.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.sewworld.com&sz=128",
        "title": "中国缝制设备网",
        "desc": "中国缝制设备网",
        "link": "http://www.sewworld.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.make365.com&sz=128",
        "title": "佛山机械网",
        "desc": "佛山机械网",
        "link": "http://www.make365.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=china.machine365.com&sz=128",
        "title": "中华机械网",
        "desc": "中华机械网",
        "link": "http://china.machine365.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.zcwz.com&sz=128",
        "title": "中华轴承网",
        "desc": "中华轴承网",
        "link": "http://www.zcwz.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=china.globalhardwares.com&sz=128",
        "title": "中国五金网",
        "desc": "中国五金网",
        "link": "http://china.globalhardwares.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.35mc.com&sz=128",
        "title": "商虎机械网",
        "desc": "商虎机械网",
        "link": "http://www.35mc.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.158jixie.com&sz=128",
        "title": "158机床网",
        "desc": "158机床网",
        "link": "http://www.158jixie.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.wjjw.cn&sz=128",
        "title": "中国挖掘机",
        "desc": "中国挖掘机",
        "link": "http://www.wjjw.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.mycimt.com&sz=128",
        "title": "国际床机网",
        "desc": "国际床机网",
        "link": "http://www.mycimt.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.mouldsnet.cn&sz=128",
        "title": "中国塑料模具网",
        "desc": "中国塑料模具网",
        "link": "http://www.mouldsnet.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.fentishebei.com&sz=128",
        "title": "中国粉体设备网",
        "desc": "中国粉体设备网",
        "link": "http://www.fentishebei.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.c-cnc.com&sz=128",
        "title": "中国数控机床网",
        "desc": "中国数控机床网",
        "link": "http://www.c-cnc.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jichuang.net&sz=128",
        "title": "中国机床网",
        "desc": "中国机床网",
        "link": "http://www.jichuang.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.comps.cn&sz=128",
        "title": "中国空压机网",
        "desc": "中国空压机网",
        "link": "http://www.comps.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.fengj.com&sz=128",
        "title": "中国二手设备网",
        "desc": "中国二手设备网",
        "link": "http://www.fengj.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jdzj.com&sz=128",
        "title": "机电之家",
        "desc": "机电之家",
        "link": "http://www.jdzj.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.spjxcn.com&sz=128",
        "title": "食品机械行业网",
        "desc": "食品机械行业网",
        "link": "http://www.spjxcn.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.pharmjx.com&sz=128",
        "title": "制药机械行业网",
        "desc": "制药机械行业网",
        "link": "http://www.pharmjx.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.kssbw.com&sz=128",
        "title": "中国矿山设备网",
        "desc": "中国矿山设备网",
        "link": "http://www.kssbw.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cnsb.cn&sz=128",
        "title": "中国设备网",
        "desc": "中国设备网",
        "link": "http://www.cnsb.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.yanmo.net&sz=128",
        "title": "中国研磨网",
        "desc": "中国研磨网",
        "link": "http://www.yanmo.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ysjw.cn&sz=128",
        "title": "中国压缩机网",
        "desc": "中国压缩机网",
        "link": "http://www.ysjw.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jiansuji001.com&sz=128",
        "title": "减速机",
        "desc": "减速机",
        "link": "http://www.jiansuji001.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.lmjx.net&sz=128",
        "title": "中国路面机械网",
        "desc": "中国路面机械网",
        "link": "http://www.lmjx.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.6300.net&sz=128",
        "title": "工程机械",
        "desc": "工程机械",
        "link": "http://www.6300.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.dy88.cn&sz=128",
        "title": "大禹网",
        "desc": "大禹网",
        "link": "http://www.dy88.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jzjx.org.cn&sz=128",
        "title": "建筑机械网",
        "desc": "建筑机械网",
        "link": "http://www.jzjx.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinacrane.net&sz=128",
        "title": "全球起重机械网",
        "desc": "全球起重机械网",
        "link": "http://www.chinacrane.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.frj.cc&sz=128",
        "title": "中缝网",
        "desc": "中缝网",
        "link": "http://www.frj.cc/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.yaoxie.net&sz=128",
        "title": "中国药械网",
        "desc": "中国药械网",
        "link": "http://www.yaoxie.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.86pla.com&sz=128",
        "title": "塑料机械网",
        "desc": "塑料机械网",
        "link": "http://www.86pla.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jc35.com&sz=128",
        "title": "机床商务网",
        "desc": "机床商务网",
        "link": "http://www.jc35.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.maijx.com&sz=128",
        "title": "买卖机械网",
        "desc": "买卖机械网",
        "link": "http://www.maijx.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.nongjx.com&sz=128",
        "title": "中国农机总网",
        "desc": "中国农机总网",
        "link": "http://www.nongjx.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinawajue.cn&sz=128",
        "title": "挖掘机产业网",
        "desc": "挖掘机产业网",
        "link": "http://www.chinawajue.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jc35.com&sz=128",
        "title": "中国机床商务网",
        "desc": "中国机床商务网",
        "link": "http://www.jc35.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.huajx.com&sz=128",
        "title": "中国化工机械设备",
        "desc": "中国化工机械设备",
        "link": "http://www.huajx.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.mydry.cn&sz=128",
        "title": "干燥设备网",
        "desc": "干燥设备网",
        "link": "http://www.mydry.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.skjcsc.com&sz=128",
        "title": "数控机床市场网",
        "desc": "数控机床市场网",
        "link": "http://www.skjcsc.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ybzhan.cn&sz=128",
        "title": "中国仪表网",
        "desc": "中国仪表网",
        "link": "http://www.ybzhan.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.lock188.com&sz=128",
        "title": "中国锁具网",
        "desc": "中国锁具网",
        "link": "http://www.lock188.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.d1cm.com&sz=128",
        "title": "第一工程机械网",
        "desc": "第一工程机械网",
        "link": "http://www.d1cm.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cmol.com&sz=128",
        "title": "工程机械在线",
        "desc": "工程机械在线",
        "link": "http://www.cmol.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.lmjx.net&sz=128",
        "title": "中国路面机械网",
        "desc": "中国路面机械网",
        "link": "https://www.lmjx.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cema.org.cn&sz=128",
        "title": "中国挖掘机械网",
        "desc": "中国挖掘机械网",
        "link": "http://www.cema.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.998jx.cn&sz=128",
        "title": "混凝土机械网",
        "desc": "混凝土机械网",
        "link": "http://www.998jx.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=jixie.51chuli.com&sz=128",
        "title": "二手工程机械市场",
        "desc": "二手工程机械市场",
        "link": "https://jixie.51chuli.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.bf35.com&sz=128",
        "title": "泵阀商务网",
        "desc": "泵阀商务网",
        "link": "http://www.bf35.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.mccet.com&sz=128",
        "title": "中国冶金装备网",
        "desc": "中国冶金装备网",
        "link": "http://www.mccet.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cmepc.com&sz=128",
        "title": "中国冶金设备配件网",
        "desc": "中国冶金设备配件网",
        "link": "http://www.cmepc.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ysjw.cn&sz=128",
        "title": "压缩机网",
        "desc": "压缩机网",
        "link": "https://www.ysjw.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinawj.com.cn&sz=128",
        "title": "五金商机网",
        "desc": "五金商机网",
        "link": "http://www.chinawj.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.bzjx.org&sz=128",
        "title": "包装机械产业网",
        "desc": "包装机械产业网",
        "link": "http://www.bzjx.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jxcad.com.cn&sz=128",
        "title": "机械CAD论坛",
        "desc": "机械CAD论坛",
        "link": "http://www.jxcad.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=bbs.cmiw.cn&sz=128",
        "title": "中国机械社区",
        "desc": "中国机械社区",
        "link": "http://bbs.cmiw.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.zgjxcad.com&sz=128",
        "title": "机械设计论坛",
        "desc": "机械设计论坛",
        "link": "http://www.zgjxcad.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jixiecun.com&sz=128",
        "title": "机械村",
        "desc": "机械村",
        "link": "http://www.jixiecun.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=bbs.cehome.com&sz=128",
        "title": "挖掘机论坛",
        "desc": "挖掘机论坛",
        "link": "http://bbs.cehome.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.zcboss.com&sz=128",
        "title": "轴承论坛",
        "desc": "轴承论坛",
        "link": "http://www.zcboss.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=bbs.zz361.com&sz=128",
        "title": "铸造论坛",
        "desc": "铸造论坛",
        "link": "http://bbs.zz361.com/inc.php"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=ndt.baidajob.com&sz=128",
        "title": "中国无损检测人才网",
        "desc": "中国无损检测人才网",
        "link": "http://ndt.baidajob.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.gongyejob.com&sz=128",
        "title": "工业人才招聘网",
        "desc": "工业人才招聘网",
        "link": "http://www.gongyejob.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.mechr.com&sz=128",
        "title": "机械英才网",
        "desc": "机械英才网",
        "link": "http://www.mechr.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=gl.epjob88.com&sz=128",
        "title": "一览锅炉人才网",
        "desc": "一览锅炉人才网",
        "link": "http://gl.epjob88.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=gcjx.job1001.com&sz=128",
        "title": "工程机械招聘网",
        "desc": "工程机械招聘网",
        "link": "http://gcjx.job1001.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.zcjob88.com&sz=128",
        "title": "轴承人才网",
        "desc": "轴承人才网",
        "link": "https://www.zcjob88.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=yz.cmejob.com&sz=128",
        "title": "压铸人才网",
        "desc": "压铸人才网",
        "link": "http://yz.cmejob.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=ysj.cmejob.com&sz=128",
        "title": "压缩机人才网",
        "desc": "压缩机人才网",
        "link": "http://ysj.cmejob.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.visionchinashow.net&sz=128",
        "title": "中国国际机器视觉展览会",
        "desc": "中国国际机器视觉展览会",
        "link": "http://www.visionchinashow.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.bauma-china.com&sz=128",
        "title": "上海工程/建材机械及设备展",
        "desc": "上海工程/建材机械及设备展",
        "link": "https://www.bauma-china.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.b-china.cn&sz=128",
        "title": "上海工程机械展",
        "desc": "上海工程机械展",
        "link": "http://www.b-china.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.e-bices.org&sz=128",
        "title": "北京工程机械展",
        "desc": "北京工程机械展",
        "link": "http://www.e-bices.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ctisma.com&sz=128",
        "title": "台州缝制设备展",
        "desc": "台州缝制设备展",
        "link": "http://www.ctisma.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinafoodtech.com.cn&sz=128",
        "title": "北京食品加工/包装机械展",
        "desc": "北京食品加工/包装机械展",
        "link": "http://www.chinafoodtech.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.intermachshow.com&sz=128",
        "title": "东盟机械展",
        "desc": "东盟机械展",
        "link": "https://www.intermachshow.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.assemblytechexpo.com&sz=128",
        "title": "泰国装配技术/机械零组件展",
        "desc": "泰国装配技术/机械零组件展",
        "link": "https://www.assemblytechexpo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.automanexpo.com&sz=128",
        "title": "泰国汽车生产制造/机械工具展",
        "desc": "泰国汽车生产制造/机械工具展",
        "link": "https://www.automanexpo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.tube-southeastasia.com&sz=128",
        "title": "泰国管材贸易展",
        "desc": "泰国管材贸易展",
        "link": "https://www.tube-southeastasia.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.metalex.co.th&sz=128",
        "title": "泰国机床/金属加工机械展",
        "desc": "泰国机床/金属加工机械展",
        "link": "https://www.metalex.co.th/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=india-itme.com&sz=128",
        "title": "印度纺织机械展",
        "desc": "印度纺织机械展",
        "link": "http://india-itme.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.plastindia.org&sz=128",
        "title": "印度塑料机械展",
        "desc": "印度塑料机械展",
        "link": "http://www.plastindia.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.excon.in&sz=128",
        "title": "印度工程机械及工程车辆展",
        "desc": "印度工程机械及工程车辆展",
        "link": "https://www.excon.in/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.eimaagrimach.in&sz=128",
        "title": "印度农业机械展",
        "desc": "印度农业机械展",
        "link": "http://www.eimaagrimach.in/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.pacprocess-india.com&sz=128",
        "title": "印度包装机械展",
        "desc": "印度包装机械展",
        "link": "https://www.pacprocess-india.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ifexindia.com&sz=128",
        "title": "印度铸造机械设备展",
        "desc": "印度铸造机械设备展",
        "link": "http://www.ifexindia.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ifexindia.com&sz=128",
        "title": "印度矿业机械展",
        "desc": "印度矿业机械展",
        "link": "http://www.ifexindia.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.miningandengineeringindo.com&sz=128",
        "title": "印尼矿山机械展",
        "desc": "印尼矿山机械展",
        "link": "https://www.miningandengineeringindo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ifmac.net&sz=128",
        "title": "印尼木工及家具制造配件展",
        "desc": "印尼木工及家具制造配件展",
        "link": "http://www.ifmac.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=interpharma-indonesia.com&sz=128",
        "title": "印尼制药机械展",
        "desc": "印尼制药机械展",
        "link": "http://interpharma-indonesia.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=cems-textech.com&sz=128",
        "title": "印尼纺织服装机械展",
        "desc": "印尼纺织服装机械展",
        "link": "https://cems-textech.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chanchao.com.tw&sz=128",
        "title": "越南木工机械/家具配件展",
        "desc": "越南木工机械/家具配件展",
        "link": "https://www.chanchao.com.tw/VietnamWood/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chanchao.com.tw&sz=128",
        "title": "越南河内纺织机械展",
        "desc": "越南河内纺织机械展",
        "link": "https://www.chanchao.com.tw/VTG/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.metalexvietnam.com&sz=128",
        "title": "越南机床/金属加工机械展",
        "desc": "越南机床/金属加工机械展",
        "link": "https://www.metalexvietnam.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chanchao.com.tw&sz=128",
        "title": "孟加拉国际塑料展览会",
        "desc": "孟加拉国际塑料展览会",
        "link": "https://www.chanchao.com.tw/Bangladesh-expo/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.iranconmin.de&sz=128",
        "title": "伊朗工程/矿业/建筑机械展",
        "desc": "伊朗工程/矿业/建筑机械展",
        "link": "https://www.iranconmin.de/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.tube-tradefair.com&sz=128",
        "title": "迪拜工业机械展",
        "desc": "迪拜工业机械展",
        "link": "https://www.tube-tradefair.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.dubaiwoodshow.com&sz=128",
        "title": "迪拜木业及木工机械展",
        "desc": "迪拜木业及木工机械展",
        "link": "http://www.dubaiwoodshow.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.libyabuild.com&sz=128",
        "title": "利比亚建材卫浴五金及建筑机械展",
        "desc": "利比亚建材卫浴五金及建筑机械展",
        "link": "http://www.libyabuild.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=win-eurasia.com&sz=128",
        "title": "土耳其机械展",
        "desc": "土耳其机械展",
        "link": "http://win-eurasia.com/tr"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.yapifuari.com.tr&sz=128",
        "title": "土耳其建筑及工程机械展",
        "desc": "土耳其建筑及工程机械展",
        "link": "https://www.yapifuari.com.tr/Home"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.kazexpo.kz&sz=128",
        "title": "哈萨克斯坦矿山机械展",
        "desc": "哈萨克斯坦矿山机械展",
        "link": "http://www.kazexpo.kz/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.kazcomak.kz&sz=128",
        "title": "哈萨克斯坦国际工程机械展",
        "desc": "哈萨克斯坦国际工程机械展",
        "link": "https://www.kazcomak.kz/ru/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.lesdrevmash-expo.ru&sz=128",
        "title": "俄罗斯木工机械及家具配件展",
        "desc": "俄罗斯木工机械及家具配件展",
        "link": "http://www.lesdrevmash-expo.ru/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.woodexpo.ru&sz=128",
        "title": "俄罗斯国际木业和木工机械展",
        "desc": "俄罗斯国际木业和木工机械展",
        "link": "https://www.woodexpo.ru/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.pcvexpo.ru&sz=128",
        "title": "俄罗斯国际泵阀压缩机及配件展",
        "desc": "俄罗斯国际泵阀压缩机及配件展",
        "link": "https://www.pcvexpo.ru/ru-RU/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.interplastica.de&sz=128",
        "title": "莫斯科塑料橡胶原材料/机械展",
        "desc": "莫斯科塑料橡胶原材料/机械展",
        "link": "https://www.interplastica.de/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cabex.ru&sz=128",
        "title": "俄罗斯国际线缆线材及紧固件展览会",
        "desc": "俄罗斯国际线缆线材及紧固件展览会",
        "link": "https://www.cabex.ru/ru-RU/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.komaf.org&sz=128",
        "title": "韩国国际机械展览会",
        "desc": "韩国国际机械展览会",
        "link": "http://www.komaf.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.kofas.org&sz=128",
        "title": "韩国国际自动化精密机械展",
        "desc": "韩国国际自动化精密机械展",
        "link": "http://www.kofas.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.japan-mfg.jp&sz=128",
        "title": "日本机械零部件及加工技术展",
        "desc": "日本机械零部件及加工技术展",
        "link": "https://www.japan-mfg.jp/ja-jp/about/mtech.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.nationalmanufacturingweek.com.au&sz=128",
        "title": "澳大利亚机械制造周",
        "desc": "澳大利亚机械制造周",
        "link": "https://www.nationalmanufacturingweek.com.au/en-gb.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.queenslandminingexpo.com.au&sz=128",
        "title": "澳洲昆士兰矿业机械展",
        "desc": "澳洲昆士兰矿业机械展",
        "link": "https://www.queenslandminingexpo.com.au/en-gb.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.mtexpo.com.br&sz=128",
        "title": "巴西矿业机械展",
        "desc": "巴西矿业机械展",
        "link": "http://www.mtexpo.com.br/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.constructionexpo.com.br&sz=128",
        "title": "巴西建筑工程及矿山机械展",
        "desc": "巴西建筑工程及矿山机械展",
        "link": "http://www.constructionexpo.com.br/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.reedalcantara.com.br&sz=128",
        "title": "巴西塑料机械展",
        "desc": "巴西塑料机械展",
        "link": "https://www.reedalcantara.com.br/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.feiplastic.com.br&sz=128",
        "title": "巴西塑料机械展",
        "desc": "巴西塑料机械展",
        "link": "https://www.feiplastic.com.br/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.reedalcantara.com.br&sz=128",
        "title": "巴西机械五金及机床设备展",
        "desc": "巴西机械五金及机床设备展",
        "link": "https://www.reedalcantara.com.br/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=tubotech.com.br&sz=128",
        "title": "巴西管道/阀门/泵浦及组件展",
        "desc": "巴西管道/阀门/泵浦及组件展",
        "link": "http://tubotech.com.br/16/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.expocamacol.com&sz=128",
        "title": "哥伦比亚国际建材展",
        "desc": "哥伦比亚国际建材展",
        "link": "http://www.expocamacol.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.argentinamining.com&sz=128",
        "title": "阿根廷国际矿山机械博览会",
        "desc": "阿根廷国际矿山机械博览会",
        "link": "http://www.argentinamining.com/es/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.expominaperu.com&sz=128",
        "title": "秘鲁矿业设备及机械展",
        "desc": "秘鲁矿业设备及机械展",
        "link": "https://www.expominaperu.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ugol-rossii.com&sz=128",
        "title": "乌克兰矿山机械展",
        "desc": "乌克兰矿山机械展",
        "link": "https://www.ugol-rossii.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.agro-expo.com&sz=128",
        "title": "乌克兰农业及农业机械展",
        "desc": "乌克兰农业及农业机械展",
        "link": "http://www.agro-expo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.interpack.de&sz=128",
        "title": "德国包装及糖果机械博览会",
        "desc": "德国包装及糖果机械博览会",
        "link": "https://www.interpack.de/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ppmatotalshow.co.uk&sz=128",
        "title": "德国伯明翰加工与包装机械展",
        "desc": "德国伯明翰加工与包装机械展",
        "link": "https://www.ppmatotalshow.co.uk/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.bauma.de&sz=128",
        "title": "德国慕尼黑机械展",
        "desc": "德国慕尼黑机械展",
        "link": "https://www.bauma.de/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.valveworldexpo.com&sz=128",
        "title": "德国阀门世界展",
        "desc": "德国阀门世界展",
        "link": "https://www.valveworldexpo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ceramitec.com&sz=128",
        "title": "慕尼黑陶瓷工业/粉末冶金机械/原材料展",
        "desc": "慕尼黑陶瓷工业/粉末冶金机械/原材料展",
        "link": "https://www.ceramitec.com/index-2.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.agritechnica.com&sz=128",
        "title": "德国汉诺威农业技术及机械展",
        "desc": "德国汉诺威农业技术及机械展",
        "link": "https://www.agritechnica.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=paris.intermatconstruction.com&sz=128",
        "title": "法国工程技术与设备展览会",
        "desc": "法国工程技术与设备展览会",
        "link": "https://paris.intermatconstruction.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.eima.it&sz=128",
        "title": "意大利农业机械展",
        "desc": "意大利农业机械展",
        "link": "https://www.eima.it/it/index.php"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.samoter.it&sz=128",
        "title": "意大利工程机械展",
        "desc": "意大利工程机械展",
        "link": "http://www.samoter.it/it"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ipackima.com&sz=128",
        "title": "意大利包装机械/食品加工及物料展",
        "desc": "意大利包装机械/食品加工及物料展",
        "link": "http://www.ipackima.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.itma.com&sz=128",
        "title": "米兰纺织机械展",
        "desc": "米兰纺织机械展",
        "link": "https://www.itma.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.xylexpo.com&sz=128",
        "title": "米兰木工机械展",
        "desc": "米兰木工机械展",
        "link": "http://www.xylexpo.com/index.php/it/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cairowoodshow.com&sz=128",
        "title": "开罗木业及木工机械展",
        "desc": "开罗木业及木工机械展",
        "link": "http://www.cairowoodshow.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=cmts.ca&sz=128",
        "title": "加拿大机械制造周及焊接展",
        "desc": "加拿大机械制造周及焊接展",
        "link": "https://cmts.ca/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.iwfatlanta.com&sz=128",
        "title": "美国家具配件及木工机械展",
        "desc": "美国家具配件及木工机械展",
        "link": "http://www.iwfatlanta.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.worldagexpo.com&sz=128",
        "title": "美国农用机械展",
        "desc": "美国农用机械展",
        "link": "http://www.worldagexpo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.worldofconcrete.com&sz=128",
        "title": "拉斯维加斯建筑机械展",
        "desc": "拉斯维加斯建筑机械展",
        "link": "https://www.worldofconcrete.com/en/attendee.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.gie-expo.com&sz=128",
        "title": "美国室外动力机械设备展",
        "desc": "美国室外动力机械设备展",
        "link": "https://www.gie-expo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=westeconline.com&sz=128",
        "title": "美国西部机械制造机床工具展",
        "desc": "美国西部机械制造机床工具展",
        "link": "https://westeconline.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.conexpoconagg.com&sz=128",
        "title": "美国工程机械博览会",
        "desc": "美国工程机械博览会",
        "link": "https://www.conexpoconagg.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.aem.org&sz=128",
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
        "icon": "https://www.google.com/s2/favicons?domain=www.sensorworld.com.cn&sz=128",
        "title": "传感器信息港",
        "desc": "传感器信息港",
        "link": "http://www.sensorworld.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.etime.net.cn&sz=128",
        "title": "E代电子",
        "desc": "E代电子",
        "link": "http://www.etime.net.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cena.com.cn&sz=128",
        "title": "中国电子报",
        "desc": "中国电子报",
        "link": "http://www.cena.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cesi.ac.cn&sz=128",
        "title": "中国电子技术标准化",
        "desc": "中国电子技术标准化",
        "link": "http://www.cesi.ac.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ic-ceca.org.cn&sz=128",
        "title": "中国电子元件行业协会",
        "desc": "中国电子元件行业协会",
        "link": "http://www.ic-ceca.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ceea.org.cn&sz=128",
        "title": "中国电子企业协会",
        "desc": "中国电子企业协会",
        "link": "http://www.ceea.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.csia.net.cn&sz=128",
        "title": "中国半导体行业网",
        "desc": "中国半导体行业网",
        "link": "http://www.csia.net.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.edw.com.cn&sz=128",
        "title": "电子产品世界",
        "desc": "电子产品世界",
        "link": "http://www.edw.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinaecnet.com&sz=128",
        "title": "中国元器件在线",
        "desc": "中国元器件在线",
        "link": "http://www.chinaecnet.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.big-bit.com&sz=128",
        "title": "大比特商务网",
        "desc": "大比特商务网",
        "link": "http://www.big-bit.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinaecnet.com&sz=128",
        "title": "中电网",
        "desc": "中电网",
        "link": "http://www.chinaecnet.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.21ic.com&sz=128",
        "title": "21IC电子网",
        "desc": "21IC电子网",
        "link": "http://www.21ic.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.pcbtech.net&sz=128",
        "title": "中国PCB技术网",
        "desc": "中国PCB技术网",
        "link": "http://www.pcbtech.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinaet.net&sz=128",
        "title": "中国电工网",
        "desc": "中国电工网",
        "link": "http://www.chinaet.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.analysis.org.cn&sz=128",
        "title": "中国分析网",
        "desc": "中国分析网",
        "link": "http://www.analysis.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ca800.com&sz=128",
        "title": "中国自动化网",
        "desc": "中国自动化网",
        "link": "http://www.ca800.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.instrument.com.cn&sz=128",
        "title": "仪器信息网",
        "desc": "仪器信息网",
        "link": "http://www.instrument.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.sensor.com.cn&sz=128",
        "title": "中国传感器",
        "desc": "中国传感器",
        "link": "http://www.sensor.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.bio-equip.com&sz=128",
        "title": "中国生物器材网",
        "desc": "中国生物器材网",
        "link": "http://www.bio-equip.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.phei.com.cn&sz=128",
        "title": "电子工业出版社",
        "desc": "电子工业出版社",
        "link": "http://www.phei.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=ea-china.com&sz=128",
        "title": "中国电气自动化网",
        "desc": "中国电气自动化网",
        "link": "http://ea-china.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.rfidworld.com.cn&sz=128",
        "title": "RFID世界网",
        "desc": "RFID世界网",
        "link": "http://www.rfidworld.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.china-cic.cn&sz=128",
        "title": "中国通信学会",
        "desc": "中国通信学会",
        "link": "https://www.china-cic.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ces.org.cn&sz=128",
        "title": "中国电工技术协会",
        "desc": "中国电工技术协会",
        "link": "http://www.ces.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cecc.org.cn&sz=128",
        "title": "中国电子商会",
        "desc": "中国电子商会",
        "link": "http://www.cecc.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.gkong.com&sz=128",
        "title": "中华工控网",
        "desc": "中华工控网",
        "link": "http://www.gkong.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.szeia.com&sz=128",
        "title": "深圳电子网",
        "desc": "深圳电子网",
        "link": "http://www.szeia.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.fpdisplay.com&sz=128",
        "title": "中华液晶网",
        "desc": "中华液晶网",
        "link": "http://www.fpdisplay.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinadz.com&sz=128",
        "title": "中国电子资源网",
        "desc": "中国电子资源网",
        "link": "http://www.chinadz.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.coema.org.cn&sz=128",
        "title": "中国光学光电子",
        "desc": "中国光学光电子",
        "link": "http://www.coema.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.21dianyuan.com&sz=128",
        "title": "世纪电源网",
        "desc": "世纪电源网",
        "link": "http://www.21dianyuan.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cps800.com&sz=128",
        "title": "电源在线",
        "desc": "电源在线",
        "link": "http://www.cps800.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinaem.com.cn&sz=128",
        "title": "中国电子商情",
        "desc": "中国电子商情",
        "link": "http://www.chinaem.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.semi.org.cn&sz=128",
        "title": "大半导体产业网",
        "desc": "大半导体产业网",
        "link": "http://www.semi.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cie-info.org.cn&sz=128",
        "title": "中国电子学会",
        "desc": "中国电子学会",
        "link": "http://www.cie-info.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cnii.com.cn&sz=128",
        "title": "中国信息产业网",
        "desc": "中国信息产业网",
        "link": "http://www.cnii.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=bdt.ccidnet.com&sz=128",
        "title": "半导体产业",
        "desc": "半导体产业",
        "link": "http://bdt.ccidnet.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ccidcom.com&sz=128",
        "title": "通信产业网",
        "desc": "通信产业网",
        "link": "http://www.ccidcom.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.laoyaoba.com&sz=128",
        "title": "集微网",
        "desc": "集微网",
        "link": "https://www.laoyaoba.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.eechina.com&sz=128",
        "title": "电子工程网",
        "desc": "电子工程网",
        "link": "http://www.eechina.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ic-ceca.org.cn&sz=128",
        "title": "中国电子元件行业协会",
        "desc": "中国电子元件行业协会",
        "link": "http://www.ic-ceca.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.21ic.com&sz=128",
        "title": "中国电子网",
        "desc": "中国电子网",
        "link": "http://www.21ic.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.p-e-china.com&sz=128",
        "title": "中国电力电子产业网",
        "desc": "中国电力电子产业网",
        "link": "http://www.p-e-china.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.dramx.com&sz=128",
        "title": "全球半导体观察",
        "desc": "全球半导体观察",
        "link": "https://www.dramx.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.news007.cn&sz=128",
        "title": "每日电讯",
        "desc": "每日电讯",
        "link": "http://www.news007.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cntronics.com&sz=128",
        "title": "电子元件技术网",
        "desc": "电子元件技术网",
        "link": "http://www.cntronics.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.51pcb.com.cn&sz=128",
        "title": "PCB在线",
        "desc": "PCB在线",
        "link": "http://www.51pcb.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=pcbcity.com.cn&sz=128",
        "title": "PCB网城",
        "desc": "PCB网城",
        "link": "http://pcbcity.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ca168.com&sz=128",
        "title": "中自网",
        "desc": "中自网",
        "link": "http://www.ca168.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=pdf.elecfans.com&sz=128",
        "title": "电子元器件查询网",
        "desc": "电子元器件查询网",
        "link": "http://pdf.elecfans.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.electronics-manufacturers.com&sz=128",
        "title": "electronics-manufacturers",
        "desc": "electronics-manufacturers",
        "link": "http://www.electronics-manufacturers.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.the-esb.com&sz=128",
        "title": "Electronics Source Book",
        "desc": "Electronics Source Book",
        "link": "http://www.the-esb.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=ee.cleversoul.com&sz=128",
        "title": "EE Hotsheet",
        "desc": "EE Hotsheet",
        "link": "http://ee.cleversoul.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.hobid.com&sz=128",
        "title": "hobid",
        "desc": "hobid",
        "link": "http://www.hobid.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.electric-find.com&sz=128",
        "title": "Electric-Find",
        "desc": "Electric-Find",
        "link": "http://www.electric-find.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.mectronic.com&sz=128",
        "title": "mectronic",
        "desc": "mectronic",
        "link": "http://www.mectronic.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.newelectronics.co.uk&sz=128",
        "title": "New Electronics",
        "desc": "New Electronics",
        "link": "http://www.newelectronics.co.uk/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.futureelectronics.com&sz=128",
        "title": "Future Electronics",
        "desc": "Future Electronics",
        "link": "http://www.futureelectronics.com/en/Pages/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.b2bic.com&sz=128",
        "title": "IC电子查询网",
        "desc": "IC电子查询网",
        "link": "http://www.b2bic.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.114ic.com&sz=128",
        "title": "电子元件交易网",
        "desc": "电子元件交易网",
        "link": "http://www.114ic.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.dzsc.com&sz=128",
        "title": "维库电子市场网",
        "desc": "维库电子市场网",
        "link": "http://www.dzsc.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.hkinventory.com&sz=128",
        "title": "香港电子库存",
        "desc": "香港电子库存",
        "link": "https://www.hkinventory.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.21ic.com.cn&sz=128",
        "title": "21IC中国电子网",
        "desc": "21IC中国电子网",
        "link": "http://www.21ic.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.1718cn.com&sz=128",
        "title": "中国仪器仪表大市场",
        "desc": "中国仪器仪表大市场",
        "link": "http://www.1718cn.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chem17.com&sz=128",
        "title": "中国化工仪器网",
        "desc": "中国化工仪器网",
        "link": "http://www.chem17.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ddgjw.com&sz=128",
        "title": "中国电动工具网",
        "desc": "中国电动工具网",
        "link": "http://www.ddgjw.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cnebuyer.com&sz=128",
        "title": "中采网",
        "desc": "中采网",
        "link": "http://www.cnebuyer.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.safetyemc.cn&sz=128",
        "title": "安规与电磁兼容网",
        "desc": "安规与电磁兼容网",
        "link": "http://www.safetyemc.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ec.hc360.com&sz=128",
        "title": "HC360慧聪网电子",
        "desc": "HC360慧聪网电子",
        "link": "http://www.ec.hc360.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ic37.com&sz=128",
        "title": "中国IC网",
        "desc": "中国IC网",
        "link": "http://www.ic37.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.oemresource.com&sz=128",
        "title": "制造资源网",
        "desc": "制造资源网",
        "link": "http://www.oemresource.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.18show.cn&sz=128",
        "title": "仪表展览网",
        "desc": "仪表展览网",
        "link": "http://www.18show.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chazuo.com&sz=128",
        "title": "插座网",
        "desc": "插座网",
        "link": "http://www.chazuo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cnelc.com&sz=128",
        "title": "中国工业电器网",
        "desc": "中国工业电器网",
        "link": "http://www.cnelc.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.21icsearch.com&sz=128",
        "title": "21IC芯片搜索",
        "desc": "21IC芯片搜索",
        "link": "http://www.21icsearch.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.hi1718.com&sz=128",
        "title": "维库仪器仪表网",
        "desc": "维库仪器仪表网",
        "link": "http://www.hi1718.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cecb2b.com&sz=128",
        "title": "元器件交易网",
        "desc": "元器件交易网",
        "link": "http://www.cecb2b.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ae17.com&sz=128",
        "title": "中国实验科学器材网",
        "desc": "中国实验科学器材网",
        "link": "http://www.ae17.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.globalsources.com.cn&sz=128",
        "title": "环球资源内贸网",
        "desc": "环球资源内贸网",
        "link": "http://www.globalsources.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.01dianzi.com&sz=128",
        "title": "第一电子网",
        "desc": "第一电子网",
        "link": "http://www.01dianzi.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.dxb2b.com&sz=128",
        "title": "电线网",
        "desc": "电线网",
        "link": "http://www.dxb2b.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.dianyuan.com&sz=128",
        "title": "电源网",
        "desc": "电源网",
        "link": "http://www.dianyuan.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.hqew.com&sz=128",
        "title": "华强电子网",
        "desc": "华强电子网",
        "link": "http://www.hqew.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.hvacr.cn&sz=128",
        "title": "空调制冷大市场",
        "desc": "空调制冷大市场",
        "link": "http://www.hvacr.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinahvacr.com&sz=128",
        "title": "中国空调制冷网",
        "desc": "中国空调制冷网",
        "link": "http://www.chinahvacr.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.54pc.com&sz=128",
        "title": "中国分析仪器网",
        "desc": "中国分析仪器网",
        "link": "http://www.54pc.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.xianlan315.com&sz=128",
        "title": "中国电线电缆网",
        "desc": "中国电线电缆网",
        "link": "http://www.xianlan315.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.kuyibu.com&sz=128",
        "title": "一步电子网",
        "desc": "一步电子网",
        "link": "http://www.kuyibu.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ic.net.cn&sz=128",
        "title": "IC交易网",
        "desc": "IC交易网",
        "link": "http://www.ic.net.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.086ic.cn&sz=128",
        "title": "国芯网",
        "desc": "国芯网",
        "link": "http://www.086ic.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.qic.com.cn&sz=128",
        "title": "全球IC采购网",
        "desc": "全球IC采购网",
        "link": "http://www.qic.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cnicic.com&sz=128",
        "title": "中国电子库存网",
        "desc": "中国电子库存网",
        "link": "http://www.cnicic.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.qooic.com&sz=128",
        "title": "库IC网",
        "desc": "库IC网",
        "link": "http://www.qooic.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.icqoso.com&sz=128",
        "title": "酷搜IC",
        "desc": "酷搜IC",
        "link": "http://www.icqoso.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.086ic.cn&sz=128",
        "title": "中国IC技术交易网",
        "desc": "中国IC技术交易网",
        "link": "http://www.086ic.cn/index.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.51dzw.com&sz=128",
        "title": "51电子网",
        "desc": "51电子网",
        "link": "http://www.51dzw.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.hqew.com&sz=128",
        "title": "华强电子网",
        "desc": "华强电子网",
        "link": "http://www.hqew.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.mmic.net.cn&sz=128",
        "title": "买卖IC网",
        "desc": "买卖IC网",
        "link": "http://www.mmic.net.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.114ic.com&sz=128",
        "title": "114IC电子网",
        "desc": "114IC电子网",
        "link": "http://www.114ic.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.yikuyi.com&sz=128",
        "title": "中国零件贸易网",
        "desc": "中国零件贸易网",
        "link": "https://www.yikuyi.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.iceasy.com&sz=128",
        "title": "IC易站",
        "desc": "IC易站",
        "link": "http://www.iceasy.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cecb2b.com&sz=128",
        "title": "元器件交易网",
        "desc": "元器件交易网",
        "link": "http://www.cecb2b.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.szlcsc.com&sz=128",
        "title": "电子元器件采购网",
        "desc": "电子元器件采购网",
        "link": "https://www.szlcsc.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=b2b.big-bit.com&sz=128",
        "title": "电子产品库",
        "desc": "电子产品库",
        "link": "http://b2b.big-bit.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ttic.cc&sz=128",
        "title": "天天IC网",
        "desc": "天天IC网",
        "link": "http://www.ttic.cc/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.seekic.com&sz=128",
        "title": "seekic",
        "desc": "seekic",
        "link": "http://www.seekic.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.usbid.com&sz=128",
        "title": "usbid",
        "desc": "usbid",
        "link": "http://www.usbid.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.sg-electronics.com&sz=128",
        "title": "Electronics Industry",
        "desc": "Electronics Industry",
        "link": "http://www.sg-electronics.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.electronics1.com&sz=128",
        "title": "electronics1",
        "desc": "electronics1",
        "link": "http://www.electronics1.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinadz.com&sz=128",
        "title": "中国电子资源网",
        "desc": "中国电子资源网",
        "link": "http://www.chinadz.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=bbs.21ic.com&sz=128",
        "title": "电子工程师社区",
        "desc": "电子工程师社区",
        "link": "http://bbs.21ic.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=bbs.smthome.net&sz=128",
        "title": "SMT之家",
        "desc": "SMT之家",
        "link": "http://bbs.smthome.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.gongkong.com&sz=128",
        "title": "中国工控论坛",
        "desc": "中国工控论坛",
        "link": "http://www.gongkong.com/Forum/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=bbs.elecfans.com&sz=128",
        "title": "电子发烧友论坛",
        "desc": "电子发烧友论坛",
        "link": "http://bbs.elecfans.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=bbs.21ic.com&sz=128",
        "title": "中国电子网技术论坛",
        "desc": "中国电子网技术论坛",
        "link": "http://bbs.21ic.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.amobbs.com&sz=128",
        "title": "阿莫电子论坛",
        "desc": "阿莫电子论坛",
        "link": "https://www.amobbs.com/index.php"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=hr.eccn.com&sz=128",
        "title": "中电人才网",
        "desc": "中电人才网",
        "link": "http://hr.eccn.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.51dzrc.com&sz=128",
        "title": "中国电子电器人才网",
        "desc": "中国电子电器人才网",
        "link": "http://www.51dzrc.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.elecjob.cn&sz=128",
        "title": "中国电子招牌网",
        "desc": "中国电子招牌网",
        "link": "http://www.elecjob.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=gd.epjob88.com&sz=128",
        "title": "光电英才网",
        "desc": "光电英才网",
        "link": "http://gd.epjob88.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.dianzirc.cn&sz=128",
        "title": "电子人才网",
        "desc": "电子人才网",
        "link": "http://www.dianzirc.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.batthr.com&sz=128",
        "title": "电池招聘网",
        "desc": "电池招聘网",
        "link": "http://www.batthr.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=event.hktdc.com&sz=128",
        "title": "香港电子展",
        "desc": "香港电子展",
        "link": "https://event.hktdc.com/fair/hkelectronicsfairse-tc"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.icef.com.cn&sz=128",
        "title": "中国电子展",
        "desc": "中国电子展",
        "link": "http://www.icef.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cnibf.net&sz=128",
        "title": "上海电池展",
        "desc": "上海电池展",
        "link": "http://www.cnibf.net/cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.goemex.com&sz=128",
        "title": "苏州电子信息博览会",
        "desc": "苏州电子信息博览会",
        "link": "http://www.goemex.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.computextaipei.com.tw&sz=128",
        "title": "台北国际电脑展",
        "desc": "台北国际电脑展",
        "link": "https://www.computextaipei.com.tw/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.taitronics.tw&sz=128",
        "title": "台北电子产业科技展",
        "desc": "台北电子产业科技展",
        "link": "https://www.taitronics.tw/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.nepconvietnam.com&sz=128",
        "title": "越南电子展",
        "desc": "越南电子展",
        "link": "https://www.nepconvietnam.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.comexitshow.com.sg&sz=128",
        "title": "COMEX消费电子展(新加坡)",
        "desc": "COMEX消费电子展(新加坡)",
        "link": "https://www.comexitshow.com.sg/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.japan-it-spring.jp&sz=128",
        "title": "东京IT展",
        "desc": "东京IT展",
        "link": "https://www.japan-it-spring.jp/ja-jp/about/cloud.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ceatec.com&sz=128",
        "title": "日本高新技术展",
        "desc": "日本高新技术展",
        "link": "https://www.ceatec.com/ja/application/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.batteryjapan.jp&sz=128",
        "title": "日本二次电池展",
        "desc": "日本二次电池展",
        "link": "https://www.batteryjapan.jp/ja-jp.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.nepcon.jp&sz=128",
        "title": "日本电子制造设备及微电子展",
        "desc": "日本电子制造设备及微电子展",
        "link": "https://www.nepcon.jp/ja-jp.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.smtpcb.org&sz=128",
        "title": "韩国电子制程展",
        "desc": "韩国电子制程展",
        "link": "http://www.smtpcb.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.kes.org&sz=128",
        "title": "韩国电子展",
        "desc": "韩国电子展",
        "link": "http://www.kes.org/kor/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.worlditshow.co.kr&sz=128",
        "title": "韩国电子展",
        "desc": "韩国电子展",
        "link": "http://www.worlditshow.co.kr/kor/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.knowledgegroupco.com&sz=128",
        "title": "NEPCON 马来西亚",
        "desc": "NEPCON 马来西亚",
        "link": "http://www.knowledgegroupco.com/events/nepcon/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.nepconthailand.com&sz=128",
        "title": "泰国电子展",
        "desc": "泰国电子展",
        "link": "https://www.nepconthailand.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.bangkok-rhvac.com&sz=128",
        "title": "泰国空调制冷展",
        "desc": "泰国空调制冷展",
        "link": "https://www.bangkok-rhvac.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.gitex.com&sz=128",
        "title": "迪拜电子展",
        "desc": "迪拜电子展",
        "link": "https://www.gitex.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.middleeastelectricity.com&sz=128",
        "title": "迪拜电力/灯具/新能源展",
        "desc": "迪拜电力/灯具/新能源展",
        "link": "https://www.middleeastelectricity.com/en/home.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.inatronics-exhibition.net&sz=128",
        "title": "印尼电子及零组件展",
        "desc": "印尼电子及零组件展",
        "link": "http://www.inatronics-exhibition.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=cairoict.com&sz=128",
        "title": "开罗电子展",
        "desc": "开罗电子展",
        "link": "https://cairoict.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=eletrolarshow.com.br&sz=128",
        "title": "巴西电子展",
        "desc": "巴西电子展",
        "link": "http://eletrolarshow.com.br/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.indiaelectronicsweek.com&sz=128",
        "title": "新德里电子元器展",
        "desc": "新德里电子元器展",
        "link": "https://www.indiaelectronicsweek.com/efy-expo-2"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.expoelectronica.ru&sz=128",
        "title": "莫斯科电子元器件展",
        "desc": "莫斯科电子元器件展",
        "link": "http://www.expoelectronica.ru/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.elektro-expo.ru&sz=128",
        "title": "莫斯科电力电子展",
        "desc": "莫斯科电力电子展",
        "link": "http://www.elektro-expo.ru/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=photoforum.pmd-forum.ru&sz=128",
        "title": "莫斯科消费电子/影像展",
        "desc": "莫斯科消费电子/影像展",
        "link": "https://photoforum.pmd-forum.ru/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.bettshow.com&sz=128",
        "title": "英国教育设备与技术展",
        "desc": "英国教育设备与技术展",
        "link": "https://www.bettshow.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.infosecurityeurope.com&sz=128",
        "title": "伦敦计算机信息系统安全展",
        "desc": "伦敦计算机信息系统安全展",
        "link": "https://www.infosecurityeurope.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=pcim.mesago.com&sz=128",
        "title": "纽伦堡电子展",
        "desc": "纽伦堡电子展",
        "link": "https://pcim.mesago.com/events/en.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cebit.de&sz=128",
        "title": "汉诺威IT展",
        "desc": "汉诺威IT展",
        "link": "https://www.cebit.de/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=b2b.ifa-berlin.com&sz=128",
        "title": "柏林消费类电子及家用电器展",
        "desc": "柏林消费类电子及家用电器展",
        "link": "https://b2b.ifa-berlin.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=electronica.de&sz=128",
        "title": "慕尼黑电子元器件展",
        "desc": "慕尼黑电子元器件展",
        "link": "https://electronica.de/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.coilwindingexpo.com&sz=128",
        "title": "德国线圈绝缘材料及电器制造展",
        "desc": "德国线圈绝缘材料及电器制造展",
        "link": "https://www.coilwindingexpo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.electronicachina.com.cn&sz=128",
        "title": "慕尼黑上海电子展",
        "desc": "慕尼黑上海电子展",
        "link": "http://www.electronicachina.com.cn/zh-cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ifa-berlin.com&sz=128",
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
        "icon": "https://www.google.com/s2/favicons?domain=www.jbc.org&sz=128",
        "title": "生物化学期刊",
        "desc": "生物化学期刊",
        "link": "http://www.jbc.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.sibcb.ac.cn&sz=128",
        "title": "上海生物化学研究所",
        "desc": "上海生物化学研究所",
        "link": "http://www.sibcb.ac.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.scrri.com&sz=128",
        "title": "上海化学试剂研究所",
        "desc": "上海化学试剂研究所",
        "link": "http://www.scrri.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.sic.ac.cn&sz=128",
        "title": "中科院上海硅酸盐研究",
        "desc": "中科院上海硅酸盐研究",
        "link": "http://www.sic.ac.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.epoxy-e.com&sz=128",
        "title": "中国环氧树脂网",
        "desc": "中国环氧树脂网",
        "link": "http://www.epoxy-e.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.nbchem.com&sz=128",
        "title": "中国华东化工网",
        "desc": "中国华东化工网",
        "link": "http://www.nbchem.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chemworld.com.cn&sz=128",
        "title": "化工世界网",
        "desc": "化工世界网",
        "link": "http://www.chemworld.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chem99.com&sz=128",
        "title": "卓创网-石油化工塑料橡胶",
        "desc": "卓创网-石油化工塑料橡胶",
        "link": "http://www.chem99.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cip.com.cn&sz=128",
        "title": "化学工业出版社",
        "desc": "化学工业出版社",
        "link": "http://www.cip.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ccaon.com&sz=128",
        "title": "中国氯碱网",
        "desc": "中国氯碱网",
        "link": "http://www.ccaon.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.coatingol.com&sz=128",
        "title": "中国涂料在线",
        "desc": "中国涂料在线",
        "link": "http://www.coatingol.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cppia.com.cn&sz=128",
        "title": "中国塑协网",
        "desc": "中国塑协网",
        "link": "http://www.cppia.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinalubricant.com&sz=128",
        "title": "中国润油网",
        "desc": "中国润油网",
        "link": "http://www.chinalubricant.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.sepu.net&sz=128",
        "title": "中国色谱网",
        "desc": "中国色谱网",
        "link": "http://www.sepu.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.nrcc.com.cn&sz=128",
        "title": "国全总局化学品登记中心",
        "desc": "国全总局化学品登记中心",
        "link": "http://www.nrcc.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chemn.com&sz=128",
        "title": "中国开门化工商务网",
        "desc": "中国开门化工商务网",
        "link": "http://www.chemn.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.sxhgw.cn&sz=128",
        "title": "山西化工网",
        "desc": "山西化工网",
        "link": "http://www.sxhgw.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.organicchem.com&sz=128",
        "title": "有机化学网",
        "desc": "有机化学网",
        "link": "http://www.organicchem.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinapu.com&sz=128",
        "title": "贝茨聚氨酯网",
        "desc": "贝茨聚氨酯网",
        "link": "http://www.chinapu.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cncatalyst.com&sz=128",
        "title": "中国催化剂网",
        "desc": "中国催化剂网",
        "link": "http://www.cncatalyst.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chemistrymag.org&sz=128",
        "title": "国际网上化学报",
        "desc": "国际网上化学报",
        "link": "http://www.chemistrymag.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cechem.net&sz=128",
        "title": "华东化工网",
        "desc": "华东化工网",
        "link": "http://www.cechem.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinasepa.com&sz=128",
        "title": "中华过滤分离网",
        "desc": "中华过滤分离网",
        "link": "http://www.chinasepa.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinacmb.com.cn&sz=128",
        "title": "中国色母粒网",
        "desc": "中国色母粒网",
        "link": "http://www.chinacmb.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.surfactant.com.cn&sz=128",
        "title": "中国表面活性剂网",
        "desc": "中国表面活性剂网",
        "link": "http://www.surfactant.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.bomo123.com&sz=128",
        "title": "薄膜之家信息网",
        "desc": "薄膜之家信息网",
        "link": "http://www.bomo123.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.polymer.cn&sz=128",
        "title": "中国聚合物网",
        "desc": "中国聚合物网",
        "link": "http://www.polymer.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.16ds.com&sz=128",
        "title": "方都化工网",
        "desc": "方都化工网",
        "link": "http://www.16ds.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cippe.net&sz=128",
        "title": "全球石油化工网",
        "desc": "全球石油化工网",
        "link": "http://www.cippe.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cria.org.cn&sz=128",
        "title": "中国橡胶工业协会",
        "desc": "中国橡胶工业协会",
        "link": "http://www.cria.org.cn/criawebsite/default.aspx"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=chem.icxo.com&sz=128",
        "title": "化工经理人",
        "desc": "化工经理人",
        "link": "http://chem.icxo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ccpitchem.org.cn&sz=128",
        "title": "中国国际商会化工行业商会",
        "desc": "中国国际商会化工行业商会",
        "link": "http://www.ccpitchem.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chem99.com&sz=128",
        "title": "卓创资讯化工",
        "desc": "卓创资讯化工",
        "link": "http://www.chem99.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=news.chemnet.com&sz=128",
        "title": "化工资讯",
        "desc": "化工资讯",
        "link": "http://news.chemnet.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=pu.chem366.com&sz=128",
        "title": "天天化工网",
        "desc": "天天化工网",
        "link": "http://pu.chem366.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chemicalweekly.com&sz=128",
        "title": "印度化工周刊",
        "desc": "印度化工周刊",
        "link": "https://www.chemicalweekly.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chemicaldaily.co.jp&sz=128",
        "title": "日本化学工业日报社",
        "desc": "日本化学工业日报社",
        "link": "http://www.chemicaldaily.co.jp/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chemall.com.cn&sz=128",
        "title": "中国石油和化工网",
        "desc": "中国石油和化工网",
        "link": "http://www.chemall.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.idochem.com&sz=128",
        "title": "爱度化工网",
        "desc": "爱度化工网",
        "link": "http://www.idochem.com/index.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ichemistry.cn&sz=128",
        "title": "爱化学",
        "desc": "爱化学",
        "link": "http://www.ichemistry.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chemexper.com&sz=128",
        "title": "chemexper",
        "desc": "chemexper",
        "link": "http://www.chemexper.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.paktechsearch.com&sz=128",
        "title": "paktechsearch",
        "desc": "paktechsearch",
        "link": "http://www.paktechsearch.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chemindustry.com&sz=128",
        "title": "Chemical Search Engine",
        "desc": "Chemical Search Engine",
        "link": "http://www.chemindustry.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chemicalregister.com&sz=128",
        "title": "chemicalregister",
        "desc": "chemicalregister",
        "link": "http://www.chemicalregister.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chemblink.com&sz=128",
        "title": "chemlink",
        "desc": "chemlink",
        "link": "http://www.chemblink.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chemicalinfo.com&sz=128",
        "title": "chemicalinfo",
        "desc": "chemicalinfo",
        "link": "http://www.chemicalinfo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.industrysearch.com.au&sz=128",
        "title": "industrysearch",
        "desc": "industrysearch",
        "link": "http://www.industrysearch.com.au/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chemagility.com&sz=128",
        "title": "chemagility",
        "desc": "chemagility",
        "link": "http://www.chemagility.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chem.com&sz=128",
        "title": "chem",
        "desc": "chem",
        "link": "http://www.chem.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.rdchemicals.com&sz=128",
        "title": "rdchemicals",
        "desc": "rdchemicals",
        "link": "http://www.rdchemicals.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chemolink.com&sz=128",
        "title": "chemolink",
        "desc": "chemolink",
        "link": "http://www.chemolink.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.seekchem.com&sz=128",
        "title": "seekchem",
        "desc": "seekchem",
        "link": "http://www.seekchem.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chemweb.com&sz=128",
        "title": "chemweb",
        "desc": "chemweb",
        "link": "http://www.chemweb.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.needsinfo.com&sz=128",
        "title": "needsinfo",
        "desc": "needsinfo",
        "link": "http://www.needsinfo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cechem.net&sz=128",
        "title": "华东化工网",
        "desc": "华东化工网",
        "link": "http://www.cechem.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.hxchem.net&sz=128",
        "title": "华夏化工网",
        "desc": "华夏化工网",
        "link": "http://www.hxchem.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chem17.com&sz=128",
        "title": "中国化工仪器网",
        "desc": "中国化工仪器网",
        "link": "http://www.chem17.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinachemnet.com&sz=128",
        "title": "中国化工",
        "desc": "中国化工",
        "link": "http://www.chinachemnet.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ccen.net&sz=128",
        "title": "中国化工设备网",
        "desc": "中国化工设备网",
        "link": "http://www.ccen.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chemnet.com.cn&sz=128",
        "title": "中国化工网",
        "desc": "中国化工网",
        "link": "http://www.chemnet.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chemindex.com&sz=128",
        "title": "化工搜索",
        "desc": "化工搜索",
        "link": "http://www.chemindex.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.dry.com.cn&sz=128",
        "title": "中华干燥网",
        "desc": "中华干燥网",
        "link": "http://www.dry.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.plasway.com&sz=128",
        "title": "中国塑料商务网",
        "desc": "中国塑料商务网",
        "link": "http://www.plasway.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chem-y.com&sz=128",
        "title": "有机化工网",
        "desc": "有机化工网",
        "link": "http://www.chem-y.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.yxx.com.cn&sz=128",
        "title": "中国注塑网",
        "desc": "中国注塑网",
        "link": "http://www.yxx.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.51tbl.com&sz=128",
        "title": "中华搪玻璃网",
        "desc": "中华搪玻璃网",
        "link": "http://www.51tbl.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.glass.com.cn&sz=128",
        "title": "中国玻璃网",
        "desc": "中国玻璃网",
        "link": "http://www.glass.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.zssl.net&sz=128",
        "title": "中国再生塑料网",
        "desc": "中国再生塑料网",
        "link": "http://www.zssl.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ccf.com.cn&sz=128",
        "title": "中国化纤信息网",
        "desc": "中国化纤信息网",
        "link": "http://www.ccf.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chemcp.com&sz=128",
        "title": "中国化工产品网",
        "desc": "中国化工产品网",
        "link": "http://www.chemcp.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=china.guidechem.com&sz=128",
        "title": "盖德化工网",
        "desc": "盖德化工网",
        "link": "https://china.guidechem.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.51pla.com&sz=128",
        "title": "全球塑胶网",
        "desc": "全球塑胶网",
        "link": "http://www.51pla.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.su-liao.com&sz=128",
        "title": "中国塑料行业网",
        "desc": "中国塑料行业网",
        "link": "http://www.su-liao.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ccecn.com&sz=128",
        "title": "中国化工电子商务网",
        "desc": "中国化工电子商务网",
        "link": "http://www.ccecn.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=cn.chemnet.com&sz=128",
        "title": "化工综合服务商",
        "desc": "化工综合服务商",
        "link": "http://cn.chemnet.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chemmade.com&sz=128",
        "title": "中国化工制造网",
        "desc": "中国化工制造网",
        "link": "http://www.chemmade.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.qdqx.net&sz=128",
        "title": "化工之家",
        "desc": "化工之家",
        "link": "http://www.qdqx.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chembb.com&sz=128",
        "title": "中化网",
        "desc": "中化网",
        "link": "http://www.chembb.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=huagong.huangye88.com&sz=128",
        "title": "88化工网",
        "desc": "88化工网",
        "link": "http://huagong.huangye88.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chemcp.com&sz=128",
        "title": "化工产品网",
        "desc": "化工产品网",
        "link": "http://www.chemcp.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chem234.com&sz=128",
        "title": "中华化工网",
        "desc": "中华化工网",
        "link": "http://www.chem234.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.tuliao86.com&sz=128",
        "title": "涂料网",
        "desc": "涂料网",
        "link": "http://www.tuliao86.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chemworld.com.cn&sz=128",
        "title": "化工世界网",
        "desc": "化工世界网",
        "link": "http://www.chemworld.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.huagongquan.com&sz=128",
        "title": "化工圈",
        "desc": "化工圈",
        "link": "https://www.huagongquan.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.31dye.com&sz=128",
        "title": "染料网",
        "desc": "染料网",
        "link": "http://www.31dye.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chemnet.com&sz=128",
        "title": "chemnet",
        "desc": "chemnet",
        "link": "http://www.chemnet.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.okchem.com&sz=128",
        "title": "OKCHEM全球",
        "desc": "OKCHEM全球",
        "link": "https://www.okchem.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chemblink.com&sz=128",
        "title": "chemblink",
        "desc": "chemblink",
        "link": "http://www.chemblink.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chemicalonline.com&sz=128",
        "title": "chemicalonline",
        "desc": "chemicalonline",
        "link": "http://www.chemicalonline.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chemicalbook.com&sz=128",
        "title": "chemicalbook",
        "desc": "chemicalbook",
        "link": "http://www.chemicalbook.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.lookchem.com&sz=128",
        "title": "lookchem",
        "desc": "lookchem",
        "link": "http://www.lookchem.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chemnet.com&sz=128",
        "title": "chemnet",
        "desc": "chemnet",
        "link": "http://www.chemnet.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.21chemnet.com&sz=128",
        "title": "21chemnet",
        "desc": "21chemnet",
        "link": "http://www.21chemnet.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chemicalgallery.com&sz=128",
        "title": "chemicalgallery",
        "desc": "chemicalgallery",
        "link": "http://www.chemicalgallery.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chemicalregister.com&sz=128",
        "title": "chemicalregister",
        "desc": "chemicalregister",
        "link": "http://www.chemicalregister.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chemexper.com&sz=128",
        "title": "chemexper",
        "desc": "chemexper",
        "link": "http://www.chemexper.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chembuyersguide.com&sz=128",
        "title": "ChemBuyersGuide",
        "desc": "ChemBuyersGuide",
        "link": "http://www.chembuyersguide.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.buyersguidechem.com&sz=128",
        "title": "Buyersguidechem",
        "desc": "Buyersguidechem",
        "link": "http://www.buyersguidechem.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=chemondis.com&sz=128",
        "title": "Chemondis",
        "desc": "Chemondis",
        "link": "https://chemondis.com/marketplace/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=bbs.mahoupao.com&sz=128",
        "title": "马后炮化工",
        "desc": "马后炮化工",
        "link": "https://bbs.mahoupao.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=bbs.hcbbs.com&sz=128",
        "title": "海川化工论坛",
        "desc": "海川化工论坛",
        "link": "http://bbs.hcbbs.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=bbs.hg707.com&sz=128",
        "title": "化工707论坛",
        "desc": "化工707论坛",
        "link": "http://bbs.hg707.com/forum.php"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=bbs.gongkong.com&sz=128",
        "title": "精细化工论坛",
        "desc": "精细化工论坛",
        "link": "http://bbs.gongkong.com/Industry/Finechemical.htm"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=bbs.hgcad.com&sz=128",
        "title": "化工CAD论坛",
        "desc": "化工CAD论坛",
        "link": "http://bbs.hgcad.com/forum.php"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chenhr.com&sz=128",
        "title": "化工英才网",
        "desc": "化工英才网",
        "link": "http://www.chenhr.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.mouldjob.com&sz=128",
        "title": "中国模具人才网",
        "desc": "中国模具人才网",
        "link": "http://www.mouldjob.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chemrc.com&sz=128",
        "title": "化工人才网",
        "desc": "化工人才网",
        "link": "http://www.chemrc.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.hgrencai.com&sz=128",
        "title": "中国化工人才网",
        "desc": "中国化工人才网",
        "link": "http://www.hgrencai.com/Person/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.iranplast.ir&sz=128",
        "title": "伊朗塑胶工业博览会",
        "desc": "伊朗塑胶工业博览会",
        "link": "http://www.iranplast.ir/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.interplasthailand.com&sz=128",
        "title": "泰国国际塑料展",
        "desc": "泰国国际塑料展",
        "link": "https://www.interplasthailand.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.plastivision.org&sz=128",
        "title": "印度孟买塑料展",
        "desc": "印度孟买塑料展",
        "link": "https://www.plastivision.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chanchao.com.tw&sz=128",
        "title": "越南橡塑胶工业展",
        "desc": "越南橡塑胶工业展",
        "link": "https://www.chanchao.com.tw/Vietnamplas/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ipfjapan.jp&sz=128",
        "title": "日本国际塑胶展",
        "desc": "日本国际塑胶展",
        "link": "https://www.ipfjapan.jp/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.plastex-online.com&sz=128",
        "title": "埃及塑料工业展",
        "desc": "埃及塑料工业展",
        "link": "http://www.plastex-online.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=proplas.propakafrica.co.za&sz=128",
        "title": "南非塑料工业展",
        "desc": "南非塑料工业展",
        "link": "https://proplas.propakafrica.co.za/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=plasteurasia.com&sz=128",
        "title": "土耳其塑料工业展",
        "desc": "土耳其塑料工业展",
        "link": "http://plasteurasia.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinaplasonline.com&sz=128",
        "title": "CHINAPLAS国际橡塑展",
        "desc": "CHINAPLAS国际橡塑展",
        "link": "https://www.chinaplasonline.com/CPS19/idx/simp"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.interlak-expo.ru&sz=128",
        "title": "俄罗斯国际涂料展",
        "desc": "俄罗斯国际涂料展",
        "link": "http://www.interlak-expo.ru/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.k-online.de&sz=128",
        "title": "德国K展",
        "desc": "德国K展",
        "link": "https://www.k-online.de/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.european-coatings-show.com&sz=128",
        "title": "纽伦堡涂料展",
        "desc": "纽伦堡涂料展",
        "link": "https://www.european-coatings-show.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.fakuma-messe.de&sz=128",
        "title": "德国塑料加工展",
        "desc": "德国塑料加工展",
        "link": "https://www.fakuma-messe.de/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chemistry-expo.ru&sz=128",
        "title": "俄罗斯国际化工展览会",
        "desc": "俄罗斯国际化工展览会",
        "link": "http://www.chemistry-expo.ru/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.npe.org&sz=128",
        "title": "美国国际塑料展",
        "desc": "美国国际塑料展",
        "link": "https://www.npe.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=admtoronto.com&sz=128",
        "title": "加拿大塑料工业展",
        "desc": "加拿大塑料工业展",
        "link": "https://admtoronto.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.plastimagen.com.mx&sz=128",
        "title": "墨西哥塑料橡胶工业展",
        "desc": "墨西哥塑料橡胶工业展",
        "link": "https://www.plastimagen.com.mx/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.expoplastperu.com&sz=128",
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
        "icon": "https://www.google.com/s2/favicons?domain=www.craft-fair.co.uk&sz=128",
        "title": "英国工艺品网",
        "desc": "英国工艺品网",
        "link": "http://www.craft-fair.co.uk/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.zggjysw.com&sz=128",
        "title": "中国国家艺术网",
        "desc": "中国国家艺术网",
        "link": "http://www.zggjysw.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.art-news.com.cn&sz=128",
        "title": "中国艺术收藏网",
        "desc": "中国艺术收藏网",
        "link": "http://www.art-news.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=art.china.cn&sz=128",
        "title": "艺术中国",
        "desc": "艺术中国",
        "link": "http://art.china.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chyxx.com&sz=128",
        "title": "工艺品行业资讯",
        "desc": "工艺品行业资讯",
        "link": "http://www.chyxx.com/industry/gongyipin/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinayq.com&sz=128",
        "title": "神州乐器网",
        "desc": "神州乐器网",
        "link": "http://www.chinayq.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cnarts.net&sz=128",
        "title": "中国艺术品网",
        "desc": "中国艺术品网",
        "link": "http://www.cnarts.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=news.ctoy.com.cn&sz=128",
        "title": "玩具资讯",
        "desc": "玩具资讯",
        "link": "https://news.ctoy.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cnarts.net&sz=128",
        "title": "中国艺术品",
        "desc": "中国艺术品",
        "link": "http://www.cnarts.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.gift.hc360.com&sz=128",
        "title": "慧聪工艺品",
        "desc": "慧聪工艺品",
        "link": "http://www.gift.hc360.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.mycollect.net&sz=128",
        "title": "华夏收藏网",
        "desc": "华夏收藏网",
        "link": "http://www.mycollect.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinawatchnet.com&sz=128",
        "title": "中国钟表网",
        "desc": "中国钟表网",
        "link": "http://www.chinawatchnet.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.0755zb.com&sz=128",
        "title": "深圳珠宝网",
        "desc": "深圳珠宝网",
        "link": "http://www.0755zb.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.lidodo.com&sz=128",
        "title": "礼多多",
        "desc": "礼多多",
        "link": "http://www.lidodo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.525zb.com&sz=128",
        "title": "珠宝之家",
        "desc": "珠宝之家",
        "link": "http://www.525zb.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ywtoys.org&sz=128",
        "title": "义务玩具网",
        "desc": "义务玩具网",
        "link": "http://www.ywtoys.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.easttoys.com&sz=128",
        "title": "东方玩具网",
        "desc": "东方玩具网",
        "link": "http://www.easttoys.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.watchtop.com&sz=128",
        "title": "watch top",
        "desc": "watch top",
        "link": "http://www.watchtop.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.craftschina.net&sz=128",
        "title": "中国工艺品信息网",
        "desc": "中国工艺品信息网",
        "link": "http://www.craftschina.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.wto168.net&sz=128",
        "title": "国际珠宝网",
        "desc": "国际珠宝网",
        "link": "http://www.wto168.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.gift12345.com&sz=128",
        "title": "工礼网",
        "desc": "工礼网",
        "link": "http://www.gift12345.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ctaoci.com&sz=128",
        "title": "中华陶瓷网",
        "desc": "中华陶瓷网",
        "link": "http://www.ctaoci.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.glasses.com.cn&sz=128",
        "title": "中国眼镜网",
        "desc": "中国眼镜网",
        "link": "http://www.glasses.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ctoy.com.cn&sz=128",
        "title": "中外玩具礼品网",
        "desc": "中外玩具礼品网",
        "link": "http://www.ctoy.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.giftcity.cn&sz=128",
        "title": "中国礼品城网",
        "desc": "中国礼品城网",
        "link": "http://www.giftcity.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.tohair.cn&sz=128",
        "title": "中国发制品贸易网",
        "desc": "中国发制品贸易网",
        "link": "http://www.tohair.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.zjypw.com&sz=128",
        "title": "中国宗教用品网",
        "desc": "中国宗教用品网",
        "link": "http://www.zjypw.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.mngyp.com&sz=128",
        "title": "浙南工艺品网",
        "desc": "浙南工艺品网",
        "link": "http://www.mngyp.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.toybase.cn&sz=128",
        "title": "玩具基地网",
        "desc": "玩具基地网",
        "link": "http://www.toybase.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.315gift.com&sz=128",
        "title": "好礼多",
        "desc": "好礼多",
        "link": "http://www.315gift.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.yichao.cn&sz=128",
        "title": "隐形眼镜网",
        "desc": "隐形眼镜网",
        "link": "http://www.yichao.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.lipingov.cn&sz=128",
        "title": "中国礼品网",
        "desc": "中国礼品网",
        "link": "http://www.lipingov.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cnlipin.cn&sz=128",
        "title": "全全礼品",
        "desc": "全全礼品",
        "link": "http://www.cnlipin.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.gypw.com&sz=128",
        "title": "中国工艺品网",
        "desc": "中国工艺品网",
        "link": "http://www.gypw.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=lipin.huangye88.com&sz=128",
        "title": "88礼品网",
        "desc": "88礼品网",
        "link": "http://lipin.huangye88.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=lipin.b2b168.com&sz=128",
        "title": "中国工艺礼品网",
        "desc": "中国工艺礼品网",
        "link": "https://lipin.b2b168.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cn5135.com&sz=128",
        "title": "无忧礼品网",
        "desc": "无忧礼品网",
        "link": "http://www.cn5135.com/gift/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.lipin-bj.cn&sz=128",
        "title": "古韵礼品网",
        "desc": "古韵礼品网",
        "link": "http://www.lipin-bj.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ywart.com&sz=128",
        "title": "原创艺术品电商",
        "desc": "原创艺术品电商",
        "link": "https://www.ywart.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.xuanliyi.com&sz=128",
        "title": "选礼易",
        "desc": "选礼易",
        "link": "https://www.xuanliyi.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.zhongguozhuwang.com&sz=128",
        "title": "中国竹网",
        "desc": "中国竹网",
        "link": "http://www.zhongguozhuwang.com/index.do"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=enjoy.1688.com&sz=128",
        "title": "工艺礼品市场",
        "desc": "工艺礼品市场",
        "link": "https://enjoy.1688.com/gongyilipin"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=bbs.sssc.cn&sz=128",
        "title": "盛世收藏论坛",
        "desc": "盛世收藏论坛",
        "link": "http://bbs.sssc.cn/forum.php"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.giabbs.com&sz=128",
        "title": "珠宝大家坛",
        "desc": "珠宝大家坛",
        "link": "http://www.giabbs.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.mega-show.com&sz=128",
        "title": "香港礼品展",
        "desc": "香港礼品展",
        "link": "https://www.mega-show.com/en-index.php"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.giftshow.co.jp&sz=128",
        "title": "日本礼品展",
        "desc": "日本礼品展",
        "link": "https://www.giftshow.co.jp/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.lifestyle-expo.jp&sz=128",
        "title": "东京礼品/消费品展",
        "desc": "东京礼品/消费品展",
        "link": "https://www.lifestyle-expo.jp/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=homeandgift.co.uk&sz=128",
        "title": "英国国际家庭用品及礼品展",
        "desc": "英国国际家庭用品及礼品展",
        "link": "https://homeandgift.co.uk/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=christmasworld.messefrankfurt.com&sz=128",
        "title": "法兰克福圣诞礼品展",
        "desc": "法兰克福圣诞礼品展",
        "link": "https://christmasworld.messefrankfurt.com/frankfurt/en.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.asdonline.com&sz=128",
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
        "icon": "https://www.google.com/s2/favicons?domain=www.csp.gov.cn&sz=128",
        "title": "中国公共安全认证网",
        "desc": "中国公共安全认证网",
        "link": "http://www.csp.gov.cn/index.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=af360.com&sz=128",
        "title": "东北安博会",
        "desc": "东北安博会",
        "link": "http://af360.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.secu.hc360.com&sz=128",
        "title": "慧聪安防网",
        "desc": "慧聪安防网",
        "link": "http://www.secu.hc360.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.sh-anfang.org&sz=128",
        "title": "上海安防协会",
        "desc": "上海安防协会",
        "link": "http://www.sh-anfang.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.afzhan.com&sz=128",
        "title": "安防展览网",
        "desc": "安防展览网",
        "link": "http://www.afzhan.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ga.net.cn&sz=128",
        "title": "公安部安全产品行业信息中心",
        "desc": "公安部安全产品行业信息中心",
        "link": "http://www.ga.net.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=security.asmag.com.cn&sz=128",
        "title": "安防知识网",
        "desc": "安防知识网",
        "link": "http://security.asmag.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.anquan.com.cn&sz=128",
        "title": "安全文化网",
        "desc": "安全文化网",
        "link": "http://www.anquan.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.china-fire.com&sz=128",
        "title": "中国消防网",
        "desc": "中国消防网",
        "link": "http://www.china-fire.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=security.zol.com.cn&sz=128",
        "title": "中关村安防",
        "desc": "中关村安防",
        "link": "http://security.zol.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ofweek.com&sz=128",
        "title": "安防网",
        "desc": "安防网",
        "link": "https://www.ofweek.com/security/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.bspia.com&sz=128",
        "title": "北京安全防范行业协会",
        "desc": "北京安全防范行业协会",
        "link": "http://www.bspia.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chyxx.com&sz=128",
        "title": "安防行业资讯",
        "desc": "安防行业资讯",
        "link": "http://www.chyxx.com/industry/anfang1/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.esafety.cn&sz=128",
        "title": "易安网",
        "desc": "易安网",
        "link": "http://www.esafety.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.bizcspia.com&sz=128",
        "title": "中国安全和保护行业协会",
        "desc": "中国安全和保护行业协会",
        "link": "http://www.bizcspia.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.sh-anfang.org&sz=128",
        "title": "上海安防",
        "desc": "上海安防",
        "link": "http://www.sh-anfang.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.21csp.com.cn&sz=128",
        "title": "中国安防行业网",
        "desc": "中国安防行业网",
        "link": "http://www.21csp.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.c-ps.net&sz=128",
        "title": "中国安防网",
        "desc": "中国安防网",
        "link": "http://www.c-ps.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.b2b888.com&sz=128",
        "title": "天下安防网",
        "desc": "天下安防网",
        "link": "http://www.b2b888.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.zgafsb88.com&sz=128",
        "title": "中国安防设备制造商",
        "desc": "中国安防设备制造商",
        "link": "http://www.zgafsb88.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.testmart.cn&sz=128",
        "title": "安防交易网",
        "desc": "安防交易网",
        "link": "https://www.testmart.cn/anfang.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.21af.com&sz=128",
        "title": "安防器材网",
        "desc": "安防器材网",
        "link": "http://www.21af.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.aibanger.com&sz=128",
        "title": "爱邦网",
        "desc": "爱邦网",
        "link": "http://www.aibanger.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cps.com.cn&sz=128",
        "title": "中安网",
        "desc": "中安网",
        "link": "http://www.cps.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.119shop.cc&sz=128",
        "title": "都消防网",
        "desc": "都消防网",
        "link": "http://www.119shop.cc/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.afzhan.com&sz=128",
        "title": "中国安防展览网",
        "desc": "中国安防展览网",
        "link": "http://www.afzhan.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ygean.com&sz=128",
        "title": "云极安",
        "desc": "云极安",
        "link": "http://www.ygean.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.accessnet.cn&sz=128",
        "title": "中国门禁网",
        "desc": "中国门禁网",
        "link": "http://www.accessnet.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.anf-z.com&sz=128",
        "title": "易展安防网",
        "desc": "易展安防网",
        "link": "http://www.anf-z.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinalaobao.com&sz=128",
        "title": "中国劳保网",
        "desc": "中国劳保网",
        "link": "http://www.chinalaobao.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.tpy888.cn&sz=128",
        "title": "太平洋安防网",
        "desc": "太平洋安防网",
        "link": "http://www.tpy888.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=bbs.cps.com.cn&sz=128",
        "title": "中安网论坛",
        "desc": "中安网论坛",
        "link": "http://bbs.cps.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=bbs.eeworld.com.cn&sz=128",
        "title": "安防电子论坛",
        "desc": "安防电子论坛",
        "link": "http://bbs.eeworld.com.cn/forum-77-1.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.accessnet.com.cn&sz=128",
        "title": "中国门禁网论坛",
        "desc": "中国门禁网论坛",
        "link": "http://www.accessnet.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.1000bbs.com&sz=128",
        "title": "千家安防论坛",
        "desc": "千家安防论坛",
        "link": "http://www.1000bbs.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.afrcw.com&sz=128",
        "title": "安防人才网",
        "desc": "安防人才网",
        "link": "http://www.afrcw.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.afjob88.com&sz=128",
        "title": "一览安防英才网",
        "desc": "一览安防英才网",
        "link": "http://www.afjob88.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.anfangyc.com&sz=128",
        "title": "安防英才网",
        "desc": "安防英才网",
        "link": "http://www.anfangyc.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=hr.21csp.com.cn&sz=128",
        "title": "安防人才网",
        "desc": "安防人才网",
        "link": "http://hr.21csp.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=cpse.com.cn&sz=128",
        "title": "安博会",
        "desc": "安博会",
        "link": "http://cpse.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=secutech.tw.messefrankfurt.com&sz=128",
        "title": "台北安防展",
        "desc": "台北安防展",
        "link": "https://secutech.tw.messefrankfurt.com/taipei/en.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.safetysecurityasia.com.sg&sz=128",
        "title": "新加坡亚洲安防展",
        "desc": "新加坡亚洲安防展",
        "link": "http://www.safetysecurityasia.com.sg/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=messe.nikkei.co.jp&sz=128",
        "title": "东京安防展",
        "desc": "东京安防展",
        "link": "https://messe.nikkei.co.jp/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ifsec.events&sz=128",
        "title": "印度IFSEC",
        "desc": "印度IFSEC",
        "link": "https://www.ifsec.events/india/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.securexwestafrica.com&sz=128",
        "title": "西非安全科技展",
        "desc": "西非安全科技展",
        "link": "https://www.securexwestafrica.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.securex.co.za&sz=128",
        "title": "南非消防科技专业展",
        "desc": "南非消防科技专业展",
        "link": "https://www.securex.co.za/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.aosh.co.za&sz=128",
        "title": "南非工业安全防护展",
        "desc": "南非工业安全防护展",
        "link": "https://www.aosh.co.za/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.indosecurity.com&sz=128",
        "title": "INDO SECURITY",
        "desc": "INDO SECURITY",
        "link": "http://www.indosecurity.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.indofirex.com&sz=128",
        "title": "印尼消防展",
        "desc": "印尼消防展",
        "link": "http://www.indofirex.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.indodefence.com&sz=128",
        "title": "印尼国防工业展",
        "desc": "印尼国防工业展",
        "link": "http://www.indodefence.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.isnrabudhabi.com&sz=128",
        "title": "阿布扎比安防展",
        "desc": "阿布扎比安防展",
        "link": "https://www.isnrabudhabi.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.aplusa-online.com&sz=128",
        "title": "杜塞尔多夫A+A劳保展",
        "desc": "杜塞尔多夫A+A劳保展",
        "link": "https://www.aplusa-online.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.expoprotection.com&sz=128",
        "title": "法国安全用品及防火拯救设备展览会",
        "desc": "法国安全用品及防火拯救设备展览会",
        "link": "https://www.expoprotection.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ifsec.events&sz=128",
        "title": "英国伯明翰消防科技展",
        "desc": "英国伯明翰消防科技展",
        "link": "https://www.ifsec.events/international/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=sfitex.ru&sz=128",
        "title": "俄罗斯圣彼得堡国际安防及消防展",
        "desc": "俄罗斯圣彼得堡国际安防及消防展",
        "link": "https://sfitex.ru/ru-RU/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=exposec.tmp.br&sz=128",
        "title": "圣保罗安全/防火产品展",
        "desc": "圣保罗安全/防火产品展",
        "link": "https://exposec.tmp.br/16/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.fispvirtual.com.br&sz=128",
        "title": "巴西圣保罗劳保用品展",
        "desc": "巴西圣保罗劳保用品展",
        "link": "https://www.fispvirtual.com.br/16/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.exposeguridadindustrial.com&sz=128",
        "title": "墨西哥消防安全展",
        "desc": "墨西哥消防安全展",
        "link": "https://www.exposeguridadindustrial.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.exposeguridadmexico.com&sz=128",
        "title": "墨西哥安防展",
        "desc": "墨西哥安防展",
        "link": "https://www.exposeguridadmexico.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.safetyinaction.net.au&sz=128",
        "title": "澳大利亚墨尔本安防展",
        "desc": "澳大利亚墨尔本安防展",
        "link": "https://www.safetyinaction.net.au/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.iscwest.com&sz=128",
        "title": "ISC West (USA)",
        "desc": "ISC West (USA)",
        "link": "https://www.iscwest.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.isceast.com&sz=128",
        "title": "美国东部安防展",
        "desc": "美国东部安防展",
        "link": "https://www.isceast.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.congress.nsc.org&sz=128",
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
        "icon": "https://www.google.com/s2/favicons?domain=www.jiaju.cc&sz=128",
        "title": "中国家具网",
        "desc": "中国家具网",
        "link": "http://www.jiaju.cc/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jiajuol.com&sz=128",
        "title": "家居在线",
        "desc": "家居在线",
        "link": "http://www.jiajuol.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cnfa.com.cn&sz=128",
        "title": "中国家具工业协会",
        "desc": "中国家具工业协会",
        "link": "http://www.cnfa.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ccd.com.cn&sz=128",
        "title": "中国建筑装饰网",
        "desc": "中国建筑装饰网",
        "link": "http://www.ccd.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cnjzjj.com&sz=128",
        "title": "中国家装家居网",
        "desc": "中国家装家居网",
        "link": "http://www.cnjzjj.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jjzqw.com&sz=128",
        "title": "家具专区网",
        "desc": "家具专区网",
        "link": "http://www.jjzqw.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jjzg365.com&sz=128",
        "title": "家居中国网",
        "desc": "家居中国网",
        "link": "http://www.jjzg365.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jjhyw.net&sz=128",
        "title": "家居行业网",
        "desc": "家居行业网",
        "link": "http://www.jjhyw.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinahomes.cn&sz=128",
        "title": "中国家居网",
        "desc": "中国家居网",
        "link": "https://www.chinahomes.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jjzy.ibicn.com&sz=128",
        "title": "家居资源网",
        "desc": "家居资源网",
        "link": "http://www.jjzy.ibicn.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jzhyw.net&sz=128",
        "title": "家装行业网",
        "desc": "家装行业网",
        "link": "http://www.jzhyw.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chyxx.com&sz=128",
        "title": "中国产业信息-家具家居",
        "desc": "中国产业信息-家具家居",
        "link": "http://www.chyxx.com/industry/jiaju1/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jj17173.com&sz=128",
        "title": "家居行业信息网",
        "desc": "家居行业信息网",
        "link": "http://www.jj17173.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jiajumi.com&sz=128",
        "title": "家具迷",
        "desc": "家具迷",
        "link": "http://www.jiajumi.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jiajure.com&sz=128",
        "title": "家居热",
        "desc": "家居热",
        "link": "http://www.jiajure.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.hm-3223.net&sz=128",
        "title": "中国红木古典家具网",
        "desc": "中国红木古典家具网",
        "link": "http://www.hm-3223.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.china-china.cn&sz=128",
        "title": "中国建筑卫生陶瓷网",
        "desc": "中国建筑卫生陶瓷网",
        "link": "http://www.china-china.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinafloor.cn&sz=128",
        "title": "中华地板网",
        "desc": "中华地板网",
        "link": "http://www.chinafloor.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.xbcd.cn&sz=128",
        "title": "中国瓷砖网",
        "desc": "中国瓷砖网",
        "link": "http://www.xbcd.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.furnituretoday.cn&sz=128",
        "title": "全球家居业商业指南",
        "desc": "全球家居业商业指南",
        "link": "https://www.furnituretoday.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinachina.net&sz=128",
        "title": "华夏陶瓷网",
        "desc": "华夏陶瓷网",
        "link": "http://www.chinachina.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.glass.com.cn&sz=128",
        "title": "中国玻璃网",
        "desc": "中国玻璃网",
        "link": "http://www.glass.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.faucet-china.com&sz=128",
        "title": "中国水暖卫浴网",
        "desc": "中国水暖卫浴网",
        "link": "http://www.faucet-china.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.lighting86.com.cn&sz=128",
        "title": "中国灯饰商贸网",
        "desc": "中国灯饰商贸网",
        "link": "http://www.lighting86.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jj.hc360.com&sz=128",
        "title": "慧聪网家居用品频道",
        "desc": "慧聪网家居用品频道",
        "link": "http://www.jj.hc360.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.offsup.net&sz=128",
        "title": "家居生活网",
        "desc": "家居生活网",
        "link": "http://www.offsup.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jiaju.cc&sz=128",
        "title": "中国家具网",
        "desc": "中国家具网",
        "link": "http://www.jiaju.cc/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.szfa.com&sz=128",
        "title": "深圳家具网",
        "desc": "深圳家具网",
        "link": "http://www.szfa.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jia360.com&sz=128",
        "title": "腾讯家居",
        "desc": "腾讯家居",
        "link": "http://www.jia360.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.pchouse.com.cn&sz=128",
        "title": "太平洋家居网",
        "desc": "太平洋家居网",
        "link": "https://www.pchouse.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jieju.cn&sz=128",
        "title": "中华洁具网",
        "desc": "中华洁具网",
        "link": "http://www.jieju.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ceramicschina.com&sz=128",
        "title": "中国陶瓷网",
        "desc": "中国陶瓷网",
        "link": "http://www.ceramicschina.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ccenn.com&sz=128",
        "title": "中陶网",
        "desc": "中陶网",
        "link": "http://www.ccenn.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.boli.cn&sz=128",
        "title": "中国玻璃信息网",
        "desc": "中国玻璃信息网",
        "link": "http://www.boli.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.qqtc.cn&sz=128",
        "title": "全球陶瓷网",
        "desc": "全球陶瓷网",
        "link": "http://www.qqtc.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.znjj.tv&sz=128",
        "title": "智家网",
        "desc": "智家网",
        "link": "http://www.znjj.tv/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jiagle.com&sz=128",
        "title": "家具在线",
        "desc": "家具在线",
        "link": "https://www.jiagle.com/jiaju/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.mjju.net&sz=128",
        "title": "美家居",
        "desc": "美家居",
        "link": "http://www.mjju.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.toojj.com&sz=128",
        "title": "家居网",
        "desc": "家居网",
        "link": "http://www.toojj.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.9juren.com&sz=128",
        "title": "具人同行",
        "desc": "具人同行",
        "link": "http://www.9juren.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.meilele.com&sz=128",
        "title": "美乐乐家具网",
        "desc": "美乐乐家具网",
        "link": "http://www.meilele.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.wyw.cn&sz=128",
        "title": "中国卫浴网",
        "desc": "中国卫浴网",
        "link": "http://www.wyw.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=bbs.roomage.com&sz=128",
        "title": "中国装修论坛",
        "desc": "中国装修论坛",
        "link": "http://bbs.roomage.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=jz.job1001.com&sz=128",
        "title": "一览家具英才网",
        "desc": "一览家具英才网",
        "link": "http://jz.job1001.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.126job.net&sz=128",
        "title": "126家具人才网",
        "desc": "126家具人才网",
        "link": "http://www.126job.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jjrw.com&sz=128",
        "title": "中国家具招聘网",
        "desc": "中国家具招聘网",
        "link": "http://www.jjrw.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cnjjhr.com&sz=128",
        "title": "家具人才网",
        "desc": "家具人才网",
        "link": "http://www.cnjjhr.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.51juy.com&sz=128",
        "title": "居英网",
        "desc": "居英网",
        "link": "http://www.51juy.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=jj.djob.com&sz=128",
        "title": "Djob家具人才网",
        "desc": "Djob家具人才网",
        "link": "http://jj.djob.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.antiquefurniturefair.com&sz=128",
        "title": "中国国际古典家具展",
        "desc": "中国国际古典家具展",
        "link": "http://www.antiquefurniturefair.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.xajjzh.com&sz=128",
        "title": "西安国际家具展",
        "desc": "西安国际家具展",
        "link": "http://www.xajjzh.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jn-ff.com&sz=128",
        "title": "济南家具展",
        "desc": "济南家具展",
        "link": "http://www.jn-ff.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.szjjzlh.com&sz=128",
        "title": "苏州家具展",
        "desc": "苏州家具展",
        "link": "http://www.szjjzlh.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ciff-gz.com&sz=128",
        "title": "广州家具展",
        "desc": "广州家具展",
        "link": "https://www.ciff-gz.com/zh/index"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.51jiabo.com&sz=128",
        "title": "家博会",
        "desc": "家博会",
        "link": "http://www.51jiabo.com/sh"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.sifechina.cn&sz=128",
        "title": "深圳国际家具展",
        "desc": "深圳国际家具展",
        "link": "https://www.sifechina.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.furniture-china.cn&sz=128",
        "title": "中国国际家具展",
        "desc": "中国国际家具展",
        "link": "http://www.furniture-china.cn/zh-cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.vifafair.com&sz=128",
        "title": "越南家具及配件展",
        "desc": "越南家具及配件展",
        "link": "http://www.vifafair.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.iffs.com.sg&sz=128",
        "title": "新加坡家具展",
        "desc": "新加坡家具展",
        "link": "https://www.iffs.com.sg/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.sleepandeatevent.com&sz=128",
        "title": "sleep家装展",
        "desc": "sleep家装展",
        "link": "https://www.sleepandeatevent.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=efe.my&sz=128",
        "title": "马来西亚家具贸易展",
        "desc": "马来西亚家具贸易展",
        "link": "http://efe.my/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=2020.miff.com.my&sz=128",
        "title": "马来西亚家具展",
        "desc": "马来西亚家具展",
        "link": "https://2020.miff.com.my/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.aiff.net.au&sz=128",
        "title": "澳大利亚悉尼家具展",
        "desc": "澳大利亚悉尼家具展",
        "link": "https://www.aiff.net.au/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.indexexhibition.com&sz=128",
        "title": "迪拜家具暨室内装饰展",
        "desc": "迪拜家具暨室内装饰展",
        "link": "https://www.indexexhibition.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.meb-expo.ru&sz=128",
        "title": "俄罗斯国际家具配件展",
        "desc": "俄罗斯国际家具配件展",
        "link": "http://www.meb-expo.ru/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.feriahabitatvalencia.com&sz=128",
        "title": "西班牙瓦伦西亚家具展",
        "desc": "西班牙瓦伦西亚家具展",
        "link": "https://www.feriahabitatvalencia.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.decorex.com&sz=128",
        "title": "Decorex",
        "desc": "Decorex",
        "link": "https://www.decorex.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.orgatec.com&sz=128",
        "title": "德国科隆办公家具展",
        "desc": "德国科隆办公家具展",
        "link": "https://www.orgatec.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.interzum.com&sz=128",
        "title": "德国家具加工配件展",
        "desc": "德国家具加工配件展",
        "link": "https://www.interzum.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.zow.de&sz=128",
        "title": "德国家具配件展",
        "desc": "德国家具配件展",
        "link": "https://www.zow.de/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.imm-cologne.com&sz=128",
        "title": "德国科隆家具展",
        "desc": "德国科隆家具展",
        "link": "https://www.imm-cologne.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.informamarkets.com&sz=128",
        "title": "巴西家具配件木工机械展",
        "desc": "巴西家具配件木工机械展",
        "link": "https://www.informamarkets.com/en/regions/south-america.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.formobile.com.br&sz=128",
        "title": "巴西家具配件及木工机械展",
        "desc": "巴西家具配件及木工机械展",
        "link": "https://www.formobile.com.br/pt/home.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.casualmarket.com&sz=128",
        "title": "芝加哥户外家具用品展",
        "desc": "芝加哥户外家具用品展",
        "link": "http://www.casualmarket.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.neocon.com&sz=128",
        "title": "芝加哥办公家具展",
        "desc": "芝加哥办公家具展",
        "link": "https://www.neocon.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ispaexpo.com&sz=128",
        "title": "美国睡眠产品展",
        "desc": "美国睡眠产品展",
        "link": "https://www.ispaexpo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.glassbuildamerica.com&sz=128",
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
        "icon": "https://www.google.com/s2/favicons?domain=www.mohurd.gov.cn&sz=128",
        "title": "中华人民共和国建设部",
        "desc": "中华人民共和国建设部",
        "link": "http://www.mohurd.gov.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cnbwp.com&sz=128",
        "title": "中国建筑防水网",
        "desc": "中国建筑防水网",
        "link": "http://www.cnbwp.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.zhulong.com&sz=128",
        "title": "筑龙网",
        "desc": "筑龙网",
        "link": "http://www.zhulong.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cbminfo.com&sz=128",
        "title": "中国建材信息总网",
        "desc": "中国建材信息总网",
        "link": "http://www.cbminfo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.tgnet.cn&sz=128",
        "title": "天工网",
        "desc": "天工网",
        "link": "http://www.tgnet.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ccd.com.cn&sz=128",
        "title": "中国建筑装饰网",
        "desc": "中国建筑装饰网",
        "link": "http://www.ccd.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.buildnet.cn&sz=128",
        "title": "天辰建设网",
        "desc": "天辰建设网",
        "link": "http://www.buildnet.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ib-china.com&sz=128",
        "title": "中国智能建筑信息网",
        "desc": "中国智能建筑信息网",
        "link": "http://www.ib-china.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.xnjcw.com&sz=128",
        "title": "西部建材网",
        "desc": "西部建材网",
        "link": "http://www.xnjcw.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.gjg.ibicn.com&sz=128",
        "title": "钢结构产业网",
        "desc": "钢结构产业网",
        "link": "http://www.gjg.ibicn.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinabmi.com&sz=128",
        "title": "建材智网",
        "desc": "建材智网",
        "link": "http://www.chinabmi.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=cbmf.org&sz=128",
        "title": "中国建材信息总网",
        "desc": "中国建材信息总网",
        "link": "http://cbmf.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ccpitbm.org&sz=128",
        "title": "中国贸促会建材行业",
        "desc": "中国贸促会建材行业",
        "link": "http://www.ccpitbm.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cnrmc.com&sz=128",
        "title": "中国混泥土网",
        "desc": "中国混泥土网",
        "link": "http://www.cnrmc.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.bmlink.com&sz=128",
        "title": "建材网商业资讯",
        "desc": "建材网商业资讯",
        "link": "https://www.bmlink.com/news/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.dcement.com&sz=128",
        "title": "数字水泥网",
        "desc": "数字水泥网",
        "link": "http://www.dcement.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.hnt188.com&sz=128",
        "title": "中国商品混凝土网",
        "desc": "中国商品混凝土网",
        "link": "http://www.hnt188.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cementmagazine.com&sz=128",
        "title": "水泥杂志网",
        "desc": "水泥杂志网",
        "link": "http://www.cementmagazine.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.snsqw.com&sz=128",
        "title": "水泥商情网",
        "desc": "水泥商情网",
        "link": "http://www.snsqw.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jc.net.cn&sz=128",
        "title": "中国建材在线",
        "desc": "中国建材在线",
        "link": "http://www.jc.net.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.taoci.com&sz=128",
        "title": "陶瓷网",
        "desc": "陶瓷网",
        "link": "http://www.taoci.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jiancai.com&sz=128",
        "title": "盛丰建材网",
        "desc": "盛丰建材网",
        "link": "http://www.jiancai.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.xbcd.cn&sz=128",
        "title": "中国瓷砖网",
        "desc": "中国瓷砖网",
        "link": "http://www.xbcd.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.syjiancai.com&sz=128",
        "title": "沈阳建材网",
        "desc": "沈阳建材网",
        "link": "http://www.syjiancai.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.co188.com&sz=128",
        "title": "co土木在线",
        "desc": "co土木在线",
        "link": "http://www.co188.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chyxx.com&sz=128",
        "title": "中国产业信息-房产建材",
        "desc": "中国产业信息-房产建材",
        "link": "http://www.chyxx.com/industry/jianzhu/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jiancai.com&sz=128",
        "title": "盛丰建材网",
        "desc": "盛丰建材网",
        "link": "http://www.jiancai.com/info/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=bm.hc360.com&sz=128",
        "title": "慧聪网-建材",
        "desc": "慧聪网-建材",
        "link": "http://bm.hc360.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.allfence.cn&sz=128",
        "title": "中国护栏网",
        "desc": "中国护栏网",
        "link": "http://www.allfence.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.glassxs.cn&sz=128",
        "title": "中国玻璃销售网",
        "desc": "中国玻璃销售网",
        "link": "http://www.glassxs.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.szgujian.com&sz=128",
        "title": "苏州古建筑网",
        "desc": "苏州古建筑网",
        "link": "http://www.szgujian.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=srq.n3.com.cn&sz=128",
        "title": "暖立方散热器网",
        "desc": "暖立方散热器网",
        "link": "http://srq.n3.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=bgl.n3.com.cn&sz=128",
        "title": "暖立方壁挂炉网",
        "desc": "暖立方壁挂炉网",
        "link": "http://bgl.n3.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.buildingonline.com&sz=128",
        "title": "building online",
        "desc": "building online",
        "link": "http://www.buildingonline.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.stonemsn.com&sz=128",
        "title": "中国石材网上贸易",
        "desc": "中国石材网上贸易",
        "link": "http://www.stonemsn.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.dnw.com.cn&sz=128",
        "title": "中国地暖网",
        "desc": "中国地暖网",
        "link": "http://www.dnw.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jc.net.cn&sz=128",
        "title": "中国建材价格网",
        "desc": "中国建材价格网",
        "link": "http://www.jc.net.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.tybaba.com&sz=128",
        "title": "全球铁艺网",
        "desc": "全球铁艺网",
        "link": "http://www.tybaba.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jc001.cn&sz=128",
        "title": "中国建材第一网",
        "desc": "中国建材第一网",
        "link": "http://www.jc001.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=jc.zhulong.com&sz=128",
        "title": "建材网",
        "desc": "建材网",
        "link": "http://jc.zhulong.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.hvacr.hc360.com&sz=128",
        "title": "慧聪暖通制冷网",
        "desc": "慧聪暖通制冷网",
        "link": "http://www.hvacr.hc360.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.alu.cn&sz=128",
        "title": "中国铝业",
        "desc": "中国铝业",
        "link": "http://www.alu.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.bmlink.com&sz=128",
        "title": "中国建材网",
        "desc": "中国建材网",
        "link": "http://www.bmlink.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinacements.com&sz=128",
        "title": "中国水泥网",
        "desc": "中国水泥网",
        "link": "http://www.chinacements.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.bmlink.com&sz=128",
        "title": "BMLINK建材网",
        "desc": "BMLINK建材网",
        "link": "https://www.bmlink.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinabm.cn&sz=128",
        "title": "中国建材网",
        "desc": "中国建材网",
        "link": "https://www.chinabm.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jcbmt.com&sz=128",
        "title": "建材贸易网",
        "desc": "建材贸易网",
        "link": "http://www.jcbmt.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.co188.com&sz=128",
        "title": "土木在线",
        "desc": "土木在线",
        "link": "https://www.co188.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.stonebuy.com&sz=128",
        "title": "中国石材网",
        "desc": "中国石材网",
        "link": "http://www.stonebuy.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jiancai365.cn&sz=128",
        "title": "建材采购网",
        "desc": "建材采购网",
        "link": "http://www.jiancai365.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.teleyi.com&sz=128",
        "title": "特乐意建材电商交易平台",
        "desc": "特乐意建材电商交易平台",
        "link": "http://www.teleyi.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jiancaiyi.com&sz=128",
        "title": "建采易",
        "desc": "建采易",
        "link": "https://www.jiancaiyi.com/mall/search"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=xn--vhq342b6igbu9a.com&sz=128",
        "title": "建材行业网",
        "desc": "建材行业网",
        "link": "http://xn--vhq342b6igbu9a.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.joojcc.com&sz=128",
        "title": "中易通建材网",
        "desc": "中易通建材网",
        "link": "http://www.joojcc.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinamendu.com&sz=128",
        "title": "中国门都网",
        "desc": "中国门都网",
        "link": "http://www.chinamendu.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=search.bmlink.com&sz=128",
        "title": "中建搜索",
        "desc": "中建搜索",
        "link": "http://search.bmlink.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.world-stone.com&sz=128",
        "title": "世界石材网",
        "desc": "世界石材网",
        "link": "http://www.world-stone.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jiancai365.cn&sz=128",
        "title": "中国建材采购网",
        "desc": "中国建材采购网",
        "link": "http://www.jiancai365.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cbee.cn&sz=128",
        "title": "中国建筑节能网",
        "desc": "中国建筑节能网",
        "link": "http://www.cbee.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.zhuniu.com&sz=128",
        "title": "筑牛网",
        "desc": "筑牛网",
        "link": "http://www.zhuniu.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinabm.cn&sz=128",
        "title": "中华建材网",
        "desc": "中华建材网",
        "link": "https://www.chinabm.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jc.tt&sz=128",
        "title": "建材行业网",
        "desc": "建材行业网",
        "link": "http://www.jc.tt/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.buildnet.cn&sz=128",
        "title": "建设网",
        "desc": "建设网",
        "link": "http://www.buildnet.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jc123.com.cn&sz=128",
        "title": "建筑材料网",
        "desc": "建筑材料网",
        "link": "http://www.jc123.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ehuojia.org&sz=128",
        "title": "中国货架网",
        "desc": "中国货架网",
        "link": "http://www.ehuojia.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cangchu.org&sz=128",
        "title": "中国仓储货架网",
        "desc": "中国仓储货架网",
        "link": "http://www.cangchu.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.c-m.com.cn&sz=128",
        "title": "水泥商讯网",
        "desc": "水泥商讯网",
        "link": "http://www.c-m.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cnccr.cn&sz=128",
        "title": "加固改造网",
        "desc": "加固改造网",
        "link": "http://www.cnccr.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.globalwood.org&sz=128",
        "title": "globalwood",
        "desc": "globalwood",
        "link": "http://www.globalwood.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.build.com&sz=128",
        "title": "build",
        "desc": "build",
        "link": "http://www.build.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=bbs.zhulong.com&sz=128",
        "title": "筑龙网论坛",
        "desc": "筑龙网论坛",
        "link": "http://bbs.zhulong.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.abbs.com.cn&sz=128",
        "title": "ABBS建筑论坛",
        "desc": "ABBS建筑论坛",
        "link": "http://www.abbs.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.tydf.cn&sz=128",
        "title": "天圆地方",
        "desc": "天圆地方",
        "link": "http://www.tydf.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=bbs.ceramicschina.com&sz=128",
        "title": "中国陶瓷论坛",
        "desc": "中国陶瓷论坛",
        "link": "https://bbs.ceramicschina.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jgjob88.com&sz=128",
        "title": "建工英才网",
        "desc": "建工英才网",
        "link": "http://www.jgjob88.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.buildhr.com&sz=128",
        "title": "建筑英才网",
        "desc": "建筑英才网",
        "link": "http://www.buildhr.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=bm.baidajob.com&sz=128",
        "title": "百大英才网-建材站",
        "desc": "百大英才网-建材站",
        "link": "http://bm.baidajob.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.concretehr.com&sz=128",
        "title": "中国混凝土人力资源网",
        "desc": "中国混凝土人力资源网",
        "link": "http://www.concretehr.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=sn.job1001.com&sz=128",
        "title": "一览水泥英才网",
        "desc": "一览水泥英才网",
        "link": "http://sn.job1001.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.build-decor.net&sz=128",
        "title": "北京建材展览会",
        "desc": "北京建材展览会",
        "link": "http://www.build-decor.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.stonefair.org.cn&sz=128",
        "title": "厦门石材展",
        "desc": "厦门石材展",
        "link": "http://www.stonefair.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cdjbh.cn&sz=128",
        "title": "成都建筑装饰材料博览会",
        "desc": "成都建筑装饰材料博览会",
        "link": "http://www.cdjbh.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.indobuildtech.com&sz=128",
        "title": "印尼国际建筑展",
        "desc": "印尼国际建筑展",
        "link": "http://www.indobuildtech.com/Home"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.inagreentech-exhibition.net&sz=128",
        "title": "印尼绿色建材展",
        "desc": "印尼绿色建材展",
        "link": "http://www.inagreentech-exhibition.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.harfko.com&sz=128",
        "title": "韩国国际空调制冷展",
        "desc": "韩国国际空调制冷展",
        "link": "http://www.harfko.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.gardex.jp&sz=128",
        "title": "东京户外花园设施及用品展",
        "desc": "东京户外花园设施及用品展",
        "link": "https://www.gardex.jp/ja-jp.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=khfair.com&sz=128",
        "title": "首尔京乡建筑及装饰展",
        "desc": "首尔京乡建筑及装饰展",
        "link": "https://khfair.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jraia.or.jp&sz=128",
        "title": "日本暖通制冷展",
        "desc": "日本暖通制冷展",
        "link": "https://www.jraia.or.jp/hvacr/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=hvacvn.com&sz=128",
        "title": "越南暖通空调制冷展",
        "desc": "越南暖通空调制冷展",
        "link": "https://hvacvn.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=archidex.com.my&sz=128",
        "title": "马来西亚建材展",
        "desc": "马来西亚建材展",
        "link": "https://archidex.com.my/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.bex-asia.com&sz=128",
        "title": "新加坡建筑建材展",
        "desc": "新加坡建筑建材展",
        "link": "https://www.bex-asia.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.architectexpo.com&sz=128",
        "title": "曼谷建材及室内装饰展",
        "desc": "曼谷建材及室内装饰展",
        "link": "http://www.architectexpo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.projectqatar.com&sz=128",
        "title": "卡塔尔建材展",
        "desc": "卡塔尔建材展",
        "link": "http://www.projectqatar.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.iranhvac.com&sz=128",
        "title": "伊朗德黑兰暖通制冷展",
        "desc": "伊朗德黑兰暖通制冷展",
        "link": "http://www.iranhvac.com/en/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.thebig5.ae&sz=128",
        "title": "迪拜五大行业展",
        "desc": "迪拜五大行业展",
        "link": "http://www.thebig5.ae/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=sbie-arabia.com&sz=128",
        "title": "沙特阿拉伯吉达建筑及装饰展",
        "desc": "沙特阿拉伯吉达建筑及装饰展",
        "link": "http://sbie-arabia.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=saudibuild-expo.com&sz=128",
        "title": "沙特建筑博览会",
        "desc": "沙特建筑博览会",
        "link": "http://saudibuild-expo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.interbuild.co.za&sz=128",
        "title": "南非建筑建材展",
        "desc": "南非建筑建材展",
        "link": "https://www.interbuild.co.za/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.expogr.com&sz=128",
        "title": "肯尼亚建材展",
        "desc": "肯尼亚建材展",
        "link": "https://www.expogr.com/buildexpokenya/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.eurasiafloor.com&sz=128",
        "title": "伊斯坦布尔地面材料展",
        "desc": "伊斯坦布尔地面材料展",
        "link": "http://www.eurasiafloor.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.kazbuild.kz&sz=128",
        "title": "阿拉木图建材秋季展",
        "desc": "阿拉木图建材秋季展",
        "link": "https://www.kazbuild.kz/ru/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.astanabuild.kz&sz=128",
        "title": "阿斯塔纳建筑建材展",
        "desc": "阿斯塔纳建筑建材展",
        "link": "https://www.astanabuild.kz/ru/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.projectlebanon.com&sz=128",
        "title": "黎巴嫩建筑建材展",
        "desc": "黎巴嫩建筑建材展",
        "link": "http://www.projectlebanon.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.rebuildlebanon.gov.lb&sz=128",
        "title": "黎巴嫩重建展",
        "desc": "黎巴嫩重建展",
        "link": "http://www.rebuildlebanon.gov.lb/english/f/default.asp"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=climatexpo.ru&sz=128",
        "title": "俄罗斯国际空调通风及制冷设备展览",
        "desc": "俄罗斯国际空调通风及制冷设备展览",
        "link": "https://climatexpo.ru/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.aquatherm-moscow.ru&sz=128",
        "title": "莫斯科暖通制冷展",
        "desc": "莫斯科暖通制冷展",
        "link": "https://www.aquatherm-moscow.ru/ru-ru.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.arbs.com.au&sz=128",
        "title": "澳大利亚空调/暖通及制冷展",
        "desc": "澳大利亚空调/暖通及制冷展",
        "link": "https://www.arbs.com.au/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=designbuildexpo.com.au&sz=128",
        "title": "澳大利亚建筑展",
        "desc": "澳大利亚建筑展",
        "link": "https://designbuildexpo.com.au/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.targistone.pl&sz=128",
        "title": "波兰国际石材展",
        "desc": "波兰国际石材展",
        "link": "https://www.targistone.pl/pl/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.budma.pl&sz=128",
        "title": "波兰建筑博览会",
        "desc": "波兰建筑博览会",
        "link": "https://www.budma.pl/pl/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.batimat.com&sz=128",
        "title": "巴黎国际建筑展览会",
        "desc": "巴黎国际建筑展览会",
        "link": "https://www.batimat.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.equipbaie.com&sz=128",
        "title": "法国巴黎门窗展",
        "desc": "法国巴黎门窗展",
        "link": "https://www.equipbaie.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.leipziger-messe.de&sz=128",
        "title": "莱比锡供暖空调/卫浴建材展",
        "desc": "莱比锡供暖空调/卫浴建材展",
        "link": "http://www.leipziger-messe.de/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.domotex.de&sz=128",
        "title": "汉诺威地面铺装展",
        "desc": "汉诺威地面铺装展",
        "link": "https://www.domotex.de/home"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.bautec.com&sz=128",
        "title": "德国柏林建筑建材展",
        "desc": "德国柏林建筑建材展",
        "link": "https://www.bautec.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.acqua-alta.de&sz=128",
        "title": "德国艾森建筑建材展",
        "desc": "德国艾森建筑建材展",
        "link": "https://www.acqua-alta.de/hochwasserschutz"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=bau-muenchen.com&sz=128",
        "title": "德国慕尼黑建材展",
        "desc": "德国慕尼黑建材展",
        "link": "https://bau-muenchen.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.wexhibition.co.uk&sz=128",
        "title": "w exhibition",
        "desc": "w exhibition",
        "link": "https://www.wexhibition.co.uk/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.mcexpocomfort.it&sz=128",
        "title": "米兰卫浴暖通展",
        "desc": "米兰卫浴暖通展",
        "link": "https://www.mcexpocomfort.it/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.bouwbeurs.nl&sz=128",
        "title": "荷兰乌德勒支建材展",
        "desc": "荷兰乌德勒支建材展",
        "link": "https://www.bouwbeurs.nl/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.buildingweek.bg&sz=128",
        "title": "保加利亚索菲亚建材展",
        "desc": "保加利亚索菲亚建材展",
        "link": "http://www.buildingweek.bg/index.php/bg/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.theflooringshow.com&sz=128",
        "title": "英国哈洛格地面材料展",
        "desc": "英国哈洛格地面材料展",
        "link": "https://www.theflooringshow.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.stoneshow.co.uk&sz=128",
        "title": "伦敦国际天然石展",
        "desc": "伦敦国际天然石展",
        "link": "https://www.stoneshow.co.uk/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=toolfair.info&sz=128",
        "title": "英国toolfair",
        "desc": "英国toolfair",
        "link": "https://toolfair.info/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.futurebuild.co.uk&sz=128",
        "title": "伦敦绿色环保建材展",
        "desc": "伦敦绿色环保建材展",
        "link": "https://www.futurebuild.co.uk/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=expocihac.com&sz=128",
        "title": "墨西哥建材展",
        "desc": "墨西哥建材展",
        "link": "https://expocihac.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.barbaraborgesprojetos.com.br&sz=128",
        "title": "里约热内卢建材/卫浴设备展",
        "desc": "里约热内卢建材/卫浴设备展",
        "link": "https://www.barbaraborgesprojetos.com.br/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.feicon.com.br&sz=128",
        "title": "巴西国际建材展",
        "desc": "巴西国际建材展",
        "link": "https://www.feicon.com.br/pt-br.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.vitoriastonefair.com.br&sz=128",
        "title": "巴西维多利亚石材工具展",
        "desc": "巴西维多利亚石材工具展",
        "link": "https://www.vitoriastonefair.com.br/site/2019/pt/home"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.febrava.com.br&sz=128",
        "title": "巴西制冷空调通风及供暖展",
        "desc": "巴西制冷空调通风及供暖展",
        "link": "https://www.febrava.com.br/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.construmat.com&sz=128",
        "title": "巴塞罗那建材展",
        "desc": "巴塞罗那建材展",
        "link": "http://www.construmat.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.concreteshow.com.br&sz=128",
        "title": "巴西混凝土展",
        "desc": "巴西混凝土展",
        "link": "https://www.concreteshow.com.br/pt/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cachoeirostonefair.com.br&sz=128",
        "title": "巴西石材展",
        "desc": "巴西石材展",
        "link": "https://www.cachoeirostonefair.com.br/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.edifica.cl&sz=128",
        "title": "智利建材展",
        "desc": "智利建材展",
        "link": "https://www.edifica.cl/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.batev.com.ar&sz=128",
        "title": "阿根廷国际建筑工业展览会",
        "desc": "阿根廷国际建筑工业展览会",
        "link": "https://www.batev.com.ar/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.buildersshow.com&sz=128",
        "title": "奥兰多建筑建材展",
        "desc": "奥兰多建筑建材展",
        "link": "https://www.buildersshow.com/Home/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.thebuildingsshow.com&sz=128",
        "title": "加拿大建筑和混凝土展",
        "desc": "加拿大建筑和混凝土展",
        "link": "https://www.thebuildingsshow.com/en/home.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.buildingsny.com&sz=128",
        "title": "纽约建材展",
        "desc": "纽约建材展",
        "link": "https://www.buildingsny.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.stone-tec.com&sz=128",
        "title": "纽伦堡国际石材展",
        "desc": "纽伦堡国际石材展",
        "link": "https://www.stone-tec.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.coverings.com&sz=128",
        "title": "亚特兰大石材及瓷砖展",
        "desc": "亚特兰大石材及瓷砖展",
        "link": "https://www.coverings.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=ahrexpo.com&sz=128",
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
        "icon": "https://www.google.com/s2/favicons?domain=news.efu.com.cn&sz=128",
        "title": "服装新闻",
        "desc": "服装新闻",
        "link": "http://news.efu.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cloth.hc360.com&sz=128",
        "title": "慧聪服装网",
        "desc": "慧聪服装网",
        "link": "http://www.cloth.hc360.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.taweekly.com&sz=128",
        "title": "纺织服装周刊",
        "desc": "纺织服装周刊",
        "link": "http://www.taweekly.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cfw.com.cn&sz=128",
        "title": "中国服饰新闻网",
        "desc": "中国服饰新闻网",
        "link": "http://www.cfw.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.webtex.cn&sz=128",
        "title": "第一纺织网",
        "desc": "第一纺织网",
        "link": "http://www.webtex.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ccta.org.cn&sz=128",
        "title": "中国棉纺织行业协会",
        "desc": "中国棉纺织行业协会",
        "link": "http://www.ccta.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cwta.org.cn&sz=128",
        "title": "中国毛纺织行业协会",
        "desc": "中国毛纺织行业协会",
        "link": "http://www.cwta.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.wzfashion.org&sz=128",
        "title": "温州服装商会",
        "desc": "温州服装商会",
        "link": "http://www.wzfashion.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ef360.com&sz=128",
        "title": "华衣网",
        "desc": "华衣网",
        "link": "http://www.ef360.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cblfta.org.cn&sz=128",
        "title": "中国麻纺织行业协会",
        "desc": "中国麻纺织行业协会",
        "link": "http://www.cblfta.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.silk-e.org&sz=128",
        "title": "中国茧丝绸网",
        "desc": "中国茧丝绸网",
        "link": "http://www.silk-e.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ckia.org&sz=128",
        "title": "中国针织工业协会",
        "desc": "中国针织工业协会",
        "link": "http://www.ckia.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinasspp.com&sz=128",
        "title": "中国时尚品牌网",
        "desc": "中国时尚品牌网",
        "link": "http://www.chinasspp.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cdpa.org.cn&sz=128",
        "title": "中国印染行业协会",
        "desc": "中国印染行业协会",
        "link": "http://www.cdpa.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.168tex.com&sz=128",
        "title": "绸都网",
        "desc": "绸都网",
        "link": "http://www.168tex.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.china-ef.com&sz=128",
        "title": "中国品牌服装网",
        "desc": "中国品牌服装网",
        "link": "http://www.china-ef.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.fumin.com&sz=128",
        "title": "富民服装网",
        "desc": "富民服装网",
        "link": "http://www.fumin.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ctic.org.cn&sz=128",
        "title": "中国纺织信息中心",
        "desc": "中国纺织信息中心",
        "link": "http://www.ctic.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ccpittex.com&sz=128",
        "title": "纺织贸促网",
        "desc": "纺织贸促网",
        "link": "http://www.ccpittex.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.efuin.com&sz=128",
        "title": "中国服装产业网",
        "desc": "中国服装产业网",
        "link": "http://www.efuin.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.fzengine.com&sz=128",
        "title": "中国服装工业网",
        "desc": "中国服装工业网",
        "link": "http://www.fzengine.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ne365.com&sz=128",
        "title": "国际内衣网",
        "desc": "国际内衣网",
        "link": "http://www.ne365.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.51kids.com&sz=128",
        "title": "中国童装网",
        "desc": "中国童装网",
        "link": "http://www.51kids.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.vifo.com.cn&sz=128",
        "title": "微服网",
        "desc": "微服网",
        "link": "http://www.vifo.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.3fnet.com&sz=128",
        "title": "3FNET时尚第一旗",
        "desc": "3FNET时尚第一旗",
        "link": "http://www.3fnet.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.shoes.net.cn&sz=128",
        "title": "环球鞋网",
        "desc": "环球鞋网",
        "link": "http://www.shoes.net.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.511340.com&sz=128",
        "title": "中国牛仔服装网",
        "desc": "中国牛仔服装网",
        "link": "http://www.511340.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.fzmec.com&sz=128",
        "title": "中国服装机械网",
        "desc": "中国服装机械网",
        "link": "http://www.fzmec.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.zgzyw.net&sz=128",
        "title": "制衣网",
        "desc": "制衣网",
        "link": "http://www.zgzyw.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ef43.com.cn&sz=128",
        "title": "中国丽人网",
        "desc": "中国丽人网",
        "link": "http://www.ef43.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cfw.com.cn&sz=128",
        "title": "中国服装新闻网",
        "desc": "中国服装新闻网",
        "link": "http://www.cfw.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=fashion.icxo.com&sz=128",
        "title": "时装经理人",
        "desc": "时装经理人",
        "link": "http://fashion.icxo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.5143.cn&sz=128",
        "title": "服装招商网",
        "desc": "服装招商网",
        "link": "http://www.5143.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.bgfashion.net&sz=128",
        "title": "Fashion directory",
        "desc": "Fashion directory",
        "link": "http://www.bgfashion.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.fabric.com&sz=128",
        "title": "Fabric",
        "desc": "Fabric",
        "link": "http://www.fabric.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.apparelnews.net&sz=128",
        "title": "Apparelnews",
        "desc": "Apparelnews",
        "link": "http://www.apparelnews.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.magiconline.com&sz=128",
        "title": "MAGIConline",
        "desc": "MAGIConline",
        "link": "http://www.magiconline.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=apparel.edgl.com&sz=128",
        "title": "Apparel Magazine",
        "desc": "Apparel Magazine",
        "link": "http://apparel.edgl.com/home"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.iafnet.org&sz=128",
        "title": "International Apparel Federation",
        "desc": "International Apparel Federation",
        "link": "http://www.iafnet.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cnga.org.cn&sz=128",
        "title": "中国服装协会网",
        "desc": "中国服装协会网",
        "link": "http://www.cnga.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.tnc.com.cn&sz=128",
        "title": "全球纺织网",
        "desc": "全球纺织网",
        "link": "https://www.tnc.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.61kids.com.cn&sz=128",
        "title": "中国童装品牌网",
        "desc": "中国童装品牌网",
        "link": "http://www.61kids.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.efu.com.cn&sz=128",
        "title": "中国服装网",
        "desc": "中国服装网",
        "link": "http://www.efu.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.baobei360.com&sz=128",
        "title": "中国婴童网",
        "desc": "中国婴童网",
        "link": "http://www.baobei360.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.texnet.com.cn&sz=128",
        "title": "纺织网",
        "desc": "纺织网",
        "link": "http://www.texnet.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.qfc.cn&sz=128",
        "title": "网上轻纺城",
        "desc": "网上轻纺城",
        "link": "https://www.qfc.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.shoes.hc360.com&sz=128",
        "title": "慧聪鞋网",
        "desc": "慧聪鞋网",
        "link": "http://www.shoes.hc360.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.worldsocks.com&sz=128",
        "title": "国际袜都",
        "desc": "国际袜都",
        "link": "http://www.worldsocks.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.nz86.com&sz=128",
        "title": "中国女装网",
        "desc": "中国女装网",
        "link": "http://www.nz86.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.wtobag.com&sz=128",
        "title": "全球箱包网",
        "desc": "全球箱包网",
        "link": "http://www.wtobag.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.tex365.com&sz=128",
        "title": "365纺织网",
        "desc": "365纺织网",
        "link": "http://www.tex365.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.fzmy.roboo.com&sz=128",
        "title": "中国服装贸易网",
        "desc": "中国服装贸易网",
        "link": "http://www.fzmy.roboo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.sjfzxm.com&sz=128",
        "title": "世界服装鞋帽网",
        "desc": "世界服装鞋帽网",
        "link": "http://www.sjfzxm.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.showfu.com&sz=128",
        "title": "中国服装服饰网",
        "desc": "中国服装服饰网",
        "link": "http://www.showfu.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.china-f.com&sz=128",
        "title": "中国纺织服装网",
        "desc": "中国纺织服装网",
        "link": "http://www.china-f.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.fashion86.com.cn&sz=128",
        "title": "服装服饰商贸网",
        "desc": "服装服饰商贸网",
        "link": "http://www.fashion86.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.fursmall.com.cn&sz=128",
        "title": "中国皮草批发网",
        "desc": "中国皮草批发网",
        "link": "http://www.fursmall.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cnxz.cn&sz=128",
        "title": "中国鞋网",
        "desc": "中国鞋网",
        "link": "http://www.cnxz.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.shoes.net.cn&sz=128",
        "title": "环球鞋网",
        "desc": "环球鞋网",
        "link": "http://www.shoes.net.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.socksb2b.com&sz=128",
        "title": "中国袜业网",
        "desc": "中国袜业网",
        "link": "http://www.socksb2b.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.81282.com&sz=128",
        "title": "泳装商贸网",
        "desc": "泳装商贸网",
        "link": "http://www.81282.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.texindex.com&sz=128",
        "title": "China Textile & Apparel Online",
        "desc": "China Textile & Apparel Online",
        "link": "http://www.texindex.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=binfen.biz&sz=128",
        "title": "学做衣服论坛",
        "desc": "学做衣服论坛",
        "link": "http://binfen.biz/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=bbs.tianya.cn&sz=128",
        "title": "服务纺织业天涯社区",
        "desc": "服务纺织业天涯社区",
        "link": "http://bbs.tianya.cn/list-447-1.shtml"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.eeff.net&sz=128",
        "title": "穿针引线论坛",
        "desc": "穿针引线论坛",
        "link": "https://www.eeff.net/forum.php"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.fzzxbbs.com&sz=128",
        "title": "飞针走秀论坛",
        "desc": "飞针走秀论坛",
        "link": "http://www.fzzxbbs.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=club.tnc.com.cn&sz=128",
        "title": "全球纺坛",
        "desc": "全球纺坛",
        "link": "https://club.tnc.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.51haojob.com&sz=128",
        "title": "服装人才网",
        "desc": "服装人才网",
        "link": "http://www.51haojob.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cfw.cn&sz=128",
        "title": "服装人才网专业网站",
        "desc": "服装人才网专业网站",
        "link": "http://www.cfw.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.leatherhr.com&sz=128",
        "title": "皮革人才网",
        "desc": "皮革人才网",
        "link": "http://www.leatherhr.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.xyrcw.cn&sz=128",
        "title": "中国鞋业人才网",
        "desc": "中国鞋业人才网",
        "link": "http://www.xyrcw.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cfw.cn&sz=128",
        "title": "中国服装人才网",
        "desc": "中国服装人才网",
        "link": "http://www.cfw.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.clothr.com&sz=128",
        "title": "服装英才网",
        "desc": "服装英才网",
        "link": "http://www.clothr.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.efjob.cn&sz=128",
        "title": "中国服装人才网",
        "desc": "中国服装人才网",
        "link": "http://www.efjob.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.efjob.cn&sz=128",
        "title": "服装人才网招聘官网",
        "desc": "服装人才网招聘官网",
        "link": "http://www.efjob.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.intertextile-home.com.cn&sz=128",
        "title": "上海家用纺织品及辅料展",
        "desc": "上海家用纺织品及辅料展",
        "link": "http://www.intertextile-home.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ckcf.cn&sz=128",
        "title": "上海针棉织品交易会",
        "desc": "上海针棉织品交易会",
        "link": "http://www.ckcf.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.intertextile.com.cn&sz=128",
        "title": "纺织面料及辅料(秋冬)博览会",
        "desc": "纺织面料及辅料(秋冬)博览会",
        "link": "http://www.intertextile.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chiconline.com.cn&sz=128",
        "title": "中国国际服装服饰展",
        "desc": "中国国际服装服饰展",
        "link": "http://www.chiconline.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.taispo.com.tw&sz=128",
        "title": "台北运动服饰/布料及配件展",
        "desc": "台北运动服饰/布料及配件展",
        "link": "https://www.taispo.com.tw/index.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.textileasia.com.pk&sz=128",
        "title": "巴基斯坦亚洲纺织展",
        "desc": "巴基斯坦亚洲纺织展",
        "link": "http://www.textileasia.com.pk/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=clothingtextilesfair.com&sz=128",
        "title": "巴基斯坦亚洲纺织服装展",
        "desc": "巴基斯坦亚洲纺织服装展",
        "link": "https://clothingtextilesfair.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.gftexpo.com&sz=128",
        "title": "GFT(泰国)",
        "desc": "GFT(泰国)",
        "link": "https://www.gftexpo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.previewinseoul.com&sz=128",
        "title": "韩国国际纺织展览会",
        "desc": "韩国国际纺织展览会",
        "link": "https://www.previewinseoul.com/fairDash.do"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=japantex.jp&sz=128",
        "title": "日本家用纺织品展",
        "desc": "日本家用纺织品展",
        "link": "http://japantex.jp/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=iplikfuari.com&sz=128",
        "title": "土耳其纱线/无纺布展",
        "desc": "土耳其纱线/无纺布展",
        "link": "http://iplikfuari.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=cnrevteks.com&sz=128",
        "title": "土耳其家纺展",
        "desc": "土耳其家纺展",
        "link": "http://cnrevteks.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=techtextil-india.in.messefrankfurt.com&sz=128",
        "title": "印度产业用纺织品/非织造布展",
        "desc": "印度产业用纺织品/非织造布展",
        "link": "https://techtextil-india.in.messefrankfurt.com/mumbai/en.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=mosshoes.com&sz=128",
        "title": "莫斯科国际鞋展",
        "desc": "莫斯科国际鞋展",
        "link": "https://mosshoes.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=textilexpo.ru&sz=128",
        "title": "俄联邦国际轻工纺织博览会",
        "desc": "俄联邦国际轻工纺织博览会",
        "link": "http://textilexpo.ru/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=hhexpo.ru&sz=128",
        "title": "俄罗斯春季家庭用品博览会",
        "desc": "俄罗斯春季家庭用品博览会",
        "link": "http://hhexpo.ru/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.kyivfashion.kiev.ua&sz=128",
        "title": "乌克兰服装面料及辅料展",
        "desc": "乌克兰服装面料及辅料展",
        "link": "https://www.kyivfashion.kiev.ua/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=exporivaschuh.it&sz=128",
        "title": "意大利加达鞋展",
        "desc": "意大利加达鞋展",
        "link": "https://exporivaschuh.it/it"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.milanounica.it&sz=128",
        "title": "意大利面料展",
        "desc": "意大利面料展",
        "link": "https://www.milanounica.it/it"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.readytoshow.it&sz=128",
        "title": "米兰纺织服装采购",
        "desc": "米兰纺织服装采购",
        "link": "http://www.readytoshow.it/home/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.couromoda.com&sz=128",
        "title": "圣保罗皮具箱包/服装展",
        "desc": "圣保罗皮具箱包/服装展",
        "link": "https://www.couromoda.com/noticias/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=gallery-shoes.com&sz=128",
        "title": "GDS鞋展",
        "desc": "GDS鞋展",
        "link": "https://gallery-shoes.com/?lang=en"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.moda-uk.co.uk&sz=128",
        "title": "英国伯明翰服装展",
        "desc": "英国伯明翰服装展",
        "link": "https://www.moda-uk.co.uk/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=heimtextil.messefrankfurt.com&sz=128",
        "title": "法兰克福家用纺织品展",
        "desc": "法兰克福家用纺织品展",
        "link": "https://heimtextil.messefrankfurt.com/frankfurt/en.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.asiaapparelexpo.com&sz=128",
        "title": "德国柏林-亚洲服装及配饰展",
        "desc": "德国柏林-亚洲服装及配饰展",
        "link": "https://www.asiaapparelexpo.com/en-index.php"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.munichfabricstart.com&sz=128",
        "title": "慕尼黑国际面料展",
        "desc": "慕尼黑国际面料展",
        "link": "https://www.munichfabricstart.com/home.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=igedo.com&sz=128",
        "title": "杜塞尔多夫服装展",
        "desc": "杜塞尔多夫服装展",
        "link": "https://igedo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.reedalcantara.com.br&sz=128",
        "title": "巴西纺织展",
        "desc": "巴西纺织展",
        "link": "https://www.reedalcantara.com.br/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=fimi.es&sz=128",
        "title": "巴伦西亚童装展",
        "desc": "巴伦西亚童装展",
        "link": "https://fimi.es/es/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.wsashow.com&sz=128",
        "title": "美国WSA鞋展",
        "desc": "美国WSA鞋展",
        "link": "http://www.wsashow.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=texworld-usa.us.messefrankfurt.com&sz=128",
        "title": "美国纽约面料展",
        "desc": "美国纽约面料展",
        "link": "https://texworld-usa.us.messefrankfurt.com/new-york/en.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ubmfashion.com&sz=128",
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
        "icon": "https://www.google.com/s2/favicons?domain=www.tex-asia.com&sz=128",
        "title": "亚洲纺织联盟网",
        "desc": "亚洲纺织联盟网",
        "link": "http://www.tex-asia.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.fabricschina.com.cn&sz=128",
        "title": "中国流行面料工程",
        "desc": "中国流行面料工程",
        "link": "http://www.fabricschina.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ctei.cn&sz=128",
        "title": "中国纺织经济信息网",
        "desc": "中国纺织经济信息网",
        "link": "http://www.ctei.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.tteb.com&sz=128",
        "title": "棉纺织信息网",
        "desc": "棉纺织信息网",
        "link": "https://www.tteb.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.webtex.cn&sz=128",
        "title": "第一纺织网",
        "desc": "第一纺织网",
        "link": "http://www.webtex.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.china-cotton.org&sz=128",
        "title": "中国棉花协会",
        "desc": "中国棉花协会",
        "link": "http://www.china-cotton.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cctti.com&sz=128",
        "title": "中国棉纺织技术信息网",
        "desc": "中国棉纺织技术信息网",
        "link": "http://www.cctti.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ctic.org.cn&sz=128",
        "title": "中国纺织信息中心",
        "desc": "中国纺织信息中心",
        "link": "http://www.ctic.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cottonchina.org&sz=128",
        "title": "中国棉花信息网",
        "desc": "中国棉花信息网",
        "link": "http://www.cottonchina.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ccpittex.com&sz=128",
        "title": "国际贸易促进委员会纺织分会",
        "desc": "国际贸易促进委员会纺织分会",
        "link": "http://www.ccpittex.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.fcl.org.cn&sz=128",
        "title": "中国纺织工业联合会检测网",
        "desc": "中国纺织工业联合会检测网",
        "link": "http://www.fcl.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ccct.org.cn&sz=128",
        "title": "中国纺织品进出口商会",
        "desc": "中国纺织品进出口商会",
        "link": "http://www.ccct.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.texleader.com.cn&sz=128",
        "title": "纺织导报",
        "desc": "纺织导报",
        "link": "http://www.texleader.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.texleader.com.cn&sz=128",
        "title": "纺织导报",
        "desc": "纺织导报",
        "link": "http://www.texleader.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ctes.com.cn&sz=128",
        "title": "中国纺织工程学会",
        "desc": "中国纺织工程学会",
        "link": "http://www.ctes.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.thaitextile.org&sz=128",
        "title": "泰国纺织协会",
        "desc": "泰国纺织协会",
        "link": "http://www.thaitextile.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.texi.org&sz=128",
        "title": "英国纺织协会",
        "desc": "英国纺织协会",
        "link": "http://www.texi.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.itmf.org&sz=128",
        "title": "瑞典纺织协会",
        "desc": "瑞典纺织协会",
        "link": "http://www.itmf.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.lpia.lt&sz=128",
        "title": "立陶宛服装纺织工业协会",
        "desc": "立陶宛服装纺织工业协会",
        "link": "http://www.lpia.lt/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ttmn.com&sz=128",
        "title": "中国纺机网",
        "desc": "中国纺机网",
        "link": "http://www.ttmn.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cttu.org&sz=128",
        "title": "中国纺织行业网",
        "desc": "中国纺织行业网",
        "link": "http://www.cttu.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ucmtf.com&sz=128",
        "title": "法国纺织机械协会",
        "desc": "法国纺织机械协会",
        "link": "http://www.ucmtf.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.wool.com&sz=128",
        "title": "苏格兰纺织网",
        "desc": "苏格兰纺织网",
        "link": "http://www.wool.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ywfz.org&sz=128",
        "title": "中国医疗纺织联盟",
        "desc": "中国医疗纺织联盟",
        "link": "http://www.ywfz.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ccpittex.com&sz=128",
        "title": "纺织促贸会",
        "desc": "纺织促贸会",
        "link": "http://www.ccpittex.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.textile.hc360.com&sz=128",
        "title": "慧聪网纺织",
        "desc": "慧聪网纺织",
        "link": "http://www.textile.hc360.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ctn1986.com&sz=128",
        "title": "中国纺织报",
        "desc": "中国纺织报",
        "link": "http://www.ctn1986.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.acimit.it&sz=128",
        "title": "意大利纺织机械协会",
        "desc": "意大利纺织机械协会",
        "link": "http://www.acimit.it/index.htm"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.craftyarncouncil.com&sz=128",
        "title": "美国编织纱线协会",
        "desc": "美国编织纱线协会",
        "link": "http://www.craftyarncouncil.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.carpet-rug.com&sz=128",
        "title": "美国毛毯协会",
        "desc": "美国毛毯协会",
        "link": "http://www.carpet-rug.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cottonusa.org&sz=128",
        "title": "美国棉花协会",
        "desc": "美国棉花协会",
        "link": "http://www.cottonusa.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ccf.com.cn&sz=128",
        "title": "化纤信息网",
        "desc": "化纤信息网",
        "link": "http://www.ccf.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.emergingtextiles.com&sz=128",
        "title": "美国纺织新闻网",
        "desc": "美国纺织新闻网",
        "link": "http://www.emergingtextiles.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.hometexnet.com&sz=128",
        "title": "中国家纺网",
        "desc": "中国家纺网",
        "link": "http://www.hometexnet.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ccct.org.cn&sz=128",
        "title": "中国纺织进出口商会",
        "desc": "中国纺织进出口商会",
        "link": "http://www.ccct.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ctma.net&sz=128",
        "title": "中国纺织机械器材工业协会",
        "desc": "中国纺织机械器材工业协会",
        "link": "http://www.ctma.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cncotton.com&sz=128",
        "title": "中国棉花网",
        "desc": "中国棉花网",
        "link": "http://www.cncotton.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=info.texnet.com.cn&sz=128",
        "title": "纺织资讯",
        "desc": "纺织资讯",
        "link": "http://info.texnet.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.wool.com&sz=128",
        "title": "澳大利亚羊毛网",
        "desc": "澳大利亚羊毛网",
        "link": "http://www.wool.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ifj.com&sz=128",
        "title": "国际纤维报",
        "desc": "国际纤维报",
        "link": "http://www.ifj.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.tteb.com&sz=128",
        "title": "棉纺织信息网",
        "desc": "棉纺织信息网",
        "link": "https://www.tteb.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.scsilk.com&sz=128",
        "title": "四川丝绸网",
        "desc": "四川丝绸网",
        "link": "http://www.scsilk.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cfd.com.cn&sz=128",
        "title": "中国羽绒信息网",
        "desc": "中国羽绒信息网",
        "link": "http://www.cfd.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.esilk.net&sz=128",
        "title": "中国茧丝绸交易市场",
        "desc": "中国茧丝绸交易市场",
        "link": "http://www.esilk.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.silkcapital.com&sz=128",
        "title": "中国绸都网",
        "desc": "中国绸都网",
        "link": "http://www.silkcapital.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.fibreadd.com&sz=128",
        "title": "中国纺织助剂网",
        "desc": "中国纺织助剂网",
        "link": "http://www.fibreadd.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.hometex114.com&sz=128",
        "title": "中华家纺网",
        "desc": "中华家纺网",
        "link": "http://www.hometex114.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.tteb.com&sz=128",
        "title": "中国棉纺织信息网",
        "desc": "中国棉纺织信息网",
        "link": "http://www.tteb.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ttmn.com&sz=128",
        "title": "中国纺机网",
        "desc": "中国纺机网",
        "link": "http://www.ttmn.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.tnc.com.cn&sz=128",
        "title": "全球纺织网",
        "desc": "全球纺织网",
        "link": "http://www.tnc.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.texnet.com.cn&sz=128",
        "title": "中国纺织网",
        "desc": "中国纺织网",
        "link": "http://www.texnet.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cttm.net&sz=128",
        "title": "中国纺织机械网",
        "desc": "中国纺织机械网",
        "link": "http://www.cttm.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.sinotex.net&sz=128",
        "title": "锦桥纺织网",
        "desc": "锦桥纺织网",
        "link": "http://www.sinotex.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.eck.com.cn&sz=128",
        "title": "中国针织网",
        "desc": "中国针织网",
        "link": "http://www.eck.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.texindex.com.cn&sz=128",
        "title": "中华纺织网",
        "desc": "中华纺织网",
        "link": "http://www.texindex.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ttfj.com&sz=128",
        "title": "纺机商城",
        "desc": "纺机商城",
        "link": "http://www.ttfj.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cntma.com&sz=128",
        "title": "中华纺机网",
        "desc": "中华纺机网",
        "link": "http://www.cntma.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.textile.hc360.com&sz=128",
        "title": "慧聪纺织频道",
        "desc": "慧聪纺织频道",
        "link": "http://www.textile.hc360.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ccf.com.cn&sz=128",
        "title": "中国化纤信息网",
        "desc": "中国化纤信息网",
        "link": "http://www.ccf.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.hometexnet.com&sz=128",
        "title": "家纺网",
        "desc": "家纺网",
        "link": "http://www.hometexnet.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.socotton.com&sz=128",
        "title": "中国棉花交易网",
        "desc": "中国棉花交易网",
        "link": "http://www.socotton.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.yrzx.net&sz=128",
        "title": "中华印染网",
        "desc": "中华印染网",
        "link": "http://www.yrzx.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=search.texnet.com.cn&sz=128",
        "title": "纺织搜索",
        "desc": "纺织搜索",
        "link": "http://search.texnet.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.fibreinfo.com&sz=128",
        "title": "中国丙纶网",
        "desc": "中国丙纶网",
        "link": "http://www.fibreinfo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.fzfzjx.com&sz=128",
        "title": "纺织服装机械网",
        "desc": "纺织服装机械网",
        "link": "http://www.fzfzjx.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ctmec.cn&sz=128",
        "title": "中纺商城",
        "desc": "中纺商城",
        "link": "http://www.ctmec.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.sinotex.cn&sz=128",
        "title": "锦桥纺织网",
        "desc": "锦桥纺织网",
        "link": "https://www.sinotex.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.sewworld.com&sz=128",
        "title": "中国缝制设备网",
        "desc": "中国缝制设备网",
        "link": "http://www.sewworld.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ttmn.com&sz=128",
        "title": "中国纺机网",
        "desc": "中国纺机网",
        "link": "http://www.ttmn.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.qfc.cn&sz=128",
        "title": "网上轻纺网",
        "desc": "网上轻纺网",
        "link": "http://www.qfc.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.qfc.cn&sz=128",
        "title": "网上轻纺城",
        "desc": "网上轻纺城",
        "link": "https://www.qfc.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=dyeschem.dazpin.com&sz=128",
        "title": "染化交易市场",
        "desc": "染化交易市场",
        "link": "https://dyeschem.dazpin.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.esilk.net&sz=128",
        "title": "茧丝绸交易市场",
        "desc": "茧丝绸交易市场",
        "link": "http://www.esilk.net/web/Default.aspx"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.straitex.com&sz=128",
        "title": "海峡纺织网",
        "desc": "海峡纺织网",
        "link": "http://www.straitex.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.tex86.cn&sz=128",
        "title": "纺织交易网",
        "desc": "纺织交易网",
        "link": "http://www.tex86.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.tex.org.cn&sz=128",
        "title": "中国纺织品网",
        "desc": "中国纺织品网",
        "link": "http://www.tex.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.textileweb.com&sz=128",
        "title": "textile web",
        "desc": "textile web",
        "link": "http://www.textileweb.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.texoffer.com&sz=128",
        "title": "Texoffer",
        "desc": "Texoffer",
        "link": "http://www.texoffer.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.yarnsandfibers.com&sz=128",
        "title": "textile B2B",
        "desc": "textile B2B",
        "link": "http://www.yarnsandfibers.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.leatherhr.com&sz=128",
        "title": "皮革人才网",
        "desc": "皮革人才网",
        "link": "http://www.leatherhr.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=weave.job1001.com&sz=128",
        "title": "一览纺织英才网",
        "desc": "一览纺织英才网",
        "link": "http://weave.job1001.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.51haojob.com&sz=128",
        "title": "服装人才网",
        "desc": "服装人才网",
        "link": "http://www.51haojob.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.texrc.net&sz=128",
        "title": "纺织人才网",
        "desc": "纺织人才网",
        "link": "http://www.texrc.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cntexjob.com&sz=128",
        "title": "中国纺织招牌网",
        "desc": "中国纺织招牌网",
        "link": "http://www.cntexjob.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.texhr.cn&sz=128",
        "title": "中国纺织人才网",
        "desc": "中国纺织人才网",
        "link": "http://www.texhr.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.intertextile-home.com.cn&sz=128",
        "title": "上海家用纺织品及辅料展",
        "desc": "上海家用纺织品及辅料展",
        "link": "http://www.intertextile-home.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ckcf.cn&sz=128",
        "title": "上海针棉织品交易会",
        "desc": "上海针棉织品交易会",
        "link": "http://www.ckcf.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.intertextile.com.cn&sz=128",
        "title": "纺织面料及辅料(秋冬)博览会",
        "desc": "纺织面料及辅料(秋冬)博览会",
        "link": "http://www.intertextile.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.textileasia.com.pk&sz=128",
        "title": "巴基斯坦亚洲纺织展",
        "desc": "巴基斯坦亚洲纺织展",
        "link": "http://www.textileasia.com.pk/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=clothingtextilesfair.com&sz=128",
        "title": "巴基斯坦亚洲纺织服装展",
        "desc": "巴基斯坦亚洲纺织服装展",
        "link": "https://clothingtextilesfair.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=iplikfuari.com&sz=128",
        "title": "土耳其纱线/无纺布展",
        "desc": "土耳其纱线/无纺布展",
        "link": "http://iplikfuari.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=cnrevteks.com&sz=128",
        "title": "土耳其家纺展",
        "desc": "土耳其家纺展",
        "link": "http://cnrevteks.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.previewinseoul.com&sz=128",
        "title": "韩国国际纺织展览会",
        "desc": "韩国国际纺织展览会",
        "link": "https://www.previewinseoul.com/fairDash.do"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=japantex.jp&sz=128",
        "title": "日本家用纺织品展",
        "desc": "日本家用纺织品展",
        "link": "http://japantex.jp/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.kyivfashion.kiev.ua&sz=128",
        "title": "乌克兰服装面料及辅料展",
        "desc": "乌克兰服装面料及辅料展",
        "link": "https://www.kyivfashion.kiev.ua/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=textilexpo.ru&sz=128",
        "title": "俄联邦国际轻工纺织博览会",
        "desc": "俄联邦国际轻工纺织博览会",
        "link": "http://textilexpo.ru/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=techtextil-india.in.messefrankfurt.com&sz=128",
        "title": "印度产业用纺织品/非织造布展",
        "desc": "印度产业用纺织品/非织造布展",
        "link": "https://techtextil-india.in.messefrankfurt.com/mumbai/en.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.milanounica.it&sz=128",
        "title": "意大利面料展",
        "desc": "意大利面料展",
        "link": "https://www.milanounica.it/it"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=heimtextil.messefrankfurt.com&sz=128",
        "title": "法兰克福家用纺织品展",
        "desc": "法兰克福家用纺织品展",
        "link": "https://heimtextil.messefrankfurt.com/frankfurt/en.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.reedalcantara.com.br&sz=128",
        "title": "巴西纺织展",
        "desc": "巴西纺织展",
        "link": "https://www.reedalcantara.com.br/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.munichfabricstart.com&sz=128",
        "title": "慕尼黑国际面料展",
        "desc": "慕尼黑国际面料展",
        "link": "https://www.munichfabricstart.com/home.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=texworld-usa.us.messefrankfurt.com&sz=128",
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
        "icon": "https://www.google.com/s2/favicons?domain=www.csa.org.cn&sz=128",
        "title": "中国文教体育用品协会",
        "desc": "中国文教体育用品协会",
        "link": "http://www.csa.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chyxx.com&sz=128",
        "title": "中国产业信息-办公文教",
        "desc": "中国产业信息-办公文教",
        "link": "http://www.chyxx.com/industry/wenjiao/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.hc1688.cn&sz=128",
        "title": "中国办公耗材网",
        "desc": "中国办公耗材网",
        "link": "http://www.hc1688.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=office.pconline.com.cn&sz=128",
        "title": "太平洋网办公设备",
        "desc": "太平洋网办公设备",
        "link": "http://office.pconline.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ceiea.com&sz=128",
        "title": "中国教育装备网",
        "desc": "中国教育装备网",
        "link": "http://www.ceiea.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinawenti.com&sz=128",
        "title": "中国文体用品网",
        "desc": "中国文体用品网",
        "link": "http://www.chinawenti.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=haocai.it168.com&sz=128",
        "title": "IT168办公耗材",
        "desc": "IT168办公耗材",
        "link": "http://haocai.it168.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=oa.yesky.com&sz=128",
        "title": "天极网办公外设",
        "desc": "天极网办公外设",
        "link": "http://oa.yesky.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=info.it.hc360.com&sz=128",
        "title": "慧聪网耗材专栏",
        "desc": "慧聪网耗材专栏",
        "link": "http://info.it.hc360.com/list/zt_haoc.shtml"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ccoea.org.cn&sz=128",
        "title": "中国文化办公设备制造行业",
        "desc": "中国文化办公设备制造行业",
        "link": "http://www.ccoea.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinasigns.cn&sz=128",
        "title": "中国标识网",
        "desc": "中国标识网",
        "link": "http://www.chinasigns.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=oa.zol.com.cn&sz=128",
        "title": "中关村办公打印",
        "desc": "中关村办公打印",
        "link": "http://oa.zol.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.pm168.net&sz=128",
        "title": "华人喷码网",
        "desc": "华人喷码网",
        "link": "http://www.pm168.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=wjbg.globalbuy.cc&sz=128",
        "title": "全球采购网-文教办公网",
        "desc": "全球采购网-文教办公网",
        "link": "http://wjbg.globalbuy.cc/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.21wenju.com&sz=128",
        "title": "世纪文具网",
        "desc": "世纪文具网",
        "link": "http://www.21wenju.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cnjiaoju.com&sz=128",
        "title": "中华教具网",
        "desc": "中华教具网",
        "link": "https://www.cnjiaoju.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.31wenju.com&sz=128",
        "title": "文具网",
        "desc": "文具网",
        "link": "http://www.31wenju.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.31paper.com&sz=128",
        "title": "纸业网",
        "desc": "纸业网",
        "link": "http://www.31paper.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.safes.org.cn&sz=128",
        "title": "保险箱行业网",
        "desc": "保险箱行业网",
        "link": "http://www.safes.org.cn/safe/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.epenma.com&sz=128",
        "title": "中国喷码机网",
        "desc": "中国喷码机网",
        "link": "http://www.epenma.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.pm114.com&sz=128",
        "title": "中国喷码标识网",
        "desc": "中国喷码标识网",
        "link": "http://www.pm114.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.haocaicn.com&sz=128",
        "title": "打印耗材网",
        "desc": "打印耗材网",
        "link": "http://www.haocaicn.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.wenjucn.com&sz=128",
        "title": "文具产业网",
        "desc": "文具产业网",
        "link": "http://www.wenjucn.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.bgzj.net&sz=128",
        "title": "办公之家网",
        "desc": "办公之家网",
        "link": "http://www.bgzj.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.wjyh.com&sz=128",
        "title": "文具1号",
        "desc": "文具1号",
        "link": "https://www.wjyh.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.wjhyw.cn&sz=128",
        "title": "中国文具行业网",
        "desc": "中国文具行业网",
        "link": "http://www.wjhyw.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.wenju.biz&sz=128",
        "title": "中国文具网",
        "desc": "中国文具网",
        "link": "http://www.wenju.biz/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=bangong.huangye88.com&sz=128",
        "title": "88办公网",
        "desc": "88办公网",
        "link": "http://bangong.huangye88.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.iowoo.com&sz=128",
        "title": "中国文化用品网",
        "desc": "中国文化用品网",
        "link": "http://www.iowoo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.oachn.net&sz=128",
        "title": "打印机维修论坛",
        "desc": "打印机维修论坛",
        "link": "http://www.oachn.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.oahelp.net&sz=128",
        "title": "普广打印机论坛",
        "desc": "普广打印机论坛",
        "link": "http://www.oahelp.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=bbs.zol.com.cn&sz=128",
        "title": "办公软件论坛",
        "desc": "办公软件论坛",
        "link": "http://bbs.zol.com.cn/softbbs/s932.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.rechinaexpo.com&sz=128",
        "title": "亚洲打印耗材展",
        "desc": "亚洲打印耗材展",
        "link": "http://www.rechinaexpo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.isot.jp&sz=128",
        "title": "日本东京文具展",
        "desc": "日本东京文具展",
        "link": "https://www.isot.jp/ja-jp.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ssofair.com&sz=128",
        "title": "中国义乌文化产品交易会",
        "desc": "中国义乌文化产品交易会",
        "link": "http://www.ssofair.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=paperworld-middle-east.ae.messefrankfurt.com&sz=128",
        "title": "迪拜办公文具展",
        "desc": "迪拜办公文具展",
        "link": "https://paperworld-middle-east.ae.messefrankfurt.com/dubai/en.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.bibf.net&sz=128",
        "title": "北京国际图书博览会",
        "desc": "北京国际图书博览会",
        "link": "http://www.bibf.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.taispo.com.tw&sz=128",
        "title": "台北体育用品展",
        "desc": "台北体育用品展",
        "link": "https://www.taispo.com.tw/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=adbookfair.com&sz=128",
        "title": "阿布扎比图书展",
        "desc": "阿布扎比图书展",
        "link": "https://adbookfair.com/en/default.aspx"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.paperarabia.com&sz=128",
        "title": "阿拉伯迪拜纸业展",
        "desc": "阿拉伯迪拜纸业展",
        "link": "https://www.paperarabia.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.sports-show.ru&sz=128",
        "title": "莫斯科体育用品展",
        "desc": "莫斯科体育用品展",
        "link": "http://www.sports-show.ru/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.bookfair.bolognafiere.it&sz=128",
        "title": "博洛尼亚少儿图书展",
        "desc": "博洛尼亚少儿图书展",
        "link": "http://www.bookfair.bolognafiere.it/home/878.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.londonbookfair.co.uk&sz=128",
        "title": "英国伦敦书展",
        "desc": "英国伦敦书展",
        "link": "https://www.londonbookfair.co.uk/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.buchmesse.de&sz=128",
        "title": "法兰克福图书展",
        "desc": "法兰克福图书展",
        "link": "https://www.buchmesse.de/en"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.spogagafa.com&sz=128",
        "title": "德国体育用品/露营设备/园林生活展",
        "desc": "德国体育用品/露营设备/园林生活展",
        "link": "https://www.spogagafa.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.outdoor-friedrichshafen.com&sz=128",
        "title": "德国菲德里斯哈芬户外休闲展",
        "desc": "德国菲德里斯哈芬户外休闲展",
        "link": "http://www.outdoor-friedrichshafen.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ispo.com&sz=128",
        "title": "慕尼黑体育用品展ISPO",
        "desc": "慕尼黑体育用品展ISPO",
        "link": "https://www.ispo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.nationalstationeryshow.com&sz=128",
        "title": "纽约全美文具博览会",
        "desc": "纽约全美文具博览会",
        "link": "https://www.nationalstationeryshow.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.bookexpoamerica.com&sz=128",
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
        "icon": "https://www.google.com/s2/favicons?domain=www.cccfna.org.cn&sz=128",
        "title": "中国食品土畜进出口商会",
        "desc": "中国食品土畜进出口商会",
        "link": "http://www.cccfna.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinabeverage.org&sz=128",
        "title": "中国饮料工业协会",
        "desc": "中国饮料工业协会",
        "link": "http://www.chinabeverage.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cnfoodnews.com&sz=128",
        "title": "中国食事传媒",
        "desc": "中国食事传媒",
        "link": "http://www.cnfoodnews.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ofrcc.com&sz=128",
        "title": "南京环球有机食品研究咨询中心",
        "desc": "南京环球有机食品研究咨询中心",
        "link": "http://www.ofrcc.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.greenfood.org.cn&sz=128",
        "title": "中国绿色食品网",
        "desc": "中国绿色食品网",
        "link": "http://www.greenfood.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cnfood.cn&sz=128",
        "title": "中国食品报网",
        "desc": "中国食品报网",
        "link": "http://www.cnfood.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=cfaa.cn&sz=128",
        "title": "中国食品添加剂和配料资讯网",
        "desc": "中国食品添加剂和配料资讯网",
        "link": "http://cfaa.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.lookvin.com&sz=128",
        "title": "乐酒客",
        "desc": "乐酒客",
        "link": "http://www.lookvin.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=cnfdn.com&sz=128",
        "title": "中国食品监督网",
        "desc": "中国食品监督网",
        "link": "http://cnfdn.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.foodmate.net&sz=128",
        "title": "食品伙伴网",
        "desc": "食品伙伴网",
        "link": "http://www.foodmate.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.vegnet.com.cn&sz=128",
        "title": "蔬菜网",
        "desc": "蔬菜网",
        "link": "http://www.vegnet.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.puercn.com&sz=128",
        "title": "普洱茶网",
        "desc": "普洱茶网",
        "link": "http://www.puercn.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.zhujiage.com.cn&sz=128",
        "title": "猪价格网",
        "desc": "猪价格网",
        "link": "http://www.zhujiage.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=culture.importfood.net&sz=128",
        "title": "世界美食文化",
        "desc": "世界美食文化",
        "link": "http://culture.importfood.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cofeed.com&sz=128",
        "title": "天下粮仓",
        "desc": "天下粮仓",
        "link": "http://www.cofeed.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinafood365.com&sz=128",
        "title": "中国食品网",
        "desc": "中国食品网",
        "link": "http://www.chinafood365.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.wines-info.com&sz=128",
        "title": "中国葡萄酒资讯网",
        "desc": "中国葡萄酒资讯网",
        "link": "http://www.wines-info.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.winechina.com&sz=128",
        "title": "中国葡萄酒信息网",
        "desc": "中国葡萄酒信息网",
        "link": "http://www.winechina.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.tjkx.com&sz=128",
        "title": "糖酒快讯",
        "desc": "糖酒快讯",
        "link": "http://www.tjkx.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.dashipin.com&sz=128",
        "title": "大食品网",
        "desc": "大食品网",
        "link": "http://www.dashipin.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.6eat.com&sz=128",
        "title": "中国吃网",
        "desc": "中国吃网",
        "link": "http://www.6eat.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.tangjiu.com&sz=128",
        "title": "中国糖酒网",
        "desc": "中国糖酒网",
        "link": "http://www.tangjiu.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.foodmate.net&sz=128",
        "title": "食品伙伴网",
        "desc": "食品伙伴网",
        "link": "http://www.foodmate.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jiunews.com&sz=128",
        "title": "酒业新闻网",
        "desc": "酒业新闻网",
        "link": "http://www.jiunews.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jiu.cn&sz=128",
        "title": "中华酒网",
        "desc": "中华酒网",
        "link": "http://www.jiu.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=wenku.foodmate.net&sz=128",
        "title": "食品文库",
        "desc": "食品文库",
        "link": "http://wenku.foodmate.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ynsugar.com&sz=128",
        "title": "云南糖网",
        "desc": "云南糖网",
        "link": "http://www.ynsugar.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.food.hc360.com&sz=128",
        "title": "慧聪食品工业",
        "desc": "慧聪食品工业",
        "link": "http://www.food.hc360.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.tienwine.com&sz=128",
        "title": "红酒代理",
        "desc": "红酒代理",
        "link": "http://www.tienwine.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.zgtjh.com&sz=128",
        "title": "中国糖酒会",
        "desc": "中国糖酒会",
        "link": "http://www.zgtjh.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.t0001.com&sz=128",
        "title": "第一茶叶网",
        "desc": "第一茶叶网",
        "link": "http://www.t0001.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=sp588.cc&sz=128",
        "title": "世界食品网",
        "desc": "世界食品网",
        "link": "http://sp588.cc/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.teanet.com.cn&sz=128",
        "title": "中茶网",
        "desc": "中茶网",
        "link": "http://www.teanet.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinagrain.cn&sz=128",
        "title": "中国粮油信息网",
        "desc": "中国粮油信息网",
        "link": "http://www.chinagrain.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.puerlife.com&sz=128",
        "title": "云南普洱茶",
        "desc": "云南普洱茶",
        "link": "http://www.puerlife.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.oilcn.com&sz=128",
        "title": "中国食用油信息网",
        "desc": "中国食用油信息网",
        "link": "http://www.oilcn.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinacondiment.com&sz=128",
        "title": "中国调味品网",
        "desc": "中国调味品网",
        "link": "http://www.chinacondiment.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.xfrb.com.cn&sz=128",
        "title": "消费日报网",
        "desc": "消费日报网",
        "link": "http://www.xfrb.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.sea-ex.com&sz=128",
        "title": "sea-ex",
        "desc": "sea-ex",
        "link": "http://www.sea-ex.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.foods1.com&sz=128",
        "title": "第一食品网",
        "desc": "第一食品网",
        "link": "http://www.foods1.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.21food.cn&sz=128",
        "title": "中国食品商务网",
        "desc": "中国食品商务网",
        "link": "http://www.21food.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.spjxcn.com&sz=128",
        "title": "食品机械行业网",
        "desc": "食品机械行业网",
        "link": "http://www.spjxcn.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.21food.com&sz=128",
        "title": "21 Food Online",
        "desc": "21 Food Online",
        "link": "https://www.21food.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.tech-food.com&sz=128",
        "title": "中国食品科技网",
        "desc": "中国食品科技网",
        "link": "http://www.tech-food.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.foodjx.com&sz=128",
        "title": "食品机械网",
        "desc": "食品机械网",
        "link": "http://www.foodjx.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.spzs.com&sz=128",
        "title": "食品招商网",
        "desc": "食品招商网",
        "link": "http://www.spzs.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.31food.com&sz=128",
        "title": "食品生意网",
        "desc": "食品生意网",
        "link": "http://www.31food.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cnfood.net&sz=128",
        "title": "中国食品行业网",
        "desc": "中国食品行业网",
        "link": "http://www.cnfood.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.sjgle.com&sz=128",
        "title": "食品加工在线",
        "desc": "食品加工在线",
        "link": "https://www.sjgle.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.foode.com.cn&sz=128",
        "title": "中国食品设备网",
        "desc": "中国食品设备网",
        "link": "http://www.foode.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.spsb114.com&sz=128",
        "title": "食品设备网",
        "desc": "食品设备网",
        "link": "http://www.spsb114.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ifooday.cn&sz=128",
        "title": "环球食品商业网",
        "desc": "环球食品商业网",
        "link": "http://www.ifooday.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.31tjj.com&sz=128",
        "title": "食品添加剂网",
        "desc": "食品添加剂网",
        "link": "http://www.31tjj.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ylw168.com&sz=128",
        "title": "饮料招商网",
        "desc": "饮料招商网",
        "link": "http://www.ylw168.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.tjkx.com&sz=128",
        "title": "糖酒快讯",
        "desc": "糖酒快讯",
        "link": "http://www.tjkx.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.foodqs.cn&sz=128",
        "title": "中国食品产业网",
        "desc": "中国食品产业网",
        "link": "http://www.foodqs.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.bjspw.com&sz=128",
        "title": "21保健品网",
        "desc": "21保健品网",
        "link": "http://www.bjspw.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.importfood.net&sz=128",
        "title": "进口食品网",
        "desc": "进口食品网",
        "link": "http://www.importfood.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.bensino.com&sz=128",
        "title": "伴夏茶网",
        "desc": "伴夏茶网",
        "link": "http://www.bensino.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.t988.com&sz=128",
        "title": "糖酒巴巴",
        "desc": "糖酒巴巴",
        "link": "http://www.t988.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.emushroom.net&sz=128",
        "title": "易菇网",
        "desc": "易菇网",
        "link": "http://www.emushroom.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.foodmarketexchange.com&sz=128",
        "title": "foodmarket",
        "desc": "foodmarket",
        "link": "http://www.foodmarketexchange.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.foodonline.com&sz=128",
        "title": "food online",
        "desc": "food online",
        "link": "http://www.foodonline.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.agrotrade.net&sz=128",
        "title": "agrotrade",
        "desc": "agrotrade",
        "link": "http://www.agrotrade.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=bbs.foodmate.net&sz=128",
        "title": "食品论坛",
        "desc": "食品论坛",
        "link": "http://bbs.foodmate.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=bbs.tech-food.com&sz=128",
        "title": "中国食品论坛",
        "desc": "中国食品论坛",
        "link": "http://bbs.tech-food.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.foodbbs.com.cn&sz=128",
        "title": "民以食为天",
        "desc": "民以食为天",
        "link": "http://www.foodbbs.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=job.foodmate.net&sz=128",
        "title": "中国食品人才网",
        "desc": "中国食品人才网",
        "link": "http://job.foodmate.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.foodhr.cn&sz=128",
        "title": "食品人才招聘网",
        "desc": "食品人才招聘网",
        "link": "http://www.foodhr.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.asiafruitlogistica.com&sz=128",
        "title": "亚洲香港国际果蔬展",
        "desc": "亚洲香港国际果蔬展",
        "link": "https://www.asiafruitlogistica.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=event.hktdc.com&sz=128",
        "title": "香港国际美酒展",
        "desc": "香港国际美酒展",
        "link": "https://event.hktdc.com/fair/hkwinefair-en/HKTDC-Hong-Kong-International-Wine-and-Spirits-Fair/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.yummex-me.com&sz=128",
        "title": "迪拜甜食及休闲食品展",
        "desc": "迪拜甜食及休闲食品展",
        "link": "https://www.yummex-me.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.gulfood.com&sz=128",
        "title": "迪拜海湾食品及食品机械展",
        "desc": "迪拜海湾食品及食品机械展",
        "link": "https://www.gulfood.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.seafexme.com&sz=128",
        "title": "迪拜冷冻海鲜食品展",
        "desc": "迪拜冷冻海鲜食品展",
        "link": "https://www.seafexme.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.sialme.com&sz=128",
        "title": "中东国际食品展",
        "desc": "中东国际食品展",
        "link": "https://www.sialme.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.sialme.com&sz=128",
        "title": "中东食品饮料展",
        "desc": "中东食品饮料展",
        "link": "https://www.sialme.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.foodtecindia.com&sz=128",
        "title": "孟买食品加工与包装技术展",
        "desc": "孟买食品加工与包装技术展",
        "link": "http://www.foodtecindia.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ifiajapan.com&sz=128",
        "title": "东京健康食品展",
        "desc": "东京健康食品展",
        "link": "https://www.ifiajapan.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.foomajapan.jp&sz=128",
        "title": "东京食品工业展",
        "desc": "东京食品工业展",
        "link": "http://www.foomajapan.jp/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jma.or.jp&sz=128",
        "title": "日本东京食品及饮料展",
        "desc": "日本东京食品及饮料展",
        "link": "https://www.jma.or.jp/foodex/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.seoulfoodnhotel.co.kr&sz=128",
        "title": "首尔食品酒店展",
        "desc": "首尔食品酒店展",
        "link": "http://www.seoulfoodnhotel.co.kr/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=sialinterfood.com&sz=128",
        "title": "印尼食品展",
        "desc": "印尼食品展",
        "link": "http://sialinterfood.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=sialinterfood.com&sz=128",
        "title": "印尼食品配料展",
        "desc": "印尼食品配料展",
        "link": "http://sialinterfood.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=thaifex-anuga.com&sz=128",
        "title": "泰国曼谷亚洲世界食品展",
        "desc": "泰国曼谷亚洲世界食品展",
        "link": "https://thaifex-anuga.com/en/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=thaifex-anuga.com&sz=128",
        "title": "泰国食品展",
        "desc": "泰国食品展",
        "link": "https://thaifex-anuga.com/en/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.world-food.ru&sz=128",
        "title": "莫斯科国际食品展",
        "desc": "莫斯科国际食品展",
        "link": "https://www.world-food.ru/Home"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.agroprodmash-expo.ru&sz=128",
        "title": "莫斯科食品加工/包装机械展",
        "desc": "莫斯科食品加工/包装机械展",
        "link": "http://www.agroprodmash-expo.ru/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.prod-expo.ru&sz=128",
        "title": "莫斯科食品及饮料展",
        "desc": "莫斯科食品及饮料展",
        "link": "http://www.prod-expo.ru/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.worldfood.kz&sz=128",
        "title": "哈萨克斯坦食品展",
        "desc": "哈萨克斯坦食品展",
        "link": "https://www.worldfood.kz/ru/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.worldfood.com.ua&sz=128",
        "title": "乌克兰食品博览会",
        "desc": "乌克兰食品博览会",
        "link": "http://www.worldfood.com.ua/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.foodtaipei.com.tw&sz=128",
        "title": "台北食品展",
        "desc": "台北食品展",
        "link": "https://www.foodtaipei.com.tw/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.foodkh.com.tw&sz=128",
        "title": "台湾高雄食品展",
        "desc": "台湾高雄食品展",
        "link": "https://www.foodkh.com.tw/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ife.co.uk&sz=128",
        "title": "伦敦食品饮料及添加剂展",
        "desc": "伦敦食品饮料及添加剂展",
        "link": "https://www.ife.co.uk/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.londonwinefair.com&sz=128",
        "title": "英国伦敦国际酒类展",
        "desc": "英国伦敦国际酒类展",
        "link": "https://www.londonwinefair.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=alimentaria.com&sz=128",
        "title": "西班牙食品及饮料展",
        "desc": "西班牙食品及饮料展",
        "link": "https://alimentaria.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.drinktec.com&sz=128",
        "title": "慕尼黑饮料及液体食物技术展",
        "desc": "慕尼黑饮料及液体食物技术展",
        "link": "https://www.drinktec.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.prosweets.de&sz=128",
        "title": "科隆糖果原料和机械展",
        "desc": "科隆糖果原料和机械展",
        "link": "https://www.prosweets.de/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.figlobal.com&sz=128",
        "title": "欧洲食品配料展",
        "desc": "欧洲食品配料展",
        "link": "https://www.figlobal.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.sialparis.com&sz=128",
        "title": "法国SIAL食品及饮料展",
        "desc": "法国SIAL食品及饮料展",
        "link": "https://www.sialparis.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.fruitlogistica.de&sz=128",
        "title": "德国柏林果蔬展",
        "desc": "德国柏林果蔬展",
        "link": "https://www.fruitlogistica.de/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.anugafoodtec.com&sz=128",
        "title": "科隆食品技术和机械展",
        "desc": "科隆食品技术和机械展",
        "link": "https://www.anugafoodtec.com/aft/index-4.php"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.alimentaria-mexico.com&sz=128",
        "title": "墨西哥食品饮料展",
        "desc": "墨西哥食品饮料展",
        "link": "http://www.alimentaria-mexico.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.anuga.com&sz=128",
        "title": "科隆国际食品展",
        "desc": "科隆国际食品展",
        "link": "https://www.anuga.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ism-cologne.com&sz=128",
        "title": "科隆ISM糖果及休闲食品展",
        "desc": "科隆ISM糖果及休闲食品展",
        "link": "https://www.ism-cologne.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=feriaalimentec.com&sz=128",
        "title": "哥伦比亚食品与饮料展览会",
        "desc": "哥伦比亚食品与饮料展览会",
        "link": "https://feriaalimentec.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.confitexpo.com&sz=128",
        "title": "墨西哥瓜达拉哈拉甜食展",
        "desc": "墨西哥瓜达拉哈拉甜食展",
        "link": "http://www.confitexpo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.informamarkets.com&sz=128",
        "title": "巴西圣保罗食品服务及工业展",
        "desc": "巴西圣保罗食品服务及工业展",
        "link": "https://www.informamarkets.com/en/regions/south-america.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=sialcanada.com&sz=128",
        "title": "加拿大国际食品展",
        "desc": "加拿大国际食品展",
        "link": "https://sialcanada.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=finefoodaustralia.com.au&sz=128",
        "title": "澳大利亚国际食品展",
        "desc": "澳大利亚国际食品展",
        "link": "https://finefoodaustralia.com.au/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=sweetsandsnacks.com&sz=128",
        "title": "芝加哥糖果及休闲食品展",
        "desc": "芝加哥糖果及休闲食品展",
        "link": "https://sweetsandsnacks.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.nationalrestaurantshow.com&sz=128",
        "title": "芝加哥餐饮/酒店用品展",
        "desc": "芝加哥餐饮/酒店用品展",
        "link": "https://www.nationalrestaurantshow.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.specialtyfood.com&sz=128",
        "title": "美国旧金山特色食品冬季展",
        "desc": "美国旧金山特色食品冬季展",
        "link": "https://www.specialtyfood.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=finefoodaustralia.com.au&sz=128",
        "title": "澳大利亚食品展",
        "desc": "澳大利亚食品展",
        "link": "https://finefoodaustralia.com.au/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=foodproexh.com&sz=128",
        "title": "悉尼食品生产及加工技术展",
        "desc": "悉尼食品生产及加工技术展",
        "link": "https://foodproexh.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.expowest.com&sz=128",
        "title": "美国西部天然有机食品展",
        "desc": "美国西部天然有机食品展",
        "link": "https://www.expowest.com/en/home.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.specialtyfood.com&sz=128",
        "title": "美国夏季特色食品展",
        "desc": "美国夏季特色食品展",
        "link": "https://www.specialtyfood.com/shows-events/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.expoeast.com&sz=128",
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
        "icon": "https://www.google.com/s2/favicons?domain=www.cnhpia.org&sz=128",
        "title": "中国生活用纸信息网",
        "desc": "中国生活用纸信息网",
        "link": "http://www.cnhpia.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ppzhan.com&sz=128",
        "title": "包装印刷产业网",
        "desc": "包装印刷产业网",
        "link": "http://www.ppzhan.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cpta.org.cn&sz=128",
        "title": "中国包装联合会",
        "desc": "中国包装联合会",
        "link": "http://www.cpta.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinakuaiyin.cn&sz=128",
        "title": "印联传媒",
        "desc": "印联传媒",
        "link": "https://www.chinakuaiyin.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.pm168.net&sz=128",
        "title": "华人喷码网",
        "desc": "华人喷码网",
        "link": "http://www.pm168.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.printing.hc360.com&sz=128",
        "title": "慧聪网印刷",
        "desc": "慧聪网印刷",
        "link": "http://www.printing.hc360.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinapaper.net&sz=128",
        "title": "中国纸业网",
        "desc": "中国纸业网",
        "link": "http://www.chinapaper.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=info.paper.hc360.com&sz=128",
        "title": "慧聪纸业网",
        "desc": "慧聪纸业网",
        "link": "http://info.paper.hc360.com/list/zx.shtml"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinaprint.org&sz=128",
        "title": "中国印刷行业网",
        "desc": "中国印刷行业网",
        "link": "http://www.chinaprint.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinaprint.org.cn&sz=128",
        "title": "中国印刷及设备器材工业协会网",
        "desc": "中国印刷及设备器材工业协会网",
        "link": "http://www.chinaprint.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.xhsyww.com&sz=128",
        "title": "新华社印务网",
        "desc": "新华社印务网",
        "link": "http://www.xhsyww.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.keyin.cn&sz=128",
        "title": "科印网",
        "desc": "科印网",
        "link": "http://www.keyin.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cnzhixiang.com&sz=128",
        "title": "纸箱网",
        "desc": "纸箱网",
        "link": "http://www.cnzhixiang.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.wdhc.cn&sz=128",
        "title": "印刷油墨网",
        "desc": "印刷油墨网",
        "link": "http://www.wdhc.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.pack.com.cn&sz=128",
        "title": "包装e城",
        "desc": "包装e城",
        "link": "http://www.pack.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.csgia.org&sz=128",
        "title": "丝印特印网",
        "desc": "丝印特印网",
        "link": "http://www.csgia.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinabzp.com&sz=128",
        "title": "中华包装瓶网",
        "desc": "中华包装瓶网",
        "link": "http://www.chinabzp.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.paper.hc360.com&sz=128",
        "title": "慧聪纸业商务网",
        "desc": "慧聪纸业商务网",
        "link": "http://www.paper.hc360.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.zoaoo.com&sz=128",
        "title": "中国造纸业网",
        "desc": "中国造纸业网",
        "link": "http://www.zoaoo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.31paper.com&sz=128",
        "title": "纸业网",
        "desc": "纸业网",
        "link": "http://www.31paper.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cpp114.com&sz=128",
        "title": "中华印刷包装网",
        "desc": "中华印刷包装网",
        "link": "http://www.cpp114.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.zhongzhi.cn&sz=128",
        "title": "中纸在线",
        "desc": "中纸在线",
        "link": "http://www.zhongzhi.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.packcy.com&sz=128",
        "title": "中国包装产业网",
        "desc": "中国包装产业网",
        "link": "http://www.packcy.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.yincat.com&sz=128",
        "title": "印猫网",
        "desc": "印猫网",
        "link": "https://www.yincat.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=bzx.99114.com&sz=128",
        "title": "纸箱街",
        "desc": "纸箱街",
        "link": "http://bzx.99114.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ys-z.com&sz=128",
        "title": "易展印刷网",
        "desc": "易展印刷网",
        "link": "http://www.ys-z.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ezzjx.com&sz=128",
        "title": "造纸机械网",
        "desc": "造纸机械网",
        "link": "http://www.ezzjx.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinasigns.cn&sz=128",
        "title": "中国标识网",
        "desc": "中国标识网",
        "link": "http://www.chinasigns.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.fastpack.com.cn&sz=128",
        "title": "华北包装机械网",
        "desc": "华北包装机械网",
        "link": "http://www.fastpack.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.e-dyer.com&sz=128",
        "title": "印染在线",
        "desc": "印染在线",
        "link": "http://www.e-dyer.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=bbs.chinapaper.net&sz=128",
        "title": "中国纸业网论坛",
        "desc": "中国纸业网论坛",
        "link": "http://bbs.chinapaper.net/forum.php"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cnprint.org&sz=128",
        "title": "CPC中文印刷社区",
        "desc": "CPC中文印刷社区",
        "link": "http://www.cnprint.org/bbs/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.printhr.com&sz=128",
        "title": "中国印刷人才招聘网",
        "desc": "中国印刷人才招聘网",
        "link": "http://www.printhr.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=pack.job1001.com&sz=128",
        "title": "包装英才网",
        "desc": "包装英才网",
        "link": "http://pack.job1001.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.yp96.cn&sz=128",
        "title": "印聘网",
        "desc": "印聘网",
        "link": "http://www.yp96.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.dada114.net&sz=128",
        "title": "达达印刷人才网",
        "desc": "达达印刷人才网",
        "link": "http://www.dada114.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.51ysrc.com&sz=128",
        "title": "中国印刷人才网",
        "desc": "中国印刷人才网",
        "link": "http://www.51ysrc.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.zzjob88.com&sz=128",
        "title": "造纸英才网",
        "desc": "造纸英才网",
        "link": "http://www.zzjob88.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.36zy.com&sz=128",
        "title": "中国纸业人才网",
        "desc": "中国纸业人才网",
        "link": "http://www.36zy.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.packtech-foodtech.com.cn&sz=128",
        "title": "上海国际包装和食品加工技术展展",
        "desc": "上海国际包装和食品加工技术展展",
        "link": "http://www.packtech-foodtech.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.zhibohui.xin&sz=128",
        "title": "中国（临沂）国际生活用纸博览会",
        "desc": "中国（临沂）国际生活用纸博览会",
        "link": "http://www.zhibohui.xin/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.pack-print.de&sz=128",
        "title": "泰国包装印刷",
        "desc": "泰国包装印刷",
        "link": "https://www.pack-print.de/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=allpack-indonesia.com&sz=128",
        "title": "印尼国际包装暨食品加工机械展",
        "desc": "印尼国际包装暨食品加工机械展",
        "link": "https://allpack-indonesia.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.indiapackagingshow.com&sz=128",
        "title": "印度包装展",
        "desc": "印度包装展",
        "link": "https://www.indiapackagingshow.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=hn.foodexvietnam.com&sz=128",
        "title": "越南国际食品饮料加工暨包装设备展",
        "desc": "越南国际食品饮料加工暨包装设备展",
        "link": "http://hn.foodexvietnam.com/en"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.propakvietnam.com&sz=128",
        "title": "ProPack越南",
        "desc": "ProPack越南",
        "link": "http://www.propakvietnam.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.tokyo-pack.jp&sz=128",
        "title": "日本东京包装展",
        "desc": "日本东京包装展",
        "link": "http://www.tokyo-pack.jp/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.gulfprintpack.com&sz=128",
        "title": "迪拜印刷包装展",
        "desc": "迪拜印刷包装展",
        "link": "https://www.gulfprintpack.com/welcome-gulf-print-pack-2021"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.propakafrica.co.za&sz=128",
        "title": "南非包装展",
        "desc": "南非包装展",
        "link": "https://www.propakafrica.co.za/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.rosupack.com&sz=128",
        "title": "俄罗斯莫斯包装展",
        "desc": "俄罗斯莫斯包装展",
        "link": "http://www.rosupack.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=packagingfair.com&sz=128",
        "title": "土耳其食品机械和包装设备展",
        "desc": "土耳其食品机械和包装设备展",
        "link": "https://packagingfair.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.taropak.pl&sz=128",
        "title": "波兰国际包装展",
        "desc": "波兰国际包装展",
        "link": "https://www.taropak.pl/pl/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.paperarabia.com&sz=128",
        "title": "阿拉伯迪拜纸业展",
        "desc": "阿拉伯迪拜纸业展",
        "link": "https://www.paperarabia.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ap2pexpo.com&sz=128",
        "title": "埃及国际制浆造纸及纸业加工展览会",
        "desc": "埃及国际制浆造纸及纸业加工展览会",
        "link": "http://www.ap2pexpo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.print4all.it&sz=128",
        "title": "米兰包装印刷/纸加工展",
        "desc": "米兰包装印刷/纸加工展",
        "link": "http://www.print4all.it/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.pro2pac.co.uk&sz=128",
        "title": "英国食品/饮料包装机械展",
        "desc": "英国食品/饮料包装机械展",
        "link": "https://www.pro2pac.co.uk/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.all4pack.fr&sz=128",
        "title": "法国国际包装工业展",
        "desc": "法国国际包装工业展",
        "link": "https://www.all4pack.fr/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.expopack.com.mx&sz=128",
        "title": "墨西哥包装展",
        "desc": "墨西哥包装展",
        "link": "https://www.expopack.com.mx/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=andinapack.com&sz=128",
        "title": "哥伦比亚国际包装工业展",
        "desc": "哥伦比亚国际包装工业展",
        "link": "https://andinapack.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.packexpo.com&sz=128",
        "title": "美国包装机械展",
        "desc": "美国包装机械展",
        "link": "https://www.packexpo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.printworldshow.com&sz=128",
        "title": "加拿大多伦多印业展",
        "desc": "加拿大多伦多印业展",
        "link": "http://www.printworldshow.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.auspack.com.au&sz=128",
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
        "icon": "https://www.google.com/s2/favicons?domain=www.agri.cn&sz=128",
        "title": "中国农业信息网",
        "desc": "中国农业信息网",
        "link": "http://www.agri.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jinnong.cc&sz=128",
        "title": "农民之家",
        "desc": "农民之家",
        "link": "http://www.jinnong.cc/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinajci.com&sz=128",
        "title": "中国汇易网",
        "desc": "中国汇易网",
        "link": "https://www.chinajci.com/default.htm"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cccfna.org.cn&sz=128",
        "title": "中国食品土畜进出口商会",
        "desc": "中国食品土畜进出口商会",
        "link": "http://www.cccfna.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ofcc.org.cn&sz=128",
        "title": "中绿华夏有机食品认证中心",
        "desc": "中绿华夏有机食品认证中心",
        "link": "http://www.ofcc.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.forestry.gov.cn&sz=128",
        "title": "国家林业局",
        "desc": "国家林业局",
        "link": "http://www.forestry.gov.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.mwr.gov.cn&sz=128",
        "title": "中华人民共和国水利部网站",
        "desc": "中华人民共和国水利部网站",
        "link": "http://www.mwr.gov.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.caas.net.cn&sz=128",
        "title": "中国农业科学院",
        "desc": "中国农业科学院",
        "link": "http://www.caas.net.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.iae.org.cn&sz=128",
        "title": "农业经济与发展研究所",
        "desc": "农业经济与发展研究所",
        "link": "http://www.iae.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.usda.gov&sz=128",
        "title": "美国农业部",
        "desc": "美国农业部",
        "link": "http://www.usda.gov/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.fao.org&sz=128",
        "title": "联合国粮食与农业组织",
        "desc": "联合国粮食与农业组织",
        "link": "http://www.fao.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinaseed114.com&sz=128",
        "title": "种业商务网",
        "desc": "种业商务网",
        "link": "https://www.chinaseed114.com/index.php"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cncotton.com&sz=128",
        "title": "中国棉花网",
        "desc": "中国棉花网",
        "link": "http://www.cncotton.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.seedchina.com.cn&sz=128",
        "title": "中国种业信息网",
        "desc": "中国种业信息网",
        "link": "http://www.seedchina.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.farmer.com.cn&sz=128",
        "title": "农民日报",
        "desc": "农民日报",
        "link": "http://www.farmer.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cngrain.com&sz=128",
        "title": "中华粮网",
        "desc": "中华粮网",
        "link": "http://www.cngrain.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.mushroommarket.net&sz=128",
        "title": "中国食用菌商务网",
        "desc": "中国食用菌商务网",
        "link": "http://www.mushroommarket.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.tjkx.com&sz=128",
        "title": "糖酒快讯",
        "desc": "糖酒快讯",
        "link": "http://www.tjkx.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.aweb.com.cn&sz=128",
        "title": "农博网",
        "desc": "农博网",
        "link": "http://www.aweb.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.shuichan.cc&sz=128",
        "title": "中国水产养殖网",
        "desc": "中国水产养殖网",
        "link": "http://www.shuichan.cc/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinabreed.com&sz=128",
        "title": "中国养殖网",
        "desc": "中国养殖网",
        "link": "http://www.chinabreed.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jbzyw.com&sz=128",
        "title": "鸡病专业网",
        "desc": "鸡病专业网",
        "link": "http://www.jbzyw.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ccpia.com.cn&sz=128",
        "title": "中国农药工业网",
        "desc": "中国农药工业网",
        "link": "http://www.ccpia.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.vegnet.com.cn&sz=128",
        "title": "中国蔬菜网",
        "desc": "中国蔬菜网",
        "link": "http://www.vegnet.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cngrain.com&sz=128",
        "title": "中华粮网",
        "desc": "中华粮网",
        "link": "http://www.cngrain.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinafeedonline.com&sz=128",
        "title": "中国饲料在线",
        "desc": "中国饲料在线",
        "link": "http://www.chinafeedonline.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.feedtrade.com.cn&sz=128",
        "title": "中国饲料行业信息网",
        "desc": "中国饲料行业信息网",
        "link": "http://www.feedtrade.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.caaa.cn&sz=128",
        "title": "中国畜牧业信息网",
        "desc": "中国畜牧业信息网",
        "link": "http://www.caaa.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.nacc.org.cn&sz=128",
        "title": "中国农业市场网",
        "desc": "中国农业市场网",
        "link": "http://www.nacc.org.cn/index.asp"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.a-seed.cn&sz=128",
        "title": "第一种业",
        "desc": "第一种业",
        "link": "http://www.a-seed.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinajci.com&sz=128",
        "title": "中国汇易",
        "desc": "中国汇易",
        "link": "http://www.chinajci.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.agrice.cn&sz=128",
        "title": "农业经济信息网",
        "desc": "农业经济信息网",
        "link": "http://www.agrice.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.zhue.com.cn&sz=128",
        "title": "中国猪网",
        "desc": "中国猪网",
        "link": "http://www.zhue.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.agroyl.com&sz=128",
        "title": "园林网",
        "desc": "园林网",
        "link": "http://www.agroyl.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.agronj.com&sz=128",
        "title": "农机网",
        "desc": "农机网",
        "link": "http://www.agronj.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.agronet.com.cn&sz=128",
        "title": "农业网",
        "desc": "农业网",
        "link": "http://www.agronet.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.zhuwang.cc&sz=128",
        "title": "中国养猪网",
        "desc": "中国养猪网",
        "link": "https://www.zhuwang.cc/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.51garlic.com&sz=128",
        "title": "国际大蒜贸易网",
        "desc": "国际大蒜贸易网",
        "link": "http://www.51garlic.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.wugu.com.cn&sz=128",
        "title": "吾谷网",
        "desc": "吾谷网",
        "link": "http://www.wugu.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.sn110.com&sz=128",
        "title": "神农网",
        "desc": "神农网",
        "link": "http://www.sn110.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.nongcun5.com&sz=128",
        "title": "农村网",
        "desc": "农村网",
        "link": "http://www.nongcun5.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.soozhu.com&sz=128",
        "title": "搜猪网",
        "desc": "搜猪网",
        "link": "http://www.soozhu.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.vegnet.com.cn&sz=128",
        "title": "蔬菜网",
        "desc": "蔬菜网",
        "link": "http://www.vegnet.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.niuyang120.cn&sz=128",
        "title": "牛养殖网",
        "desc": "牛养殖网",
        "link": "http://www.niuyang120.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.yz88.org.cn&sz=128",
        "title": "养殖巴巴",
        "desc": "养殖巴巴",
        "link": "http://www.yz88.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.nzdb.com.cn&sz=128",
        "title": "中国农资导报网",
        "desc": "中国农资导报网",
        "link": "http://www.nzdb.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.nongji1688.com&sz=128",
        "title": "农机1688网",
        "desc": "农机1688网",
        "link": "http://www.nongji1688.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.guojixumu.com&sz=128",
        "title": "国际畜牧网",
        "desc": "国际畜牧网",
        "link": "http://www.guojixumu.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ntv.cn&sz=128",
        "title": "农视网",
        "desc": "农视网",
        "link": "http://www.ntv.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cnxmy.com&sz=128",
        "title": "中华畜牧信息网",
        "desc": "中华畜牧信息网",
        "link": "http://www.cnxmy.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.nongshijie.com&sz=128",
        "title": "农世界网",
        "desc": "农世界网",
        "link": "http://www.nongshijie.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.1nongjing.com&sz=128",
        "title": "第一农经网",
        "desc": "第一农经网",
        "link": "http://www.1nongjing.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.51zhujia.com&sz=128",
        "title": "51猪价网",
        "desc": "51猪价网",
        "link": "http://www.51zhujia.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.qinbing.cn&sz=128",
        "title": "中国禽病网",
        "desc": "中国禽病网",
        "link": "http://www.qinbing.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ampcn.com&sz=128",
        "title": "中国农资网",
        "desc": "中国农资网",
        "link": "http://www.ampcn.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.dasuan.cn&sz=128",
        "title": "中国大蒜网",
        "desc": "中国大蒜网",
        "link": "http://www.dasuan.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.agriculture.com&sz=128",
        "title": "Agriculture Online Home",
        "desc": "Agriculture Online Home",
        "link": "http://www.agriculture.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.farmer.gov.cn&sz=128",
        "title": "中国农民网",
        "desc": "中国农民网",
        "link": "http://www.farmer.gov.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.21food.cn&sz=128",
        "title": "食品商务网",
        "desc": "食品商务网",
        "link": "http://www.21food.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.fisherynet.cn&sz=128",
        "title": "水产行业网",
        "desc": "水产行业网",
        "link": "http://www.fisherynet.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.inong.net&sz=128",
        "title": "爱农网",
        "desc": "爱农网",
        "link": "https://www.inong.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.meatnet.cn&sz=128",
        "title": "肉业行业网",
        "desc": "肉业行业网",
        "link": "http://www.meatnet.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.abuya.com.cn&sz=128",
        "title": "华南农产品交易网",
        "desc": "华南农产品交易网",
        "link": "http://www.abuya.com.cn/abuya/http/index.jsp"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.51garlic.com&sz=128",
        "title": "国际大蒜贸易网",
        "desc": "国际大蒜贸易网",
        "link": "http://www.51garlic.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.foodjx.com&sz=128",
        "title": "食品机械设备网",
        "desc": "食品机械设备网",
        "link": "http://www.foodjx.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.flowerworld.com.cn&sz=128",
        "title": "花卉世界网",
        "desc": "花卉世界网",
        "link": "http://www.flowerworld.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cnhnb.com&sz=128",
        "title": "惠农网",
        "desc": "惠农网",
        "link": "https://www.cnhnb.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ppxmw.com&sz=128",
        "title": "全球品牌畜牧网",
        "desc": "全球品牌畜牧网",
        "link": "http://www.ppxmw.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cofeed.com&sz=128",
        "title": "天下粮仓",
        "desc": "天下粮仓",
        "link": "http://www.cofeed.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.fao.com.cn&sz=128",
        "title": "中国粮油商务网",
        "desc": "中国粮油商务网",
        "link": "http://www.fao.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=agronet.com.cn&sz=128",
        "title": "中国农业网",
        "desc": "中国农业网",
        "link": "http://agronet.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.huamu.com&sz=128",
        "title": "花木网",
        "desc": "花木网",
        "link": "https://www.huamu.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jinnong.cn&sz=128",
        "title": "金农网",
        "desc": "金农网",
        "link": "http://www.jinnong.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.miaomuzhan.com&sz=128",
        "title": "第一苗木站",
        "desc": "第一苗木站",
        "link": "http://www.miaomuzhan.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.yuanlin365.com&sz=128",
        "title": "365园林网",
        "desc": "365园林网",
        "link": "http://www.yuanlin365.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.linguo.com.cn&sz=128",
        "title": "中国林果信息网",
        "desc": "中国林果信息网",
        "link": "http://www.linguo.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.nongjx.com&sz=128",
        "title": "农机网",
        "desc": "农机网",
        "link": "http://www.nongjx.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.znw58.com&sz=128",
        "title": "知农网",
        "desc": "知农网",
        "link": "http://www.znw58.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.10000n.cn&sz=128",
        "title": "万农网",
        "desc": "万农网",
        "link": "http://www.10000n.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=nongye.qihuiwang.com&sz=128",
        "title": "企汇网农林牧副",
        "desc": "企汇网农林牧副",
        "link": "http://nongye.qihuiwang.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.zgny.com.cn&sz=128",
        "title": "中国农业网",
        "desc": "中国农业网",
        "link": "http://www.zgny.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ag365.com&sz=128",
        "title": "365农业网",
        "desc": "365农业网",
        "link": "http://www.ag365.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.agrotrade.net&sz=128",
        "title": "AgroTrade",
        "desc": "AgroTrade",
        "link": "http://www.agrotrade.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.yangzhi.com&sz=128",
        "title": "养殖商务网",
        "desc": "养殖商务网",
        "link": "http://www.yangzhi.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.sea-ex.com&sz=128",
        "title": "sea-ex",
        "desc": "sea-ex",
        "link": "http://www.sea-ex.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.trade-seafood.com&sz=128",
        "title": "trade-seafood",
        "desc": "trade-seafood",
        "link": "http://www.trade-seafood.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.nongzi100.com&sz=128",
        "title": "农资联盟论坛",
        "desc": "农资联盟论坛",
        "link": "http://www.nongzi100.com/forum.php"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=bbs.feedtrade.com.cn&sz=128",
        "title": "中国畜牧论坛",
        "desc": "中国畜牧论坛",
        "link": "http://bbs.feedtrade.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=bbs.huinong.org.cn&sz=128",
        "title": "惠农论坛",
        "desc": "惠农论坛",
        "link": "http://bbs.huinong.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.nongxunbbs.com&sz=128",
        "title": "农讯论坛",
        "desc": "农讯论坛",
        "link": "http://www.nongxunbbs.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.agrorc.com&sz=128",
        "title": "农业人才网",
        "desc": "农业人才网",
        "link": "http://www.agrorc.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.5ajob.com&sz=128",
        "title": "中国农业人才网",
        "desc": "中国农业人才网",
        "link": "http://www.5ajob.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=farm.job1001.com&sz=128",
        "title": "一览农业英才网",
        "desc": "一览农业英才网",
        "link": "http://farm.job1001.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.7ahr.com&sz=128",
        "title": "西南农业人才网",
        "desc": "西南农业人才网",
        "link": "http://www.7ahr.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=seed.job1001.com&sz=128",
        "title": "一览种业英才网",
        "desc": "一览种业英才网",
        "link": "http://seed.job1001.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=job.nongzi100.com&sz=128",
        "title": "中国农资联盟",
        "desc": "中国农资联盟",
        "link": "http://job.nongzi100.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=nj.job1001.com&sz=128",
        "title": "一览农机英才网",
        "desc": "一览农机英才网",
        "link": "http://nj.job1001.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.zyblh.com&sz=128",
        "title": "中国种业博览会",
        "desc": "中国种业博览会",
        "link": "http://www.zyblh.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cimae.com.cn&sz=128",
        "title": "中国现代农业博览会",
        "desc": "中国现代农业博览会",
        "link": "http://www.cimae.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cacshow.com&sz=128",
        "title": "中国国际农用化学品及植保展览会",
        "desc": "中国国际农用化学品及植保展览会",
        "link": "http://www.cacshow.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.agrochemex.net&sz=128",
        "title": "农化产品展览会",
        "desc": "农化产品展览会",
        "link": "http://www.agrochemex.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.agri-fair.com&sz=128",
        "title": "杨凌博览会",
        "desc": "杨凌博览会",
        "link": "http://www.agri-fair.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.livestockmalaysia.com&sz=128",
        "title": "马来西亚家禽畜牧展",
        "desc": "马来西亚家禽畜牧展",
        "link": "https://www.livestockmalaysia.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.yugagro.org&sz=128",
        "title": "克拉斯诺达尔农业展",
        "desc": "克拉斯诺达尔农业展",
        "link": "https://www.yugagro.org/Home"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.iraqagrofood.com&sz=128",
        "title": "伊拉克食品农业展",
        "desc": "伊拉克食品农业展",
        "link": "http://www.iraqagrofood.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.recexpo.com&sz=128",
        "title": "沙特国际农业展",
        "desc": "沙特国际农业展",
        "link": "http://www.recexpo.com/events/saudi-agriculture/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=kisan.in&sz=128",
        "title": "印度农业机械展",
        "desc": "印度农业机械展",
        "link": "https://kisan.in/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.salon-agriculture.com&sz=128",
        "title": "巴黎国际农业展",
        "desc": "巴黎国际农业展",
        "link": "https://www.salon-agriculture.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.feriazaragoza.es&sz=128",
        "title": "西班牙农业机械展",
        "desc": "西班牙农业机械展",
        "link": "https://www.feriazaragoza.es/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.expoagro.com.ar&sz=128",
        "title": "阿根廷国际农业展览会",
        "desc": "阿根廷国际农业展览会",
        "link": "https://www.expoagro.com.ar/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.agrishow.com.br&sz=128",
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
        "icon": "https://www.google.com/s2/favicons?domain=www.yaozh.com&sz=128",
        "title": "药智网",
        "desc": "药智网",
        "link": "https://www.yaozh.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.satcm.gov.cn&sz=128",
        "title": "国家中医药管理局",
        "desc": "国家中医药管理局",
        "link": "http://www.satcm.gov.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cma.org.cn&sz=128",
        "title": "中华医学会",
        "desc": "中华医学会",
        "link": "https://www.cma.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cpi.ac.cn&sz=128",
        "title": "中国医药信息网",
        "desc": "中国医药信息网",
        "link": "http://www.cpi.ac.cn/publish/default/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.imm.ac.cn&sz=128",
        "title": "中国医学科学院药物研究所",
        "desc": "中国医学科学院药物研究所",
        "link": "http://www.imm.ac.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cphiic.com&sz=128",
        "title": "中国医药工业信息中心",
        "desc": "中国医药工业信息中心",
        "link": "http://www.cphiic.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.dxy.cn&sz=128",
        "title": "丁香园",
        "desc": "丁香园",
        "link": "http://www.dxy.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=law.pharmnet.com.cn&sz=128",
        "title": "中国食品药品化妆品法规网",
        "desc": "中国食品药品化妆品法规网",
        "link": "http://law.pharmnet.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.healthoo.com&sz=128",
        "title": "健康网",
        "desc": "健康网",
        "link": "http://www.healthoo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cpa.org.cn&sz=128",
        "title": "中国药学会",
        "desc": "中国药学会",
        "link": "http://www.cpa.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.hc3i.cn&sz=128",
        "title": "中国数字医疗网",
        "desc": "中国数字医疗网",
        "link": "http://www.hc3i.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.maydeal.com&sz=128",
        "title": "美迪医疗网",
        "desc": "美迪医疗网",
        "link": "http://www.maydeal.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.100md.com&sz=128",
        "title": "百拇医药网",
        "desc": "百拇医药网",
        "link": "http://www.100md.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.yytj.org.cn&sz=128",
        "title": "中国医药统计网",
        "desc": "中国医药统计网",
        "link": "http://www.yytj.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jkb.com.cn&sz=128",
        "title": "健康报网",
        "desc": "健康报网",
        "link": "http://www.jkb.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.healthnet.com.cn&sz=128",
        "title": "中国健康网",
        "desc": "中国健康网",
        "link": "http://www.healthnet.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.99.com.cn&sz=128",
        "title": "99健康网",
        "desc": "99健康网",
        "link": "https://www.99.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cmt.com.cn&sz=128",
        "title": "医学论坛网",
        "desc": "医学论坛网",
        "link": "http://www.cmt.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.healthoo.com&sz=128",
        "title": "中国健康网",
        "desc": "中国健康网",
        "link": "http://www.healthoo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.91huayi.com&sz=128",
        "title": "华医网",
        "desc": "华医网",
        "link": "http://www.91huayi.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=jiankang.163.com&sz=128",
        "title": "网易健康",
        "desc": "网易健康",
        "link": "https://jiankang.163.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cacm.org.cn&sz=128",
        "title": "中华中医药学会",
        "desc": "中华中医药学会",
        "link": "http://www.cacm.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=fashion.ifeng.com&sz=128",
        "title": "凤凰健康",
        "desc": "凤凰健康",
        "link": "http://fashion.ifeng.com/health/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.iiijk.com&sz=128",
        "title": "中华健康网",
        "desc": "中华健康网",
        "link": "http://www.iiijk.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.wiki8.com&sz=128",
        "title": "医学百科",
        "desc": "医学百科",
        "link": "https://www.wiki8.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.menet.com.cn&sz=128",
        "title": "医药资讯门户",
        "desc": "医药资讯门户",
        "link": "http://www.menet.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.bioon.net&sz=128",
        "title": "生物谷",
        "desc": "生物谷",
        "link": "http://www.bioon.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.39.net&sz=128",
        "title": "39健康网",
        "desc": "39健康网",
        "link": "http://www.39.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.315jiage.cn&sz=128",
        "title": "药品价格315网",
        "desc": "药品价格315网",
        "link": "https://www.315jiage.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cccmhpie.org.cn&sz=128",
        "title": "中国医药保健品进出口商会",
        "desc": "中国医药保健品进出口商会",
        "link": "http://www.cccmhpie.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chba.com.cn&sz=128",
        "title": "中国美容美发协会",
        "desc": "中国美容美发协会",
        "link": "http://www.chba.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinapharm.com.cn&sz=128",
        "title": "药网",
        "desc": "药网",
        "link": "http://www.chinapharm.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.haodf.com&sz=128",
        "title": "中国医院大全",
        "desc": "中国医院大全",
        "link": "http://www.haodf.com/yiyuan/beijing/list.htm"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.nlm.nih.gov&sz=128",
        "title": "National Instit",
        "desc": "National Instit",
        "link": "http://www.nlm.nih.gov/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.medscape.com&sz=128",
        "title": "Medscape",
        "desc": "Medscape",
        "link": "http://www.medscape.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.bioportfolio.com&sz=128",
        "title": "BioPortfolio",
        "desc": "BioPortfolio",
        "link": "http://www.bioportfolio.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.phrma.org&sz=128",
        "title": "phrma",
        "desc": "phrma",
        "link": "http://www.phrma.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.healthcentral.com&sz=128",
        "title": "HealthCentral",
        "desc": "HealthCentral",
        "link": "http://www.healthcentral.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.themedsupplyguide.com&sz=128",
        "title": "medsupplyguide",
        "desc": "medsupplyguide",
        "link": "http://www.themedsupplyguide.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.pharmnet.com.cn&sz=128",
        "title": "中国医药网",
        "desc": "中国医药网",
        "link": "http://www.pharmnet.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=web.lypxx.net&sz=128",
        "title": "药品信息",
        "desc": "药品信息",
        "link": "http://web.lypxx.net/index.do"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.5168med.com&sz=128",
        "title": "5168医药网",
        "desc": "5168医药网",
        "link": "http://www.5168med.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jinxiang.com&sz=128",
        "title": "金象网",
        "desc": "金象网",
        "link": "https://www.jinxiang.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.guahao.com&sz=128",
        "title": "微医",
        "desc": "微医",
        "link": "https://www.guahao.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.360lj.com&sz=128",
        "title": "亮健好药",
        "desc": "亮健好药",
        "link": "https://www.360lj.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.360yao.com&sz=128",
        "title": "恒牛医药",
        "desc": "恒牛医药",
        "link": "http://www.360yao.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.yp900.com&sz=128",
        "title": "快易捷药品交易网",
        "desc": "快易捷药品交易网",
        "link": "http://www.yp900.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.zyctd.com&sz=128",
        "title": "中药材天地网",
        "desc": "中药材天地网",
        "link": "http://www.zyctd.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.pharme.cn&sz=128",
        "title": "制药设备网",
        "desc": "制药设备网",
        "link": "http://www.pharme.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.yaofang.cn&sz=128",
        "title": "仁和药房网",
        "desc": "仁和药房网",
        "link": "https://www.yaofang.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.zgycsc.com&sz=128",
        "title": "中国药材市场",
        "desc": "中国药材市场",
        "link": "http://www.zgycsc.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.tkyfw.com&sz=128",
        "title": "同康药房网",
        "desc": "同康药房网",
        "link": "https://www.tkyfw.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ehaoyao.com&sz=128",
        "title": "好药师网上药店",
        "desc": "好药师网上药店",
        "link": "http://www.ehaoyao.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.3156.cn&sz=128",
        "title": "3156全国药品网",
        "desc": "3156全国药品网",
        "link": "http://www.3156.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.12yao.com&sz=128",
        "title": "十二药网",
        "desc": "十二药网",
        "link": "http://www.12yao.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.j1.com&sz=128",
        "title": "健一网",
        "desc": "健一网",
        "link": "https://www.j1.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.zyzhan.com&sz=128",
        "title": "中国制药机械设备网",
        "desc": "中国制药机械设备网",
        "link": "http://www.zyzhan.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.yf115.com&sz=128",
        "title": "中国药用原辅料网",
        "desc": "中国药用原辅料网",
        "link": "http://www.yf115.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.yfdyf.com&sz=128",
        "title": "益丰大药房",
        "desc": "益丰大药房",
        "link": "http://www.yfdyf.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.360kad.com&sz=128",
        "title": "康爱多网上药店",
        "desc": "康爱多网上药店",
        "link": "http://www.360kad.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.123ypw.com&sz=128",
        "title": "药品交易网",
        "desc": "药品交易网",
        "link": "https://www.123ypw.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.pharmjx.com&sz=128",
        "title": "制药机械行业网",
        "desc": "制药机械行业网",
        "link": "http://www.pharmjx.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.yaozs.com&sz=128",
        "title": "医药招商代理",
        "desc": "医药招商代理",
        "link": "http://www.yaozs.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.yyzs.net&sz=128",
        "title": "医药招商",
        "desc": "医药招商",
        "link": "http://www.yyzs.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.qxw18.com&sz=128",
        "title": "东方医疗器械网",
        "desc": "东方医疗器械网",
        "link": "http://www.qxw18.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.qmed.com&sz=128",
        "title": "qmed",
        "desc": "qmed",
        "link": "http://www.qmed.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=ngotcm.com&sz=128",
        "title": "论坛_民间中医网",
        "desc": "论坛_民间中医网",
        "link": "http://ngotcm.com/bbs/html/bbs.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.yaoqun.net&sz=128",
        "title": "药群论坛",
        "desc": "药群论坛",
        "link": "http://www.yaoqun.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.dxy.cn&sz=128",
        "title": "丁香园论坛",
        "desc": "丁香园论坛",
        "link": "http://www.dxy.cn/bbs/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.yaoq.net&sz=128",
        "title": "药学人员的圈子",
        "desc": "药学人员的圈子",
        "link": "http://www.yaoq.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ouryao.com&sz=128",
        "title": "蒲公英制药技术论坛",
        "desc": "蒲公英制药技术论坛",
        "link": "https://www.ouryao.com/forum.php"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.healthr.com&sz=128",
        "title": "医药英才网",
        "desc": "医药英才网",
        "link": "http://www.healthr.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jobuy.com&sz=128",
        "title": "猎才医药网",
        "desc": "猎才医药网",
        "link": "http://www.jobuy.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.doctorjob.com.cn&sz=128",
        "title": "中国医疗人才网",
        "desc": "中国医疗人才网",
        "link": "http://www.doctorjob.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jobmd.cn&sz=128",
        "title": "丁香医药生物人才网",
        "desc": "丁香医药生物人才网",
        "link": "http://www.jobmd.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.yizhipin.com&sz=128",
        "title": "医直聘",
        "desc": "医直聘",
        "link": "https://www.yizhipin.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=drug.yl1001.com&sz=128",
        "title": "一览制药英才网",
        "desc": "一览制药英才网",
        "link": "http://drug.yl1001.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.imedexpo.com&sz=128",
        "title": "上海医疗展",
        "desc": "上海医疗展",
        "link": "http://www.imedexpo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cmef.com.cn&sz=128",
        "title": "中国医博会",
        "desc": "中国医博会",
        "link": "https://www.cmef.com.cn/default.aspx"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.nhnexpo.com&sz=128",
        "title": "保健博览会",
        "desc": "保健博览会",
        "link": "http://www.nhnexpo.com/ciheCn/index.htm"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinamedicalexpo.com&sz=128",
        "title": "上海医疗器械展",
        "desc": "上海医疗器械展",
        "link": "http://www.chinamedicalexpo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.pharmchina.com.cn&sz=128",
        "title": "全国药品交易会",
        "desc": "全国药品交易会",
        "link": "http://www.pharmchina.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=event.hktdc.com&sz=128",
        "title": "香港医疗展",
        "desc": "香港医疗展",
        "link": "https://event.hktdc.com/fair/hkmedicalfair-en/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.kimes.kr&sz=128",
        "title": "韩国国际医疗及医院设备展览会",
        "desc": "韩国国际医疗及医院设备展览会",
        "link": "http://www.kimes.kr/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jma.or.jp&sz=128",
        "title": "日本医疗康复设备展",
        "desc": "日本医疗康复设备展",
        "link": "http://www.jma.or.jp/hospex/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.health-asia.com&sz=128",
        "title": "巴基斯坦医疗展",
        "desc": "巴基斯坦医疗展",
        "link": "https://www.health-asia.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=indohealthcareexpo.com&sz=128",
        "title": "印尼医疗器材展",
        "desc": "印尼医疗器材展",
        "link": "https://indohealthcareexpo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.arabhealthonline.com&sz=128",
        "title": "迪拜医疗设备展",
        "desc": "迪拜医疗设备展",
        "link": "https://www.arabhealthonline.com/en/Home.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.kihe.kz&sz=128",
        "title": "哈萨克斯坦国际医疗医药展",
        "desc": "哈萨克斯坦国际医疗医药展",
        "link": "https://www.kihe.kz/ru/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cphi.com&sz=128",
        "title": "医药原料印度展",
        "desc": "医药原料印度展",
        "link": "https://www.cphi.com/india/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.medicalfair-india.com&sz=128",
        "title": "印度医疗展",
        "desc": "印度医疗展",
        "link": "https://www.medicalfair-india.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.medica-tradefair.com&sz=128",
        "title": "杜塞尔多夫医疗展",
        "desc": "杜塞尔多夫医疗展",
        "link": "https://www.medica-tradefair.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.africahealthexhibition.com&sz=128",
        "title": "南非医疗展",
        "desc": "南非医疗展",
        "link": "https://www.africahealthexhibition.com/en/home.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.salmed.pl&sz=128",
        "title": "波兰医疗展",
        "desc": "波兰医疗展",
        "link": "https://www.salmed.pl/pl/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.medica.de&sz=128",
        "title": "德国医疗展",
        "desc": "德国医疗展",
        "link": "https://www.medica.de/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.hospitalar.com&sz=128",
        "title": "巴西医疗展",
        "desc": "巴西医疗展",
        "link": "https://www.hospitalar.com/pt/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.fimeshow.com&sz=128",
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
        "icon": "https://www.google.com/s2/favicons?domain=www.sgcc.com.cn&sz=128",
        "title": "国家电网",
        "desc": "国家电网",
        "link": "http://www.sgcc.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.china5e.com&sz=128",
        "title": "中国能源网",
        "desc": "中国能源网",
        "link": "http://www.china5e.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.in-en.com&sz=128",
        "title": "国际能源网",
        "desc": "国际能源网",
        "link": "http://www.in-en.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.sxcoal.com&sz=128",
        "title": "中国煤炭资源网",
        "desc": "中国煤炭资源网",
        "link": "http://www.sxcoal.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cwestc.com&sz=128",
        "title": "中国西部煤炭网",
        "desc": "中国西部煤炭网",
        "link": "http://www.cwestc.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.coal.com.cn&sz=128",
        "title": "煤炭网",
        "desc": "煤炭网",
        "link": "http://www.coal.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.zh818.com&sz=128",
        "title": "中国钢材价格网",
        "desc": "中国钢材价格网",
        "link": "http://www.zh818.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cec.org.cn&sz=128",
        "title": "中国电力企业联合会",
        "desc": "中国电力企业联合会",
        "link": "http://www.cec.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ometal.com&sz=128",
        "title": "全球金属网",
        "desc": "全球金属网",
        "link": "http://www.ometal.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinacoal.gov.cn&sz=128",
        "title": "中国煤炭工业网",
        "desc": "中国煤炭工业网",
        "link": "http://www.chinacoal.gov.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.metalchina.com&sz=128",
        "title": "中国金属网",
        "desc": "中国金属网",
        "link": "http://www.metalchina.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinapower.com.cn&sz=128",
        "title": "中国电力网",
        "desc": "中国电力网",
        "link": "http://www.chinapower.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.sinopecnews.com.cn&sz=128",
        "title": "中国石化新闻网",
        "desc": "中国石化新闻网",
        "link": "http://www.sinopecnews.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cctd.com.cn&sz=128",
        "title": "中国煤炭市场网",
        "desc": "中国煤炭市场网",
        "link": "http://www.cctd.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinaoilonline.com&sz=128",
        "title": "石油在线",
        "desc": "石油在线",
        "link": "http://www.chinaoilonline.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.oilboss.cn&sz=128",
        "title": "中国油联",
        "desc": "中国油联",
        "link": "http://www.oilboss.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cnmn.com.cn&sz=128",
        "title": "中国有色网",
        "desc": "中国有色网",
        "link": "http://www.cnmn.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.mw35.com&sz=128",
        "title": "中国金属加工网",
        "desc": "中国金属加工网",
        "link": "http://www.mw35.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cnnmol.com&sz=128",
        "title": "有色金属在线",
        "desc": "有色金属在线",
        "link": "http://www.cnnmol.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.nengyuanjie.net&sz=128",
        "title": "能源界",
        "desc": "能源界",
        "link": "http://www.nengyuanjie.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.china-nengyuan.com&sz=128",
        "title": "新能源网",
        "desc": "新能源网",
        "link": "http://www.china-nengyuan.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=pv.china-nengyuan.com&sz=128",
        "title": "中国光伏网",
        "desc": "中国光伏网",
        "link": "http://pv.china-nengyuan.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=light.china-nengyuan.com&sz=128",
        "title": "中国太阳能灯网",
        "desc": "中国太阳能灯网",
        "link": "http://light.china-nengyuan.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=xcl.china-nengyuan.com&sz=128",
        "title": "中国新材料网",
        "desc": "中国新材料网",
        "link": "http://xcl.china-nengyuan.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.nea.gov.cn&sz=128",
        "title": "国家能源局",
        "desc": "国家能源局",
        "link": "http://www.nea.gov.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ne21.com&sz=128",
        "title": "世纪新能源网",
        "desc": "世纪新能源网",
        "link": "http://www.ne21.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.energynews.com.cn&sz=128",
        "title": "能源新闻网",
        "desc": "能源新闻网",
        "link": "http://www.energynews.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.oneneng.com&sz=128",
        "title": "第一能源网",
        "desc": "第一能源网",
        "link": "http://www.oneneng.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.sdgxny.com&sz=128",
        "title": "共享能源网",
        "desc": "共享能源网",
        "link": "http://www.sdgxny.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.hxny.com&sz=128",
        "title": "华夏能源网",
        "desc": "华夏能源网",
        "link": "http://www.hxny.com/index.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.pvnews.cn&sz=128",
        "title": "太阳能新闻网",
        "desc": "太阳能新闻网",
        "link": "http://www.pvnews.cn/index.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.zgny.org.cn&sz=128",
        "title": "中国能源学会",
        "desc": "中国能源学会",
        "link": "http://www.zgny.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cnenergynews.cn&sz=128",
        "title": "中国能源网",
        "desc": "中国能源网",
        "link": "http://www.cnenergynews.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinaygny.cn&sz=128",
        "title": "中国阳光能源网",
        "desc": "中国阳光能源网",
        "link": "http://www.chinaygny.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.21ce.cc&sz=128",
        "title": "清洁能源网",
        "desc": "清洁能源网",
        "link": "http://www.21ce.cc/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.metalnews.cn&sz=128",
        "title": "中国金属新闻网",
        "desc": "中国金属新闻网",
        "link": "http://www.metalnews.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.newenergy.org.cn&sz=128",
        "title": "中国新能源网",
        "desc": "中国新能源网",
        "link": "http://www.newenergy.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.smm.cn&sz=128",
        "title": "上海有色金属网",
        "desc": "上海有色金属网",
        "link": "http://www.smm.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.custeel.com&sz=128",
        "title": "中国联合钢铁网",
        "desc": "中国联合钢铁网",
        "link": "http://www.custeel.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.zhijinsteel.com&sz=128",
        "title": "志金钢铁",
        "desc": "志金钢铁",
        "link": "http://www.zhijinsteel.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.worldmr.net&sz=128",
        "title": "全球矿产资源网",
        "desc": "全球矿产资源网",
        "link": "http://www.worldmr.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.in-en.com&sz=128",
        "title": "国际能源网",
        "desc": "国际能源网",
        "link": "http://www.in-en.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.inengyuan.com&sz=128",
        "title": "能源杂志",
        "desc": "能源杂志",
        "link": "http://www.inengyuan.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.escn.com.cn&sz=128",
        "title": "中国储能网",
        "desc": "中国储能网",
        "link": "http://www.escn.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.umetal.com&sz=128",
        "title": "联合金属网",
        "desc": "联合金属网",
        "link": "http://www.umetal.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.asianmetal.cn&sz=128",
        "title": "亚洲金属",
        "desc": "亚洲金属",
        "link": "http://www.asianmetal.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=ex.bjx.com.cn&sz=128",
        "title": "北极星电力展会网",
        "desc": "北极星电力展会网",
        "link": "http://ex.bjx.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinagb.net&sz=128",
        "title": "能源世界",
        "desc": "能源世界",
        "link": "http://www.chinagb.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.geo-show.com&sz=128",
        "title": "首聚能源博览网",
        "desc": "首聚能源博览网",
        "link": "http://www.geo-show.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinabattery.org&sz=128",
        "title": "中国电池工业协会",
        "desc": "中国电池工业协会",
        "link": "http://www.chinabattery.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.pv001.net&sz=128",
        "title": "pv001光伏网",
        "desc": "pv001光伏网",
        "link": "http://www.pv001.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=guangfu.bjx.com.cn&sz=128",
        "title": "太阳能光伏网",
        "desc": "太阳能光伏网",
        "link": "http://guangfu.bjx.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cnfeol.com&sz=128",
        "title": "中国铁合金在线",
        "desc": "中国铁合金在线",
        "link": "http://www.cnfeol.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ebaiyin.com&sz=128",
        "title": "中国白银网",
        "desc": "中国白银网",
        "link": "https://www.ebaiyin.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.smm.cn&sz=128",
        "title": "上海有色网",
        "desc": "上海有色网",
        "link": "https://www.smm.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.sourceguides.com&sz=128",
        "title": "source guides",
        "desc": "source guides",
        "link": "http://www.sourceguides.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=oekoportal.de&sz=128",
        "title": "okoprtal",
        "desc": "okoprtal",
        "link": "http://oekoportal.de/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.solarbuzz.com&sz=128",
        "title": "solarbuzz",
        "desc": "solarbuzz",
        "link": "http://www.solarbuzz.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.solarplaza.com&sz=128",
        "title": "solarplaza",
        "desc": "solarplaza",
        "link": "http://www.solarplaza.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cansia.ca&sz=128",
        "title": "cansia",
        "desc": "cansia",
        "link": "http://www.cansia.ca/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cnfeol.com&sz=128",
        "title": "中国铁合金在线",
        "desc": "中国铁合金在线",
        "link": "http://www.cnfeol.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=nykc.globalbuy.cc&sz=128",
        "title": "能源矿产网",
        "desc": "能源矿产网",
        "link": "http://nykc.globalbuy.cc/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.battery.com.cn&sz=128",
        "title": "中国电池网",
        "desc": "中国电池网",
        "link": "http://www.battery.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.steelinfo.com.cn&sz=128",
        "title": "钢材信息网",
        "desc": "钢材信息网",
        "link": "http://www.steelinfo.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.gang123.cn&sz=128",
        "title": "中国钢管网",
        "desc": "中国钢管网",
        "link": "http://www.gang123.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ccmn.cn&sz=128",
        "title": "长江有色金属网",
        "desc": "长江有色金属网",
        "link": "http://www.ccmn.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.mysteel.com&sz=128",
        "title": "我的钢铁",
        "desc": "我的钢铁",
        "link": "http://www.mysteel.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=b.smm.cn&sz=128",
        "title": "SMM商友圈",
        "desc": "SMM商友圈",
        "link": "https://b.smm.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.dfjinshu.com&sz=128",
        "title": "东方金属网",
        "desc": "东方金属网",
        "link": "http://www.dfjinshu.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=kyjyw.com&sz=128",
        "title": "矿业交易网",
        "desc": "矿业交易网",
        "link": "http://kyjyw.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=mall.smm.cn&sz=128",
        "title": "SMM有色商城",
        "desc": "SMM有色商城",
        "link": "https://mall.smm.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.tybaba.com&sz=128",
        "title": "金属制品网",
        "desc": "金属制品网",
        "link": "http://www.tybaba.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinametal.com.cn&sz=128",
        "title": "中国有色金属交易网",
        "desc": "中国有色金属交易网",
        "link": "http://www.chinametal.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.qqdcw.com&sz=128",
        "title": "全球电池网",
        "desc": "全球电池网",
        "link": "http://www.qqdcw.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.epenet.cn&sz=128",
        "title": "中国电力设备网",
        "desc": "中国电力设备网",
        "link": "http://www.epenet.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.recycle366.com&sz=128",
        "title": "中废网",
        "desc": "中废网",
        "link": "http://www.recycle366.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.nmm365.cn&sz=128",
        "title": "中国非金属矿网",
        "desc": "中国非金属矿网",
        "link": "http://www.nmm365.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.worldmetal.cn&sz=128",
        "title": "中国金属商贸网",
        "desc": "中国金属商贸网",
        "link": "http://www.worldmetal.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.mesteel.com&sz=128",
        "title": "mesteel",
        "desc": "mesteel",
        "link": "http://www.mesteel.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=bbs.dianjian.net&sz=128",
        "title": "电建论坛",
        "desc": "电建论坛",
        "link": "http://bbs.dianjian.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=club.battery.com.cn&sz=128",
        "title": "电池论坛",
        "desc": "电池论坛",
        "link": "http://club.battery.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.bjxbbs.com.cn&sz=128",
        "title": "北极星电力论坛",
        "desc": "北极星电力论坛",
        "link": "http://www.bjxbbs.com.cn/forum.php"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=bbs.chinagb.net&sz=128",
        "title": "能源世界",
        "desc": "能源世界",
        "link": "http://bbs.chinagb.net/forum.php"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=bbs.chinacitywater.org&sz=128",
        "title": "水世界论坛",
        "desc": "水世界论坛",
        "link": "http://bbs.chinacitywater.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ysrencai.com&sz=128",
        "title": "中国有色金属人才网",
        "desc": "中国有色金属人才网",
        "link": "http://www.ysrencai.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=steel.jdjob88.com&sz=128",
        "title": "一览钢材英才网",
        "desc": "一览钢材英才网",
        "link": "http://steel.jdjob88.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=gf.epjob88.com&sz=128",
        "title": "一览光伏英才网",
        "desc": "一览光伏英才网",
        "link": "http://gf.epjob88.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=steel.baidajob.com&sz=128",
        "title": "百大英才网-钢铁站",
        "desc": "百大英才网-钢铁站",
        "link": "http://steel.baidajob.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=hdjob.bjx.com.cn&sz=128",
        "title": "北极星火电招聘网",
        "desc": "北极星火电招聘网",
        "link": "https://hdjob.bjx.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.energyexpo.co.kr&sz=128",
        "title": "韩国国际绿色能源展览会",
        "desc": "韩国国际绿色能源展览会",
        "link": "http://www.energyexpo.co.kr/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.exposolar.org&sz=128",
        "title": "韩国世界太阳能博览会",
        "desc": "韩国世界太阳能博览会",
        "link": "https://www.exposolar.org/2019/kor/main.asp"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.pvexpo.jp&sz=128",
        "title": "日本太阳能光伏展",
        "desc": "日本太阳能光伏展",
        "link": "https://www.pvexpo.jp/ja-jp.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.elcom-ukraine.com&sz=128",
        "title": "乌克兰电力展",
        "desc": "乌克兰电力展",
        "link": "https://www.elcom-ukraine.com/elcomukraine.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.tech-expo.com.ua&sz=128",
        "title": "乌克兰水处理展",
        "desc": "乌克兰水处理展",
        "link": "http://www.tech-expo.com.ua/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.photovoltaic-conference.com&sz=128",
        "title": "巴黎太阳能光伏展",
        "desc": "巴黎太阳能光伏展",
        "link": "https://www.photovoltaic-conference.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.all-energy.co.uk&sz=128",
        "title": "英国阿伯丁能源展",
        "desc": "英国阿伯丁能源展",
        "link": "https://www.all-energy.co.uk/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.intersolar.de&sz=128",
        "title": "慕尼黑太阳能技术展",
        "desc": "慕尼黑太阳能技术展",
        "link": "https://www.intersolar.de/en/home.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.messe-berlin.de&sz=128",
        "title": "德国柏林国际水展",
        "desc": "德国柏林国际水展",
        "link": "https://www.messe-berlin.de/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.weftec.org&sz=128",
        "title": "美国水处理展",
        "desc": "美国水处理展",
        "link": "https://www.weftec.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.windpowerexpo.org&sz=128",
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
        "icon": "https://www.google.com/s2/favicons?domain=www.caam.org.cn&sz=128",
        "title": "中国汽车工业协会",
        "desc": "中国汽车工业协会",
        "link": "http://www.caam.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.auto-ccpit.org&sz=128",
        "title": "中国汽车贸易促进委员会",
        "desc": "中国汽车贸易促进委员会",
        "link": "http://www.auto-ccpit.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.at188.com&sz=128",
        "title": "进口汽车网",
        "desc": "进口汽车网",
        "link": "http://www.at188.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.qpzone.com.cn&sz=128",
        "title": "汽配圈",
        "desc": "汽配圈",
        "link": "http://www.qpzone.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.autoworld.com.cn&sz=128",
        "title": "汽车世界",
        "desc": "汽车世界",
        "link": "http://www.autoworld.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.pcauto.com.cn&sz=128",
        "title": "太平洋汽车网",
        "desc": "太平洋汽车网",
        "link": "http://www.pcauto.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=gz.cheshi.com&sz=128",
        "title": "网上车市",
        "desc": "网上车市",
        "link": "http://gz.cheshi.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=auto.sina.com.cn&sz=128",
        "title": "新浪汽车",
        "desc": "新浪汽车",
        "link": "http://auto.sina.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=auto.sohu.com&sz=128",
        "title": "搜狐汽车",
        "desc": "搜狐汽车",
        "link": "http://auto.sohu.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=auto.163.com&sz=128",
        "title": "网易汽车频道",
        "desc": "网易汽车频道",
        "link": "http://auto.163.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.tirechina.net&sz=128",
        "title": "中国轮胎商务网",
        "desc": "中国轮胎商务网",
        "link": "http://www.tirechina.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=auto.zjol.com.cn&sz=128",
        "title": "浙江汽车网",
        "desc": "浙江汽车网",
        "link": "http://auto.zjol.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.bcar.com.cn&sz=128",
        "title": "汽车商务",
        "desc": "汽车商务",
        "link": "https://www.bcar.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=news.emao.com&sz=128",
        "title": "一猫汽车网",
        "desc": "一猫汽车网",
        "link": "http://news.emao.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinamotorcycle.com&sz=128",
        "title": "中国摩托车网",
        "desc": "中国摩托车网",
        "link": "http://www.chinamotorcycle.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.hywcom.com&sz=128",
        "title": "汽车行业信息网",
        "desc": "汽车行业信息网",
        "link": "http://www.hywcom.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.autoinfo.org.cn&sz=128",
        "title": "中国汽车工业信息网",
        "desc": "中国汽车工业信息网",
        "link": "http://www.autoinfo.org.cn/autoinfo_cn/index.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.auto-stats.org.cn&sz=128",
        "title": "汽车工业协会统计信息网",
        "desc": "汽车工业协会统计信息网",
        "link": "http://www.auto-stats.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.automarket.net.cn&sz=128",
        "title": "汽车市场网",
        "desc": "汽车市场网",
        "link": "http://www.automarket.net.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chewen.com&sz=128",
        "title": "车问",
        "desc": "车问",
        "link": "http://www.chewen.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.autobook.com.cn&sz=128",
        "title": "中国汽车图书资料网",
        "desc": "中国汽车图书资料网",
        "link": "http://www.autobook.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ev168.com&sz=128",
        "title": "EV168电动车网",
        "desc": "EV168电动车网",
        "link": "http://www.ev168.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chexun.com&sz=128",
        "title": "车讯原创",
        "desc": "车讯原创",
        "link": "http://www.chexun.com/news/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.bitauto.com&sz=128",
        "title": "易车服务网",
        "desc": "易车服务网",
        "link": "http://www.bitauto.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.huanqiuauto.com&sz=128",
        "title": "环球汽车网",
        "desc": "环球汽车网",
        "link": "http://www.huanqiuauto.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.carcav.com&sz=128",
        "title": "中国汽车影音网",
        "desc": "中国汽车影音网",
        "link": "http://www.carcav.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinabuses.com&sz=128",
        "title": "中国客车网",
        "desc": "中国客车网",
        "link": "http://www.chinabuses.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinaautonews.com.cn&sz=128",
        "title": "中国汽车新闻网",
        "desc": "中国汽车新闻网",
        "link": "http://www.chinaautonews.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.zbcars.com&sz=128",
        "title": "淄博汽车网",
        "desc": "淄博汽车网",
        "link": "http://www.zbcars.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.sinocars.com&sz=128",
        "title": "华夏汽车网",
        "desc": "华夏汽车网",
        "link": "http://www.sinocars.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.mycar168.com&sz=128",
        "title": "深圳汽车大世界网",
        "desc": "深圳汽车大世界网",
        "link": "http://www.mycar168.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinaauto.net&sz=128",
        "title": "中国汽车动态网",
        "desc": "中国汽车动态网",
        "link": "http://www.chinaauto.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinaspcar.com&sz=128",
        "title": "中国专用汽车网",
        "desc": "中国专用汽车网",
        "link": "http://www.chinaspcar.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.autohome.com.cn&sz=128",
        "title": "汽车之家",
        "desc": "汽车之家",
        "link": "http://www.autohome.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinatruck.org&sz=128",
        "title": "中国卡车网",
        "desc": "中国卡车网",
        "link": "http://www.chinatruck.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.qdcars.com&sz=128",
        "title": "青岛汽车网",
        "desc": "青岛汽车网",
        "link": "http://www.qdcars.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=auto.ifeng.com&sz=128",
        "title": "凤凰汽车",
        "desc": "凤凰汽车",
        "link": "https://auto.ifeng.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.qqddc.com&sz=128",
        "title": "全国电动车网",
        "desc": "全国电动车网",
        "link": "http://www.qqddc.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.evtimes.cn&sz=128",
        "title": "电动车时代网",
        "desc": "电动车时代网",
        "link": "http://www.evtimes.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.mtuo.com&sz=128",
        "title": "中国摩托车网",
        "desc": "中国摩托车网",
        "link": "http://www.mtuo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cebike.com&sz=128",
        "title": "电动车商情网",
        "desc": "电动车商情网",
        "link": "http://www.cebike.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.inabr.com&sz=128",
        "title": "汽车商业评论",
        "desc": "汽车商业评论",
        "link": "http://www.inabr.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinasuv.cn&sz=128",
        "title": "中国SUV网",
        "desc": "中国SUV网",
        "link": "http://www.chinasuv.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=auto.china.com&sz=128",
        "title": "中华网汽车",
        "desc": "中华网汽车",
        "link": "https://auto.china.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chooseauto.com.cn&sz=128",
        "title": "选车网",
        "desc": "选车网",
        "link": "http://www.chooseauto.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.theautochannel.com&sz=128",
        "title": "auto channel",
        "desc": "auto channel",
        "link": "http://www.theautochannel.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.autoexpress.co.uk&sz=128",
        "title": "auto express",
        "desc": "auto express",
        "link": "http://www.autoexpress.co.uk/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.carpartswholesale.com&sz=128",
        "title": "car parts",
        "desc": "car parts",
        "link": "http://www.carpartswholesale.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.allworldautomotive.com&sz=128",
        "title": "auto motive",
        "desc": "auto motive",
        "link": "http://www.allworldautomotive.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.autoguide.net&sz=128",
        "title": "auto guide",
        "desc": "auto guide",
        "link": "http://www.autoguide.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.acea.be&sz=128",
        "title": "acea",
        "desc": "acea",
        "link": "http://www.acea.be/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.qp110.com&sz=128",
        "title": "汽车配件110网",
        "desc": "汽车配件110网",
        "link": "http://www.qp110.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.all2car.com&sz=128",
        "title": "全球汽配网",
        "desc": "全球汽配网",
        "link": "http://www.all2car.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinaqibao.net&sz=128",
        "title": "中国汽保网",
        "desc": "中国汽保网",
        "link": "http://www.chinaqibao.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.qipei001.com&sz=128",
        "title": "汽配网",
        "desc": "汽配网",
        "link": "http://www.qipei001.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=cn.oemol.com&sz=128",
        "title": "环球汽配资源",
        "desc": "环球汽配资源",
        "link": "http://cn.oemol.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.auto-a.hc360.com&sz=128",
        "title": "慧聪汽车用品商务网",
        "desc": "慧聪汽车用品商务网",
        "link": "http://www.auto-a.hc360.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=cn.gasgoo.com&sz=128",
        "title": "盖世汽车网",
        "desc": "盖世汽车网",
        "link": "http://cn.gasgoo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.autoho.com&sz=128",
        "title": "中国汽车配件网",
        "desc": "中国汽车配件网",
        "link": "http://www.autoho.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.qqddc.com&sz=128",
        "title": "全球电动车网",
        "desc": "全球电动车网",
        "link": "http://www.qqddc.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.qipeiren.com&sz=128",
        "title": "汽配人",
        "desc": "汽配人",
        "link": "http://www.qipeiren.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinaepu.com&sz=128",
        "title": "天下汽配网",
        "desc": "天下汽配网",
        "link": "http://www.chinaepu.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cnqmp.com&sz=128",
        "title": "中国汽摩配网",
        "desc": "中国汽摩配网",
        "link": "http://www.cnqmp.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.qqdcw.com&sz=128",
        "title": "全球电池网",
        "desc": "全球电池网",
        "link": "http://www.qqdcw.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ieche.com&sz=128",
        "title": "爱易汽车",
        "desc": "爱易汽车",
        "link": "http://www.ieche.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cheshi.com&sz=128",
        "title": "网上车市",
        "desc": "网上车市",
        "link": "http://www.cheshi.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.autohome.com.cn&sz=128",
        "title": "汽车之家",
        "desc": "汽车之家",
        "link": "https://www.autohome.com.cn/zhuhai/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ddc.net.cn&sz=128",
        "title": "中国电动车网",
        "desc": "中国电动车网",
        "link": "http://www.ddc.net.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.xcar.com.cn&sz=128",
        "title": "爱卡汽车",
        "desc": "爱卡汽车",
        "link": "http://www.xcar.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.zj2car.com&sz=128",
        "title": "浙江二手车市场",
        "desc": "浙江二手车市场",
        "link": "http://www.zj2car.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.buycar.cn&sz=128",
        "title": "买车网",
        "desc": "买车网",
        "link": "http://www.buycar.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.che168.com&sz=128",
        "title": "二手车之家",
        "desc": "二手车之家",
        "link": "https://www.che168.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.autoho.com&sz=128",
        "title": "中国汽车配件网",
        "desc": "中国汽车配件网",
        "link": "http://www.autoho.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinaautosupplier.com&sz=128",
        "title": "中国汽车供应商网",
        "desc": "中国汽车供应商网",
        "link": "http://www.chinaautosupplier.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.zgqpc.com&sz=128",
        "title": "中汽城",
        "desc": "中汽城",
        "link": "http://www.zgqpc.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.qpcheng.cn&sz=128",
        "title": "汽配城",
        "desc": "汽配城",
        "link": "http://www.qpcheng.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.qpzx.com&sz=128",
        "title": "汽配在线网",
        "desc": "汽配在线网",
        "link": "http://www.qpzx.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.acmainfo.com&sz=128",
        "title": "acma",
        "desc": "acma",
        "link": "http://www.acmainfo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.gasgoo.com&sz=128",
        "title": "Gasgoo",
        "desc": "Gasgoo",
        "link": "http://www.gasgoo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=bbs.pcauto.com.cn&sz=128",
        "title": "太平洋汽车网",
        "desc": "太平洋汽车网",
        "link": "http://bbs.pcauto.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=bbs.szcw.cn&sz=128",
        "title": "苏E车友会",
        "desc": "苏E车友会",
        "link": "http://bbs.szcw.cn/forum.php"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.carjob.com.cn&sz=128",
        "title": "中国汽车人才网",
        "desc": "中国汽车人才网",
        "link": "http://www.carjob.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=qp.jdjob88.com&sz=128",
        "title": "一览汽配英才网",
        "desc": "一览汽配英才网",
        "link": "http://qp.jdjob88.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.qipeizhaopin.com&sz=128",
        "title": "中国汽车配件人才网",
        "desc": "中国汽车配件人才网",
        "link": "http://www.qipeizhaopin.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.qcr.cc&sz=128",
        "title": "汽车人招聘网",
        "desc": "汽车人招聘网",
        "link": "https://www.qcr.cc/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=qp.djob.com&sz=128",
        "title": "汽配人才网",
        "desc": "汽配人才网",
        "link": "http://qp.djob.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.autoguangzhou.com.cn&sz=128",
        "title": "广州国际汽车展",
        "desc": "广州国际汽车展",
        "link": "http://www.autoguangzhou.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.iapechina.com&sz=128",
        "title": "北京汽车零部件展",
        "desc": "北京汽车零部件展",
        "link": "http://www.iapechina.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ciaaff.org&sz=128",
        "title": "郑州轿车配件微车配件展",
        "desc": "郑州轿车配件微车配件展",
        "link": "http://www.ciaaff.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.autoshanghai.org&sz=128",
        "title": "上海国际汽车工业展",
        "desc": "上海国际汽车工业展",
        "link": "http://www.autoshanghai.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=neas.ciif-expo.com&sz=128",
        "title": "新能源汽车展",
        "desc": "新能源汽车展",
        "link": "http://neas.ciif-expo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.reifenchina.com&sz=128",
        "title": "上海埃森轮胎展",
        "desc": "上海埃森轮胎展",
        "link": "http://www.reifenchina.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.tyrexposeries.com&sz=128",
        "title": "亚洲轮胎展",
        "desc": "亚洲轮胎展",
        "link": "http://www.tyrexposeries.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.taipeiampa.com.tw&sz=128",
        "title": "台北汽车零配件展",
        "desc": "台北汽车零配件展",
        "link": "https://www.taipeiampa.com.tw/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=cisvietnam.com.vn&sz=128",
        "title": "越南汽车及零部件展",
        "desc": "越南汽车及零部件展",
        "link": "http://cisvietnam.com.vn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.koaashow.com&sz=128",
        "title": "韩国国际汽摩配展",
        "desc": "韩国国际汽摩配展",
        "link": "http://www.koaashow.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.car-ele.jp&sz=128",
        "title": "日本电动车及新能源车技术展",
        "desc": "日本电动车及新能源车技术展",
        "link": "https://www.car-ele.jp/ja-jp.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.iaae-jp.com&sz=128",
        "title": "日本东京汽配展",
        "desc": "日本东京汽配展",
        "link": "http://www.iaae-jp.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.inapa-exhibition.net&sz=128",
        "title": "印尼雅加达汽车零部件展",
        "desc": "印尼雅加达汽车零部件展",
        "link": "http://www.inapa-exhibition.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.autoexpo.in&sz=128",
        "title": "印度新德里汽配展",
        "desc": "印度新德里汽配展",
        "link": "http://www.autoexpo.in/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=acma-automechanika-newdelhi.in.messefrankfurt.com&sz=128",
        "title": "印度汽车零部件及售后服务展",
        "desc": "印度汽车零部件及售后服务展",
        "link": "https://acma-automechanika-newdelhi.in.messefrankfurt.com/newdelhi/en.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=automechanika-istanbul.tr.messefrankfurt.com&sz=128",
        "title": "土耳其汽车零配件及售后服务展",
        "desc": "土耳其汽车零配件及售后服务展",
        "link": "https://automechanika-istanbul.tr.messefrankfurt.com/istanbul/en.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=automechanika-dubai.ae.messefrankfurt.com&sz=128",
        "title": "迪拜汽车零配件展",
        "desc": "迪拜汽车零配件展",
        "link": "https://automechanika-dubai.ae.messefrankfurt.com/dubai/en.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=automechanika.za.messefrankfurt.com&sz=128",
        "title": "南非汽车零配件/售后展",
        "desc": "南非汽车零配件/售后展",
        "link": "https://automechanika.za.messefrankfurt.com/johannesburg/en.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=automechanika-shanghai.hk.messefrankfurt.com&sz=128",
        "title": "法兰克福上海汽配展",
        "desc": "法兰克福上海汽配展",
        "link": "https://automechanika-shanghai.hk.messefrankfurt.com/shanghai/zh-cn.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.interauto-expo.ru&sz=128",
        "title": "俄罗斯国际汽车及配件展览会",
        "desc": "俄罗斯国际汽车及配件展览会",
        "link": "http://www.interauto-expo.ru/interauto/exhibition/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=automechanika.ru.messefrankfurt.com&sz=128",
        "title": "莫斯科汽车及配件展",
        "desc": "莫斯科汽车及配件展",
        "link": "https://automechanika.ru.messefrankfurt.com/moscow/ru.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=eng.interauto-expo.ru&sz=128",
        "title": "俄罗斯国际汽车及配件展",
        "desc": "俄罗斯国际汽车及配件展",
        "link": "http://eng.interauto-expo.ru/interauto/exhibition/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.motorshow.pl&sz=128",
        "title": "波兰汽车配件展",
        "desc": "波兰汽车配件展",
        "link": "https://www.motorshow.pl/pl/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.bvv.cz&sz=128",
        "title": "捷克汽车暨零配件展",
        "desc": "捷克汽车暨零配件展",
        "link": "https://www.bvv.cz/en/autotec/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.tiretechnology-expo.com&sz=128",
        "title": "德国科隆国际轮胎展",
        "desc": "德国科隆国际轮胎展",
        "link": "https://www.tiretechnology-expo.com/en/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=automechanika.messefrankfurt.com&sz=128",
        "title": "德国埃森轮胎展",
        "desc": "德国埃森轮胎展",
        "link": "https://automechanika.messefrankfurt.com/frankfurt/de.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.iaa.de&sz=128",
        "title": "德国汉诺威商用车展",
        "desc": "德国汉诺威商用车展",
        "link": "http://www.iaa.de/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=automechanika.ar.messefrankfurt.com&sz=128",
        "title": "阿根廷汽配展",
        "desc": "阿根廷汽配展",
        "link": "https://automechanika.ar.messefrankfurt.com/buenosaires/en.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.automecfeira.com.br&sz=128",
        "title": "巴西汽车配件展",
        "desc": "巴西汽车配件展",
        "link": "https://www.automecfeira.com.br/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.pneushow.com.br&sz=128",
        "title": "巴西轮胎及设备贸易展",
        "desc": "巴西轮胎及设备贸易展",
        "link": "https://www.pneushow.com.br/pt-br/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.autopromotec.com&sz=128",
        "title": "博洛尼亚轮胎和汽配展",
        "desc": "博洛尼亚轮胎和汽配展",
        "link": "https://www.autopromotec.com/it/index.php"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=autoaftermarketexpo.com.au&sz=128",
        "title": "澳大利亚汽配/售后展",
        "desc": "澳大利亚汽配/售后展",
        "link": "https://autoaftermarketexpo.com.au/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=events.american-tradeshow.com&sz=128",
        "title": "美国轮胎工业展",
        "desc": "美国轮胎工业展",
        "link": "https://events.american-tradeshow.com/ITEC"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.semashow.com&sz=128",
        "title": "拉斯维加斯改装车展",
        "desc": "拉斯维加斯改装车展",
        "link": "https://www.semashow.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.truckingshow.com&sz=128",
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
        "icon": "https://www.google.com/s2/favicons?domain=www.cheaa.com&sz=128",
        "title": "中国家电网",
        "desc": "中国家电网",
        "link": "http://www.cheaa.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.hea.cn&sz=128",
        "title": "家电网",
        "desc": "家电网",
        "link": "http://www.hea.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.huangye88.com&sz=128",
        "title": "88小家电网",
        "desc": "88小家电网",
        "link": "http://www.huangye88.com/xiaojiadian/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.xdjd.cn&sz=128",
        "title": "现代家电",
        "desc": "现代家电",
        "link": "https://www.xdjd.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.eepw.com.cn&sz=128",
        "title": "电子产品世界",
        "desc": "电子产品世界",
        "link": "http://www.eepw.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.21ic.com&sz=128",
        "title": "21IC中国电子网",
        "desc": "21IC中国电子网",
        "link": "http://www.21ic.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ec.hc360.com&sz=128",
        "title": "慧聪电子网",
        "desc": "慧聪电子网",
        "link": "http://www.ec.hc360.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.elecfans.com&sz=128",
        "title": "电子发烧友",
        "desc": "电子发烧友",
        "link": "http://www.elecfans.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cnledw.com&sz=128",
        "title": "中国LED网",
        "desc": "中国LED网",
        "link": "https://www.cnledw.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ledinside.cn&sz=128",
        "title": "LED在线",
        "desc": "LED在线",
        "link": "https://www.ledinside.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.dianqizazhi.com&sz=128",
        "title": "电器杂志",
        "desc": "电器杂志",
        "link": "http://www.dianqizazhi.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=family.pconline.com.cn&sz=128",
        "title": "太平洋家电",
        "desc": "太平洋家电",
        "link": "https://family.pconline.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.xinhuanet.com&sz=128",
        "title": "新华网家电",
        "desc": "新华网家电",
        "link": "http://www.xinhuanet.com/jiadian/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.baixingjd.com&sz=128",
        "title": "百姓家电网",
        "desc": "百姓家电网",
        "link": "https://www.baixingjd.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jdxfw.com&sz=128",
        "title": "家电消费网",
        "desc": "家电消费网",
        "link": "http://www.jdxfw.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinahvacr.com&sz=128",
        "title": "空调制冷网",
        "desc": "空调制冷网",
        "link": "http://www.chinahvacr.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=tech.sina.com.cn&sz=128",
        "title": "家电风暴-新浪",
        "desc": "家电风暴-新浪",
        "link": "http://tech.sina.com.cn/elec/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cheaa.com&sz=128",
        "title": "中国家电网",
        "desc": "中国家电网",
        "link": "http://www.cheaa.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinaaudio.net&sz=128",
        "title": "中国音响网",
        "desc": "中国音响网",
        "link": "http://www.chinaaudio.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ea3w.com&sz=128",
        "title": "万维家电网",
        "desc": "万维家电网",
        "link": "http://www.ea3w.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=digi.it.sohu.com&sz=128",
        "title": "搜狐数字家电频道",
        "desc": "搜狐数字家电频道",
        "link": "http://digi.it.sohu.com/digital-home/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jdw001.com&sz=128",
        "title": "第一家电网",
        "desc": "第一家电网",
        "link": "http://www.jdw001.com/portal.php"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cheari.com&sz=128",
        "title": "环球家电网",
        "desc": "环球家电网",
        "link": "http://www.cheari.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.zdwang.com&sz=128",
        "title": "智电网",
        "desc": "智电网",
        "link": "http://www.zdwang.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jdbbs.com&sz=128",
        "title": "家电联盟网",
        "desc": "家电联盟网",
        "link": "https://www.jdbbs.com/portal.php"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=zm.atobo.com.cn&sz=128",
        "title": "中国灯饰照明网",
        "desc": "中国灯饰照明网",
        "link": "http://zm.atobo.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.lightingchina.com.cn&sz=128",
        "title": "中国灯照明网",
        "desc": "中国灯照明网",
        "link": "http://www.lightingchina.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.shnn.com&sz=128",
        "title": "中国申网家电城",
        "desc": "中国申网家电城",
        "link": "http://www.shnn.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.rhvacnet.com&sz=128",
        "title": "冷暖空调网",
        "desc": "冷暖空调网",
        "link": "http://www.rhvacnet.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.114ic.com&sz=128",
        "title": "电子元件交易网",
        "desc": "电子元件交易网",
        "link": "http://www.114ic.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=china.coovee.net&sz=128",
        "title": "环球厨卫",
        "desc": "环球厨卫",
        "link": "http://china.coovee.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.gzlight.com&sz=128",
        "title": "古镇灯饰网",
        "desc": "古镇灯饰网",
        "link": "http://www.gzlight.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.hvacr.cn&sz=128",
        "title": "空调制冷大市场",
        "desc": "空调制冷大市场",
        "link": "http://www.hvacr.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ic37.com&sz=128",
        "title": "中国IC网",
        "desc": "中国IC网",
        "link": "http://www.ic37.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cecb2b.com&sz=128",
        "title": "元器件交易网",
        "desc": "元器件交易网",
        "link": "http://www.cecb2b.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.dzsc.com&sz=128",
        "title": "维库电子市场网",
        "desc": "维库电子市场网",
        "link": "http://www.dzsc.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.hqew.com&sz=128",
        "title": "华强电子网",
        "desc": "华强电子网",
        "link": "http://www.hqew.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=jdsc7777.com&sz=128",
        "title": "家电商城",
        "desc": "家电商城",
        "link": "http://jdsc7777.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jd-bbs.com&sz=128",
        "title": "家电论坛",
        "desc": "家电论坛",
        "link": "http://www.jd-bbs.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jdwxmagazine.com&sz=128",
        "title": "家电维修技术论坛",
        "desc": "家电维修技术论坛",
        "link": "http://www.jdwxmagazine.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=bbs.cheaa.com&sz=128",
        "title": "中国家电网-家电论坛",
        "desc": "中国家电网-家电论坛",
        "link": "http://bbs.cheaa.com/forum.php"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.jdwx.info&sz=128",
        "title": "家电维修论坛",
        "desc": "家电维修论坛",
        "link": "https://www.jdwx.info/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=e10000.cn&sz=128",
        "title": "亿万论坛",
        "desc": "亿万论坛",
        "link": "http://e10000.cn/Boards.asp"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.52jdwx.com&sz=128",
        "title": "我爱家电维修网",
        "desc": "我爱家电维修网",
        "link": "http://www.52jdwx.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=jiadian.djob.com&sz=128",
        "title": "家电人才网",
        "desc": "家电人才网",
        "link": "http://jiadian.djob.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=jd.job1001.com&sz=128",
        "title": "一览家电英才网",
        "desc": "一览家电英才网",
        "link": "http://jd.job1001.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=event.hktdc.com&sz=128",
        "title": "香港电子展",
        "desc": "香港电子展",
        "link": "https://event.hktdc.com/fair/hkelectronicsfairse-tc"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cheaa.com&sz=128",
        "title": "中国家电博览会",
        "desc": "中国家电博览会",
        "link": "http://www.cheaa.com/awe/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cnibf.net&sz=128",
        "title": "上海电池展",
        "desc": "上海电池展",
        "link": "http://www.cnibf.net/cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.goemex.com&sz=128",
        "title": "苏州电子信息博览会",
        "desc": "苏州电子信息博览会",
        "link": "http://www.goemex.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.taitronics.tw&sz=128",
        "title": "台北电子产业科技展",
        "desc": "台北电子产业科技展",
        "link": "https://www.taitronics.tw/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.computextaipei.com.tw&sz=128",
        "title": "台北国际电脑展",
        "desc": "台北国际电脑展",
        "link": "https://www.computextaipei.com.tw/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.comexitshow.com.sg&sz=128",
        "title": "COMEX消费电子展(新加坡)",
        "desc": "COMEX消费电子展(新加坡)",
        "link": "https://www.comexitshow.com.sg/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.japan-it-spring.jp&sz=128",
        "title": "东京IT展",
        "desc": "东京IT展",
        "link": "https://www.japan-it-spring.jp/ja-jp/about/cloud.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ceatec.com&sz=128",
        "title": "日本高新技术展",
        "desc": "日本高新技术展",
        "link": "https://www.ceatec.com/ja/application/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.nepcon.jp&sz=128",
        "title": "日本电子制造设备及微电子展",
        "desc": "日本电子制造设备及微电子展",
        "link": "https://www.nepcon.jp/ja-jp.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.batteryjapan.jp&sz=128",
        "title": "日本二次电池展",
        "desc": "日本二次电池展",
        "link": "https://www.batteryjapan.jp/ja-jp.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.smtpcb.org&sz=128",
        "title": "韩国电子制程展",
        "desc": "韩国电子制程展",
        "link": "http://www.smtpcb.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.worlditshow.co.kr&sz=128",
        "title": "韩国电子展",
        "desc": "韩国电子展",
        "link": "http://www.worlditshow.co.kr/kor/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.nepconvietnam.com&sz=128",
        "title": "越南电子制造设备展",
        "desc": "越南电子制造设备展",
        "link": "https://www.nepconvietnam.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.bangkok-rhvac.com&sz=128",
        "title": "泰国空调制冷展",
        "desc": "泰国空调制冷展",
        "link": "https://www.bangkok-rhvac.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.nepconthailand.com&sz=128",
        "title": "泰国电子展",
        "desc": "泰国电子展",
        "link": "https://www.nepconthailand.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.inatronics-exhibition.net&sz=128",
        "title": "印尼电子及零组件展",
        "desc": "印尼电子及零组件展",
        "link": "http://www.inatronics-exhibition.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.indiaelectronicsweek.com&sz=128",
        "title": "新德里电子元器展",
        "desc": "新德里电子元器展",
        "link": "https://www.indiaelectronicsweek.com/efy-expo-2/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.gitex.com&sz=128",
        "title": "迪拜电子展",
        "desc": "迪拜电子展",
        "link": "https://www.gitex.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.middleeastelectricity.com&sz=128",
        "title": "迪拜电力/灯具/新能源展",
        "desc": "迪拜电力/灯具/新能源展",
        "link": "https://www.middleeastelectricity.com/en/home.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=cairoict.com&sz=128",
        "title": "开罗电子展",
        "desc": "开罗电子展",
        "link": "https://cairoict.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.elektro-expo.ru&sz=128",
        "title": "莫斯科电力电子展",
        "desc": "莫斯科电力电子展",
        "link": "http://www.elektro-expo.ru/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=photoforum.pmd-forum.ru&sz=128",
        "title": "莫斯科消费电子/影像展",
        "desc": "莫斯科消费电子/影像展",
        "link": "https://photoforum.pmd-forum.ru/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.expoelectronica.ru&sz=128",
        "title": "莫斯科电子元器件展",
        "desc": "莫斯科电子元器件展",
        "link": "http://www.expoelectronica.ru/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.eletrolarshow.com.br&sz=128",
        "title": "巴西电子展",
        "desc": "巴西电子展",
        "link": "http://www.eletrolarshow.com.br/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.bettshow.com&sz=128",
        "title": "英国教育设备与技术展",
        "desc": "英国教育设备与技术展",
        "link": "https://www.bettshow.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.infosecurityeurope.com&sz=128",
        "title": "伦敦计算机信息系统安全展",
        "desc": "伦敦计算机信息系统安全展",
        "link": "https://www.infosecurityeurope.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ifa-berlin.com&sz=128",
        "title": "德国柏林消费类电子展",
        "desc": "德国柏林消费类电子展",
        "link": "https://www.ifa-berlin.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=b2b.ifa-berlin.com&sz=128",
        "title": "柏林消费类电子及家用电器展",
        "desc": "柏林消费类电子及家用电器展",
        "link": "https://b2b.ifa-berlin.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.coilwindingexpo.com&sz=128",
        "title": "德国线圈绝缘材料及电器制造展",
        "desc": "德国线圈绝缘材料及电器制造展",
        "link": "https://www.coilwindingexpo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=electronica.de&sz=128",
        "title": "慕尼黑电子元器件展",
        "desc": "慕尼黑电子元器件展",
        "link": "https://electronica.de/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.electronicachina.com.cn&sz=128",
        "title": "慕尼黑上海电子展",
        "desc": "慕尼黑上海电子展",
        "link": "http://www.electronicachina.com.cn/zh-cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=pcim.mesago.com&sz=128",
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
        "icon": "https://www.google.com/s2/favicons?domain=www.easttoys.com&sz=128",
        "title": "东方玩具网",
        "desc": "东方玩具网",
        "link": "http://www.easttoys.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.wjyt-china.org&sz=128",
        "title": "中国玩具和婴童用品协会",
        "desc": "中国玩具和婴童用品协会",
        "link": "http://www.wjyt-china.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ywtoys.org&sz=128",
        "title": "义乌玩具网",
        "desc": "义乌玩具网",
        "link": "http://www.ywtoys.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=wanju.b2b168.com&sz=128",
        "title": "中国玩具网",
        "desc": "中国玩具网",
        "link": "https://wanju.b2b168.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cn5135.com&sz=128",
        "title": "无忧玩具网",
        "desc": "无忧玩具网",
        "link": "http://www.cn5135.com/toys/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.gift12345.com&sz=128",
        "title": "工礼网",
        "desc": "工礼网",
        "link": "http://www.gift12345.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.giftcity.cn&sz=128",
        "title": "中国礼品城网",
        "desc": "中国礼品城网",
        "link": "http://www.giftcity.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ctoy.com.cn&sz=128",
        "title": "中外玩具礼品网",
        "desc": "中外玩具礼品网",
        "link": "http://www.ctoy.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=toy.sonhoo.com&sz=128",
        "title": "今日玩具",
        "desc": "今日玩具",
        "link": "http://toy.sonhoo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinastuffedtoys.com&sz=128",
        "title": "中国毛绒玩具网",
        "desc": "中国毛绒玩具网",
        "link": "http://www.chinastuffedtoys.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.2mould.com&sz=128",
        "title": "国际模具网",
        "desc": "国际模具网",
        "link": "http://www.2mould.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=wanju.huangye88.com&sz=128",
        "title": "88玩具网",
        "desc": "88玩具网",
        "link": "http://wanju.huangye88.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.toybaba.com&sz=128",
        "title": "玩具巴巴",
        "desc": "玩具巴巴",
        "link": "http://www.toybaba.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.31toy.com&sz=128",
        "title": "玩具网",
        "desc": "玩具网",
        "link": "http://www.31toy.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.toygood.com&sz=128",
        "title": "玩具贸易平台",
        "desc": "玩具贸易平台",
        "link": "http://www.toygood.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=toy.36hjob.com&sz=128",
        "title": "玩具人才网",
        "desc": "玩具人才网",
        "link": "http://toy.36hjob.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.51wjrc.com&sz=128",
        "title": "玩具人才热线",
        "desc": "玩具人才热线",
        "link": "http://www.51wjrc.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=cn.china-toy-expo.com&sz=128",
        "title": "中国玩具展",
        "desc": "中国玩具展",
        "link": "https://cn.china-toy-expo.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.beijingite.com&sz=128",
        "title": "北京玩具及幼教用品展",
        "desc": "北京玩具及幼教用品展",
        "link": "http://www.beijingite.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=event.hktdc.com&sz=128",
        "title": "香港玩具展",
        "desc": "香港玩具展",
        "link": "https://event.hktdc.com/fair/hktoyfair-sc"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=paperworld-middle-east.ae.messefrankfurt.com&sz=128",
        "title": "迪拜玩具展",
        "desc": "迪拜玩具展",
        "link": "https://paperworld-middle-east.ae.messefrankfurt.com/dubai/en/facts-figures/playworld-village.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.pbcexpo.com.au&sz=128",
        "title": "澳大利亚玩具/婴儿用品展",
        "desc": "澳大利亚玩具/婴儿用品展",
        "link": "https://www.pbcexpo.com.au/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=kidsrussia.ru&sz=128",
        "title": "俄罗斯母婴用品展",
        "desc": "俄罗斯母婴用品展",
        "link": "http://kidsrussia.ru/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.abrin.com.br&sz=128",
        "title": "巴西圣保罗玩具展",
        "desc": "巴西圣保罗玩具展",
        "link": "https://www.abrin.com.br/pt-br/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.spielwarenmesse.de&sz=128",
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
        "icon": "https://www.google.com/s2/favicons?domain=www.aquatechchina.com&sz=128",
        "title": "上海国际水处理展览会",
        "desc": "上海国际水处理展览会",
        "link": "http://www.aquatechchina.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cms-berlin.de&sz=128",
        "title": "德国柏林洁净产品展",
        "desc": "德国柏林洁净产品展",
        "link": "https://www.cms-berlin.de/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.wasteexpoaustralia.com.au&sz=128",
        "title": "澳大利亚环保及废弃物处理展",
        "desc": "澳大利亚环保及废弃物处理展",
        "link": "https://www.wasteexpoaustralia.com.au/en-gb.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.hbjob88.com&sz=128",
        "title": "环保英才网",
        "desc": "环保英才网",
        "link": "http://www.hbjob88.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=rc.goepe.com&sz=128",
        "title": "中国环保人才网",
        "desc": "中国环保人才网",
        "link": "http://rc.goepe.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.36ae.com&sz=128",
        "title": "中国环境人才网",
        "desc": "中国环境人才网",
        "link": "http://www.36ae.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.51hbjob.com&sz=128",
        "title": "环保人才网",
        "desc": "环保人才网",
        "link": "http://www.51hbjob.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.hbzp88.com&sz=128",
        "title": "聚财环保招聘网",
        "desc": "聚财环保招聘网",
        "link": "http://www.hbzp88.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.25hb.com&sz=128",
        "title": "爱我环保学社",
        "desc": "爱我环保学社",
        "link": "http://www.25hb.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=bbs.epday.com&sz=128",
        "title": "环保论坛",
        "desc": "环保论坛",
        "link": "http://bbs.epday.com/forum.php"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ep-home.com&sz=128",
        "title": "环保之家",
        "desc": "环保之家",
        "link": "http://www.ep-home.com/forum.php"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.eiafans.com&sz=128",
        "title": "环评爱好者",
        "desc": "环评爱好者",
        "link": "http://www.eiafans.com/forum-42-1.html"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.epe114.com&sz=128",
        "title": "环保机械产业网",
        "desc": "环保机械产业网",
        "link": "http://www.epe114.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.ejinghua.net&sz=128",
        "title": "净化工程产业网",
        "desc": "净化工程产业网",
        "link": "http://www.ejinghua.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.dsccsb.com&sz=128",
        "title": "中国袋式除尘设备网",
        "desc": "中国袋式除尘设备网",
        "link": "http://www.dsccsb.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=supply.hbzhan.com&sz=128",
        "title": "环保在线",
        "desc": "环保在线",
        "link": "http://supply.hbzhan.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.hb114.cc&sz=128",
        "title": "中国环保设备门户网",
        "desc": "中国环保设备门户网",
        "link": "http://www.hb114.cc/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.12369.com.cn&sz=128",
        "title": "12369环保信息网",
        "desc": "12369环保信息网",
        "link": "http://www.12369.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.shuiol.com&sz=128",
        "title": "水网在线",
        "desc": "水网在线",
        "link": "http://www.shuiol.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.hb114.cc&sz=128",
        "title": "环保114",
        "desc": "环保114",
        "link": "http://www.hb114.cc/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.hbsb360.com&sz=128",
        "title": "环保设备贸易网",
        "desc": "环保设备贸易网",
        "link": "http://www.hbsb360.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.goepe.com&sz=128",
        "title": "环保设备网",
        "desc": "环保设备网",
        "link": "http://www.goepe.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinajnhb.com&sz=128",
        "title": "绿色节能环保网",
        "desc": "绿色节能环保网",
        "link": "http://www.chinajnhb.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.zgjn365.com&sz=128",
        "title": "节能365平台",
        "desc": "节能365平台",
        "link": "http://www.zgjn365.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.hwsbw.com&sz=128",
        "title": "环卫设备产业网",
        "desc": "环卫设备产业网",
        "link": "http://www.hwsbw.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.sclsbw.com&sz=128",
        "title": "水处理设备产业网",
        "desc": "水处理设备产业网",
        "link": "http://www.sclsbw.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cfej.net&sz=128",
        "title": "中国环境新闻网",
        "desc": "中国环境新闻网",
        "link": "http://www.cfej.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.17huanbao.com&sz=128",
        "title": "环保信息网",
        "desc": "环保信息网",
        "link": "http://www.17huanbao.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.c-water.com.cn&sz=128",
        "title": "中国水工业网",
        "desc": "中国水工业网",
        "link": "http://www.c-water.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=ecep.ofweek.com&sz=128",
        "title": "环保网",
        "desc": "环保网",
        "link": "https://ecep.ofweek.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.epwho.com&sz=128",
        "title": "第一环保网",
        "desc": "第一环保网",
        "link": "http://www.epwho.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cn-hw.net&sz=128",
        "title": "中国环卫科技网",
        "desc": "中国环卫科技网",
        "link": "http://www.cn-hw.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.caepi.org.cn&sz=128",
        "title": "中国环境保护产业协会",
        "desc": "中国环境保护产业协会",
        "link": "http://www.caepi.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.eptime.cn&sz=128",
        "title": "环保时代网",
        "desc": "环保时代网",
        "link": "http://www.eptime.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.acef.com.cn&sz=128",
        "title": "中华环保联合会",
        "desc": "中华环保联合会",
        "link": "http://www.acef.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.cepf.org.cn&sz=128",
        "title": "中华环境保护基金会",
        "desc": "中华环境保护基金会",
        "link": "http://www.cepf.org.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.dixiashui.cn&sz=128",
        "title": "地下水环境",
        "desc": "地下水环境",
        "link": "http://www.dixiashui.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.chinajnsb.cn&sz=128",
        "title": "节能减排产业网",
        "desc": "节能减排产业网",
        "link": "http://www.chinajnsb.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=huanbao.bjx.com.cn&sz=128",
        "title": "北极星环保网",
        "desc": "北极星环保网",
        "link": "http://huanbao.bjx.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.goootech.com&sz=128",
        "title": "谷腾环保网",
        "desc": "谷腾环保网",
        "link": "http://www.goootech.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.yzhbw.net&sz=128",
        "title": "燕赵环保网",
        "desc": "燕赵环保网",
        "link": "http://www.yzhbw.net/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=news.sina.com.cn&sz=128",
        "title": "新浪环保",
        "desc": "新浪环保",
        "link": "http://news.sina.com.cn/env/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.solidwaste.com.cn&sz=128",
        "title": "中国固废网",
        "desc": "中国固废网",
        "link": "http://www.solidwaste.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.h2o-china.com&sz=128",
        "title": "中国水网",
        "desc": "中国水网",
        "link": "http://www.h2o-china.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.waterchina.com&sz=128",
        "title": "中国水星",
        "desc": "中国水星",
        "link": "http://www.waterchina.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.clean.hc360.com&sz=128",
        "title": "慧聪清洁网",
        "desc": "慧聪清洁网",
        "link": "http://www.clean.hc360.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=env.people.com.cn&sz=128",
        "title": "人民网环保频道",
        "desc": "人民网环保频道",
        "link": "http://env.people.com.cn/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.hbzhan.com&sz=128",
        "title": "环保在线",
        "desc": "环保在线",
        "link": "http://www.hbzhan.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.gepresearch.com&sz=128",
        "title": "全球环保研究网",
        "desc": "全球环保研究网",
        "link": "http://www.gepresearch.com/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.wec-wec.org&sz=128",
        "title": "世界经济与环境大会",
        "desc": "世界经济与环境大会",
        "link": "http://www.wec-wec.org/"
      },
      {
        "icon": "https://www.google.com/s2/favicons?domain=www.caepi.org.cn&sz=128",
        "title": "中国环境保护产业协会",
        "desc": "中国环境保护产业协会",
        "link": "http://www.caepi.org.cn/"
      }
    ]
  }
]
