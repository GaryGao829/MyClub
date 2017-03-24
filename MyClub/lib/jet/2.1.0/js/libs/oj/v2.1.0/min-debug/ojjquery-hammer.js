/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "hammerjs"], function($oj$$42$$, $$$$39$$, $Hammer$$6$$) {
  $Hammer$$6$$ ? ($$$$39$$.fn.$ojHammer$ = function $$$$$39$$$fn$$ojHammer$$($options$$346$$) {
    return "instance" == $options$$346$$ ? this.data("ojHammer") : this.each(function() {
      var $$el$$1$$ = $$$$39$$(this);
      $$el$$1$$.data("ojHammer") || $$el$$1$$.data("ojHammer", new $Hammer$$6$$.Manager($$el$$1$$[0], $options$$346$$));
    });
  }, $goog$exportPath_$$("$.fn.ojHammer", $$$$39$$.fn.$ojHammer$, void 0), $Hammer$$6$$.Manager.prototype.emit = function($originalEmit$$) {
    return function($type$$94$$, $data$$154$$) {
      $originalEmit$$.call(this, $type$$94$$, $data$$154$$);
      $$$$39$$(this.element).trigger({type:$type$$94$$, gesture:$data$$154$$});
    };
  }($Hammer$$6$$.Manager.prototype.emit)) : $oj$$42$$.$Logger$.warn("Hammer jQuery extension loaded without Hammer.");
});
