"use strict";(self["webpackChunkbizMOB4Vue"]=self["webpackChunkbizMOB4Vue"]||[]).push([[6748],{75467:function(e,t,s){s.a(e,(async function(e,n){try{var i=s(66252),a=s(12187),l=s(42615),d=s(29641),c=s(43493),o=s(90121),r=s(21638),u=s(15828),h=e([o]);o=(h.then?(await h)():h)[0];const m=new d.Z;t["Z"]=(0,i.aZ)({name:"com215001sc00Vue",components:{Tree:a.Z,BreadCrumb:o.Z,Pagination:r.Z,ModifyCard:u.Z},data(){const e={registerTellerName:"",registerTellerId:"",updatedTellerId:"",updatedTellerName:"",updatedDate:"",updatedTime:"",registerDate:"",registerTime:""};return{modifyCard:e,isReset:!1,COMMON_KEY_VALUE:l.ii,selectedScreenOption:"01",searchScreenID:"",selectedScreen:"",screenList:[],baseScreenList:[],isInvalidInput:!1,isViewMode:!1,isAddScreen:!1,isShowDetail:!1,menuTree:[],menuList:[],selectedMenu:{menuID:"",menuName:"",menuLevel:0,menuDisplayOrder:0,webPageURL:"",parentMenuID:""},totalMenuList:0,menuSize:500,currentPage:1,pageSize:5,startingIndex:1,totalScreenItems:0,approvalRes:{},operationMode:"normal"}},mounted(){this.onGetMenuList(),this.onGetScreenInfoList()},computed:{isInvalidWebURL(){return!("01"!==this.selectedScreenOption||""!==this.selectedMenu.webPageURL&&this.isValidUrl(this.selectedMenu.webPageURL))},isInvalidSelectScreen(){return""===this.selectedScreen&&"02"===this.selectedScreenOption},menuStatusCodeValue(){return(e,t)=>`${e} : ${t}`},convertLinkedStatus(){return e=>"Y"==e?`${this.$t("com215001sc00.linked")}`:`${this.$t("com215001sc00.not_linked")}`},modifiedCardInfo(){return{registerTellerName:""!=this.selectedMenu.linkDate?this.selectedMenu.firstRegisterTellerName:"",registerTellerId:""!=this.selectedMenu.linkDate?this.selectedMenu.firstRegisterTellerID:"",registerDate:""!=this.selectedMenu.linkDate?this.selectedMenu.firstRegisterDate:"",registerTime:""!=this.selectedMenu.linkDate?this.selectedMenu.firstRegisterTime:""}},viewLinksField(){return"02"==this.selectedScreenOption?"":this.searchScreenID},approvalType(){return this.$route.query.approvalType?this.$route.query.approvalType.toString():""}},watch:{selectedScreenOption(e){"02"==e?this.selectedMenu.webPageURL="":(this.searchScreenID="",this.isInvalidInput=!1)}},methods:{async onGetMenuList(){const e={pageNumber:1,pageSize:1500},t=await this.$request.getRequest("COM21500112",e,!1);if(t.header.result){const e=t.body.list.map((e=>((e.webPageURL||e.screenID)&&(e.subText=e.webPageURL?e.webPageURL:`(${e.screenID}) ${e.screenName}`),e)));this.menuList=[...e],this.transformAndExpandTreeData(this.menuList),this.approvalRequest()}},isValidUrl(e){const t=new RegExp(/^(http:\/\/|https:\/\/)/i);return t.test(e)},transformAndExpandTreeData(e){const t=m.transformIntoTreeData(e,"menuID","parentMenuID","menuName","subText");this.menuTree=t,m.expandAllNodes(this.menuTree)},diabledSelectNewMenu(){this.menuList=this.menuList.map((e=>("Screen Name"===e.subText?e.state={indeterminate:!1,checked:!1,selected:!0,expanded:!1}:e.state={indeterminate:!1,checked:!1,selected:!1,expanded:!1},e))),this.transformAndExpandTreeData(this.menuList)},async onGetScreenInfoList(){const e={pageNumber:this.currentPage,pageSize:this.pageSize,searchValue:this.searchScreenID},t=await this.$request.getRequest("COM21500111",e,!1);if(t.header.result){const e=t.body.list;this.screenList=e,this.baseScreenList=e,this.totalScreenItems=t.body.totalCount}},async onGetMenuInfoDetail(e){if(""===this.approvalType){if(this.isAddScreen)return this.diabledSelectNewMenu(),void this.onHighLightParentNode();const t={menuID:e.menuID},s=await this.$request.getRequest("COM21500211",t,!1);if(s.header.result){const t={...e,firstRegisterTellerName:s.body.firstRegisterTellerName,firstRegisterTellerID:s.body.firstRegisterTellerID?.replace(/\s/g,""),firstRegisterDate:s.body.linkDate,firstRegisterTime:s.body.lastChangeTime,lastChangeTellerID:s.body.lastChangeTellerID?.replace(/\s/g,""),lastChangeTime:s.body.lastChangeTime,lastChangeDate:s.body.lastChangeDate,linkDate:s.body.linkDate,menuStatusCode:this.menuStatusCodeValue(s.body.menuStatusCode,this.$codeConverter.convertValue("MenuStatusCode",s.body.menuStatusCode))};this.selectedMenu=t,this.selectedScreenOption=""!==this.selectedMenu.webPageURL?"01":"02",this.selectedScreen=this.selectedMenu.screenID||"",this.searchScreenID=this.selectedMenu.screenID,this.isViewMode=""!==e.webPageURL||""!==e.screenID}}else this.diabledItemApprovalMode()},async onClickSearch(){""==this.searchScreenID?(this.pageSize=5,this.currentPage=1,this.isReset=!0,this.onGetScreenInfoList()):(this.currentPage=1,this.isReset=!0,this.onGetScreenInfoList())},onClickResetSearch(){this.pageSize=5,this.currentPage=1,this.isReset=!0,this.searchScreenID="",this.onGetScreenInfoList()},onClickAddScreen(){if(this.selectedMenu.nodes)if(""==this.selectedMenu.parentMenuID)this.$dialog.onOpen({dialogMode:"Warning",content:this.$t("com215001sc00.can_not_add_link_or_screen_to_root_menu"),callback:()=>c.Fy.dismiss()});else{this.isAddScreen=!0,this.isShowDetail=!0;const e=this.menuList.map((e=>(e.menuID===this.selectedMenu?.menuID&&(e.subText="Screen Name..",this.selectedMenu=e),e)));this.menuList=e,this.transformAndExpandTreeData(this.menuList),this.onHighLightParentNode()}else this.selectedMenu.nodes||this.$dialog.onOpen({dialogMode:"Warning",content:this.$t("com215001sc00.please_select_specific_menu_node_before_add_links_or_screen"),callback:()=>c.Fy.dismiss()})},onCheckValidate(){return this.isInvalidWebURL||this.isInvalidSelectScreen?(this.isInvalidInput=!0,!0):(this.isInvalidInput=!1,!1)},onClickSave(){this.onCheckValidate()?"02"==this.selectedScreenOption&&this.$dialog.onOpen({dialogMode:"Warning",content:this.$t("com215001sc00.please_select_a_screen_before_clicking_the_linked_in_button"),callback:()=>c.Fy.dismiss()}):this.$dialog.onOpen({dialogMode:"Question",content:this.$t("message.would_you_like_to_save"),callback:()=>this.onAddScreen()})},async onAddScreen(){const e={menuID:this.selectedMenu.menuID,screenID:this.selectedScreen,webPageURL:String(this.selectedMenu.webPageURL)},t=await this.$request.getRequest("COM21500122",e,!1);t.header.result&&(c.Fy.dismiss(),this.isAddScreen=!1,this.isViewMode=!0,this.isShowDetail=!0,this.searchScreenID="",this.onGetMenuList(),this.onGetScreenInfoList(),this.onResetHighLightParentNode(),this.clearForm(),this.$dialog.onOpen({dialogMode:"Success",content:this.$t("com215001sc00.mapping_screen_success"),callback:()=>c.Fy.dismiss()}),this.isAddScreen=!1,this.callbackCancel())},statusConverter(e){switch(e){case"Linked":return"active";default:return"inactive"}},onClickCancel(){this.$dialog.onOpen({dialogMode:"Question",content:this.$t("message.are_you_sure_you_want_to_cancel_without_saving_data"),callback:()=>this.callbackCancel()})},callbackCancel(){this.isAddScreen=!1,this.isShowDetail=!1;const e=this.menuList.map((e=>(e.menuID===this.selectedMenu?.menuID&&(e.subText=null,this.selectedMenu={}),e)));this.menuList=e,this.transformAndExpandTreeData(this.menuList),c.Fy.dismiss(),this.searchScreenID="",this.isInvalidInput=!1,this.onGetScreenInfoList(),this.onResetHighLightParentNode()},handlePagination(e){this.currentPage=e,this.isReset=!1,this.onGetScreenInfoList()},handleStartingIndex(e){this.startingIndex=e},onHighLightParentNode(){if(this.selectedMenu){let e=this.flattenTree(this.menuTree);e.find((e=>{e.menuID==this.selectedMenu.menuID&&(e.state.highLightParentNode=!0)}))}},onResetHighLightParentNode(){let e=this.flattenTree(this.menuTree);return e.find((e=>{e.state.highLightParentNode&&(e.state.highLightParentNode=!1)})),e},flattenTree(e){const t=[];return e.forEach((e=>{if(t.push(e),e.nodes.length>0){const s=this.flattenTree(e.nodes);t.push(...s)}})),t},onClickRemove(){this.selectedMenu&&(this.selectedMenu.subText||"Root"==this.selectedMenu.menuName?this.selectedMenu.subText&&"Root"!=this.selectedMenu.menuName?this.$dialog.onOpen({dialogMode:"Question",content:this.$t("message.disconnect_from_menu"),callback:()=>this.onRemoveMenu()}):this.$dialog.onOpen({dialogMode:"Warning",content:this.$t("com215001sc00.it_is_default_root_folder_dont_have_option_to_linked_out"),callback:()=>c.Fy.dismiss()}):this.$dialog.onOpen({dialogMode:"Warning",content:this.$t("com215001sc00.this_menu_dont_have_links_or_screen_for_disconnect"),callback:()=>c.Fy.dismiss()}))},async onRemoveMenu(){const e={menuID:this.selectedMenu.menuID},t=await this.$request.getRequest("COM21500241",e,!1);t.header.result&&(this.searchScreenID="",this.onGetScreenInfoList(),this.onGetMenuList(),c.Fy.dismiss(),this.clearForm(),this.$dialog.onOpen({dialogMode:"Success",content:this.$t("com215001sc00.linked_out_success"),callback:()=>c.Fy.dismiss()}))},clearForm(){this.selectedMenu.menuName="",this.selectedMenu.menuID="",this.searchScreenID="",this.selectedMenu.lastChangeTellerID="",this.selectedMenu.lastChangeTellerName="",this.selectedMenu.firstRegisterTellerID="",this.selectedMenu.firstRegisterTellerName="",this.selectedMenu.firstRegisterTime="",this.selectedMenu.firstRegisterDate="",this.selectedMenu.menuStatusCode="",this.selectedMenu.webPageURL=""},async approvalRequest(){""!=this.approvalType&&await this.$approval.getAuthorizationDetail().then((async e=>{let t=JSON.parse(e.body.requestContent);if(this.approvalRes=e.body,this.operationMode="my-request"==this.approvalType?"read":"my-approval"==this.approvalType?"approval":"normal","delete"==this.$util.checkServiceIdType(e.body.serviceID)){const e={menuID:t.menuID},s=await this.$request.getRequest("COM21500211",e,!1);this.selectedMenu={menuID:s.body.menuID,menuName:s.body.menuName,menuLevel:s.body.menuLevel,webPageURL:s.body.webPageURL,screenID:`${s.body.screenID}(${s.body.screenName})`,parentMenuID:s.body.parentMenuID,firstRegisterTellerName:s.body.firstRegisterTellerName,firstRegisterTellerID:s.body.firstRegisterTellerID?.replace(/\s/g,""),firstRegisterDate:s.body.linkDate,firstRegisterTime:s.body.lastChangeTime,lastChangeTellerID:s.body.lastChangeTellerID?.replace(/\s/g,""),lastChangeTime:s.body.lastChangeTime,lastChangeDate:s.body.lastChangeDate,linkDate:s.body.linkDate,menuStatusCode:this.menuStatusCodeValue(s.body.menuStatusCode,this.$codeConverter.convertValue("MenuStatusCode",s.body.menuStatusCode))},this.searchScreenID=this.selectedMenu.screenID;let n=this.flattenTree(this.menuTree);n.find((e=>{e.menuID==this.selectedMenu.menuID&&(e.state.selected=!0)})),setTimeout((()=>{let e=document.querySelector("#tree_active");if(e){const t=e.querySelector(".active");t&&t.scrollIntoView({behavior:"smooth",block:"center"})}}),10)}else{const e={menuID:t.menuID},s=await this.$request.getRequest("COM21500211",e,!1);this.selectedMenu={menuID:t.menuID,menuName:s.body.menuName,webPageURL:t.webPageURL,screenID:t.screenID,parentMenuID:s.body.parentMenuID,firstRegisterTellerName:s.body.firstRegisterTellerName,firstRegisterTellerID:s.body.firstRegisterTellerID?.replace(/\s/g,""),firstRegisterDate:s.body.linkDate,firstRegisterTime:s.body.lastChangeTime,lastChangeTellerID:s.body.lastChangeTellerID?.replace(/\s/g,""),lastChangeTime:s.body.lastChangeTime,lastChangeDate:s.body.lastChangeDate,linkDate:s.body.linkDate,menuStatusCode:this.menuStatusCodeValue(s.body.menuStatusCode,this.$codeConverter.convertValue("MenuStatusCode",s.body.menuStatusCode))},this.screenList.find((e=>{e.screenID==this.selectedMenu.screenID&&(this.searchScreenID=`${e.screenID} ${e.screenName}`)}));let n=this.flattenTree(this.menuTree);n.find((e=>{e.menuID==this.selectedMenu.menuID&&(e.state.selected=!0)})),setTimeout((()=>{let e=document.querySelector("#tree_active");if(e){const t=e.querySelector(".active");t&&t.scrollIntoView({behavior:"smooth",block:"center"})}}),10)}}))},diabledItemApprovalMode(){this.menuList=this.menuList.map((e=>(this.selectedMenu.menuID==e.menuID?e.state={indeterminate:!1,checked:!1,selected:!0,expanded:!1}:e.state={indeterminate:!1,checked:!1,selected:!1,expanded:!1},e))),this.transformAndExpandTreeData(this.menuList)}}}),n()}catch(m){n(m)}}))},26748:function(e,t,s){s.a(e,(async function(e,n){try{s.r(t);var i=s(18656),a=s(84504),l=(s(737),s(83744)),d=e([a]);a=(d.then?(await d)():d)[0];const c=(0,l.Z)(a.Z,[["render",i.s],["__scopeId","data-v-69fe6a08"]]);t["default"]=c,n()}catch(c){n(c)}}))},737:function(){},84504:function(e,t,s){s.a(e,(async function(e,n){try{s.d(t,{Z:function(){return i.Z}});var i=s(75467),a=e([i]);i=(a.then?(await a)():a)[0],n()}catch(l){n(l)}}))},18656:function(e,t,s){s.d(t,{s:function(){return pe}});var n=s(66252),i=s(3577),a=s(49963);const l=e=>((0,n.dD)("data-v-69fe6a08"),e=e(),(0,n.Cn)(),e),d={class:"contentWrap"},c={class:"title_name"},o={class:"cont"},r={class:"card_box tree_wrap"},u={class:"row gap menu_mgmt"},h={class:"col-6"},m={class:"flex_column"},_={class:"flex_ui"},p={class:"flex_cont"},g={key:0,class:"flex_ui"},b={class:"btn_option"},I={class:"add"},D={class:"col-6 menu_detail_wrap"},S={class:"flex_column"},f={class:"flex_ui"},M={class:"flex_cont menu_detail"},v={class:"cont"},w={class:"row"},y={class:"col"},k={class:"form01"},C=l((()=>(0,n._)("span",{class:"require"},"*",-1))),T={class:"inp_box"},R={class:"inp"},$={class:"row"},L={class:"col"},N={class:"form01"},x=l((()=>(0,n._)("span",{class:"require"},"*",-1))),V={class:"inp_box"},P={class:"inp"},O={class:"row"},A={class:"col"},q={class:"form01"},U={class:"inp"},z={key:0,class:"txt_error"},W={class:"row"},G={class:"col"},F={class:"form01"},Z={class:"inp_box"},E={class:"inp"},H={key:0,class:"row"},Y={class:"col"},j={class:"form01"},B=l((()=>(0,n._)("span",{class:"require"},"*",-1))),K={class:"inp_box"},Q={class:"inp"},J={key:1},X={class:"footer_btn row"},ee={class:"right_side"},te={class:"gridwrap no_grid_option"},se={class:"tableWrap"},ne={class:"table01 fixed"},ie=l((()=>(0,n._)("colgroup",null,[(0,n._)("col",{style:{width:"80px"}}),(0,n._)("col"),(0,n._)("col"),(0,n._)("col")],-1))),ae={class:"sticky_head"},le=l((()=>(0,n._)("th",null,[(0,n._)("span")],-1))),de={class:"tbody_section"},ce=["id","onClick"],oe={key:0,class:"no_data"},re={key:0,class:"flex_ui"},ue={class:"btn_option"},he={class:""},me={class:""},_e={class:"save"};function pe(e,t){const s=(0,n.up)("BreadCrumb"),l=(0,n.up)("Tree"),pe=(0,n.up)("ion-button"),ge=(0,n.up)("ion-input"),be=(0,n.up)("ion-radio"),Ie=(0,n.up)("ion-radio-group"),De=(0,n.up)("ion-label"),Se=(0,n.up)("ModifyCard"),fe=(0,n.up)("Pagination"),Me=(0,n.up)("ApprovalReason");return(0,n.wg)(),(0,n.iD)("div",d,[(0,n.Wm)(s,{items:e.breadcrumbs},null,8,["items"]),(0,n._)("h1",c,(0,i.zw)(e.$t("com215001sc00.ib_add_screen_or_link")),1),(0,n._)("div",o,[(0,n._)("div",r,[(0,n._)("div",u,[(0,n._)("div",h,[(0,n._)("div",m,[(0,n._)("div",_,[(0,n._)("h4",null,(0,i.zw)(e.$t("com215001sc00.menu_list")),1)]),(0,n._)("div",p,[(0,n.Wm)(l,{ref:"portal-menu-tree-ref1",id:"portal-menu-tree1",subIcon:["sub-tree-icon"],classIcon:["open-tree-folder","close-tree-folder"],"expanded-all":!0,icons:["fa-folder","fa-folder-open"],nodes:e.menuTree,isDisabledSearch:e.isAddScreen||"read"==e.operationMode||"approval"==e.operationMode,onOnSelected:e.onGetMenuInfoDetail},null,8,["nodes","isDisabledSearch","onOnSelected"])]),"normal"==e.operationMode?((0,n.wg)(),(0,n.iD)("div",g,[(0,n._)("div",b,[(0,n.Wm)(pe,{class:"btn01 btn_ico",disabled:e.selectedMenu.subText||!e.selectedMenu.nodes||e.isAddScreen||e.selectedMenu.nodes.length>0,onClick:e.onClickAddScreen},{default:(0,n.w5)((()=>[(0,n._)("span",I,(0,i.zw)(e.$t("common.add_screen")),1)])),_:1},8,["disabled","onClick"])])])):(0,n.kq)("",!0)])]),(0,n._)("div",D,[(0,n._)("div",S,[(0,n._)("div",f,[(0,n._)("h4",null,(0,i.zw)(e.$t("com215001sc00.add_screen_or_link")),1)]),(0,n._)("div",M,[(0,n._)("div",v,[(0,n._)("div",w,[(0,n._)("div",y,[(0,n._)("dl",k,[(0,n._)("dt",null,[(0,n.Uk)((0,i.zw)(e.$t("com215001sc00.menu_ID")),1),C]),(0,n._)("dd",null,[(0,n._)("div",T,[(0,n._)("div",R,[(0,n.Wm)(ge,{class:"line",disabled:"",placeholder:e.isAddScreen?e.$t("com215001sc00.menu_ID"):"",modelValue:e.selectedMenu.menuID,"onUpdate:modelValue":t[0]||(t[0]=t=>e.selectedMenu.menuID=t)},null,8,["placeholder","modelValue"])])])])])])]),(0,n._)("div",$,[(0,n._)("div",L,[(0,n._)("dl",N,[(0,n._)("dt",null,[(0,n.Uk)((0,i.zw)(e.$t("com215001sc00.menu_name")),1),x]),(0,n._)("dd",null,[(0,n._)("div",V,[(0,n._)("div",P,[(0,n.Wm)(ge,{class:"line",disabled:"",placeholder:e.isAddScreen?e.$t("com215001sc00.menu_name"):"",modelValue:e.selectedMenu.menuName,"onUpdate:modelValue":t[1]||(t[1]=t=>e.selectedMenu.menuName=t)},null,8,["placeholder","modelValue"])])])])])])]),(0,n._)("div",O,[(0,n._)("div",A,[(0,n._)("dl",q,[(0,n._)("dt",null,[(0,n.Wm)(Ie,{modelValue:e.selectedScreenOption,"onUpdate:modelValue":t[2]||(t[2]=t=>e.selectedScreenOption=t)},{default:(0,n.w5)((()=>[(0,n.Wm)(be,{value:"01",disabled:!e.isAddScreen},null,8,["disabled"])])),_:1},8,["modelValue"]),(0,n.Wm)(De,{class:"tit"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,i.zw)(e.$t("com215001sc00.web_url")),1)])),_:1})]),(0,n._)("dd",null,[(0,n._)("div",{class:(0,i.C_)(["inp_box",{inp_error:e.isInvalidInput&&e.isInvalidWebURL}])},[(0,n._)("div",U,[(0,n.Wm)(ge,{class:"line",modelValue:e.selectedMenu.webPageURL,"onUpdate:modelValue":t[3]||(t[3]=t=>e.selectedMenu.webPageURL=t),readonly:"01"!=e.selectedScreenOption||!e.isAddScreen,placeholder:e.isAddScreen?e.$t("com215001sc00.web_url_placeholder"):""},null,8,["modelValue","readonly","placeholder"])]),e.isInvalidInput&&"01"==e.selectedScreenOption?((0,n.wg)(),(0,n.iD)("p",z,(0,i.zw)(e.$t("error_text.invalid_field_Web_url")),1)):(0,n.kq)("",!0)],2)])])])]),(0,n._)("div",W,[(0,n._)("div",G,[(0,n._)("dl",F,[(0,n._)("dt",null,[(0,n.Wm)(Ie,{modelValue:e.selectedScreenOption,"onUpdate:modelValue":t[4]||(t[4]=t=>e.selectedScreenOption=t)},{default:(0,n.w5)((()=>[(0,n.Wm)(be,{value:"02",disabled:!e.isAddScreen},null,8,["disabled"])])),_:1},8,["modelValue"]),(0,n.Wm)(De,{class:"tit"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,i.zw)(e.$t("com215001sc00.screen_ID")),1)])),_:1})]),(0,n._)("dd",null,[(0,n._)("div",Z,[(0,n._)("div",E,[(0,n.Wm)(ge,{class:"line",readonly:"02"!=e.selectedScreenOption||!e.isAddScreen,placeholder:e.isAddScreen?e.$t("common.enter_screen_id_or_name"):"",modelValue:e.searchScreenID,"onUpdate:modelValue":t[5]||(t[5]=t=>e.searchScreenID=t),onKeyup:(0,a.D2)(e.onClickSearch,["enter"])},null,8,["readonly","placeholder","modelValue","onKeyup"])])])])])])]),e.isAddScreen?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",H,[(0,n._)("div",Y,[(0,n._)("dl",j,[(0,n._)("dt",null,[(0,n.Uk)((0,i.zw)(e.$t("com215001sc00.status")),1),B]),(0,n._)("dd",null,[(0,n._)("div",K,[(0,n._)("div",Q,[(0,n.Wm)(ge,{class:"line",disabled:"",modelValue:e.selectedMenu.menuStatusCode,"onUpdate:modelValue":t[6]||(t[6]=t=>e.selectedMenu.menuStatusCode=t)},null,8,["modelValue"])])])])])])]))]),e.isAddScreen&&"normal"==e.operationMode?(0,n.kq)("",!0):(0,n.wy)(((0,n.wg)(),(0,n.j4)(Se,{key:0,data:e.modifiedCardInfo},null,8,["data"])),[[a.F8,e.selectedMenu.menuName&&!e.isAddScreen]]),e.isAddScreen?((0,n.wg)(),(0,n.iD)("section",J,[(0,n._)("div",X,[(0,n._)("div",ee,[(0,n.Wm)(pe,{class:"btn01",onClick:t[7]||(t[7]=t=>e.onClickSearch()),disabled:"02"!==e.selectedScreenOption||e.isViewMode},{default:(0,n.w5)((()=>[(0,n._)("span",null,(0,i.zw)(e.$t("common.search")),1)])),_:1},8,["disabled"]),(0,n.Wm)(pe,{class:"btn_refresh",id:"reset",onClick:t[8]||(t[8]=t=>e.onClickResetSearch()),disabled:"02"!==e.selectedScreenOption||e.isViewMode},{default:(0,n.w5)((()=>[(0,n._)("span",null,(0,i.zw)(e.$t("common.reset")),1)])),_:1},8,["disabled"])])]),(0,n.Wm)(Ie,{modelValue:e.selectedScreen,"onUpdate:modelValue":t[9]||(t[9]=t=>e.selectedScreen=t)},{default:(0,n.w5)((()=>[(0,n._)("div",te,[(0,n._)("div",se,[(0,n._)("table",ne,[ie,(0,n._)("thead",ae,[(0,n._)("tr",null,[le,(0,n._)("th",null,[(0,n._)("span",null,(0,i.zw)(e.$t("com215001sc00.screen_id")),1)]),(0,n._)("th",null,[(0,n._)("span",null,(0,i.zw)(e.$t("com215001sc00.screen_name")),1)]),(0,n._)("th",null,[(0,n._)("span",null,(0,i.zw)(e.$t("com215001sc00.link")),1)])])]),(0,n._)("tbody",de,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.screenList,((t,s)=>((0,n.wg)(),(0,n.iD)("tr",{id:`row-${e.startingIndex+s}`,onClick:t=>e.$util.rowFocus(`row-${e.startingIndex+s}`)},[(0,n._)("td",null,["02"===e.selectedScreenOption||t.screenID==e.selectedMenu.screenID?((0,n.wg)(),(0,n.j4)(be,{key:0,value:t.screenID},null,8,["value"])):(0,n.kq)("",!0)]),(0,n._)("td",null,[(0,n._)("span",null,(0,i.zw)(t.screenID),1)]),(0,n._)("td",null,[(0,n._)("span",null,(0,i.zw)(t.screenName),1)]),(0,n._)("td",null,[(0,n._)("span",null,(0,i.zw)("Y"==t.linkYN?e.$t("com215001sc00.linked"):e.$t("com215001sc00.not_linked")),1)])],8,ce)))),256))])]),0===e.totalScreenItems?((0,n.wg)(),(0,n.iD)("div",oe,[(0,n._)("p",null,(0,i.zw)(e.$t("common.no_data")),1)])):(0,n.kq)("",!0)]),(0,n.Wm)(fe,{totalCount:e.totalScreenItems,resetPage:e.isReset,perPage:e.pageSize,onGetPageNumber:e.handlePagination,onGetStartingIndex:e.handleStartingIndex},null,8,["totalCount","resetPage","perPage","onGetPageNumber","onGetStartingIndex"])])])),_:1},8,["modelValue"])])):(0,n.kq)("",!0)]),"normal"==e.operationMode?((0,n.wg)(),(0,n.iD)("div",re,[(0,n._)("div",ue,[(0,n.Wm)(pe,{class:(0,i.C_)([{btn_active:!e.isAddScreen},"btn03"]),onClick:e.onClickCancel},{default:(0,n.w5)((()=>[(0,n._)("span",he,(0,i.zw)(e.$t("common.cancel")),1)])),_:1},8,["class","onClick"]),(0,n._)("div",null,[(0,n.Wm)(pe,{class:(0,i.C_)([{btn_active:!e.isAddScreen},"btn01"]),onClick:e.onClickSave},{default:(0,n.w5)((()=>[(0,n._)("span",me,(0,i.zw)(e.$t("common.linked_in")),1)])),_:1},8,["class","onClick"]),e.isAddScreen?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(pe,{key:0,disabled:!this.selectedMenu.nodes||e.selectedMenu.nodes.length>0||!e.selectedMenu.subText,class:"btn01 btn_ico",onClick:e.onClickRemove},{default:(0,n.w5)((()=>[(0,n._)("span",_e,(0,i.zw)(e.$t("com215001sc00.linked_out")),1)])),_:1},8,["disabled","onClick"]))])])])):(0,n.kq)("",!0)])])])])]),"normal"!==e.operationMode?((0,n.wg)(),(0,n.j4)(Me,{key:0,payload:e.approvalRes},null,8,["payload"])):(0,n.kq)("",!0)])}}}]);
//# sourceMappingURL=6748.c70aaeb8.js.map