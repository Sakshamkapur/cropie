(this.webpackJsonpimager=this.webpackJsonpimager||[]).push([[0],{16:function(e,t,a){e.exports=a(35)},21:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(4),r=a.n(c),l=(a(21),a(1));function o(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(null),s=Object(l.a)(o,2),u=s[0],m=s[1],d=Object(n.useRef)(null),f=e.setFile,h=e.setActiveScreen;function g(e){var t;if(!e)return f(null),m("No File Found!"),r(!1),setTimeout((function(){m(null)}),3e3),!1;if(t=e.type.split("/")[0]){if("image"!==t)return f(null),m("Please add an Image File"),r(!1),setTimeout((function(){m(null)}),3e3),!1;var a=window.URL||window.webkitURL,n=new Image,i=a.createObjectURL(e);n.onload=function(){if(1024!==this.width||1024!=this.height)return f(null),r(!1),m("The Image is not 1024 x 1024"),setTimeout((function(){m(null)}),3e3),!1;f(e),h(1),r(!1),a.revokeObjectURL(i)},n.src=i}}var v=c?"display-box drag-over":"display-box",p=u?i.a.createElement("div",{className:"error-notification"},i.a.createElement("p",null,u)):null;return i.a.createElement("div",{className:"image-uploader-wrapper"},i.a.createElement("div",{className:v},i.a.createElement("div",{className:"icon-text-box"},i.a.createElement("div",{className:"upload-icon"},i.a.createElement("i",{className:"fa fa-upload","aria-hidden":"true"})),i.a.createElement("div",{className:"upload-text"},"Drag an Image or Browse..."),p),i.a.createElement("div",null,i.a.createElement("input",{type:"file",ref:d,id:"upload-image-input",className:"upload-image-input",accept:"image/*",onDrop:function(e){e.preventDefault(),g(e.dataTransfer.files[0])},onDragEnter:function(e){e.preventDefault()},onDragOver:function(e){e.preventDefault(),c||r(!0)},onDragLeave:function(e){e.preventDefault(),r(!1)},onChange:function(e){e.preventDefault(),g(e.target.files[0])}}))),i.a.createElement("div",{className:"rules"},i.a.createElement("p",null,"*Please Make sure you are adding only one image (in case of multiple images selected the first one will be picked)"),i.a.createElement("p",null,"*Please Make sure that the Image is 1024 x 1024")))}var s=a(14),u=a.n(s),m=a(5),d=a.n(m);a(36);d.a.initializeApp({apiKey:"AIzaSyAmBPSweNL9V83wOth9iWdHSllYjs-kKZw",authDomain:"imager-f5919.firebaseapp.com",databaseURL:"https://imager-f5919.firebaseio.com",projectId:"imager-f5919",storageBucket:"imager-f5919.appspot.com",messagingSenderId:"135431153748",appId:"1:135431153748:web:5f9df7c8696269b2ae25c1",measurementId:"G-3NBYMSGWCB"});var f=d.a.storage(),h={vertical:{initialX:329.5,initialY:287,width:365,height:450},horizontal:{initialX:134.5,initialY:287,width:755,height:450},"horizontal small":{initialX:329.5,initialY:406,width:365,height:212},gallery:{initialX:322,initialY:322,width:380,height:380}};function g(e){var t=e.file,a=e.setFile,c=e.setActiveScreen,r=Object(n.useState)(t?URL.createObjectURL(t):null),o=Object(l.a)(r,2),s=o[0],m=(o[1],Object(n.useState)({x:h.vertical.initialX,y:h.vertical.initialY})),d=Object(l.a)(m,2),g=d[0],v=d[1],p=Object(n.useState)("vertical"),b=Object(l.a)(p,2),E=b[0],w=b[1],j=Object(n.useState)(null),O=Object(l.a)(j,2),N=O[0],y=O[1],k=Object(n.useState)(0),S=Object(l.a)(k,2),x=S[0],I=S[1],D=Object(n.useState)(!1),L=Object(l.a)(D,2),A=L[0],R=L[1],C=Object(n.useRef)(null);Object(n.useEffect)((function(){if(C.current.childNodes[0]){var e=C.current.childNodes[0].getContext("2d"),t=h[E].width,a=h[E].height;e.clearRect(0,0,C.current.childNodes[0].width,C.current.childNodes[0].height),C.current.childNodes[0].width=t,C.current.childNodes[0].height=a,C.current.childNodes[0].setAttribute("id",E),e.drawImage(N,g.x,g.y,t,a,0,0,t,a)}}),[g]);var F={onDrag:function(e,t){v({x:t.x,y:t.y})}};return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"actions"},i.a.createElement("div",null,i.a.createElement("button",{className:"btn danger",onClick:function(){a(null),c(0)}},"Remove")),Object.keys(h).map((function(e){return i.a.createElement("button",{className:e===E?"btn mr active":"btn mr",onClick:function(){v({x:h[e].initialX,y:h[e].initialY}),w(e)}},e)})),i.a.createElement("div",null,i.a.createElement("button",{className:"btn active mr",onClick:function(){return function(){var e=document.createElement("a");e.download=s,e.href=document.getElementById(E).toDataURL(),e.click()}()}},"Download"),i.a.createElement("button",{className:"btn success mr",onClick:function(){var e=C.current.childNodes[0];R(!0),e.toBlob((function(e){var a=h[E].width,n=h[E].height,i=new File([e],t.name+"("+a+"x"+n+")",e);f.ref("images/".concat(t.name+"("+a+"x"+n+")")).put(i).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);I(t)}),(function(e){alert(e),R(!1)}),(function(){c(2),R(!1)}))}))}},"Upload ",A&&i.a.createElement("span",null," "+x+"%")),i.a.createElement("button",{className:"btn",onClick:function(){return c(2)}},"View Images"))),i.a.createElement("div",{className:"container"},i.a.createElement("div",null,i.a.createElement("div",{className:"media"},i.a.createElement(u.a,Object.assign({bounds:"parent",position:g,defaultPosition:{x:h[E].initialX,y:h[E].initialY}},F),i.a.createElement("div",{className:E})),i.a.createElement("img",{src:s,alt:"",onLoad:function(e){var t=e.target,a=document.createElement("canvas");1024===t.offsetWidth&&1024===t.offsetHeight||(alert("Looks Like Image is not 1024 x 1024!!"),c(0)),y(t);var n=h[E].width,i=h[E].height;a.width=n,a.height=i,a.getContext("2d").drawImage(t,g.x,g.y,n,i,0,0,n,i),a.setAttribute("id",E),C.current.appendChild(a)}}))),i.a.createElement("div",{className:"preview",ref:C})))}var v=a(8),p=a.n(v),b=a(15);function E(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),c=a[0],r=a[1],o=e.setActiveScreen;function s(){return(s=Object(b.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],f.ref().child("images/").listAll().then((function(e){e.items.forEach((function(a){a.getDownloadURL().then((function(a){t.push(a),e.items.length===t.length&&r(t)}))}))}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){s.apply(this,arguments)}()}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"back",onClick:function(){return o(1)}},i.a.createElement("i",{class:"fa fa-arrow-left"})),i.a.createElement("h3",{style:{width:"80vw",margin:"5% auto"}},"Uploaded Images"),i.a.createElement("div",{className:"masonry my2"},c.map((function(e){return i.a.createElement("div",{className:"aspect"},i.a.createElement("a",{download:"sample.png",target:"_blank",href:e},i.a.createElement("img",{src:e})))}))))}a(34);var w=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),s=Object(l.a)(r,2),u=s[0],m=s[1];switch(a){case 0:return i.a.createElement(o,{setFile:m,setActiveScreen:c});case 1:if(u)return i.a.createElement(g,{file:u,setFile:m,setActiveScreen:c});c(0);break;case 2:return i.a.createElement(E,{setActiveScreen:c});default:return i.a.createElement(o,{setFile:m,setActiveScreen:c})}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.9c913f25.chunk.js.map