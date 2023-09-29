"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[4115],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=c(n),p=o,m=h["".concat(s,".").concat(p)]||h[p]||d[p]||r;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4682:function(e,t,n){n.d(t,{ZP:function(){return l}});var a=n(3117),o=(n(7294),n(3905));const r={toc:[{value:"Callbacks common to all continuous gestures:",id:"callbacks-common-to-all-continuous-gestures",level:3},{value:"<code>onUpdate(callback)</code>",id:"onupdatecallback",level:3},{value:"<code>onChange(callback)</code>",id:"onchangecallback",level:3}]};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"callbacks-common-to-all-continuous-gestures"},"Callbacks common to all continuous gestures:"),(0,o.kt)("h3",{id:"onupdatecallback"},(0,o.kt)("inlineCode",{parentName:"h3"},"onUpdate(callback)")),(0,o.kt)("p",null,"Set the callback that is being called every time the gesture receives an update while it's active."),(0,o.kt)("h3",{id:"onchangecallback"},(0,o.kt)("inlineCode",{parentName:"h3"},"onChange(callback)")),(0,o.kt)("p",null,"Set the callback that is being called every time the gesture receives an update while it's active. This callback will receive information about change in value in relation to the last received event."))}l.isMDXComponent=!0},6689:function(e,t,n){n.d(t,{ZP:function(){return l}});var a=n(3117),o=(n(7294),n(3905));const r={toc:[{value:"Properties common to all continuous gestures:",id:"properties-common-to-all-continuous-gestures",level:3},{value:"<code>manualActivation(value: boolead)</code>",id:"manualactivationvalue-boolead",level:3}]};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"properties-common-to-all-continuous-gestures"},"Properties common to all continuous gestures:"),(0,o.kt)("h3",{id:"manualactivationvalue-boolead"},(0,o.kt)("inlineCode",{parentName:"h3"},"manualActivation(value: boolead)")),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," the handler will not activate by itself even if its activation criteria are met. Instead you can manipulate its state using ",(0,o.kt)("a",{parentName:"p",href:"/docs/gestures/state-manager/"},"state manager"),"."))}l.isMDXComponent=!0},1675:function(e,t,n){n.d(t,{ZP:function(){return l}});var a=n(3117),o=(n(7294),n(3905));const r={toc:[{value:"Callbacks common to all gestures:",id:"callbacks-common-to-all-gestures",level:3},{value:"<code>onBegin(callback)</code>",id:"onbegincallback",level:3},{value:"<code>onStart(callback)</code>",id:"onstartcallback",level:3},{value:"<code>onEnd(callback)</code>",id:"onendcallback",level:3},{value:"<code>onFinalize(callback)</code>",id:"onfinalizecallback",level:3},{value:"<code>onTouchesDown(callback)</code>",id:"ontouchesdowncallback",level:3},{value:"<code>onTouchesMove(callback)</code>",id:"ontouchesmovecallback",level:3},{value:"<code>onTouchesUp(callback)</code>",id:"ontouchesupcallback",level:3},{value:"<code>onTouchesCancelled(callback)</code>",id:"ontouchescancelledcallback",level:3}]};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"callbacks-common-to-all-gestures"},"Callbacks common to all gestures:"),(0,o.kt)("h3",{id:"onbegincallback"},(0,o.kt)("inlineCode",{parentName:"h3"},"onBegin(callback)")),(0,o.kt)("p",null,"Set the callback that is being called when given gesture handler starts receiving touches. At the moment of this callback the handler is not yet in an active state and we don't know yet if it will recognize the gesture at all."),(0,o.kt)("h3",{id:"onstartcallback"},(0,o.kt)("inlineCode",{parentName:"h3"},"onStart(callback)")),(0,o.kt)("p",null,"Set the callback that is being called when the gesture is recognized by the handler and it transitions to the active state."),(0,o.kt)("h3",{id:"onendcallback"},(0,o.kt)("inlineCode",{parentName:"h3"},"onEnd(callback)")),(0,o.kt)("p",null,"Set the callback that is being called when the gesture that was recognized by the handler finishes. It will be called only if the handler was previously in the active state."),(0,o.kt)("h3",{id:"onfinalizecallback"},(0,o.kt)("inlineCode",{parentName:"h3"},"onFinalize(callback)")),(0,o.kt)("p",null,"Set the callback that is being called when the handler finalizes handling gesture - the gesture was recognized and has finished or it failed to recognize."),(0,o.kt)("h3",{id:"ontouchesdowncallback"},(0,o.kt)("inlineCode",{parentName:"h3"},"onTouchesDown(callback)")),(0,o.kt)("p",null,"Set the ",(0,o.kt)("inlineCode",{parentName:"p"},"onTouchesDown")," callback which is called every time a finger is placed on the screen."),(0,o.kt)("h3",{id:"ontouchesmovecallback"},(0,o.kt)("inlineCode",{parentName:"h3"},"onTouchesMove(callback)")),(0,o.kt)("p",null,"Set the ",(0,o.kt)("inlineCode",{parentName:"p"},"onTouchesMove")," callback which is called every time a finger is moved on the screen."),(0,o.kt)("h3",{id:"ontouchesupcallback"},(0,o.kt)("inlineCode",{parentName:"h3"},"onTouchesUp(callback)")),(0,o.kt)("p",null,"Set the ",(0,o.kt)("inlineCode",{parentName:"p"},"onTouchesUp")," callback which is called every time a finger is lifted from the screen."),(0,o.kt)("h3",{id:"ontouchescancelledcallback"},(0,o.kt)("inlineCode",{parentName:"h3"},"onTouchesCancelled(callback)")),(0,o.kt)("p",null,"Set the ",(0,o.kt)("inlineCode",{parentName:"p"},"onTouchesCancelled")," callback which is called every time a finger stops being tracked, for example when the gesture finishes."))}l.isMDXComponent=!0},7516:function(e,t,n){n.d(t,{ZP:function(){return l}});var a=n(3117),o=(n(7294),n(3905));const r={toc:[{value:"Properties common to all gestures:",id:"properties-common-to-all-gestures",level:3},{value:"<code>enabled(value: boolean)</code>",id:"enabledvalue-boolean",level:3},{value:"<code>shouldCancelWhenOutside(value: boolean)</code>",id:"shouldcancelwhenoutsidevalue-boolean",level:3},{value:"<code>hitSlop(settings)</code>",id:"hitslopsettings",level:3},{value:"<code>withRef(ref)</code>",id:"withrefref",level:3},{value:"<code>withTestId(testID)</code>",id:"withtestidtestid",level:3},{value:"<code>cancelsTouchesInView(value)</code> (<strong>iOS only</strong>)",id:"cancelstouchesinviewvalue-ios-only",level:3},{value:"<code>runOnJS(value: boolean)</code>",id:"runonjsvalue-boolean",level:3},{value:"<code>simultaneousWithExternalGesture(otherGesture1, otherGesture2, ...)</code>",id:"simultaneouswithexternalgestureothergesture1-othergesture2-",level:3},{value:"<code>requireExternalGestureToFail(otherGesture1, otherGesture2, ...)</code>",id:"requireexternalgesturetofailothergesture1-othergesture2-",level:3},{value:"<code>activeCursor(value)</code> (<strong>web only</strong>)",id:"activecursorvalue-web-only",level:3}]};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"properties-common-to-all-gestures"},"Properties common to all gestures:"),(0,o.kt)("h3",{id:"enabledvalue-boolean"},(0,o.kt)("inlineCode",{parentName:"h3"},"enabled(value: boolean)")),(0,o.kt)("p",null,"Indicates whether the given handler should be analyzing stream of touch events or not.\nWhen set to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," we can be sure that the handler's state will ",(0,o.kt)("strong",{parentName:"p"},"never")," become ",(0,o.kt)("a",{parentName:"p",href:"/docs/fundamentals/states-events#active"},(0,o.kt)("inlineCode",{parentName:"a"},"ACTIVE")),".\nIf the value gets updated while the handler already started recognizing a gesture, then the handler's state it will immediately change to ",(0,o.kt)("a",{parentName:"p",href:"/docs/fundamentals/states-events#failed"},(0,o.kt)("inlineCode",{parentName:"a"},"FAILED"))," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/fundamentals/states-events#cancelled"},(0,o.kt)("inlineCode",{parentName:"a"},"CANCELLED"))," (depending on its current state).\nDefault value is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("h3",{id:"shouldcancelwhenoutsidevalue-boolean"},(0,o.kt)("inlineCode",{parentName:"h3"},"shouldCancelWhenOutside(value: boolean)")),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," the handler will ",(0,o.kt)("a",{parentName:"p",href:"/docs/fundamentals/states-events#cancelled"},"cancel")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/fundamentals/states-events#failed"},"fail")," recognition (depending on its current state) whenever the finger leaves the area of the connected view.\nDefault value of this property is different depending on the handler type.\nMost handlers' ",(0,o.kt)("inlineCode",{parentName:"p"},"shouldCancelWhenOutside")," property defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," except for the ",(0,o.kt)("a",{parentName:"p",href:"/docs/gestures/long-press-gesture"},(0,o.kt)("inlineCode",{parentName:"a"},"LongPressGesture"))," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/gestures/tap-gesture"},(0,o.kt)("inlineCode",{parentName:"a"},"TapGesture"))," which default to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("h3",{id:"hitslopsettings"},(0,o.kt)("inlineCode",{parentName:"h3"},"hitSlop(settings)")),(0,o.kt)("p",null,"This parameter enables control over what part of the connected view area can be used to ",(0,o.kt)("a",{parentName:"p",href:"/docs/fundamentals/states-events#began"},"begin")," recognizing the gesture.\nWhen a negative number is provided the bounds of the view will reduce the area by the given number of points in each of the sides evenly."),(0,o.kt)("p",null,"Instead you can pass an object to specify how each boundary side should be reduced by providing different number of points for ",(0,o.kt)("inlineCode",{parentName:"p"},"left"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"right"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"top")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"bottom")," sides.\nYou can alternatively provide ",(0,o.kt)("inlineCode",{parentName:"p"},"horizontal")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"vertical")," instead of specifying directly ",(0,o.kt)("inlineCode",{parentName:"p"},"left"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"right")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"top")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"bottom"),".\nFinally, the object can also take ",(0,o.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"height")," attributes.\nWhen ",(0,o.kt)("inlineCode",{parentName:"p"},"width")," is set it is only allow to specify one of the sides ",(0,o.kt)("inlineCode",{parentName:"p"},"right")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"left"),".\nSimilarly when ",(0,o.kt)("inlineCode",{parentName:"p"},"height")," is provided only ",(0,o.kt)("inlineCode",{parentName:"p"},"top")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"bottom")," can be set.\nSpecifying ",(0,o.kt)("inlineCode",{parentName:"p"},"width")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"height")," is useful if we only want the gesture to activate on the edge of the view. In which case for example we can set ",(0,o.kt)("inlineCode",{parentName:"p"},"left: 0")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"width: 20")," which would make it possible for the gesture to be recognize when started no more than 20 points from the left edge."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"IMPORTANT:")," Note that this parameter is primarily designed to reduce the area where gesture can activate. Hence it is only supported for all the values (except ",(0,o.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"height"),") to be non positive (0 or lower). Although on Android it is supported for the values to also be positive and therefore allow to expand beyond view bounds but not further than the parent view bounds. To achieve this effect on both platforms you can use React Native's View ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/view.html#hitslop"},"hitSlop")," property."),(0,o.kt)("h3",{id:"withrefref"},(0,o.kt)("inlineCode",{parentName:"h3"},"withRef(ref)")),(0,o.kt)("p",null,"Sets a ref to the gesture object, allowing for interoperability with the old\nAPI."),(0,o.kt)("h3",{id:"withtestidtestid"},(0,o.kt)("inlineCode",{parentName:"h3"},"withTestId(testID)")),(0,o.kt)("p",null,"Sets a ",(0,o.kt)("inlineCode",{parentName:"p"},"testID")," property for gesture object, allowing for querying for it in tests."),(0,o.kt)("h3",{id:"cancelstouchesinviewvalue-ios-only"},(0,o.kt)("inlineCode",{parentName:"h3"},"cancelsTouchesInView(value)")," (",(0,o.kt)("strong",{parentName:"h3"},"iOS only"),")"),(0,o.kt)("p",null,"Accepts a boolean value.\nWhen ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", the gesture will cancel touches for native UI components (",(0,o.kt)("inlineCode",{parentName:"p"},"UIButton"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"UISwitch"),", etc) it's attached to when it becomes ",(0,o.kt)("a",{parentName:"p",href:"/docs/fundamentals/states-events#active"},(0,o.kt)("inlineCode",{parentName:"a"},"ACTIVE")),".\nDefault value is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("h3",{id:"runonjsvalue-boolean"},(0,o.kt)("inlineCode",{parentName:"h3"},"runOnJS(value: boolean)")),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native-reanimated")," is installed, the callbacks passed to the gestures are automatically workletized and run on the UI thread when called. This option allows for changing this behavior: when ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", all the callbacks will be run on the JS thread instead of the UI thread, regardless of whether they are worklets or not.\nDefaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("h3",{id:"simultaneouswithexternalgestureothergesture1-othergesture2-"},(0,o.kt)("inlineCode",{parentName:"h3"},"simultaneousWithExternalGesture(otherGesture1, otherGesture2, ...)")),(0,o.kt)("p",null,"Adds a gesture that should be recognized simultaneously with this one."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"IMPORTANT:")," Note that this method only marks the relation between gestures, without ",(0,o.kt)("a",{parentName:"p",href:"/docs/fundamentals/gesture-composition"},"composing them"),". ",(0,o.kt)("a",{parentName:"p",href:"/docs/gestures/gesture-detector"},(0,o.kt)("inlineCode",{parentName:"a"},"GestureDetector"))," will not recognize the ",(0,o.kt)("inlineCode",{parentName:"p"},"otherGestures")," and it needs to be added to another detector in order to be recognized."),(0,o.kt)("h3",{id:"requireexternalgesturetofailothergesture1-othergesture2-"},(0,o.kt)("inlineCode",{parentName:"h3"},"requireExternalGestureToFail(otherGesture1, otherGesture2, ...)")),(0,o.kt)("p",null,"Adds a relation requiring another gesture to fail, before this one can activate."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"IMPORTANT:")," Note that this method only marks the relation between gestures, without ",(0,o.kt)("a",{parentName:"p",href:"/docs/fundamentals/gesture-composition"},"composing them"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/gestures/gesture-detector"},(0,o.kt)("inlineCode",{parentName:"a"},"GestureDetector"))," will not recognize the ",(0,o.kt)("inlineCode",{parentName:"p"},"otherGestures")," and it needs to be added to another detector in order to be recognized."),(0,o.kt)("h3",{id:"activecursorvalue-web-only"},(0,o.kt)("inlineCode",{parentName:"h3"},"activeCursor(value)")," (",(0,o.kt)("strong",{parentName:"h3"},"web only"),")"),(0,o.kt)("p",null,"This parameter allows to specify which cursor should be used when gesture activates. Supports all CSS cursor values (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},'"grab"'),", ",(0,o.kt)("inlineCode",{parentName:"p"},'"zoom-in"'),"). Default value is set to ",(0,o.kt)("inlineCode",{parentName:"p"},'"auto"'),"."))}l.isMDXComponent=!0},825:function(e,t,n){n.d(t,{ZP:function(){return l}});var a=n(3117),o=(n(7294),n(3905));const r={toc:[{value:"Event attributes common to all gestures:",id:"event-attributes-common-to-all-gestures",level:3},{value:"<code>state</code>",id:"state",level:3},{value:"<code>numberOfPointers</code>",id:"numberofpointers",level:3}]};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"event-attributes-common-to-all-gestures"},"Event attributes common to all gestures:"),(0,o.kt)("h3",{id:"state"},(0,o.kt)("inlineCode",{parentName:"h3"},"state")),(0,o.kt)("p",null,"Current ",(0,o.kt)("a",{parentName:"p",href:"/docs/fundamentals/states-events"},"state")," of the handler. Expressed as one of the constants exported under ",(0,o.kt)("inlineCode",{parentName:"p"},"State")," object by the library."),(0,o.kt)("h3",{id:"numberofpointers"},(0,o.kt)("inlineCode",{parentName:"h3"},"numberOfPointers")),(0,o.kt)("p",null,"Represents the number of pointers (fingers) currently placed on the screen."))}l.isMDXComponent=!0},5396:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return h},default:function(){return g},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return k}});var a=n(3117),o=(n(7294),n(3905)),r=n(4996),l=n(825),i=n(7516),s=n(6689),c=n(1675),u=n(4682);const d={id:"pinch-gesture",title:"Pinch gesture",sidebar_label:"Pinch gesture",sidebar_position:7},h=void 0,p={unversionedId:"gestures/pinch-gesture",id:"gestures/pinch-gesture",title:"Pinch gesture",description:"A continuous gesture that recognizes pinch gesture. It allows for tracking the distance between two fingers and use that information to scale or zoom your content.",source:"@site/docs/gestures/pinch-gesture.md",sourceDirName:"gestures",slug:"/gestures/pinch-gesture",permalink:"/react-native-gesture-handler/docs/gestures/pinch-gesture",draft:!1,editUrl:"https://github.com/software-mansion/react-native-gesture-handler/edit/main/docs/docs/gestures/pinch-gesture.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"pinch-gesture",title:"Pinch gesture",sidebar_label:"Pinch gesture",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Rotation gesture",permalink:"/react-native-gesture-handler/docs/gestures/rotation-gesture"},next:{title:"Fling gesture",permalink:"/react-native-gesture-handler/docs/gestures/fling-gesture"}},m={},k=[{value:"Reference",id:"reference",level:2},{value:"Config",id:"config",level:2},{value:"Callbacks",id:"callbacks",level:2},{value:"Event data",id:"event-data",level:2},{value:"Event attributes specific to <code>PinchGesture</code>:",id:"event-attributes-specific-to-pinchgesture",level:3},{value:"<code>scale</code>",id:"scale",level:3},{value:"<code>velocity</code>",id:"velocity",level:3},{value:"<code>focalX</code>",id:"focalx",level:3},{value:"<code>focalY</code>",id:"focaly",level:3},{value:"Example",id:"example",level:2}],v={toc:k};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{style:{display:"flex",margin:"16px 0",justifyContent:"center"}},(0,o.kt)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0,style:{maxWidth:360}},(0,o.kt)("source",{src:(0,r.Z)("/video/pinch.mp4"),type:"video/mp4"}))),(0,o.kt)("p",null,"A continuous gesture that recognizes pinch gesture. It allows for tracking the distance between two fingers and use that information to scale or zoom your content.\nThe gesture ",(0,o.kt)("a",{parentName:"p",href:"/docs/fundamentals/states-events#active"},"activates")," when fingers are placed on the screen and change their position.\nGesture callback can be used for continuous tracking of the pinch gesture. It provides information about velocity, anchor (focal) point of gesture and scale."),(0,o.kt)("p",null,"The distance between the fingers is reported as a scale factor. At the beginning of the gesture, the scale factor is 1.0. As the distance between the two fingers increases, the scale factor increases proportionally.\nSimilarly, the scale factor decreases as the distance between the fingers decreases.\nPinch gestures are used most commonly to change the size of objects or content onscreen.\nFor example, map views use pinch gestures to change the zoom level of the map."),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { GestureDetector, Gesture } from 'react-native-gesture-handler';\n\nfunction App() {\n  // highlight-next-line\n  const pinch = Gesture.Pinch();\n\n  return (\n    <GestureDetector gesture={pinch}>\n      <Animated.View />\n    </GestureDetector>\n  );\n}\n")),(0,o.kt)("h2",{id:"config"},"Config"),(0,o.kt)(i.ZP,{mdxType:"BaseEventConfig"}),(0,o.kt)(s.ZP,{mdxType:"BaseContinousEventConfig"}),(0,o.kt)("h2",{id:"callbacks"},"Callbacks"),(0,o.kt)(c.ZP,{mdxType:"BaseEventCallbacks"}),(0,o.kt)(u.ZP,{mdxType:"BaseContinousEventCallbacks"}),(0,o.kt)("h2",{id:"event-data"},"Event data"),(0,o.kt)("h3",{id:"event-attributes-specific-to-pinchgesture"},"Event attributes specific to ",(0,o.kt)("inlineCode",{parentName:"h3"},"PinchGesture"),":"),(0,o.kt)("h3",{id:"scale"},(0,o.kt)("inlineCode",{parentName:"h3"},"scale")),(0,o.kt)("p",null,"The scale factor relative to the points of the two touches in screen coordinates."),(0,o.kt)("h3",{id:"velocity"},(0,o.kt)("inlineCode",{parentName:"h3"},"velocity")),(0,o.kt)("p",null,"Velocity of the pan gesture the current moment. The value is expressed in point units per second."),(0,o.kt)("h3",{id:"focalx"},(0,o.kt)("inlineCode",{parentName:"h3"},"focalX")),(0,o.kt)("p",null,"Position expressed in points along X axis of center anchor point of gesture"),(0,o.kt)("h3",{id:"focaly"},(0,o.kt)("inlineCode",{parentName:"h3"},"focalY")),(0,o.kt)("p",null,"Position expressed in points along Y axis of center anchor point of gesture"),(0,o.kt)(l.ZP,{mdxType:"BaseEventData"}),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { StyleSheet } from 'react-native';\nimport { Gesture, GestureDetector } from 'react-native-gesture-handler';\nimport Animated, {\n  useSharedValue,\n  useAnimatedStyle,\n} from 'react-native-reanimated';\n\nexport default function App() {\n  const scale = useSharedValue(1);\n  const savedScale = useSharedValue(1);\n\n  const pinchGesture = Gesture.Pinch()\n    .onUpdate((e) => {\n      scale.value = savedScale.value * e.scale;\n    })\n    .onEnd(() => {\n      savedScale.value = scale.value;\n    });\n\n  const animatedStyle = useAnimatedStyle(() => ({\n    transform: [{ scale: scale.value }],\n  }));\n\n  return (\n    <GestureDetector gesture={pinchGesture}>\n      <Animated.View style={[styles.box, animatedStyle]} />\n    </GestureDetector>\n  );\n}\n\nconst styles = StyleSheet.create({\n  box: {\n    height: 120,\n    width: 120,\n    backgroundColor: '#b58df1',\n    borderRadius: 20,\n    marginBottom: 30,\n  },\n});\n")))}g.isMDXComponent=!0}}]);