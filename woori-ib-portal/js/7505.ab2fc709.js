"use strict";(self["webpackChunkbizMOB4Vue"]=self["webpackChunkbizMOB4Vue"]||[]).push([[7505],{28183:function(e,t,a){a.a(e,(async function(e,i){try{var n=a(66252),s=a(75080),r=a(72224),o=e([r]);r=(o.then?(await o)():o)[0],t["Z"]=(0,n.aZ)({props:{staticScreenName:{type:String,required:!1},queryData:{type:Array,required:!1}},data(){return{breadcrumbs:[],menuList:[]}},async created(){setTimeout((()=>{this.renderMenuFromState(),this.getMenuList()}),100)},computed:{approvalType(){return this.$route.query.approvalType?this.$route.query.approvalType.toString():""}},watch:{staticScreenName(e){"/COM210001SC00"==this.$route.path&&(e&&(2==this.breadcrumbs.length?this.breadcrumbs:this.breadcrumbs.pop()),this.breadcrumbs.push({menuName:e,route:""}))}},methods:{pathDriver(e,t){if(""===this.approvalType){if(this.$route.path==e)return;t?this.$router.push({path:e,query:t}):this.$router.push(e)}},async renderMenuFromState(){return s.Z.getters.getMenuData},async getMenuList(){try{this.menuList=await this.renderMenuFromState(),this.menuList.length>0?(this.menuList=JSON.parse(JSON.stringify(this.menuList)).filter((e=>""!=e.parentMenuID.replace(/\s/g,""))),this.buildBreadcrumb(this.menuList,this.$route.path)):console.log("menu not yet rendered")}catch(e){console.log("Error rendering menu:",e)}},async buildBreadcrumb(e,t){const a=e.find((e=>`/${e.screenID}`==t));if(a){if(this.generateBreadcrumbs(e,a),"/ICM201001SC00"==this.$route.path){const t=e.find((e=>"ICM201001SC00"==e.screenID));r.u.setData("SpecialScreenID",JSON.stringify(t))}}else{if("/CIB202003SC00"==this.$route.path){let t,a;a=e.find((e=>"CIB202002SC00"==e.screenID)),t={menuName:this.staticScreenName?this.staticScreenName:"",screenID:this.$route.path.replace("/",""),parentMenuID:a.menuID,menuID:"1"},this.generateBreadcrumbs(e,t)}const t=this.$route.path.replace("/","");let a=[];this.menuList.forEach((e=>{a.push(e.screenID)})),a.forEach((a=>{let i;if(this.matchScreenID(a,t)&&(i=e.find((e=>`${e.screenID}`==a)),i&&this.generateBreadcrumbs(e,i)),""!==this.approvalType&&("VBA202002SC00"==t||"CIB201003SC00"==t)&&this.matchApprovalModeScreenID(a,t)){const t=e.find((e=>`${e.screenID}`==a));this.generateBreadcrumbs(e,t)}}));let i=t.charAt(t.length-1);if("1"===i){let e={menuName:this.staticScreenName?this.staticScreenName:"",route:`/${t}`};this.breadcrumbs.push(e),r.u.setData("TempBreadCrumb",JSON.stringify(e))}else if("2"===i)if("/COM211001SC02"==this.$route.path)this.breadcrumbs.push({menuName:this.staticScreenName?this.staticScreenName:"",route:`/${t}`});else{let e=JSON.parse(await r.u.getData("TempBreadCrumb"));this.breadcrumbs.push(e,{menuName:this.staticScreenName?this.staticScreenName:"",route:`/${t}`})}else if("/CIB202003SC00"!=this.$route.path&&"/PUM202002SC00"!=this.$route.path){let a=this.$router.options.history.state.back,i=a.includes("/")?a.replace("/",""):a;const n=await e.find((e=>`${e.screenID}`==i));this.breadcrumbs.push({menuName:this.staticScreenName?this.staticScreenName:"",route:`/${t}`}),this.generateBreadcrumbs(e,n)}if("/ICM201002SC01"==this.$route.path){this.breadcrumbs=[];let a=JSON.parse(await r.u.getData("SpecialScreenID"));this.breadcrumbs.push({menuName:this.staticScreenName?this.staticScreenName:"",route:`/${t}`}),this.generateBreadcrumbs(e,a)}else if("/CIB202003SC01"==this.$route.path){let a,i;this.breadcrumbs=[],i=e.find((e=>"CIB202002SC00"==e.screenID)),a={menuName:this.$t("cib202003sc00.sub_user_list"),screenID:"CIB202003SC00",parentMenuID:i.menuID},this.breadcrumbs.push({menuName:this.staticScreenName?this.staticScreenName:"",route:`/${t}`}),this.generateBreadcrumbs(e,a)}else if("/PUM202002SC00"==this.$route.path){let t,a;a=e.find((e=>"COM200001SC00"==e.screenID)),t={menuName:this.staticScreenName?this.staticScreenName:"",screenID:this.$route.path.replace("/",""),parentMenuID:a.menuID},this.generateBreadcrumbs(e,t)}}},async generateBreadcrumbs(e,t){try{if(t){const a={menuName:t.menuName,route:`/${t.screenID}`,menuIconID:t.menuIconID};if(this.breadcrumbs.unshift(a),t.parentMenuID){const a=e.find((e=>e.menuID==t.parentMenuID));a&&this.generateBreadcrumbs(e,a)}}}catch(a){console.log(a)}},matchScreenID(e,t){if(e.length!==t.length)return!1;for(let a=0;a<e.length-1;a++)if(e[a]!==t[a])return!1;return!0},matchApprovalModeScreenID(e,t){if(e.length!==t.length)return!1;for(let a=0;a<e.length-5;a++)if(e[a]!==t[a])return!1;return!0}}}),i()}catch(u){i(u)}}))},1524:function(e,t,a){a.a(e,(async function(e,i){try{var n=a(66252),s=a(21638),r=a(42615),o=a(90121),u=e([o]);o=(u.then?(await u)():u)[0],t["Z"]=(0,n.aZ)({name:"apm204001sc00",components:{pagination:s.Z,BreadCrumb:o.Z},data(){const e=[{columnName:"No."},{columnName:"View"},{columnName:"Customer No"},{columnName:"Customer Name"},{columnName:"Master User ID"},{columnName:"Master User Name"},{columnName:"Authorization Line Setup Count"},{columnName:"Authorization Line Option"},{columnName:"Authorization Line Policy Code"},{columnName:"Authorization Line Role / Person"}];return{headers:e,dataTable:[],totalCount:0,startingIndex:1,isResetPage:!1,search:{customerNo:"",customerName:"",authorizationLinePolicyTypeCode:"",pageNumber:1,pageSize:r.IV},myObj:{LimitTypeCode:[],LanguageCode:[],StatusCode:[]}}},created(){this.requestData(!1)},computed:{authorizationLinePolicyTypeCode(){let e=[];return this.$store.state.CommonCodeModule.commonCode.AuthorizationLinePolicyTypeCode.filter((t=>{"03"!=t.key&&e.push(t)})),e}},methods:{async requestData(e){const t={authorizationLinePolicyTypeCode:this.search.authorizationLinePolicyTypeCode,customerName:this.search.customerName,customerNo:this.search.customerNo,pageNumber:e?this.search.pageNumber=1:this.search.pageNumber,pageSize:this.search.pageSize};e&&(this.isResetPage=!0),await this.$request.getRequest("APM20400111",t,!1).then((e=>{if(e.header.result){let t;this.totalCount=e.body.totalCount,t=e.body.list,this.dataTable=t.map((e=>({authLineCount:e.authLineCount,authorizationLineAssignTypeCode:e.authorizationLineAssignTypeCode,authorizationLinePolicyTypeCode:e.authorizationLinePolicyTypeCode,customerName:e.customerName,customerNo:e.customerNo,masterUserID:e.masterUserID,masterUserName:e.userName,subscriptionApprovalTypeCode:e.subscriptionApprovalTypeCode}))),this.totalCount=e.body.totalCount}}))},refreshSearch(){this.search.pageSize=r.IV,this.search.customerName="",this.search.customerNo="",this.search.authorizationLinePolicyTypeCode="",this.search.pageNumber=1,this.isResetPage=!0,this.requestData(!0)},handleSearch(){""==this.search.customerName&&""==this.search.customerNo&&""==this.search.authorizationLinePolicyTypeCode?(this.isResetPage=!0,this.search.pageNumber=1,this.search.pageSize=r.IV,this.requestData(!0)):this.requestData(!0)},handleClickDetail(e){this.$router.push({path:"APM204001SC01",query:{customerNo:e.customerNo,masterUserID:e.masterUserID}})},handlePagination(e){this.isResetPage=!1,this.search.pageNumber=e,this.requestData(!1)},handleStartingIndex(e){this.startingIndex=e}}}),i()}catch(c){i(c)}}))},90121:function(e,t,a){a.a(e,(async function(e,i){try{var n=a(55864),s=a(44104),r=(a(55241),a(83744)),o=e([s]);s=(o.then?(await o)():o)[0];const u=(0,r.Z)(s.Z,[["render",n.s],["__scopeId","data-v-6668b2f2"]]);t["Z"]=u,i()}catch(u){i(u)}}))},21638:function(e,t,a){a.d(t,{Z:function(){return g}});var i=a(66252),n=a(3577);const s=e=>((0,i.dD)("data-v-3886d7e2"),e=e(),(0,i.Cn)(),e),r={class:"grid_footer"},o={key:0,class:"grid_option"},u={class:"list_count"},c=s((()=>(0,i._)("dd",null,[(0,i._)("span",null," item(s)")],-1))),l={key:1,class:"paginaton"};function h(e,t){const a=(0,i.up)("ion-button");return(0,i.wg)(),(0,i.iD)("div",r,[e.showTotal?((0,i.wg)(),(0,i.iD)("div",o,[(0,i._)("div",u,[(0,i._)("dl",null,[(0,i._)("dt",null,[(0,i._)("strong",null,(0,n.zw)(e.$util.addComma(e.totalCount,3)),1)]),c])])])):(0,i.kq)("",!0),e.perPage>0&&e.totalCount>0&&e.totalCount>e.perPage?((0,i.wg)(),(0,i.iD)("div",l,[(0,i.Wm)(a,{class:"btn_page_prev",onClick:e.backwardPagination,disabled:e.isDisabledPrev},{default:(0,i.w5)((()=>[(0,i.Uk)("Prev")])),_:1},8,["onClick","disabled"]),(0,i._)("ul",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.totalPagination,(t=>((0,i.wg)(),(0,i.iD)("li",null,[(0,i.Wm)(a,{class:(0,n.C_)([e.currentPage==t?"on":""]),onClick:a=>e.onClickPagination(t),disabled:"..."===t},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(t),1)])),_:2},1032,["class","onClick","disabled"])])))),256))]),(0,i.Wm)(a,{class:"btn_page_next",onClick:e.forwardPagination,disabled:e.isDisabledNext},{default:(0,i.w5)((()=>[(0,i.Uk)("Next")])),_:1},8,["onClick","disabled"])])):(0,i.kq)("",!0)])}var d=(0,i.aZ)({name:"pagination",component:{},props:{totalCount:{type:Number,default:0,required:!0},perPage:{type:Number,default:0,required:!0},maxPageShow:{type:Number,default:7},resetPage:{type:Boolean,default:!1,required:!0},showTotal:{type:Boolean,default:!0,required:!1}},emits:["get-page-number","get-starting-index"],data(){return{totalPagination:[],endPagination:0,currentPage:1}},computed:{isDisabledPrev(){return 1==this.currentPage},isDisabledNext(){return this.currentPage==this.endPagination}},watch:{totalCount:{handler(){this.endPagination=this.dividePage(),this.findPagination(this.currentPage),this.currentPage=1,this.$emit("get-starting-index",1)},deep:!0},resetPage(e){e&&(this.currentPage=1,this.$emit("get-starting-index",1),this.findPagination(this.currentPage))}},mounted(){this.endPagination=this.dividePage(),this.findPagination(this.currentPage)},methods:{async findPagination(e){this.currentPage=e;const t=[];if(this.endPagination-this.currentPage>=this.maxPageShow){t.push(this.currentPage.toString());for(let a=0;a<this.maxPageShow-4;a++)t.push((e+a+1).toString());t.push("..."),t.push((this.endPagination-1).toString()),t.push(this.endPagination.toString())}else if(this.endPagination-this.maxPageShow+1<1)for(let a=1;a<=this.endPagination;a++)t.push(a.toString());else for(let a=this.endPagination-this.maxPageShow+1;a<=this.endPagination;a++)t.push(a.toString());return this.totalPagination=t,e},dividePage(){const e=this.totalCount/this.perPage;if(e%1!=0){const t=e.toString().split(".");return(0,n.He)(t[0])+1}return(0,n.He)(e.toFixed())},onClickPagination(e){this.currentPage!=parseInt(e)&&(this.currentPage=parseInt(e),this.findPagination(parseInt(e)),this.$emit("get-page-number",Number(e)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1))},async backwardPagination(){let e=10==this.currentPage?9:10,t=this.currentPage-e;t<1?(t=1,await this.findPagination(t).then((e=>{this.$emit("get-page-number",Number(e)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1)}))):await this.findPagination(t).then((e=>{this.$emit("get-page-number",Number(e)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1)}))},async forwardPagination(){let e=1==this.currentPage?9:10,t=this.currentPage+e;t>Number(this.totalPagination.slice(-1))?(t=Number(this.totalPagination.slice(-1)),await this.findPagination(t).then((e=>{this.$emit("get-page-number",Number(e)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1)}))):await this.findPagination(t).then((e=>{this.$emit("get-page-number",Number(e)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1)}))},async firstPagination(){await this.findPagination(1).then((e=>{this.$emit("get-page-number",Number(e)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1)}))},async lastPagination(){await this.findPagination(this.endPagination).then((e=>{this.$emit("get-page-number",Number(e)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1)}))}}}),m=a(83744);const p=(0,m.Z)(d,[["render",h],["__scopeId","data-v-3886d7e2"]]);var g=p},97505:function(e,t,a){a.a(e,(async function(e,i){try{a.r(t);var n=a(54527),s=a(51483),r=(a(78693),a(83744)),o=e([s]);s=(o.then?(await o)():o)[0];const u=(0,r.Z)(s.Z,[["render",n.s],["__scopeId","data-v-61d75fd0"]]);t["default"]=u,i()}catch(u){i(u)}}))},55241:function(){},78693:function(){},44104:function(e,t,a){a.a(e,(async function(e,i){try{a.d(t,{Z:function(){return n.Z}});var n=a(28183),s=e([n]);n=(s.then?(await s)():s)[0],i()}catch(r){i(r)}}))},51483:function(e,t,a){a.a(e,(async function(e,i){try{a.d(t,{Z:function(){return n.Z}});var n=a(1524),s=e([n]);n=(s.then?(await s)():s)[0],i()}catch(r){i(r)}}))},55864:function(e,t,a){a.d(t,{s:function(){return r}});var i=a(66252),n=a(3577);const s={class:"bread_crumb"};function r(e,t){const a=(0,i.up)("ion-label");return(0,i.wg)(),(0,i.iD)("div",s,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.breadcrumbs,((t,s)=>((0,i.wg)(),(0,i.iD)(i.HY,{key:s},[t.menuIconID&&0==s?((0,i.wg)(),(0,i.iD)("span",{key:0,class:(0,n.C_)(["icon_menu",[t.menuIconID]])},null,2)):(0,i.kq)("",!0),""==t.route||"/"==t.route?((0,i.wg)(),(0,i.j4)(a,{key:1},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(e.$t(`${t.menuName}`)),1)])),_:2},1024)):(0,i.kq)("",!0),""!=t.route&&"/"!=t.route?((0,i.wg)(),(0,i.j4)(a,{key:2,onClick:a=>e.pathDriver(t.route,e.queryData)},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(e.$t(`${t.menuName}`)),1)])),_:2},1032,["onClick"])):(0,i.kq)("",!0)],64)))),128))])}},54527:function(e,t,a){a.d(t,{s:function(){return x}});var i=a(66252),n=a(3577),s=a(49963);const r=e=>((0,i.dD)("data-v-61d75fd0"),e=e(),(0,i.Cn)(),e),o={class:"contentWrap"},u={class:"title_name"},c={class:"cont"},l={class:"row gap"},h={class:"col-4"},d={class:"form01"},m={class:"inp_box"},p={class:"inp"},g={class:"col-4"},b={class:"form01"},P={class:"inp_box"},_={class:"inp"},f={class:"col-4"},y={class:"form01"},C={class:"footer_btn"},N={class:"right_side"},w={class:"gridwrap no_grid_option"},D={class:"tableWrap"},S={class:"table01 fixed"},I=r((()=>(0,i._)("colgroup",null,[(0,i._)("col",{style:{width:"80px"}}),(0,i._)("col",{style:{width:"80px"}}),(0,i._)("col",{style:{width:"80px"}}),(0,i._)("col",{style:{width:"80px"}}),(0,i._)("col",{style:{width:"80px"}}),(0,i._)("col",{style:{width:"80px"}}),(0,i._)("col",{style:{width:"80px"}}),(0,i._)("col",{style:{width:"80px"}}),(0,i._)("col"),(0,i._)("col")],-1))),$={class:"sticky_head"},v={class:"tbody_section"},z=["id","onClick"],k={key:0,class:"no_data"};function x(e,t){const a=(0,i.up)("BreadCrumb"),r=(0,i.up)("ion-input"),x=(0,i.up)("ion-select-option"),L=(0,i.up)("ion-select"),T=(0,i.up)("ion-button"),B=(0,i.up)("pagination");return(0,i.wg)(),(0,i.iD)("div",o,[(0,i.Wm)(a),(0,i._)("h1",u,(0,n.zw)(e.$t("apm204001sc00.company_authorization_line_list")),1),(0,i._)("div",c,[(0,i._)("div",l,[(0,i._)("div",h,[(0,i._)("dl",d,[(0,i._)("dt",null,(0,n.zw)(e.$t("common.customerNo")),1),(0,i._)("dd",null,[(0,i._)("div",m,[(0,i._)("div",p,[(0,i.Wm)(r,{class:"",placeholder:e.$t("apm204001sc00.placeholder.customer_no"),type:"text",modelValue:e.search.customerNo,"onUpdate:modelValue":t[0]||(t[0]=t=>e.search.customerNo=t),onKeyup:t[1]||(t[1]=(0,s.D2)((t=>e.requestData(!0)),["enter"]))},null,8,["placeholder","modelValue"])])])])])]),(0,i._)("div",g,[(0,i._)("dl",b,[(0,i._)("dt",null,(0,n.zw)(e.$t("common.customerName")),1),(0,i._)("dd",null,[(0,i._)("div",P,[(0,i._)("div",_,[(0,i.Wm)(r,{class:"",placeholder:e.$t("apm204001sc00.placeholder.customer_name"),type:"text",modelValue:e.search.customerName,"onUpdate:modelValue":t[2]||(t[2]=t=>e.search.customerName=t),onKeyup:t[3]||(t[3]=(0,s.D2)((t=>e.requestData(!0)),["enter"]))},null,8,["placeholder","modelValue"])])])])])]),(0,i._)("div",f,[(0,i._)("dl",y,[(0,i._)("dt",null,(0,n.zw)(e.$t("apm204001sc00.authorization_line_policy_cption_code")),1),(0,i._)("dd",null,[(0,i.Wm)(L,{interface:"popover",interfaceOptions:{size:"cover"},class:"",placeholder:e.$t("apm204001sc00.placeholder.select"),modelValue:e.search.authorizationLinePolicyTypeCode,"onUpdate:modelValue":t[4]||(t[4]=t=>e.search.authorizationLinePolicyTypeCode=t),onKeyup:t[5]||(t[5]=(0,s.D2)((t=>e.requestData(!0)),["enter"]))},{default:(0,i.w5)((()=>[(0,i.Wm)(x,{value:""},{default:(0,i.w5)((()=>[(0,i.Uk)("All")])),_:1}),(0,i.Wm)(x,{value:"01"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)("01: IB Bank setup authorization line"))])),_:1}),(0,i.Wm)(x,{value:"02"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)("02: IB User setup authorization line"))])),_:1})])),_:1},8,["placeholder","modelValue"])])])])])]),(0,i._)("div",C,[(0,i._)("div",N,[(0,i.Wm)(T,{class:"btn01",onClick:t[6]||(t[6]=t=>e.requestData(!0))},{default:(0,i.w5)((()=>[(0,i._)("span",null,(0,n.zw)(e.$t("common.search")),1)])),_:1}),(0,i.Wm)(T,{class:"btn_refresh",onClick:t[7]||(t[7]=t=>e.refreshSearch())})])]),(0,i._)("div",w,[(0,i._)("div",D,[(0,i._)("table",S,[I,(0,i._)("thead",$,[(0,i._)("tr",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.headers,(e=>((0,i.wg)(),(0,i.iD)("th",null,[(0,i._)("span",null,(0,n.zw)(e.columnName),1)])))),256))])]),(0,i._)("tbody",v,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.dataTable,((t,a)=>((0,i.wg)(),(0,i.iD)("tr",{id:`row-${e.startingIndex+a}`,onClick:t=>e.$util.rowFocus(`row-${e.startingIndex+a}`)},[(0,i._)("td",null,[(0,i._)("span",null,(0,n.zw)(e.startingIndex+a),1)]),(0,i._)("td",null,[(0,i.Wm)(T,{class:"btn_view",onClick:a=>e.handleClickDetail(t)},{default:(0,i.w5)((()=>[(0,i.Uk)("View")])),_:2},1032,["onClick"])]),(0,i._)("td",null,[(0,i._)("span",null,(0,n.zw)(t.customerNo),1)]),(0,i._)("td",null,[(0,i._)("span",null,(0,n.zw)(t.customerName),1)]),(0,i._)("td",null,[(0,i._)("span",null,(0,n.zw)(t.masterUserID),1)]),(0,i._)("td",null,[(0,i._)("span",null,(0,n.zw)(t.masterUserName),1)]),(0,i._)("td",null,[(0,i._)("span",null,(0,n.zw)(t.authLineCount),1)]),(0,i._)("td",null,[(0,i._)("span",null,(0,n.zw)(e.$codeConverter.convertValue("SubscriptionApprovalTypeCode",t.subscriptionApprovalTypeCode)),1)]),(0,i._)("td",null,[(0,i._)("span",null,(0,n.zw)(e.$codeConverter.convertValue("AuthorizationLinePolicyTypeCode",t.authorizationLinePolicyTypeCode)),1)]),(0,i._)("td",null,[(0,i._)("span",null,(0,n.zw)(e.$codeConverter.convertValue("AuthorizationLineAssignTypeCode",t.authorizationLineAssignTypeCode)),1)])],8,z)))),256))])]),0===e.totalCount?((0,i.wg)(),(0,i.iD)("div",k,[(0,i._)("p",null,(0,n.zw)(e.$t("common.no_data")),1)])):(0,i.kq)("",!0)]),(0,i.Wm)(B,{totalCount:e.totalCount,perPage:e.search.pageSize,resetPage:e.isResetPage,onGetPageNumber:e.handlePagination,onGetStartingIndex:e.handleStartingIndex},null,8,["totalCount","perPage","resetPage","onGetPageNumber","onGetStartingIndex"])])])}}}]);
//# sourceMappingURL=7505.ab2fc709.js.map