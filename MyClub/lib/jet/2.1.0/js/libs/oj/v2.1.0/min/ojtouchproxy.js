/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 jQuery UI Touch Punch 0.2.3

 Copyright 2011-2014, Dave Furfero
 Dual licensed under the MIT or GPL Version 2 licenses.
*/
define(["ojs/ojcore","jquery"],function(a,g){a.Bg=function(a){this._init(a)};a.Bg.prototype._init=function(a){this.pd=a;this.WK=this.tE=!1;this.YK=g.proxy(this.fDa,this);this.rE=g.proxy(this.dDa,this);this.hW=g.proxy(this.eDa,this);this.pd.on({touchstart:this.YK,touchend:this.rE,touchmove:this.hW,touchcancel:this.rE})};a.Bg.prototype._destroy=function(){this.pd&&this.YK&&(this.pd.off({touchstart:this.YK,touchmove:this.hW,touchend:this.rE,touchcancel:this.rE}),this.hW=this.rE=this.YK=void 0)};a.Bg.prototype.Zv=
function(a,b){if(!(1<a.originalEvent.touches.length)){"touchstart"!=a.type&&"touchend"!=a.type&&a.preventDefault();var d=a.originalEvent.changedTouches[0],e=document.createEvent("MouseEvent");e.initMouseEvent(b,!0,!0,window,1,d.screenX,d.screenY,d.clientX,d.clientY,!1,!1,!1,!1,0,null);d.target.dispatchEvent(e)}};a.Bg.prototype.fDa=function(a){this.tE||(this.tE=!0,this.WK=!1,this.Zv(a,"mouseover"),this.Zv(a,"mousemove"),this.Zv(a,"mousedown"))};a.Bg.prototype.eDa=function(a){this.tE&&(this.WK=!0,this.Zv(a,
"mousemove"))};a.Bg.prototype.dDa=function(a){this.tE&&(this.Zv(a,"mouseup"),this.Zv(a,"mouseout"),this.WK||"touchend"!=a.type||this.Zv(a,"click"),this.tE=!1)};a.Bg.jH="_ojTouchProxy";a.Bg.hda=function(c){c=g(c);var b=c.data(a.Bg.jH);b||(b=new a.Bg(c),c.data(a.Bg.jH,b));return b};a.Bg.Lha=function(c){c=g(c);var b=c.data(a.Bg.jH);b&&(b._destroy(),c.removeData(a.Bg.jH))}});