"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[1300],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=r,m=u["".concat(d,".").concat(h)]||u[h]||c[h]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7567:function(e,t,n){var a=n(7294);const r={container:{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"},img:{border:"1px solid #acacac",borderRadius:"6px",boxShadow:"0 0 20px #acacac",marginTop:"1em",marginBottom:"1em"}};t.Z=e=>{let{children:t}=e;return a.createElement("div",{style:r.container},a.Children.map(t,(e=>(0,a.cloneElement)(e,{...e.props.style,style:r.img}))))}},6293:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=n(3117),r=(n(7294),n(3905)),o=n(4996),i=n(7567);const l={id:"drawer-layout",title:"Drawer Layout",sidebar_label:"DrawerLayout"},d=void 0,s={unversionedId:"api/components/drawer-layout",id:"version-1.x/api/components/drawer-layout",title:"Drawer Layout",description:"This is a cross-platform replacement for React Native's DrawerLayoutAndroid component. It provides a compatible API but allows for the component to be used on both Android and iOS. Please refer to React Native docs for the detailed usage for standard parameters.",source:"@site/versioned_docs/version-1.x/api/components/drawer-layout.mdx",sourceDirName:"api/components",slug:"/api/components/drawer-layout",permalink:"/react-native-gesture-handler/docs/1.x/api/components/drawer-layout",draft:!1,editUrl:"https://github.com/software-mansion/react-native-gesture-handler/edit/main/docs/versioned_docs/version-1.x/api/components/drawer-layout.mdx",tags:[],version:"1.x",frontMatter:{id:"drawer-layout",title:"Drawer Layout",sidebar_label:"DrawerLayout"},sidebar:"version-1.x/docs",previous:{title:"Touchables",permalink:"/react-native-gesture-handler/docs/1.x/api/components/touchables"},next:{title:"Contributing",permalink:"/react-native-gesture-handler/docs/1.x/contributing"}},p={},c=[{value:"Usage:",id:"usage",level:2},{value:"Properties:",id:"properties",level:2},{value:"<code>drawerType</code>",id:"drawertype",level:3},{value:"<code>edgeWidth</code>",id:"edgewidth",level:3},{value:"<code>hideStatusBar</code>",id:"hidestatusbar",level:3},{value:"<code>statusBarAnimation</code>",id:"statusbaranimation",level:3},{value:"<code>overlayColor</code>",id:"overlaycolor",level:3},{value:"<code>renderNavigationView</code>",id:"rendernavigationview",level:3},{value:"<code>onDrawerClose</code>",id:"ondrawerclose",level:3},{value:"<code>onDrawerOpen</code>",id:"ondraweropen",level:3},{value:"<code>onDrawerSlide</code>",id:"ondrawerslide",level:3},{value:"<code>onDrawerStateChanged</code>",id:"ondrawerstatechanged",level:3},{value:"<code>enableTrackpadTwoFingerGesture</code> (iOS only)",id:"enabletrackpadtwofingergesture-ios-only",level:3},{value:"<code>children</code>",id:"children",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>openDrawer(options)</code>",id:"opendraweroptions",level:3},{value:"<code>closeDrawer(options)</code>",id:"closedraweroptions",level:3},{value:"Example:",id:"example",level:2}],u={toc:c};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is a cross-platform replacement for React Native's ",(0,r.kt)("a",{parentName:"p",href:"http://reactnative.dev/docs/drawerlayoutandroid.html"},"DrawerLayoutAndroid")," component. It provides a compatible API but allows for the component to be used on both Android and iOS. Please refer to ",(0,r.kt)("a",{parentName:"p",href:"http://reactnative.dev/docs/drawerlayoutandroid.html"},"React Native docs")," for the detailed usage for standard parameters."),(0,r.kt)("h2",{id:"usage"},"Usage:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DrawerLayout")," component isn't exported by default from the ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-gesture-handler")," package. To use it, import it in the following way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';\n")),(0,r.kt)("h2",{id:"properties"},"Properties:"),(0,r.kt)("p",null,"On top of the standard list of parameters DrawerLayout has an additional set of attributes to customize its behavior. Please refer to the list below:"),(0,r.kt)("h3",{id:"drawertype"},(0,r.kt)("inlineCode",{parentName:"h3"},"drawerType")),(0,r.kt)("p",null,"possible values are: ",(0,r.kt)("inlineCode",{parentName:"p"},"front"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"back")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"slide")," (default is ",(0,r.kt)("inlineCode",{parentName:"p"},"front"),"). It specifies the way the drawer will be displayed. When set to ",(0,r.kt)("inlineCode",{parentName:"p"},"front")," the drawer will slide in and out along with the gesture and will display on top of the content view. When ",(0,r.kt)("inlineCode",{parentName:"p"},"back")," is used the drawer displays behind the content view and can be revealed with gesture of pulling the content view to the side. Finally ",(0,r.kt)("inlineCode",{parentName:"p"},"slide")," option makes the drawer appear like it is attached to the side of the content view; when you pull both content view and drawer will follow the gesture."),(0,r.kt)("p",null,"Type ",(0,r.kt)("inlineCode",{parentName:"p"},"slide"),":"),(0,r.kt)(i.Z,{mdxType:"GifGallery"},(0,r.kt)("img",{src:(0,o.Z)("gifs/drawer-slide.gif"),width:"280"})),(0,r.kt)("p",null,"Type ",(0,r.kt)("inlineCode",{parentName:"p"},"front"),":"),(0,r.kt)(i.Z,{mdxType:"GifGallery"},(0,r.kt)("img",{src:(0,o.Z)("gifs/drawer-front.gif"),width:"280"})),(0,r.kt)("p",null,"Type ",(0,r.kt)("inlineCode",{parentName:"p"},"back"),":"),(0,r.kt)(i.Z,{mdxType:"GifGallery"},(0,r.kt)("img",{src:(0,o.Z)("gifs/drawer-back.gif"),width:"280"})),(0,r.kt)("h3",{id:"edgewidth"},(0,r.kt)("inlineCode",{parentName:"h3"},"edgeWidth")),(0,r.kt)("p",null,"number, allows for defining how far from the edge of the content view the gesture should activate."),(0,r.kt)("h3",{id:"hidestatusbar"},(0,r.kt)("inlineCode",{parentName:"h3"},"hideStatusBar")),(0,r.kt)("p",null,"boolean, when set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," Drawer component will use ",(0,r.kt)("a",{parentName:"p",href:"http://reactnative.dev/docs/statusbar.html"},"StatusBar"),' API to hide the OS status bar whenever the drawer is pulled or when its in an "open" state.'),(0,r.kt)("h3",{id:"statusbaranimation"},(0,r.kt)("inlineCode",{parentName:"h3"},"statusBarAnimation")),(0,r.kt)("p",null,"possible values are: ",(0,r.kt)("inlineCode",{parentName:"p"},"slide"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"none")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"fade")," (defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"slide"),"). Can be used when ",(0,r.kt)("inlineCode",{parentName:"p"},"hideStatusBar")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," and will select the animation used for hiding/showing the status bar. See ",(0,r.kt)("a",{parentName:"p",href:"http://reactnative.dev/docs/statusbar.html#statusbaranimation"},"StatusBar")," documentation for more details."),(0,r.kt)("h3",{id:"overlaycolor"},(0,r.kt)("inlineCode",{parentName:"h3"},"overlayColor")),(0,r.kt)("p",null,"color (default to ",(0,r.kt)("inlineCode",{parentName:"p"},'"black"'),") of a semi-transparent overlay to be displayed on top of the content view when drawer gets open. A solid color should be used as the opacity is added by the Drawer itself and the opacity of the overlay is animated (from 0% to 70%)."),(0,r.kt)("h3",{id:"rendernavigationview"},(0,r.kt)("inlineCode",{parentName:"h3"},"renderNavigationView")),(0,r.kt)("p",null,"function. This attribute is present in the standard implementation already and is one of the required params. Gesture handler version of DrawerLayout make it possible for the function passed as ",(0,r.kt)("inlineCode",{parentName:"p"},"renderNavigationView")," to take an Animated value as a parameter that indicates the progress of drawer opening/closing animation (progress value is 0 when closed and 1 when opened). This can be used by the drawer component to animated its children while the drawer is opening or closing."),(0,r.kt)("h3",{id:"ondrawerclose"},(0,r.kt)("inlineCode",{parentName:"h3"},"onDrawerClose")),(0,r.kt)("p",null,"function. This function is called when the drawer is closed."),(0,r.kt)("h3",{id:"ondraweropen"},(0,r.kt)("inlineCode",{parentName:"h3"},"onDrawerOpen")),(0,r.kt)("p",null,"function. This function is called when the drawer is opened."),(0,r.kt)("h3",{id:"ondrawerslide"},(0,r.kt)("inlineCode",{parentName:"h3"},"onDrawerSlide")),(0,r.kt)("p",null,"function. This function is called as a drawer sliding open from touch events. The progress of the drawer opening/closing is passed back as 0 when closed and 1 when opened."),(0,r.kt)("h3",{id:"ondrawerstatechanged"},(0,r.kt)("inlineCode",{parentName:"h3"},"onDrawerStateChanged")),(0,r.kt)("p",null,"function. This function is called when the status of the drawer changes. Possible values that can be passed back are: 'Idle', 'Dragging', and 'Settling'."),(0,r.kt)("h3",{id:"enabletrackpadtwofingergesture-ios-only"},(0,r.kt)("inlineCode",{parentName:"h3"},"enableTrackpadTwoFingerGesture")," (iOS only)"),(0,r.kt)("p",null,"Enables two-finger gestures on supported devices, for example iPads with trackpads. If not enabled the gesture will require click + drag, with enableTrackpadTwoFingerGesture swiping with two fingers will also trigger the gesture."),(0,r.kt)("h3",{id:"children"},(0,r.kt)("inlineCode",{parentName:"h3"},"children")),(0,r.kt)("p",null,"component or function. Children is a component which is rendered by default and is wrapped by drawer. However, it could be also a render function which takes an Animated value as a parameter that indicates the progress of drawer opening/closing animation (progress value is 0 when closed and 1 when opened) is the same way like ",(0,r.kt)("inlineCode",{parentName:"p"},"renderNavigationView")," prop."),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"opendraweroptions"},(0,r.kt)("inlineCode",{parentName:"h3"},"openDrawer(options)")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"openDrawer")," can take an optional ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," parameter which is an object, enabling further customization of the open animation."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"options")," has two optional properties:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"velocity"),": number, the initial velocity of the object attached to the spring. Default 0 (object is at rest).\n",(0,r.kt)("inlineCode",{parentName:"p"},"speed"),": number, controls speed of the animation. Default 12."),(0,r.kt)("h3",{id:"closedraweroptions"},(0,r.kt)("inlineCode",{parentName:"h3"},"closeDrawer(options)")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"closeDrawer")," can take an optional ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," parameter which is an object, enabling further customization of the close animation."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"options")," has two optional properties:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"velocity"),": number, the initial velocity of the object attached to the spring. Default 0 (object is at rest).\n",(0,r.kt)("inlineCode",{parentName:"p"},"speed"),": number, controls speed of the animation. Default 12."),(0,r.kt)("h2",{id:"example"},"Example:"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-gesture-handler/blob/main/example/src/basic/horizontalDrawer/index.tsx"},"drawer example")," from ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/1.x/example"},"GestureHandler Example App")," or view it directly on your phone by visiting ",(0,r.kt)("a",{parentName:"p",href:"https://snack.expo.io/@adamgrzybowski/react-native-gesture-handler-demo"},"our expo demo"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'class Drawerable extends Component {\n  handleDrawerSlide = (status) => {\n    // outputs a value between 0 and 1\n    console.log(status);\n  };\n\n  renderDrawer = () => {\n    return (\n      <View>\n        <Text>I am in the drawer!</Text>\n      </View>\n    );\n  };\n\n  render() {\n    return (\n      <View style={{ flex: 1 }}>\n        <DrawerLayout\n          drawerWidth={200}\n          drawerPosition={DrawerLayout.positions.Right}\n          drawerType="front"\n          drawerBackgroundColor="#ddd"\n          renderNavigationView={this.renderDrawer}\n          onDrawerSlide={this.handleDrawerSlide}>\n          <View>\n            <Text>Hello, it\'s me</Text>\n          </View>\n        </DrawerLayout>\n      </View>\n    );\n  }\n}\n')))}h.isMDXComponent=!0}}]);