(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],{20:function(e){e.exports=JSON.parse('[{"id":1,"name":"Naruto","image":"./imgs/naruto.PNG"},{"id":2,"name":"Kaguya","image":"./imgs/kaguya.PNG"},{"id":3,"name":"Jiraiya","image":"./imgs/jiraiya.PNG"},{"id":4,"name":"Madara","image":"./imgs/madara.PNG"},{"id":5,"name":"Minato","image":"./imgs/minato.PNG"},{"id":6,"name":"Obito","image":"./imgs/obito.PNG"},{"id":7,"name":"Orochimaru","image":"./imgs/orochimaru.PNG"},{"id":8,"name":"Sasuke","image":"./imgs/sasuke.PNG"},{"id":9,"name":"Tsunade","image":"./imgs/tsunade.PNG"},{"id":10,"name":"MightGuy","image":"./imgs/mightguy.PNG"},{"id":11,"name":"Hiruzen","image":"./imgs/hiruzen.PNG"},{"id":12,"name":"Kakashi","image":"./imgs/kakashi.PNG"}]')},25:function(e,t,a){e.exports=a(39)},30:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(15),c=a.n(i),s=(a(30),a(5)),o=a(16),m=a(9),l=a(17),u=a(18),g=a(21),d=a(53),h=function(e){return r.a.createElement(d.a,e,e.children)},p=a(40),f=function(e){return r.a.createElement(p.a,null,e.children)},y=(a(35),function(e){var t=e.id,a=e.name,n=e.image,i=e.handlePicked;return r.a.createElement("div",null,r.a.createElement("div",{className:"card",key:t,"data-id":t,name:a,style:{backgroundImage:"url(".concat(n,")")},onClick:i}))}),E=(a(36),function(e){return r.a.createElement("div",{className:"score"},e.type,": ",e.score)}),k=(a(37),function(e){return r.a.createElement("div",{className:"default",style:e.style},e.message?r.a.createElement("p",null,e.message):r.a.createElement("p",{className:"default-msg black"},"Click an image to begin!"))}),O=a(55),b=a(56),v=a(57),P=(a(38),function(e){return r.a.createElement("div",null,r.a.createElement(O.a,Object.assign({position:"fixed"},e),r.a.createElement(b.a,null,r.a.createElement(v.a,{variant:"headline",color:"inherit",align:"center"},"Naruto Clicky Game"))))}),C=a(20);function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={characters:C,pickedChars:[],topScore:0,message:""},a.handlePicked=function(e){var t=e.target.attributes.getNamedItem("name").value;a.shuffleCharacters(),a.checkGuess(t,a.updateTopScore)},a.shuffleCharacters=function(){a.setState(a.state.characters=a.shuffleArray(a.state.characters))},a.shuffleArray=function(e){var t,a,n;for(n=e.length-1;n>0;n--)t=Math.floor(Math.random()*(n+1)),a=e[n],e[n]=e[t],e[t]=a;return e},a.checkGuess=function(e,t){var n=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a.state);n.pickedChars.includes(e)?(n.message='YOU ALREADY PICKED "'.concat(e.toUpperCase(),'"!'),n.pickedChars=[],a.setState(a.state=n)):(n.pickedChars.push(e),n.message="NICE CHOICE, USER-CHAN!",a.setState(a.state=n)),t(n,a.alertWinner)},a.updateTopScore=function(e,t){e.pickedChars.length>e.topScore&&(e.topScore++,a.setState(a.state=e)),t(e)},a.alertWinner=function(e){12===e.pickedChars.length&&(e.message="CHAMPION!",e.pickedChars=[],a.setState(a.state=e))},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(P,{style:{background:"#313133",marginBottom:"5px"}}),r.a.createElement(h,{container:!0,direction:"column",style:{margin:"0 auto",maxWidth:945}},r.a.createElement(h,{item:!0,lg:12},r.a.createElement(f,null,"GOOD CHOICE!"===this.state.message?r.a.createElement(k,{message:this.state.message,style:{color:"green"}}):r.a.createElement(k,{message:this.state.message,style:{color:"red"}}))),r.a.createElement(h,{container:!0,justify:"space-between"},r.a.createElement(h,{item:!0,lg:6,md:6,sm:12,xs:12},r.a.createElement(f,null,r.a.createElement(E,{type:"Score",score:this.state.pickedChars.length}))),r.a.createElement(h,{item:!0,lg:6,md:6,sm:12,xs:12},r.a.createElement(f,null,r.a.createElement(E,{type:"Top Score",score:this.state.topScore}))))),r.a.createElement(h,{container:!0,spacing:24,justify:"center",style:{maxWidth:945,margin:"0 auto"}},this.state.characters.map((function(t){return r.a.createElement(h,{item:!0,lg:3,md:3,sm:4,xs:6},r.a.createElement(y,{id:t.id,name:t.name,image:t.image,key:t.id,handlePicked:e.handlePicked}))}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.fc512c1f.chunk.js.map