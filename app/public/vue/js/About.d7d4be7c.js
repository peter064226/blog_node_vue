(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["About"],{a55b:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticStyle:{height:"100%",padding:"100px 0px 300px 0px","margin-top":"-10px",background:"#f8f8f9"}},[r("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[r("Col",{attrs:{xs:22,sm:22,md:14,lg:8}},[r("Card",[r("p",{attrs:{slot:"title"},slot:"title"},[t._v("登陆中心")]),r("Alert",{attrs:{type:"warning"}},[t._v("如帐号不存在，会用当前账号注册新用户")]),r("Form",{ref:"userForm",attrs:{model:t.user,"label-width":80}},[r("FormItem",{attrs:{label:"USERNAME",prop:"username"}},[r("Input",{attrs:{type:"text"},model:{value:t.user.username,callback:function(e){t.$set(t.user,"username",e)},expression:"user.username"}})],1),r("FormItem",{attrs:{label:"PASSWORD",prop:"password"}},[r("Input",{attrs:{type:"password"},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}})],1),r("FormItem",[r("Button",{attrs:{type:"primary"},on:{click:t.login}},[t._v("登陆")]),r("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(e){return t.$refs["userForm"].resetFields()}}},[t._v("重置")])],1)],1)],1)],1)],1)],1)},n=[],a=(r("96cf"),r("1da1")),o=r("bc3a"),u=r.n(o),l={data:function(){return{user:{username:"test",password:"test"},userRules:{username:[{validator:function(){},trigger:"blur"}],password:[{validator:function(){},trigger:"blur"}]}}},methods:{login:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("/api/local/login",t.user);case 2:e.sent,t.$router.push("/"),setTimeout((function(t){return location.reload()}),100);case 5:case"end":return e.stop()}}),e)})))()}}},i=l,p=r("2877"),c=Object(p["a"])(i,s,n,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=About.d7d4be7c.js.map