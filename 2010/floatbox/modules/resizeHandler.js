/* Floatbox v3.53.0 */
Floatbox.prototype.resizeHandler=function(g){var f=fb;if(!(f&&f.fbBox&&f.currentItem)){return}var c=f.getDisplaySize(),a=f.getScroll();function b(i){if(!i.currentItem||i.itemToShow!==i.currentItem){return}var k=i.fbBox.offsetLeft-i.cornerRadius-a.left,l=f.displaySize.width-i.fbBox.offsetWidth-2*i.cornerRadius-k,e=i.fbBox.offsetTop-i.cornerRadius-a.top,h=f.displaySize.height-i.fbBox.offsetHeight-2*i.cornerRadius-e;if(i.leftRatio===false){var j=i.fbBox.offsetWidth+2*i.cornerRadius,m=i.fbBox.offsetHeight+2*i.cornerRadius;i.leftRatio=i.topRatio=0.5;if(k>=0&&l>=0&&j<=c.width&&j<=f.displaySize.width&&!(k===i.autoFitSpace&&l===(i.shadowSize||i.autoFitSpace))){i.leftRatio=k/(k+l)}if(e>=0&&h>=0&&m<=c.height&&m<=f.displaySize.height&&!(e===i.autoFitSpace&&h===(i.shadowSize||i.autoFitSpace))){i.topRatio=e/(e+h)}}var o=c.width-f.displaySize.width,n=c.height-f.displaySize.height;if(k>=0&&l<0&&o>0){o=0}if(e>=0&&h<0&&n>0){n=0}if(o){i.fbBox.style.left=(i.pos.fbBox.left=Math.round(i.fbBox.offsetLeft+o*i.leftRatio))+"px"}if(n){i.fbBox.style.top=(i.pos.fbBox.top=Math.round(i.fbBox.offsetTop+n*i.topRatio))+"px"}}b(fb);for(var d=0;d<f.children.length;d++){b(f.children[d])}f.displaySize.width=c.width;f.displaySize.height=c.height};if(fb.centerOnResize&&fb.fbBox&&!fb.resizeHandlerSet){fb.addEvent(window,"resize",fb.resizeHandler);fb.resizeHandlerSet=true};
