"use strict";(self["webpackChunkbizMOB4Vue"]=self["webpackChunkbizMOB4Vue"]||[]).push([[3495],{76474:function(t,e,i){i.a(t,(async function(t,a){try{var n=i(41762),s=i(21638),r=i(66252),l=i(42615),o=i(90121),d=i(67201),u=t([o]);o=(u.then?(await u)():u)[0],e["Z"]=(0,r.aZ)({name:"icm206001sc00",components:{VueDatePicker:n.Z,Pagination:s.Z,BreadCrumb:o.Z,SelectOption:d.Z},data(){const t=[{columnName:this.$t("icm211001sc00.column.no")},{columnName:this.$t("icm211001sc00.column.view")},{columnName:this.$t("icm211001sc00.column.title")},{columnName:"Status"},{columnName:this.$t("icm211001sc00.column.uploader")},{columnName:this.$t("icm211001sc00.column.created_date")},{columnName:this.$t("icm211001sc00.column.display")}],e={displayYN:"",searchValue:"",statusCode:""},i=[],a="02",n=0,s=1,r=l.IV,o=1,d=!1;return{header:t,guideList:i,searchForm:e,seletedButton:a,totalItems:n,currentPage:s,pageSize:r,startingIndex:o,isReset:d}},computed:{displayYN(){return this.$store.state.CommonCodeModule.commonCode.YnType}},mounted(){this.retrieveGuideList()},methods:{async retrieveGuideList(){const t={pageSize:this.pageSize,displayYN:this.searchForm.displayYN,pageNumber:this.currentPage,searchValue:this.searchForm.searchValue,statusCode:this.searchForm.statusCode},e=await this.$request.getRequest("ICM20600111",t,!1);this.guideList=e?.body?.list.map((t=>({title:t.title,uploader:t.firstRegisterTellerName&&t.firstRegisterTellerID?`${t.firstRegisterTellerName} (${t.firstRegisterTellerID})`:"",firstRegisterDate:this.$datetime.formatStringToStringDate(t.firstRegisterDate),displayYN:this.$codeConverter.convertValue("YnType",t.displayYN),firstRegisterTellerID:t.firstRegisterTellerID,guideID:t.guideID,firstRegisterTellerName:t.firstRegisterTellerName,statusCode:`${t.statusCode} : ${this.$codeConverter.convertValue("ContentManangementStatusCode",t.statusCode)}`,refScreenID:t.refScreenID}))),this.totalItems=e.body.totalCount},handleClickAction(t){switch(t){case"register":this.$router.push({path:"ICM206001SC01",query:{type:"register"}});break;case"search":this.currentPage>1?(this.currentPage=1,this.isReset=!0,this.retrieveGuideList()):this.retrieveGuideList();break;default:this.searchForm.searchValue=this.searchForm.displayYN=this.searchForm.statusCode="",this.isReset=!0,this.currentPage=1,this.retrieveGuideList();break}},handleRowClick(t){this.$router.push({path:"ICM206001SC01",query:{type:"edit",guideID:t.guideID}})},handlePagination(t){this.isReset=!1,this.currentPage=t,this.retrieveGuideList()},handleStartingIndex(t){this.startingIndex=t}}}),a()}catch(c){a(c)}}))},21638:function(t,e,i){i.d(e,{Z:function(){return p}});var a=i(66252),n=i(3577);const s=t=>((0,a.dD)("data-v-3886d7e2"),t=t(),(0,a.Cn)(),t),r={class:"grid_footer"},l={key:0,class:"grid_option"},o={class:"list_count"},d=s((()=>(0,a._)("dd",null,[(0,a._)("span",null," item(s)")],-1))),u={key:1,class:"paginaton"};function c(t,e){const i=(0,a.up)("ion-button");return(0,a.wg)(),(0,a.iD)("div",r,[t.showTotal?((0,a.wg)(),(0,a.iD)("div",l,[(0,a._)("div",o,[(0,a._)("dl",null,[(0,a._)("dt",null,[(0,a._)("strong",null,(0,n.zw)(t.$util.addComma(t.totalCount,3)),1)]),d])])])):(0,a.kq)("",!0),t.perPage>0&&t.totalCount>0&&t.totalCount>t.perPage?((0,a.wg)(),(0,a.iD)("div",u,[(0,a.Wm)(i,{class:"btn_page_prev",onClick:t.backwardPagination,disabled:t.isDisabledPrev},{default:(0,a.w5)((()=>[(0,a.Uk)("Prev")])),_:1},8,["onClick","disabled"]),(0,a._)("ul",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.totalPagination,(e=>((0,a.wg)(),(0,a.iD)("li",null,[(0,a.Wm)(i,{class:(0,n.C_)([t.currentPage==e?"on":""]),onClick:i=>t.onClickPagination(e),disabled:"..."===e},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(e),1)])),_:2},1032,["class","onClick","disabled"])])))),256))]),(0,a.Wm)(i,{class:"btn_page_next",onClick:t.forwardPagination,disabled:t.isDisabledNext},{default:(0,a.w5)((()=>[(0,a.Uk)("Next")])),_:1},8,["onClick","disabled"])])):(0,a.kq)("",!0)])}var g=(0,a.aZ)({name:"pagination",component:{},props:{totalCount:{type:Number,default:0,required:!0},perPage:{type:Number,default:0,required:!0},maxPageShow:{type:Number,default:7},resetPage:{type:Boolean,default:!1,required:!0},showTotal:{type:Boolean,default:!0,required:!1}},emits:["get-page-number","get-starting-index"],data(){return{totalPagination:[],endPagination:0,currentPage:1}},computed:{isDisabledPrev(){return 1==this.currentPage},isDisabledNext(){return this.currentPage==this.endPagination}},watch:{totalCount:{handler(){this.endPagination=this.dividePage(),this.findPagination(this.currentPage),this.currentPage=1,this.$emit("get-starting-index",1)},deep:!0},resetPage(t){t&&(this.currentPage=1,this.$emit("get-starting-index",1),this.findPagination(this.currentPage))}},mounted(){this.endPagination=this.dividePage(),this.findPagination(this.currentPage)},methods:{async findPagination(t){this.currentPage=t;const e=[];if(this.endPagination-this.currentPage>=this.maxPageShow){e.push(this.currentPage.toString());for(let i=0;i<this.maxPageShow-4;i++)e.push((t+i+1).toString());e.push("..."),e.push((this.endPagination-1).toString()),e.push(this.endPagination.toString())}else if(this.endPagination-this.maxPageShow+1<1)for(let i=1;i<=this.endPagination;i++)e.push(i.toString());else for(let i=this.endPagination-this.maxPageShow+1;i<=this.endPagination;i++)e.push(i.toString());return this.totalPagination=e,t},dividePage(){const t=this.totalCount/this.perPage;if(t%1!=0){const e=t.toString().split(".");return(0,n.He)(e[0])+1}return(0,n.He)(t.toFixed())},onClickPagination(t){this.currentPage!=parseInt(t)&&(this.currentPage=parseInt(t),this.findPagination(parseInt(t)),this.$emit("get-page-number",Number(t)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1))},async backwardPagination(){let t=10==this.currentPage?9:10,e=this.currentPage-t;e<1?(e=1,await this.findPagination(e).then((t=>{this.$emit("get-page-number",Number(t)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1)}))):await this.findPagination(e).then((t=>{this.$emit("get-page-number",Number(t)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1)}))},async forwardPagination(){let t=1==this.currentPage?9:10,e=this.currentPage+t;e>Number(this.totalPagination.slice(-1))?(e=Number(this.totalPagination.slice(-1)),await this.findPagination(e).then((t=>{this.$emit("get-page-number",Number(t)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1)}))):await this.findPagination(e).then((t=>{this.$emit("get-page-number",Number(t)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1)}))},async firstPagination(){await this.findPagination(1).then((t=>{this.$emit("get-page-number",Number(t)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1)}))},async lastPagination(){await this.findPagination(this.endPagination).then((t=>{this.$emit("get-page-number",Number(t)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1)}))}}}),h=i(83744);const m=(0,h.Z)(g,[["render",c],["__scopeId","data-v-3886d7e2"]]);var p=m},37344:function(t,e,i){i.a(t,(async function(t,a){try{i.r(e);var n=i(24820),s=i(92285),r=(i(30444),i(83744)),l=t([s]);s=(l.then?(await l)():l)[0];const o=(0,r.Z)(s.Z,[["render",n.s],["__scopeId","data-v-f5b6ffce"]]);e["default"]=o,a()}catch(o){a(o)}}))},30444:function(){},92285:function(t,e,i){i.a(t,(async function(t,a){try{i.d(e,{Z:function(){return n.Z}});var n=i(76474),s=t([n]);n=(s.then?(await s)():s)[0],a()}catch(r){a(r)}}))},24820:function(t,e,i){i.d(e,{s:function(){return q}});var a=i(66252),n=i(3577),s=i(49963);const r=t=>((0,a.dD)("data-v-f5b6ffce"),t=t(),(0,a.Cn)(),t),l={class:"contentWrap"},o={class:"title_name"},d={class:"cont"},u={class:"row gap"},c={class:"col-2"},g={class:"form01"},h=r((()=>(0,a._)("dt",null,"Status",-1))),m={class:"col-4"},p={class:"form01"},P=r((()=>(0,a._)("dt",null,"Search Keyword",-1))),_={class:"inp_box search"},w={class:"inp"},f={class:"row gap"},b={class:"col auto"},C={class:"form02"},y={class:"col"},v={class:"footer_btn"},k={class:"right_side"},$={class:"gridwrap"},N={class:"grid_option"},x={class:"option"},D={class:"add_sm"},S={class:"tableWrap"},I={class:"table01 fixed"},z=r((()=>(0,a._)("colgroup",null,[(0,a._)("col",{style:{width:"80px"}}),(0,a._)("col",{style:{width:"80px"}}),(0,a._)("col"),(0,a._)("col",{style:{width:"80px"}}),(0,a._)("col",{style:{width:"80px"}}),(0,a._)("col",{style:{width:"80px"}}),(0,a._)("col",{style:{width:"80px"}})],-1))),V={class:"sticky_head"},W={class:"tbody_section"},R=["id","onClick"],Y={class:"txt_left description"},F={key:0,class:"no_data"},T=r((()=>(0,a._)("p",null,"No Data",-1))),Z=[T];function q(t,e){const i=(0,a.up)("BreadCrumb"),r=(0,a.up)("SelectOption"),T=(0,a.up)("ion-input"),q=(0,a.up)("ion-radio"),G=(0,a.up)("ion-label"),U=(0,a.up)("ion-item"),L=(0,a.up)("ion-list"),M=(0,a.up)("ion-radio-group"),B=(0,a.up)("ion-button"),A=(0,a.up)("Pagination");return(0,a.wg)(),(0,a.iD)("div",l,[(0,a.Wm)(i,{items:t.breadCrumbs},null,8,["items"]),(0,a._)("h1",o,(0,n.zw)(t.$t("Guide List")),1),(0,a._)("div",d,[(0,a._)("div",u,[(0,a._)("div",c,[(0,a._)("dl",g,[h,(0,a._)("dd",null,[(0,a.Wm)(r,{data:t.$store.state.CommonCodeModule.commonCode.ContentManangementStatusCode,modelValue:t.searchForm.statusCode,"onUpdate:modelValue":e[0]||(e[0]=e=>t.searchForm.statusCode=e),showOptionAll:!0},null,8,["data","modelValue"])])])]),(0,a._)("div",m,[(0,a._)("dl",p,[P,(0,a._)("dd",null,[(0,a._)("div",_,[(0,a._)("div",w,[(0,a.Wm)(T,{type:"text",placeholder:t.$t("common.search_keyword"),modelValue:t.searchForm.searchValue,"onUpdate:modelValue":e[1]||(e[1]=e=>t.searchForm.searchValue=e),modelModifiers:{trim:!0},onKeyup:e[2]||(e[2]=(0,s.D2)((e=>t.handleClickAction("search")),["enter"]))},null,8,["placeholder","modelValue"])])])])])])]),(0,a._)("div",f,[(0,a._)("div",b,[(0,a._)("dl",C,[(0,a._)("dt",null,(0,n.zw)(t.$t("common.display")),1),(0,a._)("dd",null,[(0,a.Wm)(M,{modelValue:t.searchForm.displayYN,"onUpdate:modelValue":e[3]||(e[3]=e=>t.searchForm.displayYN=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(L,{class:"list_chk"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.displayYN,((t,e)=>((0,a.wg)(),(0,a.j4)(U,null,{default:(0,a.w5)((()=>[(0,a.Wm)(q,{value:t.key,id:t.key},null,8,["value","id"]),(0,a.Uk)(),(0,a.Wm)(G,{for:t.key},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(t.value),1)])),_:2},1032,["for"])])),_:2},1024)))),256)),(0,a.Wm)(U,null,{default:(0,a.w5)((()=>[(0,a.Wm)(q,{value:""}),(0,a.Uk)(),(0,a.Wm)(G,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(t.$t("common.all")),1)])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])])]),(0,a._)("div",y,[(0,a._)("div",v,[(0,a._)("div",k,[(0,a.Wm)(B,{class:"btn01",onClick:e[4]||(e[4]=e=>t.handleClickAction("search"))},{default:(0,a.w5)((()=>[(0,a._)("span",null,(0,n.zw)(t.$t("common.search")),1)])),_:1}),(0,a.Wm)(B,{class:"btn_refresh",id:"reset",onClick:e[5]||(e[5]=e=>t.handleClickAction("reset"))},{default:(0,a.w5)((()=>[(0,a._)("span",null,(0,n.zw)(t.$t("common.reset")),1)])),_:1})])])])]),(0,a._)("div",$,[(0,a._)("div",N,[(0,a._)("div",x,[(0,a.Wm)(B,{class:"btn02 btn_ico btn_sm",onClick:e[6]||(e[6]=e=>t.handleClickAction("register"))},{default:(0,a.w5)((()=>[(0,a._)("span",D,(0,n.zw)(t.$t("common.register")),1)])),_:1})])]),(0,a._)("div",S,[(0,a._)("table",I,[z,(0,a._)("thead",V,[(0,a._)("tr",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.header,(t=>((0,a.wg)(),(0,a.iD)("th",null,[(0,a._)("span",null,(0,n.zw)(t.columnName),1)])))),256))])]),(0,a._)("tbody",W,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.guideList,((e,i)=>((0,a.wg)(),(0,a.iD)("tr",{id:`row-${t.startingIndex+i}`,onClick:e=>t.$util.rowFocus(`row-${t.startingIndex+i}`)},[(0,a._)("td",null,[(0,a._)("span",null,(0,n.zw)(t.startingIndex+i),1)]),(0,a._)("td",null,[(0,a.Wm)(B,{class:"btn_view",onClick:i=>t.handleRowClick(e)},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(t.$t("icm211001sc00.view")),1)])),_:2},1032,["onClick"])]),(0,a._)("td",Y,[(0,a._)("span",null,(0,n.zw)(e.title),1)]),(0,a._)("td",null,[(0,a._)("span",null,(0,n.zw)(e.statusCode),1)]),(0,a._)("td",null,[(0,a._)("span",null,(0,n.zw)(e.uploader),1)]),(0,a._)("td",null,[(0,a._)("span",null,(0,n.zw)(e.firstRegisterDate),1)]),(0,a._)("td",null,[(0,a._)("span",null,(0,n.zw)(e.displayYN),1)])],8,R)))),256))])]),0===t.totalItems?((0,a.wg)(),(0,a.iD)("div",F,Z)):(0,a.kq)("",!0)]),(0,a.Wm)(A,{totalCount:t.totalItems,perPage:t.pageSize,onGetPageNumber:t.handlePagination,resetPage:t.isReset,onGetStartingIndex:t.handleStartingIndex},null,8,["totalCount","perPage","onGetPageNumber","resetPage","onGetStartingIndex"])])])])}}}]);
//# sourceMappingURL=3495.98da06aa.js.map