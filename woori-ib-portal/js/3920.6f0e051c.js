"use strict";(self["webpackChunkbizMOB4Vue"]=self["webpackChunkbizMOB4Vue"]||[]).push([[3920],{28183:function(e,t,a){a.a(e,(async function(e,r){try{var i=a(66252),s=a(75080),n=a(72224),u=e([n]);n=(u.then?(await u)():u)[0],t["Z"]=(0,i.aZ)({props:{staticScreenName:{type:String,required:!1},queryData:{type:Array,required:!1}},data(){return{breadcrumbs:[],menuList:[]}},async created(){setTimeout((()=>{this.renderMenuFromState(),this.getMenuList()}),100)},computed:{approvalType(){return this.$route.query.approvalType?this.$route.query.approvalType.toString():""}},watch:{staticScreenName(e){"/COM210001SC00"==this.$route.path&&(e&&(2==this.breadcrumbs.length?this.breadcrumbs:this.breadcrumbs.pop()),this.breadcrumbs.push({menuName:e,route:""}))}},methods:{pathDriver(e,t){if(""===this.approvalType){if(this.$route.path==e)return;t?this.$router.push({path:e,query:t}):this.$router.push(e)}},async renderMenuFromState(){return s.Z.getters.getMenuData},async getMenuList(){try{this.menuList=await this.renderMenuFromState(),this.menuList.length>0?(this.menuList=JSON.parse(JSON.stringify(this.menuList)).filter((e=>""!=e.parentMenuID.replace(/\s/g,""))),this.buildBreadcrumb(this.menuList,this.$route.path)):console.log("menu not yet rendered")}catch(e){console.log("Error rendering menu:",e)}},async buildBreadcrumb(e,t){const a=e.find((e=>`/${e.screenID}`==t));if(a){if(this.generateBreadcrumbs(e,a),"/ICM201001SC00"==this.$route.path){const t=e.find((e=>"ICM201001SC00"==e.screenID));n.u.setData("SpecialScreenID",JSON.stringify(t))}}else{if("/CIB202003SC00"==this.$route.path){let t,a;a=e.find((e=>"CIB202002SC00"==e.screenID)),t={menuName:this.staticScreenName?this.staticScreenName:"",screenID:this.$route.path.replace("/",""),parentMenuID:a.menuID,menuID:"1"},this.generateBreadcrumbs(e,t)}const t=this.$route.path.replace("/","");let a=[];this.menuList.forEach((e=>{a.push(e.screenID)})),a.forEach((a=>{let r;if(this.matchScreenID(a,t)&&(r=e.find((e=>`${e.screenID}`==a)),r&&this.generateBreadcrumbs(e,r)),""!==this.approvalType&&("VBA202002SC00"==t||"CIB201003SC00"==t)&&this.matchApprovalModeScreenID(a,t)){const t=e.find((e=>`${e.screenID}`==a));this.generateBreadcrumbs(e,t)}}));let r=t.charAt(t.length-1);if("1"===r){let e={menuName:this.staticScreenName?this.staticScreenName:"",route:`/${t}`};this.breadcrumbs.push(e),n.u.setData("TempBreadCrumb",JSON.stringify(e))}else if("2"===r)if("/COM211001SC02"==this.$route.path)this.breadcrumbs.push({menuName:this.staticScreenName?this.staticScreenName:"",route:`/${t}`});else{let e=JSON.parse(await n.u.getData("TempBreadCrumb"));this.breadcrumbs.push(e,{menuName:this.staticScreenName?this.staticScreenName:"",route:`/${t}`})}else if("/CIB202003SC00"!=this.$route.path&&"/PUM202002SC00"!=this.$route.path){let a=this.$router.options.history.state.back,r=a.includes("/")?a.replace("/",""):a;const i=await e.find((e=>`${e.screenID}`==r));this.breadcrumbs.push({menuName:this.staticScreenName?this.staticScreenName:"",route:`/${t}`}),this.generateBreadcrumbs(e,i)}if("/ICM201002SC01"==this.$route.path){this.breadcrumbs=[];let a=JSON.parse(await n.u.getData("SpecialScreenID"));this.breadcrumbs.push({menuName:this.staticScreenName?this.staticScreenName:"",route:`/${t}`}),this.generateBreadcrumbs(e,a)}else if("/CIB202003SC01"==this.$route.path){let a,r;this.breadcrumbs=[],r=e.find((e=>"CIB202002SC00"==e.screenID)),a={menuName:this.$t("cib202003sc00.sub_user_list"),screenID:"CIB202003SC00",parentMenuID:r.menuID},this.breadcrumbs.push({menuName:this.staticScreenName?this.staticScreenName:"",route:`/${t}`}),this.generateBreadcrumbs(e,a)}else if("/PUM202002SC00"==this.$route.path){let t,a;a=e.find((e=>"COM200001SC00"==e.screenID)),t={menuName:this.staticScreenName?this.staticScreenName:"",screenID:this.$route.path.replace("/",""),parentMenuID:a.menuID},this.generateBreadcrumbs(e,t)}}},async generateBreadcrumbs(e,t){try{if(t){const a={menuName:t.menuName,route:`/${t.screenID}`,menuIconID:t.menuIconID};if(this.breadcrumbs.unshift(a),t.parentMenuID){const a=e.find((e=>e.menuID==t.parentMenuID));a&&this.generateBreadcrumbs(e,a)}}}catch(a){console.log(a)}},matchScreenID(e,t){if(e.length!==t.length)return!1;for(let a=0;a<e.length-1;a++)if(e[a]!==t[a])return!1;return!0},matchApprovalModeScreenID(e,t){if(e.length!==t.length)return!1;for(let a=0;a<e.length-5;a++)if(e[a]!==t[a])return!1;return!0}}}),r()}catch(d){r(d)}}))},90121:function(e,t,a){a.a(e,(async function(e,r){try{var i=a(55864),s=a(44104),n=(a(55241),a(83744)),u=e([s]);s=(u.then?(await u)():u)[0];const d=(0,n.Z)(s.Z,[["render",i.s],["__scopeId","data-v-6668b2f2"]]);t["Z"]=d,r()}catch(d){r(d)}}))},15828:function(e,t,a){a.d(t,{Z:function(){return D}});var r=a(66252),i=a(3577);const s={key:0,class:"row gap detail_info"},n={key:0,class:"col"},u={class:"sub"},d={key:1,class:"col"},c={class:"sub"},h={key:2,class:"col"},m={class:"sub"};function l(e,t){return e.isShowRegister||e.isShowUpdate||e.isShowDelete?((0,r.wg)(),(0,r.iD)("div",s,[e.isShowRegister?((0,r.wg)(),(0,r.iD)("div",n,[(0,r._)("dl",null,[(0,r._)("dt",null,(0,i.zw)(e.$t("common.created_date")),1),(0,r._)("dd",null,[(0,r._)("strong",null,(0,i.zw)(e.createdEmployee),1),(0,r.Uk)(),(0,r._)("span",u,(0,i.zw)(e.createdDate),1)])])])):(0,r.kq)("",!0),e.isShowUpdate?((0,r.wg)(),(0,r.iD)("div",d,[(0,r._)("dl",null,[(0,r._)("dt",null,(0,i.zw)(e.$t("common.updated_date")),1),(0,r._)("dd",null,[(0,r._)("strong",null,(0,i.zw)(e.updatedEmployee),1),(0,r._)("span",c,(0,i.zw)(e.updatedDate),1)])])])):(0,r.kq)("",!0),e.isShowDelete?((0,r.wg)(),(0,r.iD)("div",h,[(0,r._)("dl",null,[(0,r._)("dt",null,(0,i.zw)(e.$t("common.deleted_date")),1),(0,r._)("dd",null,[(0,r._)("strong",null,(0,i.zw)(e.deletedEmployee),1),(0,r._)("span",m,(0,i.zw)(e.deletedDate),1)])])])):(0,r.kq)("",!0)])):(0,r.kq)("",!0)}var o=(0,r.aZ)({name:"modify-card",props:{data:{type:Object,required:!0}},computed:{createdEmployee(){return`${this.data.registerTellerName||""} ${this.data.registerTellerId?.trim()?`(${this.data.registerTellerId})`:""}`},createdDate(){return`${this.$datetime.formatStringToTime(this.data.registerTime?this.data.registerTime:"")} ${this.$datetime.formatStringToStringDate(this.data.registerDate?this.data.registerDate:"")}`},updatedEmployee(){return`${this.data.updatedTellerName||""} ${this.data.updatedTellerId?.trim()?`(${this.data.updatedTellerId})`:""}`},updatedDate(){return`${this.$datetime.formatStringToTime(this.data.updatedTime?this.data.updatedTime:"")} ${this.$datetime.formatStringToStringDate(this.data.updatedDate?this.data.updatedDate:"")}`},deletedEmployee(){return`${this.data.deleteTellerName||""} ${this.data.deleteTellerId?.trim()?`(${this.data.deleteTellerId})`:""}`},deletedDate(){return`${this.$datetime.formatStringToTime(this.data.deleteTime?this.data.deleteTime:"")} ${this.$datetime.formatStringToStringDate(this.data.deleteDate?this.data.deleteDate:"")}`},isShowRegister(){return!!(this.data.registerDate?.trim()||this.data.registerTime?.trim()||this.data.registerTellerId?.trim()||this.data.registerTellerName?.trim())},isShowUpdate(){return!!(this.data.updatedDate?.trim()||this.data.updatedTime?.trim()||this.data.updatedTellerId?.trim()||this.data.updatedTellerName?.trim())},isShowDelete(){return!!(this.data.deleteDate?.trim()||this.data.deleteTime?.trim()||this.data.deleteTellerId?.trim()||this.data.deleteTellerName?.trim())}}}),p=a(83744);const g=(0,p.Z)(o,[["render",l]]);var D=g},55241:function(){},44104:function(e,t,a){a.a(e,(async function(e,r){try{a.d(t,{Z:function(){return i.Z}});var i=a(28183),s=e([i]);i=(s.then?(await s)():s)[0],r()}catch(n){r(n)}}))},55864:function(e,t,a){a.d(t,{s:function(){return n}});var r=a(66252),i=a(3577);const s={class:"bread_crumb"};function n(e,t){const a=(0,r.up)("ion-label");return(0,r.wg)(),(0,r.iD)("div",s,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.breadcrumbs,((t,s)=>((0,r.wg)(),(0,r.iD)(r.HY,{key:s},[t.menuIconID&&0==s?((0,r.wg)(),(0,r.iD)("span",{key:0,class:(0,i.C_)(["icon_menu",[t.menuIconID]])},null,2)):(0,r.kq)("",!0),""==t.route||"/"==t.route?((0,r.wg)(),(0,r.j4)(a,{key:1},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(e.$t(`${t.menuName}`)),1)])),_:2},1024)):(0,r.kq)("",!0),""!=t.route&&"/"!=t.route?((0,r.wg)(),(0,r.j4)(a,{key:2,onClick:a=>e.pathDriver(t.route,e.queryData)},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(e.$t(`${t.menuName}`)),1)])),_:2},1032,["onClick"])):(0,r.kq)("",!0)],64)))),128))])}}}]);
//# sourceMappingURL=3920.6f0e051c.js.map