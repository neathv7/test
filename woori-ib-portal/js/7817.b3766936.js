"use strict";(self["webpackChunkbizMOB4Vue"]=self["webpackChunkbizMOB4Vue"]||[]).push([[7817],{28183:function(e,t,a){a.a(e,(async function(e,i){try{var r=a(66252),n=a(75080),s=a(72224),u=e([s]);s=(u.then?(await u)():u)[0],t["Z"]=(0,r.aZ)({props:{staticScreenName:{type:String,required:!1},queryData:{type:Array,required:!1}},data(){return{breadcrumbs:[],menuList:[]}},async created(){setTimeout((()=>{this.renderMenuFromState(),this.getMenuList()}),100)},computed:{approvalType(){return this.$route.query.approvalType?this.$route.query.approvalType.toString():""}},watch:{staticScreenName(e){"/COM210001SC00"==this.$route.path&&(e&&(2==this.breadcrumbs.length?this.breadcrumbs:this.breadcrumbs.pop()),this.breadcrumbs.push({menuName:e,route:""}))}},methods:{pathDriver(e,t){if(""===this.approvalType){if(this.$route.path==e)return;t?this.$router.push({path:e,query:t}):this.$router.push(e)}},async renderMenuFromState(){return n.Z.getters.getMenuData},async getMenuList(){try{this.menuList=await this.renderMenuFromState(),this.menuList.length>0?(this.menuList=JSON.parse(JSON.stringify(this.menuList)).filter((e=>""!=e.parentMenuID.replace(/\s/g,""))),this.buildBreadcrumb(this.menuList,this.$route.path)):console.log("menu not yet rendered")}catch(e){console.log("Error rendering menu:",e)}},async buildBreadcrumb(e,t){const a=e.find((e=>`/${e.screenID}`==t));if(a){if(this.generateBreadcrumbs(e,a),"/ICM201001SC00"==this.$route.path){const t=e.find((e=>"ICM201001SC00"==e.screenID));s.u.setData("SpecialScreenID",JSON.stringify(t))}}else{if("/CIB202003SC00"==this.$route.path){let t,a;a=e.find((e=>"CIB202002SC00"==e.screenID)),t={menuName:this.staticScreenName?this.staticScreenName:"",screenID:this.$route.path.replace("/",""),parentMenuID:a.menuID,menuID:"1"},this.generateBreadcrumbs(e,t)}const t=this.$route.path.replace("/","");let a=[];this.menuList.forEach((e=>{a.push(e.screenID)})),a.forEach((a=>{let i;if(this.matchScreenID(a,t)&&(i=e.find((e=>`${e.screenID}`==a)),i&&this.generateBreadcrumbs(e,i)),""!==this.approvalType&&("VBA202002SC00"==t||"CIB201003SC00"==t)&&this.matchApprovalModeScreenID(a,t)){const t=e.find((e=>`${e.screenID}`==a));this.generateBreadcrumbs(e,t)}}));let i=t.charAt(t.length-1);if("1"===i){let e={menuName:this.staticScreenName?this.staticScreenName:"",route:`/${t}`};this.breadcrumbs.push(e),s.u.setData("TempBreadCrumb",JSON.stringify(e))}else if("2"===i)if("/COM211001SC02"==this.$route.path)this.breadcrumbs.push({menuName:this.staticScreenName?this.staticScreenName:"",route:`/${t}`});else{let e=JSON.parse(await s.u.getData("TempBreadCrumb"));this.breadcrumbs.push(e,{menuName:this.staticScreenName?this.staticScreenName:"",route:`/${t}`})}else if("/CIB202003SC00"!=this.$route.path&&"/PUM202002SC00"!=this.$route.path){let a=this.$router.options.history.state.back,i=a.includes("/")?a.replace("/",""):a;const r=await e.find((e=>`${e.screenID}`==i));this.breadcrumbs.push({menuName:this.staticScreenName?this.staticScreenName:"",route:`/${t}`}),this.generateBreadcrumbs(e,r)}if("/ICM201002SC01"==this.$route.path){this.breadcrumbs=[];let a=JSON.parse(await s.u.getData("SpecialScreenID"));this.breadcrumbs.push({menuName:this.staticScreenName?this.staticScreenName:"",route:`/${t}`}),this.generateBreadcrumbs(e,a)}else if("/CIB202003SC01"==this.$route.path){let a,i;this.breadcrumbs=[],i=e.find((e=>"CIB202002SC00"==e.screenID)),a={menuName:this.$t("cib202003sc00.sub_user_list"),screenID:"CIB202003SC00",parentMenuID:i.menuID},this.breadcrumbs.push({menuName:this.staticScreenName?this.staticScreenName:"",route:`/${t}`}),this.generateBreadcrumbs(e,a)}else if("/PUM202002SC00"==this.$route.path){let t,a;a=e.find((e=>"COM200001SC00"==e.screenID)),t={menuName:this.staticScreenName?this.staticScreenName:"",screenID:this.$route.path.replace("/",""),parentMenuID:a.menuID},this.generateBreadcrumbs(e,t)}}},async generateBreadcrumbs(e,t){try{if(t){const a={menuName:t.menuName,route:`/${t.screenID}`,menuIconID:t.menuIconID};if(this.breadcrumbs.unshift(a),t.parentMenuID){const a=e.find((e=>e.menuID==t.parentMenuID));a&&this.generateBreadcrumbs(e,a)}}}catch(a){console.log(a)}},matchScreenID(e,t){if(e.length!==t.length)return!1;for(let a=0;a<e.length-1;a++)if(e[a]!==t[a])return!1;return!0},matchApprovalModeScreenID(e,t){if(e.length!==t.length)return!1;for(let a=0;a<e.length-5;a++)if(e[a]!==t[a])return!1;return!0}}}),i()}catch(d){i(d)}}))},90121:function(e,t,a){a.a(e,(async function(e,i){try{var r=a(55864),n=a(44104),s=(a(55241),a(83744)),u=e([n]);n=(u.then?(await u)():u)[0];const d=(0,s.Z)(n.Z,[["render",r.s],["__scopeId","data-v-6668b2f2"]]);t["Z"]=d,i()}catch(d){i(d)}}))},15828:function(e,t,a){a.d(t,{Z:function(){return b}});var i=a(66252),r=a(3577);const n={key:0,class:"row gap detail_info"},s={key:0,class:"col"},u={class:"sub"},d={key:1,class:"col"},h={class:"sub"},o={key:2,class:"col"},c={class:"sub"};function l(e,t){return e.isShowRegister||e.isShowUpdate||e.isShowDelete?((0,i.wg)(),(0,i.iD)("div",n,[e.isShowRegister?((0,i.wg)(),(0,i.iD)("div",s,[(0,i._)("dl",null,[(0,i._)("dt",null,(0,r.zw)(e.$t("common.created_date")),1),(0,i._)("dd",null,[(0,i._)("strong",null,(0,r.zw)(e.createdEmployee),1),(0,i.Uk)(),(0,i._)("span",u,(0,r.zw)(e.createdDate),1)])])])):(0,i.kq)("",!0),e.isShowUpdate?((0,i.wg)(),(0,i.iD)("div",d,[(0,i._)("dl",null,[(0,i._)("dt",null,(0,r.zw)(e.$t("common.updated_date")),1),(0,i._)("dd",null,[(0,i._)("strong",null,(0,r.zw)(e.updatedEmployee),1),(0,i._)("span",h,(0,r.zw)(e.updatedDate),1)])])])):(0,i.kq)("",!0),e.isShowDelete?((0,i.wg)(),(0,i.iD)("div",o,[(0,i._)("dl",null,[(0,i._)("dt",null,(0,r.zw)(e.$t("common.deleted_date")),1),(0,i._)("dd",null,[(0,i._)("strong",null,(0,r.zw)(e.deletedEmployee),1),(0,i._)("span",c,(0,r.zw)(e.deletedDate),1)])])])):(0,i.kq)("",!0)])):(0,i.kq)("",!0)}var m=(0,i.aZ)({name:"modify-card",props:{data:{type:Object,required:!0}},computed:{createdEmployee(){return`${this.data.registerTellerName||""} ${this.data.registerTellerId?.trim()?`(${this.data.registerTellerId})`:""}`},createdDate(){return`${this.$datetime.formatStringToTime(this.data.registerTime?this.data.registerTime:"")} ${this.$datetime.formatStringToStringDate(this.data.registerDate?this.data.registerDate:"")}`},updatedEmployee(){return`${this.data.updatedTellerName||""} ${this.data.updatedTellerId?.trim()?`(${this.data.updatedTellerId})`:""}`},updatedDate(){return`${this.$datetime.formatStringToTime(this.data.updatedTime?this.data.updatedTime:"")} ${this.$datetime.formatStringToStringDate(this.data.updatedDate?this.data.updatedDate:"")}`},deletedEmployee(){return`${this.data.deleteTellerName||""} ${this.data.deleteTellerId?.trim()?`(${this.data.deleteTellerId})`:""}`},deletedDate(){return`${this.$datetime.formatStringToTime(this.data.deleteTime?this.data.deleteTime:"")} ${this.$datetime.formatStringToStringDate(this.data.deleteDate?this.data.deleteDate:"")}`},isShowRegister(){return!!(this.data.registerDate?.trim()||this.data.registerTime?.trim()||this.data.registerTellerId?.trim()||this.data.registerTellerName?.trim())},isShowUpdate(){return!!(this.data.updatedDate?.trim()||this.data.updatedTime?.trim()||this.data.updatedTellerId?.trim()||this.data.updatedTellerName?.trim())},isShowDelete(){return!!(this.data.deleteDate?.trim()||this.data.deleteTime?.trim()||this.data.deleteTellerId?.trim()||this.data.deleteTellerName?.trim())}}}),g=a(83744);const p=(0,g.Z)(m,[["render",l]]);var b=p},21638:function(e,t,a){a.d(t,{Z:function(){return p}});var i=a(66252),r=a(3577);const n=e=>((0,i.dD)("data-v-3886d7e2"),e=e(),(0,i.Cn)(),e),s={class:"grid_footer"},u={key:0,class:"grid_option"},d={class:"list_count"},h=n((()=>(0,i._)("dd",null,[(0,i._)("span",null," item(s)")],-1))),o={key:1,class:"paginaton"};function c(e,t){const a=(0,i.up)("ion-button");return(0,i.wg)(),(0,i.iD)("div",s,[e.showTotal?((0,i.wg)(),(0,i.iD)("div",u,[(0,i._)("div",d,[(0,i._)("dl",null,[(0,i._)("dt",null,[(0,i._)("strong",null,(0,r.zw)(e.$util.addComma(e.totalCount,3)),1)]),h])])])):(0,i.kq)("",!0),e.perPage>0&&e.totalCount>0&&e.totalCount>e.perPage?((0,i.wg)(),(0,i.iD)("div",o,[(0,i.Wm)(a,{class:"btn_page_prev",onClick:e.backwardPagination,disabled:e.isDisabledPrev},{default:(0,i.w5)((()=>[(0,i.Uk)("Prev")])),_:1},8,["onClick","disabled"]),(0,i._)("ul",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.totalPagination,(t=>((0,i.wg)(),(0,i.iD)("li",null,[(0,i.Wm)(a,{class:(0,r.C_)([e.currentPage==t?"on":""]),onClick:a=>e.onClickPagination(t),disabled:"..."===t},{default:(0,i.w5)((()=>[(0,i.Uk)((0,r.zw)(t),1)])),_:2},1032,["class","onClick","disabled"])])))),256))]),(0,i.Wm)(a,{class:"btn_page_next",onClick:e.forwardPagination,disabled:e.isDisabledNext},{default:(0,i.w5)((()=>[(0,i.Uk)("Next")])),_:1},8,["onClick","disabled"])])):(0,i.kq)("",!0)])}var l=(0,i.aZ)({name:"pagination",component:{},props:{totalCount:{type:Number,default:0,required:!0},perPage:{type:Number,default:0,required:!0},maxPageShow:{type:Number,default:7},resetPage:{type:Boolean,default:!1,required:!0},showTotal:{type:Boolean,default:!0,required:!1}},emits:["get-page-number","get-starting-index"],data(){return{totalPagination:[],endPagination:0,currentPage:1}},computed:{isDisabledPrev(){return 1==this.currentPage},isDisabledNext(){return this.currentPage==this.endPagination}},watch:{totalCount:{handler(){this.endPagination=this.dividePage(),this.findPagination(this.currentPage),this.currentPage=1,this.$emit("get-starting-index",1)},deep:!0},resetPage(e){e&&(this.currentPage=1,this.$emit("get-starting-index",1),this.findPagination(this.currentPage))}},mounted(){this.endPagination=this.dividePage(),this.findPagination(this.currentPage)},methods:{async findPagination(e){this.currentPage=e;const t=[];if(this.endPagination-this.currentPage>=this.maxPageShow){t.push(this.currentPage.toString());for(let a=0;a<this.maxPageShow-4;a++)t.push((e+a+1).toString());t.push("..."),t.push((this.endPagination-1).toString()),t.push(this.endPagination.toString())}else if(this.endPagination-this.maxPageShow+1<1)for(let a=1;a<=this.endPagination;a++)t.push(a.toString());else for(let a=this.endPagination-this.maxPageShow+1;a<=this.endPagination;a++)t.push(a.toString());return this.totalPagination=t,e},dividePage(){const e=this.totalCount/this.perPage;if(e%1!=0){const t=e.toString().split(".");return(0,r.He)(t[0])+1}return(0,r.He)(e.toFixed())},onClickPagination(e){this.currentPage!=parseInt(e)&&(this.currentPage=parseInt(e),this.findPagination(parseInt(e)),this.$emit("get-page-number",Number(e)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1))},async backwardPagination(){let e=10==this.currentPage?9:10,t=this.currentPage-e;t<1?(t=1,await this.findPagination(t).then((e=>{this.$emit("get-page-number",Number(e)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1)}))):await this.findPagination(t).then((e=>{this.$emit("get-page-number",Number(e)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1)}))},async forwardPagination(){let e=1==this.currentPage?9:10,t=this.currentPage+e;t>Number(this.totalPagination.slice(-1))?(t=Number(this.totalPagination.slice(-1)),await this.findPagination(t).then((e=>{this.$emit("get-page-number",Number(e)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1)}))):await this.findPagination(t).then((e=>{this.$emit("get-page-number",Number(e)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1)}))},async firstPagination(){await this.findPagination(1).then((e=>{this.$emit("get-page-number",Number(e)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1)}))},async lastPagination(){await this.findPagination(this.endPagination).then((e=>{this.$emit("get-page-number",Number(e)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1)}))}}}),m=a(83744);const g=(0,m.Z)(l,[["render",c],["__scopeId","data-v-3886d7e2"]]);var p=g},55241:function(){},44104:function(e,t,a){a.a(e,(async function(e,i){try{a.d(t,{Z:function(){return r.Z}});var r=a(28183),n=e([r]);r=(n.then?(await n)():n)[0],i()}catch(s){i(s)}}))},55864:function(e,t,a){a.d(t,{s:function(){return s}});var i=a(66252),r=a(3577);const n={class:"bread_crumb"};function s(e,t){const a=(0,i.up)("ion-label");return(0,i.wg)(),(0,i.iD)("div",n,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.breadcrumbs,((t,n)=>((0,i.wg)(),(0,i.iD)(i.HY,{key:n},[t.menuIconID&&0==n?((0,i.wg)(),(0,i.iD)("span",{key:0,class:(0,r.C_)(["icon_menu",[t.menuIconID]])},null,2)):(0,i.kq)("",!0),""==t.route||"/"==t.route?((0,i.wg)(),(0,i.j4)(a,{key:1},{default:(0,i.w5)((()=>[(0,i.Uk)((0,r.zw)(e.$t(`${t.menuName}`)),1)])),_:2},1024)):(0,i.kq)("",!0),""!=t.route&&"/"!=t.route?((0,i.wg)(),(0,i.j4)(a,{key:2,onClick:a=>e.pathDriver(t.route,e.queryData)},{default:(0,i.w5)((()=>[(0,i.Uk)((0,r.zw)(e.$t(`${t.menuName}`)),1)])),_:2},1032,["onClick"])):(0,i.kq)("",!0)],64)))),128))])}}}]);
//# sourceMappingURL=7817.b3766936.js.map