(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{161:function(e,t,r){"use strict";r.d(t,"a",function(){return a}),r.d(t,"b",function(){return i});class a{constructor(e,t,r){this.code=e,this.message=t,this.detail=r}}class i extends a{constructor(){super("请登录","401")}}},163:function(e,t,r){"use strict";r.d(t,"a",function(){return n});r(68),r(67),r(45);var a=r(195),i=r.n(a),s=r(161);function n(e,t,r,a){void 0===r&&(r={}),void 0===a&&(a={}),t=t.replace(/:\w+/g,e=>{const t=e.substr(1);if(r[t]){const e=r[t];return delete r[t],encodeURIComponent(e)}return""}),Object.keys(initEnv.apiServerPath).some(e=>{const r=new RegExp(e);return!!r.test(t)&&(t=t.replace(r,initEnv.apiServerPath[e]),!0)});const s={method:e,url:t,params:r,data:a};return i.a.request(s).then(e=>e.data)}i.a.interceptors.response.use(e=>e,e=>{!function(e){const t=e.response?e.response.status:0,r=e.response?e.response.data:"",a=r&&r.message?r.message:"failed to call "+e.config.url;throw new s.a(a,t.toString(),r)}(e)})},164:function(e,t,r){"use strict";r.d(t,"a",function(){return i}),r.d(t,"d",function(){return s}),r.d(t,"c",function(){return n}),r.d(t,"b",function(){return o});r(28),r(67),r(35);var a=r(4);function i(e){const t=Object(a.a)({},e);for(var r=arguments.length,i=new Array(r>1?r-1:0),s=1;s<r;s++)i[s-1]=arguments[s];const n=i.reduce((r,a)=>(r[a]=e[a],delete t[a],r),{});return n.$=t,n}function s(){return Math.random().toString(16).substr(2)}function n(e,t){if(e===t)return!0;if(typeof e!=typeof t||"object"!=typeof e)return!1;{const r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(const a of r)if(!n(e[a],t[a]))return!1;return!0}}function o(e,t,r){for(let a=0,i=r.length;a<i;a++){const i=r[a];if(!n(e[i],t[i]))return!1}return!0}},191:function(e,t,r){"use strict";r.d(t,"a",function(){return o}),r.d(t,"b",function(){return c});var a=r(2),i=r(196),s=r(0),n=r.n(s);let o;!function(e){e.LIVE="icon-live",e.MESSAGE="icon-message",e.PICTURE="icon-picture",e.PLAY_CIRCLE="icon-play-circle",e.RELOAD="icon-reload",e.LOCATION="icon-location",e.HEART="icon-heart"}(o||(o={}));class c extends n.a.PureComponent{render(){const e=this.props,{type:t,text:r,textPosition:s,className:o}=e,c=Object(i.a)(e,["type","text","textPosition","className"]);return r?"left"===s?n.a.createElement("div",Object(a.a)({className:"iconfont-with-text-on-left "+(o||"")},c),n.a.createElement("span",null,r),n.a.createElement("i",Object(a.a)({className:"iconfont "+t},c))):n.a.createElement("div",Object(a.a)({className:"iconfont-with-text-on-right "+(o||"")},c),n.a.createElement("i",Object(a.a)({className:"iconfont "+t},c)),n.a.createElement("span",null,r)):n.a.createElement("i",Object(a.a)({className:"iconfont "+t+" "+(o||"")},c))}}},200:function(e,t,r){"use strict";r(28),r(35),r(165);var a=r(166),i=r.n(a),s=(r(197),r(198)),n=r.n(s),o=(r(171),r(173)),c=r.n(o),l=r(8),m=(r(201),r(0)),p=r.n(m);t.a=class extends p.a.PureComponent{constructor(){super(...arguments),Object(l.a)(this,"state",{value:""}),Object(l.a)(this,"onSubmit",()=>{const e=this.state.value;e?this.props.onSearch(e):c.a.info("请输入搜索关键字")}),Object(l.a)(this,"onChange",e=>{this.setState({value:e})})}static getDerivedStateFromProps(e,t){return e!==t.props?{props:e,value:e.value}:null}render(){const{visible:e}=this.props;return p.a.createElement("div",{className:(e?"on ":"")+"comp-Search"},p.a.createElement("div",{className:"wrap"},p.a.createElement(n.a,{clear:!0,onChange:this.onChange,placeholder:"关键字...",value:this.state.value}),p.a.createElement(i.a,{size:"small",type:"primary",onClick:this.onSubmit},"搜索"),p.a.createElement(i.a,{onClick:this.props.onClose,size:"small"},"取消")))}}},201:function(e,t,r){},437:function(e,t,r){},438:function(e,t,r){},449:function(e,t,r){"use strict";r.r(t);r(96),r(28),r(36),r(35);var a=r(4),i=r(69),s=r(12),n=r(163);var o=new class{searchList(e){return(e=Object(a.a)({},e)).title||delete e.title,Object(n.a)("get","/ajax/photos",e).then(e=>(e.listItems.forEach(e=>{e.coverUrl=initEnv.clientPublicPath+e.coverUrl}),e))}getItemDetail(e){return Object(n.a)("get","/ajax/photos/:id",{id:e}).then(e=>(e.coverUrl=initEnv.clientPublicPath+e.coverUrl,e.picList=e.picList.map(e=>initEnv.clientPublicPath+e),e))}hitItem(e){return Object(n.a)("post","/ajax/photos/:id/hit",{id:e})}},c=r(164);function l(e){var t,r=u(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var a={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(a.decorators=e.decorators),"field"===e.kind&&(a.initializer=e.value),a}function m(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function p(e){return e.decorators&&e.decorators.length}function h(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function d(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function u(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}let f=function(e,t,r,a){var s=function(){(function(){return e});var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(r){t.forEach(function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)},this)},this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach(function(a){t.forEach(function(t){var i=t.placement;if(t.kind===a&&("static"===i||"prototype"===i)){var s="static"===i?e:r;this.defineClassElement(s,t)}},this)},this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var a=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===a?void 0:a.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],a=[],i={static:[],prototype:[],own:[]};if(e.forEach(function(e){this.addElementPlacement(e,i)},this),e.forEach(function(e){if(!p(e))return r.push(e);var t=this.decorateElement(e,i);r.push(t.element),r.push.apply(r,t.extras),a.push.apply(a,t.finishers)},this),!t)return{elements:r,finishers:a};var s=this.decorateConstructor(r,t);return a.push.apply(a,s.finishers),s.finishers=a,s},addElementPlacement:function(e,t,r){var a=t[e.placement];if(!r&&-1!==a.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");a.push(e.key)},decorateElement:function(e,t){for(var r=[],a=[],i=e.decorators,s=i.length-1;s>=0;s--){var n=t[e.placement];n.splice(n.indexOf(e.key),1);var o=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,i[s])(o)||o);e=c.element,this.addElementPlacement(e,t),c.finisher&&a.push(c.finisher);var l=c.extras;if(l){for(var m=0;m<l.length;m++)this.addElementPlacement(l[m],t);r.push.apply(r,l)}}return{element:e,finishers:a,extras:r}},decorateConstructor:function(e,t){for(var r=[],a=t.length-1;a>=0;a--){var i=this.fromClassDescriptor(e),s=this.toClassDescriptor((0,t[a])(i)||i);if(void 0!==s.finisher&&r.push(s.finisher),void 0!==s.elements){e=s.elements;for(var n=0;n<e.length-1;n++)for(var o=n+1;o<e.length;o++)if(e[n].key===e[o].key&&e[n].placement===e[o].placement)throw new TypeError("Duplicated element ("+e[n].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){if(void 0!==e)return Object(i.a)(e).map(function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t},this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=u(e.key),a=String(e.placement);if("static"!==a&&"prototype"!==a&&"own"!==a)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+a+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var s={kind:t,key:r,placement:a,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),s.initializer=e.initializer),s},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),r=d(e,"finisher"),a=this.toElementDescriptors(e.extras);return{element:t,finisher:r,extras:a}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=d(e,"finisher"),a=this.toElementDescriptors(e.elements);return{elements:a,finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var a=(0,t[r])(e);if(void 0!==a){if("function"!=typeof a)throw new TypeError("Finishers must return a constructor.");e=a}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}();if(a)for(var n=0;n<a.length;n++)s=a[n](s);var o=t(function(e){s.initializeInstanceElements(e,c.elements)},r),c=s.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===s.key&&e.placement===s.placement},a=0;a<e.length;a++){var i,s=e[a];if("method"===s.kind&&(i=t.find(r)))if(h(s.descriptor)||h(i.descriptor)){if(p(s)||p(i))throw new ReferenceError("Duplicated methods ("+s.key+") can't be decorated.");i.descriptor=s.descriptor}else{if(p(s)){if(p(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+s.key+").");i.decorators=s.decorators}m(s,i)}else t.push(s)}return t}(o.d.map(l)),e);return s.initializeClassElements(o.F,c.elements),s.runClassFinishers(o.F,c.finishers)}(null,function(e,t){return{F:class extends t{constructor(){super(...arguments),e(this)}},d:[{kind:"method",decorators:[Object(s.e)()],key:"searchList",value:async function(e){void 0===e&&(e={});const t=Object(a.a)({},this.state.routeParams.listSearch,e),{listItems:r,listSummary:i}=await o.searchList(t),s=this.rootState.route.data.params.photos._listKey,n=Object(a.a)({},this.state.routeParams,{listSearch:t,_listKey:s});this.updateState({routeParams:n,listItems:r,listSummary:i})}},{kind:"method",decorators:[Object(s.e)()],key:"getItemDetail",value:async function(e){const[t]=await Promise.all([o.getItemDetail(e),o.hitItem(e)]),r=this.rootState.route.data.params.photos._detailKey,i=Object(a.a)({},this.state.routeParams,{itemId:e,_detailKey:r});this.updateState({routeParams:i,itemDetail:t})}},{kind:"method",decorators:[Object(s.e)(null)],key:"this/"+s.a.MInit+","+s.a.RouteChange,value:async function(){if(this.rootState.route.data.views.photos){const{views:e,params:{photos:t}}=this.rootState.route.data,r=this.state.routeParams,a=t;e.photos.List?this.state.listItems&&r._listKey===a._listKey&&Object(c.c)(r.listSearch,a.listSearch)||await this.dispatch(this.actions.searchList(a.listSearch)):e.photos.Details&&(this.state.itemDetail&&r._detailKey===a._detailKey&&this.state.itemDetail.id===a.itemId||await this.dispatch(this.actions.getItemDetail(a.itemId)))}}}]}},s.b);r(45),r(431);var v=r(433),y=r.n(v),E=(r(172),r(177)),b=r.n(E),w=r(8),g=(r(437),r(191)),k=r(150),S=r(0),P=r.n(S),C=r(29);const D=loadView(moduleGetter,"comments","Main");var O=reduxConnect(e=>{const t=e.photos;return{routeParams:t.routeParams,showComment:!!e.route.data.views.comments,itemDetail:t.itemDetail}})(class extends P.a.PureComponent{constructor(){super(...arguments),Object(w.a)(this,"state",{moreDetail:!1}),Object(w.a)(this,"onMoreRemark",()=>{this.setState({moreDetail:!this.state.moreDetail})}),Object(w.a)(this,"onShowComment",()=>{const{itemDetail:e,showComment:t}=this.props,r=e.id;t?historyActions.push({paths:[viewNames.appMain,viewNames.photosDetails],params:{photos:Object(a.a)({},this.props.routeParams,{itemId:r})}}):historyActions.push({paths:[viewNames.appMain,viewNames.photosDetails,viewNames.commentsMain,viewNames.commentsList],params:{photos:Object(a.a)({},this.props.routeParams),comments:{articleType:"photos",articleId:r}}})}),Object(w.a)(this,"onClose",()=>{historyActions.push({paths:[viewNames.appMain,viewNames.photosList],params:{photos:Object(a.a)({},this.props.routeParams,{itemId:""})}})})}static getDerivedStateFromProps(e){return e.itemDetail?null:{moreDetail:!1}}render(){const{itemDetail:e,showComment:t}=this.props,{moreDetail:r}=this.state;return e?P.a.createElement("div",{className:moduleNames.photos+"-Details g-details g-doc-width g-modal g-enter-in"},P.a.createElement("div",{className:"subject"},P.a.createElement("h2",null,e.title),P.a.createElement("span",{className:"close-button",onClick:this.onClose},P.a.createElement(b.a,{size:"md",type:"cross-circle"}))),P.a.createElement("div",{className:"remark"+(r?" on":""),onClick:this.onMoreRemark},e.remark),P.a.createElement("div",{className:"content"},P.a.createElement(y.a,{className:"player",autoplay:!1,infinite:!0},e.picList.map(e=>P.a.createElement("div",{className:"g-pre-img",key:e},P.a.createElement("div",{className:"pic",style:{backgroundImage:"url("+e+")"}}))))),P.a.createElement("div",{className:"comment-bar",onClick:this.onShowComment},P.a.createElement("span",null,P.a.createElement(g.b,{type:g.a.HEART}),P.a.createElement("br",null),e.hot),P.a.createElement("span",null,P.a.createElement(g.b,{type:g.a.MESSAGE}),P.a.createElement("br",null),e.comments)),P.a.createElement("div",{className:"comments-panel"+(t?" on":"")},P.a.createElement("div",{onClick:this.onShowComment,className:"mask"}),P.a.createElement("div",{className:"dialog"},P.a.createElement(k.e,null,P.a.createElement(k.b,{exact:!1,path:"/:articleType/:articleId/comments",component:D}))))):null}fadeIn(){const e=Object(C.findDOMNode)(this);e&&e.className.indexOf("g-enter-in")>-1&&setTimeout(()=>{e.className=e.className.replace("g-enter-in","")},0)}componentDidUpdate(){this.fadeIn()}componentDidMount(){this.fadeIn()}}),N=(r(178),r(182)),j=r.n(N),I=(r(438),r(200));let x=0;var A=reduxConnect(e=>{const t=e.photos;return{showSearch:!!e.app.showSearch,routeData:e.route.data,listSearch:t.routeParams.listSearch,listItems:t.listItems,listSummary:t.listSummary}})(class extends P.a.PureComponent{constructor(){super(...arguments),Object(w.a)(this,"onPageChange",e=>{historyActions.push({extend:this.props.routeData,params:{photos:{listSearch:{page:e}}}})}),Object(w.a)(this,"onSearch",e=>{historyActions.push({extend:this.props.routeData,params:{photos:{listSearch:{title:e,page:1}}}})}),Object(w.a)(this,"onSearchClose",()=>{this.props.dispatch(actions.app.putShowSearch(!1)),this.props.listSearch.title&&this.onSearch("")}),Object(w.a)(this,"onItemClick",e=>{x=window.pageYOffset;const{routeData:t}=this.props,r=t.paths.slice(0,-1).concat(viewNames.photosDetails);historyActions.push({extend:t,paths:r,params:{photos:{itemId:e}}})})}render(){const{showSearch:e,listSearch:t,listItems:r,listSummary:a}=this.props;return t&&r?P.a.createElement("div",{className:moduleNames.photos+"-List g-pic-list"},P.a.createElement(I.a,{value:t.title,onClose:this.onSearchClose,onSearch:this.onSearch,visible:e}),P.a.createElement("div",{className:"list-items"},r.map(e=>P.a.createElement("div",{onClick:()=>this.onItemClick(e.id),key:e.id,className:"g-pre-img"},P.a.createElement("div",{style:{backgroundImage:"url("+e.coverUrl+")"}},P.a.createElement("h5",{className:"title"},e.title),P.a.createElement("div",{className:"listImg"}),P.a.createElement("div",{className:"props"},P.a.createElement(g.b,{type:g.a.LOCATION})," ",e.departure,P.a.createElement(g.b,{type:g.a.HEART})," ",e.type),P.a.createElement("div",{className:"desc"},P.a.createElement("span",{className:"hot"},"人气(",P.a.createElement("strong",null,e.hot),")"),P.a.createElement("em",{className:"price"},P.a.createElement("span",{className:"unit"},"￥"),e.price)))))),a&&P.a.createElement("div",{className:"g-pagination"},P.a.createElement(j.a,{current:a.page,total:a.totalPages,onChange:this.onPageChange}))):null}componentDidMount(){this.scroll()}componentDidUpdate(){this.scroll()}scroll(){window.scrollTo(0,x),x=0}});t.default=Object(s.h)("photos",{},f,{Details:O,List:A})}}]);