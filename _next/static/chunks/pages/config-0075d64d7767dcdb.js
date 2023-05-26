(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[490],{9560:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/config",function(){return n(7963)}])},7963:function(s,e,n){"use strict";n.r(e);var l=n(1527),i=n(3152),r=n(6736);n(8823);var o=n(518);function c(s){let e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ul:"ul",li:"li",pre:"pre",span:"span",h3:"h3",em:"em",strong:"strong"},(0,r.ah)(),s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{children:"配置索引"}),"\n",(0,l.jsx)(e.h2,{id:"配置",children:"配置"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"Mog Core"})," 将可以从以下两个地方获取配置信息以匹配你的不同需求并设置为你的 Mog 运行时环境。"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["获取 YAML 的配置文件，优先级最高，默认读取当前目录下的 ",(0,l.jsx)(e.code,{children:"env.yaml"})," 文件。"]}),"\n",(0,l.jsx)(e.li,{children:"命令行参数，优先级次之，有局限性，不建议使用"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"选项",children:"选项"}),"\n",(0,l.jsxs)(e.p,{children:["当你使用传递命令行参数时，参数传递格式为 ",(0,l.jsx)(e.code,{children:"--<key>=<value>"}),"，例如 ",(0,l.jsx)(e.code,{children:"--db_port=8123"}),"："]}),"\n",(0,l.jsx)(e.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,l.jsx)(e.code,{"data-language":"bash","data-theme":"default",children:(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"$"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"node"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"index.js"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--db_port=8123"})]})})}),"\n",(0,l.jsx)(e.p,{children:"当你使用 YAML 配置文件时，配置文件格式为："}),"\n",(0,l.jsx)(e.pre,{"data-language":"yaml","data-theme":"default",hasCopyCode:!0,children:(0,l.jsxs)(e.code,{"data-language":"yaml","data-theme":"default",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<service_name>"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<key>"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"<value>"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<key>"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"<value>"})]})]})}),"\n",(0,l.jsx)(e.h3,{id:"service_namekey",children:(0,l.jsx)(e.code,{children:"<service_name>.<key>"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["类型：",(0,l.jsx)(e.code,{children:"unknown"})]}),"\n",(0,l.jsxs)(e.li,{children:["默认值：",(0,l.jsx)(e.code,{children:"undefined"})]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"<service_name>"})," 为 ",(0,l.jsx)(e.code,{children:"Mog Core"})," 的服务名称，",(0,l.jsx)(e.code,{children:"<key>"})," 为服务的配置项。"]}),"\n",(0,l.jsx)(e.h3,{id:"key",children:(0,l.jsx)(e.code,{children:"<key>"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["类型：",(0,l.jsx)(e.code,{children:"unknown"})]}),"\n",(0,l.jsxs)(e.li,{children:["默认值：",(0,l.jsx)(e.code,{children:"undefined"})]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"<key>"})," 为 ",(0,l.jsx)(e.code,{children:"Mog Core"})," 的配置项。你可以通过后接 ",(0,l.jsx)(e.code,{children:"--help / -h"})," 来查看有关配置项。"]}),"\n",(0,l.jsx)(e.h3,{id:"config",children:"config"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["类型：",(0,l.jsx)(e.code,{children:"string"})]}),"\n",(0,l.jsxs)(e.li,{children:["默认值：",(0,l.jsx)(e.code,{children:"<cwd>/env.yaml"})]}),"\n",(0,l.jsxs)(e.li,{children:["别名： ",(0,l.jsx)(e.code,{children:"c"})]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"配置文件路径。"}),"\n",(0,l.jsx)(e.h3,{id:"collection_name",children:"collection_name"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["类型：",(0,l.jsx)(e.code,{children:"string"})]}),"\n",(0,l.jsxs)(e.li,{children:["默认值：",(0,l.jsx)(e.code,{children:"mog"})]}),"\n",(0,l.jsxs)(e.li,{children:["别名： ",(0,l.jsx)(e.code,{children:"N"})]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"数据库集合名称。"}),"\n",(0,l.jsx)(e.h3,{id:"db_host",children:"db_host"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["类型：",(0,l.jsx)(e.code,{children:"string"})]}),"\n",(0,l.jsxs)(e.li,{children:["默认值：",(0,l.jsx)(e.code,{children:"localhost"})]}),"\n",(0,l.jsxs)(e.li,{children:["别名： ",(0,l.jsx)(e.code,{children:"H"})]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"数据库地址。"}),"\n",(0,l.jsx)(e.h3,{id:"db_port",children:"db_port"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["类型：",(0,l.jsx)(e.code,{children:"number"})]}),"\n",(0,l.jsxs)(e.li,{children:["默认值：",(0,l.jsx)(e.code,{children:"27017"})]}),"\n",(0,l.jsxs)(e.li,{children:["别名： ",(0,l.jsx)(e.code,{children:"P"})]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"数据库端口。"}),"\n",(0,l.jsx)(e.h3,{id:"db_user",children:"db_user"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["类型：",(0,l.jsx)(e.code,{children:"string | undefined"})]}),"\n",(0,l.jsxs)(e.li,{children:["默认值：",(0,l.jsx)(e.code,{children:"undefined"})]}),"\n",(0,l.jsxs)(e.li,{children:["别名： ",(0,l.jsx)(e.code,{children:"U"})]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"数据库用户名。"}),"\n",(0,l.jsx)(e.h3,{id:"db_password",children:"db_password"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["类型：",(0,l.jsx)(e.code,{children:"string | undefined"})]}),"\n",(0,l.jsxs)(e.li,{children:["默认值：",(0,l.jsx)(e.code,{children:"undefined"})]}),"\n",(0,l.jsxs)(e.li,{children:["别名： ",(0,l.jsx)(e.code,{children:"W"})]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"数据库密码。"}),"\n",(0,l.jsx)(e.h3,{id:"redis_host",children:"redis_host"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["类型：",(0,l.jsx)(e.code,{children:"string"})]}),"\n",(0,l.jsxs)(e.li,{children:["默认值：",(0,l.jsx)(e.code,{children:"localhost"})]}),"\n",(0,l.jsxs)(e.li,{children:["别名： ",(0,l.jsx)(e.code,{children:"RH"})]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"Redis 地址。"}),"\n",(0,l.jsx)(e.h3,{id:"redis_port",children:"redis_port"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["类型：",(0,l.jsx)(e.code,{children:"number"})]}),"\n",(0,l.jsxs)(e.li,{children:["默认值：",(0,l.jsx)(e.code,{children:"6379"})]}),"\n",(0,l.jsxs)(e.li,{children:["别名： ",(0,l.jsx)(e.code,{children:"RP"})]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"Redis 端口。"}),"\n",(0,l.jsx)(e.h3,{id:"redis_password",children:"redis_password"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["类型：",(0,l.jsx)(e.code,{children:"string | undefined"})]}),"\n",(0,l.jsxs)(e.li,{children:["默认值：",(0,l.jsx)(e.code,{children:"undefined"})]}),"\n",(0,l.jsxs)(e.li,{children:["别名： ",(0,l.jsx)(e.code,{children:"RW"})]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"Redis 密码。"}),"\n",(0,l.jsx)(e.h3,{id:"redis_user",children:"redis_user"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["类型：",(0,l.jsx)(e.code,{children:"string | undefined"})]}),"\n",(0,l.jsxs)(e.li,{children:["默认值：",(0,l.jsx)(e.code,{children:"undefined"})]}),"\n",(0,l.jsxs)(e.li,{children:["别名： ",(0,l.jsx)(e.code,{children:"RU"})]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"Redis 用户名。"}),"\n",(0,l.jsx)(e.h3,{id:"jwt_secret",children:"jwt_secret"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["类型：",(0,l.jsx)(e.code,{children:"string"})]}),"\n",(0,l.jsxs)(e.li,{children:["默认值： ",(0,l.jsx)(e.code,{children:"无可奉告"})]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"JWT 密钥。"}),"\n",(0,l.jsx)(e.h3,{id:"jwt_expire",children:"jwt_expire"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["类型：",(0,l.jsx)(e.code,{children:"number"})]}),"\n",(0,l.jsxs)(e.li,{children:["默认值：",(0,l.jsx)(e.code,{children:"7d"})]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"JWT 过期时间（天）。"}),"\n",(0,l.jsx)(e.h3,{id:"consoleenable",children:"console.enable"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["类型：",(0,l.jsx)(e.code,{children:"boolean"})]}),"\n",(0,l.jsxs)(e.li,{children:["默认值：",(0,l.jsx)(e.code,{children:"false"})]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"是否启用内置控制台。"}),"\n",(0,l.jsx)(e.h3,{id:"consoleversiontype",children:"console.versionType"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["类型：",(0,l.jsx)(e.code,{children:"string"})]}),"\n",(0,l.jsx)(e.li,{children:"默认值：无默认"}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["版本类型，若需要使用非正式版本，则填入 ",(0,l.jsx)(e.code,{children:"pre-release"}),"，若需要正式版本，则任意填入一个字符串 或 不填写。"]}),"\n",(0,l.jsx)(e.h3,{id:"consolesource",children:"console.source"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["类型：",(0,l.jsx)(e.code,{children:"string"})]}),"\n",(0,l.jsxs)(e.li,{children:["默认值：",(0,l.jsx)(e.code,{children:"gh"})]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["获取方式，可选择 ",(0,l.jsx)(e.code,{children:"gh"})," 或 ",(0,l.jsx)(e.code,{children:"npm"}),"。gh 即 GitHub Release，npm 即 npmjs.com。"]}),"\n",(0,l.jsxs)(e.p,{children:["事实上，并不建议使用 npm 方式，这似乎会导致 ",(0,l.jsx)(e.em,{children:"rate limit"})]}),"\n",(0,l.jsx)(e.h3,{id:"consoleproxygh",children:"console.proxy.gh"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["类型：",(0,l.jsx)(e.code,{children:"string | undefined"})]}),"\n",(0,l.jsxs)(e.li,{children:["默认值：",(0,l.jsx)(e.code,{children:"无"})]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"GitHub Release 的代理地址。"}),"\n",(0,l.jsx)(o.UW,{type:"info",children:(0,l.jsxs)(e.p,{children:["我们没有提供支持 npm 是因为我们从 npm 获取文件使用的是官方的一个接口 ",(0,l.jsx)(e.code,{children:"https://www.npmjs.com/package/${name}/file/${fileId}"})," ，而此接口似乎无镜像"]})}),"\n",(0,l.jsx)(e.h3,{id:"corelisten_ip",children:"core.listen_ip"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["类型：",(0,l.jsx)(e.code,{children:"string"})]}),"\n",(0,l.jsxs)(e.li,{children:["默认值：",(0,l.jsx)(e.code,{children:"0.0.0.0"})]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"Mog Core 监听 IP"}),"\n",(0,l.jsx)(e.h3,{id:"coreport",children:"core.port"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["类型：",(0,l.jsx)(e.code,{children:"number"})]}),"\n",(0,l.jsxs)(e.li,{children:["默认值：",(0,l.jsx)(e.code,{children:"2330"})]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"Mog Core 网关层启动的端口号"}),"\n",(0,l.jsx)(e.h3,{id:"coreallow_origins",children:"core.allow_origins"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["类型：",(0,l.jsx)(e.code,{children:"string[]"})]}),"\n",(0,l.jsxs)(e.li,{children:["默认值：",(0,l.jsx)(e.code,{children:"['localhost:9528', 'localhost:2323', 'localhost:2222', '127.0.0.1', 'localhost:3000']"})]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["允许跨域的域名列表， ",(0,l.jsxs)(e.strong,{children:["不可以为 ",(0,l.jsx)(e.code,{children:"*"})]}),"，使用 ",(0,l.jsx)(e.code,{children:","})," 进行分隔"]}),"\n",(0,l.jsx)(e.h2,{id:"配置举例",children:"配置举例"}),"\n",(0,l.jsx)(e.h3,{id:"传递命令行参数",children:"传递命令行参数"}),"\n",(0,l.jsx)(e.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,l.jsx)(e.code,{"data-language":"bash","data-theme":"default",children:(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"$"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"node"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"index.js"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--core_port=8080"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--core_allow_origins=localhost:9528,localhost:2323,localhost:2222"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--user_service_host=http://localhost:2331"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--user_service_port=2331"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--page_service_host=http://localhost:2332"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--page_service_port=2332"})]})})}),"\n",(0,l.jsxs)(e.p,{children:["上述命令将会启动 ",(0,l.jsx)(e.code,{children:"Mog Core"})," 网关层，端口号为 ",(0,l.jsx)(e.code,{children:"8080"}),"，允许跨域的域名列表为 ",(0,l.jsx)(e.code,{children:"['localhost:9528', 'localhost:2323', 'localhost:2222']"}),"，用户服务部署的主机地址为 ",(0,l.jsx)(e.code,{children:"http://localhost:2331"}),"，用户服务部署的端口号为 ",(0,l.jsx)(e.code,{children:"2331"}),"，页面服务部署的主机地址为 ",(0,l.jsx)(e.code,{children:"http://localhost:2332"}),"，页面服务部署的端口号为 ",(0,l.jsx)(e.code,{children:"2332"})]}),"\n",(0,l.jsx)(e.h3,{id:"yaml-配置文件",children:"YAML 配置文件"}),"\n",(0,l.jsx)(e.pre,{"data-language":"yaml","data-theme":"default",hasCopyCode:!0,children:(0,l.jsxs)(e.code,{"data-language":"yaml","data-theme":"default",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"core"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"port"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"8080"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"allow_origins"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'localhost:9528'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'localhost:2323'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'localhost:2222'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  ]"})})]})}),"\n",(0,l.jsx)(e.h3,{id:"其他",children:"其他"}),"\n",(0,l.jsx)(e.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,l.jsxs)(e.code,{"data-language":"bash","data-theme":"default",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"$"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"node"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"index.js"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--help"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Usage:"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"main"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" [options]                                                                                 "})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Options:"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"-c,"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--config"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"pat"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"h"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"config"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"file"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"path"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"配置文件路径"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"-N,"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--collection_name"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"nam"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"e"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"       "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"collection"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"name"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"数据库集合名"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"-H,"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--db_host"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"hos"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"t"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"               "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"host"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"of"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"database"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"数据库地址"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"-U,"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--db_user"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"use"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"r"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"               "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"user"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"of"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"database"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"数据库用户名"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"-P,"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--db_password"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"passwor"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"d"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"       "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"password"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"of"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"database"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"数据库密码"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"#..."})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"$"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"node"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"index.js"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# config.yaml 默认获取执行目录下的 env.yaml"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"$"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"node"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"index.js"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--config=/Users/wibus/Desktop/env.yaml"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 当然也可以自定义"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# config.yaml 是必须要存在的，这里面储存的是不同服务的环境变量"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 通过命令行参数输入的都是全局变量，都是通用的。"})})]})})]})}e.default=(0,i.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,r.ah)(),s.components);return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(c,{...s})}):c(s)},pageOpts:{filePath:"pages/config.mdx",route:"/config",headings:[{depth:1,value:"配置索引",id:"配置索引"},{depth:2,value:"配置",id:"配置"},{depth:2,value:"选项",id:"选项"},{depth:3,value:"<service_name>.<key>",id:"service_namekey"},{depth:3,value:"<key>",id:"key"},{depth:3,value:"config",id:"config"},{depth:3,value:"collection_name",id:"collection_name"},{depth:3,value:"db_host",id:"db_host"},{depth:3,value:"db_port",id:"db_port"},{depth:3,value:"db_user",id:"db_user"},{depth:3,value:"db_password",id:"db_password"},{depth:3,value:"redis_host",id:"redis_host"},{depth:3,value:"redis_port",id:"redis_port"},{depth:3,value:"redis_password",id:"redis_password"},{depth:3,value:"redis_user",id:"redis_user"},{depth:3,value:"jwt_secret",id:"jwt_secret"},{depth:3,value:"jwt_expire",id:"jwt_expire"},{depth:3,value:"console.enable",id:"consoleenable"},{depth:3,value:"console.versionType",id:"consoleversiontype"},{depth:3,value:"console.source",id:"consolesource"},{depth:3,value:"console.proxy.gh",id:"consoleproxygh"},{depth:3,value:"core.listen_ip",id:"corelisten_ip"},{depth:3,value:"core.port",id:"coreport"},{depth:3,value:"core.allow_origins",id:"coreallow_origins"},{depth:2,value:"配置举例",id:"配置举例"},{depth:3,value:"传递命令行参数",id:"传递命令行参数"},{depth:3,value:"YAML 配置文件",id:"yaml-配置文件"},{depth:3,value:"其他",id:"其他"}],title:"配置索引"},pageNextRoute:"/config"})}},function(s){s.O(0,[152,774,888,179],function(){return s(s.s=9560)}),_N_E=s.O()}]);