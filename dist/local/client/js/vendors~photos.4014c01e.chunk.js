(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{257:function(t,e,n){"use strict";function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return i}))},258:function(t,e,n){"use strict";n.r(e),e.default={prevText:"上一页",nextText:"下一页"}},259:function(t,e,n){"use strict";var i=n(6),r=n.n(i),s=n(11),o=n.n(s),a=n(12),l=n.n(a),c=n(5),u=n.n(c),p=n(13),d=n.n(p),h=n(18),f=n.n(h),g=n(2),v=n(0),y=n(266),m=n(256),S=n(27),b=n.n(S),w=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&(n[i[r]]=t[i[r]])}return n},T=function(t){function e(){return o()(this,e),u()(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return d()(e,t),l()(e,[{key:"render",value:function(){var t,e=this.props,n=e.direction,i=e.wrap,s=e.justify,o=e.align,a=e.alignContent,l=e.className,c=e.children,u=e.prefixCls,p=e.style,d=w(e,["direction","wrap","justify","align","alignContent","className","children","prefixCls","style"]),h=f()(u,l,(t={},r()(t,u+"-dir-row","row"===n),r()(t,u+"-dir-row-reverse","row-reverse"===n),r()(t,u+"-dir-column","column"===n),r()(t,u+"-dir-column-reverse","column-reverse"===n),r()(t,u+"-nowrap","nowrap"===i),r()(t,u+"-wrap","wrap"===i),r()(t,u+"-wrap-reverse","wrap-reverse"===i),r()(t,u+"-justify-start","start"===s),r()(t,u+"-justify-end","end"===s),r()(t,u+"-justify-center","center"===s),r()(t,u+"-justify-between","between"===s),r()(t,u+"-justify-around","around"===s),r()(t,u+"-align-start","start"===o),r()(t,u+"-align-center","center"===o),r()(t,u+"-align-end","end"===o),r()(t,u+"-align-baseline","baseline"===o),r()(t,u+"-align-stretch","stretch"===o),r()(t,u+"-align-content-start","start"===a),r()(t,u+"-align-content-end","end"===a),r()(t,u+"-align-content-center","center"===a),r()(t,u+"-align-content-between","between"===a),r()(t,u+"-align-content-around","around"===a),r()(t,u+"-align-content-stretch","stretch"===a),t));return v.createElement("div",b()({className:h,style:p},d),c)}}]),e}(v.Component),k=T;T.defaultProps={prefixCls:"am-flexbox",align:"center"};var x=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&(n[i[r]]=t[i[r]])}return n},C=function(t){function e(){return o()(this,e),u()(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return d()(e,t),l()(e,[{key:"render",value:function(){var t=this.props,e=t.children,n=t.className,i=t.prefixCls,r=t.style,s=x(t,["children","className","prefixCls","style"]),o=f()(i+"-item",n);return v.createElement("div",b()({className:o,style:r},s),e)}}]),e}(v.Component),O=C;C.defaultProps={prefixCls:"am-flexbox"},k.Item=O;var E=k,j=function(t){function e(t){o()(this,e);var n=u()(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state={current:t.current},n}return d()(e,t),l()(e,[{key:"componentWillReceiveProps",value:function(t){t.current!==this.state.current&&this.setState({current:t.current})}},{key:"onChange",value:function(t){this.setState({current:t}),this.props.onChange&&this.props.onChange(t)}},{key:"render",value:function(){var t=this,e=this.props,i=e.prefixCls,s=e.className,o=e.style,a=e.mode,l=e.total,c=e.simple,u=this.state.current,p=Object(y.a)(this.props,this.context,"Pagination",(function(){return n(258)})),d=p.prevText,h=p.nextText,g=v.createElement(E,null,v.createElement(E.Item,{className:i+"-wrap-btn "+i+"-wrap-btn-prev"},v.createElement(m.a,{inline:!0,disabled:u<=1,onClick:function(){return t.onChange(u-1)}},d)),this.props.children?v.createElement(E.Item,null,this.props.children):!c&&v.createElement(E.Item,{className:i+"-wrap","aria-live":"assertive"},v.createElement("span",{className:"active"},u),"/",v.createElement("span",null,l)),v.createElement(E.Item,{className:i+"-wrap-btn "+i+"-wrap-btn-next"},v.createElement(m.a,{inline:!0,disabled:u>=l,onClick:function(){return t.onChange(t.state.current+1)}},h)));if("number"===a)g=v.createElement("div",{className:i+"-wrap"},v.createElement("span",{className:"active"},u),"/",v.createElement("span",null,l));else if("pointer"===a){for(var S=[],b=0;b<l;b++)S.push(v.createElement("div",{key:"dot-"+b,className:f()(i+"-wrap-dot",r()({},i+"-wrap-dot-active",b+1===u))},v.createElement("span",null)));g=v.createElement("div",{className:i+"-wrap"},S)}var w=f()(i,s);return v.createElement("div",{className:w,style:o},g)}}]),e}(v.Component);e.a=j;j.defaultProps={prefixCls:"am-pagination",mode:"button",current:1,total:0,simple:!1,onChange:function(){}},j.contextTypes={antLocale:g.object}},260:function(t,e,n){"use strict";n(136),n(255),n(237),n(238)},269:function(t,e,n){"use strict";function i(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},s=Object.keys(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}n.d(e,"a",(function(){return i}))},423:function(t,e,n){"use strict";n(136),n(247)},424:function(t,e,n){var i;
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/!function(){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),s={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen};void 0===(i=function(){return s}.call(e,n,e,t))||(t.exports=i)}()},425:function(t,e,n){(function(e){for(var i=n(426),r="undefined"==typeof window?e:window,s=["moz","webkit"],o="AnimationFrame",a=r["request"+o],l=r["cancel"+o]||r["cancelRequest"+o],c=0;!a&&c<s.length;c++)a=r[s[c]+"Request"+o],l=r[s[c]+"Cancel"+o]||r[s[c]+"CancelRequest"+o];if(!a||!l){var u=0,p=0,d=[];a=function(t){if(0===d.length){var e=i(),n=Math.max(0,1e3/60-(e-u));u=n+e,setTimeout((function(){var t=d.slice(0);d.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(u)}catch(t){setTimeout((function(){throw t}),0)}}),Math.round(n))}return d.push({handle:++p,callback:t,cancelled:!1}),p},l=function(t){for(var e=0;e<d.length;e++)d[e].handle===t&&(d[e].cancelled=!0)}}t.exports=function(t){return a.call(r,t)},t.exports.cancel=function(){l.apply(r,arguments)},t.exports.polyfill=function(t){t||(t=r),t.requestAnimationFrame=a,t.cancelAnimationFrame=l}}).call(this,n(38))},426:function(t,e,n){(function(e){(function(){var n,i,r,s,o,a;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:null!=e&&e.hrtime?(t.exports=function(){return(n()-o)/1e6},i=e.hrtime,s=(n=function(){var t;return 1e9*(t=i())[0]+t[1]})(),a=1e9*e.uptime(),o=s-a):Date.now?(t.exports=function(){return Date.now()-r},r=Date.now()):(t.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)}).call(this,n(287))},432:function(t,e,n){"use strict";var i=n(6),r=n.n(i),s=n(27),o=n.n(s),a=n(11),l=n.n(a),c=n(12),u=n.n(c),p=n(5),d=n.n(p),h=n(13),f=n.n(h),g=n(18),v=n.n(g),y=n(0),m=n.n(y),S=[{component:function(t){function e(){l()(this,e);var t=d()(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));return t.handleClick=function(e){e.preventDefault(),t.props.previousSlide()},t}return f()(e,t),u()(e,[{key:"render",value:function(){return m.a.createElement("button",{style:this.getButtonStyles(0===this.props.currentSlide&&!this.props.wrapAround),onClick:this.handleClick},"PREV")}},{key:"getButtonStyles",value:function(t){return{border:0,background:"rgba(0,0,0,0.4)",color:"white",padding:10,outline:0,opacity:t?.3:1,cursor:"pointer"}}}]),e}(m.a.Component),position:"CenterLeft"},{component:function(t){function e(){l()(this,e);var t=d()(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));return t.handleClick=function(e){e.preventDefault(),t.props.nextSlide&&t.props.nextSlide()},t}return f()(e,t),u()(e,[{key:"render",value:function(){return m.a.createElement("button",{style:this.getButtonStyles(this.props.currentSlide+this.props.slidesToScroll>=this.props.slideCount&&!this.props.wrapAround),onClick:this.handleClick},"NEXT")}},{key:"getButtonStyles",value:function(t){return{border:0,background:"rgba(0,0,0,0.4)",color:"white",padding:10,outline:0,opacity:t?.3:1,cursor:"pointer"}}}]),e}(m.a.Component),position:"CenterRight"},{component:function(t){function e(){return l()(this,e),d()(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return f()(e,t),u()(e,[{key:"render",value:function(){var t=this,e=this.getIndexes(this.props.slideCount,this.props.slidesToScroll);return m.a.createElement("ul",{style:this.getListStyles()},e.map((function(e){return m.a.createElement("li",{style:t.getListItemStyles(),key:e},m.a.createElement("button",{style:t.getButtonStyles(t.props.currentSlide===e),onClick:t.props.goToSlide&&t.props.goToSlide.bind(null,e)},"•"))})))}},{key:"getIndexes",value:function(t,e){for(var n=[],i=0;i<t;i+=e)n.push(i);return n}},{key:"getListStyles",value:function(){return{position:"relative",margin:0,top:-10,padding:0}}},{key:"getListItemStyles",value:function(){return{listStyleType:"none",display:"inline-block"}}},{key:"getButtonStyles",value:function(t){return{border:0,background:"transparent",color:"black",cursor:"pointer",padding:10,outline:0,fontSize:24,opacity:t?1:.5}}}]),e}(m.a.Component),position:"BottomCenter"}],b=n(424),w=n.n(b),T=n(425),k=n.n(T);var x={ADDITIVE:"ADDITIVE",DESTRUCTIVE:"DESTRUCTIVE"},C=function(t,e,n){null!=t&&(t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent?t.attachEvent("on"+e,n):t["on"+e]=n)},O=function(t,e,n){null!=t&&(t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent?t.detachEvent("on"+e,n):t["on"+e]=null)},E=function(t){function e(t){l()(this,e);var n=d()(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n._rafCb=function(){var t=n.state;if(0!==t.tweenQueue.length){for(var e=Date.now(),i=[],r=0;r<t.tweenQueue.length;r++){var s=t.tweenQueue[r],o=s.initTime,a=s.config;e-o<a.duration?i.push(s):a.onEnd&&a.onEnd()}-1!==n._rafID&&(n.setState({tweenQueue:i}),n._rafID=k()(n._rafCb))}},n.handleClick=function(t){!0===n.clickSafe&&(t.preventDefault(),t.stopPropagation(),t.nativeEvent&&t.nativeEvent.stopPropagation())},n.autoplayIterator=function(){if(n.props.wrapAround)return n.nextSlide();n.state.currentSlide!==n.state.slideCount-n.state.slidesToShow?n.nextSlide():n.stopAutoplay()},n.goToSlide=function(t){var e=n.props,i=e.beforeSlide,r=e.afterSlide;if(t>=m.a.Children.count(n.props.children)||t<0){if(!n.props.wrapAround)return;if(t>=m.a.Children.count(n.props.children))return i(n.state.currentSlide,0),n.setState({currentSlide:0},(function(){n.animateSlide(null,null,n.getTargetLeft(null,t),(function(){n.animateSlide(null,.01),r(0),n.resetAutoplay(),n.setExternalData()}))}));var s=m.a.Children.count(n.props.children)-n.state.slidesToScroll;return i(n.state.currentSlide,s),n.setState({currentSlide:s},(function(){n.animateSlide(null,null,n.getTargetLeft(null,t),(function(){n.animateSlide(null,.01),r(s),n.resetAutoplay(),n.setExternalData()}))}))}i(n.state.currentSlide,t),n.setState({currentSlide:t},(function(){n.animateSlide(),n.props.afterSlide(t),n.resetAutoplay(),n.setExternalData()}))},n.nextSlide=function(){var t=m.a.Children.count(n.props.children),e=n.props.slidesToShow;if("auto"===n.props.slidesToScroll&&(e=n.state.slidesToScroll),!(n.state.currentSlide>=t-e)||n.props.wrapAround)if(n.props.wrapAround)n.goToSlide(n.state.currentSlide+n.state.slidesToScroll);else{if(1!==n.props.slideWidth)return n.goToSlide(n.state.currentSlide+n.state.slidesToScroll);n.goToSlide(Math.min(n.state.currentSlide+n.state.slidesToScroll,t-e))}},n.previousSlide=function(){n.state.currentSlide<=0&&!n.props.wrapAround||(n.props.wrapAround?n.goToSlide(n.state.currentSlide-n.state.slidesToScroll):n.goToSlide(Math.max(0,n.state.currentSlide-n.state.slidesToScroll)))},n.onResize=function(){n.setDimensions()},n.onReadyStateChange=function(){n.setDimensions()},n.state={currentSlide:n.props.slideIndex,dragging:!1,frameWidth:0,left:0,slideCount:0,slidesToScroll:n.props.slidesToScroll,slideWidth:0,top:0,tweenQueue:[]},n.touchObject={},n.clickSafe=!0,n}return f()(e,t),u()(e,[{key:"componentWillMount",value:function(){this.setInitialDimensions()}},{key:"componentDidMount",value:function(){this.setDimensions(),this.bindEvents(),this.setExternalData(),this.props.autoplay&&this.startAutoplay()}},{key:"componentWillReceiveProps",value:function(t){this.setState({slideCount:t.children.length}),this.setDimensions(t),this.props.slideIndex!==t.slideIndex&&t.slideIndex!==this.state.currentSlide&&this.goToSlide(t.slideIndex),this.props.autoplay!==t.autoplay&&(t.autoplay?this.startAutoplay():this.stopAutoplay())}},{key:"componentWillUnmount",value:function(){this.unbindEvents(),this.stopAutoplay(),k.a.cancel(this._rafID),this._rafID=-1}},{key:"tweenState",value:function(t,e){var n=this,i=e.easing,r=e.duration,s=e.delay,o=e.beginValue,a=e.endValue,l=e.onEnd,c=e.stackBehavior;this.setState((function(e){var u=e,p=void 0,d=void 0;if("string"==typeof t)p=t,d=t;else{for(var h=0;h<t.length-1;h++)u=u[t[h]];p=t[t.length-1],d=t.join("|")}var f={easing:i,duration:null==r?300:r,delay:null==s?0:s,beginValue:null==o?u[p]:o,endValue:a,onEnd:l,stackBehavior:c||"ADDITIVE"},g=e.tweenQueue;return f.stackBehavior===x.DESTRUCTIVE&&(g=e.tweenQueue.filter((function(t){return t.pathHash!==d}))),g.push({pathHash:d,config:f,initTime:Date.now()+f.delay}),u[p]=f.endValue,1===g.length&&(n._rafID=k()(n._rafCb)),{tweenQueue:g}}))}},{key:"getTweeningValue",value:function(t){var e=this.state,n=void 0,i=void 0;if("string"==typeof t)n=e[t],i=t;else{n=e;for(var r=0;r<t.length;r++)n=n[t[r]];i=t.join("|")}for(var s=Date.now(),o=0;o<e.tweenQueue.length;o++){var a=e.tweenQueue[o],l=a.pathHash,c=a.initTime,u=a.config;if(l===i){var p=s-c>u.duration?u.duration:Math.max(0,s-c);n+=(0===u.duration?u.endValue:u.easing(p,u.beginValue,u.endValue,u.duration))-u.endValue}}return n}},{key:"render",value:function(){var t=this,e=m.a.Children.count(this.props.children)>1?this.formatChildren(this.props.children):this.props.children;return m.a.createElement("div",{className:["slider",this.props.className||""].join(" "),ref:"slider",style:o()({},this.getSliderStyles(),this.props.style)},m.a.createElement("div",o()({className:"slider-frame",ref:"frame",style:this.getFrameStyles()},this.getTouchEvents(),this.getMouseEvents(),{onClick:this.handleClick}),m.a.createElement("ul",{className:"slider-list",ref:"list",style:this.getListStyles()},e)),this.props.decorators?this.props.decorators.map((function(e,n){return m.a.createElement("div",{style:o()({},t.getDecoratorStyles(e.position),e.style||{}),className:"slider-decorator-"+n,key:n},m.a.createElement(e.component,{currentSlide:t.state.currentSlide,slideCount:t.state.slideCount,frameWidth:t.state.frameWidth,slideWidth:t.state.slideWidth,slidesToScroll:t.state.slidesToScroll,cellSpacing:t.props.cellSpacing,slidesToShow:t.props.slidesToShow,wrapAround:t.props.wrapAround,nextSlide:t.nextSlide,previousSlide:t.previousSlide,goToSlide:t.goToSlide}))})):null,m.a.createElement("style",{type:"text/css",dangerouslySetInnerHTML:{__html:this.getStyleTagStyles()}}))}},{key:"getTouchEvents",value:function(){var t=this;return!1===this.props.swiping?null:{onTouchStart:function(e){t.touchObject={startX:e.touches[0].pageX,startY:e.touches[0].pageY},t.handleMouseOver()},onTouchMove:function(e){var n=t.swipeDirection(t.touchObject.startX,e.touches[0].pageX,t.touchObject.startY,e.touches[0].pageY);0!==n&&e.preventDefault();var i=t.props.vertical?Math.round(Math.sqrt(Math.pow(e.touches[0].pageY-t.touchObject.startY,2))):Math.round(Math.sqrt(Math.pow(e.touches[0].pageX-t.touchObject.startX,2)));t.touchObject={startX:t.touchObject.startX,startY:t.touchObject.startY,endX:e.touches[0].pageX,endY:e.touches[0].pageY,length:i,direction:n},t.setState({left:t.props.vertical?0:t.getTargetLeft(t.touchObject.length*t.touchObject.direction),top:t.props.vertical?t.getTargetLeft(t.touchObject.length*t.touchObject.direction):0})},onTouchEnd:function(e){t.handleSwipe(e),t.handleMouseOut()},onTouchCancel:function(e){t.handleSwipe(e)}}}},{key:"getMouseEvents",value:function(){var t=this;return!1===this.props.dragging?null:{onMouseOver:function(){t.handleMouseOver()},onMouseOut:function(){t.handleMouseOut()},onMouseDown:function(e){t.touchObject={startX:e.clientX,startY:e.clientY},t.setState({dragging:!0})},onMouseMove:function(e){if(t.state.dragging){var n=t.swipeDirection(t.touchObject.startX,e.clientX,t.touchObject.startY,e.clientY);0!==n&&e.preventDefault();var i=t.props.vertical?Math.round(Math.sqrt(Math.pow(e.clientY-t.touchObject.startY,2))):Math.round(Math.sqrt(Math.pow(e.clientX-t.touchObject.startX,2)));t.touchObject={startX:t.touchObject.startX,startY:t.touchObject.startY,endX:e.clientX,endY:e.clientY,length:i,direction:n},t.setState({left:t.props.vertical?0:t.getTargetLeft(t.touchObject.length*t.touchObject.direction),top:t.props.vertical?t.getTargetLeft(t.touchObject.length*t.touchObject.direction):0})}},onMouseUp:function(e){t.state.dragging&&t.handleSwipe(e)},onMouseLeave:function(e){t.state.dragging&&t.handleSwipe(e)}}}},{key:"handleMouseOver",value:function(){this.props.autoplay&&(this.autoplayPaused=!0,this.stopAutoplay())}},{key:"handleMouseOut",value:function(){this.props.autoplay&&this.autoplayPaused&&(this.startAutoplay(),this.autoplayPaused=null)}},{key:"handleSwipe",value:function(t){void 0!==this.touchObject.length&&this.touchObject.length>44?this.clickSafe=!0:this.clickSafe=!1;var e=this.props,n=e.slidesToShow,i=e.slidesToScroll,r=e.swipeSpeed;"auto"===i&&(n=this.state.slidesToScroll),m.a.Children.count(this.props.children)>1&&this.touchObject.length>this.state.slideWidth/n/r?1===this.touchObject.direction?this.state.currentSlide>=m.a.Children.count(this.props.children)-n&&!this.props.wrapAround?this.animateSlide(this.props.edgeEasing):this.nextSlide():-1===this.touchObject.direction&&(this.state.currentSlide<=0&&!this.props.wrapAround?this.animateSlide(this.props.edgeEasing):this.previousSlide()):this.goToSlide(this.state.currentSlide),this.touchObject={},this.setState({dragging:!1})}},{key:"swipeDirection",value:function(t,e,n,i){var r=t-e,s=n-i,o=Math.atan2(s,r),a=Math.round(180*o/Math.PI);return a<0&&(a=360-Math.abs(a)),a<=45&&a>=0?1:a<=360&&a>=315?1:a>=135&&a<=225?-1:!0===this.props.vertical?a>=35&&a<=135?1:-1:0}},{key:"startAutoplay",value:function(){m.a.Children.count(this.props.children)<=1||(this.autoplayID=setInterval(this.autoplayIterator,this.props.autoplayInterval))}},{key:"resetAutoplay",value:function(){this.props.resetAutoplay&&this.props.autoplay&&!this.autoplayPaused&&(this.stopAutoplay(),this.startAutoplay())}},{key:"stopAutoplay",value:function(){this.autoplayID&&clearInterval(this.autoplayID)}},{key:"animateSlide",value:function(t,e,n,i){this.tweenState(this.props.vertical?"top":"left",{easing:t||this.props.easing,duration:e||this.props.speed,endValue:n||this.getTargetLeft(),delay:null,beginValue:null,onEnd:i||null,stackBehavior:x})}},{key:"getTargetLeft",value:function(t,e){var n=void 0,i=e||this.state.currentSlide,r=this.props.cellSpacing;switch(this.props.cellAlign){case"left":n=0,n-=r*i;break;case"center":n=(this.state.frameWidth-this.state.slideWidth)/2,n-=r*i;break;case"right":n=this.state.frameWidth-this.state.slideWidth,n-=r*i}var s=this.state.slideWidth*i;return this.state.currentSlide>0&&i+this.state.slidesToScroll>=this.state.slideCount&&1!==this.props.slideWidth&&!this.props.wrapAround&&"auto"===this.props.slidesToScroll&&(s=this.state.slideWidth*this.state.slideCount-this.state.frameWidth,n=0,n-=r*(this.state.slideCount-1)),-1*(s-(n-=t||0))}},{key:"bindEvents",value:function(){w.a.canUseDOM&&(C(window,"resize",this.onResize),C(document,"readystatechange",this.onReadyStateChange))}},{key:"unbindEvents",value:function(){w.a.canUseDOM&&(O(window,"resize",this.onResize),O(document,"readystatechange",this.onReadyStateChange))}},{key:"formatChildren",value:function(t){var e=this,n=this.props.vertical?this.getTweeningValue("top"):this.getTweeningValue("left");return m.a.Children.map(t,(function(t,i){return m.a.createElement("li",{className:"slider-slide",style:e.getSlideStyles(i,n),key:i},t)}))}},{key:"setInitialDimensions",value:function(){var t=this,e=this.props,n=e.vertical,i=e.initialSlideHeight,r=e.initialSlideWidth,s=e.slidesToShow,o=e.cellSpacing,a=e.children,l=n?i||0:r||0,c=i?i*s:0,u=c+o*(s-1);this.setState({slideHeight:c,frameWidth:n?u:"100%",slideCount:m.a.Children.count(a),slideWidth:l},(function(){t.setLeft(),t.setExternalData()}))}},{key:"setDimensions",value:function(t){var e,n,i=this,r=void 0,s=void 0,o=(t=t||this.props).slidesToScroll,a=this.refs.frame,l=a.childNodes[0].childNodes[0];l?(l.style.height="auto",r=this.props.vertical?l.offsetHeight*t.slidesToShow:l.offsetHeight):r=100,s="number"!=typeof t.slideWidth?parseInt(t.slideWidth,10):t.vertical?r/t.slidesToShow*t.slideWidth:a.offsetWidth/t.slidesToShow*t.slideWidth,t.vertical||(s-=t.cellSpacing*((100-100/t.slidesToShow)/100)),n=r+t.cellSpacing*(t.slidesToShow-1),e=t.vertical?n:a.offsetWidth,"auto"===t.slidesToScroll&&(o=Math.floor(e/(s+t.cellSpacing))),this.setState({slideHeight:r,frameWidth:e,slideWidth:s,slidesToScroll:o,left:t.vertical?0:this.getTargetLeft(),top:t.vertical?this.getTargetLeft():0},(function(){i.setLeft()}))}},{key:"setLeft",value:function(){this.setState({left:this.props.vertical?0:this.getTargetLeft(),top:this.props.vertical?this.getTargetLeft():0})}},{key:"setExternalData",value:function(){this.props.data&&this.props.data()}},{key:"getListStyles",value:function(){var t=this.state.slideWidth*m.a.Children.count(this.props.children),e=this.props.cellSpacing,n=e*m.a.Children.count(this.props.children),i="translate3d("+this.getTweeningValue("left")+"px, "+this.getTweeningValue("top")+"px, 0)";return{transform:i,WebkitTransform:i,msTransform:"translate("+this.getTweeningValue("left")+"px, "+this.getTweeningValue("top")+"px)",position:"relative",display:"block",margin:this.props.vertical?e/2*-1+"px 0px":"0px "+e/2*-1+"px",padding:0,height:this.props.vertical?t+n:this.state.slideHeight,width:this.props.vertical?"auto":t+n,cursor:!0===this.state.dragging?"pointer":"inherit",boxSizing:"border-box",MozBoxSizing:"border-box"}}},{key:"getFrameStyles",value:function(){return{position:"relative",display:"block",overflow:this.props.frameOverflow,height:this.props.vertical?this.state.frameWidth||"initial":"auto",margin:this.props.framePadding,padding:0,transform:"translate3d(0, 0, 0)",WebkitTransform:"translate3d(0, 0, 0)",msTransform:"translate(0, 0)",boxSizing:"border-box",MozBoxSizing:"border-box"}}},{key:"getSlideStyles",value:function(t,e){var n=this.getSlideTargetPosition(t,e),i=this.props.cellSpacing;return{position:"absolute",left:this.props.vertical?0:n,top:this.props.vertical?n:0,display:this.props.vertical?"block":"inline-block",listStyleType:"none",verticalAlign:"top",width:this.props.vertical?"100%":this.state.slideWidth,height:"auto",boxSizing:"border-box",MozBoxSizing:"border-box",marginLeft:this.props.vertical?"auto":i/2,marginRight:this.props.vertical?"auto":i/2,marginTop:this.props.vertical?i/2:"auto",marginBottom:this.props.vertical?i/2:"auto"}}},{key:"getSlideTargetPosition",value:function(t,e){var n=this.state.frameWidth/this.state.slideWidth,i=(this.state.slideWidth+this.props.cellSpacing)*t,r=(this.state.slideWidth+this.props.cellSpacing)*n*-1;if(this.props.wrapAround){var s=Math.ceil(e/this.state.slideWidth);if(this.state.slideCount-s<=t)return(this.state.slideWidth+this.props.cellSpacing)*(this.state.slideCount-t)*-1;var o=Math.ceil((Math.abs(e)-Math.abs(r))/this.state.slideWidth);if(1!==this.state.slideWidth&&(o=Math.ceil((Math.abs(e)-this.state.slideWidth)/this.state.slideWidth)),t<=o-1)return(this.state.slideWidth+this.props.cellSpacing)*(this.state.slideCount+t)}return i}},{key:"getSliderStyles",value:function(){return{position:"relative",display:"block",width:this.props.width,height:"auto",boxSizing:"border-box",MozBoxSizing:"border-box",visibility:this.state.slideWidth?"visible":"hidden"}}},{key:"getStyleTagStyles",value:function(){return".slider-slide > img {width: 100%; display: block;}"}},{key:"getDecoratorStyles",value:function(t){switch(t){case"TopLeft":return{position:"absolute",top:0,left:0};case"TopCenter":return{position:"absolute",top:0,left:"50%",transform:"translateX(-50%)",WebkitTransform:"translateX(-50%)",msTransform:"translateX(-50%)"};case"TopRight":return{position:"absolute",top:0,right:0};case"CenterLeft":return{position:"absolute",top:"50%",left:0,transform:"translateY(-50%)",WebkitTransform:"translateY(-50%)",msTransform:"translateY(-50%)"};case"CenterCenter":return{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",WebkitTransform:"translate(-50%, -50%)",msTransform:"translate(-50%, -50%)"};case"CenterRight":return{position:"absolute",top:"50%",right:0,transform:"translateY(-50%)",WebkitTransform:"translateY(-50%)",msTransform:"translateY(-50%)"};case"BottomLeft":return{position:"absolute",bottom:0,left:0};case"BottomCenter":return{position:"absolute",bottom:0,width:"100%",textAlign:"center"};case"BottomRight":return{position:"absolute",bottom:0,right:0};default:return{position:"absolute",top:0,left:0}}}}]),e}(m.a.Component);E.defaultProps={afterSlide:function(){},autoplay:!1,resetAutoplay:!0,swipeSpeed:12,autoplayInterval:3e3,beforeSlide:function(){},cellAlign:"left",cellSpacing:0,data:function(){},decorators:S,dragging:!0,easing:function(t,e,n,i){return(n-e)*Math.sqrt(1-(t=t/i-1)*t)+e},edgeEasing:function(t,e,n,i){return(n-e)*t/i+e},framePadding:"0px",frameOverflow:"hidden",slideIndex:0,slidesToScroll:1,slidesToShow:1,slideWidth:1,speed:500,swiping:!0,vertical:!1,width:"100%",wrapAround:!1,style:{}};var j=E,M=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&(n[i[r]]=t[i[r]])}return n},W=function(t){function e(t){l()(this,e);var n=d()(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.onChange=function(t){n.setState({selectedIndex:t},(function(){n.props.afterChange&&n.props.afterChange(t)}))},n.state={selectedIndex:n.props.selectedIndex},n}return f()(e,t),u()(e,[{key:"render",value:function(){var t=this.props,e=t.infinite,n=t.selectedIndex,i=t.beforeChange,s=(t.afterChange,t.dots),a=M(t,["infinite","selectedIndex","beforeChange","afterChange","dots"]),l=a.prefixCls,c=a.dotActiveStyle,u=a.dotStyle,p=a.className,d=a.vertical,h=o()({},a,{wrapAround:e,slideIndex:n,beforeSlide:i}),f=[];s&&(f=[{component:function(t){for(var e=t.slideCount,n=t.slidesToScroll,i=t.currentSlide,s=[],o=0;o<e;o+=n)s.push(o);var a=s.map((function(t){var e=v()(l+"-wrap-dot",r()({},l+"-wrap-dot-active",t===i)),n=t===i?c:u;return y.createElement("div",{className:e,key:t},y.createElement("span",{style:n}))}));return y.createElement("div",{className:l+"-wrap"},a)},position:"BottomCenter"}]);var g=v()(l,p,r()({},l+"-vertical",d));return y.createElement(j,o()({},h,{className:g,decorators:f,afterSlide:this.onChange}))}}]),e}(y.Component);e.a=W;W.defaultProps={prefixCls:"am-carousel",dots:!0,arrows:!1,autoplay:!1,infinite:!1,cellAlign:"center",selectedIndex:0,dotStyle:{},dotActiveStyle:{}}}}]);