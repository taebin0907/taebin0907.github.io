(this.webpackJsonptravel=this.webpackJsonptravel||[]).push([[0],{176:function(e,t,a){},177:function(e,t,a){},513:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(33),r=a.n(s),o=(a(176),a(15)),i=a.n(o),l=a(36),d=a(5),m=(a(177),a(28)),g=a.n(m),p=a(518),j=a(7),u=a(519),b=a(520),h=a(521),O=a(514),f=a(1);var y=function(e){var t=Object(j.f)();return Object(f.jsxs)("div",{className:"nav-bar",children:[Object(f.jsx)(u.a.Link,{className:"main-logo",href:"/",children:Object(f.jsx)("h1",{className:"p-3 logo",onClick:function(){e.valCg(""),localStorage.clear()},children:"Travel"})}),Object(f.jsxs)(b.a,{className:"inputGp w-50",children:[Object(f.jsx)(h.a,{placeholder:"\uc7a5\uc18c\ub97c \uac80\uc0c9\ud558\uc138\uc694","aria-label":"Recipient's username","aria-describedby":"basic-addon2",onChange:function(t){e.inputCg(t.target.value)},onKeyPress:function(a){13===window.event.keyCode&&(localStorage.clear(),localStorage.setItem("search",e.input),e.valCg(localStorage.getItem("search")),localStorage.setItem("val",encodeURI(e.input)),localStorage.setItem("category","travel"),e.typeCg(12),e.categoryCg(localStorage.getItem("category")),a.preventDefault(),t.push("/search/travel/1"))}}),Object(f.jsx)(O.a,{variant:"outline-secondary",className:"input-btn",onClick:function(t){localStorage.clear(),localStorage.setItem("search",e.input),e.valCg(localStorage.getItem("search")),localStorage.setItem("val",encodeURI(e.input)),localStorage.setItem("category","travel"),e.typeCg(12),e.categoryCg(localStorage.getItem("category")),t.preventDefault()},children:"\uac80\uc0c9"})]}),Object(f.jsx)("div",{className:"bin-box"})]})},v=a(522),x=a(517),S=a(515),N=a(516);var I=function(e){var t=Object(j.f)();return Object(f.jsx)(v.a.Item,{action:!0,onClick:function(){t.push("/search/detail/".concat(e.list.contentid)),e.setLoading(!0),e.contentidCg(e.list.contentid),localStorage.removeItem("result"),localStorage.removeItem("result2")},children:Object(f.jsxs)(S.a,{className:"list text-left",children:[Object(f.jsx)(N.a,{className:"img-box d-flex align-items-center",sm:3,children:null!=e.list.firstimage2?Object(f.jsx)("img",{className:"img w-100 rounded",src:e.list.firstimage2,alt:e.index}):Object(f.jsx)("div",{className:"img noImg w-100 rounded d-flex align-items-center justify-content-center font-weight-bolder",children:"No Image"})}),Object(f.jsxs)(N.a,{sm:7,className:"list-text p-3",children:[Object(f.jsx)("p",{className:"title",children:e.list.title}),Object(f.jsx)("p",{className:"address",children:e.list.addr1})]}),Object(f.jsx)(N.a,{sm:2,className:"m-auto text-center",children:Object(f.jsx)("div",{className:"btn border border-secondary",children:"\ub354\ubcf4\uae30"})})]})},e.index)};var C=function(e){var t=Object(j.g)().id,a=Object(j.f)(),n=Object(c.useState)(e.result),s=Object(d.a)(n,2),r=s[0],o=s[1],m=Object(c.useState)({start:0,end:5}),p=Object(d.a)(m,2),b=(p[0],p[1],Object(c.useState)()),h=Object(d.a)(b,2),O=(h[0],h[1],Object(c.useState)(!1)),y=Object(d.a)(O,2),S=(y[0],y[1],Object(c.useState)(!1)),N=Object(d.a)(S,2),C=N[0],k=N[1],w=Object(c.useState)(JSON.parse(localStorage.getItem("page"))),L=Object(d.a)(w,2),A=L[0],E=L[1];Object(c.useEffect)((function(){setTimeout((function(){var a=function(){var a=Object(l.a)(i.a.mark((function a(){var c;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return k(!0),a.prev=1,a.next=4,g.a.get("http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList?ServiceKey=3gPkHl5ZAmSr7PbC2%2FMp3yKYSStNo4WjExafFNjc0GzixmJdjejAnpj2Liq3ZKw18yZPSEE9TGc6PQQaJlU%2BAA%3D%3D&contentTypeId=".concat(e.type,"&areaCode=").concat(e.areaCode,"&sigunguCode=").concat(e.sigunguCode,"&arrange=P&pageNo=").concat(t,"&MobileOS=ETC&MobileApp=AppTest&_type=json"));case 4:c=a.sent,o(c.data.response.body.items.item),E(JSON.parse(localStorage.getItem("page"))),k(!1),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),console.log(a.t0);case 13:case"end":return a.stop()}}),a,null,[[1,10]])})));return function(){return a.apply(this,arguments)}}();return a(),function(){a()}}),100)}),[e.page,e.areaCode,e.sigunguCode,e.type,e.result,e.val,t]);var P=function(t,a,c){e.typeCg(t),e.categoryCg(a),c.preventDefault()};return Object(f.jsxs)("div",{className:"mainList mt-5",children:[e.val?Object(f.jsxs)(u.a,{fill:!0,variant:"tabs",defaultActiveKey:"/search/".concat(window.location.href.split("/")[5],"/"),className:"menu d-flex justify-content-around m-auto border-bottom-0",children:[Object(f.jsx)(u.a.Item,{children:Object(f.jsx)(u.a.Link,{id:"first_btn",className:"cate-list",href:"/search/travel/",onClick:function(e){localStorage.setItem("category","travel"),P(12,localStorage.getItem("category"),e)},children:"\uc5ec\ud589\uc9c0"})}),Object(f.jsx)(u.a.Item,{children:Object(f.jsx)(u.a.Link,{className:"cate-list",href:"/search/cultural/",onClick:function(e){localStorage.setItem("category","cultural"),P(14,localStorage.getItem("category"),e)},children:"\ubb38\ud654\uc2dc\uc124"})}),Object(f.jsx)(u.a.Item,{children:Object(f.jsx)(u.a.Link,{className:"cate-list",href:"/search/event/",onClick:function(e){localStorage.setItem("category","event"),P(15,localStorage.getItem("category"),e)},children:"\ud589\uc0ac"})}),Object(f.jsx)(u.a.Item,{children:Object(f.jsx)(u.a.Link,{className:"cate-list",href:"/search/travelCourse/",onClick:function(e){localStorage.setItem("category","travelCourse"),P(25,localStorage.getItem("category"),e)},children:"\uc5ec\ud589\ucf54\uc2a4"})}),Object(f.jsx)(u.a.Item,{children:Object(f.jsx)(u.a.Link,{className:"cate-list",href:"/search/sports/",onClick:function(e){localStorage.setItem("category","sports"),P(28,localStorage.getItem("category"),e)},children:"\ub808\ud3ec\uce20"})}),Object(f.jsx)(u.a.Item,{children:Object(f.jsx)(u.a.Link,{className:"cate-list",href:"/search/lodgment/",onClick:function(e){localStorage.setItem("category","lodgment"),P(32,localStorage.getItem("category"),e)},children:"\uc219\ubc15"})}),Object(f.jsx)(u.a.Item,{children:Object(f.jsx)(u.a.Link,{className:"cate-list",href:"/search/shopping/",onClick:function(e){localStorage.setItem("category","shopping"),P(38,localStorage.getItem("category"),e)},children:"\uc1fc\ud551"})}),Object(f.jsx)(u.a.Item,{children:Object(f.jsx)(u.a.Link,{className:"cate-list",to:"/search/eat/",onClick:function(e){localStorage.setItem("category","eat"),P(39,localStorage.getItem("category"),e)},children:"\uc74c\uc2dd\uc810"})})]}):null,Object(f.jsx)(v.a,{defaultActiveKey:"#link",className:"listGp w-100 p-0",children:e.loading||C?Object(f.jsx)(x.a,{className:"m-auto",animation:"border",role:"status",children:Object(f.jsx)("span",{className:"visually-hidden",children:"Loading..."})}):null!=r?Array.isArray(r)?r.map((function(t,a){return Object(f.jsx)(I,{list:t,index:a,contentidCg:e.contentidCg,setLoading:e.setLoading},a)})):Object(f.jsx)(I,{list:r,index:"0",contentidCg:e.contentidCg,setLoading:e.setLoading},"1"):Object(f.jsx)("div",{className:"text-center",children:"\uac80\uc0c9\uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."})}),Object(f.jsx)("div",{className:"list-box",children:Object(f.jsx)("ul",{className:"listNum p-0",children:null!=A?A.map((function(t,c){return Object(f.jsx)("li",{className:"num",onClick:function(){a.push("/search/".concat(e.category,"/").concat(A[c]))},children:t},c)})):null})})]})},k=a(169),w=window.kakao;var L=function(e){var t=Object(j.f)(),a=Object(c.useState)(JSON.parse(localStorage.getItem("result"))),n=Object(d.a)(a,2),s=n[0],r=n[1],o=Object(c.useState)(JSON.parse(localStorage.getItem("result2"))),m=Object(d.a)(o,2),p=m[0],u=m[1];return Object(c.useEffect)((function(){return function(){var a=Object(l.a)(i.a.mark((function a(){var c,n;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log(e.contentid),a.next=3,g.a.get("http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailCommon?ServiceKey=3gPkHl5ZAmSr7PbC2%2FMp3yKYSStNo4WjExafFNjc0GzixmJdjejAnpj2Liq3ZKw18yZPSEE9TGc6PQQaJlU%2BAA%3D%3D&contentId=".concat(e.contentid?e.contentid:JSON.parse(localStorage.getItem("result")).contentid,"&defaultYN=Y&firstImageYN=Y&addrinfoYN=Y&overviewYN=Y&mapinfoYN=Y&MobileOS=ETC&MobileApp=AppTest&_type=json"));case 3:return c=a.sent,a.next=6,g.a.get("http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailIntro?ServiceKey=3gPkHl5ZAmSr7PbC2%2FMp3yKYSStNo4WjExafFNjc0GzixmJdjejAnpj2Liq3ZKw18yZPSEE9TGc6PQQaJlU%2BAA%3D%3D&contentId=".concat(e.contentid?e.contentid:JSON.parse(localStorage.getItem("result")).contentid,"&contentTypeId=").concat(e.type?e.type:JSON.parse(localStorage.getItem("result")).contenttypeid,"&MobileOS=ETC&MobileApp=AppTest&_type=json"));case 6:n=a.sent,null!=s&&null!=p||(window.localStorage.setItem("result",JSON.stringify(c.data.response.body.items.item)),window.localStorage.setItem("result2",JSON.stringify(n.data.response.body.items.item))),r(JSON.parse(localStorage.getItem("result"))),u(JSON.parse(localStorage.getItem("result2"))),t.push("/search/detail/".concat(JSON.parse(localStorage.getItem("result")).contentid)),e.setLoading(!1);case 12:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}()(),function(){k.a}}),[]),Object(c.useEffect)((function(){if(!e.loading&&s.addr1){function t(e){var t=document.createElement("div"),a=document.createElement("div"),c=document.createElement("div");t.className="MapWalker",a.className="figure",c.className="angleBack",t.appendChild(c),t.appendChild(a);var n=new w.maps.CustomOverlay({position:e,content:t,yAnchor:1});this.walker=n,this.content=t}t.prototype.setAngle=function(e){for(var t=0;t<16;t++)if(e>22.5*t&&e<22.5*(t+1)){var a="m"+t;this.content.className=this.content.className.split(" ")[0],this.content.className+=" "+a;break}},t.prototype.setPosition=function(e){this.walker.setPosition(e)},t.prototype.setMap=function(e){this.walker.setMap(e)};var a=document.getElementById("map"),c={center:new w.maps.LatLng(33.450701,126.570667),level:5},n=new w.maps.Map(a,c);n.addOverlayMapTypeId(w.maps.MapTypeId.ROADVIEW);var r=document.getElementById("roadview"),o=new w.maps.Roadview(r),i=new w.maps.RoadviewClient;(new w.maps.services.Geocoder).addressSearch("".concat(s.addr1),(function(e,a){if(a===w.maps.services.Status.OK){var c=new w.maps.LatLng(e[0].y,e[0].x);i.getNearestPanoId(c,50,(function(e){o.setPanoId(e,c)})),n.setCenter(c);var s=null;w.maps.event.addListener(o,"init",(function(){(s=new t(c)).setMap(n),w.maps.event.addListener(o,"viewpoint_changed",(function(){var e=o.getViewpoint();s.setAngle(e.pan)})),w.maps.event.addListener(o,"position_changed",(function(){var e=o.getPosition();s.setPosition(e),n.setCenter(c)}))}))}}))}return function(){}}),[e.loading]),Object(f.jsx)("div",{className:"detail mt-5",children:e.loading?null:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("p",{className:"title",children:s.title}),Object(f.jsxs)("div",{className:"Main m-3",children:[Object(f.jsx)("img",{className:"img",src:s.firstimage,alt:"\ub300\ud45c\uc774\ubbf8\uc9c0"}),Object(f.jsx)("div",{className:"overView m-5 w-50",dangerouslySetInnerHTML:{__html:s.overview}})]}),Object(f.jsx)("div",{className:"title",children:"\uc0c1\uc138\uc815\ubcf4"}),Object(f.jsxs)("ul",{className:"item pt-4 pb-4",children:[Object(f.jsx)("li",{className:"list",children:"\ubb38\uc758 \ubc0f \uc548\ub0b4 \uc804\ud654\ubc88\ud638"}),Object(f.jsx)("p",{children:12==e.type?p.infocenter:14==e.type?p.infocenterculture:15==e.type?p.sponsor1tel:25==e.type?p.infocentertourcourse:28==e.type?p.infocenterleports:32==e.type?p.infocenterlodg:38==e.type?p.infocentershopping:39==e.type?p.infocenterfood:null}),Object(f.jsx)("li",{className:"list",children:"\ud648\ud398\uc774\uc9c0 \ub9c1\ud06c"}),Object(f.jsx)("p",{dangerouslySetInnerHTML:{__html:s.homepage}}),Object(f.jsx)("li",{className:"list",children:"\uc8fc\uc18c"}),Object(f.jsx)("p",{children:s.addr1}),Object(f.jsx)("li",{className:"list",children:"\uc774\uc6a9\uc2dc\uac04"}),Object(f.jsx)("p",{dangerouslySetInnerHTML:{__html:12==e.type?p.usetime:14==e.type?p.usetimeculture:15==e.type?p.playtime:25==e.type?p.taketime:28==e.type?p.usetimeleports:32==e.type?null:38==e.type?p.opentime:39==e.type?p.opentimefood:null}}),Object(f.jsx)("li",{className:"list",children:"\ud734\uc77c"}),Object(f.jsx)("p",{dangerouslySetInnerHTML:{__html:12==e.type?p.restdate:14==e.type?p.restdateculture:15==e.type||25==e.type?null:28==e.type?p.restdateleports:32==e.type?null:38==e.type?p.restdateshopping:39==e.type?p.restdatefood:null}}),Object(f.jsx)("li",{className:"list",children:"\uc8fc\ucc28 \uc5ec\ubd80"}),Object(f.jsx)("p",{dangerouslySetInnerHTML:{__html:12==e.type?p.parking:14==e.type?p.parkingculture:15==e.type||25==e.type?null:28==e.type?p.restdateleports:32==e.type?p.parkinglodging:38==e.type?p.parkingshopping:39==e.type?p.parkingfood:null}}),Object(f.jsx)("li",{className:"list",children:"\uc774\uc6a9\uc694\uae08"}),Object(f.jsx)("p",{dangerouslySetInnerHTML:{__html:12==e.type||14==e.type?p.usefee:15==e.type?p.usetimefestival:25==e.type?null:28==e.type?p.usefeeleports:(32==e.type||38==e.type||e.type,null)}})]}),Object(f.jsx)("p",{className:"title",children:"\uc704\uce58\uc9c0\ub3c4"}),Object(f.jsxs)("div",{class:"map_wrap",children:[Object(f.jsx)("div",{id:"mapWrapper",style:{width:"50%",height:"300px",float:"left"},children:Object(f.jsx)("div",{id:"map",style:{width:"100%",height:"100%"}})}),Object(f.jsx)("div",{id:"rvWrapper",style:{width:"50%",height:"300px",float:"left"},children:Object(f.jsx)("div",{id:"roadview",style:{width:"100%",height:"100%"}})})]})]})})},A=a(3),E=a(172),P=a.n(E);a(511),a(512);var T=function(e){var t=Object(j.f)(),a=Object(c.useState)(JSON.parse(localStorage.getItem("random"))),n=Object(d.a)(a,2),s=n[0],r=n[1],o=Object(c.useState)(!0),m=Object(d.a)(o,2),p=m[0],u=m[1],b=[12,14,15,25,28,32,38,39],h=["\uad00\uad11\uc9c0","\ubb38\ud654\uc2dc\uc124","\ud589\uc0ac","\uc5ec\ud589\ucf54\uc2a4","\ub808\ud3ec\uce20","\uc219\ubc15","\uc1fc\ud551","\uc74c\uc2dd\uc810"];Object(c.useEffect)((function(){localStorage.getItem("random")||e.val||(u(!0),function(){var e=Object(l.a)(i.a.mark((function e(){var t,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],a=0;case 2:if(!(a<b.length)){e.next=10;break}return e.next=5,g.a.get("http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList?ServiceKey=3gPkHl5ZAmSr7PbC2%2FMp3yKYSStNo4WjExafFNjc0GzixmJdjejAnpj2Liq3ZKw18yZPSEE9TGc6PQQaJlU%2BAA%3D%3D&arrange=Q&numOfRows=1&contentTypeId=".concat(b[a],"&MobileOS=ETC&MobileApp=AppTest&_type=json"));case 5:c=e.sent,t.push(c.data.response.body.items.item);case 7:a++,e.next=2;break;case 10:localStorage.setItem("random",JSON.stringify(t)),r(t),u(!1);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()())}),[]);var O={dots:!0,infinite:!0,speed:500,autoplay:!0,autoplaySpeed:5e3,slidesToShow:1,slidesToScroll:1,centerMode:!0,centerPadding:"0px",customPaging:function(e){return Object(f.jsxs)("div",{className:"typeList list mt-3 mb-5",children:["# ",p?null:h[e]]})}};return Object(f.jsxs)("div",{className:"random mt-3 mb-5",children:[Object(f.jsx)("h2",{className:"title mb-5",children:"\ucd94\ucc9c \uad00\uad11\uc9c0"}),p?null:Object(f.jsxs)(P.a,Object(A.a)(Object(A.a)({},O),{},{children:[Object(f.jsxs)("div",{className:"random-img-box w-100 d-flex justify-content-center",children:[Object(f.jsx)("img",{src:s[0].firstimage,className:"random-img",alt:"dd",onClick:function(){t.push("/search/detail/".concat(s[0].contentid)),e.typeCg(b[0]),e.setLoading(!0),e.contentidCg(s[0].contentid),localStorage.removeItem("result"),localStorage.removeItem("result2")}}),Object(f.jsx)("h3",{className:"titleName",children:s[0].title})]}),Object(f.jsxs)("div",{className:"random-img-box w-100 d-flex justify-content-center",children:[Object(f.jsx)("img",{src:s[1].firstimage,className:"random-img",alt:"dd",onClick:function(){t.push("/search/detail/".concat(s[1].contentid)),e.typeCg(b[1]),e.setLoading(!0),e.contentidCg(s[1].contentid),localStorage.removeItem("result"),localStorage.removeItem("result2")}}),Object(f.jsx)("h3",{className:"titleName",children:s[1].title})]}),Object(f.jsxs)("div",{className:"random-img-box w-100 d-flex justify-content-center",children:[Object(f.jsx)("img",{src:s[2].firstimage,className:"random-img",alt:"dd",onClick:function(){t.push("/search/detail/".concat(s[2].contentid)),e.typeCg(b[2]),e.setLoading(!0),e.contentidCg(s[2].contentid),localStorage.removeItem("result"),localStorage.removeItem("result2")}}),Object(f.jsx)("h3",{className:"titleName",children:s[2].title})]}),Object(f.jsxs)("div",{className:"random-img-box w-100 d-flex justify-content-center",children:[Object(f.jsx)("img",{src:s[3].firstimage,className:"random-img",alt:"dd",onClick:function(){t.push("/search/detail/".concat(s[3].contentid)),e.typeCg(b[3]),e.setLoading(!0),e.contentidCg(s[3].contentid),localStorage.removeItem("result"),localStorage.removeItem("result2")}}),Object(f.jsx)("h3",{className:"titleName",children:s[3].title})]}),Object(f.jsxs)("div",{className:"random-img-box w-100 d-flex justify-content-center",children:[Object(f.jsx)("img",{src:s[4].firstimage,className:"random-img",alt:"dd",onClick:function(){t.push("/search/detail/".concat(s[4].contentid)),e.typeCg(b[4]),e.setLoading(!0),e.contentidCg(s[4].contentid),localStorage.removeItem("result"),localStorage.removeItem("result2")}}),Object(f.jsx)("h3",{className:"titleName",children:s[4].title})]}),Object(f.jsxs)("div",{className:"random-img-box w-100 d-flex justify-content-center",children:[Object(f.jsx)("img",{src:s[5].firstimage,className:"random-img",alt:"dd",onClick:function(){t.push("/search/detail/".concat(s[5].contentid)),e.typeCg(b[5]),e.setLoading(!0),e.contentidCg(s[5].contentid),localStorage.removeItem("result"),localStorage.removeItem("result2")}}),Object(f.jsx)("h3",{className:"titleName",children:s[5].title})]}),Object(f.jsxs)("div",{className:"random-img-box w-100 d-flex justify-content-center",children:[Object(f.jsx)("img",{src:s[6].firstimage,className:"random-img",alt:"dd",onClick:function(){t.push("/search/detail/".concat(s[6].contentid)),e.typeCg(b[6]),e.setLoading(!0),e.contentidCg(s[6].contentid),localStorage.removeItem("result"),localStorage.removeItem("result2")}}),Object(f.jsx)("h3",{className:"titleName",children:s[6].title})]}),Object(f.jsxs)("div",{className:"random-img-box w-100 d-flex justify-content-center",children:[Object(f.jsx)("img",{src:s[7].firstimage,className:"random-img",alt:"dd",onClick:function(){t.push("/search/detail/".concat(s[7].contentid)),e.typeCg(b[7]),e.setLoading(!0),e.contentidCg(s[7].contentid),localStorage.removeItem("result"),localStorage.removeItem("result2")}}),Object(f.jsx)("h3",{className:"titleName",children:s[7].title})]})]}))]})};var M=function(){var e=Object(j.f)(),t=Object(c.useState)(localStorage.getItem("search")),a=Object(d.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)(localStorage.getItem("val")),o=Object(d.a)(r,2),m=o[0],u=o[1],b=Object(c.useState)(),h=Object(d.a)(b,2),O=h[0],v=h[1],x=Object(c.useState)(),S=Object(d.a)(x,2),N=S[0],I=S[1],k=Object(c.useState)(12),w=Object(d.a)(k,2),A=w[0],E=w[1],P=Object(c.useState)(),M=Object(d.a)(P,2),K=M[0],J=M[1],_=Object(c.useState)(!1),Z=Object(d.a)(_,2),D=Z[0],F=Z[1],G=Object(c.useState)(localStorage.getItem("areacode")),Y=Object(d.a)(G,2),B=Y[0],Q=Y[1],H=Object(c.useState)(localStorage.getItem("sigungucode")),W=Object(d.a)(H,2),U=W[0],R=W[1],q=Object(c.useState)(localStorage.getItem("category")),z=Object(d.a)(q,2),V=z[0],X=z[1],$=Object(c.useState)(),ee=Object(d.a)($,2),te=ee[0],ae=ee[1];return Object(c.useEffect)((function(){setTimeout((function(){return function(){var t=Object(l.a)(i.a.mark((function t(){var a,c,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return F(!0),t.prev=1,localStorage.getItem("search")||(e.push("/"),"/"==window.location.href.split("#")[1]&&localStorage.clear()),a=localStorage.getItem("val"),t.next=7,g.a.get("http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchKeyword?ServiceKey=3gPkHl5ZAmSr7PbC2%2FMp3yKYSStNo4WjExafFNjc0GzixmJdjejAnpj2Liq3ZKw18yZPSEE9TGc6PQQaJlU%2BAA%3D%3D&keyword=".concat(a,"&MobileOS=ETC&MobileApp=AppTest&arrange=A&pageNo=1&contentTypeId=").concat(A,"&_type=json"));case 7:return c=t.sent,c.data.response.body.items.item.some((function(e){var t;if(e.addr1?t=e.addr1:e.addr2?t=e.addr2:e.title&&(t=e.title),-1!==t.indexOf(m))return localStorage.setItem("areacode",e.areacode),Q(localStorage.getItem("areacode")),localStorage.setItem("sigungucode",e.sigungucode),R(localStorage.getItem("sigungucode")),-1!==t.indexOf(m)})),t.next=12,g.a.get("http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList?ServiceKey=3gPkHl5ZAmSr7PbC2%2FMp3yKYSStNo4WjExafFNjc0GzixmJdjejAnpj2Liq3ZKw18yZPSEE9TGc6PQQaJlU%2BAA%3D%3D&contentTypeId=".concat(A,"&areaCode=").concat(B,"&sigunguCode=").concat(U,"&arrange=P&MobileOS=ETC&MobileApp=AppTest&_type=json"));case 12:n=t.sent,v(n.data.response.body.items.item),I(n.data.response.body),localStorage.setItem("category","travel"),F(!1),t.next=22;break;case 19:t.prev=19,t.t0=t.catch(1),F(!1);case 22:case"end":return t.stop()}}),t,null,[[1,19]])})));return function(){return t.apply(this,arguments)}}()(),function(){cleanup}}),1e3)}),[V,m]),Object(c.useEffect)((function(){F(!0),function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!u){e.next=7;break}return e.next=3,g.a.get("http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList?ServiceKey=3gPkHl5ZAmSr7PbC2%2FMp3yKYSStNo4WjExafFNjc0GzixmJdjejAnpj2Liq3ZKw18yZPSEE9TGc6PQQaJlU%2BAA%3D%3D&contentTypeId=".concat(A,"&areaCode=").concat(B,"&sigunguCode=").concat(U,"&arrange=P&MobileOS=ETC&MobileApp=AppTest&_type=json"));case 3:t=e.sent,v(t.data.response.body.items.item),I(t.data.response.body),F(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[B,U,u,A]),Object(c.useEffect)((function(){if(F(!0),m&&N){for(var t=N.totalCount/N.numOfRows,a=[],c=1;c<=Math.ceil(t);c++)a.push(c);J(a),localStorage.setItem("page",JSON.stringify(a)),m&&"detail"!=window.location.href.split("/")[5]&&(localStorage.removeItem("result"),localStorage.removeItem("result2"),e.push("/search/".concat(V||"travel","/").concat(parseInt(N.pageNo)))),F(!1)}}),[B,U,A,m,V,N]),Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(p.a,{fluid:"sm",className:"container",children:Object(f.jsxs)(j.c,{children:[Object(f.jsxs)(j.a,{path:"/search/".concat(V||"travel","/:id"),children:[Object(f.jsx)(y,{input:n,inputCg:s,val:m,valCg:u,typeCg:E,categoryCg:X}),Object(f.jsx)(C,{loading:D,setLoading:F,result:O,page:K,val:m,type:A,typeCg:E,category:V,categoryCg:X,areaCode:B,sigunguCode:U,contentidCg:ae})]}),Object(f.jsxs)(j.a,{path:"/search/detail/:id",children:[Object(f.jsx)(y,{input:n,inputCg:s,val:m,valCg:u,typeCg:E,categoryCg:X}),Object(f.jsx)(L,{val:m,contentid:te,type:A,loading:D,setLoading:F})]}),Object(f.jsxs)(j.a,{path:"/",children:[Object(f.jsx)(y,{input:n,inputCg:s,val:m,valCg:u,typeCg:E,categoryCg:X}),Object(f.jsx)(T,{val:m,typeCg:E,contentidCg:ae,setLoading:F})]})]})})})},K=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,523)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))},J=a(73);r.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(J.a,{children:Object(f.jsx)(M,{})})}),document.getElementById("root")),K()}},[[513,1,2]]]);
//# sourceMappingURL=main.04ec365c.chunk.js.map