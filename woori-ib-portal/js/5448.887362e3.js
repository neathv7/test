"use strict";(self["webpackChunkbizMOB4Vue"]=self["webpackChunkbizMOB4Vue"]||[]).push([[5448],{45448:function(e,o,a){a.r(o),a.d(o,{default:function(){return E}});var t=a(66252),i=a(3577);const r={class:"tab_cont"},s={class:"row gap"},n={class:"col"},l={class:"form01"},u={class:"inp"},c={key:0,class:"txt_error"},d={class:"col"},p={class:"form01"},g={class:"inp"},m={key:0,class:"txt_error"},b={class:"row gap"},f={class:"col-6"},h={class:"form01"},_={class:"inp"},C={key:0,class:"txt_error"},y={class:"col-6"},v={class:"form01"},w={class:"inp"},N={key:0,class:"txt_error"};function x(e,o){const a=(0,t.up)("ion-input");return(0,t.wg)(),(0,t.iD)("div",r,[(0,t._)("div",s,[(0,t._)("div",n,[(0,t._)("dl",l,[(0,t._)("dt",null,(0,i.zw)(e.$t("com210001ss03.first_login_required_days")),1),(0,t._)("dd",null,[(0,t._)("div",{class:(0,i.C_)(["inp_box",{inp_error:Number(e.firstLoginConfig.configNumber)<=0}])},[(0,t._)("div",u,[(0,t.Wm)(a,{class:"line",type:"number",modelValue:e.firstLoginConfig.configNumber,"onUpdate:modelValue":o[0]||(o[0]=o=>e.firstLoginConfig.configNumber=o),readonly:e.isDisable},null,8,["modelValue","readonly"])]),Number(e.firstLoginConfig.configNumber)<=0?((0,t.wg)(),(0,t.iD)("p",c,"Login required day can't be zero")):(0,t.kq)("",!0)],2)])])]),(0,t._)("div",d,[(0,t._)("dl",p,[(0,t._)("dt",null,(0,i.zw)(e.$t("com210001ss03.automatic_account_deactivation")),1),(0,t._)("dd",null,[(0,t._)("div",{class:(0,i.C_)(["inp_box",{inp_error:Number(e.autoDeactivateConfig.configNumber)<=0}])},[(0,t._)("div",g,[(0,t.Wm)(a,{class:"line",type:"number",modelValue:e.autoDeactivateConfig.configNumber,"onUpdate:modelValue":o[1]||(o[1]=o=>e.autoDeactivateConfig.configNumber=o),readonly:e.isDisable},null,8,["modelValue","readonly"])]),Number(e.autoDeactivateConfig.configNumber)<=0?((0,t.wg)(),(0,t.iD)("p",m,"Deactivation count can't be zero")):(0,t.kq)("",!0)],2)])])])]),(0,t._)("div",b,[(0,t._)("div",f,[(0,t._)("dl",h,[(0,t._)("dt",null,(0,i.zw)(e.$t("com210001ss01.password_max_error_count")),1),(0,t._)("dd",null,[(0,t._)("div",{class:(0,i.C_)(["inp_box",{inp_error:Number(e.pwdMaxErrorCount.configNumber)<=0}])},[(0,t._)("div",_,[(0,t.Wm)(a,{class:"line",type:"number",modelValue:e.pwdMaxErrorCount.configNumber,"onUpdate:modelValue":o[2]||(o[2]=o=>e.pwdMaxErrorCount.configNumber=o),readonly:e.isDisable},null,8,["modelValue","readonly"])]),Number(e.pwdMaxErrorCount.configNumber)<=0?((0,t.wg)(),(0,t.iD)("p",C,"Password max error count can't be zero")):(0,t.kq)("",!0)],2)])])]),(0,t._)("div",y,[(0,t._)("dl",v,[(0,t._)("dt",null,(0,i.zw)(e.$t("com210001ss01.authentication_max_error_count")),1),(0,t._)("dd",null,[(0,t._)("div",{class:(0,i.C_)(["inp_box",{inp_error:Number(e.otpMaxErrorCount.configNumber)<=0}])},[(0,t._)("div",w,[(0,t.Wm)(a,{class:"line",type:"number",modelValue:e.otpMaxErrorCount.configNumber,"onUpdate:modelValue":o[3]||(o[3]=o=>e.otpMaxErrorCount.configNumber=o),readonly:e.isDisable},null,8,["modelValue","readonly"])]),Number(e.otpMaxErrorCount.configNumber)<=0?((0,t.wg)(),(0,t.iD)("p",N,"OTP max error count can't be zero")):(0,t.kq)("",!0)],2)])])])])])}var D=a(43493),M=(0,t.aZ)({name:"com210001ss03",data(){return{isDisable:!0,inRequiredInput:!1,approvalRes:{},operationMode:"normal",firstLoginConfig:{},autoDeactivateConfig:{},pwdMaxErrorCount:{},otpMaxErrorCount:{}}},async mounted(){""==this.approvalType?this.getPolicyConfigurationData():await this.$approval.getAuthorizationDetail().then((e=>{let o=JSON.parse(e.body.requestContent);this.approvalRes=e.body,this.operationMode="my-request"==this.approvalType?"read":"my-approval"==this.approvalType?"approval":"normal",this.$emit("operationMode",this.operationMode),this.$emit("approvalResponse",this.approvalRes),o.body.policyConfig.forEach((e=>{switch(e.configCode){case"003":this.pwdMaxErrorCount=e;break;case"004":this.firstLoginConfig=e;break;case"011":this.autoDeactivateConfig=e;break;case"012":this.otpMaxErrorCount=e;break}}))}))},computed:{approvalType(){return this.$route.query.approvalType?this.$route.query.approvalType.toString():""}},methods:{handleEvent(e){switch(e){case"cancel":this.$dialog.onOpen({dialogMode:"Question",content:`${this.$t("message.are_you_sure_you_want_to_cancel_without_saving_data")}`,callback:()=>{this.isDisable=!0,this.getPolicyConfigurationData(),this.$emit("isResetEditable",!1),this.$emit("isTapChange",!0),D.Fy.dismiss()}});break;case"edit":this.isDisable=!1;break;case"save":Number(this.firstLoginConfig.configNumber)>0&&Number(this.autoDeactivateConfig.configNumber)>0&&Number(this.pwdMaxErrorCount.configNumber)>0&&Number(this.otpMaxErrorCount.configNumber)>0&&this.$dialog.onOpen({dialogMode:"Question",content:`${this.$t("message.would_you_like_to_save")}`,callback:async()=>{await this.updatePolicyConfiguration().then((e=>{e&&(this.isDisable=!0,this.$emit("isResetEditable",!1),this.$emit("isTapChange",!0))})),D.Fy.dismiss()}});break;default:break}},async getPolicyConfigurationData(){const e={configCode:"003,004,011,012"},o=await this.$request.getRequest("COM21000115",e,!1);o.header.result&&o.body.list.forEach((e=>{switch(e.configCode){case"003":this.pwdMaxErrorCount=e;break;case"004":this.firstLoginConfig=e;break;case"011":this.autoDeactivateConfig=e;break;case"012":this.otpMaxErrorCount=e;break}}))},async updatePolicyConfiguration(){const e={list:[this.firstLoginConfig,this.autoDeactivateConfig,this.pwdMaxErrorCount,this.otpMaxErrorCount]},o=await this.$request.getRequest("COM21000135",e,!1,"COM210001SS03");return this.approvalType&&(this.isDisable=!0),o.header.result&&(this.getPolicyConfigurationData(),this.isDisable=!0,this.$dialog.onOpen({content:`${this.$t("message.update_success")}`,dialogMode:"Success",callback:()=>{D.Fy.dismiss()}})),o.header.result}}}),k=a(83744);const $=(0,k.Z)(M,[["render",x],["__scopeId","data-v-6380620c"]]);var E=$}}]);
//# sourceMappingURL=5448.887362e3.js.map