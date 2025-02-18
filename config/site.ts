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
    "title": "实用外贸工具*实用外贸查询",
    "items": [
      {
        "icon": "https://logo.clearbit.com/hd.chinatax.gov.cn",
        "title": "出口退说查询1",
        "desc": "出口退说查询1",
        "link": "http://hd.chinatax.gov.cn/fagui/action/InitChukou.do"
      },
      {
        "icon": "https://logo.clearbit.com/www.tax.sh.gov.cn",
        "title": "出口退说查询2",
        "desc": "出口退说查询2",
        "link": "https://www.tax.sh.gov.cn/newxbwt/wzcx/TYCX_tuiShuiCodeSearch.jsp?SUB=111"
      },
      {
        "icon": "https://logo.clearbit.com/cli.im",
        "title": "二维码制作",
        "desc": "二维码制作",
        "link": "https://cli.im/"
      },
      {
        "icon": "https://logo.clearbit.com/www.makepic.com",
        "title": "制作条形码",
        "desc": "制作条形码",
        "link": "http://www.makepic.com/barcode.php"
      },
      {
        "icon": "https://logo.clearbit.com/neverbounce.com",
        "title": "批量验证邮箱1",
        "desc": "批量验证邮箱1",
        "link": "https://neverbounce.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.email-unlimited.com",
        "title": "批量验证邮箱2",
        "desc": "批量验证邮箱2",
        "link": "https://www.email-unlimited.com/email_verifier.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.mailtester.com",
        "title": "邮箱地址真假验证1",
        "desc": "邮箱地址真假验证1",
        "link": "http://www.mailtester.com/"
      },
      {
        "icon": "https://logo.clearbit.com/verify-email.org",
        "title": "邮箱地址真假验证2",
        "desc": "邮箱地址真假验证2",
        "link": "http://verify-email.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.wasmyemailread.com",
        "title": "邮件阅读追踪1",
        "desc": "邮件阅读追踪1",
        "link": "http://www.wasmyemailread.com/"
      },
      {
        "icon": "https://logo.clearbit.com/whoreadme.com",
        "title": "邮件阅读追踪2",
        "desc": "邮件阅读追踪2",
        "link": "http://whoreadme.com/"
      },
      {
        "icon": "https://logo.clearbit.com/getemail.io",
        "title": "get email谷歌插件",
        "desc": "get email谷歌插件",
        "link": "https://getemail.io/login"
      }
    ]
  },
  {
    "title": "外语翻译工具",
    "items": [
      {
        "icon": "https://logo.clearbit.com/www.dreye.com.cn",
        "title": "中英文字典1",
        "desc": "中英文字典1",
        "link": "http://www.dreye.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/dict.cn",
        "title": "中英文字典2",
        "desc": "中英文字典2",
        "link": "http://dict.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.google.com.hk",
        "title": "Google在线翻译",
        "desc": "Google在线翻译",
        "link": "http://www.google.com.hk/language_tools?hl=zh-CN"
      },
      {
        "icon": "https://logo.clearbit.com/fanyi.youdao.com",
        "title": "有道在线翻译",
        "desc": "有道在线翻译",
        "link": "http://fanyi.youdao.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.worldlingo.com",
        "title": "多国语言互译",
        "desc": "多国语言互译",
        "link": "http://www.worldlingo.com/wl/translate"
      },
      {
        "icon": "https://logo.clearbit.com/www.grammarly.com",
        "title": "单词语法纠正",
        "desc": "单词语法纠正",
        "link": "https://www.grammarly.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.duolingo.cn",
        "title": "小语种学习",
        "desc": "小语种学习",
        "link": "http://www.duolingo.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.worldlingo.com",
        "title": "多国语言互译",
        "desc": "多国语言互译",
        "link": "http://www.worldlingo.com/wl/translate"
      },
      {
        "icon": "https://logo.clearbit.com/fanyi.baidu.com",
        "title": "百度在线翻译",
        "desc": "百度在线翻译",
        "link": "https://fanyi.baidu.com/"
      },
      {
        "icon": "https://logo.clearbit.com/nicetranslator.com",
        "title": "小语种翻译1",
        "desc": "小语种翻译1",
        "link": "https://nicetranslator.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.linguee.com",
        "title": "小语种翻译2",
        "desc": "小语种翻译2",
        "link": "https://www.linguee.com/"
      },
      {
        "icon": "https://logo.clearbit.com/text-to-speech.imtranslator.net",
        "title": "小语种翻译3",
        "desc": "小语种翻译3",
        "link": "http://text-to-speech.imtranslator.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.acronymfinder.com",
        "title": "英文缩写查",
        "desc": "英文缩写查",
        "link": "http://www.acronymfinder.com/"
      },
      {
        "icon": "https://logo.clearbit.com/shortof.com",
        "title": "英文缩写大全",
        "desc": "英文缩写大全",
        "link": "http://shortof.com/"
      }
    ]
  },
  {
    "title": "外汇全球进出口查询",
    "items": [
      {
        "icon": "https://logo.clearbit.com/themoneyconverter.com",
        "title": "汇率转换工具",
        "desc": "汇率转换工具",
        "link": "http://themoneyconverter.com/CN/USD/GBP.aspx"
      },
      {
        "icon": "https://logo.clearbit.com/www.xe.com",
        "title": "全球汇率换算器",
        "desc": "全球汇率换算器",
        "link": "http://www.xe.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.boc.cn",
        "title": "每日外汇牌价",
        "desc": "每日外汇牌价",
        "link": "http://www.boc.cn/cn/common/whpj.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.oil-price.net",
        "title": "世界原油价格",
        "desc": "世界原油价格",
        "link": "http://www.oil-price.net/index.php?lang=zh"
      },
      {
        "icon": "https://logo.clearbit.com/gold.hexun.com",
        "title": "世界黄金价格",
        "desc": "世界黄金价格",
        "link": "http://gold.hexun.com/hjxh/"
      },
      {
        "icon": "https://logo.clearbit.com/trademap.org",
        "title": "世界贸易数据库",
        "desc": "世界贸易数据库",
        "link": "https://trademap.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.statista.com",
        "title": "行业数据统计",
        "desc": "行业数据统计",
        "link": "https://www.statista.com/"
      }
    ]
  },
  {
    "title": "客户背景调查",
    "items": [
      {
        "icon": "https://logo.clearbit.com/whois.chinaz.com",
        "title": "域名whois",
        "desc": "域名whois",
        "link": "http://whois.chinaz.com/"
      },
      {
        "icon": "https://logo.clearbit.com/archive.org",
        "title": "archive时光机",
        "desc": "archive时光机",
        "link": "https://archive.org/web/"
      },
      {
        "icon": "https://logo.clearbit.com/www.bigspy.com",
        "title": "社媒广告工具BigSpy",
        "desc": "社媒广告工具BigSpy",
        "link": "https://www.bigspy.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.google.com",
        "title": "谷歌地图街景",
        "desc": "谷歌地图街景",
        "link": "https://www.google.com/maps"
      },
      {
        "icon": "https://logo.clearbit.com/gsxt.saic.gov.cn",
        "title": "中国企业信用公示系统",
        "desc": "中国企业信用公示系统",
        "link": "http://gsxt.saic.gov.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.acra.gov.sg",
        "title": "新加坡公司查询",
        "desc": "新加坡公司查询",
        "link": "https://www.acra.gov.sg/home/"
      },
      {
        "icon": "https://logo.clearbit.com/abr.business.gov.au",
        "title": "澳大利亚公司查询",
        "desc": "澳大利亚公司查询",
        "link": "http://abr.business.gov.au/"
      },
      {
        "icon": "https://logo.clearbit.com/coys.co.nz",
        "title": "新西兰公司查询",
        "desc": "新西兰公司查询",
        "link": "http://coys.co.nz/"
      },
      {
        "icon": "https://logo.clearbit.com/sanctionssearch.ofac.treas.gov",
        "title": "美国OFAC制裁名单查询",
        "desc": "美国OFAC制裁名单查询",
        "link": "https://sanctionssearch.ofac.treas.gov/"
      },
      {
        "icon": "https://logo.clearbit.com/www.companiesnz.com",
        "title": "澳洲\\北美\\南美公司查询",
        "desc": "澳洲\\北美\\南美公司查询",
        "link": "http://www.companiesnz.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.endole.co.uk",
        "title": "英国公司注册信息查询",
        "desc": "英国公司注册信息查询",
        "link": "https://www.endole.co.uk/"
      },
      {
        "icon": "https://logo.clearbit.com/www.corporationwiki.com",
        "title": "美国公司组织结构图查询",
        "desc": "美国公司组织结构图查询",
        "link": "https://www.corporationwiki.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.similarsites.com",
        "title": "竞争对手网址查询",
        "desc": "竞争对手网址查询",
        "link": "https://www.similarsites.com/"
      }
    ]
  },
  {
    "title": "全球品牌查询",
    "items": [
      {
        "icon": "https://logo.clearbit.com/wcjs.sbj.cnipa.gov.cn",
        "title": "中国商标信息查询",
        "desc": "中国商标信息查询",
        "link": "http://wcjs.sbj.cnipa.gov.cn/txnT01.do"
      },
      {
        "icon": "https://logo.clearbit.com/www.drugfuture.com",
        "title": "中国专利数据下载",
        "desc": "中国专利数据下载",
        "link": "https://www.drugfuture.com/cnpat/cn_patent.asp"
      },
      {
        "icon": "https://logo.clearbit.com/202.127.48.148",
        "title": "中国海关知识产权",
        "desc": "中国海关知识产权",
        "link": "http://202.127.48.148/zscq/search/jsp/vBrandSearchIndex.jsp"
      },
      {
        "icon": "https://logo.clearbit.com/esearch.ipd.gov.hk",
        "title": "香港知识产权",
        "desc": "香港知识产权",
        "link": "https://esearch.ipd.gov.hk/nis-pos-view/"
      },
      {
        "icon": "https://logo.clearbit.com/www.wipo.int",
        "title": "WIPO全球品牌数据库",
        "desc": "WIPO全球品牌数据库",
        "link": "https://www.wipo.int/branddb/en/"
      },
      {
        "icon": "https://logo.clearbit.com/tmsearch.uspto.gov",
        "title": "美国USPTO商标查询",
        "desc": "美国USPTO商标查询",
        "link": "http://tmsearch.uspto.gov/"
      },
      {
        "icon": "https://logo.clearbit.com/www.uspto.gov",
        "title": "美国专利局",
        "desc": "美国专利局",
        "link": "https://www.uspto.gov/patents-application-process/search-patents"
      },
      {
        "icon": "https://logo.clearbit.com/patentscope2.wipo.int",
        "title": "WIPO",
        "desc": "WIPO",
        "link": "https://patentscope2.wipo.int/search/en/search.jsf"
      },
      {
        "icon": "https://logo.clearbit.com/euipo.europa.eu",
        "title": "欧洲OHIM商标查询",
        "desc": "欧洲OHIM商标查询",
        "link": "https://euipo.europa.eu/eSearch/"
      },
      {
        "icon": "https://logo.clearbit.com/www.tmdn.org",
        "title": "欧盟商标查询",
        "desc": "欧盟商标查询",
        "link": "https://www.tmdn.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.epo.org",
        "title": "欧洲专利局",
        "desc": "欧洲专利局",
        "link": "https://www.epo.org/searching-for-patents.html"
      },
      {
        "icon": "https://logo.clearbit.com/worldwide.espacenet.com",
        "title": "欧洲专利局数据库",
        "desc": "欧洲专利局数据库",
        "link": "https://worldwide.espacenet.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www3.wipo.int",
        "title": "外观侵权专利查询",
        "desc": "外观侵权专利查询",
        "link": "https://www3.wipo.int/designdb/en/index.jsp"
      }
    ]
  },
  {
    "title": "HS编码查询",
    "items": [
      {
        "icon": "https://logo.clearbit.com/hs.bianmachaxun.com",
        "title": "新通关网查",
        "desc": "新通关网查",
        "link": "http://hs.bianmachaxun.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.hsbianma.com",
        "title": "进出口商品HS",
        "desc": "进出口商品HS",
        "link": "https://www.hsbianma.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.likecha.com",
        "title": "立刻查HS",
        "desc": "立刻查HS",
        "link": "http://www.likecha.com/"
      },
      {
        "icon": "https://logo.clearbit.com/hs.e-to-china.com.cn",
        "title": "归类通HS",
        "desc": "归类通HS",
        "link": "https://hs.e-to-china.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.qgtong.com",
        "title": "全关海关HS码",
        "desc": "全关海关HS码",
        "link": "http://www.qgtong.com/HScode/"
      },
      {
        "icon": "https://logo.clearbit.com/www.quanruntong.com",
        "title": "全润通查询",
        "desc": "全润通查询",
        "link": "http://www.quanruntong.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.transcustoms.cn",
        "title": "商品hs编码",
        "desc": "商品hs编码",
        "link": "http://www.transcustoms.cn/HScode/"
      }
    ]
  },
  {
    "title": "全球进出口查询",
    "items": [
      {
        "icon": "https://logo.clearbit.com/www.indexmundi.com",
        "title": "全球进出口查询",
        "desc": "全球进出口查询",
        "link": "https://www.indexmundi.com/trade/imports/"
      },
      {
        "icon": "https://logo.clearbit.com/www.haiguan.info",
        "title": "中国进出口统计查询",
        "desc": "中国进出口统计查询",
        "link": "http://www.haiguan.info/OnLineSearch/TradeStat/StatComSub.aspx?TID=1"
      },
      {
        "icon": "https://logo.clearbit.com/www.import.or.kr",
        "title": "韩国进出口商名录",
        "desc": "韩国进出口商名录",
        "link": "http://www.import.or.kr/"
      },
      {
        "icon": "https://logo.clearbit.com/www.globalbuyersonline.com",
        "title": "全球买家在线询盘",
        "desc": "全球买家在线询盘",
        "link": "https://www.globalbuyersonline.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.corporateinformation.com",
        "title": "企业报告",
        "desc": "企业报告",
        "link": "http://www.corporateinformation.com/"
      },
      {
        "icon": "https://logo.clearbit.com/countryreport.mofcom.gov.cn",
        "title": "中国商务部-国别数据",
        "desc": "中国商务部-国别数据",
        "link": "https://countryreport.mofcom.gov.cn/default.asp"
      },
      {
        "icon": "https://logo.clearbit.com/43.248.49.97",
        "title": "中国海关统计数据",
        "desc": "中国海关统计数据",
        "link": "http://43.248.49.97/"
      },
      {
        "icon": "https://logo.clearbit.com/data.worldbank.org.cn",
        "title": "World Bank（世界银行）",
        "desc": "World Bank（世界银行）",
        "link": "https://data.worldbank.org.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.imf.org",
        "title": "IMF（国际货币基金组织）",
        "desc": "IMF（国际货币基金组织）",
        "link": "https://www.imf.org/en/Data"
      },
      {
        "icon": "https://logo.clearbit.com/www.wto.org",
        "title": "WTO（世界贸易组织）",
        "desc": "WTO（世界贸易组织）",
        "link": "https://www.wto.org/index.htm"
      },
      {
        "icon": "https://logo.clearbit.com/data.oecd.org",
        "title": "OECD（经济合作与发展组织）",
        "desc": "OECD（经济合作与发展组织）",
        "link": "https://data.oecd.org/"
      },
      {
        "icon": "https://logo.clearbit.com/comtrade.un.org",
        "title": "联合国商品贸易统计数据库",
        "desc": "联合国商品贸易统计数据库",
        "link": "https://comtrade.un.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ibisworld.com",
        "title": "行业发展报告",
        "desc": "行业发展报告",
        "link": "https://www.ibisworld.com/"
      }
    ]
  },
  {
    "title": "各国关税查询",
    "items": [
      {
        "icon": "https://logo.clearbit.com/wmsw.mofcom.gov.cn",
        "title": "商务部进出口税费",
        "desc": "商务部进出口税费",
        "link": "http://wmsw.mofcom.gov.cn/wmsw/"
      },
      {
        "icon": "https://logo.clearbit.com/hts.usitc.gov",
        "title": "美国国际贸易关税",
        "desc": "美国国际贸易关税",
        "link": "https://hts.usitc.gov/"
      },
      {
        "icon": "https://logo.clearbit.com/ec.europa.eu",
        "title": "欧盟关税数据库(TARIC)",
        "desc": "欧盟关税数据库(TARIC)",
        "link": "https://ec.europa.eu/taxation_customs/dds2/taric/taric_consultation.jsp?Lang=en"
      },
      {
        "icon": "https://logo.clearbit.com/www.russian-customs.org",
        "title": "俄罗斯进口关税",
        "desc": "俄罗斯进口关税",
        "link": "http://www.russian-customs.org/legislation/tariff/index.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.customs.go.jp",
        "title": "日本进口关税",
        "desc": "日本进口关税",
        "link": "http://www.customs.go.jp/english/tariff/2019_4/index.htm"
      },
      {
        "icon": "https://logo.clearbit.com/fta.mofcom.gov.cn",
        "title": "中国自贸协定国家关税",
        "desc": "中国自贸协定国家关税",
        "link": "http://fta.mofcom.gov.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/cacs.mofcom.gov.cn",
        "title": "中国贸易反倾销税率",
        "desc": "中国贸易反倾销税率",
        "link": "http://cacs.mofcom.gov.cn/index.shtml"
      },
      {
        "icon": "https://logo.clearbit.com/findrulesoforigin.org",
        "title": "全球贸易单证要求关税查询",
        "desc": "全球贸易单证要求关税查询",
        "link": "https://findrulesoforigin.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.haiguan.info",
        "title": "关税计算器",
        "desc": "关税计算器",
        "link": "http://www.haiguan.info/OnLineSearch/Tax/Default.aspx"
      },
      {
        "icon": "https://logo.clearbit.com/www.customs.gov.cn",
        "title": "进出口商品税率",
        "desc": "进出口商品税率",
        "link": "http://www.customs.gov.cn/customs/302427/302442/shangpinshuilv/index.html"
      }
    ]
  },
  {
    "title": "全球信息查询",
    "items": [
      {
        "icon": "https://logo.clearbit.com/www.countrycode.org",
        "title": "查询国家信息",
        "desc": "查询国家信息",
        "link": "https://www.countrycode.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.timeanddate.com",
        "title": "世界各国假期查询",
        "desc": "世界各国假期查询",
        "link": "https://www.timeanddate.com/holidays/armenia/"
      },
      {
        "icon": "https://logo.clearbit.com/openweathermap.org",
        "title": "全球天气查",
        "desc": "全球天气查",
        "link": "https://openweathermap.org/city/1795565"
      },
      {
        "icon": "https://logo.clearbit.com/www.mapquest.com",
        "title": "全球地图定位",
        "desc": "全球地图定位",
        "link": "http://www.mapquest.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.nowmsg.com",
        "title": "国外邮编",
        "desc": "国外邮编",
        "link": "https://www.nowmsg.com/"
      },
      {
        "icon": "https://logo.clearbit.com/fair.mofcom.gov.cn",
        "title": "全球展会查",
        "desc": "全球展会查",
        "link": "http://fair.mofcom.gov.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.shijian.cc",
        "title": "全球节日",
        "desc": "全球节日",
        "link": "http://www.shijian.cc/jieri/"
      }
    ]
  },
  {
    "title": "实用关务工具*实用关务查询",
    "items": [
      {
        "icon": "https://logo.clearbit.com/www.haiguan.info",
        "title": "通关业务查",
        "desc": "通关业务查",
        "link": "http://www.haiguan.info/OnLineSearch/Index.aspx"
      },
      {
        "icon": "https://logo.clearbit.com/check.ccpiteco.net",
        "title": "贸促原产地证真伪",
        "desc": "贸促原产地证真伪",
        "link": "http://check.ccpiteco.net/"
      },
      {
        "icon": "https://logo.clearbit.com/origin.customs.gov.cn",
        "title": "海关原产地证真伪",
        "desc": "海关原产地证真伪",
        "link": "http://origin.customs.gov.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/co.ccpit.org",
        "title": "原产地证申报系统",
        "desc": "原产地证申报系统",
        "link": "https://co.ccpit.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinaport.gov.cn",
        "title": "中国电子口岸",
        "desc": "中国电子口岸",
        "link": "http://www.chinaport.gov.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.hpedi.com.cn",
        "title": "报关单号及状态",
        "desc": "报关单号及状态",
        "link": "http://www.hpedi.com.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.haiguan.info",
        "title": "外汇核销单",
        "desc": "外汇核销单",
        "link": "http://www.haiguan.info/OnLineSearch/Index.aspx"
      },
      {
        "icon": "https://logo.clearbit.com/www.customs.gov.cn",
        "title": "海关网上服务",
        "desc": "海关网上服务",
        "link": "http://www.customs.gov.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.sol.com.cn",
        "title": "中国关税查询",
        "desc": "中国关税查询",
        "link": "http://www.sol.com.cn/tool/tariff/"
      },
      {
        "icon": "https://logo.clearbit.com/www.customs.gov.cn",
        "title": "通关状态查",
        "desc": "通关状态查",
        "link": "http://www.customs.gov.cn/customs/302427/302442/tgzt/index.html"
      },
      {
        "icon": "https://logo.clearbit.com/www.track-trace.com",
        "title": "空运提单查",
        "desc": "空运提单查",
        "link": "https://www.track-trace.com/aircargo"
      },
      {
        "icon": "https://logo.clearbit.com/www.track-trace.com",
        "title": "国际国内快递查询",
        "desc": "国际国内快递查询",
        "link": "https://www.track-trace.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.haiguan.info",
        "title": "海关业务查询大全",
        "desc": "海关业务查询大全",
        "link": "http://www.haiguan.info/OnLineSearch/Index.aspx"
      },
      {
        "icon": "https://logo.clearbit.com/www.tax.sh.gov.cn",
        "title": "出口商品代码及退税率查询",
        "desc": "出口商品代码及退税率查询",
        "link": "https://www.tax.sh.gov.cn/newxbwt/wzcx/TYCX_tuiShuiCodeSearch.jsp?SUB=111"
      },
      {
        "icon": "https://logo.clearbit.com/www.chinatax.gov.cn",
        "title": "国家税务总局",
        "desc": "国家税务总局",
        "link": "http://www.chinatax.gov.cn/"
      }
    ]
  },
  {
    "title": "图片处理工具",
    "items": [
      {
        "icon": "https://logo.clearbit.com/www.fotojet.com",
        "title": "自制电子贺卡1",
        "desc": "自制电子贺卡1",
        "link": "https://www.fotojet.com/cn/features/photo-card/"
      },
      {
        "icon": "https://logo.clearbit.com/zh-cn.card.hi-my.com",
        "title": "自制电子贺卡2",
        "desc": "自制电子贺卡2",
        "link": "http://zh-cn.card.hi-my.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.123greetings.com",
        "title": "自制电子贺卡3",
        "desc": "自制电子贺卡3",
        "link": "http://www.123greetings.com/"
      },
      {
        "icon": "https://logo.clearbit.com/pan.baidu.com",
        "title": "节日贺卡图片",
        "desc": "节日贺卡图片",
        "link": "https://pan.baidu.com/s/1TJ7AqxIMyOD5LKfyoHGExw"
      },
      {
        "icon": "https://logo.clearbit.com/pan.baidu.com",
        "title": "2020外贸日历",
        "desc": "2020外贸日历",
        "link": "https://pan.baidu.com/s/1mU5ZHwRQC-2oOuyfJfyhaw"
      },
      {
        "icon": "https://logo.clearbit.com/www.canva.com",
        "title": "Canva（在线平面设计）",
        "desc": "Canva（在线平面设计）",
        "link": "https://www.canva.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chuangkit.com",
        "title": "创客贴（在线图片编辑）",
        "desc": "创客贴（在线图片编辑）",
        "link": "https://www.chuangkit.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.remove.bg",
        "title": "一键抠图",
        "desc": "一键抠图",
        "link": "https://www.remove.bg/"
      },
      {
        "icon": "https://logo.clearbit.com/hatchful.shopify.com",
        "title": "LOGO设计",
        "desc": "LOGO设计",
        "link": "https://hatchful.shopify.com/"
      },
      {
        "icon": "https://logo.clearbit.com/tinypng.com",
        "title": "图片压缩工具",
        "desc": "图片压缩工具",
        "link": "https://tinypng.com/"
      },
      {
        "icon": "https://logo.clearbit.com/mt.meipai.com",
        "title": "美图秀秀",
        "desc": "美图秀秀",
        "link": "https://mt.meipai.com/"
      },
      {
        "icon": "https://logo.clearbit.com/bigjpg.com",
        "title": "图片无限放大",
        "desc": "图片无限放大",
        "link": "https://bigjpg.com/zh"
      },
      {
        "icon": "https://logo.clearbit.com/www.imgbot.ai",
        "title": "在线图片处理",
        "desc": "在线图片处理",
        "link": "https://www.imgbot.ai/"
      },
      {
        "icon": "https://logo.clearbit.com/counterfeit.technology",
        "title": "图片外观侵权查询",
        "desc": "图片外观侵权查询",
        "link": "http://counterfeit.technology/"
      },
      {
        "icon": "https://logo.clearbit.com/www.gaoding.com",
        "title": "抠图",
        "desc": "抠图",
        "link": "https://www.gaoding.com/koutu"
      },
      {
        "icon": "https://logo.clearbit.com/www.remove.bg",
        "title": "消除图片背景",
        "desc": "消除图片背景",
        "link": "https://www.remove.bg/zh"
      },
      {
        "icon": "https://logo.clearbit.com/www.photopea.com",
        "title": "在线PS工具1",
        "desc": "在线PS工具1",
        "link": "https://www.photopea.com/"
      },
      {
        "icon": "https://logo.clearbit.com/ps.gaoding.com",
        "title": "在线PS工具2",
        "desc": "在线PS工具2",
        "link": "https://ps.gaoding.com/#/"
      }
    ]
  },
  {
    "title": "办公黑科技工具",
    "items": [
      {
        "icon": "https://logo.clearbit.com/wetransfer.com",
        "title": "国际网盘",
        "desc": "国际网盘",
        "link": "https://wetransfer.com//"
      },
      {
        "icon": "https://logo.clearbit.com/online.b1.org",
        "title": "在线解压缩",
        "desc": "在线解压缩",
        "link": "http://online.b1.org/online"
      },
      {
        "icon": "https://logo.clearbit.com/www.voidtools.com",
        "title": "文件搜索",
        "desc": "文件搜索",
        "link": "https://www.voidtools.com/"
      },
      {
        "icon": "https://logo.clearbit.com/transfer.pcloud.com",
        "title": "文件传输",
        "desc": "文件传输",
        "link": "https://transfer.pcloud.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.free-pdftoword.com",
        "title": "在线免费转换PDF",
        "desc": "在线免费转换PDF",
        "link": "http://www.free-pdftoword.com/cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.fromtexttospeech.com",
        "title": "文档变语音",
        "desc": "文档变语音",
        "link": "http://www.fromtexttospeech.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.hipdf.com",
        "title": "PDF格式转换1",
        "desc": "PDF格式转换1",
        "link": "https://www.hipdf.com/"
      },
      {
        "icon": "https://logo.clearbit.com/smallpdf.com",
        "title": "PDF格式转换2",
        "desc": "PDF格式转换2",
        "link": "https://smallpdf.com/cn"
      },
      {
        "icon": "https://logo.clearbit.com/tools.pdf24.org",
        "title": "PDF工具",
        "desc": "PDF工具",
        "link": "https://tools.pdf24.org/en/"
      },
      {
        "icon": "https://logo.clearbit.com/convertio.co",
        "title": "文件转换器",
        "desc": "文件转换器",
        "link": "https://convertio.co/zh/"
      },
      {
        "icon": "https://logo.clearbit.com/www.flvcd.com",
        "title": "视频下载",
        "desc": "视频下载",
        "link": "http://www.flvcd.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.any-video-converter.com",
        "title": "视频格式转换",
        "desc": "视频格式转换",
        "link": "http://www.any-video-converter.com/products/for_video_free/"
      },
      {
        "icon": "https://logo.clearbit.com/www.videosmaller.com",
        "title": "视频文件压缩",
        "desc": "视频文件压缩",
        "link": "http://www.videosmaller.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.w3toys.com",
        "title": "下载Instagram视频",
        "desc": "下载Instagram视频",
        "link": "https://www.w3toys.com/"
      },
      {
        "icon": "https://logo.clearbit.com/get.promorepublic.com",
        "title": "FaceBook内容营销模板",
        "desc": "FaceBook内容营销模板",
        "link": "http://get.promorepublic.com/facebook-content/"
      },
      {
        "icon": "https://logo.clearbit.com/www.fbdown.net",
        "title": "下载Facebook视频",
        "desc": "下载Facebook视频",
        "link": "https://www.fbdown.net/"
      },
      {
        "icon": "https://logo.clearbit.com/pickvideo.net",
        "title": "下载Youtube视频",
        "desc": "下载Youtube视频",
        "link": "https://pickvideo.net/youtube-video-downloader"
      },
      {
        "icon": "https://logo.clearbit.com/developers.google.com",
        "title": "Google测速",
        "desc": "Google测速",
        "link": "https://developers.google.com/speed/pagespeed/insights/"
      },
      {
        "icon": "https://logo.clearbit.com/tools.pingdom.com",
        "title": "Pingdom测速",
        "desc": "Pingdom测速",
        "link": "https://tools.pingdom.com/"
      },
      {
        "icon": "https://logo.clearbit.com/gtmetrix.com",
        "title": "GTmetrix测速",
        "desc": "GTmetrix测速",
        "link": "https://gtmetrix.com/"
      },
      {
        "icon": "https://logo.clearbit.com/cp.anyknew.com",
        "title": "拷贝兔",
        "desc": "拷贝兔",
        "link": "https://cp.anyknew.com/"
      },
      {
        "icon": "https://logo.clearbit.com/mubu.com",
        "title": "幕布",
        "desc": "幕布",
        "link": "https://mubu.com/"
      },
      {
        "icon": "https://logo.clearbit.com/cowtransfer.com",
        "title": "奶牛快传",
        "desc": "奶牛快传",
        "link": "https://cowtransfer.com/"
      },
      {
        "icon": "https://logo.clearbit.com/duomu.tv",
        "title": "宣传视频",
        "desc": "宣传视频",
        "link": "https://duomu.tv/"
      }
    ]
  },
  {
    "title": "实用生活工具*实用生活查询",
    "items": [
      {
        "icon": "https://logo.clearbit.com/www.huoche.net",
        "title": "列车时刻查询",
        "desc": "列车时刻查询",
        "link": "http://www.huoche.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.12306.cn",
        "title": "火车时刻表",
        "desc": "火车时刻表",
        "link": "http://www.12306.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.qunar.com",
        "title": "航班查询",
        "desc": "航班查询",
        "link": "http://www.qunar.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.keyunzhan.com",
        "title": "全国长途汽车查询表",
        "desc": "全国长途汽车查询表",
        "link": "http://www.keyunzhan.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chelink.com",
        "title": "全国汽车站刻查表",
        "desc": "全国汽车站刻查表",
        "link": "http://www.chelink.com/topic/changtu.htm"
      },
      {
        "icon": "https://logo.clearbit.com/gerensuodeshui.cn",
        "title": "个人所得税计算器2",
        "desc": "个人所得税计算器2",
        "link": "https://gerensuodeshui.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/www.chsi.com.cn",
        "title": "学历查询",
        "desc": "学历查询",
        "link": "http://www.chsi.com.cn/xlcx/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ip138.com",
        "title": "手机归属地查询",
        "desc": "手机归属地查询",
        "link": "http://www.ip138.com:8080/search.asp"
      },
      {
        "icon": "https://logo.clearbit.com/tool.chinaz.com",
        "title": "IP地址查询",
        "desc": "IP地址查询",
        "link": "http://tool.chinaz.com/"
      },
      {
        "icon": "https://logo.clearbit.com/jbk.39.net",
        "title": "疾病查询",
        "desc": "疾病查询",
        "link": "http://jbk.39.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.haodf.com",
        "title": "医院查询",
        "desc": "医院查询",
        "link": "http://www.haodf.com/yiyuan/beijing/list.htm"
      },
      {
        "icon": "https://logo.clearbit.com/www.name321.com",
        "title": "娱乐算命",
        "desc": "娱乐算命",
        "link": "http://www.name321.com/chest/index.htm"
      },
      {
        "icon": "https://logo.clearbit.com/www.youbian.com",
        "title": "邮编查询",
        "desc": "邮编查询",
        "link": "http://www.youbian.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.tvsou.com",
        "title": "电视节目查询",
        "desc": "电视节目查询",
        "link": "http://www.tvsou.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ip138.com",
        "title": "全国各地车牌查询表",
        "desc": "全国各地车牌查询表",
        "link": "http://www.ip138.com/carlist.htm"
      },
      {
        "icon": "https://logo.clearbit.com/qq.ip138.com",
        "title": "身份证查询",
        "desc": "身份证查询",
        "link": "http://qq.ip138.com/idsearch/"
      }
    ]
  }
]
