"use strict";(self["webpackChunkbizMOB4Vue"]=self["webpackChunkbizMOB4Vue"]||[]).push([[6415],{89515:function(e,t,i){i.a(e,(async function(e,a){try{var l=i(44345),s=i(65836),d=i(66252),o=i(90987),r=i(42615),n=i(43493),c=i(90121),h=i(67201),u=i(15828),f=e([c]);c=(f.then?(await f)():f)[0];const p=new o.l;t["Z"]=(0,d.aZ)({name:"icm212001sc01",components:{baseTab:l.Z,basePan:s.Z,BreadCrumb:c.Z,SelectOption:h.Z,ModifyCard:u.Z},data(){const e=[{key:"En",name:"common.english"},{key:"Km",name:"common.khmer"},{key:"Ko",name:"common.korean"}],t=[{languageCode:"common.english",productName:"",productDesc:""},{languageCode:"common.khmer",productName:"",productDesc:""},{languageCode:"common.korean",productName:"",productDesc:""}],i={productCode:"",boardCategoryCode:"",contentList:[],attachFileInfoList:[],firstRegisterTime:"",lastChangeTellerID:"",lastChangeTime:"",displayYN:"",lastChangeDate:"",lastChangeBranchCode:"",lastChangeTellerName:"",firstRegisterTellerName:"",deleteBranchCode:"",deleteTellerName:"",deleteTellerID:"",firstRegisterDate:"",deleteDate:"",firstRegisterTellerID:"",firstRegisterBranchCode:"",deleteTime:"",statusCode:""},a=[],l={registerTellerId:"",registerTellerName:"",registerDate:"",registerTime:"",updatedTellerId:"",updatedTellerName:"",updatedDate:"",updatedTime:"",deleteTellerId:"",deleteTellerName:"",deleteDate:"",deleteTime:""},s={image:"",file:"",fileSize:"",imgSize:"",fileName:"",imageName:""};return{productCodeList:a,headersIcon:e,productDetail:i,isEdit:!0,uploadInput:"",modifyCard:l,fileInfo:s,isInValidInput:!1,productDetailsLangDefaultValue:t,getFile:null,getImage:null,isFileEmty:!1,isImageEmty:!1,operationMode:"normal",approvalRes:{}}},async created(){""===this.approvalType?(await this.requestProductList(),"register"===this.$route.query.type?this.isEdit=!1:await this.requestProductDetail()):(await this.requestProductList(),await this.$approval.getAuthorizationDetail().then((async e=>{let t=JSON.parse(e.body.requestContent);if(this.approvalRes=e.body,this.operationMode="my-request"==this.approvalType?"read":"my-approval"==this.approvalType?"approval":"normal","delete"==this.$util.checkServiceIdType(e.body.serviceID)){const e={productCode:t.productCode},i=await this.$request.getRequest("ICM21200112",e,!1);await this.assignValueToTab(this.convertCommonCode(i?.body.contentList)),this.assignValueToAttachInfoList(i?.body.attachFileInfoList),this.productDetail={deleteTellerID:i.body.deleteTellerID?i.body.deleteTellerID:"",deleteBranchCode:i.body.deleteBranchCode?i.body.deleteBranchCode:"",displayYN:i.body.displayYN,lastChangeTellerName:i.body.lastChangeTellerName,lastChangeDate:this.$datetime.formatStringToStringDate(i.body.lastChangeDate),productCode:i.body.productCode,firstRegisterTime:i.body.firstRegisterTime?this.$datetime.formatStringToTime(i.body.firstRegisterTime):"",lastChangeTime:i.body.lastChangeTime?this.$datetime.formatStringToTime(i.body.lastChangeTime):"",firstRegisterBranchCode:i.body.firstRegisterBranchCode?i.body.firstRegisterBranchCode:"",lastChangeTellerID:i.body.lastChangeTellerID?i.body.lastChangeTellerID:"",lastChangeBranchCode:i.body.lastChangeBranchCode?i.body.lastChangeBranchCode:"",attachFileInfoList:this.productDetail.attachFileInfoList,deleteDate:this.$datetime.formatStringToStringDate(i?.body.deleteDate),firstRegisterDate:this.$datetime.formatStringToStringDate(i.body.firstRegisterDate),firstRegisterTellerID:i.body.firstRegisterTellerID?i.body.firstRegisterTellerID:"",contentList:i.body.contentList,deleteTellerName:i.body.deleteTellerName,deleteTime:i.body.deleteTime?this.$datetime.formatStringToTime(i.body.deleteTime):"",firstRegisterTellerName:i.body.firstRegisterTellerName,boardCategoryCode:i.body.boardCategoryCode,statusCode:i.body.statusCode},await Promise.all([this.requestFileDetail(r.Gk.FILE),this.requestFileDetail(r.Gk.IMAGE)])}else await this.assignValueToTab(this.convertCommonCode(t.body.contentList)),this.assignValueToAttachInfoList(t.body.attachFileInfoList),this.productDetail={deleteTellerID:t.deleteTellerID?t.deleteTellerID:"",deleteBranchCode:t.deleteBranchCode?t.deleteBranchCode:"",displayYN:t.displayYN,lastChangeTellerName:t.lastChangeTellerName,lastChangeDate:this.$datetime.formatStringToStringDate(t.lastChangeDate),productCode:t.productCode,firstRegisterTime:t.firstRegisterTime?this.$datetime.formatStringToTime(t.firstRegisterTime):"",lastChangeTime:t.lastChangeTime?this.$datetime.formatStringToTime(t.lastChangeTime):"",firstRegisterBranchCode:t.firstRegisterBranchCode?t.firstRegisterBranchCode:"",lastChangeTellerID:t.lastChangeTellerID?t.lastChangeTellerID:"",lastChangeBranchCode:t.lastChangeBranchCode?t.lastChangeBranchCode:"",attachFileInfoList:this.productDetail.attachFileInfoList,deleteDate:this.$datetime.formatStringToStringDate(t.deleteDate),firstRegisterDate:this.$datetime.formatStringToStringDate(t.firstRegisterDate),firstRegisterTellerID:t.firstRegisterTellerID?t.firstRegisterTellerID:"",contentList:t.contentList,deleteTellerName:t.deleteTellerName,deleteTime:t.deleteTime?this.$datetime.formatStringToTime(t.deleteTime):"",firstRegisterTellerName:t.firstRegisterTellerName,boardCategoryCode:t.boardCategoryCode,statusCode:t.statusCode},await Promise.all([this.requestFileDetail(r.Gk.FILE),this.requestFileDetail(r.Gk.IMAGE)])})))},computed:{displayName(){return"register"===this.$route.query.type?this.$t("icm212001sc01.product_register"):"edit"!==this.$route.query.type||this.isEdit?"edit"===this.$route.query.type&&this.isEdit?this.$t("icm212001sc01.product_edit"):"":this.$t("icm212001sc01.product_edit")},displayYN(){return this.$store.state.CommonCodeModule.commonCode.YnType},approvalType(){return this.$route.query.approvalType?this.$route.query.approvalType.toString():""}},methods:{async requestProductDetail(){const e={productCode:String(this.$route.query.productCode)},t=await this.$request.getRequest("ICM21200112",e,!1);await this.assignValueToTab(this.convertCommonCode(t.body.contentList)),this.assignValueToAttachInfoList(t.body.attachFileInfoList),this.productDetail={deleteTellerID:t.body.deleteTellerID?t.body.deleteTellerID:"",deleteBranchCode:t.body.deleteBranchCode?t.body.deleteBranchCode:"",displayYN:t.body.displayYN,lastChangeTellerName:t.body.lastChangeTellerName,lastChangeDate:this.$datetime.formatStringToStringDate(t?.body.lastChangeDate),productCode:String(this.$route.query.productCode),firstRegisterTime:t.body.firstRegisterTime?this.$datetime.formatStringToTime(t.body.firstRegisterTime):"",lastChangeTime:t.body.lastChangeTime?this.$datetime.formatStringToTime(t.body.lastChangeTime):"",firstRegisterBranchCode:t.body.firstRegisterBranchCode?t.body.firstRegisterBranchCode:"",lastChangeTellerID:t.body.lastChangeTellerID?t.body.lastChangeTellerID:"",lastChangeBranchCode:t.body.lastChangeBranchCode?t.body.lastChangeBranchCode:"",attachFileInfoList:this.productDetail.attachFileInfoList,deleteDate:this.$datetime.formatStringToStringDate(t.body.deleteDate),firstRegisterDate:this.$datetime.formatStringToStringDate(t.body.firstRegisterDate),firstRegisterTellerID:t.body.firstRegisterTellerID?t.body.firstRegisterTellerID:"",contentList:t.body.contentList,deleteTellerName:t.body.deleteTellerName,deleteTime:t.body.deleteTime?this.$datetime.formatStringToTime(t.body.deleteTime):"",firstRegisterTellerName:t.body.firstRegisterTellerName,boardCategoryCode:t.body.boardCategoryCode,statusCode:t.body.statusCode},this.modifyCard={registerTellerId:String(this.productDetail.firstRegisterTellerID),registerTellerName:String(this.productDetail.firstRegisterTellerName),registerDate:String(this.productDetail.firstRegisterDate),registerTime:String(this.productDetail.firstRegisterTime),updatedTellerId:"09"===this.productDetail.statusCode?"":t?.body.lastChangeTellerID,updatedTellerName:"09"===this.productDetail.statusCode?"":t?.body.lastChangeTellerName,updatedDate:"09"===this.productDetail.statusCode?"":t?.body.lastChangeDate,updatedTime:"09"===this.productDetail.statusCode?"":t?.body.lastChangeTime,deleteTellerId:"09"===this.productDetail.statusCode?t?.body.lastChangeTellerID:"",deleteTellerName:"09"===this.productDetail.statusCode?t?.body.lastChangeTellerName:"",deleteDate:"09"===this.productDetail.statusCode?t?.body.lastChangeDate:"",deleteTime:"09"===this.productDetail.statusCode?t?.body.lastChangeTime:""},await Promise.all([this.requestFileDetail(r.Gk.FILE),this.requestFileDetail(r.Gk.IMAGE)])},async requestFileDetail(e){for(let t=0;t<this.productDetail.attachFileInfoList.length;t++)if(this.productDetail.attachFileInfoList[t].attachTypeCode==e){const i=await this.$file.getFileInfo(this.productDetail.attachFileInfoList[t].fileId);if(e==r.Gk.FILE)this.fileInfo.fileName=i?.data.body.originalFileName,this.fileInfo.fileSize=i?.data.body.fileSizeString;else{this.fileInfo.imageName=i?.data.body.originalFileName,this.fileInfo.imgSize=i?.data.body.fileSizeString;const e=await this.$file.previewImage(this.productDetail.attachFileInfoList[t].fileId);this.fileInfo.image=e}}},async requestProductList(){const e={searchTypeCode:"",searchValue:"",pageSize:1e3,pageNumber:1},t=await this.$request.getRequest("ICM21200211",e,!1);this.productCodeList=t.body.list,this.productDetail.boardCategoryCode=t.body.list.categoryCode},async handleRegister(){await this.handleFileRegister();const e={boardCategoryCode:this.productDetail.boardCategoryCode,displayYN:this.productDetail.displayYN,contentList:this.convertLangToCode(JSON.parse(JSON.stringify(this.productDetailsLangDefaultValue))),attachFileInfoList:this.productDetail.attachFileInfoList},t=await this.$request.getRequest("ICM21200121",e,!1);return t.header.result&&this.$dialog.onOpen({content:this.$t("message.register_success"),dialogMode:"Success",callback:()=>{n.Fy.dismiss()}}),t.header.result},async handleFileRegister(){if(null!==this.getFile&&null!==this.getImage){const e=await this.$file.uploadFile([this.getFile,this.getImage],"ICM");for(let t=0;t<e.data.body.fileList.length;t++){if("file1"==e.data.body.fileList[t].keyName){const i=await this.$file.getFileInfo(e.data.body.fileList[t].fileId);this.productDetail.attachFileInfoList.push({filePath:i.data.body.filePath,attachTypeCode:r.Gk.FILE,fileId:e.data.body.fileList[t].fileId})}if("file2"==e.data.body.fileList[t].keyName){const i=await this.$file.getFileInfo(e.data.body.fileList[t].fileId);this.productDetail.attachFileInfoList.push({filePath:i.data.body.filePath,attachTypeCode:r.Gk.IMAGE,fileId:e.data.body.fileList[t].fileId})}}}else if(null!==this.getFile&&null===this.getImage){const e=await this.$file.uploadFile([this.getFile],"ICM");for(let t=0;t<e.data.body.fileList.length;t++){const i=await this.$file.getFileInfo(e.data.body.fileList[t].fileId);this.productDetail.attachFileInfoList.push({filePath:i.data.body.filePath,attachTypeCode:r.Gk.FILE,fileId:e.data.body.fileList[t].fileId})}}else if(null===this.getFile&&null!==this.getImage){const e=await this.$file.uploadFile([this.getImage],"ICM");for(let t=0;t<e.data.body.fileList.length;t++){const i=await this.$file.getFileInfo(e.data.body.fileList[t].fileId);this.productDetail.attachFileInfoList.push({filePath:i.data.body.filePath,attachTypeCode:r.Gk.IMAGE,fileId:e.data.body.fileList[t].fileId})}}},async handleEdit(){await this.handleFileUpdate();const e={boardCategoryCode:this.productDetail.boardCategoryCode,displayYN:this.productDetail.displayYN,contentList:this.convertLangToCode(JSON.parse(JSON.stringify(this.productDetailsLangDefaultValue))),attachInfoList:this.productDetail.attachFileInfoList,productCode:this.productDetail.productCode},t=await this.$request.getRequest("ICM21200131",e,!1);return t.header.result&&this.$dialog.onOpen({content:this.$t("message.update_success"),dialogMode:"Success",callback:()=>{this.requestProductDetail(),n.Fy.dismiss()}}),t.header.result},async handleFileUpdate(){if(null!==this.getFile&&null!==this.getImage&&!this.isFileEmty&&!this.isImageEmty){this.productDetail.attachFileInfoList&&this.productDetail.attachFileInfoList.forEach((async e=>{await this.$file.updateFileStatus(e.fileId,r.Gk.INACTIVE)})),this.productDetail.attachFileInfoList=[];const e=await this.$file.uploadFile([this.getFile,this.getImage],"ICM");for(let t=0;t<e.data.body.fileList.length;t++){if("file1"===e.data.body.fileList[t].keyName){const i=await this.$file.getFileInfo(e.data.body.fileList[t].fileId);this.productDetail.attachFileInfoList.push({filePath:i.data.body.filePath,attachTypeCode:r.Gk.FILE,fileId:e.data.body.fileList[t].fileId})}if("file2"===e.data.body.fileList[t].keyName){const i=await this.$file.getFileInfo(e.data.body.fileList[t].fileId);this.productDetail.attachFileInfoList.push({filePath:i.data.body.filePath,attachTypeCode:r.Gk.IMAGE,fileId:e.data.body.fileList[t].fileId})}}}if(null===this.getFile&&this.isFileEmty)for(let e=0;e<this.productDetail.attachFileInfoList.length;e++)if(this.productDetail.attachFileInfoList[e].attachTypeCode===r.Gk.FILE){await this.$file.updateFileStatus(this.productDetail.attachFileInfoList[e].fileId,r.Gk.INACTIVE);const t=this.productDetail.attachFileInfoList.indexOf(this.productDetail.attachFileInfoList[e]);this.productDetail.attachFileInfoList.splice(t,1)}if(null===this.getImage&&this.isImageEmty)for(let e=0;e<this.productDetail.attachFileInfoList.length;e++)if(this.productDetail.attachFileInfoList[e].attachTypeCode===r.Gk.IMAGE){await this.$file.updateFileStatus(this.productDetail.attachFileInfoList[e].fileId,r.Gk.INACTIVE);const t=this.productDetail.attachFileInfoList.indexOf(this.productDetail.attachFileInfoList[e]);this.productDetail.attachFileInfoList.splice(t,1)}if(null!==this.getFile&&!this.isFileEmty)if(0===this.productDetail.attachFileInfoList.length){const e=await this.$file.uploadFile([this.getFile],"ICM");for(let t=0;t<e.data.body.fileList.length;t++){const i=await this.$file.getFileInfo(e.data.body.fileList[t].fileId);this.productDetail.attachFileInfoList.push({filePath:i.data.body.filePath,attachTypeCode:r.Gk.FILE,fileId:e.data.body.fileList[t].fileId})}}else if(this.productDetail.attachFileInfoList.length>0)if(this.isFileAlreadyExisted(r.Gk.FILE)){const e=await this.$file.uploadFile([this.getFile],"ICM");for(let t=0;t<this.productDetail.attachFileInfoList.length;t++)if(this.productDetail.attachFileInfoList[t].attachTypeCode===r.Gk.FILE){await this.$file.updateFileStatus(this.productDetail.attachFileInfoList[t].fileId,r.Gk.INACTIVE);for(let i=0;i<e.data.body.fileList.length;i++)await this.$file.getFileInfo(e.data.body.fileList[i].fileId).then((a=>Object.assign(this.productDetail.attachFileInfoList[t],{fileId:e.data.body.fileList[i].fileId,attachTypeCode:r.Gk.FILE,filePath:a.data.body.filePath})))}}else{const e=await this.$file.uploadFile([this.getFile],"ICM");for(let t=0;t<e.data.body.fileList.length;t++){const i=await this.$file.getFileInfo(e.data.body.fileList[t].fileId);this.productDetail.attachFileInfoList.push({filePath:i.data.body.filePath,attachTypeCode:r.Gk.FILE,fileId:e.data.body.fileList[t].fileId})}}if(null!==this.getImage&&!this.isImageEmty)if(0===this.productDetail.attachFileInfoList.length){const e=await this.$file.uploadFile([this.getImage],"ICM");for(let t=0;t<e.data.body.fileList.length;t++){const i=await this.$file.getFileInfo(e.data.body.fileList[t].fileId);this.productDetail.attachFileInfoList.push({filePath:i.data.body.filePath,attachTypeCode:r.Gk.IMAGE,fileId:e.data.body.fileList[t].fileId})}}else if(this.productDetail.attachFileInfoList.length>0)if(this.isFileAlreadyExisted(r.Gk.IMAGE)){const e=await this.$file.uploadFile([this.getImage],"ICM");for(let t=0;t<this.productDetail.attachFileInfoList.length;t++)if(this.productDetail.attachFileInfoList[t].attachTypeCode===r.Gk.IMAGE){await this.$file.updateFileStatus(this.productDetail.attachFileInfoList[t].fileId,r.Gk.INACTIVE);for(let i=0;i<e.data.body.fileList.length;i++)await this.$file.getFileInfo(e.data.body.fileList[i].fileId).then((a=>Object.assign(this.productDetail.attachFileInfoList[t],{fileId:e.data.body.fileList[i].fileId,attachTypeCode:r.Gk.IMAGE,filePath:a.data.body.filePath})))}}else{const e=await this.$file.uploadFile([this.getImage],"ICM");for(let t=0;t<e.data.body.fileList.length;t++){const i=await this.$file.getFileInfo(e.data.body.fileList[t].fileId);this.productDetail.attachFileInfoList.push({filePath:i.data.body.filePath,attachTypeCode:r.Gk.IMAGE,fileId:e.data.body.fileList[t].fileId})}}},async handleDelete(){const e={productCode:this.$route.query.productCode},t=await this.$request.getRequest("ICM21200141",e,!1);return t.header.result&&this.$dialog.onOpen({content:this.$t("message.delete_success"),dialogMode:"Success",callback:()=>{n.Fy.dismiss()}}),t.header.result},convertCommonCode(e){const t=e.map((e=>(e.languageCode=e.languageCode?this.$codeConverter.convertValue("LanguageCodeTranslate",e.languageCode):"",e)));return t},convertLangToCode(e){const t=e.map((e=>(e.languageCode=this.$codeConverter.convertValue("LanguageCodeTranslate",e.languageCode,"value"),e)));return t},handleUploadImage(e){this.isImageEmty=!1;const t=/(\.png)$/i,i=e.target.files,a=i[0];if(t.exec(a.name))if(a.size>2097152)this.$dialog.onOpen({content:this.$t("message.file_size_must_not_exceed_2MB"),dialogMode:"Warning",callback:()=>{n.Fy.dismiss()}});else{this.getImage=a;const e=p.countFileSize(a.size);this.fileInfo.imgSize=e;const t=new FileReader;t.readAsDataURL(a),this.fileInfo.imageName=a.name,t.onload=()=>{this.fileInfo.image=String(t.result)}}else this.$dialog.onOpen({content:this.$t("message.only_png_file_can_be_inserted"),dialogMode:"Warning",callback:()=>{n.Fy.dismiss()}});const l=document.getElementById("btn02 btn_upload");l.value=""},removeFile(e){switch(e){case r.Gk.FILE:this.isFileEmty=!0,this.getFile=null,this.fileInfo.fileSize=this.fileInfo.fileName="";break;case r.Gk.IMAGE:this.isImageEmty=!0,this.getImage=null,this.fileInfo.imageName=this.fileInfo.imgSize="";break}},handleUploadFile(e){this.isFileEmty=!1;const t=e.target.files,i=t[0];if(i.size>2097152)this.$dialog.onOpen({content:this.$t("message.file_size_must_not_exceed_2MB"),dialogMode:"Warning",callback:()=>{n.Fy.dismiss()}});else{this.getFile=i;const e=p.countFileSize(i.size);this.fileInfo.fileSize=e;const t=new FileReader;t.readAsDataURL(i),this.fileInfo.fileName=i.name}const a=document.getElementById("actual-btn");a.value=""},isFileAlreadyExisted(e){const t=this.productDetail.attachFileInfoList.some((t=>Object.values(t).includes(e)));return t},async assignValueToTab(e){for(let t=0;t<e.length;t++)this.productDetailsLangDefaultValue.map((i=>{i.languageCode===e[t].languageCode&&(i.productName=e[t].productName,i.productDesc=e[t].productDesc)}))},assignValueToAttachInfoList(e){this.productDetail.attachFileInfoList=e.map((e=>({attachTypeCode:e.attachTypeCode,fileId:e.fileId,filePath:e.filePath})))},handleClickAction(e){switch(e){case"delete":"edit"==this.$route.query.type?this.$dialog.onOpen({content:this.$t("message.are_you_sure_you_want_to_delete"),dialogMode:"Question",callback:()=>{this.handleDelete(),this.$router.push("/ICM212001SC00"),n.Fy.dismiss()}}):this.$router.push("/ICM212001SC00");break;case"cancel":this.$dialog.onOpen({content:`${this.$t("message.cancel_without_saving_changes")}`,dialogMode:"Question",callback:()=>{"edit"==this.$route.query.type?(this.fileInfo.fileName=this.fileInfo.fileSize=this.fileInfo.imageName=this.fileInfo.imgSize="",this.isEdit=!0,this.requestProductDetail()):this.$router.push("/ICM212001SC00")}});break;case"save":var t=this.productDetailsLangDefaultValue.find((e=>"common.english"===e.languageCode));t.productName&&t.productDesc?this.$dialog.onOpen({content:this.$t("message.would_you_like_to_save"),dialogMode:"Question",callback:()=>{"edit"==this.$route.query.type?this.handleEdit().then((e=>{e&&(this.requestProductDetail(),n.Fy.dismiss(),this.isEdit=!0)})):this.handleRegister().then((e=>{e&&(n.Fy.dismiss(),this.$router.push("/ICM212001SC00"))}))}}):(this.isInValidInput=!0,this.$util.scrollToElement("inp_error"),this.$util.scrollToElement("invalidInput"));break;case"edit":this.isEdit=!1;break;default:this.$router.push("/ICM212001SC00");break}}}}),a()}catch(p){a(p)}}))},90987:function(e,t,i){i.d(t,{l:function(){return a}});class a{countFileSize(e){const t=["B","kB","MB","GB","TB"],i=Math.floor(Math.log(e)/Math.log(1024));return`${(e/Math.pow(1024,i)).toFixed(2)} ${t[i]}`}}},15828:function(e,t,i){i.d(t,{Z:function(){return m}});var a=i(66252),l=i(3577);const s={key:0,class:"row gap detail_info"},d={key:0,class:"col"},o={class:"sub"},r={key:1,class:"col"},n={class:"sub"},c={key:2,class:"col"},h={class:"sub"};function u(e,t){return e.isShowRegister||e.isShowUpdate||e.isShowDelete?((0,a.wg)(),(0,a.iD)("div",s,[e.isShowRegister?((0,a.wg)(),(0,a.iD)("div",d,[(0,a._)("dl",null,[(0,a._)("dt",null,(0,l.zw)(e.$t("common.created_date")),1),(0,a._)("dd",null,[(0,a._)("strong",null,(0,l.zw)(e.createdEmployee),1),(0,a.Uk)(),(0,a._)("span",o,(0,l.zw)(e.createdDate),1)])])])):(0,a.kq)("",!0),e.isShowUpdate?((0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("dl",null,[(0,a._)("dt",null,(0,l.zw)(e.$t("common.updated_date")),1),(0,a._)("dd",null,[(0,a._)("strong",null,(0,l.zw)(e.updatedEmployee),1),(0,a._)("span",n,(0,l.zw)(e.updatedDate),1)])])])):(0,a.kq)("",!0),e.isShowDelete?((0,a.wg)(),(0,a.iD)("div",c,[(0,a._)("dl",null,[(0,a._)("dt",null,(0,l.zw)(e.$t("common.deleted_date")),1),(0,a._)("dd",null,[(0,a._)("strong",null,(0,l.zw)(e.deletedEmployee),1),(0,a._)("span",h,(0,l.zw)(e.deletedDate),1)])])])):(0,a.kq)("",!0)])):(0,a.kq)("",!0)}var f=(0,a.aZ)({name:"modify-card",props:{data:{type:Object,required:!0}},computed:{createdEmployee(){return`${this.data.registerTellerName||""} ${this.data.registerTellerId?.trim()?`(${this.data.registerTellerId})`:""}`},createdDate(){return`${this.$datetime.formatStringToTime(this.data.registerTime?this.data.registerTime:"")} ${this.$datetime.formatStringToStringDate(this.data.registerDate?this.data.registerDate:"")}`},updatedEmployee(){return`${this.data.updatedTellerName||""} ${this.data.updatedTellerId?.trim()?`(${this.data.updatedTellerId})`:""}`},updatedDate(){return`${this.$datetime.formatStringToTime(this.data.updatedTime?this.data.updatedTime:"")} ${this.$datetime.formatStringToStringDate(this.data.updatedDate?this.data.updatedDate:"")}`},deletedEmployee(){return`${this.data.deleteTellerName||""} ${this.data.deleteTellerId?.trim()?`(${this.data.deleteTellerId})`:""}`},deletedDate(){return`${this.$datetime.formatStringToTime(this.data.deleteTime?this.data.deleteTime:"")} ${this.$datetime.formatStringToStringDate(this.data.deleteDate?this.data.deleteDate:"")}`},isShowRegister(){return!!(this.data.registerDate?.trim()||this.data.registerTime?.trim()||this.data.registerTellerId?.trim()||this.data.registerTellerName?.trim())},isShowUpdate(){return!!(this.data.updatedDate?.trim()||this.data.updatedTime?.trim()||this.data.updatedTellerId?.trim()||this.data.updatedTellerName?.trim())},isShowDelete(){return!!(this.data.deleteDate?.trim()||this.data.deleteTime?.trim()||this.data.deleteTellerId?.trim()||this.data.deleteTellerName?.trim())}}}),p=i(83744);const g=(0,p.Z)(f,[["render",u]]);var m=g},44345:function(e,t,i){i.d(t,{Z:function(){return h}});var a=i(66252),l=i(3577);const s={key:0,id:"id"},d={class:"cont_tab"};function o(e,t){const i=(0,a.up)("ion-label"),o=(0,a.up)("ion-segment-button"),r=(0,a.up)("ion-segment");return e.header?((0,a.wg)(),(0,a.iD)("section",s,[(0,a.Wm)(r,{scrollable:!0,class:"tab01",value:e.index},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.header,((t,s)=>((0,a.wg)(),(0,a.j4)(o,{class:(0,l.C_)([this.selectedTitle==t.name?"segment-button-checked":""]),id:s,value:s,disabled:!e.beforeLeave&&this.selectedTitle!==t.name,onClick:i=>e.pushTitle(t.name,s)},{default:(0,a.w5)((()=>[(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.$t(`${t.name}`)),1)])),_:2},1024)])),_:2},1032,["class","id","value","disabled","onClick"])))),256))])),_:1},8,["value"]),(0,a._)("div",d,[(0,a.WI)(e.$slots,"default",{},void 0,!0)])])):(0,a.kq)("",!0)}var r=(0,a.aZ)({data(){return{selectedTitle:"",defaultIndex:0}},provide(){return{selectedTitle:(0,a.Fl)((()=>this.selectedTitle))}},props:{header:{type:[],default:[]},defaultActive:{type:String},beforeLeave:{type:Boolean,default:!0}},watch:{selectedTitle(e,t){this.$emit("get-tab-value",e,t)}},created(){if(this.defaultActive)this.selectedTitle=this.defaultActive;else for(let e=0;e<Object.values(this.header).length;e++){const t=this.header[e];if(!t.disable){this.selectedTitle=t.name,this.defaultIndex=e;break}console.log("nothing")}},methods:{pushTitle(e){this.beforeLeave?this.selectedTitle=e:this.$emit("before-leave",e)}}}),n=i(83744);const c=(0,n.Z)(r,[["render",o],["__scopeId","data-v-e4fa632c"]]);var h=c},65836:function(e,t,i){i.d(t,{Z:function(){return c}});var a=i(66252),l=i(49963);const s=["id"];function d(e,t,i,d,o,r){return(0,a.wy)(((0,a.wg)(),(0,a.iD)("section",{id:e.title},[(0,a.WI)(e.$slots,"default")],8,s)),[[l.F8,e.title==e.selectedTitle]])}var o=(0,a.aZ)({props:{title:String},data(){const e=(0,a.f3)("selectedTitle");return{selectedTitle:e}}}),r=i(83744);const n=(0,r.Z)(o,[["render",d]]);var c=n},21438:function(e,t,i){i.a(e,(async function(e,a){try{i.r(t);var l=i(1919),s=i(22109),d=(i(51639),i(83744)),o=e([s]);s=(o.then?(await o)():o)[0];const r=(0,d.Z)(s.Z,[["render",l.s],["__scopeId","data-v-8b6bd594"]]);t["default"]=r,a()}catch(r){a(r)}}))},51639:function(){},22109:function(e,t,i){i.a(e,(async function(e,a){try{i.d(t,{Z:function(){return l.Z}});var l=i(89515),s=e([l]);l=(s.then?(await s)():s)[0],a()}catch(d){a(d)}}))},1919:function(e,t,i){i.d(t,{s:function(){return ne}});var a=i(66252),l=i(3577),s=i(49963);const d=e=>((0,a.dD)("data-v-8b6bd594"),e=e(),(0,a.Cn)(),e),o={class:"contentWrap"},r={class:"title_name"},n={class:"cont"},c={class:"card_box"},h={class:"row gap"},u={class:"col-6"},f={class:"form01"},p={class:"inp_box"},g={class:"inp"},m={class:"col-6"},y={class:"form01"},I=d((()=>(0,a._)("span",{class:"require"},"*",-1))),C={class:"row gap"},b={class:"col-6"},T={class:"form01"},D=d((()=>(0,a._)("span",{class:"require"},"*",-1))),_={key:0,class:"txt_error"},w={class:"col-6"},$={class:"form01"},F={class:"row gap10"},L={class:"col"},v={class:"upload_box ico"},k=d((()=>(0,a._)("span",{class:"extention"},null,-1))),N={class:"col auto"},S=["v-model","disabled"],E={class:"row"},M={class:"col"},q={class:"form01"},R={class:"upload_image"},z={class:"row"},V=["src"],G={class:"col"},B={class:"intro"},A={class:"filename"},P={class:"description"},x={class:"col auto"},U=["v-model","disabled"],O={class:"card_box"},j={class:"tab_cont"},Y={class:"row"},Z={class:"col"},W={class:"form01"},K={class:"require"},J={class:"inp_box"},H={class:"inp"},Q={key:0,class:"txt_error"},X={class:"row"},ee={class:"col"},te={class:"form01"},ie={class:"require"},ae={key:0,class:"txt_error"},le={key:0,class:"footer_btn"},se={class:"left_side"},de={class:"right_side"},oe={class:"edit"},re={class:"save"};function ne(e,t){const i=(0,a.up)("BreadCrumb"),d=(0,a.up)("ion-input"),ne=(0,a.up)("SelectOption"),ce=(0,a.up)("ion-select-option"),he=(0,a.up)("ion-select"),ue=(0,a.up)("ion-label"),fe=(0,a.up)("ion-button"),pe=(0,a.up)("ion-spinner"),ge=(0,a.up)("ion-avatar"),me=(0,a.up)("ion-textarea"),ye=(0,a.up)("basePan"),Ie=(0,a.up)("baseTab"),Ce=(0,a.up)("ModifyCard"),be=(0,a.up)("ApprovalReason");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a.Wm)(i,{staticScreenName:"register"==e.$route.query.type?e.$t("icm212001sc01.product_register"):e.$t("icm212001sc01.product_edit")},null,8,["staticScreenName"]),(0,a._)("h1",r,(0,l.zw)(e.displayName),1),(0,a._)("div",n,[(0,a._)("div",c,[(0,a._)("div",h,[(0,a._)("div",u,[(0,a._)("dl",f,[(0,a._)("dt",null,(0,l.zw)(e.$t("common.no")),1),(0,a._)("dd",null,[(0,a._)("div",p,[(0,a._)("div",g,[(0,a.Wm)(d,{class:"line",placeholder:e.$t("message.this_is_being_created_automatically_after_saving"),disabled:"",modelValue:e.productDetail.productCode,"onUpdate:modelValue":t[0]||(t[0]=t=>e.productDetail.productCode=t)},null,8,["placeholder","modelValue"])])])])])]),(0,a._)("div",m,[(0,a._)("dl",y,[(0,a._)("dt",null,[(0,a.Uk)((0,l.zw)(e.$t("common.display")),1),I]),(0,a._)("dd",null,[(0,a.Wm)(ne,{data:e.displayYN,modelValue:e.productDetail.displayYN,"onUpdate:modelValue":t[1]||(t[1]=t=>e.productDetail.displayYN=t),value:"Y",disabled:e.isEdit||"read"==e.operationMode||"approval"==e.operationMode,showKey:!1,class:"line"},null,8,["data","modelValue","disabled"])])])])]),(0,a._)("div",C,[(0,a._)("div",b,[(0,a._)("dl",T,[(0,a._)("dt",null,[(0,a.Uk)((0,l.zw)(e.$t("icm212001sc01.product_category_code")),1),D]),(0,a._)("dd",null,[(0,a.Wm)(he,{interface:"popover",interfaceOptions:{size:"cover"},class:(0,l.C_)(["line",{invalidInput:e.isInValidInput&&!e.productDetail.boardCategoryCode}]),placeholder:e.$t("icm212001sc01.placeholder.select"),disabled:e.isEdit||"read"==e.operationMode||"approval"==e.operationMode,modelValue:e.productDetail.boardCategoryCode,"onUpdate:modelValue":t[2]||(t[2]=t=>e.productDetail.boardCategoryCode=t)},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.productCodeList,(e=>((0,a.wg)(),(0,a.j4)(ce,{value:e.categoryCode},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.categoryCode)+" : "+(0,l.zw)(e.categoryName),1)])),_:2},1032,["value"])))),256))])),_:1},8,["placeholder","disabled","modelValue","class"]),e.isInValidInput&&!e.productDetail.boardCategoryCode?((0,a.wg)(),(0,a.iD)("p",_,(0,l.zw)(e.$t("error_text.field_empty")),1)):(0,a.kq)("",!0)])])]),(0,a._)("div",w,[(0,a._)("dl",$,[(0,a._)("dt",null,(0,l.zw)(e.$t("icm212001sc01.attach_file")),1),(0,a._)("dd",null,[(0,a._)("div",F,[(0,a._)("div",L,[(0,a._)("div",v,[e.fileInfo.fileName?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(ue,{key:0,class:"placeholder file hide"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.$t("icm201002sc01.placeholder.please_upload_the_file")),1)])),_:1})),(0,a.Wm)(ue,{class:"filename"},{default:(0,a.w5)((()=>[(0,a._)("strong",null,(0,l.zw)(e.fileInfo.fileName),1),k])),_:1}),e.fileInfo.fileName?((0,a.wg)(),(0,a.j4)(fe,{key:1,class:"btn_remove",disabled:e.isEdit||"read"==e.operationMode||"approval"==e.operationMode,onClick:t[3]||(t[3]=t=>e.removeFile("01"))},{default:(0,a.w5)((()=>[(0,a.Uk)("remove")])),_:1},8,["disabled"])):(0,a.kq)("",!0)])]),(0,a._)("div",N,[(0,a._)("input",{class:"btn02",id:"actual-btn",ref:"uploadInput",type:"file","v-model":e.fileInfo.file,accept:".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf",onChange:t[4]||(t[4]=t=>e.handleUploadFile(t)),disabled:e.isEdit||"read"==e.operationMode||"approval"==e.operationMode},null,40,S),(0,a.Wm)(fe,{disabled:e.isEdit||"read"==e.operationMode||"approval"==e.operationMode,class:"btn02"},{default:(0,a.w5)((()=>[(0,a._)("span",null,(0,l.zw)(e.$t("common.upload")),1)])),_:1},8,["disabled"])])])])])])]),(0,a._)("div",E,[(0,a._)("div",M,[(0,a._)("dl",q,[(0,a._)("dt",null,(0,l.zw)(e.$t("icm212001sc01.image_file")),1),(0,a._)("div",R,[(0,a._)("div",z,[e.fileInfo.imageName?((0,a.wg)(),(0,a.j4)(ge,{key:0},{default:(0,a.w5)((()=>[e.fileInfo.image?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(pe,{key:0,name:"crescent"})),(0,a._)("img",{src:e.fileInfo.image},null,8,V)])),_:1})):(0,a.kq)("",!0),(0,a._)("div",G,[(0,a._)("div",B,[(0,a._)("div",A,[(0,a._)("span",null,(0,l.zw)(e.fileInfo.imageName),1),e.fileInfo.imageName?((0,a.wg)(),(0,a.j4)(fe,{key:0,class:"btn_remove",disabled:e.isEdit||"read"==e.operationMode||"approval"==e.operationMode,onClick:t[5]||(t[5]=t=>e.removeFile("02"))},{default:(0,a.w5)((()=>[(0,a.Uk)("remove")])),_:1},8,["disabled"])):(0,a.kq)("",!0)]),(0,a._)("div",P,[(0,a._)("p",null,(0,l.zw)(e.$t("icm201002sc01.only_png")),1),(0,a._)("p",null,(0,l.zw)(e.$t("icm201002sc01.image_fixed")),1)])])]),(0,a._)("div",x,[(0,a._)("input",{id:"btn02 btn_upload",ref:"uploadInput",type:"file","v-model":e.fileInfo.image,accept:"image/png",onChange:t[6]||(t[6]=t=>e.handleUploadImage(t)),disabled:e.isEdit},null,40,U),(0,a.Wm)(fe,{disabled:e.isEdit||"read"==e.operationMode||"approval"==e.operationMode,class:"btn02 btn_upload"},{default:(0,a.w5)((()=>[(0,a._)("span",null,(0,l.zw)(e.$t("common.upload")),1)])),_:1},8,["disabled"])])])])])])])]),(0,a._)("div",O,[(0,a.Wm)(Ie,{defaultActive:"common.english",header:e.headersIcon},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.productDetailsLangDefaultValue,((i,o)=>((0,a.wg)(),(0,a.j4)(ye,{title:i.languageCode,key:i.languageCode},{default:(0,a.w5)((()=>[(0,a._)("div",j,[(0,a._)("div",Y,[(0,a._)("div",Z,[(0,a._)("dl",W,[(0,a._)("dt",null,[(0,a.Uk)((0,l.zw)(e.$t("icm212001sc01.title")),1),(0,a.wy)((0,a._)("span",K,"*",512),[[s.F8,"common.english"==i.languageCode]])]),(0,a._)("dd",null,[(0,a._)("div",J,[(0,a._)("div",H,[(0,a.Wm)(d,{class:(0,l.C_)(["line",{invalidInput:e.isInValidInput&&!i.productName&&"common.english"==i.languageCode}]),onKeydown:t[7]||(t[7]=(0,s.D2)((0,s.iM)((()=>{}),["prevent"]),["enter"])),type:"text",placeholder:e.$t("icm212001sc01.placeholder.enter_text"),readonly:e.isEdit||"read"==e.operationMode||"approval"==e.operationMode,modelValue:i.productName,"onUpdate:modelValue":e=>i.productName=e},null,8,["placeholder","readonly","modelValue","onUpdate:modelValue","class"])]),e.isInValidInput&&""===i.productName&&"common.english"==i.languageCode?((0,a.wg)(),(0,a.iD)("p",Q,(0,l.zw)(e.$t("error_text.field_empty")),1)):(0,a.kq)("",!0)])])])])]),(0,a._)("div",X,[(0,a._)("div",ee,[(0,a._)("dl",te,[(0,a._)("dt",null,[(0,a.Uk)((0,l.zw)(e.$t("icm212001sc01.content")),1),(0,a.wy)((0,a._)("span",ie,"*",512),[[s.F8,"common.english"==i.languageCode]])]),(0,a._)("dd",null,[(0,a.Wm)(me,{class:(0,l.C_)(["line",{invalidInput:e.isInValidInput&&!i.productDesc&&"common.english"==i.languageCode}]),name:"content",id:"content",onKeydown:t[8]||(t[8]=(0,s.D2)((0,s.iM)((()=>{}),["prevent"]),["enter"])),cols:"30",rows:"10",type:"text",placeholder:e.$t("icm212001sc01.placeholder.enter_text"),readonly:e.isEdit||"read"==e.operationMode||"approval"==e.operationMode,modelValue:i.productDesc,"onUpdate:modelValue":e=>i.productDesc=e},null,8,["placeholder","readonly","modelValue","onUpdate:modelValue","class"])]),e.isInValidInput&&""===i.productDesc&&"common.english"==i.languageCode?((0,a.wg)(),(0,a.iD)("p",ae,(0,l.zw)(e.$t("error_text.field_empty")),1)):(0,a.kq)("",!0)])])])])])),_:2},1032,["title"])))),128))])),_:1},8,["header"]),"edit"===e.$route.query.type?((0,a.wg)(),(0,a.j4)(Ce,{key:0,data:e.modifyCard},null,8,["data"])):(0,a.kq)("",!0)]),"normal"==e.operationMode?((0,a.wg)(),(0,a.iD)("div",le,[(0,a._)("div",se,["edit"==e.$route.query.type&&e.isEdit?((0,a.wg)(),(0,a.j4)(fe,{key:0,class:"btn03",disabled:e.isEdit&&"09"===e.productDetail.statusCode,onClick:t[9]||(t[9]=t=>e.handleClickAction("delete"))},{default:(0,a.w5)((()=>[(0,a._)("span",null,(0,l.zw)(e.$t("common.delete")),1)])),_:1},8,["disabled"])):(0,a.kq)("",!0),e.isEdit?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(fe,{key:1,class:"btn03",onClick:t[10]||(t[10]=t=>e.handleClickAction("cancel"))},{default:(0,a.w5)((()=>[(0,a._)("span",null,(0,l.zw)(e.$t("common.cancel")),1)])),_:1})),"edit"==e.$route.query.type&&e.isEdit?((0,a.wg)(),(0,a.j4)(fe,{key:2,class:"btn02",onClick:t[11]||(t[11]=t=>e.handleClickAction("list"))},{default:(0,a.w5)((()=>[(0,a._)("span",null,(0,l.zw)(e.$t("common.list")),1)])),_:1})):(0,a.kq)("",!0)]),(0,a._)("div",de,["edit"==e.$route.query.type&&e.isEdit?((0,a.wg)(),(0,a.j4)(fe,{key:0,class:"btn02 btn_ico",disabled:e.isEdit&&"09"===e.productDetail.statusCode,onClick:t[12]||(t[12]=t=>e.handleClickAction("edit"))},{default:(0,a.w5)((()=>[(0,a._)("span",oe,(0,l.zw)(e.$t("common.edit")),1)])),_:1},8,["disabled"])):((0,a.wg)(),(0,a.j4)(fe,{key:1,class:"btn01 btn_ico",onClick:t[13]||(t[13]=t=>e.handleClickAction("save"))},{default:(0,a.w5)((()=>[(0,a._)("span",re,(0,l.zw)(e.$t("common.save")),1)])),_:1}))])])):(0,a.kq)("",!0),"normal"!==e.operationMode?((0,a.wg)(),(0,a.j4)(be,{key:1,payload:e.approvalRes},null,8,["payload"])):(0,a.kq)("",!0)])])}}}]);
//# sourceMappingURL=6415.233f500a.js.map