"use strict";(self["webpackChunkbizMOB4Vue"]=self["webpackChunkbizMOB4Vue"]||[]).push([[6825],{28183:function(e,t,a){a.a(e,(async function(e,n){try{var s=a(66252),i=a(75080),r=a(72224),o=e([r]);r=(o.then?(await o)():o)[0],t["Z"]=(0,s.aZ)({props:{staticScreenName:{type:String,required:!1},queryData:{type:Array,required:!1}},data(){return{breadcrumbs:[],menuList:[]}},async created(){setTimeout((()=>{this.renderMenuFromState(),this.getMenuList()}),100)},computed:{approvalType(){return this.$route.query.approvalType?this.$route.query.approvalType.toString():""}},watch:{staticScreenName(e){"/COM210001SC00"==this.$route.path&&(e&&(2==this.breadcrumbs.length?this.breadcrumbs:this.breadcrumbs.pop()),this.breadcrumbs.push({menuName:e,route:""}))}},methods:{pathDriver(e,t){if(""===this.approvalType){if(this.$route.path==e)return;t?this.$router.push({path:e,query:t}):this.$router.push(e)}},async renderMenuFromState(){return i.Z.getters.getMenuData},async getMenuList(){try{this.menuList=await this.renderMenuFromState(),this.menuList.length>0?(this.menuList=JSON.parse(JSON.stringify(this.menuList)).filter((e=>""!=e.parentMenuID.replace(/\s/g,""))),this.buildBreadcrumb(this.menuList,this.$route.path)):console.log("menu not yet rendered")}catch(e){console.log("Error rendering menu:",e)}},async buildBreadcrumb(e,t){const a=e.find((e=>`/${e.screenID}`==t));if(a){if(this.generateBreadcrumbs(e,a),"/ICM201001SC00"==this.$route.path){const t=e.find((e=>"ICM201001SC00"==e.screenID));r.u.setData("SpecialScreenID",JSON.stringify(t))}}else{if("/CIB202003SC00"==this.$route.path){let t,a;a=e.find((e=>"CIB202002SC00"==e.screenID)),t={menuName:this.staticScreenName?this.staticScreenName:"",screenID:this.$route.path.replace("/",""),parentMenuID:a.menuID,menuID:"1"},this.generateBreadcrumbs(e,t)}const t=this.$route.path.replace("/","");let a=[];this.menuList.forEach((e=>{a.push(e.screenID)})),a.forEach((a=>{let n;if(this.matchScreenID(a,t)&&(n=e.find((e=>`${e.screenID}`==a)),n&&this.generateBreadcrumbs(e,n)),""!==this.approvalType&&("VBA202002SC00"==t||"CIB201003SC00"==t)&&this.matchApprovalModeScreenID(a,t)){const t=e.find((e=>`${e.screenID}`==a));this.generateBreadcrumbs(e,t)}}));let n=t.charAt(t.length-1);if("1"===n){let e={menuName:this.staticScreenName?this.staticScreenName:"",route:`/${t}`};this.breadcrumbs.push(e),r.u.setData("TempBreadCrumb",JSON.stringify(e))}else if("2"===n)if("/COM211001SC02"==this.$route.path)this.breadcrumbs.push({menuName:this.staticScreenName?this.staticScreenName:"",route:`/${t}`});else{let e=JSON.parse(await r.u.getData("TempBreadCrumb"));this.breadcrumbs.push(e,{menuName:this.staticScreenName?this.staticScreenName:"",route:`/${t}`})}else if("/CIB202003SC00"!=this.$route.path&&"/PUM202002SC00"!=this.$route.path){let a=this.$router.options.history.state.back,n=a.includes("/")?a.replace("/",""):a;const s=await e.find((e=>`${e.screenID}`==n));this.breadcrumbs.push({menuName:this.staticScreenName?this.staticScreenName:"",route:`/${t}`}),this.generateBreadcrumbs(e,s)}if("/ICM201002SC01"==this.$route.path){this.breadcrumbs=[];let a=JSON.parse(await r.u.getData("SpecialScreenID"));this.breadcrumbs.push({menuName:this.staticScreenName?this.staticScreenName:"",route:`/${t}`}),this.generateBreadcrumbs(e,a)}else if("/CIB202003SC01"==this.$route.path){let a,n;this.breadcrumbs=[],n=e.find((e=>"CIB202002SC00"==e.screenID)),a={menuName:this.$t("cib202003sc00.sub_user_list"),screenID:"CIB202003SC00",parentMenuID:n.menuID},this.breadcrumbs.push({menuName:this.staticScreenName?this.staticScreenName:"",route:`/${t}`}),this.generateBreadcrumbs(e,a)}else if("/PUM202002SC00"==this.$route.path){let t,a;a=e.find((e=>"COM200001SC00"==e.screenID)),t={menuName:this.staticScreenName?this.staticScreenName:"",screenID:this.$route.path.replace("/",""),parentMenuID:a.menuID},this.generateBreadcrumbs(e,t)}}},async generateBreadcrumbs(e,t){try{if(t){const a={menuName:t.menuName,route:`/${t.screenID}`,menuIconID:t.menuIconID};if(this.breadcrumbs.unshift(a),t.parentMenuID){const a=e.find((e=>e.menuID==t.parentMenuID));a&&this.generateBreadcrumbs(e,a)}}}catch(a){console.log(a)}},matchScreenID(e,t){if(e.length!==t.length)return!1;for(let a=0;a<e.length-1;a++)if(e[a]!==t[a])return!1;return!0},matchApprovalModeScreenID(e,t){if(e.length!==t.length)return!1;for(let a=0;a<e.length-5;a++)if(e[a]!==t[a])return!1;return!0}}}),n()}catch(c){n(c)}}))},35495:function(e,t,a){a.a(e,(async function(e,n){try{var s=a(66252),i=a(21638),r=a(42615),o=a(90121),c=e([o]);o=(c.then?(await c)():c)[0],t["Z"]=(0,s.aZ)({name:"com211001sc00",components:{Pagination:i.Z,BreadCrumb:o.Z},data(){const e=[{columnName:this.$t("com211001sc00.column.no")},{columnName:this.$t("com211001sc00.column.view")},{columnName:this.$t("com211001sc00.column.value_of_code")},{columnName:this.$t("com211001sc00.column.code_name")},{columnName:this.$t("com211001sc00.column.column_name")},{columnName:this.$t("com211001sc00.column.status_code")},{columnName:this.$t("com211001sc00.column.standard_code")},{columnName:this.$t("com211001sc00.column.data_type")},{columnName:this.$t("com211001sc00.column.data_length")},{columnName:this.$t("com211001sc00.column.description")}],t=[{key:"01",value:"Active"},{key:"02",value:"Inactive"}],a={standardCodeDomainNo:"",standardCodeKorDomainNo:"",businessCommonStatusCode:""},n=[],s=!1,i=1,o=1,c=0,u=r.IV;return{header:e,commonCodeList:n,statusCode:t,searchForm:a,totalItems:c,currentPage:o,pageSize:u,startingIndex:i,isReset:s}},mounted(){this.requestCommonCodeList()},computed:{covertCodeValue(){return(e,t)=>`${t} : `+this.$codeConverter.convertValue(`${e}`,`${t}`)}},methods:{async requestCommonCodeList(){const e={pageNumber:this.currentPage,pageSize:this.pageSize,businessCommonStatusCode:this.searchForm.businessCommonStatusCode,standardCodeKorDomainNo:this.searchForm.standardCodeKorDomainNo,standardCodeDomainNo:this.searchForm.standardCodeDomainNo},t=await this.$request.getRequest("COM21100111",e,!1);this.commonCodeList=t?.body.list.map((e=>({standardCodeKorDomainNo:e.standardCodeKorDomainNo,standardCodeDomainNo:e.standardCodeDomainNo,businessCommonStatusCode:this.covertCodeValue("BusinessCommonStatusCode",e.businessCommonStatusCode),standardCodeDomainDesc:e.standardCodeDomainDesc,standardCodeDomainName:e.standardCodeDomainName,codeDataLengthContent:e.codeDataLengthContent,codeDataTypeContent:e.codeDataTypeContent,standardCodeValue:e.standardCodeValue,standardCodeValueDesc:e.standardCodeValueDesc}))),this.totalItems=t.body.totalCount},handleView(e){this.$router.push({path:"COM211001SC01",query:{type:"edit",standardCodeDomainName:e.standardCodeDomainName}})},handleValueOfCode(e){this.$router.push({path:"COM211001SC02",query:{standardCodeDomainName:e.standardCodeDomainName,codeDataLengthContent:e.codeDataLengthContent,standardCodeDomainNo:e.standardCodeDomainNo}})},handleActionClick(e){switch(e){case"register":this.$router.push({path:"COM211001SC01",query:{type:"register"}});break;case"search":this.currentPage>1?(this.currentPage=1,this.isReset=!0,this.requestCommonCodeList()):this.requestCommonCodeList();break;default:this.isReset=!0,this.currentPage=1,this.searchForm.standardCodeKorDomainNo="",this.searchForm.standardCodeDomainNo="",this.searchForm.businessCommonStatusCode="",this.requestCommonCodeList();break}},handlePagination(e){this.isReset=!1,this.currentPage=e,this.requestCommonCodeList()},handleStartingIndex(e){this.startingIndex=e}}}),n()}catch(u){n(u)}}))},90121:function(e,t,a){a.a(e,(async function(e,n){try{var s=a(55864),i=a(44104),r=(a(55241),a(83744)),o=e([i]);i=(o.then?(await o)():o)[0];const c=(0,r.Z)(i.Z,[["render",s.s],["__scopeId","data-v-6668b2f2"]]);t["Z"]=c,n()}catch(c){n(c)}}))},21638:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(66252),s=a(3577);const i=e=>((0,n.dD)("data-v-3886d7e2"),e=e(),(0,n.Cn)(),e),r={class:"grid_footer"},o={key:0,class:"grid_option"},c={class:"list_count"},u=i((()=>(0,n._)("dd",null,[(0,n._)("span",null," item(s)")],-1))),d={key:1,class:"paginaton"};function l(e,t){const a=(0,n.up)("ion-button");return(0,n.wg)(),(0,n.iD)("div",r,[e.showTotal?((0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("div",c,[(0,n._)("dl",null,[(0,n._)("dt",null,[(0,n._)("strong",null,(0,s.zw)(e.$util.addComma(e.totalCount,3)),1)]),u])])])):(0,n.kq)("",!0),e.perPage>0&&e.totalCount>0&&e.totalCount>e.perPage?((0,n.wg)(),(0,n.iD)("div",d,[(0,n.Wm)(a,{class:"btn_page_prev",onClick:e.backwardPagination,disabled:e.isDisabledPrev},{default:(0,n.w5)((()=>[(0,n.Uk)("Prev")])),_:1},8,["onClick","disabled"]),(0,n._)("ul",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.totalPagination,(t=>((0,n.wg)(),(0,n.iD)("li",null,[(0,n.Wm)(a,{class:(0,s.C_)([e.currentPage==t?"on":""]),onClick:a=>e.onClickPagination(t),disabled:"..."===t},{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)(t),1)])),_:2},1032,["class","onClick","disabled"])])))),256))]),(0,n.Wm)(a,{class:"btn_page_next",onClick:e.forwardPagination,disabled:e.isDisabledNext},{default:(0,n.w5)((()=>[(0,n.Uk)("Next")])),_:1},8,["onClick","disabled"])])):(0,n.kq)("",!0)])}var m=(0,n.aZ)({name:"pagination",component:{},props:{totalCount:{type:Number,default:0,required:!0},perPage:{type:Number,default:0,required:!0},maxPageShow:{type:Number,default:7},resetPage:{type:Boolean,default:!1,required:!0},showTotal:{type:Boolean,default:!0,required:!1}},emits:["get-page-number","get-starting-index"],data(){return{totalPagination:[],endPagination:0,currentPage:1}},computed:{isDisabledPrev(){return 1==this.currentPage},isDisabledNext(){return this.currentPage==this.endPagination}},watch:{totalCount:{handler(){this.endPagination=this.dividePage(),this.findPagination(this.currentPage),this.currentPage=1,this.$emit("get-starting-index",1)},deep:!0},resetPage(e){e&&(this.currentPage=1,this.$emit("get-starting-index",1),this.findPagination(this.currentPage))}},mounted(){this.endPagination=this.dividePage(),this.findPagination(this.currentPage)},methods:{async findPagination(e){this.currentPage=e;const t=[];if(this.endPagination-this.currentPage>=this.maxPageShow){t.push(this.currentPage.toString());for(let a=0;a<this.maxPageShow-4;a++)t.push((e+a+1).toString());t.push("..."),t.push((this.endPagination-1).toString()),t.push(this.endPagination.toString())}else if(this.endPagination-this.maxPageShow+1<1)for(let a=1;a<=this.endPagination;a++)t.push(a.toString());else for(let a=this.endPagination-this.maxPageShow+1;a<=this.endPagination;a++)t.push(a.toString());return this.totalPagination=t,e},dividePage(){const e=this.totalCount/this.perPage;if(e%1!=0){const t=e.toString().split(".");return(0,s.He)(t[0])+1}return(0,s.He)(e.toFixed())},onClickPagination(e){this.currentPage!=parseInt(e)&&(this.currentPage=parseInt(e),this.findPagination(parseInt(e)),this.$emit("get-page-number",Number(e)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1))},async backwardPagination(){let e=10==this.currentPage?9:10,t=this.currentPage-e;t<1?(t=1,await this.findPagination(t).then((e=>{this.$emit("get-page-number",Number(e)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1)}))):await this.findPagination(t).then((e=>{this.$emit("get-page-number",Number(e)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1)}))},async forwardPagination(){let e=1==this.currentPage?9:10,t=this.currentPage+e;t>Number(this.totalPagination.slice(-1))?(t=Number(this.totalPagination.slice(-1)),await this.findPagination(t).then((e=>{this.$emit("get-page-number",Number(e)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1)}))):await this.findPagination(t).then((e=>{this.$emit("get-page-number",Number(e)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1)}))},async firstPagination(){await this.findPagination(1).then((e=>{this.$emit("get-page-number",Number(e)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1)}))},async lastPagination(){await this.findPagination(this.endPagination).then((e=>{this.$emit("get-page-number",Number(e)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1)}))}}}),h=a(83744);const g=(0,h.Z)(m,[["render",l],["__scopeId","data-v-3886d7e2"]]);var p=g},96825:function(e,t,a){a.a(e,(async function(e,n){try{a.r(t);var s=a(74664),i=a(40595),r=(a(41770),a(83744)),o=e([i]);i=(o.then?(await o)():o)[0];const c=(0,r.Z)(i.Z,[["render",s.s],["__scopeId","data-v-71f03a7c"]]);t["default"]=c,n()}catch(c){n(c)}}))},55241:function(){},41770:function(){},44104:function(e,t,a){a.a(e,(async function(e,n){try{a.d(t,{Z:function(){return s.Z}});var s=a(28183),i=e([s]);s=(i.then?(await i)():i)[0],n()}catch(r){n(r)}}))},40595:function(e,t,a){a.a(e,(async function(e,n){try{a.d(t,{Z:function(){return s.Z}});var s=a(35495),i=e([s]);s=(i.then?(await i)():i)[0],n()}catch(r){n(r)}}))},55864:function(e,t,a){a.d(t,{s:function(){return r}});var n=a(66252),s=a(3577);const i={class:"bread_crumb"};function r(e,t){const a=(0,n.up)("ion-label");return(0,n.wg)(),(0,n.iD)("div",i,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.breadcrumbs,((t,i)=>((0,n.wg)(),(0,n.iD)(n.HY,{key:i},[t.menuIconID&&0==i?((0,n.wg)(),(0,n.iD)("span",{key:0,class:(0,s.C_)(["icon_menu",[t.menuIconID]])},null,2)):(0,n.kq)("",!0),""==t.route||"/"==t.route?((0,n.wg)(),(0,n.j4)(a,{key:1},{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)(e.$t(`${t.menuName}`)),1)])),_:2},1024)):(0,n.kq)("",!0),""!=t.route&&"/"!=t.route?((0,n.wg)(),(0,n.j4)(a,{key:2,onClick:a=>e.pathDriver(t.route,e.queryData)},{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)(e.$t(`${t.menuName}`)),1)])),_:2},1032,["onClick"])):(0,n.kq)("",!0)],64)))),128))])}},74664:function(e,t,a){a.d(t,{s:function(){return F}});var n=a(66252),s=a(3577),i=a(49963);const r=e=>((0,n.dD)("data-v-71f03a7c"),e=e(),(0,n.Cn)(),e),o={class:"contentWrap"},c={class:"title_name"},u={class:"cont"},d={class:"row gap"},l={class:"col"},m={class:"form01"},h={class:"inp_box"},g={class:"inp"},p={class:"col"},C={class:"form01"},_={class:"col"},b={class:"form01"},f={class:"inp_box"},D={class:"inp"},P={class:"footer_btn"},w={class:"right_side"},N={class:"gridwrap"},S={class:"grid_option"},y={class:"option"},$={class:"add_sm"},v={class:"tableWrap"},I={class:"table01 fixed"},k=r((()=>(0,n._)("colgroup",null,[(0,n._)("col",{style:{width:"80px"}}),(0,n._)("col",{style:{width:"80px"}}),(0,n._)("col",{style:{width:"80px"}}),(0,n._)("col",{style:{width:"80px"}}),(0,n._)("col",{style:{width:"80px"}}),(0,n._)("col",{style:{width:"80px"}}),(0,n._)("col",{style:{width:"80px"}}),(0,n._)("col",{style:{width:"80px"}}),(0,n._)("col",{style:{width:"80px"}}),(0,n._)("col")],-1))),x={class:"sticky_head"},z={class:"tbody_section"},M=["id","onClick"],B={class:"status"},q={class:"txt_left description"},V={key:0,class:"no_data"},L=r((()=>(0,n._)("p",null,"No Data",-1))),Z=[L];function F(e,t){const a=(0,n.up)("BreadCrumb"),r=(0,n.up)("ion-input"),L=(0,n.up)("ion-select-option"),F=(0,n.up)("ion-select"),O=(0,n.up)("ion-button"),K=(0,n.up)("Pagination");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n.Wm)(a),(0,n._)("h1",c,(0,s.zw)(e.$t("com211001sc00.common_code_list")),1),(0,n._)("div",u,[(0,n._)("div",d,[(0,n._)("div",l,[(0,n._)("dl",m,[(0,n._)("dt",null,(0,s.zw)(e.$t("com211001sc00.code_name")),1),(0,n._)("dd",null,[(0,n._)("div",h,[(0,n._)("div",g,[(0,n.Wm)(r,{placeholder:e.$t("com211001sc00.placeholder.enter_the_name"),modelValue:e.searchForm.standardCodeKorDomainNo,"onUpdate:modelValue":t[0]||(t[0]=t=>e.searchForm.standardCodeKorDomainNo=t),modelModifiers:{trim:!0},onKeyup:t[1]||(t[1]=(0,i.D2)((t=>e.handleActionClick("search")),["enter"]))},null,8,["placeholder","modelValue"])])])])])]),(0,n._)("div",p,[(0,n._)("dl",C,[(0,n._)("dt",null,(0,s.zw)(e.$t("com211001sc00.code_status")),1),(0,n._)("dd",null,[(0,n.Wm)(F,{interface:"popover",interfaceOptions:{size:"cover"},modelValue:e.searchForm.businessCommonStatusCode,"onUpdate:modelValue":t[2]||(t[2]=t=>e.searchForm.businessCommonStatusCode=t)},{default:(0,n.w5)((()=>[(0,n.Wm)(L,{value:""},{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)(e.$t("common.all")),1)])),_:1}),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.statusCode,(e=>((0,n.wg)(),(0,n.j4)(L,{value:e.key},{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)(e.key)+" : "+(0,s.zw)(e.value),1)])),_:2},1032,["value"])))),256))])),_:1},8,["modelValue"])])])]),(0,n._)("div",_,[(0,n._)("dl",b,[(0,n._)("dt",null,(0,s.zw)(e.$t("com211001sc00.column_name")),1),(0,n._)("dd",null,[(0,n._)("div",f,[(0,n._)("div",D,[(0,n.Wm)(r,{placeholder:e.$t("com211001sc00.placeholder.enter_the_name"),modelValue:e.searchForm.standardCodeDomainNo,"onUpdate:modelValue":t[3]||(t[3]=t=>e.searchForm.standardCodeDomainNo=t),modelModifiers:{trim:!0},onKeyup:t[4]||(t[4]=(0,i.D2)((t=>e.handleActionClick("search")),["enter"]))},null,8,["placeholder","modelValue"])])])])])])]),(0,n._)("div",P,[(0,n._)("div",w,[(0,n.Wm)(O,{onClick:t[5]||(t[5]=t=>e.handleActionClick("search")),class:"btn01"},{default:(0,n.w5)((()=>[(0,n._)("span",null,(0,s.zw)(e.$t("common.search")),1)])),_:1}),(0,n.Wm)(O,{onClick:t[6]||(t[6]=t=>e.handleActionClick("reset")),class:"btn_refresh"})])]),(0,n._)("div",N,[(0,n._)("div",S,[(0,n._)("div",y,[(0,n.Wm)(O,{onClick:t[7]||(t[7]=t=>e.handleActionClick("register")),class:"btn02 btn_sm btn_ico"},{default:(0,n.w5)((()=>[(0,n._)("span",$,(0,s.zw)(e.$t("common.register")),1)])),_:1})])]),(0,n._)("div",v,[(0,n._)("table",I,[k,(0,n._)("thead",x,[(0,n._)("tr",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.header,(e=>((0,n.wg)(),(0,n.iD)("th",null,[(0,n._)("span",null,(0,s.zw)(e.columnName),1)])))),256))])]),(0,n._)("tbody",z,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.commonCodeList,((t,a)=>((0,n.wg)(),(0,n.iD)("tr",{id:`row-${e.startingIndex+a}`,onClick:t=>e.$util.rowFocus(`row-${e.startingIndex+a}`)},[(0,n._)("td",null,[(0,n._)("span",null,(0,s.zw)(e.startingIndex+a),1)]),(0,n._)("td",null,[(0,n.Wm)(O,{class:"btn_view",onClick:a=>e.handleView(t)},{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)(e.$t("com211001sc00.column.view")),1)])),_:2},1032,["onClick"])]),(0,n._)("td",null,[(0,n.Wm)(O,{class:"btn_view",onClick:a=>e.handleValueOfCode(t)},{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)(e.$t("com211001sc00.column.view")),1)])),_:2},1032,["onClick"])]),(0,n._)("td",null,[(0,n._)("span",null,(0,s.zw)(t.standardCodeKorDomainNo),1)]),(0,n._)("td",null,[(0,n._)("span",null,(0,s.zw)(t.standardCodeDomainNo),1)]),(0,n._)("td",null,[(0,n._)("span",B,(0,s.zw)(t.businessCommonStatusCode),1)]),(0,n._)("td",null,[(0,n._)("span",null,(0,s.zw)(t.standardCodeDomainName),1)]),(0,n._)("td",null,[(0,n._)("span",null,(0,s.zw)(t.codeDataTypeContent),1)]),(0,n._)("td",null,[(0,n._)("span",null,(0,s.zw)(t.codeDataLengthContent),1)]),(0,n._)("td",q,[(0,n._)("span",null,(0,s.zw)(t.standardCodeDomainDesc),1)])],8,M)))),256))])]),0===e.totalItems?((0,n.wg)(),(0,n.iD)("div",V,Z)):(0,n.kq)("",!0)]),(0,n.Wm)(K,{totalCount:e.totalItems,perPage:e.pageSize,onGetPageNumber:e.handlePagination,resetPage:e.isReset,onGetStartingIndex:e.handleStartingIndex},null,8,["totalCount","perPage","onGetPageNumber","resetPage","onGetStartingIndex"])])])])}}}]);
//# sourceMappingURL=6825.817d845b.js.map