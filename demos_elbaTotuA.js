(self["webpackChunkcomp_antd"]=self["webpackChunkcomp_antd"]||[]).push([[377],{61308:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ee}});var a=n(38573),r=(n(36391),n(64687)),o=(n(59320),n(76563)),i=n(99829),c=n(68699),s=n(67294),l=(n(98336),n(84871)),u=s.createContext({getInternalHooks:()=>({})}),d=u,p=n(52663);class h{constructor(e){this.forceRootUpdate=void 0,this.refreshTable=()=>{this.setCondition((0,p.Z)({},this.condition)),this.forceRootUpdate()},this.getAutoTableInstance=()=>({getInternalHooks:this.getInternalHooks,refreshTable:this.refreshTable}),this.getInternalHooks=()=>({unique:this.unique,condition:this.condition,pagination:this.pagination,record:this.record,action:this.action,selectedRows:this.selectedRows,setUnique:this.setUnique,setCondition:this.setCondition,setPagination:this.setPagination,openAction:this.openAction,closeAction:this.closeAction,refreshTable:this.refreshTable,setSelectedRows:this.setSelectedRows}),this.condition={},this.setCondition=e=>{this.condition=(0,p.Z)((0,p.Z)({},this.condition),e),this.forceRootUpdate()},this.unique="",this.record=null,this.action=null,this.selectedRows=[],this.setSelectedRows=(e,t)=>{this.selectedRows=t,console.log(this.selectedRows),this.forceRootUpdate()},this.setUnique=e=>this.unique=e,this.openAction=(e,t)=>{this.record=t,console.log(e),this.action=e,this.forceRootUpdate()},this.closeAction=()=>{this.record=null,this.action=null,this.forceRootUpdate()},this.pagination={},this.setPagination=e=>{this.pagination=(0,p.Z)((0,p.Z)({},this.pagination),e),this.forceRootUpdate()},this.forceRootUpdate=e}}var m=h,f=e=>{var t=s.useRef(),n=s.useState({}),r=(0,a.Z)(n,2),o=r[1];if(!t.current)if(e)t.current=e;else{var i=()=>{o({})},c=new m(i);t.current=c.getAutoTableInstance()}return[t.current]},Z=f,v=n(98330),w=e=>{var t=e.table,n=e.children,r=Z(t),o=(0,a.Z)(r,1),i=o[0];return s.useEffect((()=>{}),[]),s.createElement(d.Provider,{value:i},s.createElement(l.ZP,{locale:v.Z},s.Children.map(n,(e=>e?s.cloneElement(e,{}):null))))};w.displayName="AutoTable";var k=w,g=(n(31808),n(87555)),b=(n(21885),n(45733)),x=(n(70520),n(48429)),y=(n(18624),n(65507)),E=n(3911),S=["conditions","col","initialCondition","onSearch","onReset"],P=e=>{var t=e.conditions,n=e.col,o=void 0===n?6:n,i=e.initialCondition,c=e.onSearch,l=e.onReset,u=((0,E.Z)(e,S),s.useContext(d)),h=r.Z.useForm(),m=(0,a.Z)(h,1),f=m[0],Z=u.getInternalHooks(),v=Z.setCondition;s.useEffect((()=>{console.log("ConditionPanel==============================>useEffect"),i&&(f.setFieldsValue(i),v(i))}),[i]);var w=()=>{v((0,p.Z)((0,p.Z)({},f.getFieldsValue()),{},{current:1})),c&&c()},k=()=>{f.resetFields(),f.setFieldsValue(i),l&&l()};return s.createElement(r.Z,{form:f},s.createElement(g.Z,{gutter:o},t.map((e=>{var t=e.name,n=e.label,a=e.icol,i=void 0===a?o:a,c=e.component;return s.createElement(y.Z,{span:i,key:t},s.createElement(r.Z.Item,{name:t,label:n},c))})),s.createElement(y.Z,{offset:24-(o+t.reduce(((e,t)=>e+(t.icol||o)),0)%24),span:o,style:{textAlign:"right"}},s.createElement(b.Z,null,s.createElement(x.Z,{type:"primary",onClick:w},"\u641c\u7d22"),s.createElement(x.Z,{onClick:k},"\u91cd\u7f6e")))))};P.displayName="ConditionPanel";var C=P,I=(n(63014),n(2812)),R=(n(48032),n(38488)),T=e=>{var t=e.formItems,n=s.useContext(d),o=n.getInternalHooks(),l=o.unique,u=o.record,h=o.action,m=o.closeAction,f=o.refreshTable,Z=o.setCondition,v=r.Z.useForm(),w=(0,a.Z)(v,1),k=w[0];(0,s.useEffect)((()=>{console.log("ModalPanel====================================>useEffect"),"create"===(null===h||void 0===h?void 0:h.action)?k.resetFields():k.setFieldsValue(u)}),[u,h]);var g=e=>{if(!e)return"";if(e.title)return e.title;switch(e.action){case"create":return"\u65b0\u589e";case"retrieve":return"\u67e5\u770b";case"update":return"\u66f4\u65b0"}},y=e=>e?s.createElement(b.Z,{style:{display:"flex",justifyContent:"end"}},"create"===e.action&&s.createElement(x.Z,{type:"primary",onClick:S},"\u65b0\u589e"),"update"===e.action&&s.createElement(x.Z,{type:"primary",onClick:E},"\u66f4\u65b0"),s.createElement(x.Z,{onClick:m},"\u53d6\u6d88")):null,E=()=>{k.validateFields().then(function(){var e=(0,c.Z)((0,i.Z)().mark((function e(t){var n,a;return(0,i.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!h||!h.dataSource){e.next=11;break}return n={},n[l]=u[l],a=(0,p.Z)((0,p.Z)({},n),t),e.next=6,h.dataSource(a);case 6:R.ZP.success("\u66f4\u65b0\u6210\u529f"),f(),m(),e.next=12;break;case 11:R.ZP.error("\u8bf7\u6dfb\u52a0action.dataSource\u5c5e\u6027");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((()=>R.ZP.warning("\u8bf7\u5148\u5b8c\u5584\u8868\u5355\u5185\u5bb9")))},S=()=>{k.validateFields().then(function(){var e=(0,c.Z)((0,i.Z)().mark((function e(t){return(0,i.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!h||!h.dataSource){e.next=8;break}return e.next=3,h.dataSource(t);case 3:R.ZP.success("\u65b0\u589e\u6210\u529f"),Z({current:1}),m(),e.next=9;break;case 8:R.ZP.error("\u8bf7\u6dfb\u52a0action.dataSource\u5c5e\u6027");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((()=>R.ZP.warning("\u8bf7\u5148\u5b8c\u5584\u8868\u5355\u5185\u5bb9")))};return s.createElement(I.Z,{visible:Boolean(h),title:g(h),footer:y(h),maskClosable:!1,closable:!1},s.createElement(r.Z,{form:k,disabled:"retrieve"===(null===h||void 0===h?void 0:h.action)},t(k,h,u)))};T.displayName="ModalPanel";var A=T,F=(n(48238),n(46581)),q=e=>{var t=e.formItems,n=s.useContext(d),o=n.getInternalHooks(),l=o.unique,u=o.record,h=o.action,m=o.closeAction,f=o.refreshTable,Z=o.setCondition,v=r.Z.useForm(),w=(0,a.Z)(v,1),k=w[0];(0,s.useEffect)((()=>{console.log("ModalPanel====================================>useEffect"),"create"===(null===h||void 0===h?void 0:h.action)?k.resetFields():k.setFieldsValue(u)}),[u,h]);var g=e=>{if(!e)return"";if(e.title)return e.title;switch(e.action){case"create":return"\u65b0\u589e";case"retrieve":return"\u67e5\u770b";case"update":return"\u66f4\u65b0"}},y=e=>e?s.createElement(b.Z,null,"create"===e.action&&s.createElement(x.Z,{type:"primary",onClick:S},"\u65b0\u589e"),"update"===e.action&&s.createElement(x.Z,{type:"primary",onClick:E},"\u66f4\u65b0"),s.createElement(x.Z,{onClick:m},"\u53d6\u6d88")):null,E=()=>{k.validateFields().then(function(){var e=(0,c.Z)((0,i.Z)().mark((function e(t){var n,a;return(0,i.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!h||!h.dataSource){e.next=11;break}return n={},n[l]=u[l],a=(0,p.Z)((0,p.Z)({},n),t),e.next=6,h.dataSource(a);case 6:R.ZP.success("\u66f4\u65b0\u6210\u529f"),f(),m(),e.next=12;break;case 11:R.ZP.error("\u8bf7\u6dfb\u52a0action.dataSource\u5c5e\u6027");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((()=>R.ZP.warning("\u8bf7\u5148\u5b8c\u5584\u8868\u5355\u5185\u5bb9")))},S=()=>{k.validateFields().then(function(){var e=(0,c.Z)((0,i.Z)().mark((function e(t){return(0,i.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!h||!h.dataSource){e.next=8;break}return e.next=3,h.dataSource(t);case 3:R.ZP.success("\u65b0\u589e\u6210\u529f"),Z({current:1}),m(),e.next=9;break;case 8:R.ZP.error("\u8bf7\u6dfb\u52a0action.dataSource\u5c5e\u6027");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((()=>R.ZP.warning("\u8bf7\u5148\u5b8c\u5584\u8868\u5355\u5185\u5bb9")))};return s.createElement(F.Z,{visible:Boolean(h),title:g(h),footer:y(h),maskClosable:!1,closable:!1},s.createElement(r.Z,{form:k,disabled:"retrieve"===(null===h||void 0===h?void 0:h.action)},t(k,h,u)))};q.displayName="ModalPanel";var O=q,U=e=>{var t=e.operations,n=void 0===t?[]:t,a=s.useContext(d),r=a.getInternalHooks(),o=r.openAction,l=r.unique,u=r.selectedRows,p=r.condition,h=r.setCondition,m=function(){var e=(0,c.Z)((0,i.Z)().mark((function e(t){return(0,i.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t||!t.dataSource){e.next=7;break}return e.next=3,t.dataSource(u.map((e=>e[l])));case 3:R.ZP.success("\u5220\u9664\u6210\u529f"),h({current:1}),e.next=8;break;case 7:R.ZP.error("\u8bf7\u6dfb\u52a0action.dataSource\u5c5e\u6027");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,c.Z)((0,i.Z)().mark((function e(t){return(0,i.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t||!t.dataSource){e.next=6;break}return e.next=3,t.dataSource(p);case 3:R.ZP.success("\u5bfc\u51fa\u6210\u529f"),e.next=7;break;case 6:R.ZP.error("\u8bf7\u6dfb\u52a0action.dataSource\u5c5e\u6027");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return s.createElement(g.Z,{style:{marginBottom:20,justifyContent:"end"}},s.createElement(b.Z,null,n.map((e=>{var t,n,a,r;switch(e.action){case"create":return s.createElement(x.Z,{type:"primary",key:"create",onClick:()=>o(e,null)},null!==(t=e.label)&&void 0!==t?t:"\u65b0\u589e");case"delete":return s.createElement(x.Z,{key:"delete",onClick:()=>m(e)},null!==(n=e.label)&&void 0!==n?n:"\u6279\u91cf\u5220\u9664");case"export":return s.createElement(x.Z,{key:"export",onClick:()=>f(e)},null!==(a=e.label)&&void 0!==a?a:"\u5bfc\u51fa\u8868\u683c");case"extend":return s.createElement(x.Z,{key:"extend-".concat(e.label),onClick:()=>{e.extendOperation&&e.extendOperation(u,p)}},null!==(r=e.label)&&void 0!==r?r:"\u8bf7\u8865\u5145action.label")}}))))};U.displayName="OperationPanel";var N=U,H=(n(24302),n(49198)),z=n(13378),j=e=>{var t=e.defaultCurrent,n=void 0===t?1:t,a=e.defaultPageSize,r=void 0===a?10:a,o=e.disabled,i=e.hideOnSinglePage,c=e.pageSizeOptions,l=e.showSizeChanger,u=e.responsive,p=e.showQuickJumper,h=e.showTotal,m=e.simple,f=e.size,Z=void 0===f?"default":f,v=s.useContext(d),w=v.getInternalHooks(),k=w.pagination,b=w.setCondition;return s.useEffect((()=>{console.log("PaginationPanel==========================>useEffect"),b({current:n,pageSize:r})}),[]),s.createElement(g.Z,{justify:"end",style:{marginTop:20,marginBottom:20}},s.createElement(H.Z,(0,z.Z)({onChange:(e,t)=>b({current:e,pageSize:t}),showTitle:!1,disabled:o,hideOnSinglePage:i,pageSizeOptions:c,showSizeChanger:l,responsive:u,showQuickJumper:p,showTotal:h,simple:m,size:Z},k)))};j.displayName="PaginationPanel";var J=j,B=(n(36696),n(20707)),M=(n(36326),n(78472)),V=["columns","dataSource","serial","actions","unique","rowSelection"],D=e=>{var t=e.columns,n=e.dataSource,r=e.serial,o=e.actions,l=e.unique,u=e.rowSelection,h=(0,E.Z)(e,V),m=s.useContext(d),f=(0,s.useState)(!1),Z=(0,a.Z)(f,2),v=Z[0],w=Z[1],k=(0,s.useState)([]),g=(0,a.Z)(k,2),y=g[0],S=g[1],P=m.getInternalHooks(),C=P.setPagination,I=P.openAction,T=P.setUnique,A=P.setCondition,F=P.condition,q=P.setSelectedRows,O=e=>{var t=e=>{if(!e)return"";switch(e.action){case"retrieve":return"\u67e5\u770b";case"update":return"\u66f4\u65b0";case"delete":return"\u5220\u9664"}};return s.createElement(b.Z,null,null===o||void 0===o?void 0:o.map((n=>{var a;switch(n.action){case"retrieve":return s.createElement(x.Z,{type:"link",key:"retrieve",onClick:(0,c.Z)((0,i.Z)().mark((function t(){var a;return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.dataSource){t.next=5;break}return t.next=3,n.dataSource(e[l]);case 3:a=t.sent,e=(0,p.Z)((0,p.Z)({},e),a);case 5:I(n,e);case 6:case"end":return t.stop()}}),t)})))},t(n));case"update":return s.createElement(x.Z,{type:"link",key:"update",onClick:()=>I(n,e)},t(n));case"delete":return s.createElement(M.Z,{title:"\u786e\u5b9a\u8981\u5220\u9664\u6b64\u6761\u6570\u636e\uff1f",key:"delete",onConfirm:(0,c.Z)((0,i.Z)().mark((function t(){return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.dataSource){t.next=5;break}return t.next=3,n.dataSource(e[l]);case 3:R.ZP.success("\u5220\u9664\u6210\u529f"),A({current:1});case 5:case"end":return t.stop()}}),t)})))},s.createElement(x.Z,{type:"link"}," ",t(n)));case"extend":return s.createElement(x.Z,{type:"link",key:"extend-".concat(n.label),onClick:()=>{n.extendAction&&n.extendAction(e,F)}},null!==(a=n.label)&&void 0!==a?a:"\u8bf7\u8865\u5145action.label")}})))};(0,s.useEffect)((()=>{console.log("TablePanel==============================>useEffect"),T(l),(0,c.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return w(!0),e.next=3,n(F);case 3:t=e.sent,w(!1),t.pagination&&C(t.pagination),S(t.data);case 7:case"end":return e.stop()}}),e)})))()}),[l,F]),r&&(t=[{title:"\u5e8f\u53f7",width:40,render:(e,t,n)=>n+1},...t]),o&&o.length>0&&(t=[...t,{title:"\u64cd\u4f5c",key:"oprate",render:O}]);var U={};return u&&(U.rowSelection=(0,p.Z)((0,p.Z)({},u),{},{onChange:q})),s.createElement(B.Z,(0,z.Z)({rowKey:l,columns:t,dataSource:y,loading:v,pagination:!1},U,h))};D.displayName="TablePanel";var Q=D,_=s.forwardRef(k),K=_;K.TablePanel=Q,K.ConditionPanel=C,K.OperationPanel=N,K.ModalPanel=O,K.DrawerPanel=A,K.PaginationPanel=J,K.useAutoTable=Z;var G=K,L=e=>new Promise(function(){var t=(0,c.Z)((0,i.Z)().mark((function t(n){var a;return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:4567/api/v1/demo/table",{method:"post",body:JSON.stringify(e)}).then((e=>e.json()));case 2:a=t.sent,n(a.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),W=[{title:"UID",dataIndex:"id",key:"id"},{title:"\u7528\u6237\u540d",dataIndex:"username",key:"username"},{title:"\u624b\u673a\u53f7",dataIndex:"telephone",key:"telephone"}],X=[{action:"create",dataSource:e=>new Promise(function(){var t=(0,c.Z)((0,i.Z)().mark((function t(n){return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:4567/api/v1/demo/create",{method:"post",body:JSON.stringify(e)}).then((e=>e.json()));case 2:n();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},{action:"delete",dataSource:e=>new Promise(function(){var t=(0,c.Z)((0,i.Z)().mark((function t(n){return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:4567/api/v1/demo/deleteBatch",{method:"post",body:JSON.stringify(e)}).then((e=>e.json()));case 2:n();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}],Y=(e,t,n)=>s.createElement(s.Fragment,null,s.createElement(r.Z.Item,{name:"username",label:"\u7528\u6237\u540d"},s.createElement(o.Z,{disabled:"retrieve"===(null===t||void 0===t?void 0:t.action)})),s.createElement(r.Z.Item,{name:"telephone",label:"\u624b\u673a\u53f7"},s.createElement(o.Z,null))),$=[{name:"username",label:"\u7528\u6237\u540d",component:s.createElement(o.Z,null)},{name:"telephone",label:"\u624b\u673a\u53f7",component:s.createElement(o.Z,null)}],ee=()=>{var e=G.useAutoTable(),t=(0,a.Z)(e,1),n=t[0],r=s.useState({username:"aaaa"}),o=(0,a.Z)(r,2);o[0],o[1];s.useEffect((()=>{}),[]);var l=[{action:"retrieve"},{action:"update",dataSource:e=>new Promise(function(){var t=(0,c.Z)((0,i.Z)().mark((function t(n){return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:4567/api/v1/demo/update",{method:"post",body:JSON.stringify(e)}).then((e=>e.json()));case 2:n();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},{action:"delete",dataSource:e=>new Promise(function(){var t=(0,c.Z)((0,i.Z)().mark((function t(n){return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:4567/api/v1/demo/delete",{method:"post",body:JSON.stringify({id:e})}).then((e=>e.json()));case 2:n();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},{action:"extend",label:"\u6253\u5370",extendAction:()=>{console.log(),n.refreshTable()}}];return s.createElement(s.Fragment,null,s.createElement(G,{table:n},s.createElement(G.ConditionPanel,{conditions:$}),s.createElement(G.OperationPanel,{operations:X}),s.createElement(G.TablePanel,{unique:"id",serial:!0,actions:l,columns:W,dataSource:L,rowSelection:!0}),s.createElement(G.DrawerPanel,{formItems:Y}),s.createElement(G.PaginationPanel,null)),s.createElement("div",{onClick:()=>n.refreshTable()},"\u5237\u65b0"))}}}]);