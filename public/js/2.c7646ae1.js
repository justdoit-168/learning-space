(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"713b":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-layout",{attrs:{view:"hHh LpR lFf"}},[r("q-header",{staticClass:"bg-primary text-white",staticStyle:{"border-bottom":"1px solid #ccc"}},["electron"===t.current_mode?r("q-bar",{staticClass:"q-electron-drag ",staticStyle:{height:"36px","line-height":"36px"}},[r("q-icon",{attrs:{name:"img:logo.png",size:"30px"}}),r("q-btn",{staticStyle:{"font-size":"14px"},attrs:{flat:"",label:"菜单"},on:{click:function(e){t.drawer=!t.drawer}}}),r("div",{staticClass:"fsz12 ",staticStyle:{"font-size":"14px"}},[t._v("\n         --------- "+t._s(t.title)+" ---------"+t._s(t.last_update_time)+"\n       ")]),r("q-space"),r("q-btn",{attrs:{dense:"",flat:"",icon:"minimize"},on:{click:t.minimize}}),r("q-btn",{attrs:{dense:"",flat:"",icon:"crop_square"},on:{click:t.maximize}}),r("q-btn",{attrs:{dense:"",flat:"",icon:"close"},on:{click:t.closeApp}}),r("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"menu"},on:{click:function(e){t.drawerRight=!t.drawerRight}}})],1):t._e(),"electron"!==t.current_mode?r("q-toolbar",[r("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"menu"},on:{click:function(e){t.drawerLeft=!t.drawerLeft}}}),r("div",{staticClass:"text-h6"},[t._v(t._s(t.title))]),r("q-space"),r("div",{staticClass:"text-uppercase text-h6"},[t._v(t._s(t.mid_text))]),r("q-space"),r("div",{staticClass:"desktop-only"},[t._v(t._s(t.last_update_time))]),r("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"menu"},on:{click:function(e){t.drawerRight=!t.drawerRight}}})],1):t._e()],1),r("q-drawer",{staticClass:"hide-scrollbar",attrs:{"show-if-above":"",width:160,breakpoint:500,bordered:"","content-class":"bg-grey-3 hide-scrollbar "},model:{value:t.drawerLeft,callback:function(e){t.drawerLeft=e},expression:"drawerLeft"}},[r("q-scroll-area",{staticClass:"fit hide-scrollbar"},t._l(t.menu,(function(e,n){return r("q-list",{key:n,staticClass:"hide-scrollbar"},[r("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],class:e.name==t.current_menu?"bg-primary text-white":"bg=white text-black",attrs:{clickable:""},on:{click:function(r){return t.go_to_router(e)}}},[r("q-item-section",[t._v("\n             "+t._s(n+1+"."+e.name)+"\n           ")])],1)],1)})),1)],1),r("q-drawer",{attrs:{side:"right",bordered:"",dense:"",width:180,breakpoint:500,"content-class":"bg-grey-3 hide-scrollbar "},model:{value:t.drawerRight,callback:function(e){t.drawerRight=e},expression:"drawerRight"}},[r("q-scroll-area",{staticClass:"fit hide-scrollbar"},t._l(t.flat_right_menu,(function(e,n){return r("q-list",{key:n,staticClass:"hide-scrollbar"},[r("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],class:t.compute_right_menu_item_class(e),attrs:{clickable:""},on:{click:function(r){return t.right_menu_item_click(e)}}},[r("q-item-section",[r("div",{class:1==e.tl?"":"q-pl-md"},[2==e.tl?r("span",[t._v("-")]):t._e(),t._v(" "+t._s(" "+e.label)+"\n             ")])])],1)],1)})),1)],1),r("q-page-container",{staticClass:"q-pb-sm",style:t.q_page_container_style},[r("router-view",{class:t.$q.platform.is.desktop?"q-pa-md":"q-pa-sm"}),r("q-page-sticky",{attrs:{position:"bottom-right",offset:[5,70]},on:{click:function(e){t.drawerRight=!t.drawerRight}}},[r("q-btn",{staticClass:"rotate-270",attrs:{dense:"",color:"primary",size:"sm",icon:"expand_more"}})],1),r("q-page-sticky",{attrs:{position:"bottom-right",offset:[35,70]},on:{click:function(e){t.drawerLeft=!t.drawerLeft}}},[r("q-btn",{staticClass:"rotate-90",attrs:{dense:"",color:"primary",size:"sm",icon:"expand_more"}})],1),r("q-page-sticky",{attrs:{position:"bottom-right",offset:[35,40]},on:{click:function(e){return t.handle_scroll_towards("up",1)},mousedown:function(e){return t.handle_scroll_towards("up",2)},mouseup:function(e){return t.handle_scroll_towards("up",3)}}},[r("q-btn",{attrs:{dense:"",color:"primary",size:"sm",icon:"arrow_upward"}})],1),r("q-page-sticky",{attrs:{position:"bottom-right",offset:[5,40]},on:{click:function(e){return t.handle_scroll_towards("down",1)},mousedown:function(e){return t.handle_scroll_towards("down",2)},mouseup:function(e){return t.handle_scroll_towards("down",3)}}},[r("q-btn",{attrs:{dense:"",color:"primary",size:"sm",icon:"arrow_downward"}})],1),r("q-page-sticky",{attrs:{position:"bottom-right",offset:[35,10]},on:{click:function(e){return t.handle_scroll_towards("down",100)}}},[r("q-btn",{attrs:{dense:"",color:"primary",size:"sm",icon:"expand_more"}})],1),r("q-page-sticky",{attrs:{position:"bottom-right",offset:[5,10]},on:{click:function(e){return t.handle_scroll_towards("down",1e3)}}},[r("q-btn",{attrs:{dense:"",color:"primary",size:"sm",icon:"expand_less"}})],1)],1)],1)},i=[],s=r("ded3"),o=r.n(s),a=r("9523"),c=r.n(a),l=(r("b0c0"),r("d81d"),r("2197")),u=r("b178"),_=r("2f62"),d=1638297045961,m=u["v"].formatDate(d,"YYYY-MM-DD     HH:mm:ss"),h={name:"MyLayout",data:function(){var t;return t={title:"我生待明日，万事成蹉跎。"},c()(t,"title","锦绣年华"),c()(t,"mid_text","we are who we choose to be"),c()(t,"mid_text","Learn、analyze and follow the process"),c()(t,"mid_text","流程错了"),c()(t,"last_update_time",m),c()(t,"drawerLeft",!1),c()(t,"menu",l["a"]),c()(t,"current_menu","note"),c()(t,"tab","note"),c()(t,"tabs",[1,2,3,4,5,6,7,8]),c()(t,"drawerRight",!0),c()(t,"current_mode","spa"),c()(t,"flat_right_menu",[]),c()(t,"timer_move_step",null),t},computed:o()(o()({},Object(_["c"])({right_menu:"get_right_menu",current_selected_right_menu:"get_current_selected_right_menu"})),{},{q_page_container_style:function(){var t="";t=this.$q.platform.is.desktop?"calc( 100vw - 16px)":" 100vw ";var e={width:t};return e}}),created:function(){this.$route.name||this.$router.push(l["a"][0]),this.current_menu=this.$route.name},watch:{$route:function(t,e){this.current_menu=this.$route.name},right_menu:{handler:function(){console.log("right_menu---------------right_menu",this.right_menu),this.compute_flat_right_menu()},deep:!0}},methods:o()(o()({},Object(_["b"])(["set_current_selected_right_menu"])),{},{compute_flat_right_menu:function(){var t=[];this.right_menu.map((function(e){var r=o()(o()({},e),{},{tl:1});t.push(r),Array.isArray(e.children)&&e.children.map((function(r){var n=o()(o()({},r),{},{tl:2,parent:o()({},e)});t.push(n)}))})),this.flat_right_menu=t,console.log("flat_right_menuflat_right_menu ",this.flat_right_menu),this.$forceUpdate()},go_to_router:function(t){this.current_menu=t.name,this.$route.name!=t.name&&this.$router.push({name:t.name})},handle_scroll_towards:function(t,e){console.log("  // type   1 点击  2. 鼠标按下 3. 鼠标抬起+----------",e);var r=function(){var e=window.scrollY;"up"==t?window.scrollTo(0,e-150):window.scrollTo(0,e+150)};2==e?(r(),this.timer_move_step=setInterval((function(){r()}),200)):3==e?clearInterval(this.timer_move_step):100==e?window.scrollTo(0,1e6):1e3==e&&window.scrollTo(0,0)},right_menu_item_click:function(t){console.log("右侧菜单点击 ",t),this.set_current_selected_right_menu(t),this.$q.cookies.get("last_nemu",{right_menu:t,current_menu:this.current_menu}),window.scrollTo(0,0),this.$nextTick(this.compute_flat_right_menu())},compute_right_menu_item_class:function(t){var e=!1,r=this.current_selected_right_menu,n=(r.t1,r.t2,r.right_menu_info);return console.log(" this.current_selected_right_menu",this.current_selected_right_menu),e=n.label==t.label&&n.value==t.value,e?"bg-primary text-white":"bg=white text-black"},minimize:function(){0},maximize:function(){},closeApp:function(){0}})},p=h,f=r("2877"),w=Object(f["a"])(p,n,i,!1,null,null,null);e["default"]=w.exports}}]);