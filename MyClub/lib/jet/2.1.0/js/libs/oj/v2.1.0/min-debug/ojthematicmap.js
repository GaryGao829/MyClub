/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtThematicMap"], function($oj$$58$$, $$$$52$$, $comp$$14$$, $base$$12$$, $dvt$$10$$) {
  $oj$$58$$.$__registerWidget$("oj.ojThematicMap", $$$$52$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{load:null, optionChange:null}, $_currentLocale$:"", $_loadedBasemaps$:[], $_basemapPath$:"resources/internal-deps/dvt/thematicMap/basemaps/", $_supportedLocales$:{ar:"ar", cs:"cs", da:"da", de:"de", el:"el", es:"es", fi:"fi", fr:"fr", "fr-ca":"fr_CA", he:"iw", hu:"hu", it:"it", ja:"ja", ko:"ko", nl:"nl", no:"no", pl:"pl", pt:"pt_BR", "pt-pt":"pt", ro:"ro", ru:"ru", sk:"sk", sv:"sv", 
  th:"th", tr:"tr", "zh-hans":"zh_CN", "zh-hant":"zh_TW"}, _ComponentCreate:function() {
    this._super();
    this.$_checkBasemaps$ = [];
    this.$_initiallyRendered$ = !1;
    this.$_dataLayersToUpdate$ = [];
  }, $_CreateDvtComponent$:function($context$$171$$, $callback$$132$$, $callbackObj$$13$$) {
    return $dvt$$10$$.ThematicMap.newInstance($context$$171$$, $callback$$132$$, $callbackObj$$13$$);
  }, $_ConvertLocatorToSubId$:function($locator$$56$$) {
    var $subId$$61$$ = $locator$$56$$.subId;
    "oj-thematicmap-area" == $subId$$61$$ ? $subId$$61$$ = $locator$$56$$.dataLayer + ":area[" + $locator$$56$$.index + "]" : "oj-thematicmap-marker" == $subId$$61$$ ? $subId$$61$$ = $locator$$56$$.dataLayer + ":marker[" + $locator$$56$$.index + "]" : "oj-thematicmap-link" == $subId$$61$$ ? $subId$$61$$ = $locator$$56$$.dataLayer + ":link[" + $locator$$56$$.index + "]" : "oj-thematicmap-tooltip" == $subId$$61$$ && ($subId$$61$$ = "tooltip");
    return $subId$$61$$;
  }, $_ConvertSubIdToLocator$:function($subId$$62$$) {
    var $locator$$57$$ = {};
    0 < $subId$$62$$.indexOf(":area") ? ($locator$$57$$.subId = "oj-thematicmap-area", $locator$$57$$.dataLayer = $subId$$62$$.substring(0, $subId$$62$$.indexOf(":")), $locator$$57$$.index = this.$_GetFirstIndex$($subId$$62$$)) : 0 < $subId$$62$$.indexOf(":marker") ? ($locator$$57$$.subId = "oj-thematicmap-marker", $locator$$57$$.dataLayer = $subId$$62$$.substring(0, $subId$$62$$.indexOf(":")), $locator$$57$$.index = this.$_GetFirstIndex$($subId$$62$$)) : "tooltip" == $subId$$62$$ && ($locator$$57$$.subId = 
    "oj-thematicmap-tooltip");
    return $locator$$57$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$22$$ = this._super();
    $styleClasses$$22$$.push("oj-thematicmap");
    return $styleClasses$$22$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$23$$ = this._super();
    $styleClasses$$23$$["oj-dvtbase oj-thematicmap"] = {path:"animationDuration", property:"animation-duration"};
    $styleClasses$$23$$["oj-thematicmap-arealayer"] = [{path:"styleDefaults/areaStyle", property:"CSS_BACKGROUND_PROPERTIES"}, {path:"styleDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"}];
    $styleClasses$$23$$["oj-thematicmap-area"] = {path:"styleDefaults/dataAreaDefaults/borderColor", property:"border-top-color"};
    $styleClasses$$23$$["oj-thematicmap-area oj-hover"] = {path:"styleDefaults/dataAreaDefaults/hoverColor", property:"border-top-color"};
    $styleClasses$$23$$["oj-thematicmap-area oj-selected"] = [{path:"styleDefaults/dataAreaDefaults/selectedInnerColor", property:"border-top-color"}, {path:"styleDefaults/dataAreaDefaults/selectedOuterColor", property:"border-bottom-color"}];
    $styleClasses$$23$$["oj-thematicmap-marker"] = [{path:"styleDefaults/dataMarkerDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"}, {path:"styleDefaults/dataMarkerDefaults/color", property:"background-color"}, {path:"styleDefaults/dataMarkerDefaults/opacity", property:"opacity"}, {path:"styleDefaults/dataMarkerDefaults/borderColor", property:"border-top-color"}];
    $styleClasses$$23$$["oj-thematicmap-link"] = {path:"styleDefaults/linkDefaults/color", property:"color"};
    $styleClasses$$23$$["oj-thematicmap-link oj-hover"] = {path:"styleDefaults/linkDefaults/_hoverColor", property:"color"};
    $styleClasses$$23$$["oj-thematicmap-link oj-selected"] = {path:"styleDefaults/linkDefaults/_selectedColor", property:"border-color"};
    return $styleClasses$$23$$;
  }, $_GetEventTypes$:function() {
    return["load", "optionChange"];
  }, _setOptions:function($options$$358$$, $flags$$49$$) {
    var $i$$429_numUpdates$$ = Object.keys($options$$358$$).length, $newAreaLayers$$ = $options$$358$$.areaLayers, $oldAreaLayers$$ = this.options.areaLayers, $newAreaLayer_pointDataLayers$$ = $options$$358$$.pointDataLayers;
    if (1 == $i$$429_numUpdates$$ && $newAreaLayers$$ && $oldAreaLayers$$ && 0 < $oldAreaLayers$$.length) {
      for ($i$$429_numUpdates$$ = 0;$i$$429_numUpdates$$ < $newAreaLayers$$.length;$i$$429_numUpdates$$++) {
        var $newAreaLayer_pointDataLayers$$ = $newAreaLayers$$[$i$$429_numUpdates$$], $currAreaLayer$$ = $oldAreaLayers$$[$i$$429_numUpdates$$], $updateDataLayer$$ = !0, $areaLayerKey$$;
        for ($areaLayerKey$$ in $newAreaLayer_pointDataLayers$$) {
          "areaDataLayer" != $areaLayerKey$$ && $newAreaLayer_pointDataLayers$$[$areaLayerKey$$] != $currAreaLayer$$[$areaLayerKey$$] && ($updateDataLayer$$ = $updateDataLayer$$ && !1);
        }
        $updateDataLayer$$ && !$oj$$58$$.$Object$.$compareValues$($currAreaLayer$$.areaDataLayer, $newAreaLayer_pointDataLayers$$.areaDataLayer) && this.$_dataLayersToUpdate$.push({options:$newAreaLayer_pointDataLayers$$.areaDataLayer, parentLayer:$newAreaLayer_pointDataLayers$$.layer, isADL:!0});
      }
    } else {
      if (1 == $i$$429_numUpdates$$ && $newAreaLayer_pointDataLayers$$ && this.options.pointDataLayers && 0 < this.options.pointDataLayers.length) {
        for ($i$$429_numUpdates$$ = 0;$i$$429_numUpdates$$ < $newAreaLayer_pointDataLayers$$.length;$i$$429_numUpdates$$++) {
          $oj$$58$$.$Object$.$compareValues$(this.options.pointDataLayers[$i$$429_numUpdates$$], $newAreaLayer_pointDataLayers$$[$i$$429_numUpdates$$]) || this.$_dataLayersToUpdate$.push({options:$newAreaLayer_pointDataLayers$$[$i$$429_numUpdates$$], parentLayer:$newAreaLayer_pointDataLayers$$[$i$$429_numUpdates$$].id, isADL:!1});
        }
      }
    }
    this._super($options$$358$$, $flags$$49$$);
  }, $_Render$:function() {
    this.$_NotReady$();
    var $areaLayers_pointDataLayers$$1$$ = this.options.areaLayers;
    if (this.options.basemap && $areaLayers_pointDataLayers$$1$$ && !(1 > $areaLayers_pointDataLayers$$1$$.length)) {
      this.$_loadBasemap$();
      for (var $i$$430_tooltipObj$$ = 0;$i$$430_tooltipObj$$ < this.$_checkBasemaps$.length;$i$$430_tooltipObj$$++) {
        if (!this.$_loadedBasemaps$[this.$_checkBasemaps$[$i$$430_tooltipObj$$]]) {
          return;
        }
      }
      this.$_checkBasemaps$ = [];
      this.$_updateDataLayerSelection$();
      var $tooltipFun$$ = ($i$$430_tooltipObj$$ = this.options.tooltip) ? $i$$430_tooltipObj$$.renderer : null;
      $tooltipFun$$ && (this.options._tooltip = function $this$options$_tooltip$($context$$172$$) {
        var $defaultTooltip$$ = $context$$172$$.tooltip;
        try {
          return $tooltipFun$$($context$$172$$) || $defaultTooltip$$;
        } catch ($error$$45$$) {
          return $oj$$58$$.$Logger$.warn("Showing default tooltip. " + $error$$45$$), $defaultTooltip$$;
        }
      });
      if ($areaLayers_pointDataLayers$$1$$) {
        for ($i$$430_tooltipObj$$ = 0;$i$$430_tooltipObj$$ < $areaLayers_pointDataLayers$$1$$.length;$i$$430_tooltipObj$$++) {
          var $areaDataLayer$$1_pointDataLayer$$ = $areaLayers_pointDataLayers$$1$$[$i$$430_tooltipObj$$].areaDataLayer;
          if ($areaDataLayer$$1_pointDataLayer$$) {
            var $dl_renderer$$14$$ = $areaDataLayer$$1_pointDataLayer$$._templateRenderer;
            $dl_renderer$$14$$ && ($areaDataLayer$$1_pointDataLayer$$.renderer = this.$_getTemplateRenderer$($dl_renderer$$14$$, $areaDataLayer$$1_pointDataLayer$$.markers));
          }
        }
      }
      if ($areaLayers_pointDataLayers$$1$$ = this.options.pointDataLayers) {
        for ($i$$430_tooltipObj$$ = 0;$i$$430_tooltipObj$$ < $areaLayers_pointDataLayers$$1$$.length;$i$$430_tooltipObj$$++) {
          ($areaDataLayer$$1_pointDataLayer$$ = $areaLayers_pointDataLayers$$1$$[$i$$430_tooltipObj$$]) && ($dl_renderer$$14$$ = $areaDataLayer$$1_pointDataLayer$$._templateRenderer) && ($areaDataLayer$$1_pointDataLayer$$.renderer = this.$_getTemplateRenderer$($dl_renderer$$14$$, $areaDataLayer$$1_pointDataLayer$$.markers));
        }
      }
      this.options._contextHandler = this.$_getContextHandler$();
      if (this.$_initiallyRendered$ && 0 < this.$_dataLayersToUpdate$.length) {
        if (this.$_context$.isReadyToRender()) {
          for ($i$$430_tooltipObj$$ = 0;$i$$430_tooltipObj$$ < this.$_dataLayersToUpdate$.length;$i$$430_tooltipObj$$++) {
            $dl_renderer$$14$$ = this.$_dataLayersToUpdate$[$i$$430_tooltipObj$$], this.$_component$.updateLayer($dl_renderer$$14$$.options, $dl_renderer$$14$$.parentLayer, $dl_renderer$$14$$.isADL);
          }
          this.$_dataLayersToUpdate$ = [];
        }
      } else {
        this._super(), this.$_initiallyRendered$ = !0;
      }
      this._trigger("load", null, null);
    }
  }, $_getTemplateRenderer$:function($templateFunction$$) {
    var $thisRef$$ = this;
    return function($context$$173_elem$$115$$) {
      var $dummyDiv$$3$$ = document.createElement("div");
      $dummyDiv$$3$$.style.display = "none";
      $dummyDiv$$3$$.$_dvtcontext$ = $thisRef$$.$_context$;
      $thisRef$$.element.append($dummyDiv$$3$$);
      $templateFunction$$({parentElement:$dummyDiv$$3$$, data:$context$$173_elem$$115$$.data});
      return($context$$173_elem$$115$$ = $dummyDiv$$3$$.children[0]) ? "http://www.w3.org/2000/svg" === $context$$173_elem$$115$$.namespaceURI ? ($dummyDiv$$3$$.removeChild($context$$173_elem$$115$$), $$$$52$$($dummyDiv$$3$$).remove(), $context$$173_elem$$115$$) : $thisRef$$.$_GetDvtComponent$($context$$173_elem$$115$$) : null;
    };
  }, $_getContextHandler$:function() {
    var $thisRef$$1$$ = this;
    return function($parentElement$$9$$, $rootElement$$2$$, $data$$157$$, $state$$14$$, $previousState$$) {
      return{component:$oj$$58$$.Components.$getWidgetConstructor$($thisRef$$1$$.element), parentElement:$parentElement$$9$$, rootElement:$rootElement$$2$$, data:$data$$157$$, state:$state$$14$$, previousState:$previousState$$, id:$data$$157$$.id, label:$data$$157$$.label, color:$data$$157$$.color, location:$data$$157$$.location, x:$data$$157$$.x, y:$data$$157$$.y};
    };
  }, renderDefaultHover:function($context$$175$$) {
    $context$$175$$.previousState && $context$$175$$.state.hovered == $context$$175$$.previousState.hovered || this.$_component$.processDefaultHoverEffect($context$$175$$.id, $context$$175$$.state.hovered);
  }, renderDefaultSelection:function($context$$176$$) {
    $context$$176$$.previousState && $context$$176$$.state.selected == $context$$176$$.previousState.selected || this.$_component$.processDefaultSelectionEffect($context$$176$$.id, $context$$176$$.state.selected);
  }, renderDefaultFocus:function($context$$177$$) {
    $context$$177$$.previousState && $context$$177$$.state.focused == $context$$177$$.previousState.focused || this.$_component$.processDefaultFocusEffect($context$$177$$.id, $context$$177$$.state.focused);
  }, $_loadBasemap$:function() {
    var $basemap$$ = this.options.basemap;
    if ($basemap$$) {
      var $locale$$28$$ = $oj$$58$$.$Config$.$getLocale$();
      $locale$$28$$ !== this.$_currentLocale$ && (this.$_currentLocale$ = $locale$$28$$, this.$_loadedBasemaps$ = []);
      var $areaLayers$$1_pointDataLayers$$2$$ = this.options.areaLayers;
      if ($areaLayers$$1_pointDataLayers$$2$$) {
        for (var $i$$431$$ = 0;$i$$431$$ < $areaLayers$$1_pointDataLayers$$2$$.length;$i$$431$$++) {
          var $layer$$21$$ = $areaLayers$$1_pointDataLayers$$2$$[$i$$431$$].layer;
          $layer$$21$$ && this.$_loadBasemapHelper$($basemap$$, $layer$$21$$, $locale$$28$$);
        }
      }
      $areaLayers$$1_pointDataLayers$$2$$ = this.options.pointDataLayers;
      !this.options.mapProvider && $areaLayers$$1_pointDataLayers$$2$$ && 0 < $areaLayers$$1_pointDataLayers$$2$$.length && this.$_loadBasemapHelper$($basemap$$, "cities", $locale$$28$$);
    }
  }, $_loadResourceByUrl$:function($url$$35$$, $bRenderOnFail$$) {
    if (!this.$_loadedBasemaps$[$url$$35$$]) {
      var $thisRef$$2$$ = this, $getScript$$ = $$$$52$$.getScript($oj$$58$$.$Config$.$getResourceUrl$($url$$35$$), function() {
        $thisRef$$2$$.$_loadedBasemaps$[$url$$35$$] = !0;
        $thisRef$$2$$.$_Render$();
      });
      $bRenderOnFail$$ && $getScript$$.fail(function() {
        $thisRef$$2$$.$_loadedBasemaps$[$url$$35$$] = !0;
        $thisRef$$2$$.$_Render$();
      });
    }
  }, $_loadBasemapHelper$:function($basemap$$1_bundleName_bundleUrl$$, $i$$432_layer$$22$$, $locale$$29_localeList$$) {
    var $isLoaded_mapProvider_relativeUrl_splitLocale$$ = !0;
    try {
      $isLoaded_mapProvider_relativeUrl_splitLocale$$ = 0 < Object.keys($dvt$$10$$.DvtBaseMapManager.getLayerIds($basemap$$1_bundleName_bundleUrl$$, $i$$432_layer$$22$$)).length;
    } catch ($err$$22$$) {
      $isLoaded_mapProvider_relativeUrl_splitLocale$$ = !1;
    }
    $isLoaded_mapProvider_relativeUrl_splitLocale$$ || (($isLoaded_mapProvider_relativeUrl_splitLocale$$ = this.options.mapProvider) ? $oj$$58$$.$MapProviderUtils$.$geoJsonToBasemap$($basemap$$1_bundleName_bundleUrl$$, $i$$432_layer$$22$$, $isLoaded_mapProvider_relativeUrl_splitLocale$$) : ($isLoaded_mapProvider_relativeUrl_splitLocale$$ = this.$_basemapPath$ + "ojthematicmap-" + $basemap$$1_bundleName_bundleUrl$$ + "-" + $i$$432_layer$$22$$ + ".js", -1 == this.$_checkBasemaps$.indexOf($isLoaded_mapProvider_relativeUrl_splitLocale$$) && 
    (this.$_checkBasemaps$.push($isLoaded_mapProvider_relativeUrl_splitLocale$$), this.$_loadResourceByUrl$($isLoaded_mapProvider_relativeUrl_splitLocale$$, !1))));
    if (-1 === $locale$$29_localeList$$.indexOf("en")) {
      for ($isLoaded_mapProvider_relativeUrl_splitLocale$$ = $locale$$29_localeList$$.toLowerCase().split("-"), $locale$$29_localeList$$ = [$isLoaded_mapProvider_relativeUrl_splitLocale$$[0]], 1 < $isLoaded_mapProvider_relativeUrl_splitLocale$$.length && $locale$$29_localeList$$.unshift($isLoaded_mapProvider_relativeUrl_splitLocale$$[0] + "-" + $isLoaded_mapProvider_relativeUrl_splitLocale$$[1]), 2 < $isLoaded_mapProvider_relativeUrl_splitLocale$$.length && $locale$$29_localeList$$.unshift($isLoaded_mapProvider_relativeUrl_splitLocale$$[0] + 
      "-" + $isLoaded_mapProvider_relativeUrl_splitLocale$$[2], $isLoaded_mapProvider_relativeUrl_splitLocale$$[0] + "-" + $isLoaded_mapProvider_relativeUrl_splitLocale$$[1] + "-" + $isLoaded_mapProvider_relativeUrl_splitLocale$$[2]), $basemap$$1_bundleName_bundleUrl$$ = $basemap$$1_bundleName_bundleUrl$$.charAt(0).toUpperCase() + $basemap$$1_bundleName_bundleUrl$$.slice(1), $i$$432_layer$$22$$ = $i$$432_layer$$22$$.charAt(0).toUpperCase() + $i$$432_layer$$22$$.slice(1), $basemap$$1_bundleName_bundleUrl$$ = 
      this.$_basemapPath$ + "resourceBundles/" + $basemap$$1_bundleName_bundleUrl$$ + $i$$432_layer$$22$$ + "Bundle_", $i$$432_layer$$22$$ = 0;$i$$432_layer$$22$$ < $locale$$29_localeList$$.length;$i$$432_layer$$22$$++) {
        if (this.$_supportedLocales$[$locale$$29_localeList$$[$i$$432_layer$$22$$]]) {
          $basemap$$1_bundleName_bundleUrl$$ = $basemap$$1_bundleName_bundleUrl$$ + this.$_supportedLocales$[$locale$$29_localeList$$[$i$$432_layer$$22$$]] + ".js";
          -1 == this.$_checkBasemaps$.indexOf($basemap$$1_bundleName_bundleUrl$$) && (this.$_checkBasemaps$.push($basemap$$1_bundleName_bundleUrl$$), this.$_loadResourceByUrl$($basemap$$1_bundleName_bundleUrl$$, !0));
          break;
        }
      }
    }
  }, $_HandleEvent$:function($event$$680$$) {
    if ("selection" === $event$$680$$.type) {
      var $selection$$26$$ = {}, $id$$60$$ = $event$$680$$.clientId;
      $selection$$26$$[$id$$60$$] = $event$$680$$.selection;
      if (this.options.selection) {
        for (var $dataLayerId$$ in this.options.selection) {
          $id$$60$$ !== $dataLayerId$$ && ($selection$$26$$[$dataLayerId$$] = this.options.selection[$dataLayerId$$]);
        }
      }
      this.$_UserOptionChange$("selection", $selection$$26$$);
    } else {
      this._super($event$$680$$);
    }
  }, $_GetTranslationMap$:function() {
    var $translations$$20$$ = this.options.translations, $ret$$57$$ = this._super();
    $ret$$57$$["DvtUtilBundle.THEMATIC_MAP"] = $translations$$20$$.componentName;
    return $ret$$57$$;
  }, $_updateDataLayerSelection$:function() {
    var $selection$$27$$ = this.options.selection;
    if ($selection$$27$$) {
      var $als_pdls$$ = this.options.pointDataLayers;
      if ($als_pdls$$) {
        for (var $i$$433$$ = 0;$i$$433$$ < $als_pdls$$.length;$i$$433$$++) {
          $selection$$27$$[$als_pdls$$[$i$$433$$].id] && ($als_pdls$$[$i$$433$$].selection = $selection$$27$$[$als_pdls$$[$i$$433$$].id]);
        }
      }
      if ($als_pdls$$ = this.options.areaLayers) {
        for ($i$$433$$ = 0;$i$$433$$ < $als_pdls$$.length;$i$$433$$++) {
          var $adl$$ = $als_pdls$$[$i$$433$$].areaDataLayer;
          $adl$$ && $selection$$27$$[$adl$$.id] && ($adl$$.selection = $selection$$27$$[$adl$$.id]);
        }
      }
    }
  }, getArea:function($dataLayerId$$1$$, $index$$289$$) {
    var $ret$$58$$ = this.$_component$.getAutomation().getData($dataLayerId$$1$$, "area", $index$$289$$);
    this.$_AddAutomationGetters$($ret$$58$$);
    return $ret$$58$$;
  }, getMarker:function($dataLayerId$$2$$, $index$$290$$) {
    var $ret$$59$$ = this.$_component$.getAutomation().getData($dataLayerId$$2$$, "marker", $index$$290$$);
    this.$_AddAutomationGetters$($ret$$59$$);
    return $ret$$59$$;
  }, getLink:function($dataLayerId$$3$$, $index$$291$$) {
    var $ret$$60$$ = this.$_component$.getAutomation().getData($dataLayerId$$3$$, "link", $index$$291$$);
    this.$_AddAutomationGetters$($ret$$60$$);
    return $ret$$60$$;
  }, getContextByNode:function($context$$178_node$$111$$) {
    return($context$$178_node$$111$$ = this.getSubIdByNode($context$$178_node$$111$$)) && "oj-thematicmap-tooltip" !== $context$$178_node$$111$$.subId ? $context$$178_node$$111$$ : null;
  }, $_GetComponentDeferredDataPaths$:function() {
    return{areaLayers:["areaDataLayer/areas", "areaDataLayer/markers"], pointDataLayers:["markers", "links"]};
  }, $_GetDataContext$:function($layer$$23_options$$359$$) {
    var $basemap$$2$$ = this.options.basemap;
    $layer$$23_options$$359$$ = $layer$$23_options$$359$$.layer ? $layer$$23_options$$359$$.layer : "cities";
    return{basemap:$basemap$$2$$, layer:$layer$$23_options$$359$$, ids:$dvt$$10$$.DvtBaseMapManager.getLayerIds($basemap$$2$$, $layer$$23_options$$359$$)};
  }});
  $oj$$58$$.$MapProviderUtils$ = {};
  $oj$$58$$.$MapProviderUtils$.$_MANAGER$ = "DvtBaseMapManager";
  $oj$$58$$.$MapProviderUtils$.$_UNPROCESSED$ = "_UNPROCESSED_MAPS";
  $oj$$58$$.$MapProviderUtils$.$_TYPE$ = "type";
  $oj$$58$$.$MapProviderUtils$.$_GEOMETRY$ = "geometry";
  $oj$$58$$.$MapProviderUtils$.$_COORDINATES$ = "coordinates";
  $oj$$58$$.$MapProviderUtils$.$_FEATURES$ = "features";
  $oj$$58$$.$MapProviderUtils$.$_PROPERTIES$ = "properties";
  $oj$$58$$.$MapProviderUtils$.$_TYPE_FEATURE_COLLECTION$ = "FeatureCollection";
  $oj$$58$$.$MapProviderUtils$.$_TYPE_GEOMETRY_COLLECTION$ = "GeometryCollection";
  $oj$$58$$.$MapProviderUtils$.$_TYPE_FEATURE$ = "Feature";
  $oj$$58$$.$MapProviderUtils$.$_TYPE_POLYGON$ = "Polygon";
  $oj$$58$$.$MapProviderUtils$.$_TYPE_MULTI_POLYGON$ = "MultiPolygon";
  $oj$$58$$.$MapProviderUtils$.$_ID$ = "id";
  $oj$$58$$.$MapProviderUtils$.$_SHORT_LABEL$ = "shortLabel";
  $oj$$58$$.$MapProviderUtils$.$_LONG_LABEL$ = "longLabel";
  $oj$$58$$.$MapProviderUtils$.$geoJsonToBasemap$ = function $$oj$$58$$$$MapProviderUtils$$$geoJsonToBasemap$$($basemap$$3$$, $layer$$24$$, $mapProvider$$1_type$$102$$) {
    var $labels$$ = {}, $areas$$ = {}, $geoJson$$ = $mapProvider$$1_type$$102$$.geo, $keys$$53$$ = $mapProvider$$1_type$$102$$.propertiesKeys || {};
    $mapProvider$$1_type$$102$$ = $geoJson$$[$oj$$58$$.$MapProviderUtils$.$_TYPE$];
    if ($mapProvider$$1_type$$102$$ === $oj$$58$$.$MapProviderUtils$.$_TYPE_FEATURE_COLLECTION$) {
      $geoJson$$[$oj$$58$$.$MapProviderUtils$.$_FEATURES$].forEach(function($feature$$8$$) {
        $oj$$58$$.$MapProviderUtils$.$parseFeature$($feature$$8$$, $keys$$53$$, $areas$$, $labels$$);
      });
    } else {
      if ($mapProvider$$1_type$$102$$ === $oj$$58$$.$MapProviderUtils$.$_TYPE_FEATURE$) {
        $oj$$58$$.$MapProviderUtils$.$parseFeature$($geoJson$$, $keys$$53$$, $areas$$, $labels$$);
      } else {
        $oj$$58$$.$Logger$.error("GeoJSON type of " + $mapProvider$$1_type$$102$$ + " is not supported. Only Feature and FeatureCollection types are supported.");
        return;
      }
    }
    0 === Object.keys($areas$$).length ? $oj$$58$$.$Logger$.error("No valid Features found in GeoJSON.") : (window[$oj$$58$$.$MapProviderUtils$.$_MANAGER$] || (window[$oj$$58$$.$MapProviderUtils$.$_MANAGER$] = {}, window[$oj$$58$$.$MapProviderUtils$.$_MANAGER$][$oj$$58$$.$MapProviderUtils$.$_UNPROCESSED$] = [[], [], []]), window[$oj$$58$$.$MapProviderUtils$.$_MANAGER$][$oj$$58$$.$MapProviderUtils$.$_UNPROCESSED$][0].push([$basemap$$3$$, $layer$$24$$, $labels$$, $areas$$, null, null, 0]));
  };
  $oj$$58$$.$MapProviderUtils$.$parseFeature$ = function $$oj$$58$$$$MapProviderUtils$$$parseFeature$$($feature$$9_geom$$, $keys$$54_longLabel$$, $areas$$1$$, $labels$$1$$) {
    var $props$$23$$ = $feature$$9_geom$$[$oj$$58$$.$MapProviderUtils$.$_PROPERTIES$];
    $feature$$9_geom$$ = $feature$$9_geom$$[$oj$$58$$.$MapProviderUtils$.$_GEOMETRY$];
    if ($oj$$58$$.$MapProviderUtils$.$isSupportedGeometry$($feature$$9_geom$$)) {
      var $id$$61$$ = $props$$23$$[$keys$$54_longLabel$$[$oj$$58$$.$MapProviderUtils$.$_ID$]];
      if ($id$$61$$) {
        var $shortLabel$$ = $props$$23$$[$keys$$54_longLabel$$[$oj$$58$$.$MapProviderUtils$.$_SHORT_LABEL$]];
        $keys$$54_longLabel$$ = $props$$23$$[$keys$$54_longLabel$$[$oj$$58$$.$MapProviderUtils$.$_LONG_LABEL$]];
        if ($shortLabel$$ || $keys$$54_longLabel$$) {
          $labels$$1$$[$id$$61$$] = [$shortLabel$$, $keys$$54_longLabel$$];
        }
        $areas$$1$$[$id$$61$$] = $oj$$58$$.$MapProviderUtils$.$geomToPath$($feature$$9_geom$$);
      } else {
        $oj$$58$$.$Logger$.warn("No 'id' value found in the mapProvider.propertiesKey object. A Feature's 'properties' object must have an id in the field specified by the mapProvider.propertiesKey.id value.");
      }
    } else {
      $oj$$58$$.$Logger$.warn("A geometry of type " + $feature$$9_geom$$[$oj$$58$$.$MapProviderUtils$.$_TYPE$] + " is not supported and will be skipped.");
    }
  };
  $oj$$58$$.$MapProviderUtils$.$isSupportedGeometry$ = function $$oj$$58$$$$MapProviderUtils$$$isSupportedGeometry$$($geom$$1_type$$103$$) {
    $geom$$1_type$$103$$ = $geom$$1_type$$103$$[$oj$$58$$.$MapProviderUtils$.$_TYPE$];
    return $geom$$1_type$$103$$ === $oj$$58$$.$MapProviderUtils$.$_TYPE_POLYGON$ || $geom$$1_type$$103$$ === $oj$$58$$.$MapProviderUtils$.$_TYPE_MULTI_POLYGON$ ? !0 : !1;
  };
  $oj$$58$$.$MapProviderUtils$.$geomToPath$ = function $$oj$$58$$$$MapProviderUtils$$$geomToPath$$($coords_geom$$2$$) {
    var $path$$17$$ = "", $type$$104$$ = $coords_geom$$2$$[$oj$$58$$.$MapProviderUtils$.$_TYPE$];
    $coords_geom$$2$$ = $coords_geom$$2$$[$oj$$58$$.$MapProviderUtils$.$_COORDINATES$];
    $type$$104$$ === $oj$$58$$.$MapProviderUtils$.$_TYPE_POLYGON$ ? $path$$17$$ = $oj$$58$$.$MapProviderUtils$.$polygonToPath$($coords_geom$$2$$) : $type$$104$$ === $oj$$58$$.$MapProviderUtils$.$_TYPE_MULTI_POLYGON$ && $coords_geom$$2$$.forEach(function($polygonCoords$$) {
      $path$$17$$ += $oj$$58$$.$MapProviderUtils$.$polygonToPath$($polygonCoords$$);
    });
    return $path$$17$$;
  };
  $oj$$58$$.$MapProviderUtils$.$polygonToPath$ = function $$oj$$58$$$$MapProviderUtils$$$polygonToPath$$($coords$$1$$) {
    var $path$$18$$ = "";
    $coords$$1$$.forEach(function($linearArrayCoords$$) {
      $path$$18$$ += $oj$$58$$.$MapProviderUtils$.$linearRingToPath$($linearArrayCoords$$);
    });
    return $path$$18$$;
  };
  $oj$$58$$.$MapProviderUtils$.$linearRingToPath$ = function $$oj$$58$$$$MapProviderUtils$$$linearRingToPath$$($coords$$2$$) {
    var $path$$19$$, $prevX$$, $prevY$$, $prevCmd$$ = "M";
    $coords$$2$$ && $coords$$2$$.forEach(function($coord_y$$41$$) {
      var $x$$57$$ = $coord_y$$41$$[0];
      $coord_y$$41$$ = -$coord_y$$41$$[1];
      if ("M" === $prevCmd$$) {
        $prevX$$ = $x$$57$$, $prevY$$ = $coord_y$$41$$, $prevCmd$$ = "x", $path$$19$$ = "M" + $x$$57$$ + " " + $coord_y$$41$$;
      } else {
        var $relX$$ = $x$$57$$ - $prevX$$, $relY$$ = $coord_y$$41$$ - $prevY$$;
        if ("l" == $prevCmd$$) {
          if ($prevX$$ == $x$$57$$) {
            $prevCmd$$ = "v";
            $prevY$$ = $coord_y$$41$$;
            $path$$19$$ = $path$$19$$ + $prevCmd$$ + $relY$$;
            return;
          }
          if ($prevY$$ == $coord_y$$41$$) {
            $prevCmd$$ = "h";
            $prevX$$ = $x$$57$$;
            $path$$19$$ = $path$$19$$ + $prevCmd$$ + $relX$$;
            return;
          }
          $path$$19$$ = $path$$19$$ + " " + $relX$$ + " " + $relY$$;
        } else {
          $prevCmd$$ = "l", $path$$19$$ = $path$$19$$ + "l" + $relX$$ + " " + $relY$$;
        }
        $prevX$$ = $x$$57$$;
        $prevY$$ = $coord_y$$41$$;
      }
    });
    return $path$$19$$ + "Z";
  };
});
