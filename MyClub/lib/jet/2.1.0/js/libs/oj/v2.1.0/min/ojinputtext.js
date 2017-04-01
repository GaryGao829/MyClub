/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojeditablevalue"],function(a,g){a.Na("oj.inputBase",g.oj.editableValue,{version:"1.0.0",widgetEventPrefix:"oj",_ATTR_CHECK:[],_CLASS_NAMES:"",_WIDGET_CLASS_NAMES:"",_ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES:"",_GET_INIT_OPTIONS_PROPS:[{ga:"disabled",Od:!0},{ga:"pattern"},{ga:"placeholder"},{ga:"value"},{ga:"readonly",option:"readOnly",Od:!0},{ga:"required",oh:!0,Od:!0},{ga:"title"}],_INPUT_HELPER_KEY:"",z0:"blur",u1:"keydown",k1:"input",U0:"drop",options:{converter:void 0,
placeholder:void 0,rawValue:void 0,readOnly:!1},IB:function(a){var b=this._superApply(arguments);this.wza();return b},Xf:function(c,b){this._super(c,b);a.Me.np(this._GET_INIT_OPTIONS_PROPS,b,this)},_ComponentCreate:function(){var a=this._superApply(arguments),b=this.options.readOnly;this.Zh="rtl"===this.hd();"boolean"===typeof b&&this.element.prop("readonly",b);this.vB()?(this.ODa(),this.V0()&&this.NDa(),this._focusable({element:this.Eq,applyHighlight:!0})):this._focusable({element:this.element,applyHighlight:!0});
this.AR={};this.Ue=null;return a},Hh:function(){var a=this._superApply(arguments),b=this;this._CLASS_NAMES&&this.element.addClass(this._CLASS_NAMES);this.r3();this.RO();g.each(["disabled","readOnly"],function(a,c){b.options[c]&&b.M$(c,b.options[c])});return a},M$:function(a,b){"disabled"===a&&this.element.prop("disabled",b);"readOnly"===a&&(this.element.prop("readonly",b),this.lK("readOnly",b));"disabled"!==a&&"readOnly"!==a||this.r3()},_setOption:function(c,b){var d=this._superApply(arguments);"disabled"!==
c&&"readOnly"!==c||this.M$(c,b);"pattern"===c&&(this.AR[a.Pe.VALIDATOR_TYPE_REGEXP]=this.R6(),this.rx());return d},_destroy:function(){var c=this._superApply(arguments);this.element.off("blur drop keydown input");this.kU&&this.kU.remove();this.vB()&&(this.V0()?a.u.unwrap(this.element,this.Eq):a.u.unwrap(this.element));return c},r3:function(){if(!this.options.readOnly&&!this.options.disabled){this.Ue={};var a=g.proxy(this.UU,this),b=g.proxy(this.ZJ,this),d=g.proxy(this.Qya,this),e=function(){this.focus()};
this.element.on("blur",a);this.element.on("keydown",b);this.element.on("input",d);this.element.on("drop",e);this.Ue[this.z0]=a;this.Ue[this.u1]=b;this.Ue[this.k1]=d;this.Ue[this.U0]=e}else if(this.Ue)for(a=[this.z0,this.u1,this.k1,this.U0],b=0,d=a.length;b<d;b++)this.Ue[a[b]]&&(this.element.off(a[b],this.Ue[a[b]]),delete this.Ue[a[b]])},Tr:{readOnly:"oj-read-only"},wza:function(){for(var a=this._ATTR_CHECK,b=0,d=a.length;b<d;b++){var e=a[b].attr;"setMandatory"in a[b]&&this.element.attr(e,a[b].setMandatory)}},
UU:function(a){this.ic(this.Ag(),a)},ZJ:function(a){a.keyCode===g.ui.keyCode.ENTER&&this.ic(this.Ag(),a)},Qya:function(a){this.Vp(this.Wf().val(),a)},vB:function(){return this._WIDGET_CLASS_NAMES},V0:function(){return this._ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES},ODa:function(){this.oe?(this.Eq=g(this.oe).addClass(this._WIDGET_CLASS_NAMES),this.Eq.append(this.element)):(g(this.element).wrap(g("\x3cdiv\x3e").addClass(this._WIDGET_CLASS_NAMES)),this.Eq=this.element.parent())},NDa:function(){g(this.element).wrap(g("\x3cdiv\x3e").addClass(this._ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES))},
RO:function(){if(this._INPUT_HELPER_KEY&&this.vB()){var a=this.element.attr("aria-describedby")||"",b=this.uk(this._INPUT_HELPER_KEY);this.element.attr("aria-describedby",a+(" "+b));this.kU=g("\x3cdiv class\x3d'oj-helper-hidden-accessible' id\x3d'"+b+"'\x3e"+this.Gm(this.F(this._INPUT_HELPER_KEY))+"\x3c/div\x3e");this.vka().append(this.kU)}},Gm:function(a){return g("\x3cspan\x3e"+a+"\x3c/span\x3e").text()},vka:function(){return this.widget()},xB:function(){var c=this._superApply(arguments);this.options.pattern&&
(this.AR[a.Pe.VALIDATOR_TYPE_REGEXP]=this.R6());return g.extend(this.AR,c)},lK:function(a,b){-1!=Object.keys(this.Tr).indexOf(a)&&this.widget().toggleClass(this.Tr[a],!!b)},R6:function(){if(!this.options.pattern)return null;var c={pattern:this.options.pattern,label:this.IS()};g.extend(c,this.options.translations.regexp||{});return a.Ea.Vw(a.Pe.VALIDATOR_TYPE_REGEXP).createValidator(c)},uk:function(a){return this.uuid+"_"+a},hKa:function(){return this.Zh},refresh:function(){var a=this._superApply(arguments);
this.Zh="rtl"===this.hd();return a},getNodeBySubId:function(a){return this._super(a)},widget:function(){return this.vB()?this.Eq:this.element}},!0);a.Na("oj.ojInputPassword",g.oj.inputBase,{version:"1.0.0",defaultElement:"\x3cinput\x3e",widgetEventPrefix:"oj",_ATTR_CHECK:[{attr:"type",setMandatory:"password"}],_CLASS_NAMES:"oj-inputpassword-input",_WIDGET_CLASS_NAMES:"oj-inputpassword oj-form-control oj-component",options:{pattern:""},getNodeBySubId:function(a){var b=this._superApply(arguments),d;
b||(d=a.subId,"oj-inputpassword-input"===d&&(b=this.element?this.element[0]:null));return b||null},_GetDefaultStyleClass:function(){return"oj-inputpassword"}});a.Na("oj.ojTextArea",g.oj.inputBase,{version:"1.0.0",defaultElement:"\x3ctextarea\x3e",widgetEventPrefix:"oj",_ATTR_CHECK:[],_CLASS_NAMES:"oj-textarea-input",_WIDGET_CLASS_NAMES:"oj-textarea oj-form-control oj-component",options:{pattern:""},getNodeBySubId:function(a){var b=this._superApply(arguments),d;b||(d=a.subId,"oj-textarea-input"===
d&&(b=this.element?this.element[0]:null));return b||null},_GetDefaultStyleClass:function(){return"oj-textarea"},IG:function(){return"oj-inputBase"}});a.Na("oj.ojInputText",g.oj.inputBase,{version:"1.0.0",defaultElement:"\x3cinput\x3e",widgetEventPrefix:"oj",_ATTR_CHECK:[{attr:"type",setMandatory:"text"}],_CLASS_NAMES:"oj-inputtext-input",_WIDGET_CLASS_NAMES:"oj-inputtext oj-form-control oj-component",options:{pattern:""},getNodeBySubId:function(a){var b=this._superApply(arguments),d;b||(d=a.subId,
"oj-inputtext-input"===d&&(b=this.element?this.element[0]:null));return b||null},_GetDefaultStyleClass:function(){return"oj-inputtext"},IG:function(){return"oj-inputBase"}});a.Components.Ta("inputBase","editableValue",{properties:{converter:{type:"Object"},placeholder:{type:"string"},rawValue:{type:"string",readOnly:!0,writeback:!0},readOnly:{type:"boolean"}},methods:{refresh:{},widget:{}},extension:{_hasWrapper:!0,_innerElement:"input",_widgetName:"inputBase"}});a.Components.Ta("ojInputPassword",
"inputBase",{properties:{pattern:{type:"string"},value:{type:"string",writeback:!0}},methods:{},extension:{_hasWrapper:!0,_innerElement:"input",_widgetName:"ojInputPassword"}});a.Components.register("oj-input-password",a.Components.getMetadata("ojInputPassword"));a.Components.Ta("ojInputText","inputBase",{properties:{pattern:{type:"string"},value:{type:"string",writeback:!0}},methods:{},extension:{_hasWrapper:!0,_innerElement:"input",_widgetName:"ojInputText"}});a.Components.register("oj-input-text",
a.Components.getMetadata("ojInputText"));a.Components.Ta("ojTextArea","inputBase",{properties:{pattern:{type:"string"},value:{type:"string",writeback:!0}},methods:{},extension:{_hasWrapper:!0,_innerElement:"textarea",_widgetName:"ojTextArea"}});a.Components.register("oj-text-area",a.Components.getMetadata("ojTextArea"))});