"use strict";(self["webpackChunkbizMOB4Vue"]=self["webpackChunkbizMOB4Vue"]||[]).push([[7179],{67609:function(i,t,a){a.d(t,{Z:function(){return y}});var s=a(66252),n=a(3577);const e={key:0,class:"unit"};function r(i,t){const a=(0,s.up)("ion-input");return(0,s.wg)(),(0,s.j4)(a,{class:(0,n.C_)([[i.showCurrency&&"inp_amount","line","type_amount","right"===i.textAlign?"align-right":""],"type_amount"]),value:i.displayVal,maxLength:16,style:(0,n.j5)({"text-align":i.textAlign}),onKeydown:i.onKeyDown,onIonInput:i.onChange,onIonBlur:i.onBlur,onIonFocus:i.onFocus},{default:(0,s.w5)((()=>[i.showCurrency?((0,s.wg)(),(0,s.iD)("span",e,(0,n.zw)(i.currency),1)):(0,s.kq)("",!0)])),_:1},8,["class","value","style","onKeydown","onIonInput","onIonBlur","onIonFocus"])}const l=8,o=37,m=39,u=46,c=13,d=190;var h=(0,s.aZ)({name:"CurrencyInput",props:{modelValue:{type:String,required:!0},currency:{type:String,required:!0,default:"USD"},showCurrency:{type:Boolean,default:!0},autoConvert:{type:String,default:"USD"},textAlign:{type:String,default:"right"}},emits:["update:modelValue"],data(){return{displayVal:"0",isFocus:!1}},mounted(){"KHR"==this.autoConvert?this.onFormat(""+4e3*Number(this.modelValue)):this.onFormat(this.modelValue)},watch:{modelValue(i,t){"KHR"==this.autoConvert?i!==t&&(this.isFocus?this.onUnformat(4e3*i):this.onFormat(4e3*i)):i!==t&&(this.isFocus?this.onUnformat(i):this.onFormat(i))},currency(){"KHR"==this.autoConvert?this.isFocus?this.onUnformat(4e3*Number(this.modelValue)):this.onFormat(4e3*Number(this.modelValue)):this.isFocus?this.onUnformat(this.modelValue):this.onFormat(this.modelValue)}},methods:{onUnformat(i){if(!i||"0"==i||0==i||"0.00"==i)return void(this.displayVal="0");const t=i.toString();if("string"==typeof t&&t.includes(",")){const i=t.toString();this.displayVal=this.$format.unformatCurrency(i)}else this.displayVal=t},onFormat(i){if(!i||"0"==i||0==i)return void(this.displayVal="USD"==this.currency?"0.00":"0");const t=i.toString();if("string"!=typeof t||t.includes(","))this.displayVal=t;else{const i=parseFloat(t);this.displayVal=this.$format.formatCurrency(i,this.currency)}},onChange(i){const t=i.target.value;this.$emit("update:modelValue",t)},onKeyDown(i){const t=i,a=t.which?t.which:t.keyCode;if(/\d/.test(i.key)||a===l||a===o||a===m||a===u||a===c||a===d){if(a===c)this.onBlur();else if(a===d)("KHR"==this.currency||"string"===typeof this.modelValue&&this.modelValue.includes("."))&&i.preventDefault();else if(/\d/.test(i.key)&&"string"===typeof this.modelValue&&this.modelValue.includes(".")){const a=this.modelValue.split(".");a.length>1&&i.currentTarget.getInputElement().then((i=>{const s=i.selectionEnd;(s==this.modelValue.length&&2==a[1].length||s==this.modelValue.length-1&&2==a[1].length||s==this.modelValue.length-2&&2==a[1].length)&&t.preventDefault()}))}}else t.preventDefault()},onBlur(){this.onFormat(this.modelValue),this.isFocus=!1},onFocus(){this.onUnformat(this.modelValue),this.isFocus=!0}}}),p=a(83744);const L=(0,p.Z)(h,[["render",r],["__scopeId","data-v-50b37962"]]);var y=L},7179:function(i,t,a){a.r(t),a.d(t,{default:function(){return gi}});var s=a(66252),n=a(3577);const e=i=>((0,s.dD)("data-v-6893e245"),i=i(),(0,s.Cn)(),i),r={class:"tab_cont"},l={class:"txt_limit"},o={class:"row gap"},m={class:"col"},u={class:"form01"},c={class:"row gap"},d={class:"col"},h={class:"inp_box"},p={class:"inp"},L=e((()=>(0,s._)("span",{class:"unit"},"USD",-1))),y={class:"col"},_={class:"inp_box"},f={class:"inp"},D=e((()=>(0,s._)("span",{class:"unit"},"KHR",-1))),g={class:"row gap"},v={class:"col"},x={class:"form01"},A=e((()=>(0,s._)("span",{class:"require"},"*",-1))),b={class:"row gap"},C={class:"col"},w={class:"form01"},V={class:"inp_box"},T={class:"inp"},I=e((()=>(0,s._)("span",{class:"unit"},"USD",-1))),S={key:0,class:"txt_error"},K={key:1,class:"txt_error"},R={class:"col"},U={class:"inp_box"},k={class:"inp"},$=e((()=>(0,s._)("span",{class:"unit"},"KHR",-1))),q={class:"txt_limit"},E={class:"row gap"},F={class:"col"},N={class:"form01"},z=e((()=>(0,s._)("span",{class:"require"},"*",-1))),B={class:"row gap"},H={class:"col"},O={class:"inp_box"},W={class:"inp"},Z=e((()=>(0,s._)("span",{class:"unit"},"USD",-1))),M={class:"col"},J={class:"inp_box"},j={class:"inp"},Q=e((()=>(0,s._)("span",{class:"unit"},"KHR",-1))),G={class:"row gap"},P={class:"col"},X={class:"form01"},Y={class:"row gap"},ii={class:"col"},ti={class:"form01"},ai={class:"inp_box"},si={class:"inp"},ni=e((()=>(0,s._)("span",{class:"unit"},"USD",-1))),ei={key:0,class:"txt_error"},ri={key:1,class:"txt_error"},li={class:"col"},oi={class:"inp_box"},mi={class:"inp"},ui=e((()=>(0,s._)("span",{class:"unit"},"KHR",-1)));function ci(i,t){const a=(0,s.up)("CurrencyInput");return(0,s.wg)(),(0,s.iD)("div",r,[(0,s._)("h4",l,[(0,s._)("strong",null,(0,n.zw)(i.$t("cib201003ss04.bank_maximum_transaction_limit")),1),(0,s._)("span",null,(0,n.zw)(i.maxTransaction)+" / "+(0,n.zw)(i.maxTransactionLimitKhr||0),1)]),(0,s._)("div",o,[(0,s._)("div",m,[(0,s._)("dl",u,[(0,s._)("dt",null,(0,n.zw)(i.$t("cib201003ss04.remaining_limit_amount")),1),(0,s._)("dd",null,[(0,s._)("div",c,[(0,s._)("div",d,[(0,s._)("div",h,[(0,s._)("div",p,[(0,s._)("div",null,[(0,s.Wm)(a,{modelValue:i.remainingLimit,"onUpdate:modelValue":t[0]||(t[0]=t=>i.remainingLimit=t),currency:"USD",showCurrency:!1,disabled:""},null,8,["modelValue"]),L])])])]),(0,s._)("div",y,[(0,s._)("div",_,[(0,s._)("div",f,[(0,s._)("div",null,[(0,s.Wm)(a,{modelValue:i.remainingLimitKhr,"onUpdate:modelValue":t[1]||(t[1]=t=>i.remainingLimitKhr=t),currency:"USD",showCurrency:!1,disabled:""},null,8,["modelValue"]),D])])])])])])])])]),(0,s._)("div",g,[(0,s._)("div",v,[(0,s._)("dl",x,[(0,s._)("dt",null,[(0,s.Uk)((0,n.zw)(i.$t("cib201003ss04.transaction_limit_amount"))+" ",1),A]),(0,s._)("dd",null,[(0,s._)("div",b,[(0,s._)("div",C,[(0,s._)("dl",w,[(0,s._)("div",V,[(0,s._)("div",{class:(0,n.C_)({inp_error:i.isInquiredInput&&""===i.transferLimitData.limitList.transactionLimitAmount||i.isExceedTransactionLimitAmount&&i.transferLimitData.limitList.transactionLimitAmount})},[(0,s._)("div",T,[(0,s.Wm)(a,{modelValue:i.transferLimitData.limitList.transactionLimitAmount,"onUpdate:modelValue":t[2]||(t[2]=t=>i.transferLimitData.limitList.transactionLimitAmount=t),currency:"USD",class:"line",showCurrency:!1,disabled:!i.isEditable},null,8,["modelValue","disabled"]),I]),i.isInquiredInput&&""===i.transferLimitData.limitList.transactionLimitAmount?((0,s.wg)(),(0,s.iD)("p",S,(0,n.zw)(i.$t("error_text.transaction_limit_is_required")),1)):(0,s.kq)("",!0),i.isExceedTransactionLimitAmount&&i.transferLimitData.limitList.transactionLimitAmount?((0,s.wg)(),(0,s.iD)("p",K,(0,n.zw)(i.$t("cib201003ss04.amount_exceed_maximum_transaction_limit")),1)):(0,s.kq)("",!0)],2)])])]),(0,s._)("div",R,[(0,s._)("div",U,[(0,s._)("div",k,[(0,s._)("div",null,[(0,s.Wm)(a,{modelValue:i.transactionLimitKhr,"onUpdate:modelValue":t[3]||(t[3]=t=>i.transactionLimitKhr=t),showCurrency:!1,disabled:""},null,8,["modelValue"]),$])])])])])])])])]),(0,s._)("h4",q,[(0,s._)("strong",null,(0,n.zw)(i.$t("cib201003ss04.bank_maximum_daily_limit")),1),(0,s._)("span",null,(0,n.zw)(i.maxDailyLimit)+" / "+(0,n.zw)(i.maxDailyLimitKhr||0),1)]),(0,s._)("div",E,[(0,s._)("div",F,[(0,s._)("dl",N,[(0,s._)("dt",null,[(0,s.Uk)((0,n.zw)(i.$t("cib201003ss04.remaining_limit_amount"))+" ",1),z]),(0,s._)("dd",null,[(0,s._)("div",B,[(0,s._)("div",H,[(0,s._)("div",O,[(0,s._)("div",W,[(0,s._)("div",null,[(0,s.Wm)(a,{modelValue:i.dailyLimitRemaining,"onUpdate:modelValue":t[4]||(t[4]=t=>i.dailyLimitRemaining=t),showCurrency:!1,disabled:""},null,8,["modelValue"]),Z])])])]),(0,s._)("div",M,[(0,s._)("div",J,[(0,s._)("div",j,[(0,s._)("div",null,[(0,s.Wm)(a,{modelValue:i.dailyLimitRemainingKhr,"onUpdate:modelValue":t[5]||(t[5]=t=>i.dailyLimitRemainingKhr=t),showCurrency:!1,disabled:""},null,8,["modelValue"]),Q])])])])])])])])]),(0,s._)("div",G,[(0,s._)("div",P,[(0,s._)("dl",X,[(0,s._)("dt",null,(0,n.zw)(i.$t("cib201003ss04.daily_limit_amount")),1),(0,s._)("dd",null,[(0,s._)("div",Y,[(0,s._)("div",ii,[(0,s._)("dl",ti,[(0,s._)("div",ai,[(0,s._)("div",{class:(0,n.C_)({inp_error:i.isInquiredInput&&""===i.transferLimitData.limitList.dailyLimitAmount||i.isExceedDailyLimiAmount})},[(0,s._)("div",si,[(0,s.Wm)(a,{modelValue:i.transferLimitData.limitList.dailyLimitAmount,"onUpdate:modelValue":t[6]||(t[6]=t=>i.transferLimitData.limitList.dailyLimitAmount=t),currency:"USD",showCurrency:!1,disabled:!i.isEditable},null,8,["modelValue","disabled"]),ni]),i.isInquiredInput&&""===i.transferLimitData.limitList.dailyLimitAmount?((0,s.wg)(),(0,s.iD)("p",ei,(0,n.zw)(i.$t("error_text.daily_limit_is_required")),1)):(0,s.kq)("",!0),i.isExceedDailyLimiAmount?((0,s.wg)(),(0,s.iD)("p",ri,(0,n.zw)(i.$t("cib201003ss04.amount_exceed_maximum_daily_limit")),1)):(0,s.kq)("",!0)],2)])])]),(0,s._)("div",li,[(0,s._)("div",oi,[(0,s._)("div",mi,[(0,s._)("div",null,[(0,s.Wm)(a,{modelValue:i.dailyLimitKhr,"onUpdate:modelValue":t[7]||(t[7]=t=>i.dailyLimitKhr=t),showCurrency:!1,disabled:""},null,8,["modelValue"]),ui])])])])])])])])])])}class di{convertCurrency(i,t){const a=i.toString().split(".");return a[0]="KHR"===t?a[0].replace(/\B(?=(\d{3})+(?!\d))/g,",")+" KHR":"USD"===t?a[0].replace(/\B(?=(\d{3})+(?!\d))/g,",")+" USD":"$"+a[0].replace(/\B(?=(\d{3})+(?!\d))/g,",")+(a[1]?"."+a[1]:".00"),a[0]}unformatCurrency(i){const t=i.split("."),a=t[0].replace(/\D/g,"")+("00"!=t[1]&&t[1]?"."+t[1]:"");return a}}var hi=a(84625),pi=a(67609),Li=a(43493);const yi=new di;var _i=(0,s.aZ)({name:"cib201003ss04",components:{formatInput:hi.Z,CurrencyInput:pi.Z},props:{data:{type:Object,required:!0},currentTab:{type:String,required:!0}},data(){const i=this.$route.query.tab;return{approvalTap:i,transferLimitData:{userID:"",customerNo:"",limitList:{dailyLimitAmount:0,limitCategoryCode:"",limitTypeCode:"",transactionCurrencyCode:"",transactionLimitAmount:0,maxDailyAmount:0,maxTransactionAmount:0}},tempTransferLimitData:{},isInquiredInput:!1,isEditable:!1,isAllowSubmit:!0,isExceedTransactionLimitAmount:!1,isExceedDailyLimiAmount:!1,exchangeRate:4e3,approvalRes:{},operationMode:"normal"}},computed:{approvalType(){return this.$route.query.approvalType?this.$route.query.approvalType.toString():""},maxTransaction(){return yi.convertCurrency(this.transferLimitData.limitList.maxTransactionAmount,"USD")},maxTransactionLimitKhr(){return yi.convertCurrency(this.transferLimitData.limitList.maxTransactionAmount*this.exchangeRate,"KHR")},maxDailyLimit(){return yi.convertCurrency(this.transferLimitData.limitList.maxDailyAmount,"USD")},maxDailyLimitKhr(){return yi.convertCurrency(this.transferLimitData.limitList.maxDailyAmount*this.exchangeRate,"KHR")},remainingLimit(){return this.transferLimitData.limitList.maxTransactionAmount-this.transferLimitData.limitList.transactionLimitAmount},remainingLimitKhr(){return this.remainingLimit*this.exchangeRate},dailyLimitRemaining(){return this.transferLimitData.limitList.maxDailyAmount-this.transferLimitData.limitList.dailyLimitAmount},dailyLimitRemainingKhr(){return this.dailyLimitRemaining*this.exchangeRate},transactionLimitKhr(){return this.transferLimitData.limitList.transactionLimitAmount*this.exchangeRate},dailyLimitKhr(){return this.transferLimitData.limitList.dailyLimitAmount*this.exchangeRate}},watch:{data(i){""==this.approvalType?(this.transferLimitData=JSON.parse(JSON.stringify({userID:i.userInfo.userID,customerNo:i.userInfo.customerNo,limitList:{limitCategoryCode:i.userTransferLimit[0].limitCategoryCode,limitTypeCode:i.userTransferLimit[0].limitTypeCode,transactionCurrencyCode:i.userTransferLimit[0].transactionCurrencyCode,maxTransactionAmount:i.userTransferLimit[0].maxTransactionAmount,transactionLimitAmount:i.userTransferLimit[0].transactionLimitAmount,maxDailyAmount:i.userTransferLimit[0].maxDailyAmount,dailyLimitAmount:i.userTransferLimit[0].dailyLimitAmount}})),this.tempTransferLimitData=JSON.parse(JSON.stringify(this.transferLimitData.limitList))):"CIB201003SS04"==this.approvalTap&&(this.$approval.getAuthorizationDetail().then((i=>{let t=JSON.parse(i.body.requestContent);t.limitList&&(t.limitList.map((i=>{this.transferLimitData.limitList.maxTransactionAmount=i.maxTransactionAmount,this.transferLimitData.limitList.transactionLimitAmount=i.transactionLimitAmount,this.transferLimitData.limitList.maxDailyAmount=i.maxDailyAmount,this.transferLimitData.limitList.dailyLimitAmount=i.dailyLimitAmount})),this.approvalRes=i.body)})),this.operationMode="my-request"==this.approvalType?"read":"my-approval"==this.approvalType?"approval":"normal")},isEditable(i){this.$emit("isBeingEdited",i)},"transferLimitData.limitList.transactionLimitAmount":function(i){""==i?this.isInquiredInput=!0:Number(i)>this.transferLimitData.limitList.maxTransactionAmount?this.isExceedTransactionLimitAmount=!0:Number(i)<=this.transferLimitData.limitList.maxTransactionAmount&&(this.isExceedTransactionLimitAmount=!1)},"transferLimitData.limitList.dailyLimitAmount":function(i){""==i?this.isInquiredInput=!0:Number(i)>this.transferLimitData.limitList.maxDailyAmount?this.isExceedDailyLimiAmount=!0:Number(i)<=this.transferLimitData.limitList.maxDailyAmount&&(this.isExceedDailyLimiAmount=!1)}},methods:{onClickOperation(i){switch(i){case"edit":this.isEditable=!0;break;case"cancel":this.isEditable=!1,this.transferLimitData.limitList=this.tempTransferLimitData;break;case"list":this.$router.push("/corporate-internet-banking/subscription");break;case"submit":this.isExceedTransactionLimitAmount||this.isExceedDailyLimiAmount||this.$dialog.onOpen({content:`${this.$t("message.would_you_like_to_save")}`,dialogMode:"Question",callback:()=>{this.handleSubmit(),Li.Fy.dismiss()}});break}},async handleSubmit(){let i={userID:this.transferLimitData.userID,customerNo:this.transferLimitData.customerNo,limitList:[{dailyLimitAmount:Number(this.transferLimitData.limitList.dailyLimitAmount),transactionLimitAmount:Number(this.transferLimitData.limitList.transactionLimitAmount),transactionCurrencyCode:this.transferLimitData.limitList.transactionCurrencyCode,limitCategoryCode:this.transferLimitData.limitList.limitCategoryCode,limitTypeCode:this.transferLimitData.limitList.limitTypeCode,maxTransactionAmount:this.transferLimitData.limitList.maxTransactionAmount,maxDailyAmount:this.transferLimitData.limitList.maxDailyAmount}]};const t=await this.$request.getRequest("CIB20100334",i,!1,"CIB201003SS04");this.approvalType&&(this.isEditable=!1,this.$emit("isReseTButton",!1)),t.header.result&&(this.isEditable=!1,this.$emit("isReseTButton",!1),this.$dialog.onOpen({content:this.$t("message.update_success"),dialogMode:"Success",callback:()=>{Li.Fy.dismiss()}}))}}}),fi=a(83744);const Di=(0,fi.Z)(_i,[["render",ci],["__scopeId","data-v-6893e245"]]);var gi=Di}}]);
//# sourceMappingURL=7179.1616c10b.js.map