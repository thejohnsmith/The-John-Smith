/* Floatbox v3.53.0 */
Floatbox.prototype.getLeftTop_module=function(c,s){var o=this,g=c.offsetLeft||0,q=c.offsetTop||0,A=c.ownerDocument,x=A.getElementsByTagName("body")[0],f=A.documentElement,k=A.defaultView||A.parentWindow,a=o.getScroll(k);if(false&&c.getBoundingClientRect&&!s){var b=c.getBoundingClientRect();g=b.left+a.left;q=b.top+a.top;if(o.ie){g-=f.clientLeft||x.clientLeft;q-=f.clientTop||x.clientTop}}else{var z=o.getStyle(c,"position").toLowerCase(),y=/absolute|fixed|relative/,n=!y.test(z),e=n,u=c;if(z==="fixed"){g+=a.left;q+=a.top}while(z!=="fixed"&&(u=u.offsetParent)){var d=0,p=0,j=true,z=o.getStyle(u,"position").toLowerCase(),j=!y.test(z);if(o.opera){if(s&&u!==x){g+=u.scrollLeft-u.clientLeft;q+=u.scrollTop-u.clientTop}}else{if(o.ie){if(u.currentStyle.hasLayout&&u!==A.documentElement){d=u.clientLeft;p=u.clientTop}}else{d=parseInt(o.getStyle(u,"border-left-width"),10);p=parseInt(o.getStyle(u,"border-top-width"),10);if(o.ff&&u===c.offsetParent&&!j&&(o.ffOld||!n)){g+=d;q+=p}}}if(!j){if(s){return{left:g,top:q}}e=false}if(u.offsetLeft>0){g+=u.offsetLeft}g+=d;q+=u.offsetTop+p;if(z==="fixed"){g+=a.left;q+=a.top}if(!(o.opera&&n)&&u!==x&&u!==A.documentElement){g-=u.scrollLeft;q-=u.scrollTop}}if(o.ff&&e){g+=parseInt(o.getStyle(x,"border-left-width"),10);q+=parseInt(o.getStyle(x,"border-top-width"),10)}}if(!s&&k!==self){var h=k.parent.document.getElementsByTagName("iframe"),w=h.length;while(w--){var u=h[w],r=o.getIframeDocument(u);if(r===A){var l=o.getLeftTop(u);g+=l.left-a.left;q+=l.top-a.top;if(o.ie||o.opera){var v=0,m=0;if(!o.ie||n){v=parseInt(o.getStyle(u,"padding-left"),10);m=parseInt(o.getStyle(u,"padding-top"),10)}g+=u.clientLeft+v;q+=u.clientTop+m}else{g+=parseInt(o.getStyle(u,"border-left-width"),10)+parseInt(o.getStyle(u,"padding-left"),10);q+=parseInt(o.getStyle(u,"border-top-width"),10)+parseInt(o.getStyle(u,"padding-top"),10)}break}}}return{left:g,top:q}};
