(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{160:function(e,t,r){"use strict";r.r(t);r(102),r(19),r(40),r(24);var a=r(2),s=r(75),i=r(28),n=r(177);var o=new class{searchList(e){return(e=Object(a.a)({},e)).title||delete e.title,Object(n.a)("get","/ajax/photos",e).then(e=>(e.listItems.forEach(e=>{e.coverUrl=InitEnv.clientPublicPath+e.coverUrl}),e))}getItemDetail(e){return Object(n.a)("get","/ajax/photos/:id",{id:e}).then(e=>(e.coverUrl=InitEnv.clientPublicPath+e.coverUrl,e.picList=e.picList.map(e=>InitEnv.clientPublicPath+e),e))}hitItem(e){return Object(n.a)("post","/ajax/photos/:id/hit",{id:e})}},c=r(178);function l(e){var t,r=u(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var a={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(a.decorators=e.decorators),"field"===e.kind&&(a.initializer=e.value),a}function p(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function m(e){return e.decorators&&e.decorators.length}function h(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function d(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function u(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}let f=function(e,t,r,a){var i=function(){var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(r){t.forEach(function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)},this)},this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach(function(a){t.forEach(function(t){var s=t.placement;if(t.kind===a&&("static"===s||"prototype"===s)){var i="static"===s?e:r;this.defineClassElement(i,t)}},this)},this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var a=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===a?void 0:a.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],a=[],s={static:[],prototype:[],own:[]};if(e.forEach(function(e){this.addElementPlacement(e,s)},this),e.forEach(function(e){if(!m(e))return r.push(e);var t=this.decorateElement(e,s);r.push(t.element),r.push.apply(r,t.extras),a.push.apply(a,t.finishers)},this),!t)return{elements:r,finishers:a};var i=this.decorateConstructor(r,t);return a.push.apply(a,i.finishers),i.finishers=a,i},addElementPlacement:function(e,t,r){var a=t[e.placement];if(!r&&-1!==a.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");a.push(e.key)},decorateElement:function(e,t){for(var r=[],a=[],s=e.decorators,i=s.length-1;i>=0;i--){var n=t[e.placement];n.splice(n.indexOf(e.key),1);var o=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,s[i])(o)||o);e=c.element,this.addElementPlacement(e,t),c.finisher&&a.push(c.finisher);var l=c.extras;if(l){for(var p=0;p<l.length;p++)this.addElementPlacement(l[p],t);r.push.apply(r,l)}}return{element:e,finishers:a,extras:r}},decorateConstructor:function(e,t){for(var r=[],a=t.length-1;a>=0;a--){var s=this.fromClassDescriptor(e),i=this.toClassDescriptor((0,t[a])(s)||s);if(void 0!==i.finisher&&r.push(i.finisher),void 0!==i.elements){e=i.elements;for(var n=0;n<e.length-1;n++)for(var o=n+1;o<e.length;o++)if(e[n].key===e[o].key&&e[n].placement===e[o].placement)throw new TypeError("Duplicated element ("+e[n].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){if(void 0!==e)return Object(s.a)(e).map(function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t},this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=u(e.key),a=String(e.placement);if("static"!==a&&"prototype"!==a&&"own"!==a)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+a+'"');var s=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var i={kind:t,key:r,placement:a,descriptor:Object.assign({},s)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(s,"get","The property descriptor of a field descriptor"),this.disallowProperty(s,"set","The property descriptor of a field descriptor"),this.disallowProperty(s,"value","The property descriptor of a field descriptor"),i.initializer=e.initializer),i},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),r=d(e,"finisher"),a=this.toElementDescriptors(e.extras);return{element:t,finisher:r,extras:a}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=d(e,"finisher"),a=this.toElementDescriptors(e.elements);return{elements:a,finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var a=(0,t[r])(e);if(void 0!==a){if("function"!=typeof a)throw new TypeError("Finishers must return a constructor.");e=a}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}();if(a)for(var n=0;n<a.length;n++)i=a[n](i);var o=t(function(e){i.initializeInstanceElements(e,c.elements)},r),c=i.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===i.key&&e.placement===i.placement},a=0;a<e.length;a++){var s,i=e[a];if("method"===i.kind&&(s=t.find(r)))if(h(i.descriptor)||h(s.descriptor)){if(m(i)||m(s))throw new ReferenceError("Duplicated methods ("+i.key+") can't be decorated.");s.descriptor=i.descriptor}else{if(m(i)){if(m(s))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+i.key+").");s.decorators=i.decorators}p(i,s)}else t.push(i)}return t}(o.d.map(l)),e);return i.initializeClassElements(o.F,c.elements),i.runClassFinishers(o.F,c.finishers)}(null,function(e,t){return{F:class extends t{constructor(){super(...arguments),e(this)}},d:[{kind:"method",decorators:[Object(i.e)()],key:"searchList",value:async function(e){void 0===e&&(e={});const t=Object(a.a)({},this.state.routeParams.listSearch,e),{listItems:r,listSummary:s}=await o.searchList(t),i=this.rootState.route.data.params.photos._listKey,n=Object(a.a)({},this.state.routeParams,{listSearch:t,_listKey:i});this.updateState({routeParams:n,listItems:r,listSummary:s})}},{kind:"method",decorators:[Object(i.e)()],key:"getItemDetail",value:async function(e){const[t]=await Promise.all([o.getItemDetail(e),o.hitItem(e)]),r=this.rootState.route.data.params.photos._detailKey,s=Object(a.a)({},this.state.routeParams,{itemId:e,_detailKey:r});this.updateState({routeParams:s,itemDetail:t})}},{kind:"method",decorators:[Object(i.e)(null)],key:"this/"+i.a.M_INIT+","+i.a.F_ROUTE_CHANGE,value:async function(){if(this.rootState.route.data.views.photos){const{views:e,params:{photos:t}}=this.rootState.route.data,r=this.state.routeParams,a=t;e.photos.List?this.state.listItems&&r._listKey===a._listKey&&Object(c.c)(r.listSearch,a.listSearch)||await this.dispatch(this.actions.searchList(a.listSearch)):e.photos.Details&&(this.state.itemDetail&&r._detailKey===a._detailKey&&this.state.itemDetail.id===a.itemId||await this.dispatch(this.actions.getItemDetail(a.itemId)))}}}]}},i.b);r(34),r(445);var v=r(447),y=r.n(v),E=(r(186),r(191)),b=r.n(E),g=r(20),w=(r(451),r(47)),k=r(205),S=r(74),O=r(163),P=r(49),D=r(172),C=r(0),j=r.n(C),I=r(33),N=r(27);const x=Object(N.b)(S.b,"comments","Main");var T=Object(w.b)(e=>{const t=e.photos;return{routeParams:t.routeParams,showComment:!!e.route.data.views.comments,itemDetail:t.itemDetail}})(class extends j.a.PureComponent{constructor(){super(...arguments),Object(g.a)(this,"state",{moreDetail:!1}),Object(g.a)(this,"onMoreRemark",()=>{this.setState({moreDetail:!this.state.moreDetail})}),Object(g.a)(this,"onShowComment",()=>{const{itemDetail:e,showComment:t}=this.props,r=e.id;t?P.c.push({paths:[P.a.appMain,P.a.photosDetails],params:{photos:Object(a.a)({},this.props.routeParams,{itemId:r})}}):P.c.push({paths:[P.a.appMain,P.a.photosDetails,P.a.commentsMain,P.a.commentsList],params:{photos:Object(a.a)({},this.props.routeParams),comments:{articleType:"photos",articleId:r}}})}),Object(g.a)(this,"onClose",()=>{P.c.push({paths:[P.a.appMain,P.a.photosList],params:{photos:Object(a.a)({},this.props.routeParams,{itemId:""})}})})}static getDerivedStateFromProps(e){return e.itemDetail?null:{moreDetail:!1}}render(){const{itemDetail:e,showComment:t}=this.props,{moreDetail:r}=this.state;return e?j.a.createElement("div",{className:D.a.photos+"-Details g-details g-doc-width g-modal g-enter-in"},j.a.createElement("div",{className:"subject"},j.a.createElement("h2",null,e.title),j.a.createElement("span",{className:"close-button",onClick:this.onClose},j.a.createElement(b.a,{size:"md",type:"cross-circle"}))),j.a.createElement("div",{className:"remark"+(r?" on":""),onClick:this.onMoreRemark},e.remark),j.a.createElement("div",{className:"content"},j.a.createElement(y.a,{className:"player",autoplay:!1,infinite:!0},e.picList.map(e=>j.a.createElement("div",{className:"g-pre-img",key:e},j.a.createElement("div",{className:"pic",style:{backgroundImage:"url("+e+")"}}))))),j.a.createElement("div",{className:"comment-bar",onClick:this.onShowComment},j.a.createElement("span",null,j.a.createElement(k.b,{type:k.a.HEART}),j.a.createElement("br",null),e.hot),j.a.createElement("span",null,j.a.createElement(k.b,{type:k.a.MESSAGE}),j.a.createElement("br",null),e.comments)),j.a.createElement("div",{className:"comments-panel"+(t?" on":"")},j.a.createElement("div",{onClick:this.onShowComment,className:"mask"}),j.a.createElement("div",{className:"dialog"},j.a.createElement(O.d,null,j.a.createElement(O.b,{exact:!1,path:"/:articleType/:articleId/comments",component:x}))))):null}fadeIn(){const e=Object(I.findDOMNode)(this);e&&e.className.indexOf("g-enter-in")>-1&&setTimeout(()=>{e.className=e.className.replace("g-enter-in","")},0)}componentDidUpdate(){this.fadeIn()}componentDidMount(){this.fadeIn()}}),A=(r(192),r(196)),L=r.n(A),z=(r(452),r(214));let M=0;var R=Object(w.b)(e=>{const t=e.photos;return{showSearch:!!e.app.showSearch,routeData:e.route.data,listSearch:t.routeParams.listSearch,listItems:t.listItems,listSummary:t.listSummary}})(class extends j.a.PureComponent{constructor(){super(...arguments),Object(g.a)(this,"onPageChange",e=>{P.c.push({extend:this.props.routeData,params:{photos:{listSearch:{page:e}}}})}),Object(g.a)(this,"onSearch",e=>{P.c.push({extend:this.props.routeData,params:{photos:{listSearch:{title:e,page:1}}}})}),Object(g.a)(this,"onSearchClose",()=>{this.props.dispatch(S.a.app.putShowSearch(!1)),this.props.listSearch.title&&this.onSearch("")}),Object(g.a)(this,"onItemClick",e=>{M=window.pageYOffset;const{routeData:t}=this.props,r=t.paths.slice(0,-1).concat(P.a.photosDetails);P.c.push({extend:t,paths:r,params:{photos:{itemId:e}}})})}render(){const{showSearch:e,listSearch:t,listItems:r,listSummary:a}=this.props;return t&&r?j.a.createElement("div",{className:D.a.photos+"-List g-pic-list"},j.a.createElement(z.a,{value:t.title,onClose:this.onSearchClose,onSearch:this.onSearch,visible:e}),j.a.createElement("div",{className:"list-items"},r.map(e=>j.a.createElement("div",{onClick:()=>this.onItemClick(e.id),key:e.id,className:"g-pre-img"},j.a.createElement("div",{style:{backgroundImage:"url("+e.coverUrl+")"}},j.a.createElement("h5",{className:"title"},e.title),j.a.createElement("div",{className:"listImg"}),j.a.createElement("div",{className:"props"},j.a.createElement(k.b,{type:k.a.LOCATION})," ",e.departure,j.a.createElement(k.b,{type:k.a.HEART})," ",e.type),j.a.createElement("div",{className:"desc"},j.a.createElement("span",{className:"hot"},"人气(",j.a.createElement("strong",null,e.hot),")"),j.a.createElement("em",{className:"price"},j.a.createElement("span",{className:"unit"},"￥"),e.price)))))),a&&j.a.createElement("div",{className:"g-pagination"},j.a.createElement(L.a,{current:a.page,total:a.totalPages,onChange:this.onPageChange}))):null}componentDidMount(){this.scroll()}componentDidUpdate(){this.scroll()}scroll(){window.scrollTo(0,M),M=0}});t.default=Object(N.a)("photos",{},f,{Details:T,List:R})},172:function(e,t,r){"use strict";let a;r.d(t,"a",function(){return a}),function(e){e.app="app",e.comments="comments",e.photos="photos",e.videos="videos",e.messages="messages"}(a||(a={}))},175:function(e,t,r){"use strict";r.d(t,"a",function(){return a}),r.d(t,"b",function(){return s});class a extends Error{constructor(e,t,r){super(e),this.message=e,this.code=t,this.detail=r}}class s extends a{constructor(){super("请登录","401")}}},177:function(e,t,r){"use strict";r.d(t,"a",function(){return n});r(50),r(48),r(34);var a=r(209),s=r.n(a),i=r(175);function n(e,t,r,a){void 0===r&&(r={}),void 0===a&&(a={}),t=t.replace(/:\w+/g,e=>{const t=e.substr(1);if(r[t]){const e=r[t];return delete r[t],encodeURIComponent(e)}return""}),Object.keys(InitEnv.apiServerPath).some(e=>{const r=new RegExp(e);return!!r.test(t)&&(t=t.replace(r,InitEnv.apiServerPath[e]),!0)});const i={method:e,url:t,params:r,data:a};return s.a.request(i).then(e=>e.data)}s.a.interceptors.response.use(e=>e,e=>{!function(e){const t=e.response?e.response.status:0,r=e.response?e.response.data:"",a=r&&r.message?r.message:"failed to call "+e.config.url;throw new i.a(a,t.toString(),r)}(e)})},178:function(e,t,r){"use strict";r.d(t,"a",function(){return s}),r.d(t,"d",function(){return i}),r.d(t,"c",function(){return n}),r.d(t,"b",function(){return o});r(19),r(48),r(24);var a=r(2);function s(e){const t=Object(a.a)({},e);for(var r=arguments.length,s=new Array(r>1?r-1:0),i=1;i<r;i++)s[i-1]=arguments[i];const n=s.reduce((r,a)=>(r[a]=e[a],delete t[a],r),{});return n.$=t,n}function i(){return Math.random().toString(16).substr(2)}function n(e,t){if(e===t)return!0;if(typeof e!=typeof t||"object"!=typeof e)return!1;{const r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(const a of r)if(!n(e[a],t[a]))return!1;return!0}}function o(e,t,r){for(let a=0,s=r.length;a<s;a++){const s=r[a];if(!n(e[s],t[s]))return!1}return!0}},205:function(e,t,r){"use strict";r.d(t,"a",function(){return o}),r.d(t,"b",function(){return c});var a=r(3),s=r(210),i=r(0),n=r.n(i);let o;!function(e){e.LIVE="icon-live",e.MESSAGE="icon-message",e.PICTURE="icon-picture",e.PLAY_CIRCLE="icon-play-circle",e.RELOAD="icon-reload",e.LOCATION="icon-location",e.HEART="icon-heart"}(o||(o={}));class c extends n.a.PureComponent{render(){const e=this.props,{type:t,text:r,textPosition:i,className:o}=e,c=Object(s.a)(e,["type","text","textPosition","className"]);return r?"left"===i?n.a.createElement("div",Object(a.a)({className:"iconfont-with-text-on-left "+(o||"")},c),n.a.createElement("span",null,r),n.a.createElement("i",Object(a.a)({className:"iconfont "+t},c))):n.a.createElement("div",Object(a.a)({className:"iconfont-with-text-on-right "+(o||"")},c),n.a.createElement("i",Object(a.a)({className:"iconfont "+t},c)),n.a.createElement("span",null,r)):n.a.createElement("i",Object(a.a)({className:"iconfont "+t+" "+(o||"")},c))}}},214:function(e,t,r){"use strict";r(19),r(24),r(179);var a=r(180),s=r.n(a),i=(r(211),r(212)),n=r.n(i),o=(r(185),r(187)),c=r.n(o),l=r(20),p=(r(215),r(0)),m=r.n(p);t.a=class extends m.a.PureComponent{constructor(){super(...arguments),Object(l.a)(this,"state",{value:""}),Object(l.a)(this,"onSubmit",()=>{const e=this.state.value;e?this.props.onSearch(e):c.a.info("请输入搜索关键字")}),Object(l.a)(this,"onChange",e=>{this.setState({value:e})})}static getDerivedStateFromProps(e,t){return e!==t.props?{props:e,value:e.value}:null}render(){const{visible:e}=this.props;return m.a.createElement("div",{className:(e?"on ":"")+"comp-Search"},m.a.createElement("div",{className:"wrap"},m.a.createElement(n.a,{clear:!0,onChange:this.onChange,placeholder:"关键字...",value:this.state.value}),m.a.createElement(s.a,{size:"small",type:"primary",onClick:this.onSubmit},"搜索"),m.a.createElement(s.a,{onClick:this.props.onClose,size:"small"},"取消")))}}},215:function(e,t,r){},451:function(e,t,r){},452:function(e,t,r){}}]);