"use strict";(self["webpackChunkbizMOB4Vue"]=self["webpackChunkbizMOB4Vue"]||[]).push([[3255],{61739:function(e,t,a){a.a(e,(async function(e,n){try{var i=a(66252),s=a(21638),o=a(42615),l=a(67201),r=a(90121),d=e([r]);r=(d.then?(await d)():d)[0],t["Z"]=(0,i.aZ)({name:"com216004sc00",components:{Pagination:s.Z,SelectOption:l.Z,BreadCrumb:r.Z},data(){const e=[{columnName:"No"},{columnName:"View"},{columnName:"Message ID"},{columnName:"Message Type Code"},{columnName:"Push Category"},{columnName:"SMS Event Type Code"},{columnName:"SMS Event Detail Code"},{columnName:"Status Code"},{columnName:"Reference Service ID"},{columnName:"Deep Link Screen ID"},{columnName:"Event Description"}];return{headers:e,messageID:"",statusCode:"",messageTypeCode:"",messageList:[],pageSize:o.IV,pageNumber:1,startingNo:1,resetPage:!1,totalCountMessage:0}},mounted(){this.handleGetMessage()},computed:{messageNo(){return(e,t)=>e+t},messageStatusCode(){return this.$store.state.CommonCodeModule.commonCode.StatusCode}},methods:{async handleGetMessage(e){const t={messageID:this.messageID,statusCode:this.statusCode,messageTypeCode:this.messageTypeCode,pageSize:o.IV,pageNumber:"search"==e?0:this.pageNumber};"search"===e&&(this.pageNumber=1,this.resetPage=!0);const a=await this.$request.getRequest("COM21700111",t,!1);this.messageList=a.body.list,this.totalCountMessage=a.body.totalCount},handleRegister(){this.$router.push({path:"/COM216004SC01",query:{type:"register"}})},handleRowClick(e){this.$router.push({path:"COM216004SC01",query:{type:"edit",messageID:e.messageID}})},handlePagination(e){this.pageNumber=e,this.resetPage=!1,this.handleGetMessage()},handleStartingIndex(e){this.startingNo=e},resetForm(){this.resetPage=!0,this.pageNumber=1,this.statusCode="",this.messageID="",this.messageTypeCode="",this.handleGetMessage()}}}),n()}catch(u){n(u)}}))},21638:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(66252),i=a(3577);const s=e=>((0,n.dD)("data-v-3886d7e2"),e=e(),(0,n.Cn)(),e),o={class:"grid_footer"},l={key:0,class:"grid_option"},r={class:"list_count"},d=s((()=>(0,n._)("dd",null,[(0,n._)("span",null," item(s)")],-1))),u={key:1,class:"paginaton"};function g(e,t){const a=(0,n.up)("ion-button");return(0,n.wg)(),(0,n.iD)("div",o,[e.showTotal?((0,n.wg)(),(0,n.iD)("div",l,[(0,n._)("div",r,[(0,n._)("dl",null,[(0,n._)("dt",null,[(0,n._)("strong",null,(0,i.zw)(e.$util.addComma(e.totalCount,3)),1)]),d])])])):(0,n.kq)("",!0),e.perPage>0&&e.totalCount>0&&e.totalCount>e.perPage?((0,n.wg)(),(0,n.iD)("div",u,[(0,n.Wm)(a,{class:"btn_page_prev",onClick:e.backwardPagination,disabled:e.isDisabledPrev},{default:(0,n.w5)((()=>[(0,n.Uk)("Prev")])),_:1},8,["onClick","disabled"]),(0,n._)("ul",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.totalPagination,(t=>((0,n.wg)(),(0,n.iD)("li",null,[(0,n.Wm)(a,{class:(0,i.C_)([e.currentPage==t?"on":""]),onClick:a=>e.onClickPagination(t),disabled:"..."===t},{default:(0,n.w5)((()=>[(0,n.Uk)((0,i.zw)(t),1)])),_:2},1032,["class","onClick","disabled"])])))),256))]),(0,n.Wm)(a,{class:"btn_page_next",onClick:e.forwardPagination,disabled:e.isDisabledNext},{default:(0,n.w5)((()=>[(0,n.Uk)("Next")])),_:1},8,["onClick","disabled"])])):(0,n.kq)("",!0)])}var c=(0,n.aZ)({name:"pagination",component:{},props:{totalCount:{type:Number,default:0,required:!0},perPage:{type:Number,default:0,required:!0},maxPageShow:{type:Number,default:7},resetPage:{type:Boolean,default:!1,required:!0},showTotal:{type:Boolean,default:!0,required:!1}},emits:["get-page-number","get-starting-index"],data(){return{totalPagination:[],endPagination:0,currentPage:1}},computed:{isDisabledPrev(){return 1==this.currentPage},isDisabledNext(){return this.currentPage==this.endPagination}},watch:{totalCount:{handler(){this.endPagination=this.dividePage(),this.findPagination(this.currentPage),this.currentPage=1,this.$emit("get-starting-index",1)},deep:!0},resetPage(e){e&&(this.currentPage=1,this.$emit("get-starting-index",1),this.findPagination(this.currentPage))}},mounted(){this.endPagination=this.dividePage(),this.findPagination(this.currentPage)},methods:{async findPagination(e){this.currentPage=e;const t=[];if(this.endPagination-this.currentPage>=this.maxPageShow){t.push(this.currentPage.toString());for(let a=0;a<this.maxPageShow-4;a++)t.push((e+a+1).toString());t.push("..."),t.push((this.endPagination-1).toString()),t.push(this.endPagination.toString())}else if(this.endPagination-this.maxPageShow+1<1)for(let a=1;a<=this.endPagination;a++)t.push(a.toString());else for(let a=this.endPagination-this.maxPageShow+1;a<=this.endPagination;a++)t.push(a.toString());return this.totalPagination=t,e},dividePage(){const e=this.totalCount/this.perPage;if(e%1!=0){const t=e.toString().split(".");return(0,i.He)(t[0])+1}return(0,i.He)(e.toFixed())},onClickPagination(e){this.currentPage!=parseInt(e)&&(this.currentPage=parseInt(e),this.findPagination(parseInt(e)),this.$emit("get-page-number",Number(e)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1))},async backwardPagination(){let e=10==this.currentPage?9:10,t=this.currentPage-e;t<1?(t=1,await this.findPagination(t).then((e=>{this.$emit("get-page-number",Number(e)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1)}))):await this.findPagination(t).then((e=>{this.$emit("get-page-number",Number(e)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1)}))},async forwardPagination(){let e=1==this.currentPage?9:10,t=this.currentPage+e;t>Number(this.totalPagination.slice(-1))?(t=Number(this.totalPagination.slice(-1)),await this.findPagination(t).then((e=>{this.$emit("get-page-number",Number(e)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1)}))):await this.findPagination(t).then((e=>{this.$emit("get-page-number",Number(e)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1)}))},async firstPagination(){await this.findPagination(1).then((e=>{this.$emit("get-page-number",Number(e)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1)}))},async lastPagination(){await this.findPagination(this.endPagination).then((e=>{this.$emit("get-page-number",Number(e)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1)}))}}}),h=a(83744);const m=(0,h.Z)(c,[["render",g],["__scopeId","data-v-3886d7e2"]]);var p=m},4496:function(e,t,a){a.a(e,(async function(e,n){try{a.r(t);var i=a(12244),s=a(64750),o=(a(46101),a(83744)),l=e([s]);s=(l.then?(await l)():l)[0];const r=(0,o.Z)(s.Z,[["render",i.s],["__scopeId","data-v-69a63964"]]);t["default"]=r,n()}catch(r){n(r)}}))},46101:function(){},64750:function(e,t,a){a.a(e,(async function(e,n){try{a.d(t,{Z:function(){return i.Z}});var i=a(61739),s=e([i]);i=(s.then?(await s)():s)[0],n()}catch(o){n(o)}}))},12244:function(e,t,a){a.d(t,{s:function(){return q}});var n=a(66252),i=a(49963),s=a(3577);const o=e=>((0,n.dD)("data-v-69a63964"),e=e(),(0,n.Cn)(),e),l={class:"contentWrap"},r=o((()=>(0,n._)("h1",{class:"title_name"},"Notification",-1))),d={class:"cont"},u={class:"row gap"},g={class:"col"},c={class:"form01"},h=o((()=>(0,n._)("dt",null,"Message ID",-1))),m={class:"inp_box"},p={class:"inp"},P={class:"col"},_={class:"form01"},w=o((()=>(0,n._)("dt",null,"Message Type Code",-1))),C={class:"col"},b={class:"form01"},f=o((()=>(0,n._)("dt",null,"Status Code",-1))),y={class:"row wrap_btn_search"},v={class:"col"},N={class:"footer_btn"},S={class:"right_side"},D={class:"gridwrap"},k={class:"grid_option"},x={class:"option"},$={class:"add_sm"},M={class:"tableWrap"},I={class:"table01 fixed"},z=o((()=>(0,n._)("colgroup",null,[(0,n._)("col",{style:{width:"80px"}}),(0,n._)("col",{style:{width:"80px"}}),(0,n._)("col",{style:{width:"80px"}}),(0,n._)("col",{style:{width:"80px"}}),(0,n._)("col",{style:{width:"80px"}}),(0,n._)("col",{style:{width:"80px"}}),(0,n._)("col",{style:{width:"80px"}}),(0,n._)("col",{style:{width:"80px"}}),(0,n._)("col",{style:{width:"80px"}}),(0,n._)("col",{style:{width:"80px"}}),(0,n._)("col")],-1))),T={class:"sticky_head"},V={class:"tbody_section"},W=["id","onClick"],Z={key:0,class:"no_data"};function q(e,t){const a=(0,n.up)("BreadCrumb"),o=(0,n.up)("ion-input"),q=(0,n.up)("SelectOption"),G=(0,n.up)("ion-button"),O=(0,n.up)("Pagination");return(0,n.wg)(),(0,n.iD)("div",l,[(0,n.Wm)(a,{items:e.breadcrumbs},null,8,["items"]),r,(0,n._)("div",d,[(0,n._)("div",u,[(0,n._)("div",g,[(0,n._)("dl",c,[h,(0,n._)("dd",null,[(0,n._)("div",m,[(0,n._)("div",p,[(0,n.Wm)(o,{modelValue:e.messageID,"onUpdate:modelValue":t[0]||(t[0]=t=>e.messageID=t),onKeyup:t[1]||(t[1]=(0,i.D2)((t=>e.handleGetMessage()),["enter"]))},null,8,["modelValue"])])])])])]),(0,n._)("div",P,[(0,n._)("dl",_,[w,(0,n._)("dd",null,[(0,n.Wm)(q,{data:e.$store.state.CommonCodeModule.commonCode.MessageTypeCode,modelValue:e.messageTypeCode,"onUpdate:modelValue":t[2]||(t[2]=t=>e.messageTypeCode=t),showOptionAll:!0},null,8,["data","modelValue"])])])]),(0,n._)("div",C,[(0,n._)("dl",b,[f,(0,n._)("dd",null,[(0,n.Wm)(q,{data:e.$store.state.CommonCodeModule.commonCode.StatusCode,modelValue:e.statusCode,"onUpdate:modelValue":t[3]||(t[3]=t=>e.statusCode=t),showOptionAll:!0},null,8,["data","modelValue"])])])])]),(0,n._)("div",y,[(0,n._)("div",v,[(0,n._)("div",N,[(0,n._)("div",S,[(0,n.Wm)(G,{class:"btn01",onClick:t[4]||(t[4]=t=>e.handleGetMessage("search"))},{default:(0,n.w5)((()=>[(0,n._)("span",null,(0,s.zw)(e.$t("common.search")),1)])),_:1}),(0,n.Wm)(G,{class:"btn_refresh",onClick:t[5]||(t[5]=t=>e.resetForm())},{default:(0,n.w5)((()=>[(0,n._)("span",null,(0,s.zw)(e.$t("common.reset")),1)])),_:1})])])])]),(0,n._)("div",D,[(0,n._)("div",k,[(0,n._)("div",x,[(0,n.Wm)(G,{class:"btn01 btn_sm btn_ico",onClick:t[6]||(t[6]=t=>e.handleRegister())},{default:(0,n.w5)((()=>[(0,n._)("span",$,(0,s.zw)(e.$t("common.register")),1)])),_:1})])]),(0,n._)("div",M,[(0,n._)("table",I,[z,(0,n._)("thead",T,[(0,n._)("tr",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.headers,(e=>((0,n.wg)(),(0,n.iD)("th",null,[(0,n._)("span",null,(0,s.zw)(e.columnName),1)])))),256))])]),(0,n._)("tbody",V,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.messageList,((t,a)=>((0,n.wg)(),(0,n.iD)("tr",{id:`row-${e.startingNo+a}`,onClick:t=>e.$util.rowFocus(`row-${e.startingNo+a}`)},[(0,n._)("td",null,(0,s.zw)(e.messageNo(a,e.startingNo)),1),(0,n._)("td",null,[(0,n.Wm)(G,{class:"btn_view",onClick:n=>e.handleRowClick(t,a)},{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)(e.$t("icm214001sc00.column.view")),1)])),_:2},1032,["onClick"])]),(0,n._)("td",null,(0,s.zw)(t.messageID),1),(0,n._)("td",null,(0,s.zw)(t.messageTypeCode),1),(0,n._)("td",null,(0,s.zw)(t.pushCategory),1),(0,n._)("td",null,(0,s.zw)(t.SMSEventTypeCode),1),(0,n._)("td",null,(0,s.zw)(t.SMSEventDetailCode),1),(0,n._)("td",null,(0,s.zw)(t.statusCode),1),(0,n._)("td",null,(0,s.zw)(t.referenceServiceID),1),(0,n._)("td",null,(0,s.zw)(t.deepLinkScreenID),1),(0,n._)("td",null,(0,s.zw)(t.eventDescription),1)],8,W)))),256))])]),0===e.totalCountMessage?((0,n.wg)(),(0,n.iD)("div",Z,[(0,n._)("p",null,(0,s.zw)(e.$t("common.no_data")),1)])):(0,n.kq)("",!0)]),(0,n.Wm)(O,{totalCount:e.totalCountMessage,perPage:e.pageSize,onGetPageNumber:e.handlePagination,onGetStartingIndex:e.handleStartingIndex},null,8,["totalCount","perPage","onGetPageNumber","onGetStartingIndex"])])])])}}}]);
//# sourceMappingURL=3255.0dc45ca3.js.map