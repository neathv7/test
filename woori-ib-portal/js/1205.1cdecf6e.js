"use strict";(self["webpackChunkbizMOB4Vue"]=self["webpackChunkbizMOB4Vue"]||[]).push([[1205],{51205:function(e,t,n){n.r(t),n.d(t,{default:function(){return X}});var s=n(66252),i=n(3577);const l={class:"contentWrap"},a={class:"bread_crumb"},d={class:"title_name"},u={class:"cont"},o={class:"card_box"},c={class:"row gap menu_mgmt"},m={class:"col-6"},r={class:"menu_level"},h={class:"btn_option"},_={class:"add"},M={key:0,class:"col-6 menu_detail_wrap"},p={class:"menu_detail"},g={class:"cont"},w={class:"row"},I={class:"col"},v={class:"form01"},f={class:"inp_box"},D={class:"inp"},b={class:"row"},C={class:"col"},N={class:"form01"},k={class:"inp_box"},L={class:"inp"},$={class:"row"},y={class:"col"},E={class:"form01"},T={class:"row"},S={class:"col"},A={key:0,class:"form01"},R={class:"inp_box"},z={class:"inp"},O={class:"row"},U={class:"col"},x={key:0,class:"form01"},V={class:"inp_box"},q={class:"inp"},P={class:"btn_option"},W={class:"edit"},F={class:"save"};function H(e,t){const n=(0,s.up)("ion-label"),H=(0,s.up)("Tree"),j=(0,s.up)("ion-button"),G=(0,s.up)("ion-input"),B=(0,s.up)("ion-select-option"),Z=(0,s.up)("ion-select");return(0,s.wg)(),(0,s.iD)("div",l,[(0,s._)("div",a,[(0,s.Wm)(n,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(e.$t("common.home")),1)])),_:1}),(0,s.Wm)(n,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(e.$t("com213001sc01.ib_management")),1)])),_:1}),(0,s.Wm)(n,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(e.$t("com213001sc01.ib_menu")),1)])),_:1}),(0,s.Wm)(n,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(e.$t("com213001sc01.ib_menu_detail")),1)])),_:1})]),(0,s._)("h1",d,(0,i.zw)(e.$t("com213001sc01.ib_menu_detail")),1),(0,s._)("div",u,[(0,s._)("div",o,[(0,s._)("div",c,[(0,s._)("div",m,[(0,s._)("h4",null,(0,i.zw)(e.$t("com213001sc00.menu_list")),1),(0,s._)("ul",r,[(0,s.Wm)(H,{ref:"ib-menu-tree-edit-ref",id:"ib-menu-tree-edit",classIcon:["open-tree-folder","close-tree-folder"],"expanded-all":!0,icons:["fa-folder","fa-folder-open"],nodes:e.menuTree,onOnSelected:e.onGetMenuInfoDetail},null,8,["nodes","onOnSelected"])]),(0,s._)("div",h,[e.selectedMenu&&!e.isEnableEdit?((0,s.wg)(),(0,s.j4)(j,{key:0,class:"btn03",onClick:e.onClickRemoveMenu},{default:(0,s.w5)((()=>[(0,s._)("span",null,(0,i.zw)(e.$t("common.remove_menu")),1)])),_:1},8,["onClick"])):(0,s.kq)("",!0),e.isEnableEdit?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(j,{key:1,class:"btn01 btn_ico",onClick:e.onClickAddMenu},{default:(0,s.w5)((()=>[(0,s._)("span",_,(0,i.zw)(e.$t("common.add_menu")),1)])),_:1},8,["onClick"]))])]),e.selectedMenu&&""!==e.selectedMenu.parentMenuID?((0,s.wg)(),(0,s.iD)("div",M,[(0,s._)("h4",null,(0,i.zw)(e.isAddNewMenu?e.$t("com213001sc01.ib_create_menu"):e.$t("com213001sc00.menu_detail")),1),(0,s._)("div",p,[(0,s._)("div",g,[(0,s._)("div",w,[(0,s._)("div",I,[(0,s._)("dl",v,[(0,s._)("dt",null,(0,i.zw)(e.$t("com213001sc00.menu_ID")),1),(0,s._)("dd",null,[(0,s._)("div",f,[(0,s._)("div",D,[(0,s.Wm)(G,{class:(0,i.C_)(["line",{invalidInput:e.isInvalidInput&&""===e.selectedMenu.menuID}]),placeholder:e.$t("com213001sc00.menu_ID"),modelValue:e.selectedMenu.menuID,"onUpdate:modelValue":t[0]||(t[0]=t=>e.selectedMenu.menuID=t),readonly:!e.isAddNewMenu},null,8,["class","placeholder","modelValue","readonly"])])])])])])]),(0,s._)("div",b,[(0,s._)("div",C,[(0,s._)("dl",N,[(0,s._)("dt",null,(0,i.zw)(e.$t("com213001sc00.menu_name")),1),(0,s._)("dd",null,[(0,s._)("div",k,[(0,s._)("div",L,[(0,s.Wm)(G,{class:(0,i.C_)(["line",{invalidInput:e.isInvalidInput&&""===e.selectedMenu.menuName}]),placeholder:e.$t("com213001sc00.menu_name"),modelValue:e.selectedMenu.menuName,"onUpdate:modelValue":t[1]||(t[1]=t=>e.selectedMenu.menuName=t),readonly:!e.isEnableEdit},null,8,["class","placeholder","modelValue","readonly"])])])])])])]),(0,s._)("div",$,[(0,s._)("div",y,[(0,s._)("dl",E,[(0,s._)("dt",null,(0,i.zw)(e.$t("com213001sc00.menu_status")),1),(0,s._)("dd",null,[(0,s.Wm)(Z,{interface:"popover",interfaceOptions:{size:"cover"},class:(0,i.C_)(["line",{invalidInput:e.isInvalidInput&&""===e.selectedMenu.menuStatusCode}]),placeholder:"Select",modelValue:e.selectedMenu.menuStatusCode,"onUpdate:modelValue":t[2]||(t[2]=t=>e.selectedMenu.menuStatusCode=t),disabled:!e.isEnableEdit},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.COMMON_KEY_VALUE.screenMenuStatus,((e,t)=>((0,s.wg)(),(0,s.j4)(B,{value:e.key},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(e.value),1)])),_:2},1032,["value"])))),256))])),_:1},8,["class","modelValue","disabled"])])])])]),(0,s._)("div",T,[(0,s._)("div",S,[e.isAddNewMenu?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("dl",A,[(0,s._)("dt",null,(0,i.zw)(e.$t("common.creation")),1),(0,s._)("dd",null,[(0,s._)("div",R,[(0,s._)("div",z,[(0,s.Wm)(G,{class:"line",placeholder:"",value:e.firstRegisterTellerName&&e.firstRegisterTellerID?e.creationValue:"",disabled:""},null,8,["value"])])])])]))])]),(0,s._)("div",O,[(0,s._)("div",U,[e.isAddNewMenu?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("dl",x,[(0,s._)("dt",null,(0,i.zw)(e.$t("common.last_edit")),1),(0,s._)("dd",null,[(0,s._)("div",V,[(0,s._)("div",q,[(0,s.Wm)(G,{class:"line",placeholder:"",value:e.lastChangeTellerName&&e.lastChangeTellerID?e.lastEditValue:"",disabled:""},null,8,["value"])])])])]))])])]),(0,s._)("div",P,[e.isEnableEdit?((0,s.wg)(),(0,s.j4)(j,{key:0,class:"btn03",onClick:e.onClickCancel},{default:(0,s.w5)((()=>[(0,s._)("span",null,(0,i.zw)(e.$t("common.cancel")),1)])),_:1},8,["onClick"])):(0,s.kq)("",!0),(0,s._)("div",null,[e.isEnableEdit?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(j,{key:0,class:"btn02 btn_ico",onClick:e.onClickEdit},{default:(0,s.w5)((()=>[(0,s._)("span",W,(0,i.zw)(e.$t("common.edit")),1)])),_:1},8,["onClick"])),e.isEnableEdit?((0,s.wg)(),(0,s.j4)(j,{key:1,class:"btn01 btn_ico",onClick:e.onClickSave},{default:(0,s.w5)((()=>[(0,s._)("span",F,(0,i.zw)(e.$t("common.save")),1)])),_:1},8,["onClick"])):(0,s.kq)("",!0)])])])])):(0,s.kq)("",!0)])])])])}var j=n(12187),G=n(29641),B=n(42615),Z=n(43493);const K=new G.Z;var Y=(0,s.aZ)({name:"com213001sc01Vue",components:{Tree:j.Z},data(){return{COMMON_KEY_VALUE:B.ii,menuTree:[],menuList:[],selectedMenu:{menuID:"0",menuName:"Root",menuLevel:0,menuDisplayOrder:0,menuStatusCode:"",parentMenuID:"",state:{indeterminate:!1,checked:!1,selected:!0,expanded:!1,highLightParentNode:!1}},isAddNewMenu:!1,isEnableEdit:!1,isInvalidInput:!1,menuLevelData:null,totalMenuList:0,menuSize:500}},mounted(){this.onGetMenuInfoList()},computed:{creationValue(){const{firstRegisterTellerName:e,firstRegisterTellerID:t}=this.selectedMenu;return`${e} (${t})`},lastEditValue(){const{lastChangeTellerName:e,lastChangeTellerID:t}=this.selectedMenu;return`${e} (${t})`}},methods:{async onGetMenuInfoList(){const e={pageNumber:1,pageSize:this.menuSize},t=await this.$request.getRequest("COM21300111",e,!1);if(t.header.result){const e=t.body.list;let n=e.filter((e=>""==e.parentMenuID)),s=e.filter((e=>"09"!==e.menuStatusCode&&""!=e.parentMenuID));this.menuList=[...n,...s],this.transformAndExpandTreeData(this.menuList),this.totalMenuList>this.menuSize&&(this.menuSize=this.totalMenuList,this.callBackMenuList()),this.onHighLightParentNode()}},transformAndExpandTreeData(e){const t=K.transformIntoTreeData(e,"menuID","parentMenuID","menuName");this.menuTree=t,K.expandAllNodes(this.menuTree)},nodeSelectAtRoot(){return{menuID:"0",menuName:"Root",menuLevel:0,menuDisplayOrder:0,menuStatusCode:"",parentMenuID:"",state:{indeterminate:!1,checked:!1,selected:!0,expanded:!1,highLightParentNode:!1}}},async onGetMenuInfoDetail(e){if(this.isAddNewMenu)return this.diabledSelectNewMenu(),void this.onHighLightParentNode();if(this.selectedMenu){this.isEnableEdit=!1;const t={menuID:e.menuID},n=await this.$request.getRequest("COM21300112",t,!1);if(n.header.result){let t=Number(n.body.menuLevel);this.menuLevelData=t+=1;const s={...e,firstRegisterTellerID:n.body.firstRegisterTellerID,firstRegisterTellerName:`${n.body.registerUserFirstName} ${n.body.registerUserLastName}`,lastChangeTellerName:`${n.body.lastChangeUserFirstName} ${n.body.lastChangeUserLastName}`,lastChangeTellerID:n.body.lastChangeTellerID};this.selectedMenu=s}}},resetStateTreeData(){0!==this.menuList.length&&(this.menuList=this.menuList.map((e=>(e.state&&(e.state.selected=!1),e))))},diabledSelectNewMenu(){this.menuList=this.menuList.map((e=>(e.isTempNewMenu?e.state={indeterminate:!1,checked:!1,selected:!0,expanded:!1}:e.state={indeterminate:!1,checked:!1,selected:!1,expanded:!1},e))),this.transformAndExpandTreeData(this.menuList)},initNewMenu(){return{isTempNewMenu:!0,menuID:"",parentMenuID:this.selectedMenu.menuID,menuName:"New Menu",menuStatusCode:"01",nodes:[],state:{indeterminate:!1,checked:!1,selected:!0,expanded:!1}}},onClickAddMenu(){this.isInvalidInput=!1,this.isEnableEdit=!0,this.isAddNewMenu=!0,this.resetStateTreeData();const e=this.initNewMenu();this.menuList=[...this.menuList,e],this.transformAndExpandTreeData(this.menuList),this.selectedMenu={...e,menuName:""},this.onHighLightParentNode()},onClickRemoveMenu(){"0"===this.selectedMenu.menuID||this.selectedMenu.nodes&&this.selectedMenu.nodes.length>0?this.$dialog.onOpen({title:this.$t("message.alert"),showCancel:!1,content:this.$t("message.only_the_lowest_level_can_be_deleted"),btnLabel:this.$t("common.check"),callback:()=>Z.Fy.dismiss()}):this.$dialog.onOpen({title:this.$t("message.alert"),content:this.$t("message.are_you_sure_you_want_to_delete_selected_menu"),callback:()=>this.onRemoveMenu()})},async onRemoveMenu(){Z.Fy.dismiss();const e={menuID:this.selectedMenu.menuID},t=await this.$request.getRequest("COM21300141",e,!1);t.header.result&&(this.menuList=this.menuList.filter((e=>e.menuID!==this.selectedMenu?.menuID)),this.transformAndExpandTreeData(this.menuList),this.selectedMenu=this.nodeSelectAtRoot())},onCheckValidate(){return""===this.selectedMenu.menuID||""===this.selectedMenu.menuName?(this.isInvalidInput=!0,!0):(this.isInvalidInput=!1,!1)},onClickSave(){this.onCheckValidate()?this.$dialog.onOpen({title:this.$t("message.alert"),showCancel:!1,content:this.$t("message.please_enter_missing_data"),callback:()=>Z.Fy.dismiss()}):this.$dialog.onOpen({title:this.$t("message.alert"),content:this.$t("message.would_you_like_to_save"),callback:()=>{Z.Fy.dismiss(),this.isAddNewMenu?this.onRegisterMenuInfo():this.isAddNewMenu||this.onUpdateMenuInfo()}})},async onUpdateMenuInfo(){if(this.selectedMenu&&this.selectedMenu.parentMenuID){const e={menuID:this.selectedMenu.menuID,menuName:this.selectedMenu.menuName,parentMenuID:this.selectedMenu.parentMenuID,menuDisplayOrder:Number(this.selectedMenu.menuDisplayOrder),menuLevel:String(this.selectedMenu.menuLevel),menuStatusCode:this.selectedMenu.menuStatusCode,menuIconID:"",list:null},t=await this.$request.getRequest("COM21300131",e,!1);t.header.result&&this.onUpdateLocalData()}},async onRegisterMenuInfo(){if(this.selectedMenu&&this.selectedMenu.parentMenuID){const e={menuID:this.selectedMenu.menuID,menuName:this.selectedMenu.menuName,parentMenuID:this.selectedMenu.parentMenuID,menuDisplayOrder:Number(this.selectedMenu.menuDisplayOrder),menuLevel:String(this.menuLevelData),menuStatusCode:this.selectedMenu.menuStatusCode,menuIconID:"",list:null},t=await this.$request.getRequest("COM21300121",e,!1);t.header.result&&this.onUpdateLocalData()}},onUpdateLocalData(){this.transformAndExpandTreeData(this.menuList),this.isAddNewMenu=!1,this.isEnableEdit=!1,this.onGetMenuInfoList()},onClickCancel(){!this.selectedMenu&&this.isEnableEdit||(this.isAddNewMenu?this.onCancelAddNewMenu():this.onCancelUpdateMenu())},onCancelUpdateMenu(){this.$dialog.onOpen({title:this.$t("message.alert"),content:this.$t("message.are_you_sure_you_want_to_cancel_without_saving_data"),callback:()=>{this.selectedMenu=this.nodeSelectAtRoot(),this.isEnableEdit=!1,Z.Fy.dismiss(),this.onResetHighLightParentNode()}})},onCancelAddNewMenu(){this.$dialog.onOpen({title:this.$t("message.alert"),content:this.$t("message.are_you_sure_you_want_to_cancel_without_saving_data"),callback:()=>this.onConfirmCancel()})},onConfirmCancel(){this.menuList=this.menuList.filter((e=>!e.isTempNewMenu)),this.menuList[0].state={indeterminate:!1,checked:!1,selected:!0,expanded:!1},this.transformAndExpandTreeData(this.menuList),this.selectedMenu=this.nodeSelectAtRoot(),this.isAddNewMenu=!1,this.isInvalidInput=!1,this.isEnableEdit=!1,this.onResetHighLightParentNode(),Z.Fy.dismiss()},onClickEdit(){this.isEnableEdit=!0},callBackMenuList(){this.onGetMenuInfoList()},onHighLightParentNode(){if(this.selectedMenu.isTempNewMenu){let e=this.flattenTree(this.menuTree);e.find((e=>{e.menuID==this.selectedMenu.parentMenuID&&(e.state.highLightParentNode=!0)}))}},onResetHighLightParentNode(){let e=this.flattenTree(this.menuTree);return e.find((e=>{e.state.highLightParentNode&&(e.state.highLightParentNode=!1)})),e},flattenTree(e){const t=[];return e.forEach((e=>{if(t.push(e),e.nodes.length>0){const n=this.flattenTree(e.nodes);t.push(...n)}})),t}}}),J=n(83744);const Q=(0,J.Z)(Y,[["render",H],["__scopeId","data-v-77e02297"]]);var X=Q}}]);
//# sourceMappingURL=1205.1cdecf6e.js.map