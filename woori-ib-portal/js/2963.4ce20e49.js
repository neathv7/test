"use strict";(self["webpackChunkbizMOB4Vue"]=self["webpackChunkbizMOB4Vue"]||[]).push([[2963],{88824:function(e,s,t){t.a(e,(async function(e,i){try{var a=t(66252),l=t(2262),o=t(47397),r=t(90121),u=t(67201),n=t(41762),d=t(43493),c=e([r]);r=(c.then?(await c)():c)[0],s["Z"]=(0,a.aZ)({name:"cib202003sc01",components:{PhoneInput:o.Z,BreadCrumb:r.Z,SelectOption:u.Z,VueDatePicker:n.Z},data(){const e=this.$route.query.type,s=this.$route.query.customerNo,t=this.$route.query.userID,i=this.$route.query.customerName,a=this.$route.query.managerBankID,o=this.$route.query.cellPhoneNo,r=this.$route.query.companyName,u=this.$route.query.userStatus,n=this.$route.query.mainUserRoleID,d=(0,l.iH)(!1),c=[],h=(0,l.iH)({userInfo:{},userRoleList:[],userAccountList:[]}),m=[{columnName:this.$t("cib202003sc01.no")},{columnName:this.$t("cib202003sc01.account_no")},{columnName:this.$t("cib202003sc01.account_type")},{columnName:"View Only"},{columnName:"Full Access"}];return{headers:m,userRole:[],serviceStatusCodeList:[],userAccountList:[],subUserPreWithdrawalAccount:c,isbirthDate:"",currentDate:new Date,buttonAction:!1,isInvalidInput:!1,isDisableEdit:!1,isApplicationCode:!1,isMainUserRoleIDIsSTP:!1,isInvalidUserIDInput:!1,isWrongPhoneNumberFormat:!1,isWrongEmailFormat:!1,isInvalidAccountLength:!1,isViewOnlyAccount:[],approvalRes:{},operationMode:"normal",viewOnly:"02",fullAccess:"01",subUserdetail:h,isEditable:d,viewType:e,customerNo:s,userID:t,managerBankID:a,customerName:i,cellPhoneNo:o,companyName:r,masterUserStatus:u,mainUserRoleID:n,startingNo:1,subUserRoleIDName:{userRoleID:"",userRoleName:""}}},async mounted(){""===this.approvalType?(this.getSubUserRole(),this.handleGetServiceStatusCode(),"edit"==this.viewType?this.getsubUserDetail():"register"==this.viewType&&this.handleRegister()):await this.$approval.getAuthorizationDetail().then((async e=>{let s=JSON.parse(e.body.requestContent);this.approvalRes=e.body,this.operationMode="my-request"==this.approvalType?"read":"my-approval"==this.approvalType?"approval":"normal",this.subUserdetail.userInfo.userID=s.userID,this.subUserdetail.userInfo.cellPhoneNo=s.cellPhoneNo,this.subUserdetail.userInfo.customerNo=s.customerNo,this.subUserdetail.userInfo.customerName=s.customerName,this.subUserdetail.userInfo.departmentName=s.departmentName,this.subUserdetail.userInfo.email=s.email,this.subUserdetail.userInfo.firstName=s.firstName,this.subUserdetail.userInfo.jobTitleName=s.jobTitleName,this.subUserdetail.userInfo.lastName=s.lastName,this.subUserdetail.userInfo.managerBankID=s.managerBankID,this.subUserdetail.userInfo.companyName=s.managerBankName,this.subUserdetail.userInfo.serviceStatusCode=s.serviceStatusCode,this.subUserdetail.userInfo.birthDate=s.birthDate,this.isbirthDate=this.$datetime.convertStringToDate(this.subUserdetail.userInfo.birthDate),this.serviceStatusCodeList.push({key:s.serviceStatusCode,value:this.$codeConverter.convertValue("ServiceStatusCode",s.serviceStatusCode)}),s.accountList.map((e=>{this.userAccountList.push({accountNo:e.accountNo,accountType:e.accountType,designatedAccountTypeCode:e.designatedAccountTypeCode})})),this.userAccountList.map((e=>{this.subUserdetail.userAccountList.push({accountName:"",accountNo:e.accountNo,accountTypeCode:e.accountType,designatedAccountTypeCode:e.designatedAccountTypeCode,currencyCode:"",accountAccess:e.accountAccess}),this.handleDesignatedAccountTypeCode(this.subUserdetail)}));const t=await this.$request.getRequest("COM21200113",{},!1);let i="";s.roleList.map((e=>(i=e.userRoleID,i))),console.log("userRoleIDtemp",i),this.userRole=t?.body?.list.filter((e=>e.userRoleID==i)),console.log("this.userRole",this.userRole),this.userRole.map((e=>{this.subUserRoleIDName.userRoleID=e.userRoleID,this.subUserRoleIDName.userRoleName=e.userRoleName})),console.log("this.subUserRoleIDName.userRoleID",this.subUserRoleIDName.userRoleID),console.log("this.subUserRoleIDName.userRoleName ",this.subUserRoleIDName.userRoleName),this.handleDesignatedAccountTypeCode(this.subUserdetail)}))},watch:{"subUserdetail.userInfo.email":function(e){"edit"==this.viewType?e&&(this.isWrongEmailFormat=!1):"register"==this.viewType&&e&&(this.isWrongEmailFormat=!1)},"subUserdetail.userInfo.cellPhoneNo":function(e){0==e.length||9==e.length||e.length>9?this.isWrongPhoneNumberFormat=!1:e.length<9&&(this.isWrongPhoneNumberFormat=!0)}},computed:{subUserNO(){return(e,s)=>e+s},subUserRole(){return(e,s)=>`${e} : ${s}`},accountTypeCode(){return(e,s)=>`${e}`.length>0?`${e} : ${s}`:""},approvalType(){return this.$route.query.approvalType?this.$route.query.approvalType.toString():""},formattedBirthDate(){return this.isbirthDate?this.$datetime.formatVueDatePicker(this.isbirthDate):""}},methods:{handleActionClick(e){switch(e){case"edit":this.isEditable=!0,this.buttonAction=!0;break;case"save":{let e=!1;e=this.$validate.validateEmail(this.subUserdetail.userInfo.email),this.subUserdetail.userInfo.userID&&e&&this.subUserdetail.userInfo.firstName&&this.subUserdetail.userInfo.lastName&&this.subUserdetail.userInfo.cellPhoneNo&&this.subUserdetail.userInfo.departmentName&&this.subUserdetail.userInfo.serviceStatusCode&&this.handleValidateUserAccountListAmount()&&this.subUserdetail.userInfo.jobTitleName&&this.isbirthDate?this.$dialog.onOpen({content:this.$t("message.would_you_like_to_save"),dialogMode:"Question",callback:()=>{"edit"==this.viewType?this.editSubUserInfo():this.registerSubUser()}}):(this.isWrongEmailFormat=!e,this.isInvalidInput=!0)}break;case"cancel":this.$dialog.onOpen({content:this.$t("message.cancel_without_saving_changes"),dialogMode:"Question",callback:()=>{"register"==this.viewType?this.$router.back():"edit"==this.viewType&&(this.getsubUserDetail(),this.isEditable=!1,this.buttonAction=!1),d.Fy.dismiss()}});break;case"backToList":this.backToSubUserList();break}},async getSubUserRole(){const e=await this.$request.getRequest("COM21200113",{},!1);this.userRole=e?.body?.list.filter((e=>"STP"!=e.userRoleID&&"FINAL"!=e.userRoleID))},async handleGetServiceStatusCode(){this.serviceStatusCodeList=this.$store.state.CommonCodeModule.commonCode.ServiceStatusCode},async getsubUserDetail(){const e={customerNo:`${this.customerNo}`,userID:`${this.userID}`},s=await this.$request.getRequest("CIB20200312",e,!1);this.subUserdetail=s?.body,this.subUserdetail.userRoleList.map((e=>{this.subUserRoleIDName.userRoleID=e.userRoleID,this.subUserRoleIDName.userRoleName=e.userRoleName}));let t=this.$datetime.convertStringToDate(this.subUserdetail.userInfo.birthDate);this.isbirthDate=t,"00"==this.subUserdetail.userInfo.serviceStatusCode?(this.isApplicationCode=!0,"STP"==this.mainUserRoleID?this.isMainUserRoleIDIsSTP=!0:this.isMainUserRoleIDIsSTP=!1):this.serviceStatusCodeList=this.$store.state.CommonCodeModule.commonCode.ServiceStatusCode.filter((e=>"00"!=e.key)),"00"==this.masterUserStatus||"01"==this.masterUserStatus||"08"==this.masterUserStatus?this.isDisableEdit=!1:this.isDisableEdit=!0,this.subUserdetail.userAccountList.map((e=>{"02"==e.accountAccess?this.isViewOnlyAccount.push(!0):this.isViewOnlyAccount.push(!1)})),this.subUserAccountTypeCode(this.subUserdetail),this.handleDesignatedAccountTypeCode(this.subUserdetail)},async handleRegister(){this.inputRegister();const e={customerNo:`${this.customerNo}`,userID:`${this.managerBankID}`},s=await this.$request.getRequest("CIB20200313",e,!1);this.subUserPreWithdrawalAccount=s?.body?.list,this.subUserdetail.userAccountList=this.subUserPreWithdrawalAccount,this.subUserdetail.userAccountList.map((e=>{"02"==e.designatedAccountTypeCode?this.isViewOnlyAccount.push(!0):this.isViewOnlyAccount.push(!1)})),this.isbirthDate="",this.subUserRoleIDName.userRoleID="",this.subUserdetail.userInfo.userID="",this.subUserdetail.userInfo.email="",this.subUserdetail.userInfo.firstName="",this.subUserdetail.userInfo.lastName="",this.subUserdetail.userInfo.cellPhoneNo="",this.subUserdetail.userInfo.birthDate="",this.subUserdetail.userInfo.departmentName="",this.subUserdetail.userInfo.jobTitleName="",this.subUserdetail.userInfo.serviceStatusCode="00",this.subUserdetail.userInfo.customerNo=`${this.customerNo}`,this.subUserdetail.userInfo.customerName=`${this.customerName}`,this.subUserdetail.userInfo.managerBankID=`${this.managerBankID}`,this.subUserdetail.userInfo.companyName=`${this.companyName}`,this.handleDesignatedAccountTypeCode(this.subUserdetail),this.subUserAccountTypeCode(this.subUserdetail),"00"==this.masterUserStatus&&"STP"==this.mainUserRoleID||"01"==this.masterUserStatus&&"STP"==this.mainUserRoleID?(this.subUserRoleIDName.userRoleID="VIEW",this.isDisableEdit=!1,this.isMainUserRoleIDIsSTP=!0,this.subUserdetail.userInfo.serviceStatusCode="00"):this.isDisableEdit=!0},subUserAccountTypeCode(e){const s=e.userAccountList.map((e=>(e.accountTypeCode=this.accountTypeCode(e.accountTypeCode,this.$codeConverter.convertValue("AccountTypeCode",e.accountTypeCode)),e)));this.subUserdetail.userAccountList=s},handleDesignatedAccountTypeCode(e){e.userAccountList.map(((e,s)=>(e.designatedAccountTypeCode==this.viewOnly?(this.subUserdetail.userAccountList[s].viewOnly=!0,this.subUserdetail.userAccountList[s].fullAccess=!1):e.designatedAccountTypeCode==this.fullAccess?(this.subUserdetail.userAccountList[s].fullAccess=!0,this.subUserdetail.userAccountList[s].viewOnly=!1):(this.subUserdetail.userAccountList[s].fullAccess=!1,this.subUserdetail.userAccountList[s].viewOnly=!1),e)))},async registerSubUser(){const e={accountList:this.userAccountList,cellPhoneNo:this.subUserdetail.userInfo.cellPhoneNo,customerName:this.subUserdetail.userInfo.customerName,customerNo:this.subUserdetail.userInfo.customerNo,departmentName:this.subUserdetail.userInfo.departmentName,email:this.subUserdetail.userInfo.email,jobTitleName:this.subUserdetail.userInfo.jobTitleName,managerBankID:this.subUserdetail.userInfo.managerBankID,birthDate:this.isbirthDate?this.$datetime.convertDateToString(this.isbirthDate):"",managerBankName:this.subUserdetail.userInfo.companyName,roleList:[{userRoleID:this.subUserRoleIDName.userRoleID}],serviceStatusCode:this.subUserdetail.userInfo.serviceStatusCode,userID:this.subUserdetail.userInfo.userID,firstName:this.subUserdetail.userInfo.firstName,lastName:this.subUserdetail.userInfo.lastName},s=await this.$request.getRequest("CIB20200321",e,!1);this.userAccountList=[],this.inputRegister(),this.backToSubUserList(),1==s.header.result?(this.inputRegister(),this.backToSubUserList(),this.$dialog.onOpen({content:`${this.$t("message.register_success")}`,dialogMode:"Success",callback:()=>{d.Fy.dismiss()}})):console.log(s.header.error_text)},async editSubUserInfo(){const e={accountList:this.userAccountList,cellPhoneNo:this.subUserdetail.userInfo.cellPhoneNo,customerName:this.subUserdetail.userInfo.customerName,customerNo:this.subUserdetail.userInfo.customerNo,departmentName:this.subUserdetail.userInfo.departmentName,email:this.subUserdetail.userInfo.email,jobTitleName:this.subUserdetail.userInfo.jobTitleName,managerBankID:this.subUserdetail.userInfo.managerBankID,managerBankName:this.subUserdetail.userInfo.companyName,birthDate:this.$datetime.convertDateToString(this.isbirthDate),roleList:[{userRoleID:this.subUserRoleIDName.userRoleID}],serviceStatusCode:this.subUserdetail.userInfo.serviceStatusCode,userID:this.subUserdetail.userInfo.userID,firstName:this.subUserdetail.userInfo.firstName,lastName:this.subUserdetail.userInfo.lastName},s=await this.$request.getRequest("CIB20200331",e,!1);this.inputUpdate(),s.header.result?(this.getsubUserDetail(),this.inputUpdate(),this.$dialog.onOpen({content:`${this.$t("message.update_success")}`,dialogMode:"Success",callback:()=>{d.Fy.dismiss()}})):console.log(s.header.error_text)},handleValidateUserAccountListAmount(){let e=!1;return this.isInvalidAccountLength=!1,this.userAccountList=[],this.subUserdetail.userAccountList.map((s=>{this.userAccountList.push({accountNo:s.accountNo,accountType:s.accountTypeCode,designatedAccountTypeCode:s.designatedAccountTypeCode}),s.viewOnly||s.fullAccess?e=!0:s.viewOnly||s.fullAccess||!e?s.viewOnly||s.fullAccess||e||(e=!1):e=!0})),e||(this.isInvalidAccountLength=!0),e},async handleGenerateUserID(){const e=await this.$request.getRequest("CIB20100214",{},!1);this.subUserdetail.userInfo.userID=e.body.userID},async resetPasswordViaEmail(){const e={customerNo:this.subUserdetail.userInfo.customerNo,userID:this.subUserdetail.userInfo.userID,email:this.subUserdetail.userInfo.email},s=await this.$request.getRequest("CIB20200332",e,!1);1==s.header.result&&this.$dialog.onOpen({content:this.$t("message.reset_password_success"),dialogMode:"Success",callback:()=>{d.Fy.dismiss()}})},onChangeViewOnly(e){1==this.subUserdetail.userAccountList[e].viewOnly?(this.subUserdetail.userAccountList[e].viewOnly=!0,this.subUserdetail.userAccountList[e].designatedAccountTypeCode=this.viewOnly,this.subUserdetail.userAccountList[e].fullAccess=!1):0==this.subUserdetail.userAccountList[e].fullAccess&&0==this.subUserdetail.userAccountList[e].viewOnly&&(this.subUserdetail.userAccountList[e].designatedAccountTypeCode="")},onChangeFullAccess(e){1==this.subUserdetail.userAccountList[e].fullAccess?(this.subUserdetail.userAccountList[e].fullAccess=!0,this.subUserdetail.userAccountList[e].designatedAccountTypeCode=this.fullAccess,this.subUserdetail.userAccountList[e].viewOnly=!1):0==this.subUserdetail.userAccountList[e].viewOnly&&0==this.subUserdetail.userAccountList[e].fullAccess&&(this.subUserdetail.userAccountList[e].designatedAccountTypeCode="")},inputUpdate(){this.isEditable=!1,this.buttonAction=!1},inputRegister(){this.isEditable=!0,this.buttonAction=!0},backToSubUserList(){this.$router.back()}}}),i()}catch(h){i(h)}}))},82963:function(e,s,t){t.a(e,(async function(e,i){try{t.r(s);var a=t(464),l=t(72242),o=t(83744),r=e([l]);l=(r.then?(await r)():r)[0];const u=(0,o.Z)(l.Z,[["render",a.s]]);s["default"]=u,i()}catch(u){i(u)}}))},72242:function(e,s,t){t.a(e,(async function(e,i){try{t.d(s,{Z:function(){return a.Z}});var a=t(88824),l=e([a]);a=(l.then?(await l)():l)[0],i()}catch(o){i(o)}}))},464:function(e,s,t){t.d(s,{s:function(){return Ye}});var i=t(66252),a=t(3577);const l={class:"contentWrap"},o={class:"optwrap"},r={class:"title_name"},u={class:"cont"},n={class:"card_box"},d={class:"row gap"},c={class:"col"},h={class:"form01"},m={class:"inp_box"},b={class:"inp"},p={class:"col"},_={class:"form01"},I={class:"inp_box"},U={class:"inp"},v={class:"row gap"},f={class:"col"},y={class:"form01"},g={class:"inp_box"},D={class:"inp"},N={class:"col"},w={class:"form01"},A={class:"inp_box"},k={class:"inp"},C={class:"row gap"},$={class:"col"},R={class:"form01"},T=(0,i._)("span",{class:"require"},"*",-1),V={class:"row gap10"},q={class:"col"},S={class:"inp"},L={key:0,class:"txt_error"},x={class:"col auto"},z={class:"col"},O={class:"form01"},P=(0,i._)("span",{class:"require"},"*",-1),M={class:"inp"},W={key:0,class:"txt_error"},E={key:1,class:"txt_error"},B={class:"row gap"},j={class:"col"},F={class:"form01",style:{display:"flex",gap:"20px"}},Z={style:{width:"100%"}},H=(0,i._)("span",{class:"require"},"*",-1),G={class:"inp"},K={key:0,class:"txt_error"},Y={style:{width:"100%"}},Q=(0,i._)("span",{class:"require"},"*",-1),J={class:"inp"},X={key:0,class:"txt_error"},ee={class:"col"},se={class:"form01",style:{display:"flex",gap:"20px"}},te={style:{width:"100%"}},ie=(0,i._)("span",{class:"require"},"*",-1),ae={key:0,class:"txt_error"},le={key:1,class:"txt_error"},oe={style:{width:"100%"}},re=(0,i._)("span",{class:"require"},"*",-1),ue={class:"inp"},ne={key:0,class:"txt_error"},de={class:"row gap"},ce={class:"col"},he={class:"form01"},me=(0,i._)("span",{class:"require"},"*",-1),be={class:"inp"},pe={key:0,class:"txt_error"},_e={class:"col"},Ie={class:"form01"},Ue=(0,i._)("span",{class:"require"},"*",-1),ve={class:"inp"},fe={key:0,class:"txt_error"},ye={class:"row gap"},ge={class:"col"},De={class:"form01"},Ne=(0,i._)("span",{class:"require"},"*",-1),we={class:"col"},Ae={class:"form01"},ke=(0,i._)("span",{class:"require"},"*",-1),Ce={class:"row gap"},$e={class:"col"},Re={class:"footer_btn"},Te={class:"right_side"},Ve={class:"reset"},qe={class:"gridwrap"},Se={class:"grid_option"},Le={class:"option"},xe={key:0},ze=(0,i._)("span",{class:"require"},"*",-1),Oe={class:"tableWrap"},Pe={class:"table01 fixed"},Me=(0,i._)("colgroup",null,[(0,i._)("col",{style:{width:"80px"}}),(0,i._)("col"),(0,i._)("col"),(0,i._)("col"),(0,i._)("col")],-1),We={class:"sticky_head"},Ee={class:"tbody_section"},Be=(0,i._)("p",null,"No Data",-1),je=[Be],Fe={key:0,class:"footer_btn"},Ze={class:"left_side"},He={class:"right_side"},Ge={class:"edit"},Ke={class:"save"};function Ye(e,s){const t=(0,i.up)("BreadCrumb"),Be=(0,i.up)("ion-input"),Ye=(0,i.up)("ion-button"),Qe=(0,i.up)("PhoneInput"),Je=(0,i.up)("VueDatePicker"),Xe=(0,i.up)("ion-select-option"),es=(0,i.up)("ion-select"),ss=(0,i.up)("ion-checkbox"),ts=(0,i.up)("ApprovalReason");return(0,i.wg)(),(0,i.iD)("div",l,[(0,i._)("div",o,[(0,i.Wm)(t,{staticScreenName:"register"==e.viewType?e.$t("cib202003sc01.sub_user_register"):e.$t("cib202003sc01.sub_user_edit"),queryData:{customerNo:e.customerNo,managerBankID:e.managerBankID,customerName:e.customerName,cellPhoneNo:e.cellPhoneNo,userID:e.userID,userRoleID:e.subUserRoleIDName.userRoleID,serviceStatusCode:e.subUserdetail.userInfo.serviceStatusCode}},null,8,["staticScreenName","queryData"])]),(0,i._)("h1",r,(0,a.zw)(e.$t(""+("register"==e.viewType?"cib202003sc01.sub_user_register":"cib202003sc01.sub_user_edit"))),1),(0,i._)("div",u,[(0,i._)("div",n,[(0,i._)("div",d,[(0,i._)("div",c,[(0,i._)("dl",h,[(0,i._)("dt",null,(0,a.zw)(e.$t("cib202003sc01.customer_no")),1),(0,i._)("dd",null,[(0,i._)("div",m,[(0,i._)("div",b,[(0,i.Wm)(Be,{class:"line",placeholder:"",value:"",modelValue:e.subUserdetail.userInfo.customerNo,"onUpdate:modelValue":s[0]||(s[0]=s=>e.subUserdetail.userInfo.customerNo=s),readonly:!e.isDisableInput},null,8,["modelValue","readonly"])])])])])]),(0,i._)("div",p,[(0,i._)("dl",_,[(0,i._)("dt",null,(0,a.zw)(e.$t("cib202003sc01.customer_name")),1),(0,i._)("dd",null,[(0,i._)("div",I,[(0,i._)("div",U,[(0,i.Wm)(Be,{class:"line",placeholder:"",value:"",modelValue:e.subUserdetail.userInfo.customerName,"onUpdate:modelValue":s[1]||(s[1]=s=>e.subUserdetail.userInfo.customerName=s),readonly:!e.isDisableInput},null,8,["modelValue","readonly"])])])])])])]),(0,i._)("div",v,[(0,i._)("div",f,[(0,i._)("dl",y,[(0,i._)("dt",null,(0,a.zw)(e.$t("cib202003sc01.master_user_id")),1),(0,i._)("dd",null,[(0,i._)("div",g,[(0,i._)("div",D,[(0,i.Wm)(Be,{class:"line",placeholder:"",modelValue:e.subUserdetail.userInfo.managerBankID,"onUpdate:modelValue":s[2]||(s[2]=s=>e.subUserdetail.userInfo.managerBankID=s),readonly:!e.isDisableInput},null,8,["modelValue","readonly"])])])])])]),(0,i._)("div",N,[(0,i._)("dl",w,[(0,i._)("dt",null,(0,a.zw)(e.$t("cib202003sc01.master_user_name")),1),(0,i._)("dd",null,[(0,i._)("div",A,[(0,i._)("div",k,[(0,i.Wm)(Be,{class:"line",placeholder:"",modelValue:e.subUserdetail.userInfo.companyName,"onUpdate:modelValue":s[3]||(s[3]=s=>e.subUserdetail.userInfo.companyName=s),readonly:!e.isDisableInput},null,8,["modelValue","readonly"])])])])])])]),(0,i._)("div",C,[(0,i._)("div",$,[(0,i._)("dl",R,[(0,i._)("dt",null,[(0,i.Uk)((0,a.zw)(e.$t("cib202003sc01.user_id")),1),T]),(0,i._)("dd",null,[(0,i._)("div",V,[(0,i._)("div",q,[(0,i._)("dd",null,[(0,i._)("div",{class:(0,a.C_)(["inp_box",{inp_error:(e.isInvalidInput||e.isInvalidUserIDInput)&&""==e.subUserdetail.userInfo.userID}])},[(0,i._)("div",S,[(0,i.Wm)(Be,{class:"line",placeholder:e.$t("cib202003sc01.please_generate_user_id"),disabled:"",modelValue:e.subUserdetail.userInfo.userID,"onUpdate:modelValue":s[4]||(s[4]=s=>e.subUserdetail.userInfo.userID=s),maxlength:"20"},null,8,["placeholder","modelValue"])]),e.isInvalidInput&&""==e.subUserdetail.userInfo.userID?((0,i.wg)(),(0,i.iD)("p",L,(0,a.zw)(e.$t("error_text.user_id_is_required")),1)):(0,i.kq)("",!0)],2)])]),(0,i._)("div",x,[(0,i.Wm)(Ye,{disabled:!e.isEditable||"edit"==e.viewType,class:"btn01 btn_sm",onClick:s[5]||(s[5]=s=>e.handleGenerateUserID())},{default:(0,i.w5)((()=>[(0,i.Uk)((0,a.zw)(e.$t("cib202003sc01.regenerate_id")),1)])),_:1},8,["disabled"])])])])])]),(0,i._)("div",z,[(0,i._)("dl",O,[(0,i._)("dt",null,[(0,i.Uk)((0,a.zw)(e.$t("cib202003sc01.email_address")),1),P]),(0,i._)("dd",null,[(0,i._)("div",{class:(0,a.C_)(["inp_box",{inp_error:e.isInvalidInput&&""==e.subUserdetail.userInfo.email||e.isWrongEmailFormat&&e.subUserdetail.userInfo.email}])},[(0,i._)("div",M,[(0,i.Wm)(Be,{class:"line",placeholder:e.$t("cib202003sc01.enter_email"),modelValue:e.subUserdetail.userInfo.email,"onUpdate:modelValue":s[6]||(s[6]=s=>e.subUserdetail.userInfo.email=s),maxlength:"80",readonly:!e.isEditable||"read"==e.operationMode||"approval"==e.operationMode},null,8,["placeholder","modelValue","readonly"])]),e.isInvalidInput&&""==e.subUserdetail.userInfo.email?((0,i.wg)(),(0,i.iD)("p",W,(0,a.zw)(e.$t("error_text.email_is_required")),1)):(0,i.kq)("",!0),e.isWrongEmailFormat&&e.subUserdetail.userInfo.email?((0,i.wg)(),(0,i.iD)("p",E,(0,a.zw)(e.$t("error_text.email_invalid")),1)):(0,i.kq)("",!0)],2)])])])]),(0,i._)("div",B,[(0,i._)("div",j,[(0,i._)("dl",F,[(0,i._)("div",Z,[(0,i._)("dt",null,[(0,i.Uk)((0,a.zw)(e.$t("cib202003sc01.first_name")),1),H]),(0,i._)("dd",null,[(0,i._)("div",{class:(0,a.C_)(["inp_box",{inp_error:e.isInvalidInput&&""==e.subUserdetail.userInfo.firstName}])},[(0,i._)("div",G,[(0,i.Wm)(Be,{class:"line",required:"",placeholder:e.$t("cib202003sc01.enter_firstname"),value:"",modelValue:e.subUserdetail.userInfo.firstName,"onUpdate:modelValue":s[7]||(s[7]=s=>e.subUserdetail.userInfo.firstName=s),maxlength:"80",readonly:!e.isEditable||"read"==e.operationMode||"approval"==e.operationMode},null,8,["placeholder","modelValue","readonly"])]),e.isInvalidInput&&""==e.subUserdetail.userInfo.firstName?((0,i.wg)(),(0,i.iD)("p",K,(0,a.zw)(e.$t("error_text.user_name_is_required")),1)):(0,i.kq)("",!0)],2)])]),(0,i._)("div",Y,[(0,i._)("dt",null,[(0,i.Uk)((0,a.zw)(e.$t("cib202003sc01.last_name")),1),Q]),(0,i._)("dd",null,[(0,i._)("div",{class:(0,a.C_)(["inp_box",{inp_error:e.isInvalidInput&&""==e.subUserdetail.userInfo.lastName}])},[(0,i._)("div",J,[(0,i.Wm)(Be,{class:"line",placeholder:e.$t("cib202003sc01.enter_lastname"),value:"",modelValue:e.subUserdetail.userInfo.lastName,"onUpdate:modelValue":s[8]||(s[8]=s=>e.subUserdetail.userInfo.lastName=s),maxlength:"80",readonly:!e.isEditable||"read"==e.operationMode||"approval"==e.operationMode},null,8,["placeholder","modelValue","readonly"])]),e.isInvalidInput&&""==e.subUserdetail.userInfo.lastName?((0,i.wg)(),(0,i.iD)("p",X,(0,a.zw)(e.$t("error_text.user_name_is_required")),1)):(0,i.kq)("",!0)],2)])])])]),(0,i._)("div",ee,[(0,i._)("dl",se,[(0,i._)("div",te,[(0,i._)("dt",null,[(0,i.Uk)((0,a.zw)(e.$t("cib202003sc01.cell_phone_no")),1),ie]),(0,i._)("dd",null,[(0,i._)("div",{class:(0,a.C_)(["inp_box",{inp_error:e.isInvalidInput&&""==e.subUserdetail.userInfo.cellPhoneNo||e.isWrongPhoneNumberFormat}])},[(0,i.Wm)(Qe,{class:"inp",modelValue:e.subUserdetail.userInfo.cellPhoneNo,"onUpdate:modelValue":s[9]||(s[9]=s=>e.subUserdetail.userInfo.cellPhoneNo=s),placeholder:e.$t("cib202003sc01.enter_the_number"),disabled:!e.isEditable||"read"==e.operationMode||"approval"==e.operationMode},null,8,["modelValue","placeholder","disabled"]),e.isInvalidInput&&""==e.subUserdetail.userInfo.cellPhoneNo?((0,i.wg)(),(0,i.iD)("p",ae,(0,a.zw)(e.$t("error_text.phone_is_required")),1)):(0,i.kq)("",!0),e.isWrongPhoneNumberFormat?((0,i.wg)(),(0,i.iD)("p",le,(0,a.zw)(e.$t("error_text.phone_invalid")),1)):(0,i.kq)("",!0)],2)])]),(0,i._)("div",oe,[(0,i._)("dt",null,[(0,i.Uk)((0,a.zw)(e.$t("cib202003sc01.date_of_birth")),1),re]),(0,i._)("dd",null,[(0,i.Wm)(Je,{"auto-position":!1,modelValue:e.isbirthDate,"onUpdate:modelValue":s[10]||(s[10]=s=>e.isbirthDate=s),"enable-time-picker":!1,"max-date":e.currentDate,type:"date","auto-apply":"",disabled:!e.isEditable||"read"==e.operationMode||"approval"==e.operationMode},{trigger:(0,i.w5)((()=>[(0,i._)("div",{class:(0,a.C_)(["inp_box type_datetime",{inp_error:e.isInvalidInput&&!e.formattedBirthDate}])},[(0,i._)("div",ue,[(0,i.Wm)(Be,{class:"line",placeholder:e.$t("cib202003sc01.enter_date_of_birth"),value:e.formattedBirthDate,readonly:"",disabled:!e.isEditable||"read"==e.operationMode||"approval"==e.operationMode},null,8,["placeholder","value","disabled"]),(0,i.Wm)(Ye,{class:"btn_date"},{default:(0,i.w5)((()=>[(0,i.Uk)("Calendar")])),_:1})]),e.isInvalidInput&&!e.formattedBirthDate?((0,i.wg)(),(0,i.iD)("p",ne,(0,a.zw)(e.$t("error_text.date_of_birth_is_required")),1)):(0,i.kq)("",!0)],2)])),_:1},8,["modelValue","max-date","disabled"])])])])])]),(0,i._)("div",de,[(0,i._)("div",ce,[(0,i._)("dl",he,[(0,i._)("dt",null,[(0,i.Uk)((0,a.zw)(e.$t("cib202003sc01.depart")),1),me]),(0,i._)("dd",null,[(0,i._)("div",{class:(0,a.C_)(["inp_box",{inp_error:e.isInvalidInput&&""==e.subUserdetail.userInfo.departmentName}])},[(0,i._)("div",be,[(0,i.Wm)(Be,{class:"line",placeholder:e.$t("cib202003sc01.enter_department"),value:"",modelValue:e.subUserdetail.userInfo.departmentName,"onUpdate:modelValue":s[11]||(s[11]=s=>e.subUserdetail.userInfo.departmentName=s),maxlength:"80",readonly:!e.isEditable||"read"==e.operationMode||"approval"==e.operationMode},null,8,["placeholder","modelValue","readonly"])]),e.isInvalidInput&&""==e.subUserdetail.userInfo.departmentName?((0,i.wg)(),(0,i.iD)("p",pe,(0,a.zw)(e.$t("error_text.department_is_required")),1)):(0,i.kq)("",!0)],2)])])]),(0,i._)("div",_e,[(0,i._)("dl",Ie,[(0,i._)("dt",null,[(0,i.Uk)((0,a.zw)(e.$t("cib202003sc01.position")),1),Ue]),(0,i._)("dd",null,[(0,i._)("div",{class:(0,a.C_)(["inp_box",{inp_error:e.isInvalidInput&&""==e.subUserdetail.userInfo.jobTitleName}])},[(0,i._)("div",ve,[(0,i.Wm)(Be,{class:"line",placeholder:e.$t("cib202003sc01.enter_job_title"),value:"",modelValue:e.subUserdetail.userInfo.jobTitleName,"onUpdate:modelValue":s[12]||(s[12]=s=>e.subUserdetail.userInfo.jobTitleName=s),maxlength:"100",readonly:!e.isEditable||"read"==e.operationMode||"approval"==e.operationMode},null,8,["placeholder","modelValue","readonly"])]),e.isInvalidInput&&""==e.subUserdetail.userInfo.jobTitleName?((0,i.wg)(),(0,i.iD)("p",fe,(0,a.zw)(e.$t("error_text.position_is_required")),1)):(0,i.kq)("",!0)],2)])])])]),(0,i._)("div",ye,[(0,i._)("div",ge,[(0,i._)("dl",De,[(0,i._)("dt",null,[(0,i.Uk)((0,a.zw)(e.$t("cib202003sc01.user_status")),1),Ne]),(0,i._)("dd",null,[(0,i.Wm)(es,{interface:"popover",interfaceOptions:{size:"cover"},class:"line",modelValue:e.subUserdetail.userInfo.serviceStatusCode,"onUpdate:modelValue":s[13]||(s[13]=s=>e.subUserdetail.userInfo.serviceStatusCode=s),disabled:!e.isEditable||"register"===e.viewType||e.isApplicationCode||"read"==e.operationMode||"approval"==e.operationMode},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.serviceStatusCodeList,(s=>((0,i.wg)(),(0,i.j4)(Xe,{value:s.key},{default:(0,i.w5)((()=>[(0,i.Uk)((0,a.zw)(e.subUserRole(s.key,s.value)),1)])),_:2},1032,["value"])))),256))])),_:1},8,["modelValue","disabled"])])])]),(0,i._)("div",we,[(0,i._)("dl",Ae,[(0,i._)("dt",null,[(0,i.Uk)((0,a.zw)(e.$t("cib202003sc01.role")),1),ke]),(0,i._)("dd",null,[(0,i._)("div",Ce,[(0,i._)("div",$e,[(0,i.Wm)(es,{interface:"popover",interfaceOptions:{size:"cover"},class:"line",placeholder:e.$t("cib202003sc01.please_select_role"),modelValue:e.subUserRoleIDName.userRoleID,"onUpdate:modelValue":s[14]||(s[14]=s=>e.subUserRoleIDName.userRoleID=s),disabled:!e.isEditable||e.isMainUserRoleIDIsSTP||"read"==e.operationMode||"approval"==e.operationMode},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.userRole,(s=>((0,i.wg)(),(0,i.j4)(Xe,{value:s.userRoleID},{default:(0,i.w5)((()=>[(0,i.Uk)((0,a.zw)(e.subUserRole(s.userRoleID,s.userRoleName)),1)])),_:2},1032,["value"])))),256))])),_:1},8,["placeholder","modelValue","disabled"])])])])])])])])]),(0,i._)("div",Re,[(0,i._)("div",Te,["edit"==e.viewType?((0,i.wg)(),(0,i.j4)(Ye,{key:0,class:"btn01 btn_ico",onClick:s[15]||(s[15]=s=>e.resetPasswordViaEmail())},{default:(0,i.w5)((()=>[(0,i._)("span",Ve,(0,a.zw)(e.$t("cib202003sc01.reset_password_via_email")),1)])),_:1})):(0,i.kq)("",!0)])]),(0,i._)("div",qe,[(0,i._)("div",Se,[(0,i._)("div",Le,[e.isInvalidAccountLength?((0,i.wg)(),(0,i.iD)("p",xe,[ze,(0,i.Uk)((0,a.zw)(e.$t("message.please_choose_at_least_one_account_for_Vview_only_or_full_access")),1)])):(0,i.kq)("",!0)])]),(0,i._)("div",Oe,[(0,i._)("table",Pe,[Me,(0,i._)("thead",We,[(0,i._)("tr",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.headers,(e=>((0,i.wg)(),(0,i.iD)("th",null,[(0,i._)("span",null,(0,a.zw)(e.columnName),1)])))),256))])]),(0,i._)("tbody",Ee,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.subUserdetail.userAccountList,((s,t)=>((0,i.wg)(),(0,i.iD)("tr",null,[(0,i._)("td",null,[(0,i._)("span",null,(0,a.zw)(e.subUserNO(t,e.startingNo)),1)]),(0,i._)("td",null,[(0,i._)("span",null,(0,a.zw)(s.accountNo),1)]),(0,i._)("td",null,[(0,i._)("span",null,(0,a.zw)(s.accountTypeCode),1)]),(0,i._)("td",null,[(0,i.Wm)(ss,{onIonChange:s=>e.onChangeViewOnly(t),value:s.viewOnly,modelValue:s.viewOnly,"onUpdate:modelValue":e=>s.viewOnly=e,disabled:!e.isEditable||e.isViewOnlyAccount[t]},null,8,["onIonChange","value","modelValue","onUpdate:modelValue","disabled"])]),(0,i._)("td",null,[(0,i.Wm)(ss,{onIonChange:s=>e.onChangeFullAccess(t),value:s.fullAccess,modelValue:s.fullAccess,"onUpdate:modelValue":e=>s.fullAccess=e,disabled:!e.isEditable||e.isViewOnlyAccount[t]},null,8,["onIonChange","value","modelValue","onUpdate:modelValue","disabled"])])])))),256))])]),(0,i._)("div",{class:(0,a.C_)([0!==e.subUserdetail.userAccountList.length?"none":"","no_data"])},je,2)])]),"normal"==e.operationMode?((0,i.wg)(),(0,i.iD)("div",Fe,[(0,i._)("div",Ze,[e.buttonAction?((0,i.wg)(),(0,i.j4)(Ye,{key:0,class:"btn03",onClick:s[16]||(s[16]=s=>e.handleActionClick("cancel"))},{default:(0,i.w5)((()=>[(0,i._)("span",null,(0,a.zw)(e.$t("common.cancel")),1)])),_:1})):(0,i.kq)("",!0),e.buttonAction?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(Ye,{key:1,class:"btn01",onClick:s[17]||(s[17]=s=>e.handleActionClick("backToList"))},{default:(0,i.w5)((()=>[(0,i._)("span",null,(0,a.zw)(e.$t("common.list")),1)])),_:1}))]),(0,i._)("div",He,[e.buttonAction?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(Ye,{key:0,class:"btn01 btn_ico",onClick:s[18]||(s[18]=s=>e.handleActionClick("edit")),disabled:e.isDisableEdit},{default:(0,i.w5)((()=>[(0,i._)("span",Ge,(0,a.zw)(e.$t("common.edit")),1)])),_:1},8,["disabled"])),e.buttonAction?((0,i.wg)(),(0,i.j4)(Ye,{key:1,class:"btn01 btn_ico",onClick:s[19]||(s[19]=s=>e.handleActionClick("save"))},{default:(0,i.w5)((()=>[(0,i._)("span",Ke,(0,a.zw)(e.$t("common.save")),1)])),_:1})):(0,i.kq)("",!0)])])):(0,i.kq)("",!0),"normal"!==e.operationMode?((0,i.wg)(),(0,i.j4)(ts,{key:1,payload:e.approvalRes},null,8,["payload"])):(0,i.kq)("",!0)])}}}]);
//# sourceMappingURL=2963.4ce20e49.js.map