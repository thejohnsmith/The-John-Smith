/* Floatbox v3.53.0 */
Floatbox.prototype.getMousedownHandler=function(){var a=this;return function(l){if(!(a.currentItem&&a.fbContent)){return}l=l||window.event;var m=l.target||l.srcElement,r=a.currentItem,j=l.clientX,f=l.clientY,i=a.fbBox.style,d=a.fbMainDiv.style,n=a.fbContent.style,c=a.pos.fbBox;if(m.id==="fbDragger"){a.proportional=(r.type==="img"||r.type.indexOf("media")===0);if(typeof r.options.proportionalResize==="boolean"){a.proportional=r.options.proportionalResize}if(a.proportional){var p=typeof r.nativeWidth==="number"?r.nativeWidth:a.pos.fbMainDiv.width,g=typeof r.nativeHeight==="number"?r.nativeHeight:a.pos.fbMainDiv.height,o=p/g}j-=a.dragResizeDx;f-=a.dragResizeDy;a.bod.style.cursor="nw-resize";a.dragResizing=true}else{if(/fb(Box|Corner|Canvas|InfoPanel|CaptionDiv|ControlPanel|IndexLinks)/.test(m.id)){var s=c.left,q=c.top;a.bod.style.cursor="move";a.dragResizing=false}else{return}}var b=function(h){h=h||window.event;a.clearTimeout("mouseup");if(a.doc.removeEventListener){a.doc.removeEventListener("mouseup",b,true);a.doc.removeEventListener("mousemove",k,true)}else{if(a.fbBox.detachEvent){a.fbBox.detachEvent("onlosecapture",b);a.fbBox.detachEvent("onmouseup",b);a.fbBox.detachEvent("onmousemove",k);a.fbBox.releaseCapture()}}if(a.dragResizing){a.dragResizing=false}else{if(a.stickyDragMove){a.dragMoveDx+=c.left-s;a.dragMoveDy+=c.top-q}}a.leftRatio=a.topRatio=false;a.bod.style.cursor="default";n.visibility="";return a.stopEvent(h)};var k=function(v){v=v||window.event;if(r.type==="iframe"&&!n.visibility){n.visibility="hidden"}if(a.isSlideshow&&!a.isPaused){a.pause(true)}var t=v.clientX-j,h=v.clientY-f;if(a.dragResizing){if(a.proportional){var u=t+h;h=u/(o+1);t=u-h}a.dragResizeDx=t;a.dragResizeDy=h;a.calcSize(false)}else{i.left=(c.left=s+t)+"px";i.top=(c.top=q+h)+"px"}a.clearTimeout("mouseup");a.setTimeout("mouseup",b,1500);return a.stopEvent(v)};if(a.doc.addEventListener){a.doc.addEventListener("mousemove",k,true);a.doc.addEventListener("mouseup",b,true)}else{if(a.fbBox.attachEvent){a.fbBox.setCapture();a.fbBox.attachEvent("onmousemove",k);a.fbBox.attachEvent("onmouseup",b);a.fbBox.attachEvent("onlosecapture",b)}}return a.stopEvent(l)}};if((fb.enableDragMove||fb.enableDragResize)&&fb.fbBox&&!fb.fbBox.onmousedown){fb.fbBox.onmousedown=fb.getMousedownHandler};
