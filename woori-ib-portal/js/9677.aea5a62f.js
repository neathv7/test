"use strict";(self["webpackChunkbizMOB4Vue"]=self["webpackChunkbizMOB4Vue"]||[]).push([[9677],{27365:function(e,t,a){a.a(e,(async function(e,l){try{var s=a(66252),n=a(43493),r=a(90121),i=a(67201),c=e([r]);r=(c.then?(await c)():c)[0],t["Z"]=(0,s.aZ)({components:{BreadCrumb:r.Z,SelectOption:i.Z},data(){const e={chequeQty:"",feeAmount:"",currencyCode:"",visitBranchName:"",receiverContactNo:"",receiverName:"",sourceOfFundAccountNo:"",internetBankingApprovalNo:0,checkBookProgressStatusCode:"",remark:"Remark",receiverPositionTitle:"",receiverIDNo:"",receiverIDTypeCode:"",chequeBookQty:""};return{requestBankerCheckDetail:e,isEditable:!0,isInValidInput:!0}},computed:{status(){return this.$store.state.CommonCodeModule.commonCode.Status},statusCodeValue(){return(e,t)=>`${e} : ${t}`}},created(){},methods:{async getRequestBankerCheckDetail(){const e={internetBankingApprovalNo:Number(this.$route.query.internetBankingApprovalNo),approvalRequestDate:this.$route.query.approvalRequestDate},t=await this.$request.getRequest("DCM20100112",e,!0);t.header.result&&(this.requestBankerCheckDetail={chequeBookQty:t.body.chequeBookQty,feeAmount:this.$format.formatCurrency(t.body.feeAmount,t.body.currencyCode),visitBranchName:t.body.visitBranchName,receiverIDNo:t.body.receiverIDNo,receiverName:t.body.receiverName,sourceOfFundAccountNo:t.body.sourceOfFundAccountNo,chequeQty:t.body.chequeQty,currencyCode:t.body.currencyCode,internetBankingApprovalNo:t.body.internetBankingApprovalNo,receiverContactNo:this.$format.formatPhoneNumber(t.body.receiverContactNo),checkBookProgressStatusCode:t.body.checkBookProgressStatusCode,remark:t.body.remark,receiverIDTypeCode:this.$codeConverter.convertValue("ReceiverIDTypeCode",t.body.receiverIDTypeCode),receiverPositionTitle:t.body.receiverPositionTitle})},async updateRequestBankerCheck(){const e={approvalRequestDate:this.$route.query.approvalRequestDate,internetBankingApprovalNo:this.requestBankerCheckDetail.internetBankingApprovalNo,remark:this.requestBankerCheckDetail.remark},t=await this.$request.getRequest("DCM20100141",e,!0);t.header.result&&(this.isEditable=!0,this.$dialog.onOpen({content:this.$t("message.update_success"),dialogMode:"Success",callback:()=>{n.Fy.dismiss()}}))},handleSave(){this.isInValidInput=!1,""!==this.requestBankerCheckDetail.remark?this.$dialog.onOpen({content:this.$t("message.would_you_like_to_save"),dialogMode:"Question",callback:()=>{n.Fy.dismiss()}}):this.isInValidInput=!0},handleCancel(){this.$dialog.onOpen({content:`${this.$t("message.cancel_without_saving_changes")}`,dialogMode:"Question",callback:()=>{this.getRequestBankerCheckDetail(),this.isInValidInput=!1,this.isEditable=!0}})},goToList(){this.$router.push("DCM201002SC00")},handleClickAction(e){switch(e){case"edit":this.isEditable=!1;break;default:this.goToList();break}}}}),l()}catch(o){l(o)}}))},73204:function(e,t,a){a.a(e,(async function(e,l){try{a.r(t);var s=a(8202),n=a(28444),r=(a(59127),a(83744)),i=e([n]);n=(i.then?(await i)():i)[0];const c=(0,r.Z)(n.Z,[["render",s.s],["__scopeId","data-v-4af276d0"]]);t["default"]=c,l()}catch(c){l(c)}}))},59127:function(){},28444:function(e,t,a){a.a(e,(async function(e,l){try{a.d(t,{Z:function(){return s.Z}});var s=a(27365),n=e([s]);s=(n.then?(await n)():n)[0],l()}catch(r){l(r)}}))},8202:function(e,t,a){a.d(t,{s:function(){return g}});var l=a(66252),s=a(3577);const n=e=>((0,l.dD)("data-v-4af276d0"),e=e(),(0,l.Cn)(),e),r={class:"contentWrap"},i={class:"title_name"},c={class:"cont"},o={class:"card_box"},d={class:"wrap_info border_top type02"},u={class:"full"},k={class:"row"},h={class:"col"},p={class:"form01"},_=n((()=>(0,l._)("span",{class:"require"},"*",-1))),m={class:"row"},b={class:"col"},v={class:"form01"},C=n((()=>(0,l._)("span",{class:"require"},"*",-1))),y={class:"inp"},q={key:0,class:"txt_error"},w={class:"footer_btn"},D={class:"left_side"},B={class:"right_side"},f={class:"edit"},$={class:"save"};function g(e,t){const a=(0,l.up)("BreadCrumb"),n=(0,l.up)("SelectOption"),g=(0,l.up)("ion-textarea"),N=(0,l.up)("ion-button");return(0,l.wg)(),(0,l.iD)("div",r,[(0,l.Wm)(a,{staticScreenName:"register"==e.$route.query.type?"":e.$t("dcm201002sc01.label.title")},null,8,["staticScreenName"]),(0,l._)("h1",i,(0,s.zw)(e.$t("dcm201002sc01.label.title")),1),(0,l._)("div",c,[(0,l._)("div",o,[(0,l._)("div",d,[(0,l._)("dl",null,[(0,l._)("dt",null,(0,s.zw)(e.$t("dcm201002sc01.label.account_no")),1),(0,l._)("dd",null,(0,s.zw)(e.requestBankerCheckDetail.approvalRequestDate),1)]),(0,l._)("dl",null,[(0,l._)("dt",null,(0,s.zw)(e.$t("dcm201002sc01.label.amount")),1),(0,l._)("dd",null,(0,s.zw)(e.requestBankerCheckDetail.approvalRequestDate),1)]),(0,l._)("dl",null,[(0,l._)("dt",null,(0,s.zw)(e.$t("dcm201002sc01.label.currency")),1),(0,l._)("dd",null,(0,s.zw)(e.requestBankerCheckDetail.approvalRequestDate),1)]),(0,l._)("dl",null,[(0,l._)("dt",null,(0,s.zw)(e.$t("dcm201002sc01.label.beneficiary_name")),1),(0,l._)("dd",null,(0,s.zw)(e.requestBankerCheckDetail.approvalRequestDate),1)]),(0,l._)("dl",null,[(0,l._)("dt",null,(0,s.zw)(e.$t("dcm201002sc01.label.branch_to_visit")),1),(0,l._)("dd",null,(0,s.zw)(e.requestBankerCheckDetail.approvalRequestDate),1)]),(0,l._)("dl",null,[(0,l._)("dt",null,(0,s.zw)(e.$t("dcm201002sc01.label.reason")),1),(0,l._)("dd",null,(0,s.zw)(e.requestBankerCheckDetail.approvalRequestDate),1)]),(0,l._)("dl",u,[(0,l._)("dt",null,(0,s.zw)(e.$t("dcm201002sc01.label.pay_for")),1),(0,l._)("dd",null,(0,s.zw)(e.requestBankerCheckDetail.approvalRequestDate),1)])]),(0,l._)("div",k,[(0,l._)("div",h,[(0,l._)("dl",p,[(0,l._)("dt",null,[(0,l.Uk)((0,s.zw)(e.$t("dcm201002sc01.label.status")),1),_]),(0,l._)("dd",null,[(0,l.Wm)(n,{data:e.status,modelValue:e.requestBankerCheckDetail.status,"onUpdate:modelValue":t[0]||(t[0]=t=>e.requestBankerCheckDetail.status=t),disabled:e.isEditable,class:"line"},null,8,["data","modelValue","disabled"])])])])]),(0,l._)("div",m,[(0,l._)("div",b,[(0,l._)("dl",v,[(0,l._)("dt",null,[(0,l.Uk)((0,s.zw)(e.$t("dcm201002sc01.label.remark")),1),C]),(0,l._)("dd",null,[(0,l._)("div",{class:(0,s.C_)(["inp_box",{inp_error:e.isInValidInput&&!e.requestBankerCheckDetail.remark}])},[(0,l._)("div",y,[(0,l.Wm)(g,{class:"line",placeholder:e.$t("dcm201002sc01.label.remark"),readonly:e.isEditable,modelValue:e.requestBankerCheckDetail.remark,"onUpdate:modelValue":t[1]||(t[1]=t=>e.requestBankerCheckDetail.remark=t)},null,8,["placeholder","readonly","modelValue"])]),e.isInValidInput&&!e.requestBankerCheckDetail.remark?((0,l.wg)(),(0,l.iD)("p",q,(0,s.zw)(e.$t("error_text.field_empty")),1)):(0,l.kq)("",!0)],2)])])])])]),(0,l._)("div",w,[(0,l._)("div",D,[e.isEditable?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(N,{key:0,class:"btn03",onClick:e.handleCancel},{default:(0,l.w5)((()=>[(0,l._)("span",null,(0,s.zw)(e.$t("common.cancel")),1)])),_:1},8,["onClick"])),e.isEditable?((0,l.wg)(),(0,l.j4)(N,{key:1,class:"btn02",onClick:t[2]||(t[2]=t=>e.handleClickAction("list"))},{default:(0,l.w5)((()=>[(0,l._)("span",null,(0,s.zw)(e.$t("common.list")),1)])),_:1})):(0,l.kq)("",!0)]),(0,l._)("div",B,[e.isEditable?((0,l.wg)(),(0,l.j4)(N,{key:0,class:"btn02 btn_ico",onClick:t[3]||(t[3]=t=>e.handleClickAction("edit"))},{default:(0,l.w5)((()=>[(0,l._)("span",f,(0,s.zw)(e.$t("common.edit")),1)])),_:1})):((0,l.wg)(),(0,l.j4)(N,{key:1,class:"btn01 btn_ico",onClick:e.handleSave,disabled:e.isEditable},{default:(0,l.w5)((()=>[(0,l._)("span",$,(0,s.zw)(e.$t("common.save")),1)])),_:1},8,["onClick","disabled"]))])])])])}}}]);
//# sourceMappingURL=9677.aea5a62f.js.map