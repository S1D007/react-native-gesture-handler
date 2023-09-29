"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[7258],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=i,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||a;return n?o.createElement(m,r(r({ref:t},c),{},{components:n})):o.createElement(m,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7567:function(e,t,n){var o=n(7294);const i={container:{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"},img:{border:"1px solid #acacac",borderRadius:"6px",boxShadow:"0 0 20px #acacac",marginTop:"1em",marginBottom:"1em"}};t.Z=e=>{let{children:t}=e;return o.createElement("div",{style:i.container},o.Children.map(t,(e=>(0,o.cloneElement)(e,{...e.props.style,style:i.img}))))}},6792:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var o=n(3117),i=(n(7294),n(3905)),a=n(4996),r=n(7567);const l={id:"buttons",title:"Buttons",sidebar_label:"Buttons"},s=void 0,p={unversionedId:"api/components/buttons",id:"version-1.x/api/components/buttons",title:"Buttons",description:"Gesture handler library provides native components that can act as buttons. These can be treated as a replacement to TouchableHighlight or TouchableOpacity from RN core. Gesture handler's buttons recognize touches in native which makes the recognition process deterministic, allows for rendering ripples on Android in highly performant way (TouchableNativeFeedback requires that touch event does a roundtrip to JS before we can update ripple effect, which makes ripples lag a bit on older phones), and provides native and platform default interaction for buttons that are placed in a scrollable container (in which case the interaction is slightly delayed to prevent button from highlighting when you fling).",source:"@site/versioned_docs/version-1.x/api/components/buttons.mdx",sourceDirName:"api/components",slug:"/api/components/buttons",permalink:"/react-native-gesture-handler/docs/1.x/api/components/buttons",draft:!1,editUrl:"https://github.com/software-mansion/react-native-gesture-handler/edit/main/docs/versioned_docs/version-1.x/api/components/buttons.mdx",tags:[],version:"1.x",frontMatter:{id:"buttons",title:"Buttons",sidebar_label:"Buttons"},sidebar:"version-1.x/docs",previous:{title:"createNativeWrapper()",permalink:"/react-native-gesture-handler/docs/1.x/api/gesture-handlers/create-native-wrapper"},next:{title:"Swipeable",permalink:"/react-native-gesture-handler/docs/1.x/api/components/swipeable"}},c={},d=[{value:"<code>BaseButton</code>",id:"basebutton",level:2},{value:"<code>onActiveStateChange</code>",id:"onactivestatechange",level:3},{value:"<code>onPress</code>",id:"onpress",level:3},{value:"<code>rippleColor</code> (<strong>Android only</strong>)",id:"ripplecolor-android-only",level:3},{value:"<code>exclusive</code>",id:"exclusive",level:3},{value:"<code>RectButton</code>",id:"rectbutton",level:2},{value:"<code>underlayColor</code>",id:"underlaycolor",level:3},{value:"<code>activeOpacity</code> (<strong>iOS only</strong>)",id:"activeopacity-ios-only",level:3},{value:"<code>BorderlessButton</code>",id:"borderlessbutton",level:2},{value:"<code>borderless</code> (<strong>Android only</strong>)",id:"borderless-android-only",level:3},{value:"<code>activeOpacity</code> (<strong>iOS only</strong>)",id:"activeopacity-ios-only-1",level:3},{value:"Design patterns",id:"design-patterns",level:2},{value:"Lists and action buttons",id:"lists-and-action-buttons",level:3},{value:"Icon or text only buttons",id:"icon-or-text-only-buttons",level:3},{value:"<code>PureNativeButton</code>",id:"purenativebutton",level:3}],u={toc:d};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,{mdxType:"GifGallery"},(0,i.kt)("img",{src:(0,a.Z)("gifs/samplebutton.gif"),width:"280"})),(0,i.kt)("p",null,"Gesture handler library provides native components that can act as buttons. These can be treated as a replacement to ",(0,i.kt)("inlineCode",{parentName:"p"},"TouchableHighlight")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"TouchableOpacity")," from RN core. Gesture handler's buttons recognize touches in native which makes the recognition process deterministic, allows for rendering ripples on Android in highly performant way (",(0,i.kt)("inlineCode",{parentName:"p"},"TouchableNativeFeedback")," requires that touch event does a roundtrip to JS before we can update ripple effect, which makes ripples lag a bit on older phones), and provides native and platform default interaction for buttons that are placed in a scrollable container (in which case the interaction is slightly delayed to prevent button from highlighting when you fling)."),(0,i.kt)("p",null,"Currently Gesture handler library exposes three components that render native touchable elements under the hood:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BaseButton")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RectButton")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BorderlessButton"))),(0,i.kt)("p",null,"On top of that all the buttons are wrapped with ",(0,i.kt)("inlineCode",{parentName:"p"},"NativeViewGestureHandler")," and therefore allow for all the ",(0,i.kt)("a",{parentName:"p",href:"#common-gesturehandler-properties"},"common gesture handler properties")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"NativeViewGestureHandler"),"'s ",(0,i.kt)("a",{parentName:"p",href:"#nativeviewgesturehandler-extra-properties"},"extra properties")," to be applied to them."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"IMPORTANT"),": In order to make buttons accessible, you have to wrap your children in a ",(0,i.kt)("inlineCode",{parentName:"p"},"View")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"accessible")," and ",(0,i.kt)("inlineCode",{parentName:"p"},'accessibilityRole="button"')," props.\nExample:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// Not accessible:\nconst NotAccessibleButton = () => (\n  <RectButton onPress={this._onPress}>\n    <Text>Foo</Text>\n  </RectButton>\n);\n// Accessible:\nconst AccessibleButton = () => (\n  <RectButton onPress={this._onPress}>\n    <View accessible accessibilityRole="button">\n      <Text>Bar</Text>\n    </View>\n  </RectButton>\n);\n')),(0,i.kt)("p",null,"It is applicable for both iOS and Android platform. On iOS, you won't be able to even select the button, on Android you won't be able to click it in accessibility mode."),(0,i.kt)("h2",{id:"basebutton"},(0,i.kt)("inlineCode",{parentName:"h2"},"BaseButton")),(0,i.kt)("p",null,"Can be used as a base class if you'd like to implement some custom interaction for when the button is pressed."),(0,i.kt)("p",null,"Below is a list of properties specific to ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseButton")," component:"),(0,i.kt)("h3",{id:"onactivestatechange"},(0,i.kt)("inlineCode",{parentName:"h3"},"onActiveStateChange")),(0,i.kt)("p",null,"function that gets triggered when button changes from inactive to active and vice versa. It passes active state as a boolean variable as a first parameter for that method."),(0,i.kt)("h3",{id:"onpress"},(0,i.kt)("inlineCode",{parentName:"h3"},"onPress")),(0,i.kt)("p",null,"function that gets triggered when the button gets pressed (analogous to ",(0,i.kt)("inlineCode",{parentName:"p"},"onPress")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"TouchableHighlight")," from RN core)."),(0,i.kt)("h3",{id:"ripplecolor-android-only"},(0,i.kt)("inlineCode",{parentName:"h3"},"rippleColor")," (",(0,i.kt)("strong",{parentName:"h3"},"Android only"),")"),(0,i.kt)("p",null,"defines color of native ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/android/graphics/drawable/RippleDrawable"},"ripple")," animation used since API level 21."),(0,i.kt)("h3",{id:"exclusive"},(0,i.kt)("inlineCode",{parentName:"h3"},"exclusive")),(0,i.kt)("p",null,"defines if more than one button could be pressed simultaneously. By default set ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("h2",{id:"rectbutton"},(0,i.kt)("inlineCode",{parentName:"h2"},"RectButton")),(0,i.kt)("p",null,"This type of button component should be used when you deal with rectangular elements or blocks of content that can be pressed, for example table rows or buttons with text and icons. This component provides a platform specific interaction, rendering a rectangular ripple on Android or highlighting the background on iOS and on older versions of Android. In addition to the props of ",(0,i.kt)("a",{parentName:"p",href:"#basebutton-component"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseButton")),", it accepts the following:"),(0,i.kt)("p",null,"Below is a list of properties specific to ",(0,i.kt)("inlineCode",{parentName:"p"},"RectButton")," component:"),(0,i.kt)("h3",{id:"underlaycolor"},(0,i.kt)("inlineCode",{parentName:"h3"},"underlayColor")),(0,i.kt)("p",null,"this is the background color that will be dimmed when button is in active state."),(0,i.kt)("h3",{id:"activeopacity-ios-only"},(0,i.kt)("inlineCode",{parentName:"h3"},"activeOpacity")," (",(0,i.kt)("strong",{parentName:"h3"},"iOS only"),")"),(0,i.kt)("p",null,"opacity applied to the underlay when button is in active state."),(0,i.kt)("h2",{id:"borderlessbutton"},(0,i.kt)("inlineCode",{parentName:"h2"},"BorderlessButton")),(0,i.kt)("p",null,"This type of button component should be used with simple icon-only or text-only buttons. The interaction will be different depending on platform: on Android a borderless ripple will be rendered (it means that the ripple will animate into a circle that can span outside of the view bounds), whereas on iOS the button will be dimmed (similar to how ",(0,i.kt)("inlineCode",{parentName:"p"},"TouchableOpacity")," works). In addition to the props of ",(0,i.kt)("a",{parentName:"p",href:"#basebutton-component"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseButton")),", it accepts the following:"),(0,i.kt)("p",null,"Below is a list of properties specific to ",(0,i.kt)("inlineCode",{parentName:"p"},"BorderlessButton")," component:"),(0,i.kt)("h3",{id:"borderless-android-only"},(0,i.kt)("inlineCode",{parentName:"h3"},"borderless")," (",(0,i.kt)("strong",{parentName:"h3"},"Android only"),")"),(0,i.kt)("p",null,"set this to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," if you want the ripple animation to render only within view bounds."),(0,i.kt)("h3",{id:"activeopacity-ios-only-1"},(0,i.kt)("inlineCode",{parentName:"h3"},"activeOpacity")," (",(0,i.kt)("strong",{parentName:"h3"},"iOS only"),")"),(0,i.kt)("p",null,"opacity applied to the button when it is in an active state."),(0,i.kt)("h2",{id:"design-patterns"},"Design patterns"),(0,i.kt)("p",null,"Components listed here were not designed to behave and look in the same way on both platforms but rather to be used for handling similar behaviour on iOS and Android taking into consideration their's design concepts."),(0,i.kt)("p",null,"If you wish to get specific information about platforms design patterns, visit ",(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/design/human-interface-guidelines/components/menus-and-actions/buttons"},"official Apple docs")," and ",(0,i.kt)("a",{parentName:"p",href:"https://material.io/components/buttons#text-button"},"Material.io guideline"),", which widely describe how to implement coherent design."),(0,i.kt)("p",null,"This library allows to use native components with native feedback in adequate situations."),(0,i.kt)("p",null,"If you do not wish to implement custom design approach, ",(0,i.kt)("inlineCode",{parentName:"p"},"RectButton")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"BorderlessButton")," seem to be absolutely enough and there's no need to use anything else. In all the remaining cases you can always rely on ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseButton")," which is a superclass for the other button classes and can be used as a generic ",(0,i.kt)("inlineCode",{parentName:"p"},"Touchable")," replacement that can be customized to your needs."),(0,i.kt)("p",null,"Below we list some of the common usecases for button components to be used along with the type of button that should be used according to the platform specific design guidelines."),(0,i.kt)("h3",{id:"lists-and-action-buttons"},"Lists and action buttons"),(0,i.kt)("p",null,"If you have a list with clickable items or have an action button that need to display as a separate UI block (vs being inlined in a text) you should use ",(0,i.kt)("inlineCode",{parentName:"p"},"RectButton"),". It changes opacity on click and additionally supports a ripple effect on Android."),(0,i.kt)(r.Z,{mdxType:"GifGallery"},(0,i.kt)("img",{src:(0,a.Z)("gifs/androidsettings.gif"),width:"280"}),(0,i.kt)("img",{src:(0,a.Z)("gifs/iossettings.gif"),width:"280"})),(0,i.kt)("p",null,"To determine emphasis of button it's vital to use fill color or leave it transparent especially on Android.\nFor medium emphasis you may consider outlined buttons which are used for lower impact than fill buttons."),(0,i.kt)(r.Z,{mdxType:"GifGallery"},(0,i.kt)("img",{src:(0,a.Z)("gifs/androidbutton.gif"),width:"280"})),(0,i.kt)("h3",{id:"icon-or-text-only-buttons"},"Icon or text only buttons"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"BorderlessButton")," for simple icon-only or text-only buttons. The interaction will be different depending on platform: on Android a borderless ripple will be rendered, whereas on iOS the button will be dimmed.\nIt should be used if you wish to handle non-crucial actions and supportive behaviour."),(0,i.kt)(r.Z,{mdxType:"GifGallery"},(0,i.kt)("img",{src:(0,a.Z)("gifs/androidmail.gif"),width:"280"}),(0,i.kt)("img",{src:(0,a.Z)("gifs/iosmail.gif"),width:"280"})),(0,i.kt)("h3",{id:"purenativebutton"},(0,i.kt)("inlineCode",{parentName:"h3"},"PureNativeButton")),(0,i.kt)("p",null,"Use a ",(0,i.kt)("inlineCode",{parentName:"p"},"PureNativeButton")," for accessing the native Component used for build more complex buttons listed above.\nIt's normally is not recommended to use, but it might be useful if we want to wrap it using Animated or Reanimated."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import {\n  createNativeWrapper,\n  PureNativeButton,\n} from 'react-native-gesture-handler';\nimport Animated from 'react-native-reanimated';\nconst { event, Value, createAnimatedComponent } = Animated;\n\nconst AnimatedRawButton = createNativeWrapper(\n  createAnimatedComponent(PureNativeButton),\n  {\n    shouldCancelWhenOutside: false,\n    shouldActivateOnStart: false,\n  }\n);\n\nexport default class App extends React.Component {\n  constructor(props) {\n    super(props);\n    const state = new Value();\n    this._onGestureEvent = event([\n      {\n        nativeEvent: { state },\n      },\n    ]);\n  }\n\n  render() {\n    return <AnimatedRawButton onHandlerStateChange={this._onGestureEvent} />;\n  }\n}\n")))}h.isMDXComponent=!0}}]);