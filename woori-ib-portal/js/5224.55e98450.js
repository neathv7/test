"use strict";(self["webpackChunkbizMOB4Vue"]=self["webpackChunkbizMOB4Vue"]||[]).push([[5224],{75224:function(e,t,a){a.r(t),a.d(t,{default:function(){return k}});var s=a(66252),r=a(3577);const i=e=>((0,s.dD)("data-v-0b03e1c8"),e=e(),(0,s.Cn)(),e),n={class:"tab_cont"},o={class:"row gap"},d={class:"col-4"},u={class:"form01"},h=i((()=>(0,s._)("span",{class:"require"},"*",-1))),l={class:"col-4"},y={class:"form01"},f={class:"inp_box"},m={class:"inp"},g={class:"inp_box type_datetime"},D={class:"inp"},H={class:"col-4"},N={class:"form01"},T={class:"inp_box"},Y={class:"inp"},c={class:"inp_box type_datetime"},p={class:"inp"},A={class:"row gap"},S={class:"col"},b={class:"form01"},z=i((()=>(0,s._)("span",{class:"require"},"*",-1)));function v(e,t){const a=(0,s.up)("ion-select-option"),i=(0,s.up)("ion-select"),v=(0,s.up)("ion-input"),C=(0,s.up)("ion-button"),w=(0,s.up)("VueDatePicker"),_=(0,s.up)("ion-checkbox"),V=(0,s.up)("ion-label"),$=(0,s.up)("ion-item"),W=(0,s.up)("ion-list");return(0,s.wg)(),(0,s.iD)("div",n,[(0,s._)("div",o,[(0,s._)("div",d,[(0,s._)("dl",u,[(0,s._)("dt",null,[(0,s.Uk)((0,r.zw)(e.$t("cib201003ss10.transfer_hour"))+" ",1),h]),(0,s._)("dd",null,[(0,s.Wm)(i,{interface:"popover",interfaceOptions:{size:"cover"},modelValue:e.transferAuthorizationHour.operationServiceCode,"onUpdate:modelValue":t[0]||(t[0]=t=>e.transferAuthorizationHour.operationServiceCode=t),onIonChange:e.handleSelectionChange,class:"line",placeholder:"Select Transfer Hour",disabled:!e.isEditable},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.COMMON_KEY_VALUE.subscriptionTransferHour,(e=>((0,s.wg)(),(0,s.j4)(a,{value:e.key},{default:(0,s.w5)((()=>[(0,s.Uk)((0,r.zw)(e.value),1)])),_:2},1032,["value"])))),256))])),_:1},8,["modelValue","onIonChange","disabled"])])])]),(0,s._)("div",l,[(0,s._)("dl",y,[(0,s._)("dt",null,(0,r.zw)(e.$t("cib201003ss10.start_time")),1),(0,s._)("dd",null,[(0,s._)("div",f,[(0,s._)("div",m,[(0,s.Wm)(w,{modelValue:e.designatedHour.startTime,"onUpdate:modelValue":t[2]||(t[2]=t=>e.designatedHour.startTime=t),"is-24":!0,"time-picker":"","hide-input-icon":"",placeholder:"Enter Start Time",disabled:!e.isEditable},{trigger:(0,s.w5)((()=>[(0,s._)("div",g,[(0,s._)("div",D,[(0,s.Wm)(v,{class:"line",value:e.formattedStartTime,onIonChange:t[1]||(t[1]=t=>e.handleStartTime(e.transferAuthorizationHour.operationServiceCode,e.designatedHour.startTime)),placeholder:e.$t("cib201003ss10.enter_end_time"),disabled:!e.isEditable},null,8,["value","placeholder","disabled"]),(0,s.Wm)(C,{class:"btn_date"},{default:(0,s.w5)((()=>[(0,s.Uk)("Calendar")])),_:1})])])])),_:1},8,["modelValue","disabled"])])])])])]),(0,s._)("div",H,[(0,s._)("dl",N,[(0,s._)("dt",null,(0,r.zw)(e.$t("cib201003ss10.end_time")),1),(0,s._)("dd",null,[(0,s._)("div",T,[(0,s._)("div",Y,[(0,s.Wm)(w,{modelValue:e.designatedHour.endTime,"onUpdate:modelValue":t[4]||(t[4]=t=>e.designatedHour.endTime=t),"is-24":!0,"time-picker":"","hide-input-icon":"",placeholder:"Enter End Time",disabled:!e.isEditable},{trigger:(0,s.w5)((()=>[(0,s._)("div",c,[(0,s._)("div",p,[(0,s.Wm)(v,{class:"line",value:e.formattedEndTime,onIonChange:t[3]||(t[3]=t=>e.changefromendTime(e.transferAuthorizationHour.operationServiceCode,e.designatedHour.endTime)),placeholder:e.$t("cib201003ss10.enter_end_time"),disabled:!e.isEditable},null,8,["value","placeholder","disabled"]),(0,s.Wm)(C,{class:"btn_date",disabled:e.handleDisableAuthorizationHour(e.transferAuthorizationHour.operationServiceCode)},{default:(0,s.w5)((()=>[(0,s.Uk)("Calendar")])),_:1},8,["disabled"])])])])),_:1},8,["modelValue","disabled"])])])])])])]),(0,s._)("div",A,[(0,s._)("div",S,[(0,s._)("dl",b,[(0,s._)("dt",null,[(0,s.Uk)((0,r.zw)(e.$t("cib201003ss10.transfer_day"))+" ",1),z]),(0,s._)("dd",null,[(0,s.Wm)(W,{class:"list_chk"},{default:(0,s.w5)((()=>[(0,s.Wm)($,null,{default:(0,s.w5)((()=>[(0,s.Wm)(_,{value:"mon",modelValue:e.designatedHour.transferDay.mondayYN,"onUpdate:modelValue":t[5]||(t[5]=t=>e.designatedHour.transferDay.mondayYN=t),disabled:!e.isDisableTransferDays||!e.isEditable},null,8,["modelValue","disabled"]),(0,s.Wm)(V,null,{default:(0,s.w5)((()=>[(0,s.Uk)("Mon")])),_:1})])),_:1}),(0,s.Wm)($,null,{default:(0,s.w5)((()=>[(0,s.Wm)(_,{value:"tue",modelValue:e.designatedHour.transferDay.tuesdayYN,"onUpdate:modelValue":t[6]||(t[6]=t=>e.designatedHour.transferDay.tuesdayYN=t),disabled:!e.isDisableTransferDays||!e.isEditable},null,8,["modelValue","disabled"]),(0,s.Wm)(V,null,{default:(0,s.w5)((()=>[(0,s.Uk)("Tue")])),_:1})])),_:1}),(0,s.Wm)($,null,{default:(0,s.w5)((()=>[(0,s.Wm)(_,{value:"wed",modelValue:e.designatedHour.transferDay.wednesdayYN,"onUpdate:modelValue":t[7]||(t[7]=t=>e.designatedHour.transferDay.wednesdayYN=t),disabled:!e.isDisableTransferDays||!e.isEditable},null,8,["modelValue","disabled"]),(0,s.Wm)(V,null,{default:(0,s.w5)((()=>[(0,s.Uk)("Wed")])),_:1})])),_:1}),(0,s.Wm)($,null,{default:(0,s.w5)((()=>[(0,s.Wm)(_,{value:"thu",modelValue:e.designatedHour.transferDay.thursdayYN,"onUpdate:modelValue":t[8]||(t[8]=t=>e.designatedHour.transferDay.thursdayYN=t),disabled:!e.isDisableTransferDays||!e.isEditable},null,8,["modelValue","disabled"]),(0,s.Wm)(V,null,{default:(0,s.w5)((()=>[(0,s.Uk)("Thu")])),_:1})])),_:1}),(0,s.Wm)($,null,{default:(0,s.w5)((()=>[(0,s.Wm)(_,{value:"fri",modelValue:e.designatedHour.transferDay.fridayYN,"onUpdate:modelValue":t[9]||(t[9]=t=>e.designatedHour.transferDay.fridayYN=t),disabled:!e.isDisableTransferDays||!e.isEditable},null,8,["modelValue","disabled"]),(0,s.Wm)(V,null,{default:(0,s.w5)((()=>[(0,s.Uk)("Fri")])),_:1})])),_:1}),(0,s.Wm)($,null,{default:(0,s.w5)((()=>[(0,s.Wm)(_,{value:"sat",modelValue:e.designatedHour.transferDay.saturdayYN,"onUpdate:modelValue":t[10]||(t[10]=t=>e.designatedHour.transferDay.saturdayYN=t),disabled:!e.isDisableTransferDays||!e.isEditable},null,8,["modelValue","disabled"]),(0,s.Wm)(V,null,{default:(0,s.w5)((()=>[(0,s.Uk)("Sat")])),_:1})])),_:1}),(0,s.Wm)($,null,{default:(0,s.w5)((()=>[(0,s.Wm)(_,{value:"sun",modelValue:e.designatedHour.transferDay.sundayYN,"onUpdate:modelValue":t[11]||(t[11]=t=>e.designatedHour.transferDay.sundayYN=t),disabled:!e.isDisableTransferDays||!e.isEditable},null,8,["modelValue","disabled"]),(0,s.Wm)(V,null,{default:(0,s.w5)((()=>[(0,s.Uk)("Sun")])),_:1})])),_:1}),(0,s.Wm)($,null,{default:(0,s.w5)((()=>[(0,s.Wm)(_,{modelValue:e.isSelectAllDate,"onUpdate:modelValue":t[12]||(t[12]=t=>e.isSelectAllDate=t),disabled:!e.isEditable},null,8,["modelValue","disabled"]),(0,s.Wm)(V,null,{default:(0,s.w5)((()=>[(0,s.Uk)("Every Day")])),_:1})])),_:1})])),_:1})])])])])])}var C=a(41762),w=a(42615),_=a(43493),V=(0,s.aZ)({name:"cib201003ss10",components:{VueDatePicker:C.Z},props:{data:{type:Object,required:!0},approvalPayload:{type:Object,required:!1},currentTab:{type:String,required:!0}},data(){const e=this.$route.query.userID,t=this.$route.query.customerNo;return{userID:e,customerNo:t,transferAuthorizationHour:{operationServiceCode:"",startTime:"",endTime:"",mondayYN:"",tuesdayYN:"",wednesdayYN:"",thursdayYN:"",fridayYN:"",saturdayYN:"",sundayYN:""},isEditable:!1,isDisable:!1,isAllowDesignatedHour:!1,designatedHour:{startTime:{hours:0,minutes:0,seconds:0},endTime:{hours:0,minutes:0,seconds:0},transferDay:{mondayYN:!1,tuesdayYN:!1,wednesdayYN:!1,thursdayYN:!1,fridayYN:!1,saturdayYN:!1,sundayYN:!1}},tempDesignatedHour:{startTime:{hours:0,minutes:0,seconds:0},endTime:{hours:0,minutes:0,seconds:0},transferDay:{mondayYN:!1,tuesdayYN:!1,wednesdayYN:!1,thursdayYN:!1,fridayYN:!1,saturdayYN:!1,sundayYN:!1}},tempOperationCode:"",designatedHourTemp:{startTime:{hours:0,minutes:0,seconds:0},endTime:{hours:0,minutes:0,seconds:0},transferDay:{mondayYN:!1,tuesdayYN:!1,wednesdayYN:!1,thursdayYN:!1,fridayYN:!1,saturdayYN:!1,sundayYN:!1}},COMMON_KEY_VALUE:w.ii,operationMode:"normal",isSelectAllDate:!1,isChangeTransferDay:!1,isChangeFromStartTime:!1,transferAuthorizationCode:"",isSelect:!1,isDisableTransferDays:!1,isSelectAll:"",isfirstTransferAuthorization:"",isSecondTransferAuthorization:"",isthirdTransferAuthorization:"",isSecond:""}},computed:{approvalType(){return this.$route.query.approvalType?this.$route.query.approvalType.toString():""},formattedStartTime(){return this.$datetime.formatVueTimePicker(this.designatedHour.startTime)},formattedEndTime(){return this.$datetime.formatVueTimePicker(this.designatedHour.endTime)}},watch:{data(e){if(""==this.approvalType)this.customerNo=e.userInfo.customerNo,this.transferAuthorizationHour.operationServiceCode=e.transferAuthorizationHour.operationServiceCode,this.transferAuthorizationHour.startTime=e.transferAuthorizationHour.operationServiceStartTime,this.transferAuthorizationHour.endTime=e.transferAuthorizationHour.operationServiceEndTime,this.transferAuthorizationHour.mondayYN=e.transferAuthorizationHour.operationMondayYN,this.transferAuthorizationHour.tuesdayYN=e.transferAuthorizationHour.operationTuesdayYN,this.transferAuthorizationHour.wednesdayYN=e.transferAuthorizationHour.operationWednesdayYN,this.transferAuthorizationHour.thursdayYN=e.transferAuthorizationHour.operationThursdayYN,this.transferAuthorizationHour.fridayYN=e.transferAuthorizationHour.operationFridayYN,this.transferAuthorizationHour.saturdayYN=e.transferAuthorizationHour.operationSaturdayYN,this.transferAuthorizationHour.sundayYN=e.transferAuthorizationHour.operationSundayYN,this.designatedHour.startTime=this.timeFormatter(this.transferAuthorizationHour.startTime),this.designatedHour.endTime=this.timeFormatter(this.transferAuthorizationHour.endTime),this.designatedHour.transferDay.mondayYN=this.stringToBoolean(this.transferAuthorizationHour.mondayYN),this.designatedHour.transferDay.tuesdayYN=this.stringToBoolean(this.transferAuthorizationHour.tuesdayYN),this.designatedHour.transferDay.wednesdayYN=this.stringToBoolean(this.transferAuthorizationHour.wednesdayYN),this.designatedHour.transferDay.thursdayYN=this.stringToBoolean(this.transferAuthorizationHour.thursdayYN),this.designatedHour.transferDay.fridayYN=this.stringToBoolean(this.transferAuthorizationHour.fridayYN),this.designatedHour.transferDay.saturdayYN=this.stringToBoolean(this.transferAuthorizationHour.saturdayYN),this.designatedHour.transferDay.sundayYN=this.stringToBoolean(this.transferAuthorizationHour.sundayYN),this.tempOperationCode=e.transferAuthorizationHour.operationServiceCode,this.tempDesignatedHour.startTime=this.timeFormatter(this.transferAuthorizationHour.startTime),this.tempDesignatedHour.endTime=this.timeFormatter(this.transferAuthorizationHour.endTime),this.tempDesignatedHour.transferDay.mondayYN=this.stringToBoolean(this.transferAuthorizationHour.mondayYN),this.tempDesignatedHour.transferDay.tuesdayYN=this.stringToBoolean(this.transferAuthorizationHour.tuesdayYN),this.tempDesignatedHour.transferDay.wednesdayYN=this.stringToBoolean(this.transferAuthorizationHour.wednesdayYN),this.tempDesignatedHour.transferDay.thursdayYN=this.stringToBoolean(this.transferAuthorizationHour.thursdayYN),this.tempDesignatedHour.transferDay.fridayYN=this.stringToBoolean(this.transferAuthorizationHour.fridayYN),this.tempDesignatedHour.transferDay.saturdayYN=this.stringToBoolean(this.transferAuthorizationHour.saturdayYN),this.tempDesignatedHour.transferDay.sundayYN=this.stringToBoolean(this.transferAuthorizationHour.sundayYN);else if(this.approvalPayload&&"CIB201003SS10"==this.currentTab){let e=JSON.parse(this.approvalPayload?.requestContent);this.transferAuthorizationHour.operationServiceCode=e.operationServiceCode,this.designatedHour.startTime=this.$datetime.convertTimeStringToTimeObject(e.operationServiceStartTime),this.designatedHour.endTime=this.$datetime.convertTimeStringToTimeObject(e.operationServiceEndTime),this.designatedHour.transferDay.mondayYN=this.stringToBoolean(e.operationMondayYN),this.designatedHour.transferDay.tuesdayYN=this.stringToBoolean(e.operationTuesdayYN),this.designatedHour.transferDay.wednesdayYN=this.stringToBoolean(e.operationWednesdayYN),this.designatedHour.transferDay.thursdayYN=this.stringToBoolean(e.operationThursdayYN),this.designatedHour.transferDay.fridayYN=this.stringToBoolean(e.operationFridayYN),this.designatedHour.transferDay.saturdayYN=this.stringToBoolean(e.operationSaturdayYN),this.designatedHour.transferDay.sundayYN=this.stringToBoolean(e.operationSundayYN),this.operationMode="my-request"==this.approvalType?"read":"my-approval"==this.approvalType?"approval":"normal"}},isEditable(e){this.$emit("isBeingEdited",e)},"designatedHour.transferDay.mondayYN"(e){0==e?(this.handleValidateTransferAuthorization(this.designatedHour),this.isChangeTransferDay=!0,this.transferAuthorizationHour.operationServiceCode="03",1==this.isSelectAllDate&&(this.isSelectAllDate=!1)):this.handleValidateTransferAuthorization(this.designatedHour)},"designatedHour.transferDay.tuesdayYN"(e){0==e?(this.handleValidateTransferAuthorization(this.designatedHour),this.isChangeTransferDay=!0,this.transferAuthorizationHour.operationServiceCode="03",1==this.isSelectAllDate&&(this.isSelectAllDate=!1)):this.handleValidateTransferAuthorization(this.designatedHour)},"designatedHour.transferDay.wednesdayYN"(e){0==e?(this.handleValidateTransferAuthorization(this.designatedHour),this.isChangeTransferDay=!0,this.transferAuthorizationHour.operationServiceCode="03",1==this.isSelectAllDate&&(this.isSelectAllDate=!1)):this.handleValidateTransferAuthorization(this.designatedHour)},"designatedHour.transferDay.thursdayYN"(e){0==e?(this.handleValidateTransferAuthorization(this.designatedHour),this.isChangeTransferDay=!0,this.transferAuthorizationHour.operationServiceCode="03",1==this.isSelectAllDate&&"02"==this.isSecondTransferAuthorization?(this.isChangeTransferDay=!0,this.isSelectAllDate=!1):this.isSelectAllDate=!1):this.handleValidateTransferAuthorization(this.designatedHour)},"designatedHour.transferDay.fridayYN"(e){0==e?(this.handleValidateTransferAuthorization(this.designatedHour),this.isChangeTransferDay=!0,this.transferAuthorizationHour.operationServiceCode="03",1==this.isSelectAllDate&&(this.isSelectAllDate=!1)):this.handleValidateTransferAuthorization(this.designatedHour)},"designatedHour.transferDay.saturdayYN"(e){0==e?(this.handleValidateTransferAuthorization(this.designatedHour),this.isChangeTransferDay=!0,this.transferAuthorizationHour.operationServiceCode="03",1==this.isSelectAllDate&&(this.isSelectAllDate=!1)):this.handleValidateTransferAuthorization(this.designatedHour)},"designatedHour.transferDay.sundayYN"(e){"01"==this.transferAuthorizationHour.operationServiceCode?1==e?this.isChangeTransferDay=!1:(this.isChangeTransferDay=!0,this.transferAuthorizationHour.operationServiceCode="03",1==this.isSelectAllDate&&(this.isSelectAllDate=!1)):"02"==this.transferAuthorizationHour.operationServiceCode?0==e?(this.isChangeTransferDay=!1,1==this.isSelectAllDate&&(this.isSelectAllDate=!1)):(this.isSecondTransferAuthorization="02",this.handleValidateTransferAuthorization(this.designatedHour),this.isChangeTransferDay=!0,this.isSelectAllDate=!0,this.transferAuthorizationHour.operationServiceCode="03"):(this.isSelectAllDate=!1,this.handleValidateTransferAuthorization(this.designatedHour))},isSelectAllDate(e){if(e)if("01"==this.transferAuthorizationHour.operationServiceCode)this.isfirstTransferAuthorization="01";else if("02"==this.transferAuthorizationHour.operationServiceCode)this.isthirdTransferAuthorization="",this.isSecondTransferAuthorization="02",1==e&&(this.transferAuthorizationHour.operationServiceCode="03",this.isChangeTransferDay=!0,this.designatedHour.transferDay.mondayYN=!0,this.designatedHour.transferDay.tuesdayYN=!0,this.designatedHour.transferDay.wednesdayYN=!0,this.designatedHour.transferDay.thursdayYN=!0,this.designatedHour.transferDay.fridayYN=!0,this.designatedHour.transferDay.saturdayYN=!0,this.designatedHour.transferDay.sundayYN=!0);else if(this.isChangeFromStartTime)this.isthirdTransferAuthorization="",this.isChangeTransferDay=!0,this.designatedHour.transferDay.mondayYN=!0,this.designatedHour.transferDay.tuesdayYN=!0,this.designatedHour.transferDay.wednesdayYN=!0,this.designatedHour.transferDay.thursdayYN=!0,this.designatedHour.transferDay.fridayYN=!0,this.designatedHour.transferDay.saturdayYN=!0,this.designatedHour.transferDay.sundayYN=!0;else if("01"==this.isfirstTransferAuthorization){const e="000000000";let t="";t=this.$datetime.convertTimeObjectToTimeString(this.designatedHour.startTime),t==e&&23==this.designatedHour.endTime.hours&&59==this.designatedHour.endTime.minutes&&0==this.designatedHour.endTime.seconds&&this.isSelectAllDate&&(this.transferAuthorizationHour.operationServiceCode="01"),this.isChangeTransferDay=!0,this.designatedHour.transferDay.mondayYN=!0,this.designatedHour.transferDay.tuesdayYN=!0,this.designatedHour.transferDay.wednesdayYN=!0,this.designatedHour.transferDay.thursdayYN=!0,this.designatedHour.transferDay.fridayYN=!0,this.designatedHour.transferDay.saturdayYN=!0,this.designatedHour.transferDay.sundayYN=!0}else"02"==this.isSecondTransferAuthorization?(this.isChangeTransferDay=!0,this.designatedHour.transferDay.mondayYN=!0,this.designatedHour.transferDay.tuesdayYN=!0,this.designatedHour.transferDay.wednesdayYN=!0,this.designatedHour.transferDay.thursdayYN=!0,this.designatedHour.transferDay.fridayYN=!0,this.designatedHour.transferDay.saturdayYN=!0,this.designatedHour.transferDay.sundayYN=!0):"03"==this.isthirdTransferAuthorization&&(this.isChangeTransferDay=!0,this.isDisableTransferDays=!1,this.designatedHour.transferDay.mondayYN=!0,this.designatedHour.transferDay.tuesdayYN=!0,this.designatedHour.transferDay.wednesdayYN=!0,this.designatedHour.transferDay.thursdayYN=!0,this.designatedHour.transferDay.fridayYN=!0,this.designatedHour.transferDay.saturdayYN=!0,this.designatedHour.transferDay.sundayYN=!0);else"01"==this.transferAuthorizationHour.operationServiceCode?"01"==this.isfirstTransferAuthorization&&1==this.designatedHour.transferDay.mondayYN&&1==this.designatedHour.transferDay.tuesdayYN&&1==this.designatedHour.transferDay.wednesdayYN&&1==this.designatedHour.transferDay.thursdayYN&&1==this.designatedHour.transferDay.fridayYN&&1==this.designatedHour.transferDay.saturdayYN&&1==this.designatedHour.transferDay.sundayYN&&(this.designatedHour.transferDay.mondayYN=!1,this.designatedHour.transferDay.tuesdayYN=!1,this.designatedHour.transferDay.wednesdayYN=!1,this.designatedHour.transferDay.thursdayYN=!1,this.designatedHour.transferDay.fridayYN=!1,this.designatedHour.transferDay.saturdayYN=!1,this.designatedHour.transferDay.sundayYN=!1):"02"==this.transferAuthorizationHour.operationServiceCode||("02"==this.isSecondTransferAuthorization?1==this.designatedHour.transferDay.mondayYN&&1==this.designatedHour.transferDay.tuesdayYN&&1==this.designatedHour.transferDay.wednesdayYN&&1==this.designatedHour.transferDay.thursdayYN&&1==this.designatedHour.transferDay.fridayYN&&1==this.designatedHour.transferDay.saturdayYN&&1==this.designatedHour.transferDay.sundayYN&&(this.designatedHour.transferDay.mondayYN=!1,this.designatedHour.transferDay.tuesdayYN=!1,this.designatedHour.transferDay.wednesdayYN=!1,this.designatedHour.transferDay.thursdayYN=!1,this.designatedHour.transferDay.fridayYN=!1,this.designatedHour.transferDay.saturdayYN=!1,this.designatedHour.transferDay.sundayYN=!1):("02"==this.transferAuthorizationCode?this.isthirdTransferAuthorization="":this.isthirdTransferAuthorization="03",1==this.designatedHour.transferDay.mondayYN&&1==this.designatedHour.transferDay.tuesdayYN&&1==this.designatedHour.transferDay.wednesdayYN&&1==this.designatedHour.transferDay.thursdayYN&&1==this.designatedHour.transferDay.fridayYN&&1==this.designatedHour.transferDay.saturdayYN&&1==this.designatedHour.transferDay.sundayYN&&(this.designatedHour.transferDay.mondayYN=!1,this.designatedHour.transferDay.tuesdayYN=!1,this.designatedHour.transferDay.wednesdayYN=!1,this.designatedHour.transferDay.thursdayYN=!1,this.designatedHour.transferDay.fridayYN=!1,this.designatedHour.transferDay.saturdayYN=!1,this.designatedHour.transferDay.sundayYN=!1,this.isDisableTransferDays=!0),this.isChangeTransferDay=!0))}},methods:{handleStartTime(e,t){if("02"==e)8!=t.hours||0!=t.minutes||0!=t.seconds?(this.transferAuthorizationCode="02",this.transferAuthorizationHour.operationServiceCode="03",this.isChangeFromStartTime=!0,this.isDisableTransferDays=!0):this.isChangeFromStartTime=!1;else if("01"==e)0!=t.hours||0!=t.minutes||0!=t.seconds?(this.transferAuthorizationCode="",this.transferAuthorizationHour.operationServiceCode="03",this.isChangeFromStartTime=!0,this.isDisableTransferDays=!0):this.isChangeFromStartTime=!1;else{const e="000000000";let t="";t=this.$datetime.convertTimeObjectToTimeString(this.designatedHour.startTime),t==e&&23==this.designatedHour.endTime.hours&&59==this.designatedHour.endTime.minutes&&0==this.designatedHour.endTime.seconds&&this.designatedHour.transferDay.mondayYN&&this.designatedHour.transferDay.tuesdayYN&&this.designatedHour.transferDay.wednesdayYN&&this.designatedHour.transferDay.thursdayYN&&this.designatedHour.transferDay.fridayYN&&this.designatedHour.transferDay.saturdayYN&&this.designatedHour.transferDay.sundayYN&&(this.transferAuthorizationHour.operationServiceCode="01"),this.isChangeFromStartTime=!1,this.handleValidateTransferAuthorization(this.designatedHour)}},changefromendTime(e,t){if("01"==e)23!=t.hours||59!=t.minutes||59!=t.seconds?(this.transferAuthorizationHour.operationServiceCode="03",this.transferAuthorizationCode="01",this.isChangeFromStartTime=!0,this.isDisableTransferDays=!0):this.handleValidateTransferAuthorization(this.designatedHour);else if("02"==e)18==t.hours&&0==t.minutes&&0==t.seconds||(this.transferAuthorizationCode="02",this.transferAuthorizationHour.operationServiceCode="03",this.isChangeFromStartTime=!0,this.isDisableTransferDays=!0);else{const e="080000000",t="000000000";"03"==this.isthirdTransferAuthorization?this.isDisableTransferDays=!1:this.isDisableTransferDays=!0;let a="";"03"==this.isthirdTransferAuthorization&&0==this.isSelectAllDate?this.isDisableTransferDays=!0:"03"==this.isthirdTransferAuthorization&&1==this.isSelectAllDate?this.isDisableTransferDays=!1:this.isDisableTransferDays=!0,a=this.$datetime.convertTimeObjectToTimeString(this.designatedHour.startTime),a==t&&23==this.designatedHour.endTime.hours&&59==this.designatedHour.endTime.minutes&&0==this.designatedHour.endTime.seconds&&this.designatedHour.transferDay.mondayYN&&this.designatedHour.transferDay.tuesdayYN&&this.designatedHour.transferDay.wednesdayYN&&this.designatedHour.transferDay.thursdayYN&&this.designatedHour.transferDay.fridayYN&&this.designatedHour.transferDay.saturdayYN&&this.designatedHour.transferDay.sundayYN?this.transferAuthorizationHour.operationServiceCode="01":a==e&&18==this.designatedHour.endTime.hours&&0==this.designatedHour.endTime.minutes&&0==this.designatedHour.endTime.seconds&&this.designatedHour.transferDay.mondayYN&&this.designatedHour.transferDay.tuesdayYN&&this.designatedHour.transferDay.wednesdayYN&&this.designatedHour.transferDay.thursdayYN&&this.designatedHour.transferDay.fridayYN&&this.designatedHour.transferDay.saturdayYN&&!this.designatedHour.transferDay.sundayYN&&(this.transferAuthorizationHour.operationServiceCode="02")}},onClickOperation(e){switch(e){case"edit":this.isEditable=!0,this.isDisable=!1,"03"==this.transferAuthorizationHour.operationServiceCode?this.isAllowDesignatedHour=!0:this.isAllowDesignatedHour=!1;break;case"cancel":this.transferAuthorizationHour.operationServiceCode=this.tempOperationCode,this.designatedHour.startTime=this.tempDesignatedHour.startTime,this.designatedHour.endTime=this.tempDesignatedHour.endTime,this.designatedHour.transferDay.mondayYN=this.tempDesignatedHour.transferDay.mondayYN,this.designatedHour.transferDay.tuesdayYN=this.tempDesignatedHour.transferDay.tuesdayYN,this.designatedHour.transferDay.wednesdayYN=this.tempDesignatedHour.transferDay.wednesdayYN,this.designatedHour.transferDay.thursdayYN=this.tempDesignatedHour.transferDay.thursdayYN,this.designatedHour.transferDay.fridayYN=this.tempDesignatedHour.transferDay.fridayYN,this.designatedHour.transferDay.saturdayYN=this.tempDesignatedHour.transferDay.saturdayYN,this.designatedHour.transferDay.sundayYN=this.tempDesignatedHour.transferDay.sundayYN,this.isEditable=!1,this.isDisableTransferDays=!1,this.isAllowDesignatedHour=!1;break;case"list":this.$router.push("/corporate-internet-banking/subscription");break;case"submit":this.$dialog.onOpen({content:`${this.$t("message.would_you_like_to_save")}`,dialogMode:"Question",callback:()=>{this.handleSubmit(),_.Fy.dismiss()}});break}},handleTransferHourFromMonToSun(){this.designatedHour={startTime:this.$datetime.convertTimeStringToTimeObject("000000000"),endTime:this.$datetime.convertTimeStringToTimeObject("235959999"),transferDay:{mondayYN:!0,tuesdayYN:!0,wednesdayYN:!0,thursdayYN:!0,fridayYN:!0,saturdayYN:!0,sundayYN:!0}}},handleTransferHourFromMonToSat(){this.isSelectAllDate=!1,this.designatedHour={startTime:this.$datetime.convertTimeStringToTimeObject("080000000"),endTime:this.$datetime.convertTimeStringToTimeObject("180000000"),transferDay:{mondayYN:!0,tuesdayYN:!0,wednesdayYN:!0,thursdayYN:!0,fridayYN:!0,saturdayYN:!0,sundayYN:!1}}},handleValidateTransferAuthorization(e){const t="000000000",a="235959000",s="080000000",r="180000000",i=this.$datetime.convertTimeObjectToTimeString(e.startTime),n=this.$datetime.convertTimeObjectToTimeString(e.endTime);e.transferDay.mondayYN&&e.transferDay.tuesdayYN&&e.transferDay.wednesdayYN&&e.transferDay.thursdayYN&&e.transferDay.fridayYN&&e.transferDay.saturdayYN&&e.transferDay.sundayYN&&(this.isSelectAllDate=!0),i==t&&(n==a||"235959999"==n)&&e.transferDay.mondayYN&&e.transferDay.tuesdayYN&&e.transferDay.wednesdayYN&&e.transferDay.thursdayYN&&e.transferDay.fridayYN&&e.transferDay.saturdayYN&&e.transferDay.sundayYN?this.transferAuthorizationHour.operationServiceCode="01":i==s&&n==r&&e.transferDay.mondayYN&&e.transferDay.tuesdayYN&&e.transferDay.wednesdayYN&&e.transferDay.thursdayYN&&e.transferDay.fridayYN&&e.transferDay.saturdayYN&&!e.transferDay.sundayYN&&(this.transferAuthorizationHour.operationServiceCode="02")},handleSelectionChange(){if("01"==this.transferAuthorizationHour.operationServiceCode)this.handleTransferHourFromMonToSun(),this.isfirstTransferAuthorization="01",this.isSecondTransferAuthorization="",this.isthirdTransferAuthorization="",this.isChangeTransferDay=!1,this.isSelectAll="",this.isDisableTransferDays=!0,this.isSelectAllDate=!0,this.isChangeFromStartTime=!1;else if("02"==this.transferAuthorizationHour.operationServiceCode)this.handleTransferHourFromMonToSat(),this.isfirstTransferAuthorization="",this.isSecondTransferAuthorization="02",this.isthirdTransferAuthorization="",this.isSelectAll="",this.isDisableTransferDays=!0,this.isChangeTransferDay=!1,this.isChangeFromStartTime=!1;else if("03"==this.transferAuthorizationHour.operationServiceCode){if(this.isSelectAll="",1==this.isChangeTransferDay)return this.designatedHour;this.isChangeFromStartTime?"02"==this.transferAuthorizationCode||"03"==this.transferAuthorizationCode?this.isSelectAllDate=!1:(this.handleValidateTransferAuthorization(this.designatedHour),this.isSelectAllDate=!0):(this.designatedHour={startTime:this.$datetime.convertTimeStringToTimeObject("000000000"),endTime:this.$datetime.convertTimeStringToTimeObject("000000000"),transferDay:{mondayYN:!1,tuesdayYN:!1,wednesdayYN:!1,thursdayYN:!1,fridayYN:!1,saturdayYN:!1,sundayYN:!1}},this.isthirdTransferAuthorization="03",this.transferAuthorizationCode="",this.isfirstTransferAuthorization="",this.isSecondTransferAuthorization="")}},handleDisableAuthorizationHour(e){return"01"==e||"02"==e?!this.isAllowDesignatedHour:"03"==e?0==this.isEditable?this.isDisable=!0:this.isDisable=!1:void 0},async handleSubmit(){let e={userID:`${this.userID}`,customerNo:`${this.customerNo}`,operationServiceCode:this.transferAuthorizationHour.operationServiceCode,operationServiceStartTime:this.$datetime.convertTimeObjectToTimeString(this.designatedHour.startTime),operationServiceEndTime:this.$datetime.convertTimeObjectToTimeString(this.designatedHour.endTime),operationMondayYN:this.booleanToString(this.designatedHour.transferDay.mondayYN),operationTuesdayYN:this.booleanToString(this.designatedHour.transferDay.tuesdayYN),operationWednesdayYN:this.booleanToString(this.designatedHour.transferDay.wednesdayYN),operationThursdayYN:this.booleanToString(this.designatedHour.transferDay.thursdayYN),operationFridayYN:this.booleanToString(this.designatedHour.transferDay.fridayYN),operationSaturdayYN:this.booleanToString(this.designatedHour.transferDay.saturdayYN),operationSundayYN:this.booleanToString(this.designatedHour.transferDay.sundayYN)};const t=await await this.$request.getRequest("CIB20100339",e,!1,"CIB201003SS10");this.approvalType&&(this.isEditable=!1,this.isDisableTransferDays=!1,this.isAllowDesignatedHour=!1,this.$emit("isReseTButton",!1)),t.header.result&&(this.isEditable=!1,this.isDisableTransferDays=!1,this.isAllowDesignatedHour=!1,this.$emit("isReseTButton",!1),this.$dialog.onOpen({content:this.$t("message.update_success"),dialogMode:"Success",callback:()=>{_.Fy.dismiss()}}))},timeFormatter(e){const t=e.split(":");return{hours:Number(t[0]),minutes:Number(t[1]),seconds:0}},stringToBoolean(e){return"Y"===e},booleanToString(e){return e?"Y":"N"}}}),$=a(83744);const W=(0,$.Z)(V,[["render",v],["__scopeId","data-v-0b03e1c8"]]);var k=W}}]);
//# sourceMappingURL=5224.55e98450.js.map