"use strict";(self["webpackChunkbizMOB4Vue"]=self["webpackChunkbizMOB4Vue"]||[]).push([[7204],{72881:function(e,t,n){n.a(e,(async function(e,s){try{var i=n(66252),a=n(12187),l=n(29641),d=n(42615),o=n(43493),u=n(90121),r=n(67201),c=n(15828),m=e([u]);u=(m.then?(await m)():m)[0];const h=new l.Z;t["Z"]=(0,i.aZ)({name:"com205001sc00Vue",components:{Tree:a.Z,BreadCrumb:u.Z,SelectOption:r.Z,ModifyCard:c.Z},data(){const e={registerTellerName:"",registerTellerId:"",updatedTellerId:"",updatedTellerName:"",updatedDate:"",updatedTime:"",registerDate:"",registerTime:""};return{modifyCard:e,COMMON_KEY_VALUE:d.ii,menuTree:[],menuList:[],selectedMenu:{menuID:"",menuName:"",menuLevel:0,menuDisplayOrder:"",menuStatusCode:"",parentMenuID:"",menuNameKhmer:"",menuIconFilePath:"",menuIconID:"",state:{indeterminate:!1,checked:!1,selected:!0,expanded:!1}},isAddNewMenu:!1,isEnableEdit:!1,isInvalidInput:!1,menuLevelData:null,totalMenuList:0,menuSize:500,isDisabledMenuID:!0,isDisabledMenuStatus:!0,getImageMenuIcon:"",previewMenuIconImageName:"",list:[],getImageList:[],tempImage:"",isHideUserCraetion:!1,approvalRes:{},operationMode:"normal"}},async created(){await this.onGetMenuInfoList()},computed:{menuStatusCodeValue(){return(e,t)=>`${e} : ${t}`},renderPlaceholder(){return this.isAddNewMenu||this.isEnableEdit?this.$t("com205001sc00.select_icon"):""},getMenuIconIBPortal(){let e=[];return this.$store.state.CommonCodeModule.commonCode.MenuIconIDIBP&&e.push({key:"",value:"None"},...this.$store.state.CommonCodeModule.commonCode.MenuIconIDIBP),e},approvalType(){return this.$route.query.approvalType?this.$route.query.approvalType.toString():""}},methods:{async onGetMenuInfoList(){const e={pageNumber:1,pageSize:1500},t=await this.$request.getRequest("COM20500111",e,!1);if(t.header.result){const e=t.body.list;this.totalMenuList=t.body.totalCount;let n=e.filter((e=>""==e.parentMenuID)),s=e.filter((e=>"09"!=e.statusCode&&""!=e.parentMenuID));this.menuList=[...n,...s],this.transformAndExpandTreeData(this.menuList),this.approvalRequest()}},transformAndExpandTreeData(e){const t=h.transformIntoTreeData(e,"menuID","parentMenuID","menuName");this.menuTree=t,h.expandAllNodes(this.menuTree)},nodeSelectAtRoot(){return{menuID:"",menuName:"",menuLevel:0,menuDisplayOrder:"",menuStatusCode:"",parentMenuID:"",state:{indeterminate:!1,checked:!1,selected:!0,expanded:!1,highLightParentNode:!1}}},async onGetMenuInfoDetail(e){if(""==this.approvalType){if(this.tempImage="",this.isAddNewMenu||this.isEnableEdit)return this.diabledSelectNewMenu(),void this.onHighLightParentNode();if(this.selectedMenu){this.isEnableEdit=!1;const t={menuID:e.menuID};this.isHideUserCraetion=!0;const n=await this.$request.getRequest("COM20500112",t,!1);if(n.header.result){let t=Number(n.body.menuLevel);this.menuLevelData=t+=1;const s={...e,firstRegisterTellerID:n.body.firstRegisterTellerID,firstRegisterTellerName:n.body.firstRegisterTellerName,lastChangeTellerName:n.body.lastChangeTellerName,lastChangeTellerID:n.body.lastChangeTellerID,lastChangeTime:n.body.lastChangeTime,lastChangeDate:n.body.lastChangeDate,firstRegisterTime:n.body.firstRegisterTime,firstRegisterDate:n.body.firstRegisterDate,menuDisplayOrder:String(n.body.menuDisplayOrder),menuIconID:n.body.menuIconID};this.modifyCard={registerTellerName:n.body.firstRegisterTellerName,registerTellerId:n.body.firstRegisterTellerID,updatedTellerId:n.body.lastChangeTellerID,updatedTellerName:n.body.lastChangeTellerName,updatedDate:n.body.lastChangeDate,updatedTime:n.body.lastChangeTime,registerDate:n.body.firstRegisterDate,registerTime:n.body.firstRegisterTime},this.selectedMenu=s}this.isDisabledInputField("detail")}}else this.diabledSelectNewMenu()},resetStateTreeData(){0!==this.menuList.length&&(this.menuList=this.menuList.map((e=>(e.state&&(e.state.selected=!1),e))))},diabledSelectNewMenu(){this.menuList=this.menuList.map((e=>(e.isTempNewMenu||this.selectedMenu.menuID==e.menuID?e.state={indeterminate:!1,checked:!1,selected:!0,expanded:!1}:e.state={indeterminate:!1,checked:!1,selected:!1,expanded:!1},e))),this.transformAndExpandTreeData(this.menuList)},initNewMenu(){return{isTempNewMenu:!0,menuID:"",parentMenuID:this.selectedMenu.menuID,menuName:"New Menu..",menuStatusCode:"01",menuDisplayOrder:"",menuIconID:"",nodes:[],state:{indeterminate:!1,checked:!1,selected:!0,expanded:!1}}},onClickAddMenu(){if(this.selectedMenu.nodes)if("2"!=String(this.selectedMenu.menuLevel)){this.isInvalidInput=!1,this.isEnableEdit=!0,this.isAddNewMenu=!0,this.isHideUserCraetion=!1,this.resetStateTreeData();const e=this.initNewMenu();this.menuList=[...this.menuList,e],this.transformAndExpandTreeData(this.menuList),this.selectedMenu={...e,menuName:""},this.onHighLightParentNode(),this.isDisabledInputField("add")}else this.$dialog.onOpen({dialogMode:"Warning",content:this.$t("com205001sc00.not_allow_menu_level_more_than_level2"),callback:()=>o.Fy.dismiss()});else this.$dialog.onOpen({dialogMode:"Warning",content:this.$t("com205001sc00.please_select_specific_node_before_add"),btnLabel:this.$t("common.check"),callback:()=>o.Fy.dismiss()})},onClickRemoveMenu(){"0"===this.selectedMenu.menuID||this.selectedMenu.nodes&&this.selectedMenu.nodes.length>0?this.$dialog.onOpen({dialogMode:"Warning",content:this.$t("message.only_the_lowest_level_can_be_deleted"),callback:()=>o.Fy.dismiss()}):this.$dialog.onOpen({dialogMode:"Question",content:this.$t("message.are_you_sure_you_want_to_delete_selected_menu"),callback:()=>this.onRemoveMenu()})},async onRemoveMenu(){o.Fy.dismiss();const e={menuID:this.selectedMenu.menuID},t=await this.$request.getRequest("COM20500141",e,!1);t.header.result&&(this.onGetMenuInfoList(),this.menuList=this.menuList.filter((e=>e.menuID!==this.selectedMenu?.menuID)),this.transformAndExpandTreeData(this.menuList),this.clearForm(),this.$dialog.onOpen({dialogMode:"Success",content:this.$t("com205001sc00.remove_menu_success"),callback:()=>o.Fy.dismiss()}))},clearForm(){this.selectedMenu.menuName="",this.selectedMenu.menuID="",this.selectedMenu.menuIconID="",this.selectedMenu.menuDisplayOrder="",this.selectedMenu.menuStatusCode="",this.isHideUserCraetion=!1},onCheckValidate(){return""===this.selectedMenu.menuID||""===this.selectedMenu.menuName?(this.isInvalidInput=!0,!0):(this.isInvalidInput=!1,!1)},onClickSave(){this.onCheckValidate()||this.$dialog.onOpen({dialogMode:"Question",content:this.$t("message.would_you_like_to_save"),callback:()=>{o.Fy.dismiss(),this.isAddNewMenu?this.onRegisterMenuInfo():this.isAddNewMenu||this.onUpdateMenuInfo()}})},onClickEdit(){this.isEnableEdit=!0,this.isAddNewMenu=!1,this.isDisabledInputField("edit")},async onRegisterMenuInfo(){if(""!=this.selectedMenu.menuName&&this.list.push({menuName:this.selectedMenu.menuName,languageCode:"En"}),this.selectedMenu&&this.selectedMenu.parentMenuID){const e={menuID:this.selectedMenu.menuID,menuName:this.selectedMenu.menuName,parentMenuID:this.selectedMenu.parentMenuID,menuDisplayOrder:Number(this.selectedMenu.menuDisplayOrder),menuLevel:String(this.menuLevelData),menuStatusCode:this.selectedMenu.menuStatusCode,menuIconID:this.selectedMenu.menuIconID,list:this.list},t=await this.$request.getRequest("COM20500121",e,!1);t.header.result&&(this.onUpdateLocalData(),this.list=[],this.clearForm(),this.$dialog.onOpen({dialogMode:"Success",content:this.$t("com205001sc00.register_menu"),callback:()=>o.Fy.dismiss()}),this.isEnableEdit=!1,this.callbackCancel())}this.isDisabledInputField("register")},async onUpdateMenuInfo(){if(""!=this.selectedMenu.menuName&&this.list.push({menuName:this.selectedMenu.menuName,languageCode:"En"}),this.selectedMenu&&this.selectedMenu.parentMenuID){const e={menuID:this.selectedMenu.menuID,menuName:this.selectedMenu.menuName,parentMenuID:this.selectedMenu.parentMenuID,menuDisplayOrder:Number(this.selectedMenu.menuDisplayOrder),menuLevel:String(this.selectedMenu.menuLevel),menuStatusCode:this.selectedMenu.menuStatusCode,menuIconID:this.selectedMenu.menuIconID,list:this.list},t=await this.$request.getRequest("COM20500131",e,!1);t.header.result&&(this.onUpdateLocalData(),this.list=[],this.clearForm(),this.$dialog.onOpen({dialogMode:"Success",content:this.$t("com205001sc00.update_menu"),callback:()=>o.Fy.dismiss()}),this.isEnableEdit=!1,this.callbackCancel())}this.isDisabledInputField("save")},onUpdateLocalData(){this.transformAndExpandTreeData(this.menuList),this.isAddNewMenu=!1,this.isEnableEdit=!1,this.onGetMenuInfoList(),this.onResetHighLightParentNode()},onClickCancel(){!this.selectedMenu&&this.isEnableEdit||(this.isAddNewMenu?this.onCancelAddNewMenu():this.onCancelUpdateMenu())},onCancelUpdateMenu(){this.$dialog.onOpen({dialogMode:"Question",content:this.$t("message.are_you_sure_you_want_to_cancel_without_saving_data"),callback:()=>{this.callbackCancel()}})},onCancelAddNewMenu(){this.$dialog.onOpen({dialogMode:"Question",content:this.$t("message.are_you_sure_you_want_to_cancel_without_saving_data"),callback:()=>this.callbackCancel()})},callbackCancel(){this.isDisabledMenuID=!0,this.isDisabledMenuStatus=!0,this.isEnableEdit=!1,this.isAddNewMenu=!1,this.isInvalidInput=!1,this.menuList=this.menuList.filter((e=>!e.isTempNewMenu)),this.transformAndExpandTreeData(this.menuList),this.selectedMenu=this.nodeSelectAtRoot(),this.onResetHighLightParentNode(),o.Fy.dismiss()},onHighLightParentNode(){if(this.selectedMenu.isTempNewMenu){let e=this.flattenTree(this.menuTree);e.find((e=>{e.menuID==this.selectedMenu.parentMenuID&&(e.state.highLightParentNode=!0)}))}},onResetHighLightParentNode(){let e=this.flattenTree(this.menuTree);return e.find((e=>{e.state.highLightParentNode&&(e.state.highLightParentNode=!1)})),e},flattenTree(e){const t=[];return e.forEach((e=>{if(t.push(e),e.nodes.length>0){const n=this.flattenTree(e.nodes);t.push(...n)}})),t},isDisabledInputField(e){switch(e){case"detail":this.isDisabledMenuID=!0,this.isDisabledMenuStatus=!0;break;case"edit":this.selectedMenu.nodes&&this.selectedMenu.nodes.length>0?(this.isDisabledMenuID=!0,this.isDisabledMenuStatus=!0):(this.isDisabledMenuID=!0,this.isDisabledMenuStatus=!1);break;case"add":this.isDisabledMenuID=!1,this.isDisabledMenuStatus=!0;break;default:this.isDisabledMenuID=!0,this.isDisabledMenuStatus=!0;break}},async onClickUploadMenuIcon(e){this.onclickRemoveMenuIcon();const t=e.target.files[0];if("image/svg+xml"!=t.type)return"";{const e=new FileReader;e.readAsDataURL(t),e.onload=e=>{this.selectedMenu.menuIconFilePath=e.target?.result,this.previewMenuIconImageName=t.name},this.getImageMenuIcon=t}},onclickRemoveMenuIcon(){this.selectedMenu.menuIconFilePath="",this.previewMenuIconImageName=""},async approvalRequest(){""!=this.approvalType&&await this.$approval.getAuthorizationDetail().then((async e=>{let t=JSON.parse(e.body.requestContent);if(this.approvalRes=e.body,this.operationMode="my-request"==this.approvalType?"read":"my-approval"==this.approvalType?"approval":"normal","delete"==this.$util.checkServiceIdType(e.body.serviceID)){const e={menuID:t.menuID},n=await this.$request.getRequest("COM20500112",e,!1);this.selectedMenu={menuName:n.body.menuName,menuID:n.body.menuID,parentMenuID:n.body.parentMenuID,menuLevel:n.body.menuLevel,menuStatusCode:n.body.menuStatusCode,menuDisplayOrder:n.body.menuDisplayOrder,menuIconID:n.body.menuIconID,state:{indeterminate:!0,checked:!1,selected:!0,expanded:!1}};let s=this.flattenTree(this.menuTree);s.find((e=>{e.menuID==this.selectedMenu.menuID&&(e.state.selected=!0)})),setTimeout((()=>{let e=document.querySelector("#tree_active");if(e){const t=e.querySelector(".active");t&&t.scrollIntoView({behavior:"smooth",block:"center"})}}),50),this.getCreationDetailWithApprovalMode()}else if("update"==this.$util.checkServiceIdType(e.body.serviceID)){this.selectedMenu={menuName:t.menuName,menuID:t.menuID,parentMenuID:t.parentMenuID,menuLevel:t.menuLevel,menuStatusCode:t.menuStatusCode,menuDisplayOrder:t.menuDisplayOrder,menuIconID:t.menuIconID,state:{indeterminate:!0,checked:!1,selected:!0,expanded:!1}};let e=this.flattenTree(this.menuTree);e.find((e=>{e.menuID==this.selectedMenu.menuID&&(e.state.selected=!0)})),setTimeout((()=>{let e=document.querySelector("#tree_active");if(e){const t=e.querySelector(".active");t&&t.scrollIntoView({behavior:"smooth",block:"center"})}}),50),this.getCreationDetailWithApprovalMode()}else this.selectedMenu={menuName:t.menuName,menuID:t.menuID,parentMenuID:t.parentMenuID,menuLevel:t.menuLevel,menuStatusCode:t.menuStatusCode,menuDisplayOrder:t.menuDisplayOrder,menuIconID:t.menuIconID,state:{indeterminate:!0,checked:!1,selected:!0,expanded:!1}},this.menuList=[...this.menuList,this.selectedMenu],this.transformAndExpandTreeData(this.menuList),setTimeout((()=>{let e=document.querySelector("#tree_active");if(e){const t=e.querySelector(".active");t&&t.scrollIntoView({behavior:"smooth",block:"center"})}}),50)}))},async getCreationDetailWithApprovalMode(){const e={menuID:this.selectedMenu.menuID},t=await this.$request.getRequest("COM20500112",e,!1);t.header.result&&(this.modifyCard={registerTellerName:t.body.firstRegisterTellerName,registerTellerId:t.body.firstRegisterTellerID,updatedTellerId:t.body.lastChangeTellerID,updatedTellerName:t.body.lastChangeTellerName,updatedDate:t.body.lastChangeDate,updatedTime:t.body.lastChangeTime,registerDate:t.body.firstRegisterDate,registerTime:t.body.firstRegisterTime})}}}),s()}catch(h){s(h)}}))},17204:function(e,t,n){n.a(e,(async function(e,s){try{n.r(t);var i=n(43498),a=n(92e3),l=(n(16195),n(83744)),d=e([a]);a=(d.then?(await d)():d)[0];const o=(0,l.Z)(a.Z,[["render",i.s],["__scopeId","data-v-5454f2a0"]]);t["default"]=o,s()}catch(o){s(o)}}))},16195:function(){},92e3:function(e,t,n){n.a(e,(async function(e,s){try{n.d(t,{Z:function(){return i.Z}});var i=n(72881),a=e([i]);i=(a.then?(await a)():a)[0],s()}catch(l){s(l)}}))},43498:function(e,t,n){n.d(t,{s:function(){return K}});var s=n(66252),i=n(3577);const a=e=>((0,s.dD)("data-v-5454f2a0"),e=e(),(0,s.Cn)(),e),l={class:"contentWrap"},d={class:"title_name"},o={class:"cont"},u={class:"card_box tree_wrap"},r={class:"row gap menu_mgmt"},c={class:"col-6"},m={class:"flex_column"},h={class:"flex_ui"},p={class:"flex_cont"},M={key:0,class:"flex_ui"},I={class:"btn_option"},D={class:"add"},_={class:"col-6 menu_detail_wrap"},g={class:"menu_detail"},b={class:"cont"},v={class:"row"},y={class:"col"},f={class:"form01"},C=a((()=>(0,s._)("span",{class:"require"},"*",-1))),w={class:"inp"},k={key:0,class:"txt_error"},N={class:"row"},T={class:"col"},L={class:"form01"},$=a((()=>(0,s._)("span",{class:"require"},"*",-1))),E={class:"inp"},S={key:0,class:"txt_error"},O={class:"row"},R={class:"col"},q={class:"form01"},A=a((()=>(0,s._)("span",{class:"require"},"*",-1))),x={class:"row"},z={class:"col"},U={class:"form01"},V={class:"inp_box"},F={class:"inp"},P={class:"row"},W={class:"col"},H={class:"form01"},Z={key:0,class:"flex_ui"},j={class:"btn_option"},B={class:"edit"},G={class:"save"};function K(e,t){const n=(0,s.up)("BreadCrumb"),a=(0,s.up)("Tree"),K=(0,s.up)("ion-button"),Q=(0,s.up)("ion-input"),Y=(0,s.up)("ion-select-option"),J=(0,s.up)("ion-select"),X=(0,s.up)("ModifyCard"),ee=(0,s.up)("ApprovalReason");return(0,s.wg)(),(0,s.iD)("div",l,[(0,s.Wm)(n,{items:e.breadcrumbs},null,8,["items"]),(0,s._)("h1",d,(0,i.zw)(e.$t("com205001sc00.portal_menu_register_detail_edit")),1),(0,s._)("div",o,[(0,s._)("div",u,[(0,s._)("div",r,[(0,s._)("div",c,[(0,s._)("div",m,[(0,s._)("div",h,[(0,s._)("h4",null,(0,i.zw)(e.$t("com205001sc00.menu_list")),1)]),(0,s._)("div",p,[(0,s.Wm)(a,{ref:"ib-menu-tree-register-ref",id:"ib-menu-tree-register",subIcon:["sub-tree-icon"],classIcon:["open-tree-folder","close-tree-folder"],"expanded-all":!0,icons:["fa-folder","fa-folder-open"],nodes:e.menuTree,onOnSelected:e.onGetMenuInfoDetail,isDisabledSearch:e.isEnableEdit||"read"==e.operationMode||"approval"==e.operationMode},null,8,["nodes","onOnSelected","isDisabledSearch"])]),"normal"==e.operationMode?((0,s.wg)(),(0,s.iD)("div",M,[(0,s._)("div",I,[(0,s.Wm)(K,{class:"btn03",onClick:e.onClickRemoveMenu,disabled:!this.selectedMenu.menuName||e.isEnableEdit},{default:(0,s.w5)((()=>[(0,s._)("span",null,(0,i.zw)(e.$t("common.remove_menu")),1)])),_:1},8,["onClick","disabled"]),(0,s.Wm)(K,{class:"btn01 btn_ico",onClick:e.onClickAddMenu,disabled:!this.selectedMenu.menuName||e.isEnableEdit},{default:(0,s.w5)((()=>[(0,s._)("span",D,(0,i.zw)(e.$t("common.add_menu")),1)])),_:1},8,["onClick","disabled"])])])):(0,s.kq)("",!0)])]),(0,s._)("div",_,[(0,s._)("h4",null,(0,i.zw)(e.$t("com205001sc00.menu_detail")),1),(0,s._)("div",g,[(0,s._)("div",b,[(0,s._)("div",v,[(0,s._)("div",y,[(0,s._)("dl",f,[(0,s._)("dt",null,[(0,s.Uk)((0,i.zw)(e.$t("com205001sc00.menu_ID")),1),C]),(0,s._)("dd",null,[(0,s._)("div",{class:(0,i.C_)(["inp_box",{inp_error:e.isInvalidInput&&""===e.selectedMenu.menuID}])},[(0,s._)("div",w,[(0,s.Wm)(Q,{class:"line",maxlength:"20",placeholder:e.isAddNewMenu?e.$t("com205001sc00.menu_ID"):"",modelValue:e.selectedMenu.menuID,"onUpdate:modelValue":t[0]||(t[0]=t=>e.selectedMenu.menuID=t),readonly:e.isDisabledMenuID||!e.isAddNewMenu||"read"==e.operationMode||"approval"==e.operationMode},null,8,["placeholder","modelValue","readonly"])]),e.isInvalidInput&&""===e.selectedMenu.menuID?((0,s.wg)(),(0,s.iD)("p",k,(0,i.zw)(e.$t("error_text.this_field_is_required")),1)):(0,s.kq)("",!0)],2)])])])]),(0,s._)("div",N,[(0,s._)("div",T,[(0,s._)("dl",L,[(0,s._)("dt",null,[(0,s.Uk)((0,i.zw)(e.$t("com205001sc00.menu_name")),1),$]),(0,s._)("dd",null,[(0,s._)("div",{class:(0,i.C_)(["inp_box",{inp_error:e.isInvalidInput&&""===e.selectedMenu.menuName}])},[(0,s._)("div",E,[(0,s.Wm)(Q,{class:"line",maxlength:"50",placeholder:e.isAddNewMenu?e.$t("com205001sc00.menu_name"):"",modelValue:e.selectedMenu.menuName,"onUpdate:modelValue":t[1]||(t[1]=t=>e.selectedMenu.menuName=t),readonly:!e.isEnableEdit||"read"==e.operationMode||"approval"==e.operationMode},null,8,["placeholder","modelValue","readonly"])]),e.isInvalidInput&&""===e.selectedMenu.menuName?((0,s.wg)(),(0,s.iD)("p",S,(0,i.zw)(e.$t("error_text.this_field_is_required")),1)):(0,s.kq)("",!0)],2)])])])]),(0,s._)("div",O,[(0,s._)("div",R,[(0,s._)("dl",q,[(0,s._)("dt",null,[(0,s.Uk)((0,i.zw)(e.$t("com205001sc00.menu_status")),1),A]),(0,s._)("dd",null,[(0,s.Wm)(J,{class:(0,i.C_)(["line",{invalidInput:e.isInvalidInput&&""===e.selectedMenu.menuStatusCode}]),interface:"popover",interfaceOptions:{size:"cover"},value:"",modelValue:e.selectedMenu.menuStatusCode,"onUpdate:modelValue":t[2]||(t[2]=t=>e.selectedMenu.menuStatusCode=t),disabled:e.isDisabledMenuStatus||!e.isEnableEdit||"read"==e.operationMode||"approval"==e.operationMode},{default:(0,s.w5)((()=>[e.isEnableEdit?((0,s.wg)(),(0,s.j4)(Y,{key:0,value:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(e.$t("common.none")),1)])),_:1})):(0,s.kq)("",!0),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.$store.state.CommonCodeModule.commonCode.MenuStatusCode,((t,n)=>((0,s.wg)(),(0,s.j4)(Y,{value:t.key},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(e.menuStatusCodeValue(t.key,t.value)),1)])),_:2},1032,["value"])))),256))])),_:1},8,["class","modelValue","disabled"])])])])]),(0,s._)("div",x,[(0,s._)("div",z,[(0,s._)("dl",U,[(0,s._)("dt",null,(0,i.zw)(e.$t("com205001sc00.menu_display_order")),1),(0,s._)("dd",null,[(0,s._)("div",V,[(0,s._)("div",F,[(0,s.Wm)(Q,{class:"line",maxlength:"3",placeholder:e.isAddNewMenu?e.$t("com205001sc00.menu_display_order"):"",modelValue:e.selectedMenu.menuDisplayOrder,"onUpdate:modelValue":t[3]||(t[3]=t=>e.selectedMenu.menuDisplayOrder=t),readonly:!e.isEnableEdit||"read"==e.operationMode||"approval"==e.operationMode,oninput:"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');"},null,8,["placeholder","modelValue","readonly"])])])])])])]),(0,s._)("div",P,[(0,s._)("div",W,[(0,s._)("dl",H,[(0,s._)("dt",null,(0,i.zw)(e.$t("com205001sc00.menu_icon")),1),(0,s._)("dd",null,[(0,s.Wm)(J,{class:"line",interface:"popover",interfaceOptions:{size:"cover"},placeholder:e.isAddNewMenu?e.$t("com205001sc00.select_icon"):"",value:"",modelValue:e.selectedMenu.menuIconID,"onUpdate:modelValue":t[4]||(t[4]=t=>e.selectedMenu.menuIconID=t),disabled:!e.isEnableEdit||"read"==e.operationMode||"approval"==e.operationMode},{default:(0,s.w5)((()=>[e.isEnableEdit?((0,s.wg)(),(0,s.j4)(Y,{key:0,value:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(e.$t("common.none")),1)])),_:1})):(0,s.kq)("",!0),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.$store.state.CommonCodeModule.commonCode.MenuIconIDIBP,((e,t)=>((0,s.wg)(),(0,s.j4)(Y,{value:e.key},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(e.key)+": "+(0,i.zw)(e.value),1)])),_:2},1032,["value"])))),256))])),_:1},8,["placeholder","modelValue","disabled"])])])])]),e.selectedMenu.nodes&&this.isHideUserCraetion||"normal"!==e.operationMode?((0,s.wg)(),(0,s.j4)(X,{key:0,data:e.modifyCard},null,8,["data"])):(0,s.kq)("",!0)]),"normal"==e.operationMode?((0,s.wg)(),(0,s.iD)("div",Z,[(0,s._)("div",j,[e.isEnableEdit?((0,s.wg)(),(0,s.j4)(K,{key:0,class:"btn03",onClick:e.onClickCancel},{default:(0,s.w5)((()=>[(0,s._)("span",null,(0,i.zw)(e.$t("common.cancel")),1)])),_:1},8,["onClick"])):(0,s.kq)("",!0),(0,s._)("div",null,[!e.isEnableEdit&&e.selectedMenu.menuName?((0,s.wg)(),(0,s.j4)(K,{key:0,class:"btn02 btn_ico",onClick:e.onClickEdit,disabled:"0"==e.selectedMenu.menuLevel},{default:(0,s.w5)((()=>[(0,s._)("span",B,(0,i.zw)(e.$t("common.edit")),1)])),_:1},8,["onClick","disabled"])):(0,s.kq)("",!0),e.isEnableEdit?((0,s.wg)(),(0,s.j4)(K,{key:1,class:"btn01 btn_ico",onClick:e.onClickSave},{default:(0,s.w5)((()=>[(0,s._)("span",G,(0,i.zw)(e.$t("common.save")),1)])),_:1},8,["onClick"])):(0,s.kq)("",!0)])])])):(0,s.kq)("",!0)])])])])]),"normal"!==e.operationMode?((0,s.wg)(),(0,s.j4)(ee,{key:0,payload:e.approvalRes},null,8,["payload"])):(0,s.kq)("",!0)])}}}]);
//# sourceMappingURL=7204.593b0682.js.map