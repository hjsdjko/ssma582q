(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-wodeyuyue-add-or-update"],{"065e":function(r,e,i){"use strict";var t=i("1550"),a=i.n(t);a.a},"0e34":function(r,e,i){"use strict";i.r(e);var t=i("3213"),a=i("8761");for(var o in a)"default"!==o&&function(r){i.d(e,r,(function(){return a[r]}))}(o);i("065e");var n,d=i("f0c5"),s=Object(d["a"])(a["default"],t["b"],t["c"],!1,null,"5ec877e5",null,!1,t["a"],n);e["default"]=s.exports},1550:function(r,e,i){var t=i("6a66");"string"===typeof t&&(t=[[r.i,t,""]]),t.locals&&(r.exports=t.locals);var a=i("4f06").default;a("86ab0092",t,!0,{sourceMap:!1,shadowMode:!1})},1857:function(r,e,i){"use strict";var t=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a481"),i("c5f6"),i("f559"),i("ac6a"),i("96cf");var a=t(i("3b8d")),o=t(i("e2b1")),n={data:function(){return{cross:"",ruleForm:{yuyuebianhao:this.getUUID(),changdimingcheng:"",changdileixing:"",yajin:"",shijianchangci:"",yuyueshijian:"",zhanghao:"",xingming:"",dianhua:"",ispay:"",userid:""},user:{},ro:{yuyuebianhao:!1,changdimingcheng:!1,changdileixing:!1,yajin:!1,shijianchangci:!1,yuyueshijian:!1,zhanghao:!1,xingming:!1,dianhua:!1,ispay:!1,userid:!1}}},components:{wPicker:o.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(e){var i,t,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return this.ruleForm.yuyueshijian=this.$utils.getCurDateTime(),i=uni.getStorageSync("nowTable"),r.next=4,this.$api.session(i);case 4:if(t=r.sent,this.user=t.data,this.ruleForm.zhanghao=this.user.zhanghao,this.ro.zhanghao=!0,this.ruleForm.xingming=this.user.xingming,this.ro.xingming=!0,this.ruleForm.dianhua=this.user.dianhua,this.ro.dianhua=!0,this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!e.id){r.next=20;break}return this.ruleForm.id=e.id,r.next=18,this.$api.info("wodeyuyue",this.ruleForm.id);case 18:t=r.sent,this.ruleForm=t.data;case 20:if(this.cross=e.cross,!e.cross){r.next=68;break}a=uni.getStorageSync("crossObj"),r.t0=regeneratorRuntime.keys(a);case 24:if((r.t1=r.t0()).done){r.next=68;break}if(o=r.t1.value,"yuyuebianhao"!=o){r.next=30;break}return this.ruleForm.yuyuebianhao=a[o],this.ro.yuyuebianhao=!0,r.abrupt("continue",24);case 30:if("changdimingcheng"!=o){r.next=34;break}return this.ruleForm.changdimingcheng=a[o],this.ro.changdimingcheng=!0,r.abrupt("continue",24);case 34:if("changdileixing"!=o){r.next=38;break}return this.ruleForm.changdileixing=a[o],this.ro.changdileixing=!0,r.abrupt("continue",24);case 38:if("yajin"!=o){r.next=42;break}return this.ruleForm.yajin=a[o],this.ro.yajin=!0,r.abrupt("continue",24);case 42:if("shijianchangci"!=o){r.next=46;break}return this.ruleForm.shijianchangci=a[o],this.ro.shijianchangci=!0,r.abrupt("continue",24);case 46:if("yuyueshijian"!=o){r.next=50;break}return this.ruleForm.yuyueshijian=a[o],this.ro.yuyueshijian=!0,r.abrupt("continue",24);case 50:if("zhanghao"!=o){r.next=54;break}return this.ruleForm.zhanghao=a[o],this.ro.zhanghao=!0,r.abrupt("continue",24);case 54:if("xingming"!=o){r.next=58;break}return this.ruleForm.xingming=a[o],this.ro.xingming=!0,r.abrupt("continue",24);case 58:if("dianhua"!=o){r.next=62;break}return this.ruleForm.dianhua=a[o],this.ro.dianhua=!0,r.abrupt("continue",24);case 62:if("userid"!=o){r.next=66;break}return this.ruleForm.userid=a[o],this.ro.userid=!0,r.abrupt("continue",24);case 66:r.next=24;break;case 68:this.styleChange();case 69:case"end":return r.stop()}}),r,this)})));function e(e){return r.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},shijianchangciConfirm:function(r){console.log(r),this.ruleForm.shijianchangci=r.result,this.$forceUpdate()},yuyueshijianConfirm:function(r){console.log(r),this.ruleForm.yuyueshijian=r.result,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(){var e,i,t,a,o,n,d,s,u,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!this.ruleForm.yajin||this.$validate.isIntNumer(this.ruleForm.yajin)){r.next=3;break}return this.$utils.msg("押金应输入整数"),r.abrupt("return");case 3:if(!this.ruleForm.dianhua||this.$validate.isMobile(this.ruleForm.dianhua)){r.next=6;break}return this.$utils.msg("电话应输入手机格式"),r.abrupt("return");case 6:if(!this.cross){r.next=22;break}if(a=uni.getStorageSync("statusColumnName"),o=uni.getStorageSync("statusColumnValue"),""==a){r.next=22;break}if(n=uni.getStorageSync("crossObj"),a.startsWith("[")){r.next=18;break}for(d in n)d==a&&(n[d]=o);return s=uni.getStorageSync("crossTable"),r.next=16,this.$api.update("".concat(s),n);case 16:r.next=22;break;case 18:e=Number(uni.getStorageSync("userid")),i=n["id"],t=uni.getStorageSync("statusColumnName"),t=t.replace(/\[/,"").replace(/\]/,"");case 22:if(!i||!e){r.next=44;break}return this.ruleForm.crossuserid=e,this.ruleForm.crossrefid=i,u={page:1,limit:10,crossuserid:e,crossrefid:i},r.next=28,this.$api.list("wodeyuyue",u);case 28:if(c=r.sent,!(c.data.total>=t)){r.next=34;break}return this.$utils.msg(uni.getStorageSync("tips")),r.abrupt("return",!1);case 34:if(!this.ruleForm.id){r.next=39;break}return r.next=37,this.$api.update("wodeyuyue",this.ruleForm);case 37:r.next=41;break;case 39:return r.next=41,this.$api.add("wodeyuyue",this.ruleForm);case 41:this.$utils.msgBack("提交成功");case 42:r.next=52;break;case 44:if(!this.ruleForm.id){r.next=49;break}return r.next=47,this.$api.update("wodeyuyue",this.ruleForm);case 47:r.next=51;break;case 49:return r.next=51,this.$api.add("wodeyuyue",this.ruleForm);case 51:this.$utils.msgBack("提交成功");case 52:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),optionsChange:function(r){this.index=r.target.value},bindDateChange:function(r){this.date=r.target.value},getDate:function(r){var e=new Date,i=e.getFullYear(),t=e.getMonth()+1,a=e.getDate();return"start"===r?i-=60:"end"===r&&(i+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(i,"-").concat(t,"-").concat(a)},toggleTab:function(r){this.$refs[r].show()}}};e.default=n},3213:function(r,e,i){"use strict";var t={"w-picker":i("e2b1").default},a=function(){var r=this,e=r.$createElement,i=r._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-form",{staticClass:"app-update-pv"},[i("v-uni-view",{staticClass:"cu-form-group",style:{padding:" 0 20rpx 0 0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("预约编号")]),i("v-uni-view",{staticClass:"right-input",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"}},[r._v(r._s(r.ruleForm.yuyuebianhao))])],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:" 0 20rpx 0 0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("场地名称")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},attrs:{disabled:r.ro.changdimingcheng,placeholder:"场地名称"},model:{value:r.ruleForm.changdimingcheng,callback:function(e){r.$set(r.ruleForm,"changdimingcheng",e)},expression:"ruleForm.changdimingcheng"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:" 0 20rpx 0 0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("场地类型")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},attrs:{disabled:r.ro.changdileixing,placeholder:"场地类型"},model:{value:r.ruleForm.changdileixing,callback:function(e){r.$set(r.ruleForm,"changdileixing",e)},expression:"ruleForm.changdileixing"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:" 0 20rpx 0 0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("押金")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},attrs:{disabled:r.ro.yajin,placeholder:"押金"},model:{value:r.ruleForm.yajin,callback:function(e){r.$set(r.ruleForm,"yajin",e)},expression:"ruleForm.yajin"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:" 0 20rpx 0 0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("时间场次")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},attrs:{placeholder:"时间场次"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.toggleTab("shijianchangci")}},model:{value:r.ruleForm.shijianchangci,callback:function(e){r.$set(r.ruleForm,"shijianchangci",e)},expression:"ruleForm.shijianchangci"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:" 0 20rpx 0 0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("预约时间")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},attrs:{placeholder:"预约时间"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.toggleTab("yuyueshijian")}},model:{value:r.ruleForm.yuyueshijian,callback:function(e){r.$set(r.ruleForm,"yuyueshijian",e)},expression:"ruleForm.yuyueshijian"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:" 0 20rpx 0 0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("账号")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},attrs:{disabled:r.ro.zhanghao,placeholder:"账号"},model:{value:r.ruleForm.zhanghao,callback:function(e){r.$set(r.ruleForm,"zhanghao",e)},expression:"ruleForm.zhanghao"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:" 0 20rpx 0 0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("姓名")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},attrs:{disabled:r.ro.xingming,placeholder:"姓名"},model:{value:r.ruleForm.xingming,callback:function(e){r.$set(r.ruleForm,"xingming",e)},expression:"ruleForm.xingming"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:" 0 20rpx 0 0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("电话")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},attrs:{disabled:r.ro.dianhua,placeholder:"电话"},model:{value:r.ruleForm.dianhua,callback:function(e){r.$set(r.ruleForm,"dianhua",e)},expression:"ruleForm.dianhua"}})],1),i("v-uni-view",{staticClass:"btn"},[i("v-uni-button",{staticClass:"bg-red",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",margin:"0",backgroundColor:"rgba(223, 114, 11, 1)",borderColor:"#409EFF",borderRadius:"80rpx",color:"#fff",borderWidth:"0",width:"60%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.onSubmitTap.apply(void 0,arguments)}}},[r._v("提交")])],1)],1),i("w-picker",{ref:"shijianchangci",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(e){arguments[0]=e=r.$handleEvent(e),r.shijianchangciConfirm.apply(void 0,arguments)}}}),i("w-picker",{ref:"yuyueshijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(e){arguments[0]=e=r.$handleEvent(e),r.yuyueshijianConfirm.apply(void 0,arguments)}}})],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return t}))},"6a66":function(r,e,i){var t=i("24fb");e=t(!1),e.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-5ec877e5]{padding:%?20?%}.content[data-v-5ec877e5]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-5ec877e5]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-5ec877e5]{width:%?180?%}.avator[data-v-5ec877e5]{width:%?150?%;height:%?60?%}.right-input[data-v-5ec877e5]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-5ec877e5]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-5ec877e5]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-5ec877e5]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-5ec877e5]{border:0}.cu-form-group uni-input[data-v-5ec877e5]{padding:0 %?30?%}.uni-input[data-v-5ec877e5]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-5ec877e5]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-5ec877e5]::after{line-height:%?80?%}.select .uni-input[data-v-5ec877e5]{line-height:%?80?%}.input .right-input[data-v-5ec877e5]{line-height:%?80?%}',""]),r.exports=e},8761:function(r,e,i){"use strict";i.r(e);var t=i("1857"),a=i.n(t);for(var o in t)"default"!==o&&function(r){i.d(e,r,(function(){return t[r]}))}(o);e["default"]=a.a}}]);