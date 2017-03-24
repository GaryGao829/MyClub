/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$25$$, $$$$23$$) {
  (function() {
    $oj$$25$$.$__registerWidget$("oj.ojTrain", $$$$23$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{steps:[], selected:"", optionChange:null, beforeDeselect:null, deselect:null, beforeSelect:null, select:null}, $_stepNum$:0, $_stepArray$:null, _ComponentCreate:function() {
      this._super();
      this.$_setupTrain$();
    }, $_setupTrain$:function() {
      var $i$$366_options$$288$$ = this.options, $stepTag_steps$$ = $i$$366_options$$288$$.steps;
      this.$_stepNum$ = $stepTag_steps$$.length;
      this.$_wrapper$ = $$$$23$$("\x3cdiv class\x3d'oj-train-wrapper'\x3e\x3c/div\x3e");
      this.$_wrapper$.appendTo(this.element);
      this.$_connectorWrapper$ = $$$$23$$("\x3cdiv class\x3d'oj-train-connector-wrapper'\x3e\x3c/div\x3e");
      this.$_connectorWrapper$.appendTo(this.$_wrapper$);
      var $messageType_styleClass$$10$$ = this.element.attr("class");
      (this.$_stretch$ = null != $messageType_styleClass$$10$$ && 0 <= $messageType_styleClass$$10$$.indexOf("oj-train-stretch")) && this.$_connectorWrapper$.css("padding", "0 " + 100 / (2 * this.$_stepNum$) + "%");
      this.$_connector$ = $$$$23$$("\x3cdiv class\x3d'oj-train-connector'\x3e\x3c/div\x3e");
      this.$_connector$.appendTo(this.$_connectorWrapper$);
      this.$_stepList$ = $$$$23$$("\x3cul\x3e");
      this.$_stepList$.addClass("oj-train-step-list");
      this.$_connectorFill$ = $$$$23$$("\x3cdiv class\x3d'oj-train-connector-fill'\x3e\x3c/div\x3e");
      this.$_connectorFill$.appendTo(this.$_connectorWrapper$);
      this.$_setupArray$();
      this.$_selectedIndex$ = this.$_getStepIndex$($i$$366_options$$288$$.selected);
      -1 === this.$_selectedIndex$ && $stepTag_steps$$[0] && $stepTag_steps$$[0].id && (this.$_selectedIndex$ = 0, $i$$366_options$$288$$.selected = $stepTag_steps$$[0].id);
      for ($i$$366_options$$288$$ = 0;$i$$366_options$$288$$ < this.$_stepNum$;$i$$366_options$$288$$++) {
        $stepTag_steps$$ = $$$$23$$("\x3cli\x3e").addClass("oj-train-step-list-item").attr({id:this.$_stepArray$[$i$$366_options$$288$$][1]}), $messageType_styleClass$$10$$ = this.$_stepArray$[$i$$366_options$$288$$][4], "confirmation" === $messageType_styleClass$$10$$ ? $stepTag_steps$$.addClass("oj-confirmation") : "info" === $messageType_styleClass$$10$$ ? $stepTag_steps$$.addClass("oj-info") : "error" === $messageType_styleClass$$10$$ || "fatal" === $messageType_styleClass$$10$$ ? $stepTag_steps$$.addClass("oj-invalid") : 
        "warning" === $messageType_styleClass$$10$$ && $stepTag_steps$$.addClass("oj-warning"), $stepTag_steps$$.appendTo(this.$_stepList$), this.$_drawLabel$($i$$366_options$$288$$), this.$_drawStepFill$($i$$366_options$$288$$), this.$_drawConnectorLine$($i$$366_options$$288$$), this.$_drawButton$($i$$366_options$$288$$), this.$_drawStepNumberLabel$($i$$366_options$$288$$), this.$_drawMessageType$($i$$366_options$$288$$), this.$_stretch$ && $stepTag_steps$$.css("width", 100 / this.$_stepNum$ + "%")
        ;
      }
      this.$_connectorFill$.css({width:(this.$_stepNum$ - 1 === this.$_selectedIndex$ ? 100 : 100 / (2 * (this.$_stepNum$ - 1)) + this.$_selectedIndex$ / (this.$_stepNum$ - 1) * 100) + "%"});
      this.$_stepList$.appendTo(this.$_wrapper$);
      this.element.addClass("oj-train");
    }, $_setupArray$:function() {
      var $options$$289$$ = this.options;
      this.$_stepArray$ = [];
      for (var $i$$367$$ = 0;$i$$367$$ < this.$_stepNum$;$i$$367$$++) {
        var $step$$ = $options$$289$$.steps[$i$$367$$];
        this.$_stepArray$[$i$$367$$] = Array(5);
        this.$_stepArray$[$i$$367$$][0] = $step$$.label ? $step$$.label : null;
        this.$_stepArray$[$i$$367$$][1] = $step$$.id ? $step$$.id : null;
        this.$_stepArray$[$i$$367$$][2] = $step$$.disabled ? !0 : !1;
        this.$_stepArray$[$i$$367$$][3] = $step$$.visited ? !0 : !1;
        this.$_stepArray$[$i$$367$$][4] = $step$$.messageType ? $step$$.messageType : null;
      }
    }, $_drawButton$:function($index$$224$$) {
      var $button$$1$$ = $$$$23$$("\x3cdiv/\x3e").addClass("oj-train-button"), $scrnRead$$ = $$$$23$$("\x3cspan/\x3e"), $self$$165$$ = this, $desc$$1$$ = "";
      if (this.$_stepArray$[$index$$224$$]) {
        var $stepBackground_visited$$ = this.$_stepArray$[$index$$224$$][3], $disabled$$8$$ = this.$_stepArray$[$index$$224$$][2];
        this.$_selectedIndex$ === $index$$224$$ ? ($button$$1$$.addClass("oj-selected"), $desc$$1$$ = " current ") : $stepBackground_visited$$ && !$disabled$$8$$ ? ($button$$1$$.addClass("oj-visited"), $desc$$1$$ = " visited ") : $stepBackground_visited$$ || $disabled$$8$$ ? $button$$1$$.addClass("oj-disabled") : ($button$$1$$.addClass("oj-default"), $desc$$1$$ = " not visited ");
        this.$_stepArray$[$index$$224$$][2] || this.$_selectedIndex$ === $index$$224$$ || (this._hoverable($button$$1$$), this.$_AddHoverAndActiveListeners$($button$$1$$), $button$$1$$.on("click" + this.eventNamespace, function($event$$514$$) {
          $self$$165$$.$_fireOptionChange$("selected", $self$$165$$.options.selected, this.parentNode.parentNode.id, $event$$514$$);
          $self$$165$$.refresh();
        }));
        $stepBackground_visited$$ = this.$_stepList$.children().eq($index$$224$$).find(".oj-train-button-connector");
        1 <= $stepBackground_visited$$.length && $stepBackground_visited$$.children().remove();
        $stepBackground_visited$$.append($button$$1$$);
        $scrnRead$$.text($desc$$1$$);
        $scrnRead$$.addClass("oj-helper-hidden-accessible");
        this.$_stepList$.children().eq($index$$224$$).find("a").append($scrnRead$$);
      }
    }, $_drawMessageType$:function($index$$225$$) {
      if (this.$_stepArray$[$index$$225$$] && this.$_stepArray$[$index$$225$$][4]) {
        var $icon$$9$$ = $$$$23$$("\x3cdiv/\x3e").addClass("oj-train-icon oj-component-icon"), $scrnRead$$1$$ = $$$$23$$("\x3cspan/\x3e"), $desc$$2$$ = "", $self$$166$$ = this, $messageType$$1$$ = this.$_stepArray$[$index$$225$$][4];
        "confirmation" === $messageType$$1$$ ? ($icon$$9$$.addClass("oj-confirmation"), $desc$$2$$ = " Confirmation ") : "info" === $messageType$$1$$ ? ($icon$$9$$.addClass("oj-info"), $desc$$2$$ = " Info ") : "error" === $messageType$$1$$ ? ($icon$$9$$.addClass("oj-error"), $desc$$2$$ = " Error ") : "fatal" === $messageType$$1$$ ? ($icon$$9$$.addClass("oj-error"), $desc$$2$$ = " Error ") : "warning" === $messageType$$1$$ && ($icon$$9$$.addClass("oj-warning"), $desc$$2$$ = " Warning ");
        var $button$$2$$ = this.$_stepList$.children().eq($index$$225$$).find(".oj-train-button");
        2 <= $button$$2$$.children().length && $button$$2$$.children()[1].remove();
        if (!this.$_stepArray$[$index$$225$$][2] && this.$_selectedIndex$ !== $index$$225$$) {
          $icon$$9$$.on("click" + this.eventNamespace, function($event$$515$$) {
            $self$$166$$.$_fireOptionChange$("selected", $self$$166$$.options.selected, this.parentNode.parentNode.parentNode.id, $event$$515$$);
            $self$$166$$.refresh();
          });
        }
        null != $messageType$$1$$ && ($scrnRead$$1$$.text($desc$$2$$), $scrnRead$$1$$.addClass("oj-helper-hidden-accessible"), this.$_stepList$.children().eq($index$$225$$).find("a").append($scrnRead$$1$$), $button$$2$$.append($icon$$9$$));
      }
    }, $_fireOptionChange$:function($eventData$$9_key$$150$$, $previousValue$$1_stepIndex$$, $value$$276$$, $originalEvent$$1$$) {
      $eventData$$9_key$$150$$ = {option:$eventData$$9_key$$150$$, fromStep:this.getStep($previousValue$$1_stepIndex$$), toStep:this.getStep($value$$276$$), optionMetadata:{writeback:$originalEvent$$1$$ ? "shouldWrite" : "shouldNotWrite"}};
      !1 !== this._trigger("beforeDeselect", $originalEvent$$1$$, $eventData$$9_key$$150$$) && !1 !== this._trigger("beforeSelect", $originalEvent$$1$$, $eventData$$9_key$$150$$) && ($previousValue$$1_stepIndex$$ = this.$_getStepIndex$($previousValue$$1_stepIndex$$), -1 !== $previousValue$$1_stepIndex$$ && (this.options.steps[$previousValue$$1_stepIndex$$].visited = !0), this._trigger("deselect", $originalEvent$$1$$, $eventData$$9_key$$150$$), this.option("selected", $value$$276$$, {_context:{originalEvent:$originalEvent$$1$$, 
      $internalSet$:!0}}), this._trigger("select", $originalEvent$$1$$, $eventData$$9_key$$150$$));
    }, $_drawStepNumberLabel$:function($index$$226$$) {
      var $stepNumberLabel$$ = $$$$23$$("\x3cdiv/\x3e").addClass("oj-train-button-text");
      $stepNumberLabel$$.append(($index$$226$$ + 1).toString());
      this.$_stepList$.children().eq($index$$226$$).find(".oj-train-button").append($stepNumberLabel$$);
    }, $_drawConnectorLine$:function($index$$227$$) {
      if ($index$$227$$ != this.$_stepNum$ - 1) {
        var $stepConnector$$ = $$$$23$$("\x3cdiv/\x3e").addClass("oj-train-step-individual-connector");
        this.$_stepList$.children().eq($index$$227$$).prepend($stepConnector$$);
      }
    }, $_drawStepFill$:function($index$$228_stepLi$$) {
      var $stepFill$$ = $$$$23$$("\x3cdiv/\x3e");
      $stepFill$$.addClass("oj-train-button-connector");
      this.$_stepArray$[$index$$228_stepLi$$] && ($index$$228_stepLi$$ <= this.$_selectedIndex$ && $stepFill$$.addClass("oj-train-fill"), $index$$228_stepLi$$ = this.$_stepList$.children().eq($index$$228_stepLi$$).children(), $stepFill$$.insertBefore($index$$228_stepLi$$));
    }, $_drawLabel$:function($index$$229$$) {
      var $self$$167$$ = this;
      if (this.$_stepArray$[$index$$229$$]) {
        var $labelWrapper$$ = $$$$23$$("\x3cdiv/\x3e").addClass("oj-train-label-wrapper"), $label$$17_stepLi$$1$$ = $$$$23$$("\x3ca\x3e");
        $label$$17_stepLi$$1$$.text(this.$_stepArray$[$index$$229$$][0]);
        var $disabled$$9$$ = this.$_stepArray$[$index$$229$$][2];
        $labelWrapper$$.append($label$$17_stepLi$$1$$);
        $label$$17_stepLi$$1$$.addClass("oj-train-label");
        $index$$229$$ === this.$_selectedIndex$ ? $label$$17_stepLi$$1$$.addClass("oj-selected") : this.$_stepArray$[$index$$229$$][3] && !$disabled$$9$$ ? $label$$17_stepLi$$1$$.addClass("oj-visited") : $disabled$$9$$ && $label$$17_stepLi$$1$$.addClass("oj-disabled");
        $disabled$$9$$ || ($label$$17_stepLi$$1$$.attr("href", "#"), this.$_AddHoverAndActiveListeners$($label$$17_stepLi$$1$$), $label$$17_stepLi$$1$$.on("click keydown" + this.eventNamespace, function($event$$516$$) {
          if ($event$$516$$.keyCode === $$$$23$$.ui.keyCode.ENTER || "click" === $event$$516$$.type) {
            $event$$516$$.preventDefault(), $self$$167$$.$_fireOptionChange$("selected", $self$$167$$.options.selected, this.parentNode.parentNode.id, $event$$516$$), $self$$167$$.refresh(), $event$$516$$.keyCode === $$$$23$$.ui.keyCode.ENTER && $self$$167$$.$_setFocus$(this.parentNode.parentNode.id);
          }
        }));
        $label$$17_stepLi$$1$$ = this.$_stepList$.children().eq($index$$229$$).children();
        2 <= $label$$17_stepLi$$1$$.length && $label$$17_stepLi$$1$$[1].remove();
        this.$_stepList$.children().eq($index$$229$$).append($labelWrapper$$);
      }
    }, $_getStepIndex$:function($id$$43$$) {
      for (var $i$$368$$ = 0;$i$$368$$ < this.$_stepNum$;$i$$368$$++) {
        if (this.$_stepArray$[$i$$368$$] && this.$_stepArray$[$i$$368$$][1] === $id$$43$$) {
          return $i$$368$$;
        }
      }
      return-1;
    }, getStep:function($id$$44$$) {
      for (var $i$$369$$ = 0;$i$$369$$ < this.$_stepNum$;$i$$369$$++) {
        if (this.$_stepArray$[$i$$369$$] && this.$_stepArray$[$i$$369$$][1] === $id$$44$$) {
          return jQuery.extend({}, this.options.steps[$i$$369$$]);
        }
      }
      return null;
    }, nextSelectableStep:function() {
      for (var $i$$370$$ = this.$_getStepIndex$(this.options.selected);$i$$370$$ < this.$_stepNum$;$i$$370$$++) {
        if ($i$$370$$ + 1 < this.$_stepNum$ && this.$_stepArray$[$i$$370$$ + 1] && !this.$_stepArray$[$i$$370$$ + 1][2]) {
          return this.$_stepArray$[$i$$370$$ + 1][1];
        }
      }
      return null;
    }, previousSelectableStep:function() {
      for (var $i$$371$$ = this.$_getStepIndex$(this.options.selected);0 <= $i$$371$$;$i$$371$$--) {
        if (this.$_stepArray$[$i$$371$$ - 1] && !this.$_stepArray$[$i$$371$$ - 1][2]) {
          return this.$_stepArray$[$i$$371$$ - 1][1];
        }
      }
      return null;
    }, setStep:function($stepProperties$$) {
      if ($stepProperties$$.id) {
        var $stepInfo$$ = this.getStep($stepProperties$$.id), $stepIndex$$1_stepObj$$ = this.$_getStepIndex$($stepProperties$$.id);
        -1 !== $stepIndex$$1_stepObj$$ && ($stepIndex$$1_stepObj$$ = this.options.steps[$stepIndex$$1_stepObj$$], $stepProperties$$.label && ($stepInfo$$[0] = $stepProperties$$.label, $stepIndex$$1_stepObj$$.label = $stepProperties$$.label), "boolean" === typeof $stepProperties$$.disabled && ($stepInfo$$[2] = $stepProperties$$.disabled, $stepIndex$$1_stepObj$$.disabled = $stepProperties$$.disabled), "boolean" === typeof $stepProperties$$.visited && ($stepInfo$$[3] = $stepProperties$$.visited, $stepIndex$$1_stepObj$$.visited = 
        $stepProperties$$.visited), $stepProperties$$.messageType && ($stepInfo$$[4] = $stepProperties$$.messageType, $stepIndex$$1_stepObj$$.messageType = $stepProperties$$.messageType));
        this.refresh();
      }
    }, _setOptions:function($options$$290$$) {
      this._super($options$$290$$);
      this.refresh();
    }, _setOption:function($key$$151$$, $value$$277$$, $flags$$35$$) {
      "selected" === $key$$151$$ && this.options.selected && this.$_stepArray$ && this.$_stepArray$[this.$_selectedIndex$] && this.$_fireOptionChange$("selected", this.$_stepArray$[this.$_selectedIndex$][1], $value$$277$$, null);
      this._super($key$$151$$, $value$$277$$, $flags$$35$$);
    }, refresh:function() {
      this._super();
      this._destroy();
      this.$_setupTrain$();
    }, _destroy:function() {
      this.$_stepList$.children().each(function() {
        $$$$23$$(this).remove();
      });
      this.element.removeClass("oj-train");
      this.element.find(".oj-train-wrapper").remove();
      this.element.find(".oj-train-connector-wrapper").remove();
      this.element.find(".oj-train-step-list").remove();
      this.element.find(".oj-train-step-list").remove();
      this._super();
    }, $_setFocus$:function($id$$45_index$$230$$) {
      $id$$45_index$$230$$ = this.$_getStepIndex$($id$$45_index$$230$$);
      for (var $i$$372$$ = 0;$i$$372$$ < this.$_stepNum$;$i$$372$$++) {
        if (this.$_stepArray$[($id$$45_index$$230$$ + $i$$372$$ + 1) % this.$_stepNum$] && !this.$_stepArray$[($id$$45_index$$230$$ + $i$$372$$ + 1) % this.$_stepNum$][2]) {
          this.$_stepList$.children().eq(($id$$45_index$$230$$ + $i$$372$$ + 1) % this.$_stepNum$).find(".oj-train-label").focus();
          break;
        }
      }
    }, getNodeBySubId:function($locator$$31$$) {
      if (null === $locator$$31$$) {
        return this.element ? this.element[0] : null;
      }
      var $index$$231$$ = $locator$$31$$.index;
      if ("number" !== typeof $index$$231$$ || 0 > $index$$231$$ || $index$$231$$ >= this.$_stepNum$) {
        return null;
      }
      switch($locator$$31$$.subId) {
        case "oj-train-step":
          return this.$_stepList$.children().eq($index$$231$$)[0];
        case "oj-train-button":
          return this.$_stepList$.children().eq($index$$231$$).find(".oj-train-button")[0];
        case "oj-train-button-connector":
          return this.$_stepList$.children().eq($index$$231$$).find(".oj-train-button-connector")[0];
        case "oj-train-connector":
          return this.$_connector$;
        case "oj-train-connector-fill":
          return this.$_connectorFill$;
        case "oj-train-icon":
          return this.$_stepList$.children().eq($index$$231$$).find(".oj-train-icon")[0];
        case "oj-train-label":
          return this.$_stepList$.children().eq($index$$231$$).find(".oj-train-label")[0];
      }
      return null;
    }, getSubIdByNode:function($node$$88$$) {
      for (var $stepNum$$ = this.$_stepArray$ ? this.$_stepArray$.length : 0, $stepIndex$$3$$ = 0;$stepIndex$$3$$ < $stepNum$$;$stepIndex$$3$$++) {
        var $stepLocator$$ = {subId:"oj-train-step", index:$stepIndex$$3$$};
        if ($node$$88$$ === this.getNodeBySubId($stepLocator$$)) {
          return $stepLocator$$;
        }
      }
      return null;
    }});
  })();
});
