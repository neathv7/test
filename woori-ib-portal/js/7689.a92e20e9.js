"use strict";(self["webpackChunkbizMOB4Vue"]=self["webpackChunkbizMOB4Vue"]||[]).push([[7689],{22444:function(e,a,t){t.a(e,(async function(e,i){try{var o=t(66252),l=t(43493),s=t(90121),d=t(67201),n=t(15828),r=e([s]);s=(r.then?(await r)():r)[0],a["Z"]=(0,o.aZ)({name:"apm203001sc01",components:{BreadCrumb:s.Z,SelectOption:d.Z,ModifyCard:n.Z},data(){const e={authorizationBizTypeCode1:"",authorizationBizTypeCode2:"",businessCommonStatusCode:"01",authorizationAuthorityTypeCode:"",authorizationBizTypeCode1Name:"",managerApprovalDescription:"",enableApprovalLineYN:"Y",financialTransactionYN:"Y"},a=this.$route.query.type,t={registerTellerId:"",registerTellerName:"",registerDate:"",registerTime:"",updatedTellerId:"",updatedTellerName:"",updatedDate:"",updatedTime:"",deleteTellerId:"",deleteTellerName:"",deleteDate:"",deleteTime:""};return{authCodeDetail:e,modifyCard:t,isDisableField:!0,viewType:a,isInvalid:!1,showDefault:!1,showDisabled:!1,disableKey:!1,approvalRes:{},operationMode:"normal",enableApprovalStatus:[{key:"Y",value:"Enable"},{key:"N",value:"Disable"}],financialTransactionStatus:[{key:"Y",value:"Financial"},{key:"N",value:"None Financial "}]}},async mounted(){""===this.approvalType?"edit"===this.viewType?(this.getAuthorizationCodeDetail(),this.inputUpdate()):this.inputRegister():await this.$approval.getAuthorizationDetail().then((e=>{let a=JSON.parse(e.body.requestContent);this.approvalRes=e.body,this.operationMode="my-request"==this.approvalType?"read":"my-approval"==this.approvalType?"approval":"normal",this.authCodeDetail={authorizationBizTypeCode1:a.authorizationBizTypeCode1,authorizationBizTypeCode2:a.authorizationBizTypeCode2,authorizationBizTypeCode1Name:a.authorizationBizTypeCode1Name,authorizationAuthorityTypeCode:a.authorizationAuthorityTypeCode,managerApprovalDescription:a.managerApprovalDescription,businessCommonStatusCode:a.businessCommonStatusCode,enableApprovalLineYN:a.enableApprovalLineYN,financialTransactionYN:a.financialTransactionYN}}))},computed:{queryRoute(){return this.$route.query},approvalType(){return this.$route.query.approvalType?this.$route.query.approvalType.toString():""}},methods:{inputRegister(){this.showDefault=!0,this.showDisabled=!1,this.disableKey=!0},inputUpdate(){this.showDefault=!1,this.showDisabled=!0,this.disableKey=!0},preventLeadingSpace(e){e.target.value?(e.target.value[0]||e.target.value[1]||" "===e.target.value[2])&&(e.target.value=e.target.value.replace(/\s/g,"")):e.preventDefault()},async getAuthorizationCodeDetail(){const e={authorizationBizTypeCode1:this.queryRoute.authorizationBizTypeCode1,authorizationBizTypeCode2:this.queryRoute.authorizationBizTypeCode2,authorizationAuthorityTypeCode:this.queryRoute.authorizationAuthorityTypeCode},a=await this.$request.getRequest("APM20300112",e,!1);this.modifyCard={registerTellerId:String(a.body.firstRegisterTellerID),registerTellerName:String(a.body.firstRegisterTellerName),registerDate:String(a.body.firstRegisterDate),registerTime:String(a.body.firstRegisterTime),updatedTellerId:String(a.body.lastChangeTellerID),updatedTellerName:String(a.body.lastChangeTellerID),updatedDate:String(a.body.lastChangeDate),updatedTime:String(a.body.lastChangeTime),deleteTellerId:"",deleteTellerName:"",deleteDate:"",deleteTime:""},this.authCodeDetail={authorizationBizTypeCode1:a.body.authorizationBizTypeCode1,authorizationBizTypeCode2:a.body.authorizationBizTypeCode2,authorizationBizTypeCode1Name:a.body.authorizationBizTypeCode1Name,authorizationAuthorityTypeCode:a.body.authorizationAuthorityTypeCode,managerApprovalDescription:a.body.managerApprovalDescription,businessCommonStatusCode:a.body.businessCommonStatusCode,enableApprovalLineYN:a.body.enableApprovalLineYN,financialTransactionYN:a.body.financialTransactionYN}},async registerAuthorizationCode(){const e={authorizationBizTypeCode1:this.authCodeDetail.authorizationBizTypeCode1,authorizationBizTypeCode2:this.authCodeDetail.authorizationBizTypeCode2,businessCommonStatusCode:this.authCodeDetail.businessCommonStatusCode,authorizationAuthorityTypeCode:this.authCodeDetail.authorizationBizTypeCode2,managerApprovalDescription:this.authCodeDetail.managerApprovalDescription,enableApprovalLineYN:this.authCodeDetail.enableApprovalLineYN,financialTransactionYN:this.authCodeDetail.financialTransactionYN},a=await this.$request.getRequest("APM20300121",e,!1);return a.header.result&&this.$dialog.onOpen({content:this.$t("message.register_success"),dialogMode:"Success",callback:()=>{l.Fy.dismiss()}}),a.header.result},async updateAuthorizationCode(){const e={authorizationBizTypeCode1:this.authCodeDetail.authorizationBizTypeCode1,authorizationBizTypeCode2:this.authCodeDetail.authorizationBizTypeCode2,businessCommonStatusCode:this.authCodeDetail.businessCommonStatusCode,authorizationAuthorityTypeCode:this.authCodeDetail.authorizationAuthorityTypeCode,managerApprovalDescription:this.authCodeDetail.managerApprovalDescription,enableApprovalLineYN:this.authCodeDetail.enableApprovalLineYN,financialTransactionYN:this.authCodeDetail.financialTransactionYN},a=await this.$request.getRequest("APM20300131",e,!1);return a.header.result&&this.$dialog.onOpen({content:this.$t("message.update_success"),dialogMode:"Success",callback:()=>{this.getAuthorizationCodeDetail(),this.inputUpdate(),l.Fy.dismiss()}}),a.header.result},handleSave(){this.isInvalid=!1,""!==this.authCodeDetail.authorizationBizTypeCode1&&""!==this.authCodeDetail.businessCommonStatusCode&&""!==this.authCodeDetail.authorizationBizTypeCode2&&""!==this.authCodeDetail.managerApprovalDescription?this.$dialog.onOpen({content:`${this.$t("message.would_you_like_to_save")}`,dialogMode:"Question",showCancel:!0,callback:()=>{"edit"===this.viewType?this.updateAuthorizationCode().then((e=>{e&&(this.getAuthorizationCodeDetail(),this.inputUpdate(),l.Fy.dismiss())})):this.registerAuthorizationCode().then((e=>{e&&(this.goToList(),l.Fy.dismiss())})),l.Fy.dismiss()}}):this.isInvalid=!0},handleCancel(){this.$dialog.onOpen({content:`${this.$t("message.cancel_without_saving_changes")}`,dialogMode:"Question",callback:()=>{"edit"===this.viewType?(this.inputUpdate(),this.getAuthorizationCodeDetail()):this.goToList(),l.Fy.dismiss()}})},goToList(){this.$router.push("/APM203001SC00")},handleEdit(){this.inputRegister(),this.disableKey=!1},dialogValidate(e,a){this.$dialog.onOpen({title:e,content:a,btnLabel:`${this.$t("common.okay")}`,showCancel:!1,callback:()=>l.Fy.dismiss()})},dialogMessage(e){this.$dialog.onOpen({title:`${this.$t("message.alert")}`,content:e,showCancel:!1,callback:()=>{l.Fy.dismiss()}})}}}),i()}catch(u){i(u)}}))},15828:function(e,a,t){t.d(a,{Z:function(){return C}});var i=t(66252),o=t(3577);const l={key:0,class:"row gap detail_info"},s={key:0,class:"col"},d={class:"sub"},n={key:1,class:"col"},r={class:"sub"},u={key:2,class:"col"},p={class:"sub"};function h(e,a){return e.isShowRegister||e.isShowUpdate||e.isShowDelete?((0,i.wg)(),(0,i.iD)("div",l,[e.isShowRegister?((0,i.wg)(),(0,i.iD)("div",s,[(0,i._)("dl",null,[(0,i._)("dt",null,(0,o.zw)(e.$t("common.created_date")),1),(0,i._)("dd",null,[(0,i._)("strong",null,(0,o.zw)(e.createdEmployee),1),(0,i.Uk)(),(0,i._)("span",d,(0,o.zw)(e.createdDate),1)])])])):(0,i.kq)("",!0),e.isShowUpdate?((0,i.wg)(),(0,i.iD)("div",n,[(0,i._)("dl",null,[(0,i._)("dt",null,(0,o.zw)(e.$t("common.updated_date")),1),(0,i._)("dd",null,[(0,i._)("strong",null,(0,o.zw)(e.updatedEmployee),1),(0,i._)("span",r,(0,o.zw)(e.updatedDate),1)])])])):(0,i.kq)("",!0),e.isShowDelete?((0,i.wg)(),(0,i.iD)("div",u,[(0,i._)("dl",null,[(0,i._)("dt",null,(0,o.zw)(e.$t("common.deleted_date")),1),(0,i._)("dd",null,[(0,i._)("strong",null,(0,o.zw)(e.deletedEmployee),1),(0,i._)("span",p,(0,o.zw)(e.deletedDate),1)])])])):(0,i.kq)("",!0)])):(0,i.kq)("",!0)}var c=(0,i.aZ)({name:"modify-card",props:{data:{type:Object,required:!0}},computed:{createdEmployee(){return`${this.data.registerTellerName||""} ${this.data.registerTellerId?.trim()?`(${this.data.registerTellerId})`:""}`},createdDate(){return`${this.$datetime.formatStringToTime(this.data.registerTime?this.data.registerTime:"")} ${this.$datetime.formatStringToStringDate(this.data.registerDate?this.data.registerDate:"")}`},updatedEmployee(){return`${this.data.updatedTellerName||""} ${this.data.updatedTellerId?.trim()?`(${this.data.updatedTellerId})`:""}`},updatedDate(){return`${this.$datetime.formatStringToTime(this.data.updatedTime?this.data.updatedTime:"")} ${this.$datetime.formatStringToStringDate(this.data.updatedDate?this.data.updatedDate:"")}`},deletedEmployee(){return`${this.data.deleteTellerName||""} ${this.data.deleteTellerId?.trim()?`(${this.data.deleteTellerId})`:""}`},deletedDate(){return`${this.$datetime.formatStringToTime(this.data.deleteTime?this.data.deleteTime:"")} ${this.$datetime.formatStringToStringDate(this.data.deleteDate?this.data.deleteDate:"")}`},isShowRegister(){return!!(this.data.registerDate?.trim()||this.data.registerTime?.trim()||this.data.registerTellerId?.trim()||this.data.registerTellerName?.trim())},isShowUpdate(){return!!(this.data.updatedDate?.trim()||this.data.updatedTime?.trim()||this.data.updatedTellerId?.trim()||this.data.updatedTellerName?.trim())},isShowDelete(){return!!(this.data.deleteDate?.trim()||this.data.deleteTime?.trim()||this.data.deleteTellerId?.trim()||this.data.deleteTellerName?.trim())}}}),m=t(83744);const y=(0,m.Z)(c,[["render",h]]);var C=y},68616:function(e,a,t){t.a(e,(async function(e,i){try{t.r(a);var o=t(39621),l=t(10278),s=(t(48071),t(83744)),d=e([l]);l=(d.then?(await d)():d)[0];const n=(0,s.Z)(l.Z,[["render",o.s],["__scopeId","data-v-06ddcc4c"]]);a["default"]=n,i()}catch(n){i(n)}}))},48071:function(){},10278:function(e,a,t){t.a(e,(async function(e,i){try{t.d(a,{Z:function(){return o.Z}});var o=t(22444),l=e([o]);o=(l.then?(await l)():l)[0],i()}catch(s){i(s)}}))},39621:function(e,a,t){t.d(a,{s:function(){return Z}});var i=t(66252),o=t(3577);const l=e=>((0,i.dD)("data-v-06ddcc4c"),e=e(),(0,i.Cn)(),e),s={class:"contentWrap"},d={class:"title_name"},n={class:"cont"},r={class:"card_box"},u={class:"row gap"},p={class:"col-6"},h={class:"form01"},c=l((()=>(0,i._)("span",{class:"require"},"*",-1))),m={class:"inp"},y={key:0,class:"txt_err"},C={class:"col-6"},g={class:"form01"},_=l((()=>(0,i._)("span",{class:"require"},"*",-1))),T={class:"row gap"},z={class:"col-6"},v={class:"form01"},D=l((()=>(0,i._)("span",{class:"require"},"*",-1))),b={class:"inp"},w={key:0,class:"txt_error"},f={class:"col-6"},$={class:"form01"},k=l((()=>(0,i._)("span",{class:"require"},"*",-1))),S={class:"inp"},A={key:0,class:"txt_error"},B={class:"row gap"},N={class:"col-6"},q={class:"form01"},I=l((()=>(0,i._)("span",{class:"require"},"*",-1))),M={class:"col-6"},Y={class:"form01"},U=l((()=>(0,i._)("span",{class:"require"},"*",-1))),V={key:0,class:"footer_btn"},R={class:"left_side"},L={class:"right_side"},W={class:"edit"},O={class:"save"};function Z(e,a){const t=(0,i.up)("BreadCrumb"),l=(0,i.up)("SelectOption"),Z=(0,i.up)("ion-radio"),x=(0,i.up)("ion-label"),F=(0,i.up)("ion-item"),j=(0,i.up)("ion-list"),K=(0,i.up)("ion-radio-group"),E=(0,i.up)("ion-input"),P=(0,i.up)("ModifyCard"),H=(0,i.up)("ion-button"),Q=(0,i.up)("ApprovalReason");return(0,i.wg)(),(0,i.iD)("div",s,[(0,i.Wm)(t,{staticScreenName:"register"==e.viewType?e.$t("apm203001sc01.label.ib_authorization_code_register"):e.$t("apm203001sc01.label.ib_authorization_code_edit")},null,8,["staticScreenName"]),(0,i._)("h1",d,(0,o.zw)("register"===e.viewType?e.$t("apm203001sc01.label.ib_authorization_code_register"):e.$t("apm203001sc01.label.ib_authorization_code_edit")),1),(0,i._)("div",n,[(0,i._)("div",r,[(0,i._)("div",u,[(0,i._)("div",p,[(0,i._)("dl",h,[(0,i._)("dt",null,[(0,i.Uk)((0,o.zw)(e.$t("apm203001sc01.label.authorization_code_1")),1),c]),(0,i._)("div",{class:(0,o.C_)(["inp_box",{inp_error:e.isInvalid&&""===e.authCodeDetail.authorizationBizTypeCode1}])},[(0,i._)("div",m,[(0,i.Wm)(l,{ValidateClass:{inp_error:e.isInvalid&&""===e.authCodeDetail.authorizationBizTypeCode1},data:e.$store.state.CommonCodeModule.commonCode.BusinessCategoryCode,modelValue:e.authCodeDetail.authorizationBizTypeCode1,"onUpdate:modelValue":a[0]||(a[0]=a=>e.authCodeDetail.authorizationBizTypeCode1=a),value:e.authCodeDetail.authorizationBizTypeCode1,isDisabled:e.showDisabled===e.disableKey||"read"==e.operationMode||"approval"==e.operationMode,showKey:!0,classSelectType:"line"},null,8,["ValidateClass","data","modelValue","value","isDisabled"]),e.isInvalid&&""===e.authCodeDetail.authorizationBizTypeCode1?((0,i.wg)(),(0,i.iD)("p",y,(0,o.zw)(e.$t("error_text.field_empty")),1)):(0,i.kq)("",!0)])],2)])]),(0,i._)("div",C,[(0,i._)("dl",g,[(0,i._)("dt",null,[(0,i.Uk)((0,o.zw)(e.$t("common.status")),1),_]),(0,i._)("dd",null,[(0,i.Wm)(K,{modelValue:e.authCodeDetail.businessCommonStatusCode,"onUpdate:modelValue":a[1]||(a[1]=a=>e.authCodeDetail.businessCommonStatusCode=a)},{default:(0,i.w5)((()=>[(0,i.Wm)(j,{class:"list_chk"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.$store.state.CommonCodeModule.commonCode.BusinessCommonStatusCode,((a,t)=>((0,i.wg)(),(0,i.j4)(F,null,{default:(0,i.w5)((()=>[(0,i.Wm)(Z,{disabled:e.showDisabled||"register"===e.viewType||"read"==e.operationMode||"approval"==e.operationMode,value:a.key},null,8,["disabled","value"]),(0,i.Wm)(x,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(a.value),1)])),_:2},1024)])),_:2},1024)))),256))])),_:1})])),_:1},8,["modelValue"])])])])]),(0,i._)("div",T,[(0,i._)("div",z,[(0,i._)("dl",v,[(0,i._)("dt",null,[(0,i.Uk)((0,o.zw)(e.$t("apm203001sc01.label.authorization_code_2")),1),D]),(0,i._)("dd",null,[(0,i._)("div",{class:(0,o.C_)(["inp_box",{inp_error:e.isInvalid&&""===e.authCodeDetail.authorizationBizTypeCode2}])},[(0,i._)("div",b,[(0,i.Wm)(E,{class:"line",value:"",modelValue:e.authCodeDetail.authorizationBizTypeCode2,"onUpdate:modelValue":a[2]||(a[2]=a=>e.authCodeDetail.authorizationBizTypeCode2=a),onIonChange:e.preventLeadingSpace,readonly:e.showDisabled===e.disableKey||"read"==e.operationMode||"approval"==e.operationMode,placeholder:e.$t("pfm203001sc01.label.enter_code"),maxLength:"4"},null,8,["modelValue","onIonChange","readonly","placeholder"])]),e.isInvalid&&""===e.authCodeDetail.authorizationBizTypeCode2?((0,i.wg)(),(0,i.iD)("p",w,(0,o.zw)(e.$t("error_text.field_empty")),1)):(0,i.kq)("",!0)],2)])])]),(0,i._)("div",f,[(0,i._)("dl",$,[(0,i._)("dt",null,[(0,i.Uk)((0,o.zw)(e.$t("apm203001sc01.label.authorization_code_2_name")),1),k]),(0,i._)("dd",null,[(0,i._)("div",{class:(0,o.C_)(["inp_box",{inp_error:e.isInvalid&&""===e.authCodeDetail.managerApprovalDescription}])},[(0,i._)("div",S,[(0,i.Wm)(E,{class:"line",value:"",modelValue:e.authCodeDetail.managerApprovalDescription,"onUpdate:modelValue":a[3]||(a[3]=a=>e.authCodeDetail.managerApprovalDescription=a),readonly:e.showDisabled||"read"==e.operationMode||"approval"==e.operationMode,placeholder:e.$t("apm203001sc01.label.enter_authorization_code_2_name")},null,8,["modelValue","readonly","placeholder"])]),e.isInvalid&&""===e.authCodeDetail.managerApprovalDescription?((0,i.wg)(),(0,i.iD)("p",A,(0,o.zw)(e.$t("error_text.field_empty")),1)):(0,i.kq)("",!0)],2)])])])]),(0,i._)("div",B,[(0,i._)("div",N,[(0,i._)("dl",q,[(0,i._)("dt",null,[(0,i.Uk)((0,o.zw)(e.$t("apm203001sc01.label.enable_approval")),1),I]),(0,i._)("dd",null,[(0,i.Wm)(K,{modelValue:e.authCodeDetail.enableApprovalLineYN,"onUpdate:modelValue":a[4]||(a[4]=a=>e.authCodeDetail.enableApprovalLineYN=a)},{default:(0,i.w5)((()=>[(0,i.Wm)(j,{class:"list_chk"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.enableApprovalStatus,((a,t)=>((0,i.wg)(),(0,i.j4)(F,null,{default:(0,i.w5)((()=>[(0,i.Wm)(Z,{disabled:e.showDisabled||"register"===this.$route.query.type||"read"==e.operationMode||"approval"==e.operationMode,value:a.key},null,8,["disabled","value"]),(0,i.Wm)(x,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(a.value),1)])),_:2},1024)])),_:2},1024)))),256))])),_:1})])),_:1},8,["modelValue"])])])]),(0,i._)("div",M,[(0,i._)("dl",Y,[(0,i._)("dt",null,[(0,i.Uk)((0,o.zw)(e.$t("apm203001sc01.label.financial_transaction")),1),U]),(0,i._)("dd",null,[(0,i.Wm)(K,{modelValue:e.authCodeDetail.financialTransactionYN,"onUpdate:modelValue":a[5]||(a[5]=a=>e.authCodeDetail.financialTransactionYN=a)},{default:(0,i.w5)((()=>[(0,i.Wm)(j,{class:"list_chk"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.financialTransactionStatus,((a,t)=>((0,i.wg)(),(0,i.j4)(F,null,{default:(0,i.w5)((()=>[(0,i.Wm)(Z,{disabled:e.showDisabled||"register"===this.$route.query.type||"read"==e.operationMode||"approval"==e.operationMode,value:a.key},null,8,["disabled","value"]),(0,i.Wm)(x,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(a.value),1)])),_:2},1024)])),_:2},1024)))),256))])),_:1})])),_:1},8,["modelValue"])])])])]),"edit"===e.viewType?((0,i.wg)(),(0,i.j4)(P,{key:0,data:e.modifyCard},null,8,["data"])):(0,i.kq)("",!0)]),"normal"==e.operationMode?((0,i.wg)(),(0,i.iD)("div",V,[(0,i._)("div",R,[e.showDefault?((0,i.wg)(),(0,i.j4)(H,{key:0,class:"btn03",onClick:e.handleCancel},{default:(0,i.w5)((()=>[(0,i._)("span",null,(0,o.zw)(e.$t("common.cancel")),1)])),_:1},8,["onClick"])):(0,i.kq)("",!0),e.showDisabled?((0,i.wg)(),(0,i.j4)(H,{key:1,class:"btn02",onClick:e.goToList},{default:(0,i.w5)((()=>[(0,i._)("span",null,(0,o.zw)(e.$t("common.list")),1)])),_:1},8,["onClick"])):(0,i.kq)("",!0)]),(0,i._)("div",L,[e.showDisabled?((0,i.wg)(),(0,i.j4)(H,{key:0,class:"btn02 btn_ico",disabled:"09"===e.authCodeDetail.businessCommonStatusCode,onClick:e.handleEdit},{default:(0,i.w5)((()=>[(0,i._)("span",W,(0,o.zw)(e.$t("common.edit")),1)])),_:1},8,["disabled","onClick"])):(0,i.kq)("",!0),e.showDefault?((0,i.wg)(),(0,i.j4)(H,{key:1,class:"btn01 btn_ico",onClick:e.handleSave},{default:(0,i.w5)((()=>[(0,i._)("span",O,(0,o.zw)(e.$t("common.save")),1)])),_:1},8,["onClick"])):(0,i.kq)("",!0)])])):(0,i.kq)("",!0)]),"normal"!==e.operationMode?((0,i.wg)(),(0,i.j4)(Q,{key:0,payload:e.approvalRes},null,8,["payload"])):(0,i.kq)("",!0)])}}}]);
//# sourceMappingURL=7689.a92e20e9.js.map