(this.webpackJsonptravel=this.webpackJsonptravel||[]).push([[0],{190:function(e,t,a){},191:function(e,t,a){},536:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(37),s=a.n(r),o=(a(190),a(20)),i=a.n(o),l=a(40),d=a(4),g=(a(191),a(30)),m=a.n(g),p=a(541),u=a(8),j=a(542),b=a(544),h=a(545),f=a(537),v=a(1);var O=function(e){var t=Object(u.f)();return Object(v.jsxs)("div",{className:"nav-bar",children:[Object(v.jsx)(j.a.Link,{className:"main-logo",href:"/",children:Object(v.jsx)("h1",{className:"p-3 logo",onClick:function(){e.valCg(""),localStorage.clear()},children:"Travel"})}),Object(v.jsxs)(b.a,{className:"inputGp w-50",children:[Object(v.jsx)(h.a,{placeholder:"\uc7a5\uc18c\ub97c \uac80\uc0c9\ud558\uc138\uc694","aria-label":"Recipient's username","aria-describedby":"basic-addon2",onChange:function(t){e.inputCg(t.target.value)},onKeyPress:function(a){13===window.event.keyCode&&(localStorage.clear(),localStorage.setItem("search",e.input),e.valCg(localStorage.getItem("search")),localStorage.setItem("val",encodeURI(e.input)),localStorage.setItem("category","travel"),e.typeCg(12),e.categoryCg(localStorage.getItem("category")),a.preventDefault(),t.push("/search/travel/1"))}}),Object(v.jsx)(f.a,{variant:"outline-secondary",className:"input-btn",onClick:function(t){localStorage.clear(),localStorage.setItem("search",e.input),e.valCg(localStorage.getItem("search")),localStorage.setItem("val",encodeURI(e.input)),localStorage.setItem("category","travel"),e.typeCg(12),e.categoryCg(localStorage.getItem("category")),t.preventDefault()},children:"\uac80\uc0c9"})]}),Object(v.jsx)("div",{className:"bin-box"})]})},y=a(543),x=a(540),S=a(538),N=a(539);var I=function(e){var t=Object(u.f)();return Object(v.jsx)(y.a.Item,{action:!0,onClick:function(){t.push("/search/detail/".concat(e.list.contentid)),e.setLoading(!0),e.contentidCg(e.list.contentid),localStorage.removeItem("result"),localStorage.removeItem("result2")},children:Object(v.jsxs)(S.a,{className:"list text-left",children:[Object(v.jsx)(N.a,{className:"img-box d-flex align-items-center",sm:3,children:null!=e.list.firstimage2?Object(v.jsx)("img",{className:"img w-100 rounded",src:e.list.firstimage2,alt:e.index}):Object(v.jsx)("div",{className:"img noImg w-100 rounded d-flex align-items-center justify-content-center font-weight-bolder",children:"No Image"})}),Object(v.jsxs)(N.a,{sm:7,className:"list-text p-3",children:[Object(v.jsx)("p",{className:"title",children:e.list.title}),Object(v.jsx)("p",{className:"address",children:e.list.addr1})]}),Object(v.jsx)(N.a,{sm:2,className:"m-auto text-center",children:Object(v.jsx)("div",{className:"btn border border-secondary",children:"\ub354\ubcf4\uae30"})})]})},e.index)};var C=function(e){var t=Object(u.g)().id,a=Object(u.f)(),n=Object(c.useState)(e.result),r=Object(d.a)(n,2),s=r[0],o=r[1],g=Object(c.useState)({start:0,end:5}),p=Object(d.a)(g,2),b=(p[0],p[1],Object(c.useState)()),h=Object(d.a)(b,2),f=(h[0],h[1],Object(c.useState)(!1)),O=Object(d.a)(f,2),S=(O[0],O[1],Object(c.useState)(!1)),N=Object(d.a)(S,2),C=N[0],w=N[1],k=Object(c.useState)(JSON.parse(localStorage.getItem("page"))),L=Object(d.a)(k,2),A=L[0],E=L[1];Object(c.useEffect)((function(){setTimeout((function(){var a=function(){var a=Object(l.a)(i.a.mark((function a(){var c;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return w(!0),a.prev=1,a.next=4,m.a.get("http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList?ServiceKey=3gPkHl5ZAmSr7PbC2%2FMp3yKYSStNo4WjExafFNjc0GzixmJdjejAnpj2Liq3ZKw18yZPSEE9TGc6PQQaJlU%2BAA%3D%3D&contentTypeId=".concat(e.type,"&areaCode=").concat(e.areaCode,"&sigunguCode=").concat(e.sigunguCode,"&arrange=P&pageNo=").concat(t,"&MobileOS=ETC&MobileApp=AppTest&_type=json"));case 4:c=a.sent,o(c.data.response.body.items.item),E(JSON.parse(localStorage.getItem("page"))),w(!1),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),console.log(a.t0);case 13:case"end":return a.stop()}}),a,null,[[1,10]])})));return function(){return a.apply(this,arguments)}}();return a(),function(){a()}}),100)}),[e.page,e.areaCode,e.sigunguCode,e.type,e.result,e.val,t]);var P=function(t,a,c){e.typeCg(t),e.categoryCg(a),c.preventDefault()};return Object(v.jsxs)("div",{className:"mainList mt-5",children:[e.val?Object(v.jsxs)(j.a,{fill:!0,variant:"tabs",defaultActiveKey:"/search/".concat(window.location.href.split("/")[5],"/"),className:"menu d-flex justify-content-around m-auto border-bottom-0",children:[Object(v.jsx)(j.a.Item,{children:Object(v.jsx)(j.a.Link,{id:"first_btn",className:"cate-list",href:"/search/travel/",onClick:function(e){localStorage.setItem("category","travel"),P(12,localStorage.getItem("category"),e)},children:"\uc5ec\ud589\uc9c0"})}),Object(v.jsx)(j.a.Item,{children:Object(v.jsx)(j.a.Link,{className:"cate-list",href:"/search/cultural/",onClick:function(e){localStorage.setItem("category","cultural"),P(14,localStorage.getItem("category"),e)},children:"\ubb38\ud654\uc2dc\uc124"})}),Object(v.jsx)(j.a.Item,{children:Object(v.jsx)(j.a.Link,{className:"cate-list",href:"/search/event/",onClick:function(e){localStorage.setItem("category","event"),P(15,localStorage.getItem("category"),e)},children:"\ud589\uc0ac"})}),Object(v.jsx)(j.a.Item,{children:Object(v.jsx)(j.a.Link,{className:"cate-list",href:"/search/travelCourse/",onClick:function(e){localStorage.setItem("category","travelCourse"),P(25,localStorage.getItem("category"),e)},children:"\uc5ec\ud589\ucf54\uc2a4"})}),Object(v.jsx)(j.a.Item,{children:Object(v.jsx)(j.a.Link,{className:"cate-list",href:"/search/sports/",onClick:function(e){localStorage.setItem("category","sports"),P(28,localStorage.getItem("category"),e)},children:"\ub808\ud3ec\uce20"})}),Object(v.jsx)(j.a.Item,{children:Object(v.jsx)(j.a.Link,{className:"cate-list",href:"/search/lodgment/",onClick:function(e){localStorage.setItem("category","lodgment"),P(32,localStorage.getItem("category"),e)},children:"\uc219\ubc15"})}),Object(v.jsx)(j.a.Item,{children:Object(v.jsx)(j.a.Link,{className:"cate-list",href:"/search/shopping/",onClick:function(e){localStorage.setItem("category","shopping"),P(38,localStorage.getItem("category"),e)},children:"\uc1fc\ud551"})}),Object(v.jsx)(j.a.Item,{children:Object(v.jsx)(j.a.Link,{className:"cate-list",to:"/search/eat/",onClick:function(e){localStorage.setItem("category","eat"),P(39,localStorage.getItem("category"),e)},children:"\uc74c\uc2dd\uc810"})})]}):null,Object(v.jsx)(y.a,{defaultActiveKey:"#link",className:"listGp w-100 p-0",children:e.loading||C?Object(v.jsx)(x.a,{className:"m-auto",animation:"border",role:"status",children:Object(v.jsx)("span",{className:"visually-hidden",children:"Loading..."})}):null!=s?Array.isArray(s)?s.map((function(t,a){return Object(v.jsx)(I,{list:t,index:a,contentidCg:e.contentidCg,setLoading:e.setLoading},a)})):Object(v.jsx)(I,{list:s,index:"0",contentidCg:e.contentidCg,setLoading:e.setLoading},"1"):Object(v.jsx)("div",{className:"text-center",children:"\uac80\uc0c9\uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."})}),Object(v.jsx)("div",{className:"list-box",children:Object(v.jsx)("ul",{className:"listNum p-0",children:null!=A?A.map((function(t,c){return Object(v.jsx)("li",{className:"num",onClick:function(){a.push("/search/".concat(e.category,"/").concat(A[c]))},children:t},c)})):null})})]})},w=a(183),k=window.kakao;var L=function(e){var t=Object(u.f)(),a=Object(c.useState)(JSON.parse(localStorage.getItem("result"))),n=Object(d.a)(a,2),r=n[0],s=n[1],o=Object(c.useState)(JSON.parse(localStorage.getItem("result2"))),g=Object(d.a)(o,2),p=g[0],j=g[1];return Object(c.useEffect)((function(){var a=function(){var a=Object(l.a)(i.a.mark((function a(){var c,n;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log(e.contentid),a.next=3,m.a.get("http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailCommon?ServiceKey=3gPkHl5ZAmSr7PbC2%2FMp3yKYSStNo4WjExafFNjc0GzixmJdjejAnpj2Liq3ZKw18yZPSEE9TGc6PQQaJlU%2BAA%3D%3D&contentId=".concat(e.contentid?e.contentid:JSON.parse(localStorage.getItem("result")).contentid,"&defaultYN=Y&firstImageYN=Y&addrinfoYN=Y&overviewYN=Y&mapinfoYN=Y&MobileOS=ETC&MobileApp=AppTest&_type=json"));case 3:return c=a.sent,a.next=6,m.a.get("http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailIntro?ServiceKey=3gPkHl5ZAmSr7PbC2%2FMp3yKYSStNo4WjExafFNjc0GzixmJdjejAnpj2Liq3ZKw18yZPSEE9TGc6PQQaJlU%2BAA%3D%3D&contentId=".concat(e.contentid?e.contentid:JSON.parse(localStorage.getItem("result")).contentid,"&contentTypeId=").concat(e.type?e.type:JSON.parse(localStorage.getItem("result")).contenttypeid,"&MobileOS=ETC&MobileApp=AppTest&_type=json"));case 6:n=a.sent,null!=r&&null!=p||(window.localStorage.setItem("result",JSON.stringify(c.data.response.body.items.item)),window.localStorage.setItem("result2",JSON.stringify(n.data.response.body.items.item))),s(JSON.parse(localStorage.getItem("result"))),j(JSON.parse(localStorage.getItem("result2"))),t.push("/search/detail/".concat(JSON.parse(localStorage.getItem("result")).contentid)),e.setLoading(!1);case 12:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return a(),function(){w.a}}),[]),Object(c.useEffect)((function(){if(!e.loading&&r.addr1){var t=function(e){var t=document.createElement("div"),a=document.createElement("div"),c=document.createElement("div");t.className="MapWalker",a.className="figure",c.className="angleBack",t.appendChild(c),t.appendChild(a);var n=new k.maps.CustomOverlay({position:e,content:t,yAnchor:1});this.walker=n,this.content=t};t.prototype.setAngle=function(e){for(var t=0;t<16;t++)if(e>22.5*t&&e<22.5*(t+1)){var a="m"+t;this.content.className=this.content.className.split(" ")[0],this.content.className+=" "+a;break}},t.prototype.setPosition=function(e){this.walker.setPosition(e)},t.prototype.setMap=function(e){this.walker.setMap(e)};var a=document.getElementById("map"),c={center:new k.maps.LatLng(33.450701,126.570667),level:5},n=new k.maps.Map(a,c);n.addOverlayMapTypeId(k.maps.MapTypeId.ROADVIEW);var s=document.getElementById("roadview"),o=new k.maps.Roadview(s),i=new k.maps.RoadviewClient;(new k.maps.services.Geocoder).addressSearch("".concat(r.addr1),(function(e,a){if(a===k.maps.services.Status.OK){var c=new k.maps.LatLng(e[0].y,e[0].x);i.getNearestPanoId(c,50,(function(e){o.setPanoId(e,c)})),n.setCenter(c);var r=null;k.maps.event.addListener(o,"init",(function(){(r=new t(c)).setMap(n),k.maps.event.addListener(o,"viewpoint_changed",(function(){var e=o.getViewpoint();r.setAngle(e.pan)})),k.maps.event.addListener(o,"position_changed",(function(){var e=o.getPosition();r.setPosition(e),n.setCenter(c)}))}))}}))}return function(){}}),[e.loading]),Object(v.jsx)("div",{className:"detail mt-5",children:e.loading?null:Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("p",{className:"title",children:r.title}),Object(v.jsxs)("div",{className:"Main m-3",children:[Object(v.jsx)("img",{className:"img",src:r.firstimage,alt:"\ub300\ud45c\uc774\ubbf8\uc9c0"}),Object(v.jsx)("div",{className:"overView m-5 w-50",dangerouslySetInnerHTML:{__html:r.overview}})]}),Object(v.jsx)("div",{className:"title",children:"\uc0c1\uc138\uc815\ubcf4"}),Object(v.jsxs)("ul",{className:"item pt-4 pb-4",children:[Object(v.jsx)("li",{className:"list",children:"\ubb38\uc758 \ubc0f \uc548\ub0b4 \uc804\ud654\ubc88\ud638"}),Object(v.jsx)("p",{children:12==e.type?p.infocenter:14==e.type?p.infocenterculture:15==e.type?p.sponsor1tel:25==e.type?p.infocentertourcourse:28==e.type?p.infocenterleports:32==e.type?p.infocenterlodg:38==e.type?p.infocentershopping:39==e.type?p.infocenterfood:null}),Object(v.jsx)("li",{className:"list",children:"\ud648\ud398\uc774\uc9c0 \ub9c1\ud06c"}),Object(v.jsx)("p",{dangerouslySetInnerHTML:{__html:r.homepage}}),Object(v.jsx)("li",{className:"list",children:"\uc8fc\uc18c"}),Object(v.jsx)("p",{children:r.addr1}),Object(v.jsx)("li",{className:"list",children:"\uc774\uc6a9\uc2dc\uac04"}),Object(v.jsx)("p",{dangerouslySetInnerHTML:{__html:12==e.type?p.usetime:14==e.type?p.usetimeculture:15==e.type?p.playtime:25==e.type?p.taketime:28==e.type?p.usetimeleports:32==e.type?null:38==e.type?p.opentime:39==e.type?p.opentimefood:null}}),Object(v.jsx)("li",{className:"list",children:"\ud734\uc77c"}),Object(v.jsx)("p",{dangerouslySetInnerHTML:{__html:12==e.type?p.restdate:14==e.type?p.restdateculture:15==e.type||25==e.type?null:28==e.type?p.restdateleports:32==e.type?null:38==e.type?p.restdateshopping:39==e.type?p.restdatefood:null}}),Object(v.jsx)("li",{className:"list",children:"\uc8fc\ucc28 \uc5ec\ubd80"}),Object(v.jsx)("p",{dangerouslySetInnerHTML:{__html:12==e.type?p.parking:14==e.type?p.parkingculture:15==e.type||25==e.type?null:28==e.type?p.restdateleports:32==e.type?p.parkinglodging:38==e.type?p.parkingshopping:39==e.type?p.parkingfood:null}}),Object(v.jsx)("li",{className:"list",children:"\uc774\uc6a9\uc694\uae08"}),Object(v.jsx)("p",{dangerouslySetInnerHTML:{__html:12==e.type||14==e.type?p.usefee:15==e.type?p.usetimefestival:25==e.type?null:28==e.type?p.usefeeleports:(32==e.type||38==e.type||e.type,null)}})]}),Object(v.jsx)("p",{className:"title",children:"\uc704\uce58\uc9c0\ub3c4"}),Object(v.jsxs)("div",{class:"map_wrap",children:[Object(v.jsx)("div",{id:"mapWrapper",style:{width:"50%",height:"300px",float:"left"},children:Object(v.jsx)("div",{id:"map",style:{width:"100%",height:"100%"}})}),Object(v.jsx)("div",{id:"rvWrapper",style:{width:"50%",height:"300px",float:"left"},children:Object(v.jsx)("div",{id:"roadview",style:{width:"100%",height:"100%"}})})]})]})})},A=a(3),E=a(186),P=a.n(E);a(534),a(535);var T=function(e){var t=Object(u.f)(),a=Object(c.useState)(JSON.parse(localStorage.getItem("random"))),n=Object(d.a)(a,2),r=n[0],s=n[1],o=Object(c.useState)(!0),g=Object(d.a)(o,2),p=g[0],j=g[1],b=[12,14,15,25,28,32,38,39],h=["\uad00\uad11\uc9c0","\ubb38\ud654\uc2dc\uc124","\ud589\uc0ac","\uc5ec\ud589\ucf54\uc2a4","\ub808\ud3ec\uce20","\uc219\ubc15","\uc1fc\ud551","\uc74c\uc2dd\uc810"];Object(c.useEffect)((function(){if(!localStorage.getItem("random")&&!e.val){j(!0);var t=function(){var e=Object(l.a)(i.a.mark((function e(){var t,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],a=0;case 2:if(!(a<b.length)){e.next=10;break}return e.next=5,m.a.get("http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList?ServiceKey=3gPkHl5ZAmSr7PbC2%2FMp3yKYSStNo4WjExafFNjc0GzixmJdjejAnpj2Liq3ZKw18yZPSEE9TGc6PQQaJlU%2BAA%3D%3D&arrange=Q&numOfRows=1&contentTypeId=".concat(b[a],"&MobileOS=ETC&MobileApp=AppTest&_type=json"));case 5:c=e.sent,t.push(c.data.response.body.items.item);case 7:a++,e.next=2;break;case 10:localStorage.setItem("random",JSON.stringify(t)),s(t),j(!1);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t()}}),[]);var f={dots:!0,infinite:!0,speed:500,autoplay:!0,autoplaySpeed:5e3,slidesToShow:1,slidesToScroll:1,centerMode:!0,centerPadding:"0px",customPaging:function(e){return Object(v.jsxs)("div",{className:"typeList list mt-3 mb-5",children:["# ",p?null:h[e]]})}};return Object(v.jsxs)("div",{className:"random mt-3 mb-5",children:[Object(v.jsx)("h2",{className:"title mb-5",children:"\ucd94\ucc9c \uad00\uad11\uc9c0"}),p?null:Object(v.jsxs)(P.a,Object(A.a)(Object(A.a)({},f),{},{children:[Object(v.jsxs)("div",{className:"random-img-box w-100 d-flex justify-content-center",children:[Object(v.jsx)("img",{src:r[0].firstimage,className:"random-img",alt:"dd",onClick:function(){t.push("/search/detail/".concat(r[0].contentid)),e.typeCg(b[0]),e.setLoading(!0),e.contentidCg(r[0].contentid),localStorage.removeItem("result"),localStorage.removeItem("result2")}}),Object(v.jsx)("h3",{className:"titleName",children:r[0].title})]}),Object(v.jsxs)("div",{className:"random-img-box w-100 d-flex justify-content-center",children:[Object(v.jsx)("img",{src:r[1].firstimage,className:"random-img",alt:"dd",onClick:function(){t.push("/search/detail/".concat(r[1].contentid)),e.typeCg(b[1]),e.setLoading(!0),e.contentidCg(r[1].contentid),localStorage.removeItem("result"),localStorage.removeItem("result2")}}),Object(v.jsx)("h3",{className:"titleName",children:r[1].title})]}),Object(v.jsxs)("div",{className:"random-img-box w-100 d-flex justify-content-center",children:[Object(v.jsx)("img",{src:r[2].firstimage,className:"random-img",alt:"dd",onClick:function(){t.push("/search/detail/".concat(r[2].contentid)),e.typeCg(b[2]),e.setLoading(!0),e.contentidCg(r[2].contentid),localStorage.removeItem("result"),localStorage.removeItem("result2")}}),Object(v.jsx)("h3",{className:"titleName",children:r[2].title})]}),Object(v.jsxs)("div",{className:"random-img-box w-100 d-flex justify-content-center",children:[Object(v.jsx)("img",{src:r[3].firstimage,className:"random-img",alt:"dd",onClick:function(){t.push("/search/detail/".concat(r[3].contentid)),e.typeCg(b[3]),e.setLoading(!0),e.contentidCg(r[3].contentid),localStorage.removeItem("result"),localStorage.removeItem("result2")}}),Object(v.jsx)("h3",{className:"titleName",children:r[3].title})]}),Object(v.jsxs)("div",{className:"random-img-box w-100 d-flex justify-content-center",children:[Object(v.jsx)("img",{src:r[4].firstimage,className:"random-img",alt:"dd",onClick:function(){t.push("/search/detail/".concat(r[4].contentid)),e.typeCg(b[4]),e.setLoading(!0),e.contentidCg(r[4].contentid),localStorage.removeItem("result"),localStorage.removeItem("result2")}}),Object(v.jsx)("h3",{className:"titleName",children:r[4].title})]}),Object(v.jsxs)("div",{className:"random-img-box w-100 d-flex justify-content-center",children:[Object(v.jsx)("img",{src:r[5].firstimage,className:"random-img",alt:"dd",onClick:function(){t.push("/search/detail/".concat(r[5].contentid)),e.typeCg(b[5]),e.setLoading(!0),e.contentidCg(r[5].contentid),localStorage.removeItem("result"),localStorage.removeItem("result2")}}),Object(v.jsx)("h3",{className:"titleName",children:r[5].title})]}),Object(v.jsxs)("div",{className:"random-img-box w-100 d-flex justify-content-center",children:[Object(v.jsx)("img",{src:r[6].firstimage,className:"random-img",alt:"dd",onClick:function(){t.push("/search/detail/".concat(r[6].contentid)),e.typeCg(b[6]),e.setLoading(!0),e.contentidCg(r[6].contentid),localStorage.removeItem("result"),localStorage.removeItem("result2")}}),Object(v.jsx)("h3",{className:"titleName",children:r[6].title})]}),Object(v.jsxs)("div",{className:"random-img-box w-100 d-flex justify-content-center",children:[Object(v.jsx)("img",{src:r[7].firstimage,className:"random-img",alt:"dd",onClick:function(){t.push("/search/detail/".concat(r[7].contentid)),e.typeCg(b[7]),e.setLoading(!0),e.contentidCg(r[7].contentid),localStorage.removeItem("result"),localStorage.removeItem("result2")}}),Object(v.jsx)("h3",{className:"titleName",children:r[7].title})]})]}))]})};var M=function(){var e=Object(u.f)(),t=Object(c.useState)(localStorage.getItem("search")),a=Object(d.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(localStorage.getItem("val")),o=Object(d.a)(s,2),g=o[0],j=o[1],b=Object(c.useState)(),h=Object(d.a)(b,2),f=h[0],y=h[1],x=Object(c.useState)(),S=Object(d.a)(x,2),N=S[0],I=S[1],w=Object(c.useState)(12),k=Object(d.a)(w,2),A=k[0],E=k[1],P=Object(c.useState)(),M=Object(d.a)(P,2),K=M[0],J=M[1],_=Object(c.useState)(!1),Z=Object(d.a)(_,2),D=Z[0],F=Z[1],W=Object(c.useState)(localStorage.getItem("areacode")),B=Object(d.a)(W,2),G=B[0],Y=B[1],Q=Object(c.useState)(localStorage.getItem("sigungucode")),H=Object(d.a)(Q,2),U=H[0],R=H[1],q=Object(c.useState)(localStorage.getItem("category")),z=Object(d.a)(q,2),V=z[0],$=z[1],X=Object(c.useState)(),ee=Object(d.a)(X,2),te=ee[0],ae=ee[1];return Object(c.useEffect)((function(){setTimeout((function(){var t=function(){var t=Object(l.a)(i.a.mark((function t(){var a,c,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return F(!0),t.prev=1,localStorage.getItem("search")||(e.push("/"),"/"==window.location.href.split("#")[1]&&localStorage.clear()),a=localStorage.getItem("val"),t.next=7,m.a.get("http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchKeyword?ServiceKey=3gPkHl5ZAmSr7PbC2%2FMp3yKYSStNo4WjExafFNjc0GzixmJdjejAnpj2Liq3ZKw18yZPSEE9TGc6PQQaJlU%2BAA%3D%3D&keyword=".concat(a,"&MobileOS=ETC&MobileApp=AppTest&arrange=A&pageNo=1&contentTypeId=").concat(A,"&_type=json"));case 7:return c=t.sent,c.data.response.body.items.item.some((function(e){var t;if(e.addr1?t=e.addr1:e.addr2?t=e.addr2:e.title&&(t=e.title),-1!==t.indexOf(g))return localStorage.setItem("areacode",e.areacode),Y(localStorage.getItem("areacode")),localStorage.setItem("sigungucode",e.sigungucode),R(localStorage.getItem("sigungucode")),-1!==t.indexOf(g)})),t.next=12,m.a.get("http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList?ServiceKey=3gPkHl5ZAmSr7PbC2%2FMp3yKYSStNo4WjExafFNjc0GzixmJdjejAnpj2Liq3ZKw18yZPSEE9TGc6PQQaJlU%2BAA%3D%3D&contentTypeId=".concat(A,"&areaCode=").concat(G,"&sigunguCode=").concat(U,"&arrange=P&MobileOS=ETC&MobileApp=AppTest&_type=json"));case 12:n=t.sent,y(n.data.response.body.items.item),I(n.data.response.body),localStorage.setItem("category","travel"),F(!1),t.next=22;break;case 19:t.prev=19,t.t0=t.catch(1),F(!1);case 22:case"end":return t.stop()}}),t,null,[[1,19]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){cleanup}}),1e3)}),[V,g]),Object(c.useEffect)((function(){F(!0);var e=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!j){e.next=7;break}return e.next=3,m.a.get("http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList?ServiceKey=3gPkHl5ZAmSr7PbC2%2FMp3yKYSStNo4WjExafFNjc0GzixmJdjejAnpj2Liq3ZKw18yZPSEE9TGc6PQQaJlU%2BAA%3D%3D&contentTypeId=".concat(A,"&areaCode=").concat(G,"&sigunguCode=").concat(U,"&arrange=P&MobileOS=ETC&MobileApp=AppTest&_type=json"));case 3:t=e.sent,y(t.data.response.body.items.item),I(t.data.response.body),F(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[G,U,j,A]),Object(c.useEffect)((function(){if(F(!0),g&&N){for(var t=N.totalCount/N.numOfRows,a=[],c=1;c<=Math.ceil(t);c++)a.push(c);J(a),localStorage.setItem("page",JSON.stringify(a)),g&&"detail"!=window.location.href.split("/")[5]&&(localStorage.removeItem("result"),localStorage.removeItem("result2"),e.push("/search/".concat(V||"travel","/").concat(parseInt(N.pageNo)))),F(!1)}}),[G,U,A,g,V,N]),Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(p.a,{fluid:"sm",className:"container",children:Object(v.jsxs)(u.c,{children:[Object(v.jsxs)(u.a,{path:"/search/".concat(V||"travel","/:id"),children:[Object(v.jsx)(O,{input:n,inputCg:r,val:g,valCg:j,typeCg:E,categoryCg:$}),Object(v.jsx)(C,{loading:D,setLoading:F,result:f,page:K,val:g,type:A,typeCg:E,category:V,categoryCg:$,areaCode:G,sigunguCode:U,contentidCg:ae})]}),Object(v.jsxs)(u.a,{path:"/search/detail/:id",children:[Object(v.jsx)(O,{input:n,inputCg:r,val:g,valCg:j,typeCg:E,categoryCg:$}),Object(v.jsx)(L,{val:g,contentid:te,type:A,loading:D,setLoading:F})]}),Object(v.jsxs)(u.a,{path:"/",children:[Object(v.jsx)(O,{input:n,inputCg:r,val:g,valCg:j,typeCg:E,categoryCg:$}),Object(v.jsx)(T,{val:g,typeCg:E,contentidCg:ae,setLoading:F})]})]})})})},K=a(83),J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,546)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(K.a,{children:Object(v.jsx)(M,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");J?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var c=a.headers.get("content-type");404===a.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):_(t,e)}))}}(),Z()}},[[536,1,2]]]);
//# sourceMappingURL=main.0673a8d8.chunk.js.map