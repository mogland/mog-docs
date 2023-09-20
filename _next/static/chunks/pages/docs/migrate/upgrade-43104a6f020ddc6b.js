(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8856],{9374:function(n,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/migrate/upgrade",function(){return s(7818)}])},7818:function(n,e,s){"use strict";s.r(e),s.d(e,{__toc:function(){return a}});var o=s(1527),r=s(69),l=s(8801),i=s(5122);let a=[{depth:2,value:"从 Mog v2.internal.alpha 升级到 Mog v2.internal.beta.0",id:"从-mog-v2internalalpha-升级到-mog-v2internalbeta0"},{depth:2,value:"从 Mog v1 升级到 Mog v2",id:"从-mog-v1-升级到-mog-v2"},{depth:2,value:"从 Mog v0 升级到 Mog v1",id:"从-mog-v0-升级到-mog-v1"}];function t(n){let e=Object.assign({h1:"h1",h2:"h2",p:"p",ol:"ol",li:"li",code:"code",ul:"ul",pre:"pre",span:"span"},(0,l.a)(),n.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{children:"升级版本"}),"\n",(0,o.jsx)(e.h2,{id:"从-mog-v2internalalpha-升级到-mog-v2internalbeta0",children:"从 Mog v2.internal.alpha 升级到 Mog v2.internal.beta.0"}),"\n",(0,o.jsx)(e.p,{children:"v2.internal.beta 对服务进行了补充以及重要的破坏性修改。主要针对的是配置文件配置项的改动："}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["x-service 将不再支持 ",(0,o.jsx)(e.code,{children:"port"}),", ",(0,o.jsx)(e.code,{children:"host"})," 配置项，全部服务将使用 redis 作为事件总线，默认情况下，只需要删除对应的配置项即可，若无配置可无视此项"]}),"\n",(0,o.jsx)(e.li,{children:"Core 内置基本模块在现有阶段暂时全部移除，在后续可能会继续引入，这取决于社区基本模块的需求量"}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"从-mog-v1-升级到-mog-v2",children:"从 Mog v1 升级到 Mog v2"}),"\n",(0,o.jsx)(e.p,{children:"v1 至 v2 的技术栈改动不大，但是很重要，大部分沿用的是 v1 的技术栈，但是 v2 对数据模型和程序结构有一些重大的改动，其中有部分是修复了 v1 的一些设计缺陷导致的严重问题。"}),"\n",(0,o.jsx)(e.p,{children:"你可以通过以下方式升级到 v2："}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"前往 Console，前往「导入与备份」页面，点击「导出 MnogoDB 数据」，下载数据备份文件，再点击「导出 Markdown 数据」，下载 Markdown 数据备份文件"}),"\n",(0,o.jsxs)(e.li,{children:["前往命令行，使用 MongoDB 的 ",(0,o.jsx)(e.code,{children:"mongodump"})," 命令导出数据备份文件"]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,o.jsxs)(e.code,{"data-language":"bash","data-theme":"default",children:[(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 假设 MongoDB 的数据存储在 /data/db 目录下"})}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"mongodump"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--db"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"mog"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--out"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"/data/db/mog"})]})]})}),"\n",(0,o.jsxs)(i.UW,{type:"warning",children:[(0,o.jsx)(e.p,{children:"导出的数据备份文件需要保证在导入之前不要被修改，否则可能会导致数据丢失"}),(0,o.jsxs)(e.p,{children:["直接使用 ",(0,o.jsx)(e.code,{children:"mongodump"})," 导出的数据备份文件可能在 v2 导入时会无法使用，需要使用 ",(0,o.jsx)(e.code,{children:"mongorestore"})," 命令进行转换，或只使用 Markdown 数据备份文件进行导入"]}),(0,o.jsx)(e.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,o.jsx)(e.code,{"data-language":"bash","data-theme":"default",children:(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"mongorestore"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--db"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"mog"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--dir"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"/data/db/mog"})]})})})]}),"\n",(0,o.jsx)(e.h2,{id:"从-mog-v0-升级到-mog-v1",children:"从 Mog v0 升级到 Mog v1"}),"\n",(0,o.jsx)(e.p,{children:"问题是这样的，v0 我们使用的是 MySQL 作为数据库，而 v1 我们使用的是 MongoDB，其中使用了很多 MongoDB 的特性，因此无法直接升级。"}),"\n",(0,o.jsx)(e.p,{children:"目前只有一个可行的方案："}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"将 v0 的文章页面数据导出，然后导入到 v1 中，v0 和 v1 在处理文章页面数据的方式是一致的，因此可以直接导入。"}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"由于 v0 是 Beta 版本，充满了不确定性，因此我们无法保证导出的数据能够完全正确导入到 v1 中，因此我们建议你在导入之前先备份好 v1 的数据库。"})]})}e.default=(0,r.j)({MDXContent:function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,l.a)(),n.components);return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(t,{...n})}):t(n)},pageOpts:{filePath:"pages/docs/migrate/upgrade.mdx",route:"/docs/migrate/upgrade",title:"升级版本",headings:a},pageNextRoute:"/docs/migrate/upgrade"})}},function(n){n.O(0,[69,9774,2888,179],function(){return n(n.s=9374)}),_N_E=n.O()}]);