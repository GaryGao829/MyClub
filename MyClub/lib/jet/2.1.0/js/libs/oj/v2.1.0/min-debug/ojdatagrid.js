/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "promise", "ojs/ojcomponentcore", "ojs/ojdatasource-common", "ojs/ojdatacollection-utils", "ojs/ojinputnumber", "ojs/ojmenu", "ojs/ojdialog"], function($oj$$11$$, $$$$11$$) {
  function $DvtDataGridKeyboardHandler$$($dataGrid$$1$$) {
    this.grid = $dataGrid$$1$$;
  }
  function $DvtDataGridOptions$$($options$$229$$) {
    this.options = $options$$229$$;
  }
  function $DvtDataGridUtils$$($dataGrid_userAgent$$2$$) {
    this.$scrollbarSize$ = -1;
    this.$dataGrid$ = $dataGrid_userAgent$$2$$;
    $dataGrid_userAgent$$2$$ = navigator && navigator.userAgent ? navigator.userAgent.toLowerCase() : null;
    this.$os$ = this.$_determineOS$($dataGrid_userAgent$$2$$);
    this.platform = this.$_determinePlatform$($dataGrid_userAgent$$2$$);
  }
  function $DvtDataGridSizingManager$$() {
    this.$sizes$ = {column:{}, row:{}};
  }
  function $DvtDataGrid$$() {
    this.$MAX_COLUMN_THRESHOLD$ = 20;
    this.$MAX_ROW_THRESHOLD$ = 30;
    this.$m_utils$ = new $DvtDataGridUtils$$(this);
    this.$m_discontiguousSelection$ = !1;
    this.$m_sizingManager$ = new $DvtDataGridSizingManager$$;
    this.$m_keyboardHandler$ = new $DvtDataGridKeyboardHandler$$(this);
    this.$m_colHeaderHeight$ = this.$m_rowHeaderWidth$ = null;
    this.$m_styleClassDimensionMap$ = {};
    this.$m_captureScrolling$ = this.$m_stopDatabodyScroll$ = !1;
    this.$m_isEstimateColumnCount$ = this.$m_isEstimateRowCount$ = void 0;
    this.$m_initialized$ = this.$m_stopColumnHeaderFetch$ = this.$m_stopColumnFetch$ = this.$m_stopRowHeaderFetch$ = this.$m_stopRowFetch$ = !1;
    this.$m_shouldFocus$ = !0;
    this.callbacks = {};
    this.$_setupActions$();
    this.$m_readinessStack$ = [];
  }
  $oj$$11$$.$DataGridResources$ = function $$oj$$11$$$$DataGridResources$$($rtlMode$$, $translationFunction$$) {
    this.$rtlMode$ = $rtlMode$$;
    this.$translationFunction$ = $translationFunction$$;
    this.$styles$ = {};
    this.$styles$.datagrid = "oj-datagrid";
    this.$styles$.cell = "oj-datagrid-cell";
    this.$styles$.cellcontent = "oj-datagrid-cell-content";
    this.$styles$.celltext = "oj-datagrid-cell-text";
    this.$styles$.banded = "oj-datagrid-banded";
    this.$styles$.row = "oj-datagrid-row";
    this.$styles$.databody = "oj-datagrid-databody";
    this.$styles$.topcorner = "oj-datagrid-top-corner";
    this.$styles$.bottomcorner = "oj-datagrid-bottom-corner";
    this.$styles$.rowheaderspacer = "oj-datagrid-row-header-spacer";
    this.$styles$.colheaderspacer = "oj-datagrid-column-header-spacer";
    this.$styles$.status = "oj-datagrid-status";
    this.$styles$.emptytext = "oj-datagrid-empty-text";
    this.$styles$.header = "oj-datagrid-header";
    this.$styles$.groupingcontainer = "oj-datagrid-header-grouping";
    this.$styles$.headercell = "oj-datagrid-header-cell";
    this.$styles$.headercelltext = "oj-datagrid-header-cell-text";
    this.$styles$.headercellcontent = "oj-datagrid-header-cell-content";
    this.$styles$.rowheader = "oj-datagrid-row-header";
    this.$styles$.colheader = "oj-datagrid-column-header";
    this.$styles$.colheadercell = "oj-datagrid-column-header-cell";
    this.$styles$.rowheadercell = "oj-datagrid-row-header-cell";
    this.$styles$["scroller-mobile"] = "oj-datagrid-scroller-touch";
    this.$styles$.scroller = "oj-datagrid-scroller";
    this.$styles$.scrollers = "oj-datagrid-scrollers";
    this.$styles$.focus = "oj-focus";
    this.$styles$.hover = "oj-hover";
    this.$styles$.active = "oj-active";
    this.$styles$.selected = "oj-selected";
    this.$styles$.disabled = "oj-disabled";
    this.$styles$.enabled = "oj-enabled";
    this.$styles$["default"] = "oj-default";
    this.$styles$.sortcontainer = "oj-datagrid-sort-icon-container";
    this.$styles$.sortascending = "oj-datagrid-sort-ascending-icon";
    this.$styles$.sortdescending = "oj-datagrid-sort-descending-icon";
    this.$styles$.icon = "oj-component-icon";
    this.$styles$.clickableicon = "oj-clickable-icon-nocontext";
    this.$styles$.info = "oj-helper-hidden-accessible";
    this.$styles$.rowexpander = "oj-rowexpander";
    this.$styles$.cut = "oj-datagrid-cut";
    this.$styles$.selectaffordancetop = "oj-datagrid-touch-selection-affordance-top";
    this.$styles$.selectaffordancebottom = "oj-datagrid-touch-selection-affordance-bottom";
    this.$styles$.toucharea = "oj-datagrid-touch-area";
    this.$styles$.readOnly = "oj-read-only";
    this.$styles$.editable = "oj-datagrid-editable";
    this.$styles$.cellEdit = "oj-datagrid-cell-edit";
    this.$styles$.draggable = "oj-draggable";
    this.$styles$.drag = "oj-drag";
    this.$styles$.drop = "oj-drop";
    this.$styles$.activedrop = "oj-active-drop";
    this.$styles$.validdrop = "oj-valid-drop";
    this.$styles$.invaliddrop = "oj-invalid-drop";
    this.$styles$.formcontrol = "oj-form-control-inherit";
    this.$commands$ = {};
    this.$commands$.sortCol = "oj-datagrid-sortCol";
    this.$commands$.sortColAsc = "oj-datagrid-sortColAsc";
    this.$commands$.sortColDsc = "oj-datagrid-sortColDsc";
    this.$commands$.sortRow = "oj-datagrid-sortRow";
    this.$commands$.sortRowAsc = "oj-datagrid-sortRowAsc";
    this.$commands$.sortRowDsc = "oj-datagrid-sortRowDsc";
    this.$commands$.resize = "oj-datagrid-resize";
    this.$commands$.resizeWidth = "oj-datagrid-resizeWidth";
    this.$commands$.resizeHeight = "oj-datagrid-resizeHeight";
    this.$commands$.cut = "oj-datagrid-cut";
    this.$commands$.paste = "oj-datagrid-paste";
    this.$commands$.discontiguousSelection = "oj-datagrid-discontiguousSelection";
    this.attributes = {};
    this.attributes.key = "data-oj-key";
    this.attributes.context = "data-oj-context";
    this.attributes.resizable = "data-oj-resizable";
    this.attributes.sortable = "data-oj-sortable";
    this.attributes.sortDir = "data-oj-sortdir";
    this.attributes.expander = "data-oj-expander";
    this.attributes.expanderIndex = "data-oj-expander-index";
    this.attributes.container = $oj$$11$$.Components.$_OJ_CONTAINER_ATTR$;
    this.attributes.extent = "data-oj-extent";
    this.attributes.start = "data-oj-start";
    this.attributes.depth = "data-oj-depth";
    this.attributes.level = "data-oj-level";
    this.attributes.tabMod = "data-oj-tabmod";
  };
  $goog$exportPath_$$("DataGridResources", $oj$$11$$.$DataGridResources$, $oj$$11$$);
  $oj$$11$$.$DataGridResources$.prototype.$isRTLMode$ = function $$oj$$11$$$$DataGridResources$$$$isRTLMode$$() {
    return "rtl" === this.$rtlMode$ ? !0 : !1;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("DataGridResources.prototype.isRTLMode", {$isRTLMode$:$oj$$11$$.$DataGridResources$.prototype.$isRTLMode$});
  $oj$$11$$.$DataGridResources$.prototype.$getTranslatedText$ = function $$oj$$11$$$$DataGridResources$$$$getTranslatedText$$($key$$50$$, $args$$17$$) {
    return this.$translationFunction$($key$$50$$, $args$$17$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("DataGridResources.prototype.getTranslatedText", {$getTranslatedText$:$oj$$11$$.$DataGridResources$.prototype.$getTranslatedText$});
  $oj$$11$$.$DataGridResources$.prototype.$getMappedStyle$ = function $$oj$$11$$$$DataGridResources$$$$getMappedStyle$$($key$$51$$) {
    return null != $key$$51$$ ? this.$styles$[$key$$51$$] : null;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("DataGridResources.prototype.getMappedStyle", {$getMappedStyle$:$oj$$11$$.$DataGridResources$.prototype.$getMappedStyle$});
  $oj$$11$$.$DataGridResources$.prototype.$getMappedCommand$ = function $$oj$$11$$$$DataGridResources$$$$getMappedCommand$$($key$$52$$) {
    return null != $key$$52$$ ? this.$commands$[$key$$52$$] : null;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("DataGridResources.prototype.getMappedCommand", {$getMappedCommand$:$oj$$11$$.$DataGridResources$.prototype.$getMappedCommand$});
  $oj$$11$$.$DataGridResources$.prototype.$getMappedAttribute$ = function $$oj$$11$$$$DataGridResources$$$$getMappedAttribute$$($key$$53$$) {
    return null != $key$$53$$ ? this.attributes[$key$$53$$] : null;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("DataGridResources.prototype.getMappedAttribute", {$getMappedAttribute$:$oj$$11$$.$DataGridResources$.prototype.$getMappedAttribute$});
  $DvtDataGrid$$.$keyCodes$ = {$TAB_KEY$:9, $ENTER_KEY$:13, $SHIFT_KEY$:16, $CTRL_KEY$:17, $ALT_KEY$:18, $ESC_KEY$:27, $SPACE_KEY$:32, $PAGEUP_KEY$:33, $PAGEDOWN_KEY$:34, $END_KEY$:35, $HOME_KEY$:36, $LEFT_KEY$:37, $UP_KEY$:38, $RIGHT_KEY$:39, $DOWN_KEY$:40, $NUM5_KEY$:53, $V_KEY$:86, $X_KEY$:88, $F2_KEY$:113, $F8_KEY$:119, $F10_KEY$:121};
  $DvtDataGrid$$.$UPDATE_ANIMATION_FADE_INOUT$ = 1;
  $DvtDataGrid$$.$UPDATE_ANIMATION_SLIDE_INOUT$ = 2;
  $DvtDataGrid$$.$UPDATE_ANIMATION_DURATION$ = 250;
  $DvtDataGrid$$.$EXPAND_ANIMATION_DURATION$ = 500;
  $DvtDataGrid$$.$COLLAPSE_ANIMATION_DURATION$ = 400;
  $DvtDataGrid$$.$MAX_OVERSCROLL_PIXEL$ = 50;
  $DvtDataGrid$$.$BOUNCE_ANIMATION_DURATION$ = 500;
  $DvtDataGrid$$.$DECELERATION_FACTOR$ = 6E-4;
  $DvtDataGrid$$.$TAP_AND_SCROLL_RESET$ = 300;
  $DvtDataGrid$$.$MIN_SWIPE_DURATION$ = 200;
  $DvtDataGrid$$.$MAX_SWIPE_DURATION$ = 400;
  $DvtDataGrid$$.$MIN_SWIPE_DISTANCE$ = 10;
  $DvtDataGrid$$.$CONTEXT_MENU_TAP_HOLD_DURATION$ = 750;
  $DvtDataGrid$$.$HEADER_TAP_SHORT_HOLD_DURATION$ = 300;
  $DvtDataGrid$$.$VISIBILITY_STATE_HIDDEN$ = "hidden";
  $goog$exportPath_$$("DvtDataGrid.VISIBILITY_STATE_HIDDEN", $DvtDataGrid$$.$VISIBILITY_STATE_HIDDEN$, void 0);
  $DvtDataGrid$$.$VISIBILITY_STATE_REFRESH$ = "refresh";
  $goog$exportPath_$$("DvtDataGrid.VISIBILITY_STATE_REFRESH", $DvtDataGrid$$.$VISIBILITY_STATE_REFRESH$, void 0);
  $DvtDataGrid$$.$VISIBILITY_STATE_RENDER$ = "render";
  $goog$exportPath_$$("DvtDataGrid.VISIBILITY_STATE_RENDER", $DvtDataGrid$$.$VISIBILITY_STATE_RENDER$, void 0);
  $DvtDataGrid$$.$VISIBILITY_STATE_VISIBLE$ = "visible";
  $goog$exportPath_$$("DvtDataGrid.VISIBILITY_STATE_VISIBLE", $DvtDataGrid$$.$VISIBILITY_STATE_VISIBLE$, void 0);
  $DvtDataGrid$$.prototype.$SetOptions$ = function $$DvtDataGrid$$$$$SetOptions$$($options$$226$$) {
    this.$m_options$ = new $DvtDataGridOptions$$($options$$226$$);
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.SetOptions", $DvtDataGrid$$.prototype.$SetOptions$, void 0);
  $DvtDataGrid$$.prototype.$UpdateOptions$ = function $$DvtDataGrid$$$$$UpdateOptions$$($options$$227$$) {
    for (var $candidate$$ in $options$$227$$) {
      $candidate$$ in this.$m_options$.options && this.$m_options$.options[$candidate$$] != $options$$227$$[$candidate$$] && (this.$m_options$.options[$candidate$$] = $options$$227$$[$candidate$$]);
    }
    for ($candidate$$ in $options$$227$$) {
      if (!this.$_updateDataGrid$($candidate$$)) {
        this.empty();
        this.refresh(this.$m_root$);
        break;
      }
    }
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.UpdateOptions", $DvtDataGrid$$.prototype.$UpdateOptions$, void 0);
  $DvtDataGrid$$.prototype.$_updateDataGrid$ = function $$DvtDataGrid$$$$$_updateDataGrid$$($obj$$51_option$$30$$) {
    switch($obj$$51_option$$30$$) {
      case "bandingInterval":
        this.$_removeBanding$();
        this.$updateColumnBanding$();
        this.$updateRowBanding$();
        break;
      case "gridlines":
        this.$_updateGridlines$();
        break;
      case "scrollPosition":
        this.$setInitialScrollPosition$();
        break;
      case "selectionMode":
        break;
      case "emptyText":
        break;
      case "header":
        $obj$$51_option$$30$$ = this.$m_options$.options.header;
        this.$_updateHeaderOptions$($obj$$51_option$$30$$);
        break;
      case "selection":
        $obj$$51_option$$30$$ = this.$m_options$.getSelection();
        this.$_updateSelection$($obj$$51_option$$30$$);
        break;
      case "currentCell":
        $obj$$51_option$$30$$ = this.$m_options$.$getCurrentCell$();
        this.$_updateActive$($obj$$51_option$$30$$);
        break;
      case "editMode":
        this.$m_editMode$ = this.$m_options$.$getEditMode$();
      default:
        return!1;
    }
    return!0;
  };
  $DvtDataGrid$$.prototype.$_updateSelection$ = function $$DvtDataGrid$$$$$_updateSelection$$($selection$$) {
    null != $selection$$ && (this.$_isSelectionEnabled$() ? this.$SetSelection$($selection$$) : $selection$$.length = 0);
  };
  $DvtDataGrid$$.prototype.$_updateHeaderOptions$ = function $$DvtDataGrid$$$$$_updateHeaderOptions$$($obj$$52$$) {
    var $colObj$$, $opt$$19$$, $headers$$2$$, $element$$73$$, $refresh$$;
    $refresh$$ = !1;
    for ($element$$73$$ in $obj$$52$$) {
      if ("column" == $element$$73$$ || "row" == $element$$73$$) {
        if ($refresh$$) {
          break;
        }
        "column" == $element$$73$$ ? this.$m_colHeader$ && ($headers$$2$$ = this.$m_colHeader$.firstChild.childNodes) : this.$m_rowHeader$ && ($headers$$2$$ = this.$m_rowHeader$.firstChild.childNodes);
        if ($headers$$2$$) {
          for ($opt$$19$$ in $colObj$$ = $obj$$52$$[$element$$73$$], $colObj$$) {
            if (!this.$_processHeaders$($headers$$2$$, $opt$$19$$, $colObj$$[$opt$$19$$])) {
              $refresh$$ = !0;
              break;
            }
          }
        }
      }
    }
    $refresh$$ && (this.empty(), this.refresh(this.$m_root$));
  };
  $DvtDataGrid$$.prototype.$_processHeaders$ = function $$DvtDataGrid$$$$$_processHeaders$$($headers$$3$$, $attribute$$4_opt$$20$$, $i$$144_value$$194$$) {
    var $val$$28$$;
    $attribute$$4_opt$$20$$ = this.$m_resources$.$getMappedAttribute$($attribute$$4_opt$$20$$);
    $val$$28$$ = $i$$144_value$$194$$;
    $i$$144_value$$194$$.width ? $val$$28$$ = $i$$144_value$$194$$.width : $i$$144_value$$194$$.height && ($val$$28$$ = $i$$144_value$$194$$.height);
    for ($i$$144_value$$194$$ = 0;$i$$144_value$$194$$ < $headers$$3$$.length;$i$$144_value$$194$$++) {
      if ("disable" == $val$$28$$) {
        $headers$$3$$[$i$$144_value$$194$$].setAttribute($attribute$$4_opt$$20$$, "false");
      } else {
        if ("enable" == $val$$28$$) {
          $headers$$3$$[$i$$144_value$$194$$].setAttribute($attribute$$4_opt$$20$$, "true");
        } else {
          return!1;
        }
      }
    }
    return!0;
  };
  $DvtDataGrid$$.prototype.$_updateGridlines$ = function $$DvtDataGrid$$$$$_updateGridlines$$() {
    var $i$$145$$, $j$$19$$, $row$$2$$, $rowCount$$2$$, $horizontalGridlines$$, $verticalGridlines$$, $rows$$, $dir$$1$$;
    $horizontalGridlines$$ = this.$m_options$.$getHorizontalGridlines$();
    $verticalGridlines$$ = this.$m_options$.$getVerticalGridlines$();
    $rows$$ = this.$m_databody$.firstChild.childNodes;
    $rowCount$$2$$ = $rows$$.length;
    $dir$$1$$ = this.$m_resources$.$isRTLMode$() ? "right" : "left";
    for ($i$$145$$ = 0;$i$$145$$ < $rowCount$$2$$;$i$$145$$ += 1) {
      for ($row$$2$$ = $rows$$[$i$$145$$].childNodes, $j$$19$$ = 0;$j$$19$$ < $row$$2$$.length;$j$$19$$ += 1) {
        "hidden" === $verticalGridlines$$ || this.$_isLastColumn$($j$$19$$ + this.$m_startCol$) && this.$getRowHeaderWidth$() + this.$getElementDir$($row$$2$$[$j$$19$$], $dir$$1$$) + this.$calculateColumnWidth$($row$$2$$[$j$$19$$]) >= this.getWidth() ? "left" === $dir$$1$$ ? $row$$2$$[$j$$19$$].style.borderRightStyle = "none" : $row$$2$$[$j$$19$$].style.borderLeftStyle = "none" : "left" === $dir$$1$$ ? $row$$2$$[$j$$19$$].style.borderRightStyle = "" : $row$$2$$[$j$$19$$].style.borderLeftStyle = "", 
        "hidden" === $horizontalGridlines$$ || this.$_isLastRow$($i$$145$$ + this.$m_startRow$) && this.$getRowBottom$($rows$$[$i$$145$$], null) >= this.getHeight() ? $row$$2$$[$j$$19$$].style.borderBottomStyle = "none" : $row$$2$$[$j$$19$$].style.borderBottomStyle = "";
      }
    }
  };
  $DvtDataGrid$$.prototype.$_updateEdgeCellBorders$ = function $$DvtDataGrid$$$$$_updateEdgeCellBorders$$($activeValue$$) {
    var $activeCell$$, $prop$$62$$;
    null != this.$m_active$ && "header" != this.$m_active$.type && ($activeCell$$ = this.$_getActiveElement$(), $prop$$62$$ = this.$m_resources$.$isRTLMode$() ? "borderLeftStyle" : "borderRightStyle", null != $activeCell$$ && (this.$_isLastRow$(this.$m_active$.indexes.row) && ($activeCell$$.style.borderBottomStyle = $activeValue$$), this.$_isLastColumn$(this.$m_active$.indexes.column) && ($activeCell$$.style[$prop$$62$$] = $activeValue$$)));
  };
  $DvtDataGrid$$.prototype.$SetResources$ = function $$DvtDataGrid$$$$$SetResources$$($resources$$) {
    this.$m_resources$ = $resources$$;
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.SetResources", $DvtDataGrid$$.prototype.$SetResources$, void 0);
  $DvtDataGrid$$.prototype.$getResources$ = function $$DvtDataGrid$$$$$getResources$$() {
    return this.$m_resources$;
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.getResources", $DvtDataGrid$$.prototype.$getResources$, void 0);
  $DvtDataGrid$$.prototype.$getStartRow$ = function $$DvtDataGrid$$$$$getStartRow$$() {
    return this.$m_startRow$;
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.getStartRow", $DvtDataGrid$$.prototype.$getStartRow$, void 0);
  $DvtDataGrid$$.prototype.$getStartRowHeader$ = function $$DvtDataGrid$$$$$getStartRowHeader$$() {
    return this.$m_startRowHeader$;
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.getStartRowHeader", $DvtDataGrid$$.prototype.$getStartRowHeader$, void 0);
  $DvtDataGrid$$.prototype.$getStartColumn$ = function $$DvtDataGrid$$$$$getStartColumn$$() {
    return this.$m_startCol$;
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.getStartColumn", $DvtDataGrid$$.prototype.$getStartColumn$, void 0);
  $DvtDataGrid$$.prototype.$getStartColumnHeader$ = function $$DvtDataGrid$$$$$getStartColumnHeader$$() {
    return this.$m_startColHeader$;
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.getStartColumnHeader", $DvtDataGrid$$.prototype.$getStartColumnHeader$, void 0);
  $DvtDataGrid$$.prototype.$getMappedStyle$ = function $$DvtDataGrid$$$$$getMappedStyle$$($key$$55$$) {
    return this.$m_resources$.$getMappedStyle$($key$$55$$);
  };
  $DvtDataGrid$$.prototype.$SetDataSource$ = function $$DvtDataGrid$$$$$SetDataSource$$($dataSource$$) {
    this.$_removeDataSourceEventListeners$();
    null != $dataSource$$ && (this.$m_handleModelEventListener$ = this.$handleModelEvent$.bind(this), this.$m_handleExpandEventListener$ = this.$handleExpandEvent$.bind(this), this.$m_handleCollapseEventListener$ = this.$handleCollapseEvent$.bind(this), $dataSource$$.on("change", this.$m_handleModelEventListener$, this), $dataSource$$.on("expand", this.$m_handleExpandEventListener$, this), $dataSource$$.on("collapse", this.$m_handleCollapseEventListener$, this));
    this.$m_dataSource$ = $dataSource$$;
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.SetDataSource", $DvtDataGrid$$.prototype.$SetDataSource$, void 0);
  $DvtDataGrid$$.prototype.$getDataSource$ = function $$DvtDataGrid$$$$$getDataSource$$() {
    return this.$m_dataSource$;
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.getDataSource", $DvtDataGrid$$.prototype.$getDataSource$, void 0);
  $DvtDataGrid$$.prototype.$setVisibility$ = function $$DvtDataGrid$$$$$setVisibility$$($state$$) {
    this.$m_visibility$ = $state$$;
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.setVisibility", $DvtDataGrid$$.prototype.$setVisibility$, void 0);
  $DvtDataGrid$$.prototype.$getVisibility$ = function $$DvtDataGrid$$$$$getVisibility$$() {
    null == this.$m_visibility$ && (null != this.$m_root$.offsetParent ? this.$setVisibility$($DvtDataGrid$$.$VISIBILITY_STATE_VISIBLE$) : this.$setVisibility$($DvtDataGrid$$.$VISIBILITY_STATE_HIDDEN$));
    return this.$m_visibility$;
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.getVisibility", $DvtDataGrid$$.prototype.$getVisibility$, void 0);
  $DvtDataGrid$$.prototype.$SetOptionCallback$ = function $$DvtDataGrid$$$$$SetOptionCallback$$($callback$$85$$) {
    this.$m_setOptionCallback$ = $callback$$85$$;
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.SetOptionCallback", $DvtDataGrid$$.prototype.$SetOptionCallback$, void 0);
  $DvtDataGrid$$.prototype.$SetRemoveCallback$ = function $$DvtDataGrid$$$$$SetRemoveCallback$$($callback$$86$$) {
    this.$m_removeCallback$ = $callback$$86$$;
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.SetRemoveCallback", $DvtDataGrid$$.prototype.$SetRemoveCallback$, void 0);
  $DvtDataGrid$$.prototype.$_remove$ = function $$DvtDataGrid$$$$$_remove$$($element$$74$$) {
    null != this.$m_removeCallback$ ? this.$m_removeCallback$.call(null, $element$$74$$) : $element$$74$$.parentNode.removeChild($element$$74$$);
  };
  $goog$exportPath_$$("DvtDataGrid.prototype._remove", $DvtDataGrid$$.prototype.$_remove$, void 0);
  $DvtDataGrid$$.prototype.$SetCreateReadyPromiseCallback$ = function $$DvtDataGrid$$$$$SetCreateReadyPromiseCallback$$($callback$$87$$) {
    this.$m_createReadyPromise$ = $callback$$87$$;
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.SetCreateReadyPromiseCallback", $DvtDataGrid$$.prototype.$SetCreateReadyPromiseCallback$, void 0);
  $DvtDataGrid$$.prototype.$SetResolveReadyPromiseCallback$ = function $$DvtDataGrid$$$$$SetResolveReadyPromiseCallback$$($callback$$88$$) {
    this.$m_resolveReadyPromise$ = $callback$$88$$;
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.SetResolveReadyPromiseCallback", $DvtDataGrid$$.prototype.$SetResolveReadyPromiseCallback$, void 0);
  $DvtDataGrid$$.prototype.$_signalTaskStart$ = function $$DvtDataGrid$$$$$_signalTaskStart$$() {
    this.$m_readinessStack$ && (0 == this.$m_readinessStack$.length && this.$m_createReadyPromise$(), this.$m_readinessStack$.push(1));
  };
  $DvtDataGrid$$.prototype.$_signalTaskEnd$ = function $$DvtDataGrid$$$$$_signalTaskEnd$$() {
    this.$m_readinessStack$ && 0 < this.$m_readinessStack$.length && (this.$m_readinessStack$.pop(), 0 == this.$m_readinessStack$.length && this.$m_resolveReadyPromise$());
  };
  $DvtDataGrid$$.prototype.$_indexes$ = function $$DvtDataGrid$$$$$_indexes$$($keys$$13$$, $callback$$89$$) {
    var $self$$71$$ = this, $indexes$$;
    $indexes$$ = this.$m_dataSource$.indexes($keys$$13$$);
    "function" === typeof $indexes$$.then ? ($self$$71$$.$_signalTaskStart$(), $indexes$$.then(function($obj$$53$$) {
      $callback$$89$$.call($self$$71$$, $obj$$53$$, $keys$$13$$);
      $self$$71$$.$_signalTaskEnd$();
    }, function() {
      $callback$$89$$.call($self$$71$$, {row:-1, column:-1}, $keys$$13$$);
      $self$$71$$.$_signalTaskEnd$();
    })) : $callback$$89$$.call($self$$71$$, $indexes$$, $keys$$13$$);
  };
  $DvtDataGrid$$.prototype.$_keys$ = function $$DvtDataGrid$$$$$_keys$$($indexes$$1$$, $callback$$90$$) {
    var $self$$72$$ = this, $keys$$14$$;
    $keys$$14$$ = this.$m_dataSource$.keys($indexes$$1$$);
    "function" === typeof $keys$$14$$.then ? ($self$$72$$.$_signalTaskStart$(), $keys$$14$$.then(function($obj$$54$$) {
      $callback$$90$$.call($self$$72$$, $obj$$54$$, $indexes$$1$$);
      $self$$72$$.$_signalTaskEnd$();
    }, function() {
      $callback$$90$$.call($self$$72$$, {row:null, column:null}, $indexes$$1$$);
      $self$$72$$.$_signalTaskEnd$();
    })) : $callback$$90$$.call($self$$72$$, $keys$$14$$, $indexes$$1$$);
  };
  $DvtDataGrid$$.prototype.$_getLocalKeys$ = function $$DvtDataGrid$$$$$_getLocalKeys$$($indexes$$2$$) {
    var $keys$$15$$ = {row:null, column:null};
    null != $indexes$$2$$.row && ($keys$$15$$.row = this.$_getKey$(this.$m_databody$.firstChild.childNodes[$indexes$$2$$.row - this.$m_startRow$]));
    null != $indexes$$2$$.column && ($keys$$15$$.column = this.$_getKey$(this.$_getColumnHeaderByIndex$($indexes$$2$$.column, this.$m_columnHeaderLevelCount$ - 1)));
    return $keys$$15$$;
  };
  $DvtDataGrid$$.prototype.$SetCreateContextCallback$ = function $$DvtDataGrid$$$$$SetCreateContextCallback$$($callback$$91$$) {
    this.$m_createContextCallback$ = $callback$$91$$;
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.SetCreateContextCallback", $DvtDataGrid$$.prototype.$SetCreateContextCallback$, void 0);
  $DvtDataGrid$$.prototype.$_isHighWatermarkScrolling$ = function $$DvtDataGrid$$$$$_isHighWatermarkScrolling$$() {
    return "scroll" != this.$m_options$.$getScrollPolicy$();
  };
  $DvtDataGrid$$.prototype.destroy = function $$DvtDataGrid$$$$destroy$() {
    delete this.$m_fetching$;
    this.$_removeDataSourceEventListeners$();
    this.$_removeDomEventListeners$();
    delete this.$m_styleClassDimensionMap$;
    this.$m_styleClassDimensionMap$ = {};
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.destroy", $DvtDataGrid$$.prototype.destroy, void 0);
  $DvtDataGrid$$.prototype.$_removeDataSourceEventListeners$ = function $$DvtDataGrid$$$$$_removeDataSourceEventListeners$$() {
    null != this.$m_dataSource$ && (this.$m_dataSource$.off("change", this.$m_handleModelEventListener$), this.$m_dataSource$.off("expand", this.$m_handleExpandEventListener$), this.$m_dataSource$.off("collapse", this.$m_handleCollapseEventListener$));
  };
  $DvtDataGrid$$.prototype.$_removeDomEventListeners$ = function $$DvtDataGrid$$$$$_removeDomEventListeners$$() {
    document.removeEventListener("mousemove", this.$m_docMouseMoveListener$, !1);
    document.removeEventListener("mouseup", this.$m_docMouseUpListener$, !1);
    null != this.$m_root$ && (this.$m_handleDatabodyKeyDown$ && this.$m_root$.removeEventListener("keydown", this.$m_handleDatabodyKeyDown$, !1), this.$m_handleRootFocus$ && this.$m_root$.removeEventListener("focus", this.$m_handleRootFocus$, !1), this.$m_handleRootBlur$ && this.$m_root$.removeEventListener("blur", this.$m_handleRootBlur$, !1));
  };
  $DvtDataGrid$$.prototype.$getRootElement$ = function $$DvtDataGrid$$$$$getRootElement$$() {
    return this.$m_root$;
  };
  $DvtDataGrid$$.prototype.getWidth = function $$DvtDataGrid$$$$getWidth$() {
    null == this.$m_width$ && (this.$m_width$ = this.$getRootElement$().clientWidth);
    return this.$m_width$;
  };
  $DvtDataGrid$$.prototype.getHeight = function $$DvtDataGrid$$$$getHeight$() {
    null == this.$m_height$ && (this.$m_height$ = this.$getRootElement$().clientHeight);
    return this.$m_height$;
  };
  $DvtDataGrid$$.prototype.$getScrollableWidth$ = function $$DvtDataGrid$$$$$getScrollableWidth$$() {
    return this.$getElementWidth$(this.$m_scroller$.firstChild);
  };
  $DvtDataGrid$$.prototype.$getViewportWidth$ = function $$DvtDataGrid$$$$$getViewportWidth$$() {
    var $width$$14$$ = this.getWidth();
    return Math.round(1.5 * $width$$14$$);
  };
  $DvtDataGrid$$.prototype.$getViewportHeight$ = function $$DvtDataGrid$$$$$getViewportHeight$$() {
    var $height$$13$$ = this.getHeight();
    return Math.round(1.5 * $height$$13$$);
  };
  $DvtDataGrid$$.prototype.$getFetchSize$ = function $$DvtDataGrid$$$$$getFetchSize$$($axis$$) {
    return "row" == $axis$$ ? (null == this.$m_rowFetchSize$ && (this.$m_rowFetchSize$ = Math.round(this.$getViewportHeight$() / this.$getDefaultRowHeight$())), this.$m_rowFetchSize$) : "column" == $axis$$ ? (null == this.$m_columnFetchSize$ && (this.$m_columnFetchSize$ = Math.round(this.$getViewportWidth$() / this.$getDefaultColumnWidth$())), this.$m_columnFetchSize$) : 0;
  };
  $DvtDataGrid$$.prototype.$getEmptyText$ = function $$DvtDataGrid$$$$$getEmptyText$$() {
    var $emptyText_resources$$1$$;
    $emptyText_resources$$1$$ = this.$m_options$.$getEmptyText$();
    null == $emptyText_resources$$1$$ && ($emptyText_resources$$1$$ = this.$m_resources$, $emptyText_resources$$1$$ = $emptyText_resources$$1$$.$getTranslatedText$("msgNoData"));
    return $emptyText_resources$$1$$;
  };
  $DvtDataGrid$$.prototype.$_buildEmptyText$ = function $$DvtDataGrid$$$$$_buildEmptyText$$() {
    var $emptyText$$1$$, $empty$$;
    $emptyText$$1$$ = this.$getEmptyText$();
    $empty$$ = document.createElement("div");
    $empty$$.id = this.$createSubId$("empty");
    $empty$$.className = this.$getMappedStyle$("emptytext");
    this.$setElementDir$($empty$$, 0 <= this.$m_endColHeader$ ? this.$getColumnHeaderHeight$() : 0, "top");
    $empty$$.textContent = $emptyText$$1$$;
    return this.$m_empty$ = $empty$$;
  };
  $DvtDataGrid$$.prototype.$setDefaultDimensions$ = function $$DvtDataGrid$$$$$setDefaultDimensions$$() {
    var $div$$3$$, $resources$$2$$;
    $div$$3$$ = document.createElement("div");
    $div$$3$$.style.visibilty = "hidden";
    $resources$$2$$ = this.$m_resources$;
    $div$$3$$.className = $resources$$2$$.$getMappedStyle$("colheadercell") + " " + $resources$$2$$.$getMappedStyle$("headercell");
    document.body.appendChild($div$$3$$);
    this.$m_defaultColumnWidth$ = Math.floor($div$$3$$.getBoundingClientRect().width);
    $div$$3$$.className = $resources$$2$$.$getMappedStyle$("row");
    this.$m_defaultRowHeight$ = Math.floor($div$$3$$.getBoundingClientRect().height);
    document.body.removeChild($div$$3$$);
  };
  $DvtDataGrid$$.prototype.$getDefaultRowHeight$ = function $$DvtDataGrid$$$$$getDefaultRowHeight$$() {
    null == this.$m_defaultRowHeight$ && this.$setDefaultDimensions$();
    return this.$m_defaultRowHeight$;
  };
  $DvtDataGrid$$.prototype.$getDefaultColumnWidth$ = function $$DvtDataGrid$$$$$getDefaultColumnWidth$$() {
    null == this.$m_defaultColumnWidth$ && this.$setDefaultDimensions$();
    return this.$m_defaultColumnWidth$;
  };
  $DvtDataGrid$$.prototype.$getRowHeight$ = function $$DvtDataGrid$$$$$getRowHeight$$($elem$$25$$, $key$$56$$) {
    var $rowHeight$$, $className$$6$$;
    $rowHeight$$ = this.$m_sizingManager$.$getSize$("row", $key$$56$$);
    if (null != $rowHeight$$) {
      return $rowHeight$$;
    }
    if ("" != $elem$$25$$.style.height) {
      return $rowHeight$$ = this.$getElementHeight$($elem$$25$$), this.$m_sizingManager$.$setSize$("row", $key$$56$$, $rowHeight$$), $rowHeight$$;
    }
    $className$$6$$ = $elem$$25$$.className;
    $rowHeight$$ = this.$m_styleClassDimensionMap$[$className$$6$$];
    null == $rowHeight$$ && ($rowHeight$$ = this.$getElementHeight$($elem$$25$$));
    $rowHeight$$ != this.$getDefaultRowHeight$() && this.$m_sizingManager$.$setSize$("row", $key$$56$$, $rowHeight$$);
    return this.$m_styleClassDimensionMap$[$className$$6$$] = $rowHeight$$;
  };
  $DvtDataGrid$$.prototype.$getColumnWidth$ = function $$DvtDataGrid$$$$$getColumnWidth$$($elem$$26$$, $key$$57$$) {
    var $columnWidth$$, $className$$7$$;
    $columnWidth$$ = this.$m_sizingManager$.$getSize$("column", $key$$57$$);
    if (null != $columnWidth$$) {
      return $columnWidth$$;
    }
    if ("" != $elem$$26$$.style.width) {
      return $columnWidth$$ = this.$getElementWidth$($elem$$26$$), this.$m_sizingManager$.$setSize$("column", $key$$57$$, $columnWidth$$), $columnWidth$$;
    }
    $className$$7$$ = $elem$$26$$.className;
    $columnWidth$$ = this.$m_styleClassDimensionMap$[$className$$7$$];
    null == $columnWidth$$ && ($columnWidth$$ = this.$getElementWidth$($elem$$26$$));
    $columnWidth$$ != this.$getDefaultColumnWidth$() && this.$m_sizingManager$.$setSize$("column", $key$$57$$, $columnWidth$$);
    return this.$m_styleClassDimensionMap$[$className$$7$$] = $columnWidth$$;
  };
  $DvtDataGrid$$.prototype.$createSubId$ = function $$DvtDataGrid$$$$$createSubId$$($subId$$6$$) {
    var $id$$20$$ = this.$getRootElement$().id;
    null == $id$$20$$ && ($id$$20$$ = "");
    return[$id$$20$$, $subId$$6$$].join(":");
  };
  $DvtDataGrid$$.prototype.$isHeaderFetchComplete$ = function $$DvtDataGrid$$$$$isHeaderFetchComplete$$() {
    return!1 === this.$m_fetching$.row && !1 === this.$m_fetching$.column;
  };
  $DvtDataGrid$$.prototype.$isFetchComplete$ = function $$DvtDataGrid$$$$$isFetchComplete$$() {
    return this.$isHeaderFetchComplete$() && !1 === this.$m_fetching$.cells;
  };
  $DvtDataGrid$$.prototype.$_isLastRow$ = function $$DvtDataGrid$$$$$_isLastRow$$($index$$99$$) {
    return this.$_isCountUnknown$("row") ? $index$$99$$ === this.$m_endRow$ && this.$m_stopRowFetch$ : $index$$99$$ + 1 === this.$m_dataSource$.getCount("row");
  };
  $DvtDataGrid$$.prototype.$_isLastColumn$ = function $$DvtDataGrid$$$$$_isLastColumn$$($index$$100$$) {
    return this.$_isCountUnknown$("column") ? $index$$100$$ === this.$m_endCol$ && this.$m_stopColumnFetch$ : $index$$100$$ + 1 === this.$m_dataSource$.getCount("column");
  };
  $DvtDataGrid$$.prototype.empty = function $$DvtDataGrid$$$$empty$() {
    this.$m_empty$ && this.$m_root$.removeChild(this.$m_empty$);
    this.$m_corner$ && this.$m_root$.removeChild(this.$m_corner$);
    this.$m_bottomCorner$ && this.$m_root$.removeChild(this.$m_bottomCorner$);
    this.$m_columnHeaderScrollbarSpacer$ && this.$m_root$.removeChild(this.$m_columnHeaderScrollbarSpacer$);
    this.$m_rowHeaderScrollbarSpacer$ && this.$m_root$.removeChild(this.$m_rowHeaderScrollbarSpacer$);
    this.$m_root$.removeChild(this.$m_placeHolder$);
    this.$m_root$.removeChild(this.$m_status$);
    this.$m_root$.removeChild(this.$m_accSummary$);
    this.$m_root$.removeChild(this.$m_accInfo$);
    this.$m_root$.removeChild(this.$m_stateInfo$);
    this.$m_root$.removeChild(this.$m_contextInfo$);
    this.$m_root$.removeChild(this.$m_scroller$);
    this.$_remove$(this.$m_colHeader$);
    this.$_remove$(this.$m_rowHeader$);
    this.$_remove$(this.$m_databody$);
  };
  $DvtDataGrid$$.prototype.refresh = function $$DvtDataGrid$$$$refresh$($root$$2$$) {
    this.$_removeDomEventListeners$();
    this.$resetInternal$();
    this.render($root$$2$$);
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.refresh", $DvtDataGrid$$.prototype.refresh, void 0);
  $DvtDataGrid$$.prototype.$resetInternal$ = function $$DvtDataGrid$$$$$resetInternal$$() {
    this.$m_initialized$ = !1;
    this.$m_readinessStack$ = [];
    this.$_signalTaskStart$();
    this.$_signalTaskEnd$();
    this.$m_status$ = this.$m_stateInfo$ = this.$m_placeHolder$ = this.$m_contextInfo$ = this.$m_accSummary$ = this.$m_accInfo$ = this.$m_empty$ = this.$m_scroller$ = this.$m_databody$ = this.$m_rowHeader$ = this.$m_colHeader$ = this.$m_rowHeaderScrollbarSpacer$ = this.$m_columnHeaderScrollbarSpacer$ = this.$m_bottomCorner$ = this.$m_corner$ = this.$m_cursor$ = null;
    this.$m_isEstimateColumnCount$ = this.$m_isEstimateRowCount$ = void 0;
    this.$m_stopColumnHeaderFetch$ = this.$m_stopColumnFetch$ = this.$m_stopRowHeaderFetch$ = this.$m_stopRowFetch$ = !1;
    this.$m_fetching$ = this.$m_columnFetchSize$ = this.$m_rowFetchSize$ = null;
    this.$m_sizingManager$.clear();
    this.$m_styleClassDimensionMap$ = {};
    this.$m_scrollWidth$ = this.$m_scrollHeight$ = this.$m_width$ = this.$m_height$ = null;
    this.$m_avgColWidth$ = this.$m_avgRowHeight$ = void 0;
    this.$m_prevActive$ = this.$m_active$ = this.$m_columnHeaderLevelHeights$ = this.$m_rowHeaderLevelWidths$ = this.$m_rowHeaderWidth$ = this.$m_colHeaderHeight$ = this.$m_defaultRowHeight$ = this.$m_defaultColumnWidth$ = null;
    this.$m_databodyMove$ = this.$m_databodyDragState$ = !1;
    this.$m_dropTargetHeader$ = this.$m_dropTarget$ = this.$m_moveRowHeader$ = this.$m_moveRow$ = null;
    this.$m_discontiguousSelection$ = !1;
    this.$m_modelEvents$ = this.$m_handleRootBlur$ = this.$m_handleRootFocus$ = this.$m_handleDatabodyKeyDown$ = this.$m_docMouseUpListener$ = this.$m_docMouseMoveListener$ = null;
    this.$m_captureScrolling$ = this.$m_stopDatabodyScroll$ = !1;
    this.$m_externalFocus$ = this.$m_resizeRequired$ = this.$m_sortInfo$ = this.$m_columnHeaderLevelCount$ = this.$m_rowHeaderLevelCount$ = this.$m_endColHeaderPixel$ = this.$m_endRowHeaderPixel$ = this.$m_startColHeaderPixel$ = this.$m_startRowHeaderPixel$ = this.$m_endColHeader$ = this.$m_endRowHeader$ = this.$m_startColHeader$ = this.$m_startRowHeader$ = this.$m_endColPixel$ = this.$m_endRowPixel$ = this.$m_startColPixel$ = this.$m_startRowPixel$ = this.$m_endCol$ = this.$m_endRow$ = this.$m_startCol$ = 
    this.$m_startRow$ = this.$m_resizingElement$ = this.$m_currentScrollTop$ = this.$m_currentScrollLeft$ = this.$m_hasVerticalScroller$ = this.$m_hasHorizontalScroller$ = null;
  };
  $DvtDataGrid$$.prototype.$_shouldInitialize$ = function $$DvtDataGrid$$$$$_shouldInitialize$$() {
    return this.$isFetchComplete$() && !this.$m_initialized$ && null != this.$m_databody$.parentNode;
  };
  $DvtDataGrid$$.prototype.$_handleInitialization$ = function $$DvtDataGrid$$$$$_handleInitialization$$($hasData$$) {
    !0 == $hasData$$ ? (this.$resizeGrid$(), this.$setInitialScrollPosition$(), this.$fillViewport$(this.$m_currentScrollLeft$, this.$m_currentScrollTop$), this.$isFetchComplete$() && (this.$_updateActive$(this.$m_options$.$getCurrentCell$()), this.$m_initialized$ = !0, this.fireEvent("ready", {}), this.$_runModelEventQueue$())) : (this.$m_initialized$ = !0, this.fireEvent("ready", {}), this.$_runModelEventQueue$());
  };
  $DvtDataGrid$$.prototype.$_runModelEventQueue$ = function $$DvtDataGrid$$$$$_runModelEventQueue$$() {
    var $i$$146$$;
    if (null != this.$m_modelEvents$) {
      for ($i$$146$$ = 0;$i$$146$$ < this.$m_modelEvents$.length;$i$$146$$++) {
        this.$handleModelEvent$(this.$m_modelEvents$[$i$$146$$]);
      }
      this.$m_modelEvents$.length = 0;
    }
  };
  $DvtDataGrid$$.prototype.render = function $$DvtDataGrid$$$$render$($root$$3$$) {
    null != this.$m_databody$ && (this.destroy(), this.$resetInternal$());
    this.$m_fetching$ = {};
    this.$m_startCol$ = this.$m_startRow$ = 0;
    this.$m_endCol$ = this.$m_endRow$ = -1;
    this.$m_startColHeader$ = this.$m_startRowHeader$ = this.$m_endColPixel$ = this.$m_endRowPixel$ = this.$m_startColPixel$ = this.$m_startRowPixel$ = 0;
    this.$m_endColHeader$ = this.$m_endRowHeader$ = -1;
    this.$m_currentScrollTop$ = this.$m_currentScrollLeft$ = this.$m_endColHeaderPixel$ = this.$m_endRowHeaderPixel$ = this.$m_startColHeaderPixel$ = this.$m_startRowHeaderPixel$ = 0;
    this.$buildGrid$($root$$3$$);
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.render", $DvtDataGrid$$.prototype.render, void 0);
  $DvtDataGrid$$.prototype.$buildGrid$ = function $$DvtDataGrid$$$$$buildGrid$$($empty$$1_root$$4$$) {
    var $status$$16$$, $accInfo_accSummary_contextInfo_placeHolder_rtl_stateInfo$$, $colHeader$$, $rowHeader$$, $scroller$$, $databody$$;
    this.$m_root$ = $empty$$1_root$$4$$;
    this.$m_root$.setAttribute("role", "application");
    this.$_isCellEditable$() ? this.$m_utils$.$addCSSClassName$(this.$m_root$, this.$getMappedStyle$("editable")) : this.$m_utils$.$addCSSClassName$(this.$m_root$, this.$getMappedStyle$("readOnly"));
    $empty$$1_root$$4$$.tabIndex = 0;
    $status$$16$$ = this.$buildStatus$();
    $empty$$1_root$$4$$.appendChild($status$$16$$);
    this.$m_status$ = $status$$16$$;
    $accInfo_accSummary_contextInfo_placeHolder_rtl_stateInfo$$ = this.$buildAccSummary$();
    $empty$$1_root$$4$$.appendChild($accInfo_accSummary_contextInfo_placeHolder_rtl_stateInfo$$);
    this.$m_accSummary$ = $accInfo_accSummary_contextInfo_placeHolder_rtl_stateInfo$$;
    $accInfo_accSummary_contextInfo_placeHolder_rtl_stateInfo$$ = this.$buildAccInfo$();
    $empty$$1_root$$4$$.appendChild($accInfo_accSummary_contextInfo_placeHolder_rtl_stateInfo$$);
    this.$m_accInfo$ = $accInfo_accSummary_contextInfo_placeHolder_rtl_stateInfo$$;
    $accInfo_accSummary_contextInfo_placeHolder_rtl_stateInfo$$ = this.$buildStateInfo$();
    $empty$$1_root$$4$$.appendChild($accInfo_accSummary_contextInfo_placeHolder_rtl_stateInfo$$);
    this.$m_stateInfo$ = $accInfo_accSummary_contextInfo_placeHolder_rtl_stateInfo$$;
    $accInfo_accSummary_contextInfo_placeHolder_rtl_stateInfo$$ = this.$buildContextInfo$();
    $empty$$1_root$$4$$.appendChild($accInfo_accSummary_contextInfo_placeHolder_rtl_stateInfo$$);
    this.$m_contextInfo$ = $accInfo_accSummary_contextInfo_placeHolder_rtl_stateInfo$$;
    $accInfo_accSummary_contextInfo_placeHolder_rtl_stateInfo$$ = this.$buildPlaceHolder$();
    $empty$$1_root$$4$$.appendChild($accInfo_accSummary_contextInfo_placeHolder_rtl_stateInfo$$);
    this.$m_placeHolder$ = $accInfo_accSummary_contextInfo_placeHolder_rtl_stateInfo$$;
    null != this.$m_dataSource$ ? (this.$m_empty$ = null, $accInfo_accSummary_contextInfo_placeHolder_rtl_stateInfo$$ = this.$m_resources$.$isRTLMode$(), $colHeader$$ = this.$buildHeaders$("column", this.$getMappedStyle$("colheader")), $rowHeader$$ = this.$buildHeaders$("row", this.$getMappedStyle$("rowheader")), $scroller$$ = this.$buildScroller$(), $databody$$ = this.$buildDatabody$($scroller$$), $accInfo_accSummary_contextInfo_placeHolder_rtl_stateInfo$$ && ($colHeader$$.style.direction = "rtl", 
    $databody$$.style.direction = "rtl", $scroller$$.style.direction = "rtl"), this.$m_isResizing$ = !1, this.$m_resizingElement$ = null, this.$m_databodyDragState$ = !1, this.$m_handleDatabodyKeyDown$ = this.$handleDatabodyKeyDown$.bind(this), this.$m_handleRootFocus$ = this.$handleRootFocus$.bind(this), this.$m_handleRootBlur$ = this.$handleRootBlur$.bind(this), this.$m_docMouseMoveListener$ = this.$handleMouseMove$.bind(this), this.$m_docMouseUpListener$ = this.$handleMouseUp$.bind(this), this.$m_utils$.$isTouchDevice$() ? 
    ($databody$$.addEventListener("touchstart", this.$handleTouchStart$.bind(this), !1), $databody$$.addEventListener("touchmove", this.$handleTouchMove$.bind(this), !1), $databody$$.addEventListener("touchend", this.$handleTouchEnd$.bind(this), !1), $databody$$.addEventListener("touchcancel", this.$handleTouchCancel$.bind(this), !1), $colHeader$$.addEventListener("touchstart", this.$handleHeaderTouchStart$.bind(this), !1), $colHeader$$.addEventListener("touchmove", this.$handleHeaderTouchMove$.bind(this), 
    !1), $colHeader$$.addEventListener("touchend", this.$handleHeaderTouchEnd$.bind(this), !1), $colHeader$$.addEventListener("touchcancel", this.$handleHeaderTouchCancel$.bind(this), !1), $rowHeader$$.addEventListener("touchstart", this.$handleHeaderTouchStart$.bind(this), !1), $rowHeader$$.addEventListener("touchmove", this.$handleHeaderTouchMove$.bind(this), !1), $rowHeader$$.addEventListener("touchend", this.$handleHeaderTouchEnd$.bind(this), !1), $rowHeader$$.addEventListener("touchcancel", 
    this.$handleHeaderTouchCancel$.bind(this), !1), $empty$$1_root$$4$$.addEventListener("focus", this.$m_handleRootFocus$, !0), $empty$$1_root$$4$$.addEventListener("blur", this.$m_handleRootBlur$, !0), $empty$$1_root$$4$$.addEventListener("keydown", this.$m_handleDatabodyKeyDown$, !1)) : (document.addEventListener("mousemove", this.$m_docMouseMoveListener$, !1), document.addEventListener("mouseup", this.$m_docMouseUpListener$, !1), $empty$$1_root$$4$$.addEventListener("keydown", this.$m_handleDatabodyKeyDown$, 
    !1), $empty$$1_root$$4$$.addEventListener("focus", this.$m_handleRootFocus$, !0), $empty$$1_root$$4$$.addEventListener("blur", this.$m_handleRootBlur$, !0), $databody$$.addEventListener(this.$m_utils$.$getMousewheelEvent$(), this.$handleDatabodyMouseWheel$.bind(this), !1), $databody$$.addEventListener("mousedown", this.$handleDatabodyMouseDown$.bind(this), !1), $databody$$.addEventListener("mousemove", this.$handleDatabodyMouseMove$.bind(this), !1), $databody$$.addEventListener("mouseup", this.$handleDatabodyMouseUp$.bind(this), 
    !1), $databody$$.addEventListener("mouseout", this.$handleDatabodyMouseOut$.bind(this), !1), $databody$$.addEventListener("mouseover", this.$handleDatabodyMouseOver$.bind(this), !1), $databody$$.addEventListener("dblclick", this.$handleDatabodyDoubleClick$.bind(this), !1), $rowHeader$$.addEventListener("mousedown", this.$handleHeaderMouseDown$.bind(this), !1), $colHeader$$.addEventListener("mousedown", this.$handleHeaderMouseDown$.bind(this), !1), $rowHeader$$.addEventListener("mouseover", this.$handleHeaderMouseOver$.bind(this), 
    !1), $colHeader$$.addEventListener("mouseover", this.$handleHeaderMouseOver$.bind(this), !1), $rowHeader$$.addEventListener("mousemove", this.$handleRowHeaderMouseMove$.bind(this), !1), $rowHeader$$.addEventListener("mouseup", this.$handleHeaderMouseUp$.bind(this), !1), $rowHeader$$.addEventListener("mouseout", this.$handleHeaderMouseOut$.bind(this), !1), $colHeader$$.addEventListener("mouseout", this.$handleHeaderMouseOut$.bind(this), !1), $rowHeader$$.addEventListener("click", this.$handleHeaderClick$.bind(this), 
    !1), $colHeader$$.addEventListener("click", this.$handleHeaderClick$.bind(this), !1), $scroller$$.addEventListener("mousedown", this.$handleScrollerMouseDown$.bind(this), !1), $scroller$$.addEventListener("mouseup", this.$handleScrollerMouseUp$.bind(this), !1)), $empty$$1_root$$4$$.insertBefore($colHeader$$, $status$$16$$), $empty$$1_root$$4$$.insertBefore($rowHeader$$, $status$$16$$), $empty$$1_root$$4$$.insertBefore($scroller$$, $status$$16$$), $empty$$1_root$$4$$.insertBefore($databody$$, 
    $status$$16$$), this.$_shouldInitialize$() && this.$_handleInitialization$(!0)) : ($empty$$1_root$$4$$ = this.$_buildEmptyText$(), this.$m_root$.appendChild($empty$$1_root$$4$$), this.$_handleInitialization$(!1));
  };
  $DvtDataGrid$$.prototype.$HandleResize$ = function $$DvtDataGrid$$$$$HandleResize$$($width$$16$$, $height$$16$$) {
    $width$$16$$ = this.$getRootElement$().clientWidth;
    $height$$16$$ = this.$getRootElement$().clientHeight;
    if ($width$$16$$ != this.$m_width$ || $height$$16$$ != this.$m_height$) {
      this.$m_width$ = $width$$16$$, this.$m_height$ = $height$$16$$, this.$m_columnFetchSize$ = this.$m_rowFetchSize$ = null, this.$m_initialized$ && (this.$resizeGrid$(), this.$isFetchComplete$() && this.$fillViewport$(this.$m_currentScrollLeft$, this.$m_currentScrollTop$));
    }
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.HandleResize", $DvtDataGrid$$.prototype.$HandleResize$, void 0);
  $DvtDataGrid$$.prototype.$resizeGrid$ = function $$DvtDataGrid$$$$$resizeGrid$$() {
    var $databodyWidth_width$$17$$, $height$$17_scrollerHeight$$, $colHeader$$2_empty$$2$$, $rowHeader$$2$$, $scroller$$1$$, $databody$$1$$, $colHeaderHeight$$1$$, $rowHeaderWidth$$1$$, $databodyContentWidth$$, $databodyContentHeight$$, $databodyHeight$$, $dir$$3_isDatabodyHorizontalScrollbarRequired$$, $isDatabodyVerticalScrollbarRequired$$, $scrollbarSize$$, $scrollerWidth$$;
    this.$_databodyEmpty$() ? null == this.$m_empty$ && ($colHeader$$2_empty$$2$$ = this.$_buildEmptyText$(), this.$m_root$.appendChild($colHeader$$2_empty$$2$$)) : ($databodyWidth_width$$17$$ = this.getWidth(), $height$$17_scrollerHeight$$ = this.getHeight(), $colHeader$$2_empty$$2$$ = this.$m_colHeader$, $rowHeader$$2$$ = this.$m_rowHeader$, $scroller$$1$$ = this.$m_scroller$, $databody$$1$$ = this.$m_databody$, $colHeaderHeight$$1$$ = this.$getColumnHeaderHeight$(), $rowHeaderWidth$$1$$ = this.$getRowHeaderWidth$(), 
    $databodyContentWidth$$ = this.$getElementWidth$($databody$$1$$.firstChild), $databodyContentHeight$$ = this.$getElementHeight$($databody$$1$$.firstChild), $height$$17_scrollerHeight$$ -= $colHeaderHeight$$1$$, $scrollerWidth$$ = $databodyWidth_width$$17$$ - $rowHeaderWidth$$1$$, $databodyWidth_width$$17$$ = Math.min($databodyContentWidth$$, $scrollerWidth$$), $databodyHeight$$ = Math.min($databodyContentHeight$$, $height$$17_scrollerHeight$$), this.$m_utils$.$isTouchDevice$(), $scrollbarSize$$ = 
    this.$m_utils$.$getScrollbarSize$(), ($dir$$3_isDatabodyHorizontalScrollbarRequired$$ = this.$isDatabodyHorizontalScrollbarRequired$($scrollerWidth$$)) ? $isDatabodyVerticalScrollbarRequired$$ = this.$isDatabodyVerticalScrollbarRequired$($height$$17_scrollerHeight$$ - $scrollbarSize$$) : ($isDatabodyVerticalScrollbarRequired$$ = this.$isDatabodyVerticalScrollbarRequired$($height$$17_scrollerHeight$$)) && ($dir$$3_isDatabodyHorizontalScrollbarRequired$$ = this.$isDatabodyHorizontalScrollbarRequired$($scrollerWidth$$ - 
    $scrollbarSize$$)), this.$m_hasHorizontalScroller$ = $dir$$3_isDatabodyHorizontalScrollbarRequired$$, this.$m_hasVerticalScroller$ = $isDatabodyVerticalScrollbarRequired$$, $dir$$3_isDatabodyHorizontalScrollbarRequired$$ && $height$$17_scrollerHeight$$ - $scrollbarSize$$ < $databodyHeight$$ && ($databodyHeight$$ = $height$$17_scrollerHeight$$ - $scrollbarSize$$), $isDatabodyVerticalScrollbarRequired$$ && $scrollerWidth$$ - $scrollbarSize$$ < $databodyWidth_width$$17$$ && ($databodyWidth_width$$17$$ = 
    $scrollerWidth$$ - $scrollbarSize$$), $dir$$3_isDatabodyHorizontalScrollbarRequired$$ = this.$m_resources$.$isRTLMode$() ? "right" : "left", this.$setElementDir$($rowHeader$$2$$, 0, $dir$$3_isDatabodyHorizontalScrollbarRequired$$), this.$setElementDir$($rowHeader$$2$$, $colHeaderHeight$$1$$, "top"), this.$setElementHeight$($rowHeader$$2$$, $databodyHeight$$), this.$setElementDir$($colHeader$$2_empty$$2$$, $rowHeaderWidth$$1$$, $dir$$3_isDatabodyHorizontalScrollbarRequired$$), this.$setElementWidth$($colHeader$$2_empty$$2$$, 
    $databodyWidth_width$$17$$), this.$setElementDir$($databody$$1$$, $colHeaderHeight$$1$$, "top"), this.$setElementDir$($databody$$1$$, $rowHeaderWidth$$1$$, $dir$$3_isDatabodyHorizontalScrollbarRequired$$), this.$setElementWidth$($databody$$1$$, $databodyWidth_width$$17$$), this.$setElementHeight$($databody$$1$$, $databodyHeight$$), this.$setElementDir$($scroller$$1$$, $colHeaderHeight$$1$$, "top"), this.$setElementDir$($scroller$$1$$, $rowHeaderWidth$$1$$, $dir$$3_isDatabodyHorizontalScrollbarRequired$$), 
    this.$setElementWidth$($scroller$$1$$, $scrollerWidth$$), this.$setElementHeight$($scroller$$1$$, $height$$17_scrollerHeight$$), this.$m_scrollWidth$ = $databodyContentWidth$$ - $databodyWidth_width$$17$$, this.$m_scrollHeight$ = $databodyContentHeight$$ - $databodyHeight$$, this.$_adjustColumnHeader$(), this.$buildCorners$(), this.$m_resizeRequired$ = !1);
  };
  $DvtDataGrid$$.prototype.$_adjustColumnHeader$ = function $$DvtDataGrid$$$$$_adjustColumnHeader$$() {
    var $borderStyle$$, $lastHeader$$;
    null != this.$m_colHeader$ && 0 <= this.$m_endColHeader$ && this.$getRowHeaderWidth$() + this.$m_endColHeaderPixel$ >= this.getWidth() && ($borderStyle$$ = this.$m_resources$.$isRTLMode$() ? "borderLeftStyle" : "borderRightStyle", $lastHeader$$ = this.$_getColumnHeaderByIndex$(this.$m_endColHeader$, this.$m_columnHeaderLevelCount$ - 1), $lastHeader$$.style[$borderStyle$$] = "none");
  };
  $DvtDataGrid$$.prototype.$buildCorners$ = function $$DvtDataGrid$$$$$buildCorners$$() {
    var $colHeaderHeight$$2$$, $rowHeaderWidth$$2$$, $bottomCorner$$, $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $dir$$4$$, $colHeaderWidth$$, $rowHeaderHeight$$, $scrollerWidth$$1$$, $scrollerHeight$$1$$;
    this.$m_utils$.$getScrollbarSize$();
    $scrollerWidth$$1$$ = this.$getElementWidth$(this.$m_scroller$);
    $scrollerHeight$$1$$ = this.$getElementHeight$(this.$m_scroller$);
    $colHeaderHeight$$2$$ = this.$getColumnHeaderHeight$();
    $colHeaderWidth$$ = this.$getElementWidth$(this.$m_colHeader$);
    $rowHeaderWidth$$2$$ = this.$getRowHeaderWidth$();
    $rowHeaderHeight$$ = this.$getElementHeight$(this.$m_rowHeader$);
    $dir$$4$$ = this.$m_resources$.$isRTLMode$() ? "right" : "left";
    -1 != this.$m_endRowHeader$ && -1 != this.$m_endColHeader$ && (null != this.$m_corner$ ? $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = this.$m_corner$ : ($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = document.createElement("div"), $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.id = this.$createSubId$("corner"), $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.className = this.$getMappedStyle$("topcorner")), this.$setElementWidth$($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, 
    $rowHeaderWidth$$2$$), this.$setElementHeight$($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $colHeaderHeight$$2$$), null == this.$m_corner$ && (this.$m_root$.appendChild($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$), this.$m_corner$ = $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$));
    null != this.$m_corner$ && null == $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ && (this.$m_root$.removeChild(this.$m_corner$), this.$m_corner$ = null);
    -1 != this.$m_endRowHeader$ && (this.$m_hasHorizontalScroller$ ? (null != this.$m_rowHeaderScrollbarSpacer$ ? $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = this.$m_rowHeaderScrollbarSpacer$ : ($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = document.createElement("div"), $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.id = this.$createSubId$("rhSbSpacer"), $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.className = this.$getMappedStyle$("rowheaderspacer")), 
    this.$setElementDir$($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderHeight$$ + $colHeaderHeight$$2$$, "top"), this.$setElementDir$($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, 0, $dir$$4$$), this.$setElementWidth$($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderWidth$$2$$), this.$setElementHeight$($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $scrollerHeight$$1$$ - $rowHeaderHeight$$), null == this.$m_rowHeaderScrollbarSpacer$ && 
    (this.$m_root$.appendChild($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$), this.$m_rowHeaderScrollbarSpacer$ = $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$)) : (null != this.$m_rowHeaderScrollbarSpacer$ && this.$m_root$.removeChild(this.$m_rowHeaderScrollbarSpacer$), this.$m_rowHeaderScrollbarSpacer$ = null));
    -1 != this.$m_endColHeader$ && (this.$m_hasVerticalScroller$ ? (null != this.$m_columnHeaderScrollbarSpacer$ ? $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = this.$m_columnHeaderScrollbarSpacer$ : ($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = document.createElement("div"), $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.id = this.$createSubId$("chSbSpacer"), $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.className = this.$getMappedStyle$("colheaderspacer")), 
    this.$setElementDir$($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderWidth$$2$$ + $colHeaderWidth$$, $dir$$4$$), this.$setElementDir$($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, 0, "top"), this.$setElementWidth$($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $scrollerWidth$$1$$ - $colHeaderWidth$$), this.$setElementHeight$($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $colHeaderHeight$$2$$), null == this.$m_columnHeaderScrollbarSpacer$ && 
    (this.$m_root$.appendChild($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$), this.$m_columnHeaderScrollbarSpacer$ = $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$)) : (null != this.$m_columnHeaderScrollbarSpacer$ && this.$m_root$.removeChild(this.$m_columnHeaderScrollbarSpacer$), this.$m_columnHeaderScrollbarSpacer$ = null));
    this.$m_hasHorizontalScroller$ && this.$m_hasVerticalScroller$ && (null != this.$m_bottomCorner$ ? $bottomCorner$$ = this.$m_bottomCorner$ : ($bottomCorner$$ = document.createElement("div"), $bottomCorner$$.id = this.$createSubId$("bcorner"), $bottomCorner$$.className = this.$getMappedStyle$("bottomcorner")), this.$setElementDir$($bottomCorner$$, $rowHeaderHeight$$ + $colHeaderHeight$$2$$, "top"), this.$setElementDir$($bottomCorner$$, $rowHeaderWidth$$2$$ + $colHeaderWidth$$, $dir$$4$$), this.$setElementWidth$($bottomCorner$$, 
    $scrollerWidth$$1$$ - $colHeaderWidth$$), this.$setElementHeight$($bottomCorner$$, $scrollerHeight$$1$$ - $rowHeaderHeight$$), null == this.$m_bottomCorner$ && (this.$m_root$.appendChild($bottomCorner$$), this.$m_bottomCorner$ = $bottomCorner$$));
    null != this.$m_bottomCorner$ && null == $bottomCorner$$ && (this.$m_root$.removeChild(this.$m_bottomCorner$), this.$m_bottomCorner$ = null);
  };
  $DvtDataGrid$$.prototype.$setInitialScrollPosition$ = function $$DvtDataGrid$$$$$setInitialScrollPosition$$() {
    var $databody$$2_firstCell_scrollMode$$, $columnScrollPosition$$, $rowScrollPosition$$, $firstRow$$;
    $databody$$2_firstCell_scrollMode$$ = this.$m_options$.$getScrollPositionMode$();
    if (void 0 != this.$m_scroller$ && null != $databody$$2_firstCell_scrollMode$$ && ($columnScrollPosition$$ = this.$m_options$.$getColumnScrollPosition$(), $rowScrollPosition$$ = this.$m_options$.$getRowScrollPosition$(), null != $columnScrollPosition$$ || null != $rowScrollPosition$$)) {
      if ("key" === $databody$$2_firstCell_scrollMode$$) {
        if (null == $rowScrollPosition$$ || null == $columnScrollPosition$$) {
          $databody$$2_firstCell_scrollMode$$ = this.$m_databody$, $firstRow$$ = null != $databody$$2_firstCell_scrollMode$$ ? $databody$$2_firstCell_scrollMode$$.firstChild.firstChild : null, $databody$$2_firstCell_scrollMode$$ = null != $firstRow$$ ? $databody$$2_firstCell_scrollMode$$.firstChild.firstChild.firstChild : null, null == $rowScrollPosition$$ && null != $databody$$2_firstCell_scrollMode$$ ? $rowScrollPosition$$ = $databody$$2_firstCell_scrollMode$$[this.$m_resources$.$getMappedAttribute$("context")].keys.row : 
          null == $columnScrollPosition$$ && null != $databody$$2_firstCell_scrollMode$$ && ($columnScrollPosition$$ = $databody$$2_firstCell_scrollMode$$[this.$m_resources$.$getMappedAttribute$("context")].keys.column);
        }
        null != $rowScrollPosition$$ && null != $columnScrollPosition$$ && this.$_indexes$({row:$rowScrollPosition$$, column:$columnScrollPosition$$}, this.$_intialScrollPositionCallback$);
      } else {
        null == $rowScrollPosition$$ ? $rowScrollPosition$$ = 0 : null == $columnScrollPosition$$ && ($columnScrollPosition$$ = 0), this.$_intialScrollPositionCallback$({row:$rowScrollPosition$$, column:$columnScrollPosition$$});
      }
    }
  };
  $DvtDataGrid$$.prototype.$_intialScrollPositionCallback$ = function $$DvtDataGrid$$$$$_intialScrollPositionCallback$$($indexes$$3_rowScrollPosition$$1$$) {
    var $columnScrollPosition$$1_initialScrollLeft$$, $initialScrollTop$$ = 0;
    $columnScrollPosition$$1_initialScrollLeft$$ = -1 === $indexes$$3_rowScrollPosition$$1$$.column ? 0 : $indexes$$3_rowScrollPosition$$1$$.column;
    $indexes$$3_rowScrollPosition$$1$$ = -1 === $indexes$$3_rowScrollPosition$$1$$.row ? 0 : $indexes$$3_rowScrollPosition$$1$$.row;
    $columnScrollPosition$$1_initialScrollLeft$$ *= this.$m_avgColWidth$;
    $initialScrollTop$$ = $indexes$$3_rowScrollPosition$$1$$ * this.$m_avgRowHeight$;
    this.$_initiateScroll$($columnScrollPosition$$1_initialScrollLeft$$, $initialScrollTop$$);
  };
  $DvtDataGrid$$.prototype.$isDatabodyHorizontalScrollbarRequired$ = function $$DvtDataGrid$$$$$isDatabodyHorizontalScrollbarRequired$$($expected_expectedWidth$$) {
    var $databody$$3$$;
    $databody$$3$$ = this.$m_databody$;
    $expected_expectedWidth$$ = null == $expected_expectedWidth$$ ? this.$getElementWidth$($databody$$3$$) : $expected_expectedWidth$$;
    return this.$getElementWidth$($databody$$3$$.firstChild) > $expected_expectedWidth$$ ? !0 : !1;
  };
  $DvtDataGrid$$.prototype.$isDatabodyVerticalScrollbarRequired$ = function $$DvtDataGrid$$$$$isDatabodyVerticalScrollbarRequired$$($expected$$1_expectedHeight$$) {
    var $databody$$4$$;
    $databody$$4$$ = this.$m_databody$;
    $expected$$1_expectedHeight$$ = null == $expected$$1_expectedHeight$$ ? this.$getElementHeight$($databody$$4$$) : $expected$$1_expectedHeight$$;
    return this.$getElementHeight$($databody$$4$$.firstChild) > $expected$$1_expectedHeight$$ ? !0 : !1;
  };
  $DvtDataGrid$$.prototype.$buildStatus$ = function $$DvtDataGrid$$$$$buildStatus$$() {
    var $root$$5$$ = document.createElement("div");
    $root$$5$$.id = this.$createSubId$("status");
    $root$$5$$.className = this.$getMappedStyle$("status");
    $root$$5$$.setAttribute("role", "status");
    return $root$$5$$;
  };
  $DvtDataGrid$$.prototype.$buildAccInfo$ = function $$DvtDataGrid$$$$$buildAccInfo$$() {
    var $root$$6$$ = document.createElement("div");
    $root$$6$$.id = this.$createSubId$("info");
    $root$$6$$.className = this.$getMappedStyle$("info");
    $root$$6$$.setAttribute("role", "status");
    return $root$$6$$;
  };
  $DvtDataGrid$$.prototype.$buildAccSummary$ = function $$DvtDataGrid$$$$$buildAccSummary$$() {
    var $root$$7$$ = document.createElement("div");
    $root$$7$$.id = this.$createSubId$("summary");
    $root$$7$$.className = this.$getMappedStyle$("info");
    return $root$$7$$;
  };
  $DvtDataGrid$$.prototype.$buildStateInfo$ = function $$DvtDataGrid$$$$$buildStateInfo$$() {
    var $root$$8$$ = document.createElement("div");
    $root$$8$$.id = this.$createSubId$("state");
    $root$$8$$.className = this.$getMappedStyle$("info");
    return $root$$8$$;
  };
  $DvtDataGrid$$.prototype.$buildContextInfo$ = function $$DvtDataGrid$$$$$buildContextInfo$$() {
    var $root$$9$$ = document.createElement("div");
    $root$$9$$.id = this.$createSubId$("context");
    $root$$9$$.className = this.$getMappedStyle$("info");
    return $root$$9$$;
  };
  $DvtDataGrid$$.prototype.$buildPlaceHolder$ = function $$DvtDataGrid$$$$$buildPlaceHolder$$() {
    var $root$$10$$ = document.createElement("div");
    $root$$10$$.id = this.$createSubId$("placeHolder");
    $root$$10$$.className = this.$getMappedStyle$("info");
    return $root$$10$$;
  };
  $DvtDataGrid$$.prototype.$populateAccInfo$ = function $$DvtDataGrid$$$$$populateAccInfo$$() {
    var $summary$$21$$, $summaryExpanded$$;
    $summary$$21$$ = this.$m_resources$.$getTranslatedText$("accessibleSummaryExact", {rownum:this.$m_endRow$ + 1, colnum:this.$m_endCol$ + 1});
    this.$m_dataSource$.$getExpandedKeys$ && ($summaryExpanded$$ = this.$m_resources$.$getTranslatedText$("accessibleSummaryExpanded", {num:this.$m_dataSource$.$getExpandedKeys$().length}), $summary$$21$$ = $summary$$21$$ + ". " + $summaryExpanded$$);
    this.$m_accSummary$.textContent = $summary$$21$$ + ". ";
  };
  $DvtDataGrid$$.prototype.$SetAccessibleContext$ = function $$DvtDataGrid$$$$$SetAccessibleContext$$($ancestors_context$$55$$) {
    var $label$$4$$, $col$$, $i$$148$$, $parent$$8$$, $cell_row$$3_text$$10$$;
    if (null != $ancestors_context$$55$$ && (null != $ancestors_context$$55$$.context && (this.$m_accessibleContext$ = $ancestors_context$$55$$.context), null != $ancestors_context$$55$$.state && (this.$m_stateInfo$.textContent = $ancestors_context$$55$$.state), null != $ancestors_context$$55$$.ancestors && this.$_isDatabodyCellActive$())) {
      $label$$4$$ = "";
      $ancestors_context$$55$$ = $ancestors_context$$55$$.ancestors;
      $col$$ = this.$m_active$.indexes.column;
      if (null != $col$$ && 0 <= $col$$) {
        for ($i$$148$$ = 0;$i$$148$$ < $ancestors_context$$55$$.length;$i$$148$$++) {
          0 < $i$$148$$ && ($label$$4$$ = $label$$4$$.concat(", ")), $parent$$8$$ = $ancestors_context$$55$$[$i$$148$$], $cell_row$$3_text$$10$$ = this.$_findRowByKey$($parent$$8$$.key), null != $cell_row$$3_text$$10$$ && ($cell_row$$3_text$$10$$ = $cell_row$$3_text$$10$$.childNodes[$col$$ - this.$m_startCol$], $cell_row$$3_text$$10$$ = $cell_row$$3_text$$10$$.textContent, $cell_row$$3_text$$10$$ = null != $cell_row$$3_text$$10$$ ? $cell_row$$3_text$$10$$.replace(/\n|<br\s*\/?>/gi, "").trim() : "", 
          $label$$4$$ = $label$$4$$.concat($parent$$8$$.label).concat(" ").concat($cell_row$$3_text$$10$$));
        }
      }
      this.$m_accessibleContext$ = $label$$4$$.concat(", ").concat(this.$m_accessibleContext$);
    }
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.SetAccessibleContext", $DvtDataGrid$$.prototype.$SetAccessibleContext$, void 0);
  $DvtDataGrid$$.prototype.$_updateStateInfo$ = function $$DvtDataGrid$$$$$_updateStateInfo$$($key$$58_text$$11$$) {
    $key$$58_text$$11$$ = this.$m_resources$.$getTranslatedText$($key$$58_text$$11$$, {id:""});
    null != $key$$58_text$$11$$ && (this.$m_stateInfo$.textContent = $key$$58_text$$11$$);
  };
  $DvtDataGrid$$.prototype.$_updateContextInfo$ = function $$DvtDataGrid$$$$$_updateContextInfo$$($context$$56$$, $skip$$1$$) {
    var $row$$4_text$$12$$, $column$$4$$, $info$$4$$, $level$$9$$, $rowHeader$$3$$, $columnHeader$$;
    $row$$4_text$$12$$ = $context$$56$$.row;
    $column$$4$$ = $context$$56$$.column;
    $level$$9$$ = $context$$56$$.level;
    $rowHeader$$3$$ = $context$$56$$.rowHeader;
    $columnHeader$$ = $context$$56$$.columnHeader;
    $info$$4$$ = "";
    null != this.$m_accessibleContext$ || isNaN($row$$4_text$$12$$) || "row" == $skip$$1$$ || ($row$$4_text$$12$$ = this.$m_resources$.$getTranslatedText$("accessibleRowContext", {index:$row$$4_text$$12$$ + 1}), null != $row$$4_text$$12$$ && ($info$$4$$ = $row$$4_text$$12$$));
    isNaN($column$$4$$) || "column" == $skip$$1$$ || ($row$$4_text$$12$$ = this.$m_resources$.$getTranslatedText$("accessibleColumnContext", {index:$column$$4$$ + 1}), null != $row$$4_text$$12$$ && ($info$$4$$ = 0 === $info$$4$$.length ? $row$$4_text$$12$$ : $info$$4$$ + " " + $row$$4_text$$12$$));
    isNaN($rowHeader$$3$$) || "rowHeader" == $skip$$1$$ || ($row$$4_text$$12$$ = this.$m_resources$.$getTranslatedText$("accessibleRowHeaderContext", {index:$rowHeader$$3$$ + 1}), null != $row$$4_text$$12$$ && ($info$$4$$ = 0 === $info$$4$$.length ? $row$$4_text$$12$$ : $info$$4$$ + " " + $row$$4_text$$12$$));
    isNaN($columnHeader$$) || "columnHeader" == $skip$$1$$ || ($row$$4_text$$12$$ = this.$m_resources$.$getTranslatedText$("accessibleColumnHeaderContext", {index:$columnHeader$$ + 1}), null != $row$$4_text$$12$$ && ($info$$4$$ = 0 === $info$$4$$.length ? $row$$4_text$$12$$ : $info$$4$$ + " " + $row$$4_text$$12$$));
    isNaN($level$$9$$) || "level" == $skip$$1$$ || ($row$$4_text$$12$$ = this.$m_resources$.$getTranslatedText$("accessibleLevelContext", {level:$level$$9$$ + 1}), null != $row$$4_text$$12$$ && ($info$$4$$ = 0 === $info$$4$$.length ? $row$$4_text$$12$$ : $info$$4$$ + " " + $row$$4_text$$12$$));
    null != this.$m_accessibleContext$ && ($info$$4$$ = $info$$4$$ + ", " + this.$m_accessibleContext$, this.$m_accessibleContext$ = null);
    this.$m_contextInfo$.textContent = $info$$4$$;
  };
  $DvtDataGrid$$.prototype.$_isCountUnknown$ = function $$DvtDataGrid$$$$$_isCountUnknown$$($axis$$1_colPrecision_rowPrecision$$) {
    var $colCount_datasource_rowCount$$3$$;
    $colCount_datasource_rowCount$$3$$ = this.$m_dataSource$;
    return "row" === $axis$$1_colPrecision_rowPrecision$$ ? (void 0 === this.$m_isEstimateRowCount$ && ($axis$$1_colPrecision_rowPrecision$$ = $colCount_datasource_rowCount$$3$$.getCountPrecision("row"), $colCount_datasource_rowCount$$3$$ = $colCount_datasource_rowCount$$3$$.getCount("row"), this.$m_isEstimateRowCount$ = "estimate" === $axis$$1_colPrecision_rowPrecision$$ || 0 > $colCount_datasource_rowCount$$3$$ ? !0 : !1), this.$m_isEstimateRowCount$) : "column" === $axis$$1_colPrecision_rowPrecision$$ ? 
    (void 0 === this.$m_isEstimateColumnCount$ && ($axis$$1_colPrecision_rowPrecision$$ = $colCount_datasource_rowCount$$3$$.getCountPrecision("column"), $colCount_datasource_rowCount$$3$$ = $colCount_datasource_rowCount$$3$$.getCount("column"), this.$m_isEstimateColumnCount$ = "estimate" === $axis$$1_colPrecision_rowPrecision$$ || 0 > $colCount_datasource_rowCount$$3$$ ? !0 : !1), this.$m_isEstimateColumnCount$) : !1;
  };
  $DvtDataGrid$$.prototype.$_isCountUnknownOrHighwatermark$ = function $$DvtDataGrid$$$$$_isCountUnknownOrHighwatermark$$($axis$$2$$) {
    return this.$_isCountUnknown$($axis$$2$$) || this.$_isHighWatermarkScrolling$();
  };
  $DvtDataGrid$$.prototype.$buildHeaders$ = function $$DvtDataGrid$$$$$buildHeaders$$($axis$$3$$, $styleClass$$) {
    var $root$$11$$ = document.createElement("div");
    $root$$11$$.id = this.$createSubId$($axis$$3$$ + "Header");
    $root$$11$$.className = $styleClass$$ + " " + this.$getMappedStyle$("header");
    "column" === $axis$$3$$ ? this.$m_colHeader$ = $root$$11$$ : "row" === $axis$$3$$ && (this.$m_rowHeader$ = $root$$11$$);
    this.fetchHeaders($axis$$3$$, 0, $root$$11$$);
    return $root$$11$$;
  };
  $DvtDataGrid$$.prototype.fetchHeaders = function $$DvtDataGrid$$$$fetchHeaders$($axis$$4_headerRange$$, $start$$27$$, $header$$4$$, $fetchSize$$, $callbacks$$4_successCallback$$25$$) {
    this.$m_fetching$[$axis$$4_headerRange$$] || (this.$m_fetching$[$axis$$4_headerRange$$] = {start:$start$$27$$}, void 0 == $fetchSize$$ && ($fetchSize$$ = this.$getFetchSize$($axis$$4_headerRange$$)), $axis$$4_headerRange$$ = {axis:$axis$$4_headerRange$$, start:$start$$27$$, count:$fetchSize$$, header:$header$$4$$}, $callbacks$$4_successCallback$$25$$ = null != $callbacks$$4_successCallback$$25$$ && null != $callbacks$$4_successCallback$$25$$.success ? $callbacks$$4_successCallback$$25$$.success : 
    this.$handleHeadersFetchSuccess$, this.$showStatusText$(), this.$_signalTaskStart$(), this.$m_dataSource$.fetchHeaders($axis$$4_headerRange$$, {success:$callbacks$$4_successCallback$$25$$, error:this.$handleHeadersFetchError$}, {success:this, error:this}));
  };
  $DvtDataGrid$$.prototype.$isHeaderFetchResponseValid$ = function $$DvtDataGrid$$$$$isHeaderFetchResponseValid$$($headerRange$$1$$) {
    return $headerRange$$1$$.start == this.$m_fetching$[$headerRange$$1$$.axis].start;
  };
  $DvtDataGrid$$.prototype.$handleHeadersFetchSuccess$ = function $$DvtDataGrid$$$$$handleHeadersFetchSuccess$$($results$$, $headerRange$$2$$, $rowInsert$$) {
    var $axis$$6$$, $root$$12$$, $start$$28$$, $count$$31$$;
    this.$isHeaderFetchResponseValid$($headerRange$$2$$) && ($axis$$6$$ = $headerRange$$2$$.axis, this.$m_fetching$[$axis$$6$$] = !1, $root$$12$$ = $headerRange$$2$$.header, $start$$28$$ = $headerRange$$2$$.start, $count$$31$$ = this.$m_dataSource$.getCount($axis$$6$$), "column" === $axis$$6$$ ? (this.$buildColumnHeaders$($root$$12$$, $results$$, $start$$28$$, $count$$31$$), $results$$.getCount() < $headerRange$$2$$.count && (this.$m_stopColumnHeaderFetch$ = !0)) : "row" === $axis$$6$$ && (this.$buildRowHeaders$($root$$12$$, 
    $results$$, $start$$28$$, $count$$31$$, $rowInsert$$), $results$$.getCount() < $headerRange$$2$$.count && (this.$m_stopRowHeaderFetch$ = !0)), this.$isFetchComplete$() && (this.$hideStatusText$(), this.$_shouldInitialize$() && !$rowInsert$$ && this.$_handleInitialization$(!0)), this.$m_initialized$ && this.$_syncScroller$());
    this.$_signalTaskEnd$();
  };
  $DvtDataGrid$$.prototype.$handleHeadersFetchError$ = function $$DvtDataGrid$$$$$handleHeadersFetchError$$($error$$29$$, $headerRange$$3$$) {
    this.$m_fetching$[$headerRange$$3$$.axis] = !1;
    this.$_signalTaskEnd$();
  };
  $DvtDataGrid$$.prototype.$createHeaderContext$ = function $$DvtDataGrid$$$$$createHeaderContext$$($axis$$8_key$$59$$, $index$$101$$, $data$$77$$, $metadata$$1$$, $elem$$27$$, $level$$10$$, $extent$$, $depth$$4$$) {
    var $headerContext$$, $prop$$63$$;
    $headerContext$$ = {};
    $headerContext$$.axis = $axis$$8_key$$59$$;
    $headerContext$$.index = $index$$101$$;
    $headerContext$$.data = $data$$77$$;
    $headerContext$$.component = this;
    $headerContext$$.datasource = this.$m_dataSource$;
    $headerContext$$.level = $level$$10$$;
    $headerContext$$.depth = $depth$$4$$;
    $headerContext$$.extent = $extent$$;
    null != $elem$$27$$ && ($headerContext$$.parentElement = $elem$$27$$.firstChild);
    $axis$$8_key$$59$$ = $metadata$$1$$.key;
    null != $axis$$8_key$$59$$ && null != $elem$$27$$ && this.$_setKey$($elem$$27$$, $axis$$8_key$$59$$);
    for ($prop$$63$$ in $metadata$$1$$) {
      $metadata$$1$$.hasOwnProperty($prop$$63$$) && ($headerContext$$[$prop$$63$$] = $metadata$$1$$[$prop$$63$$]);
    }
    null != this.$m_createContextCallback$ && this.$m_createContextCallback$.call(this, $headerContext$$);
    return $headerContext$$;
  };
  $DvtDataGrid$$.prototype.$buildColumnHeaders$ = function $$DvtDataGrid$$$$$buildColumnHeaders$$($headerRoot$$, $headerSet$$, $start$$29$$, $totalCount$$) {
    var $scroller$$4$$, $renderer$$, $totalColumnWidth$$, $left$$5$$, $headerCount$$, $c$$37$$, $index$$102_returnVal$$1$$, $isAppend$$, $fragment$$, $className$$8$$;
    null == this.$m_columnHeaderLevelCount$ && (this.$m_columnHeaderLevelCount$ = $headerSet$$.getLevelCount());
    $headerCount$$ = $headerSet$$.getCount();
    if ($headerRoot$$.hasChildNodes()) {
      if (0 == $headerCount$$ && this.$_isCountUnknown$("column")) {
        this.$m_stopColumnHeaderFetch$ = !0;
        return;
      }
      $scroller$$4$$ = $headerRoot$$.firstChild;
      -1 == this.$m_endColHeader$ && "" == $headerRoot$$.className && ($headerRoot$$.className = this.$getMappedStyle$("colheader") + " " + this.$getMappedStyle$("header"), $headerRoot$$.style.height = "", $scroller$$4$$.style.height = "");
    } else {
      $scroller$$4$$ = document.createElement("div"), $scroller$$4$$.className = this.$getMappedStyle$("scroller") + (this.$m_utils$.$isTouchDevice$() ? " " + this.$getMappedStyle$("scroller-mobile") : ""), 0 == $headerCount$$ && ($headerRoot$$.className = "", this.$setElementHeight$($headerRoot$$, 0), this.$setElementHeight$($scroller$$4$$, 0), this.$m_stopColumnHeaderFetch$ = !0);
    }
    $renderer$$ = this.$m_options$.$getRenderer$("column");
    $totalColumnWidth$$ = 0;
    $left$$5$$ = ($isAppend$$ = $start$$29$$ > this.$m_endColHeader$) ? this.$m_endColHeaderPixel$ : this.$m_startColHeaderPixel$;
    $fragment$$ = document.createDocumentFragment();
    $c$$37$$ = 0;
    for ($className$$8$$ = this.$getMappedStyle$("headercell") + " " + this.$getMappedStyle$("colheadercell");0 < $headerCount$$ - $c$$37$$;) {
      $index$$102_returnVal$$1$$ = $isAppend$$ ? $start$$29$$ + $c$$37$$ : $start$$29$$ + ($headerCount$$ - 1 - $c$$37$$), $index$$102_returnVal$$1$$ = this.$buildLevelHeaders$($fragment$$, $index$$102_returnVal$$1$$, 0, $isAppend$$ ? $left$$5$$ + $totalColumnWidth$$ : $left$$5$$ - $totalColumnWidth$$, 0, $isAppend$$, !1, $renderer$$, $headerSet$$, "column", $className$$8$$, this.$m_columnHeaderLevelCount$), $c$$37$$ += $index$$102_returnVal$$1$$.count, $totalColumnWidth$$ += $index$$102_returnVal$$1$$.totalWidth, 
      null == this.$m_colHeaderHeight$ && (this.$m_colHeaderHeight$ = $index$$102_returnVal$$1$$.totalHeight, this.$setElementHeight$($headerRoot$$, this.$m_colHeaderHeight$));
    }
    $isAppend$$ ? $scroller$$4$$.appendChild($fragment$$) : $scroller$$4$$.insertBefore($fragment$$, $scroller$$4$$.firstChild);
    $isAppend$$ ? (this.$m_endColHeader$ = $start$$29$$ + $headerCount$$ - 1, this.$m_endColHeaderPixel$ += $totalColumnWidth$$) : (this.$m_startColHeader$ -= $headerCount$$, this.$m_startColHeaderPixel$ -= $totalColumnWidth$$);
    $headerRoot$$.hasChildNodes() || $headerRoot$$.appendChild($scroller$$4$$);
    !this.$_isCountUnknown$("column") && this.$_isHighWatermarkScrolling$() && this.$m_endColHeader$ + 1 >= $totalCount$$ && (this.$m_stopColumnHeaderFetch$ = !0);
  };
  $DvtDataGrid$$.prototype.$_renderContent$ = function $$DvtDataGrid$$$$$_renderContent$$($renderer$$1_textWrapper$$, $context$$57$$, $cellContent$$, $content$$15_data$$78$$, $className$$9$$) {
    null != $renderer$$1_textWrapper$$ ? ($content$$15_data$$78$$ = $renderer$$1_textWrapper$$.call(this, $context$$57$$), null != $content$$15_data$$78$$ && (null === $content$$15_data$$78$$.parentNode || $content$$15_data$$78$$.parentNode instanceof DocumentFragment ? $cellContent$$.appendChild($content$$15_data$$78$$) : null == $content$$15_data$$78$$.parentNode && $content$$15_data$$78$$.toString && ($renderer$$1_textWrapper$$ = document.createElement("span"), $renderer$$1_textWrapper$$.className = 
    $className$$9$$, $renderer$$1_textWrapper$$.appendChild(document.createTextNode($content$$15_data$$78$$.toString())), $cellContent$$.appendChild($renderer$$1_textWrapper$$)), this.$_disableAllFocusableElements$($cellContent$$))) : (null == $content$$15_data$$78$$ ? $content$$15_data$$78$$ = "" : null != $content$$15_data$$78$$.data && ($content$$15_data$$78$$ = $content$$15_data$$78$$.data), $renderer$$1_textWrapper$$ = document.createElement("span"), $renderer$$1_textWrapper$$.className = $className$$9$$, 
    $renderer$$1_textWrapper$$.appendChild(document.createTextNode($content$$15_data$$78$$.toString())), $cellContent$$.appendChild($renderer$$1_textWrapper$$));
  };
  $DvtDataGrid$$.prototype.$buildLevelHeaders$ = function $$DvtDataGrid$$$$$buildLevelHeaders$$($fragment$$1_returnObj$$, $index$$103_sortIcon$$, $level$$11$$, $left$$6_totalLevelDimension$$, $top$$2_totalHeaderDimension$$, $isAppend$$1$$, $insert$$, $renderer$$2$$, $headerSet$$1$$, $axis$$9$$, $className$$10$$, $totalLevels$$) {
    var $getLevelDimension_i$$149$$, $getHeaderDimension_headerDimensionValue$$, $levelDimension$$, $headerDimension$$, $dimensionToAdjust$$, $dimensionToAdjustValue$$, $dimensionSecond$$, $dimensionSecondValue$$, $headerData_start$$30$$, $end$$8_headerMetadata$$, $getGrouping_header$$5$$, $extentInfo_headerDepth$$, $headerExtent$$, $headerContext$$1_patchBefore$$, $headerContent_patchAfter$$, $groupingContainer$$, $nextIndex_returnVal$$2$$, $levelDimensionValue$$, $totalHeaderDimensionValue$$, $headerCount$$1$$, 
    $d$$6_inlineStyle_totalLevelDimensionValue$$, $styleClass$$1$$;
    $headerCount$$1$$ = $totalHeaderDimensionValue$$ = $d$$6_inlineStyle_totalLevelDimensionValue$$ = $levelDimensionValue$$ = 0;
    "row" === $axis$$9$$ ? ($getLevelDimension_i$$149$$ = this.$_getRowHeaderLevelWidth$.bind(this), $getHeaderDimension_headerDimensionValue$$ = this.$getRowHeight$.bind(this), $getGrouping_header$$5$$ = this.$_getRowHeaderContainer$.bind(this), $levelDimension$$ = "width", $headerDimension$$ = "height", $dimensionToAdjust$$ = "top", $dimensionToAdjustValue$$ = $top$$2_totalHeaderDimension$$, $dimensionSecond$$ = this.$m_resources$.$isRTLMode$() ? "right" : "left", $dimensionSecondValue$$ = $left$$6_totalLevelDimension$$, 
    $left$$6_totalLevelDimension$$ = "totalWidth", $top$$2_totalHeaderDimension$$ = "totalHeight", $headerData_start$$30$$ = this.$m_startRowHeader$, $end$$8_headerMetadata$$ = this.$m_endRowHeader$) : ($getLevelDimension_i$$149$$ = this.$_getColumnHeaderLevelHeight$.bind(this), $getHeaderDimension_headerDimensionValue$$ = this.$getColumnWidth$.bind(this), $getGrouping_header$$5$$ = this.$_getColumnHeaderContainer$.bind(this), $levelDimension$$ = "height", $headerDimension$$ = "width", $dimensionToAdjust$$ = 
    this.$m_resources$.$isRTLMode$() ? "right" : "left", $dimensionToAdjustValue$$ = $left$$6_totalLevelDimension$$, $dimensionSecond$$ = "top", $dimensionSecondValue$$ = $top$$2_totalHeaderDimension$$, $left$$6_totalLevelDimension$$ = "totalHeight", $top$$2_totalHeaderDimension$$ = "totalWidth", $headerData_start$$30$$ = this.$m_startColHeader$, $end$$8_headerMetadata$$ = this.$m_endColHeader$);
    $extentInfo_headerDepth$$ = $headerSet$$1$$.getExtent($index$$103_sortIcon$$, $level$$11$$);
    $headerExtent$$ = $extentInfo_headerDepth$$.extent;
    $headerContext$$1_patchBefore$$ = $extentInfo_headerDepth$$.more.before;
    $headerContent_patchAfter$$ = $extentInfo_headerDepth$$.more.after;
    $extentInfo_headerDepth$$ = $headerSet$$1$$.getDepth($index$$103_sortIcon$$, $level$$11$$);
    if ($headerContext$$1_patchBefore$$ && $index$$103_sortIcon$$ === $end$$8_headerMetadata$$ + 1) {
      $groupingContainer$$ = $getGrouping_header$$5$$($index$$103_sortIcon$$ - 1, $level$$11$$, 0);
      this.$_setAttribute$($groupingContainer$$, "extent", this.$_getAttribute$($groupingContainer$$, "extent") + $headerExtent$$);
      $getGrouping_header$$5$$ = $groupingContainer$$.firstChild;
      $levelDimensionValue$$ = this.$getElementDir$($getGrouping_header$$5$$, $levelDimension$$);
      for ($getLevelDimension_i$$149$$ = 0;$getLevelDimension_i$$149$$ < $headerExtent$$;) {
        $nextIndex_returnVal$$2$$ = "column" === $axis$$9$$ ? this.$buildLevelHeaders$($groupingContainer$$, $index$$103_sortIcon$$ + $getLevelDimension_i$$149$$, $level$$11$$ + $extentInfo_headerDepth$$, $dimensionToAdjustValue$$, $dimensionSecondValue$$ + $levelDimensionValue$$, $isAppend$$1$$, $insert$$, $renderer$$2$$, $headerSet$$1$$, $axis$$9$$, $className$$10$$, $totalLevels$$) : this.$buildLevelHeaders$($groupingContainer$$, $index$$103_sortIcon$$ + $getLevelDimension_i$$149$$, $level$$11$$ + 
        $extentInfo_headerDepth$$, $dimensionSecondValue$$ + $levelDimensionValue$$, $dimensionToAdjustValue$$, $isAppend$$1$$, $insert$$, $renderer$$2$$, $headerSet$$1$$, $axis$$9$$, $className$$10$$, $totalLevels$$), $dimensionToAdjustValue$$ += $nextIndex_returnVal$$2$$[$top$$2_totalHeaderDimension$$], $totalHeaderDimensionValue$$ += $nextIndex_returnVal$$2$$[$top$$2_totalHeaderDimension$$], $headerCount$$1$$ += $nextIndex_returnVal$$2$$.count, $getLevelDimension_i$$149$$ += $nextIndex_returnVal$$2$$.count
        ;
      }
      this.$setElementDir$($getGrouping_header$$5$$, this.$getElementDir$($getGrouping_header$$5$$, $headerDimension$$) + $totalHeaderDimensionValue$$, $headerDimension$$);
    } else {
      if ($headerContent_patchAfter$$ && $index$$103_sortIcon$$ === $headerData_start$$30$$ - 1) {
        $groupingContainer$$ = $getGrouping_header$$5$$($index$$103_sortIcon$$ + 1, $level$$11$$, 0);
        this.$_setAttribute$($groupingContainer$$, "extent", this.$_getAttribute$($groupingContainer$$, "extent") + $headerExtent$$);
        this.$_setAttribute$($groupingContainer$$, "start", this.$_getAttribute$($groupingContainer$$, "start") - $headerExtent$$);
        $getGrouping_header$$5$$ = $groupingContainer$$.firstChild;
        $levelDimensionValue$$ = this.$getElementDir$($getGrouping_header$$5$$, $levelDimension$$);
        for ($getLevelDimension_i$$149$$ = 0;$getLevelDimension_i$$149$$ < $headerExtent$$;) {
          $nextIndex_returnVal$$2$$ = "column" === $axis$$9$$ ? this.$buildLevelHeaders$($groupingContainer$$, $index$$103_sortIcon$$ - $getLevelDimension_i$$149$$, $level$$11$$ + $extentInfo_headerDepth$$, $dimensionToAdjustValue$$, $dimensionSecondValue$$ + $levelDimensionValue$$, $isAppend$$1$$, $insert$$, $renderer$$2$$, $headerSet$$1$$, $axis$$9$$, $className$$10$$, $totalLevels$$) : this.$buildLevelHeaders$($groupingContainer$$, $index$$103_sortIcon$$ - $getLevelDimension_i$$149$$, $level$$11$$ + 
          $extentInfo_headerDepth$$, $dimensionSecondValue$$ + $levelDimensionValue$$, $dimensionToAdjustValue$$, $isAppend$$1$$, $insert$$, $renderer$$2$$, $headerSet$$1$$, $axis$$9$$, $className$$10$$, $totalLevels$$), $dimensionToAdjustValue$$ -= $nextIndex_returnVal$$2$$[$top$$2_totalHeaderDimension$$], $totalHeaderDimensionValue$$ += $nextIndex_returnVal$$2$$[$top$$2_totalHeaderDimension$$], $headerCount$$1$$ += $nextIndex_returnVal$$2$$.count, $getLevelDimension_i$$149$$ += $nextIndex_returnVal$$2$$.count
          ;
        }
        this.$setElementDir$($getGrouping_header$$5$$, this.$getElementDir$($getGrouping_header$$5$$, $headerDimension$$) + $totalHeaderDimensionValue$$, $headerDimension$$);
        this.$setElementDir$($getGrouping_header$$5$$, $dimensionToAdjustValue$$, $dimensionToAdjust$$);
      } else {
        $headerData_start$$30$$ = $headerSet$$1$$.getData($index$$103_sortIcon$$, $level$$11$$);
        $end$$8_headerMetadata$$ = $headerSet$$1$$.getMetadata($index$$103_sortIcon$$, $level$$11$$);
        $headerContent_patchAfter$$ = document.createElement("div");
        $headerContent_patchAfter$$.className = this.$getMappedStyle$("headercellcontent");
        $getGrouping_header$$5$$ = document.createElement("div");
        $getGrouping_header$$5$$.appendChild($headerContent_patchAfter$$);
        $headerContext$$1_patchBefore$$ = this.$createHeaderContext$($axis$$9$$, $index$$103_sortIcon$$, $headerData_start$$30$$, $end$$8_headerMetadata$$, $getGrouping_header$$5$$, $level$$11$$, $headerExtent$$, $extentInfo_headerDepth$$);
        $getGrouping_header$$5$$.id = this.$_createHeaderId$($axis$$9$$, $headerContext$$1_patchBefore$$.key);
        $getGrouping_header$$5$$[this.$m_resources$.$getMappedAttribute$("context")] = $headerContext$$1_patchBefore$$;
        $d$$6_inlineStyle_totalLevelDimensionValue$$ = this.$m_options$.$getInlineStyle$($axis$$9$$, $headerContext$$1_patchBefore$$);
        $styleClass$$1$$ = this.$m_options$.$getStyleClass$($axis$$9$$, $headerContext$$1_patchBefore$$);
        null != $d$$6_inlineStyle_totalLevelDimensionValue$$ && ($getGrouping_header$$5$$.style.cssText = $d$$6_inlineStyle_totalLevelDimensionValue$$);
        $getGrouping_header$$5$$.className = $className$$10$$;
        null != $styleClass$$1$$ && ($getGrouping_header$$5$$.className += " " + $styleClass$$1$$);
        for ($d$$6_inlineStyle_totalLevelDimensionValue$$ = 0;$d$$6_inlineStyle_totalLevelDimensionValue$$ < $extentInfo_headerDepth$$;$d$$6_inlineStyle_totalLevelDimensionValue$$++) {
          $levelDimensionValue$$ += $getLevelDimension_i$$149$$($level$$11$$ + $d$$6_inlineStyle_totalLevelDimensionValue$$, $getGrouping_header$$5$$);
        }
        this.$setElementDir$($getGrouping_header$$5$$, $dimensionToAdjustValue$$, $dimensionToAdjust$$);
        this.$setElementDir$($getGrouping_header$$5$$, $dimensionSecondValue$$, $dimensionSecond$$);
        this.$setElementDir$($getGrouping_header$$5$$, $levelDimensionValue$$, $levelDimension$$);
        $getHeaderDimension_headerDimensionValue$$ = $getHeaderDimension_headerDimensionValue$$($getGrouping_header$$5$$, $headerContext$$1_patchBefore$$.key);
        this.$_setAttribute$($getGrouping_header$$5$$, "depth", $extentInfo_headerDepth$$);
        $level$$11$$ != $totalLevels$$ - 1 && ($groupingContainer$$ = document.createElement("div"), $groupingContainer$$.className = this.$getMappedStyle$("groupingcontainer"), $groupingContainer$$.appendChild($getGrouping_header$$5$$), this.$_setAttribute$($groupingContainer$$, "start", $isAppend$$1$$ ? $index$$103_sortIcon$$ : $index$$103_sortIcon$$ - $headerExtent$$ + 1), this.$_setAttribute$($groupingContainer$$, "extent", $headerExtent$$), this.$_setAttribute$($groupingContainer$$, "level", 
        $level$$11$$));
        if ($level$$11$$ + $extentInfo_headerDepth$$ == $totalLevels$$) {
          this.$setElementDir$($getGrouping_header$$5$$, $getHeaderDimension_headerDimensionValue$$, $headerDimension$$), $totalHeaderDimensionValue$$ += $getHeaderDimension_headerDimensionValue$$, $headerCount$$1$$++, $d$$6_inlineStyle_totalLevelDimensionValue$$ = $levelDimensionValue$$, $isAppend$$1$$ || $insert$$ || ($dimensionToAdjustValue$$ -= $getHeaderDimension_headerDimensionValue$$, this.$setElementDir$($getGrouping_header$$5$$, $dimensionToAdjustValue$$, $dimensionToAdjust$$));
        } else {
          for ($getLevelDimension_i$$149$$ = 0;$getLevelDimension_i$$149$$ < $headerExtent$$;$getLevelDimension_i$$149$$++) {
            $nextIndex_returnVal$$2$$ = $isAppend$$1$$ ? $index$$103_sortIcon$$ + $getLevelDimension_i$$149$$ : $index$$103_sortIcon$$ - $getLevelDimension_i$$149$$, $nextIndex_returnVal$$2$$ = "column" === $axis$$9$$ ? this.$buildLevelHeaders$($groupingContainer$$, $nextIndex_returnVal$$2$$, $level$$11$$ + $extentInfo_headerDepth$$, $dimensionToAdjustValue$$, $dimensionSecondValue$$ + $levelDimensionValue$$, $isAppend$$1$$, $insert$$, $renderer$$2$$, $headerSet$$1$$, $axis$$9$$, $className$$10$$, 
            $totalLevels$$) : this.$buildLevelHeaders$($groupingContainer$$, $nextIndex_returnVal$$2$$, $level$$11$$ + $extentInfo_headerDepth$$, $dimensionSecondValue$$ + $levelDimensionValue$$, $dimensionToAdjustValue$$, $isAppend$$1$$, $insert$$, $renderer$$2$$, $headerSet$$1$$, $axis$$9$$, $className$$10$$, $totalLevels$$), $getHeaderDimension_headerDimensionValue$$ = $nextIndex_returnVal$$2$$[$top$$2_totalHeaderDimension$$], $dimensionToAdjustValue$$ = $isAppend$$1$$ ? $dimensionToAdjustValue$$ + 
            $getHeaderDimension_headerDimensionValue$$ : $dimensionToAdjustValue$$ - $getHeaderDimension_headerDimensionValue$$, $totalHeaderDimensionValue$$ += $getHeaderDimension_headerDimensionValue$$, $headerCount$$1$$ += $nextIndex_returnVal$$2$$.count, $getLevelDimension_i$$149$$ += $nextIndex_returnVal$$2$$.count - 1;
          }
          $d$$6_inlineStyle_totalLevelDimensionValue$$ = $levelDimensionValue$$ + $nextIndex_returnVal$$2$$[$left$$6_totalLevelDimension$$];
          $isAppend$$1$$ || $insert$$ || this.$setElementDir$($getGrouping_header$$5$$, $dimensionToAdjustValue$$, $dimensionToAdjust$$);
          this.$setElementDir$($getGrouping_header$$5$$, $totalHeaderDimensionValue$$, $headerDimension$$);
        }
        "column" === $axis$$9$$ ? this.$_isLastColumn$($index$$103_sortIcon$$ + $headerExtent$$ - 1) && this.$getRowHeaderWidth$() + $dimensionToAdjustValue$$ + $getHeaderDimension_headerDimensionValue$$ >= this.getWidth() && ("left" === $dimensionToAdjust$$ ? $getGrouping_header$$5$$.style.borderRightStyle = "none" : $getGrouping_header$$5$$.style.borderLeftStyle = "none") : this.$_isLastRow$($index$$103_sortIcon$$ + $headerExtent$$ - 1) && this.$getColumnHeaderHeight$() + $dimensionToAdjustValue$$ + 
        $getHeaderDimension_headerDimensionValue$$ >= this.getHeight() && ($getGrouping_header$$5$$.style.borderBottomStyle = "none");
        this.$_isHeaderResizeEnabled$($axis$$9$$, $headerContext$$1_patchBefore$$) && this.$_setAttribute$($getGrouping_header$$5$$, "resizable", "true");
        null != $groupingContainer$$ ? this.$m_root$.appendChild($groupingContainer$$) : this.$m_root$.appendChild($getGrouping_header$$5$$);
        this.$_renderContent$($renderer$$2$$, $headerContext$$1_patchBefore$$, $headerContent_patchAfter$$, $headerData_start$$30$$, this.$getMappedStyle$("headercelltext"));
        "column" === $axis$$9$$ && this.$_isSortEnabled$($axis$$9$$, $headerContext$$1_patchBefore$$) && (null != $end$$8_headerMetadata$$.sortDirection && null == this.$m_sortInfo$ && (this.$m_sortInfo$ = {}, this.$m_sortInfo$.key = $end$$8_headerMetadata$$.key, this.$m_sortInfo$.direction = $end$$8_headerMetadata$$.sortDirection, this.$m_sortInfo$.axis = $axis$$9$$), $index$$103_sortIcon$$ = this.$_buildSortIcon$($headerContext$$1_patchBefore$$), $getGrouping_header$$5$$.appendChild($index$$103_sortIcon$$), 
        this.$_setAttribute$($getGrouping_header$$5$$, "sortable", "true"));
        $isAppend$$1$$ ? null != $groupingContainer$$ ? $fragment$$1_returnObj$$.appendChild($groupingContainer$$) : $fragment$$1_returnObj$$.appendChild($getGrouping_header$$5$$) : null != $groupingContainer$$ ? $fragment$$1_returnObj$$.firstChild ? this.$m_utils$.$containsCSSClassName$($fragment$$1_returnObj$$.firstChild, this.$getMappedStyle$("groupingcontainer")) ? $fragment$$1_returnObj$$.insertBefore($groupingContainer$$, $fragment$$1_returnObj$$.firstChild) : this.$m_utils$.$containsCSSClassName$($fragment$$1_returnObj$$.firstChild, 
        this.$getMappedStyle$("headercell")) && $fragment$$1_returnObj$$.insertBefore($groupingContainer$$, $fragment$$1_returnObj$$.firstChild.nextSibling) : $fragment$$1_returnObj$$.appendChild($groupingContainer$$) : this.$m_utils$.$containsCSSClassName$($fragment$$1_returnObj$$, this.$getMappedStyle$("groupingcontainer")) ? $fragment$$1_returnObj$$.insertBefore($getGrouping_header$$5$$, $fragment$$1_returnObj$$.firstChild.nextSibling) : $fragment$$1_returnObj$$.insertBefore($getGrouping_header$$5$$, 
        $fragment$$1_returnObj$$.firstChild);
      }
    }
    $fragment$$1_returnObj$$ = {};
    $fragment$$1_returnObj$$[$left$$6_totalLevelDimension$$] = $d$$6_inlineStyle_totalLevelDimensionValue$$;
    $fragment$$1_returnObj$$[$top$$2_totalHeaderDimension$$] = $totalHeaderDimensionValue$$;
    $fragment$$1_returnObj$$.count = $headerCount$$1$$;
    return $fragment$$1_returnObj$$;
  };
  $DvtDataGrid$$.prototype.$buildRowHeaders$ = function $$DvtDataGrid$$$$$buildRowHeaders$$($headerRoot$$1$$, $headerSet$$2_prev$$, $start$$31$$, $totalCount$$1$$, $rowInsert$$1$$, $animation$$) {
    var $headerCount$$2$$, $scroller$$5$$, $renderer$$3$$, $isAppend$$2$$, $top$$3$$, $totalRowHeight$$, $className$$11$$, $fragment$$2$$, $index$$104_returnVal$$3$$, $rowHeaderContent$$, $referenceRow$$, $c$$38$$;
    null == this.$m_rowHeaderLevelCount$ && (this.$m_rowHeaderLevelCount$ = $headerSet$$2_prev$$.getLevelCount());
    $headerCount$$2$$ = $headerSet$$2_prev$$.getCount();
    if (!$animation$$) {
      if ($headerRoot$$1$$.hasChildNodes()) {
        if (0 == $headerCount$$2$$ && this.$_isCountUnknown$("row")) {
          this.$m_stopRowHeaderFetch$ = !0;
          return;
        }
        $scroller$$5$$ = $headerRoot$$1$$.firstChild;
        -1 == this.$m_endRowHeader$ && "" == $headerRoot$$1$$.className && ($headerRoot$$1$$.className = this.$getMappedStyle$("rowheader") + " " + this.$getMappedStyle$("header"), $headerRoot$$1$$.style.width = "", $scroller$$5$$.style.width = "");
      } else {
        $scroller$$5$$ = document.createElement("div"), $scroller$$5$$.className = this.$getMappedStyle$("scroller") + (this.$m_utils$.$isTouchDevice$() ? " " + this.$getMappedStyle$("scroller-mobile") : ""), 0 == $headerCount$$2$$ && ($headerRoot$$1$$.className = "", this.$setElementWidth$($headerRoot$$1$$, 0), this.$setElementWidth$($scroller$$5$$, 0), this.$m_stopRowHeaderFetch$ = !0);
      }
    }
    $renderer$$3$$ = this.$m_options$.$getRenderer$("row");
    ($isAppend$$2$$ = $start$$31$$ > this.$m_endRowHeader$ ? !0 : !1) ? $top$$3$$ = this.$m_endRowHeaderPixel$ : $rowInsert$$1$$ ? ($rowHeaderContent$$ = $headerRoot$$1$$.firstChild, $referenceRow$$ = $rowHeaderContent$$.childNodes[$start$$31$$ - this.$m_startRowHeader$], $top$$3$$ = this.$getElementDir$($referenceRow$$, "top")) : $top$$3$$ = this.$m_startRowHeaderPixel$;
    -1 == $totalCount$$1$$ && ($totalCount$$1$$ = this.$m_endRowHeader$ + $headerCount$$2$$);
    $totalRowHeight$$ = 0;
    $fragment$$2$$ = document.createDocumentFragment();
    $c$$38$$ = 0;
    for ($className$$11$$ = this.$getMappedStyle$("row") + " " + this.$getMappedStyle$("headercell") + " " + this.$getMappedStyle$("rowheadercell");0 < $headerCount$$2$$ - $c$$38$$;) {
      $index$$104_returnVal$$3$$ = $isAppend$$2$$ ? $start$$31$$ + $c$$38$$ : $start$$31$$ + ($headerCount$$2$$ - 1 - $c$$38$$), $index$$104_returnVal$$3$$ = this.$buildLevelHeaders$($fragment$$2$$, $index$$104_returnVal$$3$$, 0, 0, $isAppend$$2$$ ? $top$$3$$ + $totalRowHeight$$ : $top$$3$$ - $totalRowHeight$$, $isAppend$$2$$, $rowInsert$$1$$, $renderer$$3$$, $headerSet$$2_prev$$, "row", $className$$11$$, this.$m_rowHeaderLevelCount$), $c$$38$$ += $index$$104_returnVal$$3$$.count, $totalRowHeight$$ += 
      $index$$104_returnVal$$3$$.totalHeight, null == this.$m_rowHeaderWidth$ && (this.$m_rowHeaderWidth$ = $index$$104_returnVal$$3$$.totalWidth, this.$setElementWidth$($headerRoot$$1$$, this.$m_rowHeaderWidth$));
    }
    if ($animation$$) {
      return $fragment$$2$$;
    }
    $isAppend$$2$$ && 0 != $headerCount$$2$$ ? ($scroller$$5$$.appendChild($fragment$$2$$), -1 != this.$m_endRowHeader$ && 0 != $headerCount$$2$$ && ($headerSet$$2_prev$$ = $scroller$$5$$.childNodes[this.$m_endRowHeader$ - this.$m_startRowHeader$], null != $headerSet$$2_prev$$ && ($headerSet$$2_prev$$.style.borderBottomStyle = "")), this.$m_endRowHeader$ = $start$$31$$ + $headerCount$$2$$ - 1, this.$m_endRowHeaderPixel$ += $totalRowHeight$$) : $rowInsert$$1$$ ? ($rowHeaderContent$$.insertBefore($fragment$$2$$, 
    $referenceRow$$), $start$$31$$ < this.$m_startRowHeader$ && (this.$m_startRowHeader$ = $start$$31$$, this.$m_startRowHeaderPixel$ = Math.max(0, this.$m_startRowHeaderPixel$ - $totalRowHeight$$)), this.$m_endRowHeader$ += $headerCount$$2$$, this.$m_endRowHeaderPixel$ = Math.max(0, this.$m_endRowHeaderPixel$ + $totalRowHeight$$), this.$pushRowHeadersDown$($referenceRow$$, $totalRowHeight$$)) : ($scroller$$5$$.insertBefore($fragment$$2$$, $scroller$$5$$.firstChild), this.$m_startRowHeader$ = Math.max(0, 
    this.$m_startRowHeader$ - $headerCount$$2$$), this.$m_startRowHeaderPixel$ = Math.max(0, this.$m_startRowHeaderPixel$ - $totalRowHeight$$));
    $rowInsert$$1$$ || $headerRoot$$1$$.appendChild($scroller$$5$$);
    !this.$_isCountUnknown$("row") && this.$_isHighWatermarkScrolling$() && this.$m_endRowHeader$ + 1 >= $totalCount$$1$$ && (this.$m_stopRowHeaderFetch$ = !0);
  };
  $DvtDataGrid$$.prototype.$_getRowHeaderContainer$ = function $$DvtDataGrid$$$$$_getRowHeaderContainer$$($index$$105$$, $level$$12$$, $currentLevel$$1$$, $rowHeaders$$) {
    var $headerIndex$$, $headerExtent$$1$$, $headerDepth$$1$$, $i$$150$$;
    null == $rowHeaders$$ ? ($rowHeaders$$ = this.$m_rowHeader$.firstChild.childNodes, $i$$150$$ = 0) : $i$$150$$ = 1;
    if ($currentLevel$$1$$ === this.$m_rowHeaderLevelCount$ - 1) {
      return $rowHeaders$$[0].parentNode;
    }
    for (;$i$$150$$ < $rowHeaders$$.length;) {
      $headerIndex$$ = this.$_getAttribute$($rowHeaders$$[$i$$150$$], "start");
      $headerExtent$$1$$ = this.$_getAttribute$($rowHeaders$$[$i$$150$$], "extent");
      $headerDepth$$1$$ = this.$_getAttribute$($rowHeaders$$[$i$$150$$].firstChild, "depth");
      if ($index$$105$$ >= $headerIndex$$ && $index$$105$$ < $headerIndex$$ + $headerExtent$$1$$) {
        return $level$$12$$ < $currentLevel$$1$$ + $headerDepth$$1$$ ? $rowHeaders$$[$i$$150$$] : this.$_getRowHeaderContainer$($index$$105$$, $level$$12$$, $currentLevel$$1$$ + $headerDepth$$1$$, $rowHeaders$$[$i$$150$$].childNodes);
      }
      $i$$150$$++;
    }
    return null;
  };
  $DvtDataGrid$$.prototype.$_getRowHeaderByIndex$ = function $$DvtDataGrid$$$$$_getRowHeaderByIndex$$($index$$106$$, $level$$13$$) {
    var $relativeIndex_rowHeaderContainer$$, $rowHeaderContent$$1_start$$32$$;
    if (0 > $level$$13$$) {
      return null;
    }
    if (1 === this.$m_rowHeaderLevelCount$) {
      return $rowHeaderContent$$1_start$$32$$ = this.$m_rowHeader$.firstChild.childNodes, $relativeIndex_rowHeaderContainer$$ = $index$$106$$ - this.$m_startRowHeader$, $rowHeaderContent$$1_start$$32$$[$relativeIndex_rowHeaderContainer$$];
    }
    $relativeIndex_rowHeaderContainer$$ = this.$_getRowHeaderContainer$($index$$106$$, $level$$13$$, 0);
    if (null == $relativeIndex_rowHeaderContainer$$) {
      return null;
    }
    if ($level$$13$$ <= this.$_getAttribute$($relativeIndex_rowHeaderContainer$$, "level") + this.$_getAttribute$($relativeIndex_rowHeaderContainer$$.firstChild, "depth") - 1) {
      return $relativeIndex_rowHeaderContainer$$.firstChild;
    }
    $rowHeaderContent$$1_start$$32$$ = this.$_getAttribute$($relativeIndex_rowHeaderContainer$$, "start");
    return $relativeIndex_rowHeaderContainer$$.childNodes[$index$$106$$ - $rowHeaderContent$$1_start$$32$$ + 1];
  };
  $DvtDataGrid$$.prototype.$_getRowHeaderLevelWidth$ = function $$DvtDataGrid$$$$$_getRowHeaderLevelWidth$$($level$$14$$, $element$$75$$) {
    var $width$$18$$;
    null == this.$m_rowHeaderLevelWidths$ && (this.$m_rowHeaderLevelWidths$ = []);
    $width$$18$$ = this.$m_rowHeaderLevelWidths$[$level$$14$$];
    if (null != $width$$18$$) {
      return $width$$18$$;
    }
    $width$$18$$ = this.$getElementWidth$($element$$75$$);
    return this.$m_rowHeaderLevelWidths$[$level$$14$$] = $width$$18$$;
  };
  $DvtDataGrid$$.prototype.$_getColumnHeaderContainer$ = function $$DvtDataGrid$$$$$_getColumnHeaderContainer$$($index$$107$$, $level$$15$$, $currentLevel$$2$$, $columnHeaders$$) {
    var $headerIndex$$1$$, $headerExtent$$2$$, $headerDepth$$2$$, $i$$151$$;
    null == $columnHeaders$$ ? ($columnHeaders$$ = this.$m_colHeader$.firstChild.childNodes, $i$$151$$ = 0) : $i$$151$$ = 1;
    if ($currentLevel$$2$$ === this.$m_columnHeaderLevelCount$ - 1) {
      return $columnHeaders$$[0].parentNode;
    }
    for (;$i$$151$$ < $columnHeaders$$.length;) {
      $headerIndex$$1$$ = this.$_getAttribute$($columnHeaders$$[$i$$151$$], "start");
      $headerExtent$$2$$ = this.$_getAttribute$($columnHeaders$$[$i$$151$$], "extent");
      $headerDepth$$2$$ = this.$_getAttribute$($columnHeaders$$[$i$$151$$].firstChild, "depth");
      if ($index$$107$$ >= $headerIndex$$1$$ && $index$$107$$ < $headerIndex$$1$$ + $headerExtent$$2$$) {
        return $level$$15$$ < $currentLevel$$2$$ + $headerDepth$$2$$ ? $columnHeaders$$[$i$$151$$] : this.$_getColumnHeaderContainer$($index$$107$$, $level$$15$$, $currentLevel$$2$$ + $headerDepth$$2$$, $columnHeaders$$[$i$$151$$].childNodes);
      }
      $i$$151$$++;
    }
    return null;
  };
  $DvtDataGrid$$.prototype.$_getColumnHeaderByIndex$ = function $$DvtDataGrid$$$$$_getColumnHeaderByIndex$$($index$$108$$, $level$$16$$) {
    var $columnHeaderContainer_relativeIndex$$1$$, $columnHeaderContent_start$$33$$;
    if (0 > $level$$16$$) {
      return null;
    }
    if (1 === this.$m_columnHeaderLevelCount$) {
      return $columnHeaderContent_start$$33$$ = this.$m_colHeader$.firstChild.childNodes, $columnHeaderContainer_relativeIndex$$1$$ = $index$$108$$ - this.$m_startColHeader$, $columnHeaderContent_start$$33$$[$columnHeaderContainer_relativeIndex$$1$$];
    }
    $columnHeaderContainer_relativeIndex$$1$$ = this.$_getColumnHeaderContainer$($index$$108$$, $level$$16$$, 0);
    if (null == $columnHeaderContainer_relativeIndex$$1$$) {
      return null;
    }
    if ($level$$16$$ <= this.$_getAttribute$($columnHeaderContainer_relativeIndex$$1$$, "level") + this.$_getAttribute$($columnHeaderContainer_relativeIndex$$1$$.firstChild, "depth") - 1) {
      return $columnHeaderContainer_relativeIndex$$1$$.firstChild;
    }
    $columnHeaderContent_start$$33$$ = this.$_getAttribute$($columnHeaderContainer_relativeIndex$$1$$, "start");
    return $columnHeaderContainer_relativeIndex$$1$$.childNodes[$index$$108$$ - $columnHeaderContent_start$$33$$ + 1];
  };
  $DvtDataGrid$$.prototype.$_getColumnHeaderLevelHeight$ = function $$DvtDataGrid$$$$$_getColumnHeaderLevelHeight$$($level$$17$$, $element$$76$$) {
    var $height$$18$$;
    null == this.$m_columnHeaderLevelHeights$ && (this.$m_columnHeaderLevelHeights$ = []);
    $height$$18$$ = this.$m_columnHeaderLevelHeights$[$level$$17$$];
    if (null != $height$$18$$) {
      return $height$$18$$;
    }
    $height$$18$$ = this.$getElementHeight$($element$$76$$);
    return this.$m_columnHeaderLevelHeights$[$level$$17$$] = $height$$18$$;
  };
  $DvtDataGrid$$.prototype.$_getAttribute$ = function $$DvtDataGrid$$$$$_getAttribute$$($element$$77$$, $attributeKey$$) {
    var $value$$195$$ = $element$$77$$.getAttribute(this.$m_resources$.$getMappedAttribute$($attributeKey$$));
    return parseInt($value$$195$$, 10);
  };
  $DvtDataGrid$$.prototype.$_setAttribute$ = function $$DvtDataGrid$$$$$_setAttribute$$($element$$78$$, $attributeKey$$1$$, $value$$196$$) {
    $element$$78$$.setAttribute(this.$m_resources$.$getMappedAttribute$($attributeKey$$1$$), $value$$196$$);
  };
  $DvtDataGrid$$.prototype.$buildScroller$ = function $$DvtDataGrid$$$$$buildScroller$$() {
    var $root$$13$$ = document.createElement("div");
    $root$$13$$.id = this.$createSubId$("scroller");
    $root$$13$$.className = this.$getMappedStyle$("scrollers");
    $root$$13$$.tabIndex = "-1";
    $root$$13$$.addEventListener ? $root$$13$$.addEventListener("scroll", this.$handleScroll$.bind(this), !1) : $root$$13$$.attachEvent("onscroll", this.$handleScroll$.bind(this));
    return this.$m_scroller$ = $root$$13$$;
  };
  $DvtDataGrid$$.prototype.$buildDatabody$ = function $$DvtDataGrid$$$$$buildDatabody$$($scroller$$6$$) {
    var $root$$14$$ = document.createElement("div");
    $root$$14$$.id = this.$createSubId$("databody");
    $root$$14$$.className = this.$getMappedStyle$("databody");
    this.$m_databody$ = $root$$14$$;
    this.fetchCells($root$$14$$, $scroller$$6$$, 0, 0);
    return $root$$14$$;
  };
  $DvtDataGrid$$.prototype.fetchCells = function $$DvtDataGrid$$$$fetchCells$($columnRange_databody$$5$$, $scroller$$7$$, $rowRange_rowStart$$, $colStart$$, $rowCount$$4$$, $colCount$$1$$, $callbacks$$5_successCallback$$26$$) {
    this.$m_fetching$.cells || (this.$m_fetching$.cells = {row:$rowRange_rowStart$$, column:$colStart$$}, null == $rowCount$$4$$ && ($rowCount$$4$$ = this.$getFetchSize$("row")), null == $colCount$$1$$ && ($colCount$$1$$ = this.$getFetchSize$("column")), $rowRange_rowStart$$ = {axis:"row", start:$rowRange_rowStart$$, count:$rowCount$$4$$}, $columnRange_databody$$5$$ = {axis:"column", start:$colStart$$, count:$colCount$$1$$, databody:$columnRange_databody$$5$$, scroller:$scroller$$7$$}, $callbacks$$5_successCallback$$26$$ = 
    null != $callbacks$$5_successCallback$$26$$ && null != $callbacks$$5_successCallback$$26$$.success ? $callbacks$$5_successCallback$$26$$.success : this.$handleCellsFetchSuccess$, this.$showStatusText$(), this.$_signalTaskStart$(), this.$m_dataSource$.fetchCells([$rowRange_rowStart$$, $columnRange_databody$$5$$], {success:$callbacks$$5_successCallback$$26$$, error:this.$handleCellsFetchError$}, {success:this, error:this}));
  };
  $DvtDataGrid$$.prototype.$isCellFetchResponseValid$ = function $$DvtDataGrid$$$$$isCellFetchResponseValid$$($cellRange_responseColumnStart$$) {
    var $responseRowStart$$, $requestCellRanges_requestColumnStart$$, $requestRowStart$$;
    $responseRowStart$$ = $cellRange_responseColumnStart$$[0].start;
    $cellRange_responseColumnStart$$ = $cellRange_responseColumnStart$$[1].start;
    $requestCellRanges_requestColumnStart$$ = this.$m_fetching$.cells;
    $requestRowStart$$ = $requestCellRanges_requestColumnStart$$.row;
    $requestCellRanges_requestColumnStart$$ = $requestCellRanges_requestColumnStart$$.column;
    return $requestRowStart$$ == $responseRowStart$$ && $requestCellRanges_requestColumnStart$$ == $cellRange_responseColumnStart$$;
  };
  $DvtDataGrid$$.prototype.$isLongScroll$ = function $$DvtDataGrid$$$$$isLongScroll$$() {
    return this.$m_startRowPixel$ == this.$m_endRowPixel$ && this.$m_startColPixel$ == this.$m_endColPixel$;
  };
  $DvtDataGrid$$.prototype.$isCellFetchResponseInViewport$ = function $$DvtDataGrid$$$$$isCellFetchResponseInViewport$$($cellSet$$, $cellRange$$1$$) {
    var $rowStart$$1_rowStartPixel$$, $rowEnd_rowEndPixel$$, $columnEndPixel_columnStart$$, $columnStartPixel$$, $viewportTop$$, $viewportBottom$$, $viewportLeft$$, $viewportRight$$, $rowCount$$5$$, $columnCount$$;
    if (isNaN(this.$m_avgRowHeight$) || isNaN(this.$m_avgColWidth$)) {
      return!0;
    }
    $rowStart$$1_rowStartPixel$$ = $cellRange$$1$$[0].start;
    $rowCount$$5$$ = $cellSet$$.getCount("row");
    $rowEnd_rowEndPixel$$ = $rowStart$$1_rowStartPixel$$ + $rowCount$$5$$;
    $columnEndPixel_columnStart$$ = $cellRange$$1$$[1].start;
    $columnCount$$ = $cellSet$$.getCount("column");
    $rowStart$$1_rowStartPixel$$ *= this.$m_avgRowHeight$;
    $rowEnd_rowEndPixel$$ *= this.$m_avgRowHeight$;
    $columnStartPixel$$ = this.$m_avgColWidth$ * $columnEndPixel_columnStart$$;
    $columnEndPixel_columnStart$$ = this.$m_avgColWidth$ * ($columnEndPixel_columnStart$$ + $columnCount$$);
    $viewportTop$$ = this.$m_currentScrollTop$;
    $viewportBottom$$ = this.$m_currentScrollTop$ + this.$getElementHeight$(this.$m_databody$);
    $viewportLeft$$ = this.$m_currentScrollLeft$;
    $viewportRight$$ = this.$m_currentScrollLeft$ + this.$getElementWidth$(this.$m_databody$);
    !this.$_isCountUnknown$("row") && this.$m_dataSource$.getCount("row") == $rowCount$$5$$ && $rowEnd_rowEndPixel$$ < $viewportBottom$$ && ($rowEnd_rowEndPixel$$ = $viewportBottom$$);
    !this.$_isCountUnknown$("column") && this.$m_dataSource$.getCount("column") == $columnCount$$ && $columnEndPixel_columnStart$$ < $viewportRight$$ && ($columnEndPixel_columnStart$$ = $viewportRight$$);
    return $viewportTop$$ >= $rowStart$$1_rowStartPixel$$ && $viewportBottom$$ <= $rowEnd_rowEndPixel$$ && $viewportLeft$$ >= $columnStartPixel$$ && $viewportRight$$ <= $columnEndPixel_columnStart$$;
  };
  $DvtDataGrid$$.prototype.$handleCellsFetchSuccess$ = function $$DvtDataGrid$$$$$handleCellsFetchSuccess$$($cellSet$$1_totalRowHeight$$1$$, $cellRange$$2_columnStart$$1$$, $i$$152_rowInsert$$2_rows$$1_totalColumnWidth$$1$$) {
    var $totalRowCount$$, $totalColumnCount$$, $columnCount$$1_rowRange$$3$$, $rowStart$$2$$, $rowCount$$6$$, $isAppend$$3_rowRangeNeedsUpdate$$, $columnRange$$3_inner$$, $columnRangeNeedsUpdate$$, $databody$$6$$, $addResult_avgHeight_top$$4$$, $prev$$1_referenceRow$$1$$, $databodyContent_scroller$$8$$, $fragment$$3$$, $avgWidth$$1$$;
    $totalRowCount$$ = this.$m_dataSource$.getCount("row");
    $totalColumnCount$$ = this.$m_dataSource$.getCount("column");
    if (void 0 === $i$$152_rowInsert$$2_rows$$1_totalColumnWidth$$1$$) {
      $i$$152_rowInsert$$2_rows$$1_totalColumnWidth$$1$$ = !1;
      if (!this.$isCellFetchResponseValid$($cellRange$$2_columnStart$$1$$)) {
        this.$_signalTaskEnd$();
        return;
      }
      if (this.$isLongScroll$() && !this.$isCellFetchResponseInViewport$($cellSet$$1_totalRowHeight$$1$$, $cellRange$$2_columnStart$$1$$)) {
        this.$m_fetching$.cells = !1;
        this.$m_captureScrolling$ || this.$handleLongScroll$(this.$m_currentScrollLeft$, this.$m_currentScrollTop$);
        this.$_signalTaskEnd$();
        return;
      }
    }
    this.$getDefaultRowHeight$();
    $columnCount$$1_rowRange$$3$$ = $cellRange$$2_columnStart$$1$$[0];
    $rowStart$$2$$ = $columnCount$$1_rowRange$$3$$.start;
    $rowCount$$6$$ = $cellSet$$1_totalRowHeight$$1$$.getCount("row");
    $isAppend$$3_rowRangeNeedsUpdate$$ = 0 < $rowCount$$6$$ && ($rowStart$$2$$ > this.$m_endRow$ || $rowStart$$2$$ + $rowCount$$6$$ <= this.$m_startRow$);
    if (0 == $rowCount$$6$$ && this.$_isCountUnknown$("row") && 0 < $columnCount$$1_rowRange$$3$$.count || $isAppend$$3_rowRangeNeedsUpdate$$ && this.$_isHighWatermarkScrolling$() && !this.$_isCountUnknown$("row") && this.$m_endRow$ + $rowCount$$6$$ + 1 >= $totalRowCount$$ || $rowCount$$6$$ < $columnCount$$1_rowRange$$3$$.count) {
      this.$m_stopRowFetch$ = !0;
    }
    $columnRange$$3_inner$$ = $cellRange$$2_columnStart$$1$$[1];
    $cellRange$$2_columnStart$$1$$ = $columnRange$$3_inner$$.start;
    $columnCount$$1_rowRange$$3$$ = $cellSet$$1_totalRowHeight$$1$$.getCount("column");
    $columnRangeNeedsUpdate$$ = 0 < $columnCount$$1_rowRange$$3$$ && ($cellRange$$2_columnStart$$1$$ > this.$m_endCol$ || $cellRange$$2_columnStart$$1$$ + $columnCount$$1_rowRange$$3$$ == this.$m_startCol$);
    if (0 == $columnCount$$1_rowRange$$3$$ && this.$_isCountUnknown$("column") && 0 < $columnRange$$3_inner$$.count || $columnRangeNeedsUpdate$$ && this.$_isHighWatermarkScrolling$() && !this.$_isCountUnknown$("column") && this.$m_endCol$ + $columnCount$$1_rowRange$$3$$ + 1 >= $totalColumnCount$$ || $columnCount$$1_rowRange$$3$$ < $columnRange$$3_inner$$.count) {
      this.$m_stopColumnFetch$ = !0;
    }
    $databody$$6$$ = this.$m_databody$;
    null == $databody$$6$$ && ($databody$$6$$ = $columnRange$$3_inner$$.databody);
    $databodyContent_scroller$$8$$ = this.$m_scroller$;
    null == $databodyContent_scroller$$8$$ && ($databodyContent_scroller$$8$$ = $columnRange$$3_inner$$.scroller);
    $databodyContent_scroller$$8$$.hasChildNodes() ? $columnRange$$3_inner$$ = $databodyContent_scroller$$8$$.firstChild : ($columnRange$$3_inner$$ = document.createElement("div"), $databodyContent_scroller$$8$$.appendChild($columnRange$$3_inner$$));
    $databody$$6$$.hasChildNodes() ? $databodyContent_scroller$$8$$ = $databody$$6$$.firstChild : ($databodyContent_scroller$$8$$ = document.createElement("div"), $databodyContent_scroller$$8$$.className = this.$getMappedStyle$("scroller") + (this.$m_utils$.$isTouchDevice$() ? " " + this.$getMappedStyle$("scroller-mobile") : ""));
    if ($isAppend$$3_rowRangeNeedsUpdate$$ || $i$$152_rowInsert$$2_rows$$1_totalColumnWidth$$1$$) {
      if (($isAppend$$3_rowRangeNeedsUpdate$$ = !$i$$152_rowInsert$$2_rows$$1_totalColumnWidth$$1$$ && $rowStart$$2$$ >= this.$m_startRow$ ? !0 : !1) ? ($prev$$1_referenceRow$$1$$ = $databodyContent_scroller$$8$$.childNodes[$rowStart$$2$$ - this.$m_startRow$], $addResult_avgHeight_top$$4$$ = this.$m_endRowPixel$) : $i$$152_rowInsert$$2_rows$$1_totalColumnWidth$$1$$ ? ($prev$$1_referenceRow$$1$$ = $databodyContent_scroller$$8$$.childNodes[$rowStart$$2$$ - this.$m_startRow$], $addResult_avgHeight_top$$4$$ = 
      this.$getElementDir$($prev$$1_referenceRow$$1$$, "top")) : $addResult_avgHeight_top$$4$$ = this.$m_startRowPixel$, $fragment$$3$$ = document.createDocumentFragment(), $addResult_avgHeight_top$$4$$ = this.$_addRows$($fragment$$3$$, $isAppend$$3_rowRangeNeedsUpdate$$ || $i$$152_rowInsert$$2_rows$$1_totalColumnWidth$$1$$, $addResult_avgHeight_top$$4$$, $rowStart$$2$$, $rowCount$$6$$, $cellRange$$2_columnStart$$1$$, $columnRangeNeedsUpdate$$, $cellSet$$1_totalRowHeight$$1$$), $cellSet$$1_totalRowHeight$$1$$ = 
      $addResult_avgHeight_top$$4$$.totalRowHeight, $avgWidth$$1$$ = $addResult_avgHeight_top$$4$$.avgWidth, $addResult_avgHeight_top$$4$$ = $cellSet$$1_totalRowHeight$$1$$ / $rowCount$$6$$, $isAppend$$3_rowRangeNeedsUpdate$$) {
        $databodyContent_scroller$$8$$.appendChild($fragment$$3$$);
        if (-1 != this.$m_endRow$ && 0 != $rowCount$$6$$ && ($prev$$1_referenceRow$$1$$ = $databodyContent_scroller$$8$$.childNodes[this.$m_endRow$ - this.$m_startRow$], null != $prev$$1_referenceRow$$1$$)) {
          for ($prev$$1_referenceRow$$1$$ = $prev$$1_referenceRow$$1$$.childNodes, $i$$152_rowInsert$$2_rows$$1_totalColumnWidth$$1$$ = 0;$i$$152_rowInsert$$2_rows$$1_totalColumnWidth$$1$$ < $prev$$1_referenceRow$$1$$.length;$i$$152_rowInsert$$2_rows$$1_totalColumnWidth$$1$$ += 1) {
            $prev$$1_referenceRow$$1$$[$i$$152_rowInsert$$2_rows$$1_totalColumnWidth$$1$$].style.borderBottomStyle = "";
          }
        }
        this.$m_endRow$ = $rowStart$$2$$ + $rowCount$$6$$ - 1;
        this.$m_endRowPixel$ += $cellSet$$1_totalRowHeight$$1$$;
        $databody$$6$$.hasChildNodes() || $databody$$6$$.appendChild($databodyContent_scroller$$8$$);
      } else {
        $i$$152_rowInsert$$2_rows$$1_totalColumnWidth$$1$$ ? ($databodyContent_scroller$$8$$.insertBefore($fragment$$3$$, $prev$$1_referenceRow$$1$$), $rowStart$$2$$ < this.$m_startRow$ && (this.$m_startRow$ = $rowStart$$2$$, this.$m_startRowPixel$ = Math.max(0, this.$m_startRowPixel$ - $cellSet$$1_totalRowHeight$$1$$)), this.$m_endRow$ += $rowCount$$6$$, this.$m_endRowPixel$ += $cellSet$$1_totalRowHeight$$1$$, this.$pushRowsDown$($prev$$1_referenceRow$$1$$, $cellSet$$1_totalRowHeight$$1$$)) : ($databodyContent_scroller$$8$$.insertBefore($fragment$$3$$, 
        $databodyContent_scroller$$8$$.firstChild), this.$m_startRow$ -= $rowCount$$6$$, this.$m_startRowPixel$ = Math.max(0, this.$m_startRowPixel$ - $cellSet$$1_totalRowHeight$$1$$));
      }
    } else {
      $columnRangeNeedsUpdate$$ && ($i$$152_rowInsert$$2_rows$$1_totalColumnWidth$$1$$ = $databodyContent_scroller$$8$$.childNodes, $rowCount$$6$$ == $i$$152_rowInsert$$2_rows$$1_totalColumnWidth$$1$$.length && ($avgWidth$$1$$ = this.$_addColumns$($i$$152_rowInsert$$2_rows$$1_totalColumnWidth$$1$$, $rowStart$$2$$, $rowCount$$6$$, $cellRange$$2_columnStart$$1$$, $cellSet$$1_totalRowHeight$$1$$)));
    }
    $i$$152_rowInsert$$2_rows$$1_totalColumnWidth$$1$$ = -1 == $totalColumnCount$$ || this.$_isHighWatermarkScrolling$() ? this.$m_endColPixel$ : $totalColumnCount$$ * $avgWidth$$1$$;
    void 0 == $avgWidth$$1$$ || 0 != this.$m_avgColWidth$ && void 0 != this.$m_avgColWidth$ ? (-1 == $totalColumnCount$$ || this.$_isHighWatermarkScrolling$()) && $i$$152_rowInsert$$2_rows$$1_totalColumnWidth$$1$$ > this.$getElementWidth$($databodyContent_scroller$$8$$) && (this.$setElementWidth$($databodyContent_scroller$$8$$, $i$$152_rowInsert$$2_rows$$1_totalColumnWidth$$1$$), this.$setElementWidth$($columnRange$$3_inner$$, $i$$152_rowInsert$$2_rows$$1_totalColumnWidth$$1$$)) : (this.$m_avgColWidth$ = 
    $avgWidth$$1$$, this.$setElementWidth$($databodyContent_scroller$$8$$, $i$$152_rowInsert$$2_rows$$1_totalColumnWidth$$1$$), this.$setElementWidth$($columnRange$$3_inner$$, $i$$152_rowInsert$$2_rows$$1_totalColumnWidth$$1$$));
    $cellSet$$1_totalRowHeight$$1$$ = -1 == $totalRowCount$$ || this.$_isHighWatermarkScrolling$() ? this.$m_endRowPixel$ : $totalRowCount$$ * $addResult_avgHeight_top$$4$$;
    if (void 0 != $addResult_avgHeight_top$$4$$ && (0 == this.$m_avgRowHeight$ || void 0 == this.$m_avgRowHeight$)) {
      this.$m_avgRowHeight$ = $addResult_avgHeight_top$$4$$, this.$setElementHeight$($databodyContent_scroller$$8$$, $cellSet$$1_totalRowHeight$$1$$), this.$setElementHeight$($columnRange$$3_inner$$, $cellSet$$1_totalRowHeight$$1$$);
    } else {
      if ((-1 == $totalRowCount$$ || this.$_isHighWatermarkScrolling$()) && $cellSet$$1_totalRowHeight$$1$$ > this.$getElementHeight$($databodyContent_scroller$$8$$) || $totalRowCount$$ * $addResult_avgHeight_top$$4$$ != this.$getElementHeight$($databodyContent_scroller$$8$$)) {
        this.$setElementHeight$($databodyContent_scroller$$8$$, $cellSet$$1_totalRowHeight$$1$$), this.$setElementHeight$($columnRange$$3_inner$$, $cellSet$$1_totalRowHeight$$1$$);
      }
    }
    $columnRangeNeedsUpdate$$ && ($cellRange$$2_columnStart$$1$$ < this.$m_startCol$ ? this.$m_startCol$ -= $columnCount$$1_rowRange$$3$$ : this.$m_endCol$ = $cellRange$$2_columnStart$$1$$ + $columnCount$$1_rowRange$$3$$ - 1);
    this.$m_fetching$.cells = !1;
    this.$m_initialized$ && this.$_syncScroller$();
    this.$isFetchComplete$() && (this.$hideStatusText$(), null != this.$m_scrollIndexAfterFetch$ ? this.$scrollToIndex$(this.$m_scrollIndexAfterFetch$) : null != this.$m_scrollHeaderAfterFetch$ ? this.$scrollToHeader$(this.$m_scrollHeaderAfterFetch$) : this.$isActionableMode$() || null == this.$_getActiveElement$() || this.$_highlightActive$(), this.$_isSelectionEnabled$() && this.$applySelection$($rowStart$$2$$, $rowStart$$2$$ + $rowCount$$6$$), this.$populateAccInfo$(), this.$m_utils$.$isTouchDevice$() && 
    window.hasOwnProperty("WebKitCSSMatrix") && ($databody$$6$$.style.webkitTransform = "translate3d(0, 0, 0)", null != this.$m_rowHeader$ && (this.$m_rowHeader$.style.webkitTransform = "translate3d(0, 0, 0)"), null != this.$m_colHeader$ && (this.$m_colHeader$.style.webkitTransform = "translate3d(0, 0, 0)")), this.$_shouldInitialize$() ? this.$_handleInitialization$(!0) : this.$m_initialized$ && (this.$_isScrollerContentOutOfSync$() || !0 == this.$m_resizeRequired$ || this.$m_endRowHeaderPixel$ > 
    this.$getElementHeight$($databody$$6$$) && this.$getElementHeight$(this.$m_scroller$) > this.$getElementHeight$($databody$$6$$) || this.$m_endColHeaderPixel$ > this.$getElementWidth$($databody$$6$$) && this.$getElementWidth$(this.$m_scroller$) > this.$getElementWidth$($databody$$6$$) ? this.$resizeGrid$() : (this.$m_scrollWidth$ = this.$getElementWidth$($databodyContent_scroller$$8$$) - this.$getElementWidth$($databody$$6$$), this.$m_scrollHeight$ = this.$getElementHeight$($databodyContent_scroller$$8$$) - 
    this.$getElementHeight$($databody$$6$$)), this.$fillViewport$(this.$m_currentScrollLeft$, this.$m_currentScrollTop$), this.$isFetchComplete$() && this.fireEvent("ready", {})));
    this.$_signalTaskEnd$();
  };
  $DvtDataGrid$$.prototype.$_insertRowsWithAnimation$ = function $$DvtDataGrid$$$$$_insertRowsWithAnimation$$($rowFragment$$, $rowHeaderFragment$$, $rowStart$$3$$, $totalRowHeight$$2$$) {
    var $self$$74$$, $isAppend$$4$$, $databodyContent$$1$$, $rowHeaderSupport$$, $rowHeaderContent$$2$$, $referenceRow$$2$$, $referenceRowHeader$$, $referenceRowTop$$, $insertStartPixel$$, $i$$153$$, $row$$5_rowHeader$$4$$, $newTop$$, $deltaY$$, $lastAnimatedElement$$, $transitionListener$$;
    $self$$74$$ = this;
    $self$$74$$.$_signalTaskStart$();
    $isAppend$$4$$ = $rowStart$$3$$ > this.$m_endRow$;
    $databodyContent$$1$$ = this.$m_databody$.firstChild;
    $rowHeaderSupport$$ = null == $rowHeaderFragment$$ ? !1 : !0;
    $referenceRow$$2$$ = $databodyContent$$1$$.childNodes[$rowStart$$3$$ - this.$m_startRow$ - 1];
    $referenceRowTop$$ = this.$getElementDir$($referenceRow$$2$$, "top");
    $insertStartPixel$$ = $referenceRowTop$$ + this.$getElementHeight$($referenceRow$$2$$);
    this.$changeStyleProperty$($referenceRow$$2$$, this.$getCssSupport$("z-index"), 10);
    $rowHeaderSupport$$ && ($rowHeaderContent$$2$$ = this.$m_rowHeader$.firstChild, $referenceRowHeader$$ = $rowHeaderContent$$2$$.childNodes[$rowStart$$3$$ - this.$m_startRow$ - 1], this.$changeStyleProperty$($referenceRowHeader$$, this.$getCssSupport$("z-index"), 10));
    for ($i$$153$$ = 0;$i$$153$$ < $rowFragment$$.childNodes.length;$i$$153$$++) {
      $row$$5_rowHeader$$4$$ = $rowFragment$$.childNodes[$i$$153$$], $newTop$$ = $insertStartPixel$$ + this.$getElementDir$($row$$5_rowHeader$$4$$, "top"), $deltaY$$ = $referenceRowTop$$ - $newTop$$, this.$setElementDir$($row$$5_rowHeader$$4$$, $newTop$$, "top"), this.$addTransformMoveStyle$($row$$5_rowHeader$$4$$, 0, 0, "linear", 0, $deltaY$$), $rowHeaderSupport$$ && ($row$$5_rowHeader$$4$$ = $rowHeaderFragment$$.childNodes[$i$$153$$], this.$setElementDir$($row$$5_rowHeader$$4$$, $newTop$$, "top"), 
      this.$addTransformMoveStyle$($row$$5_rowHeader$$4$$, 0, 0, "linear", 0, $deltaY$$));
    }
    for ($i$$153$$ = $rowStart$$3$$ - this.$m_startRow$;$i$$153$$ < $databodyContent$$1$$.childNodes.length;$i$$153$$++) {
      $row$$5_rowHeader$$4$$ = $databodyContent$$1$$.childNodes[$i$$153$$], $newTop$$ = $totalRowHeight$$2$$ + this.$getElementDir$($row$$5_rowHeader$$4$$, "top"), $deltaY$$ = -$totalRowHeight$$2$$, this.$setElementDir$($row$$5_rowHeader$$4$$, $newTop$$, "top"), this.$addTransformMoveStyle$($row$$5_rowHeader$$4$$, 0, 0, "linear", 0, $deltaY$$), $rowHeaderSupport$$ && ($row$$5_rowHeader$$4$$ = $rowHeaderContent$$2$$.childNodes[$i$$153$$], this.$setElementDir$($row$$5_rowHeader$$4$$, $newTop$$, "top"), 
      this.$addTransformMoveStyle$($row$$5_rowHeader$$4$$, 0, 0, "linear", 0, $deltaY$$));
    }
    this.$m_endRow$ += $rowFragment$$.childNodes.length;
    this.$m_endRowPixel$ += $totalRowHeight$$2$$;
    $rowHeaderSupport$$ && (this.$m_endRowHeader$ += $rowHeaderFragment$$.childNodes.length, this.$m_endRowHeaderPixel$ += $totalRowHeight$$2$$);
    this.$setElementHeight$($databodyContent$$1$$, this.$m_endRowPixel$ - this.$m_startRowPixel$);
    this.$setElementHeight$(this.$m_scroller$.firstChild, this.$m_endRowPixel$ - this.$m_startRowPixel$);
    this.$resizeGrid$();
    $isAppend$$4$$ ? ($databodyContent$$1$$.appendChild($rowFragment$$), $rowHeaderSupport$$ && $rowHeaderContent$$2$$.appendChild($rowHeaderFragment$$)) : ($databodyContent$$1$$.insertBefore($rowFragment$$, $referenceRow$$2$$.nextSibling), $rowHeaderSupport$$ && $rowHeaderContent$$2$$.insertBefore($rowHeaderFragment$$, $referenceRowHeader$$.nextSibling));
    this.$updateRowBanding$();
    $lastAnimatedElement$$ = $databodyContent$$1$$.lastChild;
    $transitionListener$$ = function $$transitionListener$$$() {
      $self$$74$$.$_handleAnimationEnd$();
      $lastAnimatedElement$$.removeEventListener("transitionend", $transitionListener$$, !1);
    };
    $lastAnimatedElement$$.addEventListener("transitionend", $transitionListener$$, !1);
    setTimeout(function() {
      var $i$$154$$, $duration$$11$$;
      $duration$$11$$ = $DvtDataGrid$$.$EXPAND_ANIMATION_DURATION$;
      for ($i$$154$$ = $databodyContent$$1$$.childNodes.length - 1;$i$$154$$ >= $rowStart$$3$$ - $self$$74$$.$m_startRow$;$i$$154$$--) {
        $self$$74$$.$addTransformMoveStyle$($databodyContent$$1$$.childNodes[$i$$154$$], $duration$$11$$ + "ms", 0, "ease-out", 0, 0), $rowHeaderSupport$$ && $self$$74$$.$addTransformMoveStyle$($rowHeaderContent$$2$$.childNodes[$i$$154$$], $duration$$11$$ + "ms", 0, "ease-out", 0, 0);
      }
    }, 0);
  };
  $DvtDataGrid$$.prototype.$_addColumns$ = function $$DvtDataGrid$$$$$_addColumns$$($rows$$2$$, $rowStart$$4$$, $rowCount$$7$$, $columnStart$$2$$, $cellSet$$2$$) {
    var $renderer$$4$$, $columnBandingInterval$$, $horizontalGridlines$$1$$, $verticalGridlines$$1$$, $avgWidth$$2_returnVal$$4_row$$6$$, $i$$155$$;
    $renderer$$4$$ = this.$m_options$.$getRenderer$("cell");
    $columnBandingInterval$$ = this.$m_options$.$getColumnBandingInterval$();
    $horizontalGridlines$$1$$ = this.$m_options$.$getHorizontalGridlines$();
    $verticalGridlines$$1$$ = this.$m_options$.$getVerticalGridlines$();
    for ($i$$155$$ = 0;$i$$155$$ < $rowCount$$7$$;$i$$155$$ += 1) {
      $avgWidth$$2_returnVal$$4_row$$6$$ = $rows$$2$$[$i$$155$$], $avgWidth$$2_returnVal$$4_row$$6$$ = this.$addCellsToRow$($cellSet$$2$$, $avgWidth$$2_returnVal$$4_row$$6$$, $rowStart$$4$$ + $i$$155$$, $renderer$$4$$, !1, $columnStart$$2$$, $i$$155$$ == $rowCount$$7$$ - 1, $columnBandingInterval$$, $horizontalGridlines$$1$$, $verticalGridlines$$1$$), $avgWidth$$2_returnVal$$4_row$$6$$ = $avgWidth$$2_returnVal$$4_row$$6$$.avgWidth;
    }
    return $avgWidth$$2_returnVal$$4_row$$6$$;
  };
  $DvtDataGrid$$.prototype.$_addRows$ = function $$DvtDataGrid$$$$$_addRows$$($fragment$$4$$, $isAppendOrInsert$$, $top$$5$$, $rowStart$$5$$, $rowCount$$8$$, $columnStart$$3$$, $columnRangeNeedsUpdate$$1$$, $cellSet$$3$$) {
    var $renderer$$5$$, $columnBandingInterval$$1$$, $rowBandingInterval$$, $horizontalGridlines$$2$$, $verticalGridlines$$2$$, $row$$7$$, $avgWidth$$3_index$$109$$, $totalRowHeight$$3$$, $height$$19_returnVal$$5$$, $i$$156$$;
    $renderer$$5$$ = this.$m_options$.$getRenderer$("cell");
    $columnBandingInterval$$1$$ = this.$m_options$.$getColumnBandingInterval$();
    $rowBandingInterval$$ = this.$m_options$.$getRowBandingInterval$();
    $horizontalGridlines$$2$$ = this.$m_options$.$getHorizontalGridlines$();
    $verticalGridlines$$2$$ = this.$m_options$.$getVerticalGridlines$();
    for ($i$$156$$ = $totalRowHeight$$3$$ = 0;$i$$156$$ < $rowCount$$8$$;$i$$156$$ += 1) {
      $avgWidth$$3_index$$109$$ = $isAppendOrInsert$$ ? $rowStart$$5$$ + $i$$156$$ : $rowStart$$5$$ + ($rowCount$$8$$ - 1 - $i$$156$$), $row$$7$$ = document.createElement("div"), $row$$7$$.className = this.$getMappedStyle$("row"), 1 === Math.floor($avgWidth$$3_index$$109$$ / $rowBandingInterval$$) % 2 && ($row$$7$$.className += " " + this.$getMappedStyle$("banded")), this.$m_root$.appendChild($row$$7$$), $height$$19_returnVal$$5$$ = this.$addCellsToRow$($cellSet$$3$$, $row$$7$$, $avgWidth$$3_index$$109$$, 
      $renderer$$5$$, !0, $columnStart$$3$$, $i$$156$$ == $rowCount$$8$$ - 1 && $columnRangeNeedsUpdate$$1$$, $columnBandingInterval$$1$$, $horizontalGridlines$$2$$, $verticalGridlines$$2$$, $top$$5$$), $avgWidth$$3_index$$109$$ = $height$$19_returnVal$$5$$.avgWidth, $height$$19_returnVal$$5$$ = $height$$19_returnVal$$5$$.height, $totalRowHeight$$3$$ += $height$$19_returnVal$$5$$, $isAppendOrInsert$$ ? ($row$$7$$.style.top = $top$$5$$ + "px", $top$$5$$ += $height$$19_returnVal$$5$$, $fragment$$4$$.appendChild($row$$7$$)) : 
      ($top$$5$$ -= $height$$19_returnVal$$5$$, $row$$7$$.style.top = $top$$5$$ + "px", $fragment$$4$$.insertBefore($row$$7$$, $fragment$$4$$.firstChild));
    }
    return{avgWidth:$avgWidth$$3_index$$109$$, totalRowHeight:$totalRowHeight$$3$$, top:$top$$5$$};
  };
  $DvtDataGrid$$.prototype.$_isScrollerContentOutOfSync$ = function $$DvtDataGrid$$$$$_isScrollerContentOutOfSync$$() {
    var $scrollerHeight$$2$$, $scrollerWidth$$2$$, $scrollerContent$$1_scrollerContentWidth$$, $scrollerContentHeight$$;
    if (null == this.$m_scroller$) {
      return!1;
    }
    $scrollerHeight$$2$$ = this.$getElementHeight$(this.$m_scroller$);
    $scrollerWidth$$2$$ = this.$getElementWidth$(this.$m_scroller$);
    $scrollerContent$$1_scrollerContentWidth$$ = this.$m_scroller$.firstChild;
    $scrollerContentHeight$$ = this.$getElementHeight$($scrollerContent$$1_scrollerContentWidth$$);
    $scrollerContent$$1_scrollerContentWidth$$ = this.$getElementWidth$($scrollerContent$$1_scrollerContentWidth$$);
    return this.$m_endRowPixel$ > $scrollerHeight$$2$$ && $scrollerWidth$$2$$ == $scrollerContent$$1_scrollerContentWidth$$ || this.$m_endColPixel$ > $scrollerWidth$$2$$ && $scrollerHeight$$2$$ == $scrollerContentHeight$$ ? !0 : !1;
  };
  $DvtDataGrid$$.prototype.$pushRowsDown$ = function $$DvtDataGrid$$$$$pushRowsDown$$($row$$8$$, $adjustment$$) {
    for (;$row$$8$$;) {
      $row$$8$$.style.top = this.$getElementDir$($row$$8$$, "top") + $adjustment$$ + "px", $row$$8$$ = $row$$8$$.nextSibling;
    }
  };
  $DvtDataGrid$$.prototype.$pushRowsUp$ = function $$DvtDataGrid$$$$$pushRowsUp$$($row$$9$$, $adjustment$$1$$) {
    this.$pushRowsDown$($row$$9$$, -$adjustment$$1$$);
  };
  $DvtDataGrid$$.prototype.$pushRowHeadersDown$ = function $$DvtDataGrid$$$$$pushRowHeadersDown$$($rowHeader$$5$$, $adjustment$$2$$) {
    for (;$rowHeader$$5$$;) {
      $rowHeader$$5$$.style.top = this.$getElementDir$($rowHeader$$5$$, "top") + $adjustment$$2$$ + "px", $rowHeader$$5$$ = $rowHeader$$5$$.nextSibling;
    }
  };
  $DvtDataGrid$$.prototype.$pushRowHeadersUp$ = function $$DvtDataGrid$$$$$pushRowHeadersUp$$($rowHeader$$6$$, $adjustment$$3$$) {
    this.$pushRowsDown$($rowHeader$$6$$, -$adjustment$$3$$);
  };
  $DvtDataGrid$$.prototype.$createCellContext$ = function $$DvtDataGrid$$$$$createCellContext$$($indexes$$4$$, $data$$79$$, $metadata$$2$$, $elem$$28$$) {
    var $cellContext$$, $prop$$64$$;
    $cellContext$$ = {};
    $cellContext$$.parentElement = $elem$$28$$.firstChild;
    $cellContext$$.indexes = $indexes$$4$$;
    $cellContext$$.cell = $data$$79$$;
    $cellContext$$.data = null != $data$$79$$.data ? $data$$79$$.data : $data$$79$$;
    $cellContext$$.component = this;
    $cellContext$$.datasource = this.$m_dataSource$;
    $cellContext$$.mode = "navigation";
    for ($prop$$64$$ in $metadata$$2$$) {
      $metadata$$2$$.hasOwnProperty($prop$$64$$) && ($cellContext$$[$prop$$64$$] = $metadata$$2$$[$prop$$64$$]);
    }
    null != this.$m_createContextCallback$ && this.$m_createContextCallback$.call(this, $cellContext$$);
    return $cellContext$$;
  };
  $DvtDataGrid$$.prototype.$_createCellId$ = function $$DvtDataGrid$$$$$_createCellId$$($keys$$16$$) {
    return this.$createSubId$("r" + $keys$$16$$.row + "c" + $keys$$16$$.column);
  };
  $DvtDataGrid$$.prototype.$_createHeaderId$ = function $$DvtDataGrid$$$$$_createHeaderId$$($axis$$10$$, $key$$60$$) {
    return this.$createSubId$($axis$$10$$.charAt(0) + $key$$60$$);
  };
  $DvtDataGrid$$.prototype.$createCellElement$ = function $$DvtDataGrid$$$$$createCellElement$$() {
    return document.createElement("div");
  };
  $DvtDataGrid$$.prototype.$getRowHeaderWidth$ = function $$DvtDataGrid$$$$$getRowHeaderWidth$$() {
    return-1 === this.$m_endRowHeader$ ? 0 : this.$m_rowHeaderWidth$;
  };
  $DvtDataGrid$$.prototype.$getColumnHeaderHeight$ = function $$DvtDataGrid$$$$$getColumnHeaderHeight$$() {
    return-1 === this.$m_endColHeader$ ? 0 : this.$m_colHeaderHeight$;
  };
  $DvtDataGrid$$.prototype.$getRowBottom$ = function $$DvtDataGrid$$$$$getRowBottom$$($row$$10$$, $bottom$$1$$) {
    var $colHeaderHeight$$3$$, $top$$8$$, $height$$20$$;
    $colHeaderHeight$$3$$ = this.$getColumnHeaderHeight$();
    if (null != $bottom$$1$$) {
      return $colHeaderHeight$$3$$ + $bottom$$1$$;
    }
    $top$$8$$ = this.$getElementDir$($row$$10$$, "top");
    $height$$20$$ = this.$calculateRowHeight$($row$$10$$);
    return isNaN($top$$8$$) || isNaN($height$$20$$) ? $colHeaderHeight$$3$$ : $colHeaderHeight$$3$$ + $top$$8$$ + $height$$20$$;
  };
  $DvtDataGrid$$.prototype.$addCellsToRow$ = function $$DvtDataGrid$$$$$addCellsToRow$$($cellSet$$4$$, $row$$11$$, $rowIndex$$, $renderer$$6$$, $isRowFetch$$, $columnStart$$4$$, $updateColumnRangeInfo$$, $columnBandingInterval$$2$$, $horizontalGridlines$$3$$, $verticalGridlines$$3$$, $bottom$$2$$) {
    var $isAppend$$5$$, $cellContent$$1$$, $firstColumn$$, $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$, $cellStyleClass_shimHeaderContext_styleClass$$2$$, $currentLeft$$, $dir$$5$$, $totalWidth$$, $columnCount$$2$$, $cellContext$$1_indexes$$5$$, $cellData$$, $j$$21$$, $cell$$1$$, $columnIndex$$, $selectionAffordanceAppend$$, $height$$21_rowKey$$, $shimHeader$$;
    $isAppend$$5$$ = $columnStart$$4$$ >= this.$m_startCol$;
    $firstColumn$$ = $row$$11$$.firstChild;
    $currentLeft$$ = $isRowFetch$$ || !$isAppend$$5$$ ? this.$m_startColPixel$ : this.$m_endColPixel$;
    this.$m_utils$.$isTouchDevice$() && this.$m_utils$.$containsCSSClassName$($row$$11$$.lastChild, this.$getMappedStyle$("toucharea")) && ($selectionAffordanceAppend$$ = this.$m_utils$.$containsCSSClassName$($row$$11$$.children[$row$$11$$.children.length - 2], this.$getMappedStyle$("toucharea")) ? $row$$11$$.children[$row$$11$$.children.length - 2] : $row$$11$$.lastChild);
    $dir$$5$$ = this.$m_resources$.$isRTLMode$() ? "right" : "left";
    $totalWidth$$ = 0;
    $columnCount$$2$$ = $cellSet$$4$$.getCount("column");
    for ($j$$21$$ = 0;$j$$21$$ < $columnCount$$2$$;$j$$21$$ += 1) {
      $columnIndex$$ = $isAppend$$5$$ || $isRowFetch$$ ? $columnStart$$4$$ + $j$$21$$ : $columnStart$$4$$ + ($columnCount$$2$$ - 1 - $j$$21$$);
      $cellContext$$1_indexes$$5$$ = {row:$rowIndex$$, column:$columnIndex$$};
      $cellData$$ = $cellSet$$4$$.getData($cellContext$$1_indexes$$5$$);
      $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$ = $cellSet$$4$$.getMetadata($cellContext$$1_indexes$$5$$);
      $cell$$1$$ = this.$createCellElement$();
      $cell$$1$$.setAttribute("tabIndex", -1);
      $cellContent$$1$$ = document.createElement("div");
      $cellContent$$1$$.className = this.$getMappedStyle$("cellcontent");
      $cell$$1$$.appendChild($cellContent$$1$$);
      $cellContext$$1_indexes$$5$$ = this.$createCellContext$($cellContext$$1_indexes$$5$$, $cellData$$, $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$, $cell$$1$$);
      $cell$$1$$.id = this.$_createCellId$($cellContext$$1_indexes$$5$$.keys);
      $cell$$1$$[this.$m_resources$.$getMappedAttribute$("context")] = $cellContext$$1_indexes$$5$$;
      null == this.$_getKey$($row$$11$$) && ($height$$21_rowKey$$ = $cellContext$$1_indexes$$5$$.keys.row, this.$_setKey$($row$$11$$, $height$$21_rowKey$$), -1 == this.$m_endRowHeader$ ? ($cellStyleClass_shimHeaderContext_styleClass$$2$$ = this.$createHeaderContext$("row", $rowIndex$$, null, {key:$height$$21_rowKey$$}, null, 0, 0, 1), $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$ = this.$m_options$.$getInlineStyle$("row", $cellStyleClass_shimHeaderContext_styleClass$$2$$), $cellStyleClass_shimHeaderContext_styleClass$$2$$ = 
      this.$m_options$.$getStyleClass$("row", $cellStyleClass_shimHeaderContext_styleClass$$2$$), $shimHeader$$ = document.createElement("div"), $shimHeader$$.style.cssText = $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$, $shimHeader$$.className = this.$getMappedStyle$("row") + " " + $cellStyleClass_shimHeaderContext_styleClass$$2$$, $height$$21_rowKey$$ = this.$getRowHeight$($shimHeader$$, $height$$21_rowKey$$)) : $height$$21_rowKey$$ = this.$getRowHeight$($row$$11$$, $height$$21_rowKey$$), 
      this.$setElementHeight$($row$$11$$, $height$$21_rowKey$$));
      $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$ = this.$m_options$.$getInlineStyle$("cell", $cellContext$$1_indexes$$5$$);
      null != $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$ && ($cell$$1$$.style.cssText = $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$);
      "" != $cell$$1$$.style.height && ($cell$$1$$.style.height = "");
      "" != $cell$$1$$.style.width && ($cell$$1$$.style.width = "");
      $cellStyleClass_shimHeaderContext_styleClass$$2$$ = 1 === Math.floor($columnIndex$$ / $columnBandingInterval$$2$$) % 2 ? this.$getMappedStyle$("cell") + " " + this.$getMappedStyle$("banded") + " " + this.$getMappedStyle$("formcontrol") : this.$getMappedStyle$("cell") + " " + this.$getMappedStyle$("formcontrol");
      $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$ = this.$m_options$.$getStyleClass$("cell", $cellContext$$1_indexes$$5$$);
      $cell$$1$$.className = null != $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$ ? $cellStyleClass_shimHeaderContext_styleClass$$2$$ + " " + $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$ : $cellStyleClass_shimHeaderContext_styleClass$$2$$;
      -1 != this.$m_endColHeader$ || 0 != $rowIndex$$ || this.$m_initialized$ ? $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$ = this.$getColumnWidth$($cell$$1$$, $cellContext$$1_indexes$$5$$.keys.column) : ($cellStyleClass_shimHeaderContext_styleClass$$2$$ = this.$createHeaderContext$("column", $columnIndex$$, null, {key:$cellContext$$1_indexes$$5$$.keys.column}, null, 0, 0, 1), $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$ = this.$m_options$.$getInlineStyle$("column", $cellStyleClass_shimHeaderContext_styleClass$$2$$), 
      $cellStyleClass_shimHeaderContext_styleClass$$2$$ = this.$m_options$.$getStyleClass$("column", $cellStyleClass_shimHeaderContext_styleClass$$2$$), $shimHeader$$ = document.createElement("div"), $shimHeader$$.style.cssText = $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$, $shimHeader$$.className = this.$getMappedStyle$("colheadercell") + " " + this.$getMappedStyle$("headercell") + " " + $cellStyleClass_shimHeaderContext_styleClass$$2$$, $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$ = 
      this.$getColumnWidth$($shimHeader$$, $cellContext$$1_indexes$$5$$.keys.column));
      this.$setElementWidth$($cell$$1$$, $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$);
      if ("hidden" === $verticalGridlines$$3$$ || this.$_isLastColumn$($columnIndex$$) && this.$getRowHeaderWidth$() + $currentLeft$$ + $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$ >= this.getWidth()) {
        "left" === $dir$$5$$ ? $cell$$1$$.style.borderRightStyle = "none" : $cell$$1$$.style.borderLeftStyle = "none";
      }
      "hidden" === $horizontalGridlines$$3$$ ? $cell$$1$$.style.borderBottomStyle = "none" : this.$_isLastRow$($rowIndex$$) && (null != $bottom$$2$$ && $columnIndex$$ == $columnStart$$4$$ && ($bottom$$2$$ += this.$getElementHeight$($row$$11$$)), this.$getRowBottom$($row$$11$$, $bottom$$2$$) >= this.getHeight() && ($cell$$1$$.style.borderBottomStyle = "none"));
      $isAppend$$5$$ || $isRowFetch$$ ? this.$setElementDir$($cell$$1$$, $currentLeft$$, $dir$$5$$) : this.$setElementDir$($cell$$1$$, $currentLeft$$ - $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$, $dir$$5$$);
      $isAppend$$5$$ || $isRowFetch$$ ? ($selectionAffordanceAppend$$ ? $row$$11$$.insertBefore($cell$$1$$, $selectionAffordanceAppend$$) : $row$$11$$.appendChild($cell$$1$$), $currentLeft$$ += $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$) : ($row$$11$$.insertBefore($cell$$1$$, $firstColumn$$), $firstColumn$$ = $cell$$1$$, $currentLeft$$ -= $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$);
      this.$_renderContent$($renderer$$6$$, $cellContext$$1_indexes$$5$$, $cellContent$$1$$, $cellData$$, this.$getMappedStyle$("celltext"));
      $updateColumnRangeInfo$$ && ($isAppend$$5$$ || $isRowFetch$$ ? this.$m_endColPixel$ += $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$ : this.$m_startColPixel$ -= $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$, $totalWidth$$ += $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$);
    }
    return $updateColumnRangeInfo$$ && 0 < $columnCount$$2$$ ? {avgWidth:$totalWidth$$ / $columnCount$$2$$, height:$height$$21_rowKey$$} : {avgWidth:null, height:$height$$21_rowKey$$};
  };
  $DvtDataGrid$$.prototype.$handleCellsFetchError$ = function $$DvtDataGrid$$$$$handleCellsFetchError$$($errorStatus$$, $cellRange$$3$$) {
    var $rowRange$$4$$, $columnRange$$4$$;
    this.$m_fetching$.cells = !1;
    this.$hideStatusText$();
    null == this.$m_databody$.firstChild ? this.$_shouldInitialize$() && this.$_handleInitialization$(!0) : ($rowRange$$4$$ = $cellRange$$3$$[0], $columnRange$$4$$ = $cellRange$$3$$[1], $columnRange$$4$$.start + $columnRange$$4$$.count - 1 > this.$m_endCol$ && (this.$m_stopColumnHeaderFetch$ = this.$m_stopColumnFetch$ = !0), $rowRange$$4$$.start + $rowRange$$4$$.count - 1 > this.$m_endRow$ && (this.$m_stopRowHeaderFetch$ = this.$m_stopRowFetch$ = !0));
  };
  $DvtDataGrid$$.prototype.$showStatusText$ = function $$DvtDataGrid$$$$$showStatusText$$() {
    var $left$$7_msg$$22$$;
    $left$$7_msg$$22$$ = this.$m_resources$.$getTranslatedText$("msgFetchingData");
    "block" != this.$m_status$.style.display && (this.$m_status$.textContent = $left$$7_msg$$22$$, this.$m_status$.style.display = "block", $left$$7_msg$$22$$ = this.getWidth() / 2 - this.$m_status$.offsetWidth / 2, this.$m_status$.style.left = $left$$7_msg$$22$$ + "px");
  };
  $DvtDataGrid$$.prototype.$hideStatusText$ = function $$DvtDataGrid$$$$$hideStatusText$$() {
    this.$m_status$.style.display = "none";
  };
  $DvtDataGrid$$.prototype.$getFocusableElementsInNode$ = function $$DvtDataGrid$$$$$getFocusableElementsInNode$$($node$$30$$, $skipTabIndexCheck$$) {
    var $inputElems$$, $nodes$$, $elem$$29$$, $nodeCount$$, $inputRegExp$$, $i$$157$$, $attr$$14$$;
    $inputElems$$ = [];
    $attr$$14$$ = this.$m_resources$.$getMappedAttribute$("tabMod");
    if (document.evaluate) {
      for ($nodes$$ = document.evaluate(".//*[@tabindex\x3e\x3d0]|.//*[@" + $attr$$14$$ + "\x3e\x3d0]|.//input|.//select|.//textarea|.//button|.//a|.//INPUT|.//SELECT|.//TEXTAREA|.//BUTTON|.//A", $node$$30$$, null, XPathResult.ANY_TYPE, null), $elem$$29$$ = $nodes$$.iterateNext();$elem$$29$$;) {
        !$elem$$29$$.disabled && "none" != $elem$$29$$.style.display && ($skipTabIndexCheck$$ || !$elem$$29$$.tabIndex || 0 < $elem$$29$$.tabIndex || 0 <= parseInt($elem$$29$$.getAttribute($attr$$14$$), 10)) && $inputElems$$.push($elem$$29$$), $elem$$29$$ = $nodes$$.iterateNext();
      }
    } else {
      for ($nodes$$ = $node$$30$$.getElementsByTagName("*"), $nodeCount$$ = $nodes$$.length, $inputRegExp$$ = /^INPUT|SELECT|BUTTON|^A\b|TEXTAREA/, $i$$157$$ = 0;$i$$157$$ < $nodeCount$$;$i$$157$$ += 1) {
        $elem$$29$$ = $nodes$$[$i$$157$$], $elem$$29$$.tagName.match($inputRegExp$$) && !$elem$$29$$.disabled && "none" != $elem$$29$$.style.display && ($skipTabIndexCheck$$ || !$elem$$29$$.tabIndex || 0 <= $elem$$29$$.tabIndex || 0 <= parseInt($elem$$29$$.getAttribute($attr$$14$$), 10)) && $inputElems$$.push($elem$$29$$);
      }
    }
    return $inputElems$$;
  };
  $DvtDataGrid$$.prototype.$_disableAllFocusableElements$ = function $$DvtDataGrid$$$$$_disableAllFocusableElements$$($cell$$2_focusElems$$) {
    var $i$$158$$, $tabIndex$$, $attr$$15$$;
    $attr$$15$$ = this.$m_resources$.$getMappedAttribute$("tabMod");
    $cell$$2_focusElems$$ = this.$getFocusableElementsInNode$($cell$$2_focusElems$$);
    for ($i$$158$$ = 0;$i$$158$$ < $cell$$2_focusElems$$.length;$i$$158$$++) {
      if ($tabIndex$$ = parseInt($cell$$2_focusElems$$[$i$$158$$].tabIndex, 10), isNaN($tabIndex$$) || 0 <= $tabIndex$$) {
        $cell$$2_focusElems$$[$i$$158$$].setAttribute($attr$$15$$, isNaN($tabIndex$$) ? -1 : $tabIndex$$), $cell$$2_focusElems$$[$i$$158$$].setAttribute("tabIndex", -1);
      }
    }
  };
  $DvtDataGrid$$.prototype.$_enableAllFocusableElements$ = function $$DvtDataGrid$$$$$_enableAllFocusableElements$$($cell$$3_focusElems$$1$$) {
    var $i$$159$$, $tabIndex$$1$$, $attr$$16$$;
    $attr$$16$$ = this.$m_resources$.$getMappedAttribute$("tabMod");
    $cell$$3_focusElems$$1$$ = this.$getFocusableElementsInNode$($cell$$3_focusElems$$1$$, !1);
    for ($i$$159$$ = 0;$i$$159$$ < $cell$$3_focusElems$$1$$.length;$i$$159$$++) {
      $tabIndex$$1$$ = parseInt($cell$$3_focusElems$$1$$[$i$$159$$].getAttribute($attr$$16$$), 10), $cell$$3_focusElems$$1$$[$i$$159$$].removeAttribute($attr$$16$$), -1 == $tabIndex$$1$$ ? $cell$$3_focusElems$$1$$[$i$$159$$].removeAttribute("tabIndex") : $cell$$3_focusElems$$1$$[$i$$159$$].setAttribute("tabIndex", $tabIndex$$1$$);
    }
  };
  $DvtDataGrid$$.prototype.$_isFocusableElementBeforeCell$ = function $$DvtDataGrid$$$$$_isFocusableElementBeforeCell$$($elem$$32$$) {
    if (null == $elem$$32$$ || $elem$$32$$ == this.$getRootElement$() || this.$m_utils$.$containsCSSClassName$($elem$$32$$, this.$getMappedStyle$("cell"))) {
      return!1;
    }
    var $tagName$$3$$ = $elem$$32$$.tagName;
    return "INPUT" === $tagName$$3$$ || "TEXTAREA" === $tagName$$3$$ || "SELECT" === $tagName$$3$$ || "BUTTON" === $tagName$$3$$ || "A" === $tagName$$3$$ || this.$m_utils$.$containsCSSClassName$($elem$$32$$, this.$getMappedStyle$("active")) || null != $elem$$32$$.getAttribute("tabIndex") && 0 <= parseInt($elem$$32$$.getAttribute("tabIndex"), 10) && this.$findCell$($elem$$32$$) != $elem$$32$$ ? !0 : this.$_isFocusableElementBeforeCell$($elem$$32$$.parentNode);
  };
  $DvtDataGrid$$.prototype.$_setFocusToFirstFocusableElement$ = function $$DvtDataGrid$$$$$_setFocusToFirstFocusableElement$$($elem$$33_elems$$) {
    var $firstElement$$;
    $elem$$33_elems$$ = this.$getFocusableElementsInNode$($elem$$33_elems$$, !0);
    if (0 < $elem$$33_elems$$.length) {
      $firstElement$$ = $elem$$33_elems$$[0];
      $firstElement$$.focus();
      if ($firstElement$$.setSelectionRange && $firstElement$$.value) {
        try {
          $firstElement$$.setSelectionRange($firstElement$$.value.length, $firstElement$$.value.length);
        } catch ($e$$51$$) {
        }
      }
      !0 === this.$_overwriteFlag$ && "function" === typeof $elem$$33_elems$$[0].select && $firstElement$$.select();
      return!0;
    }
    return!1;
  };
  $DvtDataGrid$$.prototype.$handleScroll$ = function $$DvtDataGrid$$$$$handleScroll$$($event$$112_scrollLeft$$) {
    if (!this.$m_utils$.$isTouchDevice$()) {
      if (!0 == this.$m_silentScroll$) {
        this.$m_silentScroll$ = !1;
      } else {
        var $scroller$$9$$;
        $event$$112_scrollLeft$$ || ($event$$112_scrollLeft$$ = window.event);
        $scroller$$9$$ = $event$$112_scrollLeft$$.target ? $event$$112_scrollLeft$$.target : $event$$112_scrollLeft$$.srcElement;
        $event$$112_scrollLeft$$ = this.$m_utils$.$getElementScrollLeft$($scroller$$9$$);
        this.scrollTo($event$$112_scrollLeft$$, $scroller$$9$$.scrollTop);
      }
    }
  };
  $DvtDataGrid$$.prototype.$_getMaxScrollWidth$ = function $$DvtDataGrid$$$$$_getMaxScrollWidth$$() {
    return this.$_isCountUnknownOrHighwatermark$("column") && !this.$m_stopColumnFetch$ ? Number.MAX_VALUE : this.$m_scrollWidth$;
  };
  $DvtDataGrid$$.prototype.$_getMaxScrollHeight$ = function $$DvtDataGrid$$$$$_getMaxScrollHeight$$() {
    return this.$_isCountUnknownOrHighwatermark$("row") && !this.$m_stopRowFetch$ ? Number.MAX_VALUE : this.$m_scrollHeight$;
  };
  $DvtDataGrid$$.prototype.scroll = function $$DvtDataGrid$$$$scroll$($options$$228_scrollTop$$1$$) {
    var $scrollLeft$$1$$;
    null != $options$$228_scrollTop$$1$$.position && ($scrollLeft$$1$$ = Math.max(0, Math.min(this.$_getMaxScrollWidth$(), $options$$228_scrollTop$$1$$.position.scrollX)), $options$$228_scrollTop$$1$$ = Math.max(0, Math.min(this.$_getMaxScrollHeight$(), $options$$228_scrollTop$$1$$.position.scrollY)), this.$_initiateScroll$($scrollLeft$$1$$, $options$$228_scrollTop$$1$$));
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.scroll", $DvtDataGrid$$.prototype.scroll, void 0);
  $DvtDataGrid$$.prototype.$scrollDelta$ = function $$DvtDataGrid$$$$$scrollDelta$$($deltaX$$, $deltaY$$1$$) {
    var $scrollLeft$$2$$, $scrollTop$$2$$;
    0 != $deltaX$$ && 0 != $deltaY$$1$$ && (Math.abs($deltaX$$) > Math.abs($deltaY$$1$$) ? ($deltaY$$1$$ = 0, this.$m_extraScrollOverY$ = null) : ($deltaX$$ = 0, this.$m_extraScrollOverX$ = null));
    $scrollLeft$$2$$ = Math.max(0, Math.min(this.$_getMaxScrollWidth$(), this.$m_currentScrollLeft$ - $deltaX$$));
    $scrollTop$$2$$ = Math.max(0, Math.min(this.$_getMaxScrollHeight$(), this.$m_currentScrollTop$ - $deltaY$$1$$));
    this.$_initiateScroll$($scrollLeft$$2$$, $scrollTop$$2$$);
  };
  $DvtDataGrid$$.prototype.$_initiateScroll$ = function $$DvtDataGrid$$$$$_initiateScroll$$($scrollLeft$$3$$, $scrollTop$$3$$) {
    this.$m_utils$.$isTouchDevice$() ? this.scrollTo($scrollLeft$$3$$, $scrollTop$$3$$) : (this.$m_utils$.$setElementScrollLeft$(this.$m_scroller$, $scrollLeft$$3$$), this.$m_scroller$.scrollTop = $scrollTop$$3$$);
  };
  $DvtDataGrid$$.prototype.$_shouldScrollDatabody$ = function $$DvtDataGrid$$$$$_shouldScrollDatabody$$($scrollLeft$$4$$, $scrollTop$$4$$) {
    var $viewportRight$$1$$, $viewportBottom$$1$$;
    $viewportRight$$1$$ = $scrollLeft$$4$$ + this.$getElementWidth$(this.$m_databody$);
    $viewportBottom$$1$$ = $scrollTop$$4$$ + this.$getElementHeight$(this.$m_databody$);
    return this.$m_endRowPixel$ < $viewportBottom$$1$$ || this.$m_startRowPixel$ > $scrollTop$$4$$ || this.$m_endColPixel$ < $viewportRight$$1$$ - 2 || this.$m_startColPixel$ > $scrollLeft$$4$$ ? !1 : !0;
  };
  $DvtDataGrid$$.prototype.$_disableTouchScrollAnimation$ = function $$DvtDataGrid$$$$$_disableTouchScrollAnimation$$() {
    this.$m_databody$.firstChild.style.webkitTransitionDuration = "0ms";
    this.$m_rowHeader$.firstChild.style.webkitTransitionDuration = "0ms";
    this.$m_colHeader$.firstChild.style.webkitTransitionDuration = "0ms";
  };
  $DvtDataGrid$$.prototype.scrollTo = function $$DvtDataGrid$$$$scrollTo$($scrollLeft$$5$$, $scrollTop$$5$$) {
    this.$m_currentScrollLeft$ = $scrollLeft$$5$$;
    this.$m_currentScrollTop$ = $scrollTop$$5$$;
    if (!this.$m_utils$.$isTouchDevice$() && ($scrollLeft$$5$$ + this.$getViewportWidth$() < this.$m_startColPixel$ || $scrollLeft$$5$$ > this.$m_endColPixel$ || $scrollTop$$5$$ + this.$getViewportHeight$() < this.$m_startRowPixel$ || $scrollTop$$5$$ > this.$m_endRowPixel$ ? this.$handleLongScroll$($scrollLeft$$5$$, $scrollTop$$5$$) : this.$fillViewport$($scrollLeft$$5$$, $scrollTop$$5$$), !this.$_shouldScrollDatabody$($scrollLeft$$5$$, $scrollTop$$5$$))) {
      this.$m_stopDatabodyScroll$ = !0;
      return;
    }
    this.$m_stopDatabodyScroll$ = !1;
    this.$_syncScroller$();
    this.$_adjustScrollerSize$();
    null != this.$m_cellToFocus$ && (this.$m_cellToFocus$.focus(), this.$m_cellToFocus$ = null);
    null != this.$m_scrollIndexAfterFetch$ && this.$_isInViewport$(this.$m_scrollIndexAfterFetch$) === $DvtDataGrid$$.$INSIDE$ && (this.$_isDatabodyCellActive$() && this.$m_scrollIndexAfterFetch$.row == this.$m_active$.indexes.row && this.$m_scrollIndexAfterFetch$.column == this.$m_active$.indexes.column && this.$_highlightActive$(), this.$m_scrollIndexAfterFetch$ = null);
  };
  $DvtDataGrid$$.prototype.$_scrollTransitionEnd$ = function $$DvtDataGrid$$$$$_scrollTransitionEnd$$() {
    var $databody$$7$$;
    null != this.$m_scrollTransitionEnd$ && ($databody$$7$$ = this.$m_databody$.firstChild, $databody$$7$$.removeEventListener("webkitTransitionEnd", this.$m_scrollTransitionEnd$));
    this.$_isSelectionEnabled$() && this.$_scrollTouchSelectionAffordance$();
    this.fireEvent("scroll", {event:null, ui:{scrollX:this.$m_currentScrollLeft$, scrollY:this.$m_currentScrollTop$}});
    this.$m_currentScrollLeft$ + this.$getViewportWidth$() < this.$m_startColPixel$ || this.$m_currentScrollLeft$ > this.$m_endColPixel$ || this.$m_currentScrollTop$ + this.$getViewportHeight$() < this.$m_startRowPixel$ || this.$m_currentScrollTop$ > this.$m_endRowPixel$ ? this.$handleLongScroll$(this.$m_currentScrollLeft$, this.$m_currentScrollTop$) : this.$fillViewport$(this.$m_currentScrollLeft$, this.$m_currentScrollTop$);
  };
  $DvtDataGrid$$.prototype.$_bounceBack$ = function $$DvtDataGrid$$$$$_bounceBack$$() {
    var $scrollLeft$$6$$, $scrollTop$$6$$, $databody$$8$$, $colHeader$$3$$, $rowHeader$$7$$;
    $scrollLeft$$6$$ = this.$m_currentScrollLeft$;
    $scrollTop$$6$$ = this.$m_currentScrollTop$;
    $databody$$8$$ = this.$m_databody$.firstChild;
    $colHeader$$3$$ = this.$m_colHeader$.firstChild;
    $rowHeader$$7$$ = this.$m_rowHeader$.firstChild;
    $databody$$8$$.removeEventListener("webkitTransitionEnd", this.$m_bounceBack$);
    $databody$$8$$.style.webkitTransitionDuration = $DvtDataGrid$$.$BOUNCE_ANIMATION_DURATION$ + "ms";
    $colHeader$$3$$.style.webkitTransitionDuration = $DvtDataGrid$$.$BOUNCE_ANIMATION_DURATION$ + "ms";
    $rowHeader$$7$$.style.webkitTransitionDuration = $DvtDataGrid$$.$BOUNCE_ANIMATION_DURATION$ + "ms";
    null == this.$m_scrollTransitionEnd$ && (this.$m_scrollTransitionEnd$ = this.$_scrollTransitionEnd$.bind(this));
    $databody$$8$$.addEventListener("webkitTransitionEnd", this.$m_scrollTransitionEnd$);
    this.$m_resources$.$isRTLMode$() ? ($databody$$8$$.style.webkitTransform = "translate3d(" + $scrollLeft$$6$$ + "px, " + -$scrollTop$$6$$ + "px, 0)", $colHeader$$3$$.style.webkitTransform = "translate3d(" + $scrollLeft$$6$$ + "px, 0, 0)") : ($databody$$8$$.style.webkitTransform = "translate3d(" + -$scrollLeft$$6$$ + "px, " + -$scrollTop$$6$$ + "px, 0)", $colHeader$$3$$.style.webkitTransform = "translate3d(" + -$scrollLeft$$6$$ + "px, 0, 0)");
    $rowHeader$$7$$.style.webkitTransform = "translate3d(0, " + -$scrollTop$$6$$ + "px, 0)";
    this.$m_extraScrollOverY$ = this.$m_extraScrollOverX$ = null;
  };
  $DvtDataGrid$$.prototype.$_syncScroller$ = function $$DvtDataGrid$$$$$_syncScroller$$() {
    var $scrollLeft$$7$$, $scrollTop$$7$$, $databody$$9$$, $colHeader$$4$$, $rowHeader$$8$$, $dir$$7$$, $prevScrollLeft$$, $prevScrollTop$$;
    $scrollLeft$$7$$ = this.$m_currentScrollLeft$;
    $scrollTop$$7$$ = this.$m_currentScrollTop$;
    $databody$$9$$ = this.$m_databody$.firstChild;
    $colHeader$$4$$ = this.$m_colHeader$.firstChild;
    $rowHeader$$8$$ = this.$m_rowHeader$.firstChild;
    this.$m_utils$.$isTouchDevice$() && window.hasOwnProperty("WebKitCSSMatrix") ? (null != this.$m_extraScrollOverX$ || null != this.$m_extraScrollOverY$ ? (null != this.$m_extraScrollOverX$ ? $scrollLeft$$7$$ += this.$m_extraScrollOverX$ : $scrollTop$$7$$ += this.$m_extraScrollOverY$, null == this.$m_bounceBack$ && (this.$m_bounceBack$ = this.$_bounceBack$.bind(this)), $databody$$9$$.addEventListener("webkitTransitionEnd", this.$m_bounceBack$)) : "0ms" == $databody$$9$$.style.webkitTransitionDuration ? 
    this.$_scrollTransitionEnd$() : (null == this.$m_scrollTransitionEnd$ && (this.$m_scrollTransitionEnd$ = this.$_scrollTransitionEnd$.bind(this)), $databody$$9$$.addEventListener("webkitTransitionEnd", this.$m_scrollTransitionEnd$)), this.$m_resources$.$isRTLMode$() ? ($databody$$9$$.style.webkitTransform = "translate3d(" + $scrollLeft$$7$$ + "px, " + -$scrollTop$$7$$ + "px, 0)", $colHeader$$4$$.style.webkitTransform = "translate3d(" + $scrollLeft$$7$$ + "px, 0, 0)") : ($databody$$9$$.style.webkitTransform = 
    "translate3d(" + -$scrollLeft$$7$$ + "px, " + -$scrollTop$$7$$ + "px, 0)", $colHeader$$4$$.style.webkitTransform = "translate3d(" + -$scrollLeft$$7$$ + "px, 0, 0)"), $rowHeader$$8$$.style.webkitTransform = "translate3d(0, " + -$scrollTop$$7$$ + "px, 0)") : ($dir$$7$$ = this.$m_resources$.$isRTLMode$() ? "right" : "left", $prevScrollLeft$$ = this.$getElementDir$($databody$$9$$, $dir$$7$$), $prevScrollTop$$ = this.$getElementDir$($databody$$9$$, "top"), this.$setElementDir$($databody$$9$$, -$scrollLeft$$7$$, 
    $dir$$7$$), this.$setElementDir$($databody$$9$$, -$scrollTop$$7$$, "top"), this.$setElementDir$($colHeader$$4$$, -$scrollLeft$$7$$, $dir$$7$$), this.$setElementDir$($rowHeader$$8$$, -$scrollTop$$7$$, "top"), $prevScrollTop$$ === -$scrollTop$$7$$ && $prevScrollLeft$$ === -$scrollLeft$$7$$ || this.fireEvent("scroll", {event:null, ui:{scrollX:$scrollLeft$$7$$, scrollY:$scrollTop$$7$$}}));
  };
  $DvtDataGrid$$.prototype.$_adjustScrollerSize$ = function $$DvtDataGrid$$$$$_adjustScrollerSize$$() {
    var $scrollerContent$$2$$, $scrollerContentHeight$$1$$, $scrollerContentWidth$$1$$, $databodyContent$$2$$;
    $scrollerContent$$2$$ = this.$m_scroller$.firstChild;
    $scrollerContentHeight$$1$$ = this.$getElementHeight$($scrollerContent$$2$$);
    $scrollerContentWidth$$1$$ = this.$getElementWidth$($scrollerContent$$2$$);
    $databodyContent$$2$$ = this.$m_databody$.firstChild;
    if (this.$m_endRowPixel$ > $scrollerContentHeight$$1$$ || this.$m_dataSource$.getCount("row") == this.$m_endRow$ + 1 && !this.$_isCountUnknown$("row") && this.$m_endRowPixel$ < $scrollerContentHeight$$1$$) {
      this.$setElementHeight$($scrollerContent$$2$$, this.$m_endRowPixel$), this.$setElementHeight$($databodyContent$$2$$, this.$m_endRowPixel$);
    }
    if (this.$m_endColPixel$ > $scrollerContentWidth$$1$$ || this.$m_dataSource$.getCount("column") == this.$m_endCol$ + 1 && !this.$_isCountUnknown$("column") && this.$m_endColPixel$ < $scrollerContentWidth$$1$$) {
      this.$setElementWidth$($scrollerContent$$2$$, this.$m_endColPixel$), this.$setElementWidth$($databodyContent$$2$$, this.$m_endColPixel$);
    }
  };
  $DvtDataGrid$$.prototype.$handleLongScroll$ = function $$DvtDataGrid$$$$$handleLongScroll$$($scrollLeft$$8$$, $scrollTop$$8$$) {
    var $startRow$$, $startCol$$, $startRowPixel$$, $startColPixel$$;
    $startRow$$ = Math.round(Math.max(0, $scrollTop$$8$$ - this.getHeight() / 2) / this.$m_avgRowHeight$);
    $startCol$$ = Math.round(Math.max(0, $scrollLeft$$8$$ - this.getWidth() / 2) / this.$m_avgColWidth$);
    $startRowPixel$$ = $startRow$$ * this.$m_avgRowHeight$;
    $startColPixel$$ = $startCol$$ * this.$m_avgColWidth$;
    this.$m_startRow$ = $startRow$$;
    this.$m_endRow$ = -1;
    this.$m_startRowHeader$ = $startRow$$;
    this.$m_endRowHeader$ = -1;
    this.$m_endRowHeaderPixel$ = this.$m_startRowHeaderPixel$ = this.$m_endRowPixel$ = this.$m_startRowPixel$ = $startRowPixel$$;
    this.$m_startCol$ = $startCol$$;
    this.$m_endCol$ = -1;
    this.$m_startColHeader$ = $startCol$$;
    this.$m_endColHeader$ = -1;
    this.$m_endColHeaderPixel$ = this.$m_startColHeaderPixel$ = this.$m_endColPixel$ = this.$m_startColPixel$ = $startColPixel$$;
    this.fetchHeaders("row", $startRow$$, this.$m_rowHeader$, void 0, {success:function($headerSet$$3$$, $headerRange$$4$$) {
      this.$handleRowHeadersFetchSuccessForLongScroll$($headerSet$$3$$, $headerRange$$4$$);
    }});
    this.fetchHeaders("column", $startCol$$, this.$m_colHeader$, void 0, {success:function($headerSet$$4$$, $headerRange$$5$$) {
      this.$handleColumnHeadersFetchSuccessForLongScroll$($headerSet$$4$$, $headerRange$$5$$);
    }});
    this.fetchCells(this.$m_databody$, this.$m_scroller$, $startRow$$, $startCol$$, null, null, {success:function($cellSet$$5$$, $cellRange$$4$$) {
      this.$handleCellsFetchSuccessForLongScroll$($cellSet$$5$$, $cellRange$$4$$);
    }});
  };
  $DvtDataGrid$$.prototype.$handleRowHeadersFetchSuccessForLongScroll$ = function $$DvtDataGrid$$$$$handleRowHeadersFetchSuccessForLongScroll$$($headerSet$$5$$, $headerRange$$6$$) {
    var $headerContent$$1$$ = this.$m_rowHeader$.firstChild;
    null != $headerContent$$1$$ && this.$m_utils$.empty($headerContent$$1$$);
    this.$handleHeadersFetchSuccess$($headerSet$$5$$, $headerRange$$6$$);
  };
  $DvtDataGrid$$.prototype.$handleColumnHeadersFetchSuccessForLongScroll$ = function $$DvtDataGrid$$$$$handleColumnHeadersFetchSuccessForLongScroll$$($headerSet$$6$$, $headerRange$$7$$) {
    var $headerContent$$2$$ = this.$m_colHeader$.firstChild;
    null != $headerContent$$2$$ && this.$m_utils$.empty($headerContent$$2$$);
    this.$handleHeadersFetchSuccess$($headerSet$$6$$, $headerRange$$7$$);
  };
  $DvtDataGrid$$.prototype.$handleCellsFetchSuccessForLongScroll$ = function $$DvtDataGrid$$$$$handleCellsFetchSuccessForLongScroll$$($cellSet$$6$$, $cellRange$$5$$) {
    var $databodyContent$$3$$ = this.$m_databody$.firstChild;
    null != $databodyContent$$3$$ && this.$m_utils$.empty($databodyContent$$3$$);
    this.$handleCellsFetchSuccess$($cellSet$$6$$, $cellRange$$5$$);
  };
  $DvtDataGrid$$.prototype.$fillViewport$ = function $$DvtDataGrid$$$$$fillViewport$$($scrollLeft$$9$$, $scrollTop$$9$$) {
    var $viewportBottom$$2_viewportRight$$2$$, $fetchStartCol_fetchStartRow$$, $fetchSize$$1$$;
    if (this.$_isScrollBackToEditable$()) {
      $viewportBottom$$2_viewportRight$$2$$ = $scrollLeft$$9$$ + this.$getElementWidth$(this.$m_scroller$);
      !this.$m_stopColumnHeaderFetch$ && ($viewportBottom$$2_viewportRight$$2$$ > this.$m_endColHeaderPixel$ || $viewportBottom$$2_viewportRight$$2$$ == this.$m_endColHeaderPixel$ && this.$_isCountUnknownOrHighwatermark$("column")) ? (this.fetchHeaders("column", this.$m_endColHeader$ + 1, this.$m_colHeader$), !this.$_isHighWatermarkScrolling$() && this.$m_endColHeader$ - this.$m_startColHeader$ > this.$MAX_COLUMN_THRESHOLD$ && this.$removeColumnHeadersFromLeft$(this.$m_colHeader$)) : $scrollLeft$$9$$ < 
      this.$m_startColHeaderPixel$ && ($fetchStartCol_fetchStartRow$$ = Math.max(0, this.$m_startColHeader$ - this.$getFetchSize$("column")), $fetchSize$$1$$ = Math.max(0, this.$m_startColHeader$ - $fetchStartCol_fetchStartRow$$), this.fetchHeaders("column", $fetchStartCol_fetchStartRow$$, this.$m_colHeader$, $fetchSize$$1$$), !this.$_isHighWatermarkScrolling$() && this.$m_endColHeader$ - this.$m_startColHeader$ > this.$MAX_COLUMN_THRESHOLD$ && this.$removeColumnHeadersFromRight$(this.$m_colHeader$));
      !this.$m_stopColumnFetch$ && ($viewportBottom$$2_viewportRight$$2$$ > this.$m_endColPixel$ || $viewportBottom$$2_viewportRight$$2$$ == this.$m_endColPixel$ && this.$_isCountUnknownOrHighwatermark$("column")) ? (this.fetchCells(this.$m_databody$, this.$m_scroller$, this.$m_startRow$, this.$m_endCol$ + 1, this.$m_endRow$ - this.$m_startRow$ + 1), !this.$_isHighWatermarkScrolling$() && this.$m_endCol$ - this.$m_startCol$ > this.$MAX_COLUMN_THRESHOLD$ && this.$removeColumnsFromLeft$(this.$m_databody$)) : 
      $scrollLeft$$9$$ < this.$m_startColPixel$ && ($fetchStartCol_fetchStartRow$$ = Math.max(0, this.$m_startCol$ - this.$getFetchSize$("column")), $fetchSize$$1$$ = Math.max(0, this.$m_startCol$ - $fetchStartCol_fetchStartRow$$), this.fetchCells(this.$m_databody$, this.$m_scroller$, this.$m_startRow$, $fetchStartCol_fetchStartRow$$, this.$m_endRow$ - this.$m_startRow$ + 1, $fetchSize$$1$$), !this.$_isHighWatermarkScrolling$() && this.$m_endCol$ - this.$m_startCol$ > this.$MAX_COLUMN_THRESHOLD$ && 
      this.$removeColumnsFromRight$(this.$m_databody$));
      $viewportBottom$$2_viewportRight$$2$$ = $scrollTop$$9$$ + this.$getElementHeight$(this.$m_scroller$);
      if (!this.$m_stopRowHeaderFetch$ && ($viewportBottom$$2_viewportRight$$2$$ > this.$m_endRowHeaderPixel$ || $viewportBottom$$2_viewportRight$$2$$ == this.$m_endRowHeaderPixel$ && this.$_isCountUnknownOrHighwatermark$("row"))) {
        this.fetchHeaders("row", this.$m_endRowHeader$ + 1, this.$m_rowHeader$), !this.$_isHighWatermarkScrolling$() && this.$m_endRowHeader$ - this.$m_startRowHeader$ > this.$MAX_ROW_THRESHOLD$ && this.$removeRowHeadersFromTop$(this.$m_rowHeader$);
      } else {
        if (Math.max(0, $scrollTop$$9$$ - 0) < this.$m_startRowHeaderPixel$) {
          if (0 == this.$m_startRowHeader$) {
            return;
          }
          $fetchStartCol_fetchStartRow$$ = Math.max(0, this.$m_startRowHeader$ - this.$getFetchSize$("row"));
          $fetchSize$$1$$ = Math.max(0, this.$m_startRowHeader$ - $fetchStartCol_fetchStartRow$$);
          this.fetchHeaders("row", $fetchStartCol_fetchStartRow$$, this.$m_rowHeader$, $fetchSize$$1$$);
          !this.$_isHighWatermarkScrolling$() && this.$m_endRowHeader$ - this.$m_startRowHeader$ > this.$MAX_ROW_THRESHOLD$ && this.$removeRowHeadersFromBottom$(this.$m_rowHeader$);
        }
      }
      !this.$m_stopRowFetch$ && ($viewportBottom$$2_viewportRight$$2$$ > this.$m_endRowPixel$ || $viewportBottom$$2_viewportRight$$2$$ == this.$m_endRowPixel$ && this.$_isCountUnknownOrHighwatermark$("row")) ? (this.$fetchCellsToBottom$(), !this.$_isHighWatermarkScrolling$() && this.$m_endRow$ - this.$m_startRow$ > this.$MAX_ROW_THRESHOLD$ && this.$removeRowsFromTop$(this.$m_databody$)) : Math.max(0, $scrollTop$$9$$ - 0) < this.$m_startRowPixel$ && 0 != this.$m_startRow$ && (this.$fetchCellsToTop$(), 
      !this.$_isHighWatermarkScrolling$() && this.$m_endRow$ - this.$m_startRow$ > this.$MAX_ROW_THRESHOLD$ && this.$removeRowsFromBottom$(this.$m_databody$));
    }
  };
  $DvtDataGrid$$.prototype.$_isScrollBackToEditable$ = function $$DvtDataGrid$$$$$_isScrollBackToEditable$$() {
    var $currentMode$$ = this.$_getCurrentMode$(), $cell$$4$$ = this.$_getActiveElement$();
    return "edit" == $currentMode$$ && this.$_isCellGoingToBeRemoved$($cell$$4$$) ? this.$_handleExitEdit$(null, $cell$$4$$) : !0;
  };
  $DvtDataGrid$$.prototype.$_isCellGoingToBeRemoved$ = function $$DvtDataGrid$$$$$_isCellGoingToBeRemoved$$($cell$$5_width$$20$$) {
    var $height$$22_left$$8$$, $top$$9$$;
    if (!this.$_isHighWatermarkScrolling$() && (this.$m_endRow$ - this.$m_startRow$ > this.$MAX_ROW_THRESHOLD$ && ($top$$9$$ = this.$getElementDir$($cell$$5_width$$20$$.parentNode, "top"), $height$$22_left$$8$$ = this.$getElementHeight$($cell$$5_width$$20$$), $top$$9$$ + $height$$22_left$$8$$ < this.$m_currentScrollTop$ || $top$$9$$ < this.$m_currentScrollTop$ + this.$getViewportHeight$()) || this.$m_endCol$ - this.$m_startCol$ > this.$MAX_COLUMN_THRESHOLD$ && ($height$$22_left$$8$$ = this.$getElementDir$($cell$$5_width$$20$$, 
    "left"), $cell$$5_width$$20$$ = this.$getElementWidth$($cell$$5_width$$20$$), $height$$22_left$$8$$ + $cell$$5_width$$20$$ < this.$m_currentScrollLeft$ || $height$$22_left$$8$$ < this.$m_currentScrollLeft$ + this.$getViewportHeight$()))) {
      return!0;
    }
  };
  $DvtDataGrid$$.prototype.$fetchCellsToBottom$ = function $$DvtDataGrid$$$$$fetchCellsToBottom$$() {
    this.fetchCells(this.$m_databody$, this.$m_scroller$, this.$m_endRow$ + 1, this.$m_startCol$, null, this.$m_endCol$ - this.$m_startCol$ + 1);
  };
  $DvtDataGrid$$.prototype.$fetchCellsToTop$ = function $$DvtDataGrid$$$$$fetchCellsToTop$$() {
    var $fetchSize$$2$$, $fetchStartRow$$1$$;
    $fetchStartRow$$1$$ = Math.max(0, this.$m_startRow$ - this.$getFetchSize$("row"));
    $fetchSize$$2$$ = Math.max(0, this.$m_startRow$ - $fetchStartRow$$1$$);
    this.fetchCells(this.$m_databody$, this.$m_scroller$, $fetchStartRow$$1$$, this.$m_startCol$, $fetchSize$$2$$, this.$m_endCol$ - this.$m_startCol$ + 1);
  };
  $DvtDataGrid$$.prototype.$removeColumnHeadersFromLeft$ = function $$DvtDataGrid$$$$$removeColumnHeadersFromLeft$$($colHeader$$5_colHeaderContent_returnVal$$6$$) {
    $colHeader$$5_colHeaderContent_returnVal$$6$$ = $colHeader$$5_colHeaderContent_returnVal$$6$$.firstChild;
    this.$m_startColHeaderPixel$ >= this.$m_currentScrollLeft$ - 0 || ($colHeader$$5_colHeaderContent_returnVal$$6$$ = this.$removeColumnHeadersFromLeftOfContainer$($colHeader$$5_colHeaderContent_returnVal$$6$$, null, this.$m_startColHeaderPixel$, 0), this.$m_startColHeaderPixel$ += $colHeader$$5_colHeaderContent_returnVal$$6$$.widthChange, this.$m_startColHeader$ += $colHeader$$5_colHeaderContent_returnVal$$6$$.extentChange);
  };
  $DvtDataGrid$$.prototype.$removeColumnHeadersFromLeftOfContainer$ = function $$DvtDataGrid$$$$$removeColumnHeadersFromLeftOfContainer$$($columnHeadersContainer_returnVal$$7$$, $firstChild$$1$$, $resizerWidth$$, $colThreshold$$1$$) {
    var $element$$79$$, $isColumnHeader$$, $columnHeader$$1$$, $width$$21$$, $removedColumnsWidth$$ = 0, $removedColumns$$ = 0;
    $element$$79$$ = null == $firstChild$$1$$ ? $columnHeadersContainer_returnVal$$7$$.firstChild : $firstChild$$1$$.nextSibling;
    if (null == $element$$79$$) {
      return{extentChange:0, widthChange:0};
    }
    $columnHeader$$1$$ = ($isColumnHeader$$ = this.$m_utils$.$containsCSSClassName$($element$$79$$, this.$getMappedStyle$("colheadercell"))) ? $element$$79$$ : $element$$79$$.firstChild;
    for ($width$$21$$ = this.$getElementWidth$($columnHeader$$1$$);$resizerWidth$$ + $width$$21$$ < this.$m_currentScrollLeft$ - $colThreshold$$1$$;) {
      this.$_remove$($element$$79$$);
      $removedColumnsWidth$$ += $width$$21$$;
      $removedColumns$$ += $isColumnHeader$$ ? 1 : this.$_getAttribute$($element$$79$$, "extent");
      $resizerWidth$$ += $width$$21$$;
      $element$$79$$ = null == $firstChild$$1$$ ? $columnHeadersContainer_returnVal$$7$$.firstChild : $firstChild$$1$$.nextSibling;
      if (null == $element$$79$$) {
        return{extentChange:$removedColumns$$, widthChange:$removedColumnsWidth$$};
      }
      $columnHeader$$1$$ = ($isColumnHeader$$ = this.$m_utils$.$containsCSSClassName$($element$$79$$, this.$getMappedStyle$("colheadercell"))) ? $element$$79$$ : $element$$79$$.firstChild;
      $width$$21$$ = this.$getElementWidth$($columnHeader$$1$$);
    }
    $isColumnHeader$$ || ($columnHeadersContainer_returnVal$$7$$ = this.$removeColumnHeadersFromLeftOfContainer$($element$$79$$, $element$$79$$.firstChild, $resizerWidth$$, $colThreshold$$1$$), this.$_setAttribute$($element$$79$$, "start", this.$_getAttribute$($element$$79$$, "start") + $columnHeadersContainer_returnVal$$7$$.extentChange), this.$_setAttribute$($element$$79$$, "extent", this.$_getAttribute$($element$$79$$, "extent") - $columnHeadersContainer_returnVal$$7$$.extentChange), this.$setElementDir$($columnHeader$$1$$, 
    this.$getElementDir$($columnHeader$$1$$, "left") + $columnHeadersContainer_returnVal$$7$$.widthChange, "left"), this.$setElementWidth$($columnHeader$$1$$, this.$getElementWidth$($columnHeader$$1$$) - $columnHeadersContainer_returnVal$$7$$.widthChange), $removedColumns$$ += $columnHeadersContainer_returnVal$$7$$.extentChange, $removedColumnsWidth$$ += $columnHeadersContainer_returnVal$$7$$.widthChange);
    return{extentChange:$removedColumns$$, widthChange:$removedColumnsWidth$$};
  };
  $DvtDataGrid$$.prototype.$removeColumnsFromLeft$ = function $$DvtDataGrid$$$$$removeColumnsFromLeft$$($databody$$10_rows$$3$$) {
    var $indexToRemove$$, $j$$22_left$$9$$, $columns_row$$12$$, $i$$160_k$$9$$, $column$$5$$, $prevLeft$$;
    $databody$$10_rows$$3$$ = $databody$$10_rows$$3$$.firstChild.childNodes;
    $j$$22_left$$9$$ = $indexToRemove$$ = 0;
    if (!(1 > $databody$$10_rows$$3$$.length)) {
      $columns_row$$12$$ = $databody$$10_rows$$3$$[0].childNodes;
      for ($i$$160_k$$9$$ = 0;$i$$160_k$$9$$ < $columns_row$$12$$.length;$i$$160_k$$9$$ += 1) {
        if ($column$$5$$ = $columns_row$$12$$[$i$$160_k$$9$$], $prevLeft$$ = $j$$22_left$$9$$, $j$$22_left$$9$$ = this.$getElementDir$($column$$5$$, "left"), $j$$22_left$$9$$ > this.$m_currentScrollLeft$ - 0) {
          $indexToRemove$$ = $i$$160_k$$9$$ - 1;
          this.$m_startCol$ += $indexToRemove$$;
          this.$m_startColPixel$ = $prevLeft$$;
          break;
        }
      }
      for ($j$$22_left$$9$$ = 0;$j$$22_left$$9$$ < $databody$$10_rows$$3$$.length;$j$$22_left$$9$$ += 1) {
        for ($columns_row$$12$$ = $databody$$10_rows$$3$$[$j$$22_left$$9$$], $i$$160_k$$9$$ = 0;$i$$160_k$$9$$ < $indexToRemove$$;$i$$160_k$$9$$ += 1) {
          this.$_remove$($columns_row$$12$$.firstChild);
        }
      }
    }
  };
  $DvtDataGrid$$.prototype.$removeColumnHeadersFromRight$ = function $$DvtDataGrid$$$$$removeColumnHeadersFromRight$$($colHeader$$6_colHeaderContent$$1$$) {
    var $threshold$$1$$;
    $colHeader$$6_colHeaderContent$$1$$ = $colHeader$$6_colHeaderContent$$1$$.firstChild;
    $threshold$$1$$ = this.$m_currentScrollLeft$ + this.$getViewportWidth$() + 0;
    this.$m_endColHeaderPixel$ <= $threshold$$1$$ || (this.$m_stopColumnHeaderFetch$ && (this.$m_stopColumnHeaderFetch$ = !1), this.$removeColumnHeadersFromRightOfContainer$($colHeader$$6_colHeaderContent$$1$$, $threshold$$1$$));
  };
  $DvtDataGrid$$.prototype.$removeColumnHeadersFromRightOfContainer$ = function $$DvtDataGrid$$$$$removeColumnHeadersFromRightOfContainer$$($columnHeadersContainer$$1$$, $threshold$$2$$) {
    var $element$$80$$, $columnHeader$$2$$, $isColumnHeader$$1_returnVal$$8$$, $width$$22$$, $removedColumns$$1$$ = 0, $removedColumnsWidth$$1$$ = 0;
    $element$$80$$ = $columnHeadersContainer$$1$$.lastChild;
    $columnHeader$$2$$ = ($isColumnHeader$$1_returnVal$$8$$ = this.$m_utils$.$containsCSSClassName$($element$$80$$, this.$getMappedStyle$("colheadercell"))) ? $element$$80$$ : $element$$80$$.firstChild;
    for ($width$$22$$ = this.$getElementWidth$($columnHeader$$2$$);this.$m_endColHeaderPixel$ - $width$$22$$ > $threshold$$2$$;) {
      this.$_remove$($element$$80$$), $removedColumnsWidth$$1$$ += $width$$22$$, $removedColumns$$1$$ += $isColumnHeader$$1_returnVal$$8$$ ? 1 : this.$_getAttribute$($element$$80$$, "extent"), this.$m_endColHeaderPixel$ -= $width$$22$$, this.$m_endColHeader$ -= $isColumnHeader$$1_returnVal$$8$$ ? 1 : this.$_getAttribute$($element$$80$$, "extent"), $element$$80$$ = $columnHeadersContainer$$1$$.lastChild, $columnHeader$$2$$ = ($isColumnHeader$$1_returnVal$$8$$ = this.$m_utils$.$containsCSSClassName$($element$$80$$, 
      this.$getMappedStyle$("colheadercell"))) ? $element$$80$$ : $element$$80$$.firstChild, $width$$22$$ = this.$getElementWidth$($columnHeader$$2$$);
    }
    $isColumnHeader$$1_returnVal$$8$$ || ($isColumnHeader$$1_returnVal$$8$$ = this.$removeColumnHeadersFromRightOfContainer$($element$$80$$, $threshold$$2$$), this.$_setAttribute$($element$$80$$, "extent", this.$_getAttribute$($element$$80$$, "extent") - $isColumnHeader$$1_returnVal$$8$$.extentChange), this.$setElementWidth$($columnHeader$$2$$, this.$getElementWidth$($columnHeader$$2$$) - $isColumnHeader$$1_returnVal$$8$$.widthChange), $removedColumns$$1$$ += $isColumnHeader$$1_returnVal$$8$$.extentChange, 
    $removedColumnsWidth$$1$$ += $isColumnHeader$$1_returnVal$$8$$.widthChange);
    return{extentChange:$removedColumns$$1$$, widthChange:$removedColumnsWidth$$1$$};
  };
  $DvtDataGrid$$.prototype.$removeColumnsFromRight$ = function $$DvtDataGrid$$$$$removeColumnsFromRight$$($databody$$11_threshold$$3$$) {
    var $columns$$1$$, $column$$6_width$$23$$, $rows$$4$$, $j$$23$$, $row$$13$$;
    $rows$$4$$ = $databody$$11_threshold$$3$$.firstChild.childNodes;
    $databody$$11_threshold$$3$$ = this.$m_currentScrollLeft$ + this.$getViewportWidth$() + 0;
    if (!(this.$m_endColPixel$ <= $databody$$11_threshold$$3$$)) {
      for (this.$m_stopColumnFetch$ && (this.$m_stopColumnFetch$ = !1), $columns$$1$$ = $rows$$4$$[1], $column$$6_width$$23$$ = $columns$$1$$.lastChild, $column$$6_width$$23$$ = this.$getElementWidth$($column$$6_width$$23$$);this.$m_endColPixel$ - $column$$6_width$$23$$ > $databody$$11_threshold$$3$$;) {
        for ($j$$23$$ = 0;$j$$23$$ < $rows$$4$$.length;$j$$23$$ += 1) {
          $row$$13$$ = $rows$$4$$[$j$$23$$], this.$_remove$($row$$13$$.lastChild);
        }
        this.$m_endColPixel$ -= $column$$6_width$$23$$;
        this.$m_endCol$ -= 1;
        $column$$6_width$$23$$ = $columns$$1$$.lastChild;
        $column$$6_width$$23$$ = this.$getElementWidth$($column$$6_width$$23$$);
      }
    }
  };
  $DvtDataGrid$$.prototype.$removeRowHeadersFromTop$ = function $$DvtDataGrid$$$$$removeRowHeadersFromTop$$($returnVal$$9_rowHeader$$9_rowHeaderContent$$3$$) {
    $returnVal$$9_rowHeader$$9_rowHeaderContent$$3$$ = $returnVal$$9_rowHeader$$9_rowHeaderContent$$3$$.firstChild;
    this.$m_startRowHeaderPixel$ >= this.$m_currentScrollTop$ - 0 || ($returnVal$$9_rowHeader$$9_rowHeaderContent$$3$$ = this.$removeRowHeadersFromTopOfContainer$($returnVal$$9_rowHeader$$9_rowHeaderContent$$3$$, null, this.$m_startRowHeaderPixel$, 0), this.$m_startRowHeaderPixel$ += $returnVal$$9_rowHeader$$9_rowHeaderContent$$3$$.heightChange, this.$m_startRowHeader$ += $returnVal$$9_rowHeader$$9_rowHeaderContent$$3$$.extentChange);
  };
  $DvtDataGrid$$.prototype.$removeRowHeadersFromTopOfContainer$ = function $$DvtDataGrid$$$$$removeRowHeadersFromTopOfContainer$$($returnVal$$10_rowHeadersContainer$$, $firstChild$$2$$, $resizerHeight$$, $rowThreshold$$1$$) {
    var $element$$81$$, $rowHeader$$10$$, $isRowHeader$$, $height$$23$$, $removedRows$$ = 0, $removedRowsHeight$$ = 0;
    $element$$81$$ = null == $firstChild$$2$$ ? $returnVal$$10_rowHeadersContainer$$.firstChild : $firstChild$$2$$.nextSibling;
    if (null == $element$$81$$) {
      return{extentChange:0, heightChange:0};
    }
    $rowHeader$$10$$ = ($isRowHeader$$ = this.$m_utils$.$containsCSSClassName$($element$$81$$, this.$getMappedStyle$("rowheadercell"))) ? $element$$81$$ : $element$$81$$.firstChild;
    for ($height$$23$$ = this.$getElementHeight$($rowHeader$$10$$);$resizerHeight$$ + $height$$23$$ < this.$m_currentScrollTop$ - $rowThreshold$$1$$;) {
      this.$_remove$($element$$81$$);
      $removedRowsHeight$$ += $height$$23$$;
      $removedRows$$ += $isRowHeader$$ ? 1 : this.$_getAttribute$($element$$81$$, "extent");
      $resizerHeight$$ += $height$$23$$;
      $element$$81$$ = null == $firstChild$$2$$ ? $returnVal$$10_rowHeadersContainer$$.firstChild : $firstChild$$2$$.nextSibling;
      if (null == $element$$81$$) {
        return{extentChange:$removedRows$$, heightChange:$removedRowsHeight$$};
      }
      $rowHeader$$10$$ = ($isRowHeader$$ = this.$m_utils$.$containsCSSClassName$($element$$81$$, this.$getMappedStyle$("rowheadercell"))) ? $element$$81$$ : $element$$81$$.firstChild;
      $height$$23$$ = this.$getElementHeight$($rowHeader$$10$$);
    }
    $isRowHeader$$ || ($returnVal$$10_rowHeadersContainer$$ = this.$removeRowHeadersFromTopOfContainer$($element$$81$$, $element$$81$$.firstChild, $resizerHeight$$, $rowThreshold$$1$$), this.$_setAttribute$($element$$81$$, "start", this.$_getAttribute$($element$$81$$, "start") + $returnVal$$10_rowHeadersContainer$$.extentChange), this.$_setAttribute$($element$$81$$, "extent", this.$_getAttribute$($element$$81$$, "extent") - $returnVal$$10_rowHeadersContainer$$.extentChange), this.$setElementDir$($rowHeader$$10$$, 
    this.$getElementDir$($rowHeader$$10$$, "top") + $returnVal$$10_rowHeadersContainer$$.heightChange, "top"), this.$setElementHeight$($rowHeader$$10$$, this.$getElementHeight$($rowHeader$$10$$) - $returnVal$$10_rowHeadersContainer$$.heightChange), $removedRows$$ += $returnVal$$10_rowHeadersContainer$$.extentChange, $removedRowsHeight$$ += $returnVal$$10_rowHeadersContainer$$.heightChange);
    return{extentChange:$removedRows$$, heightChange:$removedRowsHeight$$};
  };
  $DvtDataGrid$$.prototype.$removeRowsFromTop$ = function $$DvtDataGrid$$$$$removeRowsFromTop$$($databody$$12_databodyContent$$7$$) {
    var $row$$14$$, $height$$24$$;
    $databody$$12_databodyContent$$7$$ = $databody$$12_databodyContent$$7$$.firstChild;
    if (!(this.$m_startRowPixel$ >= this.$m_currentScrollTop$ - 0)) {
      for ($row$$14$$ = $databody$$12_databodyContent$$7$$.firstChild, $height$$24$$ = this.$getElementHeight$($row$$14$$);this.$m_startRowPixel$ + $height$$24$$ < this.$m_currentScrollTop$ - 0;) {
        this.$_remove$($row$$14$$);
        this.$m_startRowPixel$ += $height$$24$$;
        this.$m_startRow$ += 1;
        $row$$14$$ = $databody$$12_databodyContent$$7$$.firstChild;
        if (null == $row$$14$$) {
          break;
        }
        $height$$24$$ = this.$getElementHeight$($row$$14$$);
      }
    }
  };
  $DvtDataGrid$$.prototype.$removeRowHeadersFromBottom$ = function $$DvtDataGrid$$$$$removeRowHeadersFromBottom$$($rowHeader$$11_rowHeaderContent$$4$$) {
    var $threshold$$4$$;
    $rowHeader$$11_rowHeaderContent$$4$$ = $rowHeader$$11_rowHeaderContent$$4$$.firstChild;
    $threshold$$4$$ = this.$m_currentScrollTop$ + this.$getViewportHeight$() + 0;
    this.$m_endRowHeaderPixel$ <= $threshold$$4$$ || (this.$m_stopRowHeaderFetch$ && (this.$m_stopRowHeaderFetch$ = !1), this.$removeRowHeadersFromBottomOfContainer$($rowHeader$$11_rowHeaderContent$$4$$, $threshold$$4$$));
  };
  $DvtDataGrid$$.prototype.$removeRowHeadersFromBottomOfContainer$ = function $$DvtDataGrid$$$$$removeRowHeadersFromBottomOfContainer$$($rowHeadersContainer$$1$$, $threshold$$5$$) {
    var $element$$82$$, $rowHeader$$12$$, $isRowHeader$$1_returnVal$$11$$, $height$$25$$, $removedRows$$1$$ = 0, $removedRowsHeight$$1$$ = 0;
    $element$$82$$ = $rowHeadersContainer$$1$$.lastChild;
    $rowHeader$$12$$ = ($isRowHeader$$1_returnVal$$11$$ = this.$m_utils$.$containsCSSClassName$($element$$82$$, this.$getMappedStyle$("rowheadercell"))) ? $element$$82$$ : $element$$82$$.firstChild;
    for ($height$$25$$ = this.$getElementHeight$($rowHeader$$12$$);this.$m_endRowHeaderPixel$ - $height$$25$$ > $threshold$$5$$;) {
      this.$_remove$($element$$82$$), $removedRowsHeight$$1$$ += $height$$25$$, $removedRows$$1$$ += $isRowHeader$$1_returnVal$$11$$ ? 1 : this.$_getAttribute$($element$$82$$, "extent"), this.$m_endRowHeaderPixel$ -= $height$$25$$, this.$m_endRowHeader$ -= $isRowHeader$$1_returnVal$$11$$ ? 1 : this.$_getAttribute$($element$$82$$, "extent"), $element$$82$$ = $rowHeadersContainer$$1$$.lastChild, $rowHeader$$12$$ = ($isRowHeader$$1_returnVal$$11$$ = this.$m_utils$.$containsCSSClassName$($element$$82$$, 
      this.$getMappedStyle$("rowheadercell"))) ? $element$$82$$ : $element$$82$$.firstChild, $height$$25$$ = this.$getElementHeight$($rowHeader$$12$$);
    }
    $isRowHeader$$1_returnVal$$11$$ || ($isRowHeader$$1_returnVal$$11$$ = this.$removeRowHeadersFromBottomOfContainer$($element$$82$$, $threshold$$5$$), this.$_setAttribute$($element$$82$$, "extent", this.$_getAttribute$($element$$82$$, "extent") - $isRowHeader$$1_returnVal$$11$$.extentChange), this.$setElementHeight$($rowHeader$$12$$, this.$getElementHeight$($rowHeader$$12$$) - $isRowHeader$$1_returnVal$$11$$.heightChange), $removedRows$$1$$ += $isRowHeader$$1_returnVal$$11$$.extentChange, $removedRowsHeight$$1$$ += 
    $isRowHeader$$1_returnVal$$11$$.heightChange);
    return{extentChange:$removedRows$$1$$, heightChange:$removedRowsHeight$$1$$};
  };
  $DvtDataGrid$$.prototype.$removeRowsFromBottom$ = function $$DvtDataGrid$$$$$removeRowsFromBottom$$($databody$$13_databodyContent$$8$$) {
    var $threshold$$6$$, $row$$15$$, $height$$26$$;
    $databody$$13_databodyContent$$8$$ = $databody$$13_databodyContent$$8$$.firstChild;
    $threshold$$6$$ = this.$m_currentScrollTop$ + this.$getViewportHeight$() + 0;
    if (!(this.$m_endRowPixel$ <= $threshold$$6$$)) {
      for (this.$m_stopRowFetch$ && (this.$m_stopRowFetch$ = !1), $row$$15$$ = $databody$$13_databodyContent$$8$$.lastChild, $height$$26$$ = this.$getElementHeight$($row$$15$$);this.$m_endRowPixel$ - $height$$26$$ > $threshold$$6$$;) {
        this.$_remove$($row$$15$$), this.$m_endRowPixel$ -= $height$$26$$, this.$m_endRow$ -= 1, $row$$15$$ = $databody$$13_databodyContent$$8$$.lastChild, $height$$26$$ = this.$getElementHeight$($row$$15$$);
      }
    }
  };
  $DvtDataGrid$$.prototype.$handleScrollerMouseDown$ = function $$DvtDataGrid$$$$$handleScrollerMouseDown$$() {
    this.$m_captureScrolling$ = !0;
  };
  $DvtDataGrid$$.prototype.$handleScrollerMouseUp$ = function $$DvtDataGrid$$$$$handleScrollerMouseUp$$() {
    this.$m_captureScrolling$ = !1;
    this.$isFetchComplete$() && this.$m_stopDatabodyScroll$ && this.$fillViewport$(this.$m_currentScrollLeft$, this.$m_currentScrollTop$);
  };
  $DvtDataGrid$$.prototype.$handleContextMenuGesture$ = function $$DvtDataGrid$$$$$handleContextMenuGesture$$($event$$115$$, $eventType$$31$$, $callback$$92$$) {
    var $capabilities_index$$110$$, $element$$83$$, $launcher$$6_target$$81$$;
    $launcher$$6_target$$81$$ = $event$$115$$.originalEvent.target;
    $element$$83$$ = this.$findCell$($launcher$$6_target$$81$$);
    "touch" === $eventType$$31$$ && null != $element$$83$$ && ($capabilities_index$$110$$ = {row:this.$getRowIndex$($element$$83$$.parentNode), column:this.$getCellIndex$($element$$83$$)}, !this.$isMultipleSelection$() || !this.$_isContainSelection$($capabilities_index$$110$$) || this.$_isDatabodyCellActive$() && $capabilities_index$$110$$.row != this.$m_active$.indexes.row && $capabilities_index$$110$$.column != this.$m_active$.indexes.column) && (this.$_isSelectionEnabled$() ? this.$handleDatabodyClickSelection$($event$$115$$.originalEvent) : 
    this.$handleDatabodyClickActive$($event$$115$$.originalEvent));
    if (!this.$m_utils$.$_isNodeEditableOrClickable$($launcher$$6_target$$81$$, this.$m_root$)) {
      if (null != $element$$83$$) {
        $capabilities_index$$110$$ = {row:this.$getRowIndex$($element$$83$$.parentNode), column:this.$getCellIndex$($element$$83$$)}, this.$isMultipleSelection$() && this.$_isContainSelection$($capabilities_index$$110$$) ? ($launcher$$6_target$$81$$ = this.$_getActiveElement$(), $capabilities_index$$110$$ = this.$_isDatabodyCellActive$() ? "keyboard" === $eventType$$31$$ ? this.$_getCellCapability$($launcher$$6_target$$81$$) : this.$_getCellCapability$($launcher$$6_target$$81$$, $element$$83$$) : 
        this.$_getHeaderCapability$($launcher$$6_target$$81$$, $element$$83$$)) : ($launcher$$6_target$$81$$ = $element$$83$$, $capabilities_index$$110$$ = this.$_getCellCapability$($launcher$$6_target$$81$$));
      } else {
        $element$$83$$ = this.$findHeader$($launcher$$6_target$$81$$);
        if (null == $element$$83$$) {
          return;
        }
        $capabilities_index$$110$$ = this.$_getHeaderCapability$($element$$83$$);
        $launcher$$6_target$$81$$ = $element$$83$$;
      }
      $callback$$92$$.call(null, {capabilities:$capabilities_index$$110$$, launcher:$launcher$$6_target$$81$$}, $event$$115$$, $eventType$$31$$);
    }
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.handleContextMenuGesture", $DvtDataGrid$$.prototype.$handleContextMenuGesture$, void 0);
  $DvtDataGrid$$.prototype.$_getCellCapability$ = function $$DvtDataGrid$$$$$_getCellCapability$$($cell$$6$$, $actualCell$$) {
    var $capabilities$$1$$, $rowHeader$$13$$, $columnHeader$$3_sorted$$, $resizable$$, $sortable$$, $sameColumn$$ = !0, $sameRow$$ = !0;
    $capabilities$$1$$ = {resize:"disable", resizeWidth:"disable", resizeHeight:"disable", sortRow:"disable", sortCol:"disable", cut:"disable", paste:"disable", sortColAsc:"disable", sortColDsc:"disable"};
    if (null != $actualCell$$ && ($sameColumn$$ = this.$getCellIndex$($cell$$6$$) === this.$getCellIndex$($actualCell$$), $sameRow$$ = $cell$$6$$.parentNode === $actualCell$$.parentNode, !1 === $sameRow$$ && !1 === $sameColumn$$)) {
      return $capabilities$$1$$;
    }
    $rowHeader$$13$$ = this.$getHeaderFromCell$($cell$$6$$, "row");
    $columnHeader$$3_sorted$$ = this.$getHeaderFromCell$($cell$$6$$, "column");
    $resizable$$ = this.$m_resources$.$getMappedAttribute$("resizable");
    $sortable$$ = this.$m_resources$.$getMappedAttribute$("sortable");
    null != $columnHeader$$3_sorted$$ && $sameColumn$$ && ("true" === $columnHeader$$3_sorted$$.getAttribute($resizable$$) && ($capabilities$$1$$.resize = "enable", $capabilities$$1$$.resizeWidth = "enable"), "true" === $columnHeader$$3_sorted$$.getAttribute($sortable$$) && ($capabilities$$1$$.sortCol = "enable", $capabilities$$1$$.sortColAsc = "enable", $capabilities$$1$$.sortColDsc = "enable", $columnHeader$$3_sorted$$ = $columnHeader$$3_sorted$$.getAttribute(this.$m_resources$.$getMappedAttribute$("sortDir")), 
    "ascending" === $columnHeader$$3_sorted$$ ? $capabilities$$1$$.sortColAsc = "disable" : "descending" === $columnHeader$$3_sorted$$ && ($capabilities$$1$$.sortColDsc = "disable")));
    $sameRow$$ && (this.$_isMoveEnabled$() && ($capabilities$$1$$.cut = "enable", $capabilities$$1$$.paste = "enable"), null != $rowHeader$$13$$ && ("true" === $rowHeader$$13$$.getAttribute($resizable$$) && ($capabilities$$1$$.resize = "enable", $capabilities$$1$$.resizeHeight = "enable"), "true" === $rowHeader$$13$$.getAttribute($sortable$$) && ($capabilities$$1$$.sortRow = "enable")));
    return $capabilities$$1$$;
  };
  $DvtDataGrid$$.prototype.$_getHeaderCapability$ = function $$DvtDataGrid$$$$$_getHeaderCapability$$($header$$6$$, $actualCell$$1$$) {
    var $capabilities$$2$$, $resizable$$1_sorted$$1$$, $sortable$$1$$, $sameColumn$$1$$ = !0, $sameRow$$1$$ = !0;
    $capabilities$$2$$ = {resize:"disable", resizeWidth:"disable", resizeHeight:"disable", sortRow:"disable", sortCol:"disable", cut:"disable", paste:"disable", sortColAsc:"disable", sortColDsc:"disable"};
    if (null != $actualCell$$1$$ && ($sameColumn$$1$$ = this.$getHeaderCellIndex$($header$$6$$) === this.$getCellIndex$($actualCell$$1$$), $sameRow$$1$$ = this.$_getKey$($header$$6$$) === this.$_getKey$($actualCell$$1$$.parentNode), !1 === $sameRow$$1$$ && !1 === $sameColumn$$1$$)) {
      return $capabilities$$2$$;
    }
    $resizable$$1_sorted$$1$$ = this.$m_resources$.$getMappedAttribute$("resizable");
    $sortable$$1$$ = this.$m_resources$.$getMappedAttribute$("sortable");
    null !== $header$$6$$ && (this.$m_utils$.$containsCSSClassName$($header$$6$$, this.$getMappedStyle$("colheadercell")) && $sameColumn$$1$$ ? ("true" === $header$$6$$.getAttribute($resizable$$1_sorted$$1$$) && ($capabilities$$2$$.resizeWidth = "enable", $capabilities$$2$$.resize = "enable"), $capabilities$$2$$.resizeHeight = this.$m_options$.$isResizable$("column", "height"), "true" === $header$$6$$.getAttribute($sortable$$1$$) && ($capabilities$$2$$.sortCol = "enable", $capabilities$$2$$.sortColAsc = 
    "enable", $capabilities$$2$$.sortColDsc = "enable", $resizable$$1_sorted$$1$$ = $header$$6$$.getAttribute(this.$m_resources$.$getMappedAttribute$("sortDir")), "ascending" === $resizable$$1_sorted$$1$$ ? $capabilities$$2$$.sortColAsc = "disable" : "descending" === $resizable$$1_sorted$$1$$ && ($capabilities$$2$$.sortColDsc = "disable"))) : $sameRow$$1$$ && (this.$_isMoveEnabled$() && ($capabilities$$2$$.cut = "enable", $capabilities$$2$$.paste = "enable"), "true" === $header$$6$$.getAttribute($resizable$$1_sorted$$1$$) && 
    ($capabilities$$2$$.resize = "enable", $capabilities$$2$$.resizeHeight = "enable"), $capabilities$$2$$.resizeWidth = this.$m_options$.$isResizable$("row", "width"), "true" === $header$$6$$.getAttribute($sortable$$1$$) && ($capabilities$$2$$.sortRow = "enable")));
    $capabilities$$2$$.resize = "enable" === $capabilities$$2$$.resizeHeight || "enable" === $capabilities$$2$$.resizeWidth ? "enable" : "disable";
    return $capabilities$$2$$;
  };
  $DvtDataGrid$$.prototype.$handleContextMenuReturn$ = function $$DvtDataGrid$$$$$handleContextMenuReturn$$($event$$116$$, $direction$$4_id$$21$$, $value$$197$$) {
    var $target$$82$$;
    null != this.$m_active$ && ($target$$82$$ = this.$_getActiveElement$());
    $direction$$4_id$$21$$ === this.$m_resources$.$getMappedCommand$("resizeHeight") || $direction$$4_id$$21$$ === this.$m_resources$.$getMappedCommand$("resizeWidth") ? this.$isResizeEnabled$() && this.$handleContextMenuResize$($event$$116$$, $direction$$4_id$$21$$, $value$$197$$, $target$$82$$) : $direction$$4_id$$21$$ === this.$m_resources$.$getMappedCommand$("sortColAsc") || $direction$$4_id$$21$$ === this.$m_resources$.$getMappedCommand$("sortColDsc") ? ($direction$$4_id$$21$$ = $direction$$4_id$$21$$ === 
    this.$m_resources$.$getMappedCommand$("sortColAsc") ? "ascending" : "descending", this.$m_utils$.$containsCSSClassName$($target$$82$$, this.$getMappedStyle$("cell")) && ($target$$82$$ = this.$getHeaderFromCell$($target$$82$$, "column")), this.$_isDOMElementSortable$($target$$82$$) && this.$_handleCellSort$($event$$116$$, $direction$$4_id$$21$$, $target$$82$$)) : $direction$$4_id$$21$$ === this.$m_resources$.$getMappedCommand$("sortRowAsc") || $direction$$4_id$$21$$ === this.$m_resources$.$getMappedCommand$("sortRowDsc") ? 
    ($direction$$4_id$$21$$ = $direction$$4_id$$21$$ === this.$m_resources$.$getMappedCommand$("sortRowAsc") ? "ascending" : "descending", this.$m_utils$.$containsCSSClassName$($target$$82$$, this.$getMappedStyle$("cell")) && ($target$$82$$ = this.$getHeaderFromCell$($target$$82$$, "row")), this.$_isDOMElementSortable$($target$$82$$) && this.$_handleCellSort$($event$$116$$, $direction$$4_id$$21$$, $target$$82$$)) : $direction$$4_id$$21$$ === this.$m_resources$.$getMappedCommand$("cut") ? this.$_handleCut$($event$$116$$, 
    $target$$82$$) : $direction$$4_id$$21$$ === this.$m_resources$.$getMappedCommand$("paste") ? this.$_handlePaste$($event$$116$$, $target$$82$$) : $direction$$4_id$$21$$ === this.$m_resources$.$getMappedCommand$("discontiguousSelection") && this.$setDiscontiguousSelectionMode$($value$$197$$);
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.handleContextMenuReturn", $DvtDataGrid$$.prototype.$handleContextMenuReturn$, void 0);
  $DvtDataGrid$$.prototype.$_isSortEnabled$ = function $$DvtDataGrid$$$$$_isSortEnabled$$($axis$$11$$, $headerContext$$2$$) {
    var $capability$$, $sortable$$2$$;
    $capability$$ = this.$m_dataSource$.getCapability("sort");
    $sortable$$2$$ = this.$m_options$.$isSortable$($axis$$11$$, $headerContext$$2$$);
    return "enable" !== $sortable$$2$$ && "auto" !== $sortable$$2$$ || "full" !== $capability$$ && $capability$$ !== $axis$$11$$ ? !1 : !0;
  };
  $DvtDataGrid$$.prototype.$_isDOMElementSortable$ = function $$DvtDataGrid$$$$$_isDOMElementSortable$$($element$$84_header$$7$$) {
    $element$$84_header$$7$$ = this.$findHeader$($element$$84_header$$7$$);
    return null == $element$$84_header$$7$$ ? !1 : "true" == $element$$84_header$$7$$.getAttribute(this.$m_resources$.$getMappedAttribute$("sortable"));
  };
  $DvtDataGrid$$.prototype.$_isSelectionEnabled$ = function $$DvtDataGrid$$$$$_isSelectionEnabled$$() {
    return "none" != this.$m_options$.$getSelectionCardinality$();
  };
  $DvtDataGrid$$.prototype.$isMultipleSelection$ = function $$DvtDataGrid$$$$$isMultipleSelection$$() {
    return "multiple" == this.$m_options$.$getSelectionCardinality$();
  };
  $DvtDataGrid$$.prototype.$isResizeEnabled$ = function $$DvtDataGrid$$$$$isResizeEnabled$$() {
    return this.$m_options$.$isResizable$("row", "width") || this.$m_options$.$isResizable$("row", "height") || this.$m_options$.$isResizable$("column", "width") || this.$m_options$.$isResizable$("column", "height");
  };
  $DvtDataGrid$$.prototype.$_isHeaderResizeEnabled$ = function $$DvtDataGrid$$$$$_isHeaderResizeEnabled$$($axis$$12$$, $headerContext$$3$$) {
    var $resizable$$2$$;
    return "column" == $axis$$12$$ ? ($resizable$$2$$ = this.$m_options$.$isResizable$($axis$$12$$, "width", $headerContext$$3$$), "enable" == $resizable$$2$$ ? !0 : !1) : "row" == $axis$$12$$ ? ($resizable$$2$$ = this.$m_options$.$isResizable$($axis$$12$$, "height", $headerContext$$3$$), "enable" == $resizable$$2$$ ? !0 : !1) : !1;
  };
  $DvtDataGrid$$.prototype.$handleMouseMove$ = function $$DvtDataGrid$$$$$handleMouseMove$$($event$$117$$) {
    this.$isResizeEnabled$() && !1 == this.$m_databodyDragState$ && this.$handleResize$($event$$117$$);
  };
  $DvtDataGrid$$.prototype.$handleRowHeaderMouseMove$ = function $$DvtDataGrid$$$$$handleRowHeaderMouseMove$$($event$$118$$) {
    this.$m_databodyMove$ && this.$_handleMove$($event$$118$$);
  };
  $DvtDataGrid$$.prototype.$handleHeaderMouseDown$ = function $$DvtDataGrid$$$$$handleHeaderMouseDown$$($event$$119$$) {
    var $cell$$7_row$$16$$, $processed$$, $target$$83$$;
    this.$_exitActionableMode$();
    $target$$83$$ = $event$$119$$.target;
    if (this.$_isEditOrEnter$() && ($cell$$7_row$$16$$ = this.$_getActiveElement$(), !1 == this.$_leaveEditing$($event$$119$$, $cell$$7_row$$16$$, !1))) {
      return;
    }
    if (0 === $event$$119$$.button) {
      if ((this.$m_utils$.$containsCSSClassName$($target$$83$$, this.$getMappedStyle$("sortascending")) || this.$m_utils$.$containsCSSClassName$($target$$83$$, this.$getMappedStyle$("sortdescending"))) && this.$_isDOMElementSortable$($target$$83$$)) {
        $event$$119$$.preventDefault();
        this.$_handleSortIconMouseDown$($target$$83$$);
        return;
      }
      this.$isResizeEnabled$() && ($processed$$ = this.$handleResizeMouseDown$($event$$119$$));
      $cell$$7_row$$16$$ = this.$findRow$($target$$83$$);
      !this.$m_isResizing$ && this.$_isMoveOnRowEnabled$($cell$$7_row$$16$$) && (this.$m_databodyMove$ = !0, this.$m_currentX$ = $event$$119$$.pageX, this.$m_currentY$ = $event$$119$$.pageY, $processed$$ = !0);
    }
    this.$m_isResizing$ || (this.$m_root$.contains(document.activeElement) && document.activeElement !== this.$m_root$ || (this.$m_externalFocus$ = !0), this.$handleHeaderClickActive$($event$$119$$));
    !0 === $processed$$ && $event$$119$$.preventDefault();
  };
  $DvtDataGrid$$.prototype.$handleMouseUp$ = function $$DvtDataGrid$$$$$handleMouseUp$$($event$$120$$) {
    this.$m_databodyMove$ && null != this.$m_moveRow$ ? this.$_handleMoveMouseUp$(!1) : this.$isResizeEnabled$() && this.$handleResizeMouseUp$($event$$120$$);
    this.$m_databodyMove$ = !1;
  };
  $DvtDataGrid$$.prototype.$handleHeaderMouseOver$ = function $$DvtDataGrid$$$$$handleHeaderMouseOver$$($event$$121$$) {
    var $target$$84$$ = $event$$121$$.target;
    this.$m_utils$.$addCSSClassName$(this.$findHeader$($target$$84$$), this.$getMappedStyle$("hover"));
    this.$_isDOMElementSortable$($target$$84$$) && this.$_handleSortMouseOver$($event$$121$$);
  };
  $DvtDataGrid$$.prototype.$handleHeaderMouseOut$ = function $$DvtDataGrid$$$$$handleHeaderMouseOut$$($event$$122$$) {
    var $target$$85$$ = $event$$122$$.target;
    this.$m_utils$.$removeCSSClassName$(this.$findHeader$($target$$85$$), this.$getMappedStyle$("hover"));
    this.$_isDOMElementSortable$($target$$85$$) && this.$_handleSortMouseOut$($event$$122$$);
  };
  $DvtDataGrid$$.prototype.$handleHeaderMouseUp$ = function $$DvtDataGrid$$$$$handleHeaderMouseUp$$() {
    this.$m_databodyMove$ && null != this.$m_moveRow$ && this.$_handleMoveMouseUp$(!0);
  };
  $DvtDataGrid$$.prototype.$handleHeaderClick$ = function $$DvtDataGrid$$$$$handleHeaderClick$$($event$$124$$) {
    var $target$$86$$ = $event$$124$$.target;
    (this.$m_utils$.$containsCSSClassName$($target$$86$$, this.$getMappedStyle$("sortascending")) || this.$m_utils$.$containsCSSClassName$($target$$86$$, this.$getMappedStyle$("sortdescending"))) && this.$_isDOMElementSortable$($target$$86$$) && (this.$_handleHeaderSort$($event$$124$$), $event$$124$$.preventDefault());
  };
  $DvtDataGrid$$.prototype.$handleDatabodyMouseDown$ = function $$DvtDataGrid$$$$$handleDatabodyMouseDown$$($event$$125$$) {
    var $cell$$8$$, $target$$87$$;
    $target$$87$$ = $event$$125$$.target;
    if (this.$_isEditOrEnter$()) {
      if ($cell$$8$$ = this.$_getActiveElement$(), this.$findCell$($target$$87$$) != $cell$$8$$) {
        if (!1 == this.$_leaveEditing$($event$$125$$, $cell$$8$$, !1)) {
          return;
        }
      } else {
        return;
      }
    } else {
      this.$_exitActionableMode$();
    }
    0 === $event$$125$$.button && this.$_isMoveOnRowEnabled$(this.find($target$$87$$, "row")) && (this.$m_databodyMove$ = !0, this.$m_currentX$ = $event$$125$$.pageX, this.$m_currentY$ = $event$$125$$.pageY);
    this.$m_root$.contains(document.activeElement) && document.activeElement !== this.$m_root$ || (this.$m_externalFocus$ = !0);
    this.$_isGridEditable$() && (this.$m_shouldFocus$ = !this.$_isFocusableElementBeforeCell$($target$$87$$));
    this.$_isSelectionEnabled$() ? (this.$handleDatabodyClickSelection$($event$$125$$), this.$isMultipleSelection$() && 0 === $event$$125$$.button && (this.$m_databodyDragState$ = !0)) : this.$handleDatabodyClickActive$($event$$125$$);
  };
  $DvtDataGrid$$.prototype.$handleDatabodyMouseOut$ = function $$DvtDataGrid$$$$$handleDatabodyMouseOut$$($event$$126_row$$17$$) {
    var $selectionMode$$, $target$$88$$;
    this.$m_databodyMove$ || ($selectionMode$$ = this.$m_options$.$getSelectionMode$(), $target$$88$$ = $event$$126_row$$17$$.target, $event$$126_row$$17$$ = this.$findRow$($target$$88$$), "cell" === $selectionMode$$ ? this.$m_utils$.$removeCSSClassName$(this.$findCell$($target$$88$$), this.$getMappedStyle$("hover")) : "row" === $selectionMode$$ && this.$m_utils$.$removeCSSClassName$($event$$126_row$$17$$, this.$getMappedStyle$("hover")));
  };
  $DvtDataGrid$$.prototype.$handleDatabodyMouseOver$ = function $$DvtDataGrid$$$$$handleDatabodyMouseOver$$($event$$127_row$$18$$) {
    var $selectionMode$$1$$, $target$$89$$;
    this.$m_databodyMove$ || ($selectionMode$$1$$ = this.$m_options$.$getSelectionMode$(), $target$$89$$ = $event$$127_row$$18$$.target, $event$$127_row$$18$$ = this.$findRow$($target$$89$$), "cell" === $selectionMode$$1$$ ? this.$m_utils$.$addCSSClassName$(this.$findCell$($target$$89$$), this.$getMappedStyle$("hover")) : "row" === $selectionMode$$1$$ && this.$m_utils$.$addCSSClassName$($event$$127_row$$18$$, this.$getMappedStyle$("hover")));
  };
  $DvtDataGrid$$.prototype.$handleDatabodyDoubleClick$ = function $$DvtDataGrid$$$$$handleDatabodyDoubleClick$$($event$$128$$) {
    var $cell$$9_target$$90$$, $currentMode$$1$$;
    this.$_isGridEditable$() && ($cell$$9_target$$90$$ = $event$$128$$.target, $cell$$9_target$$90$$ = this.$findCell$($cell$$9_target$$90$$), $currentMode$$1$$ = this.$_getCurrentMode$(), "edit" == $currentMode$$1$$ && this.$_handleExitEdit$($event$$128$$, $cell$$9_target$$90$$), this.$_handleEditable$(0, $cell$$9_target$$90$$), this.$_handleEdit$($event$$128$$, $cell$$9_target$$90$$));
  };
  $DvtDataGrid$$.prototype.$handleDatabodyMouseMove$ = function $$DvtDataGrid$$$$$handleDatabodyMouseMove$$($event$$129$$) {
    this.$m_databodyMove$ ? this.$_handleMove$($event$$129$$) : this.$m_databodyDragState$ && this.$handleDatabodySelectionDrag$($event$$129$$);
  };
  $DvtDataGrid$$.prototype.$handleDatabodyMouseUp$ = function $$DvtDataGrid$$$$$handleDatabodyMouseUp$$() {
    this.$m_databodyDragState$ = !1;
    this.$m_databodyMove$ && null != this.$m_moveRow$ && this.$_handleMoveMouseUp$(!0);
  };
  $DvtDataGrid$$.prototype.$handleDatabodyKeyDown$ = function $$DvtDataGrid$$$$$handleDatabodyKeyDown$$($event$$131$$) {
    var $action$$, $element$$85$$;
    this.$_fireKeyDownEvent$($event$$131$$) && ($action$$ = null != this.$m_active$ && "header" == this.$m_active$.type ? this.$_getActionFromKeyDown$($event$$131$$, this.$m_active$.axis) : this.$_getActionFromKeyDown$($event$$131$$, "cell"), $element$$85$$ = this.$_getActiveElement$(), null != $action$$ && $action$$.call(this, $event$$131$$, $element$$85$$) && $event$$131$$.preventDefault());
  };
  $DvtDataGrid$$.prototype.$_fireKeyDownEvent$ = function $$DvtDataGrid$$$$$_fireKeyDownEvent$$($event$$132$$) {
    var $cell$$10_header$$8_rowKey$$1$$, $target$$92$$;
    $target$$92$$ = $event$$132$$.target;
    $cell$$10_header$$8_rowKey$$1$$ = this.$findCell$($target$$92$$);
    if (null == $cell$$10_header$$8_rowKey$$1$$) {
      $cell$$10_header$$8_rowKey$$1$$ = this.$findHeader$($target$$92$$);
      if (null == $cell$$10_header$$8_rowKey$$1$$) {
        return;
      }
      $cell$$10_header$$8_rowKey$$1$$ = this.$_getKey$($cell$$10_header$$8_rowKey$$1$$);
    } else {
      $cell$$10_header$$8_rowKey$$1$$ = this.$_getKey$($cell$$10_header$$8_rowKey$$1$$.parentNode);
    }
    return this.fireEvent("keydown", {event:$event$$132$$, ui:{rowKey:$cell$$10_header$$8_rowKey$$1$$}});
  };
  $DvtDataGrid$$.prototype.$findPos$ = function $$DvtDataGrid$$$$$findPos$$($element$$86$$) {
    var $parentPos$$, $transform$$;
    return $element$$86$$ ? ($parentPos$$ = this.$findPos$($element$$86$$.offsetParent), $transform$$ = this.$getElementTranslationXYZ$($element$$86$$.offsetParent), [parseInt($parentPos$$[0], 10) + parseInt($element$$86$$.offsetLeft, 10) + $transform$$[0], parseInt($parentPos$$[1], 10) + parseInt($element$$86$$.offsetTop, 10) + $transform$$[1]]) : [0, 0];
  };
  $DvtDataGrid$$.prototype.$getElementTranslationXYZ$ = function $$DvtDataGrid$$$$$getElementTranslationXYZ$$($cs_element$$87_transform$$1_transformX$$) {
    var $matrixArray_transformZ$$, $transformY$$;
    return $cs_element$$87_transform$$1_transformX$$ ? ($cs_element$$87_transform$$1_transformX$$ = document.defaultView.getComputedStyle($cs_element$$87_transform$$1_transformX$$, null), $cs_element$$87_transform$$1_transformX$$ = $cs_element$$87_transform$$1_transformX$$.getPropertyValue("-webkit-transform") || $cs_element$$87_transform$$1_transformX$$.getPropertyValue("-moz-transform") || $cs_element$$87_transform$$1_transformX$$.getPropertyValue("-ms-transform") || $cs_element$$87_transform$$1_transformX$$.getPropertyValue("-o-transform") || 
    $cs_element$$87_transform$$1_transformX$$.getPropertyValue("transform"), $matrixArray_transformZ$$ = $cs_element$$87_transform$$1_transformX$$.substr(7, $cs_element$$87_transform$$1_transformX$$.length - 8).split(", "), $cs_element$$87_transform$$1_transformX$$ = isNaN(parseInt($matrixArray_transformZ$$[4], 10)) ? 0 : parseInt($matrixArray_transformZ$$[4], 10), $transformY$$ = isNaN(parseInt($matrixArray_transformZ$$[5], 10)) ? 0 : parseInt($matrixArray_transformZ$$[5], 10), $matrixArray_transformZ$$ = 
    isNaN(parseInt($matrixArray_transformZ$$[6], 10)) ? 0 : parseInt($matrixArray_transformZ$$[6], 10), [$cs_element$$87_transform$$1_transformX$$, $transformY$$, $matrixArray_transformZ$$]) : [0, 0, 0];
  };
  $DvtDataGrid$$.prototype.$handleDatabodyMouseWheel$ = function $$DvtDataGrid$$$$$handleDatabodyMouseWheel$$($delta$$3_event$$133$$) {
    $delta$$3_event$$133$$.preventDefault();
    $delta$$3_event$$133$$ = this.$m_utils$.$getMousewheelScrollDelta$($delta$$3_event$$133$$);
    this.$scrollDelta$($delta$$3_event$$133$$.deltaX, $delta$$3_event$$133$$.deltaY);
  };
  $DvtDataGrid$$.prototype.$handleTouchStart$ = function $$DvtDataGrid$$$$$handleTouchStart$$($dir$$8_event$$134$$) {
    var $fingerCount_selection$$1$$, $target$$93$$;
    $fingerCount_selection$$1$$ = $dir$$8_event$$134$$.touches.length;
    $target$$93$$ = $dir$$8_event$$134$$.touches[0].target;
    if (1 == $fingerCount_selection$$1$$) {
      this.$m_startX$ = $dir$$8_event$$134$$.touches[0].pageX;
      this.$m_startY$ = $dir$$8_event$$134$$.touches[0].pageY;
      this.$m_currentX$ = this.$m_startX$;
      this.$m_currentY$ = this.$m_startY$;
      this.$m_prevX$ = this.$m_startX$;
      this.$m_prevY$ = this.$m_startY$;
      this.$m_startTime$ = (new Date).getTime();
      this.$m_touchActive$ = !0;
      if (this.$isMultipleSelection$()) {
        if ($target$$93$$.className === this.$getMappedStyle$("selectaffordancetop") || $target$$93$$.className === this.$getMappedStyle$("selectaffordancebottom")) {
          $target$$93$$ = $target$$93$$.parentNode;
        }
        if ($dir$$8_event$$134$$ = $target$$93$$ === this.$m_topSelectIconContainer$ ? "top" : $target$$93$$ === this.$m_bottomSelectIconContainer$ ? "bottom" : null) {
          this.$m_touchMultipleSelect$ = !0, $fingerCount_selection$$1$$ = this.$GetSelection$(), this.$m_touchSelectAnchor$ = "top" === $dir$$8_event$$134$$ ? $fingerCount_selection$$1$$[$fingerCount_selection$$1$$.length - 1].endIndex : $fingerCount_selection$$1$$[$fingerCount_selection$$1$$.length - 1].startIndex;
        }
      }
      !this.$m_touchMultipleSelect$ && this.$_isMoveOnRowEnabled$(this.find($target$$93$$, "row")) && (this.$m_databodyMove$ = !0);
    } else {
      this.$handleTouchCancel$();
    }
  };
  $DvtDataGrid$$.prototype.$handleTouchMove$ = function $$DvtDataGrid$$$$$handleTouchMove$$($cell$$11_event$$135$$) {
    var $diffX$$, $diffY$$, $target$$94$$;
    $target$$94$$ = $cell$$11_event$$135$$.target;
    this.$m_touchActive$ ? ($cell$$11_event$$135$$.preventDefault(), this.$m_currentX$ = $cell$$11_event$$135$$.touches[0].pageX, this.$m_currentY$ = $cell$$11_event$$135$$.touches[0].pageY, $diffX$$ = this.$m_currentX$ - this.$m_prevX$, $diffY$$ = this.$m_currentY$ - this.$m_prevY$, this.$m_resources$.$isRTLMode$() && ($diffX$$ *= -1), this.$m_touchMultipleSelect$ ? this.$handleDatabodySelectionDrag$($cell$$11_event$$135$$) : this.$m_databodyMove$ ? (this.$_removeTouchSelectionAffordance$(), this.$_handleMove$($cell$$11_event$$135$$)) : 
    this.$_isEditOrEnter$() ? ($cell$$11_event$$135$$ = this.$_getActiveElement$(), this.$findCell$($target$$94$$) != $cell$$11_event$$135$$ && this.$_handleNonSwipeScroll$($diffX$$, $diffY$$)) : this.$_handleNonSwipeScroll$($diffX$$, $diffY$$), this.$m_prevX$ = this.$m_currentX$, this.$m_prevY$ = this.$m_currentY$) : this.$handleTouchCancel$();
  };
  $DvtDataGrid$$.prototype.$handleTouchEnd$ = function $$DvtDataGrid$$$$$handleTouchEnd$$($event$$136$$) {
    var $cell$$12_duration$$12$$, $target$$95$$;
    $target$$95$$ = $event$$136$$.target;
    if (this.$_isEditOrEnter$()) {
      if ($cell$$12_duration$$12$$ = this.$_getActiveElement$(), this.$findCell$($target$$95$$) != $cell$$12_duration$$12$$) {
        this.$_leaveEditing$($event$$136$$, $cell$$12_duration$$12$$, !1);
      } else {
        this.$handleTouchCancel$();
        return;
      }
    } else {
      this.$_exitActionableMode$();
    }
    null != this.$m_lastTapTime$ && 250 > this.$m_startTime$ - this.$m_lastTapTime$ && this.$m_lastTapTarget$ === $target$$95$$ ? (this.$m_lastTapTarget$ = this.$m_lastTapTime$ = null, $cell$$12_duration$$12$$ = this.$findCell$($target$$95$$), this.$_handleEditable$(0, $cell$$12_duration$$12$$), this.$_handleEdit$($event$$136$$, $cell$$12_duration$$12$$), $event$$136$$.preventDefault()) : (this.$m_lastTapTarget$ = $event$$136$$.target, this.$m_lastTapTime$ = (new Date).getTime());
    if (this.$m_touchActive$ && !$event$$136$$.defaultPrevented) {
      if (this.$m_touchMultipleSelect$) {
        $event$$136$$.preventDefault(), this.$m_touchMultipleSelect$ = !1;
      } else {
        $cell$$12_duration$$12$$ = this.$m_lastTapTime$ - this.$m_startTime$;
        if (this.$m_currentX$ == this.$m_startX$ && this.$m_currentY$ == this.$m_startY$) {
          this.$m_databodyMove$ = !1;
          this.$_isSelectionEnabled$() && $cell$$12_duration$$12$$ < $DvtDataGrid$$.$CONTEXT_MENU_TAP_HOLD_DURATION$ ? this.$handleDatabodyClickSelection$($event$$136$$) : this.$handleDatabodyClickActive$($event$$136$$);
          return;
        }
        if (this.$m_databodyMove$) {
          $event$$136$$.preventDefault();
          this.$m_databodyMove$ = !1;
          this.$_handleMoveMouseUp$(!0);
          return;
        }
        this.$_handleSwipe$($event$$136$$);
      }
    }
    this.$handleTouchCancel$();
  };
  $DvtDataGrid$$.prototype.$_calculateMomentum$ = function $$DvtDataGrid$$$$$_calculateMomentum$$($current$$4_destination_distance$$, $duration$$13_start$$34$$, $speed_time$$1$$, $currentScroll$$, $maxScroll$$, $rtl$$1$$) {
    var $overScroll$$;
    $current$$4_destination_distance$$ -= $duration$$13_start$$34$$;
    $speed_time$$1$$ = Math.abs($current$$4_destination_distance$$) / $speed_time$$1$$;
    $current$$4_destination_distance$$ = $speed_time$$1$$ * $speed_time$$1$$ / (2 * $DvtDataGrid$$.$DECELERATION_FACTOR$) * (0 > $current$$4_destination_distance$$ ? -1 : 1);
    $duration$$13_start$$34$$ = $speed_time$$1$$ / $DvtDataGrid$$.$DECELERATION_FACTOR$;
    $rtl$$1$$ && ($current$$4_destination_distance$$ *= -1);
    $currentScroll$$ - $current$$4_destination_distance$$ > $maxScroll$$ ? ($overScroll$$ = Math.max(-1 * $DvtDataGrid$$.$MAX_OVERSCROLL_PIXEL$, $current$$4_destination_distance$$), $current$$4_destination_distance$$ = $currentScroll$$ - $maxScroll$$, $duration$$13_start$$34$$ = ($maxScroll$$ - $currentScroll$$) / $speed_time$$1$$) : 0 > $currentScroll$$ - $current$$4_destination_distance$$ && ($overScroll$$ = Math.min($DvtDataGrid$$.$MAX_OVERSCROLL_PIXEL$, $current$$4_destination_distance$$), $current$$4_destination_distance$$ = 
    $currentScroll$$, $duration$$13_start$$34$$ = $currentScroll$$ / $speed_time$$1$$);
    return{$destination$:Math.round($current$$4_destination_distance$$), duration:Math.max(100, $duration$$13_start$$34$$), $overScroll$:$overScroll$$};
  };
  $DvtDataGrid$$.prototype.$handleTouchCancel$ = function $$DvtDataGrid$$$$$handleTouchCancel$$() {
    this.$m_databodyMove$ && (this.$_handleMoveMouseUp$(!1), this.$m_databodyMove$ = !1);
    this.$m_touchSelectAnchor$ = null;
    this.$m_touchActive$ = this.$m_touchMultipleSelect$ = !1;
    this.$m_startTime$ = this.$m_currentY$ = this.$m_currentX$ = this.$m_prevY$ = this.$m_prevX$ = this.$m_startY$ = this.$m_startX$ = 0;
  };
  $DvtDataGrid$$.prototype.$handleHeaderTouchStart$ = function $$DvtDataGrid$$$$$handleHeaderTouchStart$$($event$$138$$) {
    var $header$$9$$, $fingerCount$$1$$, $target$$96$$;
    this.$m_touchStart$ = (new Date).getTime();
    $fingerCount$$1$$ = $event$$138$$.touches.length;
    $target$$96$$ = $event$$138$$.target;
    1 == $fingerCount$$1$$ ? (this.$m_startX$ = $event$$138$$.touches[0].pageX, this.$m_startY$ = $event$$138$$.touches[0].pageY, this.$m_currentX$ = this.$m_startX$, this.$m_currentY$ = this.$m_startY$, this.$m_prevX$ = this.$m_startX$, this.$m_prevY$ = this.$m_startY$, this.$m_touchActive$ = !0, $header$$9$$ = this.$findHeader$($target$$96$$), setTimeout(function() {
      this.$m_touchActive$ && !this.$m_isResizing$ && this.$m_currentX$ == this.$m_startX$ && this.$m_currentY$ == this.$m_startY$ && (this.$_removeTouchSelectionAffordance$(), this.$_setActive$($header$$9$$, $event$$138$$, !0));
    }.bind(this), $DvtDataGrid$$.$HEADER_TAP_SHORT_HOLD_DURATION$), this.$isResizeEnabled$() && (this.$handleResize$($event$$138$$), this.$handleResizeMouseDown$($event$$138$$)), !this.$m_isResizing$ && this.$_isMoveOnRowEnabled$(this.$findRow$($target$$96$$)) && (this.$m_databodyMove$ = !0)) : this.$handleHeaderTouchCancel$();
  };
  $DvtDataGrid$$.prototype.$handleHeaderTouchMove$ = function $$DvtDataGrid$$$$$handleHeaderTouchMove$$($event$$139_header$$10_target$$97$$) {
    var $diffX$$1$$, $diffY$$1$$;
    this.$m_touchActive$ ? ($event$$139_header$$10_target$$97$$.preventDefault(), this.$m_currentX$ = $event$$139_header$$10_target$$97$$.touches[0].pageX, this.$m_currentY$ = $event$$139_header$$10_target$$97$$.touches[0].pageY, $diffX$$1$$ = this.$m_currentX$ - this.$m_prevX$, $diffY$$1$$ = this.$m_currentY$ - this.$m_prevY$, this.$m_isResizing$ && this.$isResizeEnabled$() ? this.$handleResize$($event$$139_header$$10_target$$97$$) : this.$m_databodyMove$ ? (this.$_removeTouchSelectionAffordance$(), 
    this.$_handleMove$($event$$139_header$$10_target$$97$$)) : ($event$$139_header$$10_target$$97$$ = $event$$139_header$$10_target$$97$$.target, $event$$139_header$$10_target$$97$$ = this.$findHeader$($event$$139_header$$10_target$$97$$), "column" == this.$getHeaderCellAxis$($event$$139_header$$10_target$$97$$) ? this.$_handleNonSwipeScroll$($diffX$$1$$, 0) : this.$_handleNonSwipeScroll$(0, $diffY$$1$$)), this.$m_prevX$ = this.$m_currentX$, this.$m_prevY$ = this.$m_currentY$) : this.$handleTouchCancel$();
  };
  $DvtDataGrid$$.prototype.$handleHeaderTouchEnd$ = function $$DvtDataGrid$$$$$handleHeaderTouchEnd$$($event$$140$$) {
    var $header$$11_touchLength$$, $tapMax$$ = $DvtDataGrid$$.$HEADER_TAP_SHORT_HOLD_DURATION$, $target$$98$$;
    $header$$11_touchLength$$ = (new Date).getTime() - this.$m_touchStart$;
    this.$m_touchActive$ && !$event$$140$$.defaultPrevented && ($target$$98$$ = $event$$140$$.target, this.$m_isResizing$ && this.$isResizeEnabled$() ? (this.$handleResizeMouseUp$($event$$140$$), this.$m_currentX$ != this.$m_startX$ && this.$m_currentY$ != this.$m_startY$ && $event$$140$$.preventDefault()) : this.$m_currentX$ == this.$m_startX$ && this.$m_currentY$ == this.$m_startY$ && $header$$11_touchLength$$ < $tapMax$$ ? this.$_isDOMElementSortable$($target$$98$$) && ($event$$140$$.preventDefault(), 
    this.$_handleHeaderSort$($event$$140$$), this.$_removeTouchSelectionAffordance$()) : this.$m_databodyMove$ ? ($event$$140$$.preventDefault(), this.$m_databodyMove$ = !1, this.$_handleMoveMouseUp$(!0)) : ($header$$11_touchLength$$ = this.$findHeader$($target$$98$$), this.$_handleSwipe$($event$$140$$, this.$getHeaderCellAxis$($header$$11_touchLength$$))));
    this.$handleHeaderTouchCancel$();
  };
  $DvtDataGrid$$.prototype.$handleHeaderTouchCancel$ = function $$DvtDataGrid$$$$$handleHeaderTouchCancel$$() {
    this.$m_databodyMove$ && (this.$_handleMoveMouseUp$(!1), this.$m_databodyMove$ = !1);
    this.$m_touchActive$ = !1;
    this.$m_currentY$ = this.$m_currentX$ = this.$m_prevY$ = this.$m_prevX$ = this.$m_startY$ = this.$m_startX$ = 0;
  };
  $DvtDataGrid$$.prototype.$_handleNonSwipeScroll$ = function $$DvtDataGrid$$$$$_handleNonSwipeScroll$$($diffX$$2$$, $diffY$$2$$) {
    var $time$$2$$ = (new Date).getTime();
    this.$_disableTouchScrollAnimation$();
    this.$scrollDelta$($diffX$$2$$, $diffY$$2$$);
    $time$$2$$ - this.$m_startTime$ > $DvtDataGrid$$.$TAP_AND_SCROLL_RESET$ && (this.$m_startX$ = this.$m_currentX$, this.$m_startY$ = this.$m_currentY$, this.$m_startTime$ = (new Date).getTime());
  };
  $DvtDataGrid$$.prototype.$_handleSwipe$ = function $$DvtDataGrid$$$$$_handleSwipe$$($event$$142$$, $axis$$13$$) {
    var $duration$$14_momentumY$$, $momentumX_rtl$$2$$, $diffX$$3$$, $diffY$$3$$, $transitionDuration$$;
    $duration$$14_momentumY$$ = (new Date).getTime() - this.$m_startTime$;
    $momentumX_rtl$$2$$ = this.$m_resources$.$isRTLMode$();
    $diffX$$3$$ = this.$m_currentX$ - this.$m_startX$;
    $diffY$$3$$ = this.$m_currentY$ - this.$m_startY$;
    $momentumX_rtl$$2$$ && ($diffX$$3$$ *= -1);
    Math.abs($diffX$$3$$) < $DvtDataGrid$$.$MIN_SWIPE_DISTANCE$ && Math.abs($diffY$$3$$) < $DvtDataGrid$$.$MIN_SWIPE_DISTANCE$ && $duration$$14_momentumY$$ < $DvtDataGrid$$.$MIN_SWIPE_DURATION$ ? ($event$$142$$.preventDefault(), this.$_isSelectionEnabled$() && this.$_scrollTouchSelectionAffordance$()) : $duration$$14_momentumY$$ < $DvtDataGrid$$.$MAX_SWIPE_DURATION$ && ($event$$142$$.preventDefault(), "row" != $axis$$13$$ ? ($momentumX_rtl$$2$$ = this.$_calculateMomentum$(this.$m_currentX$, this.$m_startX$, 
    $duration$$14_momentumY$$, this.$m_currentScrollLeft$, this.$m_scrollWidth$, $momentumX_rtl$$2$$), !isNaN($momentumX_rtl$$2$$.$overScroll$) && (0 < $momentumX_rtl$$2$$.$overScroll$ || this.$m_stopColumnFetch$) && (this.$m_extraScrollOverX$ = -1 * $momentumX_rtl$$2$$.$overScroll$)) : ($momentumX_rtl$$2$$ = {duration:0, $destination$:0}, $diffX$$3$$ = 0), "column" != $axis$$13$$ ? ($duration$$14_momentumY$$ = this.$_calculateMomentum$(this.$m_currentY$, this.$m_startY$, $duration$$14_momentumY$$, 
    this.$m_currentScrollTop$, this.$m_scrollHeight$), !isNaN($duration$$14_momentumY$$.$overScroll$) && (0 < $duration$$14_momentumY$$.$overScroll$ || this.$m_stopRowFetch$) && (this.$m_extraScrollOverY$ = -1 * $duration$$14_momentumY$$.$overScroll$)) : ($duration$$14_momentumY$$ = {duration:0, $destination$:0}, $diffY$$3$$ = 0), $transitionDuration$$ = Math.max($momentumX_rtl$$2$$.duration, $duration$$14_momentumY$$.duration), this.$m_databody$.firstChild.style.webkitTransitionDuration = $transitionDuration$$ + 
    "ms", this.$m_rowHeader$.firstChild.style.webkitTransitionDuration = $transitionDuration$$ + "ms", this.$m_colHeader$.firstChild.style.webkitTransitionDuration = $transitionDuration$$ + "ms", this.$scrollDelta$($diffX$$3$$ + $momentumX_rtl$$2$$.$destination$, $diffY$$3$$ + $duration$$14_momentumY$$.$destination$));
  };
  $DvtDataGrid$$.prototype.fireEvent = function $$DvtDataGrid$$$$fireEvent$($functionName$$, $details$$1$$) {
    var $callback$$93$$;
    if (null != $functionName$$ && null != $details$$1$$) {
      return $callback$$93$$ = this.callbacks[$functionName$$], null != $callback$$93$$ ? $callback$$93$$($details$$1$$) : !0;
    }
  };
  $DvtDataGrid$$.prototype.addListener = function $$DvtDataGrid$$$$addListener$($functionName$$1$$, $handler$$47$$) {
    this.callbacks[$functionName$$1$$] = $handler$$47$$;
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.addListener", $DvtDataGrid$$.prototype.addListener, void 0);
  $DvtDataGrid$$.prototype.$setElementHeight$ = function $$DvtDataGrid$$$$$setElementHeight$$($elem$$34$$, $height$$27$$) {
    $elem$$34$$.style.height = $height$$27$$ + "px";
  };
  $DvtDataGrid$$.prototype.$getElementHeight$ = function $$DvtDataGrid$$$$$getElementHeight$$($elem$$35$$) {
    var $height$$28$$;
    if (-1 < $elem$$35$$.style.height.indexOf("px")) {
      return parseInt($elem$$35$$.style.height, 10);
    }
    document.body.contains($elem$$35$$) ? $height$$28$$ = Math.floor($elem$$35$$.getBoundingClientRect().height) : ($elem$$35$$.style.visibility = "hidden", document.body.appendChild($elem$$35$$), $height$$28$$ = Math.floor($elem$$35$$.getBoundingClientRect().height), document.body.removeChild($elem$$35$$), $elem$$35$$.style.visibility = "");
    return $height$$28$$;
  };
  $DvtDataGrid$$.prototype.$setElementWidth$ = function $$DvtDataGrid$$$$$setElementWidth$$($elem$$36$$, $width$$24$$) {
    $elem$$36$$.style.width = $width$$24$$ + "px";
  };
  $DvtDataGrid$$.prototype.$getElementWidth$ = function $$DvtDataGrid$$$$$getElementWidth$$($elem$$37$$) {
    var $width$$25$$;
    if (-1 < $elem$$37$$.style.width.indexOf("px")) {
      return parseInt($elem$$37$$.style.width, 10);
    }
    document.body.contains($elem$$37$$) ? $width$$25$$ = Math.floor($elem$$37$$.getBoundingClientRect().width) : ($elem$$37$$.style.visibility = "hidden", document.body.appendChild($elem$$37$$), $width$$25$$ = Math.floor($elem$$37$$.getBoundingClientRect().width), document.body.removeChild($elem$$37$$), $elem$$37$$.style.visibility = "");
    return $width$$25$$;
  };
  $DvtDataGrid$$.prototype.$setElementDir$ = function $$DvtDataGrid$$$$$setElementDir$$($elem$$38$$, $pix$$, $dir$$9$$) {
    $elem$$38$$.style[$dir$$9$$] = $pix$$ + "px";
  };
  $DvtDataGrid$$.prototype.$getElementDir$ = function $$DvtDataGrid$$$$$getElementDir$$($elem$$39$$, $dir$$10$$) {
    return parseInt($elem$$39$$.style[$dir$$10$$], 10);
  };
  $DvtDataGrid$$.$BEFORE$ = 1;
  $DvtDataGrid$$.$AFTER$ = 2;
  $DvtDataGrid$$.$INSIDE$ = 3;
  $DvtDataGrid$$.prototype.$_isInViewport$ = function $$DvtDataGrid$$$$$_isInViewport$$($columnIndex$$1_indexes$$6$$) {
    var $rowIndex$$1$$;
    $rowIndex$$1$$ = $columnIndex$$1_indexes$$6$$.row;
    $columnIndex$$1_indexes$$6$$ = $columnIndex$$1_indexes$$6$$.column;
    return-1 === $rowIndex$$1$$ && -1 === $columnIndex$$1_indexes$$6$$ ? -1 : -1 === $rowIndex$$1$$ ? $columnIndex$$1_indexes$$6$$ < this.$m_startCol$ ? $DvtDataGrid$$.$BEFORE$ : $columnIndex$$1_indexes$$6$$ > this.$m_endCol$ ? $DvtDataGrid$$.$AFTER$ : $DvtDataGrid$$.$INSIDE$ : -1 === $columnIndex$$1_indexes$$6$$ ? $rowIndex$$1$$ < this.$m_startRow$ ? $DvtDataGrid$$.$BEFORE$ : $rowIndex$$1$$ > this.$m_endRow$ ? $DvtDataGrid$$.$AFTER$ : $DvtDataGrid$$.$INSIDE$ : $columnIndex$$1_indexes$$6$$ >= this.$m_startCol$ && 
    $columnIndex$$1_indexes$$6$$ <= this.$m_endCol$ && $rowIndex$$1$$ >= this.$m_startRow$ && $rowIndex$$1$$ <= this.$m_endRow$ ? $DvtDataGrid$$.$INSIDE$ : -1;
  };
  $DvtDataGrid$$.prototype.$handleModelEvent$ = function $$DvtDataGrid$$$$$handleModelEvent$$($cellSet$$7_event$$143$$) {
    var $operation$$3$$, $keys$$17$$, $headerSet$$7$$, $indexes$$7$$, $source$$10$$, $indices$$1$$, $silent$$22$$;
    this.$m_initialized$ ? ($operation$$3$$ = $cellSet$$7_event$$143$$.operation, $keys$$17$$ = $cellSet$$7_event$$143$$.keys, $cellSet$$7_event$$143$$.header && ($headerSet$$7$$ = $cellSet$$7_event$$143$$.header), $indices$$1$$ = $cellSet$$7_event$$143$$.indices, $source$$10$$ = $cellSet$$7_event$$143$$.source, $indexes$$7$$ = $cellSet$$7_event$$143$$.indexes, $silent$$22$$ = $cellSet$$7_event$$143$$.silent, "insert" === $operation$$3$$ ? ($cellSet$$7_event$$143$$ = $cellSet$$7_event$$143$$.result, 
    this.$_adjustActive$($operation$$3$$, $indexes$$7$$), this.$_adjustSelectionOnModelChange$($operation$$3$$, $keys$$17$$, $indexes$$7$$), null != $cellSet$$7_event$$143$$ ? $source$$10$$ && $oj$$11$$.$FlattenedTreeDataGridDataSource$ && $source$$10$$ instanceof $oj$$11$$.$FlattenedTreeDataGridDataSource$ ? this.$_handleModelInsertRangeEvent$($cellSet$$7_event$$143$$, $headerSet$$7$$) : this.$_handleModelInsertRangeEvent$($cellSet$$7_event$$143$$) : this.$_handleModelInsertEvent$($indexes$$7$$, 
    $keys$$17$$)) : "update" === $operation$$3$$ ? this.$_handleModelUpdateEvent$($indexes$$7$$) : "delete" === $operation$$3$$ ? (this.$_adjustActive$($operation$$3$$, $indexes$$7$$), this.$_adjustSelectionOnModelChange$($operation$$3$$, $keys$$17$$, $indexes$$7$$), $source$$10$$ && $oj$$11$$.$FlattenedTreeDataGridDataSource$ && $source$$10$$ instanceof $oj$$11$$.$FlattenedTreeDataGridDataSource$ && this.$m_utils$.$supportsTransitions$() ? this.$_handleModelDeleteEventWithAnimation$($keys$$17$$) : 
    $indices$$1$$ && this.$m_utils$.$supportsTransitions$() ? this.$_handleModelDeleteEventWithAnimation$($keys$$17$$, $indices$$1$$) : this.$_handleModelDeleteEvent$($indexes$$7$$, $keys$$17$$, $silent$$22$$)) : "refresh" === $operation$$3$$ || "reset" === $operation$$3$$ ? this.$_handleModelRefreshEvent$() : "sync" === $operation$$3$$ && this.$_handleModelSyncEvent$($cellSet$$7_event$$143$$)) : (void 0 == this.$m_modelEvents$ && (this.$m_modelEvents$ = []), this.$m_modelEvents$.push($cellSet$$7_event$$143$$));
  };
  $DvtDataGrid$$.prototype.$_adjustActive$ = function $$DvtDataGrid$$$$$_adjustActive$$($operation$$4$$, $indexes$$8$$) {
    var $activeRowIndex$$, $i$$161$$, $rowIndex$$2$$, $activeHeader$$, $adjustment$$4$$ = 0;
    if (null != this.$m_active$) {
      if ("cell" == this.$m_active$.type) {
        $activeHeader$$ = !1, $activeRowIndex$$ = this.$m_active$.indexes.row;
      } else {
        if ("row" === this.$m_active$.axis) {
          $activeHeader$$ = !0, $activeRowIndex$$ = this.$m_active$.index;
        } else {
          return;
        }
      }
      Array.isArray($indexes$$8$$) || ($indexes$$8$$ = Array($indexes$$8$$));
      if (!0 === this.$m_moveActive$) {
        if ("insert" === $operation$$4$$) {
          $activeHeader$$ ? this.$m_active$.index = $indexes$$8$$[0].row : this.$m_active$.indexes.row = $indexes$$8$$[0].row;
          return;
        }
        if ("delete" === $operation$$4$$ && $indexes$$8$$[0].row === $activeRowIndex$$) {
          return;
        }
      }
      $adjustment$$4$$ = "insert" === $operation$$4$$ ? 1 : -1;
      for ($i$$161$$ = 0;$i$$161$$ < $indexes$$8$$.length;$i$$161$$++) {
        $rowIndex$$2$$ = $indexes$$8$$[$i$$161$$].row, $rowIndex$$2$$ < $activeRowIndex$$ ? $activeHeader$$ ? this.$m_active$.index += $adjustment$$4$$ : this.$m_active$.indexes.row += $adjustment$$4$$ : $rowIndex$$2$$ === $activeRowIndex$$ && "delete" === $operation$$4$$ && this.$_setActive$(null);
      }
    }
  };
  $DvtDataGrid$$.prototype.$_adjustSelectionOnModelChange$ = function $$DvtDataGrid$$$$$_adjustSelectionOnModelChange$$($movedRow_operation$$5$$, $keys$$18$$, $indexes$$9$$) {
    var $selection$$2$$, $i$$162$$, $rowKey$$2$$, $rowIndex$$3$$, $j$$24$$, $range$$5$$, $newRowKey_startRowKey$$, $endRowKey$$, $startRowIndex$$, $endRowIndex$$, $adjustment$$5$$;
    Array.isArray($keys$$18$$) || ($keys$$18$$ = Array($keys$$18$$));
    Array.isArray($indexes$$9$$) || ($indexes$$9$$ = Array($indexes$$9$$));
    $selection$$2$$ = this.$GetSelection$();
    if (null == $keys$$18$$ || null == $indexes$$9$$ || $keys$$18$$.length != $indexes$$9$$.length || 0 == $selection$$2$$.length) {
      this.$m_moveActive$ && "insert" == $movedRow_operation$$5$$ && (this.$_isSelectionEnabled$() && this.$_isDatabodyCellActive$() && ($movedRow_operation$$5$$ = "cell" == this.$m_options$.$getSelectionMode$() ? this.createRange(this.$m_active$.indexes, this.$m_active$.indexes, $keys$$18$$[0], $keys$$18$$[0]) : this.createRange($indexes$$9$$[0], $indexes$$9$$[0], $keys$$18$$[0], $keys$$18$$[0]), this.$m_selectionFrontier$ = this.$m_active$.indexes, $selection$$2$$.push($movedRow_operation$$5$$)), 
      this.$m_moveActive$ = !1);
    } else {
      for ($adjustment$$5$$ = "insert" === $movedRow_operation$$5$$ ? 1 : -1, $i$$162$$ = 0;$i$$162$$ < $keys$$18$$.length;$i$$162$$++) {
        for ($rowKey$$2$$ = $keys$$18$$[$i$$162$$].row, $rowIndex$$3$$ = $indexes$$9$$[$i$$162$$].row, $j$$24$$ = $selection$$2$$.length;$j$$24$$--;) {
          $range$$5$$ = $selection$$2$$[$j$$24$$], $newRowKey_startRowKey$$ = $range$$5$$.startKey.row, $endRowKey$$ = $range$$5$$.endKey.row, $startRowIndex$$ = $range$$5$$.startIndex.row, $endRowIndex$$ = $range$$5$$.endIndex.row, $newRowKey_startRowKey$$ == $rowKey$$2$$ ? $endRowKey$$ == $rowKey$$2$$ && "delete" == $movedRow_operation$$5$$ ? $selection$$2$$.splice($j$$24$$, 1) : ($newRowKey_startRowKey$$ = this.$_getKey$(this.$m_databody$.firstChild.childNodes[$range$$5$$.startIndex.row + 1 - 
          this.$m_startRow$]), $range$$5$$.startKey.row = $newRowKey_startRowKey$$, $range$$5$$.endIndex.row += $adjustment$$5$$) : $endRowKey$$ == $rowKey$$2$$ ? ($newRowKey_startRowKey$$ = this.$_getKey$(this.$m_databody$.firstChild.childNodes[$range$$5$$.endIndex.row - 1 - this.$m_startRow$]), $range$$5$$.endKey.row = $newRowKey_startRowKey$$, $range$$5$$.endIndex.row += $adjustment$$5$$) : $rowIndex$$3$$ < $startRowIndex$$ ? ($range$$5$$.startIndex.row += $adjustment$$5$$, $range$$5$$.endIndex.row += 
          $adjustment$$5$$) : $rowIndex$$3$$ < $endRowIndex$$ && ($range$$5$$.endIndex.row += $adjustment$$5$$);
        }
      }
    }
  };
  $DvtDataGrid$$.prototype.$_handleModelInsertEvent$ = function $$DvtDataGrid$$$$$_handleModelInsertEvent$$($indexes$$10$$, $keys$$19$$) {
    var $flag$$2_row$$19_rowHeader$$14$$;
    $flag$$2_row$$19_rowHeader$$14$$ = this.$_isInViewport$($indexes$$10$$);
    $flag$$2_row$$19_rowHeader$$14$$ === $DvtDataGrid$$.$INSIDE$ || $flag$$2_row$$19_rowHeader$$14$$ === $DvtDataGrid$$.$AFTER$ && $indexes$$10$$.row == this.$m_endRow$ + 1 ? null != $keys$$19$$.row && (this.$_databodyEmpty$() ? (this.empty(), this.refresh(this.$m_root$)) : (this.fetchHeaders("row", $indexes$$10$$.row, this.$m_rowHeader$, 1, {success:this.$_handleHeaderInsertsFetchSuccess$}), this.fetchCells(this.$m_databody$, this.$m_scroller$, $indexes$$10$$.row, this.$m_startCol$, 1, this.$m_endCol$ - 
    this.$m_startCol$ + 1, {success:this.$_handleCellInsertsFetchSuccess$}))) : ($flag$$2_row$$19_rowHeader$$14$$ === $DvtDataGrid$$.$BEFORE$ && (this.$m_startRow$++, this.$m_startRowHeader$++, this.$m_endRow$++, this.$m_endRowHeader$++, this.$m_startRowPixel$ += this.$m_avgRowHeight$, this.$m_startRowHeaderPixel$ += this.$m_avgRowHeight$, this.$m_endRowPixel$ += this.$m_avgRowHeight$, this.$m_endRowHeaderPixel$ += this.$m_avgRowHeight$, $flag$$2_row$$19_rowHeader$$14$$ = this.$m_databody$.firstChild.firstChild, 
    null != $flag$$2_row$$19_rowHeader$$14$$ && this.$pushRowsDown$($flag$$2_row$$19_rowHeader$$14$$, this.$m_avgRowHeight$), $flag$$2_row$$19_rowHeader$$14$$ = this.$m_rowHeader$.firstChild.firstChild, null != $flag$$2_row$$19_rowHeader$$14$$ && this.$pushRowsDown$($flag$$2_row$$19_rowHeader$$14$$, this.$m_avgRowHeight$)), this.$scrollToIndex$($indexes$$10$$));
  };
  $DvtDataGrid$$.prototype.$_handleCellInsertsFetchSuccess$ = function $$DvtDataGrid$$$$$_handleCellInsertsFetchSuccess$$($cellSet$$8$$, $cellRanges$$) {
    this.$m_initialized$ = !1;
    this.$handleCellsFetchSuccess$($cellSet$$8$$, $cellRanges$$, this.$m_endRow$ >= $cellRanges$$[0].start);
    this.$_scrollRowIntoViewport$($cellRanges$$[0].start);
    this.$_isHighWatermarkScrolling$() || this.$_cleanupViewport$();
    this.$updateRowBanding$();
    this.$m_stopRowFetch$ = !1;
    -1 != this.$m_endRowHeader$ && (this.$m_stopRowHeaderFetch$ = !1);
    this.$fillViewport$(this.$m_currentScrollLeft$, this.$m_currentScrollTop$);
  };
  $DvtDataGrid$$.prototype.$_handleHeaderInsertsFetchSuccess$ = function $$DvtDataGrid$$$$$_handleHeaderInsertsFetchSuccess$$($headerSet$$8$$, $headerRanges$$) {
    this.$m_resizeRequired$ = !0;
    this.$handleHeadersFetchSuccess$($headerSet$$8$$, $headerRanges$$, this.$m_endRowHeader$ >= $headerRanges$$.start);
  };
  $DvtDataGrid$$.prototype.$_scrollRowIntoViewport$ = function $$DvtDataGrid$$$$$_scrollRowIntoViewport$$($index$$111_viewportBottom$$3$$) {
    var $row$$20_rowTop$$, $diff_viewportTop$$2$$;
    $row$$20_rowTop$$ = this.$m_databody$.firstChild.childNodes[$index$$111_viewportBottom$$3$$ - this.$m_startRow$];
    null != $row$$20_rowTop$$ && ($diff_viewportTop$$2$$ = this.$m_currentScrollTop$, $index$$111_viewportBottom$$3$$ = this.$m_currentScrollTop$ + this.$getElementHeight$(this.$m_databody$), $row$$20_rowTop$$ = $row$$20_rowTop$$.offsetTop, $diff_viewportTop$$2$$ -= $row$$20_rowTop$$, 0 < $diff_viewportTop$$2$$ ? this.$scrollDelta$(0, $diff_viewportTop$$2$$) : ($diff_viewportTop$$2$$ = $index$$111_viewportBottom$$3$$ - $row$$20_rowTop$$, 0 > $diff_viewportTop$$2$$ && this.$scrollDelta$(0, $diff_viewportTop$$2$$)));
  };
  $DvtDataGrid$$.prototype.$_cleanupViewport$ = function $$DvtDataGrid$$$$$_cleanupViewport$$() {
    var $viewportTop$$3$$, $viewportBottom$$4$$;
    $viewportTop$$3$$ = this.$m_currentScrollTop$;
    $viewportBottom$$4$$ = this.$m_currentScrollTop$ + this.$getElementHeight$(this.$m_databody$);
    $viewportTop$$3$$ > this.$m_startRowPixel$ ? this.$m_endRow$ - this.$m_startRow$ > this.$MAX_ROW_THRESHOLD$ && this.$removeRowsFromTop$(this.$m_databody$) : $viewportBottom$$4$$ < this.$m_endRowPixel$ && this.$m_endRow$ - this.$m_startRow$ > this.$MAX_ROW_THRESHOLD$ && this.$removeRowsFromBottom$(this.$m_databody$);
    $viewportTop$$3$$ > this.$m_startRowHeaderPixel$ ? this.$m_endRowHeader$ - this.$m_startRowHeader$ > this.$MAX_ROW_THRESHOLD$ && this.$removeRowHeadersFromTop$(this.$m_rowHeader$) : $viewportBottom$$4$$ < this.$m_endRowPixel$ && this.$m_endRowHeader$ - this.$m_startRowHeader$ > this.$MAX_ROW_THRESHOLD$ && this.$removeRowHeadersFromBottom$(this.$m_rowHeader$);
  };
  $DvtDataGrid$$.prototype.$_handleModelInsertRangeEvent$ = function $$DvtDataGrid$$$$$_handleModelInsertRangeEvent$$($cellSet$$9$$, $headerSet$$9$$) {
    var $headerRange$$8_rowStart$$7$$, $rowCount$$9_rowRange$$5$$, $columnRange$$5_columnStart$$5$$, $columnCount$$3_headerCount$$3_rowFragment$$1$$, $rowHeaderFragment$$1$$, $c$$39$$, $index$$112_returnVal$$12$$, $totalRowHeight$$4$$, $className$$12$$, $renderer$$7$$;
    $headerRange$$8_rowStart$$7$$ = $cellSet$$9$$.getStart("row");
    $rowCount$$9_rowRange$$5$$ = $cellSet$$9$$.getCount("row");
    $columnRange$$5_columnStart$$5$$ = $cellSet$$9$$.getStart("column");
    $columnCount$$3_headerCount$$3_rowFragment$$1$$ = $cellSet$$9$$.getCount("column");
    if (this.$m_utils$.$supportsTransitions$()) {
      if (null != $headerSet$$9$$) {
        for ($rowHeaderFragment$$1$$ = document.createDocumentFragment(), $columnCount$$3_headerCount$$3_rowFragment$$1$$ = $headerSet$$9$$.getCount(), $c$$39$$ = $totalRowHeight$$4$$ = 0, $className$$12$$ = this.$getMappedStyle$("row") + " " + this.$getMappedStyle$("headercell") + " " + this.$getMappedStyle$("rowheadercell"), $renderer$$7$$ = this.$m_options$.$getRenderer$("row");0 < $columnCount$$3_headerCount$$3_rowFragment$$1$$ - $c$$39$$;) {
          $index$$112_returnVal$$12$$ = $headerRange$$8_rowStart$$7$$ + $c$$39$$, $index$$112_returnVal$$12$$ = this.$buildLevelHeaders$($rowHeaderFragment$$1$$, $index$$112_returnVal$$12$$, 0, 0, this.$m_startRowPixel$ + $totalRowHeight$$4$$, !0, !1, $renderer$$7$$, $headerSet$$9$$, "row", $className$$12$$, this.$m_rowHeaderLevelCount$), $c$$39$$ += $index$$112_returnVal$$12$$.count, $totalRowHeight$$4$$ += $index$$112_returnVal$$12$$.totalHeight;
        }
      }
      $columnCount$$3_headerCount$$3_rowFragment$$1$$ = document.createDocumentFragment();
      $index$$112_returnVal$$12$$ = this.$_addRows$($columnCount$$3_headerCount$$3_rowFragment$$1$$, !0, this.$m_startRowPixel$, $headerRange$$8_rowStart$$7$$, $rowCount$$9_rowRange$$5$$, $columnRange$$5_columnStart$$5$$, !1, $cellSet$$9$$);
      this.$_insertRowsWithAnimation$($columnCount$$3_headerCount$$3_rowFragment$$1$$, $rowHeaderFragment$$1$$, $headerRange$$8_rowStart$$7$$, $index$$112_returnVal$$12$$.totalRowHeight);
    } else {
      $rowCount$$9_rowRange$$5$$ = {axis:"row", start:$headerRange$$8_rowStart$$7$$, count:$rowCount$$9_rowRange$$5$$}, $columnRange$$5_columnStart$$5$$ = {axis:"column", start:$columnRange$$5_columnStart$$5$$, count:$columnCount$$3_headerCount$$3_rowFragment$$1$$}, null != $headerSet$$9$$ && ($headerRange$$8_rowStart$$7$$ = {axis:"row", header:this.$m_rowHeader$, start:$headerRange$$8_rowStart$$7$$, count:$headerSet$$9$$.getCount()}, this.$m_fetching$.row = $headerRange$$8_rowStart$$7$$, this.$_handleHeaderInsertsFetchSuccess$($headerSet$$9$$, 
      $headerRange$$8_rowStart$$7$$)), this.$_handleCellInsertsFetchSuccess$($cellSet$$9$$, [$rowCount$$9_rowRange$$5$$, $columnRange$$5_columnStart$$5$$]);
    }
  };
  $DvtDataGrid$$.prototype.$_handleModelUpdateEvent$ = function $$DvtDataGrid$$$$$_handleModelUpdateEvent$$($indexes$$11$$) {
    this.$_isInViewport$($indexes$$11$$) === $DvtDataGrid$$.$INSIDE$ && (-1 != this.$m_endRowHeader$ && this.fetchHeaders("row", $indexes$$11$$.row, this.$m_rowHeader$, 1, {success:this.$_handleHeaderUpdatesFetchSuccess$, error:this.$handleHeadersFetchError$}), this.fetchCells(this.$m_databody$, this.$m_scroller$, $indexes$$11$$.row, this.$m_startCol$, 1, this.$m_endCol$ - this.$m_startCol$ + 1, {success:this.$_handleCellUpdatesFetchSuccess$, error:this.$handleCellsFetchError$}));
  };
  $DvtDataGrid$$.prototype.$_handleHeaderUpdatesFetchSuccess$ = function $$DvtDataGrid$$$$$_handleHeaderUpdatesFetchSuccess$$($headerSet$$10$$, $headerRange$$9$$) {
    var $row$$21_rowStart$$8$$, $rowHeaderContent$$5$$, $fragment$$5_rowIndex$$4$$;
    this.$m_fetching$[$headerRange$$9$$.axis] = !1;
    $row$$21_rowStart$$8$$ = $headerRange$$9$$.start;
    $rowHeaderContent$$5$$ = this.$m_rowHeader$.firstChild;
    $fragment$$5_rowIndex$$4$$ = $row$$21_rowStart$$8$$ - this.$m_startRowHeader$;
    $row$$21_rowStart$$8$$ = $rowHeaderContent$$5$$.childNodes[$fragment$$5_rowIndex$$4$$];
    $fragment$$5_rowIndex$$4$$ = this.$buildRowHeaders$(this.$m_rowHeader$, $headerSet$$10$$, $fragment$$5_rowIndex$$4$$, 1, !0, !0);
    $rowHeaderContent$$5$$.replaceChild($fragment$$5_rowIndex$$4$$, $row$$21_rowStart$$8$$);
    null != this.$m_active$ && "header" === this.$m_active$.type && "row" === this.$m_active$.axis && this.$_getKey$($row$$21_rowStart$$8$$) === this.$m_active$.key && this.$_highlightActive$();
    this.$_signalTaskEnd$();
  };
  $DvtDataGrid$$.prototype.$_handleCellUpdatesFetchSuccess$ = function $$DvtDataGrid$$$$$_handleCellUpdatesFetchSuccess$$($cellSet$$10$$, $cellRange$$6$$) {
    var $rowIndex$$5_rowStart$$9$$, $databodyContent$$10$$, $renderer$$8$$, $columnBandingInterval$$3$$;
    this.$m_fetching$.cells = !1;
    $rowIndex$$5_rowStart$$9$$ = $cellRange$$6$$[0].start;
    $databodyContent$$10$$ = this.$m_databody$.firstChild;
    $renderer$$8$$ = this.$m_options$.$getRenderer$("cell");
    $columnBandingInterval$$3$$ = this.$m_options$.$getColumnBandingInterval$();
    this.$m_options$.$getRowBandingInterval$();
    $rowIndex$$5_rowStart$$9$$ -= this.$m_startRow$;
    this.$_updateCellsInRow$($cellSet$$10$$, $databodyContent$$10$$.childNodes[$rowIndex$$5_rowStart$$9$$], $rowIndex$$5_rowStart$$9$$, $renderer$$8$$, this.$m_startCol$, $columnBandingInterval$$3$$);
    this.$_signalTaskEnd$();
  };
  $DvtDataGrid$$.prototype.$_getUpdateAnimationDuration$ = function $$DvtDataGrid$$$$$_getUpdateAnimationDuration$$() {
    return $DvtDataGrid$$.$UPDATE_ANIMATION_DURATION$;
  };
  $DvtDataGrid$$.prototype.$_updateCellsInRow$ = function $$DvtDataGrid$$$$$_updateCellsInRow$$($cellSet$$11$$, $row$$23$$, $rowIndex$$6$$, $renderer$$9$$, $columnStart$$6$$, $columnBandingInterval$$4$$) {
    var $animationDuration$$, $self$$75$$, $width$$26$$, $listener$$36$$;
    $animationDuration$$ = this.$_getUpdateAnimationDuration$();
    0 !== $animationDuration$$ && this.$m_utils$.$supportsTransitions$() ? ($self$$75$$ = this, $self$$75$$.$_signalTaskStart$(), $listener$$36$$ = function $$listener$$36$$$() {
      $row$$23$$.style.left = "";
      $self$$75$$.$removeTransformMoveStyle$($row$$23$$);
      $row$$23$$.removeEventListener("transitionend", $listener$$36$$, !1);
      $self$$75$$.$_isSelectionEnabled$() && $self$$75$$.$applySelection$();
      $self$$75$$.$_highlightActive$();
      $self$$75$$.$_signalTaskEnd$();
    }, $row$$23$$.addEventListener("transitionend", $listener$$36$$), $width$$26$$ = this.$getElementWidth$(this.$m_databody$), this.$setElementDir$($row$$23$$, $width$$26$$, "left"), this.$m_utils$.empty($row$$23$$), this.$addCellsToRow$($cellSet$$11$$, $row$$23$$, $rowIndex$$6$$, $renderer$$9$$, !0, $columnStart$$6$$, !1, $columnBandingInterval$$4$$), this.$hideStatusText$(), this.$addTransformMoveStyle$($row$$23$$, $animationDuration$$ + "ms", 0, "linear", -1 * $width$$26$$, 0)) : (this.$m_utils$.empty($row$$23$$), 
    this.$addCellsToRow$($cellSet$$11$$, $row$$23$$, $rowIndex$$6$$, $renderer$$9$$, !0, $columnStart$$6$$, !1, $columnBandingInterval$$4$$), this.$_isSelectionEnabled$() && this.$applySelection$(), this.$_highlightActive$());
  };
  $DvtDataGrid$$.prototype.$_handleModelDeleteEvent$ = function $$DvtDataGrid$$$$$_handleModelDeleteEvent$$($databodyContent$$11_indexes$$12$$, $keys$$21_scrollerContent$$3$$, $silent$$23$$) {
    var $key$$61_rowHeader$$15_rowKey$$3$$, $databodyContentHeight$$1_i$$163_totalHeight$$, $row$$24$$, $height$$29$$, $flag$$4_index$$113_referenceRow$$3$$, $beforeRowsHeight$$, $insideRowsHeight$$, $afterRowsHeight$$, $beforeRowsDeleted$$, $insideRowsDeleted$$;
    Array.isArray($keys$$21_scrollerContent$$3$$) || ($keys$$21_scrollerContent$$3$$ = Array($keys$$21_scrollerContent$$3$$), $databodyContent$$11_indexes$$12$$ = Array($databodyContent$$11_indexes$$12$$));
    for ($databodyContentHeight$$1_i$$163_totalHeight$$ = $insideRowsDeleted$$ = $beforeRowsDeleted$$ = $afterRowsHeight$$ = $insideRowsHeight$$ = $beforeRowsHeight$$ = 0;$databodyContentHeight$$1_i$$163_totalHeight$$ < $keys$$21_scrollerContent$$3$$.length;$databodyContentHeight$$1_i$$163_totalHeight$$++) {
      $key$$61_rowHeader$$15_rowKey$$3$$ = $keys$$21_scrollerContent$$3$$[$databodyContentHeight$$1_i$$163_totalHeight$$], $flag$$4_index$$113_referenceRow$$3$$ = $databodyContent$$11_indexes$$12$$[$databodyContentHeight$$1_i$$163_totalHeight$$], null != $key$$61_rowHeader$$15_rowKey$$3$$.row && ($height$$29$$ = 0, $key$$61_rowHeader$$15_rowKey$$3$$ = $key$$61_rowHeader$$15_rowKey$$3$$.row, $flag$$4_index$$113_referenceRow$$3$$ = this.$_isInViewport$($flag$$4_index$$113_referenceRow$$3$$), $flag$$4_index$$113_referenceRow$$3$$ === 
      $DvtDataGrid$$.$BEFORE$ ? ($beforeRowsDeleted$$++, $beforeRowsHeight$$ += this.$m_avgRowHeight$, this.$m_startRowPixel$ -= this.$m_avgRowHeight$, this.$m_endRowPixel$ -= this.$m_avgRowHeight$, -1 != this.$m_endRowHeader$ && (this.$m_startRowHeaderPixel$ -= this.$m_avgRowHeight$, this.$m_endRowHeaderPixel$ -= this.$m_avgRowHeight$), $row$$24$$ = this.$m_databody$.firstChild.firstChild, null != $row$$24$$ && this.$pushRowsUp$($row$$24$$, this.$m_avgRowHeight$), $key$$61_rowHeader$$15_rowKey$$3$$ = 
      this.$m_rowHeader$.firstChild.firstChild, null != $key$$61_rowHeader$$15_rowKey$$3$$ && this.$pushRowsUp$($key$$61_rowHeader$$15_rowKey$$3$$, this.$m_avgRowHeight$)) : $flag$$4_index$$113_referenceRow$$3$$ === $DvtDataGrid$$.$INSIDE$ ? ($insideRowsDeleted$$++, $row$$24$$ = this.$_findRowByKey$($key$$61_rowHeader$$15_rowKey$$3$$), null != $row$$24$$ && ($height$$29$$ = this.$calculateRowHeight$($row$$24$$), $flag$$4_index$$113_referenceRow$$3$$ = $row$$24$$.nextSibling, this.$_remove$($row$$24$$), 
      this.$pushRowsUp$($flag$$4_index$$113_referenceRow$$3$$, $height$$29$$), this.$m_endRowPixel$ -= $height$$29$$), $key$$61_rowHeader$$15_rowKey$$3$$ = this.$_findRowHeaderByKey$($key$$61_rowHeader$$15_rowKey$$3$$), null != $key$$61_rowHeader$$15_rowKey$$3$$ && ($height$$29$$ = this.$calculateRowHeaderHeight$($key$$61_rowHeader$$15_rowKey$$3$$), $flag$$4_index$$113_referenceRow$$3$$ = $key$$61_rowHeader$$15_rowKey$$3$$.nextSibling, this.$_remove$($key$$61_rowHeader$$15_rowKey$$3$$), this.$pushRowHeadersUp$($flag$$4_index$$113_referenceRow$$3$$, 
      $height$$29$$), this.$m_endRowHeaderPixel$ -= $height$$29$$), $insideRowsHeight$$ += $height$$29$$) : "scroll" === this.$m_options$.$getScrollPolicy$() && ($afterRowsHeight$$ += this.$m_avgRowHeight$));
    }
    this.$m_startRow$ -= $beforeRowsDeleted$$;
    this.$m_endRow$ = this.$m_endRow$ - $beforeRowsDeleted$$ - $insideRowsDeleted$$;
    -1 != this.$m_endRowHeader$ && (this.$m_startRowHeader$ -= $beforeRowsDeleted$$, this.$m_endRowHeader$ = this.$m_endRowHeader$ - $beforeRowsDeleted$$ - $insideRowsDeleted$$);
    $databodyContentHeight$$1_i$$163_totalHeight$$ = $beforeRowsHeight$$ + $insideRowsHeight$$ + $afterRowsHeight$$;
    $databodyContent$$11_indexes$$12$$ = this.$m_databody$.firstChild;
    $keys$$21_scrollerContent$$3$$ = this.$m_scroller$.firstChild;
    $databodyContentHeight$$1_i$$163_totalHeight$$ = this.$getElementHeight$($databodyContent$$11_indexes$$12$$) - $databodyContentHeight$$1_i$$163_totalHeight$$;
    this.$setElementHeight$($databodyContent$$11_indexes$$12$$, $databodyContentHeight$$1_i$$163_totalHeight$$);
    this.$setElementHeight$($keys$$21_scrollerContent$$3$$, $databodyContentHeight$$1_i$$163_totalHeight$$);
    this.$resizeGrid$();
    $silent$$23$$ || !0 == this.$m_moveActive$ || (this.$m_resizeRequired$ = !0, this.$m_stopRowFetch$ = !1, -1 != this.$m_endRowHeader$ && (this.$m_stopRowHeaderFetch$ = !1), this.$fillViewport$(this.$m_currentScrollLeft$, this.$m_currentScrollTop$));
    this.$updateRowBanding$();
  };
  $DvtDataGrid$$.prototype.$_handleModelDeleteEventWithAnimation$ = function $$DvtDataGrid$$$$$_handleModelDeleteEventWithAnimation$$($keys$$22$$, $indices$$2$$) {
    $indices$$2$$ ? this.$_removeRowsWithAnimation$($keys$$22$$, $indices$$2$$) : this.$_collapseRowsWithAnimation$($keys$$22$$);
  };
  $DvtDataGrid$$.prototype.$_getSelectionGaps$ = function $$DvtDataGrid$$$$$_getSelectionGaps$$($indices$$3$$) {
    var $i$$164$$, $idx$$12$$, $idxs$$;
    $idx$$12$$ = [];
    $idxs$$ = [];
    for ($i$$164$$ = 0;$i$$164$$ < $indices$$3$$.length - 1;$i$$164$$++) {
      1 == $indices$$3$$[$i$$164$$ + 1] - $indices$$3$$[$i$$164$$] ? $idx$$12$$.push($indices$$3$$[$i$$164$$]) : ($idx$$12$$.push($indices$$3$$[$i$$164$$]), $idxs$$.push($idx$$12$$), $idx$$12$$ = []);
    }
    $idx$$12$$.push($indices$$3$$[$indices$$3$$.length - 1]);
    $idxs$$.push($idx$$12$$);
    return $idxs$$;
  };
  $DvtDataGrid$$.prototype.$_getRowByLocalPosition$ = function $$DvtDataGrid$$$$$_getRowByLocalPosition$$($pos$$5_rowKey$$4$$) {
    $pos$$5_rowKey$$4$$ = this.$_getLocalKeys$({row:$pos$$5_rowKey$$4$$}).row;
    return this.$_findRowByKey$($pos$$5_rowKey$$4$$);
  };
  $DvtDataGrid$$.prototype.$_removeRowsWithAnimation$ = function $$DvtDataGrid$$$$$_removeRowsWithAnimation$$($keys$$23$$, $indices$$4$$) {
    var $self$$76$$, $key$$62_rowHeader$$16_rowKey$$5$$, $i$$165_rwn$$, $j$$25$$, $k$$10$$, $row$$25$$, $totalHeight$$1$$, $height$$30$$, $referenceRow$$4_rwp$$, $databodyContent$$12$$, $lastTopRow$$, $start$$35$$, $firstRowCase$$, $gaps$$, $adjustment$$6_transition_duration$$, $transition_delay$$, $transition_timing_function$$, $opacity$$1$$, $gap_size$$, $listener$$37$$;
    $self$$76$$ = this;
    $self$$76$$.$_signalTaskStart$();
    $gaps$$ = $self$$76$$.$_getSelectionGaps$($indices$$4$$);
    $row$$25$$ = $self$$76$$.$_getRowByLocalPosition$($indices$$4$$[$indices$$4$$.length - 1]);
    $referenceRow$$4_rwp$$ = $row$$25$$.nextSibling;
    $gap_size$$ = 0;
    $adjustment$$6_transition_duration$$ = $self$$76$$.$getCssSupport$("transition-duration");
    $transition_delay$$ = $self$$76$$.$getCssSupport$("transition-delay");
    $transition_timing_function$$ = $self$$76$$.$getCssSupport$("transition-timing-function");
    $opacity$$1$$ = $self$$76$$.$getCssSupport$("opacity");
    $self$$76$$.$getCssSupport$("transform");
    $firstRowCase$$ = !0;
    $databodyContent$$12$$ = $self$$76$$.$m_databody$.firstChild;
    $lastTopRow$$ = $self$$76$$.$_getRowByLocalPosition$($indices$$4$$[0]);
    0 != $lastTopRow$$.previousSibling.childElementCount && ($lastTopRow$$ = $lastTopRow$$.previousSibling, $firstRowCase$$ = !1);
    for ($i$$165_rwn$$ = 0;$i$$165_rwn$$ < $keys$$23$$.length;$i$$165_rwn$$++) {
      $key$$62_rowHeader$$16_rowKey$$5$$ = $keys$$23$$[$i$$165_rwn$$], $key$$62_rowHeader$$16_rowKey$$5$$.row && ($key$$62_rowHeader$$16_rowKey$$5$$ = $key$$62_rowHeader$$16_rowKey$$5$$.row, $row$$25$$ = $self$$76$$.$_findRowByKey$($key$$62_rowHeader$$16_rowKey$$5$$), null != $row$$25$$ ? ($height$$30$$ = $self$$76$$.$calculateRowHeight$($row$$25$$), $self$$76$$.$changeStyleProperty$($row$$25$$, $adjustment$$6_transition_duration$$, "400ms"), $self$$76$$.$changeStyleProperty$($row$$25$$, $transition_delay$$, 
      "0ms"), $self$$76$$.$changeStyleProperty$($row$$25$$, $transition_timing_function$$, "Cubic-bezier(0.70,0.00,0.51,1.29)"), $self$$76$$.$changeStyleProperty$($row$$25$$, $opacity$$1$$, 0)) : $height$$30$$ = $self$$76$$.$m_avgRowHeight$, $key$$62_rowHeader$$16_rowKey$$5$$ = $self$$76$$.$_findRowHeaderByKey$($key$$62_rowHeader$$16_rowKey$$5$$), null != $key$$62_rowHeader$$16_rowKey$$5$$ && ($height$$30$$ = $self$$76$$.$calculateRowHeaderHeight$($key$$62_rowHeader$$16_rowKey$$5$$), $referenceRow$$4_rwp$$ = 
      $key$$62_rowHeader$$16_rowKey$$5$$.nextSibling, $self$$76$$.$pushRowHeadersUp$($referenceRow$$4_rwp$$, $height$$30$$), $self$$76$$.$_remove$($key$$62_rowHeader$$16_rowKey$$5$$), $key$$62_rowHeader$$16_rowKey$$5$$.style.display = "none", $self$$76$$.$m_endRowHeader$ -= 1, $self$$76$$.$m_endRowHeaderPixel$ -= $height$$30$$), $self$$76$$.$m_endRow$ -= 1, $self$$76$$.$m_endRowPixel$ -= $height$$30$$, $totalHeight$$1$$ += $height$$30$$);
    }
    if (1 < $gaps$$.length) {
      for ($i$$165_rwn$$ = 0;$i$$165_rwn$$ < $gaps$$.length - 1;$i$$165_rwn$$++) {
        for ($gap_size$$ += $gaps$$[$i$$165_rwn$$].length, $adjustment$$6_transition_duration$$ = $height$$30$$ * $gap_size$$, $j$$25$$ = $gaps$$[$i$$165_rwn$$][$gaps$$[$i$$165_rwn$$].length - 1] + 1;$j$$25$$ < $gaps$$[$i$$165_rwn$$ + 1][0];$j$$25$$++) {
          $row$$25$$ = $self$$76$$.$_getRowByLocalPosition$($j$$25$$), $self$$76$$.$addTransformMoveStyle$($row$$25$$, "600ms", "150ms", "Cubic-bezier(0.70,0.00,0.51,1.29)", 0, "-" + $adjustment$$6_transition_duration$$);
        }
      }
    }
    $i$$165_rwn$$ = $referenceRow$$4_rwp$$;
    for ($adjustment$$6_transition_duration$$ = $height$$30$$ * $keys$$23$$.length;$i$$165_rwn$$;) {
      $referenceRow$$4_rwp$$ = $i$$165_rwn$$.previousSibling, $self$$76$$.$addTransformMoveStyle$($i$$165_rwn$$, "600ms", "150ms", "Cubic-bezier(0.70,0.00,0.51,1.29)", 0, "-" + $adjustment$$6_transition_duration$$), $i$$165_rwn$$ = $i$$165_rwn$$.nextSibling, $i$$165_rwn$$ || ($listener$$37$$ = function $$listener$$37$$$() {
        for ($j$$25$$ = 0;$j$$25$$ < $keys$$23$$.length;$j$$25$$++) {
          $keys$$23$$[$j$$25$$].row && ($row$$25$$ = $self$$76$$.$_findRowByKey$($keys$$23$$[$j$$25$$].row), $self$$76$$.$_remove$($row$$25$$), $row$$25$$.style.display = "none");
        }
        $start$$35$$ = -1;
        for ($k$$10$$ = 1;$k$$10$$ < $databodyContent$$12$$.childElementCount;$k$$10$$++) {
          $row$$25$$ = $databodyContent$$12$$.childNodes[$k$$10$$], $self$$76$$.$_getKey$($lastTopRow$$) && $self$$76$$.$_getKey$($lastTopRow$$) == $self$$76$$.$_getKey$($databodyContent$$12$$.childNodes[$k$$10$$]) && ($start$$35$$ = $k$$10$$ + 1), $self$$76$$.$changeStyleProperty$($row$$25$$, $self$$76$$.$getCssSupport$("z-index"), 0, "remove"), $self$$76$$.$removeTransformMoveStyle$($row$$25$$), 0 < $start$$35$$ ? $databodyContent$$12$$.childNodes[$k$$10$$].style.top = $lastTopRow$$.offsetTop + 
          $height$$30$$ * ($k$$10$$ - $start$$35$$ + 1) + "px" : $firstRowCase$$ && ($databodyContent$$12$$.childNodes[$k$$10$$].style.top = $lastTopRow$$.offsetTop + $height$$30$$ * ($k$$10$$ - 1) + "px");
        }
        $self$$76$$.$setElementHeight$($databodyContent$$12$$, $self$$76$$.$getElementHeight$($databodyContent$$12$$) - $totalHeight$$1$$);
        $self$$76$$.$setElementHeight$($self$$76$$.$m_scroller$.firstChild, $self$$76$$.$getElementHeight$($databodyContent$$12$$) - $totalHeight$$1$$);
        $self$$76$$.$resizeGrid$();
        $self$$76$$.$m_stopRowFetch$ = !1;
        $self$$76$$.$fillViewport$($self$$76$$.$m_currentScrollLeft$, $self$$76$$.$m_currentScrollTop$);
        $self$$76$$.$updateRowBanding$();
        this.removeEventListener("transitionend", $listener$$37$$, !1);
      }, $referenceRow$$4_rwp$$.addEventListener("transitionend", $listener$$37$$, !1));
    }
  };
  $DvtDataGrid$$.prototype.$_collapseRowsWithAnimation$ = function $$DvtDataGrid$$$$$_collapseRowsWithAnimation$$($keys$$24$$) {
    var $self$$77$$, $duration$$16$$, $databodyContent$$13$$, $referenceRow$$5$$, $referenceRowHeader$$1$$, $lastAnimationElement$$, $i$$166$$, $rowKey$$6$$, $row$$26$$, $rowsToRemove$$, $rowHeadersToRemove$$, $totalRowHeight$$5$$, $rowHeader$$17$$, $tranisitionListener$$, $rowHeaderSupport$$1$$;
    $self$$77$$ = this;
    $self$$77$$.$_signalTaskStart$();
    $duration$$16$$ = $DvtDataGrid$$.$COLLAPSE_ANIMATION_DURATION$;
    $rowsToRemove$$ = [];
    $totalRowHeight$$5$$ = 0;
    $rowHeaderSupport$$1$$ = -1 == this.$m_endRowHeader$ ? !1 : !0;
    $databodyContent$$13$$ = this.$m_databody$.firstChild;
    for ($row$$26$$ = $referenceRow$$5$$ = this.$_findRowByKey$($keys$$24$$[0].row).previousSibling;$row$$26$$ && !(this.$getElementDir$($row$$26$$, "top") < this.$m_currentScrollTop$);) {
      this.$changeStyleProperty$($row$$26$$, this.$getCssSupport$("z-index"), 10), $row$$26$$ = $row$$26$$.previousSibling;
    }
    if ($rowHeaderSupport$$1$$) {
      for ($rowHeadersToRemove$$ = [], $row$$26$$ = $referenceRowHeader$$1$$ = this.$_findRowHeaderByKey$($keys$$24$$[0].row).previousSibling;$row$$26$$ && !(this.$getElementDir$($row$$26$$, "top") < this.$m_currentScrollTop$);) {
        this.$changeStyleProperty$($row$$26$$, this.$getCssSupport$("z-index"), 10), $row$$26$$ = $row$$26$$.previousSibling;
      }
    }
    for ($i$$166$$ = 0;$i$$166$$ < $keys$$24$$.length;$i$$166$$++) {
      $rowKey$$6$$ = $keys$$24$$[$i$$166$$].row, $row$$26$$ = this.$_findRowByKey$($rowKey$$6$$), null != $row$$26$$ && ($rowsToRemove$$.push($row$$26$$), $totalRowHeight$$5$$ += this.$getElementHeight$($row$$26$$), this.$setElementDir$($row$$26$$, this.$getElementDir$($row$$26$$, "top") - $totalRowHeight$$5$$, "top"), this.$addTransformMoveStyle$($row$$26$$, 0, 0, "linear", 0, $totalRowHeight$$5$$)), $rowHeaderSupport$$1$$ && ($rowHeader$$17$$ = this.$_findRowHeaderByKey$($rowKey$$6$$), null != 
      $rowHeader$$17$$ && ($rowHeadersToRemove$$.push($rowHeader$$17$$), this.$setElementDir$($rowHeader$$17$$, this.$getElementDir$($rowHeader$$17$$, "top") - $totalRowHeight$$5$$, "top"), this.$addTransformMoveStyle$($rowHeader$$17$$, 0, 0, "linear", 0, $totalRowHeight$$5$$)));
    }
    for (;$row$$26$$.nextSibling;) {
      $row$$26$$ = $row$$26$$.nextSibling, this.$setElementDir$($row$$26$$, this.$getElementDir$($row$$26$$, "top") - $totalRowHeight$$5$$, "top"), this.$addTransformMoveStyle$($row$$26$$, 0, 0, "linear", 0, $totalRowHeight$$5$$), $rowHeaderSupport$$1$$ && ($rowHeader$$17$$ = $rowHeader$$17$$.nextSibling, this.$setElementDir$($rowHeader$$17$$, this.$getElementDir$($rowHeader$$17$$, "top") - $totalRowHeight$$5$$, "top"), this.$addTransformMoveStyle$($rowHeader$$17$$, 0, 0, "linear", 0, $totalRowHeight$$5$$))
      ;
    }
    $lastAnimationElement$$ = $databodyContent$$13$$.lastChild;
    $tranisitionListener$$ = function $$tranisitionListener$$$() {
      var $i$$167$$;
      for ($i$$167$$ = 0;$i$$167$$ < $rowsToRemove$$.length;$i$$167$$++) {
        $self$$77$$.$_remove$($rowsToRemove$$[$i$$167$$]), $rowHeaderSupport$$1$$ && $self$$77$$.$_remove$($rowHeadersToRemove$$[$i$$167$$]);
      }
      $self$$77$$.$setElementHeight$($databodyContent$$13$$, $self$$77$$.$m_endRowPixel$ - $self$$77$$.$m_startRowPixel$);
      $self$$77$$.$setElementHeight$($self$$77$$.$m_scroller$.firstChild, $self$$77$$.$m_endRowPixel$ - $self$$77$$.$m_startRowPixel$);
      $self$$77$$.$resizeGrid$();
      $self$$77$$.$updateRowBanding$();
      $self$$77$$.$fillViewport$($self$$77$$.$m_currentScrollLeft$, $self$$77$$.$m_currentScrollTop$);
      $self$$77$$.$_handleAnimationEnd$();
      $lastAnimationElement$$.removeEventListener("transitionend", $tranisitionListener$$, !1);
    };
    $lastAnimationElement$$.addEventListener("transitionend", $tranisitionListener$$, !1);
    this.$m_endRow$ -= $rowsToRemove$$.length;
    this.$m_endRowPixel$ -= $totalRowHeight$$5$$;
    this.$m_stopRowFetch$ = !1;
    $rowHeaderSupport$$1$$ && (this.$m_endRowHeader$ -= $rowHeadersToRemove$$.length, this.$m_endRowHeaderPixel$ -= $totalRowHeight$$5$$, this.$m_stopRowHeaderFetch$ = !1);
    $row$$26$$ = $referenceRow$$5$$.nextSibling;
    $rowHeaderSupport$$1$$ && ($rowHeader$$17$$ = $referenceRowHeader$$1$$.nextSibling);
    setTimeout(function() {
      for (;$row$$26$$;) {
        $self$$77$$.$addTransformMoveStyle$($row$$26$$, $duration$$16$$ + "ms", 0, "ease-out", 0, 0), $row$$26$$ = $row$$26$$.nextSibling, $rowHeaderSupport$$1$$ && ($self$$77$$.$addTransformMoveStyle$($rowHeader$$17$$, $duration$$16$$ + "ms", 0, "ease-out", 0, 0), $rowHeader$$17$$ = $rowHeader$$17$$.nextSibling);
      }
    }, 0);
  };
  $DvtDataGrid$$.prototype.$_handleAnimationEnd$ = function $$DvtDataGrid$$$$$_handleAnimationEnd$$() {
    var $i$$168$$, $databodyContent$$14$$, $rowHeaderContent$$6$$;
    $databodyContent$$14$$ = this.$m_databody$.firstChild;
    $rowHeaderContent$$6$$ = this.$m_rowHeader$.firstChild;
    for ($i$$168$$ = 0;$i$$168$$ < $databodyContent$$14$$.childNodes.length;$i$$168$$++) {
      this.$removeTransformMoveStyle$($databodyContent$$14$$.childNodes[$i$$168$$]), this.$changeStyleProperty$($databodyContent$$14$$.childNodes[$i$$168$$], this.$getCssSupport$("z-index"), null, "remove"), -1 != this.$m_endRowHeader$ && (this.$removeTransformMoveStyle$($rowHeaderContent$$6$$.childNodes[$i$$168$$]), this.$changeStyleProperty$($rowHeaderContent$$6$$.childNodes[$i$$168$$], this.$getCssSupport$("z-index"), null, "remove"));
    }
    this.$_signalTaskEnd$();
  };
  $DvtDataGrid$$.prototype.$_findRowByKey$ = function $$DvtDataGrid$$$$$_findRowByKey$$($key$$63$$) {
    var $rows$$5$$, $row$$27$$, $i$$169$$, $rowKey$$7$$;
    if (null == this.$m_databody$ || null == this.$m_databody$.firstChild) {
      return null;
    }
    $rows$$5$$ = this.$m_databody$.firstChild.childNodes;
    for ($i$$169$$ = 0;$i$$169$$ < $rows$$5$$.length;$i$$169$$++) {
      if ($row$$27$$ = $rows$$5$$[$i$$169$$], $rowKey$$7$$ = this.$_getKey$($row$$27$$), $rowKey$$7$$ == $key$$63$$) {
        return $row$$27$$;
      }
    }
    return null;
  };
  $DvtDataGrid$$.prototype.$_findRowHeaderByKey$ = function $$DvtDataGrid$$$$$_findRowHeaderByKey$$($key$$64$$) {
    var $rowHeaders$$2$$, $rowHeader$$18$$, $i$$170$$, $rowKey$$8$$;
    if (null == this.$m_rowHeader$) {
      return null;
    }
    $rowHeaders$$2$$ = this.$m_rowHeader$.getElementsByClassName(this.$getMappedStyle$("rowheadercell"));
    for ($i$$170$$ = 0;$i$$170$$ < $rowHeaders$$2$$.length;$i$$170$$++) {
      if ($rowHeader$$18$$ = $rowHeaders$$2$$[$i$$170$$], $rowKey$$8$$ = this.$_getKey$($rowHeader$$18$$), $rowKey$$8$$ == $key$$64$$) {
        return $rowHeader$$18$$;
      }
    }
    return null;
  };
  $DvtDataGrid$$.prototype.$_findColumnHeaderByKey$ = function $$DvtDataGrid$$$$$_findColumnHeaderByKey$$($key$$65$$) {
    var $columnHeaders$$2$$, $columnHeader$$4$$, $i$$171$$, $columnKey$$;
    if (null == this.$m_colHeader$) {
      return null;
    }
    $columnHeaders$$2$$ = this.$m_colHeader$.getElementsByClassName(this.$getMappedStyle$("colheadercell"));
    for ($i$$171$$ = 0;$i$$171$$ < $columnHeaders$$2$$.length;$i$$171$$++) {
      if ($columnHeader$$4$$ = $columnHeaders$$2$$[$i$$171$$], $columnKey$$ = this.$_getKey$($columnHeader$$4$$), $columnKey$$ == $key$$65$$) {
        return $columnHeader$$4$$;
      }
    }
    return null;
  };
  $DvtDataGrid$$.prototype.$_handleModelRefreshEvent$ = function $$DvtDataGrid$$$$$_handleModelRefreshEvent$$() {
    var $visibility$$ = this.$getVisibility$();
    $visibility$$ === $DvtDataGrid$$.$VISIBILITY_STATE_VISIBLE$ ? (this.empty(), null != this.$m_root$.offsetParent ? this.refresh(this.$m_root$) : this.$setVisibility$($DvtDataGrid$$.$VISIBILITY_STATE_REFRESH$)) : $visibility$$ === $DvtDataGrid$$.$VISIBILITY_STATE_HIDDEN$ && (this.empty(), this.$setVisibility$($DvtDataGrid$$.$VISIBILITY_STATE_REFRESH$));
  };
  $DvtDataGrid$$.prototype.$_handleModelSyncEvent$ = function $$DvtDataGrid$$$$$_handleModelSyncEvent$$($event$$144_pageSize$$4$$) {
    $event$$144_pageSize$$4$$ = $event$$144_pageSize$$4$$.pageSize;
    this.$m_fetching$ = {};
    this.$m_startRow$ = 0;
    this.$m_endRow$ = -1;
    this.$m_startRowHeader$ = 0;
    this.$m_endRowHeader$ = -1;
    this.$m_startCol$ = this.$m_endRowHeaderPixel$ = this.$m_startRowHeaderPixel$ = this.$m_endRowPixel$ = this.$m_startRowPixel$ = 0;
    this.$m_endCol$ = -1;
    this.$m_startColHeader$ = 0;
    this.$m_endColHeader$ = -1;
    this.$m_endColHeaderPixel$ = this.$m_startColHeaderPixel$ = this.$m_endColPixel$ = this.$m_startColPixel$ = 0;
    this.$m_columnHeaderLevelCount$ = this.$m_rowHeaderLevelCount$ = void 0;
    this.$m_captureScrolling$ = this.$m_stopDatabodyScroll$ = !1;
    this.$m_isEstimateColumnCount$ = this.$m_isEstimateRowCount$ = this.$m_avgColWidth$ = this.$m_avgRowHeight$ = void 0;
    this.$m_stopColumnHeaderFetch$ = this.$m_stopColumnFetch$ = this.$m_stopRowHeaderFetch$ = this.$m_stopRowFetch$ = !1;
    this.$m_prevActive$ = this.$m_active$ = this.$m_selection$ = null;
    null != this.$m_empty$ && (this.$m_root$.removeChild(this.$m_empty$), this.$m_empty$ = null);
    this.$m_initialized$ = !1;
    this.fetchHeaders("row", 0, this.$m_rowHeader$, $event$$144_pageSize$$4$$, {success:function($headerSet$$11$$, $headerRange$$10$$) {
      this.$handleRowHeadersFetchSuccessForLongScroll$($headerSet$$11$$, $headerRange$$10$$);
    }});
    this.fetchHeaders("column", 0, this.$m_colHeader$, void 0, {success:function($headerSet$$12$$, $headerRange$$11$$) {
      this.$handleColumnHeadersFetchSuccessForLongScroll$($headerSet$$12$$, $headerRange$$11$$);
    }});
    this.fetchCells(this.$m_databody$, this.$m_scroller$, 0, 0, $event$$144_pageSize$$4$$, null, {success:function($cellSet$$12$$, $cellRange$$7$$) {
      this.$handleCellsFetchSuccessForLongScroll$($cellSet$$12$$, $cellRange$$7$$);
    }});
    this.$setInitialScrollPosition$();
  };
  $DvtDataGrid$$.prototype.$_setActiveByIndex$ = function $$DvtDataGrid$$$$$_setActiveByIndex$$($index$$114$$, $event$$145$$, $clearSelection$$) {
    return this.$_setActive$(this.$_getCellByIndex$($index$$114$$), $event$$145$$, $clearSelection$$);
  };
  $DvtDataGrid$$.prototype.$_updateActive$ = function $$DvtDataGrid$$$$$_updateActive$$($activeObject$$) {
    var $level$$18$$, $newActiveElement$$;
    null == $activeObject$$ ? this.$_setActive$(null, null, null, !0) : null != $activeObject$$.keys ? $newActiveElement$$ = this.$_getCellByKeys$($activeObject$$.keys) : null != $activeObject$$.indexes ? $newActiveElement$$ = this.$_getCellByIndex$($activeObject$$.indexes) : null != $activeObject$$.axis && ($level$$18$$ = null == $activeObject$$.level ? 0 : $activeObject$$.level, "column" == $activeObject$$.axis ? null != $activeObject$$.key ? $newActiveElement$$ = this.$_findColumnHeaderByKey$($activeObject$$.key) : 
    null != $activeObject$$.index && ($newActiveElement$$ = this.$_getColumnHeaderByIndex$($activeObject$$.index, $level$$18$$)) : "row" == $activeObject$$.axis && (null != $activeObject$$.key ? $newActiveElement$$ = this.$_findRowHeaderByKey$($activeObject$$.key) : null != $activeObject$$.index && ($newActiveElement$$ = this.$_getRowHeaderByIndex$($activeObject$$.index, $level$$18$$))));
    null != $newActiveElement$$ && this.$_setActive$($newActiveElement$$, null, null, !0);
  };
  $DvtDataGrid$$.prototype.$_setActive$ = function $$DvtDataGrid$$$$$_setActive$$($element$$88$$, $event$$146$$, $clearSelection$$1$$, $silent$$24$$) {
    if (null != $element$$88$$) {
      var $active$$ = this.$_createActiveObject$($element$$88$$);
      if (this.$_compareActive$($active$$, this.$m_active$) && ($silent$$24$$ || this.$_fireBeforeCurrentCellEvent$($active$$, this.$m_active$, $event$$146$$))) {
        return this.$m_prevActive$ = this.$m_active$, this.$m_active$ = $active$$, this.$_scrollToActive$($active$$), $clearSelection$$1$$ && this.$_isSelectionEnabled$() && this.$_clearSelection$(), this.$_unhighlightActiveObject$(this.$m_prevActive$), this.$_highlightActiveObject$(this.$m_active$, this.$m_prevActive$), this.$_manageMoveCursor$(), this.$_isGridEditable$() && this.$_updateEdgeCellBorders$(""), $silent$$24$$ || this.$_fireCurrentCellEvent$($active$$, $event$$146$$), !0;
      }
    } else {
      if (!this.$m_scrollIndexAfterFetch$ && !this.$m_scrollHeaderAfterFetch$) {
        if ($silent$$24$$ || this.$_fireBeforeCurrentCellEvent$($active$$, this.$m_active$, $event$$146$$)) {
          this.$m_prevActive$ = this.$m_active$, this.$m_active$ = null, this.$_unhighlightActiveObject$(this.$m_prevActive$), $silent$$24$$ || this.$_fireCurrentCellEvent$($active$$, $event$$146$$);
        }
        return!0;
      }
    }
    return!1;
  };
  $DvtDataGrid$$.prototype.$_createActiveObject$ = function $$DvtDataGrid$$$$$_createActiveObject$$($element$$89$$) {
    var $context$$58$$ = $element$$89$$[this.$m_resources$.$getMappedAttribute$("context")];
    return this.$m_utils$.$containsCSSClassName$($element$$89$$, this.$getMappedStyle$("headercell")) ? {type:"header", axis:$context$$58$$.axis, index:this.$getHeaderCellIndex$($element$$89$$), key:$context$$58$$.key, level:$context$$58$$.level} : {type:"cell", indexes:{row:this.$getRowIndex$($element$$89$$.parentNode), column:this.$getCellIndex$($element$$89$$)}, keys:{row:$context$$58$$.keys.row, column:$context$$58$$.keys.column}};
  };
  $DvtDataGrid$$.prototype.$_getActiveElement$ = function $$DvtDataGrid$$$$$_getActiveElement$$() {
    return this.$_getElementFromActiveObject$(this.$m_active$);
  };
  $DvtDataGrid$$.prototype.$_getElementFromActiveObject$ = function $$DvtDataGrid$$$$$_getElementFromActiveObject$$($active$$1_elements$$1$$) {
    if (null != $active$$1_elements$$1$$) {
      if ("header" == $active$$1_elements$$1$$.type) {
        if ("row" === $active$$1_elements$$1$$.axis) {
          return this.$_findRowHeaderByKey$($active$$1_elements$$1$$.key);
        }
        if ("column" === $active$$1_elements$$1$$.axis) {
          return this.$_findColumnHeaderByKey$($active$$1_elements$$1$$.key);
        }
      } else {
        if ($active$$1_elements$$1$$ = this.$getElementsInRange$(this.createRange($active$$1_elements$$1$$.indexes)), null != $active$$1_elements$$1$$) {
          return $active$$1_elements$$1$$[0];
        }
      }
    }
    return null;
  };
  $DvtDataGrid$$.prototype.$_compareActive$ = function $$DvtDataGrid$$$$$_compareActive$$($active1$$, $active2$$) {
    if (null != $active1$$ || null != $active2$$) {
      if (null == $active1$$ && null != $active2$$ || null != $active1$$ && null == $active2$$ || $active1$$.type != $active2$$.type) {
        return!0;
      }
      if ("header" == $active1$$.type) {
        if ($active1$$.index != $active2$$.index || $active1$$.key != $active2$$.key || $active1$$.axis != $active2$$.axis || $active1$$.level != $active2$$.level) {
          return!0;
        }
      } else {
        if ($active1$$.indexes.row != $active2$$.indexes.row || $active1$$.indexes.column != $active2$$.indexes.column || $active1$$.keys.row != $active2$$.keys.row || $active1$$.keys.column != $active2$$.keys.column) {
          return!0;
        }
      }
    }
    return!1;
  };
  $DvtDataGrid$$.prototype.$_fireBeforeCurrentCellEvent$ = function $$DvtDataGrid$$$$$_fireBeforeCurrentCellEvent$$($newActive$$, $oldActive$$, $event$$147$$) {
    return this.fireEvent("beforeCurrentCell", {event:$event$$147$$, ui:{currentCell:$newActive$$, previousCurrentCell:$oldActive$$}});
  };
  $DvtDataGrid$$.prototype.$_fireCurrentCellEvent$ = function $$DvtDataGrid$$$$$_fireCurrentCellEvent$$($active$$2$$, $event$$148$$) {
    this.fireEvent("currentCell", {event:$event$$148$$, ui:$active$$2$$});
  };
  $DvtDataGrid$$.prototype.$_isDatabodyCellActive$ = function $$DvtDataGrid$$$$$_isDatabodyCellActive$$() {
    return null != this.$m_active$ && "cell" == this.$m_active$.type;
  };
  $DvtDataGrid$$.prototype.$_updateActiveContext$ = function $$DvtDataGrid$$$$$_updateActiveContext$$($activeObject$$1$$, $prevActiveObject$$) {
    var $axis$$15$$, $index$$115$$, $level$$19$$, $contextObj$$, $skip$$2$$;
    if ("header" === $activeObject$$1$$.type) {
      $axis$$15$$ = $activeObject$$1$$.axis;
      $index$$115$$ = $activeObject$$1$$.index;
      $level$$19$$ = $activeObject$$1$$.level;
      $contextObj$$ = {};
      if ("row" === $activeObject$$1$$.axis) {
        if (1 < this.$m_rowHeaderLevelCount$ && (null == $prevActiveObject$$ || $level$$19$$ !== $prevActiveObject$$.level || $axis$$15$$ !== $prevActiveObject$$.axis) && ($contextObj$$.level = $level$$19$$), null == $prevActiveObject$$ || $index$$115$$ !== $prevActiveObject$$.index || $axis$$15$$ !== $prevActiveObject$$.axis) {
          $contextObj$$.rowHeader = $index$$115$$;
        }
      } else {
        if (1 < this.$m_columnHeaderLevelCount$ && (null == $prevActiveObject$$ || $level$$19$$ !== $prevActiveObject$$.level || $axis$$15$$ !== $prevActiveObject$$.axis) && ($contextObj$$.level = $level$$19$$), null == $prevActiveObject$$ || $index$$115$$ !== $prevActiveObject$$.index || $axis$$15$$ !== $prevActiveObject$$.axis) {
          $contextObj$$.columnHeader = $index$$115$$;
        }
      }
      this.$_updateContextInfo$($contextObj$$, $skip$$2$$);
    } else {
      null == $prevActiveObject$$ || "cell" != $prevActiveObject$$.type || null == $activeObject$$1$$ || this.$m_externalFocus$ || ($activeObject$$1$$.indexes.row === $prevActiveObject$$.indexes.row ? $skip$$2$$ = "row" : $activeObject$$1$$.indexes.column === $prevActiveObject$$.indexes.column && ($skip$$2$$ = "column")), this.$_updateContextInfo$($activeObject$$1$$.indexes, $skip$$2$$);
    }
  };
  $DvtDataGrid$$.prototype.$handleDatabodyClickActive$ = function $$DvtDataGrid$$$$$handleDatabodyClickActive$$($event$$149$$) {
    var $cell$$13$$;
    $cell$$13$$ = this.$findCell$($event$$149$$.target);
    null != $cell$$13$$ && this.$_setActive$($cell$$13$$, $event$$149$$);
  };
  $DvtDataGrid$$.prototype.$handleHeaderClickActive$ = function $$DvtDataGrid$$$$$handleHeaderClickActive$$($event$$150$$) {
    var $header$$12$$;
    $header$$12$$ = this.$findHeader$($event$$150$$.target);
    null != $header$$12$$ && (this.$_isSelectionEnabled$() && this.$_clearSelection$(), this.$_setActive$($header$$12$$, $event$$150$$));
  };
  $DvtDataGrid$$.prototype.$_scrollToActive$ = function $$DvtDataGrid$$$$$_scrollToActive$$($activeObject$$2$$) {
    "header" === $activeObject$$2$$.type ? this.$scrollToHeader$($activeObject$$2$$) : this.$scrollToIndex$($activeObject$$2$$.indexes);
  };
  $DvtDataGrid$$.prototype.$_getCellByIndex$ = function $$DvtDataGrid$$$$$_getCellByIndex$$($elements$$2_indexes$$13$$) {
    $elements$$2_indexes$$13$$ = this.$getElementsInRange$(this.createRange($elements$$2_indexes$$13$$));
    return null != $elements$$2_indexes$$13$$ ? $elements$$2_indexes$$13$$[0] : null;
  };
  $DvtDataGrid$$.prototype.$_getCellByKeys$ = function $$DvtDataGrid$$$$$_getCellByKeys$$($keys$$25$$) {
    var $cells_row$$28$$ = this.$_findRowByKey$($keys$$25$$.row);
    if (null != $cells_row$$28$$) {
      for (var $cells_row$$28$$ = $cells_row$$28$$.childNodes, $i$$172$$ = 0;$i$$172$$ < $cells_row$$28$$.length;$i$$172$$++) {
        if ($cells_row$$28$$[$i$$172$$][this.$m_resources$.$getMappedAttribute$("context")].keys.column === $keys$$25$$.column) {
          return $cells_row$$28$$[$i$$172$$];
        }
      }
    }
    return null;
  };
  $DvtDataGrid$$.prototype.$getRowIndex$ = function $$DvtDataGrid$$$$$getRowIndex$$($row$$29$$) {
    for (var $index$$116$$ = this.$m_startRow$;$row$$29$$.previousSibling;) {
      $index$$116$$ += 1, $row$$29$$ = $row$$29$$.previousSibling;
    }
    return $index$$116$$;
  };
  $DvtDataGrid$$.prototype.$getCellIndex$ = function $$DvtDataGrid$$$$$getCellIndex$$($cell$$14$$) {
    for (var $index$$117$$ = this.$m_startCol$;$cell$$14$$.previousSibling;) {
      $index$$117$$ += 1, $cell$$14$$ = $cell$$14$$.previousSibling;
    }
    return $index$$117$$;
  };
  $DvtDataGrid$$.prototype.$getHeaderCellIndex$ = function $$DvtDataGrid$$$$$getHeaderCellIndex$$($header$$13$$) {
    var $axis$$16$$, $index$$118$$;
    $axis$$16$$ = this.$getHeaderCellAxis$($header$$13$$);
    if ("row" === $axis$$16$$) {
      if (1 < this.$m_rowHeaderLevelCount$) {
        $index$$118$$ = this.$_getAttribute$($header$$13$$.parentNode, "start");
        if ($header$$13$$ === $header$$13$$.parentNode.firstChild) {
          return $index$$118$$;
        }
        $index$$118$$--;
      } else {
        $index$$118$$ = this.$m_startRowHeader$;
      }
    } else {
      if ("column" === $axis$$16$$) {
        if (1 < this.$m_columnHeaderLevelCount$) {
          $index$$118$$ = this.$_getAttribute$($header$$13$$.parentNode, "start");
          if ($header$$13$$ === $header$$13$$.parentNode.firstChild) {
            return $index$$118$$;
          }
          $index$$118$$--;
        } else {
          $index$$118$$ = this.$m_startColHeader$;
        }
      }
    }
    for (;$header$$13$$.previousSibling;) {
      $index$$118$$ += 1, $header$$13$$ = $header$$13$$.previousSibling;
    }
    return $index$$118$$;
  };
  $DvtDataGrid$$.prototype.$getHeaderCellAxis$ = function $$DvtDataGrid$$$$$getHeaderCellAxis$$($header$$14$$) {
    return this.$m_utils$.$containsCSSClassName$($header$$14$$, this.$getMappedStyle$("colheadercell")) ? "column" : this.$m_utils$.$containsCSSClassName$($header$$14$$, this.$getMappedStyle$("rowheadercell")) ? "row" : null;
  };
  $DvtDataGrid$$.prototype.$getHeaderCellLevel$ = function $$DvtDataGrid$$$$$getHeaderCellLevel$$($header$$15$$) {
    var $level$$20$$;
    if (this.$m_utils$.$containsCSSClassName$($header$$15$$, this.$getMappedStyle$("colheadercell"))) {
      if (1 === this.$m_columnHeaderLevelCount$) {
        return 0;
      }
    } else {
      if (this.$m_utils$.$containsCSSClassName$($header$$15$$, this.$getMappedStyle$("rowheadercell")) && 1 === this.$m_rowHeaderLevelCount$) {
        return 0;
      }
    }
    $level$$20$$ = this.$_getAttribute$($header$$15$$.parentNode, "level");
    return $header$$15$$ === $header$$15$$.parentNode.firstChild ? $level$$20$$ : $level$$20$$ + this.$getHeaderCellDepth$($header$$15$$.parentNode.firstChild);
  };
  $DvtDataGrid$$.prototype.$getHeaderCellDepth$ = function $$DvtDataGrid$$$$$getHeaderCellDepth$$($header$$16$$) {
    return this.$_getAttribute$($header$$16$$, "depth");
  };
  $DvtDataGrid$$.prototype.$findCell$ = function $$DvtDataGrid$$$$$findCell$$($elem$$40$$) {
    return this.find($elem$$40$$, "cell");
  };
  $DvtDataGrid$$.prototype.find = function $$DvtDataGrid$$$$find$($elem$$41$$, $key$$66$$, $className$$13$$) {
    if (null == $elem$$41$$ || $elem$$41$$ == this.$getRootElement$()) {
      return null;
    }
    void 0 == $className$$13$$ && ($className$$13$$ = this.$getMappedStyle$($key$$66$$));
    return null == $className$$13$$ ? null : this.$m_utils$.$containsCSSClassName$($elem$$41$$, $className$$13$$) ? $elem$$41$$ : this.find($elem$$41$$.parentNode, $key$$66$$, $className$$13$$);
  };
  $DvtDataGrid$$.prototype.$_highlightActive$ = function $$DvtDataGrid$$$$$_highlightActive$$() {
    this.$_highlightActiveObject$(this.$m_active$, this.$m_prevActive$, void 0);
  };
  $DvtDataGrid$$.prototype.$_unhighlightActive$ = function $$DvtDataGrid$$$$$_unhighlightActive$$() {
    this.$_unhighlightActiveObject$(this.$m_active$, void 0);
  };
  $DvtDataGrid$$.prototype.$_highlightActiveObject$ = function $$DvtDataGrid$$$$$_highlightActiveObject$$($activeObject$$3$$, $prevActiveObject$$1$$, $classNames$$3$$) {
    null == $classNames$$3$$ && ($classNames$$3$$ = ["focus"]);
    if (null != $activeObject$$3$$) {
      var $element$$90$$ = this.$_getElementFromActiveObject$($activeObject$$3$$);
      this.$_highlightElement$($element$$90$$, $classNames$$3$$);
      this.$_setAriaProperties$($activeObject$$3$$, $prevActiveObject$$1$$, $element$$90$$);
    }
  };
  $DvtDataGrid$$.prototype.$_unhighlightActiveObject$ = function $$DvtDataGrid$$$$$_unhighlightActiveObject$$($activeObject$$4$$, $classNames$$4$$) {
    null == $classNames$$4$$ && ($classNames$$4$$ = ["focus"]);
    if (null != $activeObject$$4$$) {
      var $element$$91$$ = this.$_getElementFromActiveObject$($activeObject$$4$$);
      this.$_unhighlightElement$($element$$91$$, $classNames$$4$$);
      this.$_unsetAriaProperties$($element$$91$$);
    }
  };
  $DvtDataGrid$$.prototype.$_highlightElement$ = function $$DvtDataGrid$$$$$_highlightElement$$($element$$92$$, $classNames$$5$$) {
    var $className$$14$$, $i$$173$$;
    for ($i$$173$$ = 0;$i$$173$$ < $classNames$$5$$.length;$i$$173$$++) {
      $className$$14$$ = this.$getMappedStyle$($classNames$$5$$[$i$$173$$]), this.$m_utils$.$addCSSClassName$($element$$92$$, $className$$14$$);
    }
  };
  $DvtDataGrid$$.prototype.$_unhighlightElement$ = function $$DvtDataGrid$$$$$_unhighlightElement$$($element$$93$$, $classNames$$6$$) {
    var $className$$15$$, $i$$174$$;
    for ($i$$174$$ = 0;$i$$174$$ < $classNames$$6$$.length;$i$$174$$++) {
      $className$$15$$ = this.$getMappedStyle$($classNames$$6$$[$i$$174$$]), this.$m_utils$.$removeCSSClassName$($element$$93$$, $className$$15$$);
    }
  };
  $DvtDataGrid$$.prototype.$_setAriaProperties$ = function $$DvtDataGrid$$$$$_setAriaProperties$$($activeObject$$5$$, $prevActiveObject$$2$$, $element$$94$$) {
    var $label$$5$$;
    $label$$5$$ = this.$getLabelledBy$($activeObject$$5$$, $prevActiveObject$$2$$, $element$$94$$);
    this.$_updateActiveContext$($activeObject$$5$$, $prevActiveObject$$2$$);
    $element$$94$$.setAttribute("tabIndex", 0);
    $element$$94$$.setAttribute("aria-labelledby", $label$$5$$);
    null != this.$m_cellToFocus$ && this.$m_cellToFocus$ == $element$$94$$ || !this.$m_shouldFocus$ || $element$$94$$.focus();
    this.$m_shouldFocus$ = !0;
  };
  $DvtDataGrid$$.prototype.$_unsetAriaProperties$ = function $$DvtDataGrid$$$$$_unsetAriaProperties$$($element$$95$$) {
    null != $element$$95$$ && ($element$$95$$.setAttribute("tabIndex", -1), $element$$95$$.removeAttribute("aria-labelledby"));
  };
  $DvtDataGrid$$.prototype.$getLabelledBy$ = function $$DvtDataGrid$$$$$getLabelledBy$$($activeObject$$6_columnHeader$$5$$, $prevActiveObject$$3$$, $element$$96$$) {
    var $label$$6_rowHeader$$19$$, $direction$$5_previousElement$$, $key$$67$$, $previousRowIndex$$, $previousColumnIndex$$;
    $label$$6_rowHeader$$19$$ = "";
    "header" == $activeObject$$6_columnHeader$$5$$.type ? (null == $prevActiveObject$$3$$ || "header" != $prevActiveObject$$3$$.type || this.$m_externalFocus$ || ("row" === $prevActiveObject$$3$$.axis && 1 < this.$m_rowHeaderLevelCount$ ? $direction$$5_previousElement$$ = this.$_getRowHeaderByIndex$($prevActiveObject$$3$$.index, $prevActiveObject$$3$$.level) : "column" === $prevActiveObject$$3$$.axis && 1 < this.$m_columnHeaderLevelCount$ && ($direction$$5_previousElement$$ = this.$_getColumnHeaderByIndex$($prevActiveObject$$3$$.index, 
    $prevActiveObject$$3$$.level))), $label$$6_rowHeader$$19$$ = this.$createSubId$("context") + this.$_getHeaderAndParentIds$($element$$96$$, $direction$$5_previousElement$$), $direction$$5_previousElement$$ = $element$$96$$.getAttribute(this.$m_resources$.$getMappedAttribute$("sortDir")), "ascending" === $direction$$5_previousElement$$ ? ($key$$67$$ = "accessibleSortAscending", $label$$6_rowHeader$$19$$ = $label$$6_rowHeader$$19$$ + " " + this.$createSubId$("state")) : "descending" === $direction$$5_previousElement$$ && 
    ($key$$67$$ = "accessibleSortDescending", $label$$6_rowHeader$$19$$ = $label$$6_rowHeader$$19$$ + " " + this.$createSubId$("state")), !0 === this.$m_externalFocus$ && ($label$$6_rowHeader$$19$$ = [this.$createSubId$("summary"), $label$$6_rowHeader$$19$$].join(" "), this.$m_externalFocus$ = !1), null != $key$$67$$ && this.$_updateStateInfo$($key$$67$$), $element$$96$$.setAttribute("tabIndex", 0)) : (null != $prevActiveObject$$3$$ && ("header" === $prevActiveObject$$3$$.type ? ($previousRowIndex$$ = 
    "row" === $prevActiveObject$$3$$.axis ? $prevActiveObject$$3$$.index : null, $previousColumnIndex$$ = "column" === $prevActiveObject$$3$$.axis ? $prevActiveObject$$3$$.index : null) : ($previousRowIndex$$ = $prevActiveObject$$3$$.indexes.row, $previousColumnIndex$$ = $prevActiveObject$$3$$.indexes.column)), -1 == this.$m_endRowHeader$ || $activeObject$$6_columnHeader$$5$$.indexes.row == $previousRowIndex$$ && !this.$m_externalFocus$ || ($label$$6_rowHeader$$19$$ = this.$getHeaderFromCell$($element$$96$$, 
    "row"), null != $previousRowIndex$$ && ($direction$$5_previousElement$$ = this.$_getRowHeaderByIndex$($previousRowIndex$$, this.$m_rowHeaderLevelCount$ - 1)), $label$$6_rowHeader$$19$$ = this.$_getHeaderAndParentIds$($label$$6_rowHeader$$19$$, $direction$$5_previousElement$$)), -1 == this.$m_endColHeader$ || $activeObject$$6_columnHeader$$5$$.indexes.column == $previousColumnIndex$$ && !this.$m_externalFocus$ || ($activeObject$$6_columnHeader$$5$$ = this.$getHeaderFromCell$($element$$96$$, "column"), 
    null != $previousColumnIndex$$ && ($direction$$5_previousElement$$ = this.$_getColumnHeaderByIndex$($previousColumnIndex$$, this.$m_columnHeaderLevelCount$ - 1)), $label$$6_rowHeader$$19$$ = "" == $label$$6_rowHeader$$19$$ ? this.$_getHeaderAndParentIds$($activeObject$$6_columnHeader$$5$$, $direction$$5_previousElement$$) : [$label$$6_rowHeader$$19$$, this.$_getHeaderAndParentIds$($activeObject$$6_columnHeader$$5$$, $direction$$5_previousElement$$)].join(" ")), $label$$6_rowHeader$$19$$ = "" == 
    $label$$6_rowHeader$$19$$ ? $element$$96$$.id : [$label$$6_rowHeader$$19$$, $element$$96$$.id].join(" "), $label$$6_rowHeader$$19$$ = [this.$createSubId$("context"), $label$$6_rowHeader$$19$$, this.$createSubId$("state")].join(" "), this.$m_externalFocus$ && ($label$$6_rowHeader$$19$$ = [this.$createSubId$("summary"), $label$$6_rowHeader$$19$$].join(" "), this.$m_externalFocus$ = !1));
    return $label$$6_rowHeader$$19$$;
  };
  $DvtDataGrid$$.prototype.$getHeaderFromCell$ = function $$DvtDataGrid$$$$$getHeaderFromCell$$($cell$$15$$, $axis$$17$$) {
    var $colIndex_row$$30_rowIndex$$7$$;
    if ("row" === $axis$$17$$) {
      if (null != this.$m_rowHeader$ && ($colIndex_row$$30_rowIndex$$7$$ = $cell$$15$$.parentNode, $colIndex_row$$30_rowIndex$$7$$ = this.$findIndexOf$($colIndex_row$$30_rowIndex$$7$$) + this.$m_startRow$, -1 < $colIndex_row$$30_rowIndex$$7$$)) {
        return this.$_getRowHeaderByIndex$($colIndex_row$$30_rowIndex$$7$$, this.$m_rowHeaderLevelCount$ - 1);
      }
    } else {
      if ("column" === $axis$$17$$ && null != this.$m_colHeader$ && ($colIndex_row$$30_rowIndex$$7$$ = this.$findIndexOf$($cell$$15$$) + this.$m_startCol$, -1 < $colIndex_row$$30_rowIndex$$7$$)) {
        return this.$_getColumnHeaderByIndex$($colIndex_row$$30_rowIndex$$7$$, this.$m_columnHeaderLevelCount$ - 1);
      }
    }
    return null;
  };
  $DvtDataGrid$$.prototype.$findIndexOf$ = function $$DvtDataGrid$$$$$findIndexOf$$($elem$$42$$) {
    var $child$$2$$, $children$$1$$, $index$$119$$, $i$$175$$;
    $children$$1$$ = $elem$$42$$.parentNode.childNodes;
    $index$$119$$ = -1;
    for ($i$$175$$ = 0;$i$$175$$ < $children$$1$$.length;$i$$175$$ += 1) {
      $child$$2$$ = $children$$1$$[$i$$175$$];
      if ($child$$2$$ === $elem$$42$$) {
        return $index$$119$$ + 1;
      }
      "DIV" == $child$$2$$.nodeName && $index$$119$$++;
    }
    return $index$$119$$;
  };
  $DvtDataGrid$$.prototype.createRange = function $$DvtDataGrid$$$$createRange$($startIndex$$14$$, $endColumn_endIndex$$1$$, $startKey$$, $endKey$$) {
    var $startRow$$3$$, $endRow$$, $startColumn$$, $startRowKey$$1$$, $endRowKey$$1$$, $startColumnKey$$, $endColumnKey$$;
    $endColumn_endIndex$$1$$ && ($startIndex$$14$$.row < $endColumn_endIndex$$1$$.row || -1 == $endColumn_endIndex$$1$$.row ? ($startRow$$3$$ = $startIndex$$14$$.row, $endRow$$ = $endColumn_endIndex$$1$$.row, $startKey$$ && ($startRowKey$$1$$ = $startKey$$.row, $endRowKey$$1$$ = $endKey$$.row)) : ($startRow$$3$$ = $endColumn_endIndex$$1$$.row, $endRow$$ = $startIndex$$14$$.row, $startKey$$ && ($startRowKey$$1$$ = $endKey$$.row, $endRowKey$$1$$ = $startKey$$.row)), isNaN($startIndex$$14$$.column) || 
    isNaN($endColumn_endIndex$$1$$.column) ? ($startIndex$$14$$ = {row:$startRow$$3$$}, $endColumn_endIndex$$1$$ = {row:$endRow$$}) : ($startIndex$$14$$.column < $endColumn_endIndex$$1$$.column || -1 == $endColumn_endIndex$$1$$.column ? ($startColumn$$ = $startIndex$$14$$.column, $endColumn_endIndex$$1$$ = $endColumn_endIndex$$1$$.column, $startKey$$ && ($startColumnKey$$ = $startKey$$.column, $endColumnKey$$ = $endKey$$.column)) : ($startColumn$$ = $endColumn_endIndex$$1$$.column, $endColumn_endIndex$$1$$ = 
    $startIndex$$14$$.column, $startKey$$ && ($startColumnKey$$ = $endKey$$.column, $endColumnKey$$ = $startKey$$.column)), $startIndex$$14$$ = {row:$startRow$$3$$, column:$startColumn$$}, $endColumn_endIndex$$1$$ = {row:$endRow$$, column:$endColumn_endIndex$$1$$}), $startKey$$ && ($startKey$$ = {row:$startRowKey$$1$$, column:$startColumnKey$$}, $endKey$$ = {row:$endRowKey$$1$$, column:$endColumnKey$$}));
    return $startKey$$ ? {startIndex:$startIndex$$14$$, endIndex:$endColumn_endIndex$$1$$, startKey:$startKey$$, endKey:$endKey$$} : {startIndex:$startIndex$$14$$, endIndex:$endColumn_endIndex$$1$$};
  };
  $DvtDataGrid$$.prototype.$_createRangeWithKeys$ = function $$DvtDataGrid$$$$$_createRangeWithKeys$$($startIndex$$15$$, $endIndex$$2$$, $callback$$94$$) {
    this.$_keys$($startIndex$$15$$, this.$_createRangeStartKeyCallback$.bind(this, $endIndex$$2$$, $callback$$94$$));
  };
  $DvtDataGrid$$.prototype.$_createRangeStartKeyCallback$ = function $$DvtDataGrid$$$$$_createRangeStartKeyCallback$$($endIndex$$3$$, $callback$$95$$, $startKey$$1$$, $startIndex$$16$$) {
    $endIndex$$3$$ === $startIndex$$16$$ ? this.$_createRangeEndKeyCallback$($startKey$$1$$, $startIndex$$16$$, $callback$$95$$, $startKey$$1$$, $startIndex$$16$$) : $endIndex$$3$$ ? this.$_keys$($endIndex$$3$$, this.$_createRangeEndKeyCallback$.bind(this, $startKey$$1$$, $startIndex$$16$$, $callback$$95$$)) : $callback$$95$$.call(this, {startIndex:$startIndex$$16$$, endIndex:$startIndex$$16$$, startKey:$startKey$$1$$, endKey:$startKey$$1$$});
  };
  $DvtDataGrid$$.prototype.$_createRangeEndKeyCallback$ = function $$DvtDataGrid$$$$$_createRangeEndKeyCallback$$($startKey$$2$$, $startIndex$$17$$, $callback$$96$$, $endKey$$1$$, $endIndex$$4$$) {
    $callback$$96$$.call(this, this.createRange($startIndex$$17$$, $endIndex$$4$$, $startKey$$2$$, $endKey$$1$$));
  };
  $DvtDataGrid$$.prototype.$getEndIndex$ = function $$DvtDataGrid$$$$$getEndIndex$$($range$$6$$) {
    return null == $range$$6$$.endIndex ? $range$$6$$.startIndex : $range$$6$$.endIndex;
  };
  $DvtDataGrid$$.prototype.$getElementsInRange$ = function $$DvtDataGrid$$$$$getElementsInRange$$($range$$7_rangeEndRow$$, $nodes$$1_startRow$$4$$, $endRow$$1_rows$$6$$) {
    var $columns$$2_startIndex$$18$$, $endIndex$$5_j$$26$$, $i$$176_rangeStartRow$$, $rangeStartColumn_row$$31$$, $rangeEndColumn$$, $cell$$16$$;
    void 0 == $nodes$$1_startRow$$4$$ && ($nodes$$1_startRow$$4$$ = this.$m_startRow$);
    void 0 == $endRow$$1_rows$$6$$ && ($endRow$$1_rows$$6$$ = this.$m_endRow$ + 1);
    $columns$$2_startIndex$$18$$ = $range$$7_rangeEndRow$$.startIndex;
    $endIndex$$5_j$$26$$ = this.$getEndIndex$($range$$7_rangeEndRow$$);
    $i$$176_rangeStartRow$$ = $columns$$2_startIndex$$18$$.row;
    $range$$7_rangeEndRow$$ = $endIndex$$5_j$$26$$.row;
    -1 == $range$$7_rangeEndRow$$ && ($range$$7_rangeEndRow$$ = Number.MAX_VALUE);
    if ($endRow$$1_rows$$6$$ < $i$$176_rangeStartRow$$ || $range$$7_rangeEndRow$$ < $nodes$$1_startRow$$4$$ || !isNaN($columns$$2_startIndex$$18$$.column) && !isNaN($endIndex$$5_j$$26$$.column) && ($rangeStartColumn_row$$31$$ = $columns$$2_startIndex$$18$$.column, $rangeEndColumn$$ = $endIndex$$5_j$$26$$.column, -1 == $rangeEndColumn$$ && ($rangeEndColumn$$ = Number.MAX_VALUE), this.$m_endCol$ + 1 < $rangeStartColumn_row$$31$$ || $rangeEndColumn$$ < this.$m_startCol$)) {
      return null;
    }
    $nodes$$1_startRow$$4$$ = [];
    $endRow$$1_rows$$6$$ = this.$m_databody$.firstChild.childNodes;
    $i$$176_rangeStartRow$$ = Math.max(0, $i$$176_rangeStartRow$$ - this.$m_startRow$);
    $range$$7_rangeEndRow$$ = Math.min($endRow$$1_rows$$6$$.length, $range$$7_rangeEndRow$$ - this.$m_startRow$ + 1);
    if (isNaN($rangeStartColumn_row$$31$$) || isNaN($rangeEndColumn$$)) {
      for (;$i$$176_rangeStartRow$$ < $range$$7_rangeEndRow$$;$i$$176_rangeStartRow$$ += 1) {
        $rangeStartColumn_row$$31$$ = $endRow$$1_rows$$6$$[$i$$176_rangeStartRow$$], $nodes$$1_startRow$$4$$.push($rangeStartColumn_row$$31$$);
      }
    } else {
      for ($rangeStartColumn_row$$31$$ = Math.max(0, $rangeStartColumn_row$$31$$ - this.$m_startCol$), $rangeEndColumn$$ = $rangeEndColumn$$ - this.$m_startCol$ + 1;$i$$176_rangeStartRow$$ < $range$$7_rangeEndRow$$;$i$$176_rangeStartRow$$ += 1) {
        for ($columns$$2_startIndex$$18$$ = $endRow$$1_rows$$6$$[$i$$176_rangeStartRow$$].childNodes, $endIndex$$5_j$$26$$ = $rangeStartColumn_row$$31$$;$endIndex$$5_j$$26$$ < Math.min($columns$$2_startIndex$$18$$.length, $rangeEndColumn$$);$endIndex$$5_j$$26$$ += 1) {
          $cell$$16$$ = $columns$$2_startIndex$$18$$[$endIndex$$5_j$$26$$], $nodes$$1_startRow$$4$$.push($cell$$16$$);
        }
      }
    }
    return $nodes$$1_startRow$$4$$;
  };
  $DvtDataGrid$$.prototype.$readCurrentContent$ = function $$DvtDataGrid$$$$$readCurrentContent$$() {
    var $cell$$17_current$$5_currentCell_range$$8$$, $subid$$, $needToModify$$, $labelledBy$$;
    if (null == this.$m_active$) {
      return!1;
    }
    if ("header" == this.$m_active$.type) {
      $cell$$17_current$$5_currentCell_range$$8$$ = {}, "row" === this.$m_active$.axis ? (1 < this.$m_rowHeaderLevelCount$ && ($cell$$17_current$$5_currentCell_range$$8$$.level = this.$m_active$.level), $cell$$17_current$$5_currentCell_range$$8$$.rowHeader = this.$m_active$.index) : (1 < this.$m_columnHeaderLevelCount$ && ($cell$$17_current$$5_currentCell_range$$8$$.level = this.$m_active$.level), $cell$$17_current$$5_currentCell_range$$8$$.columnHeader = this.$m_active$.index), $cell$$17_current$$5_currentCell_range$$8$$ = 
      this.$_getActiveElement$();
    } else {
      $cell$$17_current$$5_currentCell_range$$8$$ = this.$m_active$.indexes;
      this.$_isSelectionEnabled$() && this.$isMultipleSelection$() && null != this.$m_selectionFrontier$ && ($cell$$17_current$$5_currentCell_range$$8$$ = this.$m_selectionFrontier$);
      if (null == $cell$$17_current$$5_currentCell_range$$8$$) {
        return!1;
      }
      $cell$$17_current$$5_currentCell_range$$8$$ = this.createRange($cell$$17_current$$5_currentCell_range$$8$$);
      $cell$$17_current$$5_currentCell_range$$8$$ = this.$getElementsInRange$($cell$$17_current$$5_currentCell_range$$8$$);
      if (null == $cell$$17_current$$5_currentCell_range$$8$$ || 0 == $cell$$17_current$$5_currentCell_range$$8$$.length) {
        return!1;
      }
      $cell$$17_current$$5_currentCell_range$$8$$ = $cell$$17_current$$5_currentCell_range$$8$$[0];
    }
    this.$_setAriaProperties$(this.$_createActiveObject$($cell$$17_current$$5_currentCell_range$$8$$), null, $cell$$17_current$$5_currentCell_range$$8$$);
    $subid$$ = this.$createSubId$("placeHolder");
    $needToModify$$ = !0;
    $labelledBy$$ = $cell$$17_current$$5_currentCell_range$$8$$.getAttribute("aria-labelledby");
    null != $labelledBy$$ && -1 != $labelledBy$$.indexOf($subid$$) && ($needToModify$$ = !1);
    $needToModify$$ ? (this.$m_placeHolder$.textContent = "\x26nbsp", $labelledBy$$ = $cell$$17_current$$5_currentCell_range$$8$$.getAttribute("aria-labelledby"), $cell$$17_current$$5_currentCell_range$$8$$.setAttribute("aria-labelledby", $labelledBy$$ + " " + $subid$$)) : this.$m_utils$.empty(this.$m_placeHolder$);
    $cell$$17_current$$5_currentCell_range$$8$$.focus();
    return!0;
  };
  $DvtDataGrid$$.prototype.$_enterActionableMode$ = function $$DvtDataGrid$$$$$_enterActionableMode$$($element$$97$$) {
    this.$_enableAllFocusableElements$($element$$97$$);
    this.$_setFocusToFirstFocusableElement$($element$$97$$) && this.$setActionableMode$(!0);
  };
  $DvtDataGrid$$.prototype.$_exitActionableMode$ = function $$DvtDataGrid$$$$$_exitActionableMode$$() {
    var $elem$$43$$;
    this.$isActionableMode$() && ($elem$$43$$ = this.$_getActiveElement$(), this.$setActionableMode$(!1), this.$_disableAllFocusableElements$($elem$$43$$));
  };
  $DvtDataGrid$$.prototype.$_reRenderCell$ = function $$DvtDataGrid$$$$$_reRenderCell$$($cell$$18$$, $mode$$19$$) {
    var $renderer$$10$$, $cellContext$$2$$;
    $renderer$$10$$ = this.$m_options$.$getRenderer$("cell");
    $cellContext$$2$$ = $cell$$18$$[this.$m_resources$.$getMappedAttribute$("context")];
    $cellContext$$2$$.mode = $mode$$19$$;
    this.$m_utils$.empty($cell$$18$$.firstChild);
    this.$_renderContent$($renderer$$10$$, $cellContext$$2$$, $cell$$18$$.firstChild, $cellContext$$2$$.data, this.$getMappedStyle$("celltext"));
  };
  $DvtDataGrid$$.prototype.createIndex = function $$DvtDataGrid$$$$createIndex$($row$$32$$, $column$$7$$) {
    return null != $row$$32$$ ? null != $column$$7$$ ? {row:$row$$32$$, column:$column$$7$$} : {row:$row$$32$$} : null;
  };
  $DvtDataGrid$$.prototype.$handleHeaderFocusChange$ = function $$DvtDataGrid$$$$$handleHeaderFocusChange$$($keyCode$$3$$, $event$$151$$) {
    var $axis$$18_newCellIndex$$, $index$$120_newIndex$$1$$, $level$$21_newLevel$$, $elem$$44_newElement$$, $depth$$5$$;
    if (!this.$isFetchComplete$()) {
      return!0;
    }
    this.$m_resources$.$isRTLMode$() && ($keyCode$$3$$ == $DvtDataGrid$$.$keyCodes$.$LEFT_KEY$ ? $keyCode$$3$$ = $DvtDataGrid$$.$keyCodes$.$RIGHT_KEY$ : $keyCode$$3$$ == $DvtDataGrid$$.$keyCodes$.$RIGHT_KEY$ && ($keyCode$$3$$ = $DvtDataGrid$$.$keyCodes$.$LEFT_KEY$));
    $axis$$18_newCellIndex$$ = this.$m_active$.axis;
    $index$$120_newIndex$$1$$ = this.$m_active$.index;
    $level$$21_newLevel$$ = this.$m_active$.level;
    $elem$$44_newElement$$ = this.$_getActiveElement$();
    $depth$$5$$ = null != $elem$$44_newElement$$ ? this.$_getAttribute$($elem$$44_newElement$$, "depth") : 1;
    switch($keyCode$$3$$) {
      case $DvtDataGrid$$.$keyCodes$.$LEFT_KEY$:
        if ("column" === $axis$$18_newCellIndex$$ && 0 < $index$$120_newIndex$$1$$) {
          if (1 === this.$m_columnHeaderLevelCount$) {
            $index$$120_newIndex$$1$$ -= 1, $elem$$44_newElement$$ = $elem$$44_newElement$$.previousSibling;
          } else {
            if ($elem$$44_newElement$$ = this.$_getColumnHeaderByIndex$($index$$120_newIndex$$1$$ - 1, $level$$21_newLevel$$), $index$$120_newIndex$$1$$ = null != $elem$$44_newElement$$ ? this.$_getAttribute$($elem$$44_newElement$$.parentNode, "start") : $index$$120_newIndex$$1$$ - 1, $level$$21_newLevel$$ = null != $elem$$44_newElement$$ ? this.$getHeaderCellLevel$($elem$$44_newElement$$) : $level$$21_newLevel$$, 0 > $index$$120_newIndex$$1$$) {
              break;
            }
          }
          this.$scrollToHeader$({axis:$axis$$18_newCellIndex$$, index:$index$$120_newIndex$$1$$, $level$:$level$$21_newLevel$$});
          this.$_setActive$($elem$$44_newElement$$, $event$$151$$);
        } else {
          "row" === $axis$$18_newCellIndex$$ && 0 < $level$$21_newLevel$$ && ($elem$$44_newElement$$ = this.$_getRowHeaderByIndex$($index$$120_newIndex$$1$$, $level$$21_newLevel$$ - 1), $index$$120_newIndex$$1$$ = this.$_getAttribute$($elem$$44_newElement$$.parentNode, "start"), $level$$21_newLevel$$ = this.$getHeaderCellLevel$($elem$$44_newElement$$), this.$scrollToHeader$({axis:$axis$$18_newCellIndex$$, index:$index$$120_newIndex$$1$$, $level$:$level$$21_newLevel$$}), this.$_setActive$($elem$$44_newElement$$, 
          $event$$151$$));
        }
        break;
      case $DvtDataGrid$$.$keyCodes$.$RIGHT_KEY$:
        "row" === $axis$$18_newCellIndex$$ ? $level$$21_newLevel$$ + $depth$$5$$ >= this.$m_rowHeaderLevelCount$ ? ($axis$$18_newCellIndex$$ = this.createIndex($index$$120_newIndex$$1$$, 0), this.$_isSelectionEnabled$() ? this.$selectAndFocus$($axis$$18_newCellIndex$$, $event$$151$$) : this.$_setActiveByIndex$($axis$$18_newCellIndex$$, $event$$151$$)) : ($elem$$44_newElement$$ = this.$_getRowHeaderByIndex$($index$$120_newIndex$$1$$, $level$$21_newLevel$$ + $depth$$5$$), $index$$120_newIndex$$1$$ = 
        this.$_getAttribute$($elem$$44_newElement$$.parentNode, "start"), $level$$21_newLevel$$ = this.$getHeaderCellLevel$($elem$$44_newElement$$), this.$scrollToHeader$({axis:$axis$$18_newCellIndex$$, index:$index$$120_newIndex$$1$$, $level$:$level$$21_newLevel$$}), this.$_setActive$($elem$$44_newElement$$, $event$$151$$)) : (1 === this.$m_columnHeaderLevelCount$ ? ($index$$120_newIndex$$1$$ += 1, $elem$$44_newElement$$ = $elem$$44_newElement$$.nextSibling) : ($index$$120_newIndex$$1$$ = $level$$21_newLevel$$ === 
        this.$m_columnHeaderLevelCount$ - 1 ? $index$$120_newIndex$$1$$ + 1 : null != $elem$$44_newElement$$ ? this.$_getAttribute$($elem$$44_newElement$$.parentNode, "start") + this.$_getAttribute$($elem$$44_newElement$$.parentNode, "extent") : $index$$120_newIndex$$1$$ + 1, $elem$$44_newElement$$ = this.$_getColumnHeaderByIndex$($index$$120_newIndex$$1$$, $level$$21_newLevel$$), $level$$21_newLevel$$ = null != $elem$$44_newElement$$ ? this.$getHeaderCellLevel$($elem$$44_newElement$$) : $level$$21_newLevel$$), 
        $index$$120_newIndex$$1$$ > this.$m_endColHeader$ && this.$m_stopColumnHeaderFetch$ || !(this.$_isCountUnknown$("column") || $index$$120_newIndex$$1$$ < this.$m_dataSource$.getCount("column")) || (this.$scrollToHeader$({axis:$axis$$18_newCellIndex$$, index:$index$$120_newIndex$$1$$, $level$:$level$$21_newLevel$$}), this.$_setActive$($elem$$44_newElement$$, $event$$151$$)));
        break;
      case $DvtDataGrid$$.$keyCodes$.$UP_KEY$:
        if ("row" === $axis$$18_newCellIndex$$ && 0 < $index$$120_newIndex$$1$$) {
          if (1 === this.$m_rowHeaderLevelCount$) {
            $index$$120_newIndex$$1$$ -= 1, $elem$$44_newElement$$ = $elem$$44_newElement$$.previousSibling;
          } else {
            if ($level$$21_newLevel$$ === this.$m_rowHeaderLevelCount$ - 1 ? ($index$$120_newIndex$$1$$ -= 1, $elem$$44_newElement$$ = this.$_getRowHeaderByIndex$($index$$120_newIndex$$1$$, $level$$21_newLevel$$)) : ($elem$$44_newElement$$ = this.$_getRowHeaderByIndex$(this.$_getAttribute$($elem$$44_newElement$$.parentNode, "start") - 1, $level$$21_newLevel$$), $index$$120_newIndex$$1$$ = null != $elem$$44_newElement$$ ? this.$_getAttribute$($elem$$44_newElement$$.parentNode, "start") : $index$$120_newIndex$$1$$ - 
            1), $level$$21_newLevel$$ = null != $elem$$44_newElement$$ ? this.$getHeaderCellLevel$($elem$$44_newElement$$) : $level$$21_newLevel$$, 0 > $index$$120_newIndex$$1$$) {
              break;
            }
          }
          this.$scrollToHeader$({axis:$axis$$18_newCellIndex$$, index:$index$$120_newIndex$$1$$, $level$:$level$$21_newLevel$$});
          this.$_setActive$($elem$$44_newElement$$, $event$$151$$);
        } else {
          "column" === $axis$$18_newCellIndex$$ && 0 < $level$$21_newLevel$$ && ($elem$$44_newElement$$ = this.$_getColumnHeaderByIndex$($index$$120_newIndex$$1$$, $level$$21_newLevel$$ - 1), $index$$120_newIndex$$1$$ = this.$_getAttribute$($elem$$44_newElement$$.parentNode, "start"), $level$$21_newLevel$$ = this.$getHeaderCellLevel$($elem$$44_newElement$$), this.$scrollToHeader$({axis:$axis$$18_newCellIndex$$, index:$index$$120_newIndex$$1$$, $level$:$level$$21_newLevel$$}), this.$_setActive$($elem$$44_newElement$$, 
          $event$$151$$));
        }
        break;
      case $DvtDataGrid$$.$keyCodes$.$DOWN_KEY$:
        "column" === $axis$$18_newCellIndex$$ ? $level$$21_newLevel$$ + $depth$$5$$ >= this.$m_columnHeaderLevelCount$ ? ($axis$$18_newCellIndex$$ = this.createIndex(0, $index$$120_newIndex$$1$$), this.$_isSelectionEnabled$() ? this.$selectAndFocus$($axis$$18_newCellIndex$$, $event$$151$$) : this.$_setActiveByIndex$($axis$$18_newCellIndex$$, $event$$151$$)) : ($elem$$44_newElement$$ = this.$_getColumnHeaderByIndex$($index$$120_newIndex$$1$$, $level$$21_newLevel$$ + $depth$$5$$), $index$$120_newIndex$$1$$ = 
        this.$_getAttribute$($elem$$44_newElement$$.parentNode, "start"), $level$$21_newLevel$$ = this.$getHeaderCellLevel$($elem$$44_newElement$$), this.$scrollToHeader$({axis:$axis$$18_newCellIndex$$, index:$index$$120_newIndex$$1$$, $level$:$level$$21_newLevel$$}), this.$_setActive$($elem$$44_newElement$$, $event$$151$$)) : (1 === this.$m_rowHeaderLevelCount$ ? ($index$$120_newIndex$$1$$ += 1, $elem$$44_newElement$$ = $elem$$44_newElement$$.nextSibling) : ($index$$120_newIndex$$1$$ = $level$$21_newLevel$$ === 
        this.$m_rowHeaderLevelCount$ - 1 ? $index$$120_newIndex$$1$$ + 1 : null != $elem$$44_newElement$$ ? this.$_getAttribute$($elem$$44_newElement$$.parentNode, "start") + this.$_getAttribute$($elem$$44_newElement$$.parentNode, "extent") : $index$$120_newIndex$$1$$ + 1, $elem$$44_newElement$$ = this.$_getRowHeaderByIndex$($index$$120_newIndex$$1$$, $level$$21_newLevel$$), $level$$21_newLevel$$ = null != $elem$$44_newElement$$ ? this.$getHeaderCellLevel$($elem$$44_newElement$$) : $level$$21_newLevel$$), 
        $index$$120_newIndex$$1$$ > this.$m_endRowHeader$ && this.$m_stopRowHeaderFetch$ || !(this.$_isCountUnknown$("row") || $index$$120_newIndex$$1$$ < this.$m_dataSource$.getCount("row")) || (this.$scrollToHeader$({axis:$axis$$18_newCellIndex$$, index:$index$$120_newIndex$$1$$, $level$:$level$$21_newLevel$$}), this.$_setActive$($elem$$44_newElement$$, $event$$151$$)));
        break;
      case $DvtDataGrid$$.$keyCodes$.$PAGEUP_KEY$:
        "row" === $axis$$18_newCellIndex$$ && ($elem$$44_newElement$$ = this.$_getRowHeaderByIndex$(0, $level$$21_newLevel$$), this.$scrollToHeader$({axis:$axis$$18_newCellIndex$$, index:$index$$120_newIndex$$1$$, $level$:$level$$21_newLevel$$}), this.$_setActive$($elem$$44_newElement$$, $event$$151$$));
        break;
      case $DvtDataGrid$$.$keyCodes$.$PAGEDOWN_KEY$:
        "row" === $axis$$18_newCellIndex$$ && ($index$$120_newIndex$$1$$ = this.$_isCountUnknown$("row") || this.$_isHighWatermarkScrolling$() ? Math.max(0, this.$m_endRowHeader$) : Math.max(0, this.$m_dataSource$.getCount("row") - 1), $elem$$44_newElement$$ = this.$_getRowHeaderByIndex$($index$$120_newIndex$$1$$, $level$$21_newLevel$$), this.$scrollToHeader$({axis:$axis$$18_newCellIndex$$, index:$index$$120_newIndex$$1$$, $level$:$level$$21_newLevel$$}), this.$_setActive$($elem$$44_newElement$$, 
        $event$$151$$));
        break;
      case $DvtDataGrid$$.$keyCodes$.$HOME_KEY$:
        "column" === $axis$$18_newCellIndex$$ && ($elem$$44_newElement$$ = this.$_getColumnHeaderByIndex$(0, $level$$21_newLevel$$), this.$scrollToHeader$({axis:$axis$$18_newCellIndex$$, index:$index$$120_newIndex$$1$$, $level$:$level$$21_newLevel$$}), this.$_setActive$($elem$$44_newElement$$, $event$$151$$));
        break;
      case $DvtDataGrid$$.$keyCodes$.$END_KEY$:
        "column" === $axis$$18_newCellIndex$$ && ($index$$120_newIndex$$1$$ = this.$_isCountUnknown$("column") || this.$_isHighWatermarkScrolling$() ? Math.max(0, this.$m_endColHeader$) : Math.max(0, this.$m_dataSource$.getCount("column") - 1), $elem$$44_newElement$$ = this.$_getColumnHeaderByIndex$($index$$120_newIndex$$1$$, $level$$21_newLevel$$), this.$scrollToHeader$({axis:$axis$$18_newCellIndex$$, index:$index$$120_newIndex$$1$$, $level$:$level$$21_newLevel$$}), this.$_setActive$($elem$$44_newElement$$, 
        $event$$151$$));
    }
    return!0;
  };
  $DvtDataGrid$$.prototype.$_getHeaderAndParentIds$ = function $$DvtDataGrid$$$$$_getHeaderAndParentIds$$($header$$17$$, $previousHeader$$) {
    var $i$$177$$, $parents$$1$$, $idString$$ = "", $previousParents$$ = [];
    if (null == $header$$17$$) {
      return "";
    }
    $parents$$1$$ = this.$_getHeaderAndParents$($header$$17$$);
    null != $previousHeader$$ && ($previousParents$$ = this.$_getHeaderAndParents$($previousHeader$$));
    for ($i$$177$$ = 0;$i$$177$$ < $parents$$1$$.length;$i$$177$$++) {
      if ($previousParents$$[$i$$177$$] != $parents$$1$$[$i$$177$$] || $i$$177$$ === $parents$$1$$.length - 1) {
        $idString$$ += " " + $parents$$1$$[$i$$177$$].id;
      }
    }
    return $idString$$;
  };
  $DvtDataGrid$$.prototype.$_getHeaderAndParents$ = function $$DvtDataGrid$$$$$_getHeaderAndParents$$($header$$18$$) {
    var $axis$$19_headerLevels$$, $level$$22$$, $headers$$4$$ = [$header$$18$$];
    $axis$$19_headerLevels$$ = this.$getHeaderCellAxis$($header$$18$$);
    $level$$22$$ = this.$getHeaderCellLevel$($header$$18$$);
    $axis$$19_headerLevels$$ = "row" === $axis$$19_headerLevels$$ ? this.$m_rowHeaderLevelCount$ : this.$m_columnHeaderLevelCount$;
    if (1 === $axis$$19_headerLevels$$) {
      return $headers$$4$$;
    }
    $level$$22$$ === $axis$$19_headerLevels$$ - 1 && ($header$$18$$ = $header$$18$$.parentNode.firstChild, $headers$$4$$.unshift($header$$18$$), $level$$22$$ -= 1);
    for (;0 < $level$$22$$;) {
      $header$$18$$ = $header$$18$$.parentNode.parentNode.firstChild, $headers$$4$$.unshift($header$$18$$), $level$$22$$ -= 1;
    }
    return $headers$$4$$;
  };
  $DvtDataGrid$$.prototype.$handleFocusChange$ = function $$DvtDataGrid$$$$$handleFocusChange$$($keyCode$$4_newCellIndex$$1$$, $isExtend$$, $event$$152$$, $changeRegions$$) {
    var $currentCellIndex$$, $row$$33$$, $column$$8$$, $focusFunc$$;
    if (!this.$isFetchComplete$()) {
      return!0;
    }
    $currentCellIndex$$ = $isExtend$$ ? this.$m_selectionFrontier$ : this.$m_active$.indexes;
    if (null != $currentCellIndex$$) {
      this.$m_resources$.$isRTLMode$() && ($keyCode$$4_newCellIndex$$1$$ == $DvtDataGrid$$.$keyCodes$.$LEFT_KEY$ ? $keyCode$$4_newCellIndex$$1$$ = $DvtDataGrid$$.$keyCodes$.$RIGHT_KEY$ : $keyCode$$4_newCellIndex$$1$$ == $DvtDataGrid$$.$keyCodes$.$RIGHT_KEY$ && ($keyCode$$4_newCellIndex$$1$$ = $DvtDataGrid$$.$keyCodes$.$LEFT_KEY$));
      $focusFunc$$ = this.$_isSelectionEnabled$() ? this.$selectAndFocus$.bind(this) : this.$_setActiveByIndex$.bind(this);
      $row$$33$$ = $currentCellIndex$$.row;
      $column$$8$$ = $currentCellIndex$$.column;
      switch($keyCode$$4_newCellIndex$$1$$) {
        case $DvtDataGrid$$.$keyCodes$.$LEFT_KEY$:
          0 < $column$$8$$ ? "row" == this.$m_options$.$getSelectionMode$() ? ($keyCode$$4_newCellIndex$$1$$ = this.createIndex(this.$m_active$.indexes.row, $column$$8$$ - 1), this.$scrollToIndex$($keyCode$$4_newCellIndex$$1$$, $isExtend$$), this.$_setActiveByIndex$($keyCode$$4_newCellIndex$$1$$, $event$$152$$)) : ($keyCode$$4_newCellIndex$$1$$ = this.createIndex($row$$33$$, $column$$8$$ - 1), this.$scrollToIndex$($keyCode$$4_newCellIndex$$1$$, $isExtend$$), $isExtend$$ ? this.$extendSelection$($keyCode$$4_newCellIndex$$1$$, 
          $event$$152$$) : $focusFunc$$($keyCode$$4_newCellIndex$$1$$, $event$$152$$), 0 === $column$$8$$ - 1 && this.$_setAccInfoText$("accessibleFirstColumn")) : !$isExtend$$ && $changeRegions$$ && (this.$scrollToHeader$({axis:"row", index:$row$$33$$, $level$:this.$m_rowHeaderLevelCount$ - 1}), this.$_setActive$(this.$_getRowHeaderByIndex$($row$$33$$, this.$m_rowHeaderLevelCount$ - 1), $event$$152$$, !0));
          break;
        case $DvtDataGrid$$.$keyCodes$.$RIGHT_KEY$:
          this.$_isLastColumn$($column$$8$$) ? $isExtend$$ || ($focusFunc$$($currentCellIndex$$, $event$$152$$), this.$scrollToIndex$($currentCellIndex$$)) : "row" == this.$m_options$.$getSelectionMode$() ? ($keyCode$$4_newCellIndex$$1$$ = this.createIndex(this.$m_active$.indexes.row, $column$$8$$ + 1), this.$scrollToIndex$($keyCode$$4_newCellIndex$$1$$, $isExtend$$), this.$_setActiveByIndex$($keyCode$$4_newCellIndex$$1$$, $event$$152$$)) : ($keyCode$$4_newCellIndex$$1$$ = this.createIndex($row$$33$$, 
          $column$$8$$ + 1), this.$scrollToIndex$($keyCode$$4_newCellIndex$$1$$, $isExtend$$), $isExtend$$ ? this.$extendSelection$($keyCode$$4_newCellIndex$$1$$, $event$$152$$) : $focusFunc$$($keyCode$$4_newCellIndex$$1$$, $event$$152$$), this.$_isLastColumn$($column$$8$$ + 1) && this.$_setAccInfoText$("accessibleLastColumn"));
          break;
        case $DvtDataGrid$$.$keyCodes$.$UP_KEY$:
          0 < $row$$33$$ ? ($keyCode$$4_newCellIndex$$1$$ = this.createIndex($row$$33$$ - 1, $column$$8$$), this.$scrollToIndex$($keyCode$$4_newCellIndex$$1$$, $isExtend$$), $isExtend$$ ? this.$extendSelection$($keyCode$$4_newCellIndex$$1$$, $event$$152$$) : $focusFunc$$($keyCode$$4_newCellIndex$$1$$, $event$$152$$), 0 === $row$$33$$ - 1 && this.$_setAccInfoText$("accessibleFirstRow")) : !$isExtend$$ && $changeRegions$$ && (this.$scrollToHeader$({axis:"column", index:$column$$8$$, $level$:this.$m_columnHeaderLevelCount$ - 
          1}), this.$_setActive$(this.$_getColumnHeaderByIndex$($column$$8$$, this.$m_columnHeaderLevelCount$ - 1), $event$$152$$, !0));
          break;
        case $DvtDataGrid$$.$keyCodes$.$DOWN_KEY$:
          this.$_isLastRow$($row$$33$$) ? $isExtend$$ || ($focusFunc$$($currentCellIndex$$, $event$$152$$), this.$scrollToIndex$($currentCellIndex$$)) : ($keyCode$$4_newCellIndex$$1$$ = this.createIndex($row$$33$$ + 1, $column$$8$$), this.$scrollToIndex$($keyCode$$4_newCellIndex$$1$$, $isExtend$$), $isExtend$$ ? this.$extendSelection$($keyCode$$4_newCellIndex$$1$$, $event$$152$$) : $focusFunc$$($keyCode$$4_newCellIndex$$1$$, $event$$152$$), this.$_isLastRow$($row$$33$$ + 1) && this.$_setAccInfoText$("accessibleLastRow"));
          break;
        case $DvtDataGrid$$.$keyCodes$.$HOME_KEY$:
          $keyCode$$4_newCellIndex$$1$$ = this.createIndex($row$$33$$, 0);
          this.$scrollToIndex$($keyCode$$4_newCellIndex$$1$$);
          $focusFunc$$($keyCode$$4_newCellIndex$$1$$, $event$$152$$);
          break;
        case $DvtDataGrid$$.$keyCodes$.$END_KEY$:
          $keyCode$$4_newCellIndex$$1$$ = this.$_isCountUnknown$("column") || this.$_isHighWatermarkScrolling$() ? this.createIndex($row$$33$$, Math.max(0, this.$m_endCol$)) : this.createIndex($row$$33$$, Math.max(0, this.$m_dataSource$.getCount("column") - 1));
          this.$scrollToIndex$($keyCode$$4_newCellIndex$$1$$);
          $focusFunc$$($keyCode$$4_newCellIndex$$1$$, $event$$152$$);
          break;
        case $DvtDataGrid$$.$keyCodes$.$PAGEUP_KEY$:
          $keyCode$$4_newCellIndex$$1$$ = this.createIndex(0, $column$$8$$);
          this.$scrollToIndex$($keyCode$$4_newCellIndex$$1$$);
          $focusFunc$$($keyCode$$4_newCellIndex$$1$$, $event$$152$$);
          break;
        case $DvtDataGrid$$.$keyCodes$.$PAGEDOWN_KEY$:
          $keyCode$$4_newCellIndex$$1$$ = this.$_isCountUnknown$("column") || this.$_isHighWatermarkScrolling$() ? this.createIndex(Math.max(0, this.$m_endRow$), $column$$8$$) : this.createIndex(Math.max(0, this.$m_dataSource$.getCount("row") - 1), $column$$8$$), this.$scrollToIndex$($keyCode$$4_newCellIndex$$1$$), $focusFunc$$($keyCode$$4_newCellIndex$$1$$, $event$$152$$);
      }
      return!0;
    }
  };
  $DvtDataGrid$$.prototype.$scrollToIndex$ = function $$DvtDataGrid$$$$$scrollToIndex$$($index$$121$$, $isExtend$$1$$) {
    var $cellLeft_row$$34$$, $cellWidth_column$$9$$, $deltaX$$2_scrollLeft$$10$$, $deltaY$$3_scrollTop$$10$$, $databodyContent$$17_viewportRight$$3_viewportTop$$4$$, $rowElem_rowHeight$$1$$, $viewportBottom$$5$$, $rowTop$$1$$, $cell$$19$$, $scrollRows_viewportLeft$$2$$;
    $cellLeft_row$$34$$ = $index$$121$$.row;
    $cellWidth_column$$9$$ = $index$$121$$.column;
    $deltaY$$3_scrollTop$$10$$ = $deltaX$$2_scrollLeft$$10$$ = 0;
    $cellLeft_row$$34$$ < this.$m_startRow$ || $cellLeft_row$$34$$ > this.$m_endRow$ ? ($deltaY$$3_scrollTop$$10$$ = $cellLeft_row$$34$$ < this.$m_startRow$ ? this.$m_avgRowHeight$ * $cellLeft_row$$34$$ : this.$m_avgRowHeight$ * ($cellLeft_row$$34$$ + 1) - this.$getElementHeight$(this.$m_databody$), $deltaY$$3_scrollTop$$10$$ = this.$m_currentScrollTop$ - $deltaY$$3_scrollTop$$10$$, this.$m_scrollIndexAfterFetch$ = $index$$121$$, $scrollRows_viewportLeft$$2$$ = !0) : ($databodyContent$$17_viewportRight$$3_viewportTop$$4$$ = 
    this.$m_databody$.firstChild, $rowElem_rowHeight$$1$$ = $databodyContent$$17_viewportRight$$3_viewportTop$$4$$.childNodes[$cellLeft_row$$34$$ - this.$m_startRow$], $databodyContent$$17_viewportRight$$3_viewportTop$$4$$ = this.$m_currentScrollTop$, $viewportBottom$$5$$ = this.$m_currentScrollTop$ + this.$getElementHeight$(this.$m_databody$), $rowTop$$1$$ = this.$getElementDir$($rowElem_rowHeight$$1$$, "top"), $rowElem_rowHeight$$1$$ = this.$calculateRowHeight$($rowElem_rowHeight$$1$$), $rowTop$$1$$ + 
    $rowElem_rowHeight$$1$$ > $viewportBottom$$5$$ ? $deltaY$$3_scrollTop$$10$$ = $viewportBottom$$5$$ - ($rowTop$$1$$ + $rowElem_rowHeight$$1$$) : $rowTop$$1$$ < $databodyContent$$17_viewportRight$$3_viewportTop$$4$$ && ($deltaY$$3_scrollTop$$10$$ = $databodyContent$$17_viewportRight$$3_viewportTop$$4$$ - $rowTop$$1$$));
    isNaN($cellWidth_column$$9$$) || !0 == $scrollRows_viewportLeft$$2$$ || ($cellWidth_column$$9$$ < this.$m_startCol$ || $cellWidth_column$$9$$ > this.$m_endCol$ ? ($deltaX$$2_scrollLeft$$10$$ = $cellWidth_column$$9$$ < this.$m_startCol$ ? this.$m_avgColWidth$ * $cellWidth_column$$9$$ : this.$m_avgColWidth$ * ($cellWidth_column$$9$$ + 1) - this.$getElementWidth$(this.$m_databody$), $deltaX$$2_scrollLeft$$10$$ = this.$m_currentScrollLeft$ - $deltaX$$2_scrollLeft$$10$$, this.$m_scrollIndexAfterFetch$ = 
    $index$$121$$) : ($databodyContent$$17_viewportRight$$3_viewportTop$$4$$ = this.$m_databody$.firstChild, $rowElem_rowHeight$$1$$ = $databodyContent$$17_viewportRight$$3_viewportTop$$4$$.childNodes[$cellLeft_row$$34$$ - this.$m_startRow$], $cell$$19$$ = $rowElem_rowHeight$$1$$.childNodes[$cellWidth_column$$9$$ - this.$m_startCol$], $cellLeft_row$$34$$ = this.$getElementDir$($cell$$19$$, "left"), $cellWidth_column$$9$$ = this.$getElementWidth$($cell$$19$$), $scrollRows_viewportLeft$$2$$ = this.$m_currentScrollLeft$, 
    $databodyContent$$17_viewportRight$$3_viewportTop$$4$$ = this.$m_currentScrollLeft$ + this.$getElementWidth$(this.$m_databody$), $cellLeft_row$$34$$ < $scrollRows_viewportLeft$$2$$ ? $deltaX$$2_scrollLeft$$10$$ = $scrollRows_viewportLeft$$2$$ - $cellLeft_row$$34$$ : $cellLeft_row$$34$$ + $cellWidth_column$$9$$ > $databodyContent$$17_viewportRight$$3_viewportTop$$4$$ && ($deltaX$$2_scrollLeft$$10$$ = $databodyContent$$17_viewportRight$$3_viewportTop$$4$$ - ($cellLeft_row$$34$$ + $cellWidth_column$$9$$))));
    0 != $deltaX$$2_scrollLeft$$10$$ || 0 != $deltaY$$3_scrollTop$$10$$ ? (null != $cell$$19$$ && !0 !== $isExtend$$1$$ && (this.$m_cellToFocus$ = $cell$$19$$), this.$scrollDelta$($deltaX$$2_scrollLeft$$10$$, $deltaY$$3_scrollTop$$10$$)) : null != this.$m_scrollIndexAfterFetch$ && (this.$_setActiveByIndex$(this.$m_scrollIndexAfterFetch$), this.$m_scrollIndexAfterFetch$ = null);
  };
  $DvtDataGrid$$.prototype.$scrollToHeader$ = function $$DvtDataGrid$$$$$scrollToHeader$$($headerInfo$$) {
    var $delta$$4$$, $startIndex$$19$$, $endIndex$$6$$, $averageDiff$$, $diff$$1$$, $currentScroll$$1$$, $headerMin$$, $headerDiff$$, $header$$19$$, $viewportMin$$, $viewportMax$$, $viewportDiff$$, $axis$$20$$, $index$$122$$, $level$$23$$;
    $axis$$20$$ = $headerInfo$$.axis;
    $index$$122$$ = $headerInfo$$.index;
    $level$$23$$ = $headerInfo$$.level;
    $delta$$4$$ = 0;
    "row" === $axis$$20$$ ? ($startIndex$$19$$ = this.$m_startRowHeader$, $endIndex$$6$$ = this.$m_endRowHeader$, $averageDiff$$ = this.$m_avgRowHeight$, $diff$$1$$ = this.$getElementHeight$(this.$m_databody$), $currentScroll$$1$$ = this.$m_currentScrollTop$) : "column" === $axis$$20$$ && ($startIndex$$19$$ = this.$m_startColHeader$, $endIndex$$6$$ = this.$m_endColHeader$, $averageDiff$$ = this.$m_avgColWidth$, $diff$$1$$ = this.$getElementWidth$(this.$m_databody$), $currentScroll$$1$$ = this.$m_currentScrollLeft$);
    $index$$122$$ < $startIndex$$19$$ || $index$$122$$ > $endIndex$$6$$ ? ($delta$$4$$ = $currentScroll$$1$$ - ($index$$122$$ < $startIndex$$19$$ ? $averageDiff$$ * $index$$122$$ : $averageDiff$$ * ($index$$122$$ + 1) - $diff$$1$$), this.$m_scrollHeaderAfterFetch$ = $headerInfo$$) : ("row" === $axis$$20$$ ? ($header$$19$$ = this.$_getRowHeaderByIndex$($index$$122$$, $level$$23$$), $viewportMin$$ = this.$m_currentScrollTop$, $viewportMax$$ = this.$m_currentScrollTop$ + this.$getElementHeight$(this.$m_databody$), 
    $viewportDiff$$ = $viewportMax$$ - $viewportMin$$, $headerMin$$ = this.$getElementDir$($header$$19$$, "top"), $headerDiff$$ = this.$getElementHeight$($header$$19$$)) : "column" === $axis$$20$$ && ($header$$19$$ = this.$_getColumnHeaderByIndex$($index$$122$$, $level$$23$$), $viewportMin$$ = this.$m_currentScrollLeft$, $viewportMax$$ = this.$m_currentScrollLeft$ + this.$getElementWidth$(this.$m_databody$), $viewportDiff$$ = $viewportMax$$ - $viewportMin$$, $headerMin$$ = this.$getElementDir$($header$$19$$, 
    "left"), $headerDiff$$ = this.$getElementWidth$($header$$19$$)), $viewportDiff$$ > $headerDiff$$ ? $headerMin$$ + $headerDiff$$ > $viewportMax$$ ? $delta$$4$$ = $viewportMax$$ - ($headerMin$$ + $headerDiff$$) : $headerMin$$ < $viewportMin$$ && ($delta$$4$$ = $viewportMin$$ - $headerMin$$) : $delta$$4$$ = $viewportMin$$ - $headerMin$$);
    0 != $delta$$4$$ && (null != $header$$19$$ && (this.$m_cellToFocus$ = $header$$19$$), "row" === $axis$$20$$ ? this.$scrollDelta$(0, $delta$$4$$) : this.$scrollDelta$($delta$$4$$, 0));
    null != this.$m_scrollHeaderAfterFetch$ && null != $header$$19$$ && (this.$_setActive$($header$$19$$), this.$m_scrollHeaderAfterFetch$ = null);
  };
  $DvtDataGrid$$.prototype.$findHeader$ = function $$DvtDataGrid$$$$$findHeader$$($elem$$45$$, $headerCellClassName$$) {
    void 0 == $headerCellClassName$$ && ($headerCellClassName$$ = this.$getMappedStyle$("headercell"));
    if (null != $headerCellClassName$$) {
      if (this.$m_utils$.$containsCSSClassName$($elem$$45$$, $headerCellClassName$$)) {
        return $elem$$45$$;
      }
      if ($elem$$45$$.parentNode) {
        return this.$findHeader$($elem$$45$$.parentNode, $headerCellClassName$$);
      }
    }
    return null;
  };
  $DvtDataGrid$$.prototype.$updateRowBanding$ = function $$DvtDataGrid$$$$$updateRowBanding$$() {
    var $rowBandingInterval$$2$$, $rows$$7$$, $i$$178$$, $index$$123$$, $bandingClass$$;
    $rowBandingInterval$$2$$ = this.$m_options$.$getRowBandingInterval$();
    if (0 < $rowBandingInterval$$2$$) {
      for ($rows$$7$$ = this.$m_databody$.firstChild.childNodes, $bandingClass$$ = this.$getMappedStyle$("banded"), $i$$178$$ = 0;$i$$178$$ < $rows$$7$$.length;$i$$178$$++) {
        $index$$123$$ = this.$m_startRow$ + $i$$178$$, 1 === Math.floor($index$$123$$ / $rowBandingInterval$$2$$) % 2 ? this.$m_utils$.$containsCSSClassName$($rows$$7$$[$i$$178$$], $bandingClass$$) || this.$m_utils$.$addCSSClassName$($rows$$7$$[$i$$178$$], $bandingClass$$) : this.$m_utils$.$containsCSSClassName$($rows$$7$$[$i$$178$$], $bandingClass$$) && this.$m_utils$.$removeCSSClassName$($rows$$7$$[$i$$178$$], $bandingClass$$);
      }
    }
  };
  $DvtDataGrid$$.prototype.$updateColumnBanding$ = function $$DvtDataGrid$$$$$updateColumnBanding$$() {
    var $columnBandingInterval$$5$$, $rows$$8$$, $i$$179$$, $index$$124$$, $bandingClass$$1$$, $j$$27$$, $row$$35$$;
    $columnBandingInterval$$5$$ = this.$m_options$.$getColumnBandingInterval$();
    if (0 < $columnBandingInterval$$5$$) {
      for ($rows$$8$$ = this.$m_databody$.firstChild.childNodes, $bandingClass$$1$$ = this.$getMappedStyle$("banded"), $i$$179$$ = 0;$i$$179$$ < $rows$$8$$.length;$i$$179$$ += 1) {
        for ($row$$35$$ = $rows$$8$$[$i$$179$$].childNodes, $j$$27$$ = 0;$j$$27$$ < $row$$35$$.length;$j$$27$$ += 1) {
          $index$$124$$ = this.$m_startCol$ + $j$$27$$, 1 === Math.floor($index$$124$$ / $columnBandingInterval$$5$$) % 2 ? this.$m_utils$.$containsCSSClassName$($row$$35$$[$j$$27$$], $bandingClass$$1$$) || this.$m_utils$.$addCSSClassName$($row$$35$$[$j$$27$$], $bandingClass$$1$$) : this.$m_utils$.$containsCSSClassName$($row$$35$$[$j$$27$$], $bandingClass$$1$$) && this.$m_utils$.$removeCSSClassName$($rows$$8$$[$j$$27$$], $bandingClass$$1$$);
        }
      }
    }
  };
  $DvtDataGrid$$.prototype.$_removeBanding$ = function $$DvtDataGrid$$$$$_removeBanding$$() {
    var $rows$$9$$, $row$$36$$, $i$$180$$, $j$$28$$, $bandingClass$$2$$;
    $rows$$9$$ = this.$m_databody$.firstChild.childNodes;
    $bandingClass$$2$$ = this.$getMappedStyle$("banded");
    for ($i$$180$$ = 0;$i$$180$$ < $rows$$9$$.length;$i$$180$$++) {
      for (this.$m_utils$.$containsCSSClassName$($rows$$9$$[$i$$180$$], $bandingClass$$2$$) && this.$m_utils$.$removeCSSClassName$($rows$$9$$[$i$$180$$], $bandingClass$$2$$), $row$$36$$ = $rows$$9$$[$i$$180$$].childNodes, $j$$28$$ = 0;$j$$28$$ < $row$$36$$.length;$j$$28$$ += 1) {
        this.$m_utils$.$containsCSSClassName$($row$$36$$[$j$$28$$], $bandingClass$$2$$) && this.$m_utils$.$removeCSSClassName$($row$$36$$[$j$$28$$], $bandingClass$$2$$);
      }
    }
  };
  $DvtDataGrid$$.prototype.$_setAccInfoText$ = function $$DvtDataGrid$$$$$_setAccInfoText$$($key$$68$$, $args$$19$$) {
    var $text$$13$$ = this.$m_resources$.$getTranslatedText$($key$$68$$, $args$$19$$);
    null != $text$$13$$ && (this.$m_accInfo$.textContent = $text$$13$$);
  };
  $DvtDataGrid$$.prototype.$handleExpandEvent$ = function $$DvtDataGrid$$$$$handleExpandEvent$$($event$$153$$) {
    this.$_findRowByKey$($event$$153$$.rowKey).setAttribute("aria-expanded", !0);
    this.$_setAccInfoText$("accessibleRowExpanded");
    this.$populateAccInfo$();
  };
  $DvtDataGrid$$.prototype.$handleCollapseEvent$ = function $$DvtDataGrid$$$$$handleCollapseEvent$$($event$$154$$) {
    this.$_findRowByKey$($event$$154$$.rowKey).setAttribute("aria-expanded", !1);
    this.$_setAccInfoText$("accessibleRowCollapsed");
    this.$populateAccInfo$();
  };
  $DvtDataGrid$$.prototype.$_setKey$ = function $$DvtDataGrid$$$$$_setKey$$($element$$98$$, $key$$69$$) {
    null != $element$$98$$ && ($element$$98$$[this.$m_resources$.$getMappedAttribute$("key")] = $key$$69$$);
  };
  $DvtDataGrid$$.prototype.$_getKey$ = function $$DvtDataGrid$$$$$_getKey$$($element$$99$$) {
    return null != $element$$99$$ ? $element$$99$$[this.$m_resources$.$getMappedAttribute$("key")] : null;
  };
  $DvtDataGrid$$.prototype.$_getActiveRowKey$ = function $$DvtDataGrid$$$$$_getActiveRowKey$$($prev$$2$$) {
    if ($prev$$2$$ && null != this.$m_prevActive$) {
      if ("header" == this.$m_prevActive$.type && "row" === this.$m_prevActive$.axis) {
        return this.$m_prevActive$.key;
      }
      if ("cell" == this.$m_prevActive$.type) {
        return this.$m_prevActive$.keys.row;
      }
    } else {
      if (null != this.$m_active$) {
        if ("header" == this.$m_active$.type && "row" === this.$m_active$.axis) {
          return this.$m_active$.key;
        }
        if ("cell" == this.$m_active$.type) {
          return this.$m_active$.keys.row;
        }
      }
    }
    return null;
  };
  $DvtDataGrid$$.prototype.$_handleCut$ = function $$DvtDataGrid$$$$$_handleCut$$($event$$155$$, $target$$101$$) {
    var $rowKey$$11$$;
    null == $target$$101$$ && ($target$$101$$ = $event$$155$$.target);
    return this.$_isMoveOnRowEnabled$(this.$findRow$($target$$101$$)) ? (null != this.$m_cutRow$ && this.$m_utils$.$removeCSSClassName$(this.$m_cutRow$, this.$getMappedStyle$("cut")), $rowKey$$11$$ = this.$_getKey$(this.find($target$$101$$, "row")), this.$m_cutRow$ = this.$_findRowByKey$($rowKey$$11$$), this.$m_cutRowHeader$ = this.$_findRowHeaderByKey$($rowKey$$11$$), this.$m_utils$.$addCSSClassName$(this.$m_cutRow$, this.$getMappedStyle$("cut")), null !== this.$m_cutRowHeader$ && this.$m_utils$.$addCSSClassName$(this.$m_cutRowHeader$, 
    this.$getMappedStyle$("cut")), !0) : !1;
  };
  $DvtDataGrid$$.prototype.$_handlePaste$ = function $$DvtDataGrid$$$$$_handlePaste$$($event$$156$$, $target$$102$$) {
    var $row$$39$$;
    null == $target$$102$$ && ($target$$102$$ = $event$$156$$.target);
    return null != this.$m_cutRow$ ? (this.$m_utils$.$removeCSSClassName$(this.$m_cutRow$, this.$getMappedStyle$("cut")), null !== this.$m_cutRowHeader$ && this.$m_utils$.$removeCSSClassName$(this.$m_cutRowHeader$, this.$getMappedStyle$("cut")), $row$$39$$ = this.find($target$$102$$, "row"), this.$m_cutRow$ !== $row$$39$$ && (this.$_isSelectionEnabled$() && this.$_clearSelection$(), this.$_isDatabodyCellActive$() && this.$_unhighlightActive$(), this.$m_moveActive$ = !0, this.$m_dataSource$.move(this.$_getKey$(this.$m_cutRow$), 
    this.$_getKey$($row$$39$$))), this.$m_cutRow$ = null, !0) : !1;
  };
  $DvtDataGrid$$.prototype.$_handleCancelReorder$ = function $$DvtDataGrid$$$$$_handleCancelReorder$$() {
    if (null != this.$m_cutRow$) {
      return this.$m_utils$.$removeCSSClassName$(this.$m_cutRow$, this.$getMappedStyle$("cut")), this.$m_cutRow$ = null, null !== this.$m_cutRowHeader$ && (this.$m_utils$.$removeCSSClassName$(this.$m_cutRowHeader$, this.$getMappedStyle$("cut")), this.$m_cutRowHeader$ = null), !0;
    }
  };
  $DvtDataGrid$$.prototype.$_handleMove$ = function $$DvtDataGrid$$$$$_handleMove$$($deltaY$$4_event$$158$$) {
    var $height$$31_rowKey$$12_target$$104$$;
    null == this.$m_moveRow$ && ($height$$31_rowKey$$12_target$$104$$ = $deltaY$$4_event$$158$$.target, $height$$31_rowKey$$12_target$$104$$ = this.$_getKey$(this.find($height$$31_rowKey$$12_target$$104$$, "row")), this.$m_moveRow$ = this.$_findRowByKey$($height$$31_rowKey$$12_target$$104$$), this.$m_moveRowHeader$ = this.$_findRowHeaderByKey$($height$$31_rowKey$$12_target$$104$$), null != this.$m_moveRow$.style.height && this.$setElementHeight$(this.$m_moveRow$, this.$calculateRowHeight$(this.$m_moveRow$)), 
    this.$m_utils$.$addCSSClassName$(this.$m_moveRow$, this.$getMappedStyle$("drag")), this.$m_originalTop$ = this.$getElementDir$(this.$m_moveRow$, "top"), this.$m_dropTarget$ = document.createElement("div"), this.$m_utils$.$addCSSClassName$(this.$m_dropTarget$, this.$getMappedStyle$("drop")), this.$setElementHeight$(this.$m_dropTarget$, this.$calculateRowHeight$(this.$m_moveRow$)), this.$setElementDir$(this.$m_dropTarget$, this.$m_originalTop$, "top"), this.$m_databody$.firstChild.appendChild(this.$m_dropTarget$), 
    null !== this.$m_moveRowHeader$ && (null != this.$m_moveRowHeader$.style.height && this.$setElementHeight$(this.$m_moveRowHeader$, this.$calculateRowHeight$(this.$m_moveRowHeader$)), this.$m_utils$.$addCSSClassName$(this.$m_moveRowHeader$, this.$getMappedStyle$("drag")), this.$m_dropTargetHeader$ = document.createElement("div"), this.$m_utils$.$addCSSClassName$(this.$m_dropTargetHeader$, this.$getMappedStyle$("drop")), this.$setElementHeight$(this.$m_dropTargetHeader$, this.$calculateRowHeight$(this.$m_moveRowHeader$)), 
    this.$setElementDir$(this.$m_dropTargetHeader$, this.$m_originalTop$, "top"), this.$m_rowHeader$.firstChild.appendChild(this.$m_dropTargetHeader$)));
    this.$m_utils$.$isTouchDevice$() || (this.$m_prevY$ = this.$m_currentY$, this.$m_currentY$ = $deltaY$$4_event$$158$$.pageY);
    $deltaY$$4_event$$158$$ = this.$m_currentY$ - this.$m_prevY$;
    $height$$31_rowKey$$12_target$$104$$ = this.$calculateRowHeight$(this.$m_moveRow$);
    this.$setElementDir$(this.$m_moveRow$, this.$getElementDir$(this.$m_moveRow$, "top") + $deltaY$$4_event$$158$$, "top");
    null !== this.$m_moveRowHeader$ && this.$setElementDir$(this.$m_moveRowHeader$, this.$getElementDir$(this.$m_moveRowHeader$, "top") + $deltaY$$4_event$$158$$, "top");
    null != this.$m_moveRow$.nextSibling && this.$m_moveRow$.nextSibling != this.$m_dropTarget$ && this.$getElementDir$(this.$m_moveRow$.nextSibling, "top") < this.$getElementDir$(this.$m_moveRow$, "top") + $height$$31_rowKey$$12_target$$104$$ / 2 ? this.$_moveDropRows$("nextSibling") : null != this.$m_moveRow$.previousSibling && this.$getElementDir$(this.$m_moveRow$.previousSibling, "top") > this.$getElementDir$(this.$m_moveRow$, "top") - $height$$31_rowKey$$12_target$$104$$ / 2 && this.$_moveDropRows$("previousSibling");
  };
  $DvtDataGrid$$.prototype.$_moveDropRows$ = function $$DvtDataGrid$$$$$_moveDropRows$$($sibling$$) {
    var $newTop$$1$$, $databodyScroller$$, $newSiblingTop$$, $headerScroller$$;
    $databodyScroller$$ = this.$m_moveRow$.parentNode;
    "nextSibling" == $sibling$$ ? ($newTop$$1$$ = this.$m_originalTop$ + this.$calculateRowHeight$(this.$m_moveRow$[$sibling$$]), $newSiblingTop$$ = this.$m_originalTop$) : ($newTop$$1$$ = this.$getElementDir$(this.$m_moveRow$[$sibling$$], "top"), $newSiblingTop$$ = $newTop$$1$$ + this.$calculateRowHeight$(this.$m_moveRow$));
    this.$setElementDir$(this.$m_dropTarget$, $newTop$$1$$, "top");
    this.$setElementDir$(this.$m_moveRow$[$sibling$$], $newSiblingTop$$, "top");
    null !== this.$m_moveRowHeader$ && ($headerScroller$$ = this.$m_moveRowHeader$.parentNode, this.$setElementDir$(this.$m_dropTargetHeader$, $newTop$$1$$, "top"), this.$setElementDir$(this.$m_moveRowHeader$[$sibling$$], $newSiblingTop$$, "top"));
    this.$m_originalTop$ = $newTop$$1$$;
    this.$m_utils$.$removeCSSClassName$(this.$m_moveRow$.previousSibling, this.$getMappedStyle$("activedrop"));
    "nextSibling" === $sibling$$ ? ($databodyScroller$$.insertBefore(this.$m_moveRow$, this.$m_moveRow$[$sibling$$][$sibling$$]), null !== this.$m_moveRowHeader$ && $headerScroller$$.insertBefore(this.$m_moveRowHeader$, this.$m_moveRowHeader$[$sibling$$][$sibling$$])) : ($databodyScroller$$.insertBefore(this.$m_moveRow$, this.$m_moveRow$[$sibling$$]), null !== this.$m_moveRowHeader$ && $headerScroller$$.insertBefore(this.$m_moveRowHeader$, this.$m_moveRowHeader$[$sibling$$]));
    this.$m_utils$.$addCSSClassName$(this.$m_moveRow$.previousSibling, this.$getMappedStyle$("activedrop"));
  };
  $DvtDataGrid$$.prototype.$_isMoveEnabled$ = function $$DvtDataGrid$$$$$_isMoveEnabled$$() {
    var $capability$$1$$;
    $capability$$1$$ = this.$m_dataSource$.getCapability("move");
    return "enable" !== this.$m_options$.$isMoveable$() || "full" !== $capability$$1$$ && "row" !== $capability$$1$$ ? !1 : !0;
  };
  $DvtDataGrid$$.prototype.$_handleMoveMouseUp$ = function $$DvtDataGrid$$$$$_handleMoveMouseUp$$($validUp$$) {
    null != this.$m_moveRow$ && (this.$_remove$(this.$m_dropTarget$), this.$m_moveRow$.style.zIndex = "", null !== this.$m_moveRowHeader$ && (this.$_remove$(this.$m_dropTargetHeader$), this.$m_moveRowHeader$.style.zIndex = ""), null != this.$m_active$ && "column" != this.$m_active$.axis && (this.$m_moveActive$ = !0), this.$_isSelectionEnabled$() && this.$_clearSelection$(), !0 == $validUp$$ ? this.$m_dataSource$.move(this.$_getKey$(this.$m_moveRow$), null === this.$m_moveRow$.nextSibling ? null : 
    this.$_getKey$(this.$m_moveRow$.nextSibling)) : this.$m_dataSource$.move(this.$_getKey$(this.$m_moveRow$), this.$_getKey$(this.$m_moveRow$)), this.$m_moveRow$ = null, this.$m_databodyMove$ = !1);
  };
  $DvtDataGrid$$.prototype.$_isMoveOnRowEnabled$ = function $$DvtDataGrid$$$$$_isMoveOnRowEnabled$$($row$$40$$) {
    return null == $row$$40$$ || this.$m_utils$.$containsCSSClassName$($row$$40$$.parentNode, this.$getMappedStyle$("colheader")) ? !1 : this.$_isMoveEnabled$() && this.$_getActiveRowKey$() === this.$_getKey$($row$$40$$) ? !0 : !1;
  };
  $DvtDataGrid$$.prototype.$_manageMoveCursor$ = function $$DvtDataGrid$$$$$_manageMoveCursor$$() {
    var $className$$16$$, $activeKey_activeRowHeader$$, $prevActiveKey_prevActiveRowHeader$$, $activeRow$$, $prevActiveRow$$;
    $className$$16$$ = this.$getMappedStyle$("draggable");
    $activeKey_activeRowHeader$$ = this.$_getActiveRowKey$();
    $prevActiveKey_prevActiveRowHeader$$ = this.$_getActiveRowKey$(!0);
    $activeRow$$ = this.$_findRowByKey$($activeKey_activeRowHeader$$);
    $prevActiveRow$$ = this.$_findRowByKey$($prevActiveKey_prevActiveRowHeader$$);
    this.$m_utils$.$containsCSSClassName$($prevActiveRow$$, $className$$16$$) && (this.$m_utils$.$removeCSSClassName$($prevActiveRow$$, $className$$16$$), $prevActiveKey_prevActiveRowHeader$$ = this.$_findRowHeaderByKey$($prevActiveKey_prevActiveRowHeader$$), this.$m_utils$.$containsCSSClassName$($prevActiveKey_prevActiveRowHeader$$, $className$$16$$) && this.$m_utils$.$removeCSSClassName$($prevActiveKey_prevActiveRowHeader$$, $className$$16$$));
    this.$_isMoveOnRowEnabled$($activeRow$$) && ($activeKey_activeRowHeader$$ = this.$_findRowHeaderByKey$($activeKey_activeRowHeader$$), this.$m_utils$.$addCSSClassName$($activeRow$$, $className$$16$$), this.$m_utils$.$addCSSClassName$($activeKey_activeRowHeader$$, $className$$16$$));
  };
  $DvtDataGrid$$.prototype.$handleRootFocus$ = function $$DvtDataGrid$$$$$handleRootFocus$$($event$$160$$) {
    var $newCellIndex$$2$$;
    this.$m_utils$.$addCSSClassName$(this.$m_root$, this.$getMappedStyle$("focus"));
    if (!this.$m_root$.contains(document.activeElement) || document.activeElement === this.$m_root$ && 0 == this.$m_root$.tabIndex) {
      this.$m_externalFocus$ = !0, this.$_isCellEditable$() ? this.$_setAccInfoText$("accessibleEditableMode") : this.$_isGridEditable$() && this.$_setAccInfoText$("accessibleNavigationMode"), null != this.$m_active$ || this.$_databodyEmpty$() ? null != this.$m_active$ && this.$_highlightActive$() : ($newCellIndex$$2$$ = this.createIndex(0, 0), this.$scrollToIndex$($newCellIndex$$2$$), this.$_isSelectionEnabled$() ? this.$selectAndFocus$($newCellIndex$$2$$, $event$$160$$) : this.$_setActiveByIndex$($newCellIndex$$2$$))
      ;
    }
    this.$m_root$.tabIndex = -1;
  };
  $DvtDataGrid$$.prototype.$handleRootBlur$ = function $$DvtDataGrid$$$$$handleRootBlur$$() {
    var $active$$3$$;
    setTimeout(function() {
      this.$m_root$.contains(document.activeElement) || (this.$m_root$.tabIndex = 0, $active$$3$$ = this.$_getActiveElement$(), null != $active$$3$$ && this.$_unsetAriaProperties$($active$$3$$));
    }.bind(this), 100);
    null == this.$m_moveRow$ && this.$m_utils$.$removeCSSClassName$(this.$m_root$, this.$getMappedStyle$("focus"));
  };
  $DvtDataGrid$$.prototype.$calculateRowHeight$ = function $$DvtDataGrid$$$$$calculateRowHeight$$($row$$41$$) {
    return "" != $row$$41$$.style.height ? this.$getElementHeight$($row$$41$$) : null != $row$$41$$.nextSibling ? this.$getElementDir$($row$$41$$.nextSibling, "top") - this.$getElementDir$($row$$41$$, "top") : this.$m_endRowPixel$ - this.$getElementDir$($row$$41$$, "top");
  };
  $DvtDataGrid$$.prototype.$calculateRowHeaderHeight$ = function $$DvtDataGrid$$$$$calculateRowHeaderHeight$$($rowHeader$$20$$) {
    return "" != $rowHeader$$20$$.style.height ? this.$getElementHeight$($rowHeader$$20$$) : null != $rowHeader$$20$$.nextSibling ? this.$getElementDir$($rowHeader$$20$$.nextSibling, "top") - this.$getElementDir$($rowHeader$$20$$, "top") : this.$m_endRowHeaderPixel$ - this.$getElementDir$($rowHeader$$20$$, "top");
  };
  $DvtDataGrid$$.prototype.$calculateColumnWidth$ = function $$DvtDataGrid$$$$$calculateColumnWidth$$($cell$$20$$) {
    if ("" != $cell$$20$$.style.width) {
      return this.$getElementWidth$($cell$$20$$);
    }
    var $dir$$11$$ = this.$m_resources$.$isRTLMode$() ? "right" : "left";
    return null != $cell$$20$$.nextSibling ? this.$getElementDir$($cell$$20$$.nextSibling, $dir$$11$$) - this.$getElementDir$($cell$$20$$, $dir$$11$$) : this.$m_endColPixel$ - this.$getElementDir$($cell$$20$$, $dir$$11$$);
  };
  $DvtDataGrid$$.prototype.$calculateColumnHeaderWidth$ = function $$DvtDataGrid$$$$$calculateColumnHeaderWidth$$($columnHeader$$6$$) {
    if ("" != $columnHeader$$6$$.style.width) {
      return this.$getElementWidth$($columnHeader$$6$$);
    }
    var $dir$$12$$ = this.$m_resources$.$isRTLMode$() ? "right" : "left";
    return null != $columnHeader$$6$$.nextSibling ? this.$getElementDir$($columnHeader$$6$$.nextSibling, $dir$$12$$) - this.$getElementDir$($columnHeader$$6$$, $dir$$12$$) : this.$m_endColHeaderPixel$ - this.$getElementDir$($columnHeader$$6$$, $dir$$12$$);
  };
  $DvtDataGrid$$.prototype.$_databodyEmpty$ = function $$DvtDataGrid$$$$$_databodyEmpty$$() {
    return null == this.$m_databody$.firstChild ? !0 : !1;
  };
  $DvtDataGrid$$.prototype.$changeStyleProperty$ = function $$DvtDataGrid$$$$$changeStyleProperty$$($target$$105$$, $prop$$65$$, $value$$198$$, $action$$1$$) {
    "undefined" != typeof $prop$$65$$ && ($target$$105$$.style[$prop$$65$$] = "remove" == $action$$1$$ ? "" : $value$$198$$);
  };
  $DvtDataGrid$$.prototype.$addTransformMoveStyle$ = function $$DvtDataGrid$$$$$addTransformMoveStyle$$($target$$106$$, $duration$$17$$, $delay$$3$$, $timing$$1$$, $x$$54$$, $y$$37$$) {
    this.$changeStyleProperty$($target$$106$$, this.$getCssSupport$("transition-delay"), $delay$$3$$);
    this.$changeStyleProperty$($target$$106$$, this.$getCssSupport$("transition-timing-function"), $timing$$1$$);
    this.$changeStyleProperty$($target$$106$$, this.$getCssSupport$("transition-duration"), $duration$$17$$);
    this.$changeStyleProperty$($target$$106$$, this.$getCssSupport$("transform"), "translate3d(" + $x$$54$$ + "px," + $y$$37$$ + "px,0px)");
  };
  $DvtDataGrid$$.prototype.$removeTransformMoveStyle$ = function $$DvtDataGrid$$$$$removeTransformMoveStyle$$($target$$107$$) {
    this.$changeStyleProperty$($target$$107$$, this.$getCssSupport$("transition-delay"), null, "remove");
    this.$changeStyleProperty$($target$$107$$, this.$getCssSupport$("transition-timing-function"), null, "remove");
    this.$changeStyleProperty$($target$$107$$, this.$getCssSupport$("transition-duration"), null, "remove");
    this.$changeStyleProperty$($target$$107$$, this.$getCssSupport$("transform"), null, "remove");
  };
  $DvtDataGrid$$.prototype.$getCssSupport$ = function $$DvtDataGrid$$$$$getCssSupport$$($cssprop$$) {
    function $toCamel$$($str$$20$$) {
      return $str$$20$$.replace(/\-([a-z])/gi, function($match$$16$$, $val$$29$$) {
        return $val$$29$$.toUpperCase();
      });
    }
    var $vendors$$, $root$$15$$, $i$$181$$, $css3mc$$;
    $vendors$$ = " -moz- -webkit- -o- -ms- -khtml-".split(" ");
    $root$$15$$ = document.documentElement;
    for ($i$$181$$ = 0;$i$$181$$ < $vendors$$.length;$i$$181$$++) {
      if ($css3mc$$ = $toCamel$$($vendors$$[$i$$181$$] + $cssprop$$), "Ms" == $css3mc$$.substr(0, 2) && ($css3mc$$ = "m" + $css3mc$$.substr(1)), $css3mc$$ in $root$$15$$.style) {
        return $css3mc$$;
      }
    }
  };
  $DvtDataGrid$$.prototype.$unhighlightSelection$ = function $$DvtDataGrid$$$$$unhighlightSelection$$() {
    var $i$$182$$, $ranges$$;
    $ranges$$ = this.$GetSelection$();
    for ($i$$182$$ = 0;$i$$182$$ < $ranges$$.length;$i$$182$$ += 1) {
      this.$unhighlightRange$($ranges$$[$i$$182$$]);
    }
  };
  $DvtDataGrid$$.prototype.$unhighlightRange$ = function $$DvtDataGrid$$$$$unhighlightRange$$($elems$$2_range$$9$$) {
    $elems$$2_range$$9$$ = this.$getElementsInRange$($elems$$2_range$$9$$);
    this.$unhighlightElems$($elems$$2_range$$9$$);
  };
  $DvtDataGrid$$.prototype.$highlightRange$ = function $$DvtDataGrid$$$$$highlightRange$$($range$$10$$, $updateAccInfo$$) {
    var $count$$32_elems$$3$$;
    $count$$32_elems$$3$$ = this.$getElementsInRange$($range$$10$$);
    this.$highlightElems$($count$$32_elems$$3$$);
    $updateAccInfo$$ && ($count$$32_elems$$3$$ = 1 == this.$GetSelection$().length ? $count$$32_elems$$3$$.length : this.$_getCurrentSelectionCellCount$(), this.$_setAccInfoText$("accessibleMultiCellSelected", {num:$count$$32_elems$$3$$}));
  };
  $DvtDataGrid$$.prototype.$_getCurrentSelectionCellCount$ = function $$DvtDataGrid$$$$$_getCurrentSelectionCellCount$$() {
    var $total$$, $selection$$3$$, $elems$$4$$, $i$$183$$;
    $total$$ = 0;
    $selection$$3$$ = this.$GetSelection$();
    for ($i$$183$$ = 0;$i$$183$$ < $selection$$3$$.length;$i$$183$$++) {
      $elems$$4$$ = this.$getElementsInRange$($selection$$3$$[$i$$183$$]), $total$$ += $elems$$4$$.length;
    }
    return $total$$;
  };
  $DvtDataGrid$$.prototype.$unhighlightElems$ = function $$DvtDataGrid$$$$$unhighlightElems$$($elems$$5$$) {
    var $i$$184$$, $elem$$47$$;
    if (null != $elems$$5$$ && 0 != $elems$$5$$.length) {
      for ($i$$184$$ = 0;$i$$184$$ < $elems$$5$$.length;$i$$184$$ += 1) {
        $elem$$47$$ = $elems$$5$$[$i$$184$$], this.$_unhighlightElement$($elem$$47$$, ["selected"]);
      }
    }
  };
  $DvtDataGrid$$.prototype.$highlightElems$ = function $$DvtDataGrid$$$$$highlightElems$$($elems$$6$$) {
    var $i$$185$$, $elem$$48$$;
    if (null != $elems$$6$$ && 0 != $elems$$6$$.length) {
      for ($i$$185$$ = 0;$i$$185$$ < $elems$$6$$.length;$i$$185$$ += 1) {
        $elem$$48$$ = $elems$$6$$[$i$$185$$], this.$_highlightElement$($elem$$48$$, ["selected"]);
      }
    }
  };
  $DvtDataGrid$$.prototype.$applySelection$ = function $$DvtDataGrid$$$$$applySelection$$($startRow$$5$$, $endRow$$2$$) {
    var $i$$186$$, $ranges$$1$$, $elems$$7$$;
    $ranges$$1$$ = this.$GetSelection$();
    for ($i$$186$$ = 0;$i$$186$$ < $ranges$$1$$.length;$i$$186$$ += 1) {
      $elems$$7$$ = this.$getElementsInRange$($ranges$$1$$[$i$$186$$], $startRow$$5$$, $endRow$$2$$), this.$highlightElems$($elems$$7$$);
    }
  };
  $DvtDataGrid$$.prototype.$handleDatabodySelectionDrag$ = function $$DvtDataGrid$$$$$handleDatabodySelectionDrag$$($event$$162$$) {
    var $cell$$21_index$$125_target$$108$$;
    this.$m_utils$.$isTouchDevice$() ? $cell$$21_index$$125_target$$108$$ = this.$findCell$(document.elementFromPoint($event$$162$$.touches[0].clientX, $event$$162$$.touches[0].clientY)) : ($cell$$21_index$$125_target$$108$$ = $event$$162$$.target, $cell$$21_index$$125_target$$108$$ = this.$findCell$($cell$$21_index$$125_target$$108$$));
    null != $cell$$21_index$$125_target$$108$$ && ($cell$$21_index$$125_target$$108$$ = {row:this.$getRowIndex$($cell$$21_index$$125_target$$108$$.parentNode), column:this.$getCellIndex$($cell$$21_index$$125_target$$108$$)}, this.$extendSelection$($cell$$21_index$$125_target$$108$$, $event$$162$$));
  };
  $DvtDataGrid$$.prototype.$_isSelected$ = function $$DvtDataGrid$$$$$_isSelected$$($cell$$22$$) {
    var $selectedClassName$$ = this.$getMappedStyle$("selected");
    return "row" == this.$m_options$.$getSelectionMode$() && null != $selectedClassName$$ ? this.$m_utils$.$containsCSSClassName$(this.$findRow$($cell$$22$$), $selectedClassName$$) : null != $selectedClassName$$ ? this.$m_utils$.$containsCSSClassName$($cell$$22$$, $selectedClassName$$) : !1;
  };
  $DvtDataGrid$$.prototype.$_deselect$ = function $$DvtDataGrid$$$$$_deselect$$($columnIndex$$2_index$$126$$) {
    var $rowIndex$$8$$, $indexToRemove$$1$$, $ranges$$2$$, $i$$187$$, $endIndex$$7_range$$11_rangeEndColumn$$1$$, $rangeStartColumn$$1_startIndex$$20$$, $rangeStartRow$$1$$, $rangeEndRow$$1$$;
    "row" == this.$m_options$.$getSelectionMode$() && ($columnIndex$$2_index$$126$$ = this.createIndex($columnIndex$$2_index$$126$$.row));
    $rowIndex$$8$$ = $columnIndex$$2_index$$126$$.row;
    $columnIndex$$2_index$$126$$ = $columnIndex$$2_index$$126$$.column;
    $indexToRemove$$1$$ = -1;
    $ranges$$2$$ = this.$GetSelection$();
    for ($i$$187$$ = 0;$i$$187$$ < $ranges$$2$$.length;$i$$187$$ += 1) {
      if ($endIndex$$7_range$$11_rangeEndColumn$$1$$ = $ranges$$2$$[$i$$187$$], $rangeStartColumn$$1_startIndex$$20$$ = $endIndex$$7_range$$11_rangeEndColumn$$1$$.startIndex, $endIndex$$7_range$$11_rangeEndColumn$$1$$ = this.$getEndIndex$($endIndex$$7_range$$11_rangeEndColumn$$1$$), $rangeStartRow$$1$$ = $rangeStartColumn$$1_startIndex$$20$$.row, $rangeEndRow$$1$$ = $endIndex$$7_range$$11_rangeEndColumn$$1$$.row, $rangeStartRow$$1$$ == $rowIndex$$8$$ && $rangeEndRow$$1$$ == $rowIndex$$8$$) {
        if (!isNaN($rangeStartColumn$$1_startIndex$$20$$.column) && !isNaN($endIndex$$7_range$$11_rangeEndColumn$$1$$.column)) {
          if ($rangeStartColumn$$1_startIndex$$20$$ = $rangeStartColumn$$1_startIndex$$20$$.column, $endIndex$$7_range$$11_rangeEndColumn$$1$$ = $endIndex$$7_range$$11_rangeEndColumn$$1$$.column, $rangeStartColumn$$1_startIndex$$20$$ == $columnIndex$$2_index$$126$$ && $endIndex$$7_range$$11_rangeEndColumn$$1$$ == $columnIndex$$2_index$$126$$) {
            $indexToRemove$$1$$ = $i$$187$$;
            break;
          }
        } else {
          if (isNaN($columnIndex$$2_index$$126$$)) {
            $indexToRemove$$1$$ = $i$$187$$;
            break;
          }
        }
      }
    }
    -1 != $indexToRemove$$1$$ && (this.$unhighlightRange$($ranges$$2$$[$indexToRemove$$1$$]), $ranges$$2$$.splice($indexToRemove$$1$$, 1));
  };
  $DvtDataGrid$$.prototype.$handleDatabodyClickSelection$ = function $$DvtDataGrid$$$$$handleDatabodyClickSelection$$($event$$163$$) {
    var $index$$127$$, $cell$$23_ctrlKey$$2$$, $shiftKey$$2$$;
    $cell$$23_ctrlKey$$2$$ = this.$findCell$($event$$163$$.target);
    null != $cell$$23_ctrlKey$$2$$ && ($index$$127$$ = {row:this.$getRowIndex$($cell$$23_ctrlKey$$2$$.parentNode), column:this.$getCellIndex$($cell$$23_ctrlKey$$2$$)});
    null == $index$$127$$ || void 0 == $index$$127$$ || this.$isMultipleSelection$() && 2 === $event$$163$$.button && this.$_isContainSelection$($index$$127$$) || (this.$scrollToIndex$($index$$127$$), $cell$$23_ctrlKey$$2$$ = this.$m_utils$.$ctrlEquivalent$($event$$163$$), $shiftKey$$2$$ = $event$$163$$.shiftKey, this.$isMultipleSelection$() ? this.$m_utils$.$isTouchDevice$() ? (this.$_removeTouchSelectionAffordance$(), null != this.$m_active$ && this.$_unhighlightActive$(), this.$selectAndFocus$($index$$127$$, 
    $event$$163$$, !1)) : $cell$$23_ctrlKey$$2$$ || $shiftKey$$2$$ ? !$cell$$23_ctrlKey$$2$$ && $shiftKey$$2$$ ? this.$extendSelection$($index$$127$$, $event$$163$$) : this.$selectAndFocus$($index$$127$$, $event$$163$$, !0) : this.$selectAndFocus$($index$$127$$, $event$$163$$, !1) : this.$selectAndFocus$($index$$127$$, $event$$163$$, !1));
  };
  $DvtDataGrid$$.prototype.$_isContainSelection$ = function $$DvtDataGrid$$$$$_isContainSelection$$($index$$128$$, $ranges$$3$$) {
    var $endIndex$$8_range$$12_rangeEndColumn$$2$$, $rangeStartColumn$$2_startIndex$$21$$, $rangeStartRow$$2$$, $rangeEndRow$$2$$, $i$$188$$;
    null == $ranges$$3$$ && ($ranges$$3$$ = this.$GetSelection$());
    for ($i$$188$$ = 0;$i$$188$$ < $ranges$$3$$.length;$i$$188$$ += 1) {
      if ($endIndex$$8_range$$12_rangeEndColumn$$2$$ = $ranges$$3$$[$i$$188$$], $rangeStartColumn$$2_startIndex$$21$$ = $endIndex$$8_range$$12_rangeEndColumn$$2$$.startIndex, $endIndex$$8_range$$12_rangeEndColumn$$2$$ = this.$getEndIndex$($endIndex$$8_range$$12_rangeEndColumn$$2$$), $rangeStartRow$$2$$ = $rangeStartColumn$$2_startIndex$$21$$.row, $rangeEndRow$$2$$ = $endIndex$$8_range$$12_rangeEndColumn$$2$$.row, !($index$$128$$.row < $rangeStartRow$$2$$ || -1 != $rangeEndRow$$2$$ && $index$$128$$.row > 
      $rangeEndRow$$2$$)) {
        if (isNaN($rangeStartColumn$$2_startIndex$$21$$.column) || isNaN($endIndex$$8_range$$12_rangeEndColumn$$2$$.column)) {
          return!0;
        }
        $rangeStartColumn$$2_startIndex$$21$$ = $rangeStartColumn$$2_startIndex$$21$$.column;
        $endIndex$$8_range$$12_rangeEndColumn$$2$$ = $endIndex$$8_range$$12_rangeEndColumn$$2$$.column;
        if (!($index$$128$$.column < $rangeStartColumn$$2_startIndex$$21$$ || -1 != $endIndex$$8_range$$12_rangeEndColumn$$2$$ && $index$$128$$.column > $endIndex$$8_range$$12_rangeEndColumn$$2$$)) {
          return!0;
        }
      }
    }
    return!1;
  };
  $DvtDataGrid$$.prototype.$_compareSelections$ = function $$DvtDataGrid$$$$$_compareSelections$$($selection1$$, $selection2$$) {
    var $i$$189$$, $j$$29$$, $foundMatch$$2$$;
    if ($selection1$$.length !== $selection2$$.length) {
      return!1;
    }
    for ($i$$189$$ = 0;$i$$189$$ < $selection1$$.length;$i$$189$$ += 1) {
      $foundMatch$$2$$ = !1;
      for ($j$$29$$ = 0;$j$$29$$ < $selection2$$.length;$j$$29$$ += 1) {
        $selection1$$[$i$$189$$].startIndex.row === $selection2$$[$j$$29$$].startIndex.row && $selection1$$[$i$$189$$].startIndex.column === $selection2$$[$j$$29$$].startIndex.column && $selection1$$[$i$$189$$].endIndex.row === $selection2$$[$j$$29$$].endIndex.row && $selection1$$[$i$$189$$].endIndex.column === $selection2$$[$j$$29$$].endIndex.column && ($foundMatch$$2$$ = !0);
      }
      if (!1 === $foundMatch$$2$$) {
        return!1;
      }
    }
    return!0;
  };
  $DvtDataGrid$$.prototype.$findRow$ = function $$DvtDataGrid$$$$$findRow$$($elem$$49$$) {
    return this.find($elem$$49$$, "row");
  };
  $DvtDataGrid$$.prototype.$_clearSelection$ = function $$DvtDataGrid$$$$$_clearSelection$$() {
    var $previous$$;
    this.$unhighlightSelection$();
    this.$_removeTouchSelectionAffordance$();
    $previous$$ = this.$GetSelection$();
    this.$m_selection$ = [];
    this.$_compareSelectionAndFire$(null, $previous$$);
  };
  $DvtDataGrid$$.prototype.$setDiscontiguousSelectionMode$ = function $$DvtDataGrid$$$$$setDiscontiguousSelectionMode$$($flag$$5$$) {
    this.$m_discontiguousSelection$ = $flag$$5$$;
    this.$_setAccInfoText$($flag$$5$$ ? "accessibleRangeSelectModeOn" : "accessibleRangeSelectModeOff");
  };
  $DvtDataGrid$$.prototype.$_selectEntireRow$ = function $$DvtDataGrid$$$$$_selectEntireRow$$($rowStart$$10_startIndex$$22$$, $endIndex$$9_rowEnd$$1$$, $event$$164$$) {
    $rowStart$$10_startIndex$$22$$ = this.createIndex($rowStart$$10_startIndex$$22$$, 0);
    $endIndex$$9_rowEnd$$1$$ = this.createIndex($endIndex$$9_rowEnd$$1$$, -1);
    this.$_selectRange$($rowStart$$10_startIndex$$22$$, $endIndex$$9_rowEnd$$1$$, $event$$164$$);
  };
  $DvtDataGrid$$.prototype.$_selectEntireColumn$ = function $$DvtDataGrid$$$$$_selectEntireColumn$$($columnStart$$7_startIndex$$23$$, $columnEnd$$1_endIndex$$10$$, $event$$165$$) {
    $columnStart$$7_startIndex$$23$$ = this.createIndex(0, $columnStart$$7_startIndex$$23$$);
    $columnEnd$$1_endIndex$$10$$ = this.createIndex(-1, $columnEnd$$1_endIndex$$10$$);
    this.$_selectRange$($columnStart$$7_startIndex$$23$$, $columnEnd$$1_endIndex$$10$$, $event$$165$$);
  };
  $DvtDataGrid$$.prototype.$_selectRange$ = function $$DvtDataGrid$$$$$_selectRange$$($startIndex$$24$$, $endIndex$$11$$, $event$$166$$) {
    this.$unhighlightSelection$();
    this.$_createRangeWithKeys$($startIndex$$24$$, $endIndex$$11$$, this.$_selectRangeCallback$.bind(this, $event$$166$$));
  };
  $DvtDataGrid$$.prototype.$_selectRangeCallback$ = function $$DvtDataGrid$$$$$_selectRangeCallback$$($event$$167$$, $newRange$$) {
    var $selection$$4$$, $previous$$1$$;
    $previous$$1$$ = this.$GetSelection$();
    $selection$$4$$ = [];
    $selection$$4$$.push($newRange$$);
    this.$m_selection$ = $selection$$4$$;
    this.$highlightRange$($newRange$$);
    this.$_isDatabodyCellActive$() && (this.$m_selectionFrontier$ = this.$m_active$.indexes, this.$_highlightActive$());
    this.$_compareSelectionAndFire$($event$$167$$, $previous$$1$$);
  };
  $DvtDataGrid$$.prototype.$GetSelection$ = function $$DvtDataGrid$$$$$GetSelection$$() {
    null == this.$m_selection$ && (this.$m_selection$ = []);
    return this.$m_selection$;
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.GetSelection", $DvtDataGrid$$.prototype.$GetSelection$, void 0);
  $DvtDataGrid$$.prototype.$SetSelection$ = function $$DvtDataGrid$$$$$SetSelection$$($selection$$5$$) {
    void 0 != $selection$$5$$ && (null == $selection$$5$$ && ($selection$$5$$ = []), this.$unhighlightSelection$(), this.$GetSelection$(), this.$m_selection$ = $selection$$5$$, null != this.$m_databody$ && this.$applySelection$(this.$m_startRow$, this.$m_endRow$));
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.SetSelection", $DvtDataGrid$$.prototype.$SetSelection$, void 0);
  $DvtDataGrid$$.prototype.$fireSelectionEvent$ = function $$DvtDataGrid$$$$$fireSelectionEvent$$($event$$168$$, $previousSelection$$) {
    var $details$$4$$ = {event:$event$$168$$, ui:{selection:this.$GetSelection$(), previousSelection:$previousSelection$$}};
    this.fireEvent("select", $details$$4$$);
  };
  $DvtDataGrid$$.prototype.$extendSelection$ = function $$DvtDataGrid$$$$$extendSelection$$($index$$129$$, $event$$169$$) {
    var $anchor$$;
    $anchor$$ = this.$m_utils$.$isTouchDevice$() ? this.$m_touchSelectAnchor$ : this.$m_active$.indexes;
    null != $anchor$$ && (this.$_resetSelectionFrontierFocus$(), this.$m_selectionFrontier$ = $index$$129$$, "row" == this.$m_options$.$getSelectionMode$() && ($index$$129$$ = this.createIndex($index$$129$$.row)), this.$_createRangeWithKeys$($anchor$$, $index$$129$$, this.$_extendSelectionCallback$.bind(this, $event$$169$$)));
  };
  $DvtDataGrid$$.prototype.$_extendSelectionCallback$ = function $$DvtDataGrid$$$$$_extendSelectionCallback$$($event$$170$$, $newRange$$1$$) {
    var $selection$$6_startIndexesMatch$$, $previous$$3$$, $currentRange$$, $endIndexesMatch$$;
    $previous$$3$$ = this.$GetSelection$();
    $currentRange$$ = $previous$$3$$[$previous$$3$$.length - 1];
    $selection$$6_startIndexesMatch$$ = $currentRange$$.startIndex.row == $newRange$$1$$.startIndex.row;
    null != $currentRange$$.startIndex.column && null != $newRange$$1$$.startIndex.column && ($selection$$6_startIndexesMatch$$ = $selection$$6_startIndexesMatch$$ && $currentRange$$.startIndex.column == $newRange$$1$$.startIndex.column);
    $endIndexesMatch$$ = $currentRange$$.endIndex.row == $newRange$$1$$.endIndex.row;
    null != $currentRange$$.endIndex.column && null != $newRange$$1$$.endIndex.column && ($endIndexesMatch$$ = $endIndexesMatch$$ && $currentRange$$.endIndex.column == $newRange$$1$$.endIndex.column);
    $selection$$6_startIndexesMatch$$ && $endIndexesMatch$$ || ($selection$$6_startIndexesMatch$$ = $previous$$3$$.slice(0), $selection$$6_startIndexesMatch$$.pop(), $selection$$6_startIndexesMatch$$.push($newRange$$1$$), this.$m_selection$ = $selection$$6_startIndexesMatch$$, this.$unhighlightRange$($currentRange$$), this.$highlightRange$($newRange$$1$$, !0), this.$_makeSelectionFrontierFocus$(), this.$_compareSelectionAndFire$($event$$170$$, $previous$$3$$), this.$m_discontiguousSelection$ && !this.$m_utils$.$isTouchDevice$() && 
    this.$setDiscontiguousSelectionMode$(!1));
  };
  $DvtDataGrid$$.prototype.$_resetSelectionFrontierFocus$ = function $$DvtDataGrid$$$$$_resetSelectionFrontierFocus$$() {
    var $cell$$24_range$$13$$;
    null == this.$m_selectionFrontier$ || this.$_isDatabodyCellActive$() && this.$m_selectionFrontier$.row == this.$m_active$.indexes.row && this.$m_selectionFrontier$.column == this.$m_active$.indexes.column || ($cell$$24_range$$13$$ = this.createRange(this.$m_selectionFrontier$), $cell$$24_range$$13$$ = this.$getElementsInRange$($cell$$24_range$$13$$), null != $cell$$24_range$$13$$ && 0 < $cell$$24_range$$13$$.length && this.$_unsetAriaProperties$($cell$$24_range$$13$$[0]));
  };
  $DvtDataGrid$$.prototype.$_makeSelectionFrontierFocus$ = function $$DvtDataGrid$$$$$_makeSelectionFrontierFocus$$() {
    var $cell$$25_range$$14_rowOrCell$$;
    null == this.$m_selectionFrontier$ || this.$_isDatabodyCellActive$() && this.$m_selectionFrontier$.row == this.$m_active$.indexes.row && this.$m_selectionFrontier$.column == this.$m_active$.indexes.column || (this.$_isDatabodyCellActive$() && ($cell$$25_range$$14_rowOrCell$$ = this.createRange(this.$m_active$.indexes), $cell$$25_range$$14_rowOrCell$$ = this.$getElementsInRange$($cell$$25_range$$14_rowOrCell$$), null != $cell$$25_range$$14_rowOrCell$$ && 0 < $cell$$25_range$$14_rowOrCell$$.length && 
    this.$_unsetAriaProperties$($cell$$25_range$$14_rowOrCell$$[0])), $cell$$25_range$$14_rowOrCell$$ = this.createRange(this.$m_selectionFrontier$), $cell$$25_range$$14_rowOrCell$$ = this.$getElementsInRange$($cell$$25_range$$14_rowOrCell$$), null != $cell$$25_range$$14_rowOrCell$$ && 0 != $cell$$25_range$$14_rowOrCell$$.length && (this.$_updateContextInfo$(this.$m_selectionFrontier$), $cell$$25_range$$14_rowOrCell$$ = this.$m_utils$.$containsCSSClassName$($cell$$25_range$$14_rowOrCell$$[0], this.$getMappedStyle$("row")) ? 
    $cell$$25_range$$14_rowOrCell$$[0].firstChild : $cell$$25_range$$14_rowOrCell$$[0], this.$_setAriaProperties$(this.$_createActiveObject$($cell$$25_range$$14_rowOrCell$$), null, $cell$$25_range$$14_rowOrCell$$)));
  };
  $DvtDataGrid$$.prototype.$selectAndFocus$ = function $$DvtDataGrid$$$$$selectAndFocus$$($index$$130$$, $event$$171$$, $augment$$) {
    null == $augment$$ && ($augment$$ = !1);
    this.$_resetSelectionFrontierFocus$();
    this.$_setActiveByIndex$($index$$130$$, $event$$171$$) && ("row" == this.$m_options$.$getSelectionMode$() && ($index$$130$$ = this.createIndex($index$$130$$.row)), this.$_createRangeWithKeys$($index$$130$$, $index$$130$$, this.$_selectAndFocusRangeCallback$.bind(this, $index$$130$$, $event$$171$$, $augment$$)));
  };
  $DvtDataGrid$$.prototype.$_selectAndFocusRangeCallback$ = function $$DvtDataGrid$$$$$_selectAndFocusRangeCallback$$($index$$131$$, $event$$172$$, $augment$$1$$, $range$$15$$) {
    var $selection$$7$$, $previous$$4$$;
    $previous$$4$$ = this.$GetSelection$();
    $selection$$7$$ = $previous$$4$$.slice(0);
    $augment$$1$$ || (this.$m_discontiguousSelection$ ? this.$_isDatabodyCellActive$() && null != this.$m_prevActive$ && "cell" == this.$m_prevActive$.type && this.$m_selectionFrontier$.row == this.$m_prevActive$.indexes.row && this.$m_selectionFrontier$.column == this.$m_prevActive$.indexes.column && !this.$m_utils$.$isTouchDevice$() && ($selection$$7$$.pop(), this.$_isContainSelection$(this.$m_prevActive$.indexes, $selection$$7$$) || this.$_unhighlightElement$(this.$_getCellByIndex$(this.$m_prevActive$.indexes), 
    ["selected"])) : (this.$unhighlightSelection$(), $selection$$7$$ = []));
    this.$m_selectionFrontier$ = $index$$131$$;
    $selection$$7$$.push($range$$15$$);
    this.$m_selection$ = $selection$$7$$;
    this.$_highlightElement$(this.$_getCellByIndex$($index$$131$$), ["selected"]);
    this.$_compareSelectionAndFire$($event$$172$$, $previous$$4$$);
  };
  $DvtDataGrid$$.prototype.$_compareSelectionAndFire$ = function $$DvtDataGrid$$$$$_compareSelectionAndFire$$($event$$173$$, $clone$$2$$) {
    var $selection$$8$$ = this.$GetSelection$();
    this.$m_utils$.$isTouchDevice$() && this.$isMultipleSelection$() && 0 < $selection$$8$$.length && (this.$_addTouchSelectionAffordance$($event$$173$$), this.$_moveTouchSelectionAffordance$());
    this.$_compareSelections$($selection$$8$$, $clone$$2$$) || this.$fireSelectionEvent$($event$$173$$, $clone$$2$$);
  };
  $DvtDataGrid$$.prototype.$_addTouchSelectionAffordance$ = function $$DvtDataGrid$$$$$_addTouchSelectionAffordance$$($cell$$26_event$$174_target$$110$$) {
    var $iconSize_left$$10$$, $bottomIcon_selectionMode$$2_topIcon$$, $dir$$13_row$$42$$;
    null == this.$m_topSelectIconContainer$ && null == this.$m_bottomSelectIconContainer$ && ($dir$$13_row$$42$$ = this.$m_resources$.$isRTLMode$() ? "right" : "left", $iconSize_left$$10$$ = this.$_getTouchSelectionAffordanceSize$(), this.$m_topSelectIconContainer$ = document.createElement("div"), this.$m_topSelectIconContainer$.className = this.$getMappedStyle$("toucharea"), this.$setElementDir$(this.$m_topSelectIconContainer$, -$iconSize_left$$10$$ / 2, "top"), $bottomIcon_selectionMode$$2_topIcon$$ = 
    document.createElement("div"), $bottomIcon_selectionMode$$2_topIcon$$.className = this.$getMappedStyle$("selectaffordancetop"), $bottomIcon_selectionMode$$2_topIcon$$.setAttribute("role", "button"), $bottomIcon_selectionMode$$2_topIcon$$.setAttribute("aria-label", this.$m_resources$.$getTranslatedText$("accessibleSelectionAffordanceTop")), this.$m_topSelectIconContainer$.appendChild($bottomIcon_selectionMode$$2_topIcon$$), this.$m_bottomSelectIconContainer$ = document.createElement("div"), this.$m_bottomSelectIconContainer$.className = 
    this.$getMappedStyle$("toucharea"), this.$setElementDir$(this.$m_bottomSelectIconContainer$, -1 * $iconSize_left$$10$$ / 2, "bottom"), $bottomIcon_selectionMode$$2_topIcon$$ = document.createElement("div"), $bottomIcon_selectionMode$$2_topIcon$$.className = this.$getMappedStyle$("selectaffordancebottom"), $bottomIcon_selectionMode$$2_topIcon$$.setAttribute("role", "button"), $bottomIcon_selectionMode$$2_topIcon$$.setAttribute("aria-label", this.$m_resources$.$getTranslatedText$("accessibleSelectionAffordanceBottom")), 
    this.$m_bottomSelectIconContainer$.appendChild($bottomIcon_selectionMode$$2_topIcon$$), $bottomIcon_selectionMode$$2_topIcon$$ = this.$m_options$.$getSelectionMode$(), "row" === $bottomIcon_selectionMode$$2_topIcon$$ ? ($iconSize_left$$10$$ = this.$getElementWidth$(this.$m_databody$) / 2 + this.$m_currentScrollLeft$ - $iconSize_left$$10$$ / 2, this.$setElementDir$(this.$m_topSelectIconContainer$, $iconSize_left$$10$$, $dir$$13_row$$42$$), this.$setElementDir$(this.$m_bottomSelectIconContainer$, 
    $iconSize_left$$10$$, $dir$$13_row$$42$$)) : ($cell$$26_event$$174_target$$110$$ = $cell$$26_event$$174_target$$110$$.target, $cell$$26_event$$174_target$$110$$ = this.$findCell$($cell$$26_event$$174_target$$110$$), $iconSize_left$$10$$ = this.$getElementDir$($cell$$26_event$$174_target$$110$$, $dir$$13_row$$42$$) - $iconSize_left$$10$$ / 2, this.$setElementDir$(this.$m_topSelectIconContainer$, $iconSize_left$$10$$, $dir$$13_row$$42$$), this.$setElementDir$(this.$m_bottomSelectIconContainer$, 
    $iconSize_left$$10$$ + this.$calculateColumnWidth$($cell$$26_event$$174_target$$110$$), $dir$$13_row$$42$$)), $dir$$13_row$$42$$ = this.$getElementsInRange$(this.createRange(this.$m_active$.indexes))[0].parentNode, $dir$$13_row$$42$$.appendChild(this.$m_topSelectIconContainer$), $dir$$13_row$$42$$.appendChild(this.$m_bottomSelectIconContainer$));
  };
  $DvtDataGrid$$.prototype.$_removeTouchSelectionAffordance$ = function $$DvtDataGrid$$$$$_removeTouchSelectionAffordance$$() {
    this.$_isDatabodyCellActive$() && this.$m_topSelectIconContainer$ && this.$m_topSelectIconContainer$.parentNode && (this.$m_topSelectIconContainer$.parentNode.removeChild(this.$m_topSelectIconContainer$), this.$m_bottomSelectIconContainer$.parentNode.removeChild(this.$m_bottomSelectIconContainer$));
  };
  $DvtDataGrid$$.prototype.$_moveTouchSelectionAffordance$ = function $$DvtDataGrid$$$$$_moveTouchSelectionAffordance$$() {
    var $selection$$9_topIconCell$$, $topRow$$, $bottomRow$$, $dir$$14_selectionMode$$3$$, $bottomIconCell_elementsInRange$$;
    $selection$$9_topIconCell$$ = this.$GetSelection$();
    0 < $selection$$9_topIconCell$$.length && ($dir$$14_selectionMode$$3$$ = this.$m_options$.$getSelectionMode$(), $topRow$$ = this.$_findRowByKey$($selection$$9_topIconCell$$[$selection$$9_topIconCell$$.length - 1].startKey.row), $bottomRow$$ = this.$_findRowByKey$($selection$$9_topIconCell$$[$selection$$9_topIconCell$$.length - 1].endKey.row), null != this.$m_topSelectIconContainer$ && null != this.$m_bottomSelectIconContainer$ && ("row" === $dir$$14_selectionMode$$3$$ ? ($topRow$$.appendChild(this.$m_topSelectIconContainer$), 
    $bottomRow$$.appendChild(this.$m_bottomSelectIconContainer$)) : ($dir$$14_selectionMode$$3$$ = this.$m_resources$.$isRTLMode$() ? "right" : "left", $bottomIconCell_elementsInRange$$ = this.$getElementsInRange$($selection$$9_topIconCell$$[$selection$$9_topIconCell$$.length - 1]), $selection$$9_topIconCell$$ = $bottomIconCell_elementsInRange$$[0], $bottomIconCell_elementsInRange$$ = $bottomIconCell_elementsInRange$$[$bottomIconCell_elementsInRange$$.length - 1], $topRow$$.appendChild(this.$m_topSelectIconContainer$), 
    $bottomRow$$.appendChild(this.$m_bottomSelectIconContainer$), this.$setElementDir$(this.$m_topSelectIconContainer$, this.$getElementDir$($selection$$9_topIconCell$$, $dir$$14_selectionMode$$3$$) - this.$_getTouchSelectionAffordanceSize$() / 2, $dir$$14_selectionMode$$3$$), this.$setElementDir$(this.$m_bottomSelectIconContainer$, this.$getElementDir$($bottomIconCell_elementsInRange$$, $dir$$14_selectionMode$$3$$) + this.$calculateColumnWidth$($bottomIconCell_elementsInRange$$) - this.$_getTouchSelectionAffordanceSize$() / 
    2, $dir$$14_selectionMode$$3$$))));
  };
  $DvtDataGrid$$.prototype.$_scrollTouchSelectionAffordance$ = function $$DvtDataGrid$$$$$_scrollTouchSelectionAffordance$$() {
    var $newLeft$$, $dir$$15$$;
    "row" === this.$m_options$.$getSelectionMode$() && null != this.$m_topSelectIconContainer$ && ($dir$$15$$ = this.$m_resources$.$isRTLMode$() ? "right" : "left", $newLeft$$ = this.$getElementWidth$(this.$m_databody$) / 2 + this.$m_currentScrollLeft$, this.$setElementDir$(this.$m_topSelectIconContainer$, $newLeft$$, $dir$$15$$), this.$setElementDir$(this.$m_bottomSelectIconContainer$, $newLeft$$, $dir$$15$$));
  };
  $DvtDataGrid$$.prototype.$_getTouchSelectionAffordanceSize$ = function $$DvtDataGrid$$$$$_getTouchSelectionAffordanceSize$$() {
    var $div$$4$$, $divWidth$$;
    null == this.$m_touchSelectionAffordanceSize$ && ($div$$4$$ = document.createElement("div"), $div$$4$$.className = this.$getMappedStyle$("toucharea"), $div$$4$$.style.visibilty = "hidden", $div$$4$$.style.top = "0px", $div$$4$$.style.visibilty = "0px", this.$m_root$.appendChild($div$$4$$), $divWidth$$ = $div$$4$$.offsetWidth, this.$m_root$.removeChild($div$$4$$), this.$m_touchSelectionAffordanceSize$ = $divWidth$$);
    return this.$m_touchSelectionAffordanceSize$;
  };
  $DvtDataGrid$$.$SORT_ANIMATION_DURATION$ = 800;
  $DvtDataGrid$$.prototype.$_handleSortMouseOver$ = function $$DvtDataGrid$$$$$_handleSortMouseOver$$($event$$175_target$$111$$) {
    var $header$$20$$;
    this.$_databodyEmpty$() || ($event$$175_target$$111$$ = $event$$175_target$$111$$.target, ($header$$20$$ = this.$findHeader$($event$$175_target$$111$$)) && this.$_showOrHideSortIcon$($header$$20$$, !1), (this.$m_utils$.$containsCSSClassName$($event$$175_target$$111$$, this.$getMappedStyle$("sortascending")) || this.$m_utils$.$containsCSSClassName$($event$$175_target$$111$$, this.$getMappedStyle$("sortdescending"))) && this.$m_utils$.$addCSSClassName$($event$$175_target$$111$$, this.$getMappedStyle$("hover")));
  };
  $DvtDataGrid$$.prototype.$_handleSortMouseOut$ = function $$DvtDataGrid$$$$$_handleSortMouseOut$$($event$$176_header$$21$$) {
    var $target$$112$$, $relatedTarget$$;
    !this.$_databodyEmpty$() && ($target$$112$$ = $event$$176_header$$21$$.target, $relatedTarget$$ = $event$$176_header$$21$$.relatedTarget, $event$$176_header$$21$$ = this.$findHeader$($target$$112$$), null != $event$$176_header$$21$$ && null != $relatedTarget$$ && $event$$176_header$$21$$ === this.$findHeader$($relatedTarget$$) || this.$_showOrHideSortIcon$($event$$176_header$$21$$, !0), this.$m_utils$.$containsCSSClassName$($target$$112$$, this.$getMappedStyle$("sortascending")) || this.$m_utils$.$containsCSSClassName$($target$$112$$, 
    this.$getMappedStyle$("sortdescending"))) && (this.$m_utils$.$removeCSSClassName$($target$$112$$, this.$getMappedStyle$("hover")), this.$m_utils$.$removeCSSClassName$($target$$112$$, this.$getMappedStyle$("selected")));
  };
  $DvtDataGrid$$.prototype.$_handleSortIconMouseDown$ = function $$DvtDataGrid$$$$$_handleSortIconMouseDown$$($icon$$) {
    this.$_databodyEmpty$() || this.$m_utils$.$addCSSClassName$($icon$$, this.$getMappedStyle$("selected"));
  };
  $DvtDataGrid$$.prototype.$_toggleSortIconDirection$ = function $$DvtDataGrid$$$$$_toggleSortIconDirection$$($header$$22$$, $direction$$6$$) {
    var $icon$$1$$;
    null != $header$$22$$ && ($icon$$1$$ = this.$_getSortIcon$($header$$22$$), "descending" === $direction$$6$$ && this.$m_utils$.$containsCSSClassName$($icon$$1$$, this.$getMappedStyle$("sortascending")) ? (this.$m_utils$.$removeCSSClassName$($icon$$1$$, this.$getMappedStyle$("sortascending")), this.$m_utils$.$addCSSClassName$($icon$$1$$, this.$getMappedStyle$("sortdescending"))) : "ascending" === $direction$$6$$ && this.$m_utils$.$containsCSSClassName$($icon$$1$$, this.$getMappedStyle$("sortdescending")) && 
    (this.$m_utils$.$removeCSSClassName$($icon$$1$$, this.$getMappedStyle$("sortdescending")), this.$m_utils$.$addCSSClassName$($icon$$1$$, this.$getMappedStyle$("sortascending"))));
  };
  $DvtDataGrid$$.prototype.$_showOrHideSortIcon$ = function $$DvtDataGrid$$$$$_showOrHideSortIcon$$($header$$23$$, $hide$$) {
    var $icon$$2$$, $sorted$$2$$ = !1;
    null != $header$$23$$ && (($icon$$2$$ = this.$_getSortIcon$($header$$23$$), null != this.$m_sortInfo$ && ($sorted$$2$$ = this.$m_sortInfo$.key === this.$_getKey$($header$$23$$)), !1 !== $hide$$ || $sorted$$2$$) ? !0 !== $hide$$ || $sorted$$2$$ || (this.$m_utils$.$removeCSSClassName$($icon$$2$$, this.$getMappedStyle$("default")), this.$m_utils$.$addCSSClassName$($icon$$2$$, this.$getMappedStyle$("disabled"))) : (this.$m_utils$.$removeCSSClassName$($icon$$2$$, this.$getMappedStyle$("disabled")), 
    this.$m_utils$.$addCSSClassName$($icon$$2$$, this.$getMappedStyle$("default"))));
  };
  $DvtDataGrid$$.prototype.$_buildSortIcon$ = function $$DvtDataGrid$$$$$_buildSortIcon$$($direction$$7_headerContext$$4$$) {
    var $sortIcon$$1$$, $iconClassString$$, $sortContainer$$;
    $sortContainer$$ = document.createElement("div");
    $sortContainer$$.className = this.$getMappedStyle$("sortcontainer");
    $sortIcon$$1$$ = document.createElement("div");
    $iconClassString$$ = this.$getMappedStyle$("icon") + " " + this.$getMappedStyle$("clickableicon");
    $direction$$7_headerContext$$4$$.key === (null != this.$m_sortInfo$ ? this.$m_sortInfo$.key : null) ? ($direction$$7_headerContext$$4$$ = null != this.$m_sortInfo$ ? this.$m_sortInfo$.direction : null, "ascending" === $direction$$7_headerContext$$4$$ ? $sortIcon$$1$$.className = this.$getMappedStyle$("sortascending") + " " + $iconClassString$$ + " " + this.$getMappedStyle$("default") : "descending" === $direction$$7_headerContext$$4$$ && ($sortIcon$$1$$.className = this.$getMappedStyle$("sortdescending") + 
    " " + $iconClassString$$ + " " + this.$getMappedStyle$("default"))) : ($iconClassString$$ += " " + this.$getMappedStyle$("disabled"), $sortIcon$$1$$.className = this.$getMappedStyle$("sortascending") + " " + $iconClassString$$);
    $sortContainer$$.appendChild($sortIcon$$1$$);
    return $sortContainer$$;
  };
  $DvtDataGrid$$.prototype.$_handleKeyboardSort$ = function $$DvtDataGrid$$$$$_handleKeyboardSort$$($header$$24$$, $event$$177$$) {
    if (!this.$_databodyEmpty$()) {
      var $direction$$8$$ = $header$$24$$.getAttribute(this.$m_resources$.$getMappedAttribute$("sortDir"));
      this.$_doHeaderSort$($event$$177$$, $header$$24$$, null == $direction$$8$$ || "descending" === $direction$$8$$ ? "ascending" : "descending");
    }
  };
  $DvtDataGrid$$.prototype.$_handleHeaderSort$ = function $$DvtDataGrid$$$$$_handleHeaderSort$$($event$$178$$) {
    var $direction$$9$$, $header$$25_target$$113$$;
    this.$_databodyEmpty$() || ($header$$25_target$$113$$ = $event$$178$$.target, $header$$25_target$$113$$ = this.$findHeader$($header$$25_target$$113$$), null != $header$$25_target$$113$$ && (null == $direction$$9$$ && ($direction$$9$$ = null != this.$m_sortInfo$ && this.$m_sortInfo$.key === this.$_getKey$($header$$25_target$$113$$) ? "ascending" === this.$m_sortInfo$.direction ? "descending" : "ascending" : "ascending"), this.$_doHeaderSort$($event$$178$$, $header$$25_target$$113$$, $direction$$9$$)));
  };
  $DvtDataGrid$$.prototype.$_handleCellSort$ = function $$DvtDataGrid$$$$$_handleCellSort$$($event$$179$$, $direction$$10$$, $header$$26$$) {
    null == $header$$26$$ || this.$_databodyEmpty$() || this.$_doHeaderSort$($event$$179$$, $header$$26$$, $direction$$10$$);
  };
  $DvtDataGrid$$.prototype.$_doHeaderSort$ = function $$DvtDataGrid$$$$$_doHeaderSort$$($criteria_event$$180$$, $header$$27$$, $direction$$11$$) {
    var $key$$71$$, $axis$$22$$;
    !0 != this.$m_isSorting$ ? (this.$m_delayedSort$ = null, $key$$71$$ = this.$_getKey$($header$$27$$), $axis$$22$$ = this.$_getAxis$($header$$27$$), this.$_removeSortSelection$(), $header$$27$$.setAttribute(this.$m_resources$.$getMappedAttribute$("sortDir"), $direction$$11$$), this.$m_sortInfo$ = {event:$criteria_event$$180$$, key:$key$$71$$, axis:$axis$$22$$, direction:$direction$$11$$}, this.$_toggleSortIconDirection$($header$$27$$, $direction$$11$$), this.$_addSortSelection$(), null != $direction$$11$$ && 
    null != $key$$71$$ && null != $axis$$22$$ && (this.$m_isSorting$ = !0, this.$showStatusText$(), $criteria_event$$180$$ = {axis:$axis$$22$$, key:$key$$71$$, direction:$direction$$11$$}, this.$m_dataSource$.sort($criteria_event$$180$$, {success:this.$_handleSortSuccess$.bind(this), error:this.$_handleSortError$.bind(this)})), this.$_setAccInfoText$("ascending" === $direction$$11$$ ? "accessibleSortAscending" : "accessibleSortDescending", {id:$key$$71$$})) : this.$m_delayedSort$ = {event:$criteria_event$$180$$, 
    header:$header$$27$$, direction:$direction$$11$$};
  };
  $DvtDataGrid$$.prototype.$_handleSortError$ = function $$DvtDataGrid$$$$$_handleSortError$$() {
    this.$hideStatusText$();
  };
  $DvtDataGrid$$.prototype.$_removeSortSelection$ = function $$DvtDataGrid$$$$$_removeSortSelection$$() {
    var $oldSortedHeader$$, $oldsortIcon$$;
    null != this.$m_sortInfo$ && ($oldSortedHeader$$ = this.$_findColumnHeaderByKey$(this.$m_sortInfo$.key), $oldSortedHeader$$.removeAttribute(this.$m_resources$.$getMappedAttribute$("sortDir")), $oldsortIcon$$ = this.$_getSortIcon$($oldSortedHeader$$), this.$_toggleSortIconDirection$($oldSortedHeader$$, "ascending"), "descending" === this.$m_sortInfo$.direction && (this.$m_utils$.$removeCSSClassName$($oldsortIcon$$, this.$getMappedStyle$("sortdescending")), this.$m_utils$.$addCSSClassName$($oldsortIcon$$, 
    this.$getMappedStyle$("sortascending"))), this.$m_utils$.$addCSSClassName$($oldsortIcon$$, this.$getMappedStyle$("disabled")), this.$m_utils$.$removeCSSClassName$($oldsortIcon$$, this.$getMappedStyle$("default")), this.$m_utils$.$removeCSSClassName$(this.$_getSortContainer$($oldSortedHeader$$), this.$getMappedStyle$("enabled")));
  };
  $DvtDataGrid$$.prototype.$_addSortSelection$ = function $$DvtDataGrid$$$$$_addSortSelection$$() {
    var $sortedHeader$$, $sortIcon$$2$$;
    null != this.$m_sortInfo$ && ($sortedHeader$$ = this.$_findColumnHeaderByKey$(this.$m_sortInfo$.key), $sortIcon$$2$$ = this.$_getSortIcon$($sortedHeader$$), this.$m_utils$.$addCSSClassName$($sortIcon$$2$$, this.$getMappedStyle$("default")), this.$m_utils$.$removeCSSClassName$($sortIcon$$2$$, this.$getMappedStyle$("disabled")), this.$m_utils$.$removeCSSClassName$($sortIcon$$2$$, this.$getMappedStyle$("selected")), this.$m_utils$.$addCSSClassName$(this.$_getSortContainer$($sortedHeader$$), this.$getMappedStyle$("enabled")));
  };
  $DvtDataGrid$$.prototype.$_getAxis$ = function $$DvtDataGrid$$$$$_getAxis$$($header$$28$$) {
    var $columnHeaderCellClassName$$, $rowHeaderCellClassName$$;
    $columnHeaderCellClassName$$ = this.$getMappedStyle$("colheadercell");
    $rowHeaderCellClassName$$ = this.$getMappedStyle$("rowheadercell");
    return this.$m_utils$.$containsCSSClassName$($header$$28$$, $columnHeaderCellClassName$$) ? "column" : this.$m_utils$.$containsCSSClassName$($header$$28$$, $rowHeaderCellClassName$$) ? "row" : null;
  };
  $DvtDataGrid$$.prototype.$_handleSortSuccess$ = function $$DvtDataGrid$$$$$_handleSortSuccess$$() {
    this.$hideStatusText$();
    this.$_isDatabodyCellActive$() ? this.$_indexes$({row:this.$m_active$.keys.row, column:this.$m_active$.keys.column}, this.$_handlePreSortScrolling$) : this.$_fetchForSort$(this.$m_startRow$, this.$m_endRow$ - this.$m_startRow$ + 1, !1);
  };
  $DvtDataGrid$$.prototype.$_handlePreSortScrolling$ = function $$DvtDataGrid$$$$$_handlePreSortScrolling$$($cellTop_indexes$$14_startRow$$6$$) {
    var $cellBottom_startRowPixel$$4$$, $isHighWatermark$$;
    $cellTop_indexes$$14_startRow$$6$$ = (-1 === $cellTop_indexes$$14_startRow$$6$$.row ? 0 : $cellTop_indexes$$14_startRow$$6$$.row) * this.$m_avgRowHeight$;
    $cellBottom_startRowPixel$$4$$ = $cellTop_indexes$$14_startRow$$6$$ + this.$m_avgRowHeight$;
    $isHighWatermark$$ = this.$_isHighWatermarkScrolling$();
    this.$m_currentScrollTop$ <= $cellTop_indexes$$14_startRow$$6$$ && $cellBottom_startRowPixel$$4$$ <= this.$m_currentScrollTop$ + this.$getElementHeight$(this.$m_databody$) || $isHighWatermark$$ ? this.$_fetchForSort$(this.$m_startRow$, this.$m_endRow$ - this.$m_startRow$ + 1, !1) : (this.$m_currentScrollTop$ = Math.min($cellTop_indexes$$14_startRow$$6$$, this.$_getMaxScrollHeight$()), $cellTop_indexes$$14_startRow$$6$$ = Math.floor(this.$m_currentScrollTop$ / this.$m_avgRowHeight$), $cellBottom_startRowPixel$$4$$ = 
    $cellTop_indexes$$14_startRow$$6$$ * this.$m_avgRowHeight$, this.$m_startRow$ = $cellTop_indexes$$14_startRow$$6$$, this.$m_endRow$ = -1, this.$m_startRowHeader$ = $cellTop_indexes$$14_startRow$$6$$, this.$m_endRowHeader$ = -1, this.$m_endRowHeaderPixel$ = this.$m_startRowHeaderPixel$ = this.$m_endRowPixel$ = this.$m_startRowPixel$ = $cellBottom_startRowPixel$$4$$, this.$_fetchForSort$($cellTop_indexes$$14_startRow$$6$$, null, !0));
  };
  $DvtDataGrid$$.prototype.$_fetchForSort$ = function $$DvtDataGrid$$$$$_fetchForSort$$($startRow$$7$$, $rowCount$$10$$, $scroll$$) {
    var $rowHeaderFragment$$2$$ = document.createDocumentFragment();
    this.fetchHeaders("row", $startRow$$7$$, $rowHeaderFragment$$2$$, $rowCount$$10$$, {success:this.$handleHeadersFetchSuccessForSort$.bind(this), error:this.$handleCellsFetchError$});
    this.fetchCells(this.$m_databody$, this.$m_scroller$, $startRow$$7$$, this.$m_startCol$, $rowCount$$10$$, this.$m_endCol$ - this.$m_startCol$ + 1, {success:this.$handleCellsFetchSuccessForSort$.bind(this, $rowHeaderFragment$$2$$, $scroll$$), error:this.$handleCellsFetchError$});
  };
  $DvtDataGrid$$.prototype.$handleHeadersFetchSuccessForSort$ = function $$DvtDataGrid$$$$$handleHeadersFetchSuccessForSort$$($headerSet$$13$$, $headerFragment_headerRange$$12$$, $rowInsert$$3$$) {
    var $axis$$23_c$$40$$, $start$$36$$, $headerCount$$4$$, $index$$132_returnVal$$13$$, $totalRowHeight$$6$$, $className$$17$$, $renderer$$11$$;
    $axis$$23_c$$40$$ = $headerFragment_headerRange$$12$$.axis;
    $start$$36$$ = $headerFragment_headerRange$$12$$.start;
    $headerFragment_headerRange$$12$$ = $headerFragment_headerRange$$12$$.header;
    $headerCount$$4$$ = $headerSet$$13$$.getCount();
    this.$m_fetching$[$axis$$23_c$$40$$] = !1;
    $axis$$23_c$$40$$ = $totalRowHeight$$6$$ = 0;
    $className$$17$$ = this.$getMappedStyle$("row") + " " + this.$getMappedStyle$("headercell") + " " + this.$getMappedStyle$("rowheadercell");
    for ($renderer$$11$$ = this.$m_options$.$getRenderer$("row");0 < $headerCount$$4$$ - $axis$$23_c$$40$$;) {
      $index$$132_returnVal$$13$$ = $start$$36$$ + $axis$$23_c$$40$$, $index$$132_returnVal$$13$$ = this.$buildLevelHeaders$($headerFragment_headerRange$$12$$, $index$$132_returnVal$$13$$, 0, 0, this.$m_startRowPixel$ + $totalRowHeight$$6$$, !0, $rowInsert$$3$$, $renderer$$11$$, $headerSet$$13$$, "row", $className$$17$$, this.$m_rowHeaderLevelCount$), $axis$$23_c$$40$$ += $index$$132_returnVal$$13$$.count, $totalRowHeight$$6$$ += $index$$132_returnVal$$13$$.totalHeight;
    }
    this.$m_endRowHeader$ = this.$m_startRowHeader$ + $headerCount$$4$$ - 1;
    this.$m_endRowHeaderPixel$ = this.$m_startRowHeaderPixel$ + $totalRowHeight$$6$$;
    this.$_signalTaskEnd$();
  };
  $DvtDataGrid$$.prototype.$handleCellsFetchSuccessForSort$ = function $$DvtDataGrid$$$$$handleCellsFetchSuccessForSort$$($newRowHeaderElements$$, $scroll$$1$$, $cellSet$$13_oldRowElements_returnVal$$14$$, $cellRange$$8_newRowElements$$) {
    var $oldRowHeaderElements_rowStart$$11$$, $rowCount$$11$$, $columnStart$$8$$, $duration$$18$$, $animate$$;
    this.$m_fetching$.cells = !1;
    $duration$$18$$ = $DvtDataGrid$$.$SORT_ANIMATION_DURATION$;
    this.$isFetchComplete$() && this.$hideStatusText$();
    $oldRowHeaderElements_rowStart$$11$$ = $cellRange$$8_newRowElements$$[0].start;
    $rowCount$$11$$ = $cellSet$$13_oldRowElements_returnVal$$14$$.getCount("row");
    $columnStart$$8$$ = $cellRange$$8_newRowElements$$[1].start;
    $cellSet$$13_oldRowElements_returnVal$$14$$.getCount("column");
    $cellRange$$8_newRowElements$$ = document.createDocumentFragment();
    $cellSet$$13_oldRowElements_returnVal$$14$$ = this.$_addRows$($cellRange$$8_newRowElements$$, !0, this.$m_startRowPixel$, $oldRowHeaderElements_rowStart$$11$$, $rowCount$$11$$, $columnStart$$8$$, !1, $cellSet$$13_oldRowElements_returnVal$$14$$);
    this.$m_endRow$ = this.$m_startRowHeader$ + $rowCount$$11$$ - 1;
    this.$m_endRowPixel$ = this.$m_startRowPixel$ + $cellSet$$13_oldRowElements_returnVal$$14$$.totalRowHeight;
    $cellSet$$13_oldRowElements_returnVal$$14$$ = this.$m_databody$.firstChild;
    $oldRowHeaderElements_rowStart$$11$$ = this.$m_rowHeader$.firstChild;
    !0 == $scroll$$1$$ && ($animate$$ = this.$_isHighWatermarkScrolling$(), this.$m_utils$.$isTouchDevice$() ? (this.$_disableTouchScrollAnimation$(), this.scrollTo(this.$m_currentScrollLeft$, this.$m_currentScrollTop$)) : (this.$m_silentScroll$ = !0, this.$m_scroller$.scrollTop = this.$m_currentScrollTop$, this.$_syncScroller$()));
    !$duration$$18$$ || 0 == $duration$$18$$ || !this.$m_utils$.$supportsTransitions$() || 1 === $rowCount$$11$$ || 1 < this.$m_rowHeaderLevelCount$ && null != this.$m_rowHeaderLevelCount$ || !1 === $animate$$ ? (this.$_signalTaskStart$(), this.$_handleSortEnd$($cellRange$$8_newRowElements$$, $newRowHeaderElements$$)) : this.$processSortAnimationToPosition$($duration$$18$$, $oldRowHeaderElements_rowStart$$11$$, $newRowHeaderElements$$, $cellSet$$13_oldRowElements_returnVal$$14$$, $cellRange$$8_newRowElements$$);
    this.$_signalTaskEnd$();
  };
  $DvtDataGrid$$.prototype.$_handleSortEnd$ = function $$DvtDataGrid$$$$$_handleSortEnd$$($newRowElements$$1$$, $newRowHeaderElements$$1$$) {
    var $databodyContent$$18_headerContent$$3$$;
    1 < $newRowHeaderElements$$1$$.childNodes.length && ($databodyContent$$18_headerContent$$3$$ = this.$m_rowHeader$.firstChild, this.$m_utils$.empty($databodyContent$$18_headerContent$$3$$), $databodyContent$$18_headerContent$$3$$.appendChild($newRowHeaderElements$$1$$));
    $databodyContent$$18_headerContent$$3$$ = this.$m_databody$.firstChild;
    this.$m_utils$.empty($databodyContent$$18_headerContent$$3$$);
    $databodyContent$$18_headerContent$$3$$.appendChild($newRowElements$$1$$);
    this.$_restoreActive$();
    this.$m_isSorting$ = !1;
    this.$_fireSortEvent$();
    this.$_doDelayedSort$();
    this.$_signalTaskEnd$();
  };
  $DvtDataGrid$$.prototype.$processSortAnimationToPosition$ = function $$DvtDataGrid$$$$$processSortAnimationToPosition$$($duration$$19$$, $oldRowHeaderElements$$1$$, $newRowHeaderElements$$2$$, $oldElementSet$$, $newElementSet$$) {
    var $self$$78$$, $rowKey$$13$$, $animationInformation$$, $oldTop$$, $newTop$$2_oldBottom$$, $rowsForAppend$$, $rowHeadersForAppend$$, $i$$190$$, $child$$3$$, $rowHeaderSupport$$2$$, $newBottom$$, $newElementSetClone$$, $newRowHeaderElementsClone$$, $viewportTop$$5$$, $viewportBottom$$6$$, $lastAnimationElement$$1$$;
    $self$$78$$ = this;
    this.$_signalTaskStart$();
    $rowsForAppend$$ = [];
    $rowHeadersForAppend$$ = [];
    $rowHeaderSupport$$2$$ = 1 < $newRowHeaderElements$$2$$.childNodes.length ? !0 : !1;
    $viewportTop$$5$$ = this.$m_currentScrollTop$;
    $viewportBottom$$6$$ = $viewportTop$$5$$ + this.$getElementHeight$(this.$m_databody$);
    $newElementSetClone$$ = $newElementSet$$.cloneNode(!0);
    $newRowHeaderElementsClone$$ = $newRowHeaderElements$$2$$ ? $newRowHeaderElements$$2$$.cloneNode(!0) : null;
    $animationInformation$$ = {};
    for ($i$$190$$ = 0;$i$$190$$ < $oldElementSet$$.childNodes.length;$i$$190$$++) {
      $child$$3$$ = $oldElementSet$$.childNodes[$i$$190$$], $rowKey$$13$$ = this.$_getKey$($child$$3$$), $oldTop$$ = this.$getElementDir$($child$$3$$, "top"), $newTop$$2_oldBottom$$ = $oldTop$$ + this.$getElementHeight$($child$$3$$), $newTop$$2_oldBottom$$ = $newTop$$2_oldBottom$$ < $viewportTop$$5$$ || $oldTop$$ > $viewportBottom$$6$$ ? $oldTop$$ : $viewportBottom$$6$$, $animationInformation$$[$rowKey$$13$$] = {$oldTop$:$oldTop$$, $newTop$:$newTop$$2_oldBottom$$};
    }
    for ($i$$190$$ = 0;$i$$190$$ < $newElementSet$$.childNodes.length;$i$$190$$++) {
      $child$$3$$ = $newElementSet$$.childNodes[$i$$190$$], $rowKey$$13$$ = this.$_getKey$($child$$3$$), $newTop$$2_oldBottom$$ = this.$getElementDir$($child$$3$$, "top"), this.$_setKey$($newElementSetClone$$.childNodes[$i$$190$$], $rowKey$$13$$), this.$_setKey$($newRowHeaderElementsClone$$.childNodes[$i$$190$$], $rowKey$$13$$), $animationInformation$$.hasOwnProperty($rowKey$$13$$) ? $animationInformation$$[$rowKey$$13$$].$newTop$ = $newTop$$2_oldBottom$$ : ($oldTop$$ = $viewportBottom$$6$$, $newBottom$$ = 
      $newTop$$2_oldBottom$$ + this.$getElementHeight$($child$$3$$), $animationInformation$$[$rowKey$$13$$] = {$oldTop$:$oldTop$$, $newTop$:$newTop$$2_oldBottom$$}, $newBottom$$ >= $viewportTop$$5$$ && $newTop$$2_oldBottom$$ < $viewportBottom$$6$$ && ($child$$3$$ = $newElementSetClone$$.childNodes[$i$$190$$], this.$setElementDir$($child$$3$$, $animationInformation$$[$rowKey$$13$$].$oldTop$, "top"), $rowsForAppend$$.push($child$$3$$), $rowHeaderSupport$$2$$ && ($child$$3$$ = $newRowHeaderElementsClone$$.childNodes[$i$$190$$], 
      this.$setElementDir$($child$$3$$, $animationInformation$$[$rowKey$$13$$].$oldTop$, "top"), $rowHeadersForAppend$$.push($child$$3$$))));
    }
    for ($i$$190$$ = 0;$i$$190$$ < $rowsForAppend$$.length;$i$$190$$++) {
      $oldElementSet$$.appendChild($rowsForAppend$$[$i$$190$$]), $rowHeaderSupport$$2$$ && $oldRowHeaderElements$$1$$.appendChild($rowHeadersForAppend$$[$i$$190$$]);
    }
    for ($i$$190$$ = $oldElementSet$$.childNodes.length - 1;0 <= $i$$190$$;$i$$190$$--) {
      if ($child$$3$$ = $oldElementSet$$.childNodes[$i$$190$$], $rowKey$$13$$ = this.$_getKey$($child$$3$$), 0 != $animationInformation$$[$rowKey$$13$$].$newTop$ - $animationInformation$$[$rowKey$$13$$].$oldTop$) {
        $lastAnimationElement$$1$$ = $child$$3$$;
        break;
      }
    }
    null != $lastAnimationElement$$1$$ ? ($lastAnimationElement$$1$$.addEventListener("transitionend", this.$_handleSortEnd$.bind(this, $newElementSet$$, $newRowHeaderElements$$2$$), !1), setTimeout(function() {
      var $animationInfo_deltaY$$5$$, $delay$$4$$, $i$$191$$;
      for ($i$$191$$ = 0;$i$$191$$ < $oldElementSet$$.childNodes.length;$i$$191$$++) {
        $delay$$4$$ = 0 * $i$$191$$ + "ms", $child$$3$$ = $oldElementSet$$.childNodes[$i$$191$$], $animationInfo_deltaY$$5$$ = $animationInformation$$[$self$$78$$.$_getKey$($child$$3$$)], $animationInfo_deltaY$$5$$ = $animationInfo_deltaY$$5$$.$newTop$ - $animationInfo_deltaY$$5$$.$oldTop$, 0 != $animationInfo_deltaY$$5$$ && ($self$$78$$.$addTransformMoveStyle$($child$$3$$, $duration$$19$$ / 2 + "ms", $delay$$4$$, "ease-in", 0, $animationInfo_deltaY$$5$$), $rowHeaderSupport$$2$$ && $self$$78$$.$addTransformMoveStyle$($oldRowHeaderElements$$1$$.childNodes[$i$$191$$], 
        $duration$$19$$ / 2 + "ms", $delay$$4$$, "ease-in", 0, $animationInfo_deltaY$$5$$));
      }
    }, 0)) : this.$_handleSortEnd$($newElementSet$$, $newRowHeaderElements$$2$$);
  };
  $DvtDataGrid$$.prototype.$_restoreActive$ = function $$DvtDataGrid$$$$$_restoreActive$$() {
    var $cellIndex_row$$43$$, $columnHeader$$7$$;
    null != this.$m_active$ && ("cell" == this.$m_active$.type ? ($cellIndex_row$$43$$ = this.$_findRowByKey$(this.$m_active$.keys.row), $columnHeader$$7$$ = this.$_findColumnHeaderByKey$(this.$m_active$.keys.column), null != $cellIndex_row$$43$$ && null != $columnHeader$$7$$ ? ($cellIndex_row$$43$$ = this.createIndex(this.$getRowIndex$($cellIndex_row$$43$$), this.$getHeaderCellIndex$($columnHeader$$7$$)), this.$scrollToIndex$($cellIndex_row$$43$$), this.$_isSelectionEnabled$() ? this.$selectAndFocus$($cellIndex_row$$43$$) : 
    this.$_setActiveByIndex$($cellIndex_row$$43$$)) : (this.$_setActive$(null, null, !0), this.$_isSelectionEnabled$() && this.$_clearSelection$())) : "row" == this.$m_active$.axis && ($cellIndex_row$$43$$ = this.$_findRowHeaderByKey$(this.$m_active$.key), null != $cellIndex_row$$43$$ ? this.$_setActive$($cellIndex_row$$43$$) : this.$_setActive$(null)));
  };
  $DvtDataGrid$$.prototype.$_getSortIcon$ = function $$DvtDataGrid$$$$$_getSortIcon$$($header$$29$$) {
    return $header$$29$$.lastChild.firstChild;
  };
  $DvtDataGrid$$.prototype.$_getSortContainer$ = function $$DvtDataGrid$$$$$_getSortContainer$$($header$$30$$) {
    return $header$$30$$.lastChild;
  };
  $DvtDataGrid$$.prototype.$_fireSortEvent$ = function $$DvtDataGrid$$$$$_fireSortEvent$$() {
    this.fireEvent("sort", {event:this.$m_sortInfo$.event, ui:{header:this.$m_sortInfo$.key, direction:this.$m_sortInfo$.direction}});
  };
  $DvtDataGrid$$.prototype.$_doDelayedSort$ = function $$DvtDataGrid$$$$$_doDelayedSort$$() {
    null != this.$m_delayedSort$ ? this.$_doHeaderSort$(this.$m_delayedSort$.event, this.$m_delayedSort$.header, this.$m_delayedSort$.direction) : this.$fillViewport$(this.$m_currentScrollLeft$, this.$m_currentScrollTop$);
  };
  $DvtDataGrid$$.$RESIZE_OFFSET$ = 5;
  $DvtDataGrid$$.$RESIZE_TOUCH_OFFSET$ = 8;
  $DvtDataGrid$$.prototype.$handleResize$ = function $$DvtDataGrid$$$$$handleResize$$($event$$181$$) {
    var $header$$31$$;
    !1 === this.$m_isResizing$ ? ($header$$31$$ = this.find($event$$181$$.target, "header"), null == $header$$31$$ || $header$$31$$ != this.$m_rowHeader$ && $header$$31$$ != this.$m_colHeader$ || (this.$m_cursor$ = this.$manageHeaderCursor$($event$$181$$), null != this.$m_resizingElement$ && ("default" == this.$m_cursor$ ? (this.$m_resizingElement$.style.cursor = "", null != this.$m_resizingElementSibling$ && (this.$m_resizingElementSibling$.style.cursor = "")) : (this.$m_resizingElement$.style.cursor = 
    this.$m_cursor$, null != this.$m_resizingElementSibling$ && (this.$m_resizingElementSibling$.style.cursor = this.$m_cursor$))))) : this.$handleResizeMouseMove$($event$$181$$);
  };
  $DvtDataGrid$$.prototype.$handleResizeMouseDown$ = function $$DvtDataGrid$$$$$handleResizeMouseDown$$($event$$182$$) {
    return "col-resize" === this.$m_cursor$ || "row-resize" === this.$m_cursor$ ? (this.$m_isResizing$ = !0, this.$m_utils$.$isTouchDevice$() ? (this.$m_lastMouseX$ = $event$$182$$.touches[0].pageX, this.$m_lastMouseY$ = $event$$182$$.touches[0].pageY) : (this.$m_lastMouseX$ = $event$$182$$.pageX, this.$m_lastMouseY$ = $event$$182$$.pageY), this.$m_overResizeBottom$ = this.$m_overResizeRight$ = this.$m_overResizeMinTop$ = this.$m_overResizeTop$ = this.$m_overResizeMinLeft$ = this.$m_overResizeLeft$ = 
    0, this.$m_orginalResizeDimensions$ = {width:this.$getElementWidth$(this.$m_resizingElement$), height:this.$getElementHeight$(this.$m_resizingElement$)}, !0) : !1;
  };
  $DvtDataGrid$$.prototype.$handleResizeMouseUp$ = function $$DvtDataGrid$$$$$handleResizeMouseUp$$($details$$6_event$$183$$) {
    var $newHeight$$2_size$$23$$, $newWidth$$2$$;
    if (!0 === this.$m_isResizing$) {
      $newWidth$$2$$ = this.$getElementWidth$(this.$m_resizingElement$);
      $newHeight$$2_size$$23$$ = this.$getElementHeight$(this.$m_resizingElement$);
      if ($newWidth$$2$$ != this.$m_orginalResizeDimensions$.width || $newHeight$$2_size$$23$$ != this.$m_orginalResizeDimensions$.height) {
        $newHeight$$2_size$$23$$ = "col-resize" === this.$m_cursor$ ? this.$m_resizingElement$.style.width : this.$m_resizingElement$.style.height, $details$$6_event$$183$$ = {event:$details$$6_event$$183$$, ui:{header:this.$_getKey$(this.$m_resizingElement$), oldDimensions:{width:this.$m_orginalResizeDimensions$.width, height:this.$m_orginalResizeDimensions$.height}, newDimensions:{width:this.$getElementWidth$(this.$m_resizingElement$), height:this.$getElementHeight$(this.$m_resizingElement$)}, 
        size:$newHeight$$2_size$$23$$}}, this.fireEvent("resize", $details$$6_event$$183$$);
      }
      this.$m_isResizing$ = !1;
      this.$m_cursor$ = "default";
      this.$m_resizingElement$.style.cursor = "";
      null != this.$m_resizingElementSibling$ && (this.$m_resizingElementSibling$.style.cursor = "");
      this.$m_orginalResizeDimensions$ = this.$m_resizingElementSibling$ = this.$m_resizingElement$ = null;
    }
  };
  $DvtDataGrid$$.prototype.$_isDOMElementResizable$ = function $$DvtDataGrid$$$$$_isDOMElementResizable$$($element$$100$$) {
    return null == $element$$100$$ ? !1 : "true" === $element$$100$$.getAttribute(this.$m_resources$.$getMappedAttribute$("resizable"));
  };
  $DvtDataGrid$$.prototype.$manageHeaderCursor$ = function $$DvtDataGrid$$$$$manageHeaderCursor$$($event$$184_rtl$$3$$) {
    var $elem$$50$$ = $event$$184_rtl$$3$$.target, $resizeHeaderMode$$, $bottomEdgeCheck_edges$$, $cursorX_rightEdgeCheck$$, $cursorY$$, $offsetPixel$$, $widthResizable$$, $heightResizable$$, $siblingResizable$$, $index$$133_leftEdgeCheck$$, $level$$24_topEdgeCheck$$, $sibling$$1$$, $parent$$9$$;
    ($elem$$50$$ = this.find($event$$184_rtl$$3$$.target, "colheadercell")) ? $resizeHeaderMode$$ = "column" : ($elem$$50$$ = this.find($event$$184_rtl$$3$$.target, "rowheadercell"), $resizeHeaderMode$$ = "row");
    if (!$elem$$50$$) {
      return "default";
    }
    $index$$133_leftEdgeCheck$$ = this.$getHeaderCellIndex$($elem$$50$$);
    $level$$24_topEdgeCheck$$ = this.$getHeaderCellLevel$($elem$$50$$);
    "column" === $resizeHeaderMode$$ ? ($heightResizable$$ = "enable" === this.$m_options$.$isResizable$($resizeHeaderMode$$, "height") ? !0 : !1, $widthResizable$$ = this.$_isDOMElementResizable$($elem$$50$$), $sibling$$1$$ = this.$_getColumnHeaderByIndex$($index$$133_leftEdgeCheck$$ - 1, $level$$24_topEdgeCheck$$), $siblingResizable$$ = this.$_isDOMElementResizable$($sibling$$1$$), $parent$$9$$ = this.$_getColumnHeaderByIndex$($index$$133_leftEdgeCheck$$, $level$$24_topEdgeCheck$$ - 1)) : "row" === 
    $resizeHeaderMode$$ && ($widthResizable$$ = "enable" === this.$m_options$.$isResizable$($resizeHeaderMode$$, "width") ? !0 : !1, $heightResizable$$ = this.$_isDOMElementResizable$($elem$$50$$), $sibling$$1$$ = this.$_getRowHeaderByIndex$($index$$133_leftEdgeCheck$$ - 1, $level$$24_topEdgeCheck$$), $siblingResizable$$ = this.$_isDOMElementResizable$($sibling$$1$$), $parent$$9$$ = this.$_getRowHeaderByIndex$($index$$133_leftEdgeCheck$$, $level$$24_topEdgeCheck$$ - 1));
    this.$m_utils$.$isTouchDevice$() ? ($cursorX_rightEdgeCheck$$ = $event$$184_rtl$$3$$.touches[0].pageX, $cursorY$$ = $event$$184_rtl$$3$$.touches[0].pageY, $offsetPixel$$ = $DvtDataGrid$$.$RESIZE_TOUCH_OFFSET$) : ($cursorX_rightEdgeCheck$$ = $event$$184_rtl$$3$$.pageX, $cursorY$$ = $event$$184_rtl$$3$$.pageY, $offsetPixel$$ = $DvtDataGrid$$.$RESIZE_OFFSET$);
    $bottomEdgeCheck_edges$$ = this.$getHeaderEdgePixels$($elem$$50$$);
    $event$$184_rtl$$3$$ = this.$m_resources$.$isRTLMode$();
    $index$$133_leftEdgeCheck$$ = $cursorX_rightEdgeCheck$$ < $bottomEdgeCheck_edges$$[0] + $offsetPixel$$;
    $level$$24_topEdgeCheck$$ = $cursorY$$ < $bottomEdgeCheck_edges$$[1] + $offsetPixel$$;
    $cursorX_rightEdgeCheck$$ = $cursorX_rightEdgeCheck$$ > $bottomEdgeCheck_edges$$[2] - $offsetPixel$$;
    $bottomEdgeCheck_edges$$ = $cursorY$$ > $bottomEdgeCheck_edges$$[3] - $offsetPixel$$;
    if ("column" === $resizeHeaderMode$$) {
      if ($widthResizable$$ && ($event$$184_rtl$$3$$ ? $index$$133_leftEdgeCheck$$ : $cursorX_rightEdgeCheck$$)) {
        return this.$m_resizingElement$ = $elem$$50$$, "col-resize";
      }
      if ($siblingResizable$$ && ($event$$184_rtl$$3$$ ? $cursorX_rightEdgeCheck$$ : $index$$133_leftEdgeCheck$$)) {
        if (this.$m_resizingElement$ = $sibling$$1$$, this.$m_resizingElementSibling$ = $elem$$50$$, null !== this.$m_resizingElement$) {
          return "col-resize";
        }
      } else {
        if ($heightResizable$$) {
          if ($bottomEdgeCheck_edges$$) {
            return this.$m_resizingElement$ = $elem$$50$$, "row-resize";
          }
          if ($level$$24_topEdgeCheck$$) {
            return this.$m_resizingElement$ = $parent$$9$$, this.$m_resizingElementSibling$ = $elem$$50$$, "row-resize";
          }
        }
      }
    } else {
      if ("row" === $resizeHeaderMode$$) {
        if ($heightResizable$$ && $bottomEdgeCheck_edges$$) {
          return this.$m_resizingElement$ = $elem$$50$$, "row-resize";
        }
        if ($siblingResizable$$ && $level$$24_topEdgeCheck$$ && (this.$m_resizingElement$ = $sibling$$1$$, this.$m_resizingElementSibling$ = $elem$$50$$, null !== this.$m_resizingElement$)) {
          return "row-resize";
        }
        if ($widthResizable$$) {
          if ($event$$184_rtl$$3$$ ? $index$$133_leftEdgeCheck$$ : $cursorX_rightEdgeCheck$$) {
            return this.$m_resizingElement$ = $elem$$50$$, "col-resize";
          }
          if ($event$$184_rtl$$3$$ ? $cursorX_rightEdgeCheck$$ : $index$$133_leftEdgeCheck$$) {
            if (this.$m_resizingElement$ = $parent$$9$$, this.$m_resizingElementSibling$ = $elem$$50$$, null !== this.$m_resizingElement$) {
              return "col-resize";
            }
          }
        }
      }
    }
    return "default";
  };
  $DvtDataGrid$$.prototype.$handleResizeMouseMove$ = function $$DvtDataGrid$$$$$handleResizeMouseMove$$($event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$) {
    var $newElementHeight_newElementWidth$$;
    this.$m_currentMouseX$ = $event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$.pageX;
    this.$m_currentMouseY$ = $event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$.pageY;
    this.$m_utils$.$isTouchDevice$() ? (this.$m_currentMouseX$ = $event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$.touches[0].pageX, this.$m_currentMouseY$ = $event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$.touches[0].pageY) : (this.$m_currentMouseX$ = $event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$.pageX, this.$m_currentMouseY$ = $event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$.pageY);
    $event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$ = this.$m_utils$.$containsCSSClassName$(this.$m_resizingElement$, this.$getMappedStyle$("colheadercell")) ? "column" : "row";
    "col-resize" === this.$m_cursor$ ? "column" === $event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$ ? ($event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$ = this.$calculateColumnHeaderWidth$(this.$m_resizingElement$), $newElementHeight_newElementWidth$$ = this.$getNewElementWidth$("column", $event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$), this.$resizeColWidth$($event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$, $newElementHeight_newElementWidth$$)) : 
    "row" === $event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$ && ($event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$ = this.$getElementWidth$(this.$m_resizingElement$), $newElementHeight_newElementWidth$$ = this.$getNewElementWidth$("row", $event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$), this.$resizeRowWidth$($newElementHeight_newElementWidth$$ - $event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$)) : "row-resize" === this.$m_cursor$ && 
    ("row" === $event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$ ? ($event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$ = this.$calculateRowHeaderHeight$(this.$m_resizingElement$), $newElementHeight_newElementWidth$$ = this.$getNewElementHeight$("row", $event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$), this.$resizeRowHeight$($event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$, $newElementHeight_newElementWidth$$)) : "column" === $event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$ && 
    ($event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$ = this.$getElementHeight$(this.$m_resizingElement$), $newElementHeight_newElementWidth$$ = this.$getNewElementHeight$("column", $event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$), this.$resizeColHeight$($newElementHeight_newElementWidth$$ - $event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$)));
    this.$buildCorners$();
    this.$m_utils$.$isTouchDevice$() && this.$_moveTouchSelectionAffordance$();
    this.$m_lastMouseX$ = this.$m_currentMouseX$;
    this.$m_lastMouseY$ = this.$m_currentMouseY$;
  };
  $DvtDataGrid$$.prototype.$resizeColWidth$ = function $$DvtDataGrid$$$$$resizeColWidth$$($oldElementWidth$$1$$, $newElementWidth$$1$$) {
    var $widthChange$$, $newScrollerWidth_oldScrollerWidth$$;
    $widthChange$$ = $newElementWidth$$1$$ - $oldElementWidth$$1$$;
    0 != $widthChange$$ && ($newScrollerWidth_oldScrollerWidth$$ = this.$getElementWidth$(this.$m_scroller$.firstChild), $newScrollerWidth_oldScrollerWidth$$ += $widthChange$$, this.$_databodyEmpty$() || (this.$setElementWidth$(this.$m_scroller$.firstChild, $newScrollerWidth_oldScrollerWidth$$), this.$setElementWidth$(this.$m_databody$.firstChild, $newScrollerWidth_oldScrollerWidth$$)), this.$resizeColumnWidthAndShift$($widthChange$$), this.$m_endColPixel$ += $widthChange$$, this.$m_endColHeaderPixel$ += 
    $widthChange$$, this.$m_avgColWidth$ = $newScrollerWidth_oldScrollerWidth$$ / this.$m_dataSource$.getCount("column"), this.$manageResizeScrollbars$());
  };
  $DvtDataGrid$$.prototype.$resizeRowHeight$ = function $$DvtDataGrid$$$$$resizeRowHeight$$($oldElementHeight$$1$$, $newElementHeight$$1$$) {
    var $heightChange$$, $newScrollerHeight_oldScrollerHeight$$;
    $heightChange$$ = $newElementHeight$$1$$ - $oldElementHeight$$1$$;
    0 != $heightChange$$ && ($newScrollerHeight_oldScrollerHeight$$ = this.$getElementHeight$(this.$m_scroller$.firstChild), $newScrollerHeight_oldScrollerHeight$$ += $heightChange$$, this.$_databodyEmpty$() || (this.$setElementHeight$(this.$m_scroller$.firstChild, $newScrollerHeight_oldScrollerHeight$$), this.$setElementHeight$(this.$m_databody$.firstChild, $newScrollerHeight_oldScrollerHeight$$)), this.$resizeRowHeightAndShift$($heightChange$$), this.$m_endRowPixel$ += $heightChange$$, this.$m_endRowHeaderPixel$ += 
    $heightChange$$, this.$m_avgRowHeight$ = $newScrollerHeight_oldScrollerHeight$$ / this.$m_dataSource$.getCount("row"), this.$manageResizeScrollbars$());
  };
  $DvtDataGrid$$.prototype.$resizeColHeight$ = function $$DvtDataGrid$$$$$resizeColHeight$$($heightChange$$1$$) {
    if (0 != $heightChange$$1$$) {
      var $level$$25$$ = this.$getHeaderCellLevel$(this.$m_resizingElement$) + this.$getHeaderCellDepth$(this.$m_resizingElement$) - 1;
      this.$m_columnHeaderLevelHeights$[$level$$25$$] += $heightChange$$1$$;
      this.$resizeColumnHeightsAndShift$($heightChange$$1$$, $level$$25$$);
      this.$m_colHeaderHeight$ += $heightChange$$1$$;
      this.$setElementHeight$(this.$m_colHeader$, this.$m_colHeaderHeight$);
      this.$manageResizeScrollbars$();
    }
  };
  $DvtDataGrid$$.prototype.$resizeRowWidth$ = function $$DvtDataGrid$$$$$resizeRowWidth$$($widthChange$$1$$) {
    if (0 != $widthChange$$1$$) {
      var $level$$26$$ = this.$getHeaderCellLevel$(this.$m_resizingElement$) + this.$getHeaderCellDepth$(this.$m_resizingElement$) - 1;
      this.$m_rowHeaderLevelWidths$[$level$$26$$] += $widthChange$$1$$;
      this.$resizeRowWidthsAndShift$($widthChange$$1$$, $level$$26$$);
      this.$m_rowHeaderWidth$ += $widthChange$$1$$;
      this.$setElementWidth$(this.$m_rowHeader$, this.$m_rowHeaderWidth$);
      this.$manageResizeScrollbars$();
    }
  };
  $DvtDataGrid$$.prototype.$getNewElementWidth$ = function $$DvtDataGrid$$$$$getNewElementWidth$$($axis$$24$$, $oldElementWidth$$2$$) {
    var $minWidth$$, $deltaWidth$$, $newElementWidth$$3$$, $halfGridWidth$$;
    $minWidth$$ = this.$_getMinValue$("width", $axis$$24$$);
    this.$getElementWidth$(this.$m_databody$);
    $deltaWidth$$ = this.$m_resources$.$isRTLMode$() ? this.$m_lastMouseX$ - this.$m_currentMouseX$ : this.$m_currentMouseX$ - this.$m_lastMouseX$;
    $newElementWidth$$3$$ = $oldElementWidth$$2$$ + $deltaWidth$$ + this.$m_overResizeLeft$ + this.$m_overResizeMinLeft$ + this.$m_overResizeRight$;
    this.$getElementWidth$(this.$m_scroller$.firstChild);
    $halfGridWidth$$ = Math.round(this.getWidth() / 2);
    $newElementWidth$$3$$ < $minWidth$$ ? (this.$m_overResizeMinLeft$ += $deltaWidth$$ - $minWidth$$ + $oldElementWidth$$2$$, $newElementWidth$$3$$ = $minWidth$$) : this.$m_overResizeLeft$ = this.$m_overResizeMinLeft$ = 0;
    "row" === $axis$$24$$ && ($newElementWidth$$3$$ > $halfGridWidth$$ ? (this.$m_overResizeRight$ += $deltaWidth$$ - $halfGridWidth$$ + $oldElementWidth$$2$$, $newElementWidth$$3$$ = $halfGridWidth$$) : this.$m_overResizeRight$ = 0);
    return $newElementWidth$$3$$;
  };
  $DvtDataGrid$$.prototype.$getNewElementHeight$ = function $$DvtDataGrid$$$$$getNewElementHeight$$($axis$$25$$, $oldElementHeight$$2$$) {
    var $minHeight$$, $deltaHeight$$, $newElementHeight$$3$$, $halfGridHeight$$;
    $minHeight$$ = this.$_getMinValue$("height", $axis$$25$$);
    this.$getElementHeight$(this.$m_databody$);
    $deltaHeight$$ = this.$m_currentMouseY$ - this.$m_lastMouseY$;
    $newElementHeight$$3$$ = $oldElementHeight$$2$$ + $deltaHeight$$ + this.$m_overResizeTop$ + this.$m_overResizeMinTop$ + this.$m_overResizeBottom$;
    this.$getElementHeight$(this.$m_scroller$.firstChild);
    $halfGridHeight$$ = Math.round(this.getHeight() / 2);
    $newElementHeight$$3$$ < $minHeight$$ ? (this.$m_overResizeMinTop$ += $deltaHeight$$ - $minHeight$$ + $oldElementHeight$$2$$, $newElementHeight$$3$$ = $minHeight$$) : this.$m_overResizeTop$ = this.$m_overResizeMinTop$ = 0;
    "column" === $axis$$25$$ && ($newElementHeight$$3$$ > $halfGridHeight$$ ? (this.$m_overResizeBottom$ += $deltaHeight$$ - $halfGridHeight$$ + $oldElementHeight$$2$$, $newElementHeight$$3$$ = $halfGridHeight$$) : this.$m_overResizeBottom$ = 0);
    return $newElementHeight$$3$$;
  };
  $DvtDataGrid$$.prototype.$_getMinValue$ = function $$DvtDataGrid$$$$$_getMinValue$$($dimension$$, $axis$$26$$) {
    var $index$$134_inner$$1$$, $level$$27$$, $elem$$51$$, $minValue$$, $extent$$1$$, $currentDimensionValue$$, $innerDimensionValue$$, $depth$$6$$;
    $elem$$51$$ = this.$m_resizingElement$;
    $level$$27$$ = this.$getHeaderCellLevel$($elem$$51$$);
    $depth$$6$$ = this.$getHeaderCellDepth$($elem$$51$$);
    $minValue$$ = this.$m_utils$.$isTouchDevice$() ? 2 * $DvtDataGrid$$.$RESIZE_TOUCH_OFFSET$ : 2 * $DvtDataGrid$$.$RESIZE_OFFSET$;
    if ("column" === $axis$$26$$ && (1 === this.$m_columnHeaderLevelCount$ || "height" === $dimension$$ && 1 === $depth$$6$$) || "row" === $axis$$26$$ && (1 === this.$m_rowHeaderLevelCount$ || "width" === $dimension$$ && 1 === $depth$$6$$)) {
      return $minValue$$;
    }
    $index$$134_inner$$1$$ = this.$getHeaderCellIndex$($elem$$51$$);
    $extent$$1$$ = this.$_getAttribute$(this.$m_resizingElement$.parentNode, "extent");
    $currentDimensionValue$$ = this.$getElementDir$($elem$$51$$, $dimension$$);
    "column" === $axis$$26$$ ? "width" === $dimension$$ ? ($index$$134_inner$$1$$ = this.$_getColumnHeaderByIndex$($index$$134_inner$$1$$ + $extent$$1$$ - 1, this.$m_columnHeaderLevelCount$ - 1), $innerDimensionValue$$ = this.$getElementDir$($index$$134_inner$$1$$, $dimension$$)) : $innerDimensionValue$$ = this.$_getColumnHeaderLevelHeight$($level$$27$$ + $depth$$6$$ - 1, $elem$$51$$) : "row" === $axis$$26$$ && ("height" === $dimension$$ ? ($index$$134_inner$$1$$ = this.$_getRowHeaderByIndex$($index$$134_inner$$1$$ + 
    $extent$$1$$ - 1, this.$m_rowHeaderLevelCount$ - 1), $innerDimensionValue$$ = this.$getElementDir$($index$$134_inner$$1$$, $dimension$$)) : $innerDimensionValue$$ = this.$_getRowHeaderLevelWidth$($level$$27$$ + $depth$$6$$ - 1, $elem$$51$$));
    return $currentDimensionValue$$ - ($innerDimensionValue$$ - $minValue$$);
  };
  $DvtDataGrid$$.prototype.$manageResizeScrollbars$ = function $$DvtDataGrid$$$$$manageResizeScrollbars$$() {
    var $databodyContentWidth$$1_width$$27$$, $height$$32_scrollerHeight$$3$$, $colHeader$$7$$, $rowHeader$$21$$, $scroller$$10$$, $databody$$14$$, $colHeaderHeight$$4$$, $rowHeaderWidth$$3$$, $databodyWidth$$2$$, $databodyContentHeight$$2$$, $databodyHeight$$2$$, $isDatabodyHorizontalScrollbarRequired$$1$$, $isDatabodyVerticalScrollbarRequired$$1$$, $scrollbarSize$$2$$, $dir$$16$$, $scrollerWidth$$3$$, $deltaX$$3$$ = 0, $deltaY$$6$$ = 0;
    $databodyContentWidth$$1_width$$27$$ = this.getWidth();
    $height$$32_scrollerHeight$$3$$ = this.getHeight();
    $colHeader$$7$$ = this.$m_colHeader$;
    $rowHeader$$21$$ = this.$m_rowHeader$;
    $scroller$$10$$ = this.$m_scroller$;
    $databody$$14$$ = this.$m_databody$;
    $colHeaderHeight$$4$$ = this.$getColumnHeaderHeight$();
    $rowHeaderWidth$$3$$ = this.$getRowHeaderWidth$();
    $height$$32_scrollerHeight$$3$$ -= $colHeaderHeight$$4$$;
    $scrollerWidth$$3$$ = $databodyContentWidth$$1_width$$27$$ - $rowHeaderWidth$$3$$;
    $dir$$16$$ = this.$m_resources$.$isRTLMode$() ? "right" : "left";
    if (!this.$_databodyEmpty$()) {
      $databodyContentWidth$$1_width$$27$$ = this.$getElementWidth$($databody$$14$$.firstChild);
      $databodyContentHeight$$2$$ = this.$getElementHeight$($databody$$14$$.firstChild);
      $databodyWidth$$2$$ = Math.min($databodyContentWidth$$1_width$$27$$, $scrollerWidth$$3$$);
      $databodyHeight$$2$$ = Math.min($databodyContentHeight$$2$$, $height$$32_scrollerHeight$$3$$);
      $scrollbarSize$$2$$ = this.$m_utils$.$getScrollbarSize$();
      ($isDatabodyHorizontalScrollbarRequired$$1$$ = this.$isDatabodyHorizontalScrollbarRequired$($scrollerWidth$$3$$)) ? $isDatabodyVerticalScrollbarRequired$$1$$ = this.$isDatabodyVerticalScrollbarRequired$($height$$32_scrollerHeight$$3$$ - $scrollbarSize$$2$$) : ($isDatabodyVerticalScrollbarRequired$$1$$ = this.$isDatabodyVerticalScrollbarRequired$($height$$32_scrollerHeight$$3$$)) && ($isDatabodyHorizontalScrollbarRequired$$1$$ = this.$isDatabodyHorizontalScrollbarRequired$($scrollerWidth$$3$$ - 
      $scrollbarSize$$2$$));
      !$isDatabodyVerticalScrollbarRequired$$1$$ && !$isDatabodyHorizontalScrollbarRequired$$1$$ && this.$m_hasHorizontalScroller$ && this.$m_hasVerticalScroller$ && ($scroller$$10$$.style.overflow = "visible");
      if ($isDatabodyVerticalScrollbarRequired$$1$$ && $isDatabodyHorizontalScrollbarRequired$$1$$ && !this.$m_hasHorizontalScroller$ && !this.$m_hasVerticalScroller$ || $isDatabodyVerticalScrollbarRequired$$1$$ && !this.$m_hasVerticalScroller$ || $isDatabodyHorizontalScrollbarRequired$$1$$ && !this.$m_hasHorizontalScroller$) {
        $scroller$$10$$.style.overflow = "auto";
      }
      this.$m_hasHorizontalScroller$ = $isDatabodyHorizontalScrollbarRequired$$1$$;
      this.$m_hasVerticalScroller$ = $isDatabodyVerticalScrollbarRequired$$1$$;
      $isDatabodyHorizontalScrollbarRequired$$1$$ && $height$$32_scrollerHeight$$3$$ - $scrollbarSize$$2$$ < $databodyHeight$$2$$ && ($databodyHeight$$2$$ = $height$$32_scrollerHeight$$3$$ - $scrollbarSize$$2$$);
      $isDatabodyVerticalScrollbarRequired$$1$$ && $scrollerWidth$$3$$ - $scrollbarSize$$2$$ < $databodyWidth$$2$$ && ($databodyWidth$$2$$ = $scrollerWidth$$3$$ - $scrollbarSize$$2$$);
      this.$setElementHeight$($rowHeader$$21$$, $databodyHeight$$2$$);
      this.$setElementWidth$($colHeader$$7$$, $databodyWidth$$2$$);
      this.$setElementWidth$($databody$$14$$, $databodyWidth$$2$$);
      this.$setElementHeight$($databody$$14$$, $databodyHeight$$2$$);
      this.$setElementWidth$($scroller$$10$$, $scrollerWidth$$3$$);
      this.$setElementHeight$($scroller$$10$$, $height$$32_scrollerHeight$$3$$);
      this.$m_scrollWidth$ = $databodyContentWidth$$1_width$$27$$ - $databodyWidth$$2$$;
      this.$m_scrollHeight$ = $databodyContentHeight$$2$$ - $databodyHeight$$2$$;
    }
    null != this.$m_empty$ && (this.$setElementDir$(this.$m_empty$, $colHeaderHeight$$4$$, "top"), this.$setElementDir$(this.$m_empty$, $rowHeaderWidth$$3$$, $dir$$16$$));
    this.$setElementDir$($rowHeader$$21$$, $colHeaderHeight$$4$$, "top");
    this.$setElementDir$($colHeader$$7$$, $rowHeaderWidth$$3$$, $dir$$16$$);
    this.$setElementDir$($databody$$14$$, $colHeaderHeight$$4$$, "top");
    this.$setElementDir$($databody$$14$$, $rowHeaderWidth$$3$$, $dir$$16$$);
    this.$setElementDir$($scroller$$10$$, $colHeaderHeight$$4$$, "top");
    this.$setElementDir$($scroller$$10$$, $rowHeaderWidth$$3$$, $dir$$16$$);
    this.$buildCorners$();
    this.$m_utils$.$isTouchDevice$() && (this.$m_currentScrollLeft$ > this.$m_scrollWidth$ && ($deltaX$$3$$ = this.$m_scrollWidth$ - this.$m_currentScrollLeft$), this.$m_currentScrollTop$ > this.$m_scrollHeight$ && ($deltaY$$6$$ = this.$m_scrollHeight$ - this.$m_currentScrollTop$), 0 != $deltaX$$3$$ || 0 != $deltaY$$6$$) && (this.$_disableTouchScrollAnimation$(), this.$scrollDelta$($deltaX$$3$$, $deltaY$$6$$));
  };
  $DvtDataGrid$$.prototype.$resizeColumnWidthAndShift$ = function $$DvtDataGrid$$$$$resizeColumnWidthAndShift$$($widthChange$$2$$) {
    var $dir$$17$$, $databodyRows$$, $i$$192$$, $newStart$$2$$, $j$$30$$, $index$$135$$, $cells$$1$$, $cell$$27$$, $newWidth$$3$$;
    $dir$$17$$ = this.$m_resources$.$isRTLMode$() ? "right" : "left";
    this.$m_databody$.style.display = "none";
    this.$m_colHeader$.style.display = "none";
    $index$$135$$ = this.$getHeaderCellIndex$(this.$m_resizingElement$);
    1 < this.$m_columnHeaderLevelCount$ && this.$m_resizingElement$ === this.$m_resizingElement$.parentNode.firstChild && null != this.$m_resizingElement$.nextSibling && ($index$$135$$ += this.$_getAttribute$(this.$m_resizingElement$.parentNode, "extent") - 1);
    this.$_shiftHeadersAlongAxisInContainer$(this.$m_colHeader$.firstChild, $index$$135$$, $widthChange$$2$$, $dir$$17$$, this.$getMappedStyle$("colheadercell"), "column");
    if (null != this.$m_databody$.firstChild) {
      for ($databodyRows$$ = this.$m_databody$.firstChild.childNodes, $i$$192$$ = 0;$i$$192$$ < $databodyRows$$.length;$i$$192$$++) {
        for ($cells$$1$$ = $databodyRows$$[$i$$192$$].childNodes, $cell$$27$$ = $cells$$1$$[$index$$135$$ - this.$m_startCol$], null == $newWidth$$3$$ && ($newWidth$$3$$ = this.$getElementWidth$($cell$$27$$) + $widthChange$$2$$), this.$setElementWidth$($cell$$27$$, $newWidth$$3$$), $j$$30$$ = $index$$135$$ - this.$m_startCol$ + 1;$j$$30$$ < this.$m_endCol$ - this.$m_startCol$ + 1;$j$$30$$ += 1) {
          $cell$$27$$ = $cells$$1$$[$j$$30$$], $newStart$$2$$ = this.$getElementDir$($cell$$27$$, $dir$$17$$) + $widthChange$$2$$, this.$setElementDir$($cell$$27$$, $newStart$$2$$, $dir$$17$$);
        }
      }
    }
    this.$m_databody$.style.display = "";
    this.$m_colHeader$.style.display = "";
  };
  $DvtDataGrid$$.prototype.$resizeRowHeightAndShift$ = function $$DvtDataGrid$$$$$resizeRowHeightAndShift$$($heightChange$$2$$) {
    var $databodyRows$$1$$, $i$$193_index$$136$$, $newHeight$$3_newStart$$3$$, $row$$44$$;
    this.$m_databody$.style.display = "none";
    this.$m_rowHeader$.style.display = "none";
    $i$$193_index$$136$$ = this.$getHeaderCellIndex$(this.$m_resizingElement$);
    1 < this.$m_rowHeaderLevelCount$ && this.$m_resizingElement$ === this.$m_resizingElement$.parentNode.firstChild && null != this.$m_resizingElement$.nextSibling && ($i$$193_index$$136$$ += this.$_getAttribute$(this.$m_resizingElement$.parentNode, "extent") - 1);
    this.$_shiftHeadersAlongAxisInContainer$(this.$m_rowHeader$.firstChild, $i$$193_index$$136$$, $heightChange$$2$$, "top", this.$getMappedStyle$("rowheadercell"), "row");
    if (null != this.$m_databody$.firstChild) {
      for ($databodyRows$$1$$ = this.$m_databody$.firstChild.childNodes, $row$$44$$ = $databodyRows$$1$$[$i$$193_index$$136$$ - this.$m_startRow$], $newHeight$$3_newStart$$3$$ = this.$getElementHeight$($row$$44$$) + $heightChange$$2$$, this.$setElementHeight$($row$$44$$, $newHeight$$3_newStart$$3$$), $i$$193_index$$136$$ = $i$$193_index$$136$$ - this.$m_startRow$ + 1;$i$$193_index$$136$$ < $databodyRows$$1$$.length;$i$$193_index$$136$$++) {
        $row$$44$$ = $databodyRows$$1$$[$i$$193_index$$136$$], $newHeight$$3_newStart$$3$$ = this.$getElementDir$($row$$44$$, "top") + $heightChange$$2$$, this.$setElementDir$($row$$44$$, $newHeight$$3_newStart$$3$$, "top");
      }
    }
    this.$m_databody$.style.display = "";
    this.$m_rowHeader$.style.display = "";
  };
  $DvtDataGrid$$.prototype.$_shiftHeadersAlongAxisInContainer$ = function $$DvtDataGrid$$$$$_shiftHeadersAlongAxisInContainer$$($element$$101_headersContainer$$, $index$$137$$, $dimensionChange$$, $dir$$18$$, $className$$18$$, $axis$$27$$) {
    var $header$$32_headers$$5$$, $isHeader_newStart$$4$$, $groupingContainer$$1_i$$194_newVal$$, $headerStart$$;
    $element$$101_headersContainer$$ = $element$$101_headersContainer$$.lastChild;
    ($isHeader_newStart$$4$$ = this.$m_utils$.$containsCSSClassName$($element$$101_headersContainer$$, $className$$18$$)) ? ($groupingContainer$$1_i$$194_newVal$$ = $element$$101_headersContainer$$.parentNode, $header$$32_headers$$5$$ = $element$$101_headersContainer$$, $headerStart$$ = this.$getHeaderCellIndex$($header$$32_headers$$5$$)) : ($groupingContainer$$1_i$$194_newVal$$ = $element$$101_headersContainer$$, $header$$32_headers$$5$$ = $element$$101_headersContainer$$.firstChild, $headerStart$$ = 
    this.$_getAttribute$($groupingContainer$$1_i$$194_newVal$$, "start"));
    for (;$index$$137$$ < $headerStart$$;) {
      if ($isHeader_newStart$$4$$) {
        $isHeader_newStart$$4$$ = this.$getElementDir$($header$$32_headers$$5$$, $dir$$18$$) + $dimensionChange$$, this.$setElementDir$($header$$32_headers$$5$$, $isHeader_newStart$$4$$, $dir$$18$$), $element$$101_headersContainer$$ = $element$$101_headersContainer$$.previousSibling, $isHeader_newStart$$4$$ = this.$m_utils$.$containsCSSClassName$($element$$101_headersContainer$$, $className$$18$$), $groupingContainer$$1_i$$194_newVal$$ = $element$$101_headersContainer$$.parentNode, $header$$32_headers$$5$$ = 
        $element$$101_headersContainer$$, $headerStart$$ = this.$getHeaderCellIndex$($header$$32_headers$$5$$);
      } else {
        $header$$32_headers$$5$$ = $groupingContainer$$1_i$$194_newVal$$.getElementsByClassName($className$$18$$);
        for ($groupingContainer$$1_i$$194_newVal$$ = 0;$groupingContainer$$1_i$$194_newVal$$ < $header$$32_headers$$5$$.length;$groupingContainer$$1_i$$194_newVal$$++) {
          $isHeader_newStart$$4$$ = this.$getElementDir$($header$$32_headers$$5$$[$groupingContainer$$1_i$$194_newVal$$], $dir$$18$$) + $dimensionChange$$, this.$setElementDir$($header$$32_headers$$5$$[$groupingContainer$$1_i$$194_newVal$$], $isHeader_newStart$$4$$, $dir$$18$$);
        }
        $element$$101_headersContainer$$ = $element$$101_headersContainer$$.previousSibling;
        $isHeader_newStart$$4$$ = this.$m_utils$.$containsCSSClassName$($element$$101_headersContainer$$, $className$$18$$);
        $groupingContainer$$1_i$$194_newVal$$ = $element$$101_headersContainer$$;
        $header$$32_headers$$5$$ = $element$$101_headersContainer$$.firstChild;
        $headerStart$$ = this.$_getAttribute$($groupingContainer$$1_i$$194_newVal$$, "start");
      }
    }
    "column" == $axis$$27$$ ? ($groupingContainer$$1_i$$194_newVal$$ = this.$getElementWidth$($header$$32_headers$$5$$) + $dimensionChange$$, this.$setElementWidth$($header$$32_headers$$5$$, $groupingContainer$$1_i$$194_newVal$$)) : ($groupingContainer$$1_i$$194_newVal$$ = this.$getElementHeight$($header$$32_headers$$5$$) + $dimensionChange$$, this.$setElementHeight$($header$$32_headers$$5$$, $groupingContainer$$1_i$$194_newVal$$));
    $isHeader_newStart$$4$$ || null == $header$$32_headers$$5$$.nextSibling ? this.$m_sizingManager$.$setSize$($axis$$27$$, this.$_getKey$($header$$32_headers$$5$$), $groupingContainer$$1_i$$194_newVal$$) : this.$_shiftHeadersAlongAxisInContainer$($element$$101_headersContainer$$, $index$$137$$, $dimensionChange$$, $dir$$18$$, $className$$18$$, $axis$$27$$);
  };
  $DvtDataGrid$$.prototype.$resizeColumnHeightsAndShift$ = function $$DvtDataGrid$$$$$resizeColumnHeightsAndShift$$($heightChange$$3$$, $level$$28$$) {
    this.$m_databody$.style.display = "none";
    this.$m_colHeader$.style.display = "none";
    this.$_shiftHeadersDirInContainer$(this.$m_colHeader$.firstChild, $heightChange$$3$$, $level$$28$$, "top", this.$getMappedStyle$("colheadercell"), "column");
    this.$m_databody$.style.display = "";
    this.$m_colHeader$.style.display = "";
  };
  $DvtDataGrid$$.prototype.$resizeRowWidthsAndShift$ = function $$DvtDataGrid$$$$$resizeRowWidthsAndShift$$($widthChange$$3$$, $level$$29$$) {
    var $dir$$19$$ = this.$m_resources$.$isRTLMode$() ? "right" : "left";
    this.$m_databody$.style.display = "none";
    this.$m_rowHeader$.style.display = "none";
    this.$_shiftHeadersDirInContainer$(this.$m_rowHeader$.firstChild, $widthChange$$3$$, $level$$29$$, $dir$$19$$, this.$getMappedStyle$("rowheadercell"), "row");
    this.$m_databody$.style.display = "";
    this.$m_rowHeader$.style.display = "";
  };
  $DvtDataGrid$$.prototype.$_shiftHeadersDirInContainer$ = function $$DvtDataGrid$$$$$_shiftHeadersDirInContainer$$($groupings_headersContainer$$1$$, $dimensionChange$$1$$, $level$$30$$, $dir$$20$$, $className$$19$$, $axis$$28$$) {
    var $i$$195$$, $grouping_headers$$6$$, $headerLevel_isHeader$$1_newDir$$, $headerDepth$$3_j$$31$$;
    $groupings_headersContainer$$1$$ = $groupings_headersContainer$$1$$.childNodes;
    for ($i$$195$$ = 0;$i$$195$$ < $groupings_headersContainer$$1$$.length;$i$$195$$++) {
      if ($grouping_headers$$6$$ = $groupings_headersContainer$$1$$[$i$$195$$], $headerLevel_isHeader$$1_newDir$$ = this.$m_utils$.$containsCSSClassName$($grouping_headers$$6$$, $className$$19$$)) {
        $headerLevel_isHeader$$1_newDir$$ = this.$getHeaderCellLevel$($grouping_headers$$6$$), $headerDepth$$3_j$$31$$ = this.$getHeaderCellDepth$($grouping_headers$$6$$), $headerLevel_isHeader$$1_newDir$$ <= $level$$30$$ && $level$$30$$ < $headerLevel_isHeader$$1_newDir$$ + $headerDepth$$3_j$$31$$ ? "column" === $axis$$28$$ ? ($headerLevel_isHeader$$1_newDir$$ = this.$getElementHeight$($grouping_headers$$6$$) + $dimensionChange$$1$$, this.$setElementHeight$($grouping_headers$$6$$, $headerLevel_isHeader$$1_newDir$$)) : 
        ($headerLevel_isHeader$$1_newDir$$ = this.$getElementWidth$($grouping_headers$$6$$) + $dimensionChange$$1$$, this.$setElementWidth$($grouping_headers$$6$$, $headerLevel_isHeader$$1_newDir$$)) : $headerLevel_isHeader$$1_newDir$$ > $level$$30$$ && ($headerLevel_isHeader$$1_newDir$$ = this.$getElementDir$($grouping_headers$$6$$, $dir$$20$$) + $dimensionChange$$1$$, this.$setElementDir$($grouping_headers$$6$$, $headerLevel_isHeader$$1_newDir$$, $dir$$20$$));
      } else {
        if ($headerLevel_isHeader$$1_newDir$$ = this.$_getAttribute$($grouping_headers$$6$$, "level"), $headerLevel_isHeader$$1_newDir$$ <= $level$$30$$) {
          this.$_shiftHeadersDirInContainer$($grouping_headers$$6$$, $dimensionChange$$1$$, $level$$30$$, $dir$$20$$, $className$$19$$, $axis$$28$$);
        } else {
          for ($grouping_headers$$6$$ = $grouping_headers$$6$$.getElementsByClassName($className$$19$$), $headerDepth$$3_j$$31$$ = 0;$headerDepth$$3_j$$31$$ < $grouping_headers$$6$$.length;$headerDepth$$3_j$$31$$++) {
            $headerLevel_isHeader$$1_newDir$$ = this.$getElementDir$($grouping_headers$$6$$[$headerDepth$$3_j$$31$$], $dir$$20$$) + $dimensionChange$$1$$, this.$setElementDir$($grouping_headers$$6$$[$headerDepth$$3_j$$31$$], $headerLevel_isHeader$$1_newDir$$, $dir$$20$$);
          }
        }
      }
    }
  };
  $DvtDataGrid$$.prototype.$handleContextMenuResize$ = function $$DvtDataGrid$$$$$handleContextMenuResize$$($details$$7_event$$186$$, $id$$22_newWidth$$4$$, $initialWidth_val$$30$$, $newHeight$$4_target$$115$$) {
    var $initialHeight$$, $value$$199$$;
    $value$$199$$ = parseInt($initialWidth_val$$30$$, 10);
    this.$m_utils$.$containsCSSClassName$($newHeight$$4_target$$115$$, this.$getMappedStyle$("cell")) && ($newHeight$$4_target$$115$$ = $id$$22_newWidth$$4$$ === this.$m_resources$.$getMappedCommand$("resizeHeight") ? this.$getHeaderFromCell$($newHeight$$4_target$$115$$, "row") : this.$getHeaderFromCell$($newHeight$$4_target$$115$$, "column"));
    this.$m_resizingElement$ = $newHeight$$4_target$$115$$;
    $initialWidth_val$$30$$ = this.$getElementWidth$($newHeight$$4_target$$115$$);
    $initialHeight$$ = this.$getElementHeight$($newHeight$$4_target$$115$$);
    $id$$22_newWidth$$4$$ === this.$m_resources$.$getMappedCommand$("resizeWidth") ? $initialWidth_val$$30$$ !== $value$$199$$ && (this.$m_utils$.$containsCSSClassName$(this.$m_resizingElement$, this.$getMappedStyle$("colheadercell")) ? this.$_isDOMElementResizable$(this.$m_resizingElement$) && this.$resizeColWidth$($initialWidth_val$$30$$, $value$$199$$) : this.$resizeRowWidth$($value$$199$$ - $initialWidth_val$$30$$)) : $id$$22_newWidth$$4$$ === this.$m_resources$.$getMappedCommand$("resizeHeight") && 
    ($initialHeight$$ = this.$getElementHeight$($newHeight$$4_target$$115$$), $initialHeight$$ !== $value$$199$$ && (this.$m_utils$.$containsCSSClassName$(this.$m_resizingElement$, this.$getMappedStyle$("colheadercell")) ? this.$resizeColHeight$($value$$199$$ - $initialHeight$$) : this.$_isDOMElementResizable$(this.$m_resizingElement$) && this.$resizeRowHeight$($initialHeight$$, $value$$199$$)));
    $id$$22_newWidth$$4$$ = this.$getElementWidth$($newHeight$$4_target$$115$$);
    $newHeight$$4_target$$115$$ = this.$getElementHeight$($newHeight$$4_target$$115$$);
    if ($id$$22_newWidth$$4$$ != $initialWidth_val$$30$$ || $newHeight$$4_target$$115$$ != $initialHeight$$) {
      $details$$7_event$$186$$ = {event:$details$$7_event$$186$$, ui:{header:this.$_getKey$(this.$m_resizingElement$), oldDimensions:{width:$initialWidth_val$$30$$, height:$initialHeight$$}, newDimensions:{width:$id$$22_newWidth$$4$$, height:$newHeight$$4_target$$115$$}, size:$value$$199$$}}, this.fireEvent("resize", $details$$7_event$$186$$), this.$buildCorners$(), this.$m_utils$.$isTouchDevice$() && this.$_moveTouchSelectionAffordance$();
    }
    this.$m_resizingElement$ = null;
  };
  $DvtDataGrid$$.prototype.$getHeaderEdgePixels$ = function $$DvtDataGrid$$$$$getHeaderEdgePixels$$($elem$$52_targetHeight$$) {
    var $elementXY_topEdge$$, $leftEdge$$, $targetWidth$$;
    $elementXY_topEdge$$ = this.$findPos$($elem$$52_targetHeight$$);
    $leftEdge$$ = $elementXY_topEdge$$[0];
    $elementXY_topEdge$$ = $elementXY_topEdge$$[1];
    this.$m_utils$.$containsCSSClassName$($elem$$52_targetHeight$$, this.$getMappedStyle$("colheadercell")) ? ($targetWidth$$ = this.$calculateColumnHeaderWidth$($elem$$52_targetHeight$$), $elem$$52_targetHeight$$ = this.$getElementHeight$($elem$$52_targetHeight$$)) : ($targetWidth$$ = this.$getElementWidth$($elem$$52_targetHeight$$), $elem$$52_targetHeight$$ = this.$calculateRowHeaderHeight$($elem$$52_targetHeight$$));
    return[$leftEdge$$, $elementXY_topEdge$$, $leftEdge$$ + $targetWidth$$, $elementXY_topEdge$$ + $elem$$52_targetHeight$$];
  };
  $DvtDataGridSizingManager$$.prototype.$setSize$ = function $$DvtDataGridSizingManager$$$$$setSize$$($axis$$29$$, $headerKey$$, $size$$24$$) {
    this.$sizes$[$axis$$29$$][$headerKey$$] = $size$$24$$;
  };
  $DvtDataGridSizingManager$$.prototype.$getSize$ = function $$DvtDataGridSizingManager$$$$$getSize$$($axis$$30$$, $headerKey$$1$$) {
    return this.$sizes$[$axis$$30$$].hasOwnProperty($headerKey$$1$$) ? this.$sizes$[$axis$$30$$][$headerKey$$1$$] : null;
  };
  $DvtDataGridSizingManager$$.prototype.clear = function $$DvtDataGridSizingManager$$$$clear$() {
    this.$sizes$ = {column:{}, row:{}};
  };
  $DvtDataGridUtils$$.$IE_PLATFORM$ = "ie";
  $DvtDataGridUtils$$.$GECKO_PLATFORM$ = "gecko";
  $DvtDataGridUtils$$.$WEBKIT_PLATFORM$ = "webkit";
  $DvtDataGridUtils$$.$UNKNOWN_PLATFORM$ = "unknown";
  $DvtDataGridUtils$$.$EDGE_PLATFORM$ = "edge";
  $DvtDataGridUtils$$.$WINDOWS_OS$ = "Windows";
  $DvtDataGridUtils$$.$SOLARIS_OS$ = "Solaris";
  $DvtDataGridUtils$$.$MAC_OS$ = "Mac";
  $DvtDataGridUtils$$.$UNKNOWN_OS$ = "Unknown";
  $DvtDataGridUtils$$.prototype.$calculateScrollbarSize$ = function $$DvtDataGridUtils$$$$$calculateScrollbarSize$$() {
    var $scrollDiv$$ = document.createElement("div");
    $scrollDiv$$.style.cssText = "width:100px;height:100px;overflow:scroll;position:absolute;top:-9999px;";
    document.body.appendChild($scrollDiv$$);
    this.$scrollbarSize$ = $scrollDiv$$.offsetWidth - $scrollDiv$$.clientWidth;
    document.body.removeChild($scrollDiv$$);
  };
  $DvtDataGridUtils$$.prototype.$getScrollbarSize$ = function $$DvtDataGridUtils$$$$$getScrollbarSize$$() {
    -1 == this.$scrollbarSize$ && this.$calculateScrollbarSize$();
    return this.$scrollbarSize$;
  };
  $DvtDataGridUtils$$.prototype.$isTouchDevice$ = function $$DvtDataGridUtils$$$$$isTouchDevice$$() {
    if (void 0 == this.$isTouch$) {
      var $agentName$$ = navigator.userAgent.toLowerCase();
      -1 != $agentName$$.indexOf("mobile") || -1 != $agentName$$.indexOf("android") ? this.$isTouch$ = !0 : this.$isTouch$ = !1;
    }
    return this.$isTouch$;
  };
  $DvtDataGridUtils$$.prototype.$addCSSClassName$ = function $$DvtDataGridUtils$$$$$addCSSClassName$$($domElement$$, $className$$20$$) {
    var $currentClassName$$, $classNameIndex$$;
    null != $className$$20$$ && null != $domElement$$ && ($currentClassName$$ = $domElement$$.className, $classNameIndex$$ = $DvtDataGridUtils$$.$_getCSSClassNameIndex$($currentClassName$$, $className$$20$$), -1 == $classNameIndex$$ && ($domElement$$.className = $currentClassName$$ ? $className$$20$$ + " " + $currentClassName$$ : $className$$20$$));
  };
  $DvtDataGridUtils$$.prototype.$removeCSSClassName$ = function $$DvtDataGridUtils$$$$$removeCSSClassName$$($domElement$$1$$, $className$$21$$) {
    var $afterstring_currentClassName$$1$$, $beforestring_classNameIndex$$1$$, $classNameEndIndex$$;
    null != $className$$21$$ && null != $domElement$$1$$ && ($afterstring_currentClassName$$1$$ = $domElement$$1$$.className, $beforestring_classNameIndex$$1$$ = $DvtDataGridUtils$$.$_getCSSClassNameIndex$($afterstring_currentClassName$$1$$, $className$$21$$), -1 != $beforestring_classNameIndex$$1$$ && ($classNameEndIndex$$ = $beforestring_classNameIndex$$1$$ + $className$$21$$.length, $beforestring_classNameIndex$$1$$ = 0 == $beforestring_classNameIndex$$1$$ ? null : $afterstring_currentClassName$$1$$.substring(0, 
    $beforestring_classNameIndex$$1$$), $afterstring_currentClassName$$1$$ = $classNameEndIndex$$ == $afterstring_currentClassName$$1$$.length ? null : $afterstring_currentClassName$$1$$.substring($classNameEndIndex$$ + 1), $domElement$$1$$.className = null == $beforestring_classNameIndex$$1$$ ? null == $afterstring_currentClassName$$1$$ ? "" : $afterstring_currentClassName$$1$$ : null == $afterstring_currentClassName$$1$$ ? $beforestring_classNameIndex$$1$$ : $beforestring_classNameIndex$$1$$ + 
    $afterstring_currentClassName$$1$$));
  };
  $DvtDataGridUtils$$.prototype.$containsCSSClassName$ = function $$DvtDataGridUtils$$$$$containsCSSClassName$$($domElement$$2$$, $className$$22$$) {
    return null != $className$$22$$ && null != $domElement$$2$$ ? -1 != $DvtDataGridUtils$$.$_getCSSClassNameIndex$($domElement$$2$$.className, $className$$22$$) : !1;
  };
  $DvtDataGridUtils$$.$_getCSSClassNameIndex$ = function $$DvtDataGridUtils$$$$_getCSSClassNameIndex$$($currentClassName$$2$$, $className$$23$$) {
    var $classNameLength$$, $currentClassNameLength$$, $nameIndex$$, $hasStart$$, $endIndex$$12_hasEnd$$, $lastNameIndex$$;
    if (!$currentClassName$$2$$ || !$currentClassName$$2$$.indexOf) {
      return-1;
    }
    if ($className$$23$$ === $currentClassName$$2$$) {
      return 0;
    }
    $classNameLength$$ = $className$$23$$.length;
    $currentClassNameLength$$ = $currentClassName$$2$$.length;
    $nameIndex$$ = $currentClassName$$2$$.indexOf($className$$23$$);
    if (0 <= $nameIndex$$) {
      $hasStart$$ = 0 == $nameIndex$$ || " " == $currentClassName$$2$$.charAt($nameIndex$$ - 1);
      $endIndex$$12_hasEnd$$ = $nameIndex$$ + $classNameLength$$;
      $endIndex$$12_hasEnd$$ = $endIndex$$12_hasEnd$$ == $currentClassNameLength$$ || " " == $currentClassName$$2$$.charAt($endIndex$$12_hasEnd$$);
      if ($hasStart$$ && $endIndex$$12_hasEnd$$) {
        return $nameIndex$$;
      }
      $lastNameIndex$$ = $currentClassName$$2$$.lastIndexOf($className$$23$$);
      if ($lastNameIndex$$ != $nameIndex$$) {
        return $hasStart$$ = $currentClassName$$2$$.charAt($lastNameIndex$$ - 1), $endIndex$$12_hasEnd$$ = $lastNameIndex$$ + $classNameLength$$, $endIndex$$12_hasEnd$$ = $endIndex$$12_hasEnd$$ == $currentClassNameLength$$ || " " == $currentClassName$$2$$.charAt($endIndex$$12_hasEnd$$), $hasStart$$ && $endIndex$$12_hasEnd$$ ? $lastNameIndex$$ : $currentClassName$$2$$.indexOf(" " + $className$$23$$ + " ");
      }
    }
    return-1;
  };
  $DvtDataGridUtils$$.prototype.$ctrlEquivalent$ = function $$DvtDataGridUtils$$$$$ctrlEquivalent$$($event$$187$$) {
    return this.$os$ === $DvtDataGridUtils$$.$MAC_OS$ ? $event$$187$$.metaKey : $event$$187$$.ctrlKey;
  };
  $DvtDataGridUtils$$.prototype.$getElementScrollLeft$ = function $$DvtDataGridUtils$$$$$getElementScrollLeft$$($element$$102$$) {
    var $width$$28$$, $elemWidth$$;
    if (this.$dataGrid$.$m_resources$.$isRTLMode$()) {
      if (this.platform == $DvtDataGridUtils$$.$GECKO_PLATFORM$ || this.platform == $DvtDataGridUtils$$.$IE_PLATFORM$ || this.platform == $DvtDataGridUtils$$.$EDGE_PLATFORM$) {
        return Math.abs($element$$102$$.scrollLeft);
      }
      $width$$28$$ = this.$dataGrid$.$getScrollableWidth$();
      $elemWidth$$ = $element$$102$$.clientWidth;
      return Math.max(0, $width$$28$$ - $elemWidth$$ - $element$$102$$.scrollLeft);
    }
    return $element$$102$$.scrollLeft;
  };
  $DvtDataGridUtils$$.prototype.$setElementScrollLeft$ = function $$DvtDataGridUtils$$$$$setElementScrollLeft$$($element$$103$$, $scrollLeft$$11$$) {
    var $width$$29$$, $elemWidth$$1$$;
    this.$dataGrid$.$m_resources$.$isRTLMode$() ? this.platform === $DvtDataGridUtils$$.$GECKO_PLATFORM$ ? $element$$103$$.scrollLeft = -$scrollLeft$$11$$ : this.platform == $DvtDataGridUtils$$.$IE_PLATFORM$ || this.platform == $DvtDataGridUtils$$.$EDGE_PLATFORM$ ? $element$$103$$.scrollLeft = $scrollLeft$$11$$ : ($width$$29$$ = this.$dataGrid$.$getScrollableWidth$(), $elemWidth$$1$$ = $element$$103$$.clientWidth, $element$$103$$.scrollLeft = $width$$29$$ - $elemWidth$$1$$ - $scrollLeft$$11$$) : 
    $element$$103$$.scrollLeft = $scrollLeft$$11$$;
  };
  $DvtDataGridUtils$$.prototype.$_determineOS$ = function $$DvtDataGridUtils$$$$$_determineOS$$($userAgent$$3$$) {
    if ($userAgent$$3$$) {
      if (-1 != $userAgent$$3$$.indexOf("win")) {
        return $DvtDataGridUtils$$.$WINDOWS_OS$;
      }
      if (-1 != $userAgent$$3$$.indexOf("mac")) {
        return $DvtDataGridUtils$$.$MAC_OS$;
      }
      if (-1 != $userAgent$$3$$.indexOf("sunos")) {
        return $DvtDataGridUtils$$.$SOLARIS_OS$;
      }
    }
    return $DvtDataGridUtils$$.$UNKNOWN_OS$;
  };
  $DvtDataGridUtils$$.prototype.$_determinePlatform$ = function $$DvtDataGridUtils$$$$$_determinePlatform$$($userAgent$$4$$) {
    if ($userAgent$$4$$ && -1 == $userAgent$$4$$.indexOf("opera")) {
      if (-1 != $userAgent$$4$$.indexOf("trident") || -1 != $userAgent$$4$$.indexOf("msie")) {
        return $DvtDataGridUtils$$.$IE_PLATFORM$;
      }
      if (-1 != $userAgent$$4$$.indexOf("edge")) {
        return $DvtDataGridUtils$$.$EDGE_PLATFORM$;
      }
      if (-1 != $userAgent$$4$$.indexOf("applewebkit") || -1 != $userAgent$$4$$.indexOf("safari")) {
        return $DvtDataGridUtils$$.$WEBKIT_PLATFORM$;
      }
      if (-1 != $userAgent$$4$$.indexOf("gecko/")) {
        return $DvtDataGridUtils$$.$GECKO_PLATFORM$;
      }
    }
    return $DvtDataGridUtils$$.$UNKNOWN_PLATFORM$;
  };
  $DvtDataGridUtils$$.prototype.$getMousewheelEvent$ = function $$DvtDataGridUtils$$$$$getMousewheelEvent$$() {
    return this.platform === $DvtDataGridUtils$$.$GECKO_PLATFORM$ ? "DOMMouseScroll" : "mousewheel";
  };
  $DvtDataGridUtils$$.prototype.$getMousewheelScrollDelta$ = function $$DvtDataGridUtils$$$$$getMousewheelScrollDelta$$($deltaY$$7_event$$188$$) {
    var $deltaX$$4$$;
    $deltaY$$7_event$$188$$.wheelDeltaX ? ($deltaX$$4$$ = $deltaY$$7_event$$188$$.wheelDeltaX, $deltaY$$7_event$$188$$ = $deltaY$$7_event$$188$$.wheelDeltaY) : ($deltaX$$4$$ = 0, $deltaY$$7_event$$188$$ = $deltaY$$7_event$$188$$.detail ? -40 * $deltaY$$7_event$$188$$.detail : $deltaY$$7_event$$188$$.wheelDelta);
    return{deltaX:$deltaX$$4$$, deltaY:$deltaY$$7_event$$188$$};
  };
  $DvtDataGridUtils$$.prototype.empty = function $$DvtDataGridUtils$$$$empty$($elem$$53$$) {
    for (;$elem$$53$$.firstChild;) {
      this.$dataGrid$.$_remove$($elem$$53$$.firstChild);
    }
  };
  $DvtDataGridUtils$$.prototype.$supportsTransitions$ = function $$DvtDataGridUtils$$$$$supportsTransitions$$() {
    var $s$$9$$ = (document.body || document.documentElement).style, $p$$4$$ = "transition";
    if (/MSIE \d/.test(navigator.userAgent) && (null == document.documentMode || 11 > document.documentMode)) {
      return!1;
    }
    if ("string" == typeof $s$$9$$[$p$$4$$]) {
      return!0;
    }
    for (var $v$$ = "Moz webkit Webkit Khtml O ms".split(" "), $p$$4$$ = $p$$4$$.charAt(0).toUpperCase() + $p$$4$$.substr(1), $i$$196$$ = 0;$i$$196$$ < $v$$.length;$i$$196$$++) {
      if ("string" == typeof $s$$9$$[$v$$[$i$$196$$] + $p$$4$$]) {
        return!0;
      }
    }
    return!1;
  };
  $DvtDataGridUtils$$.prototype.$_isNodeEditableOrClickable$ = function $$DvtDataGridUtils$$$$$_isNodeEditableOrClickable$$($node$$32$$, $databody$$15$$) {
    for (var $nodeName$$2$$, $tabIndex$$2$$, $origTabIndex$$;null != $node$$32$$ && $node$$32$$ != $databody$$15$$;) {
      $nodeName$$2$$ = $node$$32$$.nodeName;
      if (3 != $node$$32$$.nodeType) {
        if ($tabIndex$$2$$ = parseInt($node$$32$$.getAttribute("tabIndex"), 10), $origTabIndex$$ = parseInt($node$$32$$.getAttribute(this.$dataGrid$.$m_resources$.$getMappedAttribute$("tabindex")), 10), null != $tabIndex$$2$$ && 0 <= $tabIndex$$2$$) {
          if (this.$containsCSSClassName$($node$$32$$, this.$dataGrid$.$m_resources$.$getMappedStyle$("cell")) || this.$containsCSSClassName$($node$$32$$, this.$dataGrid$.$m_resources$.$getMappedStyle$("headercell"))) {
            break;
          } else {
            return!0;
          }
        } else {
          if ($nodeName$$2$$.match(/^INPUT|SELECT|OPTION|BUTTON|^A\b|TEXTAREA/) && (-1 != $tabIndex$$2$$ || -1 != $origTabIndex$$)) {
            return!0;
          }
        }
      }
      $node$$32$$ = $node$$32$$.parentNode;
    }
    return!1;
  };
  $DvtDataGridOptions$$.prototype.$extract$ = function $$DvtDataGridOptions$$$$$extract$$($arg1$$81_val1$$, $arg2$$25_val2$$, $arg3$$7_val3$$, $arg4$$) {
    return null != $arg1$$81_val1$$ ? ($arg1$$81_val1$$ = this.options[$arg1$$81_val1$$], null != $arg2$$25_val2$$ && null != $arg1$$81_val1$$ ? ($arg2$$25_val2$$ = $arg1$$81_val1$$[$arg2$$25_val2$$], null != $arg3$$7_val3$$ && null != $arg2$$25_val2$$ ? ($arg3$$7_val3$$ = $arg2$$25_val2$$[$arg3$$7_val3$$], null != $arg4$$ && null != $arg3$$7_val3$$ ? $arg3$$7_val3$$[$arg4$$] : $arg3$$7_val3$$) : $arg2$$25_val2$$) : $arg1$$81_val1$$) : null;
  };
  $DvtDataGridOptions$$.prototype.evaluate = function $$DvtDataGridOptions$$$$evaluate$($value$$200$$, $obj$$55$$) {
    return "function" == typeof $value$$200$$ ? $value$$200$$.call(this, $obj$$55$$) : $value$$200$$;
  };
  $DvtDataGridOptions$$.prototype.$getRawProperty$ = function $$DvtDataGridOptions$$$$$getRawProperty$$($prop$$66$$, $axis$$31$$) {
    var $arg1$$82$$, $arg2$$26$$, $arg3$$8$$;
    "row" == $axis$$31$$ || "column" == $axis$$31$$ ? ($arg1$$82$$ = "header", $arg2$$26$$ = $axis$$31$$, $arg3$$8$$ = $prop$$66$$) : "cell" == $axis$$31$$ && ($arg1$$82$$ = "cell", $arg2$$26$$ = $prop$$66$$);
    return this.$extract$($arg1$$82$$, $arg2$$26$$, $arg3$$8$$);
  };
  $DvtDataGridOptions$$.prototype.$getProperty$ = function $$DvtDataGridOptions$$$$$getProperty$$($prop$$67$$, $axis$$32$$, $obj$$56$$) {
    return void 0 === $obj$$56$$ ? this.$extract$($prop$$67$$, $axis$$32$$) : this.evaluate(this.$getRawProperty$($prop$$67$$, $axis$$32$$), $obj$$56$$);
  };
  $DvtDataGridOptions$$.prototype.$nullOrDefault$ = function $$DvtDataGridOptions$$$$$nullOrDefault$$($value$$201$$) {
    return null != $value$$201$$ ? $value$$201$$ : !1;
  };
  $DvtDataGridOptions$$.prototype.$getRowBandingInterval$ = function $$DvtDataGridOptions$$$$$getRowBandingInterval$$() {
    var $bandingInterval$$ = this.$getProperty$("bandingInterval", "row");
    return null != $bandingInterval$$ ? $bandingInterval$$ : 0;
  };
  $DvtDataGridOptions$$.prototype.$getColumnBandingInterval$ = function $$DvtDataGridOptions$$$$$getColumnBandingInterval$$() {
    var $bandingInterval$$1$$ = this.$getProperty$("bandingInterval", "column");
    return null != $bandingInterval$$1$$ ? $bandingInterval$$1$$ : 0;
  };
  $DvtDataGridOptions$$.prototype.$getEmptyText$ = function $$DvtDataGridOptions$$$$$getEmptyText$$() {
    return this.$getProperty$("emptyText");
  };
  $DvtDataGridOptions$$.prototype.$getHorizontalGridlines$ = function $$DvtDataGridOptions$$$$$getHorizontalGridlines$$() {
    var $horizontalGridlines$$4$$;
    $horizontalGridlines$$4$$ = this.$extract$("gridlines", "horizontal");
    return null != $horizontalGridlines$$4$$ ? $horizontalGridlines$$4$$ : "visible";
  };
  $DvtDataGridOptions$$.prototype.$getVerticalGridlines$ = function $$DvtDataGridOptions$$$$$getVerticalGridlines$$() {
    var $verticalGridlines$$4$$;
    $verticalGridlines$$4$$ = this.$extract$("gridlines", "vertical");
    return null != $verticalGridlines$$4$$ ? $verticalGridlines$$4$$ : "visible";
  };
  $DvtDataGridOptions$$.prototype.$getRowScrollPosition$ = function $$DvtDataGridOptions$$$$$getRowScrollPosition$$() {
    var $rowScrollPosition$$2$$;
    $rowScrollPosition$$2$$ = this.$extract$("scrollPosition", "key", "row");
    return null != $rowScrollPosition$$2$$ ? $rowScrollPosition$$2$$ : this.$extract$("scrollPosition", "index", "row");
  };
  $DvtDataGridOptions$$.prototype.$getColumnScrollPosition$ = function $$DvtDataGridOptions$$$$$getColumnScrollPosition$$() {
    var $columnScrollPosition$$2$$;
    $columnScrollPosition$$2$$ = this.$extract$("scrollPosition", "key", "column");
    return null != $columnScrollPosition$$2$$ ? $columnScrollPosition$$2$$ : this.$extract$("scrollPosition", "index", "column");
  };
  $DvtDataGridOptions$$.prototype.$getScrollPositionMode$ = function $$DvtDataGridOptions$$$$$getScrollPositionMode$$() {
    var $scrollPosition$$;
    $scrollPosition$$ = this.$getProperty$("scrollPosition");
    return void 0 == $scrollPosition$$ ? null : void 0 != $scrollPosition$$.key ? "key" : void 0 != $scrollPosition$$.index ? "index" : null;
  };
  $DvtDataGridOptions$$.prototype.$getSelectionCardinality$ = function $$DvtDataGridOptions$$$$$getSelectionCardinality$$() {
    var $mode$$20_val$$31$$, $key$$72$$;
    $mode$$20_val$$31$$ = this.$getProperty$("selectionMode");
    if (void 0 == $mode$$20_val$$31$$) {
      return "none";
    }
    $key$$72$$ = this.$getSelectionMode$();
    $mode$$20_val$$31$$ = $mode$$20_val$$31$$[$key$$72$$];
    return null != $mode$$20_val$$31$$ ? $mode$$20_val$$31$$ : "none";
  };
  $DvtDataGridOptions$$.prototype.$getSelectionMode$ = function $$DvtDataGridOptions$$$$$getSelectionMode$$() {
    var $cardinality_mode$$21$$;
    $cardinality_mode$$21$$ = this.$getProperty$("selectionMode");
    if (void 0 == $cardinality_mode$$21$$) {
      return "cell";
    }
    $cardinality_mode$$21$$ = $cardinality_mode$$21$$.row;
    return null != $cardinality_mode$$21$$ && "none" != $cardinality_mode$$21$$ ? "row" : "cell";
  };
  $DvtDataGridOptions$$.prototype.getSelection = function $$DvtDataGridOptions$$$$getSelection$() {
    return this.$getProperty$("selection");
  };
  $DvtDataGridOptions$$.prototype.$getCurrentCell$ = function $$DvtDataGridOptions$$$$$getCurrentCell$$() {
    return this.$getProperty$("currentCell");
  };
  $DvtDataGridOptions$$.prototype.$getEditMode$ = function $$DvtDataGridOptions$$$$$getEditMode$$() {
    return this.$getProperty$("editMode");
  };
  $DvtDataGridOptions$$.prototype.$isSortable$ = function $$DvtDataGridOptions$$$$$isSortable$$($axis$$33$$, $obj$$57$$) {
    return this.$nullOrDefault$(this.$getProperty$("sortable", $axis$$33$$, $obj$$57$$));
  };
  $DvtDataGridOptions$$.prototype.$isResizable$ = function $$DvtDataGridOptions$$$$$isResizable$$($axis$$34_v$$1$$, $dir$$21$$, $obj$$58$$) {
    $axis$$34_v$$1$$ = this.$extract$("header", $axis$$34_v$$1$$, "resizable", $dir$$21$$);
    return void 0 != $obj$$58$$ ? this.evaluate($axis$$34_v$$1$$, $obj$$58$$) : $axis$$34_v$$1$$;
  };
  $DvtDataGridOptions$$.prototype.$isMoveable$ = function $$DvtDataGridOptions$$$$$isMoveable$$() {
    return this.$nullOrDefault$(this.$extract$("dnd", "reorder", "row"));
  };
  $DvtDataGridOptions$$.prototype.$getInlineStyle$ = function $$DvtDataGridOptions$$$$$getInlineStyle$$($axis$$36$$, $obj$$59$$) {
    return this.$getProperty$("style", $axis$$36$$, $obj$$59$$);
  };
  $DvtDataGridOptions$$.prototype.$getStyleClass$ = function $$DvtDataGridOptions$$$$$getStyleClass$$($axis$$37$$, $obj$$60$$) {
    return this.$getProperty$("className", $axis$$37$$, $obj$$60$$);
  };
  $DvtDataGridOptions$$.prototype.$getRenderer$ = function $$DvtDataGridOptions$$$$$getRenderer$$($axis$$38$$) {
    return this.$getRawProperty$("renderer", $axis$$38$$);
  };
  $DvtDataGridOptions$$.prototype.$getScrollPolicy$ = function $$DvtDataGridOptions$$$$$getScrollPolicy$$() {
    var $mode$$22$$ = this.$getProperty$("scrollPolicy");
    null == $mode$$22$$ && ($mode$$22$$ = "auto");
    return $mode$$22$$;
  };
  $oj$$11$$.$__registerWidget$("oj.ojDataGrid", $$$$11$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{bandingInterval:{row:0, column:0}, data:null, gridlines:{horizontal:"visible", vertical:"visible"}, scrollPosition:null, selectionMode:null, dnd:{reorder:{row:"disable"}}, scrollPolicy:"auto", selection:[], currentCell:null, editMode:"none", header:{row:{className:null, renderer:null, resizable:{width:"disable", height:"disable"}, sortable:"auto", style:null}, column:{className:null, renderer:null, 
  resizable:{width:"disable", height:"disable"}, sortable:"auto", style:null}}, cell:{className:null, renderer:null, style:null}, resize:null, sort:null, optionChange:null, ready:null, scroll:null, beforeCurrentCell:null, beforeEdit:null, beforeEditEnd:null}, _ComponentCreate:function() {
    this._super();
    this.root = this.element[0];
    this.$rootId$ = this.root.getAttribute("id");
    this.$_createReadyPromise$();
    this.$_resolveReadyPromise$();
    this.grid = new $DvtDataGrid$$;
    this.grid.$setVisibility$($DvtDataGrid$$.$VISIBILITY_STATE_RENDER$);
    $$$$11$$(this.root).addClass("oj-datagrid oj-component");
    $$$$11$$(this.root).attr($oj$$11$$.Components.$_OJ_CONTAINER_ATTR$, this.widgetName);
    this.$redrawSet$ = {data:"all", header:["className", "renderer", "style", "template"]};
  }, $_AfterCreate$:function() {
    this.$_unregisterResizeListener$(this.root);
    $$$$11$$(this.root).empty();
    this._super();
    this.$resources$ = new $oj$$11$$.$DataGridResources$(this.$_GetReadingDirection$(), this.$_getTranslation$.bind(this));
    this.$_setDataSource$();
    this.$_setSelection$();
    null != this.$datasource$ && (this.$_addContextMenu$(), this.grid.$SetDataSource$(this.$datasource$));
    this.grid.$SetOptions$(this.options);
    this.grid.$SetResources$(this.$resources$);
    this.grid.$SetCreateContextCallback$(this.$_modifyContext$.bind(this));
    this.grid.$SetRemoveCallback$(this.$_remove$.bind(this));
    this.grid.$SetCreateReadyPromiseCallback$(this.$_createReadyPromise$.bind(this));
    this.grid.$SetResolveReadyPromiseCallback$(this.$_resolveReadyPromise$.bind(this));
    this.grid.$SetOptionCallback$(this.option.bind(this));
    this.$_registerEventListeners$();
    this.$_possiblyRenderOrRefresh$();
    null != this.$datasource$ && this.$_registerResizeListener$(this.root);
  }, $_registerEventListeners$:function() {
    var $self$$80$$ = this;
    this.grid.addListener("resize", function($details$$8$$) {
      $self$$80$$._trigger("resize", $details$$8$$.event, $details$$8$$.ui);
    });
    this.grid.addListener("select", function($details$$9$$) {
      $self$$80$$.option("selection", $details$$9$$.ui.selection, {_context:{originalEvent:$details$$9$$.event, $internalSet$:!0}, changed:!0});
    });
    this.grid.addListener("currentCell", function($details$$10$$) {
      $self$$80$$.option("currentCell", $details$$10$$.ui, {_context:{originalEvent:$details$$10$$.event, $internalSet$:!0}, changed:!0});
    });
    this.grid.addListener("beforeCurrentCell", function($details$$11$$) {
      return $self$$80$$._trigger("beforeCurrentCell", $details$$11$$.event, $details$$11$$.ui);
    });
    this.grid.addListener("sort", function($details$$12$$) {
      $self$$80$$._trigger("sort", $details$$12$$.event, $details$$12$$.ui);
    });
    this.grid.addListener("keydown", function($details$$13$$) {
      return $self$$80$$._trigger("keydown", $details$$13$$.event, $details$$13$$.ui);
    });
    this.grid.addListener("ready", function() {
      $self$$80$$._trigger("ready", null, {});
    });
    this.grid.addListener("scroll", function($details$$15$$) {
      $self$$80$$._trigger("scroll", $details$$15$$.event, $details$$15$$.ui);
    });
    this.grid.addListener("beforeEdit", function($details$$16$$) {
      return $self$$80$$._trigger("beforeEdit", $details$$16$$.event, $details$$16$$.ui);
    });
    this.grid.addListener("beforeEndEdit", function($details$$17$$) {
      return $self$$80$$._trigger("beforeEndEdit", $details$$17$$.event, $details$$17$$.ui);
    });
  }, refresh:function() {
    this._super();
    this.$_unregisterResizeListener$(this.root);
    $$$$11$$(this.root).empty();
    !0 === this.$_useDefaultContextMenu$ && (this.options.contextMenu = null);
    this.$_setDataSource$();
    null != this.$datasource$ && ($oj$$11$$.$FlattenedTreeDataGridDataSource$ && this.$datasource$ instanceof $oj$$11$$.$FlattenedTreeDataGridDataSource$ && (this.$datasource$.$Destroy$(), this.$datasource$.Init()), this.$_addContextMenu$(), this.grid.$SetDataSource$(this.$datasource$));
    this.grid.$SetOptions$(this.options);
    this.grid.$SetResources$(this.$resources$);
    this.grid.$getVisibility$() != $DvtDataGrid$$.$VISIBILITY_STATE_RENDER$ && this.grid.$setVisibility$($DvtDataGrid$$.$VISIBILITY_STATE_REFRESH$);
    this.$_possiblyRenderOrRefresh$();
    null != this.$datasource$ && this.$_registerResizeListener$(this.root);
  }, _destroy:function() {
    $$$$11$$(this.root).removeAttr($oj$$11$$.Components.$_OJ_CONTAINER_ATTR$);
    null != this.$datasource$ && this.$datasource$.$Destroy$ && this.$datasource$.$Destroy$();
    this.grid.destroy();
    this.$_unregisterResizeListener$(this.root);
    $$$$11$$(this.root).empty();
  }, _setOptions:function($options$$230$$, $flags$$16$$) {
    var $isRefresh$$;
    this.$datasource$ ? ($isRefresh$$ = this.$_shouldRefresh$($options$$230$$), this._super($options$$230$$, $flags$$16$$), $isRefresh$$ ? this.refresh() : this.grid.$UpdateOptions$($options$$230$$)) : (this._super($options$$230$$, $flags$$16$$), null != $options$$230$$.data && this.refresh());
  }, $_NotifyShown$:function() {
    this._super();
    this.$_possiblyRenderOrRefresh$();
  }, $_NotifyHidden$:function() {
    this._super();
    this.grid.$getVisibility$() === $DvtDataGrid$$.$VISIBILITY_STATE_VISIBLE$ && this.grid.$setVisibility$($DvtDataGrid$$.$VISIBILITY_STATE_HIDDEN$);
  }, $_NotifyAttached$:function() {
    this._super();
    this.$_possiblyRenderOrRefresh$();
  }, $_NotifyDetached$:function() {
    this._super();
    this.grid.$getVisibility$() === $DvtDataGrid$$.$VISIBILITY_STATE_VISIBLE$ && this.grid.$setVisibility$($DvtDataGrid$$.$VISIBILITY_STATE_HIDDEN$);
  }, $_shouldRefresh$:function($options$$231$$) {
    var $i$$197$$, $key$$73$$, $isRefresh$$1$$, $elm$$, $itm$$, $opt$$21$$;
    $isRefresh$$1$$ = !1;
    for ($key$$73$$ in $options$$231$$) {
      if ($key$$73$$ in this.$redrawSet$) {
        if ("data" === $key$$73$$) {
          $isRefresh$$1$$ = !0;
          break;
        } else {
          if ("header" == $key$$73$$) {
            for ($elm$$ in $options$$231$$.header) {
              if ("column" == $elm$$ || "row" == $elm$$ || "cell" == $elm$$) {
                for ($itm$$ in $options$$231$$.header[$elm$$]) {
                  for ($i$$197$$ = 0;$i$$197$$ < this.$redrawSet$.header.length;$i$$197$$++) {
                    if ($itm$$ == this.$redrawSet$.header[$i$$197$$]) {
                      for ($opt$$21$$ in this.options.header[$elm$$]) {
                        if ($opt$$21$$ == $itm$$ && $options$$231$$.header[$elm$$][$itm$$] != this.options.header[$elm$$][$itm$$]) {
                          $isRefresh$$1$$ = !0;
                          break;
                        }
                      }
                    }
                  }
                  if ($isRefresh$$1$$) {
                    break;
                  }
                }
              }
              if ($isRefresh$$1$$) {
                break;
              }
            }
          } else {
            for ($opt$$21$$ in this.options) {
              if ($opt$$21$$ == $key$$73$$ && !$oj$$11$$.$Object$.$compareValues$($options$$231$$[$key$$73$$], this.options[$opt$$21$$])) {
                $isRefresh$$1$$ = !0;
                break;
              }
            }
          }
        }
      }
    }
    return $isRefresh$$1$$;
  }, $_isResizeEnabled$:function($axis$$39$$, $direction$$12$$) {
    return this.options.header[$axis$$39$$] && this.options.header[$axis$$39$$].resizable ? "disable" !== this.options.header[$axis$$39$$].resizable[$direction$$12$$] : !1;
  }, $_isSortEnabled$:function($axis$$40$$) {
    return this.options.header[$axis$$40$$] ? "disable" !== this.options.header[$axis$$40$$].sortable : !1;
  }, $_addContextMenu$:function() {
    var $self$$81$$, $menuContainer$$, $listItems_resizeMenu$$ = null, $sortMenu$$ = null, $selectMenu$$ = null, $moveMenu$$ = null, $sortCapability$$, $menuItemsSetByGrid$$;
    $self$$81$$ = this;
    if (null == this.options.contextMenu) {
      if (null != this.$datasource$) {
        $menuContainer$$ = $$$$11$$("\x3cul\x3e");
        $menuContainer$$.css("display", "none").attr("id", this.$rootId$ + "contextmenu");
        $$$$11$$(this.root).append($menuContainer$$);
        if (this.$_isResizeEnabled$("column", "width") || this.$_isResizeEnabled$("column", "height") || this.$_isResizeEnabled$("row", "width") || this.$_isResizeEnabled$("row", "height")) {
          $listItems_resizeMenu$$ = this.$_buildContextMenuItem$("resize");
        }
        $sortCapability$$ = this.$datasource$.getCapability("sort");
        !this.$_isSortEnabled$("column") || "column" !== $sortCapability$$ && "full" !== $sortCapability$$ || ($sortMenu$$ = this.$_buildContextMenuItem$("sortCol"));
        !this.$_isSortEnabled$("row") || "row" !== $sortCapability$$ && "full" !== $sortCapability$$ || ($sortMenu$$ = null != $sortMenu$$ ? $sortMenu$$.add(this.$_buildContextMenuItem$("sortRow")) : this.$_buildContextMenuItem$("sortRow"));
        if ("enable" === this.options.dnd.reorder.row) {
          switch(this.$datasource$.getCapability("move")) {
            case "none":
              break;
            default:
              $moveMenu$$ = this.$_buildContextMenuListItem$("cut").add(this.$_buildContextMenuListItem$("paste"));
          }
        }
        this.$_isMultipleSelection$() && $oj$$11$$.$DomUtils$.$isTouchSupported$() && (this.$_discontiguousSelection$ = !1, $selectMenu$$ = this.$_buildContextMenuListItem$("discontiguousSelection"));
        if (null != $listItems_resizeMenu$$ || null != $sortMenu$$ || null != $moveMenu$$ || null != $selectMenu$$) {
          $menuContainer$$.append($listItems_resizeMenu$$).append($sortMenu$$).append($moveMenu$$).append($selectMenu$$), $menuContainer$$.ojMenu(), this.$_useDefaultContextMenu$ = !0, this._setOption("contextMenu", "#" + $menuContainer$$.attr("id")), $menuContainer$$.on("ojselect", this.$_handleContextMenuSelect$.bind(this));
        }
      }
    } else {
      null == this.$_menuItemsSetByGrid$ && (this.$_menuItemsSetByGrid$ = []), $menuContainer$$ = $$$$11$$(this.options.contextMenu), $listItems_resizeMenu$$ = $menuContainer$$.find("[data-oj-command]"), $menuItemsSetByGrid$$ = [], $listItems_resizeMenu$$.each(function() {
        var $anchor$$1_command_newListItem$$;
        $anchor$$1_command_newListItem$$ = $$$$11$$(this).children("a");
        if (0 === $anchor$$1_command_newListItem$$.length || -1 != $self$$81$$.$_menuItemsSetByGrid$.indexOf($anchor$$1_command_newListItem$$.get(0))) {
          $anchor$$1_command_newListItem$$ = $$$$11$$(this).attr("data-oj-command").split("-"), $anchor$$1_command_newListItem$$ = $self$$81$$.$_buildContextMenuItem$($anchor$$1_command_newListItem$$[$anchor$$1_command_newListItem$$.length - 1]), $$$$11$$(this).replaceWith($anchor$$1_command_newListItem$$), $menuItemsSetByGrid$$.push($anchor$$1_command_newListItem$$.children("a").get(0));
        }
      }), this.$_menuItemsSetByGrid$ = $menuItemsSetByGrid$$, $menuContainer$$.data("oj-ojMenu") && $menuContainer$$.ojMenu("refresh"), $menuContainer$$.on("ojselect", this.$_handleContextMenuSelect$.bind(this));
    }
  }, $_buildContextMenuItem$:function($command$$1$$) {
    if ("resize" === $command$$1$$) {
      return this.$_buildContextMenuListItem$("resize").append($$$$11$$("\x3cul\x3e\x3c/ul\x3e").append(this.$_buildContextMenuListItem$("resizeWidth")).append(this.$_buildContextMenuListItem$("resizeHeight")));
    }
    if ("sortCol" === $command$$1$$) {
      return this.$_buildContextMenuListItem$("sortCol").append($$$$11$$("\x3cul\x3e\x3c/ul\x3e").append(this.$_buildContextMenuListItem$("sortColAsc")).append(this.$_buildContextMenuListItem$("sortColDsc")));
    }
    if ("sortRow" === $command$$1$$) {
      return this.$_buildContextMenuListItem$("sortRow").append($$$$11$$("\x3cul\x3e\x3c/ul\x3e").append(this.$_buildContextMenuListItem$("sortRowAsc")).append(this.$_buildContextMenuListItem$("sortRowDsc")));
    }
    if (-1 != Object.keys(this.$resources$.$commands$).indexOf($command$$1$$)) {
      return $$$$11$$(this.$_buildContextMenuListItem$($command$$1$$));
    }
  }, $_buildContextMenuListItem$:function($command$$2$$) {
    var $listItem$$ = $$$$11$$("\x3cli\x3e\x3c/li\x3e");
    $listItem$$.attr("data-oj-command", this.$_getMappedCommand$($command$$2$$));
    $listItem$$.append(this.$_buildContextMenuLabel$($command$$2$$));
    return $listItem$$;
  }, $_buildContextMenuLabel$:function($command$$3$$) {
    var $key$$74$$ = "label" + $command$$3$$.charAt(0).toUpperCase() + $command$$3$$.slice(1);
    "discontiguousSelection" === $command$$3$$ && ($key$$74$$ = "labelEnableNonContiguous");
    return $$$$11$$('\x3ca href\x3d"#"\x3e\x3c/a\x3e').text(this.$_getTranslation$($key$$74$$));
  }, $_getDataGridContextMenu$:function() {
    return $$$$11$$(this.options.contextMenu).get(0);
  }, $_getTranslation$:function($key$$75$$, $args$$20$$) {
    return this.$getTranslatedString$($key$$75$$, $args$$20$$);
  }, $_handleResizeDialog$:function() {
    var $value$$202$$ = $$$$11$$("#" + this.$rootId$ + "spinner").ojInputNumber("option", "value");
    $$$$11$$("#" + this.$rootId$ + "dialog").ojDialog("close");
    this.grid.$handleContextMenuReturn$(this.$contextMenuEvent$, this.$menuItemFunction$, $value$$202$$);
    this.$contextMenuEvent$.target.focus();
  }, $_buildResizeDialog$:function($title$$8$$, $initialSize$$) {
    var $dialog$$, $dialogBody$$, $spinner$$, $dialogFooter$$, $dialogOKButton$$;
    $dialog$$ = $$$$11$$("#" + this.$rootId$ + "dialog");
    $spinner$$ = $$$$11$$("#" + this.$rootId$ + "spinner");
    0 === $dialog$$.length || 0 === $spinner$$.length ? ($dialog$$ = $$$$11$$("\x3cdiv\x3e"), $dialog$$.attr("id", this.$rootId$ + "dialog"), $dialog$$.attr("title", $title$$8$$), $dialogBody$$ = $$$$11$$('\x3cdiv class\x3d"oj-dialog-body"\x3e\x3c/div\x3e'), $dialogFooter$$ = $$$$11$$('\x3cdiv class\x3d"oj-dialog-footer"\x3e\x3c/div\x3e'), $dialog$$.append($dialogBody$$).append($dialogFooter$$), $spinner$$ = $$$$11$$('\x3cinput id\x3d"' + this.$rootId$ + 'spinner"/\x3e'), $dialogOKButton$$ = $$$$11$$('\x3cbutton id\x3d"' + 
    this.$rootId$ + 'dialogsubmit"/\x3e'), $dialogBody$$.append($spinner$$), $dialogFooter$$.append($dialogOKButton$$), $$$$11$$(this.root).append($dialog$$), $dialogOKButton$$.ojButton({$component$:"ojButton", label:this.$_getTranslation$("labelResizeDialogSubmit")}), $dialogOKButton$$.on("click", this.$_handleResizeDialog$.bind(this)), $spinner$$.ojInputNumber({$component$:"ojInputNumber", max:1E3, min:20, step:1, value:$initialSize$$}), $dialog$$.ojDialog({initialVisibility:"show", position:{my:"center center", 
    at:"center center", collision:"none", of:$$$$11$$(this.root)}})) : ($spinner$$.ojInputNumber("option", "value", $initialSize$$), $$$$11$$("#" + this.$rootId$ + "dialog").ojDialog("open"));
  }, $_handleContextMenuSelect$:function($event$$190$$, $ui$$3$$) {
    var $initialSize$$1_key$$76_parent$$10$$;
    this.$menuItemFunction$ = $ui$$3$$.item.attr("data-oj-command");
    this.$menuItemFunction$ === this.$_getMappedCommand$("sortColAsc") || this.$menuItemFunction$ === this.$_getMappedCommand$("sortColDsc") || this.$menuItemFunction$ === this.$_getMappedCommand$("cut") || this.$menuItemFunction$ === this.$_getMappedCommand$("paste") ? this.grid.$handleContextMenuReturn$(this.$contextMenuEvent$, this.$menuItemFunction$, null) : this.$menuItemFunction$ === this.$_getMappedCommand$("resizeWidth") || this.$menuItemFunction$ === this.$_getMappedCommand$("resizeHeight") ? 
    ($initialSize$$1_key$$76_parent$$10$$ = $$$$11$$(this.$contextMenuEvent$.target).closest("." + this.$_getMappedStyle$("cell")), 0 == $initialSize$$1_key$$76_parent$$10$$.length && ($initialSize$$1_key$$76_parent$$10$$ = $$$$11$$(this.$contextMenuEvent$.target).closest("." + this.$_getMappedStyle$("headercell"))), 0 < $initialSize$$1_key$$76_parent$$10$$.length && ($initialSize$$1_key$$76_parent$$10$$ = this.$menuItemFunction$ === this.$_getMappedCommand$("resizeWidth") ? $initialSize$$1_key$$76_parent$$10$$.outerWidth() : 
    $initialSize$$1_key$$76_parent$$10$$.outerHeight(), this.$_buildResizeDialog$($ui$$3$$.item.text(), $initialSize$$1_key$$76_parent$$10$$))) : this.$menuItemFunction$ === this.$_getMappedCommand$("discontiguousSelection") && (this.$_discontiguousSelection$ = !this.$_discontiguousSelection$, this.grid.$handleContextMenuReturn$(this.$contextMenuEvent$, this.$menuItemFunction$, this.$_discontiguousSelection$), $initialSize$$1_key$$76_parent$$10$$ = this.$_discontiguousSelection$ ? "labelDisableNonContiguous" : 
    "labelEnableNonContiguous", $ui$$3$$.item.children().first().text(this.$_getTranslation$($initialSize$$1_key$$76_parent$$10$$)));
  }, $_NotifyContextMenuGesture$:function($menu$$4$$, $event$$191$$, $eventType$$32$$) {
    this.grid.$handleContextMenuGesture$($event$$191$$, $eventType$$32$$, this.$_contextMenuGestureCallback$.bind(this));
  }, $_contextMenuGestureCallback$:function($capabilities$$3_returnVal$$15$$, $event$$192$$, $eventType$$33$$) {
    var $launcher$$7_openOptions$$2$$;
    null != $capabilities$$3_returnVal$$15$$ && (this.$contextMenuEvent$ = $event$$192$$.originalEvent, $launcher$$7_openOptions$$2$$ = $capabilities$$3_returnVal$$15$$.launcher, $capabilities$$3_returnVal$$15$$ = $capabilities$$3_returnVal$$15$$.capabilities, this.$_manageContextMenu$($capabilities$$3_returnVal$$15$$), $launcher$$7_openOptions$$2$$ = "keyboard" === $eventType$$33$$ ? {position:{of:$launcher$$7_openOptions$$2$$}, launcher:$$$$11$$($launcher$$7_openOptions$$2$$)} : {launcher:$$$$11$$($launcher$$7_openOptions$$2$$)}, 
    this.$_OpenContextMenu$($event$$192$$, $eventType$$33$$, $launcher$$7_openOptions$$2$$));
  }, $_addContextMenuCapability$:function($command$$4$$) {
    var $contextMenu$$1$$;
    $contextMenu$$1$$ = $$$$11$$(this.$_getDataGridContextMenu$());
    $contextMenu$$1$$.find("[data-oj-command\x3d" + $command$$4$$ + "]").hasClass("oj-disabled") || $contextMenu$$1$$.find("[data-oj-command\x3d" + $command$$4$$ + "]").addClass("oj-disabled");
  }, $_removeContextMenuCapability$:function($command$$5$$) {
    $$$$11$$(this.$_getDataGridContextMenu$()).find("[data-oj-command\x3d" + $command$$5$$ + "]").removeClass("oj-disabled");
  }, $_manageContextMenu$:function($capabilities$$4$$) {
    var $property$$21$$, $command$$6$$;
    for ($property$$21$$ in $capabilities$$4$$) {
      $capabilities$$4$$.hasOwnProperty($property$$21$$) && ($command$$6$$ = this.$resources$.$getMappedCommand$($property$$21$$), "disable" === $capabilities$$4$$[$property$$21$$] ? this.$_addContextMenuCapability$($command$$6$$) : this.$_removeContextMenuCapability$($command$$6$$));
    }
  }, $_findCellIndex$:function($columnIndex$$3_element$$104$$) {
    var $row$$45$$;
    $row$$45$$ = $columnIndex$$3_element$$104$$.parent();
    $columnIndex$$3_element$$104$$ = $columnIndex$$3_element$$104$$.index();
    return{rowIndex:$row$$45$$.index(), columnIndex:$columnIndex$$3_element$$104$$};
  }, $_findHeadersByCellIndex$:function($columnHeader$$8_index$$138$$) {
    var $rowHeader$$22$$;
    $rowHeader$$22$$ = this.$_getRowHeader$().children().eq(0).children().eq($columnHeader$$8_index$$138$$.rowIndex + 1);
    $columnHeader$$8_index$$138$$ = this.$_getColumnHeader$().children().eq(0).children().eq($columnHeader$$8_index$$138$$.columnIndex);
    return{rowHeader:$rowHeader$$22$$, columnHeader:$columnHeader$$8_index$$138$$};
  }, $_getGrid$:function() {
    return $$$$11$$(this.root);
  }, $_getColumnHeader$:function() {
    return $$$$11$$("#" + this.$rootId$ + "\\:columnHeader");
  }, $_getRowHeader$:function() {
    return $$$$11$$("#" + this.$rootId$ + "\\:rowHeader");
  }, $_getDatabodyRows$:function() {
    return $$$$11$$("#" + this.$rootId$ + "\\:databody ." + this.$_getMappedStyle$("row"));
  }, $_setDataSource$:function() {
    this.$datasource$ = null != this.options.data ? this.options.data : null;
  }, $_setSelection$:function() {
    var $selection$$10$$ = this.options.selection;
    null != $selection$$10$$ && this.grid.$SetSelection$($selection$$10$$);
  }, $_modifyContext$:function($context$$59$$) {
    $context$$59$$.component = $oj$$11$$.Components.$getWidgetConstructor$(this.element, "ojDataGrid");
  }, $_setAccessibleContext$:function($context$$60$$) {
    this.grid.$SetAccessibleContext$($context$$60$$);
  }, $_unregisterResizeListener$:function($element$$105$$) {
    $element$$105$$ && this.$_resizeHandler$ && $oj$$11$$.$DomUtils$.$removeResizeListener$($element$$105$$, this.$_resizeHandler$);
  }, $_registerResizeListener$:function($element$$106$$) {
    $element$$106$$ && (null == this.$_resizeHandler$ && (this.$_resizeHandler$ = this.$_handleResize$.bind(this)), $oj$$11$$.$DomUtils$.$addResizeListener$($element$$106$$, this.$_resizeHandler$));
  }, $_handleResize$:function($width$$30$$, $height$$33$$) {
    0 < $width$$30$$ && 0 < $height$$33$$ && (this.$_possiblyRenderOrRefresh$(), this.grid.$HandleResize$($width$$30$$, $height$$33$$));
  }, getNodeBySubId:function($columnIndex$$4_level$$31_locator$$11$$) {
    var $rowIndex$$11_subId$$7$$, $header$$33$$, $index$$139_returnElement$$, $axis$$41$$;
    if (null == $columnIndex$$4_level$$31_locator$$11$$) {
      return this.element ? this.element[0] : null;
    }
    $rowIndex$$11_subId$$7$$ = $columnIndex$$4_level$$31_locator$$11$$.subId;
    if ("oj-datagrid-cell" === $rowIndex$$11_subId$$7$$) {
      $rowIndex$$11_subId$$7$$ = $columnIndex$$4_level$$31_locator$$11$$.rowIndex - this.grid.$getStartRow$(), $columnIndex$$4_level$$31_locator$$11$$ = $columnIndex$$4_level$$31_locator$$11$$.columnIndex - this.grid.$getStartColumn$(), $index$$139_returnElement$$ = this.$_getDatabodyRows$().eq($rowIndex$$11_subId$$7$$).children().eq($columnIndex$$4_level$$31_locator$$11$$);
    } else {
      if ("oj-datagrid-sort-icon" === $rowIndex$$11_subId$$7$$ || "oj-datagrid-sort-ascending" === $rowIndex$$11_subId$$7$$ || "oj-datagrid-sort-descending" === $rowIndex$$11_subId$$7$$ || "oj-datagrid-header" === $rowIndex$$11_subId$$7$$) {
        $axis$$41$$ = $columnIndex$$4_level$$31_locator$$11$$.axis;
        $index$$139_returnElement$$ = $columnIndex$$4_level$$31_locator$$11$$.index;
        $columnIndex$$4_level$$31_locator$$11$$ = null == $columnIndex$$4_level$$31_locator$$11$$.level ? 0 : $columnIndex$$4_level$$31_locator$$11$$.level;
        "column" === $axis$$41$$ ? $header$$33$$ = this.$_getHeaderByIndex$($index$$139_returnElement$$, $columnIndex$$4_level$$31_locator$$11$$, $$$$11$$("#" + this.$rootId$ + "\\:columnHeader"), this.grid.$m_startColHeader$) : "row" === $axis$$41$$ && ($header$$33$$ = this.$_getHeaderByIndex$($index$$139_returnElement$$, $columnIndex$$4_level$$31_locator$$11$$, $$$$11$$("#" + this.$rootId$ + "\\:rowHeader"), this.grid.$m_startRowHeader$));
        if (null == $header$$33$$) {
          return null;
        }
        if ("oj-datagrid-sort-icon" === $rowIndex$$11_subId$$7$$) {
          return $header$$33$$.children("." + this.$_getMappedStyle$("sortcontainer")).children().get(0);
        }
        $index$$139_returnElement$$ = "oj-datagrid-sort-ascending" === $rowIndex$$11_subId$$7$$ ? $header$$33$$.find("." + this.$_getMappedStyle$("sortascending")) : "oj-datagrid-sort-descending" === $rowIndex$$11_subId$$7$$ ? $header$$33$$.find("." + this.$_getMappedStyle$("sortdescending")) : $header$$33$$;
      }
    }
    return null != $index$$139_returnElement$$ && 0 < $index$$139_returnElement$$.length ? $index$$139_returnElement$$[0] : null;
  }, getSubIdByNode:function($indexes$$15_node$$33_subId$$8$$) {
    var $cell$$28_context$$61$$, $header$$34$$;
    $cell$$28_context$$61$$ = $$$$11$$($indexes$$15_node$$33_subId$$8$$).closest("." + this.$_getMappedStyle$("cell"));
    if (0 < $cell$$28_context$$61$$.length) {
      return $indexes$$15_node$$33_subId$$8$$ = this.$_findCellIndex$($cell$$28_context$$61$$), {subId:"oj-datagrid-cell", rowIndex:$indexes$$15_node$$33_subId$$8$$.rowIndex + this.grid.$getStartRow$(), columnIndex:$indexes$$15_node$$33_subId$$8$$.columnIndex + this.grid.$getStartColumn$()};
    }
    $header$$34$$ = $$$$11$$($indexes$$15_node$$33_subId$$8$$).closest("." + this.$_getMappedStyle$("headercell"));
    return 0 < $header$$34$$.length ? ($cell$$28_context$$61$$ = $header$$34$$[0][this.$_getMappedAttribute$("context")], $indexes$$15_node$$33_subId$$8$$ = $$$$11$$($indexes$$15_node$$33_subId$$8$$).hasClass(this.$_getMappedStyle$("sortascending")) ? "oj-datagrid-sort-ascending" : $$$$11$$($indexes$$15_node$$33_subId$$8$$).hasClass(this.$_getMappedStyle$("sortdescending")) ? "oj-datagrid-sort-descending" : "oj-datagrid-header", {subId:$indexes$$15_node$$33_subId$$8$$, axis:$cell$$28_context$$61$$.axis, 
    index:this.$_getHeaderIndex$($header$$34$$), level:$cell$$28_context$$61$$.level}) : null;
  }, getContextByNode:function($context$$62_node$$34$$) {
    var $cell$$29_header$$35_index$$140$$;
    $cell$$29_header$$35_index$$140$$ = $$$$11$$($context$$62_node$$34$$).closest("." + this.$_getMappedStyle$("cell"));
    if (0 < $cell$$29_header$$35_index$$140$$.length) {
      return $context$$62_node$$34$$ = $cell$$29_header$$35_index$$140$$[0][this.$_getMappedAttribute$("context")], $cell$$29_header$$35_index$$140$$ = this.$_findCellIndex$($cell$$29_header$$35_index$$140$$), {subId:"oj-datagrid-cell", component:$context$$62_node$$34$$.component, data:$context$$62_node$$34$$.data, datasource:$context$$62_node$$34$$.datasource, indexes:{row:$cell$$29_header$$35_index$$140$$.rowIndex + this.grid.$getStartRow$(), column:$cell$$29_header$$35_index$$140$$.columnIndex + 
      this.grid.$getStartColumn$()}, keys:{row:$context$$62_node$$34$$.keys.row, column:$context$$62_node$$34$$.keys.column}, mode:$context$$62_node$$34$$.mode};
    }
    $cell$$29_header$$35_index$$140$$ = $$$$11$$($context$$62_node$$34$$).closest("." + this.$_getMappedStyle$("headercell"));
    return 0 < $cell$$29_header$$35_index$$140$$.length ? ($context$$62_node$$34$$ = $cell$$29_header$$35_index$$140$$[0][this.$_getMappedAttribute$("context")], {subId:"oj-datagrid-header", axis:$context$$62_node$$34$$.axis, component:$context$$62_node$$34$$.component, data:$context$$62_node$$34$$.data, datasource:$context$$62_node$$34$$.datasource, depth:$context$$62_node$$34$$.depth, extent:$context$$62_node$$34$$.extent, index:this.$_getHeaderIndex$($cell$$29_header$$35_index$$140$$), key:$context$$62_node$$34$$.key, 
    level:$context$$62_node$$34$$.level}) : null;
  }, $_getMappedStyle$:function($key$$77$$) {
    return this.$resources$.$getMappedStyle$($key$$77$$);
  }, $_getMappedAttribute$:function($key$$78$$) {
    return this.$resources$.$getMappedAttribute$($key$$78$$);
  }, $_getMappedCommand$:function($key$$79$$) {
    return this.$resources$.$getMappedCommand$($key$$79$$);
  }, $_isDataGridSizingAvailable$:function() {
    return null != this.root.offsetParent ? !0 : !1;
  }, $_possiblyRenderOrRefresh$:function() {
    var $visibility$$1$$ = this.grid.$getVisibility$();
    this.$_isDataGridSizingAvailable$() ? ($visibility$$1$$ === $DvtDataGrid$$.$VISIBILITY_STATE_RENDER$ ? this.grid.render(this.root) : $visibility$$1$$ === $DvtDataGrid$$.$VISIBILITY_STATE_REFRESH$ && this.grid.refresh(this.root), this.grid.$setVisibility$($DvtDataGrid$$.$VISIBILITY_STATE_VISIBLE$)) : $visibility$$1$$ === $DvtDataGrid$$.$VISIBILITY_STATE_VISIBLE$ && this.grid.$setVisibility$($DvtDataGrid$$.$VISIBILITY_STATE_HIDDEN$);
  }, $_getHeaderByIndex$:function($index$$141_relativeIndex$$2$$, $level$$32$$, $grouping$$1_headerContainer$$, $start$$37$$) {
    if (0 > $level$$32$$) {
      return null;
    }
    if ($grouping$$1_headerContainer$$.children().first().children().last().hasClass(this.$_getMappedStyle$("headercell"))) {
      return $grouping$$1_headerContainer$$.children().first().children("." + this.$_getMappedStyle$("headercell")).eq($index$$141_relativeIndex$$2$$ - $start$$37$$);
    }
    $grouping$$1_headerContainer$$ = this.$_getGroupingContainer$($index$$141_relativeIndex$$2$$, $level$$32$$, 0, $grouping$$1_headerContainer$$.children().first().children());
    if (null == $grouping$$1_headerContainer$$) {
      return null;
    }
    if ($level$$32$$ <= parseInt($grouping$$1_headerContainer$$.attr(this.$_getMappedAttribute$("level")), 10) + parseInt($grouping$$1_headerContainer$$.children().eq(0).attr(this.$_getMappedAttribute$("depth")), 10) - 1) {
      return $grouping$$1_headerContainer$$.children().eq(0);
    }
    $start$$37$$ = parseInt($grouping$$1_headerContainer$$.attr(this.$_getMappedAttribute$("start")), 10);
    $index$$141_relativeIndex$$2$$ = $index$$141_relativeIndex$$2$$ - $start$$37$$ + 1;
    return $grouping$$1_headerContainer$$.children().eq($index$$141_relativeIndex$$2$$);
  }, $_getGroupingContainer$:function($index$$142$$, $level$$33$$, $currentLevel$$3$$, $headers$$7$$) {
    var $headerIndex$$2_headerRoot$$2$$, $headerExtent$$3$$, $i$$198$$, $headerDepth$$4$$;
    if (null == $headers$$7$$.eq(1) || $headers$$7$$.eq(1).hasClass(this.$_getMappedStyle$("headercell"))) {
      return $level$$33$$ === $currentLevel$$3$$ ? $headers$$7$$.eq(0).parent() : null;
    }
    $headerIndex$$2_headerRoot$$2$$ = $headers$$7$$.parent().parent();
    for ($i$$198$$ = $headerIndex$$2_headerRoot$$2$$.hasClass(this.$_getMappedStyle$("colheader")) || $headerIndex$$2_headerRoot$$2$$.hasClass(this.$_getMappedStyle$("rowheader")) ? 0 : 1;$i$$198$$ < $headers$$7$$.length;$i$$198$$++) {
      if ($headerIndex$$2_headerRoot$$2$$ = parseInt($headers$$7$$.eq($i$$198$$).attr(this.$_getMappedAttribute$("start")), 10), $headerExtent$$3$$ = parseInt($headers$$7$$.eq($i$$198$$).attr(this.$_getMappedAttribute$("extent")), 10), $headerDepth$$4$$ = parseInt($headers$$7$$.eq($i$$198$$).children().eq(0).attr(this.$_getMappedAttribute$("depth")), 10), $index$$142$$ >= $headerIndex$$2_headerRoot$$2$$ && $index$$142$$ < $headerIndex$$2_headerRoot$$2$$ + $headerExtent$$3$$) {
        return $level$$33$$ < $currentLevel$$3$$ + $headerDepth$$4$$ ? $headers$$7$$.eq($i$$198$$) : this.$_getGroupingContainer$($index$$142$$, $level$$33$$, $currentLevel$$3$$ + $headerDepth$$4$$, $headers$$7$$.eq($i$$198$$).children());
      }
    }
    return null;
  }, $_getHeaderIndex$:function($header$$36$$) {
    var $index$$143$$;
    if ($header$$36$$.parent().hasClass(this.$_getMappedStyle$("groupingcontainer"))) {
      $index$$143$$ = parseInt($header$$36$$.parent().attr(this.$_getMappedAttribute$("start")), 10);
      if ($header$$36$$.get(0) === $header$$36$$.parent().children(":first").get(0)) {
        return $index$$143$$;
      }
      $index$$143$$--;
    } else {
      $index$$143$$ = $header$$36$$.hasClass(this.$_getMappedStyle$("rowheadercell")) ? this.grid.$m_startRowHeader$ : this.grid.$m_startColHeader$;
    }
    return $index$$143$$ += $header$$36$$.index();
  }, $_getHeaderLevel$:function($header$$37$$) {
    var $level$$34$$;
    return $header$$37$$.parent().hasClass(this.$_getMappedStyle$("groupingcontainer")) ? ($level$$34$$ = parseInt($header$$37$$.parent().attr(this.$_getMappedAttribute$("level")), 10), $header$$37$$.get(0) === $header$$37$$.parent().children(":first").get(0) ? $level$$34$$ : $level$$34$$ + 1) : 0;
  }, $_isMultipleSelection$:function() {
    return null == this.options.selectionMode || "multiple" !== this.options.selectionMode.row && "multiple" !== this.options.selectionMode.cell ? !1 : !0;
  }, $_remove$:function($element$$107$$) {
    $$$$11$$($element$$107$$).remove();
  }, scrollTo:function($options$$232$$) {
    this.grid.scroll($options$$232$$);
  }, whenReady:function() {
    return this.$_readyPromise$;
  }, $_createReadyPromise$:function() {
    var $self$$82$$ = this;
    this.$_readyPromise$ = new Promise(function($resolve$$27$$) {
      $self$$82$$.$_readyResolve$ = $resolve$$27$$;
    });
  }, $_resolveReadyPromise$:function() {
    this.$_readyResolve$(null);
  }});
  $DvtDataGrid$$.prototype.$_setupActions$ = function $$DvtDataGrid$$$$$_setupActions$$() {
    this.$actions$ = {ACTIONABLE:this.$_handleActionable$, EXIT_ACTIONABLE:this.$_handleExitActionable$, TAB_NEXT_IN_CELL:this.$_handleActionableTab$, TAB_PREV_IN_CELL:this.$_handleActionablePrevTab$, EDITABLE:this.$_handleEditable$, EXIT_EDITABLE:this.$_handleExitEditable$, DATA_ENTRY:this.$_handleDataEntry$, EXIT_DATA_ENTRY:this.$_handleExitDataEntry$, EDIT:this.$_handleEdit$, EXIT_EDIT:this.$_handleExitEdit$, CANCEL_EDIT:this.$_handleCancelEdit$, NO_OP:this.$_handleNoOp$, EAT:this.$_handleEat$, 
    FOCUS_LEFT:this.$_handleFocusLeft$, FOCUS_RIGHT:this.$_handleFocusRight$, FOCUS_UP:this.$_handleFocusUp$, FOCUS_DOWN:this.$_handleFocusDown$, FOCUS_ROW_FIRST:this.$_handleFocusRowFirst$, FOCUS_ROW_LAST:this.$_handleFocusRowLast$, FOCUS_COLUMN_FIRST:this.$_handleFocusColumnFirst$, FOCUS_COLUMN_LAST:this.$_handleFocusColumnLast$, READ_CELL:this.$readCurrentContent$, SORT:this.$_handleSortKey$, SELECT_DISCONTIGUOUS:this.$_handleSelectDiscontiguous$, SELECT_EXTEND_LEFT:this.$_handleExtendSelectionLeft$, 
    SELECT_EXTEND_RIGHT:this.$_handleExtendSelectionRight$, SELECT_EXTEND_UP:this.$_handleExtendSelectionUp$, SELECT_EXTEND_DOWN:this.$_handleExtendSelectionDown$, SELECT_ROW:this.$_handleSelectRow$, SELECT_COLUMN:this.$_handleSelectColumn$, CUT:this.$_handleCut$, CANCEL_REORDER:this.$_handleCancelReorder$, PASTE:this.$_handlePaste$};
  };
  $DvtDataGrid$$.prototype.$_getActionFromKeyDown$ = function $$DvtDataGrid$$$$$_getActionFromKeyDown$$($event$$193$$, $cellOrHeader$$) {
    var $capabilities$$5$$ = {cellOrHeader:$cellOrHeader$$, readOnly:!this.$_isCellEditable$(), currentMode:this.$_getCurrentMode$(), activeMove:null != this.$m_cutRow$, rowMove:this.$_isMoveEnabled$(), columnSort:this.$_isSortEnabled$("column", null), selection:this.$_isSelectionEnabled$(), selectionMode:this.$m_options$.$getSelectionMode$(), multipleSelection:this.$isMultipleSelection$()};
    return this.$actions$[this.$m_keyboardHandler$.$getAction$($event$$193$$, $capabilities$$5$$)];
  };
  $DvtDataGrid$$.prototype.$isActionableMode$ = function $$DvtDataGrid$$$$$isActionableMode$$() {
    return "actionable" === this.$m_currentMode$;
  };
  $DvtDataGrid$$.prototype.$setActionableMode$ = function $$DvtDataGrid$$$$$setActionableMode$$($flag$$6$$) {
    this.$m_currentMode$ = $flag$$6$$ ? "actionable" : "navigation";
    this.$_setAccInfoText$(this.$isActionableMode$() ? "accessibleActionableMode" : "accessibleNavigationMode");
  };
  $DvtDataGrid$$.prototype.$_handleActionable$ = function $$DvtDataGrid$$$$$_handleActionable$$($event$$194$$, $element$$108$$) {
    this.$_enterActionableMode$($element$$108$$);
    return!1;
  };
  $DvtDataGrid$$.prototype.$_handleExitActionable$ = function $$DvtDataGrid$$$$$_handleExitActionable$$() {
    this.$_exitActionableMode$();
    this.$_highlightActive$();
    return!1;
  };
  $DvtDataGrid$$.prototype.$_handleActionableTab$ = function $$DvtDataGrid$$$$$_handleActionableTab$$($event$$196$$, $element$$110$$) {
    var $focusElems$$2$$ = this.$getFocusableElementsInNode$($element$$110$$);
    return 0 < $focusElems$$2$$.length && $event$$196$$.target == $focusElems$$2$$[$focusElems$$2$$.length - 1] ? ($focusElems$$2$$[0].focus(), !0) : !1;
  };
  $DvtDataGrid$$.prototype.$_handleActionablePrevTab$ = function $$DvtDataGrid$$$$$_handleActionablePrevTab$$($event$$197$$, $element$$111$$) {
    var $focusElems$$3$$ = this.$getFocusableElementsInNode$($element$$111$$);
    return 0 < $focusElems$$3$$.length && $event$$197$$.target == $focusElems$$3$$[0] ? ($focusElems$$3$$[$focusElems$$3$$.length - 1].focus(), !0) : !1;
  };
  $DvtDataGrid$$.prototype.$_getEditMode$ = function $$DvtDataGrid$$$$$_getEditMode$$() {
    null == this.$m_editMode$ && (this.$m_editMode$ = this.$m_options$.$getEditMode$());
    return this.$m_editMode$;
  };
  $DvtDataGrid$$.prototype.$_getCurrentMode$ = function $$DvtDataGrid$$$$$_getCurrentMode$$() {
    null == this.$m_currentMode$ && (this.$m_currentMode$ = "navigation");
    return this.$m_currentMode$;
  };
  $DvtDataGrid$$.prototype.$_isEditOrEnter$ = function $$DvtDataGrid$$$$$_isEditOrEnter$$() {
    return "edit" === this.$_getCurrentMode$();
  };
  $DvtDataGrid$$.prototype.$_isGridEditable$ = function $$DvtDataGrid$$$$$_isGridEditable$$() {
    var $editMode$$ = this.$_getEditMode$();
    return "cellNavigation" === $editMode$$ || "cellEdit" === $editMode$$ ? !0 : !1;
  };
  $DvtDataGrid$$.prototype.$_isCellEditable$ = function $$DvtDataGrid$$$$$_isCellEditable$$() {
    return "cellEdit" === this.$_getEditMode$() ? !0 : !1;
  };
  $DvtDataGrid$$.prototype.$_handleEditable$ = function $$DvtDataGrid$$$$$_handleEditable$$($event$$198$$, $element$$112$$) {
    this.$_isGridEditable$() ? (this.$m_editMode$ = null, this.$m_setOptionCallback$("editMode", "cellEdit", {_context:{$writeback$:!0, $internalSet$:!0}}), this.$m_utils$.$removeCSSClassName$(this.$m_root$, this.$getMappedStyle$("readOnly")), this.$m_utils$.$addCSSClassName$(this.$m_root$, this.$getMappedStyle$("editable")), this.$_updateEdgeCellBorders$(""), this.$_setAccInfoText$("accessibleEditableMode")) : this.$_handleActionable$(0, $element$$112$$);
    return!1;
  };
  $DvtDataGrid$$.prototype.$_handleExitEditable$ = function $$DvtDataGrid$$$$$_handleExitEditable$$() {
    this.$m_editMode$ = null;
    this.$m_setOptionCallback$("editMode", "cellNavigation", {_context:{$writeback$:!0, $internalSet$:!0}});
    this.$m_utils$.$addCSSClassName$(this.$m_root$, this.$getMappedStyle$("readOnly"));
    this.$m_utils$.$removeCSSClassName$(this.$m_root$, this.$getMappedStyle$("editable"));
    this.$_updateEdgeCellBorders$("none");
    this.$_setAccInfoText$("accessibleNavigationMode");
  };
  $DvtDataGrid$$.prototype.$_handleDataEntry$ = function $$DvtDataGrid$$$$$_handleDataEntry$$($event$$200$$, $element$$114$$) {
    var $details$$18$$;
    $details$$18$$ = {event:$event$$200$$, ui:{cell:$element$$114$$, cellContext:$element$$114$$[this.$m_resources$.$getMappedAttribute$("context")]}};
    this.fireEvent("beforeEdit", $details$$18$$) && (this.$_reRenderCell$($element$$114$$, "edit"), this.$_enableAllFocusableElements$($element$$114$$), this.$_overwriteFlag$ = !0, this.$_setFocusToFirstFocusableElement$($element$$114$$) && (this.$m_utils$.$addCSSClassName$($element$$114$$, this.$getMappedStyle$("cellEdit")), this.$m_currentMode$ = "edit"), this.$_overwriteFlag$ = !1);
    return!1;
  };
  $DvtDataGrid$$.prototype.$_handleExitDataEntry$ = function $$DvtDataGrid$$$$$_handleExitDataEntry$$($event$$201$$, $element$$115$$) {
    return this.$_leaveEditing$($event$$201$$, $element$$115$$, !1);
  };
  $DvtDataGrid$$.prototype.$_handleEdit$ = function $$DvtDataGrid$$$$$_handleEdit$$($event$$202$$, $element$$116$$) {
    var $details$$19_rerender$$1$$;
    $details$$19_rerender$$1$$ = {event:$event$$202$$, ui:{cell:$element$$116$$, cellContext:$element$$116$$[this.$m_resources$.$getMappedAttribute$("context")]}};
    ($details$$19_rerender$$1$$ = this.fireEvent("beforeEdit", $details$$19_rerender$$1$$)) ? (this.$_reRenderCell$($element$$116$$, "edit"), this.$_enableAllFocusableElements$($element$$116$$), this.$_setFocusToFirstFocusableElement$($element$$116$$) && (this.$m_currentMode$ = "edit", this.$m_utils$.$addCSSClassName$($element$$116$$, this.$getMappedStyle$("cellEdit")))) : ($details$$19_rerender$$1$$ = !1, this.$_enterActionableMode$($element$$116$$));
    return $details$$19_rerender$$1$$;
  };
  $DvtDataGrid$$.prototype.$_handleExitEdit$ = function $$DvtDataGrid$$$$$_handleExitEdit$$($event$$203$$, $element$$117$$) {
    return this.$_leaveEditing$($event$$203$$, $element$$117$$, !1);
  };
  $DvtDataGrid$$.prototype.$_handleCancelEdit$ = function $$DvtDataGrid$$$$$_handleCancelEdit$$($event$$204$$, $element$$118$$) {
    return this.$_leaveEditing$($event$$204$$, $element$$118$$, !0);
  };
  $DvtDataGrid$$.prototype.$_leaveEditing$ = function $$DvtDataGrid$$$$$_leaveEditing$$($details$$20_event$$205$$, $element$$119$$, $cancel_rerender$$2$$) {
    $details$$20_event$$205$$ = {event:$details$$20_event$$205$$, ui:{cell:$element$$119$$, cellContext:$element$$119$$[this.$m_resources$.$getMappedAttribute$("context")], cancelEdit:$cancel_rerender$$2$$}};
    $cancel_rerender$$2$$ || (this.$_disableAllFocusableElements$($element$$119$$), this.$_highlightActive$());
    ($cancel_rerender$$2$$ = this.fireEvent("beforeEndEdit", $details$$20_event$$205$$)) ? (this.$m_currentMode$ = "navigation", this.$_disableAllFocusableElements$($element$$119$$), this.$_highlightActive$(), this.$_reRenderCell$($element$$119$$, "navigation"), this.$m_utils$.$removeCSSClassName$($element$$119$$, this.$getMappedStyle$("cellEdit"))) : ($cancel_rerender$$2$$ = !1, this.$_scrollToActive$(this.$m_active$), this.$_enableAllFocusableElements$($element$$119$$), this.$_setFocusToFirstFocusableElement$($element$$119$$));
    return $cancel_rerender$$2$$;
  };
  $DvtDataGrid$$.prototype.$_handleFocusKey$ = function $$DvtDataGrid$$$$$_handleFocusKey$$($event$$206$$, $element$$120_oldActive$$1$$, $keyCode$$5_returnVal$$16$$, $isExtend$$2$$) {
    var $changeFocus$$ = !0, $changeRegions$$1$$ = !0, $editing$$;
    return this.$m_utils$.$containsCSSClassName$($element$$120_oldActive$$1$$, this.$getMappedStyle$("cell")) ? (this.$_isEditOrEnter$() ? ($editing$$ = !0, $changeFocus$$ = this.$_leaveEditing$($event$$206$$, $element$$120_oldActive$$1$$, !1), $changeRegions$$1$$ = !1) : this.$isActionableMode$() && this.$_exitActionableMode$(), $changeFocus$$ ? ($element$$120_oldActive$$1$$ = this.$m_active$, $keyCode$$5_returnVal$$16$$ = this.$handleFocusChange$($keyCode$$5_returnVal$$16$$, $isExtend$$2$$, $event$$206$$, 
    $changeRegions$$1$$), this.$m_utils$.$isTouchDevice$() && $editing$$ && $element$$120_oldActive$$1$$ != this.$m_active$ ? this.$_handleEdit$($event$$206$$, this.$_getActiveElement$()) : $keyCode$$5_returnVal$$16$$) : !0) : this.$handleHeaderFocusChange$($keyCode$$5_returnVal$$16$$, $event$$206$$);
  };
  $DvtDataGrid$$.prototype.$_handleFocusLeft$ = function $$DvtDataGrid$$$$$_handleFocusLeft$$($event$$207$$, $element$$121$$) {
    return this.$_handleFocusKey$($event$$207$$, $element$$121$$, $DvtDataGrid$$.$keyCodes$.$LEFT_KEY$, !1);
  };
  $DvtDataGrid$$.prototype.$_handleFocusRight$ = function $$DvtDataGrid$$$$$_handleFocusRight$$($event$$208$$, $element$$122$$) {
    return this.$_handleFocusKey$($event$$208$$, $element$$122$$, $DvtDataGrid$$.$keyCodes$.$RIGHT_KEY$, !1);
  };
  $DvtDataGrid$$.prototype.$_handleFocusUp$ = function $$DvtDataGrid$$$$$_handleFocusUp$$($event$$209$$, $element$$123$$) {
    return this.$_handleFocusKey$($event$$209$$, $element$$123$$, $DvtDataGrid$$.$keyCodes$.$UP_KEY$, !1);
  };
  $DvtDataGrid$$.prototype.$_handleFocusDown$ = function $$DvtDataGrid$$$$$_handleFocusDown$$($event$$210$$, $element$$124$$) {
    return this.$_handleFocusKey$($event$$210$$, $element$$124$$, $DvtDataGrid$$.$keyCodes$.$DOWN_KEY$, !1);
  };
  $DvtDataGrid$$.prototype.$_handleFocusRowFirst$ = function $$DvtDataGrid$$$$$_handleFocusRowFirst$$($event$$211$$, $element$$125$$) {
    return this.$_handleFocusKey$($event$$211$$, $element$$125$$, $DvtDataGrid$$.$keyCodes$.$PAGEUP_KEY$, !1);
  };
  $DvtDataGrid$$.prototype.$_handleFocusRowLast$ = function $$DvtDataGrid$$$$$_handleFocusRowLast$$($event$$212$$, $element$$126$$) {
    return this.$_handleFocusKey$($event$$212$$, $element$$126$$, $DvtDataGrid$$.$keyCodes$.$PAGEDOWN_KEY$, !1);
  };
  $DvtDataGrid$$.prototype.$_handleFocusColumnFirst$ = function $$DvtDataGrid$$$$$_handleFocusColumnFirst$$($event$$213$$, $element$$127$$) {
    return this.$_handleFocusKey$($event$$213$$, $element$$127$$, $DvtDataGrid$$.$keyCodes$.$HOME_KEY$, !1);
  };
  $DvtDataGrid$$.prototype.$_handleFocusColumnLast$ = function $$DvtDataGrid$$$$$_handleFocusColumnLast$$($event$$214$$, $element$$128$$) {
    return this.$_handleFocusKey$($event$$214$$, $element$$128$$, $DvtDataGrid$$.$keyCodes$.$END_KEY$, !1);
  };
  $DvtDataGrid$$.prototype.$_handleSelectRow$ = function $$DvtDataGrid$$$$$_handleSelectRow$$($event$$215$$, $element$$129$$) {
    var $level$$35_start$$38$$, $elem$$54_end$$9$$, $index$$144$$;
    if (!this.$_isSelectionEnabled$() || !this.$isMultipleSelection$()) {
      return!1;
    }
    if (this.$m_utils$.$containsCSSClassName$($element$$129$$, this.$getMappedStyle$("cell"))) {
      $elem$$54_end$$9$$ = $level$$35_start$$38$$ = $index$$144$$ = this.$m_active$.indexes.row;
    } else {
      if (null == this.$m_active$ || "header" != this.$m_active$.type || "row" != this.$m_active$.axis) {
        return!1;
      }
      $index$$144$$ = this.$m_active$.index;
      $level$$35_start$$38$$ = this.$m_active$.level;
      this.$m_rowHeaderLevelCount$ - 1 === $level$$35_start$$38$$ ? $elem$$54_end$$9$$ = $level$$35_start$$38$$ = $index$$144$$ : ($elem$$54_end$$9$$ = this.$_getActiveElement$(), $level$$35_start$$38$$ = this.$_getAttribute$($elem$$54_end$$9$$.parentNode, "start"), $elem$$54_end$$9$$ = $level$$35_start$$38$$ + this.$_getAttribute$($elem$$54_end$$9$$.parentNode, "extent") - 1);
    }
    this.$_selectEntireRow$($level$$35_start$$38$$, $elem$$54_end$$9$$, $event$$215$$);
    this.$_setAccInfoText$("accessibleRowSelected", {row:$index$$144$$ + 1});
    return!0;
  };
  $DvtDataGrid$$.prototype.$_handleSelectColumn$ = function $$DvtDataGrid$$$$$_handleSelectColumn$$($event$$216$$, $element$$130$$) {
    var $level$$36_start$$39$$, $elem$$55_end$$10$$, $index$$145$$;
    if (!this.$_isSelectionEnabled$() || !this.$isMultipleSelection$() || "cell" != this.$m_options$.$getSelectionMode$()) {
      return!1;
    }
    if (this.$m_utils$.$containsCSSClassName$($element$$130$$, this.$getMappedStyle$("cell"))) {
      $elem$$55_end$$10$$ = $level$$36_start$$39$$ = $index$$145$$ = this.$m_active$.indexes.column;
    } else {
      if (null == this.$m_active$ || "header" != this.$m_active$.type || "column" != this.$m_active$.axis) {
        return!1;
      }
      $index$$145$$ = this.$m_active$.index;
      $level$$36_start$$39$$ = this.$m_active$.level;
      this.$m_columnHeaderLevelCount$ - 1 === $level$$36_start$$39$$ ? $elem$$55_end$$10$$ = $level$$36_start$$39$$ = $index$$145$$ : ($elem$$55_end$$10$$ = this.$_getActiveElement$(), $level$$36_start$$39$$ = this.$_getAttribute$($elem$$55_end$$10$$.parentNode, "start"), $elem$$55_end$$10$$ = $level$$36_start$$39$$ + this.$_getAttribute$($elem$$55_end$$10$$.parentNode, "extent") - 1);
    }
    this.$_selectEntireColumn$($level$$36_start$$39$$, $elem$$55_end$$10$$, $event$$216$$);
    this.$_setAccInfoText$("accessibleColumnSelected", {column:$index$$145$$ + 1});
    return!0;
  };
  $DvtDataGrid$$.prototype.$_handleSelectDiscontiguous$ = function $$DvtDataGrid$$$$$_handleSelectDiscontiguous$$() {
    this.$setDiscontiguousSelectionMode$(!this.$m_discontiguousSelection$);
    return!0;
  };
  $DvtDataGrid$$.prototype.$_handleExtendSelectionLeft$ = function $$DvtDataGrid$$$$$_handleExtendSelectionLeft$$($event$$218$$, $element$$132$$) {
    return this.$_handleFocusKey$($event$$218$$, $element$$132$$, $DvtDataGrid$$.$keyCodes$.$LEFT_KEY$, !0);
  };
  $DvtDataGrid$$.prototype.$_handleExtendSelectionRight$ = function $$DvtDataGrid$$$$$_handleExtendSelectionRight$$($event$$219$$, $element$$133$$) {
    return this.$_handleFocusKey$($event$$219$$, $element$$133$$, $DvtDataGrid$$.$keyCodes$.$RIGHT_KEY$, !0);
  };
  $DvtDataGrid$$.prototype.$_handleExtendSelectionUp$ = function $$DvtDataGrid$$$$$_handleExtendSelectionUp$$($event$$220$$, $element$$134$$) {
    return this.$_handleFocusKey$($event$$220$$, $element$$134$$, $DvtDataGrid$$.$keyCodes$.$UP_KEY$, !0);
  };
  $DvtDataGrid$$.prototype.$_handleExtendSelectionDown$ = function $$DvtDataGrid$$$$$_handleExtendSelectionDown$$($event$$221$$, $element$$135$$) {
    return this.$_handleFocusKey$($event$$221$$, $element$$135$$, $DvtDataGrid$$.$keyCodes$.$DOWN_KEY$, !0);
  };
  $DvtDataGrid$$.prototype.$_handleSortKey$ = function $$DvtDataGrid$$$$$_handleSortKey$$($event$$222$$, $element$$136$$) {
    return "true" == $element$$136$$.getAttribute(this.$m_resources$.$getMappedAttribute$("sortable")) ? (this.$_handleKeyboardSort$($element$$136$$, $event$$222$$), !0) : this.$_handleActionable$(0, $element$$136$$);
  };
  $DvtDataGrid$$.prototype.$_handleNoOp$ = function $$DvtDataGrid$$$$$_handleNoOp$$() {
    return!1;
  };
  $DvtDataGrid$$.prototype.$_handleEat$ = function $$DvtDataGrid$$$$$_handleEat$$() {
    return!0;
  };
  $DvtDataGridKeyboardHandler$$.prototype.$getAction$ = function $$DvtDataGridKeyboardHandler$$$$$getAction$$($event$$225$$, $capabilities$$6$$) {
    var $keyCode$$6$$, $keyCodes$$, $ctrlKey$$3$$, $shiftKey$$3$$, $altKey$$2$$, $cellOrHeader$$1$$, $readOnly$$2$$, $currentMode$$2$$, $activeMove$$, $rowMove$$, $columnSort$$, $selection$$11$$, $selectionMode$$5$$, $multipleSelection$$;
    $keyCode$$6$$ = $event$$225$$.keyCode;
    $ctrlKey$$3$$ = this.grid.$m_utils$.$ctrlEquivalent$($event$$225$$);
    $shiftKey$$3$$ = $event$$225$$.shiftKey;
    $altKey$$2$$ = $event$$225$$.altKey;
    $keyCodes$$ = $DvtDataGrid$$.$keyCodes$;
    $cellOrHeader$$1$$ = $capabilities$$6$$.cellOrHeader;
    $readOnly$$2$$ = $capabilities$$6$$.readOnly;
    $currentMode$$2$$ = $capabilities$$6$$.currentMode;
    $activeMove$$ = $capabilities$$6$$.activeMove;
    $rowMove$$ = $capabilities$$6$$.rowMove;
    $columnSort$$ = $capabilities$$6$$.columnSort;
    $selection$$11$$ = $capabilities$$6$$.selection;
    $selectionMode$$5$$ = $capabilities$$6$$.selectionMode;
    $multipleSelection$$ = $capabilities$$6$$.multipleSelection;
    switch($keyCode$$6$$) {
      case $keyCodes$$.$TAB_KEY$:
        if ("actionable" === $currentMode$$2$$) {
          return $shiftKey$$3$$ ? "TAB_PREV_IN_CELL" : "TAB_NEXT_IN_CELL";
        }
        if (!$readOnly$$2$$) {
          return $shiftKey$$3$$ ? "FOCUS_LEFT" : "FOCUS_RIGHT";
        }
        break;
      case $keyCodes$$.$ENTER_KEY$:
        if ("column" === $cellOrHeader$$1$$ && $columnSort$$) {
          return "SORT";
        }
        if (!$altKey$$2$$ && $readOnly$$2$$ && "navigation" === $currentMode$$2$$) {
          return "ACTIONABLE";
        }
        if ($readOnly$$2$$ || $altKey$$2$$) {
          if ($altKey$$2$$ && $readOnly$$2$$ && "navigation" === $currentMode$$2$$) {
            return "EDITABLE";
          }
          if (!$readOnly$$2$$ && ("navigation" == $currentMode$$2$$ || "edit" === $currentMode$$2$$)) {
            return "EDIT";
          }
        } else {
          return $shiftKey$$3$$ ? "FOCUS_UP" : "FOCUS_DOWN";
        }
        break;
      case $keyCodes$$.$ESC_KEY$:
        if ("actionable" === $currentMode$$2$$) {
          return "EXIT_ACTIONABLE";
        }
        if ($activeMove$$) {
          return "CANCEL_REORDER";
        }
        if (!$readOnly$$2$$) {
          if ("navigation" === $currentMode$$2$$) {
            return "EXIT_EDITABLE";
          }
          if ("edit" === $currentMode$$2$$) {
            return "CANCEL_EDIT";
          }
        }
        break;
      case $keyCodes$$.$SPACE_KEY$:
        if ("row" === $cellOrHeader$$1$$ && $selection$$11$$ && ("cell" == $selectionMode$$5$$ && $multipleSelection$$ || "row" == $selectionMode$$5$$)) {
          return "SELECT_ROW";
        }
        if ("column" === $cellOrHeader$$1$$ && $selection$$11$$ && "cell" == $selectionMode$$5$$ && $multipleSelection$$) {
          return "SELECT_COLUMN";
        }
        if ("cell" === $cellOrHeader$$1$$) {
          if ($readOnly$$2$$ && "navigation" === $currentMode$$2$$) {
            if ($ctrlKey$$3$$ && $selection$$11$$ && "cell" == $selectionMode$$5$$ && $multipleSelection$$) {
              return "SELECT_COLUMN";
            }
            if ($shiftKey$$3$$ && $selection$$11$$ && ("cell" == $selectionMode$$5$$ && $multipleSelection$$ || "row" == $selectionMode$$5$$)) {
              return "SELECT_ROW";
            }
          } else {
            if ("navigation" === $currentMode$$2$$) {
              return "DATA_ENTRY";
            }
          }
        }
        break;
      case $keyCodes$$.$PAGEUP_KEY$:
        if ("edit" !== $currentMode$$2$$) {
          return "FOCUS_ROW_FIRST";
        }
        break;
      case $keyCodes$$.$PAGEDOWN_KEY$:
        if ("edit" !== $currentMode$$2$$) {
          return "FOCUS_ROW_LAST";
        }
        break;
      case $keyCodes$$.$END_KEY$:
        if ("edit" !== $currentMode$$2$$) {
          return "FOCUS_COLUMN_LAST";
        }
        break;
      case $keyCodes$$.$HOME_KEY$:
        if ("edit" !== $currentMode$$2$$) {
          return "FOCUS_COLUMN_FIRST";
        }
        break;
      case $keyCodes$$.$LEFT_KEY$:
        if ("actionable" === $currentMode$$2$$) {
          break;
        } else {
          if ("edit" !== $currentMode$$2$$) {
            return $shiftKey$$3$$ && $selection$$11$$ && "cell" == $selectionMode$$5$$ && $multipleSelection$$ ? "SELECT_EXTEND_LEFT" : "FOCUS_LEFT";
          }
        }
        break;
      case $keyCodes$$.$UP_KEY$:
        if ("actionable" === $currentMode$$2$$) {
          break;
        } else {
          if ("edit" !== $currentMode$$2$$) {
            return $shiftKey$$3$$ && $selection$$11$$ && $multipleSelection$$ ? "SELECT_EXTEND_UP" : "FOCUS_UP";
          }
        }
        break;
      case $keyCodes$$.$RIGHT_KEY$:
        if ("actionable" === $currentMode$$2$$) {
          break;
        } else {
          if ("edit" !== $currentMode$$2$$) {
            return $shiftKey$$3$$ && $selection$$11$$ && "cell" == $selectionMode$$5$$ && $multipleSelection$$ ? "SELECT_EXTEND_RIGHT" : "FOCUS_RIGHT";
          }
        }
        break;
      case $keyCodes$$.$DOWN_KEY$:
        if ("actionable" === $currentMode$$2$$) {
          break;
        } else {
          if ("edit" !== $currentMode$$2$$) {
            return $shiftKey$$3$$ && $selection$$11$$ && $multipleSelection$$ ? "SELECT_EXTEND_DOWN" : "FOCUS_DOWN";
          }
        }
        break;
      case $keyCodes$$.$F2_KEY$:
        if ("cell" != $cellOrHeader$$1$$) {
          return "ACTIONABLE";
        }
        if ($readOnly$$2$$ && "navigation" === $currentMode$$2$$) {
          return "EDITABLE";
        }
        if (!$readOnly$$2$$ && ("navigation" == $currentMode$$2$$ || "edit" === $currentMode$$2$$)) {
          return "EDIT";
        }
        break;
      case $keyCodes$$.$F8_KEY$:
        if ($shiftKey$$3$$ && $selection$$11$$ && $multipleSelection$$) {
          return "SELECT_DISCONTIGUOUS";
        }
        break;
      case $keyCodes$$.$F10_KEY$:
        if ($shiftKey$$3$$) {
          break;
        }
        break;
      case $keyCodes$$.$V_KEY$:
        if ("navigation" === $currentMode$$2$$ && $ctrlKey$$3$$ && $rowMove$$) {
          return "PASTE";
        }
        if (!$readOnly$$2$$ && "navigation" === $currentMode$$2$$) {
          return "DATA_ENTRY";
        }
        break;
      case $keyCodes$$.$X_KEY$:
        if ("navigation" === $currentMode$$2$$ && $ctrlKey$$3$$ && $rowMove$$) {
          return "CUT";
        }
        if (!$readOnly$$2$$ && "navigation" === $currentMode$$2$$) {
          return "DATA_ENTRY";
        }
        break;
      case $keyCodes$$.$SHIFT_KEY$:
      ;
      case $keyCodes$$.$CTRL_KEY$:
      ;
      case $keyCodes$$.$ALT_KEY$:
        break;
      case $keyCodes$$.$NUM5_KEY$:
        if ($ctrlKey$$3$$ && $altKey$$2$$) {
          return "READ_CELL";
        }
      ;
      default:
        if (!$readOnly$$2$$ && "navigation" === $currentMode$$2$$ && "cell" == $cellOrHeader$$1$$) {
          return "DATA_ENTRY";
        }
      ;
    }
    return "NO_OP";
  };
});
