"use strict";(self["webpackChunkbizMOB4Vue"]=self["webpackChunkbizMOB4Vue"]||[]).push([[6325],{21638:function(t,e,a){a.d(e,{Z:function(){return m}});var i=a(66252),n=a(3577);const s=t=>((0,i.dD)("data-v-3886d7e2"),t=t(),(0,i.Cn)(),t),r={class:"grid_footer"},o={key:0,class:"grid_option"},d={class:"list_count"},u=s((()=>(0,i._)("dd",null,[(0,i._)("span",null," item(s)")],-1))),g={key:1,class:"paginaton"};function h(t,e){const a=(0,i.up)("ion-button");return(0,i.wg)(),(0,i.iD)("div",r,[t.showTotal?((0,i.wg)(),(0,i.iD)("div",o,[(0,i._)("div",d,[(0,i._)("dl",null,[(0,i._)("dt",null,[(0,i._)("strong",null,(0,n.zw)(t.$util.addComma(t.totalCount,3)),1)]),u])])])):(0,i.kq)("",!0),t.perPage>0&&t.totalCount>0&&t.totalCount>t.perPage?((0,i.wg)(),(0,i.iD)("div",g,[(0,i.Wm)(a,{class:"btn_page_prev",onClick:t.backwardPagination,disabled:t.isDisabledPrev},{default:(0,i.w5)((()=>[(0,i.Uk)("Prev")])),_:1},8,["onClick","disabled"]),(0,i._)("ul",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.totalPagination,(e=>((0,i.wg)(),(0,i.iD)("li",null,[(0,i.Wm)(a,{class:(0,n.C_)([t.currentPage==e?"on":""]),onClick:a=>t.onClickPagination(e),disabled:"..."===e},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(e),1)])),_:2},1032,["class","onClick","disabled"])])))),256))]),(0,i.Wm)(a,{class:"btn_page_next",onClick:t.forwardPagination,disabled:t.isDisabledNext},{default:(0,i.w5)((()=>[(0,i.Uk)("Next")])),_:1},8,["onClick","disabled"])])):(0,i.kq)("",!0)])}var l=(0,i.aZ)({name:"pagination",component:{},props:{totalCount:{type:Number,default:0,required:!0},perPage:{type:Number,default:0,required:!0},maxPageShow:{type:Number,default:7},resetPage:{type:Boolean,default:!1,required:!0},showTotal:{type:Boolean,default:!0,required:!1}},emits:["get-page-number","get-starting-index"],data(){return{totalPagination:[],endPagination:0,currentPage:1}},computed:{isDisabledPrev(){return 1==this.currentPage},isDisabledNext(){return this.currentPage==this.endPagination}},watch:{totalCount:{handler(){this.endPagination=this.dividePage(),this.findPagination(this.currentPage),this.currentPage=1,this.$emit("get-starting-index",1)},deep:!0},resetPage(t){t&&(this.currentPage=1,this.$emit("get-starting-index",1),this.findPagination(this.currentPage))}},mounted(){this.endPagination=this.dividePage(),this.findPagination(this.currentPage)},methods:{async findPagination(t){this.currentPage=t;const e=[];if(this.endPagination-this.currentPage>=this.maxPageShow){e.push(this.currentPage.toString());for(let a=0;a<this.maxPageShow-4;a++)e.push((t+a+1).toString());e.push("..."),e.push((this.endPagination-1).toString()),e.push(this.endPagination.toString())}else if(this.endPagination-this.maxPageShow+1<1)for(let a=1;a<=this.endPagination;a++)e.push(a.toString());else for(let a=this.endPagination-this.maxPageShow+1;a<=this.endPagination;a++)e.push(a.toString());return this.totalPagination=e,t},dividePage(){const t=this.totalCount/this.perPage;if(t%1!=0){const e=t.toString().split(".");return(0,n.He)(e[0])+1}return(0,n.He)(t.toFixed())},onClickPagination(t){this.currentPage!=parseInt(t)&&(this.currentPage=parseInt(t),this.findPagination(parseInt(t)),this.$emit("get-page-number",Number(t)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1))},async backwardPagination(){let t=10==this.currentPage?9:10,e=this.currentPage-t;e<1?(e=1,await this.findPagination(e).then((t=>{this.$emit("get-page-number",Number(t)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1)}))):await this.findPagination(e).then((t=>{this.$emit("get-page-number",Number(t)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1)}))},async forwardPagination(){let t=1==this.currentPage?9:10,e=this.currentPage+t;e>Number(this.totalPagination.slice(-1))?(e=Number(this.totalPagination.slice(-1)),await this.findPagination(e).then((t=>{this.$emit("get-page-number",Number(t)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1)}))):await this.findPagination(e).then((t=>{this.$emit("get-page-number",Number(t)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1)}))},async firstPagination(){await this.findPagination(1).then((t=>{this.$emit("get-page-number",Number(t)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1)}))},async lastPagination(){await this.findPagination(this.endPagination).then((t=>{this.$emit("get-page-number",Number(t)),this.$emit("get-starting-index",this.currentPage*this.perPage-this.perPage+1)}))}}}),c=a(83744);const p=(0,c.Z)(l,[["render",h],["__scopeId","data-v-3886d7e2"]]);var m=p},16325:function(t,e,a){a.r(e),a.d(e,{default:function(){return C}});var i=a(66252);const n=t=>((0,i.dD)("data-v-664d76b4"),t=t(),(0,i.Cn)(),t),s={class:"row"},r={class:"col"},o={class:"form01"},d=n((()=>(0,i._)("dt",null,"Request Banker's cheque Report",-1))),u={class:"inp_box type_date"},g={class:"inp"},h={class:"footer_btn"},l={class:"right_side"},c=n((()=>(0,i._)("span",null,"Search",-1))),p=n((()=>(0,i._)("span",null,"Refresh",-1))),m=(0,i.uE)('<div class="gridwrap no_grid_option" data-v-664d76b4><div class="tableWrap" data-v-664d76b4><table class="table01 fixed" data-v-664d76b4><colgroup data-v-664d76b4><col style="width:80px;" data-v-664d76b4></colgroup><thead class="sticky_head" data-v-664d76b4><tr data-v-664d76b4><th data-v-664d76b4><span data-v-664d76b4>No</span></th><th data-v-664d76b4><span data-v-664d76b4>Reference No</span></th><th data-v-664d76b4><span data-v-664d76b4>Biz CID</span></th><th data-v-664d76b4><span data-v-664d76b4>Biz Name</span></th><th data-v-664d76b4><span data-v-664d76b4>Account Number</span></th><th data-v-664d76b4><span data-v-664d76b4>Fix Deposit Type</span></th><th data-v-664d76b4><span data-v-664d76b4>Condition</span></th></tr></thead><tbody class="tbody_section" data-v-664d76b4><tr data-v-664d76b4><td data-v-664d76b4><span data-v-664d76b4>1</span></td><td data-v-664d76b4><span data-v-664d76b4>FT15356660XF</span></td><td data-v-664d76b4><span data-v-664d76b4>42232312</span></td><td data-v-664d76b4><span data-v-664d76b4>Printing &amp; Advertising Company</span></td><td data-v-664d76b4><span data-v-664d76b4>21466552</span></td><td data-v-664d76b4><span data-v-664d76b4>100</span></td><td data-v-664d76b4><span data-v-664d76b4>Close on maturity</span></td></tr></tbody></table></div></div>',1);function P(t,e){const a=(0,i.up)("ion-input"),n=(0,i.up)("ion-button");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",s,[(0,i._)("div",r,[(0,i._)("dl",o,[d,(0,i._)("dd",null,[(0,i._)("div",u,[(0,i._)("div",g,[(0,i.Wm)(a,{"clear-input":"",class:"",placeholder:"",value:""})]),(0,i.Wm)(n,{class:"btn_cal"},{default:(0,i.w5)((()=>[(0,i.Uk)("Calendar")])),_:1})])])])])]),(0,i._)("div",h,[(0,i._)("div",l,[(0,i.Wm)(n,{class:"btn01"},{default:(0,i.w5)((()=>[c])),_:1}),(0,i.Wm)(n,{class:"btn_refresh"},{default:(0,i.w5)((()=>[p])),_:1})])]),m],64)}var b=a(42615),v=a(21638),f=a(41762),D=(0,i.aZ)({components:{Pagination:v.Z,VueDatePicker:f.Z},data(){return{RequestBankerChequeReportData:[],COMMON_KEY_VALUE:b.ii,header:[{columnName:"No"},{columnName:"Reference No"},{columnName:"Biz CID"},{columnName:"Biz Name"},{columnName:"Account Number "},{columnName:"Fix Deposit Type"},{columnName:"Condition"},{columnName:"Principle Amount"},{columnName:"Currency"},{columnName:"Tenor "},{columnName:"Maturity Date"},{columnName:"Interest Rate"},{columnName:"Payout Account"},{columnName:"Remark"},{columnName:"FD Account Status"},{columnName:"Authorization Status code"},{columnName:"Create By"},{columnName:"Create Date "},{columnName:"Authorization By"},{columnName:"Authorization Date"}],totalItems:0,pageSize:b.IV,currentPage:1,startingIndex:1,isResetPage:!1,searchValueBy:{date:new Date}}},mounted(){this.getRequestBankerChequeReportData()},computed:{formattedDate(){return this.$datetime.formatVueDatePicker(this.searchValueBy.date)}},methods:{async getRequestBankerChequeReportData(){const t={pageNumber:this.currentPage,pageSize:b.IV,searchValue:this.searchValueBy.date},e=await this.$request.getRequest("RPT20500111",t,!0);e.header.result&&(this.RequestBankerChequeReportData=this.onMappingTableData(e.body.list),console.log(e.body.list),this.totalItems=e.body.totalCount,console.log(this.RequestBankerChequeReportData))},onMappingTableData(t){return t.map(((t,e)=>({no:e+1,serverTransactionID:t.serverTransactionID,accountNo:t.accountNo,customerNo:t.customerNo,customerName:t.customerName,fixDepositType:t.fixDepositType,depositRolloverDivideCode:t.depositRolloverDivideCode,termDepositAmount:t.termDepositAmount,currencyCode:t.currencyCode,contractMonths:t.contractMonths,maturityDate:this.$datetime.formatStringToStringDate(t.maturityDate),applyInterestRate:t.applyInterestRate,sourceOfFundAccountNo:t.sourceOfFundAccountNo,remark:t.remark,fDAccountStatus:t.fDAccountStatus,corpBankingApprovalStatusCode:t.corpBankingApprovalStatusCode,firstRegisterTellerID:t.firstRegisterTellerID,firstRegisterDate:this.$datetime.formatStringToStringDate(t.firstRegisterDate),approverID:t.approverID,authorizationDate:this.$datetime.formatStringToStringDate(t.authorizationDate)})))},handlePagination(t){this.isResetPage=!1,this.currentPage=t,this.getRequestBankerChequeReportData()},handleStartingIndex(t){this.startingIndex=t},handleSearch(){this.currentPage>1?(this.currentPage=1,this.isResetPage=!0,this.getRequestBankerChequeReportData()):(this.isResetPage=!0,this.getRequestBankerChequeReportData())},handleReset(){this.searchValueBy.date=new Date,this.currentPage=1,this.isResetPage=!0,this.getRequestBankerChequeReportData()}}}),N=a(83744);const _=(0,N.Z)(D,[["render",P],["__scopeId","data-v-664d76b4"]]);var C=_}}]);
//# sourceMappingURL=6325.d7fdf8fd.js.map