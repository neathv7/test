"use strict";(self["webpackChunkbizMOB4Vue"]=self["webpackChunkbizMOB4Vue"]||[]).push([[8990],{48990:function(e,t,n){n.r(t),n.d(t,{createSwipeBackGesture:function(){return o}});var r=n(96587),i=n(80545),c=n(66515);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const o=(e,t,n,o,s)=>{const a=e.ownerDocument.defaultView,u=(0,i.i)(e),h=e=>{const t=50,{startX:n}=e;return u?n>=a.innerWidth-t:n<=t},l=e=>u?-e.deltaX:e.deltaX,d=e=>u?-e.velocityX:e.velocityX,b=e=>h(e)&&t(),f=e=>{const t=l(e),n=t/a.innerWidth;o(n)},k=e=>{const t=l(e),n=a.innerWidth,i=t/n,c=d(e),o=n/2,u=c>=0&&(c>.2||t>o),h=u?1-i:i,b=h*n;let f=0;if(b>5){const e=b/Math.abs(c);f=Math.min(e,540)}s(u,i<=0?.01:(0,r.j)(0,i,.9999),f)};return(0,c.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:b,onStart:n,onMove:f,onEnd:k})}}}]);
//# sourceMappingURL=8990.e9572ca4.js.map