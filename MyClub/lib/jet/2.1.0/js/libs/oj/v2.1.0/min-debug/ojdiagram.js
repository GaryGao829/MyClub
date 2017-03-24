/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtDiagram"], function($oj$$85$$, $$$$77$$, $comp$$17$$, $base$$14$$, $dvt$$12$$) {
  $oj$$85$$.$__registerWidget$("oj.ojDiagram", $$$$77$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{optionChange:null, beforeExpand:null, expand:null, beforeCollapse:null, collapse:null}, $_Render$:function($isResize$$1$$) {
    this.options._logger = $oj$$85$$.$Logger$;
    this.options._templateFunction && (this.options.renderer = this.$_getTemplateRenderer$(this.options._templateFunction));
    this.options.renderer && (this.options._contextHandler = this.$_getContextHandler$());
    return this._super($isResize$$1$$);
  }, $_getTemplateRenderer$:function($templateFunction$$1$$) {
    var $thisRef$$3$$ = this;
    return function($context$$186_elem$$211$$) {
      var $dummyDiv$$4$$ = document.createElement("div");
      $dummyDiv$$4$$.style.display = "none";
      $dummyDiv$$4$$.$_dvtcontext$ = $thisRef$$3$$.$_context$;
      $thisRef$$3$$.element.append($dummyDiv$$4$$);
      $templateFunction$$1$$({parentElement:$dummyDiv$$4$$, data:$context$$186_elem$$211$$.data});
      return($context$$186_elem$$211$$ = $dummyDiv$$4$$.children[0]) && "http://www.w3.org/2000/svg" === $context$$186_elem$$211$$.namespaceURI ? ($dummyDiv$$4$$.removeChild($context$$186_elem$$211$$), $$$$77$$($dummyDiv$$4$$).remove(), $context$$186_elem$$211$$) : $context$$186_elem$$211$$ ? $thisRef$$3$$.$_GetDvtComponent$($context$$186_elem$$211$$) : null;
    };
  }, $_getContextHandler$:function() {
    var $thisRef$$4$$ = this;
    return function($parentElement$$10$$, $rootElement$$21$$, $childContent$$, $data$$186$$, $state$$16$$, $previousState$$1$$) {
      return{component:$oj$$85$$.Components.$getWidgetConstructor$($thisRef$$4$$.element), parentElement:$parentElement$$10$$, rootElement:$rootElement$$21$$, content:$childContent$$, data:$data$$186$$, state:$state$$16$$, previousState:$previousState$$1$$, id:$data$$186$$.id, type:"node", label:$data$$186$$.label};
    };
  }, renderDefaultHover:function($context$$188$$) {
    $context$$188$$.previousState && $context$$188$$.state.hovered == $context$$188$$.previousState.hovered || this.$_GetDvtComponent$(this.element).processDefaultHoverEffect($context$$188$$.id, $context$$188$$.state.hovered);
  }, renderDefaultSelection:function($context$$189$$) {
    $context$$189$$.previousState && $context$$189$$.state.selected == $context$$189$$.previousState.selected || this.$_GetDvtComponent$(this.element).processDefaultSelectionEffect($context$$189$$.id, $context$$189$$.state.selected);
  }, renderDefaultFocus:function($context$$190$$) {
    $context$$190$$.previousState && $context$$190$$.state.focused == $context$$190$$.previousState.focused || this.$_GetDvtComponent$(this.element).processDefaultFocusEffect($context$$190$$.id, $context$$190$$.state.focused);
  }, $_CreateDvtComponent$:function($context$$191$$, $callback$$149$$, $callbackObj$$15$$) {
    return $dvt$$12$$.Diagram.newInstance($context$$191$$, $callback$$149$$, $callbackObj$$15$$);
  }, $_ConvertLocatorToSubId$:function($locator$$67$$) {
    var $subId$$71$$ = $locator$$67$$.subId;
    "oj-diagram-link" == $subId$$71$$ ? $subId$$71$$ = "link[" + $locator$$67$$.index + "]" : "oj-diagram-node" == $subId$$71$$ ? $subId$$71$$ = "node[" + $locator$$67$$.index + "]" : "oj-diagram-tooltip" == $subId$$71$$ && ($subId$$71$$ = "tooltip");
    return $subId$$71$$;
  }, $_ConvertSubIdToLocator$:function($subId$$72$$) {
    var $locator$$68$$ = {};
    0 == $subId$$72$$.indexOf("link") ? ($locator$$68$$.subId = "oj-diagram-link", $locator$$68$$.index = this.$_GetFirstIndex$($subId$$72$$)) : 0 == $subId$$72$$.indexOf("node") ? ($locator$$68$$.subId = "oj-diagram-node", $locator$$68$$.index = this.$_GetFirstIndex$($subId$$72$$)) : "tooltip" == $subId$$72$$ && ($locator$$68$$.subId = "oj-diagram-tooltip");
    return $locator$$68$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$26$$ = this._super();
    $styleClasses$$26$$.push("oj-diagram");
    return $styleClasses$$26$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$27$$ = this._super();
    $styleClasses$$27$$["oj-diagram-node-label"] = {path:"styleDefaults/nodeDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$27$$["oj-diagram-node oj-selected"] = {path:"styleDefaults/nodeDefaults/selectionColor", property:"border-color"};
    $styleClasses$$27$$["oj-diagram-node oj-hover"] = [{path:"styleDefaults/nodeDefaults/hoverOuterColor", property:"border-top-color"}, {path:"styleDefaults/nodeDefaults/hoverInnerColor", property:"border-bottom-color"}];
    $styleClasses$$27$$["oj-diagram-link"] = {path:"styleDefaults/linkDefaults/color", property:"color"};
    $styleClasses$$27$$["oj-diagram-link-label"] = {path:"styleDefaults/linkDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$27$$["oj-diagram-link oj-selected"] = {path:"styleDefaults/linkDefaults/selectionColor", property:"border-color"};
    $styleClasses$$27$$["oj-diagram-link oj-hover"] = [{path:"styleDefaults/linkDefaults/hoverOuterColor", property:"border-top-color"}, {path:"styleDefaults/linkDefaults/hoverInnerColor", property:"border-bottom-color"}];
    return $styleClasses$$27$$;
  }, $_GetEventTypes$:function() {
    return["optionChange", "beforeExpand", "beforeCollapse", "expand", "collapse"];
  }, $_HandleEvent$:function($event$$852$$) {
    var $type$$117$$ = $event$$852$$.type;
    "beforeExpand" === $type$$117$$ ? this.expand($event$$852$$.id, !0) : "beforeCollapse" === $type$$117$$ ? this.collapse($event$$852$$.id, !0) : "expand" === $type$$117$$ || "collapse" === $type$$117$$ ? this._trigger($type$$117$$, null, {nodeId:$event$$852$$.id}) : this._super($event$$852$$);
  }, _setOptions:function($options$$450$$, $flags$$57$$) {
    $options$$450$$.expanded && this.$_component$.clearDisclosedState();
    this._superApply(arguments);
  }, $_GetTranslationMap$:function() {
    var $translations$$22$$ = this.options.translations, $ret$$84$$ = this._super();
    $ret$$84$$["DvtDiagramBundle.PROMOTED_LINK"] = $translations$$22$$.promotedLink;
    $ret$$84$$["DvtDiagramBundle.PROMOTED_LINKS"] = $translations$$22$$.promotedLinks;
    $ret$$84$$["DvtDiagramBundle.PROMOTED_LINK_ARIA_DESC"] = $translations$$22$$.promotedLinkAriaDesc;
    $ret$$84$$["DvtUtilBundle.DIAGRAM"] = $translations$$22$$.componentName;
    return $ret$$84$$;
  }, $_LoadResources$:function() {
    null == this.options._resources && (this.options._resources = {});
    var $resources$$8$$ = this.options._resources;
    "rtl" === $oj$$85$$.$DomUtils$.$getReadingDirection$() ? ($resources$$8$$.collapse_ena = {src:$oj$$85$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/diagram/container-collapse-button-ena_rtl.svg"), width:20, height:20}, $resources$$8$$.collapse_ovr = {src:$oj$$85$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/diagram/container-collapse-button-ovr_rtl.svg"), width:20, height:20}, $resources$$8$$.collapse_dwn = {src:$oj$$85$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/diagram/container-collapse-button-dwn_rtl.svg"), 
    width:20, height:20}, $resources$$8$$.expand_ena = {src:$oj$$85$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/diagram/container-expand-button-ena_rtl.svg"), width:20, height:20}, $resources$$8$$.expand_ovr = {src:$oj$$85$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/diagram/container-expand-button-ovr_rtl.svg"), width:20, height:20}, $resources$$8$$.expand_dwn = {src:$oj$$85$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/diagram/container-expand-button-dwn_rtl.svg"), 
    width:20, height:20}) : ($resources$$8$$.collapse_ena = {src:$oj$$85$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/diagram/container-collapse-button-ena.svg"), width:20, height:20}, $resources$$8$$.collapse_ovr = {src:$oj$$85$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/diagram/container-collapse-button-ovr.svg"), width:20, height:20}, $resources$$8$$.collapse_dwn = {src:$oj$$85$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/diagram/container-collapse-button-dwn.svg"), 
    width:20, height:20}, $resources$$8$$.expand_ena = {src:$oj$$85$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/diagram/container-expand-button-ena.svg"), width:20, height:20}, $resources$$8$$.expand_ovr = {src:$oj$$85$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/diagram/container-expand-button-ovr.svg"), width:20, height:20}, $resources$$8$$.expand_dwn = {src:$oj$$85$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/diagram/container-expand-button-dwn.svg"), width:20, 
    height:20});
  }, collapse:function($nodeId$$2$$, $vetoable$$6$$) {
    var $result$$89$$ = this._trigger("beforeCollapse", null, {nodeId:$nodeId$$2$$});
    $vetoable$$6$$ && !1 === $result$$89$$ || this.$_component$.collapse($nodeId$$2$$);
  }, expand:function($nodeId$$3$$, $vetoable$$7$$) {
    var $result$$90$$ = this._trigger("beforeExpand", null, {nodeId:$nodeId$$3$$});
    $vetoable$$7$$ && !1 === $result$$90$$ || this.$_component$.expand($nodeId$$3$$);
  }, getNodeCount:function() {
    return this.$_component$.getAutomation().getNodeCount();
  }, getNode:function($nodeIndex$$2$$) {
    return this.$_component$.getAutomation().getNode($nodeIndex$$2$$);
  }, getLinkCount:function() {
    return this.$_component$.getAutomation().getLinkCount();
  }, getLink:function($linkIndex$$) {
    return this.$_component$.getAutomation().getLink($linkIndex$$);
  }, getPromotedLink:function($startNodeIndex$$, $endNodeIndex$$) {
    return this.$_component$.getAutomation().getPromotedLink($startNodeIndex$$, $endNodeIndex$$);
  }, getContextByNode:function($context$$192_node$$183$$) {
    return($context$$192_node$$183$$ = this.getSubIdByNode($context$$192_node$$183$$)) && "oj-diagram-tooltip" !== $context$$192_node$$183$$.subId ? $context$$192_node$$183$$ : null;
  }, $_GetComponentDeferredDataPaths$:function() {
    return{root:["nodes", "links"]};
  }});
  $oj$$85$$.$DiagramUtils$ = function $$oj$$85$$$$DiagramUtils$$() {
  };
  $goog$exportPath_$$("DiagramUtils", $oj$$85$$.$DiagramUtils$, $oj$$85$$);
  $oj$$85$$.$DiagramUtils$.$getLayout$ = function $$oj$$85$$$$DiagramUtils$$$getLayout$$($obj$$123$$) {
    return function($layoutContext$$) {
      if ($obj$$123$$.nodes && 0 < $layoutContext$$.getNodeCount()) {
        for (var $linksDataMap_nodesDataMap$$ = $oj$$85$$.$DiagramUtils$.$_dataArrayToMap$($obj$$123$$.nodes), $defaultLabelLayout$$ = $obj$$123$$.nodeDefaults && $obj$$123$$.nodeDefaults.labelLayout ? $obj$$123$$.nodeDefaults.labelLayout : null, $defaultPath_ni$$ = 0;$defaultPath_ni$$ < $layoutContext$$.getNodeCount();$defaultPath_ni$$++) {
          var $li$$4_node$$184$$ = $layoutContext$$.getNodeByIndex($defaultPath_ni$$), $link$$6_nodeData$$ = $linksDataMap_nodesDataMap$$[$li$$4_node$$184$$.getId()];
          $oj$$85$$.$DiagramUtils$.$_positionChildNodes$($li$$4_node$$184$$.getChildNodes(), $link$$6_nodeData$$ ? $link$$6_nodeData$$.nodes : null, $layoutContext$$, $defaultLabelLayout$$);
          $oj$$85$$.$DiagramUtils$.$_positionNodeAndLabel$($li$$4_node$$184$$, $link$$6_nodeData$$, $layoutContext$$, $defaultLabelLayout$$);
        }
      }
      if ($obj$$123$$.links && 0 < $layoutContext$$.getLinkCount()) {
        for ($linksDataMap_nodesDataMap$$ = $oj$$85$$.$DiagramUtils$.$_dataArrayToMap$($obj$$123$$.links), $defaultPath_ni$$ = $obj$$123$$.linkDefaults && $obj$$123$$.linkDefaults.path ? $obj$$123$$.linkDefaults.path : null, $defaultLabelLayout$$ = $obj$$123$$.linkDefaults && $obj$$123$$.linkDefaults.labelLayout ? $obj$$123$$.linkDefaults.labelLayout : null, $li$$4_node$$184$$ = 0;$li$$4_node$$184$$ < $layoutContext$$.getLinkCount();$li$$4_node$$184$$++) {
          var $link$$6_nodeData$$ = $layoutContext$$.getLinkByIndex($li$$4_node$$184$$), $linkData$$ = $linksDataMap_nodesDataMap$$[$link$$6_nodeData$$.getId()];
          $linkData$$ && $linkData$$.path ? $link$$6_nodeData$$.setPoints($linkData$$.path) : $defaultPath_ni$$ && $defaultPath_ni$$ instanceof Function && $link$$6_nodeData$$.setPoints($defaultPath_ni$$($layoutContext$$, $link$$6_nodeData$$));
          $linkData$$ && $linkData$$.coordinateSpace && $link$$6_nodeData$$.setCoordinateSpace($linkData$$.coordinateSpace);
          $linkData$$.labelLayout ? $oj$$85$$.$DiagramUtils$.$_setLabelPosition$($link$$6_nodeData$$, $linkData$$.labelLayout) : $defaultLabelLayout$$ && $defaultLabelLayout$$ instanceof Function && $oj$$85$$.$DiagramUtils$.$_setLabelPosition$($link$$6_nodeData$$, $defaultLabelLayout$$($layoutContext$$, $link$$6_nodeData$$));
        }
      }
    };
  };
  $goog$exportPath_$$("DiagramUtils.getLayout", $oj$$85$$.$DiagramUtils$.$getLayout$, $oj$$85$$);
  $oj$$85$$.$DiagramUtils$.$_dataArrayToMap$ = function $$oj$$85$$$$DiagramUtils$$$_dataArrayToMap$$($dataArray$$) {
    var $m$$30$$ = {};
    if ($dataArray$$) {
      for (var $i$$563$$ = 0;$i$$563$$ < $dataArray$$.length;$i$$563$$++) {
        $m$$30$$[$dataArray$$[$i$$563$$].id] = $dataArray$$[$i$$563$$];
      }
    }
    return $m$$30$$;
  };
  $oj$$85$$.$DiagramUtils$.$_positionChildNodes$ = function $$oj$$85$$$$DiagramUtils$$$_positionChildNodes$$($nodes$$16$$, $nodesData_nodesDataMap$$1$$, $layoutContext$$1$$, $defaultLabelLayout$$1$$) {
    if ($nodes$$16$$ && $nodesData_nodesDataMap$$1$$) {
      $nodesData_nodesDataMap$$1$$ = $oj$$85$$.$DiagramUtils$.$_dataArrayToMap$($nodesData_nodesDataMap$$1$$);
      for (var $ni$$1$$ = 0;$ni$$1$$ < $nodes$$16$$.length;$ni$$1$$++) {
        var $node$$185$$ = $nodes$$16$$[$ni$$1$$], $nodeData$$1$$ = $nodesData_nodesDataMap$$1$$[$node$$185$$.getId()];
        $oj$$85$$.$DiagramUtils$.$_positionChildNodes$($node$$185$$.getChildNodes(), $nodeData$$1$$ ? $nodeData$$1$$.nodes : null, $layoutContext$$1$$, $defaultLabelLayout$$1$$);
        $oj$$85$$.$DiagramUtils$.$_positionNodeAndLabel$($node$$185$$, $nodeData$$1$$, $layoutContext$$1$$, $defaultLabelLayout$$1$$);
      }
    }
  };
  $oj$$85$$.$DiagramUtils$.$_positionNodeAndLabel$ = function $$oj$$85$$$$DiagramUtils$$$_positionNodeAndLabel$$($node$$186$$, $nodeData$$2$$, $layoutContext$$2$$, $defaultLabelLayout$$2$$) {
    $node$$186$$ && $nodeData$$2$$ && ($node$$186$$.setPosition({x:$nodeData$$2$$.x, y:$nodeData$$2$$.y}), $nodeData$$2$$.labelLayout ? $oj$$85$$.$DiagramUtils$.$_setLabelPosition$($node$$186$$, $nodeData$$2$$.labelLayout) : $defaultLabelLayout$$2$$ && $defaultLabelLayout$$2$$ instanceof Function ? $oj$$85$$.$DiagramUtils$.$_setLabelPosition$($node$$186$$, $defaultLabelLayout$$2$$($layoutContext$$2$$, $node$$186$$)) : $defaultLabelLayout$$2$$ && $oj$$85$$.$DiagramUtils$.$_setLabelPosition$($node$$186$$, 
    $defaultLabelLayout$$2$$, $node$$186$$.getPosition()));
  };
  $oj$$85$$.$DiagramUtils$.$_setLabelPosition$ = function $$oj$$85$$$$DiagramUtils$$$_setLabelPosition$$($obj$$124$$, $labelLayout$$, $offset$$34$$) {
    $offset$$34$$ = $offset$$34$$ ? $offset$$34$$ : {x:0, y:0};
    $obj$$124$$.setLabelPosition({x:$labelLayout$$.x + $offset$$34$$.x, y:$labelLayout$$.y + $offset$$34$$.y});
    var $rotationPointX$$ = $labelLayout$$.rotationPointX, $rotationPointY$$ = $labelLayout$$.rotationPointY;
    isNaN($rotationPointX$$) || isNaN($rotationPointY$$) || $obj$$124$$.setLabelRotationPoint({x:$rotationPointX$$ + $offset$$34$$.x, y:$rotationPointY$$ + $offset$$34$$.y});
    $obj$$124$$.setLabelRotationAngle($labelLayout$$.angle);
    $obj$$124$$.setLabelHalign($labelLayout$$.halign);
    $obj$$124$$.setLabelValign($labelLayout$$.valign);
  };
});
