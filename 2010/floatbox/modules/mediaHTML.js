/* Floatbox v3.53.0 */
Floatbox.prototype.mediaHTML_module=function(c,m,d,o,k){var p=this;m=m.replace("media:","");if(m==="flash"){if(k&&!fb.hasFlashVersion(k)){return'<p style="color:#000; background:#fff; margin:1em; padding:1em;">'+p.strings.flashVer+'<br /><a href="'+j+'">Get Flash Player</a></p>'}var l='classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"',b='type="application/x-shockwave-flash"',j="http://get.adobe.com/flashplayer/",e={wmode:"window",bgcolor:"",scale:"exactfit",base:"",play:"true",menu:"",allowfullscreen:"true",loop:"true",quality:"high",salign:""};if(/youtube\.com\/(v\/|watch\?v=)/i.test(c)){e.flashvars="autoplay=1&amp;border=0&amp;rel=0"}else{if(/(soapbox\d_\d|mtgPlayer)\.swf/i.test(c)){e.flashvars="ap=true"}else{e.flashvars="autoplay=1"}}if(p.ffOld){e.wmode=p.ffMac?"window":"opaque"}if(p.ffNew&&/YV_YEP\.swf/i.test(c)){e.wmode="window"}}else{if(m==="silverlight"){var b='type="application/x-silverlight-2"',g='data="data:application/x-silverlight-2,"',j="http://go.microsoft.com/fwlink/?LinkID=124807",e={source:p.encodeHTML(c),allowHtmlPopupWindow:"",autoUpgrade:"",background:"",enablehtmlaccess:"",initparams:"",maxframerate:"",minRuntimeVersion:"",onerror:"",onfullscreenchanged:"",onload:"",onresize:"",onsourcedownloadcomplete:"",onsourcedownloadprogresschanged:"",splashscreensource:"",windowless:""}}else{if(m==="quicktime"){var l='classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B"',b='type="video/quicktime"',j="http://www.apple.com/quicktime/download/",e={autoplay:"true",controller:"true",showlogo:"false",scale:"tofit"}}else{if(m==="wmp"){var l='classid="clsid:22D6F312-B0F6-11D0-94AB-0080C74C7E95"',b="application/x-mplayer2",j="http://www.microsoft.com/windows/windowsmedia/download/alldownloads.aspx",e={autoStart:"1",showControls:"1",showDisplay:"0",showStatusBar:"0",loop:"0",animationAtStart:"1",transparentAtStart:"1"}}else{return"Unknown media type"}}}}for(var a in e){if(e.hasOwnProperty(a)){var f=new RegExp("[\\?&]"+a+"=([^&]+)","i"),i=f.exec(c);if(i){e[a]=i[1]}}}var i;if((i=/youtube.com\/watch\?v=([^&]+)/i.exec(c))){c="http://www.youtube.com/v/"+i[1];if(c.indexOf("?")===-1){c+="?fs=1"}}c=p.encodeHTML(c);if(m!=="silverlight"){var g='data="'+c+'"'}var h='<object id="fbObject'+(fb.children.length?fb.children.length:"")+'" width="'+d+'" height="'+o+'" ';if(p.ie&&m!=="silverlight"){h+=l+">";e[m==="flash"?"movie":(m==="wmp"?"filename":"src")]=c}else{h+=b+" "+g+">"}for(var a in e){if(e.hasOwnProperty(a)&&e[a]){h+='<param name="'+a+'" value="'+e[a]+'" />'}}if(m==="quicktime"&&p.webkitMac){h+="<embed "+b+' src="'+c+'" width="'+d+'" height="'+o+'" autoplay="true" controller="true" showlogo="false" scale="tofit" pluginspage="'+j+'"></embed></object>'}else{if(m==="wmp"){var n="Windows Media Player"}else{var n=m.substr(0,1).toUpperCase()+m.substr(1)+" Player"}h+='<p style="color:#000; background:#fff; margin:1em; padding:1em;">'+p.strings.needPlayer.replace("%1",n)+'<br /><a href="'+j+'">Get '+n+"</a></p></object>"}return h};Floatbox.prototype.getFlashVersion=function(){var l=null,j="",b="application/x-shockwave-flash",c="ShockwaveFlash.ShockwaveFlash",a=window.navigator,h=a.plugins&&a.plugins["Shockwave Flash"],f;if(h){if(!(a.mimeTypes&&a.mimeTypes[b]&&!a.mimeTypes[b].enabledPlugin)){j=h.description}}else{if(window.ActiveXObject){try{j=(new ActiveXObject(c+".7")).GetVariable("$version")}catch(k){}if(!j){try{var g=new ActiveXObject(c+".6");j="WIN 6,0,21,0";g.AllowScriptAccess="always";j=g.GetVariable("$version")}catch(k){}}if(!j){try{j=(new ActiveXObject(c+".4")).GetVariable("$version")}catch(k){}}if(!j){try{if(new ActiveXObject(c+".3")){j="WIN 3,0,18,0"}}catch(k){}}if(!j){try{if(new ActiveXObject(c)){j="WIN 2,0,0,11"}}catch(k){}}}}if(j&&(f=/^\D+(\d+)\D+(\d+)\D+(\d+)/.exec(j))){l=f.slice(1);var d=l.length;while(d--){l[d]=+l[d]}}return l};Floatbox.prototype.hasFlashVersion=function(a){if(!a||isNaN(parseInt(a,10))){return true}if(!fb.flashVersion){return false}var d=fb.flashVersion,c=(a+"").split(/\D+/);if(!c[0]){c.slice(1)}for(var b=0;b<3;b++){c[b]=+c[b]||0}return(d[0]>c[0]||(d[0]===c[0]&&d[1]>c[1])||(d[0]===c[0]&&d[1]===c[1]&&d[2]>=c[2]))};fb.flashVersion=fb.getFlashVersion();
