(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{109:function(e,t,n){e.exports=n(139)},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return Y})),n.d(t,"b",(function(){return q}));var o=n(14),r=n.n(o),a=n(34),s=n.n(a),i=n(35),c=n.n(i),u=n(18),l=n.n(u),f=n(25),d=n.n(f),m=n(19),p=n.n(m),h=n(20),y=n.n(h),g=n(12),b=n.n(g),v=n(0),w=n.n(v),E=n(2),T=n(61),O=n(13),P=n(24),C=n(36),j=n.n(C),x=n(3),S=n(27),R=n(7),k=n(95),D=n(106);var V=E.a.create({container:{width:"100%",alignItems:"center"},toastContainer:{paddingHorizontal:12,paddingVertical:12,borderRadius:5,marginVertical:5,flexDirection:"row",alignItems:"center",overflow:"hidden"},message:{color:"#fff",fontWeight:"500"},iconContainer:{marginRight:5}}),z=function(e){var t=e.id,n=e.onDestroy,o=e.icon,a=e.type,s=void 0===a?"normal":a,i=e.message,c=e.duration,u=void 0===c?5e3:c,l=e.style,f=e.textStyle,d=e.animationDuration,m=void 0===d?250:d,p=e.animationType,h=void 0===p?"slide-in":p,y=e.successIcon,g=e.dangerIcon,b=e.warningIcon,E=e.successColor,T=e.dangerColor,C=e.warningColor,z=e.normalColor,I=e.placement,W=e.swipeEnabled,H=e.onPress,L=Object(v.useRef)(null),B=Object(v.useState)(new S.a.Value(0)),N=j()(B,1)[0],_=Object(v.useRef)(),A=Object(v.useRef)(),M=Object(v.useRef)(null),F=function(){var e=Object(v.useState)(P.a.get("window")),t=j()(e,2),n=t[0],o=t[1],r=function(e){var t=e.window;o(t)};return Object(v.useEffect)((function(){var e=P.a.addEventListener("change",r);return function(){"function"===typeof(null==e?void 0:e.remove)?e.remove():P.a.removeEventListener("change",r)}}),[]),n}();Object(v.useEffect)((function(){return S.a.timing(N,{toValue:1,useNativeDriver:"web"!==O.a.OS,duration:m}).start(),0!==u&&"number"===typeof u&&(M.current=setTimeout((function(){G()}),u)),function(){M.current&&clearTimeout(M.current)}}),[u]),Object(v.useEffect)((function(){e.open||(M.current&&clearTimeout(M.current),G())}),[e.open]);var G=function(){S.a.timing(N,{toValue:0,useNativeDriver:"web"!==O.a.OS,duration:m}).start((function(){return n()}))},J=function(){return A.current||(A.current=new S.a.ValueXY({x:0,y:0})),A.current};if(void 0===o)switch(s){case"success":y&&(o=y);break;case"danger":g&&(o=g);break;case"warning":b&&(o=b)}var Y="";switch(s){case"success":Y=E||"rgb(46, 125, 50)";break;case"danger":Y=T||"rgb(211, 47, 47)";break;case"warning":Y=C||"rgb(237, 108, 2)";break;default:Y=z||"#333"}var q,U,X={opacity:N,transform:[{translateY:N.interpolate({inputRange:[0,1],outputRange:"bottom"===I?[20,0]:[-20,0]})}]};W&&(null==(q=X.transform)||q.push(J().getTranslateTransform()[0]));"zoom-in"===h&&(null==(U=X.transform)||U.push({scale:N.interpolate({inputRange:[0,1],outputRange:[.7,1]})}));return w.a.createElement(S.a.View,r()({ref:L},W?(_.current||(_.current=D.a.create({onMoveShouldSetPanResponder:function(e,t){return!(0===t.dx&&0===t.dy)},onPanResponderMove:function(e,t){var n;null==(n=J())||n.setValue({x:t.dx,y:t.dy})},onPanResponderRelease:function(e,t){t.dx>50?function(e){S.a.timing(J(),{toValue:{x:F.width/10*9,y:e.dy},useNativeDriver:"web"!==O.a.OS,duration:250}).start((function(){return n()}))}(t):t.dx<-50?function(e){S.a.timing(J(),{toValue:{x:-F.width/10*9,y:e.dy},useNativeDriver:"web"!==O.a.OS,duration:250}).start((function(){return n()}))}(t):S.a.spring(J(),{toValue:{x:0,y:0},useNativeDriver:"web"!==O.a.OS}).start()}})),_.current).panHandlers:null,{style:[V.container,X]}),e.renderType&&e.renderType[s]?e.renderType[s](e):e.renderToast?e.renderToast(e):w.a.createElement(k.a,{disabled:!H,onPress:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){return H&&H(t)}))},w.a.createElement(x.a,{style:[V.toastContainer,{maxWidth:F.width/10*9,backgroundColor:Y},l]},o?w.a.createElement(x.a,{style:V.iconContainer},o):null,w.a.isValidElement(i)?i:w.a.createElement(R.a,{style:[V.message,f]},i))))};function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function H(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=b()(e);if(t){var r=b()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return y()(this,n)}}var L=P.a.get("window"),B=L.height,N=L.width,_=function(e){p()(n,e);var t=H(n);function n(e){var o;return l()(this,n),(o=t.call(this,e)).show=function(e,t){var n=(null==t?void 0:t.id)||Math.random().toString(),r=function(){(null==t?void 0:t.onClose)&&(null==t||t.onClose()),o.setState({toasts:o.state.toasts.filter((function(e){return e.id!==n}))})};return requestAnimationFrame((function(){o.setState({toasts:[W(W({id:n,onDestroy:r,message:e,open:!0,onHide:function(){return o.hide(n)}},o.props),t)].concat(c()(o.state.toasts.filter((function(e){return e.open}))))})})),n},o.update=function(e,t,n){o.setState({toasts:o.state.toasts.map((function(o){return o.id===e?W(W({},o),{},{message:t},n):o}))})},o.hide=function(e){o.setState({toasts:o.state.toasts.map((function(t){return t.id===e?W(W({},t),{},{open:!1}):t}))})},o.hideAll=function(){o.setState({toasts:o.state.toasts.map((function(e){return W(W({},e),{},{open:!1})}))})},o.isOpen=function(e){return o.state.toasts.some((function(t){return t.id===e&&t.open}))},o.state={toasts:[]},o}return d()(n,[{key:"renderBottomToasts",value:function(){var e=this.state.toasts,t=this.props,n=t.offset,o={bottom:t.offsetBottom||n,justifyContent:"flex-end",flexDirection:"column"};return w.a.createElement(T.a,{behavior:"ios"===O.a.OS?"position":void 0,style:[A.container,o],pointerEvents:"box-none"},e.filter((function(e){return!e.placement||"bottom"===e.placement})).map((function(e){return w.a.createElement(z,r()({key:e.id},e))})))}},{key:"renderTopToasts",value:function(){var e=this.state.toasts,t=this.props,n=t.offset,o={top:t.offsetTop||n,justifyContent:"flex-start",flexDirection:"column-reverse"};return w.a.createElement(T.a,{behavior:"ios"===O.a.OS?"position":void 0,style:[A.container,o],pointerEvents:"box-none"},e.filter((function(e){return"top"===e.placement})).map((function(e){return w.a.createElement(z,r()({key:e.id},e))})))}},{key:"renderCenterToasts",value:function(){var e=this.state.toasts,t=this.props,n=t.offset,o={top:t.offsetTop||n,height:B,width:N,justifyContent:"center",flexDirection:"column-reverse"};return e.filter((function(e){return"center"===e.placement})).length>0?w.a.createElement(T.a,{behavior:"ios"===O.a.OS?"position":void 0,style:[A.container,o],pointerEvents:"box-none"},e.filter((function(e){return"center"===e.placement})).map((function(e){return w.a.createElement(z,r()({key:e.id},e))}))):null}},{key:"render",value:function(){return w.a.createElement(w.a.Fragment,null,this.renderTopToasts(),this.renderBottomToasts(),this.renderCenterToasts())}}]),n}(v.Component);_.defaultProps={placement:"bottom",offset:10,swipeEnabled:!0};var A=E.a.create({container:W({flex:0,position:"absolute",maxWidth:"100%",zIndex:999999,elevation:999999,alignSelf:"center"},"web"===O.a.OS?{overflow:"hidden"}:null),message:{color:"#333"}}),M=_,F=n(41),G=n.n(F),J=w.a.createContext({}),Y=function(e){var t=e.children,n=G()(e,["children"]),o=Object(v.useRef)(null),a=Object(v.useState)({}),s=j()(a,2),i=s[0],c=s[1];return Object(v.useEffect)((function(){c(o.current)}),[]),w.a.createElement(J.Provider,{value:i},t,w.a.createElement(M,r()({ref:o},n)))},q=function(){return Object(v.useContext)(J)}},74:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var o=n(0),r=n.n(o),a=n(2),s=n(3),i=n(7),c=n(104),u=n(52),l=n(108),f=n(96);function d(){return r.a.createElement(u.a,{placement:"bottom",dangerIcon:r.a.createElement(l.a,{name:"close",color:"#fff"}),successIcon:r.a.createElement(l.a,{name:"check",color:"#fff",size:18}),offset:10,renderType:{custom_toast:function(e){return r.a.createElement(s.a,{style:{maxWidth:"85%",paddingHorizontal:15,paddingVertical:10,backgroundColor:"#fff",marginVertical:4,borderRadius:8,borderLeftColor:"#00C851",borderLeftWidth:6,justifyContent:"center",paddingLeft:16}},r.a.createElement(i.a,{style:{fontSize:14,color:"#333",fontWeight:"bold"}},e.data.title),r.a.createElement(i.a,{style:{color:"#a3a3a3",marginTop:2}},e.message))},with_close_button:function(e){return r.a.createElement(s.a,{style:{maxWidth:"85%",paddingVertical:10,backgroundColor:"#fff",marginVertical:4,borderRadius:8,borderLeftColor:"#00C851",borderLeftWidth:6,justifyContent:"center",paddingHorizontal:16,flexDirection:"row"}},r.a.createElement(i.a,{style:{color:"#a3a3a3",marginRight:16}},e.message),r.a.createElement(c.a,{onPress:function(){return e.onHide()},style:{marginLeft:"auto",width:25,height:25,borderRadius:5,backgroundColor:"#333",justifyContent:"center",alignItems:"center"}},r.a.createElement(i.a,{style:{color:"#fff",fontWeight:"500",marginBottom:2.5}},"x")))}}},r.a.createElement(f.a,null))}a.a.create({container:{flex:1,backgroundColor:"#eee",alignItems:"center",justifyContent:"center"},test:{fontSize:16,marginTop:10}})},96:function(e,t,n){"use strict";(function(e){var o=n(105),r=n(0),a=n.n(r),s=n(2),i=n(7),c=n(3),u=n(97),l=n(52),f=s.a.create({container:{flex:1,backgroundColor:"#eee",alignItems:"center",justifyContent:"center"},test:{fontSize:16,marginTop:10}});t.a=function(){var t=Object(l.b)(),n=Object(r.useRef)(null);return Object(r.useEffect)((function(){e.toast=t}),[]),a.a.createElement(l.a,{placement:"bottom"},a.a.createElement(c.a,{style:f.container},a.a.createElement(o.a,{style:"auto"}),a.a.createElement(i.a,{onPress:function(){return t.show("This is a toast!",{duration:1e4})},style:f.test},"Normal"),a.a.createElement(i.a,{onPress:function(){return t.show("This is a success toast!",{type:"success"})},style:f.test},"Success"),a.a.createElement(i.a,{onPress:function(){return t.show("This is a danger toast!",{type:"danger"})},style:f.test},"Danger"),a.a.createElement(i.a,{onPress:function(){return t.show("This is a warning toast!",{type:"warning"})},style:f.test},"Warning"),a.a.createElement(i.a,{onPress:function(){return t.show("This is a customized toast! you can implement your own",{type:"custom_toast",animationDuration:100,data:{title:"Customized toast"}})},style:f.test},"Custom type"),a.a.createElement(i.a,{onPress:function(){return t.show("This is a customized toast with close button!",{type:"with_close_button",animationDuration:100})},style:f.test},"Custom type 2"),a.a.createElement(i.a,{onPress:function(){t.show("This toast should render on top",{placement:"top"})},style:[f.test,{marginTop:30}]},"Placement top"),a.a.createElement(i.a,{onPress:function(){t.show("This toast should render on center",{placement:"center"})},style:[f.test]},"Placement center"),a.a.createElement(i.a,{onPress:function(){null==t||t.show("This toast have zoom-in animation",{placement:"bottom",animationType:"zoom-in"})},style:[f.test]},"Zoom in animation type"),a.a.createElement(i.a,{onPress:function(){var e=t.show("This toast will update",{});setTimeout((function(){e&&t.update(e,"Toast updated",{type:"success"})}),1e3)},style:f.test},"Update a Toast"),a.a.createElement(i.a,{onPress:function(){t.show("Global toast call")},style:[f.test]},"Global toast call"),a.a.createElement(i.a,{onPress:function(){t.show("Toast 1"),t.show("Toast 2")},style:[f.test,{marginTop:30}]},"Two toast at same time"),a.a.createElement(i.a,{onPress:function(){t.show("Press to close",{duration:1e4,onPress:function(e){t.hide(e)}})},style:[f.test]},"Toast onPress & close on press"),a.a.createElement(i.a,{onPress:function(){var e;null==(e=n.current)||e.focus(),t.show("Hi!",{swipeEnabled:!1})},style:[f.test,{marginBottom:30}]},"Swipe to close disabled"),a.a.createElement(u.a,{ref:n,style:{height:50},placeholder:"Input"}),a.a.createElement(i.a,{onPress:function(){var e;null==(e=n.current)||e.focus(),t.show("Hi!")},style:[f.test]},"Toast avoids keyboard"),a.a.createElement(i.a,{onPress:function(){var e;null==(e=n.current)||e.focus(),t.show("Logs to console on close",{onClose:function(){return console.log("Toast closed!")}})},style:[f.test]},"onClose event"),a.a.createElement(i.a,{onPress:function(){t.hideAll()},style:[f.test]},"Hide all open toasts")))}}).call(this,n(33))}},[[109,1,2]]]);
//# sourceMappingURL=app.ff994c9b.chunk.js.map